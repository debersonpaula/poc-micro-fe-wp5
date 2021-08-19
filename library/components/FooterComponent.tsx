import React, { useMemo } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

interface IProps {}

const FooterComponent: React.FC<IProps> = () => {
  return (
    <AppBar position="fixed" color="primary" style={{ top: "auto", bottom: 0 }}>
      <Toolbar>This is the footer of application</Toolbar>
    </AppBar>
  );
};

export default FooterComponent;
