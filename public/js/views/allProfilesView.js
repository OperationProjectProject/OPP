// var app = app || {};

App.Views.AllProfilesView = Backbone.View.extend({
  tagName: 'div',

  collection: app.profile_content,

  render: function() {
    console.log(" ---- AllProfilesView rendered ---- ");
    var $p = $('<p>').text("This is the profile page and these are the profiles:");
    this.$el.append($p);
		$(".centerdiv").prepend(this.$el);
	},

  initialize: function() {
    this.render();
	},

  events: {

	}

});
