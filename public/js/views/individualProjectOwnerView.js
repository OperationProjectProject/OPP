App.Views.ProjectOwnerView = Backbone.View.extend({
  tagName: 'div' ,

  className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12' ,

  initialize: function( opts ) {
    console.log( "%c Project Owner View initialize()" , "color:purple;font-size:1.25em;" );
    this.collection = app.profile_content;
    this.owner_id = opts.owner_id;
    this.render();
    this.listenTo(this.collection, "update", this.render);
  } ,

  render: function() {
    console.log( "%c Project Owner View render()" , "color:purple;font-size:1.25em;" );

    var self = this;

    //Assign a user profile model to the current owner_id
    this.collection.models.forEach( function ( e, i ) {

      if ( self.owner_id === e.id ) {
        //console.log( 'owner id references this user profile' );
        //console.log(self.owner_id);
        //console.log(e);
        // console.log(e.id);
        // console.log(self.owner_id === e.id);
        // console.log(self.model);
        self.model = e;
        // console.log(self.model);
      }
    });

    if ( this.model ) {
      console.log(this.model.attributes.name);

      $owner_link = $('<a>').attr({
        'href' : '#profiles/' + this.model.attributes.url_id,
        'class' : 'project_owner_anchor col-xs-12 col-sm-12 col-md-12 col-lg-12'
      });

      var $img_div = $('<div>').attr({
        'class' : 'col-xs-4 col-sm-4 col-md-4 col-lg-4'
      });
      var $text_div = $('<div>').attr({
        'class' : 'col-xs-8 col-sm-8 col-md-8 col-lg-8 project_owner_name'
      });

      $owner_img = $('<img>').attr({
        'src': (this.model.attributes.profile_img_url === '') ? 'https://dl.dropboxusercontent.com/u/18467418/placeholder_animations/diamond.gif' : this.model.attributes.profile_img_url ,
        'id' : this.model.attributes.name + '_profile_link' ,
        'class' : 'project_owner_img'
      });
      $img_div.append( $owner_img );

      $owner_name = $('<h4>').attr({
        'id' : this.model.attributes.name + '_user_name' ,
        'class' : 'test'
      }).text( this.model.attributes.name );
      $text_div.append( $owner_name );


      $owner_link.append( $img_div );
      $owner_link.append( $text_div );


      this.$el.append( $owner_link );

    }


  }


});
