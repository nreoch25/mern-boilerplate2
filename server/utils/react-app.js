import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import passport from "passport";
import configureStore from "../../client/store";
import App from "../../client/App.js";
import renderer from "./renderer";

const reactApp = (req, res, next) => {
  let store;
  passport.authenticate("cookie", (err, user, info) => {
    if (user) {
      const { name, email, avatar } = user;
      store = configureStore({
        auth: { isAuthenticated: true, user: { name, email, avatar } },
        errors: {}
      });
    } else {
      store = configureStore({});
    }
    const context = {};
    const appWithRouter = (
      <Provider store={store}>
        <StaticRouter context={{}} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );
    if (context.url) {
      return res.redirect(context.url);
    }

    const initialView = renderToString(appWithRouter);
    const finalState = store.getState();
    res
      .set("Content-Type", "text/html")
      .status(200)
      .end(renderer(initialView, finalState));
  })(req, res, next);
};

export default reactApp;
