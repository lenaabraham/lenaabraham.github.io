import React from 'react';

class Video extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="video-div">
        <iframe className="video" src={this.props.source} frameBorder="0" allowFullScreen="true"/>
        <div className="video-background-1"></div>
        <div className="video-background-2"></div>
      </div>
    )
  }
}

export default Video;
