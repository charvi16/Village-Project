import http from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, 'data');
const PORT = Number(process.env.PORT || 4000);
const HOST = process.env.HOST || 'localhost';

const jsonHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': process.env.CORS_ORIGIN || 'http://localhost:5173',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function dataPath(name) {
  return join(DATA_DIR, `${name}.json`);
}

async function readJson(name) {
  const content = await readFile(dataPath(name), 'utf8');
  return JSON.parse(content);
}

async function writeJson(name, data) {
  await writeFile(dataPath(name), `${JSON.stringify(data, null, 2)}\n`);
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, jsonHeaders);
  res.end(JSON.stringify(payload));
}

function sendError(res, statusCode, message, details) {
  sendJson(res, statusCode, { error: message, details });
}

async function parseBody(req) {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  if (chunks.length === 0) {
    return {};
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    const error = new Error('Request body must be valid JSON.');
    error.statusCode = 400;
    throw error;
  }
}

function validateIssue(input) {
  const issueType = String(input.issueType || '').trim();
  const description = String(input.description || '').trim();
  const location = String(input.location || '').trim();

  if (!issueType) {
    return { error: 'Issue category is required.' };
  }

  if (!description || description.length < 10) {
    return { error: 'Issue description must be at least 10 characters.' };
  }

  return {
    value: {
      issueType,
      location,
      description,
      status: 'Submitted',
    },
  };
}

async function handleGet(reqUrl, res) {
  if (reqUrl.pathname === '/api/health') {
    return sendJson(res, 200, { ok: true, service: 'village-api' });
  }

  if (reqUrl.pathname === '/api/villagers') {
    const villagers = await readJson('villagers');
    return sendJson(res, 200, villagers);
  }

  const villagerMatch = reqUrl.pathname.match(/^\/api\/villagers\/(\d+)$/);
  if (villagerMatch) {
    const villagers = await readJson('villagers');
    const villager = villagers.find((item) => item.id === Number(villagerMatch[1]));

    if (!villager) {
      return sendError(res, 404, 'Villager not found.');
    }

    return sendJson(res, 200, villager);
  }

  if (reqUrl.pathname === '/api/news') {
    const news = await readJson('news');
    return sendJson(res, 200, news);
  }

  if (reqUrl.pathname === '/api/meetings') {
    const meetings = await readJson('meetings');
    return sendJson(res, 200, meetings);
  }

  if (reqUrl.pathname === '/api/issues') {
    const issues = await readJson('issues');
    return sendJson(res, 200, issues);
  }

  return sendError(res, 404, 'Route not found.');
}

async function handlePost(reqUrl, req, res) {
  if (reqUrl.pathname !== '/api/issues') {
    return sendError(res, 404, 'Route not found.');
  }

  const body = await parseBody(req);
  const validation = validateIssue(body);

  if (validation.error) {
    return sendError(res, 422, validation.error);
  }

  const issues = await readJson('issues');
  const now = new Date().toISOString();
  const issue = {
    id: issues.length > 0 ? Math.max(...issues.map((item) => item.id)) + 1 : 1,
    ...validation.value,
    createdAt: now,
    updatedAt: now,
  };

  issues.push(issue);
  await writeJson('issues', issues);

  return sendJson(res, 201, issue);
}

const server = http.createServer(async (req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (req.method === 'OPTIONS') {
    res.writeHead(204, jsonHeaders);
    res.end();
    return;
  }

  try {
    if (req.method === 'GET') {
      await handleGet(reqUrl, res);
      return;
    }

    if (req.method === 'POST') {
      await handlePost(reqUrl, req, res);
      return;
    }

    sendError(res, 405, 'Method not allowed.');
  } catch (error) {
    sendError(res, error.statusCode || 500, error.message || 'Unexpected server error.');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Village API listening on http://${HOST}:${PORT}`);
});
