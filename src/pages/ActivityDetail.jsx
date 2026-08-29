import React from 'react';
import '../styles/ActivityDetail.css';

const ActivityDetail = ({ activity, onBack }) => {
  if (!activity) return null;

  return (
    <div className="tvlk-detail-page">
      <div className="container">
        {/* Breadcrumb & Back */}
        <div className="breadcrumb">
          <button className="btn-back" onClick={onBack}>
            ← Quay lại trang chủ
          </button>
        </div>

        <div className="detail-layout">
          {/* Left Column: Info */}
          <div className="detail-left">
            <h1 className="detail-title">{activity.title}</h1>
            <p className="detail-location">📍 {activity.location}</p>
            
            <div className="detail-gallery">
              <img src={activity.image} alt={activity.title} className="detail-main-img" />
            </div>

            <div className="detail-section">
              <div className="detail-badges">
                {activity.isInstant && <span className="badge-instant">⚡ Xác nhận tức thì</span>}
                {activity.isFlexible && <span className="badge-flexible">📅 Vé mở ngày</span>}
              </div>
            </div>

            <div className="detail-section">
              <h3>Mô tả dịch vụ</h3>
              <p className="detail-desc">{activity.description || 'Đang cập nhật mô tả chi tiết cho dịch vụ này...'}</p>
            </div>

            <div className="detail-section">
              <h3>Dịch vụ bao gồm</h3>
              <ul className="detail-features">
                {activity.features ? (
                  activity.features.map((feat, idx) => (
                    <li key={idx}>✅ {feat}</li>
                  ))
                ) : (
                  <li>Đang cập nhật...</li>
                )}
              </ul>
            </div>
            
            <div className="detail-section">
              <h3>Thông tin quan trọng</h3>
              <ul className="detail-policies">
                <li>❌ Không hoàn tiền sau khi đặt</li>
                <li>🎫 Trình e-voucher trên điện thoại để vào cổng</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Pricing & Booking */}
          <div className="detail-right">
            <div className="booking-card sticky">
              <div className="booking-price-header">
                {activity.originalPrice && <span className="old-price">{activity.originalPrice}</span>}
                <span className="current-price">{activity.price}</span>
              </div>
              
              <div className="booking-options">
                <button className="btn tvlk-btn-primary btn-block">Tìm Tùy Chọn</button>
              </div>

              <div className="booking-guarantees">
                <div className="guarantee-item">
                  <span>🛡️</span> Giao dịch an toàn
                </div>
                <div className="guarantee-item">
                  <span>⭐</span> Hơn {activity.reviews} đánh giá
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
