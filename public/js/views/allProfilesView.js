//All Profiles View
//
//
App.Views.AllProfilesView = Backbone.View.extend({
  tagName: 'ul',

  className: 'all_profiles_view',

  render: function() {
    var self = this;
    this.collection.models.forEach( function(e,i){
      var profile_preview = new App.Views.ProfilePreviewView({model:e});
      self.$el.append( profile_preview.$el );
    });
		$(".centerdiv").prepend(this.$el);
	},

  initialize: function() {
    this.render();
    this.listenTo(this.collection, "update", this.render);
	}
});
