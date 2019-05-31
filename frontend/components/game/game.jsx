import React from 'react';
import GameCell from './game_cell';
import CurrentPiece from './current_piece';
import ProgressEgg from './progress_egg';
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
      currentHoverCol: null,
      currentHoverValue: null,
      droppingAllowed: false,
      turnsLeft: 5,
      lost: false
    }
    this.allColumns = ['a','b','c','d','e','f','g']
    this.allRows = [0,1,2,3,4,5,6]
    this.allValues = [1,2,3,4,5,6,7,'whole','cracked','empty']
    this.allNumbers = [1,2,3,4,5,6,7]

    this.getRandomContent = this.getRandomContent.bind(this);
    this.runBoard = this.runBoard.bind(this);
    this.columnHover = this.columnHover.bind(this);
    this.splitIntoGroups = this.splitIntoGroups.bind(this);
    this.advanceCells = this.advanceCells.bind(this);
    this.dropCells = this.dropCells.bind(this);
    this.dropPiece = this.dropPiece.bind(this);
    this.cellNeighbors = this.cellNeighbors.bind(this);
    this.addLayer = this.addLayer.bind(this);
  }

  componentDidMount() {
    let state = this.state;
    this.allColumns.forEach( (col) => {
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
    let options = [1,2,3,4,5,6,7,"whole"];
    state.currentHoverValue = options[Math.floor(Math.random() * 8)];
    this.setState(state);

    this.runBoard();
  }

  getRandomContent(foundation) {
    if (foundation) {
      let idx = Math.floor(Math.random() * this.allValues.length);
      return this.allValues[idx];
    } else {
      return "empty";
    }
  }

  runBoard() {
    let state = this.state;
    let allGroups = []
    this.allColumns.forEach( (col) => {
      let cells = this.allRows.map( row => row + col )
      let groups = this.splitIntoGroups(cells)
      groups.forEach( group => allGroups.push(group) )
    })
    this.allRows.forEach( (row) => {
      let cells = this.allColumns.map( col => row + col )
      let groups = this.splitIntoGroups(cells)
      groups.forEach( group => allGroups.push(group) )
    })
    let cellsToAdvance = []
    allGroups.forEach( (group) => {
      group.forEach( (cell) => {
        if (this.state[cell] == group.length && !cellsToAdvance.includes(cell)) cellsToAdvance.push(cell)
      })
    })
    if (cellsToAdvance.length > 0) {
      setTimeout( () => {
        this.advanceCells(cellsToAdvance)
      }, 200)
    } else {
      if (this.state.turnsLeft === 0) {
        this.setState({turnsLeft: 6})
        this.addLayer()
      }
      this.setState({droppingAllowed: true})
    }
  }

  splitIntoGroups(cells) {
    let groups = []
    let group = []
    cells.forEach( (cell) => {
      if (this.state[cell] == 'empty') {
        if (group.length > 0) {
          groups.push(group)
          group = []
        }
      } else {
        group.push(cell)
      }
    })
    if (group.length > 0) groups.push(group)
    return groups
  }

  advanceCells(cells) {
    let state = this.state
    cells.forEach( (cell) => {
      this.setState({[cell]: "fire"})
    })
    setTimeout( () => {
      let neighborsToCrack = []
      cells.forEach( (cell) => {
        this.setState({[cell]: "empty"})
        this.cellNeighbors(cell).forEach( (cell) => {
          if (!neighborsToCrack.includes(cell)) neighborsToCrack.push(cell)
        })
      })
      neighborsToCrack.forEach( (cell) => {
        if (this.state[cell] == 'whole') {
          this.setState({[cell]: 'cracked'})
        } else if (this.state[cell] == 'cracked') {
          let value = Math.floor(Math.random() * 7) + 1
          this.setState({[cell]: value})
        }
      })
      this.dropCells()
    }, 200)
  }

  cellNeighbors(cell) {
    let row = parseInt(cell[0])
    let col = cell[1].charCodeAt()
    let top = `${row-1}${String.fromCharCode(col)}`
    let bottom = `${row+1}${String.fromCharCode(col)}`
    let left = `${row}${String.fromCharCode(col-1)}`
    let right = `${row}${String.fromCharCode(col+1)}`
    return [top, bottom, left, right]
  }

  dropCells() {
    let interval = setInterval( () => {
      let stopInterval = true
      this.allColumns.forEach( (col) => {
        this.allRows.reverse().forEach( (row) => {
          if (this.state[row+col] == 'empty' && this.state[(row-1)+col] != 'empty' &&row != 0) {
            this.setState({[row+col]: this.state[(row-1)+col], [(row-1)+col]: "empty"})
            stopInterval = false
          }
        })
        this.allRows.reverse()
      })
      if (stopInterval) {
        clearInterval(interval)
        this.runBoard()
      }
    }, 200)
  }

  columnHover(e) {
    let mousePosition = e.clientX - this.board.offsetLeft;
    let column = Math.floor(mousePosition / 70);
    this.setState({currentHoverCol: column})
  }

  dropPiece() {
    if (this.state.droppingAllowed) {
      let col = this.allColumns[this.state.currentHoverCol]
      let value = this.state.currentHoverValue
      let row = 0
      let options = [1,2,3,4,5,6,7,"whole"];
      let newValue = options[Math.floor(Math.random() * 8)];
      this.setState({turnsLeft: this.state.turnsLeft - 1, droppingAllowed: false, currentHoverValue: newValue})
      let interval = setInterval( () => {
        if (this.state[row+col] == 'empty') {
          this.setState({[row+col]: value, [(row-1)+col]: "empty"})
          row += 1
        } else {
          clearInterval(interval)
          this.runBoard()
        }
      }, 100)
    }
  }

  addLayer() {
    this.allRows.forEach( (row) => {
      this.allColumns.forEach( (col) => {
        if (row == 0 && this.state[row+col] != 'empty') this.setState({lost: true})
        if (row == 6) {
          this.setState({[row+col]: 'whole'})
        } else {
          this.setState({[row+col]: this.state[(row+1)+col]})
        }
      })
    })
    this.runBoard()
  }

  render() {
    let grid;
    if (this.state.lost) {
      grid = (
        <div className="game-grid">
          <t className="lose-screen-text">YOU LOSE</t>
        </div>
      )
    } else {
      grid = (
        <div onClick={this.dropPiece} className="game-grid">
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
      )
    }
    return(
      <div className="game-div">
        <div ref={board => this.board = board} onMouseOver={this.columnHover} className="game-board">
          <CurrentPiece currentHoverCol={this.state.currentHoverCol} currentHoverValue={this.state.currentHoverValue} droppingAllowed={this.state.droppingAllowed} />
          {grid}
          <ProgressEgg turnsLeft={this.state.turnsLeft}/>
        </div>
    </div>
    )
  }
}

export default withRouter(Game);
