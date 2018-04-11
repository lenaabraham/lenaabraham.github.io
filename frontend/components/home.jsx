import React from 'react';
import { withRouter } from 'react-router-dom';

const Home = () => {
  return(
    <div className="index-background">
      <img src="assets/images/food_shots/wonton.jpg"></img>
    </div>
  )
}

export default withRouter(Home);
