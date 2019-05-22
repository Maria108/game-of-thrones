import React, { Component } from 'react';
import './styles/style.scss';

import NavBar from "./Navbar"

class App extends Component {

  render() {
    return (
      <div className="main-pic">
        <NavBar/>
      </div>
    );
  }
}

export default App
