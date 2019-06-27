import React from "react";
import logo from "./Images/EMISGroupLogo_icon.png";
import "./css/App.css";
import { Button, TextInput, Dropdown } from "@emisgroup/ui-kit-react";
import "@emisgroup/ui-kit/build/dist/css/ui-kit.min.css";

function App() {
  // You can move this out at a later time
  // Just hear for mock up at the time being

  const dataSourceDay: any[] = [
    {
      optionText: "Day",
      optionValue: "1"
    }
  ];

  const dataSourceMonth: any[] = [
    {
      optionText: "Month",
      optionValue: "1"
    }
  ];

  const dataSourceYear: any[] = [
    {
      optionText: "Year",
      optionValue: "1"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Emis health registertration mockup</p>
      </header>
      <div className="App-Body">
        <h4 className="App-Title">
          Thankyou for registering your email address with Emis.
        </h4>
        <p>Confirm your detials below to complete the verification process.</p>
        <p>Note: For security purposes this page is only valid for 30 mins.</p>
        <TextInput
          labelText="Postcode"
          name="textinput"
          // isValid={false} errorText="Not the magic word"
        />
        {/* There is currently no date picker for react as a package yet!! */}
        <div className="DateOfBirth">
          <Dropdown
            dataSource={dataSourceDay}
            disabled={false}
            displayExpr="optionText"
            labelText="Date"
            mandatory={false}
            name="dropdown"
            optional={false}
            valid={true}
            valueExpr="optionValue"
          />
          <Dropdown
            dataSource={dataSourceMonth}
            disabled={false}
            displayExpr="optionText"
            labelText="of"
            mandatory={false}
            name="dropdown"
            optional={false}
            valid={true}
            valueExpr="optionValue"
          />
          <Dropdown
            dataSource={dataSourceYear}
            disabled={false}
            displayExpr="optionText"
            labelText="birth"
            mandatory={false}
            name="dropdown"
            optional={false}
            valid={true}
            valueExpr="optionValue"
          />
        </div>
        <Button className="ConfirmDetails" type="button">
          Confirm details
        </Button>
      </div>
    </div>
  );
}

export default App;
