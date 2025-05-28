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
      <div className="dich-container">
        <div style={{marginTop: 60}}>
          <h1 className="dich-header">Dịch Tày - Việt / Việt - Tày</h1>
          
          <div className="dich-translate-boxes" style={{display: 'flex', alignItems: 'center', gap: 16}}>
            <textarea
              className="dich-input__textarea"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={direction === 'tay2viet' ? "Nhập văn bản tiếng Tày..." : "Nhập văn bản tiếng Việt..."}
              style={{width: 300, height: 120}}
            />

            <button 
              className="dich-switch-btn"
              onClick={handleSwitchDirection}
              style={{
                border: 'none',
                background: 'none',
                fontSize: 28,
                cursor: 'pointer'
              }}
              title="Đổi chiều dịch"
            >
              ⇄
            </button>

            <textarea
              className="dich-output__textarea"
              value={outputText}
              readOnly
              placeholder={direction === 'tay2viet' ? "Bản dịch tiếng Việt..." : "Bản dịch tiếng Tày..."}
              style={{width: 300, height: 120, background: '#f5f5f5'}}
            />
          </div>

          <div className="dich-button" style={{marginTop: 16}}>
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
    </div>
  );
}

export default Dich;