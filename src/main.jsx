import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/global";
import theme from "./style/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
