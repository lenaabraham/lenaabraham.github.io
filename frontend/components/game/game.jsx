import React from 'react';
import GameCell from './game_cell';
import CurrentPiece from './current_piece';
import { withRouter } from 'react-router-dom';

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      "0a": "empty", "0b": "empty", "0c": "empty", "0d": "empty", "0e": "empty", "0f": "empty", "0g": "empty",
      "1a": "empty", "1b": "empty", "1c": "empty", "1d": "empty", "1e": "empty", "1f": "empty", "1g": "empty",
      "2a": "empty", "2b": "empty", "2c": "empty", "2d": "empty", "2e": "empty", "2f": "empty", "2g": "empty",
      "3a": "empty", "3b": "empty", "3c": "empty", "3d": "empty", "3e": "empty", "3f": "empty", "3g": "empty",
      "4a": "empty", "4b": "empty", "4c": "empty", "4d": "empty", "4e": "empty", "4f": "empty", "4g": "empty",
      "5a": "empty", "5b": "empty", "5c": "empty", "5d": "empty", "5e": "empty", "5f": "empty", "5g": "empty",
      "6a": "empty", "6b": "empty", "6c": "empty", "6d": "empty", "6e": "empty", "6f": "empty", "6g": "empty",
      currentHover: ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      currentPiece: null
     }

    this.getRandomContent = this.getRandomContent.bind(this);
    this.runBoard = this.runBoard.bind(this);
    this.columnHover = this.columnHover.bind(this);
  }

  componentDidMount() {
    let state = this.state;
    ['a','b','c','d','e','f','g'].forEach( (col) => {
      [6, 5, 4].forEach( (row) => {
        let state = this.state;
        let foundation = true;
        if(row === 5) {
          if(this.state[6 + col] === "empty") foundation = false;
        }
        if(row === 4) {
          if(this.state[5 + col] === "empty") foundation = false;
        }
        state[row + col] = this.getRandomContent(foundation);
      })
    })
    state.currentPiece = this.getRandomContent(true);
    this.setState(state);

    this.runBoard();
  }

  getRandomContent(foundation) {
    if (foundation) {
      let options = [1, 2, 3, 4, 5, 6, 7, "whole", "cracked", "empty"];
      let idx = Math.floor(Math.random() * options.length);
      return options[idx];
    } else {
      return "empty";
    }
  }

  runBoard() {
    let state = this.state;
    [6, 5, 4, 3, 2, 1, 0].forEach( (row) => {
      ['a','b','c','d','e','f','g'].forEach( (col) => {
        if(state[row + col] === "empty") return;
        let neighbors = this.neighbors(row, col);
      })
    })
  }

  neighbors(row, col) {
    let neighbors;
  }

  columnHover(e) {
    let mousePosition = e.clientX - this.board.offsetLeft;
    let column = Math.floor(mousePosition / 70);
    let state = this.state;
    let currentHover = ["empty", "empty", "empty", "empty", "empty", "empty", "empty"];
    let options = [1,2,3,4,5,6,7];
    currentHover[column] = options[Math.floor(Math.random() * 7)];
    this.setState({currentHover: currentHover})
  }

  render() {
    return(
      <div className="game-div">
        <div ref={board => this.board = board} onMouseOver={this.columnHover} className="game-board">
          <CurrentPiece currentHover={this.state.currentHover} />
          <div className="game-grid">
            <div className="game-row">
              <GameCell content={this.state["0a"]}/>
              <GameCell content={this.state["0b"]}/>
              <GameCell content={this.state["0c"]}/>
              <GameCell content={this.state["0d"]}/>
              <GameCell content={this.state["0e"]}/>
              <GameCell content={this.state["0f"]}/>
              <GameCell content={this.state["0g"]}/>
            </div>
            <div className="game-row">
              <GameCell content={this.state["1a"]}/>
              <GameCell content={this.state["1b"]}/>
              <GameCell content={this.state["1c"]}/>
              <GameCell content={this.state["1d"]}/>
              <GameCell content={this.state["1e"]}/>
              <GameCell content={this.state["1f"]}/>
              <GameCell content={this.state["1g"]}/>
            </div>
            <div className="game-row">
              <GameCell content={this.state["2a"]}/>
              <GameCell content={this.state["2b"]}/>
              <GameCell content={this.state["2c"]}/>
              <GameCell content={this.state["2d"]}/>
              <GameCell content={this.state["2e"]}/>
              <GameCell content={this.state["2f"]}/>
              <GameCell content={this.state["2g"]}/>
            </div>
            <div className="game-row">
              <GameCell content={this.state["3a"]}/>
              <GameCell content={this.state["3b"]}/>
              <GameCell content={this.state["3c"]}/>
              <GameCell content={this.state["3d"]}/>
              <GameCell content={this.state["3e"]}/>
              <GameCell content={this.state["3f"]}/>
              <GameCell content={this.state["3g"]}/>
            </div>
            <div className="game-row">
              <GameCell content={this.state["4a"]}/>
              <GameCell content={this.state["4b"]}/>
              <GameCell content={this.state["4c"]}/>
              <GameCell content={this.state["4d"]}/>
              <GameCell content={this.state["4e"]}/>
              <GameCell content={this.state["4f"]}/>
              <GameCell content={this.state["4g"]}/>
            </div>
            <div className="game-row">
              <GameCell content={this.state["5a"]}/>
              <GameCell content={this.state["5b"]}/>
              <GameCell content={this.state["5c"]}/>
              <GameCell content={this.state["5d"]}/>
              <GameCell content={this.state["5e"]}/>
              <GameCell content={this.state["5f"]}/>
              <GameCell content={this.state["5g"]}/>
            </div>
            <div className="game-row">
              <GameCell content={this.state["6a"]}/>
              <GameCell content={this.state["6b"]}/>
              <GameCell content={this.state["6c"]}/>
              <GameCell content={this.state["6d"]}/>
              <GameCell content={this.state["6e"]}/>
              <GameCell content={this.state["6f"]}/>
              <GameCell content={this.state["6g"]}/>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default withRouter(Game);
