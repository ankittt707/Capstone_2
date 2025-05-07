// src/pages/LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to TaskFlow</h1>
        <p>Your simple, beautiful workspace to manage tasks, chat, share files, and stay on schedule.</p>
        <a href="/tasks" className="cta-button">Get Started</a>
      </div>
    </div>
  );
};

export default LandingPage;
