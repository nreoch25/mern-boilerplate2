import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import passport from "passport";
import store from "../../client/store";
import App from "../../client/App.js";
import renderer from "./renderer";

const reactApp = (req, res, next) => {
  passport.authenticate("cookie", (err, user, info) => {
    if (user) {
      console.log(
        "USER IS AUTHENTICATED - NEED TO LOAD USER DATE INTO INITIAL STATE"
      );
    } else {
      console.log("USER IS NOT AUTHENTICATED - PROCEED");
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
    const finalState = store.getState();
    const initialView = renderToString(appWithRouter);
    res
      .set("Content-Type", "text/html")
      .status(200)
      .end(renderer(initialView, finalState));
  })(req, res, next);
};

export default reactApp;
