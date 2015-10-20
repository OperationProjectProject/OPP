// var app = app || {};
//This view will be consistent within every other view (except Sign-Up and Log-In view)

//1. Link/method to MainView
//2. Link/method to StudentsView
//3. Link/method to ProjectsView
//4. Link/method to ClassesView
//5. Link/method to SignUpView
//6. Link/method to LoginView

App.Views.NavigationView = Backbone.View.extend({
	tagName: 'ul',
	class: 'hello goodbye',

	render: function() {

		var $home_li = $('<li>');
		var $profiles_li = $('<li>');
		var $projects_li = $('<li>');
		var $github_auth_li = $('<li>');

		var $home_a = $('<a href="#"  tabindex="1">').html('<img src="http://placehold.it/100x100">');
		var $profiles_a = $('<a href="#" tabindex="3">').text('profiles');
		var $projects_a = $('<a href="#" tabindex="4">').text('projects');
		var $github_auth_a = $('<a href="#" tabindex="2">').text('Login With GitHub');

		$home_li.append( $home_a );
		$profiles_li.append( $profiles_a );
		$projects_li.append( $projects_a );
		$github_auth_li.append( $github_auth_a );

		this.$el.append($home_li);
		this.$el.append($profiles_li);
		this.$el.append($projects_li);
		this.$el.append($github_auth_li);
		$('#app').append(this.$el);
	},
	initialize: function() {
		this.render();
	},
	events: {

	}
});
