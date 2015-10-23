// var app = app || {};

App.Router = Backbone.Router.extend({
  routes:{
    '' : 'index' ,
    'profiles' : 'profiles' ,
    'profiles/:id' : 'profiles' ,
    'projects' : 'projects' ,
    'projects/id': 'projects'
  }
});

App.Router.index = function(){
  //$('.centerdiv').empty();
  //add main view
  //new App.Views.MainView();
};

App.Router.profiles = function(user){
  console.log("router on profiles is running");
  console.log("user is ", user);
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
};

App.Router.projects = function(project){
  console.log("router on projects is running");
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

};
