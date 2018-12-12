import React from 'react';

const Marker = ({value}) => {

  if(value == 1){
    return (<img alt="cross" src="cross.png"/>);
  }else if (value == 2){
    return (<img alt="circle" src="circle.png"/>);
  }else{
    return null;
  }
}

export default Marker;
