import React from 'react';

const Marker = ({value}) => {

  if(value == 1){
    return (<img class="marker" alt="HarryPotter" src="HarryPotter.png"/>);
  }else if (value == 2){
    return (<img class="marker" alt="Voldemort" src="Voldemort.png"/>);
  }else{
    return null;
  }
}

export default Marker;
