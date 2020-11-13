import React, { useState } from 'react';
import './LikeButton.css';

function LikeButton(props) {
  let [value, setValue] = useState(0);

  function handleClick() {
      setValue(value + 1)
  }

  return (
    <button onClick={handleClick}>
      {value} like{value === 1 ? '' : 's'}
    </button>
  );
}

export default LikeButton;
