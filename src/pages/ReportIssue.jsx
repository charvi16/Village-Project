import React, { useState } from 'react';
import './ReportIssue.css';

export default function ReportIssue() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="report-page px-6">
      <header className="page-header text-center">
        <h1 className="hero-title text-outline">Report an Issue</h1>
        <p className="hero-subtitle mx-auto">Help keep Gramya Sangam safe and functioning. Report problems directly to the Panchayat.</p>
      </header>

      <div className="report-form-container">
        {submitted ? (
          <div className="success-message">
            <span className="material-symbols-outlined success-icon">check_circle</span>
            <h2 className="success-title">Report Submitted Successfully</h2>
            <p>The Village Council will review your report shortly. Thank you for maintaining our community.</p>
          </div>
        ) : (
          <form className="report-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="issueType" className="form-label">Issue Category</label>
              <select id="issueType" className="form-input" required>
                <option value="">Select a category...</option>
                <option value="water">Water Supply</option>
                <option value="electricity">Electricity</option>
                <option value="roads">Road Maintenance</option>
                <option value="disputes">Community Dispute</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location" className="form-label">Specific Location (Optional)</label>
              <input type="text" id="location" className="form-input" placeholder="e.g. Near the banyan tree, Main Road..." />
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">Issue Description</label>
              <textarea id="description" className="form-textarea" rows="5" placeholder="Please describe the issue in detail..." required></textarea>
            </div>

            <button type="submit" className="btn-primary form-submit">Submit to Council</button>
          </form>
        )}
      </div>
    </div>
  );
}
