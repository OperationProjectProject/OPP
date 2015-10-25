// var app = app || {};

App.Views.CenterView = Backbone.View.extend({
  className: 'centerdiv container',
  render: function() {
		console.log("%cCenterView","color:rgba(200,200,200,1.0);font-size:1.25em;");
		$('#app').append(this.$el);
	},
	initialize: function() {
    this.render();
	}
});
