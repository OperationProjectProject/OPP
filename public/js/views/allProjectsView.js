// var app = app || {};

App.Views.AllProjectsView = Backbone.View.extend({
  tagName: 'ul' ,

  className: 'all_projects_view' ,

  collection: app.project_content ,

  render: function() {
    $('body').css({'background':'rgba(240,240,240,1.0)'});
    console.log("%cAllProjectsView","color:rgba(200,200,200,1.0);font-size:1.25em;");
    var self = this;






    this.collection.models.forEach(function(e,i){
      var project_preview = new App.Views.ProjectPreviewView({
        model: e ,
        edit_button: false
      });


      function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }


      var coinFlip = getRandomIntInclusive(0,1);
      //console.log(coinFlip);
      if (coinFlip === 0) {
        self.$el.append( project_preview.$el );
      } else {
        self.$el.prepend( project_preview.$el );
      }

    });
		$(".centerdiv").prepend(this.$el);
	} ,

  initialize: function() {
    this.listenTo(this.collection, "update", this.render);
    this.render();
	}
});
