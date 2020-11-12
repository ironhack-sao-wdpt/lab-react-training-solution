import React, { useState } from 'react';
import './Dice.css';

function Dice() {
  let number = Math.floor(Math.random() * 6) + 1;
  let srcImg = `./img/dice${number}.png`;
  let [value, setValue] = useState(srcImg);

  function handleClick() {
    let empty = '-empty';
    srcImg = `./img/dice${empty}.png`;
    setValue(srcImg);
    setTimeout(() => {
      number = Math.floor(Math.random() * 6) + 1;
      srcImg = `./img/dice${number}.png`;
      setValue(srcImg);
    }, 1000);
  }

  return (
    <div className="dices">
      <img
        className="dice-logo"
        src={value}
        width="100px"
        onClick={handleClick}
      ></img>
    </div>
  );
}

export default Dice;
