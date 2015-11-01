//Log Widget View
//
//

App.Views.LogWidgetView = Backbone.View.extend({

  tagName: 'li',

  className: 'log_widget' ,

  render_no_user_session: function() {
    console.log("%cLogWidgetView","color:rgba(210,210,210,1.0);font-size:1.35em;");
    var $link = $('<a>').attr( 'href', "/auth/github?url=" + this.current_url ).text( 'Login with Github' );
    this.$el.append( $link );
    console.log( "%c" + $link.attr('href') ,"color:rgba(210,10,10,0.5);font-size:2em;");
    return this;
  } ,

  render_user_session: function() {
    console.log("%cLogWidgetView","color:rgba(210,210,210,1.0);font-size:1.35em;");
    this.$el.addClass('dropdown');

    //Build the dropdown link
    var $thumbnail_link = $('<a href="#">').attr({
      "id": "log_widget_toggle",
      "class": 'dropdown-toggle' ,
      "data-toggle": 'dropdown' ,
      "role": 'button' ,
      "aria-expanded": 'false'
    });
    var $thumbnail_img = $( '<img>' ).attr({
      src: 'http://placehold.it/35x35' ,
      alt: 'this is your profile image'
    });
    var $caret = $( '<span class="caret">' );
    $thumbnail_link.append( $thumbnail_img );
    $thumbnail_link.append( $caret );

    //Build the links
    $dropdown_links = $( '<ul class="dropdown-menu" role="menu">' );

    var logged_user_name = this.logged_user;


    $my_profile_link = $( '<li><a href="#profiles/'+logged_user_name+'">My Profile</a></li>' );
    $edit_my_profile_link = $( '<li><a href="#profiles">Edit My Profile</a></li>' );
    $my_projects_link = $( '<li><a href="#projects">My Projects</a></li>' );
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
    return this;
  } ,

  initialize: function( opts ) {
    this.current_url = opts.current_url;
    if ( opts.user_session === false ){
      //console.log("%c opts.user_session === false; ","color:rgba(210,10,10,1.0);font-size:2.5em;");
      this.user_session = false;
      this.render_no_user_session();
    } else {
      //console.log("%c opts.user_session === true; ","color:rgba(10,210,210,1.0);font-size:2.5em;");
      this.user_session = true;
      this.logged_user = opts.logged_user;
      this.render_user_session();
      console.log("%c logged_user: " , "font-size: 1.2em; color: blue;");
      console.log(opts.logged_user);
      console.log(this.model);
      // console.log("log", opts.logged_user);
    }

  }

});
