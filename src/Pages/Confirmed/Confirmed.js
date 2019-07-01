import React, { Component } from "react";
import Banner from '../../Components/Banner/banner';
import { Button } from "@emisgroup/ui-kit-react";

class Confirmed extends Component {
  render() {
    return (
      <div className="Confirmed">
        <Banner />
        <div className="ConfirmMainText-Body">
          {/* <h1>Confirmed</h1> */}
          {/* There is no Green tick in ui-kit */}
          <p>Thank you for verifying your email address.</p>
          {/* <p>Have you signed up for Patient Access yet?</p> */}
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
