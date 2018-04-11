import React from 'react';
import { withRouter } from 'react-router-dom';

import Video from './video';

class Videos extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="videos">
        <div className="videos-row">
          <Video source="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdelish%2Fvideos%2F10156010110177437%2F&autoplay=1" />
          <Video source="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdelish%2Fvideos%2F10155883656032437%2F&autoplay=1" />
          <Video source="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdelish%2Fvideos%2F10155892943412437%2F&autoplay=1" />
          <Video source="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdelish%2Fvideos%2F10155925438852437%2F&autoplay=1" />
        </div>
        <div className="videos-row">
          <Video source="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdelish%2Fvideos%2F10155762452992437%2F&autoplay=1" />
          <Video source="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdelish%2Fvideos%2F10155749129892437%2F&autoplay=1" />
          <Video source="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdelish%2Fvideos%2F10155664705267437%2F&autoplay=1" />
          <Video source="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdelish%2Fvideos%2F10155657029667437%2F&autoplay=1" />
        </div>
        <div className="videos-row">
          <Video source="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdelish%2Fvideos%2F10155813218692437%2F&autoplay=1" />
          <Video source="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdelish%2Fvideos%2F10156188746527437%2F&autoplay=1" />
          <Video source="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdelish%2Fvideos%2F10156019442062437%2F&autoplay=1" />
          <Video source="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdelish%2Fvideos%2F10156628870917437%2F&autoplay=1" />
        </div>
      </div>
    )
  }
}

export default withRouter(Videos);
