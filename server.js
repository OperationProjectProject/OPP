var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
var pgconfig = require('./config');
var pg = require('pg');
var db = require('orchestrate')(config.dbkey);

var app = express();
var port = process.env.PORT || 3000;


app.set('port', port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(request, response, next) {
  response.render('index', { title: 'OPP' , layout: 'layout'});
});

app.get('/test', function(request, response, next) {
  response.render('index', { title: 'OPP' , layout: 'tests_layout'});
});



app.post('/register', function(request, response, next) {
  var name = request.body.name;
  var email = request.body.email;
  var password = request.body.password;
  var confirmPass = request.body.confirmPass;
  var formInfo = {name: name, email: email, password: password, confirmPass: confirmPass};
  if (password === confirmPass) {
  pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query("insert into users (name, email, password) values ('"+name+"', '"+email+"', '"+password+"')", function(err, result) {
      done();
      console.log(result);
      if(err) {
        return console.error('error running query', err);
      }
    });
  });
    response.send(formInfo);
}
else {
  response.send('error');
}
});


var server = app.listen(port, function () {
  console.log("Server is running...");
});

module.exports = server;
