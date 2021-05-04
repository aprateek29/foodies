import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { CartProvider } from "./context/GlobalContext";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <CartProvider>
    <CssBaseline />
    <App />
  </CartProvider>,

  document.querySelector("#root")
);
