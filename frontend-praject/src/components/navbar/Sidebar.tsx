import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import { cilHome, cilGroup, cilFolder, cilCalendar, cilFile, cilChartPie, cilMenu, cilRoom, cilDollar, cilSettings } from '@coreui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.scss';

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmployeeMenuOpen, setIsEmployeeMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleEmployeeMenu = () => {
    setIsEmployeeMenuOpen(!isEmployeeMenuOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

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

          <div className="sidebar-teams">
            <h2 className="teams-header">MAIN</h2>
            <ul className="team-list">
              <li className='sidebar-item'>
                <Link to="/tables" className="sidebar-link" >
                  <CIcon icon={cilRoom} className="c-icon" />
                  {!isCollapsed && <span className="ml-3">การจัดการโต๊ะ</span>}
                </Link>
              </li>

              <li className='sidebar-item'>
                <Link to="#" className="sidebar-link">
                  <CIcon icon={cilDollar} className="c-icon" />
                  {!isCollapsed && <span className="ml-3">สั่งเเละชำระเงิน</span>}
                </Link>
              </li>
            </ul>
          </div>

          <div className="sidebar-teams">
            <h2 className="teams-header">MENU</h2>
            <ul className="team-list">
              <li className={`sidebar-item ${isMenuOpen ? 'open' : ''}`}>
                <a href="#" className="sidebar-link" onClick={toggleMenu}>
                  <CIcon icon={cilMenu} className="c-icon" />
                  {!isCollapsed && <span className="ml-3">เพิ่มเมนู</span>}
                  {!isCollapsed && (
                    <FontAwesomeIcon icon={faAngleDown} className={`dropdown-icon ${isMenuOpen ? 'open' : ''}`} />
                  )}
                </a>
                {isMenuOpen && (
                  <ul className={`sub-menu ${isCollapsed ? 'side-expanded' : ''}`}>
                    <li className="sidebar-item">
                      <Link to="/menu/menu" className="sidebar-link">
                        <span className="ml-3">เมนูอาหาร</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/menu/choice" className="sidebar-link">
                        <span className="ml-3">ตัวเลือก</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/menu/category" className="sidebar-link">
                        <span className="ml-3">ประเภทอาหาร</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>


            </ul><li className={`sidebar-item ${isEmployeeMenuOpen ? 'open' : ''}`}>
              <a href="#" className="sidebar-link" onClick={toggleEmployeeMenu}>
                <CIcon icon={cilMenu} className="c-icon" />
                {!isCollapsed && <span className="ml-3">เพิ่มข้อมูลพนักงาน</span>}
                {!isCollapsed && (
                  <FontAwesomeIcon icon={faAngleDown} className={`dropdown-icon ${isEmployeeMenuOpen ? 'open' : ''}`} />
                )}
              </a>
              {isEmployeeMenuOpen && (
                <ul className={`sub-menu ${isCollapsed ? 'side-expanded' : ''}`}>
                  <li className="sidebar-item">
                    <Link to="/employee-info" className="sidebar-link">
                      <span className="ml-3">ข้อมูลพนักงาน</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </div>

          <div className="sidebar-teams">
            <h2 className="teams-header">Your teams</h2>
            <ul className="team-list">
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
            </ul>
          </div>

          <div className="sidebar-teams">
            <h2 className="teams-header">SETTING</h2>
            <li className={`sidebar-item ${isSettingsOpen ? 'open' : ''}`}>
              <a href="#" className="sidebar-link" onClick={toggleSettings}>
                <CIcon icon={cilSettings} className="c-icon" />
                {!isCollapsed && <span className="ml-3">การตั้งค่า</span>}
                {!isCollapsed && (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={`dropdown-icon ${isSettingsOpen ? 'open' : ''}`}
                  />
                )}
              </a>
              {isSettingsOpen && (
                <ul className={`sub-menu ${isCollapsed ? 'side-expanded' : ''}`}>
                  <li className="sidebar-item">
                    <Link to="/setting/setting-tables" className="sidebar-link">
                      <span className="ml-3">จัดการโต๊ะ</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </div>



        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
