import React, { useState, useEffect } from 'react';
import Cards from './Cards/Cards'; // Import the Cards component

const CardList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/services.json') // Adjust path if necessary
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching services:', error));
  }, []);

  return (
    <div className="card-list">
      {services.map((service) => (
        <Cards
          key={service.id}
          name={service.name}
          description={service.description}
          price={service.price}
          image={service.image} // Pass the image prop here
        />
      ))}
    </div>
  );
};

export default CardList;
