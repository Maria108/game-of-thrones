import React, { Component } from 'react';
import './App.css';

import { withRouter } from "react-router";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// import { loadBooks } from "./actions/bookAction"
import { loadHouses } from "./actions/houseAction"

class House extends Component {

  componentDidMount() {
    this.props.loadHouses();
  }

  render() {
    console.log(this.props.houses)
    const listHouses = this.props.houses.map(house => {
      return house.name
    })
    return (
      <div>
         <ul>
          {listHouses.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    houses: state.houses
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loadHouses: bindActionCreators(loadHouses, dispatch)
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
  )(House)
);
