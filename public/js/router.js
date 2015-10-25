//Backbone Router
//
//
App.Router = Backbone.Router.extend({
  initialize: function(opts){

    //console.log(opts);
    this.profiles = opts.profiles;
    this.projects = opts.projects;

    //console.log(this)
  },
  routes:{
    '' : 'index' ,
    'profiles' : 'profiles' ,
    'profiles/:url_id' : 'profiles' ,
    'projects' : 'projects' ,
    //'projects/url_id': 'projects'
  } ,

  index: function(){
    console.log("%cRouter '/'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;")
    $('#app').empty();
    app.navigationView = new App.Views.NavigationView();
    app.centerView = new App.Views.CenterView();
    app.footerView = new App.Views.FooterView();
    app.mainView = new App.Views.MainView();
  } ,

  profiles: function( url_id ){
    console.log("%cRouter '/#profiles'", "color:rgba(51,51,51,1.0); font-size:1.25em; font-weight:bold;");
    $('#app').empty();
    app.navigationView = new App.Views.NavigationView();
    app.centerView = new App.Views.CenterView();
    app.footerView = new App.Views.FooterView();

    //check whether or not a url_id has been passed to the url
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


/*
      this.profiles.sync({
        success: function(collection){
          console.log("%chello hello hello","color:green; font-size:6em;" );
          console.log(collection);
          //presume that the url_id does not exist
          var model_with_url_id = null;
          //check for url_id in the collection
          for ( var i = 0 ; i < collection.models.length ; i++ ) {
            if( collection.models[i].attributes.url_id === url_id ){
              model_with_url_id = collection.models[i];
              console.log(url_id);
              console.log(collection);
              console.log(model_with_url_id);
            }
          }
          if ( model_with_url_id ) {
            console.log(url_id);
            console.log(collection);
            console.log(model_with_url_id);
            app.ProfileView = new App.Views.ProfileView({
              model: model_with_url_id
            });
          } else {
            console.log("that url doesn't work ");
          }

        } ,
        error: function(){
          console.log("%cgoodbye goodbye goodbye","color:red; font-size:6em;")
        }
      });
*/


    } //end of the url_id param 'else' clause
  } ,

  projects: function(){

    //Remove all children of div#app
    $('#app').empty();

    //Render Primary UI containers
    app.navigationView = new App.Views.NavigationView();
    app.centerView = new App.Views.CenterView();
    app.footerView = new App.Views.FooterView();

    app.allProjectsView = new App.Views.AllProjectsView({collection: this.projects});
  }
});






//App.Router.profiles = function(){
//  console.log("Router.profiles");
  //console.log("user is ", user);
/*
  $('.centerdiv').empty();
  if(user){
    var usermodel;
    console.log("models",app.profile_content.models);
    for( var i=0; i < app.profile_content.models.length; i++ ){
      if( app.profile_content.models[i].attributes.url_id == user){
        usermodel = app.profile_content.models[i];
      }
    }
    console.log("usermodel is ", usermodel);
    var view1 = new App.Views.ProfileView({model:usermodel});
  }
  else{
  var view2 = new App.Views.AllProfilesView();
  }
*/
//};

//App.Router.projects = function(){
//  console.log("Router.projects");
  /*
  $('.centerdiv').empty();
  if(project){
    var projectmodel;
    console.log("models",app.project_content.models);
    for( var i=0; i < app.project_content.models.length; i++ ){
      if( app.project_content.models[i].attributes.project_urlid == project ){
        projectmodel = app.project_content.models[i];
      }
    }
    console.log("usermodel is ", projectmodel);
    var view1 = new App.Views.ProjectView({model:projectmodel});
  }else{
    var view2 = new App.Views.AllProjectsView();
  }
  */
//};
