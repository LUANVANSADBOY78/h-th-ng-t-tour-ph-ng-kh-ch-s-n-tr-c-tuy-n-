import React from 'react';
import '../styles/Navbar.css';

const NAV_ITEMS = [
    { key: 'hotel', label: 'Khách sạn' },
    { key: 'flight', label: 'Vé máy bay' },
    { key: 'bus', label: 'Vé xe khách' },
    { key: 'airport-transfer', label: 'Đưa đón sân bay' },
    { key: 'car-rental', label: 'Cho thuê xe' },
    { key: 'xperience', label: 'Hoạt động & Vui chơi' },
    { key: 'more', label: 'More' },
];

const Navbar = ({ user, onOpenAuth, onLogout, currentPage, onNavigate }) => {
    const [activeDropdown, setActiveDropdown] = React.useState(null);

    const toggleDropdown = (name) => {
        if (activeDropdown === name) setActiveDropdown(null);
        else setActiveDropdown(name);
    };

    return ( <
        header className = "tvlk-header"
        onMouseLeave = {
            () => setActiveDropdown(null) } > { /* ===== TOP NAV BAR ===== */ } <
        nav className = "tvlk-topbar" >
        <
        div className = "tvlk-topbar-inner" > { /* Logo */ } <
        a href = "#"
        className = "tvlk-logo"
        onClick = { e => { e.preventDefault();
                onNavigate('xperience'); } } >
        <
        svg width = "135"
        height = "24"
        viewBox = "0 0 512 72"
        xmlns = "http://www.w3.org/2000/svg" >
        <
        text x = "0"
        y = "56"
        fontFamily = "Arial"
        fontSize = "68"
        fontWeight = "800"
        fill = "#0194f3" > traveloka < /text> <
        /svg> <
        svg width = "28"
        height = "28"
        viewBox = "0 0 28 28"
        fill = "none"
        xmlns = "http://www.w3.org/2000/svg" >
        <
        circle cx = "8"
        cy = "10"
        r = "3.5"
        fill = "#FF5E1F" / >
        <
        circle cx = "20"
        cy = "10"
        r = "3.5"
        fill = "#0194F3" / >
        <
        circle cx = "14"
        cy = "20"
        r = "3.5"
        fill = "#0194F3" / >
        <
        path d = "M8 10C10 15 12 18 14 20"
        stroke = "#0194F3"
        strokeWidth = "1.5"
        fill = "none" / >
        <
        path d = "M20 10C18 15 16 18 14 20"
        stroke = "#FF5E1F"
        strokeWidth = "1.5"
        fill = "none" / >
        <
        /svg> <
        /a>

        { /* Right side links */ } <
        div className = "tvlk-topbar-right" >
        <
        div className = "tvlk-toplink"
        onClick = {
            () => alert("Thay đổi ngôn ngữ / tiền tệ") } >
        <
        svg width = "24"
        height = "24"
        viewBox = "0 0 24 24"
        fill = "none" > < rect x = "0.75"
        y = "3.75"
        width = "22.5"
        height = "16.5"
        rx = "1.25"
        fill = "#E70011"
        stroke = "#C1C4C6"
        strokeWidth = "0.5" / > < path d = "M15.11 16.73L12.01 14.4L8.93 16.75L10.08 12.94L7 10.58L10.81 10.55L11.99 6.75L13.19 10.54L17 10.55L13.94 12.92L15.11 16.73Z"
        fill = "#FFFF00" / > < /svg> <
        span > VND | VI < /span> <
        svg width = "16"
        height = "16"
        viewBox = "0 0 24 24"
        fill = "#242628" > < path d = "M17.45 9.49c.28-.3.75-.32 1.06-.04.3.28.32.75.04 1.06l-6 6.5a.75.75 0 01-1.1 0l-6-6.5a.75.75 0 011.1-1.02L12 15.39l5.45-5.9z" / > < /svg> <
        /div> <
        a className = "tvlk-toplink"
        href = "#"
        onClick = {
            (e) => e.preventDefault() } >
        <
        span style = {
            { color: '#ff5e1f', fontSize: 18 } } > 🎁 < /span> <
        span > Khuyến mãi < /span> <
        /a> <
        a className = "tvlk-toplink"
        href = "#"
        onClick = {
            (e) => e.preventDefault() } > Hợp tác với chúng tôi < /a>

        <
        div className = "tvlk-toplink-dropdown-wrapper" >
        <
        div className = "tvlk-toplink"
        onClick = {
            () => toggleDropdown('support') } >
        <
        span > Hỗ trợ < /span> <
        svg width = "16"
        height = "16"
        viewBox = "0 0 24 24"
        fill = "#707577" > < path d = "M17.45 9.49c.28-.3.75-.32 1.06-.04.3.28.32.75.04 1.06l-6 6.5a.75.75 0 01-1.1 0l-6-6.5a.75.75 0 011.1-1.02L12 15.39l5.45-5.9z" / > < /svg> <
        /div> {
            activeDropdown === 'support' && ( <
                div className = "tvlk-dropdown-menu" >
                <
                button className = "dropdown-item" > < span > ❔ < /span> Trợ giúp</button >
                <
                button className = "dropdown-item" > < span > 🗣️ < /span> Liên hệ chúng tôi</button >
                <
                button className = "dropdown-item" > < span > 📩 < /span> Hộp thư của tôi</button >
                <
                /div>
            )
        } <
        /div>

        <
        a className = "tvlk-toplink"
        href = "#"
        onClick = {
            (e) => { e.preventDefault();
                onNavigate('my-bookings'); } } >
        <
        span style = {
            { fontSize: 16 } } > 📋 < /span> Đặt chỗ của tôi <
        /a>

        { /* Auth Buttons */ } {
            user ? ( <
                div className = "tvlk-toplink-dropdown-wrapper" >
                <
                div className = "tvlk-auth-group"
                style = {
                    { cursor: 'pointer', padding: '4px 12px', background: '#f2f3f3', borderRadius: 20 } }
                onClick = {
                    () => toggleDropdown('account') } >
                <
                img src = "https://ui-avatars.com/api/?name=User&background=0194f3&color=fff&rounded=true"
                alt = "avatar"
                width = "24"
                height = "24" / >
                <
                span className = "tvlk-username"
                style = {
                    { fontWeight: 700 } } > { user.name } < /span> <
                /div> {
                    activeDropdown === 'account' && ( <
                        div className = "tvlk-dropdown-menu"
                        style = {
                            { right: 0, width: 250, padding: 16 } } >
                        <
                        div style = {
                            { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, borderBottom: '1px solid #eee', paddingBottom: 16 } } >
                        <
                        div style = {
                            { background: '#ffefd5', color: '#ff5e1f', padding: '4px 8px', borderRadius: 4, fontWeight: 700, fontSize: 12 } } > Bạc < /div> <
                        div >
                        <
                        div style = {
                            { fontSize: 12, color: '#687176' } } > Traveloka Points < /div> <
                        div style = {
                            { fontWeight: 700, color: '#ff5e1f' } } > 1.450 Điểm < /div> <
                        /div> <
                        /div> <
                        button className = "dropdown-item"
                        onClick = {
                            () => onNavigate('my-bookings') } > < span > 📋 < /span> Đặt chỗ của tôi</button >
                        <
                        button className = "dropdown-item" > < span > 👤 < /span> Tài khoản của tôi</button >
                        <
                        button className = "dropdown-item" > < span > ⚙️ < /span> Cài đặt</button >
                        <
                        button className = "dropdown-item"
                        onClick = { onLogout }
                        style = {
                            { color: '#e70011' } } > < span > 🚪 < /span> Đăng xuất</button >
                        <
                        /div>
                    )
                } <
                /div>
            ) : ( <
                div className = "tvlk-auth-group" >
                <
                button className = "tvlk-btn-login"
                onClick = {
                    () => onOpenAuth('login') } >
                Đăng Nhập <
                /button> <
                button className = "tvlk-btn-register"
                onClick = {
                    () => onOpenAuth('register') } >
                Đăng ký <
                /button> <
                /div>
            )
        } <
        /div> <
        /div> <
        /nav>

        { /* ===== SUB NAV ===== */ } <
        div className = "tvlk-subnav" >
        <
        div className = "tvlk-subnav-inner" > {
            NAV_ITEMS.map(item => ( <
                div key = { item.key }
                className = { item.key === 'more' ? "tvlk-toplink-dropdown-wrapper" : "" } >
                <
                button className = { `tvlk-subnav-item ${currentPage === item.key ? 'active' : ''}` }
                onClick = {
                    () => {
                        if (item.key === 'more') {
                            toggleDropdown('more');
                        } else {
                            setActiveDropdown(null);
                            onNavigate(item.key);
                        }
                    }
                } >
                { item.label } {
                    item.key === 'more' && ( <
                        svg width = "16"
                        height = "16"
                        viewBox = "0 0 24 24"
                        fill = "currentColor"
                        style = {
                            { marginLeft: 4, transform: activeDropdown === 'more' ? 'rotate(180deg)' : 'none', transition: '0.2s' } } > < path d = "M17.45 9.49c.28-.3.75-.32 1.06-.04.3.28.32.75.04 1.06l-6 6.5a.75.75 0 01-1.1 0l-6-6.5a.75.75 0 011.1-1.02L12 15.39l5.45-5.9z" / > < /svg>
                    )
                } <
                /button>

                {
                    item.key === 'more' && activeDropdown === 'more' && ( <
                        div className = "tvlk-dropdown-menu more-dropdown" >
                        <
                        button className = "dropdown-item" > < span > 🏷️ < /span> Combo tiết kiệm</button >
                        <
                        button className = "dropdown-item" > < span > 🛡️ < /span> Bảo hiểm du lịch</button >
                        <
                        button className = "dropdown-item" > < span > 🎟️ < /span> Phiếu quà tặng</button >
                        <
                        button className = "dropdown-item" > < span > 🚢 < /span> Du thuyền</button >
                        <
                        button className = "dropdown-item" > < span > 📚 < /span> Cẩm nang du lịch</button >
                        <
                        button className = "dropdown-item"
                        onClick = {
                            () => { setActiveDropdown(null);
                                onNavigate('admin'); } } > < span > ⚙️ < /span> Quản trị viên</button >
                        <
                        /div>
                    )
                } <
                /div>
            ))
        } <
        /div> <
        /div> <
        /header>
    );
};

export default Navbar;