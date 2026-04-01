import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User } from 'lucide-react';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-content max-w-7xl px-6">
        <Link to="/" className="navbar-logo">Gramya Sangam</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link active">Dashboard</Link>
          <Link to="/directory" className="nav-link">Villagers</Link>
          <Link to="/family-tree" className="nav-link">Heritage</Link>
          <Link to="/gram-sabha" className="nav-link">Gram Sabha</Link>
          <Link to="/report" className="nav-link">Report</Link>
        </div>
        <div className="navbar-actions">
          <button className="btn-lang">हिन्दी / EN</button>
          <button className="icon-btn"><Bell size={20} /></button>
          <button className="icon-btn"><User size={20} /></button>
        </div>
      </div>
    </nav>
  );
}
