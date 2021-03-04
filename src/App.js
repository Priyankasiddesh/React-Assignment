import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import TrackBuilder from "./containers/TrackBuilder/TrackBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <TrackBuilder></TrackBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
