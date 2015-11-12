App.Views.OwnedProjectsRowView = Backbone.View.extend({
  tagName: 'div',

  className: 'row' ,

  initialize: function( opts ) {
    this.collection = app.project_content;
    this.owner_id = opts.owner_id;
    this.render();
    this.listenTo(this.collection, "update", this.render);
  } ,

  render: function() {
    console.log("%c  OwnedProjectsRowView","color:rgba(200,200,200,1.0);font-size:1.25em;");
    // console.log(this);
    // console.log(this.owner_id);
    // console.log(this.collection.models);

    //Create Box for Owned Projects
    var $owned_projects_box = $('<div>').attr({
      'class': 'content_box col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,
      'id': 'owned_projects_box'
    });

    //Create card for owned_projects
    var $owned_projects_card = $('<div>').attr({
      'class': 'card'
    });
    $owned_projects_box.append( $owned_projects_card );


    var $projects_legend = $('<legend>').text('projects');

    $owned_projects_card.append( $projects_legend );

    var self = this;
    //console.log( self.owner_id );
    this.collection.models.forEach( function( e, i ) {
      // console.log(i);
      // console.log(e.attributes.title);
      // console.log(e.attributes.owner_reference);
      // console.log( self.owner_id );
      // console.log( e.attributes.owner_reference.indexOf( self.owner_id ) );
      // console.log( e.attributes.owner_reference.indexOf( self.owner_id ) > -1 );
      if ( e.attributes.owner_reference.indexOf( self.owner_id ) > -1 ) {
        console.log(e.attributes.title)
        self.number_of_projects += 1;





        $owned_project_link = $('<a>').attr({
          'href' : '#projects/' + e.attributes.project_url_id,
          'class' : 'owned_project_anchor col-xs-12 col-sm-12 col-md-12 col-lg-12'
        });

        var $img_div = $('<div>').attr({
          'class' : 'col-xs-4 col-sm-4 col-md-4 col-lg-4'
        });
        var $text_div = $('<div>').attr({
          'class' : 'col-xs-8 col-sm-8 col-md-8 col-lg-8 owned_project_title'
        });

        $owned_project_img = $('<img>').attr({
          'src': (e.attributes.main_img === '') ? 'https://dl.dropboxusercontent.com/u/18467418/placeholder_animations/diamond.gif' : e.attributes.main_img ,
          'id' : e.attributes.title + '_project_link' ,
          'class' : 'owned_project_img'
        });
        $img_div.append( $owned_project_img );

        $project_title = $('<h4>').attr({
          'id' : e.attributes.title + '_project_title' ,
          'class' : 'test'
        }).text( e.attributes.title );
        $text_div.append( $project_title );


        $owned_project_link.append( $img_div );
        $owned_project_link.append( $text_div );


        $owned_projects_card.append( $owned_project_link );

      }
    });


    this.$el.append( $owned_projects_box );

  } ,

  number_of_projects: 0,

  hasProjects: function() {

    console.log(this.number_of_projects);
    return this.number_of_projects > 0;

  }

});
