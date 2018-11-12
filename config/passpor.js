const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const connection = require("./dbmongo");
const users = require("../models/users");
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      users.findOne({ Email: email }, function(err, user) {
        console.log(user.todos);
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }
        if (user.password !== password) {
          return done(null, false, { message: "Incorrect password." });
        }
        console.log("je susi dans passport");
        return done(null, user);
      });
    }
  )
);
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  users.findById(id, function(err, user) {
    done(err, user);
  });
});
module.exports = passport;
