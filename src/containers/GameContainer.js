import React, {Component} from 'react';
import GameGrid from "../components/GameGrid.js"
import Winner from '../components/Winner.js'


class GameContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentMarker: true,
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: null
    }
    this.handleSquareSelected = this.handleSquareSelected.bind(this);
    this.handleReset = this.handleReset.bind(this)
  }

  handleReset() {
    this.setState({squares: [0, 0, 0, 0, 0, 0, 0, 0, 0], winner: null})
  }

  handleSquareSelected(squaresplayed){
    if (this.state.winner == null){
    console.log("squares", this.state.squares);
    const newSquare = this.state.squares.map((square, index) => {
      if(index == squaresplayed && square == 0){
        if (this.state.currentMarker == true){
          this.setState({currentMarker: false})
          return square = 1;
        }
        this.setState({currentMarker: true})
        return square = 2;
      }
      return square;
    })
      console.log("newSquare", newSquare);
      this.checkWinner(newSquare)
    this.setState({squares: newSquare});
  } else {
    return null;
  }

  }

  checkWinner(allSquares){
    // const allSquares = this.state.squares
    console.log('state when clicked', allSquares.slice())
    if (allSquares[0] == allSquares[1] && allSquares[1] == allSquares[2] && allSquares[0] != 0){
      this.setState({winner: allSquares[0]});
    }else if(allSquares[3] == allSquares[4] && allSquares[4] == allSquares[5] && allSquares[3] != 0){
      this.setState({winner: allSquares[3]});
    }else if(allSquares[6] == allSquares[7] && allSquares[7] == allSquares[8] && allSquares[6] != 0){
      this.setState({winner: allSquares[6]});
    }else if(allSquares[0] == allSquares[3] && allSquares[3] == allSquares[6] && allSquares[0] != 0){
      this.setState({winner: allSquares[0]});
    }else if(allSquares[1] == allSquares[4] && allSquares[4] == allSquares[7] && allSquares[1] != 0){
      this.setState({winner: allSquares[1]});
    }else if(allSquares[2] == allSquares[5] && allSquares[5] == allSquares[8] && allSquares[2] != 0){
      this.setState({winner: allSquares[2]});
    }else if(allSquares[2] == allSquares[4] && allSquares[4] == allSquares[6] && allSquares[2] != 0){
      this.setState({winner: allSquares[2]});
    }else if(allSquares[0] == allSquares[4] && allSquares[4] == allSquares[8] && allSquares[0] != 0){
      this.setState({winner: allSquares[0]});
    }


}

  render(){
    return(
      <div className="gameContainer">
        <Winner winner={this.state.winner}/>
        <GameGrid squares={this.state.squares} onSquareSelected={this.handleSquareSelected}/>
        <button onClick={this.handleReset}>Reset</button>

      </div>
    )
  }
}

export default GameContainer
