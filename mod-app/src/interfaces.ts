import React from "react";

export interface AppProps {
  modules: {
    path: string;
    exact: boolean;
    component: React.FunctionComponent;
    menuPath: string;
  }[];
}

export type AppType = React.FC<AppProps>;
