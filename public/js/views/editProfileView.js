App.Views.EditProfileView = Backbone.View.extend({
  tagName: 'div',

  id: 'profile_editor',

  render: function() {
    $('body').css({'background':'rgba(235,235,240,1.0)'});
    console.log("%cEditProfileView","color:rgba(210,210,210,1.0);font-size:1.35em;");

    //console.log(this.collection);
    this.$el.empty();
    var self = this;
    this.collection.models.forEach(function(e,i){
      if ( e.attributes.url_id === self.logged_user ) {
        self.model = e;
      }
    });

    if (this.model !== null) {
      console.log(self.model.attributes);

      var $social_urls = $('<ul class="social_links">');
      [ this.model.attributes.personal_site_url ,
        this.model.attributes.linkedin_url ,
        this.model.attributes.twitter_url
      ].forEach( function( e, i, arr ){
        if (e) {
          console.log("%c" + e , "color:rgba(200,100,240,1.0); font-size: 1em;");
          var $label = $('<label>');
          var $input = $('<input type="text">');
          var $list_item = $('<li class="social_link_list_item">');

          if ( e === self.model.attributes.personal_site_url ) {
            //console.log("site url");
            $label.attr({
              'for': self.logged_user + '_personal_site_url_input',
              'class': 'control-label'
            })
            .text("My website")
            .prepend('<i class="fa fa-bullseye fa-lg"></i>');
            $input.attr({
              'id': self.logged_user + '_personal_site_url_input',
              'placeholder': e,
              'class': 'form-control'
            });
          } else if ( e === self.model.attributes.linkedin_url ) {
            //console.log("linkedin url");
            $label.attr({
              'for': self.logged_user + '_linkedin_url_input' ,
              'class': 'control-label'
            })
            .text("Linkedin")
            .prepend('<i class="fa fa-linkedin-square fa-lg"></i>');
            $input.attr({
              'id': self.logged_user + '_linkedin_url_input',
              'placeholder': e ,
              'class': 'form-control'
            });
          } else if ( e === self.model.attributes.twitter_url ) {
            //console.log("twitter url");
            $label.attr({
              'for': self.logged_user + '_twitter_url_input',
              'class': 'control-label'
            })
            .text("Twitter")
            .prepend('<i class="fa fa-twitter fa-lg"></i>');
            $input.attr({
              'id': self.logged_user + '_twitter_url_input',
              'placeholder': e ,
              'class': 'form-control'
            });
          }

          $list_item.append( $label );
          $list_item.append( $input );
          $social_urls.append( $list_item );
        }
      });
    }


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
      'href': '#profiles/' + this.logged_user,
      'id': 'save_and_publish_profile'
    }).text(
      "Save and Publish"
    );
    $edit_save_button_box.prepend( $my_content_header );
    $edit_save_button_box.append( $edit_my_profile );
    $row_01.append( $edit_save_button_box );
    this.$el.append( $row_01 );
    this.$el.append( $social_urls );
		$( ".centerdiv" ).prepend( this.$el );
	},
	initialize: function(opts) {
    this.model = null;
    this.user_session = opts.user_session;
    this.logged_user = opts.logged_user;
    this.render();
    this.listenTo(this.collection, "update", this.render);
	},
  events: {
    'click #save_and_publish_profile': 'update_profile'
  },
  update_profile: function() {
    console.log("%cupdate_profile","font-size: 2em; color: red;");
    console.log("linked in input: ", $('input[id="' + this.logged_user + '_linkedin_url_input"]').val());
    console.log("this user is: ", this.logged_user);
    //console.log(this.model);
    this.model.set({
      personal_site_url: $('input[id="' + this.logged_user + '_personal_site_url_input"]').val(),
  		linkedin_url:  $('input[id="' + this.logged_user + '_linkedin_url_input"]').val(),
  		twitter_url:  $('input[id="' + this.logged_user + '_twitter_url_input"]').val()
    });
    console.log("this model is being sent:", this.model);
    this.model.save();
  }
});
