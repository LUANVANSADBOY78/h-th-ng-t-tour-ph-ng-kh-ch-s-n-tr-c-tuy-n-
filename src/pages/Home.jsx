import React, { useState } from 'react';
import '../styles/Home.css';

const Home = ({ setCurrentPage, onSelectActivity }) => {
  const [activeTab, setActiveTab] = useState('hotel');
  const [destValue, setDestValue] = useState('Thành phố Hồ Chí Minh');
  const [showDestDropdown, setShowDestDropdown] = useState(false);

  // Dummy data
  const DEST_SUGGESTIONS = [
    { name: 'Vũng Tàu', detail: 'Bà Rịa - Vũng Tàu, Hồ Chí Minh, Việt Nam', type: 'Thành Phố', count: '1.081 khách sạn' },
    { name: 'Nha Trang', detail: 'Khánh Hòa, Việt Nam', type: 'Thành Phố', count: '1.393 khách sạn' },
    { name: 'Kuala Lumpur', detail: 'Malaysia', type: 'Thành Phố', count: '6.366 khách sạn' },
    { name: 'Pattaya', detail: 'Chon Buri, Thái Lan', type: 'Thành Phố', count: '4.957 khách sạn' },
    { name: 'Đà Nẵng', detail: 'Việt Nam', type: 'Vùng', count: '2.339 khách sạn' },
    { name: 'Bangkok', detail: 'Thái Lan', type: 'Vùng', count: '6.344 khách sạn' },
    { name: 'Singapore', detail: '', type: 'Vùng', count: '1.071 khách sạn' },
  ];

  const PROMOS = [
    { id: 1, image: 'https://images.unsplash.com/photo-1546584109-0820bbdf9121?auto=format&fit=crop&w=472&q=80' },
    { id: 2, image: 'https://images.unsplash.com/photo-1512453979438-5188f11ceb8c?auto=format&fit=crop&w=472&q=80' },
  ];

  const HOTELS = [
    { id: 1, name: 'Vinpearl Resort & Spa Phú Quốc', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80', price: '3.200.000', discount: 15 },
    { id: 2, name: 'InterContinental Danang', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80', price: '5.500.000', discount: 10 },
    { id: 3, name: 'JW Marriott Hanoi', image: 'https://picsum.photos/seed/jwhanoi/400/300', price: '4.100.000', discount: 0 },
    { id: 4, name: 'Pullman Da Nang', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80', price: '2.900.000', discount: 20 },
  ];

  const ACTIVITIES = [
    { id: 1, name: 'Vé Sun World Ba Na Hills', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=400&q=80', price: '900.000', discount: 5 },
    { id: 2, name: 'VinWonders Phú Quốc', image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=400&q=80', price: '950.000', discount: 0 },
    { id: 3, name: 'Tour Đảo Ngọc Phú Quốc', image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=400&q=80', price: '550.000', discount: 10 },
    { id: 4, name: 'Show Ký Ức Hội An', image: 'https://picsum.photos/seed/hoian/400/300', price: '600.000', discount: 15 },
  ];

  const DESTINATIONS = [
    { name: 'Đà Lạt', image: 'https://picsum.photos/seed/dalat/300/300' },
    { name: 'Vũng Tàu', image: 'https://picsum.photos/seed/vungtau/300/300' },
    { name: 'Đà Nẵng', image: 'https://picsum.photos/seed/danang/300/300' },
    { name: 'Nha Trang', image: 'https://picsum.photos/seed/nhatrang/300/300' },
  ];

  return (
    <div className="main-home-page">
      {/* ===== HERO SECTION ===== */}
      <section className="main-hero">
        <div className="container">
          <h1 className="hero-heading">App du lịch hàng đầu, một chạm đi bất cứ đâu</h1>
          
          <div className="hero-search-box">
            {/* Search Tabs */}
            <div className="search-tabs">
              <button className={`search-tab ${activeTab === 'hotel' ? 'active' : ''}`} onClick={() => setActiveTab('hotel')}>Khách sạn</button>
              <button className={`search-tab ${activeTab === 'flight' ? 'active' : ''}`} onClick={() => setActiveTab('flight')}>Vé máy bay</button>
              <button className={`search-tab ${activeTab === 'bus' ? 'active' : ''}`} onClick={() => setActiveTab('bus')}>Vé xe khách</button>
              <button className={`search-tab ${activeTab === 'transfer' ? 'active' : ''}`} onClick={() => setActiveTab('transfer')}>Đưa đón sân bay</button>
              <button className={`search-tab ${activeTab === 'car' ? 'active' : ''}`} onClick={() => setActiveTab('car')}>Cho thuê xe</button>
              <button className={`search-tab ${activeTab === 'xperience' ? 'active' : ''}`} onClick={() => setActiveTab('xperience')}>Hoạt động & Vui chơi</button>
            </div>

            {/* Search Form Area */}
            <div className="search-form-area">
              <div className="search-inputs-grid">
                <div className="search-input-group dest-input" style={{position: 'relative'}}>
                  <span className="search-icon">📍</span>
                  <div className="input-texts">
                    <label>Thành phố, địa điểm hoặc tên khách sạn</label>
                    <input 
                      type="text" 
                      placeholder="Thành phố, khách sạn, điểm đến" 
                      value={destValue}
                      onChange={(e) => setDestValue(e.target.value)}
                      onFocus={() => setShowDestDropdown(true)}
                      onBlur={() => setTimeout(() => setShowDestDropdown(false), 200)}
                    />
                  </div>
                  {showDestDropdown && (
                    <div className="dest-dropdown-menu">
                      {DEST_SUGGESTIONS.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="dest-dropdown-item"
                          onClick={() => setDestValue(item.name)}
                        >
                          <div className="dest-left">
                            <div className="dest-name">{item.name}</div>
                            {item.detail && <div className="dest-detail">{item.detail}</div>}
                          </div>
                          <div className="dest-right">
                            <div className="dest-type">{item.type}</div>
                            <div className="dest-count">{item.count}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="search-inputs-row">
                  <div className="search-input-group">
                    <span className="search-icon">📅</span>
                    <div className="input-texts">
                      <label>Nhận phòng</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="search-input-group">
                    <span className="search-icon">📅</span>
                    <div className="input-texts">
                      <label>Trả phòng</label>
                      <input type="date" />
                    </div>
                  </div>
                </div>

                <div className="search-input-group guest-input">
                  <span className="search-icon">👥</span>
                  <div className="input-texts">
                    <label>Khách và Phòng</label>
                    <input type="text" defaultValue="1 người lớn, 0 trẻ em, 1 phòng" />
                  </div>
                </div>
              </div>

              <div className="search-actions">
                <div className="recent-searches">
                  <p>Tìm kiếm gần đây: <a href="#">Đà Lạt</a>, <a href="#">Vũng Tàu</a></p>
                </div>
                <button className="btn-search-large" onClick={() => setCurrentPage(activeTab)}>
                  🔍 Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROMO BANNERS ===== */}
      <section className="promo-banners-section container">
        <div className="promo-banners-grid">
          {PROMOS.map(p => (
            <img key={p.id} src={p.image} alt="Promo" className="promo-banner" />
          ))}
        </div>
        <div className="deal-xin-app">
          <img src="https://images.unsplash.com/photo-1627844642677-8b3d6cb46fc4?auto=format&fit=crop&w=1200&h=100&q=80" alt="Deal xịn chỉ trên app" style={{objectFit: 'cover', height: 100}} />
        </div>
      </section>

      {/* ===== NÂNG TẦM CHUYẾN ĐI (ACTIVITIES) ===== */}
      <section className="home-section container">
        <div className="section-header">
          <h2 className="section-title">Nâng tầm chuyến đi để thêm hoàn hảo</h2>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('xperience'); }} className="view-more">Xem tất cả</a>
        </div>
        <div className="home-grid">
          {ACTIVITIES.map(act => (
            <div key={act.id} className="home-card" onClick={() => { onSelectActivity(act); }}>
              <div className="home-card-img">
                <img src={act.image} alt={act.name} />
                {act.discount > 0 && <span className="discount-badge">Tiết kiệm {act.discount}%</span>}
              </div>
              <div className="home-card-info">
                <h4>{act.name}</h4>
                <p className="card-price">{act.price} VND</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== NHIỀU LỰA CHỌN KHÁCH SẠN ===== */}
      <section className="home-section container">
        <div className="section-header">
          <h2 className="section-title">Nhiều lựa chọn khách sạn</h2>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('hotel'); }} className="view-more">Xem tất cả</a>
        </div>
        <div className="home-grid">
          {HOTELS.map(h => (
            <div key={h.id} className="home-card" onClick={() => setCurrentPage('hotel')}>
              <div className="home-card-img">
                <img src={h.image} alt={h.name} />
                {h.discount > 0 && <span className="discount-badge">Tiết kiệm {h.discount}%</span>}
              </div>
              <div className="home-card-info">
                <h4>{h.name}</h4>
                <p className="card-price">{h.price} VND</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ĐIỂM ĐẾN THỊNH HÀNH ===== */}
      <section className="home-section container" style={{marginBottom: 60}}>
        <div className="section-header">
          <h2 className="section-title">Điểm đến thịnh hành</h2>
        </div>
        <div className="home-grid dest-grid">
          {DESTINATIONS.map((d, i) => (
            <div key={i} className="dest-card" onClick={() => setCurrentPage('hotel')}>
              <img src={d.image} alt={d.name} />
              <div className="dest-name">{d.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
