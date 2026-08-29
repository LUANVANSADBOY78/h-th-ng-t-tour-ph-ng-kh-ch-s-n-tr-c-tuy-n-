import React, { useState } from 'react';
import '../styles/ServicePage.css';

const ALL_HOTELS = [
  { id: 1, name: 'Vinpearl Resort & Spa Phú Quốc', location: 'Bãi Dài, Phú Quốc, Kiên Giang', stars: 5, rating: 9.2, reviews: 4820, price: '3.200.000', originalPrice: '3.800.000', discount: 15, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', amenities: ['Hồ bơi', 'Nhà hàng', 'Spa', 'Bãi đỗ xe'] },
  { id: 2, name: 'InterContinental Danang Sun Peninsula', location: 'Sơn Trà, Đà Nẵng', stars: 5, rating: 9.5, reviews: 3100, price: '5.500.000', originalPrice: '6.100.000', discount: 10, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80', amenities: ['Bãi biển riêng', 'Nhà hàng', 'Tennis', 'Phục vụ 24/7'] },
  { id: 3, name: 'JW Marriott Hanoi', location: 'Từ Liêm, Hà Nội', stars: 5, rating: 9.1, reviews: 2870, price: '4.100.000', originalPrice: '4.500.000', discount: 8, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', amenities: ['Hồ bơi', 'Phòng gym', 'Nhà hàng', 'WiFi miễn phí'] },
  { id: 4, name: 'Park Hyatt Saigon', location: 'Quận 1, TP. Hồ Chí Minh', stars: 5, rating: 9.3, reviews: 5640, price: '4.800.000', originalPrice: '5.300.000', discount: 8, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', amenities: ['Hồ bơi', 'Nhà hàng', 'Spa', 'Đưa đón sân bay'] },
  { id: 5, name: 'Pullman Da Nang Beach Resort', location: 'Ngũ Hành Sơn, Đà Nẵng', stars: 5, rating: 8.9, reviews: 2100, price: '2.900.000', originalPrice: '3.400.000', discount: 15, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80', amenities: ['Bãi biển riêng', 'Hồ bơi', 'Nhà hàng', 'WiFi miễn phí'] },
  { id: 6, name: 'Mövenpick Resort Cam Ranh', location: 'Bắc Bán Đảo Cam Ranh, Khánh Hòa', stars: 5, rating: 9.0, reviews: 1450, price: '3.500.000', originalPrice: '4.000.000', discount: 12, image: 'https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?auto=format&fit=crop&w=600&q=80', amenities: ['Bãi biển riêng', 'Hồ bơi', 'Spa', 'Nhà hàng'] },
  { id: 7, name: 'Sheraton Nha Trang Hotel & Spa', location: 'Trần Phú, Nha Trang, Khánh Hòa', stars: 5, rating: 9.1, reviews: 3200, price: '2.800.000', originalPrice: '3.200.000', discount: 12, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80', amenities: ['View biển', 'Hồ bơi', 'Spa', 'Nhà hàng'] },
  { id: 8, name: 'Fusion Maia Da Nang', location: 'Ngũ Hành Sơn, Đà Nẵng', stars: 5, rating: 9.4, reviews: 1870, price: '6.200.000', originalPrice: '7.000.000', discount: 11, image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80', amenities: ['Spa trọn gói', 'Bãi biển riêng', 'Hồ bơi riêng', 'Nhà hàng'] },
  { id: 9, name: 'Meliá Hồ Tràm Beach Resort', location: 'Hồ Tràm, Bà Rịa - Vũng Tàu', stars: 5, rating: 8.8, reviews: 980, price: '3.800.000', originalPrice: '4.300.000', discount: 11, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80', amenities: ['Bãi biển riêng', 'Hồ bơi', 'Kids club', 'Nhà hàng'] },
  { id: 10, name: 'Sofitel Legend Metropole Hanoi', location: 'Hoàn Kiếm, Hà Nội', stars: 5, rating: 9.6, reviews: 6100, price: '7.500.000', originalPrice: '8.500.000', discount: 12, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=600&q=80', amenities: ['Di sản lịch sử', 'Nhà hàng Pháp', 'Spa', 'Hồ bơi'] },
  { id: 11, name: 'Alma Resort Cam Ranh', location: 'Bắc Cam Ranh, Khánh Hòa', stars: 5, rating: 9.2, reviews: 1320, price: '4.200.000', originalPrice: '4.800.000', discount: 12, image: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&w=600&q=80', amenities: ['Waterpark', 'Hồ bơi', 'Nhà hàng', 'Spa'] },
  { id: 12, name: 'The Anam Cam Ranh', location: 'Long Beach, Cam Ranh, Khánh Hòa', stars: 5, rating: 9.3, reviews: 2400, price: '4.600.000', originalPrice: '5.200.000', discount: 11, image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80', amenities: ['Bãi biển riêng', 'Hồ bơi', 'Gym', 'Nhà hàng'] },
  { id: 13, name: 'La Vela Saigon Hotel', location: 'Quận 5, TP. Hồ Chí Minh', stars: 5, rating: 8.7, reviews: 1680, price: '1.900.000', originalPrice: '2.400.000', discount: 20, image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=600&q=80', amenities: ['Hồ bơi tràn bờ', 'Skybar', 'Nhà hàng', 'Spa'] },
  { id: 14, name: 'Novotel Phu Quoc Resort', location: 'Dương Tơ, Phú Quốc, Kiên Giang', stars: 5, rating: 8.9, reviews: 2050, price: '2.600.000', originalPrice: '3.100.000', discount: 16, image: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?auto=format&fit=crop&w=600&q=80', amenities: ['Hồ bơi', 'Bãi biển', 'Nhà hàng', 'Kids club'] },
  { id: 15, name: 'Hyatt Regency Danang Resort', location: 'Sơn Trà, Đà Nẵng', stars: 5, rating: 9.0, reviews: 2750, price: '3.900.000', originalPrice: '4.500.000', discount: 13, image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80', amenities: ['Bãi biển riêng', 'Hồ bơi', 'Spa', 'Nhà hàng'] },
];

const AMENITY_ICONS = { 'Hồ bơi': '🏊', 'Nhà hàng': '🍽️', 'Spa': '🧖', 'Bãi đỗ xe': '🅿️', 'Bãi biển riêng': '🏖️', 'Tennis': '🎾', 'Phục vụ 24/7': '🛎️', 'Phòng gym': '💪', 'WiFi miễn phí': '📶', 'Đưa đón sân bay': '🚗', 'View biển': '🌊', 'Hồ bơi riêng': '🏊', 'Spa trọn gói': '🧖', 'Kids club': '👶', 'Di sản lịch sử': '🏛️', 'Nhà hàng Pháp': '🍷', 'Waterpark': '🎢', 'Gym': '💪', 'Hồ bơi tràn bờ': '🏊', 'Skybar': '🍸', 'Bãi biển': '🏖️' };

const today = new Date();
const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
const dayAfter = new Date(today); dayAfter.setDate(today.getDate() + 2);
const fmt = (d) => d.toISOString().split('T')[0];

const BookingModal = ({ hotel, onClose }) => {
  const [isBooking, setIsBooking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleConfirmBooking = () => {
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="booking-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={e => e.stopPropagation()}>
        {isSuccess ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
            <h2 style={{ color: '#0194f3' }}>Đặt phòng thành công!</h2>
            <p>Cảm ơn bạn đã đặt phòng tại <strong>{hotel.name}</strong>.</p>
            <p style={{ fontSize: 13, color: '#687176' }}>Mã xác nhận đã được gửi vào email của bạn.</p>
            <button className="btn-book-large" onClick={onClose} style={{ marginTop: 24 }}>Hoàn tất</button>
          </div>
        ) : (
          <>
            <h2>Xác nhận đặt phòng</h2>
            <div style={{ display: 'flex', gap: 16, marginBottom: 24, marginTop: 16 }}>
              <img src={hotel.image} alt={hotel.name} style={{ width: 80, height: 80, borderRadius: 8, objectFit: 'cover' }} />
              <div>
                <h4 style={{ margin: '0 0 4px', fontSize: 16 }}>{hotel.name}</h4>
                <p style={{ margin: 0, fontSize: 13, color: '#687176' }}>📍 {hotel.location}</p>
                <div style={{ marginTop: 8, fontSize: 18, fontWeight: 'bold', color: '#ff5e1f' }}>
                  {hotel.price} VND <span style={{ fontSize: 12, fontWeight: 'normal', color: '#687176' }}>/ đêm</span>
                </div>
              </div>
            </div>

            <div style={{ background: '#f7f9fa', padding: 16, borderRadius: 8, marginBottom: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#687176', fontSize: 14 }}>Ngày nhận phòng</span>
                <span style={{ fontWeight: 'bold' }}>{fmt(tomorrow)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#687176', fontSize: 14 }}>Ngày trả phòng</span>
                <span style={{ fontWeight: 'bold' }}>{fmt(dayAfter)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#687176', fontSize: 14 }}>Số lượng phòng</span>
                <span style={{ fontWeight: 'bold' }}>1 phòng, 2 người lớn</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn-back-white" onClick={onClose} style={{ flex: 1, border: '1px solid #cdd0d1', color: '#03121a', background: 'white' }}>Hủy</button>
              <button className="btn-book-large" onClick={handleConfirmBooking} disabled={isBooking} style={{ flex: 1, padding: '12px' }}>
                {isBooking ? 'Đang xử lý...' : 'Xác nhận đặt ngay'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


const HotelPage = () => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState(fmt(tomorrow));
  const [checkOut, setCheckOut] = useState(fmt(dayAfter));
  const [results, setResults] = useState(ALL_HOTELS);
  const [isLoading, setIsLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [bookingHotel, setBookingHotel] = useState(null);

  const toggleWishlist = (e, id) => {
    e.stopPropagation();
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      const q = destination.toLowerCase().trim();
      const filtered = q ? ALL_HOTELS.filter(h => h.location.toLowerCase().includes(q) || h.name.toLowerCase().includes(q)) : ALL_HOTELS;
      setResults(filtered);
      setIsLoading(false);
      document.getElementById('hotel-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const openHotelDetail = (hotel) => {
    setSelectedHotel(hotel);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ===== HOTEL DETAIL VIEW =====
  if (selectedHotel) {
    const h = selectedHotel;
    return (
      <div className="service-page">
        <div className="service-hero hotel-hero" style={{ padding: '24px 0 40px' }}>
          <div className="container">
            <button className="btn-back-white" onClick={() => setSelectedHotel(null)}>← Quay lại danh sách</button>
          </div>
        </div>
        <div className="container">
          <div className="hotel-detail-card">
            <div className="hotel-detail-grid">
              <div className="hotel-detail-img">
                <img src={h.image} alt={h.name} />
                {h.discount > 0 && <span className="hotel-discount-badge">Tiết kiệm {h.discount}%</span>}
              </div>
              <div className="hotel-detail-info">
                <div className="hotel-stars">{'⭐'.repeat(h.stars)}</div>
                <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>{h.name}</h1>
                <p className="hotel-location" style={{ marginBottom: 16 }}>📍 {h.location}</p>

                <div className="hotel-detail-amenities">
                  {h.amenities.map((a, i) => (
                    <span key={i} className="amenity-tag">{AMENITY_ICONS[a] || '✓'} {a}</span>
                  ))}
                </div>

                <div className="hotel-rating" style={{ marginBottom: 16 }}>
                  <span className="rating-badge">{h.rating}</span>
                  <span className="rating-label">Tuyệt vời</span>
                  <span style={{ color: '#687176', fontSize: 13 }}>({h.reviews.toLocaleString()} đánh giá)</span>
                </div>

                <div style={{ borderTop: '1px solid #f0f1f2', paddingTop: 16 }}>
                  <p style={{ fontSize: 13, color: '#687176', textDecoration: 'line-through' }}>{h.originalPrice} VND</p>
                  <p style={{ fontSize: 13, color: '#687176' }}>Giá mỗi đêm từ</p>
                  <p className="hotel-price" style={{ fontSize: 28, marginBottom: 16 }}>{h.price} VND</p>
                  <button className="btn-book-large" onClick={() => setBookingHotel(h)}>Chọn phòng →</button>
                </div>
              </div>
            </div>

            <div className="hotel-detail-desc">
              <h3>Mô tả</h3>
              <p>Khách sạn {h.name} tọa lạc tại {h.location}, là điểm đến hoàn hảo cho kỳ nghỉ dưỡng của bạn. Với đánh giá {h.rating}/10 từ hơn {h.reviews.toLocaleString()} khách hàng, đây là một trong những lựa chọn hàng đầu tại khu vực.</p>
              <h3 style={{ marginTop: 20 }}>Chính sách</h3>
              <ul className="policy-list">
                <li>🕐 Nhận phòng: 14:00 | Trả phòng: 12:00</li>
                <li>🗓️ Hủy miễn phí trước 24 giờ</li>
                <li>🎫 Trình voucher trên điện thoại khi nhận phòng</li>
                <li>👶 Trẻ em dưới 6 tuổi: miễn phí (ở chung với bố mẹ)</li>
              </ul>
            </div>
          </div>
        </div>
        {bookingHotel && <BookingModal hotel={bookingHotel} onClose={() => setBookingHotel(null)} />}
      </div>
    );
  }

  // ===== HOTEL LIST VIEW =====
  return (
    <div className="service-page">
      <div className="service-hero hotel-hero">
        <div className="container">
          <h1 className="service-hero-title">Đặt phòng khách sạn giá rẻ, ưu đãi hấp dẫn</h1>
          <p className="service-hero-sub">Hàng triệu lựa chọn, giá tốt nhất đảm bảo</p>
        </div>
      </div>

      <div className="container">
        {/* Search Form */}
        <div className="search-form-card">
          <div className="search-form-grid" style={{ gap: 12, flexWrap: 'wrap' }}>
            <div className="form-group" style={{ minWidth: 220, flex: 2 }}>
              <label>Thành phố, địa điểm hoặc tên khách sạn</label>
              <div className="input-icon-wrap">
                <span>📍</span>
                <input type="text" placeholder="Thành phố, khách sạn, điểm đến" value={destination} onChange={e => setDestination(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSearch()} />
              </div>
            </div>
            <div className="form-group" style={{ minWidth: 130, flex: 1 }}>
              <label>Ngày nhận phòng</label>
              <div className="input-icon-wrap">
                <span>📅</span>
                <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
              </div>
            </div>
            <div className="form-group" style={{ minWidth: 130, flex: 1 }}>
              <label>Ngày trả phòng</label>
              <div className="input-icon-wrap">
                <span>📅</span>
                <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
              </div>
            </div>
            <div className="form-group" style={{ minWidth: 180, flex: 1.5 }}>
              <label>Khách và Phòng</label>
              <div className="input-icon-wrap">
                <span>👤</span>
                <input type="text" defaultValue="2 người lớn, 0 Trẻ em, 1 phòng" readOnly />
              </div>
            </div>
            <button className="btn-search-main" onClick={handleSearch} disabled={isLoading}>
              {isLoading ? '⏳ Đang tìm...' : '🔍 Tìm kiếm'}
            </button>
          </div>
          <p style={{ fontSize: 12, color: '#10b981', marginTop: 8 }}>⏱️ Thời gian 1 Đêm</p>
        </div>

        {/* Trust Badges */}
        <div className="trust-badges">
          {[
            { icon: '📱', title: '50M+ Lượt tải xuống, 1M+ Đánh giá', sub: '⭐ 4.6  ⭐ 4.7' },
            { icon: '🗓️', title: 'Hủy miễn phí', sub: 'Hủy hoặc nhận hoàn tiền bất cứ khi nào' },
            { icon: '💳', title: 'Nhiều phương thức thanh toán', sub: 'VNPay, MoMo, Thẻ, ZaloPay' },
            { icon: '🕐', title: 'Trung tâm hỗ trợ 24/7', sub: 'Liên hệ bất cứ lúc nào' },
          ].map((b, i) => (
            <div className="trust-item" key={i}>
              <span className="trust-icon">{b.icon}</span>
              <div><b>{b.title}</b><p>{b.sub}</p></div>
            </div>
          ))}
        </div>

        {/* Hotel Results */}
        <section className="results-section" id="hotel-results">
          <div className="section-header">
            <h2 className="section-title">{destination ? `Kết quả cho "${destination}"` : 'Ưu đãi nổi bật 🌟'}</h2>
            <span className="result-count">{results.length} khách sạn</span>
          </div>

          {isLoading ? (
            <div className="empty-state">⏳ Đang tìm kiếm...</div>
          ) : results.length === 0 ? (
            <div className="empty-state">
              <p>😕 Không tìm thấy khách sạn phù hợp.</p>
              <button className="btn-search-main" style={{ marginTop: 16 }} onClick={() => { setDestination(''); setResults(ALL_HOTELS); }}>Xem tất cả</button>
            </div>
          ) : (
            <div className="hotel-results-list">
              {results.map(h => (
                <div className="hotel-card" key={h.id} onClick={() => openHotelDetail(h)}>
                  <div className="hotel-card-img-wrap">
                    <img src={h.image} alt={h.name} loading="lazy" />
                    {h.discount > 0 && <span className="hotel-discount-badge">Tiết kiệm {h.discount}%</span>}
                    <button className="wishlist-btn" title={wishlist.includes(h.id) ? 'Bỏ yêu thích' : 'Yêu thích'} onClick={(e) => toggleWishlist(e, h.id)}>
                      {wishlist.includes(h.id) ? '❤️' : '♡'}
                    </button>
                  </div>
                  <div className="hotel-card-info">
                    <div className="hotel-stars">{'⭐'.repeat(Math.min(h.stars, 5))}</div>
                    <h3>{h.name}</h3>
                    <p className="hotel-location">📍 {h.location}</p>
                    <div className="hotel-amenity-tags">
                      {h.amenities.map((a, i) => (
                        <span key={i} className="amenity-tag">{AMENITY_ICONS[a] || '✓'} {a}</span>
                      ))}
                    </div>
                    <div className="hotel-rating">
                      <span className="rating-badge">{h.rating}</span>
                      <span className="rating-label">Tuyệt vời</span>
                      <span style={{ color: '#687176', fontSize: 13 }}>({h.reviews.toLocaleString()} đánh giá)</span>
                    </div>
                    <div className="hotel-price-row">
                      <div>
                        <p className="old-price-text">{h.originalPrice} VND</p>
                        <p className="per-night-text">Giá mỗi đêm từ</p>
                        <p className="hotel-price">{h.price} VND</p>
                      </div>
                      <button className="btn-book" onClick={e => { e.stopPropagation(); setBookingHotel(h); }}>Chọn phòng →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        {bookingHotel && <BookingModal hotel={bookingHotel} onClose={() => setBookingHotel(null)} />}
      </div>
    </div>
  );
};

export default HotelPage;
