import React, { useState } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span style={{ color: 'black' }}>Home</span>
        <span style={{ color: 'green' }}>Servo</span>
      </div>

      {/* Nav Links */}
      <ul
        className={isMobile ? 'nav-links-mobile' : 'nav-links'}
        onClick={() => setIsMobile(false)}
      >
        <li><a href="#explore">Explore Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#signup">Signup</a></li>
        <li><a href="#become-tasker" className="tasker-btn">Become a Tasker</a></li>
      </ul>

      {/* Hamburger menu button for mobile */}
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
