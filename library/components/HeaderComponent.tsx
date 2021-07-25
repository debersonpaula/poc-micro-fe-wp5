import React, { useMemo } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import createGroupMenu from "library/helpers/createGroupMenu";
import HeaderMenu from "./HeaderMenu";

interface IMenuItem {
  path: string;
  menuPath: string;
}

interface IProps {
  menu: IMenuItem[];
}

const HeaderComponent: React.FC<IProps> = ({ menu }) => {
  const groupMenu = useMemo(() => createGroupMenu(menu), [menu]);

  return (
    <AppBar position="static">
      <Toolbar>
        <HeaderMenu group={groupMenu} />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
