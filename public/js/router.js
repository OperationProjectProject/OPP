//Backbone Router
//
//
App.Router = Backbone.Router.extend({

  initialize: function(opts){
    this.user_session = opts.user_session;
    this.profiles = opts.profiles;
    this.projects = opts.projects;
    this.logged_user = opts.logged_user;
    this.logged_user_key = opts.logged_user_key;
    this.logged_user_img_url = opts.logged_user_img_url;
    this.set_up_dom = function(){
      console.log("%cset_up_dom","font-size:2.5em; color:orange;");
      $('#app').empty();
      app.centerView = new App.Views.CenterView();
      app.footerView = new App.Views.FooterView();
    };
  },

  routes:{
    '' : 'index' ,
    'profiles' : 'profiles' ,
    'profiles/:url_id' : 'profiles' ,
    'profiles/:url_id/edit' : 'profile_editor' ,
    'projects' : 'projects' ,
    'projects/my_projects' : 'my_projects' ,
    'projects/new': 'project_editor' ,
    'projects/:project_url_id': 'projects' ,
    'projects/:project_url_id/edit': 'project_editor' ,
    '*notFound': 'notFound'
  },

  index: function(){
    console.log("%cRouter '/'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");
    var current_url = '/';
    this.set_up_dom();

    app.navigationView = new App.Views.NavigationView({
      collection: this.profiles ,
      user_session: this.user_session ,
      current_url: current_url,
      logged_user: this.logged_user
    });

    app.mainView = new App.Views.MainView();
  },

  profiles: function( url_id ){
    console.log("%cRouter '/#profiles'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");

    //Store current url, to be passed to navigation view
    var current_url = '/%23profiles';
    if ( url_id ) {
      current_url += '/'+ url_id;
    }

    //Set up DOM
    this.set_up_dom();

    //Create Nav View
    app.navigationView = new App.Views.NavigationView({
      collection: this.profiles ,
      user_session: this.user_session ,
      current_url: current_url ,
      logged_user: this.logged_user ,
      active_link: "profiles_link_active"
    });

    //Check whether a url_id has been passed to the url
    if ( !url_id ) {
      console.log("%c!url_id","color:orange; font-size:1.25em;");
      //Add All Profiles page content to DOM
      app.allProfilesView = new App.Views.AllProfilesView({
        collection: this.profiles
      });
    }
    else {
      console.log("%c:url_id","color:green; font-size:1.25em;" );
      //console.log(this.profiles);
      app.profileView = new App.Views.ProfileView({
        collection: this.profiles ,
        url_id: url_id ,
        user_session: this.user_session ,
        logged_user: this.logged_user
      });
    } //end of the url_id param 'else' clause
  },

  projects: function(project_url_id){
    console.log("%cRouter '/#projects'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");
    //current url is stored, to be passed to navigation view
    var current_url = '/%23projects';
    if ( project_url_id ) {
      current_url += '/'+ project_url_id;
    }
    this.set_up_dom();
    app.navigationView = new App.Views.NavigationView({
      collection: this.profiles ,
      user_session: this.user_session ,
      current_url: current_url ,
      logged_user: this.logged_user ,
      active_link: "projects_link_active"
    });

    //check whether a url_id has been passed to the url
    if ( !project_url_id ) {
      console.log("%c!project_url_id","color:orange; font-size:1.25em;");
      //Add All Profiles page content to DOM
      app.allProjectsView = new App.Views.AllProjectsView({
        collection: this.projects
      });
    }
    else {
      console.log("%c:project_url_id","color:green; font-size:1.25em;" );
      //console.log(this.profiles);
      app.projectView = new App.Views.ProjectView({
        collection: this.projects ,
        project_url_id: project_url_id
      });
    } //end of the project_url_id param 'else' clause
  },

  notFound: function() {
    console.log("%cnotFound '/'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");
    var current_url = '/';
    this.set_up_dom();
    app.navigationView = new App.Views.NavigationView({
      collection: this.profiles ,
      user_session: this.user_session ,
      current_url: current_url ,
      logged_user: this.logged_user
    });

    app.mainView = new App.Views.MainView();
  },

  profile_editor: function() {
    console.log("%cRouter '/#profiles/:url_id/edit'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");

    var current_url = '/%23profiles/' + this.logged_user + '/edit';
    this.set_up_dom();
    app.navigationView = new App.Views.NavigationView({
      collection: this.profiles ,
      user_session: this.user_session ,
      current_url: '#profiles/' + this.logged_user ,
      logged_user: this.logged_user
    });
    //console.log(this.profile_edit_model);
    app.profileEditView = new App.Views.EditProfileView({
      collection: this.profiles ,
      user_session: this.user_session ,
      logged_user: this.logged_user
    });
    //console.log(app.profileEditView);
  } ,

  project_editor: function(project_url_id) {

    var current_url = '';
    var new_project = null;

    if (project_url_id) {
      console.log("%cRouter '/#projects/:url_id/edit'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");
      current_url = '/%23projects/' + project_url_id + '/edit';
      console.log(current_url);
      new_project = false;
    } else if (!project_url_id) {
      console.log("%cRouter '/#projects/new'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");
      current_url = '/%23projects/new';
      console.log(current_url);
      new_project = true;
      project_url_id = null;
    } else {
      console.log("%cRouter --> something's broken in project_editor method.", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");
      console.log(current_url);
    }

    this.set_up_dom();
    app.navigationView = new App.Views.NavigationView({
      collection: this.profiles,
      user_session: this.user_session,
      current_url: current_url,
      logged_user: this.logged_user
    });
    //console.log(this.profile_edit_model);
    app.projectEditView = new App.Views.EditProjectView({
      collection: this.projects ,
      user_session: this.user_session ,
      logged_user: this.logged_user,
      logged_user_key: this.logged_user_key ,
      new_project: new_project,
      project_url_id: project_url_id
    });
    //console.log(app.profileEditView);
  } ,

  my_projects: function(){
    console.log("%cRouter '/#projects/my_projects'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");
    var current_url = '/#projects/my_projects';
    this.set_up_dom();
    app.navigationView = new App.Views.NavigationView({
      collection: this.profiles ,
      user_session: this.user_session ,
      current_url: current_url,
      logged_user: this.logged_user
    });
    app.myProjectsView = new App.Views.MyProjectsView({
      collection: this.projects ,
      user_session: this.user_session ,
      logged_user: this.logged_user ,
      logged_user_key: this.logged_user_key
    });
  }

});
