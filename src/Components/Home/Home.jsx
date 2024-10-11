import React from 'react'
import { Navbar } from 'react-bootstrap'
import Hero from '../Hero/Hero'
import ServiceCards from '../ServiseCards/ServiceCards'
import Cards from '../Cards/Cards'
import About from '../About/About'

const Home = () => {
  return (
    <div><Navbar/>
    <Hero/>
    <ServiceCards/>
    <Cards/>
    <About/>
    </div>
  )
}

export default Home