const express =require("express");
const session = require("express-session");
const bodyparser = require("body-parser");
const mustachexpress = require("mustache-express");
const cookies =require("cookie-parser");

const app = express();

app.use(bodyparser.urlencoded({extended: true}));

const mustachexpressInstance = mustachexpress();
mustachexpressInstance.cache = null;

app.engine('mustache', mustachexpressInstance);

app.set('view engine', 'mustache');

app.use(cookies());

app.use(session({
    secret: 'jaja',
    resave: false,
    saveUninitialized: false
}));


module.exports = app;