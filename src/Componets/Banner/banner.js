import React, { Component } from "react";
import logo from "../../Images/EMISGroupLogo_icon.png";
import "./banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <header>
          <img src={logo} className="Banner-logo" alt="logo" />
          <p className="Banner-Text">emis health mockup</p>
        </header>
      </div>
    );
  }
}

export default Banner;
