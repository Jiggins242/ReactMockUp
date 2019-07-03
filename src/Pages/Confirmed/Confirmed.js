import React, { Component } from "react";
import Banner from "../../Components/Banner/banner";
import Footer from "../../Components/Footer/footer";

class Confirmed extends Component {
  render() {
    return (
      <div className="Confirmed">
        <Banner />
        <div className="ConfirmMainText-Body ">
          {/* There is no Green tick in ui-kit */}
          <p>
            Your email address has been <strong>successfully verified</strong>.
            <br />
            You can now safely close this page.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Confirmed;
