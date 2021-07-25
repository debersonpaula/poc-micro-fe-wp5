import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import MuiMenuItem from "@material-ui/core/MenuItem";

export default function HeaderMenuItemContent({
  label,
  link,
  onMouseOver,
  onClose,
}: {
  label: string;
  link: string;
  onMouseOver: MouseEventHandler<any>;
  onClose: () => void;
}) {
  const content = (
    <MuiMenuItem onClick={onClose} onMouseOver={onMouseOver}>
      {label}
    </MuiMenuItem>
  );

  if (link) {
    return (
      <Link to={link} style={{ color: "inherit", textDecoration: "none" }}>
        {content}
      </Link>
    );
  }
  return content;
}
