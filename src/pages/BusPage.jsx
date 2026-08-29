import React, { useState } from 'react';
import '../styles/ServicePage.css';

const BusPage = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [seats, setSeats] = useState(1);
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  return (
    <div className="service-page">
      <div className="service-hero bus-hero">
        <div className="container">
          <h1 className="service-hero-title">Đặt vé xe khách giá rẻ, nhà xe uy tín</h1>
          <p className="service-hero-sub">Hàng trăm tuyến đường, đặt vé nhanh chóng chỉ trong vài phút</p>
        </div>
      </div>

      <div className="container">
        <div className="search-form-card">
          <h3 style={{ marginBottom: 16, fontWeight: 700 }}>Xe buýt &amp; Xe đưa đón</h3>
          <div className="search-form-grid bus-grid">
            <div className="form-group">
              <label>Từ</label>
              <div className="input-icon-wrap">
                <span>🚌</span>
                <input type="text" placeholder="Nhập thành phố, nhà ga hoặc các điểm khác" value={from} onChange={e => setFrom(e.target.value)} />
              </div>
            </div>

            <button className="swap-btn" title="Đổi chiều">⇄</button>

            <div className="form-group">
              <label>Đến</label>
              <div className="input-icon-wrap">
                <span>🚌</span>
                <input type="text" placeholder="Nhập thành phố, nhà ga hoặc các điểm khác" value={to} onChange={e => setTo(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label>Ngày khởi hành</label>
              <div className="input-icon-wrap">
                <span>📅</span>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} />
              </div>
            </div>

            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 24 }}>
              <input type="checkbox" id="roundtrip-bus" checked={isRoundTrip} onChange={e => setIsRoundTrip(e.target.checked)} style={{ width: 18, height: 18 }} />
              <label htmlFor="roundtrip-bus" style={{ fontWeight: 600, cursor: 'pointer' }}>Khứ hồi</label>
            </div>

            <div className="form-group">
              <label>Số ghế</label>
              <div className="input-icon-wrap">
                <span>🧑</span>
                <input type="number" min={1} max={50} value={seats} onChange={e => setSeats(e.target.value)} />
              </div>
            </div>

            <button 
              className="btn-search-main"
              onClick={() => window.location.hash = 'bus-search'}
            >
              🔍 Tìm kiếm
            </button>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="promo-banner-img">
          <div className="banner-text">
            <p style={{ fontSize: 28, fontWeight: 900, color: 'white' }}>Du lịch</p>
            <p style={{ fontSize: 36, fontWeight: 900, color: '#00d4ff' }}>HÀN QUỐC</p>
            <p style={{ color: 'white' }}>Sống trọn K-Culture</p>
          </div>
          <div className="banner-deal">
            <div className="deal-badge">
              <p style={{ fontSize: 11, fontWeight: 700 }}>DEAL CÓ HẠN</p>
              <p style={{ fontSize: 28, fontWeight: 900, color: '#ff5e1f' }}>50%</p>
            </div>
            <button className="btn-view-deal">Xem ưu đãi</button>
          </div>
        </div>

        <div className="promo-section">
          <h2 className="section-title">🎁 Mã Ưu Đãi Tặng Bạn Mới</h2>
          <div className="new-user-banner">
            <span>🎁</span>
            <strong>Phiếu giảm giá 10% cho người dùng mới đặt xe lần đầu!</strong>
            <button className="btn-jump">Nhận ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusPage;
