//this is the profile preview View
//
App.Views.ProjectPreviewView = Backbone.View.extend({
  tagName: 'li' ,
  className: 'project_preview',
  render: function(){

    this.$el.text(this.model.attributes.title + " -- Link to Project");
    //console.log(this.model.attributes);
    //console.log(this.model);
    //console.log(this.model.attributes);
    //console.log("el: " , this.el);
    //console.log("$el: " , this.$el);
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
