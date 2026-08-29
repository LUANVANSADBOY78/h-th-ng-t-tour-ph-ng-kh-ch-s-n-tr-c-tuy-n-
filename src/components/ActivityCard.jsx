import React from 'react';
import '../styles/Card.css';

const ActivityCard = ({ title, location, price, originalPrice, rating, reviews, image, isInstant, isFlexible, onClick }) => {
  return (
    <div className="tvlk-activity-card" onClick={onClick}>
      <div className="tvlk-card-image-wrap">
        <img src={image} alt={title} className="tvlk-card-image" />
        <div className="tvlk-card-badges">
          {isInstant && <span className="tvlk-badge tvlk-badge-instant">⚡ Xác nhận tức thì</span>}
          {isFlexible && <span className="tvlk-badge tvlk-badge-flexible">📅 Vé mở ngày</span>}
        </div>
      </div>
      
      <div className="tvlk-card-body">
        <h3 className="tvlk-card-title" title={title}>{title}</h3>
        <p className="tvlk-card-location">{location}</p>
        
        <div className="tvlk-card-rating">
          <span className="tvlk-star">★</span>
          <span className="tvlk-rating-score">{rating}</span>
          <span className="tvlk-reviews">({reviews})</span>
        </div>
        
        <div className="tvlk-card-price-wrap">
          {originalPrice && <p className="tvlk-price-old">{originalPrice}</p>}
          <p className="tvlk-price-current">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
