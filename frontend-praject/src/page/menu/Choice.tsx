import React, { useState } from 'react';
import './Choice.scss'; // Import the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';

const Choice: React.FC = () => {
  const [choices, setChoices] = useState(['ท็อปปิ้งเครื่องดื่ม', 'ขนาด']);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newChoice, setNewChoice] = useState('');
  const [isRequired, setIsRequired] = useState(false);
  const [isChoice, setIsChoice] = useState(false); // Added state for the "ช้อย" checkbox
  const [maxSelectable, setMaxSelectable] = useState(1);
  const [minSelectable, setMinSelectable] = useState(1);
  const [selectedRadio, setSelectedRadio] = useState('1');

  const [newChoices, setNewChoices] = useState([
    { name: '', priceOption: 'same', price: 0 }
  ]);

  const addChoiceField = () => {
    setNewChoices([...newChoices, { name: '', priceOption: 'same', price: 0 }]);
  };

  const removeChoiceField = (index: number) => {
    const updatedChoices = newChoices.filter((_, i) => i !== index);
    setNewChoices(updatedChoices);
  };

  const updateChoiceField = (index: number, field: string, value: any) => {
    const updatedChoices = [...newChoices];
    updatedChoices[index] = { ...updatedChoices[index], [field]: value };
    setNewChoices(updatedChoices);
  };

  const addChoice = () => {
    const choiceNames = newChoices.map(choice => choice.name);
    setChoices([...choices, ...choiceNames]);
    setIsPopupOpen(false); // Close the popup after adding
  };

  const deleteChoice = (index: number) => {
    const updatedChoices = choices.filter((_, i) => i !== index);
    setChoices(updatedChoices);
  };

  const updateChoice = (index: number, value: string) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    setChoices(updatedChoices);
  };

  const saveChoices = () => {
    // Implement the save logic here
    console.log('Choices saved:', choices);
  };

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
    if (value === '1') {
      setMaxSelectable(1);
      setMinSelectable(1);
    }
  };

  return (
    <div className="choice-page">
      <h1>ตัวเลือก</h1>
      <div className="choice-controls">
        <button className="add-choice-btn" onClick={() => setIsPopupOpen(true)}>+ เพิ่มตัวเลือก</button>
        <button className="save-choice-btn" onClick={saveChoices}>บันทึก</button>
      </div>
      <div className="choice-list">
        {choices.map((choice, index) => (
          <div key={index} className="choice-item">
            <div className="choice-label">
              <input
                type="text"
                value={choice}
                onChange={(e) => updateChoice(index, e.target.value)}
                className="choice-input"
                placeholder="แก้ไขตัวเลือก"
              />
            </div>
            <div className="choice-actions">
              <button className="edit-btn">
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button className="delete-btn" onClick={() => deleteChoice(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>สร้างตัวเลือกใหม่</h2>
            <input
              type="text"
              placeholder="ชื่อตัวเลือก"
              value={newChoice}
              onChange={(e) => setNewChoice(e.target.value)}
              maxLength={200}
            />
            <div className="char-count">{newChoice.length}/200</div>

            <div className="option-required">
              <label>ลูกค้าจำเป็นต้องเลือก</label>
              <input
                type="checkbox"
                checked={isRequired}
                onChange={() => setIsRequired(!isRequired)}
              />
            </div>

            <div className="selectable-options">
              <label>จำนวนช้อยส์ที่เลือกได้</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    value="1"
                    checked={selectedRadio === '1'}
                    onChange={(e) => handleRadioChange(e.target.value)}
                  />
                  1 ช้อยส์
                </label>
                <label>
                  <input
                    type="radio"
                    value="more-than-1"
                    checked={selectedRadio === 'more-than-1'}
                    onChange={(e) => handleRadioChange(e.target.value)}
                  />
                  มากกว่า 1 แต่ไม่เกิน
                </label>
              </div>

              {selectedRadio === 'more-than-1' && (
                <div className="number-select">
                  <button onClick={() => setMinSelectable(minSelectable - 1)} disabled={minSelectable <= 1}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{minSelectable}</span>
                  <button onClick={() => setMinSelectable(minSelectable + 1)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              )}
            </div>

            <div className="choice-actions">
              <label>ช้อย</label>
              {newChoices.map((choice, index) => (
                <div key={index} className="choice-field">
                  <input
                    type="text"
                    placeholder="กรอกชื่อช้อยส์"
                    value={choice.name}
                    onChange={(e) => updateChoiceField(index, 'name', e.target.value)}
                    maxLength={100}
                  />
                  <div className="char-count">{choice.name.length}/100</div>
                  <button onClick={() => removeChoiceField(index)} className="delete-btn">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>

                  <div className="price-options">
                    <label>
                      <input
                        type="radio"
                        name={`priceOption-${index}`}
                        value="same"
                        checked={choice.priceOption === 'same'}
                        onChange={(e) => updateChoiceField(index, 'priceOption', e.target.value)}
                      />
                      ราคาเท่าเดิม
                    </label>

                    <label>
                      <input
                        type="radio"
                        name={`priceOption-${index}`}
                        value="different"
                        checked={choice.priceOption === 'different'}
                        onChange={(e) => updateChoiceField(index, 'priceOption', e.target.value)}
                      />
                      ราคาเพิ่มขึ้น
                      {choice.priceOption === 'different' && (
                        <input
                          type="number"
                          value={choice.price}
                          onChange={(e) => updateChoiceField(index, 'price', parseFloat(e.target.value))}
                        />
                      )}
                    </label>
                  </div> 
                </div>
              ))}
              <button onClick={addChoiceField} className="add-choice-field-btn">เพิ่มช้อยส์</button>
            </div>

            <div className="popup-actions">
              <button onClick={() => setIsPopupOpen(false)} className="cancel-btn">ยกเลิก</button>
              <button onClick={addChoice} className="save-btn">บันทึก</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Choice;
