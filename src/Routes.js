import {Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import DashBoard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route path="/wizard" component={Wizard} />
      </Switch>
    );
  }
}

export default Routes;