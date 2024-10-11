import React from 'react';
import './Cards.css'; // Import your CSS styles if any

const Cards = ({ name, description, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" /> {/* Add image */}
      <div className="card-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Cards;
