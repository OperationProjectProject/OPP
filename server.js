var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");
var pgconfig = require('./config');
var pg = require('pg');

var app = express();
var port = process.env.PORT || 3000;

var conString = process.env.ELEPHANTSQL_URL || "postgres://awdtqouh:" + pgconfig.pgkey + "@pellefant.db.elephantsql.com:5432/awdtqouh";

app.set('port', port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

var profiles = [
 {username:'Susie', byline:'JS Dev' , github_url: 'http://github.com/example'} ,
 {username:'Frankie', byline:'Front-End' , github_url: 'http://github.com/example'} ,
 {username:'Example User', byline:'Example Occupation' , github_url: 'http://github.com/example'}
];

var projects = [
 {title:'amazon', mvp:'buy stuff' , tech_used: [ 'fedex' , 'servers' , 'factories' ]} ,
 {title:'google', mvp:'find stuff' , tech_used: [ 'servers', 'ping-pong tables' ]} ,
 {title:'uber', mvp:'go somewhere' , tech_used: [ 'cars', 'iPhones', 'lawlessness' ]}
];


app.get('/', function(request, response, next) {
  console.log('GET request at /');
  response.render('index', { title: 'OPP' , layout: 'layout'});
});

app.get('/test', function(request, response, next) {
  console.log('GET request at /test');
  response.render('index', { title: 'OPP' , layout: 'tests_layout'});
});

app.get('/profiles', function(request, response, next) {
  console.log('GET request at /profiles');
  var id = request.params.id;
  console.log('request.params: ' , request.params);
  //console.log('Sending profile to',id);
  response.send(profiles);
});

app.get('/projects', function(request, response, next) {
  console.log('GET request at /projects');
  var id = request.params.id;
  console.log('request.params: ' , request.params);
  //console.log('Sending project to',id);
  response.send(projects);
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
