// var app = app || {};

App.Views.AllProjectsView = Backbone.View.extend({
  tagName: 'ul' ,

  className: 'all_projects_view' ,

  collection: app.project_content ,

  render: function() {
    console.log(" ---- AllProjectsView rendered ---- ");
    var self = this;
    this.collection.models.forEach(function(e,i){
      var profile_preview = new App.Views.ProjectPreviewView({model:e});
      self.$el.append(profile_preview.$el);
    });
		$(".centerdiv").prepend(this.$el);
	} ,

  initialize: function() {
    this.listenTo(this.collection, "update", this.render);
    this.render();
	}
});
