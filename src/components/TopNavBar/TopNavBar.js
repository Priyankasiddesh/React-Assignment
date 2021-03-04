import React from "react";
import "./TopNavBar.scss";

const topNavBar = () => (
  <div class="topnav">
    <a class="active" href="#home">
      Home
    </a>
    <form>
      <select name="select transporter" className="Search">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
      </select>
    </form>
    <div class="search-container">
      <input type="text" placeholder="Search.." name="search" />
    </div>
  </div>
);
export default topNavBar;
