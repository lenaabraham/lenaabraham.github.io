import React from 'react';
import { withRouter } from 'react-router-dom';

import Savory from './savory';
import Sweet from './sweet';

class Photos extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      view: "savory"
    }

    this.toggleView = this.toggleView.bind(this)
  }

  toggleView(view) {
    this.setState({view: view})
  }

  render() {
    let component
    if (this.state.view === "savory") {
      component = <Savory />
    } else if (this.state.view === "sweet") {
      component = <Sweet />
    }
    return(
      <div>
        <div className="photo-viewer">
          <div onClick={() => this.toggleView("savory")} className={`photo-viewer-option cheeto ${this.state.view === "savory" ? "viewing" : null}`}><t className="photo-viewer-text">Savory</t></div>
          <div onClick={() => this.toggleView("sweet")} className={`photo-viewer-option lolly ${this.state.view === "sweet" ? "viewing" : null}`}><t className="photo-viewer-text">Sweet</t></div>
        </div>
        { component }
      </div>
    )
  }
}

export default withRouter(Photos);
