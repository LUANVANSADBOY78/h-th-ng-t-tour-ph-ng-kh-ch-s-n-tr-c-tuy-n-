import React, { useState } from 'react';

const PaymentPage = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  if (showSuccess) {
    return (
      <div style={{ paddingTop: 100, background: '#f7f9fa', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ background: 'white', padding: 40, borderRadius: 12, textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: 64, color: '#006633', marginBottom: 16 }}>✅</div>
          <h2 style={{ fontSize: 24, margin: '0 0 16px 0', color: '#03121a' }}>Thanh toán thành công!</h2>
          <p style={{ color: '#687176', marginBottom: 24 }}>Cảm ơn bạn đã sử dụng dịch vụ của Traveloka.<br/>Vé điện tử đã được gửi tới email của bạn.</p>
          <button 
            style={{ background: '#0194f3', color: 'white', border: 'none', padding: '12px 24px', borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: 'pointer' }}
            onClick={() => window.location.hash = ''}
          >
            Quay về trang chủ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#f7f9fa', minHeight: '100vh', fontFamily: 'Godwit, Noto Sans, sans-serif', color: '#03121a' }}>
      
      {/* Top Navigation Bar / Progress */}
      <div style={{ background: 'white', borderBottom: '1px solid #f0f1f2', padding: '16px 0', marginBottom: 24 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, fontSize: 14, fontWeight: 600 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#0194f3' }}>
            <span style={{ width: 24, height: 24, background: '#e0f4ff', color: '#0194f3', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>✓</span>
            Chi tiết chuyến đi của bạn
          </div>
          <div style={{ height: 1, width: 40, background: '#0194f3' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#0194f3' }}>
            <span style={{ width: 24, height: 24, background: '#0194f3', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>2</span>
            Thanh toán
          </div>
        </div>
      </div>

      <div className="container" style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
        
        {/* Left Column: Payment Methods */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
          
          <h2 style={{ fontSize: 20, margin: 0, fontWeight: 700 }}>Bạn muốn thanh toán thế nào?</h2>
          
          <div style={{ background: 'white', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 3px rgba(3,18,26,0.08)' }}>
            <div style={{ padding: 24 }}>
              
              {['Thẻ thanh toán', 'Thẻ ATM nội địa', 'Momo', 'ZaloPay', 'Chuyển khoản ngân hàng', 'Traveloka PayLater'].map((method, idx) => (
                <label key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px', border: '1px solid #ccd1d4', borderRadius: 8, marginBottom: 12, cursor: 'pointer' }}>
                  <input type="radio" name="payment" defaultChecked={idx === 0} style={{ width: 20, height: 20 }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <span style={{ fontSize: 16, fontWeight: 600 }}>
                      {method}
                      {method === 'Traveloka PayLater' && <span style={{ marginLeft: 8, background: '#e6f4ea', color: '#137333', fontSize: 12, padding: '2px 6px', borderRadius: 4 }}>Trả góp 0%</span>}
                    </span>
                  </div>
                </label>
              ))}

              <div style={{ background: '#f7f9fa', padding: 16, borderRadius: 8, marginTop: 16 }}>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Số thẻ*</label>
                  <input type="text" placeholder="0000 0000 0000 0000" style={{ width: '100%', padding: '12px', border: '1px solid #ccd1d4', borderRadius: 8, outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Ngày hết hạn*</label>
                    <input type="text" placeholder="MM/YY" style={{ width: '100%', padding: '12px', border: '1px solid #ccd1d4', borderRadius: 8, outline: 'none' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>CVV*</label>
                    <input type="text" placeholder="123" style={{ width: '100%', padding: '12px', border: '1px solid #ccd1d4', borderRadius: 8, outline: 'none' }} />
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          <button 
            onClick={() => setShowSuccess(true)}
            style={{ alignSelf: 'flex-end', background: '#ff5e1f', color: 'white', border: 'none', padding: '16px 40px', borderRadius: 8, fontSize: 18, fontWeight: 700, cursor: 'pointer', marginBottom: 40 }}
          >
            Thanh toán
          </button>
        </div>

        {/* Right Column: Summary */}
        <div style={{ width: 320, flexShrink: 0 }}>
          <div style={{ background: 'white', borderRadius: 8, padding: 16, marginBottom: 16, boxShadow: '0 1px 3px rgba(3,18,26,0.08)' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: 16 }}>Tóm tắt chuyến bay</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1, textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>TP HCM (SGN)</div>
                <div style={{ fontSize: 12, color: '#687176' }}>CN, 19 thg 7<br/>11:50</div>
              </div>
              <div style={{ textAlign: 'center', width: 60 }}>
                <div style={{ fontSize: 12, color: '#687176' }}>1h 35m</div>
                <div style={{ borderBottom: '1px solid #ccd1d4', margin: '4px 0' }}></div>
                <div style={{ fontSize: 12, color: '#687176' }}>Bay thẳng</div>
              </div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Bangkok (BKK)</div>
                <div style={{ fontSize: 12, color: '#687176' }}>CN, 19 thg 7<br/>13:25</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 12, color: '#03121a' }}>
              <img src="https://ui-avatars.com/api/?name=VU&background=004481&color=ffb612&font-size=0.4" alt="VU" style={{ width: 16, height: 16 }} />
              <strong>Vietravel Airlines</strong>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: 8, padding: 16, marginBottom: 16, boxShadow: '0 1px 3px rgba(3,18,26,0.08)' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: 16 }}>Khuyến mãi (Promo Code)</h3>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="text" placeholder="Nhập mã giảm giá" style={{ flex: 1, padding: '10px 12px', border: '1px solid #ccd1d4', borderRadius: 4, outline: 'none' }} />
              <button style={{ background: '#0194f3', color: 'white', border: 'none', padding: '0 16px', borderRadius: 4, fontWeight: 600, cursor: 'pointer' }}>Áp dụng</button>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: 8, padding: 16, boxShadow: '0 1px 3px rgba(3,18,26,0.08)' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: 16 }}>Tóm tắt giá</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>Giá bạn trả</span>
              <span style={{ fontSize: 18, fontWeight: 800, color: '#ff5e1f' }}>2.282.650 VND</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
