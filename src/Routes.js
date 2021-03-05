import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import DashBoard from "./components/LeftSideBar/DashBoard";
import Trips from "./components/LeftSideBar/Trips";
import Tracking from "./components/LeftSideBar/Tracking";
import Transporters from "./components/LeftSideBar/Transporters";
import Analytics from "./components/LeftSideBar/Analytics";

import history from "./history";
import App from "./App";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/DashBoard" component={DashBoard} />
          <Route path="/Trips" component={Trips} />
          <Route path="/Tracking" component={Tracking} />
          <Route path="/Transporters" component={Transporters} />
          <Route path="/Analytics" component={Analytics} />
        </Switch>
      </Router>
    );
  }
}
