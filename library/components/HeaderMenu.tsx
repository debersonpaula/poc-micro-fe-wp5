import React, { forwardRef } from "react";
import { MenuGroup, MenuItem } from "../helpers/createGroupMenu";
import HeaderMenuItemContent from "./HeaderMenuItemContent";
import Menu from "@material-ui/core/Menu";
import MuiMenuItem from "@material-ui/core/MenuItem";

const HeaderMenu = forwardRef<HTMLDivElement, HeaderMenuProps>(
  ({ group, onClose }, ref) => {
    const items = [];
    Object.keys(group).forEach((label, index) => {
      items.push(
        <HeaderMenuItem key={label + index} item={group[label]} label={label} />
      );
    });
    return (
      <div ref={ref} style={{ display: "flex" }}>
        {items}
      </div>
    );
  }
);

interface HeaderMenuProps {
  group: MenuGroup;
  onClose?: () => void;
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
    // onClose && onClose();
  };

  return (
    <div>
      <HeaderMenuItemContent
        label={label}
        link={item.link}
        onClick={item.submenu && handleClick}
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
