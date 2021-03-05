import React from "react";
import "./TruckInfo.scss";

const truckInfo = (props) => (
  <div className="TruckInfoContent">
    <div className="Truckitem">
      MissingTruck
      <div>Trip id:{this.props.id}</div>
      <div>Transporter:{this.props.transporter}</div>
      <div>Driver details:{this.props.details}</div>
    </div>
    <div className="Truckitem">
      Detention truck
      <div>Trip id:{this.props.id}</div>
      <div>Transporter:{this.props.transporter}</div>
      <div>Driver details:{this.props.details}</div>
    </div>
  </div>
);

export default truckInfo;
