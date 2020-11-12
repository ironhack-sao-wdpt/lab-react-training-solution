import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;

  let hexaDecimal =
    '#' +
    ('0' + r.toString(16)).substr(-2) +
    ('0' + g.toString(16)).substr(-2) +
    ('0' + b.toString(16)).substr(-2);

  return (
    <div className="m-3 p-2" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>
        {hexaDecimal}
      </p>
    </div>
  );
};

export default BoxColor;
