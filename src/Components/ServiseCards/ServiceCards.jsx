import React, { useState } from 'react';
import './ServiceCards.css';
import { FaTools, FaTruckMoving, FaHome, FaScrewdriver, FaBroom, FaTree, FaPaintRoller, FaFire } from 'react-icons/fa';


const ServiceCards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <nav className="service-cards">
      {/* Service Cards */}
      <ul className="service-links">
        <li
          className={`service-item ${activeCard === 0 ? 'active' : ''}`}
          onClick={() => handleCardClick(0)}
        >
          <FaTools className="icon" />
          <p>Assembly</p>
        </li>

        <li
          className={`service-item ${activeCard === 1 ? 'active' : ''}`}
          onClick={() => handleCardClick(1)}
        >
          <FaScrewdriver className="icon" />
          <p>Mounting</p>
        </li>

        <li
          className={`service-item ${activeCard === 2 ? 'active' : ''}`}
          onClick={() => handleCardClick(2)}
        >
          <FaTruckMoving className="icon" />
          <p>Moving</p>
        </li>

        <li
          className={`service-item ${activeCard === 3 ? 'active' : ''}`}
          onClick={() => handleCardClick(3)}
        >
          <FaBroom className="icon" />
          <p>Cleaning</p>
        </li>

        <li
          className={`service-item ${activeCard === 4 ? 'active' : ''}`}
          onClick={() => handleCardClick(4)}
        >
          <FaTree className="icon" />
          <p>Outdoor Help</p>
        </li>

        <li
          className={`service-item ${activeCard === 5 ? 'active' : ''}`}
          onClick={() => handleCardClick(5)}
        >
          <FaHome className="icon" />
          <p>Home Repairs</p>
        </li>

        <li
          className={`service-item ${activeCard === 6 ? 'active' : ''}`}
          onClick={() => handleCardClick(6)}
        >
          <FaPaintRoller className="icon" />
          <p>Painting</p>
        </li>

        <li
          className={`service-item ${activeCard === 7 ? 'active' : ''}`}
          onClick={() => handleCardClick(7)}
        >
          <FaFire className="icon" />
          <p>Trending</p>
        </li>
      </ul>
    </nav>
  );
};

export default ServiceCards;
