import React, { useState } from 'react';
import axios from 'axios';
import MultiLevelNavbar from '../components/Navbar';
import './dich.css';

function Dich() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [direction, setDirection] = useState('tay2viet'); // 'tay2viet' hoặc 'viet2tay'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSwitchDirection = () => {
    setDirection(direction === 'tay2viet' ? 'viet2tay' : 'tay2viet');
    setInputText(outputText);
    setOutputText(inputText);
    setError('');
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setError('');
    setOutputText('');

    try {
      const response = await axios.post('http://localhost:5001/translate', {
        text: inputText
      });
      if (direction === 'tay2viet') {
        setOutputText(response.data.tay2viet);
      } else {
        setOutputText(response.data.viet2tay);
      }
    } catch (err) {
      setError('Lỗi: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dich">
      <MultiLevelNavbar/>
      <div className="dich-container dich-elevated">
        <div className="dich-header-group">
          <h1 className="dich-header">Dịch Tày - Việt / Việt - Tày</h1>
          <p className="dich-subtitle">
            Công cụ dịch ngôn ngữ Tày ↔ Việt hiện đại, nhanh chóng và chính xác.<br/>
            Hãy nhập văn bản và trải nghiệm!
          </p>
        </div>
        <div className="dich-translate-boxes">
          <div className="dich-box">
            <label className="dich-label">
              {direction === 'tay2viet' ? "Tiếng Tày" : "Tiếng Việt"}
            </label>
            <textarea
              className="dich-input__textarea"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={direction === 'tay2viet' ? "Nhập văn bản tiếng Tày..." : "Nhập văn bản tiếng Việt..."}
            />
          </div>
          <button 
            className="dich-switch-btn"
            onClick={handleSwitchDirection}
            title="Đổi chiều dịch"
          >
            ⇄
          </button>
          <div className="dich-box">
            <label className="dich-label">
              {direction === 'tay2viet' ? "Tiếng Việt" : "Tiếng Tày"}
            </label>
            <textarea
              className="dich-output__textarea"
              value={outputText}
              readOnly
              placeholder={direction === 'tay2viet' ? "Bản dịch tiếng Việt..." : "Bản dịch tiếng Tày..."}
            />
          </div>
        </div>
        <div className="dich-button">
          <button 
            className="dich-button__translate"
            onClick={handleTranslate}
            disabled={loading || !inputText.trim()}
          >
            {loading ? 'Đang dịch...' : 'Dịch'}
          </button>
        </div>
        {error && (
          <div className="dich-error">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dich;