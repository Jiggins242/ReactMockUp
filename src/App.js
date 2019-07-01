import React, { Component } from "react";
import { Route } from "react-router-dom";
import Confirmed from "./Pages/Confirmed/Confirmed";
import Landing from "./Pages/Landing/Landing";

import Test from './Pages/test'

export class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/confirmed" component={Confirmed} />
        <Route exact path="/test" component={Test} />
      </div>
    );
  }
}

export default App;
