const express = require("express");
const app = require("./config/expressConfig");
const connection = require("./config/dbmongo");
const router = require("./routes/routes");
const passport = require("./config/passpor");

app.set("views", __dirname + "/views");

app.use("/assets", express.static("publicCSS"));

app.use(passport.initialize());

app.use(passport.session());

app.use("/", router);

app.get("/login", (req, res) => {
  res.render("login");
});

app.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

app.get("/SingUp", (req, res) => {
  res.render("newUS");
});

app.listen(3000, () => {
  console.log("je vous écoute sur le port 3000");
});
