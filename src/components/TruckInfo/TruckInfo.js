import React from "react";
import { connect } from "react-redux";
import { fetchDetails } from "../../redux/TransportDetails/transportAction";
import "./TruckInfo.scss";
import WarningIcon from "@material-ui/icons/Warning";
import TrainOutlinedIcon from "@material-ui/icons/TrainOutlined";
import { useEffect } from "react";

console.log("use effect", fetchDetails());
const TruckInfo = ({ data, fetchDetails }) => {
  useEffect(() => {
    //console.log("use effect", fetchDetails());
    fetchDetails();
  }, [fetchDetails]);

  return (
    data &&
    data.data &&
    data.data.map((data) => {
      return (
        <div className="TruckInfoContent">
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
                    {data.id}
                  </div>
                  <div>
                    <b>Transporter:</b>
                    {data.transporter}
                  </div>

                  <div className="driverdetails">
                    <b>Driver details:</b>
                    <div>{data.details}</div>
                  </div>
                </div>
                <div className="a">
                  <div className="verticalLine">
                    <div className="trucktext">
                      <b>From:</b>
                      {data.from}
                    </div>
                    <div className="trucktext">
                      <b>To:</b>
                      {data.to}
                    </div>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <div className="verticalLine">
                      <div className="trucktext">
                        <b>Last Known Details:</b>
                        <div>{data.lastKnownDetails}</div>
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
                    {data.id}
                  </div>
                  <div>
                    <b>Transporter:</b>
                    {data.transporter}
                  </div>

                  <div className="driverdetails">
                    <b>Driver details:</b>
                    <div>{data.details}</div>
                  </div>
                </div>
                <div className="a">
                  <div className="verticalLine">
                    <div className="trucktext">
                      <b>From:</b>
                      {data.from}
                    </div>
                    <div className="trucktext">
                      <b>To:</b>
                      {data.to}
                    </div>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <div className="verticalLine">
                      <div className="trucktext">
                        <b>Last Known Details:</b>
                        <div> {data.lastKnownDetails}</div>
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
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("maptodispatch", dispatch(fetchDetails()));
  return {
    fetchDetails: () => dispatch(fetchDetails()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TruckInfo);
