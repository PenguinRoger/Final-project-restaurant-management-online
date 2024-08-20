import React, { useState, useEffect } from 'react';
import './Tables.scss';

const TablesPage: React.FC = () => {
  const [tableCount, setTableCount] = useState<number>(0);
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [customerCount, setCustomerCount] = useState<string>(''); // สถานะสำหรับจำนวนลูกค้า

  useEffect(() => {
    const savedTableCount = localStorage.getItem('tableCount');
    if (savedTableCount) {
      setTableCount(Number(savedTableCount));
    }
  }, []);

  const handleTableClick = (tableNumber: number) => {
    setSelectedTable(tableNumber);
  };

  const handleCustomerCountChange = (num: string) => {
    setCustomerCount(prevCount => prevCount + num);
  };

  const handleClearCustomerCount = () => {
    setCustomerCount('');
  };

  const handleCloseSection = () => {
    setSelectedTable(null);
    setCustomerCount(''); // รีเซ็ตจำนวนลูกค้าเมื่อปิด section
  };

  return (
    <div className="tables-page">
      <div className="tables-grid">
        {[...Array(tableCount).keys()].map((num) => (
          <div
            key={num + 1}
            className="table-btn"
            onClick={() => handleTableClick(num + 1)}
          >
            {num + 1}
          </div>
        ))}
      </div>
      
      {selectedTable !== null ? (
        <div className="order-section">
          <h2>โต๊ะ • {selectedTable}</h2>
          <div className="customer-input-section">
            <label>จำนวนลูกค้า</label>
            <input type="text" value={customerCount} readOnly />
            <div className="numpad">
              {[...Array(9).keys()].map(num => (
                <button
                  key={num + 1}
                  onClick={() => handleCustomerCountChange((num + 1).toString())}
                >
                  {num + 1}
                </button>
              ))}
              <button onClick={() => handleCustomerCountChange('0')}>0</button>
              <button onClick={handleClearCustomerCount}>❌</button>
            </div>
          </div>
          <button className="close-btn" onClick={handleCloseSection}>✖</button>
          <button className="order-btn">สั่งอาหาร ➜</button>
        </div>
      ) : (
        <div className="order-section">
          <p>แตะที่รูปโต๊ะเพื่อเปิดปิดล๊าคับโต๊ะนั้น ๆ หรือสร้างออเดอร์แบบไม่ผูกกับโต๊ะ</p>
          <button className="create-order-btn">สร้างออเดอร์ใหม่</button>
        </div>
      )}
    </div>
  );
};

export default TablesPage;
