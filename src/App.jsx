// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ServiceCards from './Components/ServiseCards/ServiceCards';

 // Import Footer component
import './App.css';
import Home from './Components/Home/Home';
import SignUp from './Components/Signup/Signup'; 
import Login from './Components/Login/Login';
import AboutUs from './Components/AboutUs/AboutUs';
import TaskerForm from './Components/TaskerForm/TaskerForm';
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />  {/* The Navbar will remain common across all pages */}


        {/* Set up routing */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home or landing page */}
          <Route path="/services" element={<ServiceCards />} />  {/* Services page */}
          <Route path="/about" element={<AboutUs />} />  {/* About page */}
          <Route path="/Signup" element={<SignUp/>} />  {/* Signup page */}
          <Route path="/login" element={<Login/>} />  {/* Login page */}
          <Route path="/become-tasker" element={<TaskerForm />} />  {/* TaskerForm page */}
          {/* Add more routes as needed */}
        </Routes>

        {/* Footer will be placed at the bottom */}
      </div>
    </Router>
  );
};

export default App;
