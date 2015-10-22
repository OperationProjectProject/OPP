// var app = app || {};

App.Views.AllProfilesView = Backbone.View.extend({
  tagName: 'ul',

  className: 'all_profiles_view',

  render: function() {
    console.log(" ---- AllProfilesView rendered ---- ");
    //console.log(this);
    var self = this;
    //console.log(self);
    //console.log(self.$el);
    //iterate through all of the models in this collection
    this.collection.models.forEach(function(e,i){
      //Mini views in the console
      console.log("====================================================================================================");
      //console.log(e instanceof Backbone.Model);
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
      //console.log(e.attributes);
      console.log("\n\n\n");


      //Pseudocode for appending individual profile previews to the DOM as li's, children of this ul
      //li SubView ==> create new instance of ProfilePreviewView ==> var profile_preview = new ProfilePreviewView({model:e});
        //Pass the new instance this model ==> {model: e}
        //Attach the new instance to self ==> self.$el.append(profile_preview.$el)


      var profile_preview = new App.Views.ProfilePreviewView({model:e});
      //console.log(profile_preview);
      self.$el.append(profile_preview.$el);
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
