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
// import { Provider } from "react-redux";
// import Store from "../../redux/store";

class Layout extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   id: 1,
    //   transporter: "VRL Logistics",
    //   details: "Rohan (+91-9972259976)",
    //   from: "bangalore",
    //   to: "mumbai",
    //   lastKnownDetails: "Kolahpur (26-Oct-2017,11:12 PM)",
    //   isSelected: false,
    // };
    this.toggle = this.toggle.bind(this);
  }
  toggle(e) {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  }
  render() {
    return (
      //<Provider store={Store}>
      <Auxiliary>
        <div className="Content">
          <span className="span">
            <NavBar />
            <SearchField />
            <TrackCards />
            <TruckInfo />
          </span>
        </div>
      </Auxiliary>
      // </Provider>
    );
  }
}

export default Layout;
