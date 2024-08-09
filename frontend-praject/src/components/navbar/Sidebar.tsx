// src/components/navbar/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import {
  cilHome,
  cilGroup,
  cilFolder,
  cilCalendar,
  cilFile,
  cilChartPie,
  cilSettings,
} from '@coreui/icons';
import './Sidebar.scss';

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">{isCollapsed ? <CIcon icon={cilHome} size="lg" /> : 'Logo'}</div>
      </div>
      <nav className="sidebar-nav">
        <ul className="sidebar-list">

          <li className="sidebar-item">
            <Link to="/dashboard" className="sidebar-link">
              <CIcon icon={cilHome} className="c-icon" />
              {!isCollapsed && <span className="ml-3">Dashboard</span>}
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/team" className="sidebar-link">
              <CIcon icon={cilGroup} className="c-icon" />
              {!isCollapsed && <span className="ml-3">Team</span>}
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/projects" className="sidebar-link">
              <CIcon icon={cilFolder} className="c-icon" />
              {!isCollapsed && <span className="ml-3">Projects</span>}
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/calendar" className="sidebar-link">
              <CIcon icon={cilCalendar} className="c-icon" />
              {!isCollapsed && <span className="ml-3">Calendar</span>}
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/documents" className="sidebar-link">
              <CIcon icon={cilFile} className="c-icon" />
              {!isCollapsed && <span className="ml-3">Documents</span>}
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/reports" className="sidebar-link">
              <CIcon icon={cilChartPie} className="c-icon" />
              {!isCollapsed && <span className="ml-3">Reports</span>}
            </Link>
          </li>
          <li className="sidebar-footer">
            <Link to="/settings" className="sidebar-link">
              <CIcon icon={cilSettings} className="c-icon" />
              {!isCollapsed && <span className="ml-3">Settings</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
