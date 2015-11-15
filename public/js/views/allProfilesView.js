//All Profiles View
//
//
App.Views.AllProfilesView = Backbone.View.extend({
  tagName: 'ul',

  className: 'all_profiles_view row',

  id: 'profiles_preview_list',

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

    if ( this.alphabetical === true ) {
      this.alphabetize_preview_links();
    }


		$(".centerdiv").prepend(this.$el);
	},

  initialize: function( opts ) {
    this.alphabetical = opts.alphabetical;
    this.render();
    this.listenTo(this.collection, "update", this.render);
	} ,

  alphabetize_preview_links: function() {
    if ( (this.$el instanceof $) && ( this.tagName === 'ul' || this.tagName === 'ol') ) {
      console.log( "Alphabetize Links" );
      var $list_items = this.$el.children('li');
      // console.log( $list_items );
      // console.log( typeof $list_items );
      // console.log( $list_items instanceof $);
      // console.log( $list_items === this.$el );
      //Sort the list items
      $list_items.sort( function( a, b ){
      	var an = a.getAttribute( 'id' ),
      		  bn = b.getAttribute( 'id' );
      	if( an > bn ) { return 1; }
      	if( an < bn ) { return -1; }
      	return 0;
      });
      $list_items.detach().appendTo(this.$el);
    } else {
      console.log( "Something is broken in: " + this.id );
    }
  }
});
