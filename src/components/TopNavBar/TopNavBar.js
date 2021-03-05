import React from "react";
import "./TopNavBar.scss";

const topNavBar = () => (
  <div className="topnav">
    <a className="active" href="#home">
      Home
    </a>

    <select name="select transporter" className="select">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="fiat">Fiat</option>
    </select>

    <div className="search-container">
      <input type="text" placeholder="Search.." name="search" />
    </div>
  </div>
);
export default topNavBar;
