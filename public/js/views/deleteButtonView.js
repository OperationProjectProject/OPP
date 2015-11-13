App.Views.DeleteButtonView = Backbone.View.extend({

  tagName: 'div' ,

  id: 'delete_button_view' ,

  className: 'content_box col-xs-12 col-sm-12 col-md-12 col-lg-12' ,

  initialize: function() {
    this.render();
    this.listenTo(this.model, "change", this.render);
  } ,

  render: function() {
    console.log("%cDeleteButtonView","color:rgba(210,210,210,1.0);font-size:1.35em;");
    console.log( this.model );
    console.log( this.model.collection );
    console.log( this.model.collection === app.profile_content );
    console.log( this.model.collection === app.project_content );

    var $delete_button_anchor_element = $( '<a>' ).attr({
      'class' : 'btn btn-danger btn-lg edit_save_button_bottom',
      'id': 'delete_button'
    })

    if ( this.model.collection === app.profile_content ) {
      $delete_button_anchor_element.text( "Deactivate My Account" );
    }

    if ( this.model.collection === app.project_content ) {
      $delete_button_anchor_element.text( "Delete This Project" );
    }

    this.$el.append( $delete_button_anchor_element );
  } ,

  events: {
    'click #delete_button' : 'delete_this_model'
  } ,

  delete_this_model: function() {

    var redirector = '';

    console.log("%c TEST AREA" , "font-size: 4em; color: rgba(220,220,220,1.0);")
    console.log(this.model.collection === app.project_content)
    console.log(this.model.collection === app.profile_content)

    if ( this.model.collection === app.project_content ) {
      redirector = 'projects';
    } else if ( this.model.collection === app.profile_content ) {
      redirector = 'index';
    } else {
      console.log("something is broken in delete button");
    }


    this.model.destroy({
      wait: true ,
      success: function( model, response ) {

        console.log("model.destroy() success");
        console.log( model , response );

        if ( redirector === 'projects' ) {

          console.log( "navigate to #projects" );
          app.router.navigate("#projects", {trigger: true});

        } else if ( redirector === 'index' ) {

          console.log( "navigate to /logout" );
          window.location.href = '/logout';

        } else {

          console.log("something is broken in the delete button");

        }

      } ,
      error: function() {
        console.log("model.destroy() error");
      }
    });
  } ,

  dummy_delete: function() {
    console.log('dummy delete');
  }

});
