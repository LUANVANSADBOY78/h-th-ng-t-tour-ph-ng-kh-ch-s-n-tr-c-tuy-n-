import React from 'react';

const BusSearchResultsPage = () => {
  return (
    <div style={{ paddingTop: 80, background: '#f7f9fa', minHeight: '100vh', fontFamily: 'Godwit, Noto Sans, sans-serif' }}>
      
      {/* Search Header */}
      <div style={{ background: 'white', padding: '16px 0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
              Đà Lạt <span style={{ color: '#687176' }}>→</span> TP HCM
            </div>
            <div style={{ fontSize: 14, color: '#687176', marginTop: 4 }}>
              Thứ Tư, 17 tháng 6 2026 • 1 chỗ ngồi
            </div>
          </div>
          <button style={{ background: '#0194f3', color: 'white', border: 'none', padding: '8px 16px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>
            Thay đổi tìm kiếm
          </button>
        </div>
      </div>

      <div className="container" style={{ display: 'flex', gap: 24, marginTop: 24 }}>
        
        {/* Sidebar Filters */}
        <div style={{ width: 280, flexShrink: 0 }}>
          <div style={{ background: 'white', padding: 16, borderRadius: 8, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>Lọc</h3>
              <span style={{ fontSize: 14, color: '#0194f3', cursor: 'pointer', fontWeight: 600 }}>Đặt lại bộ lọc</span>
            </div>
            <p style={{ fontSize: 14, color: '#687176', marginBottom: 16 }}>Hiển thị kết quả dựa trên danh mục của bạn</p>

            {['Chọn điểm lên xe', 'Chọn điểm đến', 'Giờ khởi hành', 'Giờ đến', 'Hãng Xe Buýt', 'Tiện ích', 'Kiểu ghế ngồi', 'Chỗ ngồi', 'Tên đội xe', 'Loại đội xe'].map((filter, i) => (
              <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid #f2f3f3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600, fontSize: 14 }}>
                {filter}
                <span style={{ color: '#0194f3' }}>⌄</span>
              </div>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div style={{ flex: 1, paddingBottom: 60 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
            <button style={{ background: 'white', border: '1px solid #ccd1d1', padding: '8px 16px', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, cursor: 'pointer' }}>
              SẮP XẾP <span style={{ color: '#0194f3' }}>⌄</span>
            </button>
          </div>

          {/* Best Match Highlight */}
          <div style={{ background: '#fff0e5', border: '1px solid #ff5e1f', borderRadius: 8, padding: '24px 24px', marginBottom: 24 }}>
            <h3 style={{ color: '#ff5e1f', fontSize: 18, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              ❤️ Tốt nhất cho tìm kiếm của bạn
            </h3>
            
            <div style={{ display: 'flex', gap: 16 }}>
              {/* Bus Card 1 */}
              <div style={{ background: 'white', borderRadius: 8, flex: 1, overflow: 'hidden', border: '1px solid #e1e4e6' }}>
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80" alt="Bus" style={{ width: '100%', height: 140, objectFit: 'cover' }} />
                <div style={{ padding: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 700 }}>Dien Linh Limousine</h4>
                      <p style={{ fontSize: 12, color: '#687176' }}>Giường nằm nh...</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: 11, color: '#0194f3', fontWeight: 700 }}>🏷️ Giá vé đặc biệt</p>
                      <p style={{ fontSize: 18, fontWeight: 700, color: '#ff5e1f' }}>310.500 VND <span style={{ fontSize: 12, color: '#687176', fontWeight: 400 }}>/chỗ ngồi</span></p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: 16, marginTop: 16, alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: 16, fontWeight: 700 }}>22:00</p>
                    </div>
                    <div style={{ flex: 1, borderTop: '2px dotted #ccd1d1', position: 'relative' }}>
                      <span style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', background: 'white', padding: '0 8px', fontSize: 12, color: '#687176' }}>7 giờ 45 phút</span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: 16, fontWeight: 700 }}>05:45</p>
                      <p style={{ fontSize: 12, color: '#687176' }}>+1 ngày</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                    <span style={{ fontSize: 14, color: '#0194f3', cursor: 'pointer', fontWeight: 600 }}>Xem chi tiết</span>
                    <button 
                      onClick={() => window.location.hash = 'bus-booking'}
                      style={{ background: '#ff5e1f', color: 'white', border: 'none', padding: '8px 32px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}
                    >
                      Đặt Ngay
                    </button>
                  </div>
                </div>
              </div>

              {/* Bus Card 2 */}
              <div style={{ background: 'white', borderRadius: 8, flex: 1, overflow: 'hidden', border: '1px solid #e1e4e6' }}>
                <img src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=400&q=80" alt="Bus" style={{ width: '100%', height: 140, objectFit: 'cover' }} />
                <div style={{ padding: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 700 }}>Hoang Thuy</h4>
                      <p style={{ fontSize: 12, color: '#687176' }}>Phòng Đơn N...</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ fontSize: 11, color: '#0194f3', fontWeight: 700 }}>🏷️ Giá vé đặc biệt</p>
                      <p style={{ fontSize: 18, fontWeight: 700, color: '#ff5e1f' }}>345.000 VND <span style={{ fontSize: 12, color: '#687176', fontWeight: 400 }}>/chỗ ngồi</span></p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: 16, marginTop: 16, alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: 16, fontWeight: 700 }}>22:00</p>
                    </div>
                    <div style={{ flex: 1, borderTop: '2px dotted #ccd1d1', position: 'relative' }}>
                      <span style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', background: 'white', padding: '0 8px', fontSize: 12, color: '#687176' }}>5 giờ 55 phút</span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: 16, fontWeight: 700 }}>03:55</p>
                      <p style={{ fontSize: 12, color: '#687176' }}>+1 ngày</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                    <span style={{ fontSize: 14, color: '#0194f3', cursor: 'pointer', fontWeight: 600 }}>Xem chi tiết</span>
                    <button 
                      onClick={() => window.location.hash = 'bus-booking'}
                      style={{ background: '#ff5e1f', color: 'white', border: 'none', padding: '8px 32px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}
                    >
                      Đặt Ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Normal Bus List */}
          {[1,2,3].map((item) => (
            <div key={item} style={{ background: 'white', borderRadius: 8, padding: 16, marginBottom: 16, border: '1px solid #e1e4e6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 700 }}>Dien Linh Limousine</h4>
                  <p style={{ fontSize: 12, color: '#687176' }}>Giường nằm nhỏ - Limousine 36 giường</p>
                  
                  <div style={{ display: 'flex', gap: 16, marginTop: 16, alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: 16, fontWeight: 700 }}>16:15</p>
                    </div>
                    <div style={{ width: 100, borderTop: '2px dotted #ccd1d1', position: 'relative' }}></div>
                    <div style={{ textAlign: 'center' }}>
                      <p style={{ fontSize: 16, fontWeight: 700 }}>00:05</p>
                      <p style={{ fontSize: 12, color: '#687176' }}>+1 ngày</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontSize: 11, color: '#0194f3', fontWeight: 700 }}>🏷️ Giá vé đặc biệt</p>
                    <p style={{ fontSize: 18, fontWeight: 700, color: '#ff5e1f' }}>310.500 VND <span style={{ fontSize: 12, color: '#687176', fontWeight: 400 }}>/khách</span></p>
                  </div>
                  <button 
                    onClick={() => window.location.hash = 'bus-booking'}
                    style={{ background: '#ff5e1f', color: 'white', border: 'none', padding: '8px 32px', borderRadius: 8, fontWeight: 700, cursor: 'pointer', alignSelf: 'flex-end', marginTop: 16 }}
                  >
                    Đặt Ngay
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default BusSearchResultsPage;
