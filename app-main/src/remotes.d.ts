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
