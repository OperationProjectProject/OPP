// var app = app || {};

App.Views.AllProjectsView = Backbone.View.extend({
  collection: app.project_content,
  render: function() {
    console.log('you have made a new allprojects view');
	},
	initialize: function() {
    this.render();
	},
	events: {
	}
});
