import React, { useState } from 'react';
import './Category.scss'; // Import the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const Category: React.FC = () => {
  const [categories, setCategories] = useState([
    'เมนูประจำร้าน',
    'เมนูประจำฤดูกาล',
    'ราคาพิเศษเฉพาะ LINE MAN เท่านั้น!!',
    'ขนมหวาน'
  ]);

  const addCategory = () => {
    setCategories([...categories, '']);
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
      <h1>หมวดหมู่</h1>
      <div className="category-controls">
        <button className="add-category-btn" onClick={addCategory}>+ เพิ่มหมวดหมู่</button>
        <button className="save-category-btn" onClick={saveCategories}>บันทึก</button>
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
              placeholder="แก้ไขหมวดหมู่"
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
    </div>
  );
};

export default Category;
