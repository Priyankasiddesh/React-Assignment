import React from "react";
import "./NavBar.scss";
import Auxiliary from "../../hoc/Auxiliary";

const navBar = () => (
  <div style={{ display: "flex" }}>
    <ul>
      <li>
        <a className="active" href="#home">
          Home
        </a>
      </li>
      <li>
        <a href="#news">News</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#news">News</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="navbar">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#news">News</a>
    </div>
  </div>
);
export default navBar;
