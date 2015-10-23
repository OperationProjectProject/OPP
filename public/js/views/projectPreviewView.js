//this is the profile preview View
//
App.Views.ProjectPreviewView = Backbone.View.extend({
  tagName: 'li' ,
  className: 'project_preview',
  render: function(){
    var $project_link = $('<a href="/#projects/'+this.model.attributes.project_urlid+'" id="projects_link" tabindex="3">').text(this.model.attributes.title + " -- Link to Project");
    this.$el.append($project_link);
    $(".centerdiv").prepend(this.$el);
  } ,
  initialize: function(){
    this.render();
  },
  events:{
    "click":"link"
  },
  link: function(){
    console.log("project view rendered");
    $('.centerdiv').empty();
    var view = new App.Views.ProjectView({model:this.model});
  }
});
