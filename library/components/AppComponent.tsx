import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import createTheme, { Theme } from "@material-ui/core/styles/createTheme";

const defaultTheme = createTheme({});

const AppComponent: React.FC<Props> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme || defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

interface Props {
  theme?: Theme;
}

export default AppComponent;
