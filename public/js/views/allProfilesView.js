App.Views.AllProfilesView = Backbone.View.extend({
  collection: app.profile_content,
  render: function() {
    console.log("I am a new allprofiles view");
	},
	initialize: function() {
    this.render();
	},
	events: {
	}
});
