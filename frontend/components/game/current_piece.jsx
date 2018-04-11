import React from 'react';

class CurrentPiece extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="current-piece-div">
        <div className="current-piece-cell"><img src={`assets/images/game/${this.props.currentHover[0]}.png`} className="game-image-clear"/></div>
        <div className="current-piece-cell"><img src={`assets/images/game/${this.props.currentHover[1]}.png`} className="game-image-clear"/></div>
        <div className="current-piece-cell"><img src={`assets/images/game/${this.props.currentHover[2]}.png`} className="game-image-clear"/></div>
        <div className="current-piece-cell"><img src={`assets/images/game/${this.props.currentHover[3]}.png`} className="game-image-clear"/></div>
        <div className="current-piece-cell"><img src={`assets/images/game/${this.props.currentHover[4]}.png`} className="game-image-clear"/></div>
        <div className="current-piece-cell"><img src={`assets/images/game/${this.props.currentHover[5]}.png`} className="game-image-clear"/></div>
        <div className="current-piece-cell"><img src={`assets/images/game/${this.props.currentHover[6]}.png`} className="game-image-clear"/></div>
      </div>
    )
  }
}

export default CurrentPiece;
