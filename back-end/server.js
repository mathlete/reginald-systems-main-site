const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// setup express
const app = express();

// setup body parser middleware to conver to JSON and handle URL encoded forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// connect to the mongodb database
mongoose.connect('mongodb://localhost:27017/reginald', {
  useNewUrlParser: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: ['secretValue'],
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// listen on port 3030
app.listen(3030, () => console.log('Server listening on port 3030!'));

// import the users module and setup its API path
const accounts = require("./account.js");
app.use("/api/account", accounts.routes);
const hardware = require("./hardware.js");
app.use("/api/hardware", hardware.routes);
