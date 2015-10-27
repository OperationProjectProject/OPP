App.Views.FooterView = Backbone.View.extend({
	tagName: 'footer' ,

	className: 'footer',

	render: function() {
		console.log("%cFooterView","color:rgba(200,200,200,1.0);font-size:1.25em;");

		var $container = $( '<div class="container">' );

		var $paragraph = $('<p>').text('© 2015 Operation Project(project)');

		$container.append( $paragraph );

		this.$el.append( $container );

		$('#app').append(this.$el);
	},
	initialize: function() {
		this.render();
	}
});
