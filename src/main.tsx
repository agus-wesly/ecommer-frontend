import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
import { CssBaseline } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
