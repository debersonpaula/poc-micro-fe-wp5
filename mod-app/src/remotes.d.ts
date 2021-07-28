/// <reference types="react" />

declare module "modHeader/App" {
  const App: React.ComponentType<IAppProps>;

  interface IModule {
    path: string;
    menuPath: string;
  }

  interface IAppProps {
    modules: IModule[];
  }

  export default App;
}
