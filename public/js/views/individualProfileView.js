//Profile View
//
//
App.Views.ProfileView = Backbone.View.extend({
  tagName: "div",
  className: "profile_view",
  render: function() {
    $('body').css({'background':'rgba(235,235,240,1.0)'});
    console.log("%cProfileView","color:rgba(200,200,200,1.0);font-size:1.25em;");

    for ( var i = 0; i < this.collection.models.length; i++) {
      if (this.collection.models[i].attributes.url_id === this.url_id){
        this.model = this.collection.models[i];

        //create row 01
        var $row_01 =  $('<div>').attr({
          'class': 'row' ,
          'id': 'row_01'
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
          'src': this.model.attributes.profile_img_url ,
          'alt': this.model.attributes.name + " profile photo." ,
          'class': 'profile_img col-sm-12 col-md-6 col-lg-6' ,
          'id': this.model.attributes.url_id + '_profile_img' ,
        });

        //Create profile headline div
        var $profile_headline = $('<div>').attr({
          'class': 'profile_headline col-sm-12 col-md-6 col-lg-6'
        });

        //Create Headline & Byline
        var $name = $('<h2 class="headline">').text(this.model.attributes.name);
        var $byline = $('<h3 class="byline">').text(this.model.attributes.title);

        //Append name and headline to profile headline div
        [ $name , $byline ].forEach(function( e, i ){
          console.log(e);
          $profile_headline.append( e );
        });

        //Append profile image and profile headline to basic info card
        [ $profile_img , $profile_headline ].forEach(function( e, i ){
          console.log(e);
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
        var $social_link_list = $('<ul class="social_links">');
        var self = this;
        [ this.model.attributes.personal_site_url ,
          this.model.attributes.github_url ,
          this.model.attributes.linkedin_url ,
          this.model.attributes.twitter_url
        ].forEach( function( e, i, arr ){
          if (e) {
            console.log("%c " + e , "color:purple; font-size: 2em;");
            var $anchor = $('<a target="_blank">');
            var $list_item = $('<li class="social_link_list_item">');
            if ( e === self.model.attributes.personal_site_url ) {
              console.log("site url");
              $anchor.attr({
                'href': e
              })
              .text("My website")
              .prepend('<i class="fa fa-bullseye fa-lg"></i>');
            } else if ( e === self.model.attributes.github_url) {
              console.log("github url");
              $anchor.attr({
                'href': e
              })
              .text("Github")
              .prepend('<i class="fa fa-github fa-lg"></i>');
            } else if ( e === self.model.attributes.linkedin_url ) {
              console.log("linkedin url");
              $anchor.attr({
                'href': e
              })
              .text("Linkedin")
              .prepend('<i class="fa fa-linkedin-square fa-lg"></i>');
            } else if ( e === self.model.attributes.twitter_url ) {
              console.log("twitter url");
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
        $row_01.append( $basic_info );
        $row_01.append( $social_links_div );

        //create row 02
        var $row_02 =  $('<div>').attr({
          'class': 'row' ,
          'id': 'row_02'
        });

        //Create content card for social links
        var $skills_and_tools_div = $('<div>').attr({
          'class': 'content_box col-sm-12 col-sm-4 col-lg-4' ,
          'id': 'skills_and_tools_div'
        });

        //Create Skills list
        var $top_skills = $( '<ol class="top_skills">' ).text( "Top 3 Skills: " );
        this.model.attributes.top_skills.forEach(function( e, i ){
          $li = $( '<li>' ).text( e );
          $top_skills.append( $li );
        });

        //Create Tools List
        var $top_tools = $( '<ol class="top_tools">' ).text( "Top 5 Tools: " );
        this.model.attributes.top_tools.forEach(function( e, i ){
          $li = $( '<li>' ).text( e );
          $top_tools.append( $li );
        });

        //Attach top skills and top tools to skills and tools div
        [ $top_skills , $top_tools ].forEach(function( e, i ){
            $skills_and_tools_div.append( e );
        });

        //Create Work Status
        var $work_status = $( '<ul class="work_status">' ).text( "Work Status: " );
        this.model.attributes.work_status.forEach(function( e, i ){
          $li = $( '<li>' ).text( e );
          $work_status.append( $li );
        });

        //Create js tidbit
        var $js_tidbit = $( '<div>' ).html('<span class="question">What is your favorite thing about Javascript?</span><br>');
        var $js_answer = $( '<span class="answer">' ).text( this.model.attributes.js_tidbit );
        $js_tidbit.append( $js_answer );

        //Create dream job
        var $dream_job = $( '<div>' ).html('<span class="question">What is your dream job? </span><br>');
        var $dream_answer = $( '<span class="answer">' ).text( this.model.attributes.dream_job );
        $dream_job.append( $dream_answer );

        //Append bootstrap rows to this view
        var self = this;
        [ $row_01 , $row_02 ].forEach(function( e, i ){
            self.$el.append( e );
        });

        this.$el.append($top_skills);
        this.$el.append($top_tools);
        this.$el.append($js_tidbit);
        this.$el.append($dream_job);

        //Attach this view to the DOM
        $(".centerdiv").append(this.$el);
      }
    }
	}, //this is the end of the render method

	initialize: function(opts) {
    this.url_id = opts.url_id;
    this.listenTo(this.collection, "update", this.render);
    this.render();
	}
});
