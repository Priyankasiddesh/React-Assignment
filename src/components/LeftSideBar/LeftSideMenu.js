import Auxiliary from "../../hoc/Auxiliary";
import "./LeftSideBar.scss";

import AssessmentIcon from "@material-ui/icons/Assessment";
import SpeedIcon from "@material-ui/icons/Speed";
import TrainIcon from "@material-ui/icons/Train";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import GroupIcon from "@material-ui/icons/Group";

const leftSideMenu = () => (
  <Auxiliary>
    <div className="SideBar">
      <div className="SubComponent">
        <SpeedIcon />
        DashBoard
      </div>
      <div className="SubComponent">
        <TrainIcon />
        Trips
      </div>
      <div className="SubComponent">
        <MyLocationIcon />
        Tracking
      </div>
      <div className="SubComponent">
        <GroupIcon />
        Transporters
      </div>
      <div className="SubComponent">
        <AssessmentIcon />
        Analytics
      </div>
    </div>
  </Auxiliary>
);
export default leftSideMenu;
