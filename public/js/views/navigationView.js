//Navigation View
//
//
App.Views.NavigationView = Backbone.View.extend({
	tagName: 'nav',

	className: 'navbar navbar-default',

	render: function() {
		console.log("%cNavigationView","color:rgba(200,200,200,1.0);font-size:1.25em;");

		//add role="navigtion" to this nav element
		var $container = $('<div class="container">');

		//navbar-header
		var $navbar_header = $('<div class="navbar-header">');


		var $toggle_button = $('<button>').attr({
			"class": 'navbar-toggle collapsed' ,
			"data-toggle": 'collapse' ,
			"data-target": '#bs-example-navbar-collapse-1'
		});

		var $sr_toggle = $( '<span class="sr-only">' ).text( 'Toggle Navigation' );
		var $hamburger = $( '<span>' ).text( 'Menu' );

		$toggle_button.append( $sr_toggle );
		$toggle_button.append( $hamburger );

		var randomNinjaEntrance = function() {
			//console.log("randomNinjaEntrance");
			var str = "hello ---- this is the string that has a lot of words, but when this function works, this string will actually be and empty string, or an animate css class name";
			//console.log("str: " , str);
			function getRandomIntInclusive(min, max) {
			  return Math.floor(Math.random() * (max - min + 1)) + min;
			}
			var diceRoll = getRandomIntInclusive( 1 , 21 );
			//console.log("DiceRoll: " , diceRoll );
			switch (diceRoll) {
			  case 1:
					str = "bounceInRight";
			    break;
			  case 2:
					str = "bounceInLeft";
			    break;
			  case 3:
					str = "bounceInDown";
			    break;
			  case 4:
					str = "bounceInUp";
			    break;
			  case 5:
					str = "zoomin";
					break;
			  case 6:
					str = "fadeInDownBig";
			    break;
				case 7:
					str = "fadeInUpBig";
				  break;
				case 8:
					str = "fadeIn";
					break;
				case 9:
					str = "fadeIn";
					break;
				case 10:
					str = "";
					break;
				case 11:
					str = "";
					break;
				case 12:
					str = "bounceInTop";
					break;
				case 13:
					str = "fadeIn";
					break;
				case 14:
					str = "";
					break;
				case 16:
					str = "";
					break;
				case 17:
					str = "";
					break;
				case 18:
					str = "";
					break;
				case 19:
					str = "";
					break;
				case 20:
					str = "fadeIn";
					break;
				case 21:
					str = "";
					break;
			  default:
			    str = "";
			}
			return str;
		}

		var $brand_link = $( '<a class="navbar-brand">' ).attr( 'href', '#' );
		var $demo_day_ninja_h1 = $( '<h1 id="brand_logo_h1">' )
			.html('	<span class="logo_demo_day">DemoDay</span> \
							<span class="logo_dot animated fadeIn">.</span> \
							<span class="logo_ninja animated ' + randomNinjaEntrance() + '">Ninja</span>');

		$brand_link.append( $demo_day_ninja_h1 );

		$navbar_header.append( $toggle_button );
		$navbar_header.append( $brand_link );

		//collapse container
		var $navbar_collapse = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">');

		//nav links -- unordered list
		var $nav_links = $('<ul class="nav navbar-nav primary_site_content_links">');

		//Build nav links -- anchor elements
		var $profiles_link_a = $('<a href="#profiles" id="profiles_link">').text('profiles').addClass('navigation_link');
		var $projects_link_a = $('<a href="#projects" id="projects_link">').text('projects').addClass('navigation_link');

		//Build nav links -- list items
			//And append the anchor elements to their parent list items
		var $profiles_link_li = $('<li>').append( $profiles_link_a );
		var $projects_link_li = $('<li>').append( $projects_link_a );


		console.log( "%c active_link: " + this.active_link , "color:rgba(220,120,120,0.8); font-size:2em;")
		if ( this.active_link === "profiles_link_active" ) {
			$( $profiles_link_a ).parent().addClass("active");
			$( $profiles_link_a ).append('<span class="sr-only">(current)</span>');
		} else if ( this.active_link === "projects_link_active" ) {
			$( $projects_link_a ).parent().addClass("active");
			$( $projects_link_a ).append('<span class="sr-only">(current)</span>');
		}






		//Append profile and project links to their parent unordered list
		$nav_links.append( $profiles_link_li );
		$nav_links.append( $projects_link_li );
		//Build Log Widget, and append it to it's parent unordered list
		var $log_widget_list = $('<ul class="nav navbar-nav navbar-right">');
		this.log_Widget_View = new App.Views.LogWidgetView({
			user_session: this.user_session ,
			current_url: this.current_url
		});
		$log_widget_list.append( this.log_Widget_View.$el );

		//Append ul to the collapse div
		$navbar_collapse.append( $nav_links );
		$navbar_collapse.append( $log_widget_list );

		//Attach navbar header and navbar collapse to the fluid container
		$container.append( $navbar_header );
		$container.append( $navbar_collapse );


		this.$el.append( $container );

		//attach nav bar to #app div
		$('#app').prepend(this.$el);























/*

		//build the parent ul
		var $ul = $('<ul class="container navbar">');

		//build nav list items
		var $home_li = $('<li class="nav_element">');
		var $github_auth_li = $('<li class="nav_element">');
		var $profiles_li = $('<li class="nav_element">');
		var $projects_li = $('<li class="nav_element">');


		//build nav links
		var $home_a = $('<a href="/" id="home_link" tabindex="1">').html('<img src="http://placehold.it/150x25?text=Home+Link">');
		var $github_auth_a = $('<a href="/auth/github" id="login_link" tabindex="2">').text('Login With GitHub');
		var $profiles_a = $('<a href="#profiles" id="profiles_link" tabindex="3">').text('profiles');
		var $projects_a = $('<a href="#projects" id="projects_link" tabindex="4">').text('projects');


		//append links to list items
		$home_li.append( $home_a );
		$github_auth_li.append( $github_auth_a );
		$profiles_li.append( $profiles_a );
		$projects_li.append( $projects_a );

		//append list items to nav_ul
		[ $home_li , $github_auth_li , $profiles_li , $projects_li ].forEach(function( e, i ){
			 $nav_ul.append( e );
		});

		//attach $nav_ul to this.$el
		this.$el.append( $nav_ul );
*/

	},
	initialize: function(opts) {
		this.user_session = opts.user_session;
		this.current_url = opts.current_url;
		this.active_link = opts.active_link;
		this.render();
	}
});
