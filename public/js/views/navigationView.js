//Navigation View
//
//
App.Views.NavigationView = Backbone.View.extend({
	tagName: 'nav',

	className: 'navbar navbar-default',

	render: function() {
		console.log("%cNavigationView","color:rgba(200,200,200,1.0);font-size:1.25em;");
		//console.log(this.collection);
		//add role="navigtion" to this nav element
		this.model = null;

		//console.log("%cTesting Area" ,"font-size:4em; color:rgba(200,200,200,1.0);");
		//console.log(this);
		console.log(this.collection);
		//console.log(this.model);
		//console.log(this.logged_user);
		//console.log(this.user_profile_img_url);
		var self = this;
		//console.log(self);
		this.collection.models.forEach(function(e,i){
			if ( self.logged_user === e.attributes.url_id ) {
				//console.log(self.user_profile_img_url);
				//console.log(self.logged_user);
				//console.log(e.attributes.url_id);
				//console.log(e.attributes.url_id);
				//console.log(self.user_profile_img_url);
				//console.log(e.attributes.profile_img_url);
				self.user_profile_img_url = e.attributes.profile_img_url;
				//console.log(self.user_profile_img_url);
			}
		});

		//console.log(this.user_profile_img_url);





		this.$el.empty();

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
					str = "bounceInLeft";
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
					str = "bounceInTop";
					break;
				case 17:
					str = "bounceInTop";
					break;
				case 18:
					str = "bounceInTop";
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

		console.log( "%cactive_link: " + this.active_link , "color:rgba(220,120,120,0.8); font-size:2em;")
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

		//determine which model in this.collection is the one that represents the logged in user
		//console.log(this);
		//console.log(this.collection);

		//console.log(this.collection.models);


		//console.log(this.collection.models.attributes);
		//console.log(this.collection.models.attributes);


		//console.log(this);
		//console.log(this.collection);
		//console.log(this.collection.models);
		//console.log(this.logged_user);


		//Capture profile_img_url of current logged_user_name
			//It should be an http:// link for user avatar img
			//And set it as profile_img_url  in the new instance of



		//this.collection.models.forEach( function( e, i ){

			//console.log(self);
			//console.log(self.logged_user);
			//console.log(self.user_profile_img_url);
				//console.log( e );
			//console.log( e.attributes );
			//console.log( e.attributes.profile_img_url );
			//console.log( e.attributes.url_id );
			//console.log( self.profile_img_url );
			//console.log( self.url_id );
			//if( e.attributes === self.logged_user ) {

				//console.log( e.attributes );
				//console.log( self.logged_user );
			//}

		//});

		//console.log(this);
		//console.log(this);



		var $log_widget_list = $('<ul class="nav navbar-nav navbar-right">');
		this.log_Widget_View = new App.Views.LogWidgetView({
			//Or the nav should just pass a string to the logwidget view
			profile_img_url: this.user_profile_img_url ,
			user_session: this.user_session ,
			current_url: this.current_url ,
			logged_user: this.logged_user
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

	},
	initialize: function(opts) {
		this.user_session = opts.user_session;
		this.current_url = opts.current_url;
		this.active_link = opts.active_link;
		this.logged_user = opts.logged_user;
		this.user_profile_img_url = null;
		this.render();

		//Why does this creat two navs?
		//:
		this.listenTo(this.collection, "update", this.render);
		//?
	}
});
