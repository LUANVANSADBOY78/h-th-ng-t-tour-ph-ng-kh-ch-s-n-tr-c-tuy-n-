import React, { useState } from 'react';
import '../styles/AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialMode = 'login', onLoginSuccess }) => {
  const [mode, setMode] = useState(initialMode); // 'login' or 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call for login/register
    setTimeout(() => {
      onLoginSuccess({ name: email.split('@')[0], email });
      onClose();
    }, 500);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content glass">
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <h2>{mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}</h2>
          <p>{mode === 'login' ? 'Chào mừng bạn quay trở lại!' : 'Tạo tài khoản để nhận nhiều ưu đãi hơn.'}</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {mode === 'register' && (
            <div className="form-group">
              <label>Họ và tên</label>
              <input type="text" placeholder="Nhập họ tên của bạn" required />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="example@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn">
            {mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}
          </button>
        </form>

        <div className="modal-footer">
          {mode === 'login' ? (
            <p>Chưa có tài khoản? <span onClick={() => setMode('register')}>Đăng ký ngay</span></p>
          ) : (
            <p>Đã có tài khoản? <span onClick={() => setMode('login')}>Đăng nhập</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
