// var app = app || {};

App.Views.ProfileView = Backbone.View.extend({
  render: function() {
    console.log(" ---- ProfileView rendered ---- ");
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
