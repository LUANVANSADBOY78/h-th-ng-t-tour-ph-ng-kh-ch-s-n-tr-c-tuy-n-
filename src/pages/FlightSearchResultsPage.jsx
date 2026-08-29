import React, { useState } from 'react';
import '../styles/FlightSearchResultsPage.css';

const FlightSearchResultsPage = ({ onNavigate }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const FLIGHTS = [
    { id: 1, airline: 'Vietravel Airlines', logo: 'https://ui-avatars.com/api/?name=VU&background=004481&color=ffb612&font-size=0.4', timeStart: '11:50', timeEnd: '13:25', duration: '1h 35m', type: 'Bay thẳng', price: '2.133.250', airportStart: 'SGN', airportEnd: 'BKK' },
    { id: 2, airline: 'Thai Vietjet Air', logo: 'https://ui-avatars.com/api/?name=VZ&background=ed1b24&color=fff&font-size=0.4', timeStart: '14:45', timeEnd: '16:15', duration: '1h 30m', type: 'Bay thẳng', price: '2.203.771', airportStart: 'SGN', airportEnd: 'BKK' },
    { id: 3, airline: 'VietJet Air', logo: 'https://ui-avatars.com/api/?name=VJ&background=ed1b24&color=fff&font-size=0.4', timeStart: '20:35', timeEnd: '22:05', duration: '1h 30m', type: 'Bay thẳng', price: '2.315.251', airportStart: 'SGN', airportEnd: 'BKK' },
    { id: 4, airline: 'VietJet Air', logo: 'https://ui-avatars.com/api/?name=VJ&background=ed1b24&color=fff&font-size=0.4', timeStart: '11:15', timeEnd: '12:45', duration: '1h 30m', type: 'Bay thẳng', price: '2.315.251', airportStart: 'SGN', airportEnd: 'BKK' },
    { id: 5, airline: 'Thai AirAsia', logo: 'https://ui-avatars.com/api/?name=FD&background=ed1b24&color=fff&font-size=0.4', timeStart: '21:35', timeEnd: '23:05', duration: '1h 30m', type: 'Bay thẳng', price: '2.435.250', airportStart: 'SGN', airportEnd: 'BKK' },
  ];

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
    setShowModal(true);
  };

  return (
    <div className="flight-search-results" style={{ paddingTop: 80, background: '#f7f9fa', minHeight: '100vh' }}>
      
      {/* Header Info */}
      <div style={{ background: '#0194f3', padding: '16px 0', color: 'white' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 20 }}>TP HCM (SGN) → Bangkok (BKK)</h2>
            <p style={{ margin: '4px 0 0 0', fontSize: 14 }}>CN, 19 thg 7 2026 | 1 hành khách | Phổ thông</p>
          </div>
          <button style={{ background: 'white', color: '#0194f3', padding: '8px 16px', borderRadius: 8, fontWeight: 700, border: 'none' }} onClick={() => onNavigate('flight')}>
            Đổi tìm kiếm
          </button>
        </div>
      </div>

      <div className="container" style={{ display: 'flex', gap: 24, marginTop: 24 }}>
        
        {/* Left Sidebar Filters */}
        <div className="filters-sidebar" style={{ width: 280, flexShrink: 0, background: 'white', borderRadius: 8, padding: 16, height: 'fit-content', boxShadow: '0 1px 3px rgba(3,18,26,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <h3 style={{ margin: 0, fontSize: 16 }}>Bộ lọc</h3>
            <span style={{ color: '#0194f3', fontSize: 14, cursor: 'pointer', fontWeight: 600 }}>Xóa tất cả</span>
          </div>

          <div className="filter-group">
            <h4 style={{ margin: '0 0 12px 0', fontSize: 14 }}>Số điểm dừng</h4>
            <label className="filter-checkbox" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 14 }}>
              <span><input type="checkbox" defaultChecked /> Bay thẳng</span>
              <span style={{ color: '#687176' }}>2.133.250 VND</span>
            </label>
            <label className="filter-checkbox" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 14 }}>
              <span><input type="checkbox" /> 1 điểm dừng</span>
              <span style={{ color: '#687176' }}>4.081.355 VND</span>
            </label>
            <label className="filter-checkbox" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 14 }}>
              <span><input type="checkbox" /> 2+ transits</span>
              <span style={{ color: '#687176' }}>8.676.910 VND</span>
            </label>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #f0f1f2', margin: '16px 0' }} />

          <div className="filter-group">
            <h4 style={{ margin: '0 0 12px 0', fontSize: 14 }}>Hãng hàng không</h4>
            {['Air Cambodia', 'Bangkok Airways', 'Cathay Pacific', 'China Eastern Airlines', 'Lao Airlines', 'Malaysia Airlines', 'Scoot', 'Thai AirAsia', 'Thai Vietjet Air', 'VietJet Air', 'Vietravel Airlines', 'Vietnam Airlines'].map((airline, idx) => (
              <label key={idx} className="filter-checkbox" style={{ display: 'flex', alignItems: 'center', marginBottom: 8, fontSize: 14 }}>
                <input type="checkbox" defaultChecked={['Vietravel Airlines', 'Thai Vietjet Air', 'VietJet Air'].includes(airline)} style={{ marginRight: 8 }} /> {airline}
              </label>
            ))}
          </div>
        </div>

        {/* Main Results */}
        <div className="results-main" style={{ flex: 1 }}>
          {/* Price Alert Banner */}
          <div style={{ background: 'white', borderRadius: 8, padding: 16, marginBottom: 16, boxShadow: '0 1px 3px rgba(3,18,26,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: '4px solid #0194f3' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 24 }}>🔔</span>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: 16 }}>Cảnh báo giá (Price Alerts)</h4>
                <p style={{ margin: 0, fontSize: 14, color: '#687176' }}>Nhận thông báo ngay khi có vé rẻ cho chặng SGN - BKK phù hợp ngân sách của bạn.</p>
              </div>
            </div>
            <button style={{ background: '#0194f3', color: 'white', border: 'none', padding: '8px 16px', borderRadius: 4, fontWeight: 600, cursor: 'pointer' }}>Tạo Cảnh Báo</button>
          </div>

          {FLIGHTS.map((flight) => (
            <div key={flight.id} className="flight-result-card" style={{ background: 'white', borderRadius: 8, padding: 16, marginBottom: 16, boxShadow: '0 1px 3px rgba(3,18,26,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                
                {/* Airline Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: 200 }}>
                  <img src={flight.logo} alt={flight.airline} style={{ width: 24, height: 24, objectFit: 'contain' }} />
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{flight.airline}</span>
                </div>

                {/* Time & Route Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flex: 1, justifyContent: 'center' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{flight.timeStart}</div>
                    <div style={{ fontSize: 14, color: '#687176' }}>{flight.airportStart}</div>
                  </div>
                  
                  <div style={{ textAlign: 'center', width: 100 }}>
                    <div style={{ fontSize: 12, color: '#687176' }}>{flight.duration}</div>
                    <div style={{ borderBottom: '1px solid #cdd0d1', margin: '4px 0', position: 'relative' }}>
                      <span style={{ position: 'absolute', top: -5, left: '50%', transform: 'translateX(-50%)', background: 'white', padding: '0 4px', fontSize: 10, color: '#cdd0d1' }}>✈️</span>
                    </div>
                    <div style={{ fontSize: 12, color: '#687176' }}>{flight.type}</div>
                  </div>

                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{flight.timeEnd}</div>
                    <div style={{ fontSize: 14, color: '#687176' }}>{flight.airportEnd}</div>
                  </div>
                </div>

                {/* Price & Action */}
                <div style={{ width: 150, textAlign: 'right' }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#ff5e1f', marginBottom: 8 }}>{flight.price} VND<span style={{ fontSize: 12, fontWeight: 400, color: '#687176' }}>/khách</span></div>
                  <button style={{ background: '#0194f3', color: 'white', border: 'none', padding: '8px 24px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }} onClick={() => handleSelectFlight(flight)}>
                    Chọn
                  </button>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticket Selection Modal */}
      {showModal && selectedFlight && (
        <div className="ticket-modal-overlay" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="ticket-modal-content" style={{ background: '#f7f9fa', width: 1000, maxWidth: '90%', maxHeight: '90vh', overflowY: 'auto', borderRadius: 12, display: 'flex', flexDirection: 'column' }}>
            
            {/* Modal Header */}
            <div style={{ padding: '16px 24px', background: 'white', borderBottom: '1px solid #f0f1f2', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <button onClick={() => setShowModal(false)} style={{ fontSize: 24, cursor: 'pointer' }}>&times;</button>
                <h2 style={{ margin: 0, fontSize: 18 }}>Chọn loại vé</h2>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: 24 }}>
              
              <div style={{ background: 'white', borderRadius: 8, padding: 16, marginBottom: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: 14, color: '#0194f3', fontWeight: 600, marginBottom: 12 }}>Khởi hành: TP HCM → Bangkok | CN, 19 thg 7 2026</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <img src={selectedFlight.logo} alt="logo" style={{ width: 24, height: 24 }} />
                    <span style={{ fontWeight: 600 }}>{selectedFlight.airline}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 700 }}>{selectedFlight.timeStart}</div>
                      <div style={{ fontSize: 12, color: '#687176' }}>{selectedFlight.airportStart}</div>
                    </div>
                    <div style={{ textAlign: 'center', width: 80 }}>
                      <div style={{ fontSize: 12, color: '#687176' }}>{selectedFlight.duration}</div>
                      <div style={{ borderBottom: '1px solid #cdd0d1' }}></div>
                      <div style={{ fontSize: 12, color: '#687176' }}>{selectedFlight.type}</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700 }}>{selectedFlight.timeEnd}</div>
                      <div style={{ fontSize: 12, color: '#687176' }}>{selectedFlight.airportEnd}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tickets Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                {[
                  { name: 'Economy', price: selectedFlight.price, type: 'Economy' },
                  { name: 'Economy | Intl - Economy Saver', price: '2.146.088', type: 'Economy' },
                  { name: 'Economy | An toàn', price: '2.453.310', type: 'Economy', safe: true },
                  { name: 'Economy | Baggage Bundle 15kg', price: '2.502.349', type: 'Economy' }
                ].map((ticket, idx) => (
                  <div key={idx} style={{ background: 'white', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                    <div style={{ fontSize: 12, color: '#687176', marginBottom: 4 }}>{ticket.name}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: '#03121a', marginBottom: 16 }}>{ticket.price} VND<span style={{fontSize:12, fontWeight:400}}>/khách</span></div>
                    
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 12, color: '#03121a', flex: 1 }}>
                      <li style={{ marginBottom: 8, display: 'flex', gap: 8 }}><span>🎒</span> Hành lý xách tay 7 kg</li>
                      <li style={{ marginBottom: 8, display: 'flex', gap: 8 }}><span>🧳</span> Hành lý ký gửi 0 kg</li>
                      <li style={{ marginBottom: 8, display: 'flex', gap: 8 }}><span>📅</span> Đổi lịch có phí</li>
                      {ticket.safe ? (
                        <li style={{ marginBottom: 8, display: 'flex', gap: 8, color: '#006633' }}><span>🛡️</span> Bảo hiểm du lịch toàn diện Chubb</li>
                      ) : (
                        <li style={{ marginBottom: 8, display: 'flex', gap: 8, color: '#687176' }}><span>❌</span> Không có thông tin hoàn tiền</li>
                      )}
                      <li style={{ marginBottom: 8, display: 'flex', gap: 8, color: '#687176' }}><span>❌</span> Không cung cấp hóa đơn VAT</li>
                    </ul>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                      <span style={{ fontSize: 12, color: '#0194f3', fontWeight: 600, cursor: 'pointer' }}>Tìm hiểu thêm</span>
                      <button 
                        style={{ background: '#0194f3', color: 'white', border: 'none', padding: '8px 16px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }} 
                        onClick={() => {
                          setShowModal(false);
                          if(onNavigate) onNavigate('flight-booking');
                        }}
                      >
                        Chọn
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default FlightSearchResultsPage;
