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

    //console.log("create 'edit my profile' button for logged-in-users");
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




    //create row 02
    var $row_02 =  $('<div>').attr({
      'class': 'row' ,
      'id': 'row_02'
    });
    //Create content box for social links edit
    var $edit_social_links_box = $('<div>').attr({
      'class': 'content_box col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,
      'id': 'edit_social_links_box'
    });
    //Create content box for social links edit
    var $edit_social_links_card = $('<div>').attr({
      'class': 'card' ,
    });

    $edit_social_links_box.append( $edit_social_links_card );
    $row_02.append( $edit_social_links_box );

    //Build social link editing elements
    if (this.model !== null) {
      console.log(this.logged_user);
      console.log(this.model.attributes);
      console.log("%c TEST AREA" , "color:rgba(200,100,240,1.0); font-size: 2em;");
      //Build unordered list for editing social urls
      var $social_urls = $('<ul class="social_link_editor_list">');

      //this.model.attributes.personal_site_url
      //Build list item with label and input for Personal Site URL
      var $personal_site_url_li = $('<li>');
      var $personal_site_url_label = $('<label class="social_link_editor_label">');
      var $personal_site_url_input = $('<input type="text" class="social_link_editor_input">');

      $personal_site_url_label.attr({
        'for': this.logged_user + '_personal_site_url_input'
      })
      .text("My website")
      .prepend('<i class="fa fa-bullseye fa-lg"></i>');

      $personal_site_url_input.attr({
        'id': this.logged_user + '_personal_site_url_input',
        'class': 'form-control',
        'value': this.model.attributes.personal_site_url
      });

      //Attach personal_site_url label and input to personal_site_url list item
      [ $personal_site_url_label ,
        $personal_site_url_input
      ].forEach(function(e,i){
          $personal_site_url_li.append(e);
      });

      //this.model.attributes.linkedin_url
      //Build list item with label and input for Linkedin URL
      var $linkedin_url_li = $('<li>');
      var $linkedin_url_label = $('<label class="social_link_editor_input">');
      var $linkedin_url_input = $('<input type="text" class="social_link_editor_input">');

      console.log(this.logged_user);
      $linkedin_url_label.attr({
        'for': this.logged_user + '_linkedin_url_input'
      })
      .text("Linkedin")
      .prepend('<i class="fa fa-linkedin-square fa-lg"></i>');

      console.log(this.model.attributes.linkedin_url);
      $linkedin_url_input.attr({
        'id': this.logged_user + '_linkedin_url_input',
        'class': 'form-control',
        'value': this.model.attributes.linkedin_url
      });

      //Attach linkedin_url label and input to linkedin_url list item
      [ $linkedin_url_label ,
        $linkedin_url_input
      ].forEach(function(e,i){
          $linkedin_url_li.append(e);
      });

      //this.model.attributes.twitter_url
      //Build list item with label and input for Twitter URL
      var $twitter_url_li = $('<li class="form-group">');
      var $twitter_url_label = $('<label>');
      var $twitter_url_input = $('<input type="text">');

      console.log(this.logged_user);
      $twitter_url_label.attr({
        'for': this.logged_user + '_twitter_url_input' ,
        'class' :'control-label'
      })
      .text("Twitter")
      .prepend('<i class="fa fa-twitter fa-lg"></i>');

      console.log(this.model.attributes.twitter_url);
      $twitter_url_input.attr({
        'id': this.logged_user + '_twitter_url_input',
        'class': 'form-control',
        'value': this.model.attributes.twitter_url
      });

      //Attach linkedin_url label and input to twitter list item
      [ $twitter_url_label ,
        $twitter_url_input
      ].forEach(function(e,i){
          $twitter_url_li.append(e);
      });

      //Attach social url list items to their parent unordered list
      [ $personal_site_url_li ,
        $linkedin_url_li ,
        $twitter_url_li
      ].forEach(function(e,i){
        $social_urls.append( e );
      });


      $edit_social_links_card.append($social_urls);

    }
















    this.$el.append( $row_01 );
    this.$el.append( $row_02 );
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
