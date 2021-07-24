import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import createTheme, { Theme } from "@material-ui/core/styles/createTheme";
import { MenuGroup, MenuItem } from "../helpers/createGroupMenu";
import MuiButton from "@material-ui/core/Button";
import MuiMenu from "@material-ui/core/Menu";
import MuiMenuItem from "@material-ui/core/MenuItem";

import HeaderMenuItemContent from "./HeaderMenuItemContent";

function HeaderMenu({ group }: { group: MenuGroup }) {
  const items = [];
  Object.keys(group).forEach((label, index) => {
    items.push(
      <HeaderMenuItem key={label + index} item={group[label]} label={label} />
    );
  });
  return <>{items}</>;
}

function HeaderMenuItem({ item, label }: { item: MenuItem; label: string }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MuiButton color="inherit" onClick={item.submenu && handleClick}>
        <HeaderMenuItemContent label={label} link={item.link} />
      </MuiButton>
    </div>
  );
}

export default HeaderMenu;
