import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./components/LeftSideBar/DashBoard";
import Trips from "./components/LeftSideBar/Trips";
import Tracking from "./components/LeftSideBar/Tracking";
import Transporters from "./components/LeftSideBar/Transporters";
import Analytics from "./components/LeftSideBar/Analytics";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import LeftSideMenu from "./components/LeftSideBar/LeftSideMenu";
import Settings from "./components/LeftSideBar/Settings";

class App extends Component {
  render() {
    return (
      <Router>
        <TopNavBar />
        <LeftSideMenu />
        <div>
          <Switch>
            <Route path="/" exact component={Layout} />
            <Route path="/dashBoard" component={DashBoard} />
            <Route path="/trips" component={Trips} />
            <Route path="/tracking" component={Tracking} />
            <Route path="/transporters" component={Transporters} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
