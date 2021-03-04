import React from "react";
import "./TrackCards.scss";
import Auxiliary from "../../hoc/Auxiliary";
import TruckInfo from "../TruckInfo/TruckInfo";
const trackCards = () => (
  <Auxiliary>
    <div className="item bg-info1">One</div>
    <div className="item bg-info2"> Two</div>
    <div className="item bg-info3">Three</div>
    <div className="item bg-info4">Four</div>
    <div className="item bg-info5">Five</div>
    <div className="item bg-info6">Six</div>
  </Auxiliary>
);
export default trackCards;
