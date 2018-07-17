import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";
mongoose.Promise = global.Promise;
// Api
import users from "./routes/api/users";
import config from "./config/keys";
// Initialize app
const app = express();
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
