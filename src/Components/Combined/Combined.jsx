import React from 'react';
import Visualize from '../Visualize/Visualize';
import LineGraph from '../LineGraph/LineGraph';
import OtherC from '../OtherC/OtherC';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import './Combined.css';

const Combined = () => {
  return ( 
   
      <>

<div className='combo'>
              <h2 className='ikl'>BAR CHART</h2>
      <div className='grph1'><Visualize/></div>
      <h2 className='ikl'>POINT GRAPH</h2>
      <div className='grph2'><LineGraph/></div>
      <h2 className='ikl'>DOUGH-NUT CHART</h2>
      <div className='grph3'><OtherC/></div>
</div>
     <div><Footer/></div>
      </>
   
  )
}

export default Combined
