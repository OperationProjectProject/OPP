var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
// var pgconfig = require('./config');
var pg = require('pg');
// var db = require('orchestrate')(config.dbkey);

var routes = require('./routes/index');
var users = require('./routes/user');

var app = express();

var port = process.env.PORT || 3000;


app.set('port', port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

var server = app.listen(port, function () {
  console.log("Server is running...");
});

module.exports = server;
