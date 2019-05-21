import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import House from './House'
import Books from './Books'
import HouseInfo from './HouseInfo';

class NavBar extends React.Component {
  render() {
    return (
      <div>
      <nav>
        <Link to="/">Game of Thrones</Link>
        <ul>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/houses">Houses</Link></li>
        </ul>
      </nav>
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
        </Switch>
      </div>
    );
  }
};

export default NavBar
