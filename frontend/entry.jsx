import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import Navbar from './components/navbar.jsx'
import Home from './components/home.jsx'
import Photos from './components/photos.jsx'
import Videos from './components/videos.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Game from './components/game/game.jsx'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('content');
  ReactDOM.render(<Root />, root);
})

const Root = () => {
  return(
    <HashRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/photos" component={Photos} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </div>
    </HashRouter>
  )
}
