import React, { lazy, Suspense } from "react";
import RemoteModApp from "modApp/App";

const RemoteModHome = lazy(() => import("modHome/App"));
const RemoteModAbout = lazy(() => import("modAbout/App"));

const App = () => {
  return (
    <RemoteModApp
      modules={[
        {
          menuPath: "Home",
          path: "/",
          exact: true,
          component: RemoteModHome,
        },
        {
          menuPath: "About",
          path: "/about",
          exact: true,
          component: RemoteModAbout,
        },
      ]}
    />
  );
};

export default App;
