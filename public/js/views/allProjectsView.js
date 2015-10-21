// var app = app || {};

App.Views.AllProjectsView = Backbone.View.extend({
  tagName: 'div',

  collection: app.project_content,

  render: function() {
    console.log(" ---- AllProjectsView rendered ---- ");
	},

  initialize: function() {
    this.render();
	},

  events: {

  }

});
