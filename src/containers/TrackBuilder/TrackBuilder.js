import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import LeftSideMenu from "../../components/LeftSideBar/LeftSideMenu";
import TrackCards from "../../components/TrackTruckCards/TrackCards";
import "./TrackBuilder.scss";
import TruckInfo from "../../components/TruckInfo/TruckInfo";
import SearchField from "../../components/SearchComponent/SearchField";
import NavBar from "../../components/NavBar/NavBar";
class TrackBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      transporter: "VRL Logistics",
      details: "Rohan(91-9972259976)",
    };
  }
  render() {
    return (
      <Auxiliary>
        <div className="Content">
          <LeftSideMenu
            id={this.sate.id}
            transporter={this.state.transporter}
            details={this.state.details}
          />
          <span className="span">
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
