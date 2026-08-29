import React, { useState } from 'react';

const MyBookingsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const bookings = [
    { id: '1', type: 'flight', status: 'success', title: 'TP HCM (SGN) → Bangkok (BKK)', date: '19 thg 7 2026', price: '2.133.250 VND', pnr: 'ABC123X' },
    { id: '2', type: 'hotel', status: 'pending', title: 'JW Marriott Hanoi', date: '20 thg 8 2026', price: '4.100.000 VND', pnr: 'PENDING' },
    { id: '3', type: 'bus', status: 'cancelled', title: 'Đà Lạt → TP HCM (Dien Linh Limousine)', date: '17 thg 6 2026', price: '310.500 VND', pnr: 'CANC89' },
  ];

  const filteredBookings = activeTab === 'all' ? bookings : bookings.filter(b => b.status === activeTab);

  const getStatusColor = (status) => {
    switch(status) {
      case 'success': return { bg: '#e6f4ea', text: '#137333', label: 'Thành công' };
      case 'pending': return { bg: '#fef7e0', text: '#b06000', label: 'Chờ thanh toán' };
      case 'cancelled': return { bg: '#fce8e6', text: '#c5221f', label: 'Đã hủy' };
      default: return { bg: '#eee', text: '#333', label: status };
    }
  };

  return (
    <div style={{ paddingTop: 80, background: '#f7f9fa', minHeight: '100vh', fontFamily: 'Godwit, Noto Sans, sans-serif' }}>
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24 }}>Đặt chỗ của tôi (Lịch sử giao dịch)</h1>
        
        <div style={{ display: 'flex', gap: 16, marginBottom: 24, borderBottom: '1px solid #ccd1d4' }}>
          {[
            { id: 'all', label: 'Tất cả' },
            { id: 'success', label: 'Vé điện tử đã xuất' },
            { id: 'pending', label: 'Chờ thanh toán' },
            { id: 'cancelled', label: 'Đã hủy' }
          ].map(tab => (
            <div 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ 
                padding: '12px 16px', 
                cursor: 'pointer',
                fontWeight: activeTab === tab.id ? 700 : 500,
                color: activeTab === tab.id ? '#0194f3' : '#687176',
                borderBottom: activeTab === tab.id ? '3px solid #0194f3' : '3px solid transparent'
              }}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {filteredBookings.map(booking => {
            const statusInfo = getStatusColor(booking.status);
            return (
              <div key={booking.id} style={{ background: 'white', padding: 24, borderRadius: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ background: statusInfo.bg, color: statusInfo.text, padding: '4px 8px', borderRadius: 4, fontSize: 12, fontWeight: 700 }}>
                      {statusInfo.label}
                    </span>
                    <span style={{ fontSize: 14, color: '#687176' }}>Mã đặt chỗ: <strong>{booking.pnr}</strong></span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{booking.title}</h3>
                  <p style={{ color: '#687176', fontSize: 14 }}>{booking.date}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 18, fontWeight: 700, color: '#ff5e1f', marginBottom: 12 }}>{booking.price}</p>
                  <button style={{ background: '#0194f3', color: 'white', border: 'none', padding: '8px 16px', borderRadius: 6, fontWeight: 600, cursor: 'pointer' }}>
                    Xem chi tiết
                  </button>
                </div>
              </div>
            )
          })}
          {filteredBookings.length === 0 && (
            <div style={{ textAlign: 'center', padding: 40, color: '#687176' }}>
              Không tìm thấy giao dịch nào.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
