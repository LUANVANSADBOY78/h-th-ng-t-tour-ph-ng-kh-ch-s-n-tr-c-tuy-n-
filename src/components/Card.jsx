import React from 'react';
import '../styles/Card.css';

const Card = ({ title, location, price, rating, image, type }) => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
        <span className="card-badge">{type}</span>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <div className="card-rating">
            <span>⭐</span> {rating}
          </div>
        </div>
        <p className="card-location">📍 {location}</p>
        <div className="card-footer">
          <p className="card-price">Từ <strong>{price}</strong></p>
          <button className="btn btn-primary btn-sm">Đặt ngay</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
