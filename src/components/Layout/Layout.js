import Auxiliary from "../../hoc/Auxiliary";
import "./Layout.scss";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import LeftSideMenu from "../../components/LeftSideBar/LeftSideMenu";
import TrackCards from "../../components/TrackTruckCards/TrackCards";
import "./Layout.scss";
import TruckInfo from "../../components/TruckInfo/TruckInfo";
import SearchField from "../../components/SearchComponent/SearchField";
import NavBar from "../../components/NavBar/NavBar";
import { Component } from "react";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      transporter: "VRL Logistics",
      details: "Rohan(91-9972259976)",
      from: "bangalore",
      to: "mumbai",
      lastKnownDetails: "Kolahpur",
    };
  }

  render() {
    return (
      <Auxiliary>
        <TopNavBar />
        <div className="Content">
          <LeftSideMenu />

          <span className="span">
            <NavBar />
            <SearchField />
            <TrackCards />
            <TruckInfo
              id={this.state.id}
              transporter={this.state.transporter}
              details={this.state.details}
              from={this.state.from}
              to={this.state.to}
              lastKnownDetails={this.state.lastKnownDetails}
            />
          </span>
        </div>
      </Auxiliary>
    );
  }
}

export default Layout;
