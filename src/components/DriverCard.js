import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  const {name, rating, img, car} = props;

  return (  
    <div className='m-3 p-2 border border-dark d-flex '>
      <img className='w-25 ' src={img} alt="driver"/>
      <div>
        <p><strong>{name}</strong></p>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;