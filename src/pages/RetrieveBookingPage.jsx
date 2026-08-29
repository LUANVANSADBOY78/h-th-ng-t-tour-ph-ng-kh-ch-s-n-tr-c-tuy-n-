import React from 'react';
import '../styles/RetrieveBookingPage.css';

const RetrieveBookingPage = () => {
  return (
    <div className="retrieve-booking-page" style={{ paddingTop: 112, background: '#f7f9fa', minHeight: '100vh' }}>
      <div className="container" style={{ display: 'flex', gap: 32, paddingBottom: 60 }}>
        
        {/* Left Sidebar */}
        <div className="rb-sidebar" style={{ width: 280, flexShrink: 0 }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: 18, color: '#03121a' }}>Giao dịch đang tiến hành</h3>
          <div className="sidebar-item" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', color: '#687176', fontWeight: 600, cursor: 'pointer', borderRadius: 8 }}>
            <span>📄</span> Tất cả sản phẩm
          </div>

          <h3 style={{ margin: '24px 0 16px 0', fontSize: 18, color: '#03121a' }}>Khôi phục đặt chỗ</h3>
          <div className="sidebar-item active" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: '#0194f3', color: 'white', fontWeight: 600, borderRadius: 8, cursor: 'pointer' }}>
            <span>✈️</span> Vé máy bay
          </div>
          <div className="sidebar-item" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', color: '#687176', fontWeight: 600, cursor: 'pointer', borderRadius: 8 }}>
            <span>🏢</span> Khách sạn
          </div>
          <div className="sidebar-item" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', color: '#687176', fontWeight: 600, cursor: 'pointer', borderRadius: 8 }}>
            <span>🚆</span> Trains
          </div>
          <div className="sidebar-item" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', color: '#687176', fontWeight: 600, cursor: 'pointer', borderRadius: 8 }}>
            <span>🎡</span> Activities
          </div>
        </div>

        {/* Right Content */}
        <div className="rb-content" style={{ flex: 1 }}>
          
          {/* Blue Banner */}
          <div className="rb-banner" style={{ background: '#0194f3', borderRadius: 8, padding: 24, color: 'white', display: 'flex', gap: 16, alignItems: 'flex-start', position: 'relative', marginBottom: 24 }}>
            <button style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', color: 'white', fontSize: 20, cursor: 'pointer' }}>&times;</button>
            <div style={{ fontSize: 40 }}>📝</div>
            <div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: 16, fontWeight: 700 }}>Dễ dàng truy cập đặt chỗ của bạn trên Traveloka</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>
                <a href="#" style={{ color: 'white', textDecoration: 'underline', fontWeight: 700 }}>Đăng nhập</a> vào tài khoản Traveloka hoặc <a href="#" style={{ color: 'white', textDecoration: 'underline', fontWeight: 700 }}>đăng ký</a> để xem các đặt chỗ hiện tại và trước đây của bạn, cũng như quản lý mọi vấn đề liên quan tới đặt chỗ (ví dụ: yêu cầu hoàn tiền hoặc đổi lịch).
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="rb-form-card" style={{ background: 'white', borderRadius: 8, padding: 24, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <p style={{ margin: '0 0 24px 0', fontSize: 14, color: '#03121a', lineHeight: 1.5 }}>
              Khôi phục đặt chỗ dễ dàng bằng cách điền thông tin đặt chỗ ngay dưới đây. Bạn cũng có thể dùng mẫu này để khôi phục và tiếp tục các giao dịch chưa thanh toán nữa đấy.
            </p>

            <div style={{ textAlign: 'right', marginBottom: 16 }}>
              <a href="#" style={{ color: '#0194f3', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Truy xuất theo ID đặt chỗ</a>
            </div>

            <div className="rb-inputs-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 24 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#687176', marginBottom: 4 }}>Từ</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #cdd0d1', borderRadius: 8, padding: '10px 12px' }}>
                  <span>🛫</span>
                  <input type="text" defaultValue="TP HCM (SGN)" style={{ border: 'none', outline: 'none', width: '100%', fontSize: 14, fontWeight: 600, color: '#03121a' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#687176', marginBottom: 4 }}>Đến</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #cdd0d1', borderRadius: 8, padding: '10px 12px' }}>
                  <span>🛬</span>
                  <input type="text" defaultValue="Bangkok (BKKA)" style={{ border: 'none', outline: 'none', width: '100%', fontSize: 14, fontWeight: 600, color: '#03121a' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#687176', marginBottom: 4 }}>Ngày bay</label>
                <div style={{ border: '1px solid #cdd0d1', borderRadius: 8, padding: '10px 12px' }}>
                  <input type="text" defaultValue="Thứ 4, thg 6 17, 2026" style={{ border: 'none', outline: 'none', width: '100%', fontSize: 14, fontWeight: 600, color: '#03121a' }} />
                </div>
              </div>
            </div>

            <div className="rb-phone-row" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24 }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#687176', marginBottom: 4 }}>Số di động</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #cdd0d1', borderRadius: 8, padding: '10px 12px', width: 100 }}>
                    <span>🇻🇳</span> <span style={{fontSize: 14, fontWeight: 600}}>+84</span>
                  </div>
                  <div style={{ border: '1px solid #cdd0d1', borderRadius: 8, padding: '10px 12px', flex: 1 }}>
                    <input type="text" style={{ border: 'none', outline: 'none', width: '100%', fontSize: 14, fontWeight: 600 }} />
                  </div>
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: 12, color: '#687176' }}>Số điện thoại bạn cung cấp khi đặt chỗ.</p>
              </div>

              <div style={{ paddingTop: 20 }}>
                <button style={{ background: '#0194f3', color: 'white', border: 'none', padding: '12px 24px', borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
                  Khôi phục đặt chỗ
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetrieveBookingPage;
