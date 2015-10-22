// var app = app || {};

App.Views.ProfileView = Backbone.View.extend({
  render: function() {
    console.log(" ---- ProfileView rendered ---- ");
    //console.log(this);
    //console.log(this.model);
    //console.log(this.el);
    //console.log(this.$el);
    console.log("====================================================================================================");
    console.log("%c" + this.model.attributes.name,
      "color:rgba(51,51,51,1.0);\
      font-size:2em;\
      text-transform:uppercase;");
    console.log("%c" + this.model.attributes.title,
      "color:rgba(51,51,51,1.0);\
      font-size:1.25em;\
      text-transform:uppercase;");
    console.log("  - "+ "%c" + this.model.attributes.github_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
    console.log("  - "+ "%c" + this.model.attributes.personal_site_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
    console.log("  - "+ "%c" + this.model.attributes.linkedin_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
    console.log("  - "+ "%c" + this.model.attributes.twitter_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");

    console.log("\n\n\n");

    var $p = $('<p>').text("This is the profile page of "+ this.model.attributes.name);
    this.$el.append($p);
		$(".centerdiv").prepend(this.$el);
	},
	initialize: function() {
    this.render();
	},
	events: {
	}
});
