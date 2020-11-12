import React from 'react';

const Random = (props) => {
  let random = Math.round(Math.random() * (props.max - props.min)) + props.min;

  return (
    <div className="border border-dark m-3">
      <p>
        Random value between {props.min} and {props.max} => {random}
      </p>
    </div>
  );
};

export default Random;
