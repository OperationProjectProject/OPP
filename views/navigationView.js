// var app = app || {};
//This view will be consistent within every other view (except Sign-Up and Log-In view)

//1. Link/method to MainView
//2. Link/method to StudentsView
//3. Link/method to ProjectsView
//4. Link/method to ClassesView
//5. Link/method to SignUpView
//6. Link/method to LoginView

App.NavigationView = Backbone.View.extend({
	render: function() {
		var $divHome = $('<div id="home">');
		var $divProfiles = $('<div id="profiles">');
		var $divProjects = $('<div id="projects">');
		var $loginButton = $('<button name="button" id="loginButton">').text('Sign-In With GitHub');
		this.$el.append($divHome);
		this.$el.append($divProfiles);
		this.$el.append($divProjects);
		this.$el.append($loginButton);
		$('#app').append(this.$el);
	},
	initialize: function() {
		this.render();
	},
	events: {
	}
});
