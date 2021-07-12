import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>App 1</h1>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
