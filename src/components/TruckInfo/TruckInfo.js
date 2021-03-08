import React from "react";
import "./TruckInfo.scss";

const truckInfo = (props) => (
  <div className="TruckInfoContent">
    <div className="Truckitem">
      <div className="title" id="title">
        Missing Truck
      </div>
      <div className="value">Value:5Cr</div>
      <div className="truckinfo">
        <div style={{ display: "flex" }}>
          <div className="a">
            <div>
              <b>Trip id:</b>
              {props.id}
            </div>
            <div>
              <b>Transporter:</b>
              {props.transporter}
            </div>

            <div className="driverdetails">
              <b>Driver details:</b>
              <div>{props.details}</div>
            </div>
          </div>
          <div className="a">
            <div className="verticalLine">
              <div className="trucktext">
                <b>From:</b>
                {props.from}
              </div>
              <div className="trucktext">
                <b>To:</b>
                {props.to}
              </div>
            </div>
            <div style={{ marginTop: "15px" }}>
              <div className="verticalLine">
                <div className="trucktext">
                  <b>Last Known Details:</b>
                  <div>{props.lastKnownDetails}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Truckitem">
      <div className="title">Detention Truck</div>
      <div className="value">Value:5Cr</div>
      <div className="truckinfo">
        <div style={{ display: "flex" }}>
          <div className="a">
            <div>
              <b>Trip id:</b>
              {props.id}
            </div>
            <div>
              <b>Transporter:</b>
              {props.transporter}
            </div>

            <div className="driverdetails">
              <b>Driver details:</b>
              <div>{props.details}</div>
            </div>
          </div>
          <div className="a">
            <div className="verticalLine">
              <div className="trucktext">
                <b>From:</b>
                {props.from}
              </div>
              <div className="trucktext">
                <b>To:</b>
                {props.to}
              </div>
            </div>
            <div style={{ marginTop: "15px" }}>
              <div className="verticalLine">
                <div className="trucktext">
                  <b>Last Known Details:</b>
                  <div> {props.lastKnownDetails}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default truckInfo;
