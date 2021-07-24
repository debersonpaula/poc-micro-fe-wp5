import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function HeaderMenuItemContent({
  label,
  link,
}: {
  label: string;
  link: string;
}) {
  const content = <Typography variant="h6">{label}</Typography>;
  if (link) {
    return <Link to={link}>{content}</Link>;
  }
  return content;
}
