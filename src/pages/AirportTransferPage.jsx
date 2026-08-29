import React, { useState } from 'react';
import '../styles/ServicePage.css';

const AirportTransferPage = () => {
  const [fromAirport, setFromAirport] = useState('');
  const [toDestination, setToDestination] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('15:05');

  return (
    <div className="service-page">
      <div className="service-hero transfer-hero">
        <div className="container transfer-hero-inner">
          <div className="transfer-hero-text">
            <h1 className="service-hero-title" style={{ color: 'white' }}>
              Tạm biệt mọi lo lắng và mệt mỏi với dịch vụ xe đưa đón sân bay Traveloka
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginTop: 12, lineHeight: 1.6 }}>
              Traveloka cung cấp dịch vụ đưa đón sân bay giúp khách hàng dễ dàng di chuyển đến và rời sân bay nhanh chóng và tiết kiệm thời gian.
            </p>
          </div>
          <div className="transfer-hero-banner">
            <div style={{ background: 'white', borderRadius: 12, padding: 20, textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
              <div style={{ fontSize: 40 }}>🚖</div>
              <p style={{ fontWeight: 700, color: '#0194f3', fontSize: 18 }}>CÓ MAI LINH ĐƯA ĐÓN</p>
              <button className="btn-search-main" style={{ marginTop: 12, width: '100%' }}>Đặt trước ngay</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="search-form-card">
          <div className="search-form-grid transfer-grid">
            <div className="form-group">
              <label>Từ sân bay</label>
              <div className="input-icon-wrap">
                <span>✈️</span>
                <input type="text" placeholder="Ví dụ Sân bay quốc tế Narita" value={fromAirport} onChange={e => setFromAirport(e.target.value)} />
              </div>
            </div>

            <button className="swap-btn">⇄</button>

            <div className="form-group">
              <label>Đến khu vực, địa chỉ, toà nhà</label>
              <div className="input-icon-wrap">
                <span>📍</span>
                <input type="text" placeholder="Ví dụ Trung tâm mua sắm AEON Na..." value={toDestination} onChange={e => setToDestination(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label>Ngày đón</label>
              <div className="input-icon-wrap">
                <span>📅</span>
                <input type="date" value={pickupDate} onChange={e => setPickupDate(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label>Giờ đón</label>
              <div className="input-icon-wrap">
                <span>🕐</span>
                <input type="time" value={pickupTime} onChange={e => setPickupTime(e.target.value)} />
              </div>
            </div>

            <button className="btn-search-main">🔍 Tìm kiếm</button>
          </div>
        </div>

        <div className="why-section">
          <h2 className="section-title">Tại sao nên đặt xe đưa đón sân bay qua Traveloka?</h2>
          <div className="why-grid">
            <div className="why-item">
              <span className="why-icon">🛡️</span>
              <h4>An toàn &amp; Đáng tin cậy</h4>
              <p>Đối tác lái xe được kiểm tra kỹ lưỡng, đảm bảo chuyến đi an toàn</p>
            </div>
            <div className="why-item">
              <span className="why-icon">💰</span>
              <h4>Giá cố định, không phụ phí</h4>
              <p>Giá đã bao gồm tất cả, không phát sinh thêm chi phí</p>
            </div>
            <div className="why-item">
              <span className="why-icon">⏰</span>
              <h4>Theo dõi chuyến bay thực time</h4>
              <p>Tài xế theo dõi lịch bay, tự điều chỉnh nếu chuyến bay trễ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportTransferPage;
