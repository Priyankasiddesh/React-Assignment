import React from "react";
import "./NavBar.scss";

const navBar = () => (
  <div className="menubar">
    <ul>
      <li>
        <a className="active" href="#home">
          All<span className="numbers">(54)</span>
        </a>
      </li>
      <li>
        <a href="#news">
          FTL<span className="numbers">(26)</span>
        </a>
      </li>
      <li>
        <a href="#contact">
          LCL<span className="numbers">(16)</span>
        </a>
      </li>
      <li>
        <a href="#news">
          Courier<span className="numbers">(10)</span>
        </a>
      </li>
      <li>
        <a href="#contact">
          Container<span className="numbers">(03)</span>
        </a>
      </li>
    </ul>
    <div className="navbar">
      <a className="active" href="#home">
        Inbound<span className="numbers">(30)</span>
      </a>
      <a href="#news">
        OutBound<span className="numbers">(16)</span>
      </a>
    </div>
  </div>
);
export default navBar;
