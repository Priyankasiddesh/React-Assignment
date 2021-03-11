import Auxiliary from "../../hoc/Auxiliary";
import "./LeftSideBar.scss";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SpeedIcon from "@material-ui/icons/Speed";
import TrainIcon from "@material-ui/icons/Train";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import GroupIcon from "@material-ui/icons/Group";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import { Link } from "react-router-dom";

const LeftSideMenu = (props) => {
  return (
    <Auxiliary>
      <div className="SideBar">
        <Link to="/DashBoard">
          <div className="SubComponent">
            <div className={props.active ? "active" : null}>
              <SpeedIcon />
              <div>DashBoard</div>
            </div>
          </div>
        </Link>
        <Link to="/Trips">
          <div className="SubComponent">
            <div>
              <TrainIcon />
              <div>Trips</div>
            </div>
          </div>
        </Link>
        <Link to="/Tracking">
          <div className="SubComponent">
            <div>
              <MyLocationIcon />
              <div>Tracking</div>
            </div>
          </div>
        </Link>
        <Link to="/Transporters">
          <div className="SubComponent">
            <div>
              <GroupIcon />
              <div>Transporters</div>
            </div>
          </div>
        </Link>
        <Link to="/Analytics">
          <div className="SubComponent">
            <div>
              <AssessmentIcon />
              <div>Analytics</div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="SubComponent">
            <div style={{ marginTop: "130px" }}>
              <Brightness7Icon />
              <div>Settings</div>
            </div>
          </div>
        </Link>
      </div>
    </Auxiliary>
  );
};
export default LeftSideMenu;
