import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Workshop.css";


const WorkshopList = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='App'>
      <h1>UpComming Workshops</h1><br/>
      <Carousel responsive={responsive} className='mt-4'>
          <div className='tab'>
          <center>
            <h4>#1</h4>     
            <p>GNSS Receiver Design with Protocol Development (PTP/NTP) on FPGA</p>
            <samp>Date:09-12,October 2023</samp><br/>
            <samp>Location:bangolore</samp></center>
            <button className='card-button'>view full</button>
          
          </div>
          <div className='Card'>
            <img className="product--image" src='https://innovation.ucsb.edu/sites/default/files/images/blog/2020-08/Innovation_Workshop_Lab_004.jpg' alt="img 1"/>
            <button className='card-button'>view full</button>
          </div>
          <div className='Card'>
            <img className="product--image" src='https://doonsrinagar.com/storage/images/events/608563d80b6ba.png' alt="img 1"/>
            <button className='card-button'>view full</button>
          </div>
          <div className='Card'>
            <img className="product--image" src='https://ahduni.edu.in/site/assets/files/14754/1600_x_1080_fabrication_shop.1400x0.webp' alt="img 1"/>
            <button className='card-button'>view full</button>
          </div>
      </Carousel>
    </div>
  );
};



export default WorkshopList;

