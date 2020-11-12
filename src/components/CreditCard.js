import React from 'react';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  let month = expirationMonth < 10 ? '0' + expirationMonth : expirationMonth;
  
  let year = expirationYear % 2000

  let imgPath = type === 'Visa' ? './img/visa.png' : './img/master-card.svg'

  return (
    <div className="m-3 p-3" style={{ backgroundColor: bgColor, color: color, borderRadius: '0.5rem' }}>
      <img className='w-25 h-25' src={imgPath} alt="card"/>
      <p>•••• •••• •••• {number.substr(-4)} </p>
      <p>
        Expires {month}/{year} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
