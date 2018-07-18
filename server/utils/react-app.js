import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../../client/App.js";
import renderer from "./renderer";

const reactApp = (req, res) => {
  const context = {};
  const appWithRouter = (
    <StaticRouter context={{}} location={req.url}>
      <App />
    </StaticRouter>
  );
  if (context.url) {
    return res.redirect(context.url);
  }
  const initialView = renderToString(appWithRouter);
  res
    .set("Content-Type", "text/html")
    .status(200)
    .end(renderer(initialView));
};

export default reactApp;
