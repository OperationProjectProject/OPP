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
/*
        console.log("%c" + this.model.attributes.name,
           "color:rgba(100,100,100,1.0);\
           font-size:2.25em;\
           font-weight:bold;\
           text-transform:uppercase;");
        console.log("%c" + this.model.attributes.title,
           "color:rgba(120,120,120,1.0);\
           font-size: 1.25em;\
           font-weight: bold;\
           text-transform:uppercase;");
        console.log("  - "+ "%c" + this.model.attributes.github_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
        console.log("  - "+ "%c" + this.model.attributes.personal_site_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
        console.log("  - "+ "%c" + this.model.attributes.linkedin_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
        console.log("  - "+ "%c" + this.model.attributes.twitter_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
        console.log(this.model.attributes.top_skills);
        console.log(this.model.attributes.top_tools);
        console.log(this.model.attributes.js_tidbit);
        console.log(this.model.attributes.work_status);
        console.log(this.model.attributes.dream_job);
        console.log(this.model.attributes.projects);
        console.log("\n\n\n");
*/

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
          console.log(e)
          $profile_headline.append( e );
        });

        //Append profile image and profile headline to basic info card
        [ $profile_img , $profile_headline ].forEach(function( e, i ){
          console.log(e)
          $basic_info_card.append( e );
        });

        //Append basic info card to basic info box
        $basic_info.append($basic_info_card);

        //Create content box for social links
        var $social_links_div = $('<div>').attr({
          'class': 'content_box col-sm-12 col-md-12 col-lg-4' ,
          'id': 'social_links_div'
        });

        //Create card for basic info
        var $social_links_card = $('<div>').attr({
          'class': 'card'
        });

        //Create Social Links
        var $social_link_list = $('<ul class="social_links">');
        var $personal_site_url = $('<a target="_blank">')
              .attr("href", this.model.attributes.personal_site_url)
              .text("My website")
              .prepend('<i class="fa fa-bullseye fa-lg"></i>');
        var $github_url = $('<a target="_blank">')
              .attr('href', this.model.attributes.github_url)
              .text('Github')
              .prepend('<i class="fa fa-github fa-lg"></i>');
        var $linkedin_url = $('<a target="_blank">')
              .attr("href", this.model.attributes.linkedin_url)
              .text("Linkedin")
              .prepend('<i class="fa fa-linkedin-square fa-lg"></i>');
        var $twitter_url = $('<a target="_blank">')
              .attr("href", this.model.attributes.twitter_url)
              .text("Twitter")
              .prepend('<i class="fa fa-twitter fa-lg"></i>');

        [ $personal_site_url , $github_url , $linkedin_url , $twitter_url ].forEach( function(e,i) {
          console.log(e[0].href);
          if ( e[0].href !== 'http://localhost:3000/' ) {
            var $social_link_list_item = $( '<li class="social_link_list_item">' );
            $social_link_list_item.append( e );
          }
          $social_link_list.append( $social_link_list_item );
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
    //console.log("%c " + this.url_id, "color:rgba(250,200,200,1.0);font-size:2.5em;");
    //console.log(this.collection);
	}
});
