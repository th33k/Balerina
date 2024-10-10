// Cards.jsx
import React from 'react';

const Cards = ({ name, description, price }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p> {/* Make sure description is passed as a prop */}
      <p className="price">{price}</p>
    </div>
  );
};

export default Cards;
