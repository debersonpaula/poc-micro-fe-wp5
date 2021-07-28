import React from "react";
import HeaderComponent from "library/components/HeaderComponent";
import { AppType } from "./interfaces";

const App: AppType = ({ modules }) => {
  return <HeaderComponent menu={modules} />;
};

export default App;
