import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content max-w-7xl px-6">
        <div className="footer-brand">
          <span className="footer-logo">Gramya Sangam</span>
          <p className="footer-copyright">© 2024 Gramya Sangam. Preserving Heritage, Empowering Futures.</p>
        </div>
        <div className="footer-links">
          <Link to="#" className="footer-link">Privacy Policy</Link>
          <Link to="#" className="footer-link">Terms of Service</Link>
          <Link to="/directory" className="footer-link">Village Directory</Link>
          <Link to="#" className="footer-link">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
