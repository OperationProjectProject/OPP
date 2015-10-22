// var app = app || {};

App.Views.AllProjectsView = Backbone.View.extend({
  tagName: 'ul',

  className: 'all_profiles_view',

  collection: app.project_content,

  render: function() {
    console.log(" ---- AllProjectsView rendered ---- ");
    this.collection.models.forEach(function(e,i){
      console.log(e.attributes.title);
      console.log(e.attributes.mvp);
    });
    var $p = $('<p>').text("This is the profile page and these are the projects:");
    this.$el.append($p);
		$(".centerdiv").prepend(this.$el);
	},

  initialize: function() {
    this.collection = app.project_content;
    this.render();
	},

  events: {

	}

});
