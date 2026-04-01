import React from 'react';
import './GramSabha.css';

export default function GramSabha() {
  const meetings = [
    { id: 1, date: 'Oct 25, 2026', time: '10:00 AM', agenda: 'Baisakhi Mela Final Review', status: 'Upcoming' },
    { id: 2, date: 'Sep 10, 2026', time: '02:00 PM', agenda: 'Water Pipe Budget Allocation', status: 'Completed' },
    { id: 3, date: 'Aug 15, 2026', time: '09:00 AM', agenda: 'Independence Day & Scholarship Awards', status: 'Completed' },
  ];

  return (
    <div className="sabha-page px-6">
      <header className="page-header text-center">
        <h1 className="hero-title text-outline">Gram Sabha Forum</h1>
        <p className="hero-subtitle mx-auto">The democratic heartbeat of our village. Have your say.</p>
      </header>

      <div className="sabha-content">
        <section className="sabha-section relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="section-title text-outline">Meeting Schedule</h2>
            <button className="btn-primary">Propose Agenda</button>
          </div>
          
          <div className="table-responsive">
            <table className="sabha-table">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Primary Agenda</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {meetings.map(m => (
                  <tr key={m.id} className={m.status === 'Upcoming' ? 'row-upcoming' : ''}>
                    <td>
                      <span className="font-bold block">{m.date}</span>
                      <span className="text-sm opacity-80">{m.time}</span>
                    </td>
                    <td className="font-headline text-outline" style={{ fontSize: '1.125rem' }}>{m.agenda}</td>
                    <td>
                      <span className={`status-badge ${m.status.toLowerCase()}`}>
                        {m.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn-secondary-outline">View Minutes</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
