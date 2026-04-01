import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { ChevronLeft } from 'lucide-react';
import './Profile.css';

export default function Profile() {
  const { id } = useParams();
  const { villagers } = useAppContext();
  const profile = villagers.find(v => v.id.toString() === id);

  if (!profile) {
    return <div className="px-6 py-12">Villager not found</div>;
  }

  return (
    <div className="profile-page px-6">
      <Link to="/directory" className="back-link">
        <ChevronLeft size={20} />
        Back to Directory
      </Link>

      <div className="profile-header">
        <div className="profile-avatar-large">
          {profile.name.charAt(0)}
        </div>
        <div className="profile-title-area">
          <h1 className="hero-title">{profile.name}</h1>
          <p className="profile-role">{profile.role}</p>
          <div className="profile-meta">
            <span className="meta-tag">Age: {profile.age}</span>
            <span className="meta-tag">Born in Village</span>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <section className="profile-section">
          <h2 className="section-title">Biography</h2>
          <p className="profile-bio">
            {profile.name} has been an integral part of Gramya Sangam for many years, dedicating their life to serving the community as a {profile.role}. Their contributions have shaped the village's vibrant history and continued prosperity.
          </p>
        </section>

        <section className="profile-section">
          <h2 className="section-title">Recent Contributions</h2>
          <div className="contribution-list">
            <div className="contribution-item">
              <strong>Organized Village Festival</strong>
              <span>Last month</span>
            </div>
            <div className="contribution-item">
              <strong>Community Workshop</strong>
              <span>3 months ago</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
