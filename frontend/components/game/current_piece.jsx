import React from 'react';

class CurrentPiece extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentHover = ["empty","empty","empty","empty","empty","empty","empty"]
    if (this.props.droppingAllowed) {
      currentHover[this.props.currentHoverCol] = this.props.currentHoverValue
    }
    return(
      <div className="current-piece-div">
        <div className="current-piece-cell"><img src={`assets/images/game/${currentHover[0]}.png`} className="game-image-clear"/></div>
        <div className="current-piece-cell"><img src={`assets/images/game/${currentHover[1]}.png`} className="game-image-clear"/></div>
        <div className="current-piece-cell"><img src={`assets/images/game/${currentHover[2]}.png`} className="game-image-clear"/></div>
        <div className="current-piece-cell"><img src={`assets/images/game/${currentHover[3]}.png`} className="game-image-clear"/></div>
        <div className="current-piece-cell"><img src={`assets/images/game/${currentHover[4]}.png`} className="game-image-clear"/></div>
        <div className="current-piece-cell"><img src={`assets/images/game/${currentHover[5]}.png`} className="game-image-clear"/></div>
        <div className="current-piece-cell"><img src={`assets/images/game/${currentHover[6]}.png`} className="game-image-clear"/></div>
      </div>
    )
  }
}

export default CurrentPiece;
