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
var GITHUB_CLIENT_ID = config.github_client_id;
var GITHUB_CLIENT_SECRET = config.github_client_secret;

console.log(config.github_client_id)
console.log(config.github_client_secret)

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


// router.use(methodOverride());
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
router.use(passport.initialize());
router.use(passport.session());


//----------------------------------------------

router.get('/', function(request, response, next) {
  console.log("'/' , 'GET'");
  if(request.user){

    response.render('index', { title: request.user.username , layout: 'layout', user:request.user.id});

  }
  else{
    console.log("!request.user");
    response.render('index', { title: 'OPP' , layout: 'layout' , banana:'red' , client_user_session: false });
  }
});

router.get('/test', function(request, response, next) {
  console.log("'/test' , 'GET'");
  response.render('index', { title: 'OPP' , layout: 'tests_layout'});
});

// router.get('/account',ensureAuthenticated, function(request, response, next){
//   console.log("'/account' , 'GET'");
//   // db.list('OPP_users')
//   //     .then(function (result) {
//   //       var data = result.body.results;
//   //       var mapped = data.map(function (element, index) {
//   //         //console.log(element.value);
//   //         if(request.user.profileUrl===element.value.github_url){
//   //           console.log("user logged in");
//   //         }else{
//   //           console.log("this is a new user");
//   //         }
//   //       });
//   //       //console.log(mapped);
//   //       response.send(mapped);
//   //     });
//   response.send(request.user);
// });

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("req.path: ", req.path);
    req.session.returnTo = req.path;
    return next(); }

  // req.session.returnTo = req.path;
  else{
    // res.redirect('/');
    console.log("somthing");
  }

  // res.render('index', { title: 'OPP' , layout: 'layout'});
  // console.log("not logged in");
}

router.get('/profiles', function(request, response, next) {
  console.log("'/profiles' , 'GET'");
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
  console.log("'/projects' , 'GET'");
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

////////Old route

// router.get( '/auth/github/callback',
//   passport.authenticate('github', {successRedirect:"/account", failureRedirect: '/' } ) ,
//   function(req, res) {
//     console.log("req: ", req);
//     console.log("res: ", res);
//   }
// );
//////////

///keep history route
router.get('/auth/github/callback', passport.authenticate('github'), function(req, res) {
  console.log("req.session.returnTo: ", req.session.returnTo);
  console.log("req: ", req.session.path);
  // console.log("res: ", res);
    res.redirect(req.session.returnTo || "/");
    req.session.returnTo = null;
});
///////////

router.get('/logout', function(req, res){
  console.log("'/logout' , 'GET'");
  req.logout();
  res.redirect('/');
});

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
