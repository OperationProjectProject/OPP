var AppRouter = Backbone.Router.extend({
  routes:{
    "profiles(/:user)":"profiles",
    "projects(/:project)":"projects"
    
  },
  profiles: function(user){
    console.log("allprofiles route is running");
    // console.log(this.model.attributes.name);
    // user = this.model.attributes.name;
  }
});

var approuter = new AppRouter();

approuter.on('route:profiles', function(actions) {
  console.log("router on profiles is running");
  $('.centerdiv').empty();
  var view = new App.Views.AllProfilesView();
});

approuter.on('route:profiles/:user', function(actions) {
  console.log("router on ind profile is running");
  $('.centerdiv').empty();
  var view = new App.Views.ProfilesView({model:e});
});

approuter.on('route:projects', function(actions) {
  console.log("router on projects is running");
  $('.centerdiv').empty();
  var view = new App.Views.AllProjectsView();
});

Backbone.history.start();