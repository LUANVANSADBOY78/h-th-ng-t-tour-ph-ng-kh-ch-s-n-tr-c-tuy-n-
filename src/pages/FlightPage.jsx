import React, { useState } from 'react';
import '../styles/ServicePage.css';

const FlightPage = ({ onNavigate }) => {
  const [tripType, setTripType] = useState('roundtrip');
  const [from, setFrom] = useState('TP HCM (SGN)');
  const [to, setTo] = useState('Bangkok (BKKA)');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('1 Người lớn, 0 Trẻ em, 0 Em bé');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [selectedIntlTab, setSelectedIntlTab] = useState('Thái Lan');

  const PROMO_CODES = [
    { bank: 'VPBank', title: 'Giảm giá 200k VND cho vé máy bay', code: 'VPFLY200', badge: 'Sắp hết mã', color: '#006633' },
    { bank: 'VPBank', title: 'Giảm giá 150k VND cho khách sạn', code: 'VPSTAY150', badge: 'Sắp hết mã', color: '#006633' },
    { bank: 'ZaloPay', title: 'Giảm giá lên đến 100K VND', code: 'ZLPALL06', badge: null, color: '#0068ff' },
  ];

  return (
    <div className="service-page">
      <div className="service-hero flight-hero">
        <div className="container">
          <h1 className="service-hero-title">Vé máy bay giá rẻ nhất 2026</h1>
          <p className="service-hero-sub">So sánh hàng ngàn chuyến bay, tìm vé tốt nhất</p>
        </div>
      </div>

      <div className="container">
        <div className="search-form-card">
          {/* Trip Type Tabs */}
          <div className="trip-type-tabs">
            {['Một chiều', 'Khứ hồi', 'Nhiều thành phố'].map((t, i) => (
              <button
                key={i}
                className={`trip-tab ${tripType === t ? 'active' : ''}`}
                onClick={() => setTripType(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="search-form-grid flight-grid">
            <div className="form-group airport-from" style={{position: 'relative'}}>
              <label>Từ</label>
              <div className="airport-input">
                <span>✈️</span>
                <div>
                  <input 
                    type="text" 
                    value={from} 
                    onChange={e => setFrom(e.target.value)} 
                    onFocus={() => setShowFromDropdown(true)}
                    onBlur={() => setTimeout(() => setShowFromDropdown(false), 200)}
                  />
                  <p style={{ fontSize: 12, color: '#687176' }}>Sân bay Tân Sơn Nhất</p>
                </div>
              </div>
              
              {showFromDropdown && (
                <div className="dest-dropdown-menu" style={{top: '100%', left: 0, width: 350, zIndex: 1000}}>
                  <div style={{padding: '12px 16px', fontSize: 12, fontWeight: 700, color: '#687176', background: '#f7f9fa'}}>
                    Thành phố hoặc sân bay phổ biến
                  </div>
                  {[
                    { id: 'BKKA', name: 'Bangkok', desc: 'Bangkok, Thái Lan', icon: '🏙️' },
                    { id: 'BEIA', name: 'Beijing', desc: 'Beijing, China', icon: '🏙️' },
                    { id: 'SHAA', name: 'Thượng Hải', desc: 'Thượng Hải, Trung Quốc', icon: '🏙️' },
                    { id: 'CTUA', name: 'Chengdu', desc: 'Chengdu, China', icon: '🏙️' },
                    { id: 'TYOA', name: 'Tokyo', desc: 'Tokyo, Nhật Bản', icon: '🏙️' },
                    { id: 'SEOA', name: 'Seoul', desc: 'Seoul, Hàn Quốc', icon: '🏙️' },
                    { id: 'TAIA', name: 'Đài Bắc', desc: 'Đài Bắc, Đài Loan', icon: '🏙️' },
                  ].map((city, idx) => (
                    <div 
                      key={idx} 
                      className="dest-dropdown-item"
                      onClick={() => setFrom(city.name + ' (' + city.id + ')')}
                    >
                      <div style={{display: 'flex', gap: 12, alignItems: 'center'}}>
                        <span style={{fontSize: 20}}>{city.icon}</span>
                        <div className="dest-left">
                          <div className="dest-name">{city.name} <span style={{color: '#687176', fontWeight: 400}}>{city.id}</span></div>
                          <div className="dest-detail">{city.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="swap-btn" title="Đổi chiều">⇄</button>

            <div className="form-group airport-to">
              <label>Đến</label>
              <div className="airport-input">
                <span>✈️</span>
                <div>
                  <input type="text" value={to} onChange={e => setTo(e.target.value)} />
                  <p style={{ fontSize: 12, color: '#687176' }}>Tất cả sân bay</p>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Ngày khởi hành</label>
              <div className="input-icon-wrap">
                <span>📅</span>
                <input type="date" value={departDate} onChange={e => setDepartDate(e.target.value)} />
              </div>
            </div>

            {tripType === 'Khứ hồi' && (
              <div className="form-group">
                <label>Khứ hồi</label>
                <div className="input-icon-wrap">
                  <span>📅</span>
                  <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
                </div>
              </div>
            )}

            <button className="btn-search-main" onClick={() => onNavigate && onNavigate('flight-search')}>
              🔍 Tìm chuyến bay
            </button>
          </div>

          <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>📍</span>
            <span style={{ fontSize: 13, color: '#0194f3', fontWeight: 600, cursor: 'pointer' }}>Tìm ý tưởng chuyến bay thú vị ở đây</span>
          </div>
        </div>

        {/* Promo Codes Section */}
        <div className="promo-section">
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            🎁 Đặt vé trên web, mở app dùng mã ngay!
          </h2>
          <div className="promo-tabs">
            {['Mã thanh toán', 'Mã Traveloka', 'Mã đối tác'].map((t, i) => (
              <button key={i} className={`promo-tab ${i === 0 ? 'active' : ''}`}>{t}</button>
            ))}
          </div>
          <div className="promo-codes-list">
            {PROMO_CODES.map((p, i) => (
              <div className="promo-code-card" key={i}>
                {p.badge && <span className="promo-badge">⚠️ {p.badge}</span>}
                <div className="promo-code-inner">
                  <div className="promo-bank" style={{ background: p.color }}>
                    <span style={{ color: 'white', fontWeight: 700, fontSize: 12 }}>{p.bank}</span>
                  </div>
                  <div className="promo-info">
                    <p className="promo-title">{p.title}</p>
                    <p className="promo-code-label">🔖 {p.code}</p>
                  </div>
                  <button className="btn-copy" onClick={() => navigator.clipboard.writeText(p.code)}>Copy</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Flights Section */}
        <div className="intl-flights-section" style={{marginTop: 40}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16}}>
            <span style={{fontSize: 24, color: '#0194f3'}}>✈️</span>
            <h2 className="section-title" style={{margin: 0}}>Vé máy bay quốc tế giá tốt nhất!</h2>
          </div>
          
          <div className="intl-tabs" style={{display: 'flex', gap: 12, overflowX: 'auto', marginBottom: 24, paddingBottom: 8}}>
            {['Thái Lan', 'Malaysia', 'Singapore', 'Lào, Campuchia', 'Trung Quốc', 'Hàn Quốc', 'Nhật Bản', 'Đài Loan', 'Úc', 'Mỹ', 'Châu Âu'].map((t, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedIntlTab(t)}
                style={{
                  padding: '8px 16px', borderRadius: 20, border: 'none', 
                  background: selectedIntlTab === t ? '#0194f3' : 'transparent',
                  color: selectedIntlTab === t ? 'white' : '#0194f3',
                  fontWeight: 600, fontSize: 14, cursor: 'pointer',
                  whiteSpace: 'nowrap', transition: 'all 0.2s'
                }}>
                {t}
              </button>
            ))}
          </div>

          <div className="intl-flight-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginBottom: 32}}>
            {[
              { from: 'TP HCM', to: 'Bangkok', date: '13 thg 11 2026', price: '1.978.000', img: 'https://picsum.photos/seed/bkk1/300/200' },
              { from: 'Hà Nội', to: 'Bangkok', date: '20 thg 9 2026', price: '2.225.000', oldPrice: '2.275.796', img: 'https://picsum.photos/seed/bkk2/300/200' },
              { from: 'Đà Nẵng', to: 'Bangkok', date: '16 thg 9 2026', price: '1.665.882', oldPrice: '1.678.745', img: 'https://picsum.photos/seed/bkk3/300/200' },
              { from: 'TP HCM', to: 'Bangkok', date: '19 thg 7 2026', price: '1.967.606', img: 'https://picsum.photos/seed/bkk4/300/200' },
              { from: 'Hà Nội', to: 'Bangkok', date: '23 thg 6 2026', price: '2.045.169', oldPrice: '2.063.354', img: 'https://picsum.photos/seed/bkk5/300/200' },
            ].map((f, i) => (
              <div 
                key={i} 
                className="intl-flight-card" 
                onClick={() => onNavigate && onNavigate('flight-search')}
                style={{borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', background: 'white', transition: 'transform 0.2s', ':hover': {transform: 'translateY(-4px)'}}}
              >
                <div style={{position: 'relative', height: 120}}>
                  <img src={f.img} alt="Bangkok" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  <div style={{position: 'absolute', top: 8, left: 8, background: '#03121a', color: 'white', fontSize: 10, fontWeight: 700, padding: '4px 8px', borderRadius: 4}}>MỘT CHIỀU</div>
                  <div style={{position: 'absolute', top: 8, right: 8, background: 'rgba(0,0,0,0.5)', color: 'white', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4}}>+</div>
                </div>
                <div style={{padding: 12}}>
                  <h4 style={{margin: '0 0 4px 0', fontSize: 14, color: '#03121a'}}>{f.from} - {f.to}</h4>
                  <p style={{margin: '0 0 8px 0', fontSize: 12, color: '#687176'}}>🛫 {f.date}</p>
                  {f.oldPrice && <p style={{margin: 0, fontSize: 10, color: '#687176', textDecoration: 'line-through'}}>{f.oldPrice} VND</p>}
                  <p style={{margin: 0, fontSize: 16, fontWeight: 800, color: '#ff5e1f'}}>{f.price} VND</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{textAlign: 'center', marginBottom: 60}}>
            <button 
              onClick={() => onNavigate && onNavigate('flight-search')}
              style={{background: '#0194f3', color: 'white', border: 'none', padding: '12px 24px', borderRadius: 24, fontSize: 16, fontWeight: 700, cursor: 'pointer'}}
            >
              Xem thêm ưu đãi bay &gt;
            </button>
          </div>
        </div>

        <div className="new-user-banner">
          <span>🎁</span>
          <strong>Phiếu giảm giá 10% cho người dùng mới</strong>
          <button className="btn-jump">Jump to Top ↑</button>
        </div>
      </div>
    </div>
  );
};

export default FlightPage;
