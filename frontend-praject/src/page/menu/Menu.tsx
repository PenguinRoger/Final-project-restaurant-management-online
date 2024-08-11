import React, { useState } from 'react';
import './Menu.scss'; // Import the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTable, faEdit } from '@fortawesome/free-solid-svg-icons';

const Menu: React.FC = () => {
  const [menus, setMenus] = useState([
    'เมนูประจำร้าน',
    'เมนูประจำฤดูกาล',
    'ราคาพิเศษเฉพาะ LINE MAN เท่านั้น!!',
    'ขนมหวาน',
  ]);

  const addMenu = () => {
    setMenus([...menus, 'เมนูใหม่']);
  };

  const saveMenus = () => {
    // Implement the save logic here
    console.log('Menus saved:', menus);
  };

  return (
    <div className="menu-page">
      <h1>เมนูอาหาร</h1>
      <div className="menu-controls">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="ค้นหาเมนู" />
        </div>
        <div className="button-group">
          <button className="control-btn">
            <FontAwesomeIcon icon={faTable} />
            ช่องทางการขาย
          </button>
          <button className="control-btn">
            <FontAwesomeIcon icon={faEdit} />
            แก้ไขตารางเมนู
          </button>
          <button className="add-menu-btn" onClick={addMenu}>+ เพิ่มเมนู</button>
        </div>
      </div>
      <div className="menu-list">
        {menus.map((menu, index) => (
          <div key={index} className="menu-item">
            <span>{menu}</span>
          </div>
        ))}
      </div>
      <button className="save-btn" onClick={saveMenus}>บันทึก</button>
    </div>
  );
};

export default Menu;
