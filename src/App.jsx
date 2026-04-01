import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Directory from './pages/Directory';
import Profile from './pages/Profile';
import FamilyTree from './pages/FamilyTree';
import GramSabha from './pages/GramSabha';
import ReportIssue from './pages/ReportIssue';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/family-tree" element={<FamilyTree />} />
            <Route path="/gram-sabha" element={<GramSabha />} />
            <Route path="/report" element={<ReportIssue />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
