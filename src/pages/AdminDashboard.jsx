import React, { useMemo, useState } from 'react';
import '../styles/AdminDashboard.css';

const INITIAL_BOOKINGS = [
  { code: 'BK-240901', customer: 'Nguyễn Minh Anh', service: 'Khách sạn', detail: 'Vinpearl Resort Nha Trang', amount: '4.280.000 ₫', status: 'Đã xác nhận' },
  { code: 'BK-240902', customer: 'Trần Quốc Bảo', service: 'Vé máy bay', detail: 'TP.HCM → Đà Nẵng', amount: '2.150.000 ₫', status: 'Chờ thanh toán' },
  { code: 'BK-240903', customer: 'Lê Thu Hà', service: 'Hoạt động', detail: 'Sun World Bà Nà Hills', amount: '1.780.000 ₫', status: 'Đã xác nhận' },
  { code: 'BK-240904', customer: 'Phạm Gia Huy', service: 'Vé xe khách', detail: 'Sài Gòn → Đà Lạt', amount: '640.000 ₫', status: 'Đã hủy' },
];

const STATUS_CLASS = { 'Đã xác nhận': 'confirmed', 'Chờ thanh toán': 'pending', 'Đã hủy': 'cancelled' };

export default function AdminDashboard({ onExit }) {
  const [bookings, setBookings] = useState(INITIAL_BOOKINGS);
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState('');
  const filtered = useMemo(() => bookings.filter((booking) =>
    `${booking.code} ${booking.customer} ${booking.service}`.toLowerCase().includes(query.toLowerCase())), [bookings, query]);

  const confirmBooking = (code) => {
    setBookings((current) => current.map((booking) => booking.code === code ? { ...booking, status: 'Đã xác nhận' } : booking));
    setNotice(`Đã xác nhận đơn ${code}.`);
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand"><span>✦</span> TravelNow <small>ADMIN</small></div>
        <nav>
          <button className="admin-nav active">▦ Tổng quan</button>
          <button className="admin-nav">▣ Đơn đặt chỗ <b>12</b></button>
          <button className="admin-nav">⌂ Khách sạn</button>
          <button className="admin-nav">✈ Chuyến bay</button>
          <button className="admin-nav">◉ Khách hàng</button>
          <button className="admin-nav">⚙ Cài đặt</button>
        </nav>
        <button className="admin-exit" onClick={onExit}>← Về trang khách hàng</button>
      </aside>

      <section className="admin-main">
        <header className="admin-header">
          <div><p>Xin chào, Quản trị viên</p><h1>Bảng điều khiển</h1></div>
          <div className="admin-user"><span>AD</span> Admin</div>
        </header>
        <div className="admin-stats">
          <article><span className="stat-icon blue">₫</span><div><p>Doanh thu tháng này</p><h2>128.450.000 ₫</h2><small>↑ 12,5% so với tháng trước</small></div></article>
          <article><span className="stat-icon orange">▣</span><div><p>Đơn đặt chỗ</p><h2>1.284</h2><small>↑ 8,2% so với tháng trước</small></div></article>
          <article><span className="stat-icon green">◉</span><div><p>Khách hàng mới</p><h2>356</h2><small>↑ 18,1% so với tháng trước</small></div></article>
          <article><span className="stat-icon purple">★</span><div><p>Đánh giá trung bình</p><h2>4,8 / 5</h2><small>1.092 đánh giá mới</small></div></article>
        </div>
        <section className="admin-panel">
          <div className="admin-panel-heading"><div><h2>Đơn đặt chỗ gần đây</h2><p>Theo dõi và xử lý các đơn phát sinh mới nhất.</p></div><input aria-label="Tìm đơn đặt chỗ" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm mã đơn, khách hàng..." /></div>
          {notice && <div className="admin-notice">✓ {notice}<button onClick={() => setNotice('')}>×</button></div>}
          <div className="admin-table-wrap"><table><thead><tr><th>Mã đơn</th><th>Khách hàng</th><th>Dịch vụ</th><th>Chi tiết</th><th>Giá trị</th><th>Trạng thái</th><th></th></tr></thead><tbody>
            {filtered.map((booking) => <tr key={booking.code}><td><strong>{booking.code}</strong></td><td>{booking.customer}</td><td>{booking.service}</td><td>{booking.detail}</td><td><strong>{booking.amount}</strong></td><td><span className={`admin-status ${STATUS_CLASS[booking.status]}`}>{booking.status}</span></td><td>{booking.status === 'Chờ thanh toán' ? <button className="confirm-button" onClick={() => confirmBooking(booking.code)}>Xác nhận</button> : <button className="view-button" onClick={() => setNotice(`Đang xem chi tiết đơn ${booking.code}.`)}>Chi tiết</button>}</td></tr>)}
          </tbody></table></div>
        </section>
      </section>
    </div>
  );
}
