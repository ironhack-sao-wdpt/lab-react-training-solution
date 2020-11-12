import React from 'react';

function IdCard(props){

  return(
    <div className='d-flex border border-dark m-3 p-3 align-items-center justify-content-around'>
      <img src={props.picture} alt="picture"/>
      <div>
        <p><strong>First name:</strong> {props.firstName} </p>
        <p><strong>Last name:</strong> {props.lastName} </p>
        <p><strong>Gender:</strong> {props.gender} </p>
        <p><strong>Height:</strong> {props.height / 100}m</p>
        <p><strong>Birth:</strong> {props.birth.toDateString()} </p>
      </div>
    </div>
  )
}

export default IdCard;