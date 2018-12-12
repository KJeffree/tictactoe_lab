import React, {Component} from 'react';
import Square from './Square.js';

class GameGrid extends Component {
  constructor(props){
    super(props);
    this.handleSquareSelection = this.handleSquareSelection.bind(this);
  }

  handleSquareSelection(index){
    this.props.onSquareSelected(index)
  }

  render(){
    const squaresNodes = this.props.squares.map( (square, index) => {
      return <Square key = {index} name={`item${index}`} value={index} status={square} onSquareSelection={this.handleSquareSelection} />
    })

    return (<div className="gameGrid">{squaresNodes}</div>);

  }
}

export default GameGrid;
