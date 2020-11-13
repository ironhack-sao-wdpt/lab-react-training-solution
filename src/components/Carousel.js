import React, { useState } from 'react';

function Carousel(props) {
  const [state, setState] = useState(0);

  function handleClickL() {
    if (state === 0) {
      setState(props.imgs.length - 1);
    } else {
      setState(state - 1);
    }
  }

  function handleClickR() {
    if (state === props.imgs.length - 1) {
      setState(0);
    } else {
      setState(state + 1);
    }
  }

  return (
    <div>
      <button onClick={handleClickL}>Left</button>
      <img src={props.imgs[state]}></img>
      <button onClick={handleClickR}>Right</button>
    </div>
  );
}

export default Carousel;
