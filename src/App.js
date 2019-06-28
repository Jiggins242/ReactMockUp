import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./css/App.css";
import Confirmed from "./Pages/Confirmed";
import Landing from "./Pages/Landing";
import "@emisgroup/ui-kit/build/dist/css/ui-kit.min.css";

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
