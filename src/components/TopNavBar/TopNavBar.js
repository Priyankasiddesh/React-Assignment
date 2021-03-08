import React from "react";
import "./TopNavBar.scss";
import SearchBar from "material-ui-search-bar";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import SearchIcon from "material-ui-search-bar";
import Badge from "@material-ui/core/Badge";

const topNavBar = () => (
  <div className="topnav">
    <div className="logo">
      t <p>EG</p>
    </div>

    <select name="select transporter" className="select">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="fiat">Fiat</option>
    </select>

    <div className="search-container">
      <SearchBar
        style={{
          margin: "0",
          maxWidth: 800,
          boxShadow: "none",
          fontSize: "0.8rem",
        }}
        placeholder="Search by docketno,trip no,transporter,driver name"
      >
        <SearchIcon style={{ marginLeft: 0 }} />
      </SearchBar>
    </div>

    <div className="notification">
      {" "}
      <Badge color="secondary" variant="dot">
        <NotificationsNoneOutlinedIcon />
      </Badge>
    </div>
  </div>
);
export default topNavBar;
