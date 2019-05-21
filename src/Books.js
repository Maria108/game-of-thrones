import React, { Component } from 'react';
import './App.css';

import { withRouter } from "react-router";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { loadBooks } from "./actions/bookAction"
// import { loadHouses } from "./actions/houseAction"

class Books extends Component {

  componentDidMount() {
    this.props.loadBooks();
  }

  render() {
    console.log(this.props.books)
    const listBooks = this.props.books.map(book => {
      return book.name
    })
    return (
      <div>
         <ul>
          {listBooks.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
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
  )(Books)
);
