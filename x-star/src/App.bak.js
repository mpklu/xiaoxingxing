import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";

const customTheme = createMuiTheme({
  typography: {
    fontWeightRegular: 350,
    fontWeightMedium: 400,
    overline: {
      color: "#666666"
    }
  },
  palette: {
    primary: {
      main: "#29aae1"
    },
    secondary: {
      main: "#2d3293"
    },
    error: {
      main: "#d50000"
    },
    buttonGradient: "linear-gradient(45deg, #29aae1, #3A5EA4) !important;",
    gray: {
      main: "#d6d6d6"
    }
  }
});

const styles = theme => ({
  appFrame: {
   
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    textAlign: "center",
    alignItems: "center"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flex: "1 1 100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.default,
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "calc(100% - 240px)"
    }
  }
});
const App = (props) => {
  let { classes } = props;
  return (
    <MuiThemeProvider theme={customTheme}>
      <div className={classes.appFrame}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
