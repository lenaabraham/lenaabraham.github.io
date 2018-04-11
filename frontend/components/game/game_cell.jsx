import React from 'react';

class GameCell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let source = `assets/images/game/${this.props.content}.png`
    return(
      <div className="game-cell">
        <img className="game-image-transition" src="assets/images/game/fire.png"></img>
        <img className="game-image" src={source}></img>
      </div>
    )
  }
}

export default GameCell;
