import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import MuiMenuItem from "@material-ui/core/MenuItem";

export default function HeaderMenuItemContent({
  label,
  link,
  onClick,
}: {
  label: string;
  link: string;
  onClick: MouseEventHandler<any>;
}) {
  const content = <MuiMenuItem onClick={onClick}>{label}</MuiMenuItem>;

  if (link) {
    return (
      <Link to={link} style={{ color: "inherit", textDecoration: "none" }}>
        {content}
      </Link>
    );
  }
  return content;
}
