//Project Preview View
//
//
App.Views.ProjectPreviewView = Backbone.View.extend({
  tagName: 'li' ,
  className: 'project_preview card',
  render: function(){
    console.log("%cProjectPreviewView","color:rgba(200,200,200,1.0);font-size:1.25em;");
    //console.log(this);

    var $project_link = $('<a href="/#projects/' + this.model.attributes.project_url_id + '" ' + 'class="preview_link">');
    var $project_title = $('<h2>').text(this.model.attributes.title);

    $project_link.append( $project_title );

    this.$el.append($project_link);
  } ,
  initialize: function(){
    this.listenTo(this.model, "change", this.render);
    this.render();
  }
});
