import Auxiliary from "../../hoc/Auxiliary";
import "./LeftSideBar.scss";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SpeedIcon from "@material-ui/icons/Speed";
import TrainIcon from "@material-ui/icons/Train";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import GroupIcon from "@material-ui/icons/Group";
import history from "../../history";

const LeftSideMenu = (props) => {
  return (
    <Auxiliary>
      <div className="SideBar">
        <div className="SubComponent">
          <SpeedIcon />
          <div onClick={() => history.push("/DashBoard")}>DashBoard</div>
        </div>
        <div className="SubComponent">
          <TrainIcon />
          <div onClick={() => history.push("/Trips")}>Trips</div>
        </div>
        <div className="SubComponent">
          <MyLocationIcon />
          <div onClick={() => history.push("/Tracking")}>Tracking</div>
        </div>
        <div className="SubComponent">
          <GroupIcon />
          <div onClick={() => history.push("/Transporters")}>Transporters</div>
        </div>
        <div className="SubComponent">
          <AssessmentIcon />
          <div onClick={() => history.push("/Analytics")}>Analytics</div>
        </div>
      </div>
    </Auxiliary>
  );
};
export default LeftSideMenu;
