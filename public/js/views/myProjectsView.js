App.Views.MyProjectsView = Backbone.View.extend({
  tagName: 'ul' ,

  className: 'my_projects_view' ,

  render: function() {
    $('body').css({'background':'rgba(240,240,235,1.0)'});
    console.log("%cMyProjectsView","color:rgba(210,210,210,1.0);font-size:1.35em;");
    console.log(this.collection);

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
      'href': '#'
    }).text(
      "Add New Project"
    );

    //Attach header and link to their box
    $edit_save_button_box.prepend( $my_content_header );
    $edit_save_button_box.append( $add_new_project );

    //Attach box to row
    $row_01.append( $edit_save_button_box );

    //Attach row to this.$el
    this.$el.append( $row_01 );

    //Attach this.$el to .centerdiv
		$( ".centerdiv" ).prepend( this.$el );
	} ,

  initialize: function(opts) {
    //this.listenTo(this.collection, "update", this.render);
    this.render();
	}
});
