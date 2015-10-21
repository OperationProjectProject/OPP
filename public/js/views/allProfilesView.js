// var app = app || {};

App.Views.AllProfilesView = Backbone.View.extend({
  tagName: 'div',

  collection: app.profile_content,

  render: function() {
    console.log(" ---- AllProfilesView rendered ---- ");
	},

  initialize: function() {
    this.render();
	},

  events: {

	}

});
