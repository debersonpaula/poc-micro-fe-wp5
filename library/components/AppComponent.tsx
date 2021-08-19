import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createTheme, { Theme } from "@material-ui/core/styles/createTheme";

const defaultTheme = createTheme({
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
