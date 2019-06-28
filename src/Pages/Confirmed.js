import React, { Component } from "react";
import logo from "../Images/EMISGroupLogo_icon.png";
import { Button } from "@emisgroup/ui-kit-react";
import "@emisgroup/ui-kit/build/dist/css/ui-kit.min.css";

class Confirmed extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Emis health registertration mockup</h2>
        </header>
        <div className="App-Body">
          {/* <h1>Confirmed</h1> */}
          {/* There is no Green tick in ui-kit */}
          <h3>Thank you for verifying your email address.</h3>
          <p>Have you signed up for Patient Access yet?</p>
          <a href="">
            <Button className="btn" type="button" color="primary">
              Register for Patient Access
            </Button>
          </a>
        </div>
      </div>
    );
  }
}

export default Confirmed;
