import React from 'react';

import Navbar from '../Navbar/Navbar';
import CardItem from '../CardItem';
 import Cards from '../Cards';
import Hero from '../Hero/Hero';
import Footer from '../Footer';

function Home() {
  return (
    <>
    <Navbar/>
      <Hero />
       <Cards />
       {/* <CardItem/> */}
      <Footer /> 
    </>
  );
}

export default Home;