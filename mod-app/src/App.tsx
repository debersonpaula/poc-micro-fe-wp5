import React, { lazy, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import AppComponent from "library/components/AppComponent";
import { AppType } from "./interfaces";

const RemoteModHeader = lazy(() => import("modHeader/App"));

const App: AppType = () => {
  return (
    <AppComponent>
      <HashRouter>
        <Suspense fallback="">
          <RemoteModHeader modules={[]} />
        </Suspense>
      </HashRouter>
    </AppComponent>
  );
};

export default App;
