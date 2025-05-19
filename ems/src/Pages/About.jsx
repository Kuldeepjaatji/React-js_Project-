import React from 'react';

export const About = () => {
  return (
    <section className='section-about container'>
      <h2 className='container-tital'>Hear are the Interesting Facts <br/>we're proud of</h2>
      <div className='gradient-cards'>
        <div className='card'>
          <div className='container-card bg-blue-box'>
            <p className='card-title'>India</p>
            <p>
              <span className='card-description'>Capital:</span>
              New Delhi 
            </p>
            <p>
              <span className='card-description'>Population:</span>
              1.41B 
            </p>
            <p>
              <span className='card-description'>Interesting Fact:</span>
              I Love India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
