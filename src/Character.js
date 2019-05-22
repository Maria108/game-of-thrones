import React, { Component } from 'react';
import './App.css';

import { withRouter } from "react-router";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getCharacters } from "./actions/characterAction"

class Character extends Component {

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    const listCharacter = this.props.characters.map(character => {
      return character.url.slice(45)
    })
    return (
      <div>

         <ul>
          {listCharacter.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getCharacters: bindActionCreators(getCharacters, dispatch)
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
  )(Character)
);
