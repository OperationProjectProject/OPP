App.Views.FooterView = Backbone.View.extend({
	tagName: 'footer' ,

	className: 'footer container',

	render: function() {
    console.log(" ---- FooterView rendered ---- ");
		var $paragraph = $('<div>').text('© 2015 Operation Project Project. Authors: Patrick Harry, Matt Kelley, Adam Taitano');
		this.$el.append($paragraph);
		$('body').append(this.$el);
	},
	initialize: function() {
		this.render();
	},
	events: {
	}
});
