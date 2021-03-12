import Auxiliary from "../../hoc/Auxiliary";
import "./LeftSideBar.scss";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SpeedIcon from "@material-ui/icons/Speed";
import TrainIcon from "@material-ui/icons/Train";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import GroupIcon from "@material-ui/icons/Group";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { NavLink } from "react-router-dom";

const LeftSideMenu = (props) => {
  return (
    <Auxiliary>
      <div className="SideBar">
        <div className="SubComponent">
          <NavLink to="/dashBoard" activeClassName="active">
            <div>
              <SpeedIcon />
              <div>DashBoard</div>
            </div>
          </NavLink>
        </div>
        <div className="SubComponent">
          <NavLink to="/trips" activeClassName="active">
            <div>
              <TrainIcon />
              <div>Trips</div>
            </div>
          </NavLink>
        </div>
        <div className="SubComponent">
          <NavLink to="/tracking" activeClassName="active">
            <div>
              <MyLocationIcon />
              <div>Tracking</div>
            </div>
          </NavLink>
        </div>
        <div className="SubComponent">
          <NavLink to="/transporters" activeClassName="active">
            <div>
              <GroupIcon />
              <div>Transporters</div>
            </div>
          </NavLink>
        </div>
        <div className="SubComponent">
          <NavLink to="/analytics" activeClassName="active">
            <div>
              <AssessmentIcon />
              <div>Analytics</div>
            </div>
          </NavLink>
        </div>
        <div className="SubComponent">
          <NavLink to="/settings" activeClassName="active">
            <div style={{ marginTop: "130px" }}>
              <Brightness7Icon />
              <div>Settings</div>
            </div>
          </NavLink>
        </div>
      </div>
    </Auxiliary>
  );
};
export default LeftSideMenu;
