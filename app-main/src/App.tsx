import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import RemoteModHeader from "modHeader/App";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#311b96",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RemoteModHeader />
      <h1>App 1</h1>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
