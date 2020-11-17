import React, {useState} from 'react';

const IronHelp = (props) => {
  console.log(props)
  const [state, setState] = useState(0);

  function handleClick(){
    let count = state + 1
    setState(count)
  }

  return (  
    <div>
      <h2>Hello </h2>
      <img src="" alt=""/>
      <button onClick={handleClick}>{state} Likes</button>

    </div>
  );
}

export default IronHelp;