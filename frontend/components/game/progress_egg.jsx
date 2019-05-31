import React from 'react';

class ProgressEgg extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let one = this.props.turnsLeft >= 2 ? this.props.turnsLeft - 2 : null
    let two = this.props.turnsLeft >= 1 ? this.props.turnsLeft - 1 : null
    let three = this.props.turnsLeft
    let four = this.props.turnsLeft + 1
    let five = this.props.turnsLeft + 2
    return(
      <div className="game-progress">
        <div className="game-progress-egg"></div>
        <div className="game-progress-bar">
          <div className="game-progress-number">{one}</div>
          <div className="game-progress-number">{two}</div>
          <div className="game-progress-number">{three}</div>
          <div className="game-progress-number">{four}</div>
          <div className="game-progress-number">{five}</div>
        </div>
        <div className="game-progress-arrow"></div>
      </div>
    )
  }
}

export default ProgressEgg
