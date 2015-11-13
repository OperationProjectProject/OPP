App.Views.DeleteButtonView = Backbone.View.extend({

  tagName: 'div' ,

  id: 'delete_button_view' ,

  className: 'content_box col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,

  initialize: function() {
    this.render();
    this.listenTo(this.model, "change", this.render);
  } ,

  render: function() {
    console.log("%cDeleteButtonView","color:rgba(210,210,210,1.0);font-size:1.35em;");
    console.log( this.model );
    var $delete_button_anchor_element = $( '<a>' ).attr({
      'class' : 'btn btn-danger btn-lg edit_save_button_bottom',
      'id': 'delete_button'
    }).text(
      "Delete"
    );
    this.$el.append( $delete_button_anchor_element );
  } ,

  events: {
    'click #delete_button' : 'dummy_delete'
  } ,

  delete_this_model: function() {
    this.model.destroy({
      wait: true ,
      success: function() {
        console.log("model.destroy() success");
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
