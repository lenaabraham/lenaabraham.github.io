import React from 'react';
import { withRouter } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="about">
        <div className="about-photo-div">
          <img src="assets/images/lena.jpeg" alt="" />
          <p id="about-photo-caption">Cooking "en plein air".</p>
        </div>
        <p id="about-bio">Lena Abraham is a chef and food stylist in New York City. She has worked both in digital media at <a href="http://www.delish.com" target="_blank" className="about-bio-link">Delish</a> and <a href="http://www.firstwefeast.com" target="_blank" className="about-bio-link">First We Feast</a> and in print at <a href="http://www.cherrybombe.com" target="_blank" className="about-bio-link">Cherry Bombe</a>. She likes <a href="https://www.youtube.com/watch?v=9wfpXI5PKlw" target="_blank" className="about-bio-link-hidden">spicy food</a> and <a href="https://www.youtube.com/watch?v=qms60P33nSc" target="_blank" className="about-bio-link-hidden">chopping things</a>.</p>
      </div>
    )
  }
}

export default withRouter(About);
