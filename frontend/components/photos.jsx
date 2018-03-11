import React from 'react';
import { withRouter } from 'react-router-dom';

import Photo from './photo';

class Photos extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="photos">
        <div className="photo-row">
          <Photo classes="photo size-2" source="assets/images/slamon.jpg" />
          <Photo classes="photo size-2" source="assets/images/pork.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/sword.jpg" />
          <Photo classes="photo size-3" source="assets/images/salsbury.jpg" />
          <Photo classes="photo size-3" source="assets/images/spagnmeat.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-2" source="assets/images/chicken.jpg" />
          <Photo classes="photo size-2" source="assets/images/creamofmush.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/shrimpalf.jpg" />
          <Photo classes="photo size-3" source="assets/images/wonton.jpg" />
          <Photo classes="photo size-3" source="assets/images/sword2.jpg" />
        </div>
      </div>
    )
  }
}

export default withRouter(Photos);
