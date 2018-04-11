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
          <Photo classes="photo size-2" source="assets/images/food_shots/slamon.jpg" />
          <Photo classes="photo size-2" source="assets/images/food_shots/pork.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/food_shots/sword.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/salsbury.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/spagnmeat.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-2" source="assets/images/food_shots/chicken.jpg" />
          <Photo classes="photo size-2" source="assets/images/food_shots/creamofmush.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/food_shots/shrimpalf.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/wonton.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/sword2.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-2" source="assets/images/food_shots/chili.jpg" />
          <Photo classes="photo size-2" source="assets/images/food_shots/pancakes.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/food_shots/lasagna.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/shepherd.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/loin.jpg" />
        </div>
      </div>
    )
  }
}

export default withRouter(Photos);
