import React, { Component } from 'react';
import './App.css';

import { withRouter } from "react-router";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { loadBooks } from "./actions/bookAction"
import { loadHouses } from "./actions/houseAction"

import House from "./House"
import NavBar from "./Navbar"

class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
      </div>
    );
  }
}

export default App
