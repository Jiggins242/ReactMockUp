import React, { Component } from "react";
import logo from "../Images/EMISGroupLogo_icon.png";
import "../css/App.css";
import { Button, TextInput, Dropdown } from "@emisgroup/ui-kit-react";
import "@emisgroup/ui-kit/build/dist/css/ui-kit.min.css";

import daysInAMonth from "../Componets/DropdownBoxes/daysInAMonth";
import monthsOfTheYear from "../Componets/DropdownBoxes/monthsOfTheYear";
import year from "../Componets/DropdownBoxes/years";

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>emis health registertration mockup</h2>
        </header>
        <div className="App-Body">
          <h2 className="App-Title">
            Thank you for registering your email address with Emis.
          </h2>
          <p>
            Confirm your detials below to complete the verification process.
          </p>
          <p>
            Note: For security purposes this page is only valid for 30 mins.
          </p>
          {/* <TextInput
            labelText="Postcode"
            name="textinput"
             isValid={false} errorText="Not the magic word"
          /> */}
          {/* There is currently no date picker for react as a package yet!! */}
          <div className="DateOfBirth-Text">
            <h4>Date of birth</h4>
            <div className="DateOfBirth-Dropdown">
              <Dropdown
                dataSource={daysInAMonth}
                disabled={false}
                displayExpr="optionText"
                // labelText=""
                mandatory={false}
                name="dropdown"
                optional={false}
                valid={true}
                valueExpr="optionValue"
              />
              <Dropdown
                dataSource={monthsOfTheYear}
                disabled={false}
                displayExpr="optionText"
                // labelText="of"
                mandatory={false}
                name="dropdown"
                optional={false}
                valid={true}
                valueExpr="optionValue"
              />
              <Dropdown
                dataSource={year}
                disabled={false}
                displayExpr="optionText"
                // labelText="birth"
                mandatory={false}
                name="dropdown"
                optional={false}
                valid={true}
                valueExpr="optionValue"
              />
            </div>
          </div>
          <a href="Confirmed">
            <Button className="btn" type="button" color="primary">
              Confirm details
            </Button>
          </a>
        </div>
      </div>
    );
  }
}

export default Landing;
