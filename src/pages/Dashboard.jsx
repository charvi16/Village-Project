import React from 'react';
import { useAppContext } from '../context/AppContext';
import './Dashboard.css';

export default function Dashboard() {
  const { news, villagers } = useAppContext();

  return (
    <div className="dashboard px-6">
      {/* Hero Section */}
      <header className="hero-section hero-gradient">
        <div className="hero-content">
          <h1 className="hero-title">Village Commons</h1>
          <p className="hero-subtitle">A digital town square for our shared journey—keeping the pulse of the village's history and its vibrant present.</p>
        </div>
      </header>

      {/* Grid Layout */}
      <div className="dashboard-grid">
        {/* News Column */}
        <div className="news-column">
          <section className="news-section">
            <div className="section-header">
              <div>
                <span className="section-tag">Latest Chronicles</span>
                <h2 className="section-title">Village News</h2>
              </div>
              <a href="#" className="view-all">Full Archive →</a>
            </div>
            
            <div className="news-cards">
              {news.map(item => (
                <div key={item.id} className="news-card">
                  <span className="news-category">{item.category}</span>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Remembrance */}
          <section className="remembrance-section">
            <div className="flex-header">
              <span className="material-symbols-outlined icon-spacing">auto_stories</span>
              <h2 className="section-title">In Loving Remembrance</h2>
            </div>
            <div className="remembrance-list">
              <div className="remembrance-card highlighted">
                <div>
                  <h4 className="card-title">Vaidya Rajesh's Memorial</h4>
                  <p className="card-desc">The village's healer for four decades.</p>
                </div>
                <div className="card-date">
                  <span>Monday</span>
                  <strong>Oct 14</strong>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="sidebar-column">
          <section className="birthdays-section relative">
            <h2 className="section-title text-outline mb-6">Village Birthdays</h2>
            <div className="birthday-list">
              {villagers.slice(1).map(v => (
                <div key={v.id} className="birthday-card">
                  <div className="avatar-placeholder">{v.age}</div>
                  <div>
                    <p className="font-bold text-outline">{v.name}</p>
                    <p className="text-sm sub-outline">This Week</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-primary w-full mt-6">Send a Greeting</button>
          </section>
          
          <section className="stats-section relative text-white">
            <h3 className="section-title text-secondary mb-4">Our Legacy Growing</h3>
            <div className="stats-grid">
              <div className="stat-box">
                <strong>{villagers.length}</strong>
                <span>Villagers</span>
              </div>
              <div className="stat-box">
                <strong>4.2k</strong>
                <span>Archive Items</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
