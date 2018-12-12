import React from 'react';
import Marker from './Marker.js'


const Square = (props) => {

  function handleClick(event) {
    props.onSquareSelection(event.target.dataset.value)
  }

  return(
    <div className={props.name} data-value={props.value} onClick={handleClick} status={props.status}>
    <Marker value={props.status}/>
    </div>
  );
}

export default Square;
