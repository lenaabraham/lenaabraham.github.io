import React from 'react';
import { withRouter } from 'react-router-dom';

class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>hello friend</div>
    )
  }
}

export default withRouter(Game);
