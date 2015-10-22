// var app = app || {};

App.Views.AllProfilesView = Backbone.View.extend({
  tagName: 'ul',

  className: 'all_profiles_view',

  render: function() {
    console.log(" ---- AllProfilesView rendered ---- ");

    //Mini views in the console
    this.collection.models.forEach(function(e,i){
      console.log("====================================================================================================");
      console.log("%c" + e.attributes.name,
        "color:rgba(51,51,51,1.0);\
        font-size:2em;\
        text-transform:uppercase;");
      console.log("%c" + e.attributes.title,
        "color:rgba(51,51,51,1.0);\
        font-size:1.25em;\
        text-transform:uppercase;");
      console.log("  - "+ "%c" + e.attributes.github_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
      console.log("  - "+ "%c" + e.attributes.personal_site_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
      console.log("  - "+ "%c" + e.attributes.linkedin_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
      console.log("  - "+ "%c" + e.attributes.twitter_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
      console.log(e.attributes);
      console.log("\n\n\n");
    });

    var $p = $('<p>').text("This is the profile page and these are the profiles:");
    this.$el.append($p);
		$(".centerdiv").prepend(this.$el);
	},

  initialize: function() {
    this.collection = app.profile_content;
    this.render();
	},

  events: {

	}

});
