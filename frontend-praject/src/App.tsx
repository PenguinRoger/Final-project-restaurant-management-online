import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/navbar/Header';
import Sidebar from './components/navbar/Sidebar';
import AppContent from './components/AppContent';
import './App.css';

const App: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <Router>
      <div className={`app-container ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <div className={`main-content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <Header toggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />
          <Suspense fallback={<div>Loading...</div>}>
            <AppContent />
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
