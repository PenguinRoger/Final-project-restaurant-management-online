import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Setting-Table.scss';

const SettingTablesPage: React.FC = () => {
  const [tableCount, setTableCount] = useState<number>(() => {
    // เมื่อ component ถูกโหลดขึ้นมา จะเช็คค่าจาก localStorage ก่อน
    const savedTableCount = localStorage.getItem('tableCount');
    return savedTableCount ? Number(savedTableCount) : 12; // ถ้าไม่มีค่าใน localStorage ให้ใช้ค่าเริ่มต้น 12
  });

  const [isToggled, setIsToggled] = useState<boolean>(false); 
  const [isEditPopupOpen, setIsEditPopupOpen] = useState<boolean>(false); 
  const [editTableCount, setEditTableCount] = useState<number>(tableCount);

  const handleSave = () => {
    localStorage.setItem('tableCount', tableCount.toString());
  };

  const handleToggleChange = () => {
    setIsToggled(!isToggled);
  };

  const handleEditClick = () => {
    setEditTableCount(tableCount);
    setIsEditPopupOpen(true);
  };

  const handleEditSave = () => {
    setTableCount(editTableCount);
    setIsEditPopupOpen(false);
  };

  const handleEditTableCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTableCount(Number(event.target.value));
  };

  const deleteChoice = (_index: number) => {
    setTableCount(0);
  };

  return (
    <div className="setting-table-page">
      <div className="setting-header">
        <h1>จัดการโต๊ะ</h1>
        <div className="toggle-switch">
          <input
            type="checkbox"
            id="toggle"
            className="toggle-input"
            checked={isToggled}
            onChange={handleToggleChange}
          />
          <label htmlFor="toggle" className="toggle-label"></label>
        </div>
      </div>
      <p className="setting-description">
        กำหนดจำนวนโต๊ะที่ต้องการแสดงในหน้า Tables
      </p>
      {isToggled && (
        <div className="additional-settings">
          <div className="settings-row">
            <span>ชื่อพื้นที่</span>
            <span>จำนวนโต๊ะ</span>
          </div>
          <div className="settings-row">
            <span>โต๊ะ: 
              <button className="edit-btn" onClick={handleEditClick}>
                <FontAwesomeIcon icon={faPen} />
              </button>
            </span>
            <span>{tableCount}</span>
            <button className="delete-btn" onClick={() => deleteChoice(tableCount)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          <button className="create-btn">สร้างพื้นที่ใหม่</button>
        </div>
      )}
      <button className="save-btn" onClick={handleSave}>บันทึก</button>

      {isEditPopupOpen && (
        <div className="edit-popup-overlay">
          <div className="edit-popup">
            <h2>แก้ไขจำนวนโต๊ะ</h2>
            <input
              type="number"
              value={editTableCount}
              onChange={handleEditTableCountChange}
              min={1}
            />
            <div className="popup-actions">
              <button onClick={() => setIsEditPopupOpen(false)} className="cancel-btn">ยกเลิก</button>
              <button onClick={handleEditSave} className="save-btn">บันทึก</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingTablesPage;
