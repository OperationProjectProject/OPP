App.Views.EditProfileView = Backbone.View.extend({
  tagName: 'div' ,

  id: 'profile_editor' ,

  initialize: function(opts) {
    this.model = null;
    this.user_session = opts.user_session;
    this.logged_user = opts.logged_user;
    this.render();
    this.listenTo(this.collection, "update", this.render);
  } ,

  render: function() {
    $('body').css({'background':'rgba(240,240,240,1.0)'});
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

    //Create content box for user info box
    var $user_job_title_edit_box = $('<div>').attr({
      'class': 'content_box col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,
      'id': 'edit_title_box'
    });
    //Create content box for social links edit
    var $user_job_title_edit_card = $('<div>').attr({
      'class': 'card' ,
    });

    var $user_job_title_edit_legend = $('<legend>');
    $user_job_title_edit_legend.attr({
      'class': 'test test test'
    }).text('About Me');
    $user_job_title_edit_legend.append('<i class="fa fa-child fa-lg"></i>');
    $user_job_title_edit_card.append( $user_job_title_edit_legend );



    //Build User Name Label and input
    var $user_name_edit_label = $('<label>');
    $user_name_edit_label.attr({
      'for': 'user_name_input',
      'class': 'user_editor_input_label control-label'
    }).text("My Name");
    var $user_name_edit_input = $('<input type="text">');
    $user_name_edit_input.attr({
      'id': 'user_name_input',
      'class': 'form-control',
      'value': this.model.attributes.name
    });

    $user_job_title_edit_card.append( $user_name_edit_label );
    $user_job_title_edit_card.append( $user_name_edit_input );








    //Build User Title Label and input
    var $user_job_title_edit_label = $('<label>');
    $user_job_title_edit_label.attr({
      'for': 'user_title_input',
      'class': 'user_editor_input_label control-label'
    }).text("My Ideal Job Title");
    var $user_job_title_edit_input = $('<input type="text">');
    $user_job_title_edit_input.attr({
      'id': 'user_title_input',
      'class': 'form-control',
      'value': this.model.attributes.title
    });

    $user_job_title_edit_card.append( $user_job_title_edit_label );
    $user_job_title_edit_card.append( $user_job_title_edit_input );



    $user_job_title_edit_box.append( $user_job_title_edit_card );
    $row_02.append( $user_job_title_edit_box );








    //create row 03
    var $row_03 =  $('<div>').attr({
      'class': 'row' ,
      'id': 'row_03'
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


    var $edit_social_links_legend = $('<legend>');
    $edit_social_links_legend.attr({
      'class': 'test test test'
    }).text('Web Presence');
    $edit_social_links_legend.append('<i class="fa fa-desktop fa-lg"></i>');
    $edit_social_links_card.append( $edit_social_links_legend );







    $edit_social_links_box.append( $edit_social_links_card );
    $row_03.append( $edit_social_links_box );

    //Build social link editing elements
    if (this.model !== null) {
      //console.log(this.logged_user);
      //console.log(this.model.attributes);
      //Build unordered list for editing social urls
      var $social_urls = $('<ul class="social_link_editor_list">');

      //this.model.attributes.personal_site_url
      //Build list item with label and input for Personal Site URL
      var $personal_site_url_li = $('<li>');
      var $personal_site_url_label = $('<label class="social_link_editor_label">');
      var $personal_site_url_input = $('<input type="text" class="social_link_editor_input">');

      $personal_site_url_label.attr({
        'for': this.logged_user + '_personal_site_url_input',
        'class': 'control-label'
      })
      .text("Personal Website URL")
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

      //console.log(this.logged_user);
      $linkedin_url_label.attr({
        'for': this.logged_user + '_linkedin_url_input',
        'class': 'control-label'
      })
      .text("Linkedin URL")
      .prepend('<i class="fa fa-linkedin-square fa-lg"></i>');

      //console.log(this.model.attributes.linkedin_url);
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

      //console.log(this.logged_user);
      $twitter_url_label.attr({
        'for': this.logged_user + '_twitter_url_input' ,
        'class' :'control-label'
      })
      .text("Twitter URL")
      .prepend('<i class="fa fa-twitter fa-lg"></i>');

      //console.log(this.model.attributes.twitter_url);
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




//CREATE TOP THREE SKILLS INPUT CARD

    //create row 04
    var $row_04 =  $('<div>').attr({
      'class': 'row' ,
      'id': 'row_04'
    });
    //Create content box for top skills edit
    var $top_skills_edit_box = $('<div>').attr({
      'class': 'content_box col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,
      'id': 'top_skills_edit_box'
    });
    //Create content box for social links edit
    var $top_skills_edit_card = $('<div>').attr({
      'class': 'card' ,
    });

    $top_skills_edit_box.append( $top_skills_edit_card );
    $row_04.append( $top_skills_edit_box );



    //Build social link editing elements
    if (this.model !== null) {

      var $top_skills_legend = $('<legend>');
      $top_skills_legend.attr({
        'class': 'test test test'
      }).text('Top Skills');
      $top_skills_legend.append('<i class="fa fa-code-fork fa-lg"></i>');
      $top_skills_edit_card.append( $top_skills_legend );

      var $top_skills_edit_list = $('<ol class="top_skills_edit_list">');

      for ( var i = 0; i <3; i++ ) {
        console.log(i);
        var $top_skills_edit_li = $('<li>');

        var $top_skills_edit_label = $('<label>');
        $top_skills_edit_label.attr({
          'for': 'top_skill_' + (i+1),
          'class': 'form-group'
        })
        .text('0'+ (i + 1) + '.');

        $top_skills_edit_li.append( $top_skills_edit_label );


        var $top_skills_edit_input = $('<input type="text" class="top_skill_edit_input">');
        $top_skills_edit_input.attr({
          'id': 'top_skill_' + (i+1) ,
          'class': 'form-control',
          'value': this.model.attributes.top_skills[i]
        });
        //Append input to list item
        $top_skills_edit_li.append( $top_skills_edit_input );
        //Append list itemordered list
        $top_skills_edit_list.append( $top_skills_edit_li );
      }
      //Append ordered list to card
      $top_skills_edit_card.append( $top_skills_edit_list );
    }




//CREATE TOP TOP FIVE TOOLS INPUT CARD

    //create row 05
    var $row_05 =  $('<div>').attr({
      'class': 'row' ,
      'id': 'row_05'
    });
    //Create content box for top skills edit
    var $top_tools_edit_box = $('<div>').attr({
      'class': 'content_box col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,
      'id': 'top_tools_edit_box'
    });
    //Create content box for social links edit
    var $top_tools_edit_card = $('<div>').attr({
      'class': 'card' ,
    });

    $top_tools_edit_box.append( $top_tools_edit_card );
    $row_05.append( $top_tools_edit_box );



    //Build social link editing elements
    if (this.model !== null) {

      var $top_tools_legend = $('<legend>');
      $top_tools_legend.attr({
        'class': 'test test test'
      }).text('Top Tools');
      $top_tools_legend.append('<i class="fa fa-wrench fa-lg"></i>');
      $top_tools_edit_card.append( $top_tools_legend );

      var $top_tools_edit_list = $('<ol class="top_tools_edit_list">');

      for ( var i = 0; i < 5; i++ ) {
        console.log(i);
        var $top_tools_edit_li = $('<li>');

        var $top_tools_edit_label = $('<label>');
        $top_tools_edit_label.attr({
          'for': 'top_tools_' + (i+1),
          'class': 'form-group'
        })
        .text('0'+ (i + 1) + '.');
        $top_tools_edit_li.append($top_tools_edit_label);


        var $top_tools_edit_input = $('<input type="text" class="top_tools_edit_input">');
        $top_tools_edit_input.attr({
          'id': 'top_tools_' + (i+1) ,
          'class': 'form-control',
          'value': this.model.attributes.top_tools[i]
        });
        //Append input to list item
        $top_tools_edit_li.append( $top_tools_edit_input );
        //Append list itemordered list
        $top_tools_edit_list.append( $top_tools_edit_li );
      }
      //Append ordered list to card
      $top_tools_edit_card.append( $top_tools_edit_list );
    }






//Create row 6
//create row 01
var $row_06 =  $('<div>').attr({
  'class': 'row' ,
  'id': 'row_06'
});
//Create content box for basic info
var $edit_save_button_bottom_box = $('<div>').attr({
  'class': 'content_box col-sm-12 col-md-12 col-lg-12' ,
  'id': 'edit_save_button_bottom_box'
});

//console.log("create 'edit my profile' button for logged-in-users");
var $edit_my_profile_bottom_button = $( '<a>' ).attr({
  'class' : 'btn btn-primary btn-lg edit_save_button_bottom',
  'href': '#profiles/' + this.logged_user,
  'id': 'edit_my_profile_bottom_button'
}).text(
  "Save and Publish"
);


$edit_save_button_bottom_box.append( $edit_my_profile_bottom_button );
$row_06.append( $edit_save_button_bottom_box );




    this.$el.append( $row_01 );
    this.$el.append( $row_02 );
    this.$el.append( $row_03 );
    this.$el.append( $row_04 );
    this.$el.append( $row_05 );
    this.$el.append( $row_06 );
		$( ".centerdiv" ).prepend( this.$el );
	},
  events: {
    'click #save_and_publish_profile': 'update_profile',
    'click #edit_my_profile_bottom_button': 'update_profile'
  },
  update_profile: function() {
    console.log("%cupdate_profile","font-size: 2em; color: red;");
    console.log("linked in input: ", $('input[id="' + this.logged_user + '_linkedin_url_input"]').val());
    console.log("this user is: ", this.logged_user);
    //console.log(this.model);
    this.model.set({
      name: $('input[id="user_name_input"]').val(),
      title: $('input[id="user_title_input"]').val(),
      personal_site_url: $('input[id="' + this.logged_user + '_personal_site_url_input"]').val(),
  		linkedin_url:  $('input[id="' + this.logged_user + '_linkedin_url_input"]').val(),
  		twitter_url:  $('input[id="' + this.logged_user + '_twitter_url_input"]').val(),
      top_skills: [
        $('input[id="top_skill_1"]').val(),
        $('input[id="top_skill_2"]').val(),
        $('input[id="top_skill_3"]').val()
      ],
      top_tools: [
        $('input[id="top_tools_1"]').val(),
        $('input[id="top_tools_2"]').val(),
        $('input[id="top_tools_3"]').val(),
        $('input[id="top_tools_4"]').val(),
        $('input[id="top_tools_5"]').val()
      ]
    });
    console.log("this model is being sent:", this.model);
    this.model.save();
  }
});
