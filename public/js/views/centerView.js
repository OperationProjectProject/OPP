// var app = app || {};

App.Views.CenterView = Backbone.View.extend({
  className: 'centerdiv container',
  render: function() {
    console.log(" ---- CenterView rendered ---- ");
		$('#app').append(this.$el);
	},
	initialize: function() {
    this.render();
	}
});
