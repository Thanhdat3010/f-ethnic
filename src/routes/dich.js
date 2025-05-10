// dich.js
import React, { useState } from 'react';
import axios from 'axios';
import MultiLevelNavbar from '../components/Navbar';
import './dich.css';

function Dich() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5001/translate', {
        text: inputText
      });
      setTranslatedText(response.data.translated);
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
        <h1 className="dich-header">Dịch Tày - Việt</h1>
        
        <div className="dich-input">
          <textarea
            className="dich-input__textarea"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Nhập văn bản tiếng Tày..."
          />
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

        {translatedText && (
          <div className="dich-result">
            <h3 className="dich-result__header">Bản dịch:</h3>
            <div className="dich-result__content">
              {translatedText}
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default Dich;