import React from 'react'

const Winner = ({winner}) => {
  if (winner == 1){
    return (
      <div className="winner">
        <h1 className="blinking">Harry Potter Wins!</h1>
        <img src="HarryPotterGif.gif" alt="Harry gif"></img>
      </div>
    )
  } else if (winner == 2){
    return (
      <div className="winner">
        <h1 className="blinking">Voldemort Wins!</h1>
        <img src="VoldemortGif.gif" alt="Voldemort gif"></img>
      </div>
      )
  } else if (winner == 0){
    return (
      <div className="winner">
        <h1 className="blinking">It's a Draw!</h1>
        <img src="DrawGif.gif" alt="Draw gif"></img>
      </div>
    )
  } else {
    return null;
  }
}

export default Winner;
