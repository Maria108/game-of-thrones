import React, { Component } from 'react';
import './styles/style.scss';

import { withRouter } from "react-router";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { loadBooks } from "./actions/bookAction"

import { Container, Row, Col } from 'react-bootstrap';


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
      <div className="picture-book">
        <Container>
          <Row >
            <Col className="item-list">
              <ol>
                {listBooks.map((value, index) => {
                  return <li className="book" key={index}>{value}</li>
                })}
              </ol>
            </Col>
          </Row>
        </Container>
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
