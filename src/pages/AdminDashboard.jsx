import React, { useEffect, useMemo, useState } from 'react';
import '../styles/AdminDashboard.css';

const INITIAL_BOOKINGS = [
    { code: 'BK-240901', customer: 'Nguyen Minh Anh', service: 'Khach san', detail: 'Vinpearl Resort Nha Trang', amount: '4.280.000 VND', status: 'Da xac nhan' },
    { code: 'BK-240902', customer: 'Tran Quoc Bao', service: 'Ve may bay', detail: 'TP.HCM -> Da Nang', amount: '2.150.000 VND', status: 'Cho thanh toan' },
    { code: 'BK-240903', customer: 'Le Thu Ha', service: 'Hoat dong', detail: 'Sun World Ba Na Hills', amount: '1.780.000 VND', status: 'Da xac nhan' },
    { code: 'BK-240904', customer: 'Pham Gia Huy', service: 'Ve xe khach', detail: 'Sai Gon -> Da Lat', amount: '640.000 VND', status: 'Da huy' },
];

const STATUS_CLASS = { 'Da xac nhan': 'confirmed', 'Cho thanh toan': 'pending', 'Da huy': 'cancelled' };
const STATUS_OPTIONS = ['Da xac nhan', 'Cho thanh toan', 'Da huy'];
const STORAGE_KEY = 'travelnow-admin-bookings';
const SECTIONS = {
    overview: { label: 'Tong quan', title: 'Bang dieu khien', subtitle: 'Theo doi nhanh hoat dong kinh doanh.' },
    bookings: { label: 'Don dat cho', title: 'Quan ly don dat cho', subtitle: 'Theo doi va xu ly cac don phat sinh moi nhat.' },
    hotels: { label: 'Khach san', title: 'Quan ly khach san', subtitle: 'Theo doi danh sach va tinh trang khach san.' },
    flights: { label: 'Chuyen bay', title: 'Quan ly chuyen bay', subtitle: 'Theo doi lich bay va cac dich vu hang khong.' },
    customers: { label: 'Khach hang', title: 'Quan ly khach hang', subtitle: 'Theo doi tai khoan va hoat dong khach hang.' },
    settings: { label: 'Cai dat', title: 'Cai dat he thong', subtitle: 'Cau hinh van hanh nen tang.' },
};

const e = React.createElement;

export default function AdminDashboard({ onExit }) {
    const [bookings, setBookings] = useState(() => {
        try {
            const savedBookings = localStorage.getItem(STORAGE_KEY);
            return savedBookings ? JSON.parse(savedBookings) : INITIAL_BOOKINGS;
        } catch {
            return INITIAL_BOOKINGS;
        }
    });
    const [query, setQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [notice, setNotice] = useState('');
    const [activeSection, setActiveSection] = useState('overview');
    const currentSection = SECTIONS[activeSection];
    const showBookings = activeSection === 'overview' || activeSection === 'bookings';
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    }, [bookings]);

    const filtered = useMemo(() => bookings.filter((booking) => {
        const matchesQuery = `${booking.code} ${booking.customer} ${booking.service}`.toLowerCase().includes(query.toLowerCase());
        return matchesQuery && (statusFilter === 'all' || booking.status === statusFilter);
    }), [bookings, query, statusFilter]);

    const updateBookingStatus = (code, status) => {
        setBookings((current) => current.map((booking) => booking.code === code ? {...booking, status } : booking));
        setNotice(`Da cap nhat trang thai don ${code}.`);
    };

    const deleteBooking = (code) => {
        setBookings((current) => current.filter((booking) => booking.code !== code));
        setNotice(`Da xoa don ${code}.`);
    };

    const resetBookings = () => {
        setBookings(INITIAL_BOOKINGS);
        setNotice('Da khoi phuc danh sach don mau.');
    };

    const menuItems = [
        ['overview', 'Tong quan'],
        ['bookings', 'Don dat cho'],
        ['hotels', 'Khach san'],
        ['flights', 'Chuyen bay'],
        ['customers', 'Khach hang'],
        ['settings', 'Cai dat'],
    ];

    const nav = e('nav', null, menuItems.map(([key, label]) => e('button', {
        key,
        className: `admin-nav ${activeSection === key ? 'active' : ''}`,
        onClick: () => setActiveSection(key),
    }, label, key === 'bookings' && e('b', null, '12'))));

    const rows = filtered.map((booking) => e('tr', { key: booking.code },
        e('td', null, e('strong', null, booking.code)),
        e('td', null, booking.customer), e('td', null, booking.service), e('td', null, booking.detail),
        e('td', null, e('strong', null, booking.amount)),
        e('td', null, e('select', { className: `admin-status-select ${STATUS_CLASS[booking.status]}`, value: booking.status, onChange: (event) => updateBookingStatus(booking.code, event.target.value), 'aria-label': `Trang thai ${booking.code}` }, STATUS_OPTIONS.map((status) => e('option', { key: status, value: status }, status)))),
        e('td', null, e('button', { className: 'view-button', onClick: () => setNotice(`Dang xem chi tiet don ${booking.code}.`) }, 'Chi tiet'), e('button', { className: 'delete-button', onClick: () => deleteBooking(booking.code), 'aria-label': `Xoa ${booking.code}` }, 'Xoa'))
    ));

    const table = e('div', { className: 'admin-table-wrap' }, e('table', null,
        e('thead', null, e('tr', null, ...['Ma don', 'Khach hang', 'Dich vu', 'Chi tiet', 'Gia tri', 'Trang thai', ''].map((label) => e('th', { key: label }, label)))),
        e('tbody', null, rows)
    ));

    return e('div', { className: 'admin-shell' },
        e('aside', { className: 'admin-sidebar' },
            e('div', { className: 'admin-brand' }, e('span', null, '*'), ' TravelNow ', e('small', null, 'ADMIN')),
            nav,
            e('button', { className: 'admin-exit', onClick: onExit }, '-> Ve trang khach hang')
        ),
        e('section', { className: 'admin-main' },
            e('header', { className: 'admin-header' },
                e('div', null, e('p', null, 'Xin chao, Quan tri vien'), e('h1', null, currentSection.title)),
                e('div', { className: 'admin-user' }, e('span', null, 'AD'), ' Admin')
            ),
            e('div', { className: 'admin-stats' },
                e('article', null, e('span', { className: 'stat-icon blue' }, 'VND'), e('div', null, e('p', null, 'Doanh thu thang nay'), e('h2', null, '128.450.000 VND'), e('small', null, '+ 12,5% so voi thang truoc'))),
                e('article', null, e('span', { className: 'stat-icon orange' }, '#'), e('div', null, e('p', null, 'Don dat cho'), e('h2', null, '1.284'), e('small', null, '+ 8,2% so voi thang truoc'))),
                e('article', null, e('span', { className: 'stat-icon green' }, 'O'), e('div', null, e('p', null, 'Khach hang moi'), e('h2', null, '356'), e('small', null, '+ 18,1% so voi thang truoc'))),
                e('article', null, e('span', { className: 'stat-icon purple' }, '*'), e('div', null, e('p', null, 'Danh gia trung binh'), e('h2', null, '4,8 / 5'), e('small', null, '1.092 danh gia moi')))
            ),
            e('section', { className: 'admin-panel' },
                e('div', { className: 'admin-panel-heading' },
                    e('div', null, e('h2', null, activeSection === 'overview' ? 'Don dat cho gan day' : currentSection.label), e('p', null, currentSection.subtitle)),
                    showBookings && e('div', { className: 'admin-filters' },
                        e('input', { 'aria-label': 'Tim don dat cho', value: query, onChange: (event) => setQuery(event.target.value), placeholder: 'Tim ma don, khach hang...' }),
                        e('select', { value: statusFilter, onChange: (event) => setStatusFilter(event.target.value), 'aria-label': 'Loc theo trang thai' }, e('option', { value: 'all' }, 'Tat ca trang thai'), STATUS_OPTIONS.map((status) => e('option', { key: status, value: status }, status))),
                        e('button', { className: 'reset-button', onClick: resetBookings }, 'Dat lai')
                    )
                ),
                notice && e('div', { className: 'admin-notice' }, 'OK ', notice, e('button', { onClick: () => setNotice('') }, 'x')),
                showBookings ? table : e('div', { style: { padding: '48px 24px', textAlign: 'center', color: '#687176' } }, `Khu vuc ${currentSection.label} da san sang de cau hinh.`)
            )
        )
    );
}