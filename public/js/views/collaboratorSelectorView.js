//Collaborator Selector View

console.log("Hello World");


App.Views.CollaboratorSelectorView = Backbone.View.extend({

  tagName: 'div' ,

  id: 'collaborator_selector_view' ,

  className: 'content_box col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,

  initialize: function( opts ) {
    console.log("%c CollaboratorSelectorView initialize." , "font-size: 2em; color:green;");
    this.collection = app.profile_content;
    this.project_being_edited = opts.project_being_edited;
    this.logged_user_key = opts.logged_user_key;
    this.render();
    this.listenTo(this.collection, "update", this.render);
  } ,

  render: function() {
    console.log("%c CollaboratorSelectorView render." , "font-size: 2em; color:green;");
      //console.log(this.collection);
      this.$el.empty();



      //Create content box for social links edit
      var $collaborator_selector_card = $('<div>').attr({
        'class': 'card' ,
      });
      var $collaborator_selector_legend = $('<legend>');
      $collaborator_selector_legend.attr({
        'class': ''
      }).text('Collaborators');
      $collaborator_selector_legend.append('<i class="fa fa-group fa-lg"></i>');
      $collaborator_selector_card.append( $collaborator_selector_legend );


      var $checkbox_form_group = $('<div>').attr({
        'class': 'form-group'
      });

      var self = this;

      console.log(self.collection.models);

      this.collection.models.forEach( function( e , i ){
        // console.log( e.attributes.name );
        //console.log( self)
        // console.log( e.id );
        // console.log( self.logged_user_key );
        // console.log( e.id === self.logged_user_key );

        if ( e.id !== self.logged_user_key ) {

          var $collaborator_label = $('<label>').attr({
            'class': 'control-label' ,
            'for': 'user_' + e.id + '_checkbox'
          });

          var $collaborator_checkbox = $('<input>').attr({
            'type': 'checkbox',
            'value': e.id ,
            'id': 'user_' + e.id + '_checkbox'
          });

          var $text_span = $('<span class="collaborator_name">').text( e.attributes.name );

          $collaborator_label.append( $collaborator_checkbox );

          $collaborator_label.append( $text_span );

          $checkbox_form_group.append( $collaborator_label );

        }
      });


      $collaborator_selector_card.append( $checkbox_form_group );
      this.$el.append( $collaborator_selector_card );
  }

});
