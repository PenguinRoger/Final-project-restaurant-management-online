import React, { useState } from 'react';
import './Category.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const Category: React.FC = () => {
  const [categories, setCategories] = useState([
    'เมนูประจำร้าน',
    'เมนูประจำฤดูกาล',
    'ราคาพิเศษเฉพาะ LINE MAN เท่านั้น!!',
    'ขนมหวาน'
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility
  const [newCategory, setNewCategory] = useState(''); // State to store new category name

  const addCategory = () => {
    setCategories([...categories, newCategory]);
    setIsPopupOpen(false); // Close the popup after adding
    setNewCategory(''); // Clear the input
  };

  const deleteCategory = (index: number) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  const updateCategory = (index: number, value: string) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = value;
    setCategories(updatedCategories);
  };

  const saveCategories = () => {
    // Implement the save logic here
    console.log('Categories saved:', categories);
  };

  return (
    <div className="category-page">
      <h1>ประเภท</h1>
      <div className="category-controls">
        <button className="add-category-btn" onClick={() => setIsPopupOpen(true)}>+ เพิ่มประเภท</button>
        
      </div>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-drag-handle">::</div>
            <input
              type="text"
              value={category}
              onChange={(e) => updateCategory(index, e.target.value)}
              className="category-input"
              placeholder="แก้ไขประเภท"
            />
            <button className="edit-btn">
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button className="delete-btn" onClick={() => deleteCategory(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>เพิ่มประเภทใหม่</h2>
            <input
              type="text"
              placeholder="ชื่อประเภท"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              maxLength={200}
            />
            <div className="popup-actions">
              <button onClick={() => setIsPopupOpen(false)} className="cancel-btn">ยกเลิก</button>
              <button onClick={addCategory} className="save-btn">บันทึก</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
