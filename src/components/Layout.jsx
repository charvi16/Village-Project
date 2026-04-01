import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <NavBar />
      <SideBar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
