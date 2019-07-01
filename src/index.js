import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './css/index.css'// Styling carries over - is font family
import './css/confirmed.css';
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter >,
  document.getElementById("root")
);

serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// in case we need css again
// import "@emisgroup/ui-kit/build/dist/css/ui-kit.min.css";
