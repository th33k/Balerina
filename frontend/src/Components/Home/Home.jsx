
import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap'
import Hero from '../Hero/Hero'
import ServiceCards from '../ServiseCards/ServiceCards'
import About from '../About/About'
import CardList from '../CardList'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Assembly'); // Default category

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Update the selected category
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <ServiceCards onCategoryChange={handleCategoryChange} /> {/* Pass the function */}
      <CardList selectedCategory={selectedCategory} /> {/* Pass the selected category */}
      <About />
    </div>
  );
};

export default Home;