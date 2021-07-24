export default function createGroupMenu(menu: Menu) {
  const resultgroup: MenuGroup = {};

  menu.forEach((current) => {
    const menuPaths = current.menuPath.split("/");
    const link = current.path;
    insertGroupMenu(resultgroup, menuPaths, link);
  });

  return resultgroup;
}

function insertGroupMenu(group: MenuGroup, paths: string[], link: string) {
  if (paths.length) {
    // find item in current group
    let item = group[paths[0]];
    // if item does not exists, create one
    // add include on group
    if (!item) {
      item = {
        link: null,
        submenu: null,
      };
      group[paths[0]] = item;
    }
    // check if the current item is the last
    if (paths.length <= 1) {
      item.link = link;
    }
    // if not, go to the next level
    else {
      if (!item.submenu) {
        item.submenu = {};
      }
      insertGroupMenu(item.submenu, paths.slice(1), link);
    }
  }
}

export type MenuGroup = {
  [label: string]: MenuItem;
};

export type MenuItem = {
  link: string;
  submenu?: MenuGroup;
};

type Menu = {
  path: string;
  menuPath: string;
}[];
