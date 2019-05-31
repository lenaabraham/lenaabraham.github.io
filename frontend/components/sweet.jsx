import React from 'react'

import Photo from './photo';

class Sweet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="photos">
        <div className="photo-row">
          <Photo classes="photo size-2" source="assets/images/food_shots/cupcakes.jpg" />
          <Photo classes="photo size-2" source="assets/images/food_shots/blondies.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/food_shots/funnel.jpg" />
          <div className="photo-column">
            <Photo classes="photo size-5" source="assets/images/food_shots/pie.jpg" />
            <Photo classes="photo size-5" source="assets/images/food_shots/pancakes.jpg" />
          </div>
          <Photo classes="photo size-3" source="assets/images/food_shots/smore_cookies.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-2" source="assets/images/food_shots/loaf_2.jpg" />
          <Photo classes="photo size-2" source="assets/images/food_shots/blueberry_muffins.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/food_shots/cornbread.JPG" />
          <Photo classes="photo size-3" source="assets/images/food_shots/brittle.JPG" />
          <Photo classes="photo size-3" source="assets/images/food_shots/coconut_pancakes_2.JPG" />
        </div>
      </div>
    )
  }
}
// <Photo classes="photo size-3" source="assets/images/food_shots/coconut_pancakes_2.jpg" />
export default Sweet
