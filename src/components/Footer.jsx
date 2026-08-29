import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="tvlk-footer-container">
      {/* 1. SEOLinks Section */}
      <div className="footer-seo-links">
        <div className="container">
          <h2 className="seo-title">Bạn muốn khám phá điều gì?</h2>
          <div className="seo-links-grid">
            <div className="seo-col">
              <h4>Chuyến bay phổ biến</h4>
              <ul>
                <li><a href="#flight-search">Vé máy bay đi Đà Nẵng</a></li>
                <li><a href="#flight-search">Vé máy bay đi Phú Quốc</a></li>
                <li><a href="#flight-search">Vé máy bay đi Nha Trang</a></li>
                <li><a href="#flight-search">Vé máy bay đi Đà Lạt</a></li>
                <li><a href="#flight-search">Vé máy bay đi Bangkok</a></li>
                <li><a href="#flight-search">Vé máy bay đi Singapore</a></li>
                <li><a href="#flight-search">Vé máy bay đi Hà Nội</a></li>
                <li><a href="#flight-search">Vé máy bay đi TP HCM</a></li>
                <li><a href="#flight-search">Vé máy bay đi Seoul</a></li>
                <li><a href="#flight-search">Vé máy bay đi Bali</a></li>
              </ul>
            </div>
            <div className="seo-col">
              <h4>Khách sạn ở các điểm đến phổ biến</h4>
              <ul>
                <li><a href="#hotel">Khách sạn tại Vũng Tàu</a></li>
                <li><a href="#hotel">Khách sạn tại Đà Lạt</a></li>
                <li><a href="#hotel">Khách sạn tại Nha Trang</a></li>
                <li><a href="#hotel">Khách sạn tại Đà Nẵng</a></li>
                <li><a href="#hotel">Khách sạn tại Phú Quốc</a></li>
                <li><a href="#hotel">Khách sạn tại Hà Nội</a></li>
                <li><a href="#hotel">Khách sạn tại Sapa</a></li>
                <li><a href="#hotel">Khách sạn tại Quy Nhơn</a></li>
                <li><a href="#hotel">Khách sạn tại Bangkok</a></li>
                <li><a href="#hotel">Khách sạn tại Singapore</a></li>
              </ul>
            </div>
            <div className="seo-col">
              <h4>Hoạt động giải trí</h4>
              <ul>
                <li><a href="#xperience">Sun World Ba Na Hills</a></li>
                <li><a href="#xperience">VinWonders Phú Quốc</a></li>
                <li><a href="#xperience">Vinpearl Safari Phú Quốc</a></li>
                <li><a href="#xperience">Bà Nà Hills</a></li>
                <li><a href="#xperience">Universal Studios Singapore</a></li>
                <li><a href="#xperience">Cáp treo Phan Xi Păng</a></li>
                <li><a href="#xperience">Vườn thú Safari World</a></li>
                <li><a href="#xperience">Tour Đảo Ngọc</a></li>
                <li><a href="#xperience">Show Ký Ức Hội An</a></li>
                <li><a href="#xperience">Du thuyền Sông Hàn</a></li>
              </ul>
            </div>
            <div className="seo-col">
              <h4>Bài viết khám phá</h4>
              <ul>
                <li><a href="#ai-planner">Lịch trình du lịch</a></li>
                <li><a href="#ai-planner">Kinh nghiệm du lịch Phú Quốc</a></li>
                <li><a href="#ai-planner">Cẩm nang du lịch Đà Nẵng</a></li>
                <li><a href="#ai-planner">Review khách sạn 5 sao</a></li>
                <li><a href="#ai-planner">Top quán ăn ngon ở Đà Lạt</a></li>
                <li><a href="#ai-planner">Mẹo săn vé máy bay giá rẻ</a></li>
                <li><a href="#ai-planner">Hướng dẫn đi Universal Singapore</a></li>
                <li><a href="#ai-planner">Lễ hội văn hóa Thái Lan</a></li>
                <li><a href="#ai-planner">Điểm check-in Vũng Tàu hot</a></li>
                <li><a href="#ai-planner">Kinh nghiệm phượt Sapa</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Newsletter Section with landscape background */}
      <div className="footer-newsletter">
        <div className="container newsletter-inner">
          <div className="newsletter-phone-mockup">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&h=240&q=80" alt="App Mockup" style={{borderRadius: 16}} />
          </div>
          <div className="newsletter-content">
            <h3>Luôn được cập nhật về các lời khuyên du lịch, đề xuất và khuyến mãi mới nhất.</h3>
            <div className="newsletter-form">
              <input type="email" placeholder="Địa chỉ email của bạn" />
              <button>Đăng ký</button>
            </div>
            <p>Bằng cách đăng ký, bạn đồng ý với Điều khoản & Điều kiện và Chính sách Quyền riêng tư của chúng tôi.</p>
          </div>
        </div>
      </div>

      {/* 3. Main Dark Footer */}
      <div className="footer-main-dark">
        <div className="container footer-dark-grid">
          {/* Col 1 */}
          <div className="footer-col-1">
            <h2 className="footer-logo">traveloka</h2>
            <div className="footer-awards" style={{display: 'flex', gap: 8, marginBottom: 16}}>
              <span style={{background: 'white', color: '#1c2930', padding: '4px 8px', fontSize: 10, fontWeight: 'bold', borderRadius: 4}}>IATA Accredited</span>
              <span style={{background: 'white', color: '#1c2930', padding: '4px 8px', fontSize: 10, fontWeight: 'bold', borderRadius: 4}}>Top Brand</span>
            </div>
            <div className="footer-trust">
              <h4>Đối tác thanh toán</h4>
              <div className="payment-grid">
                <div className="pay-logo">VISA</div>
                <div className="pay-logo">Mastercard</div>
                <div className="pay-logo">JCB</div>
                <div className="pay-logo">MoMo</div>
                <div className="pay-logo">ZaloPay</div>
                <div className="pay-logo">VNPay</div>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div className="footer-col-2">
            <h4>Về Traveloka</h4>
            <ul>
              <li><a href="#">Cách đặt chỗ</a></li>
              <li><a href="#">Liên hệ chúng tôi</a></li>
              <li><a href="#">Trợ giúp</a></li>
              <li><a href="#">Tuyển dụng</a></li>
              <li><a href="#">Về chúng tôi</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="footer-col-3">
            <h4>Sản phẩm</h4>
            <ul>
              <li><a href="#">Khách sạn</a></li>
              <li><a href="#">Vé máy bay</a></li>
              <li><a href="#">Vé xe khách</a></li>
              <li><a href="#">Đưa đón sân bay</a></li>
              <li><a href="#">Cho thuê xe</a></li>
              <li><a href="#">Hoạt động & Vui chơi</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="footer-col-4">
            <h4>Tải ứng dụng Traveloka</h4>
            <div className="app-stores" style={{display: 'flex', flexDirection: 'column', gap: 12}}>
              <button style={{background: '#000', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontSize: 14, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', maxWidth: 160}}>
                <span style={{fontSize: 20}}>▶</span> Google Play
              </button>
              <button style={{background: '#000', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontSize: 14, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', maxWidth: 160}}>
                <span style={{fontSize: 20}}></span> App Store
              </button>
            </div>
            <h4 style={{marginTop: 20}}>Theo dõi chúng tôi</h4>
            <div className="social-links">
              <span>🔵 Facebook</span>
              <span>📷 Instagram</span>
              <span>🔴 Youtube</span>
              <span>🎵 Tiktok</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom-copyright">
          <div className="container">
            <p>Công ty TNHH Traveloka Việt Nam. Mã số DN: 0313581779. Tòa nhà An Phú, 117-119 Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3, HCM.</p>
            <p>Copyright © 2024 Traveloka. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
