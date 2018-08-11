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
          <Photo classes="photo size-2" source="assets/images/food_shots/salmon.jpg" />
          <Photo classes="photo size-2" source="assets/images/food_shots/pancakes.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/food_shots/chicken.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/salsbury.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/spagnmeat.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-2" source="assets/images/food_shots/lasagna.jpg" />
          <Photo classes="photo size-2" source="assets/images/food_shots/sword2.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/food_shots/shrimpalf.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/wonton.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/adobo.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-2" source="assets/images/food_shots/tenderloin.jpg" />
          <Photo classes="photo size-2" source="assets/images/food_shots/cornbread.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/food_shots/fried_chicken.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/shepherd.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/loin.jpg" />
        </div>
      </div>
    )
  }
}

// <div className="photo-row">
//   <Photo classes="photo size-4" source="assets/images/food_shots/funnel.jpg" />
//   <div className="photo-stack">
//     <Photo classes="photo stack-size-1" source="assets/images/food_shots/lasagna.jpg" />
//     <Photo classes="photo stack-size-1" source="assets/images/food_shots/sword2.jpg" />
//   </div>
//   <Photo classes="photo size-4" source="assets/images/food_shots/brisket.jpg" />
// </div>
export default withRouter(Photos);
