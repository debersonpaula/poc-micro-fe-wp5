import React, { lazy, Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import AppComponent from "library/components/AppComponent";
import FooterComponent from "library/components/FooterComponent";
import { AppType } from "./interfaces";

const RemoteModHeader = lazy(() => import("modHeader/App"));

const App: AppType = ({ modules }) => {
  return (
    <AppComponent>
      <HashRouter>
        <Suspense fallback="">
          <RemoteModHeader modules={modules} />
        </Suspense>
        <Suspense fallback="loading component">
          <Switch>
            {modules.map((mod, index) => (
              <Route
                key={index}
                path={mod.path}
                exact={mod.exact}
                component={mod.component}
              />
            ))}
          </Switch>
        </Suspense>
      </HashRouter>
      <FooterComponent />
    </AppComponent>
  );
};

export default App;
