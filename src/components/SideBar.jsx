import React from 'react';
import { Users, Shield, Gavel, MessageSquare, AlertTriangle, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import './SideBar.css';

export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-avatar">
          <span className="material-symbols-outlined">account_balance</span>
        </div>
        <div className="sidebar-title-box">
          <h3 className="sidebar-title">Panchayat Office</h3>
          <p className="sidebar-subtitle">Admin Dashboard</p>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link active">
          <Users size={18} />
          <span>Community Management</span>
        </Link>
        <Link to="/directory" className="sidebar-link">
          <Shield size={18} />
          <span>Administrative</span>
        </Link>
        <Link to="/family-tree" className="sidebar-link">
          <Gavel size={18} />
          <span>Village Council</span>
        </Link>
        <Link to="/gram-sabha" className="sidebar-link">
          <MessageSquare size={18} />
          <span>Gram Sabha</span>
        </Link>
      </nav>
      
      <div className="sidebar-footer">
        <Link to="/report" className="btn-report" style={{ display: 'inline-block', textAlign: 'center' }}>
          Report Issue
        </Link>
        <div className="sidebar-contact">
          <Link to="#" className="contact-link">
            <HeadphonesIcon size={14} />
            <span>Contact Council</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
