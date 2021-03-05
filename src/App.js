import React, { Component } from "react";
import Routes from "./Routes";
import Layout from "./components/Layout/Layout";
import TrackBuilder from "./containers/TrackBuilder/TrackBuilder";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <TrackBuilder></TrackBuilder>
            <Routes />
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
