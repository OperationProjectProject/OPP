//Main View ==> rename this view "landing page view"
//
//
App.Views.MainView = Backbone.View.extend({
  tagName: 'div',
  className: 'main_view',
  render: function(){
		console.log("%cMainView","color:rgba(200,200,200,1.0);font-size:1.25em;");
    var $divAbout = $('<div id="aboutDiv">').text('Discover The Hottest Tech Talent In Portland (Check Footer Below)');
    var $profiles = $('<a id ="profilesDiv" href="#profiles">').text('Browse Profiles');
    var $projects = $('<a id ="projectsDiv" href="#projects">').text('Browse Projects');
    var divs = [$divAbout, $profiles, $projects];
    this.$el.append(divs);
    $('.centerdiv').append(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
