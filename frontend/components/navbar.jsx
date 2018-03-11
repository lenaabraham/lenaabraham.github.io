import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="header">
        <div>
          <Link to="/"><h1 id="lena-abraham">LENA ABRAHAM</h1></Link>
          <h2 className="titles">Chef & Food Stylist</h2>
        </div>
        <NavLink activeClassName="selected" className="header-item" to="/photos"><h2>PHOTOS</h2></NavLink>
        <NavLink activeClassName="selected" className="header-item" to="/videos"><h2>VIDEOS</h2></NavLink>
        <NavLink activeClassName="selected" className="header-item" to="/about"><h2>ABOUT</h2></NavLink>
        <NavLink activeClassName="selected" className="header-item" to="/contact"><h2>CONTACT</h2></NavLink>
      </div>
    )
  }
}

export default withRouter(Navbar);

// <NavLink activeClassName="selected" className="header-item" to="/game"><h2>GAME</h2></NavLink>
