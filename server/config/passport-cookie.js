const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
import mongoose from "mongoose";
const User = mongoose.model("users");
import keys from "./keys";

const extractFromCookie = req => {
  var token = null;
  if (req && req.cookies) token = req.cookies["mernCookie"];
  console.log("COOKIE TOKEN", token);
  return token;
};

const opts = {};
opts.jwtFromRequest = extractFromCookie;
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    "cookie",
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
