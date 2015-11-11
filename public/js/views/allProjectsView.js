// var app = app || {};

App.Views.AllProjectsView = Backbone.View.extend({
  tagName: 'ul' ,

  className: 'all_projects_view' ,

  collection: app.project_content ,

  initialize: function( opts ) {
    this.logged_user = opts.logged_user;
    this.listenTo(this.collection, "update", this.render);
    this.render();
	} ,

  render: function() {
    $('body').css({'background':'rgba(240,240,240,1.0)'});
    console.log("%cAllProjectsView","color:rgba(200,200,200,1.0);font-size:1.25em;");
    var self = this;

    console.log( this.logged_user );


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


    if ( this.logged_user ) {
      //create row 01
      var $row_00 =  $('<div>').attr({
        'class': 'row' ,
        'id': 'row_00'
      });

      //Create box for header and button
      var $edit_save_button_box = $('<div>').attr({
        'class': 'content_box col-sm-12 col-md-12 col-lg-12' ,
        'id': 'edit_save_button_box'
      });

      //Create add project link
      var $add_new_project = $( '<a>' ).attr({
        'class' : 'btn btn-primary btn-lg edit_save_button',
        'href': '#projects/new'
      }).text(
        "Add New Project"
      );

      //Attach link to the box
      $edit_save_button_box.append( $add_new_project );

      //Attach box to row
      $row_00.append( $edit_save_button_box );

      $(".centerdiv").prepend( $row_00 );
    }


		$(".centerdiv").append(this.$el);
	}
});
