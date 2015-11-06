App.Views.MyProjectsView = Backbone.View.extend({
  tagName: 'div' ,

  className: 'my_projects_view' ,

  initialize: function(opts) {
    this.user_session = opts.user_session;
    this.logged_user = opts.logged_user;
    this.logged_user_key = opts.logged_user_key;
    this.render();
    this.listenTo(this.collection, "update", this.render);
  } ,

  render: function() {
    $('body').css({'background':'rgba(240,240,235,1.0)'});
    console.log("%cMyProjectsView","color:rgba(210,210,210,1.0);font-size:1.35em;");
    //console.log(this.collection);

    //console.log(this.collection.models);








    //This is terrible practice, but solves a short-term problem
    //All views in this app will need to be refactored
    this.$el.empty();

    //create row 01
    var $row_01 =  $('<div>').attr({
      'class': 'row' ,
      'id': 'row_01'
    });

    //Create box for header and button
    var $edit_save_button_box = $('<div>').attr({
      'class': 'content_box col-sm-12 col-md-12 col-lg-12' ,
      'id': 'edit_save_button_box'
    });

    //Create h2 header
    var $my_content_header = $( '<h2>' ).addClass('my_content_header' ).text( 'My Projects' );

    //Create add project link
    var $add_new_project = $( '<a>' ).attr({
      'class' : 'btn btn-primary btn-lg edit_save_button',
      'href': '#projects/new'
    }).text(
      "Add New Project"
    );

    //Attach header and link to their box
    $edit_save_button_box.prepend( $my_content_header );
    $edit_save_button_box.append( $add_new_project );

    //Attach box to row
    $row_01.append( $edit_save_button_box );

    //create row 02
    var $row_02 =  $('<div>').attr({
      'class': 'row' ,
      'id': 'row_02'
    });

    //Create box for header and button
    var $my_projects_box = $('<div>').attr({
      'class': 'content_box col-sm-12 col-md-12 col-lg-12' ,
      'id': 'my_projects_box'
    });
    $row_02.append( $my_projects_box );

    var $my_projects_preview_list = $('<ul id="my_projects_preview_list">');
    $my_projects_box.append( $my_projects_preview_list );
    var self = this;
    this.collection.forEach(function( e, i ){
      //console.log( self.logged_user_key );
      //console.log( e.attributes.title );
      //console.log( e.attributes.owner_reference );
      //console.log( e.id === self.logged_user_key );
      e.attributes.owner_reference.forEach( function( elem, ind ){
        //console.log( elem );
        if ( elem === self.logged_user_key ) {
          //console.log("%c" +  e.attributes.title + "is a match for this logged_user_key" , "font-size: 1.5em; color: green;");
          var project_preview = new App.Views.ProjectPreviewView({
            model: e ,
            edit_button: true
          });
          //console.log( $my_projects_preview_list );
          //console.log( project_preview.$el );
          $my_projects_preview_list.prepend( project_preview.$el );
        }
      });
    });




    //Attach rows to this.$el
    this.$el.append( $row_01 );
    this.$el.append( $row_02 );

    //Attach this.$el to .centerdiv
		$( ".centerdiv" ).prepend( this.$el );
	}
});
