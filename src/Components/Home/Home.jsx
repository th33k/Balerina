import React from 'react'
import { Navbar } from 'react-bootstrap'
import Hero from '../Hero/Hero'
import ServiceCards from '../ServiseCards/ServiceCards'
import About from '../About/About'
import CardList from '../CardList'

const Home = () => {
  return (
    <div><Navbar/>
    <Hero/>
    <ServiceCards/>
    <CardList/>
    <About/>
    </div>
  )
}

export default Home