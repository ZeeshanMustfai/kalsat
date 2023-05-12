import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { theme } from "../src/theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
        <Toaster />
      </Router>{" "}
    </ThemeProvider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
