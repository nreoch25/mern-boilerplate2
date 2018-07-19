import React from "react";
import { BrowserRouter } from "react-router-dom";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import store from "./store";
import App from "./App";

const mountApp = document.getElementById("root");

hydrate(
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  mountApp
);

// For hot reloading of react components
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default; // eslint-disable-line global-require
    hydrate(
      <AppContainer>
        <Provider store={store}>
          <BrowserRouter>
            <NextApp />
          </BrowserRouter>
        </Provider>
      </AppContainer>,
      mountApp
    );
  });
}
