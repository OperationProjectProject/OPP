//Profile View
//
//
App.Views.ProfileView = Backbone.View.extend({
  tagName: "div",
  className: "profile_view animated fadeIn",
  render: function() {
    $('body').css({'background':'rgba(240,240,240,1.0)'});
    console.log("%cProfileView","color:rgba(200,200,200,1.0);font-size:1.25em;");
    console.log(this);

    for ( var i = 0; i < this.collection.models.length; i++) {
      if (this.collection.models[i].attributes.url_id === this.url_id){
        this.model = this.collection.models[i];

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



        if ( (this.user_session === true) && ( this.url_id === this.logged_user ) ) {
          console.log("create 'edit my profile' button for logged-in-users");

          var $my_content_header = $( '<h2>' ).addClass(' my_content_header' ).text( 'My Profile' );

          var $edit_my_profile = $( '<a>' ).attr({
            'class' : 'btn btn-primary btn-lg edit_save_button',
            'href': '#profiles/' + this.logged_user + '/edit'
          }).text(
            "Edit My Profile"
          );
          $edit_save_button_box.append( $my_content_header );
          $edit_save_button_box.append( $edit_my_profile );
        }

        $row_01.append( $edit_save_button_box );






        //create row 02
        var $row_02 =  $('<div>').attr({
          'class': 'row' ,
          'id': 'row_02'
        });

        //Create content box for basic info
        var $basic_info = $('<div>').attr({
          'class': 'content_box col-sm-12 col-md-12 col-lg-8' ,
          'id': 'basic_info'
        });

        //Create card for basic info
        var $basic_info_card = $('<div>').attr({
          'class': 'card'
        });

        //Create Profile Image this.model.attributes.profile_img_url
        var $profile_img = $('<img>').attr({
          'alt': this.model.attributes.name + " profile photo." ,
          'class': 'profile_img col-sm-12 col-md-6 col-lg-6' ,
          'id': this.model.attributes.url_id + '_profile_img' ,
        });

        if ( this.model.attributes.profile_img_url !== '') {
          $profile_img.attr({
            'src': this.model.attributes.profile_img_url
          });
        } else {
          $profile_img.attr({
            'src': 'https://dl.dropboxusercontent.com/u/18467418/placeholder_animations/diamond.gif'
          }).css('rgba(200,200,200,1.0)');
        }




        //Create profile headline div
        var $profile_headline = $('<div>').attr({
          'class': 'profile_headline col-sm-12 col-md-6 col-lg-6'
        });

        //Create Headline & Byline
        var $name = $('<h2 class="headline">').text(this.model.attributes.name);
        var $byline = $('<h3 class="byline">').text(this.model.attributes.title);

        //Append name and headline to profile headline div
        [ $name , $byline ].forEach(function( e, i ){
          //console.log(e);
          $profile_headline.append( e );
        });

        //Append profile image and profile headline to basic info card
        [ $profile_img , $profile_headline ].forEach(function( e, i ){
          //console.log(e);
          $basic_info_card.append( e );
        });

        //Append basic info card to basic info box
        $basic_info.append($basic_info_card);

        //Create Social Links Content Box
        var $social_links_div = $('<div>').attr({
          'class': 'content_box col-sm-12 col-md-12 col-lg-4' ,
          'id': 'social_links_div'
        });

        //Create Social Links Card
        var $social_links_card = $('<div>').attr({
          'class': 'card'
        });

        //Create Social Links List
        var $social_link_list = $('<ul class="social_links col-sm-12 col-md-12 col-lg-12">');
        var self = this;
        [ this.model.attributes.personal_site_url ,
          this.model.attributes.github_url ,
          this.model.attributes.linkedin_url ,
          this.model.attributes.twitter_url
        ].forEach( function( e, i, arr ){
          if (e) {
            console.log("%c" + e , "color:rgba(200,100,240,1.0); font-size: 1em;");
            var $anchor = $('<a target="_blank">');
            var $list_item = $('<li class="social_link_list_item">');
            if ( e === self.model.attributes.personal_site_url ) {
              //console.log("site url");
              $anchor.attr({
                'href': e
              })
              .text("My website")
              .prepend('<i class="fa fa-bullseye fa-lg"></i>');
            } else if ( e === self.model.attributes.github_url) {
              //console.log("github url");
              $anchor.attr({
                'href': e
              })
              .text("Github")
              .prepend('<i class="fa fa-github fa-lg"></i>');
            } else if ( e === self.model.attributes.linkedin_url ) {
              //console.log("linkedin url");
              $anchor.attr({
                'href': e
              })
              .text("Linkedin")
              .prepend('<i class="fa fa-linkedin-square fa-lg"></i>');
            } else if ( e === self.model.attributes.twitter_url ) {
              //console.log("twitter url");
              $anchor.attr({
                'href': e
              })
              .text("Twitter")
              .prepend('<i class="fa fa-twitter fa-lg"></i>');
            }
            $list_item.append( $anchor );
            $social_link_list.append( $list_item );
          }
        });

        //Append social link list to social list car
        $social_links_card.append( $social_link_list );
        //Append
        $social_links_div.append( $social_links_card );
        //Append basic info and social links to row 01
        $row_02.append( $basic_info );
        $row_02.append( $social_links_div );

        //create row 03
        var $row_03 =  $('<div>').attr({
          'class': 'row' ,
          'id': 'row_03'
        });

        //Create content box for skill pills
        var $skill_pills_box = $('<div>').attr({
          'class': 'content_box col-sm-12 col-md-12 col-lg-8 col-lg-2-offset' ,
          'id': 'skill_pills_box'
        });

        //Create card for skill pills
        var $skill_pill_card = $('<div>').attr({
          'class': 'card'
        });

        //Append card to box, and box to row
        $skill_pills_box.append( $skill_pill_card );
        $row_03.append( $skill_pills_box )


        console.log("%cTEST AREA","font-size: 3em; color: rgba(220,220,220,1.0);");

        var user_top_three_skills = this.model.attributes.top_skills;
        var user_top_five_tools = this.model.attributes.top_tools;
        var skill_pill_text_list = user_top_three_skills.concat( user_top_five_tools );


        console.log(user_top_three_skills);
        console.log(user_top_five_tools);
        console.log(skill_pill_text_list);

        function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex ;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
        }

        var shuffled_skill_pills = shuffle( skill_pill_text_list );


        console.log(shuffled_skill_pills);

        var $skill_pill_ul = $('<ul class="skill_pills col-sm-12 col-md-12 col-lg-12">');

        shuffled_skill_pills.forEach( function( e, i ) {
          var $skill_pill = $( '<li>' );
          $skill_pill.attr({
            'class': 'badge'
          }).text( e );
          //console.log(e);

          $skill_pill_ul.append( $skill_pill );
        });
        $skill_pill_card.append( $skill_pill_ul );


        //Append bootstrap rows to this view
        var self = this;
        [ $row_01 , $row_02 , $row_03 ].forEach(function( e, i ){
            self.$el.append( e );
        });
        //Attach this view to the DOM
        $(".centerdiv").append(this.$el);
      }
    }
	}, //this is the end of the render method

	initialize: function(opts) {
    this.url_id = opts.url_id;
    this.user_session = opts.user_session;
    this.logged_user = opts.logged_user;
    this.listenTo(this.collection, "update", this.render);
    this.render();
	}
});
