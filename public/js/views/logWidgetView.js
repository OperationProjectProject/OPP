//Log Widget View
//
//

App.Views.LogWidgetView = Backbone.View.extend({

  tagName: 'li',

  className: 'log_widget' ,

  render_no_user_session: function() {
    console.log("%cLogWidgetView","color:rgba(210,210,210,1.0);font-size:1.35em;");
    var $link = $('<a>').attr( 'href', "/auth/github?url=" + this.current_url ).text( 'Login with Github' );
    $link.attr({
      'id': 'login_button'
    });
    this.$el.append( $link );
    console.log( "%c" + $link.attr('href') ,"color:rgba(210,10,10,0.5);font-size:2em;");
    return this;
  } ,

  render_user_session: function() {


    console.log("%cLogWidgetView","color:rgba(210,210,210,1.0);font-size:1.35em;");
    //console.log( this.collection );
    //console.log( this.$el.parent());
    //console.log( this.$el.parent() instanceof $);


    //this.$el.parent().empty();

		this.$el.empty();

    this.$el.addClass('dropdown');

    //Build the dropdown link
    var $thumbnail_link = $('<a href="#">').attr({
      "id": "log_widget_toggle",
      "class": 'dropdown-toggle' ,
      "data-toggle": 'dropdown' ,
      "role": 'button' ,
      "aria-expanded": 'false'
    });


//Sunday work
    //Capture the url for this user's profile photo
    //var thumbnail_img_src_url_string = '';








    //console.log("this.collection: " , this.collection);
    //console.log(this.collection.models);

    //this.collection.models.forEach(function( e, i ){
      //console.log("%c" + i ,"font-size:4em; color:rgba(200,200,200,1.0);");
      //console.log(e.attributes.profile_img_url);
      //console.log(e);
      //console.log(e.attributes);
      //thumbnail_img_src_url_string = e.attributes.profile_img_url;
    //});
    //console.log(this.profile_img_url);


    var $thumbnail_img = $( '<img>' )
    if ( this.profile_img_url === null ) {
      $thumbnail_img.attr({
        src: 'http://placehold.it/100x300' ,
        alt: 'Your profile image.' ,
        id: 'log_widget_profile_img' ,
        class: 'animated fadeInDownBig user_avatar'
      });
    } else {
      $thumbnail_img.attr({
        src: this.profile_img_url ,
        alt: 'Your profile image.' ,
        id: 'log_widget_profile_img' ,
        class: 'user_avatar'
      });
    }



    var $caret = $( '<span class="caret">' );
    $thumbnail_link.append( $thumbnail_img );
    $thumbnail_link.append( $caret );

    //Build the links
    $dropdown_links = $( '<ul class="dropdown-menu" role="menu">' );

    var logged_user_name = this.logged_user;

    $my_profile_link = $( '<li><a href="#profiles/' + logged_user_name + '">My Profile</a></li>' );
    $edit_my_profile_link = $( '<li><a href="#profiles/' + logged_user_name + '/edit">Edit My Profile</a></li>' );
    $my_projects_link = $( '<li><a href="#projects/my_projects">My Projects</a></li>' );
    $logout_link = $( '<li><a href="/logout?url=' + this.current_url + '">Log out</a></li>' );

    [ $my_profile_link ,
      $edit_my_profile_link ,
      $my_projects_link ,
      $logout_link
    ].forEach( function(e,i) {
      $dropdown_links.append( e );
    });

    this.$el.append( $thumbnail_link );
    this.$el.append( $dropdown_links );
  } ,

  initialize: function( opts ) {
    //the string representing the current user-visible url, is passed to the logWdigetView,
    //from the navigation view
    this.current_url = opts.current_url;

    //check whether or not this is a user session
    if ( opts.user_session === false ){
      //This is not a user session
      //This view will be a "login button"
      this.user_session = false;
      this.render_no_user_session();
    } else {
      //This is a user session
      //So, this view will be a dropdown menu
      //console.log(this);
      this.profile_img_url = opts.profile_img_url;
      this.user_session = true;
      this.logged_user = opts.logged_user;
      this.render_user_session();
      this.listenTo(this.model, "change", this.render);
    }
  }

});
