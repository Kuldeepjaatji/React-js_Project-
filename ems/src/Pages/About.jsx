import countryFact from '../Api/countryData.json';

export const About = () => {
  return (
    <section className='section-about container'>
      <h2 className='container-tital'>Hear are the Interesting Facts <br/>we're proud of</h2>
      <div className='gradient-cards'>
        {
          countryFact.map((country1)=>{

            const {id,country,capital,population,interestingFact} = country1

            return (
              <>
              <div>
                <div className='card' key={id}>
                  <div className='container-card bg-blue-box'>
                    <p className='card-title'>{country}</p>
                    <p>
                      <span className='card-description'>Capital:- </span>
                      {capital} 
                    </p>
                    <p>
                      <span className='card-description'>Population:- </span>
                      {population} 
                    </p>
                    <p>
                      <span className='card-description'>Interesting Fact:- </span>
                      {interestingFact}
                    </p>
                  </div>
              </div>
              </div>
              </>
            )})
        };
        
      </div>
    </section>
  );
}
