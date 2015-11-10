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
        'class': 'form-group' ,
        'id': 'collaborator_selection_checkboxes'
      });

      console.log(this.collection.models);

      var self = this;
      console.log(self.collection.models);

      //forEach loop that cycles through every model in this.collection
      //Each model is a profile object
      this.collection.models.forEach( function( e , i ){
        // console.log( e.attributes.name );
        //console.log( self)
        // console.log( e.id );
        // console.log( self.logged_user_key );
        // console.log( e.id === self.logged_user_key );

        if ( e.id !== self.logged_user_key ) {

          console.log( e.id );

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


          if ( self.project_being_edited ) {
            console.log( self.project_being_edited.attributes.owner_reference );

            self.project_being_edited.attributes.owner_reference.forEach( function( element, index ){
              console.log( element );
              console.log( e.id );
              console.log( element === e.id );
              if ( element === e.id ) {
                $collaborator_checkbox.prop( "checked", true );
              }
            });


          }

        }

      });






      $collaborator_selector_card.append( $checkbox_form_group );
      this.$el.append( $collaborator_selector_card );
  } ,

  tallied_owner_reference: function() {
    var arr = [];

    arr.push( this.logged_user_key );

    $('#collaborator_selection_checkboxes input:checked').each( function() {
        console.log( this );
        arr.push( $(this).val() );
    });

    console.log( arr );

    //real:
    return arr;
    // dummy
    //return [ this.logged_user_key ];

  }

});
