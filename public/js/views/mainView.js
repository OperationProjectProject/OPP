// var app = app || {};
//This view contains NavigationView, multiple links/methods, as well as individual divs for each link/method:

//1. Link/method to MainView
//2. Link/method to StudentsView
//3. Link/method to ProjectsView
//4. Link/method to ClassesView

//Create a Navigation View at the top of the page:
//var navigationView = new NavigationView
App.Views.MainView = Backbone.View.extend({
  render: function(){
    console.log(" ---- MainView rendered ---- ");
    var $divAbout = $('<div id="aboutDiv">').text('Discover The Hottest Tech Talent In Portland (Check Footer Below)');
    var $divProfiles = $('<div id ="profilesDiv">').text('Browse Profiles');
    var $divProjects = $('<div id ="projectsDiv">').text('Browse Projects');
    var divs = [$divAbout, $divProfiles, $divProjects];
    this.$el.append(divs);
    $('.centerdiv').append(this.$el);
  },
  initialize: function() {
    this.render();
  },
  addProfilesView: function() {
    this.remove();
    var profilesView = new App.Views.AllProfilesView();
  },
  addProjectsView: function() {
    this.remove();
    var projectsView = new App.Views.AllProjectsView();
  },
  events: {
    'click #profilesDiv' : 'addProfilesView',
    'click #projectsDiv' : 'addProjectsView'
  }
});
