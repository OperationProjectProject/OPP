//Backbone Router
//
//
App.Router = Backbone.Router.extend({

  initialize: function(opts){
    this.user_session = opts.user_session;
    this.profiles = opts.profiles;
    this.projects = opts.projects;
  },

  routes:{
    '' : 'index' ,
    'profiles' : 'profiles' ,
    'profiles/:url_id' : 'profiles' ,
    'projects' : 'projects' ,
    'projects/:project_url_id': 'projects' ,
    '*notFound': 'notFound'
  } ,

  index: function(){
    console.log("%cRouter '/'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");
    var current_url = '/';
    $('#app').empty();
    app.navigationView = new App.Views.NavigationView({
      user_session: this.user_session ,
      current_url: current_url
    });
    app.centerView = new App.Views.CenterView();
    app.footerView = new App.Views.FooterView();
    app.mainView = new App.Views.MainView();
  } ,

  profiles: function( url_id ){
    console.log("%cRouter '/#profiles'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");
    //current url is stored, to be passed to navigation view
    var current_url = '/%23profiles';
    if ( url_id ) {
      current_url += '/'+ url_id;
    }
    $('#app').empty();
    app.navigationView = new App.Views.NavigationView({
      user_session: this.user_session ,
      current_url: current_url ,
      active_link: "profiles_link_active"
    });
    app.centerView = new App.Views.CenterView();
    app.footerView = new App.Views.FooterView();
    //check whether a url_id has been passed to the url
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
      app.ProfileView = new App.Views.ProfileView({
        collection: this.profiles ,
        url_id: url_id
      });
    } //end of the url_id param 'else' clause
  } ,

  projects: function(project_url_id){
    console.log("%cRouter '/#projects'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");
    //current url is stored, to be passed to navigation view
    var current_url = '/%23projects';
    if ( project_url_id ) {
      current_url += '/'+ project_url_id;
    }
    $('#app').empty();
    app.navigationView = new App.Views.NavigationView({
      user_session: this.user_session ,
      current_url: current_url ,
      active_link: "projects_link_active"
    });
    app.centerView = new App.Views.CenterView();
    app.footerView = new App.Views.FooterView();
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
      app.ProjectView = new App.Views.ProjectView({
        collection: this.projects ,
        project_url_id: project_url_id
      });
    } //end of the project_url_id param 'else' clause
  } ,

  notFound: function() {
    console.log("%cnotFound '/'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");
    var current_url = '/';
    $('#app').empty();
    app.navigationView = new App.Views.NavigationView({
      user_session: this.user_session ,
      current_url: current_url
    });
    app.centerView = new App.Views.CenterView();
    app.footerView = new App.Views.FooterView();
    app.mainView = new App.Views.MainView();
  }

});
