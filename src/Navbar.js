import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import House from './House'
import Books from './Books'
import HouseInfo from './HouseInfo';
import Character from './Character';

import { Navbar, Nav, Container, Row } from 'react-bootstrap';

import './styles/style.scss';

class NavBar extends React.Component {
  render() {
    return (
    <Container>
      <Row>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand className="main-header" href="/">Game of Thrones</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
            <Link className="links" to="/books">Books</Link>
            <Link className="links" to="/houses">Houses</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </Row>
    <Switch>
      <Route
        path="/houses"
        component={House}
      />
      <Route
        path="/books"
        component={Books}
      />
      <Route
        path="/houseinfo"
        component={HouseInfo}
      />
      <Route
        path="/characters"
        component={Character}
      />
    </Switch>
    </Container>
    );
  }
};

export default NavBar
