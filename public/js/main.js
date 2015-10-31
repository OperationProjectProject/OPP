var app = app || {};
$(function() { //when DOM is ready...

		if ( app.user_session ) {
			console.log( "%c session" , "font-size: 3em; color: blue;" );
		} else {
			console.log( "%c no session" , "font-size: 3em; color: red;" );
		}

		app.profile_content = new ProfileCollection();
		app.project_content = new ProjectCollection();
		app.router = new App.Router({
			user_session: app.user_session ,
			profiles: app.profile_content ,
			projects: app.project_content,
			logged_user: app.logged_user
		});
		//This sets up routes with hashtags. Like /#blog , /#products , /#users
		Backbone.history.start();
		//This sets up routes with hashtags. Like /blog , /products , /users
		//Backbone.history.start({ pushState: true });
});
