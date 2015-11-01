App.Views.EditProfileView = Backbone.View.extend({
  render: function() {
    console.log(" ---- EditProfileView rendered ---- ");
    if (this.test) {
      console.log("test yes")
    } else {
      console.log("test no")
    }
    $text = $( '<h2>' ).text( 'Profile Editor' );
    this.$el.append( $text );
		$( ".centerdiv" ).prepend( this.$el );
	},
	initialize: function(opts) {
    this.test = opts.test;
    this.render();
	}
});
