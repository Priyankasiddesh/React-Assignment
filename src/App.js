import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./components/LeftSideBar/DashBoard";
import Trips from "./components/LeftSideBar/Trips";
import Tracking from "./components/LeftSideBar/Tracking";
import Transporters from "./components/LeftSideBar/Transporters";
import Analytics from "./components/LeftSideBar/Analytics";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Layout} />
            <Route path="/DashBoard" component={DashBoard} />
            <Route path="/Trips" component={Trips} />
            <Route path="/Tracking" component={Tracking} />
            <Route path="/Transporters" component={Transporters} />
            <Route path="/Analytics" component={Analytics} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
