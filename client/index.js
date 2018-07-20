import React from "react";
import { BrowserRouter } from "react-router-dom";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import { AppContainer } from "react-hot-loader";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import App from "./App";
import "./assets/css/app.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/login";
  }
}

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
