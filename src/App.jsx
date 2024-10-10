import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ServiceCards from './Components/ServiseCards/ServiceCards';
import About from './Components/About/About';
import './App.css';
// import ServiceCards from './Components/ServiceCards';


import CardList from './Components/CardList';


const App = () => {
  return (
    <div><Navbar/>
    <Hero/>
    <ServiceCards/>
    <CardList/>
    <About/>
    </div>
  )
}

export default App