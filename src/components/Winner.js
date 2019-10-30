import React from 'react'

const Winner = ({winner}) => {
  if (winner == 1){
    return (<h1 className="blinking">Player 1 Wins!</h1>)
  } else if (winner == 2){
    return (<h1 className="blinking">Player 2 Wins!</h1>)
  } else {
    return null;
  }
}

export default Winner;
