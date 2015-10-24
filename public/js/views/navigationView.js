//Navigation View
//
//
App.Views.NavigationView = Backbone.View.extend({
	tagName: 'ul',

	className: 'primary_nav container',

	render: function() {
    console.log(" ---- NavigationView rendered ---- ");

		//build nav list items
		var $home_li = $('<li class="nav_element">');
		var $github_auth_li = $('<li class="nav_element">');
		var $profiles_li = $('<li class="nav_element">');
		var $projects_li = $('<li class="nav_element">');


		//build nav links
		var $home_a = $('<a href="/" id="home_link" tabindex="1">').html('<img src="http://placehold.it/150x25?text=Home+Link">');
		var $github_auth_a = $('<a href="#" id="login_link" tabindex="2">').text('Login With GitHub');
		var $profiles_a = $('<a href="#profiles" id="profiles_link" tabindex="3">').text('profiles');
		var $projects_a = $('<a href="#projects" id="projects_link" tabindex="4">').text('projects');


		//append links to list items
		$home_li.append( $home_a );
		$github_auth_li.append( $github_auth_a );
		$profiles_li.append( $profiles_a );
		$projects_li.append( $projects_a );

		//append list items to nav list
		var self = this;
		[ $home_li , $github_auth_li , $profiles_li , $projects_li ].forEach(function( e, i ){
			self.$el.append( e );
		});

		//attach nav bar to #app div
		$('#app').prepend(this.$el);
	},
	initialize: function() {
		this.render();
	}
});
