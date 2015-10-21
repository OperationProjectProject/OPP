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

	className: 'primary_nav container',

	render: function() {
    console.log(" ---- NavigationView rendered ---- ");

		//build nav list items
		var $home_li = $('<li class="nav_element">');
		var $profiles_li = $('<li class="nav_element">');
		var $projects_li = $('<li class="nav_element">');
		var $github_auth_li = $('<li class="nav_element">');

		//build nav links
		var $home_a = $('<a href="/" id="home_link" tabindex="1">').html('<img src="http://placehold.it/150x25?text=Home+Link">');
		var $profiles_a = $('<a href="/profiles" id="profiles_link" tabindex="3">').text('profiles');
		var $projects_a = $('<a href="/projects" id="projects_link" tabindex="4">').text('projects');
		var $github_auth_a = $('<a href="/login" id="login_link" tabindex="2">').text('Login With GitHub');

		//append links to list items
		$home_li.append( $home_a );
		$profiles_li.append( $profiles_a );
		$projects_li.append( $projects_a );
		$github_auth_li.append( $github_auth_a );

		//append list items to nav list
		this.$el.append($home_li);
		this.$el.append($profiles_li);
		this.$el.append($projects_li);
		this.$el.append($github_auth_li);
		$('#app').prepend(this.$el);
	},
	initialize: function() {
		this.render();
	},
	events: {
		//Event handling on the links ... ?
	}
});
