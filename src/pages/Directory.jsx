import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import './Directory.css';

export default function Directory() {
  const { villagers } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = villagers.filter(v => 
    v.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    v.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="directory-page px-6">
      <header className="page-header">
        <h1 className="hero-title text-outline">Villager Directory</h1>
        <p className="hero-subtitle">Discover the people who make our community thrive.</p>
        
        <input 
          type="text" 
          placeholder="Search by name or role..." 
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <div className="directory-grid">
        {filtered.map(v => (
          <Link key={v.id} to={`/profile/${v.id}`} className="directory-card">
            <div className="card-avatar">{v.name.charAt(0)}</div>
            <div className="card-info">
              <h3 className="card-name">{v.name}</h3>
              <p className="card-role">{v.role}</p>
              <span className="card-tag">Age {v.age}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
