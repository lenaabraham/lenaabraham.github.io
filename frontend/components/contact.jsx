import React from 'react';
import { withRouter } from 'react-router-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <div className="hamburger-phone"><img src="assets/images/hamburgerphone.jpg"></img></div>
        <div className="contact">
          <a href="mailto:lea273@nyu.edu?Subject=Sup" target="_top"><i className="fa fa-envelope-o icons" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/lena-abraham-2ba25b94/" target="_blank"><i className="fa fa-linkedin icons" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/bigfatlena/" target="_blank"><i className="fa fa-instagram icons" aria-hidden="true"></i></a>
        </div>
      </div>
    )
  }
}

export default withRouter(Contact);
