// var app = app || {};

App.Views.AllProjectsView = Backbone.View.extend({
  tagName: 'ul',

  className: 'all_projects_view',

  collection: app.project_content,

  render: function() {
    console.log(" ---- AllProjectsView rendered ---- ");

    var self = this;

    this.collection.models.forEach(function(e,i){
      console.log(e.attributes.title);
      // console.log(e.attributes.mvp);

      var profile_preview = new App.Views.ProjectPreviewView({model:e});
      //console.log(profile_preview);
      self.$el.append(profile_preview.$el);
    });

		$(".centerdiv").prepend(this.$el);
	},

  initialize: function() {
    this.collection = app.project_content;
    this.render();
	},

  events: {

	}

});
