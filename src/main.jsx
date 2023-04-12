import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/SingUp";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/global";
import theme from "./style/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
