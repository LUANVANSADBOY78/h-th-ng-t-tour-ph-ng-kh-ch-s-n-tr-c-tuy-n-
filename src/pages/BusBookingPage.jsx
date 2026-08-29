import React from 'react';

const BusBookingPage = () => {
  return (
    <div style={{ background: '#f7f9fa', minHeight: '100vh', fontFamily: 'Godwit, Noto Sans, sans-serif', color: '#03121a' }}>
      
      {/* Top Bar */}
      <div style={{ background: 'white', padding: '16px 0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: 24 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Đặt chỗ của tôi</h1>
            <p style={{ color: '#687176', marginTop: 4, fontSize: 14 }}>Điền thông tin và xem lại đặt chỗ.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 14 }}>
            <span style={{ color: '#0194f3', fontWeight: 600 }}>❶ Đặt</span>
            <span style={{ color: '#687176' }}>— ❷ Xem lại — ❸ Thanh toán — ❹ Vé điện tử</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ display: 'flex', gap: 24 }}>
        
        {/* Left Column - Forms */}
        <div style={{ flex: 1 }}>
          
          {/* Login Banner */}
          <div style={{ background: 'white', padding: 16, borderRadius: 8, display: 'flex', gap: 16, alignItems: 'center', marginBottom: 24, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <img src="https://ui-avatars.com/api/?name=Login&background=e0f2fe&color=0194f3&rounded=true" alt="Login" width="48" height="48" />
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>Đăng nhập hoặc đăng ký để đặt chỗ dễ dàng và nhận thêm nhiều lợi ích!</h3>
              <p style={{ fontSize: 14, color: '#687176', marginTop: 4 }}>Nhanh chóng điền thông tin với Chi tiết hành khách đã lưu</p>
              <a href="#" style={{ color: '#0194f3', fontWeight: 600, fontSize: 14, display: 'inline-block', marginTop: 8 }}>Đăng nhập hoặc Đăng ký</a>
            </div>
          </div>

          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Thông tin liên hệ</h2>
          
          {/* Contact Info Card */}
          <div style={{ background: 'white', padding: '24px', borderRadius: 8, marginBottom: 24, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>Thông tin liên hệ (nhận vé/phiếu thanh toán)</h3>
              <span style={{ color: '#0194f3', fontWeight: 600, cursor: 'pointer' }}>Lưu</span>
            </div>
            
            <div style={{ display: 'grid', gap: 16 }}>
              <div>
                <label style={{ fontSize: 14, fontWeight: 600, color: '#687176' }}>Danh xưng*</label>
                <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccd1d1', borderRadius: 6, marginTop: 4 }}>
                  <option>Ông</option>
                  <option>Bà</option>
                  <option>Cô</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: 14, fontWeight: 600, color: '#687176' }}>Họ tên*</label>
                <input type="text" style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccd1d1', borderRadius: 6, marginTop: 4 }} />
                <p style={{ fontSize: 12, color: '#687176', marginTop: 4 }}>Người Việt: nhập Tên đệm + Tên chính + Họ. Người nước ngoài: nhập Tên + Họ.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={{ fontSize: 14, fontWeight: 600, color: '#687176' }}>Điện thoại di động*</label>
                  <div style={{ display: 'flex', marginTop: 4 }}>
                    <select style={{ width: 80, padding: '10px', border: '1px solid #ccd1d1', borderRadius: '6px 0 0 6px', borderRight: 'none' }}>
                      <option>🇻🇳 +84</option>
                    </select>
                    <input type="text" style={{ flex: 1, padding: '10px 12px', border: '1px solid #ccd1d1', borderRadius: '0 6px 6px 0' }} />
                  </div>
                  <p style={{ fontSize: 12, color: '#687176', marginTop: 4 }}>Nhập số điện thoại không bao gồm mã điện thoại quốc gia/khu vực đã chọn</p>
                </div>
                <div>
                  <label style={{ fontSize: 14, fontWeight: 600, color: '#687176' }}>Email*</label>
                  <input type="email" placeholder="VD: email@example.com" style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccd1d1', borderRadius: 6, marginTop: 4 }} />
                </div>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Thông tin hành khách</h2>

          {/* Passenger Info Card */}
          <div style={{ background: 'white', padding: '24px', borderRadius: 8, marginBottom: 24, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>Người lớn 1</h3>
              <span style={{ color: '#0194f3', fontWeight: 600, cursor: 'pointer' }}>Lưu</span>
            </div>
            
            <div style={{ display: 'grid', gap: 16 }}>
              <div>
                <label style={{ fontSize: 14, fontWeight: 600, color: '#687176' }}>Danh xưng*</label>
                <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccd1d1', borderRadius: 6, marginTop: 4 }}>
                  <option>Ông</option>
                  <option>Bà</option>
                  <option>Cô</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: 14, fontWeight: 600, color: '#687176' }}>Họ tên*</label>
                <input type="text" style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccd1d1', borderRadius: 6, marginTop: 4 }} />
                <p style={{ fontSize: 12, color: '#687176', marginTop: 4 }}>Người Việt: nhập Tên đệm + Tên chính + Họ. Người nước ngoài: nhập Tên + Họ.</p>
              </div>
            </div>
          </div>
          
          {/* Continue Button */}
          <div style={{ textAlign: 'center', paddingBottom: 40 }}>
            <button 
              onClick={() => window.location.hash = 'payment'}
              style={{ background: '#0194f3', color: 'white', border: 'none', padding: '12px 64px', borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: 'pointer' }}
            >
              Tiếp tục
            </button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div style={{ width: 340, flexShrink: 0 }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: 8, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ color: '#0194f3', fontSize: 18 }}>🚌</span>
              <span style={{ fontWeight: 700 }}>Lam Dong Province ➔ District 5</span>
            </div>
            
            <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Thứ 4, 17 thg 6 2026</p>
            <p style={{ fontSize: 14, fontWeight: 600 }}>Dien Linh Limousine</p>
            <p style={{ fontSize: 12, color: '#687176' }}>Giường nằm nhỏ - Limousine 36 giường</p>
            
            <div style={{ borderTop: '1px solid #f2f3f3', margin: '16px 0' }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0194f3' }}></div>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0194f3' }}></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BusBookingPage;
