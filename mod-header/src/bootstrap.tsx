import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "library/components/AppComponent";
import App from "./App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <AppComponent>
    <HashRouter>
      <App
        modules={[
          { path: "/", menuPath: "Home" },
          { path: "/sub/link1", menuPath: "Sub/Link 1" },
          { path: "/sub/link2", menuPath: "Sub/Link 2" },
        ]}
      />
    </HashRouter>
  </AppComponent>,
  document.getElementById("root")
);
