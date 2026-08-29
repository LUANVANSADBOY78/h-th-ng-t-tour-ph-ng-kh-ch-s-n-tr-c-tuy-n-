import React, { useState } from 'react';
import '../styles/ServicePage.css';

const CAR_PARTNERS = ['Avis', 'Europcar', 'Hertz', 'Thrifty', 'Budget', 'Sixt'];

const CarRentalPage = () => {
  const [carType, setCarType] = useState('self-drive');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('09:00');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('09:00');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  return (
    <div className="service-page">
      <div className="service-hero car-hero">
        <div className="container car-hero-inner">
          <div className="car-hero-text">
            <h1 className="service-hero-title" style={{ color: '#03121a', fontSize: 28 }}>
              Dịch vụ cho thuê xe tự lái và thuê xe có tài xế giá rẻ tại Traveloka
            </h1>
            <p style={{ color: '#687176', marginTop: 12, lineHeight: 1.6 }}>
              Tìm và đặt ngay dịch vụ cho thuê xe tự lái và thuê xe có tài xế giá rẻ tại Traveloka. Nền tảng du lịch hàng đầu Đông Nam Á.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="search-form-card">
          {/* Car Type Tabs */}
          <div className="trip-type-tabs" style={{ marginBottom: 20 }}>
            <button
              className={`trip-tab ${carType === 'self-drive' ? 'active' : ''}`}
              onClick={() => setCarType('self-drive')}
            >
              🚗 Tự lái
            </button>
            <button
              className={`trip-tab ${carType === 'with-driver' ? 'active' : ''}`}
              onClick={() => setCarType('with-driver')}
            >
              👤 Có tài xế
            </button>
          </div>

          <h3 style={{ marginBottom: 16, fontWeight: 700 }}>Cho thuê xe</h3>

          <div className="search-form-grid car-grid">
            <div className="form-group" style={{ gridColumn: '1 / -1', position: 'relative' }}>
              <label>Địa điểm thuê xe của bạn</label>
              <div className="input-icon-wrap">
                <span>📍</span>
                <input 
                  type="text" 
                  placeholder="Điền thành phố, sân bay, hoặc khách sạn" 
                  value={location} 
                  onChange={e => setLocation(e.target.value)} 
                  onFocus={() => setShowLocationDropdown(true)}
                  onBlur={() => setTimeout(() => setShowLocationDropdown(false), 200)}
                />
              </div>
              
              {showLocationDropdown && (
                <div className="dest-dropdown-menu" style={{top: '100%', left: 0, width: '50%', zIndex: 1000}}>
                  <div style={{padding: '12px 16px', fontSize: 12, fontWeight: 700, color: '#687176', background: '#f7f9fa', borderBottom: '1px solid #f0f1f2'}}>
                    Địa điểm nhận hàng phổ biến
                  </div>
                  {[
                    { name: 'Tan Son Nhat International Airport (SGN)', desc: 'Ward 2, Tan Binh, Ho Chi Minh, Ho Chi Minh, Viet...', tag: 'Airport' },
                    { name: 'Noi Bai International Airport (HAN)', desc: 'Quang Tien, Soc Son, Hanoi, Vietnam, Southeast...', tag: 'Airport' },
                    { name: 'Da Nang International Airport (DAD)', desc: 'Hoa Thuan Tay, Hai Chau, Da Nang, Da Nang, Viet...', tag: 'Airport' },
                    { name: 'Ho Chi Minh City Hall Square', desc: 'Bến Nghé, District 1, Ho Chi Minh, Ho Chi Minh,...', tag: 'Attraction' },
                    { name: 'St. Joseph\'s Cathedral', desc: '40 Nha Chung, Hoan Kiem, Ha Noi', tag: 'Landmark' },
                  ].map((loc, idx) => (
                    <div 
                      key={idx} 
                      className="dest-dropdown-item"
                      onClick={() => setLocation(loc.name)}
                    >
                      <div className="dest-left">
                        <div className="dest-name">{loc.name}</div>
                        <div className="dest-detail">{loc.desc}</div>
                      </div>
                      <div className="dest-right">
                        <span style={{
                          fontSize: 10, fontWeight: 600, color: '#0194f3', 
                          border: '1px solid #0194f3', borderRadius: 4, padding: '2px 6px'
                        }}>{loc.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Ngày bắt đầu</label>
              <div className="input-icon-wrap">
                <span>📅</span>
                <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label>Giờ bắt đầu</label>
              <div className="input-icon-wrap">
                <span>🕐</span>
                <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label>Ngày kết thúc</label>
              <div className="input-icon-wrap">
                <span>📅</span>
                <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label>Giờ kết thúc</label>
              <div className="input-icon-wrap">
                <span>🕐</span>
                <input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} />
              </div>
            </div>

            <button className="btn-search-main">🔍 Tìm xe</button>
          </div>
        </div>

        {/* Partners Section */}
        <div className="partners-section">
          <h2 className="section-title">Các đối tác cho thuê xe</h2>
          <div className="partners-list">
            {CAR_PARTNERS.map((p, i) => (
              <div className="partner-logo" key={i}>
                <span style={{ fontWeight: 800, color: '#0194f3', fontSize: 20 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalPage;
