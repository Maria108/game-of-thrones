import React, { Component } from 'react';
import './App.css';

import { withRouter } from "react-router";

import { Link, Route, Switch } from 'react-router-dom';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { loadHouses, getHouse } from "./actions/houseAction"

import HouseInfo from "./HouseInfo"

class House extends Component {

  componentDidMount() {
    this.props.loadHouses();
    this.props.getHouse();
  }

  handleClick = (house) => {
    return this.props.getHouse(house)
  }

  render() {
    console.log(this.props.houses)
    const listHouses = this.props.houses.map(house => {
      return house
    })
    return (
      <div>
          {listHouses.map((value, index) => {
            return (
              <div key={index}>
                <div ><Link to="/houseinfo" onClick={ ()=> this.handleClick(value)}>{value.name}</Link></div>
              </div>
            )
          })}
          <Switch>
          <Route
           path="/houseinfo"
           component={HouseInfo}
          //  render = {()=> <HouseInfo house={this.props.houses}/>}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    houses: state.houses,
    chosenHouse: state.chosenHouse
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loadHouses: bindActionCreators(loadHouses, dispatch),
    getHouse:  bindActionCreators(getHouse, dispatch)
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
