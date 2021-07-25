import React from "react";
import { MenuGroup, MenuItem } from "../helpers/createGroupMenu";
import HeaderMenuItemContent from "./HeaderMenuItemContent";
import Menu from "@material-ui/core/Menu";
import MuiMenuItem from "@material-ui/core/MenuItem";

function HeaderMenu({
  group,
  onClose,
}: {
  group: MenuGroup;
  onClose?: () => void;
}) {
  const items = [];
  Object.keys(group).forEach((label, index) => {
    items.push(
      <HeaderMenuItem key={label + index} item={group[label]} label={label} />
    );
  });
  return <>{items}</>;
}

function HeaderMenuItem({
  item,
  label,
  onClose,
}: {
  item: MenuItem;
  label: string;
  onClose?: () => void;
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    onClose && onClose();
  };

  return (
    <div>
      <HeaderMenuItemContent
        label={label}
        link={item.link}
        onMouseOver={item.submenu && handleClick}
        onClose={handleClose}
      />
      {item.submenu && (
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <HeaderMenu group={item.submenu} onClose={handleClose} />
        </Menu>
      )}
    </div>
  );
}

export default HeaderMenu;
