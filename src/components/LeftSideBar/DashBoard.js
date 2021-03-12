import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import LeftSideMenu from "./LeftSideMenu";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import Layout from "../../components/Layout/Layout";

class DashBoard extends Component {
  render() {
    return (
      <Auxiliary>
        {/* <div style={{ textAlign: "center" }}>Welcome to dash board</div>; */}
        <Layout />
      </Auxiliary>
    );
  }
}
export default DashBoard;
