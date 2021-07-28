import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <App
    modules={[
      { path: "/", menuPath: "Home", exact: true, component: HomeComponent },
      {
        path: "/another",
        menuPath: "Another",
        exact: true,
        component: AnotherComponent,
      },
    ]}
  />,
  document.getElementById("root")
);

function HomeComponent() {
  return <div style={{ padding: 32, fontSize: 32 }}>Home</div>;
}

function AnotherComponent() {
  return <div style={{ padding: 32, fontSize: 32 }}>Another</div>;
}
