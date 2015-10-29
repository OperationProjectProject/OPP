App.Views.AllProjectsView = Backbone.View.extend({
  tagName: 'ul' ,

  className: 'my_projects_view' ,

  render: function() {
		$(".centerdiv").prepend(this.$el);
	} ,

  initialize: function() {
    this.render();
	}
});
