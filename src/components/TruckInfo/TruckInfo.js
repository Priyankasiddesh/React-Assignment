import React from "react";
import { connect } from "react-redux";
import { fetchDetails } from "../../redux/TransportDetails/transportAction";
import "./TruckInfo.scss";
import WarningIcon from "@material-ui/icons/Warning";
import TrainOutlinedIcon from "@material-ui/icons/TrainOutlined";
import { useEffect } from "react";

console.log("use effect", fetchDetails());
const TruckInfo = ({ userdata, fetchDetails }) => {
  console.log("helooooooooooooo", typeof userdata);
  useEffect(() => {
    //console.log("use effect", fetchDetails());
    fetchDetails();
  }, [fetchDetails]);
  console.log("helooooooooooooo", userdata);

  return (
    // Object.isObject(userdata) &&
    // userdata.data.map((data) => {
    Object.keys(userdata).map((keyName, i) => {
      console.log("inside map", userdata);

      return (
        <div className="TruckInfoContent" key={i}>
          <div className="Truckitem ">
            <div className="title " id="title">
              <WarningIcon />
              Missing Truck
            </div>
            <div className="value">
              Value:
              <div className="valuenum">5Cr</div>
            </div>
            <div className="truckinfo">
              <div style={{ display: "flex" }}>
                <div className="a">
                  <div>
                    <b>Trip id:</b>
                    {keyName.id}
                  </div>
                  <div key={keyName.transporter}>
                    <b>Transporter:</b>
                    {keyName.transporter}
                  </div>

                  <div className="driverdetails">
                    <b>Driver details:</b>
                    <div>{keyName.details}</div>
                  </div>
                </div>
                <div className="a">
                  <div className="verticalLine">
                    <div className="trucktext">
                      <b>From:</b>
                      {keyName.from}
                    </div>
                    <div className="trucktext">
                      <b>To:</b>
                      {keyName.to}
                    </div>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <div className="verticalLine">
                      <div className="trucktext">
                        <b>Last Known Details:</b>
                        <div>{keyName.lastKnownDetails}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Truckitem">
            <div className="title">
              <TrainOutlinedIcon />
              Detention Truck
            </div>
            <div className="value">
              Value:<div className="valuenum">5Cr</div>
            </div>
            <div className="truckinfo">
              <div style={{ display: "flex" }}>
                <div className="a">
                  <div>
                    <b>Trip id:</b>
                    {keyName.id}
                  </div>
                  <div>
                    <b>Transporter:</b>
                    {keyName.transporter}
                  </div>

                  <div className="driverdetails">
                    <b>Driver details:</b>
                    <div>{keyName.details}</div>
                  </div>
                </div>
                <div className="a">
                  <div className="verticalLine">
                    <div className="trucktext">
                      <b>From:</b>
                      {keyName.from}
                    </div>
                    <div className="trucktext">
                      <b>To:</b>
                      {keyName.to}
                    </div>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <div className="verticalLine">
                      <div className="trucktext">
                        <b>Last Known Details:</b>
                        <div> {keyName.lastKnownDetails}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

const mapStateToProps = (state) => {
  console.log("this is state", state);
  return {
    userdata: state.transportReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("maptodispatch", dispatch(fetchDetails()));
  return {
    fetchDetails: () => dispatch(fetchDetails()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TruckInfo);
