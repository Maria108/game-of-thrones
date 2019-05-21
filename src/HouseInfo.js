import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { withRouter } from "react-router";


class HouseInfo extends Component {

  swornMembers() {
    if (this.props.chosenHouse.swornMembers.length > 0) {
      this.props.chosenHouse.swornMembers.map()
    }
  }

  render() {
    const infoHouse = this.props.chosenHouse

    console.log(infoHouse)
    if(infoHouse === undefined){
      return <h1>Please choose a house</h1>
    }
    return (
      <div>
        <ul>
        <li>House name: {infoHouse.name}</li>
        <li>Region: {infoHouse.region}</li>
        <li>Coat of Arms: {infoHouse.coatOfArms}</li>
        <li>Overlord: {infoHouse.overlord}</li>
        <li>Sworn members {}</li>
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    chosenHouse: state.chosenHouse
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    null,
    null,
    {
      pure: false
    }
  )(HouseInfo)
);
