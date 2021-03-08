import React from "react";
import "./TrackCards.scss";
import Auxiliary from "../../hoc/Auxiliary";

const trackCards = () => (
  <Auxiliary>
    <div style={{ display: "flex" }}>
      <div
        className="item bg-info1"
        style={{ height: "185px", marginTop: "23px", display: "inline" }}
      >
        <div className="firstcard">
          <div className="titletext "> TOTAL-TRIPS</div>
          <div className="cardtext">
            <div className="cardtextno">54</div>
            <div className="cardtextamt">100Cr</div>
          </div>
          <hr className="cardline"></hr>
          <span className="cardtext2">
            <div className="cardno">+9%</div>
            <div className="cardno1">-8.8%</div>
          </span>
        </div>
      </div>

      <div>
        <span className="trackedhrline">
          <div className="trackedtext">TRACKED</div>
          <hr className="hrtracked"></hr>
        </span>
        <div className="item bg-info2">
          <div style={{ display: "inline-block" }}>
            <div className="titletext ">ONTIME</div>
            <div className="cardtext1">
              <div className="cardtextno">54</div>
              <div className="cardtextamt">100Cr</div>
            </div>
            <hr className="cardline"></hr>
            <span className="cardtext2">
              <div className="cardno">+9%</div>
              <div className="cardno1">-8.8%</div>
            </span>
          </div>
        </div>
        <div className="item bg-info3">
          <div style={{ display: "inline-block" }}>
            <div className="titletext ">DELAYED</div>
            <div className="cardtext1">
              <div className="cardtextno">54</div>
              <div className="cardtextamt">100Cr</div>
            </div>
            <hr className="cardline"></hr>
            <span className="cardtext2">
              <div className="cardno">+9%</div>
              <div className="cardno1">-8.8%</div>
            </span>
          </div>
        </div>
        <div className="item bg-info4">
          <div style={{ display: "inline-block" }}>
            <div className="titletext ">DEVIATED</div>
            <div className="cardtext1">
              <div className="cardtextno">54</div>
              <div className="cardtextamt">100Cr</div>
            </div>
            <hr className="cardline"></hr>
            <span className="cardtext2">
              <div className="cardno">+9%</div>
              <div className="cardno1">-8.8%</div>
            </span>
          </div>
        </div>
        <div className="item bg-info5">
          <div style={{ display: "inline-block" }}>
            <div className="titletext ">MISSING</div>
            <div className="cardtext1">
              <div className="cardtextno">54</div>
              <div className="cardtextamt">100Cr</div>
            </div>
            <hr className="cardline"></hr>
            <span className="cardtext2">
              <div className="cardno">+9%</div>
              <div className="cardno1">-8.8%</div>
            </span>
          </div>
        </div>
      </div>
      <div style={{ display: "inline-block" }}>
        <span className="trackedhrline">
          <div className="trackedtext">UNTRACKED</div>
          <hr className="hruntracked"></hr>
        </span>
        <div className="item bg-info6">
          <div style={{ display: "inline-block" }}>
            <div className="titletext ">UN-TRACKED</div>
            <div className="cardtext1">
              <div className="cardtextno">54</div>
              <div className="cardtextamt">100Cr</div>
            </div>
            <hr className="cardline"></hr>
            <span className="cardtext2">
              <div className="cardno">+9%</div>
              <div className="cardno1">-8.8%</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </Auxiliary>
);
export default trackCards;
