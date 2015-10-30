//Main View ==> rename this view "landing page view"
//
//
App.Views.MainView = Backbone.View.extend({
  tagName: 'div',
  className: 'main_view jumbotron',
  render: function(){
    $('body').css({'background':'rgba(240,235,235,1.0)'});
    $('.centerdiv').css({'background':'rgba(240,235,235,1.0)'});
		console.log("%cMainView","color:rgba(200,200,200,1.0);font-size:1.25em;");
    var $about = $('<h1 id="aboutDiv">').text("Discover the Hottest Tech Talent");
    var $profiles = $('<a id="profilesDiv" href="#profiles" class="btn btn-primary btn-lg">').text('Browse Profiles');
    var $projects = $('<a id="projectsDiv" href="#projects" class="btn btn-primary btn-lg">').text('Browse Projects');
    var divs = [$about, $profiles, $projects];
    this.$el.append(divs);
    $('.centerdiv').append(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
