// var app = app || {};

App.Views.AllProjectsView = Backbone.View.extend({
  tagName: 'div',

  collection: app.project_content,

  render: function() {
    console.log(" ---- AllProfilesView rendered ---- ");
    var $p = $('<p>').text("This is the profile page and these are the projects:");
    this.$el.append($p);
		$(".centerdiv").prepend(this.$el);
	},

  initialize: function() {
    this.render();
	},

  events: {

	}

});
