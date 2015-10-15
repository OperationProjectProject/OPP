var express = require("express");
var bodyParser = require("body-parser");
var pgconfig = require('./config');
var pg = require('pg');

var app = express();
var port = process.env.PORT || 5000;

// var conString = process.env.ELEPHANTSQL_URL || "postgres://awdtqouh:" + pgconfig.pgkey + "@pellefant.db.elephantsql.com:5432/awdtqouh";

app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname, {index: '/main.html'}));

// app.get('/login', function(request, response, next) {
//   response.send('hello');
// });

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


app.listen(port, function () {
  console.log("Server is running...");
});
