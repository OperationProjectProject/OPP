App.Views.EditProfileView = Backbone.View.extend({
  render: function() {
    $('body').css({'background':'rgba(235,235,240,1.0)'});
    console.log("%cEditProfileView","color:rgba(210,210,210,1.0);font-size:1.35em;");

    console.log(this.model);
    //create row 01
    var $row_01 =  $('<div>').attr({
      'class': 'row' ,
      'id': 'row_01'
    });
    //Create content box for basic info
    var $edit_save_button_box = $('<div>').attr({
      'class': 'content_box col-sm-12 col-md-12 col-lg-12' ,
      'id': 'edit_save_button_box'
    });

    var $my_content_header = $( '<h2>' ).addClass('my_content_header' ).text( 'My Profile Editor' );

    console.log("create 'edit my profile' button for logged-in-users");
    var $edit_my_profile = $( '<a>' ).attr({
      'class' : 'btn btn-primary btn-lg edit_save_button',
      'href': '#profiles/' + this.logged_user
    }).text(
      "Save and Publish"
    );
    $edit_save_button_box.prepend( $my_content_header );
    $edit_save_button_box.append( $edit_my_profile );
    $row_01.append( $edit_save_button_box );
    this.$el.append( $row_01 );
		$( ".centerdiv" ).prepend( this.$el );
	},
	initialize: function(opts) {
    this.user_session = opts.user_session;
    this.logged_user = opts.logged_user;
    this.render();
	}
});
