// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ServiceCards from './Components/ServiseCards/ServiceCards';
import About from './Components/About/About';
import Cards from './Components/Cards/Cards';
 // Import Footer component
import './App.css';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />  {/* The Navbar will remain common across all pages */}

        {/* Set up routing */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home or landing page */}
          <Route path="/services" element={<ServiceCards />} />  {/* Services page */}
          <Route path="/about" element={<About />} />  {/* About page */}
          <Route path="/signup" element={<Navbar/>} />  {/* Signup page */}
          <Route path="/cards" element={<Cards />} />  {/* Cards section */}
          {/* Add more routes as needed */}
        </Routes>

        {/* Footer will be placed at the bottom */}
      </div>
    </Router>
  );
};

export default App;
