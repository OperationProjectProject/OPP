App.Views.FooterView = Backbone.View.extend({
	tagName: 'footer' ,

	className: 'footer container',

	render: function() {
		console.log("%cFooterView","color:rgba(200,200,200,1.0);font-size:1.25em;");
		var $paragraph = $('<div>').text('© 2015 Operation Project Project. Authors: Patrick Harry, Matt Kelley, Adam Taitano');
		this.$el.append($paragraph);
		$('#app').append(this.$el);
	},
	initialize: function() {
		this.render();
	}
});
