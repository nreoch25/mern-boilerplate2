import React from "react";
import { BrowserRouter } from "react-router-dom";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
