import React, { Component } from "react";
import "../../css/landing.css";
import Banner from "../../Components/Banner/banner";
import Footer from "../../Components/Footer/footer";
import { Button, Dropdown } from "@emisgroup/ui-kit-react";

//Dropdown box imports
import daysInAMonth from "../../Components/DropdownBoxes/daysInAMonth";
import monthsOfTheYear from "../../Components/DropdownBoxes/monthsOfTheYear";
import year from "../../Components/DropdownBoxes/years";

class Landing extends Component {
  state = {
    success: false
  };

  render() {
    return (
      <div className="Landing">
        <Banner />
        <div className="LandingMainText-Body">
          <p className="Landing-Title">
            Thank you for registering your email address with{" "}
            <strong>EMISWebCR1 500002</strong>.<br />
            Confirm your details below to complete the verification process.
          </p>
          <p>
            <strong>Note:</strong> For security purposes this page will expire
            at __time__.
          </p>
          <p>UI-DatePicker- waiting on react implementation 12/07 hopefully</p>
          <div className="DateOfBirth-Text">
            <h4>Date of birth</h4>
            <div className="DateOfBirth-Dropdown">
              <div className="DateOfBirth-Dropdown-day">
                <Dropdown
                  dataSource={daysInAMonth}
                  disabled={false}
                  displayExpr="optionText"
                  mandatory={false}
                  name="dropdown"
                  optional={false}
                  valid={true}
                  errorText="Field is required"
                  valueExpr="optionValue"
                />
              </div>
              <div className="DateOfBirth-Dropdown-month">
                <Dropdown
                  dataSource={monthsOfTheYear}
                  disabled={false}
                  displayExpr="optionText"
                  mandatory={false}
                  name="dropdown"
                  optional={false}
                  valid={true}
                  errorText="Field is required"
                  valueExpr="optionValue"
                />
              </div>
              <div className="DateOfBirth-Dropdown-year">
                <Dropdown
                  dataSource={year}
                  disabled={false}
                  displayExpr="optionText"
                  mandatory={false}
                  name="dropdown"
                  optional={false}
                  valid={false} // if blank needs to be set to false, on submit click
                  errorText="Field is required"
                  valueExpr="optionValue"
                />
              </div>
            </div>
          </div>
          <div className="Warning-Box">
            <div className="Warning-Message">
              <p>Warning these details do not match our records</p>
            </div>
          </div>
          <div className="btn">
            <a href="Confirmed">
              <Button className="btn" type="button" color="primary">
                Confirm details
              </Button>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
