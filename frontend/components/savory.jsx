import React from 'react'

import Photo from './photo';

class Savory extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="photos">
        <div className="photo-row">
          <Photo classes="photo size-2" source="assets/images/food_shots/bread_pasta.jpg" />
          <Photo classes="photo size-2" source="assets/images/food_shots/lasagna.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/food_shots/vodka_sauce.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/lettuce_wraps.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/chicken.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-2" source="assets/images/food_shots/adobo.jpg" />
          <Photo classes="photo size-2" source="assets/images/food_shots/sword2.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/food_shots/pasta.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/wonton.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/queso.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/food_shots/mashed_potatoes.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/tenderloin.JPG" />
          <Photo classes="photo size-3" source="assets/images/food_shots/mozz_sticks.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-2" source="assets/images/food_shots/pork.jpg" />
          <Photo classes="photo size-2" source="assets/images/food_shots/tilapia.jpg" />
        </div>
        <div className="photo-row">
          <Photo classes="photo size-3" source="assets/images/food_shots/fried_chicken.JPG" />
          <Photo classes="photo size-3" source="assets/images/food_shots/shepherd.jpg" />
          <Photo classes="photo size-3" source="assets/images/food_shots/loin.jpg" />
        </div>
      </div>
    )
  }
}

export default Savory
