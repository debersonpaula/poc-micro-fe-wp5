/// <reference types="react" />

declare module "modApp/App" {
  const App: React.ComponentType<IAppProps>;

  interface IAppProps {
    modules: {
      path: string;
      exact: boolean;
      component: React.FunctionComponent;
      menuPath: string;
    }[];
  }

  export default App;
}

declare module "modHome/App" {
  const App: React.ComponentType;

  export default App;
}

declare module "modAbout/App" {
  const App: React.ComponentType;

  export default App;
}
