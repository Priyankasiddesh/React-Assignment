import React from "react";
import "./NavBar.scss";
import Auxiliary from "../../hoc/Auxiliary";

const navBar = () => (
  <div style={{ display: "flex" }}>
    <ul>
      <li>
        <a className="active" href="#home">
          All
        </a>
      </li>
      <li>
        <a href="#news">FTL</a>
      </li>
      <li>
        <a href="#contact">LCL</a>
      </li>
      <li>
        <a href="#news">Courier</a>
      </li>
      <li>
        <a href="#contact">Container</a>
      </li>
    </ul>
    <div className="navbar">
      <a className="active" href="#home">
        Inbound
      </a>
      <a href="#news">OutBound</a>
    </div>
  </div>
);
export default navBar;
