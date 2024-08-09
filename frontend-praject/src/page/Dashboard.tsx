// src/page/Dashboard.tsx
import React from 'react';
import './Dashboard.scss'; 

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Welcome to the Dashboard</h1>
        <p>This is the main content area. You can add your widgets and other dashboard components here.</p>
      </div>
    </div>
  );
};

export default Dashboard;
