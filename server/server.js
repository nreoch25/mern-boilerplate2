import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import passport from "passport";
// Dev Server
import devServer from "./utils/dev-server";
// React App
import reactApp from "./utils/react-app";
mongoose.Promise = global.Promise;
// Api
import users from "./routes/api/users";
import config from "./config/keys";
// Initialize app
const CURRENT_WORKING_DIR = process.cwd();
const app = express();
// Initialize webpack dev middleware
devServer(app);
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cookie parser middleware
app.use(cookieParser());
// Connect to MongoDB
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.use("/api/users", users);

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

// React Application
app.get("*", reactApp);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
