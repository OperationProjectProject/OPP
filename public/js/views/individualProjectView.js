//Project View
//
//
App.Views.ProjectView = Backbone.View.extend({
  tagName: "div",
  className: "project_view",
  render: function() {
    $('body').css({'background':'rgba(252,252,244,1.0)'});

    console.log("%cProjectView","color:rgba(200,200,200,1.0);font-size:1.25em;");

    for( var i=0; i < this.collection.models.length; i++ ){
      if( this.collection.models[i].attributes.project_url_id === this.project_url_id ){
        this.model = this.collection.models[i];
        console.log(this);
        console.log("%c" + this.model.attributes.title,
          "color:rgba(100,100,100,1.0);\
          font-size:2.25em;\
          font-weight:bold;\
          text-transform:uppercase;");
        console.log("%c" + this.model.attributes.mvp,
          "color:rgba(120,120,120,1.0);\
          font-size: 1.25em;\
          font-weight: bold;\
          text-transform:uppercase;");
        console.log(this.model.attributes.tech_used);

        //Create Headline & Byline
        var $title = $('<h1 class="headline">').text(this.model.attributes.title);
        var $byline = $('<p class="byline">').text(this.model.attributes.mvp);

        //Create list of tech used
        var $tech_used = $('<ul class="tech_used">').text('The tech used in this project: ');
        this.model.attributes.tech_used.forEach(function( e, i ){
          $li = $( '<li>' ).text( e );
          $tech_used.append( $li );
        });

        //Attach elements to this view
        this.$el.append($title);
        this.$el.append($byline);
        this.$el.append($tech_used);

        //Attach this view to the DOM
        $(".centerdiv").append(this.$el);
      }
    }











/*
    var $p = $('<p>').text("This is the project page for "+ this.model.attributes.title);
    this.$el.append($p);

*/

	},
	initialize: function(opts) {
    this.project_url_id = opts.project_url_id;
    this.listenTo(this.collection, "update", this.render);
    this.render();
    //console.log("%c " + this.project_url_id, "color:rgba(250,200,200,1.0);font-size:2.5em;");
    //console.log(this.collection);
	}
});
