import React, { useState, useEffect } from 'react';
import profilesList from '../data/berlin.json';
import IdCard from './IdCard';

const FaceBook = () => {
  const countries = [...new Set(profilesList.map((item) => item.country))];

  const [state, setState] = useState({
    profiles: [...profilesList],
  });

  const handleClick = (e) => {
    let targetCountry = e.currentTarget.value;

    const selected = profilesList.map((item) => {
      return item.country === targetCountry
        ? {
            ...item,
            bg: '#455eb4',
          }
        : { ...item };
    });
    setState({ ...state, profiles: [...selected] });
  };

  useEffect(() => {
    console.log(countries);
  }, [state]);

  return (
    <div className="w-100 p-5">
      {countries.sort().map((country, idx) => (
        <button
          onClick={(e) => handleClick(e)}
          key={idx}
          className={`country-btn btn btn-outline-primary btn-sm m-1 `}
          value={country}
          // style={{backgroundColor: `${state.buttonSelected ? country.bg : 'blue'}`}}
        >
          {country}
        </button>
      ))}

      <div className="row">
        {state.profiles.map((person, idx) => (

          <div className='col-sm-12 col-md-9 col-lg-3' >
            <div className="card m-2" style={{backgroundColor: `${person.bg ? person.bg : '#fff'}`}}>
              <img className="card-img-top"  src={person.img} alt={person.firstName} />
                <div className="card-body">
                  <p className="card-text"><strong>First name:</strong> {person.firstName}</p>
                  <p className="card-text"><strong>Last name: </strong>{person.lastName} </p>
                  <p className="card-text"><strong>Country: </strong>{person.country} </p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceBook;
