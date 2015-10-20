App.FooterView = Backbone.View.extend({
	render: function() {
		var $paragraph = $('<p>').text('© 2015 Operation Project Project. Authors: Patrick Harry, Matt Kelley, Adam Taitano');
		this.$el.append($paragraph);
		$('#app').append(this.$el);
	},
	initialize: function() {
		this.render();
	},
	events: {
	}
});
