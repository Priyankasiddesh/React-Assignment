import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import LeftSideMenu from "../../components/LeftSideBar/LeftSideMenu";
import TrackCards from "../../components/TrackTruckCards/TrackCards";
import "./TrackBuilder.scss";
import TruckInfo from "../../components/TruckInfo/TruckInfo";
import SearchField from "../../components/SearchComponent/SearchField";
import NavBar from "../../components/NavBar/NavBar";
class TrackBuilder extends Component {
  render() {
    return (
      <Auxiliary>
        <div className="Content">
          <LeftSideMenu />
          <span style={{ display: "inline" }}>
            <NavBar />
            <SearchField />
            <TrackCards />
            <TruckInfo />
          </span>
        </div>
      </Auxiliary>
    );
  }
}
export default TrackBuilder;
