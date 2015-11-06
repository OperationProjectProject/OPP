var app = app || {};
$(function() { //when DOM is ready...

		if ( app.user_session ) {
			console.log( "%csession" , "font-size: 2em; color: rgba(100,100,200,1.0);" );
		} else {
			console.log( "%cno session" , "font-size: 2em; color: rgba(200,100,100,1.0);" );
		}

		app.profile_content = new ProfileCollection();
		app.project_content = new ProjectCollection();
		app.router = new App.Router({
			user_session: app.user_session ,
			logged_user: app.logged_user,
			logged_user_key: app.logged_user_key,
			profiles: app.profile_content ,
			projects: app.project_content
		});
		//This sets up routes with hashtags. Like /#blog , /#products , /#users
		Backbone.history.start();
		//This sets up routes with hashtags. Like /blog , /products , /users
		//Backbone.history.start({ pushState: true });
});
