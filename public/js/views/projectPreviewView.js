//Project Preview View
//
//
App.Views.ProjectPreviewView = Backbone.View.extend({
  tagName: 'li' ,
  className: 'project_preview',
  render: function(){
    console.log("%cProjectPreviewView","color:rgba(200,200,200,1.0);font-size:1.25em;");
    console.log(this);
    var $project_link = $('<a href="/#projects/' + this.model.attributes.project_url_id + '" ' + 'tabindex="3">').text(this.model.attributes.title + " -- Link to Project");
    this.$el.append($project_link);
  } ,
  initialize: function(){
    this.listenTo(this.model, "change", this.render);
    this.render();
  }
});
