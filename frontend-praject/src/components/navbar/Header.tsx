import React from 'react';
import './Header.scss';
import CIcon from '@coreui/icons-react';
import { cilMenu, cilBell } from '@coreui/icons';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarCollapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarCollapsed }) => {
  return (
    <header className={`header ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="left-container">
        <button className="menu-button" onClick={toggleSidebar}>
          <CIcon icon={cilMenu} className="c-icon" />
        </button>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>
      </div>
      <div className="actions-container">
        <button className="notification-button">
          <CIcon icon={cilBell} className="c-icon" />
        </button>
        <div className="user-profile">
          <img
            className="user-image"
            src="https://via.placeholder.com/150"
            alt="User"
          />
          <span className="user-name">Tom Cook</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
