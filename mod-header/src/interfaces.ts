import React from "react";

export interface IModule {
  path: string;
  menuPath: string;
}

export interface IAppProps {
  modules: IModule[];
}

export type AppType = React.FC<IAppProps>;
