//Project View
//
//
App.Views.ProjectView = Backbone.View.extend({
  tagName: "div",
  className: "project_view animated fadeIn",
  render: function() {
    $('body').css({'background':'rgba(240,240,240,1.0)'});
    console.log("%cProjectView","color:rgba(200,200,200,1.0);font-size:1.25em;");






    for( var i=0; i < this.collection.models.length; i++ ){
      if( this.collection.models[i].attributes.project_url_id === this.project_url_id ){
        this.model = this.collection.models[i];
      }
    }


        //CREATE TOP FIVE TOOLS INPUT CARD
        console.log("%c TEST AREA" , "color:rgba(200,100,240,1.0); font-size: 2em;");
        console.log(this);
        console.log(this.collection);
        console.log(this.collection.models);
        console.log(this.model);
        console.log(this.model.attributes);
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


    //Creat row 01
    var $row_01 =  $('<div>').attr({
      'class': 'row' ,
      'id': 'row_01'
    });
    //Create content box for user info box
    var $project_detail_box = $('<div>').attr({
      'class': 'content_box col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,
      'id': 'project_detail_box'
    });
    //Create content box for social links edit
    var $project_detail_card = $('<div>').attr({
      'class': 'card' ,
      'id': 'testing_test'
    });

    //Create Headline & Byline
    var $title = $('<h2 class="headline">').text(this.model.attributes.title);
    var $byline = $('<p class="byline">').text(this.model.attributes.mvp);

    //Create list of tech used
    var $tech_used = $('<ul class="tech_used">').text('Tech Used: ');
    this.model.attributes.tech_used.forEach(function( e, i ){
      $li = $( '<li>' ).text( e );
      $tech_used.append( $li );
    });


    [ $title, $byline, $tech_used].forEach( function( e, i ){
      $project_detail_card.append(e);
    });


    $project_detail_box.append( $project_detail_card );
    $row_01.append( $project_detail_box );

    //Attach elements to this view
    this.$el.append($row_01);

    //Attach this view to the DOM
    $(".centerdiv").append(this.$el);












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
