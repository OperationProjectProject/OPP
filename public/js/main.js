var app = {};

$(function() { //when DOM is ready...
		app.profile_content = new ProfileCollection();
		app.project_content = new ProjectCollection();
		app.gui = new GUI();
		app.router = new App.Router();
		Backbone.history.start();
});
