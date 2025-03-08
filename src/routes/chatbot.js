import React, { useState, useRef, useEffect } from 'react';
import MultiLevelNavbar from '../components/Navbar';
import './chatbot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isDeepThinkMode, setIsDeepThinkMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [collapsedThoughts, setCollapsedThoughts] = useState({});

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && (lastMessage.isUser || lastMessage.finalAnswer)) {
      scrollToBottom();
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const typeText = async (text, messageId, delay = 20) => {
    setIsTyping(true);
    let currentText = '';
    
    for (let i = 0; i < text.length; i++) {
      currentText += text[i];
      setMessages(prev => prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, thinking: { ...msg.thinking, content: currentText }} 
          : msg
      ));
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    setIsTyping(false);
  };

  const handleNormalChat = async (message) => {
    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `message=${encodeURIComponent(message)}`
      });
      
      const data = await response.json();
      const messageId = Date.now();
      
      setMessages(prev => [...prev, {
        id: messageId,
        text: data.response,
        isUser: false
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: "Có lỗi xảy ra trong quá trình xử lý",
        isUser: false,
        isError: true
      }]);
    }
  };

  const handleDeepThink = async (message) => {
    try {
      // Add user message
      setMessages(prev => [...prev, { 
        id: Date.now(),
        text: message, 
        isUser: true 
      }]);
      scrollToBottom();

      const messageId = Date.now();
      // Add bot message container
      setMessages(prev => [...prev, {
        id: messageId,
        isUser: false,
        thinking: {
          content: '',
          isComplete: false
        },
        thoughts: [],
        finalAnswer: null
      }]);

      const response = await fetch('http://localhost:5000/deep-think', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message })
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              
              if (data.type === 'thinking') {
                setMessages(prev => prev.map(msg => 
                  msg.id === messageId 
                    ? { 
                        ...msg, 
                        thoughts: [...(msg.thoughts || []), data.content],
                        thinking: { ...msg.thinking, content: data.content }
                      }
                    : msg
                ));
                await typeText(data.content, messageId);
              } else if (data.type === 'final') {
                setMessages(prev => prev.map(msg => 
                  msg.id === messageId 
                    ? { 
                        ...msg, 
                        thinking: { ...msg.thinking, isComplete: true },
                        finalAnswer: data.content
                      }
                    : msg
                ));
                scrollToBottom();
              }
            } catch (e) {
              console.error('Error parsing JSON:', e);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: "Có lỗi xảy ra trong quá trình xử lý",
        isUser: false,
        isError: true
      }]);
      scrollToBottom();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const message = inputMessage;
    setInputMessage('');
    
    if (isDeepThinkMode) {
      await handleDeepThink(message);
    } else {
      setMessages(prev => [...prev, { 
        id: Date.now(),
        text: message, 
        isUser: true 
      }]);
      await handleNormalChat(message);
    }
  };

  const toggleThoughts = (messageId) => {
    setCollapsedThoughts(prev => ({
      ...prev,
      [messageId]: !prev[messageId]
    }));
  };

  return (
    <div className="chatbot-container">
      <MultiLevelNavbar/>
      <div className="chat-interface">
        <div className="mode-toggle">
          <button 
            className={`mode-button ${!isDeepThinkMode ? 'active' : ''}`}
            onClick={() => setIsDeepThinkMode(false)}
          >
            Chat Thường
          </button>
          <button 
            className={`mode-button ${isDeepThinkMode ? 'active' : ''}`}
            onClick={() => setIsDeepThinkMode(true)}
          >
            Deep Think 🧠
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id}>
              {message.isUser ? (
                <div className="message user-message">
                  <div className="message-content">{message.text}</div>
                </div>
              ) : (
                <div className="bot-response">
                  {message.thoughts && message.thoughts.length > 0 && (
                    <div className="thoughts-container">
                      <div 
                        className="thoughts-header" 
                        onClick={() => toggleThoughts(message.id)}
                      >
                        <span className="thoughts-title">Quá trình suy nghĩ</span>
                        <span className={`collapse-icon ${collapsedThoughts[message.id] ? 'collapsed' : ''}`}>
                          {collapsedThoughts[message.id] ? '▼' : '▲'}
                        </span>
                      </div>
                      <div className={`thoughts-content ${collapsedThoughts[message.id] ? 'collapsed' : ''}`}>
                        {message.thoughts.slice(0, -1).map((thought, index) => (
                          <div key={index} className="thinking-process">
                            <div className="message-content">{thought}</div>
                          </div>
                        ))}
                        {message.thinking && !message.thinking.isComplete && (
                          <div className="thinking-process">
                            <div className="message-content">
                              {message.thinking.content}
                              <span className="typing-cursor">▋</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {message.finalAnswer && (
                    <div className="message bot-message final-answer">
                      <div className="message-content">{message.finalAnswer}</div>
                    </div>
                  )}
                  {!message.thinking && !message.finalAnswer && (
                    <div className="message bot-message">
                      <div className="message-content">{message.text}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSubmit} className="input-container">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={isDeepThinkMode ? "Hỏi câu hỏi để bot suy nghĩ sâu..." : "Nhập tin nhắn của bạn..."}
            className="message-input"
          />
          <button type="submit" className="send-button">
            {isDeepThinkMode ? '🧠 Deep Think' : 'Gửi'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;