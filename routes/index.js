var express = require('express');
var router = express.Router();
var config = require('../config.js');
var db = require('orchestrate')(config.dbkey);
var passport = require('passport');
var util = require('util');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var GitHubStrategy = require('passport-github2').Strategy;
var partials = require('express-partials');

//----------Github passport things----------------
var GITHUB_CLIENT_ID = "1474405248ddea66c5e5";
var GITHUB_CLIENT_SECRET = "74586825356bf88ee2b48a29053b5c62becac54c";

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use('github', new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      
      // To keep the example simple, the user's GitHub profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the GitHub account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));


// router.use(partials());
// router.use(logger('dev'));
// // router.use(bodyParser());
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({extended: false}));
// 
// router.use(methodOverride());
// router.use(session({ secret: 'keyboard cat', saveUninitialized: false, proxy: true, resave: true }));
// // Initialize Passport!  Also use passport.session() middleware, to support
// // persistent login sessions (recommended).
router.use(passport.initialize());
router.use(passport.session());
// router.use(express.static(__dirname + '/public'));

//----------------------------------------------

router.get('/', function(request, response, next) {
  console.log('GET request at /');
  if(request.user){
    console.log("req user is", request.user);
    response.render('index', { title: 'Different' , layout: 'layout', user:request.user.id});
  }
  else{
    console.log("no user");
    response.render('index', { title: 'OPP' , layout: 'layout'});
  }
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); }
  // res.redirect('/');

  res.render('index', { title: 'OPP' , layout: 'layout'});
  console.log("not logged in");
}

router.get('/test', function(request, response, next) {
  console.log('GET request at /test');
  response.render('index', { title: 'OPP' , layout: 'tests_layout'});
});

router.get('/profiles', function(request, response, next) {
  console.log('GET request at /profiles');
  // var id = request.params.id;
  // console.log('request.params: ' , request.params);
  //console.log('Sending profile to',id);
  db.list('OPP_users')
      .then(function (result) {
        var data = result.body.results;
        var mapped = data.map(function (element, index) {
          //console.log(element.value);
          return {
            name: element.value.name ,
            title: element.value.title,
            github_url: element.value.github_url,
            personal_site_url: element.value.personal,
            linkedin_url: element.value.linkedin,
            twitter_url: element.value.twitter,
            url_id:element.value.url_id,
            job_status:element.value.job_status,
            top_skills: element.value.skills,
            top_tools: element.value.tools,
            js_tidbit: element.value.favorite,
            work_status: element.value.work_status,
            dream_job: element.value.job_hope,
            projects: element.value.projects
          };
        });
        //console.log(mapped);
        response.send(mapped);
      });
});

router.get('/projects', function(request, response, next) {
  console.log('GET request at /projects');
  db.list('OPP_projects')
      .then(function (result) {
        var data = result.body.results;
        var mapped = data.map(function (element, index) {
          console.log(element.value.project_url_id);
          return {
            title: element.value.title ,
            project_url_id: element.value.project_url_id,
            mvp: element.value.desc,
            tech_used: element.value.tools,
            owners: element.value.owners
          };
        });
        //console.log(mapped);
        response.send(mapped);
      });
});


router.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function(req, res){
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });
  
router.get('/auth/github/callback', 
    passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
      // if(req.user){
      //   // console.log("222req user is", req.user);
      // }
      res.redirect('/');
      // res.render('index', { title: 'Something dif' , layout: 'layout', user:req.user.id});
    });
    
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});



// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.

// router.post('/register', function(request, response, next) {
//   var name = request.body.name;
//   var email = request.body.email;
//   var password = request.body.password;
//   var confirmPass = request.body.confirmPass;
//   var formInfo = {name: name, email: email, password: password, confirmPass: confirmPass};
//   if (password === confirmPass) {
//   pg.connect(conString, function(err, client, done) {
//     if(err) {
//       return console.error('error fetching client from pool', err);
//     }
//     client.query("insert into users (name, email, password) values ('"+name+"', '"+email+"', '"+password+"')", function(err, result) {
//       done();
//       console.log(result);
//       if(err) {
//         return console.error('error running query', err);
//       }
//     });
//   });
//     response.send(formInfo);
// }
// else {
//   response.send('error');
// }
// });


module.exports = router;
