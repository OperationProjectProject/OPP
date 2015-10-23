// var app = app || {};

App.Views.ProfileView = Backbone.View.extend({
  tagName: "div",

  className: "profile_view",

  render: function() {
    console.log(" ---- ProfileView rendered ---- ");
    // console.log("====================================================================================================");
    // console.log("%c" + this.model.attributes.name,
    //   "color:rgba(51,51,51,1.0);\
    //   font-size:2em;\
    //   text-transform:uppercase;");
    // console.log("%c" + this.model.attributes.title,
    //   "color:rgba(51,51,51,1.0);\
    //   font-size:1.25em;\
    //   text-transform:uppercase;");
    // console.log("  - "+ "%c" + this.model.attributes.github_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
    // console.log("  - "+ "%c" + this.model.attributes.personal_site_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
    // console.log("  - "+ "%c" + this.model.attributes.linkedin_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
    // console.log("  - "+ "%c" + this.model.attributes.twitter_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
    // console.log(this.model.attributes.top_skills);
    // console.log(this.model.attributes.top_tools);
    // console.log(this.model.attributes.js_tidbit);
    // console.log(this.model.attributes.work_status);
    // console.log(this.model.attributes.dream_job);
    // console.log(this.model.attributes.projects);
    console.log("\n\n\n");

    //Create Headline & Byline
    var $name = $('<h1 class="headline">').text(this.model.attributes.name);
    var $byline = $('<p class="byline">').text(this.model.attributes.title);

    //Create Social Links
    var $social_links = $('<ul class="social_links">');
    var $github_url = $('<a target="_blank">').attr("href", this.model.attributes.github_url).text("Github");
    var $personal_site_url = $('<a target="_blank">').attr("href", this.model.attributes.personal_site_url).text("My website");
    var $linkedin_url = $('<a target="_blank">').attr("href", this.model.attributes.linkedin_url).text("Linkedin");
    var $twitter_url = $('<a target="_blank">').attr("href", this.model.attributes.twitter_url).text("Twitter");
    [ $github_url , $personal_site_url , $linkedin_url , $twitter_url ].forEach( function(e,i) {
      if(e[0].href!=='http://localhost:3000/'){
        $li = $('<li>');
        $li.append(e);
      }
      $social_links.append( $li );
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

    //Create Work Status
    //Work Status Data Should be Formatted as an Array
    //This Code will not Work because work_status is currently a string
    /*
    var $work_status = $( '<ul class="work_status">' ).text( "Work Status: " );
    this.model.attributes.work_status.forEach(function( e, i ){
      $li = $( '<li>' ).text( e );
      $work_status.append( $li );
    });
    */

    //js tidbit
    var $js_tidbit = $( '<div>' ).html('<span class="question">What is your favorite thing about Javascript?</span>');
    var $js_answer = $( '<span class="answer">' ).text( this.model.attributes.js_tidbit );
    $js_tidbit.append( $js_answer );

    //dream job
    var $dream_job = $( '<div>' ).html('<span class="question">What is your dream job?</span>');
    var $dream_answer = $( '<span class="answer">' ).text( this.model.attributes.dream_job );
    $dream_job.append( $dream_answer );

    //Attach elements to this view
    this.$el.append($name);
    this.$el.append($byline);
    this.$el.append($social_links);
    this.$el.append($top_skills);
    this.$el.append($top_tools);
    this.$el.append($js_tidbit);
    this.$el.append($dream_job);

		$(".centerdiv").prepend(this.$el);
	},

	initialize: function() {
    this.render();
	},

	events: {
	}
});
