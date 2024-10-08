import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ServiceCards from './Components/ServiseCards/ServiceCards';
import About from './Components/About/About';
import './App.css';
import Cards from './Components/Cards/Cards';


const App = () => {
  return (
    <div><Navbar/>
    <Hero/>
    <ServiceCards/>
    <Cards/>
    <About/>
    </div>
  )
}

export default App