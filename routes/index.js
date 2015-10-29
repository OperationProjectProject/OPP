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
var logger = require('morgan');

//----------Github passport things----------------
var GITHUB_CLIENT_ID = config.github_client_id;
var GITHUB_CLIENT_SECRET = config.github_client_secret;


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
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));

router.use(passport.initialize());
router.use(passport.session());
router.use(logger('dev'));

//----------------------------------------------

router.get('/', function(request, response, next) {
  if(request.user){
    response.render('user_session', { title: request.user.username , layout: 'layout', user:request.user.id , banana:'yellow' , client_user_session: true});
  }
  else{
    console.log("!request.user");
    response.render('index', { title: 'OPP' , layout: 'layout' , banana:'red' , client_user_session: false });
  }
});

router.get('/test', function(request, response, next) {
  response.render('index', { title: 'OPP' , layout: 'tests_layout'});
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("req.path: ", req.path);
    req.session.returnTo = req.path;
    return next();
  }
  else {
    console.log("somthing");
  }
}

router.get('/profiles', function(request, response, next) {
  db.list('OPP_users')
      .then(function (result) {
        var data = result.body.results;
        var mapped = data.map(function (element, index) {
          console.log("profile: " ,element.path.key);
          /*
          console.log(element);
          console.log(element.value);
          console.log(element.value.profile_content);
          console.log(element.value.profile_content.editable_text.name);
          console.log(element.value.profile_content.editable_text.title);
          console.log(element.value.github_api_data.github_url);
          console.log(element.value.profile_content.social_urls);
          console.log(element.value.profile_content.social_urls.personal);
          console.log(element.value.profile_content.social_urls.linkedin);
          console.log(element.value.profile_content.social_urls.twitter);
          console.log(element.value.profile_content.editable_text.url_id);
          console.log(element.value.profile_content.checkbox_content.work_status);
          console.log(element.value.profile_content.editable_text.skills);
          console.log(element.value.profile_content.editable_text.tools);
          console.log(element.value.profile_content.editable_text.q_and_a.js_tidbit);
          console.log(element.value.profile_content.editable_text.q_and_a.job_hope);
          */
          return {
            name: element.value.profile_content.editable_text.name ,
            title: element.value.profile_content.editable_text.title,
            github_url: element.value.github_api_data.github_url,
            personal_site_url: element.value.profile_content.social_urls.personal,
            linkedin_url: element.value.profile_content.social_urls.linkedin,
            twitter_url: element.value.profile_content.social_urls.twitter,
            url_id: element.value.profile_content.editable_text.url_id,
            top_skills: element.value.profile_content.editable_text.skills,
            top_tools: element.value.profile_content.editable_text.tools,
            js_tidbit: element.value.profile_content.editable_text.q_and_a.js_tidbit,
            work_status: element.value.profile_content.checkbox_content.work_status,
            dream_job: element.value.profile_content.editable_text.q_and_a.job_hope,
          };
        });
        //console.log(mapped);
        response.send(mapped);
      });
});

router.get('/projects', function(request, response, next) {
  db.list('OPP_projects')
      .then(function (result) {
        var data = result.body.results;
        var mapped = data.map(function (element, index) {
          console.log("project: " , element.path.key);
          //console.log(element);
          /*
          console.log(element.value.project_content.project_url_id);
          console.log(element.value);
          console.log(element.value.site_project_id);
          console.log(element.value.site_project_id);
          console.log(element.value.project_content.title);
          console.log(element.value.project_content.project_url_id);
          console.log(element.value.project_content.mvp);
          console.log(element.value.project_content.tech_used);
          */
          return {
            title: element.value.project_content.title ,
            project_url_id: element.value.project_content.project_url_id,
            mvp: element.value.project_content.mvp,
            tech_used: element.value.project_content.tech_used
          };
        });
        //console.log(mapped);
        response.send(mapped);
      });
});

router.get('/auth/github',
function(req, res, done){
  // console.log("req path", req.path);
  // console.log("req session", req.session);
  // console.log("req.query.url", req.query.url);
  console.log("query",req.query);
  req.session.returnTo = req.query.url;
  console.log("1req.session.returnTo: ", req.session.returnTo);
  done();
},
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function(req, res){
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
});

//keep history route
router.get('/auth/github/callback', passport.authenticate('github'), function(req, res) {
  console.log("2req.session.returnTo: ", req.session.returnTo);
  // console.log("req: ", req.session.path);
  // console.log("res: ", res);
    res.redirect(req.session.returnTo || "/");
    req.session.returnTo = null;
});

router.get('/logout', function(req, res){
  req.session.returnTo = req.query.url;
  console.log("3req.session.returnTo: ", req.session.returnTo);
  req.logout();
  res.redirect(req.session.returnTo || "/");
  req.session.returnTo = null;
});


module.exports = router;
