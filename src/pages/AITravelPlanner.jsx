import React, { useState } from 'react';
import Card from '../components/Card';
import '../styles/AITravelPlanner.css';

const MOCK_AI_RESPONSE = [
  {
    type: 'text',
    content: 'Chào bạn! Mình đã thiết kế xong lịch trình 3 ngày 2 đêm tại Phú Quốc cho bạn. Chuyến đi tập trung vào trải nghiệm biển và khám phá Grand World. Dưới đây là gợi ý đặt phòng và tour cho lịch trình này:'
  },
  {
    type: 'cards',
    items: [
      {
        id: 1,
        title: 'Vinpearl Resort & Spa Phú Quốc',
        location: 'Bãi Dài, Gành Dầu',
        price: '2,500,000 VND/đêm',
        rating: 4.9,
        type: 'Gợi ý Ngày 1-3',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        title: 'Vé Grand World + Tinh hoa VN',
        location: 'Phú Quốc United Center',
        price: '300,000 VND',
        rating: 4.7,
        type: 'Hoạt động Ngày 1',
        image: 'https://images.unsplash.com/photo-1576485290814-1c72ea420133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

const AITravelPlanner = ({ setCurrentPage }) => {
  const [messages, setMessages] = useState([
    { role: 'user', content: 'Thiết kế tour đi Phú Quốc 3 ngày 2 đêm, tập trung nghỉ dưỡng và đi Grand World.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const simulateAIResponse = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'ai', content: MOCK_AI_RESPONSE }]);
    }, 1500);
  };

  // Simulate AI initial thinking
  React.useEffect(() => {
    simulateAIResponse();
  }, []);

  return (
    <div className="ai-planner-page">
      {/* Header */}
      <div className="planner-header glass">
        <button className="back-btn" onClick={() => setCurrentPage('home')}>
          &larr; Quay lại trang chủ
        </button>
        <h2>AI Travel Planner <span className="beta-badge">BETA</span></h2>
        <div></div>
      </div>

      <div className="planner-container">
        {/* Left Column: Chat Interface */}
        <div className="chat-panel">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-wrapper ${msg.role}`}>
                <div className="avatar">{msg.role === 'ai' ? '🤖' : '👤'}</div>
                <div className="message-content">
                  {msg.role === 'user' ? (
                    <p>{msg.content}</p>
                  ) : (
                    msg.content.map((block, i) => (
                      <div key={i} className="ai-block">
                        {block.type === 'text' && <p>{block.content}</p>}
                        {block.type === 'cards' && (
                          <div className="ai-cards-grid">
                            {block.items.map(item => (
                              <Card key={item.id} {...item} />
                            ))}
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message-wrapper ai">
                <div className="avatar">🤖</div>
                <div className="message-content typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>
          
          <div className="chat-input-area glass">
            <input 
              type="text" 
              placeholder="Nhập yêu cầu lịch trình của bạn..." 
              className="chat-input"
            />
            <button className="btn btn-primary send-btn">Gửi</button>
          </div>
        </div>

        {/* Right Column: Map Interface */}
        <div className="map-panel">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125433.02492196025!2d103.88566453181822!3d10.273185348981443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78c62b49eda17%3A0x8aa79fbbbb725bfc!2zUGjDuiBRdeG7kWMsIEtpw6puIEdpYW5nLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Interactive Map"
          ></iframe>
          
          <div className="map-overlay-cards">
            <div className="map-pin-info glass">
              <h4>📍 Lộ trình ngày 1</h4>
              <p>Vinpearl -&gt; Grand World</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITravelPlanner;
