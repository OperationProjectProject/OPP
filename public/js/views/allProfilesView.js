// var app = app || {};

App.Views.AllProfilesView = Backbone.View.extend({
  tagName: 'ul',

  className: 'all_profiles_view',

  render: function() {
    console.log("AllProfilesView");
    //console.log(this);
    var self = this;
    //console.log(self);
    //console.log(self.$el);
    //iterate through all of the models in this collection
    this.collection.models.forEach(function(e,i){
      //Pseudocode for appending individual profile previews to the DOM as li's, children of this ul
      //li SubView ==> create new instance of ProfilePreviewView ==> var profile_preview = new ProfilePreviewView({model:e});
        //Pass the new instance this model ==> {model: e}
        //Attach the new instance to self ==> self.$el.append(profile_preview.$el)
      var profile_preview = new App.Views.ProfilePreviewView({model:e});
      //console.log(profile_preview);
      self.$el.append(profile_preview.$el);
    });

		$(".centerdiv").prepend(this.$el);
	},

  initialize: function() {
    this.collection = app.profile_content;
    this.render();
	},

  events: {

	}

});
