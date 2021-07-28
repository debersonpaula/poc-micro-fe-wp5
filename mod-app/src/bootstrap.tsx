import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "library/components/AppComponent";
import App from "./App";

ReactDOM.render(
  <AppComponent>
    <App modules={[]} />
  </AppComponent>,
  document.getElementById("root")
);
