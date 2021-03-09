import Auxiliary from "../../hoc/Auxiliary";
import "./LeftSideBar.scss";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SpeedIcon from "@material-ui/icons/Speed";
import TrainIcon from "@material-ui/icons/Train";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import GroupIcon from "@material-ui/icons/Group";

import { Link } from "react-router-dom";

const LeftSideMenu = (props) => {
  return (
    <Auxiliary>
      <div className="SideBar">
        <Link to="/DashBoard">
          <div className="SubComponent" id="active">
            <SpeedIcon />
            <div>DashBoard</div>
          </div>
        </Link>
        <Link to="/Trips">
          <div className="SubComponent">
            <TrainIcon />
            <div>Trips</div>
          </div>
        </Link>
        <Link to="/Tracking">
          <div className="SubComponent">
            <MyLocationIcon />
            <div>Tracking</div>
          </div>
        </Link>
        <Link to="/Transporters">
          <div className="SubComponent">
            <GroupIcon />
            <div>Transporters</div>
          </div>
        </Link>
        <Link to="/Analytics">
          <div className="SubComponent">
            <AssessmentIcon />
            <div>Analytics</div>
          </div>
        </Link>
      </div>
    </Auxiliary>
  );
};
export default LeftSideMenu;
