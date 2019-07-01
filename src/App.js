import React, { Component } from "react";
import { Route } from "react-router-dom";
import Confirmed from "./Pages/Confirmed/Confirmed";
import Landing from "./Pages/Landing/Landing";

export class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/confirmed" component={Confirmed} />
      </div>
    );
  }
}

export default App;
