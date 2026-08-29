import React from 'react';

const FlightBookingPage = () => {
  return (
    <div style={{ background: '#f7f9fa', minHeight: '100vh', fontFamily: 'Godwit, Noto Sans, sans-serif', color: '#03121a' }}>
      
      {/* Top Navigation Bar / Progress */}
      <div style={{ background: 'white', borderBottom: '1px solid #f0f1f2', padding: '16px 0', marginBottom: 24 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, fontSize: 14, fontWeight: 600 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#0194f3' }}>
            <span style={{ width: 24, height: 24, background: '#0194f3', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>✓</span>
            Chi tiết chuyến đi của bạn
          </div>
          <div style={{ height: 1, width: 40, background: '#ccd1d4' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#687176' }}>
            <span style={{ width: 24, height: 24, border: '1px solid #ccd1d4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>2</span>
            Thanh toán
          </div>
        </div>
      </div>

      <div className="container" style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
        
        {/* Left Column: Forms */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
          
          <h2 style={{ fontSize: 20, margin: 0, fontWeight: 700 }}>Thông tin liên hệ (nhận vé/phiếu thanh toán)</h2>
          
          <div style={{ background: 'white', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(3,18,26,0.08)' }}>
            {/* Banner */}
            <div style={{ background: '#0194f3', color: 'white', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>🌟 Đăng nhập hoặc đăng ký để có giá rẻ hơn và nhiều ưu đãi hơn!</div>
              <button style={{ background: 'transparent', border: '1px solid white', color: 'white', padding: '6px 12px', borderRadius: 4, fontWeight: 700, cursor: 'pointer' }}>Đăng nhập hoặc Đăng ký</button>
            </div>
            
            <div style={{ padding: 24 }}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Họ tên*</label>
                <input type="text" style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccd1d4', borderRadius: 4, outline: 'none' }} />
                <div style={{ fontSize: 12, color: '#687176', marginTop: 4 }}>Người Việt: nhập Tên đệm + Tên chính + Họ. Người nước ngoài: nhập Tên + Họ.</div>
              </div>
              
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Điện thoại di động*</label>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <select style={{ width: 80, padding: '10px', border: '1px solid #ccd1d4', borderRadius: 4, outline: 'none' }}>
                      <option>🇻🇳 +84</option>
                    </select>
                    <input type="text" style={{ flex: 1, padding: '10px 12px', border: '1px solid #ccd1d4', borderRadius: 4, outline: 'none' }} />
                  </div>
                  <div style={{ fontSize: 12, color: '#687176', marginTop: 4 }}>Nhập số điện thoại không bao gồm mã quốc gia.</div>
                </div>
                
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Email*</label>
                  <input type="email" placeholder="VD: email@example.com" style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccd1d4', borderRadius: 4, outline: 'none' }} />
                </div>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: 20, margin: 0, fontWeight: 700 }}>Thông tin hành khách</h2>

          <div style={{ background: 'white', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(3,18,26,0.08)' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid #f0f1f2', fontWeight: 700, fontSize: 16 }}>Người lớn 1</div>
            
            <div style={{ padding: 24 }}>
              <div style={{ background: '#fff5e6', borderLeft: '4px solid #ff5e1f', padding: '12px 16px', marginBottom: 24, fontSize: 14 }}>
                <span style={{ fontWeight: 700, color: '#ff5e1f' }}>⚠️ Vui lòng chú ý cho những điều sau đây:</span><br/>
                Vui lòng nhập tên bằng tiếng Anh không dấu (không có ký tự đặc biệt), chính xác như trên giấy tờ tùy thân. Nếu không, bạn có thể bị từ chối lên máy bay hoặc phát sinh thêm chi phí. <span style={{ color: '#0194f3', cursor: 'pointer' }}>Xem hướng dẫn tên</span>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Giới tính*</label>
                <select style={{ width: 150, padding: '10px 12px', border: '1px solid #ccd1d4', borderRadius: 4, outline: 'none' }}>
                  <option>Chọn</option>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Họ (vd: NGUYEN)*</label>
                  <input type="text" style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccd1d4', borderRadius: 4, outline: 'none' }} />
                  <div style={{ fontSize: 12, color: '#687176', marginTop: 4 }}>như trên CMND (không dấu)</div>
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Chữ đệm và tên (vd: VAN ANH)*</label>
                  <input type="text" style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccd1d4', borderRadius: 4, outline: 'none' }} />
                  <div style={{ fontSize: 12, color: '#687176', marginTop: 4 }}>như trên CMND (không dấu)</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Ngày sinh*</label>
                  <input type="date" style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccd1d4', borderRadius: 4, outline: 'none' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Quốc tịch*</label>
                  <select style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccd1d4', borderRadius: 4, outline: 'none' }}>
                    <option>Việt Nam</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Cross-Sell Module */}
          <h2 style={{ fontSize: 20, margin: 0, fontWeight: 700 }}>Dịch vụ bổ sung (Tùy chọn)</h2>
          <div style={{ background: 'white', borderRadius: 8, padding: 24, boxShadow: '0 1px 3px rgba(3,18,26,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, borderBottom: '1px solid #eee', paddingBottom: 16 }}>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: 16 }}>🧳 Hành lý mua thêm</h4>
                <p style={{ margin: 0, fontSize: 14, color: '#687176' }}>Mua thêm hành lý ngay để có giá rẻ hơn tại sân bay.</p>
              </div>
              <button style={{ background: 'white', border: '1px solid #0194f3', color: '#0194f3', padding: '8px 16px', borderRadius: 4, fontWeight: 600, cursor: 'pointer' }}>+ Thêm</button>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, borderBottom: '1px solid #eee', paddingBottom: 16 }}>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: 16 }}>🛡️ Bảo hiểm du lịch</h4>
                <p style={{ margin: 0, fontSize: 14, color: '#687176' }}>Bảo vệ toàn diện cho chuyến bay của bạn. Giá từ 45.000 VND.</p>
              </div>
              <button style={{ background: 'white', border: '1px solid #0194f3', color: '#0194f3', padding: '8px 16px', borderRadius: 4, fontWeight: 600, cursor: 'pointer' }}>+ Thêm</button>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: 16 }}>🚕 Đưa đón sân bay</h4>
                <p style={{ margin: 0, fontSize: 14, color: '#687176' }}>Đến sân bay thư thái với dịch vụ đưa đón bằng xe hơi riêng.</p>
              </div>
              <button style={{ background: 'white', border: '1px solid #0194f3', color: '#0194f3', padding: '8px 16px', borderRadius: 4, fontWeight: 600, cursor: 'pointer' }}>+ Thêm</button>
            </div>
          </div>
          
          <button 
            onClick={() => window.location.hash = 'payment'}
            style={{ alignSelf: 'flex-end', background: '#ff5e1f', color: 'white', border: 'none', padding: '12px 24px', borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: 'pointer', marginBottom: 40, marginTop: 16 }}
          >
            Tiếp tục
          </button>
        </div>

        {/* Right Column: Summary */}
        <div style={{ width: 320, flexShrink: 0 }}>
          
          {/* Completion Note */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, fontSize: 14, fontWeight: 600, color: '#687176' }}>
            <span>✔️</span> Hãy hoàn tất đặt vé ngay!
          </div>

          <div style={{ background: 'white', borderRadius: 8, padding: 16, marginBottom: 16, boxShadow: '0 1px 3px rgba(3,18,26,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ margin: 0, fontSize: 16 }}>Tóm tắt chuyến bay</h3>
              <span style={{ fontSize: 14, color: '#0194f3', fontWeight: 600, cursor: 'pointer' }}>Chi tiết</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1, textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>TP HCM (SGN)</div>
                <div style={{ fontSize: 12, color: '#687176' }}>CN, 19 thg 7 2026<br/>11:50</div>
              </div>
              <div style={{ textAlign: 'center', width: 60 }}>
                <div style={{ fontSize: 12, color: '#687176' }}>1h 35m</div>
                <div style={{ borderBottom: '1px solid #ccd1d4', margin: '4px 0' }}></div>
                <div style={{ fontSize: 12, color: '#687176' }}>Bay thẳng</div>
              </div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Bangkok (BKK)</div>
                <div style={{ fontSize: 12, color: '#687176' }}>CN, 19 thg 7 2026<br/>13:25</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 12, color: '#03121a' }}>
              <img src="https://ui-avatars.com/api/?name=VU&background=004481&color=ffb612&font-size=0.4" alt="VU" style={{ width: 16, height: 16 }} />
              <strong>Vietravel Airlines</strong>
            </div>
            <div style={{ fontSize: 12, color: '#687176', marginBottom: 12 }}>✔️ Chuyến bay - Phổ thông</div>

            <div style={{ fontSize: 10, fontWeight: 700, color: '#006633', border: '1px solid #006633', display: 'inline-block', padding: '2px 6px', borderRadius: 4, marginBottom: 4 }}>
              CÓ ÁP DỤNG ĐỔI LỊCH BAY
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#687176', border: '1px solid #ccd1d4', display: 'inline-block', padding: '2px 6px', borderRadius: 4 }}>
              HOÀN VÉ TÙY THUỘC VÀO CHÍNH SÁCH CỦA HÃNG HÀNG KHÔNG
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: 8, padding: 16, boxShadow: '0 1px 3px rgba(3,18,26,0.08)' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: 16 }}>Tóm tắt</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>Giá bạn trả</span>
              <span style={{ fontSize: 18, fontWeight: 800, color: '#ff5e1f' }}>2.282.650 VND <span style={{fontSize: 14}}>⌄</span></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FlightBookingPage;
