import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withRouter } from "react-router";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { loadBooks } from "./actions/bookAction"




class App extends Component {

  componentDidMount() {
    this.props.loadBooks();
  }

  render() {
    console.log(this.props.books)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loadBooks: bindActionCreators(loadBooks, dispatch)
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {
      pure: false
    }
  )(App)
);
