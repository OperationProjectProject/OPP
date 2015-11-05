//All Profiles View
//
//
App.Views.AllProfilesView = Backbone.View.extend({
  tagName: 'ul',

  className: 'all_profiles_view row',

  render: function() {
    $('body').css({'background':'rgba(240,240,240,1.0)'});
    console.log("%cAllProfilesView","color:rgba(200,200,200,1.0);font-size:1.25em;");
		console.log(this.collection);

    var self = this;
    this.collection.models.forEach( function(e,i){
      var profile_preview = new App.Views.ProfilePreviewView({model:e});
      function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var coinFlip = getRandomIntInclusive(0,1);
      //console.log(coinFlip);
      if (coinFlip === 0) {
        self.$el.append( profile_preview.$el );
      } else {
        self.$el.prepend( profile_preview.$el );
      }
    });

		$(".centerdiv").prepend(this.$el);
	},

  initialize: function() {
    this.render();
    this.listenTo(this.collection, "update", this.render);
	}
});
