var express = require('express');
var router = express.Router();
var config = (process.env.HEROKU) ? {dbkey : process.env.dbkey, github_client_id: process.env.github_client_id, github_client_secret: process.env.github_client_secret} : require('../config.js');
var db = require('orchestrate')(config.dbkey);
var passport = require('passport');
var util = require('util');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var GitHubStrategy = require('passport-github2').Strategy;
var partials = require('express-partials');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

//----------Github passport things----------------
var GITHUB_CLIENT_ID = config.github_client_id;
var GITHUB_CLIENT_SECRET = config.github_client_secret;


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});



// var callback = (process.env.HEROKU) ? "https://operationprojectproject.herokuapp.com/auth/github/callback":"http://127.0.0.1:3000/auth/github/callback";
var callback = (process.env.HEROKU) ? "http://demoday.ninja/auth/github/callback":"http://127.0.0.1:3000/auth/github/callback";


passport.use('github', new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: callback
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
router.use(cookieParser());

//----------------------------------------------

router.get('/', function(req, res, next) {
  if(req.user){
    res.render('user_session', { title: "Hello, " + req.user.displayName ,layout: 'layout', logged_user:req.cookies.url, logged_user_key: req.cookies.id , banana:'yellow' , client_user_session: true});
  }
  else{
    console.log("!req.user");
    res.render('index', { title: 'OPP' , layout: 'layout' , banana:'red' , client_user_session: false });
  }
});

router.get('/test', function(req, res, next) {
  res.render('index', { title: 'OPP' , layout: 'tests_layout'});
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // console.log("req.path: ", req.path);
    req.session.returnTo = req.path;
    return next();
  }
  else {
    console.log("ensure authentication failed");
  }
}

router.put("/profiles/:id", ensureAuthenticated, function(req, res, next){
    var id = req.params.id;
     console.log("profile updated");
    // console.log("request body", req.body);
    // console.log("title:", req.body.title);
    // console.log("twitter:", req.body.twitter_url);
    // console.log("linkedin_url:", req.body.linkedin_url);
    // console.log("personal_site_url:", req.body.personal_site_url);
     console.log("top_skills:", req.body.top_skills);
     console.log("top_tools:", req.body.top_tools);

    db.newPatchBuilder("OPP_users", id)
      .replace("profile_content.social_urls.twitter", req.body.twitter_url)
      .replace("profile_content.social_urls.linkedin", req.body.linkedin_url)
      .replace("profile_content.editable_text.name", req.body.name)
      .replace("profile_content.editable_text.title", req.body.title)
      .replace("profile_content.social_urls.personal", req.body.personal_site_url)
      .replace("profile_content.editable_text.skills", req.body.top_skills)
      .replace("profile_content.editable_text.tools", req.body.top_tools)
      .apply()
      .fail(function(err){
        console.log("profiles update failed");
        send(err);
      });
});

router.get('/profiles', function(req, res, next) {
  db.list('OPP_users', {limit:100})
      .then(function (result) {
        var data = result.body.results;
        var ray = [];
        var mapped = data.forEach(function (element, index) {
          if(element.value.active === true){
          ray.push({
            id: element.path.key,
            active: element.value.active,
            name: element.value.profile_content.editable_text.name ,
            title: element.value.profile_content.editable_text.title ,
            github_url: element.value.github_api_data.github_url ,
            profile_img_url: element.value.profile_content.img_urls.profile_img ,
            personal_site_url: element.value.profile_content.social_urls.personal ,
            linkedin_url: element.value.profile_content.social_urls.linkedin ,
            twitter_url: element.value.profile_content.social_urls.twitter ,
            url_id: element.value.profile_content.editable_text.url_id ,
            top_skills: element.value.profile_content.editable_text.skills ,
            top_tools: element.value.profile_content.editable_text.tools ,
            js_tidbit: element.value.profile_content.editable_text.q_and_a.js_tidbit ,
            work_status: element.value.profile_content.checkbox_content.work_status ,
            dream_job: element.value.profile_content.editable_text.q_and_a.job_hope
          });
        }
      });
        // console.log("mapped: ", ray);
        res.send(ray);
      })
      .fail(function(err){
        console.log("profiles get failed:", err);
        send(err);
      });
});

router.delete("/profiles/:id", ensureAuthenticated, function(req, res, next){
  var id = req.params.id;
  console.log("/profiles/:id --> 'DELETE'");
  db.newPatchBuilder("OPP_users", id)
  .replace("active", false)
  .apply()
  .then(function (result) {
    console.log("profile deleted");
    res.send({});
  })
  .fail(function (err) {
    console.log("profile delete failed");
    send(err);
  });

});

router.put("/projects/:id", ensureAuthenticated, function(req, res, next){

    var id = req.params.id;
    console.log("/projects/:id --> 'PUT'");
    // console.log("project update(not really)");
    // console.log("request body is", req.body);
    // console.log("owner_reference:", req.body.owner_reference);
    // console.log("title:", req.body.title);
    // console.log("project_url_id:", req.body.project_url_id);
    // console.log("github_url:", req.body.github_repo_url);
    console.log("live_project_site_url:", req.body.live_project_site_url);
    // console.log("mvp:", req.body.mvp);
    // console.log("tech_used:", req.body.tech_used);

    function updateProjects(){
      db.newPatchBuilder("OPP_projects", id)
      .replace("project_content.title", req.body.title)
      .replace("owner_reference", req.body.owner_reference)
      .replace("project_content.project_url_id", req.body.project_url_id)
      .replace("project_content.out_link_urls.github_repo_url", req.body.github_repo_url)
      .replace("project_content.out_link_urls.live_project_site_url", req.body.live_project_site_url)
      .replace("project_content.mvp", req.body.mvp)
      .replace("project_content.tech_used", req.body.tech_used)
      .apply()
      .then(function (result) {
        console.log("project updated");
        res.send({id:id, value: JSON.parse(result.request.body)});
      })
      .fail(function (err) {
        console.log("project put failed");
        send(err);
      });
    }

    db.search('OPP_projects', req.body.project_url_id)
      .then(function (result) {
        if(result.body.count>1){
          console.log("project url already exists");
          res.status(409).send("project url already exists");
        }
        else if(result.body.count===1){
          var key = result.body.results[0].path.key;
          if(key===id){
            updateProjects();
          }else{
            console.log("project url already exists");
            res.status(409).send("project url already exists");
          }
        }else{
          updateProjects();
        }
      })
      .fail(function (err) {
        console.log("db project put url search failed:", err);
      });

});

router.post("/projects", ensureAuthenticated, function(req, res, next){
  console.log("/projects --> 'POST'");

  db.search('OPP_projects', req.body.project_url_id)
    .then(function (result) {
      if(result.body.count>0){
        console.log("project url already exists");
        res.status(409).send("project url already exists");
      }
      else{
        db.post('OPP_projects', {
          "active": true,
          "owner_reference": req.body.owner_reference,
          "project_content": {
            "title": req.body.title ,
            "project_url_id": req.body.project_url_id ,
            "mvp": req.body.mvp,
            "img_urls": {
              "main_img": req.body.main_img
            } ,
            "out_link_urls" : {
              "github_repo_url": req.body.github_repo_url ,
              "live_project_site_url": ""
            } ,
            "tech_used": req.body.tech_used
          }
        })
        .then(function (result) {
          console.log("project added");
          res.send({id:result.path.key, value: JSON.parse(result.request.body)});
        })
        .fail(function (err) {
          console.log("project post failed", err);
          send(err);
        });
      }
    })
    .fail(function (err) {
      console.log("db project post url search failed:", err);
    });

});

router.get('/projects', function(req, res, next) {
  db.list('OPP_projects', {limit:100})
      .then(function (result) {
        var data = result.body.results;
        var ray = [];
        var mapped = data.forEach(function (element, index) {
          if(element.value.active === true){
          ray.push( {
            id: element.path.key,
            active: element.value.active,
            owner_reference: element.value.owner_reference,
            title: element.value.project_content.title ,
            project_url_id: element.value.project_content.project_url_id,
            github_repo_url: element.value.project_content.out_link_urls.github_repo_url,
            live_project_site_url: element.value.project_content.out_link_urls.live_project_site_url,
            mvp: element.value.project_content.mvp,
            main_img: element.value.project_content.img_urls.main_img,
            tech_used: element.value.project_content.tech_used
          });
        }
      });
        console.log(ray);
        res.send(ray);
      })
      .fail(function(err){
        console.log("projects get failed:", err);
        send(err);
      });
});

router.delete("/projects/:id", ensureAuthenticated, function(req, res, next){
  console.log("/projects/:id --> 'DELETE'");

  var id = req.params.id;

  db.remove('OPP_projects', id, true)
  .then(function (result) {
    res.send({});
  })
  .fail(function (err) {
    console.log("delete project failed", err);
    send(err);
  });

});


router.get('/auth/github',
  function(req, res, done){
    // console.log("req path", req.path);
    // console.log("req session", req.session);
    // console.log("req.query.url", req.query.url);
    // console.log("query",req.query);
    req.session.returnTo = req.query.url;
    // console.log("1req.session.returnTo: ", req.session.returnTo);
    done();
  },
    passport.authenticate('github', { scope: [ 'user:email' ] }),
    function(req, res){
      // The req will be redirected to GitHub for authentication, so this
      // function will not be called.
});

//keep history route
router.get('/auth/github/callback', passport.authenticate('github'), function(req, res) {
  // console.log("2req.session.returnTo: ", req.session.returnTo);
    var cookieValue;

    function activate( result ){
      var id = result.body.results[0].path.key;
      console.log("activate();");
      console.log("id:" , id);
      db.newPatchBuilder("OPP_users", id)
        .replace("active", true)
        .apply()
        .fail(function(err){
          console.log("activating profile failed");
          send(err);
        });
    }

    function direct(){
      res.cookie("logged", true);
      res.cookie("user", req.user.username);
      // console.log("2cookievalue: ", cookieValue);
      res.redirect(req.session.returnTo || "/");
      req.session.returnTo = null;
    }

    function register(){
      console.log("register test log");
      db.post('OPP_users', {
         "active":true,
         "github_api_data": {
           "github_id": req.user.id,
           "github_email": req.user._json.email,
           "github_display_name": req.user.displayName,
           "github_url": req.user.profileUrl,
           "github_avatar": req.user._json.avatar_url,
           "github_username": req.user.username
         } ,
         "project_reference": [] ,
         "profile_content": {
           "img_urls": {
             "profile_img": req.user._json.avatar_url ,
             "cover_photo": "" ,
             "hero_img": "" ,
             "action_shot": ""
           } ,
           "social_urls": {
             "personal": "",
             "linkedin": "",
             "twitter": ""
           } ,
           "editable_text": {
             "name": req.user.displayName,
             "title": "" ,
             "url_id": req.user.username,
             "skills": [] ,
             "tools": [] ,
             "q_and_a" : {
                 "js_tidbit": "" ,
                 "job_hope": "" ,
                 "politics": ""
             }
           } ,
           "checkbox_content" : {
             "work_status": []
           }
         }
      },false)
      .then(function(result){
        console.log("register function ran");
        // console.log("result body is:", result.path.key);
        res.cookie("id", result.path.key);
        direct();
      })
      .fail(function(err){
          console.log("db register post failed:",err);
        });
      // console.log("new user key is:", req.user);
      res.cookie("url", req.user.username);
    }

    function updateInfo(key){
      // console.log("key", key);
      db.newPatchBuilder("OPP_users", key)
        .replace("github_api_data.github_id",req.user.id )
        .replace("github_api_data.github_email",req.user._json.email )
        .replace("github_api_data.github_display_name",req.user.displayName )
        .replace("github_api_data.github_url",req.user.profileUrl )
        .replace("github_api_data.github_avatar",req.user._json.avatar_url )
        .replace("github_api_data.github_username",req.user.username )
        .replace("profile_content.img_urls.profile_img",req.user._json.avatar_url )
        .replace("profile_content.editable_text.name",req.user.displayName )
        .replace("profile_content.editable_text.url_id",req.user.username )
        .apply()
      .fail(function (err) {
        console.log("patch failed");
      });
    }
    console.log("req user is:", req.user.username);
    db.search('OPP_users', 'value.github_api_data.github_username:"'+req.user.username+'"')
      .then(function (result) {
        if(result.body.count>0){
          if(result.body.results[0].value.active ===false){
            activate(result);
          }
          console.log("result count:", result.body.count);
          console.log("result body", result.body.results[0].value);
          console.log("user exists");
          // console.log("user object is:", result.body.results[0].value);
          cookieValue = result.body.results[0].value.profile_content.editable_text.url_id;
          // console.log("key", result.body.results[0].path.key);
          updateInfo(result.body.results[0].path.key);
          res.cookie("url", cookieValue);
          res.cookie("id", result.body.results[0].path.key);
          direct();
        }
        else{
          register();
        }
      })
      .fail(function (err) {
        console.log("db search failed:", err);
      });
});

router.get('/logout', function(req, res){
  req.session.returnTo = req.query.url;
  console.log("3req.session.returnTo: ", req.session.returnTo);
  req.logout();
  res.clearCookie("logged");
  res.clearCookie("user");
  res.clearCookie("url");
  res.clearCookie("id");


  res.redirect(req.session.returnTo || "/");
  req.session.returnTo = null;
});

router.get('/search', function(req, res){
  var searchArray = [];
  var projectArray = [];
  var userArray = [];

  function searchProjects(){
    db.search("OPP_projects",'value.project_content.title:"'+req.body.searchText+'"')
    .then(function (result) {
      var data = result.body.results;
      var mapped = data.forEach(function (element, index) {
        if(element.value.active === true){
          projectArray.push( {
            id: element.path.key,
            active: element.value.active,
            owner_reference: element.value.owner_reference,
            title: element.value.project_content.title ,
            project_url_id: element.value.project_content.project_url_id,
            github_repo_url: element.value.project_content.out_link_urls.github_repo_url,
            live_project_site_url: element.value.project_content.out_link_urls.live_project_site_url,
            mvp: element.value.project_content.mvp,
            main_img: element.value.project_content.img_urls.main_img,
            tech_used: element.value.project_content.tech_used
          });
      }
    });
      // console.log(ray);
      return projectArray;
    })
    .then(function(result){
      searchArray = userArray.concat(projectArray);
      send(searchArray);
    })
    .fail(function(err){
      console.log("search route function for projects failed:", err);
      send(err);
    });
  }

  function searchUsers(){
    db.search("OPP_users",'value.profile_content.editable_text.name:"'+req.body.searchText+'"')
      .then(function(result){
        function profSearch(){
          var data = result.body.results;
          var mapped = data.forEach(function (element, index) {
            if(element.value.active === true){
              userArray.push({
                id: element.path.key,
                active: element.value.active,
                name: element.value.profile_content.editable_text.name ,
                title: element.value.profile_content.editable_text.title ,
                github_url: element.value.github_api_data.github_url ,
                profile_img_url: element.value.profile_content.img_urls.profile_img ,
                personal_site_url: element.value.profile_content.social_urls.personal ,
                linkedin_url: element.value.profile_content.social_urls.linkedin ,
                twitter_url: element.value.profile_content.social_urls.twitter ,
                url_id: element.value.profile_content.editable_text.url_id ,
                top_skills: element.value.profile_content.editable_text.skills ,
                top_tools: element.value.profile_content.editable_text.tools ,
                js_tidbit: element.value.profile_content.editable_text.q_and_a.js_tidbit ,
                work_status: element.value.profile_content.checkbox_content.work_status ,
                dream_job: element.value.profile_content.editable_text.q_and_a.job_hope
              });
          }
        });
          // console.log("mapped: ", ray);
          return userArray;
      }
    })
    .then(function(result){
      searchProjects();
    })
    .fail(function (err) {
      console.log("search route function for users failed:", err);
    });
  }

  searchUsers();

});


module.exports = router;
