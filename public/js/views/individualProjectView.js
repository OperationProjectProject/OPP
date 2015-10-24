//Project View
//
//
App.Views.ProjectView = Backbone.View.extend({
  render: function() {
    console.log(" ---- ProjectView rendered ---- ");
    var $p = $('<p>').text("This is the project page for "+ this.model.attributes.title);
    this.$el.append($p);
    $(".centerdiv").prepend(this.$el);
	},
	initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.render();
	}
});
