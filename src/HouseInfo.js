import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { Container, Row, Col } from 'react-bootstrap';



class HouseInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
    this.swornMembers = this.swornMembers.bind(this);
  }

  swornMembers() {
    if (this.props.chosenHouse.swornMembers.length > 0) {
    let membersArray = []
    let memberName = ''
      this.props.chosenHouse.swornMembers.forEach(function(member) {

        fetch(member)
          .then(res => res.json())
          .then(member => {
            this.setState({
              members: member.name
            });
            // membersArray.push(member.name)
            // memberName = member.name
            console.log(this.setState.members)
          })
          .catch(console.error)
          
          // console.log('arrrray', membersArray)
          // console.log('naaaaame', member.name)
          // console.log('myyy name', memberName)

          // return membersArray
        // membersArray.push(member)
      });
    // return membersArray
    }
  }

  render() {
    const infoHouse = this.props.chosenHouse
    if(infoHouse === undefined){
      return <h1>Please choose a house</h1>
    }
    return (
      <div className="house-info-picture">
      <Container>
      <Row>
      <Col className="item-list">
          <ul>
          <li className="house-info" >House name: {infoHouse.name}</li>
          <li className="house-info" >Region: {infoHouse.region}</li>
          <li className="house-info" >Coat of Arms: {infoHouse.coatOfArms}</li>
          <li className="house-info" >Overlord: {infoHouse.overlord}</li>
          </ul>
      </Col>
      </Row>
      </Container>
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
