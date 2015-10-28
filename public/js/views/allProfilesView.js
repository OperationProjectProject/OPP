//All Profiles View
//
//
App.Views.AllProfilesView = Backbone.View.extend({
  tagName: 'ul',

  className: 'all_profiles_view row',

  render: function() {
    $('body').css({'background':'rgba(244,244,252,1.0)'});
    $('.centerdiv').css({'background':'rgba(244,244,252,1.0)'});
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
