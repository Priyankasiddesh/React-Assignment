import React from "react";
import "./TruckInfo.scss";

const truckInfo = (props) => (
  <div className="TruckInfoContent">
    <div className="Truckitem">
      MissingTruck
      <div style={{ display: "flex" }}>
        <div>
          <div>Trip id:{props.id}</div>
          <div>Transporter:{props.transporter}</div>
          <div>Driver details:{props.details}</div>
        </div>

        <div className="verticalLine">
          <div>From:{props.from}</div>
          <div>To:{props.to}</div>
          <div>Last Known Details:{props.lastKnownDetails}</div>
        </div>
      </div>
    </div>
    <div className="Truckitem">
      Detention truck
      <div style={{ display: "flex" }}>
        <div>
          <div>Trip id:{props.id}</div>
          <div>Transporter:{props.transporter}</div>
          <div>Driver details:{props.details}</div>
        </div>

        <div className="verticalLine">
          <div>From:{props.from}</div>
          <div>To:{props.to}</div>
          <div>Last Known Details:{props.lastKnownDetails}</div>
        </div>
      </div>
    </div>
  </div>
);

export default truckInfo;
