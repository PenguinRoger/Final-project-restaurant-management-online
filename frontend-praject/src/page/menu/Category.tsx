import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Category.scss'; // Import the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

interface MenuCategory {
  menuCategoryNo: number;
  menuCategoryName: string;
}

const UserList: React.FC = () => {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility
  const [editCategory, setEditCategory] = useState<MenuCategory | null>(null); // State to store the category being edited
  const [newCategory, setNewCategory] = useState(''); // State to store new category name
  const [deleteCategoryIndex, setDeleteCategoryIndex] = useState<number | null>(null); // State for the index of the category to delete
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false); // State to control delete confirmation popup

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/menu-category');
      console.log('API Response:', response.data);

      const data = response.data.data;
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        console.error('API data is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const addCategory = async () => {
    try {
      await axios.post('http://localhost:4000/api/menu-category', { menuCategoryName: newCategory });
      setIsPopupOpen(false); // Close the popup after adding
      setNewCategory(''); // Clear the input
      fetchCategories(); // Re-fetch categories to refresh the list
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const confirmDeleteCategory = (index: number) => {
    setDeleteCategoryIndex(index);
    setIsDeletePopupOpen(true);
  };

  const deleteCategory = async () => {
    if (deleteCategoryIndex !== null) {
      const categoryToDelete = categories[deleteCategoryIndex];
      try {
        await axios.delete(`http://localhost:4000/api/menu-category/${categoryToDelete.menuCategoryNo}`);
        setIsDeletePopupOpen(false); // Close the delete confirmation popup
        setDeleteCategoryIndex(null); // Reset the delete index
        fetchCategories(); // Re-fetch categories to refresh the list
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  const updateCategory = async () => {
    if (editCategory) {
      try {
        console.log('Sending PUT request to update category:', editCategory);
        
        await axios.put(`http://localhost:4000/api/menu-category/${editCategory.menuCategoryNo}`, { 
          menuCategoryName: newCategory 
        });
        
        console.log('PUT request successful.');
        setIsPopupOpen(false); // Close the popup after editing
        setEditCategory(null); // Clear the edit state
        setNewCategory(''); // Clear the input field after updating
        fetchCategories(); // Re-fetch categories to refresh the list
      } catch (error) {
        console.error('Error updating category:', error);
      }
    }
  };

  const openEditPopup = (category: MenuCategory) => {
    setEditCategory(category);
    setNewCategory(category.menuCategoryName); // Set the current category name for editing
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setEditCategory(null); // Clear the edit state when closing the popup
    setNewCategory(''); // Clear the input field when closing the popup
  };

  return (
    <div className="category-page">
      <h1>รายการประเภทเมนู</h1>
      <div className="category-controls">
        <button className="add-category-btn" onClick={() => setIsPopupOpen(true)}>+ เพิ่มประเภท</button>
      </div>
      <div className="category-list">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div key={category.menuCategoryNo} className="category-item">
              <div className="category-drag-handle">::</div>
              <input
                type="text"
                value={category.menuCategoryName}
                className="category-input"
                placeholder="แก้ไขประเภท"
                disabled // Disable the input field
              />
              <button className="edit-btn" onClick={() => openEditPopup(category)}>
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button className="delete-btn" onClick={() => confirmDeleteCategory(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>

      {/* Edit/Add Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>{editCategory ? 'แก้ไขประเภท' : 'เพิ่มประเภทใหม่'}</h2>
            <input
              type="text"
              placeholder="ชื่อประเภท"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              maxLength={200}
            />
            <div className="popup-actions">
              <button onClick={closePopup} className="cancel-btn">ยกเลิก</button>
              <button onClick={editCategory ? updateCategory : addCategory} className="save-btn">บันทึก</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {isDeletePopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>ยืนยันการลบ</h2>
            <p>คุณแน่ใจหรือว่าต้องการลบประเภทนี้?</p>
            <div className="popup-actions">
              <button onClick={() => setIsDeletePopupOpen(false)} className="cancel-btn">ยกเลิก</button>
              <button onClick={deleteCategory} className="delete-confirm-btn">ตกลง</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
