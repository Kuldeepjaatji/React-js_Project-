import React from 'react';
import { FaArrowRight } from "react-icons/fa";

export const Home = () => {
  return (
    <>
    <main className='hero-section main'>
      <div className='container grid grid-two-cols'>
        <div className='hero-content'>
          <h1 className='heading-xl'>Explore the World, One Country At A Time.</h1>
          <p className='paragraph'>
            Discover the History,culture and beauty of every nation.Short,search,and filter through countries to find the details you
          </p>
          <button className='btn btn-darken btn-inline bg-white-box'>Start Exploring<FaArrowRight/></button>
        </div>
        <div className='hero-image'><img src="/image/World Image.jpg" alt="World is beautyfull" className='banner-image'/></div>
      </div>
    </main>
    </>
  );
}
