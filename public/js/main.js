var app = app || {};

app.user_session = false;

$(function() { //when DOM is ready...
		app.profile_content = new ProfileCollection();
		app.project_content = new ProjectCollection();
		app.router = new App.Router({
			user_session: app.user_session ,
			profiles: app.profile_content ,
			projects: app.project_content
		});
		Backbone.history.start();
});
