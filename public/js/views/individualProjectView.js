//Project View
//
//
App.Views.ProjectView = Backbone.View.extend({
  tagName: "div",
  className: "project_view animated fadeIn",
  render: function() {
    $('body').css({'background':'rgba(240,240,240,1.0)'});
    console.log("%cProjectView","color:rgba(200,200,200,1.0);font-size:1.25em;");


		this.$el.empty();



    for( var i=0; i < this.collection.models.length; i++ ){
      if( this.collection.models[i].attributes.project_url_id === this.project_url_id ){
        this.model = this.collection.models[i];
      }
    }


        //CREATE TOP FIVE TOOLS INPUT CARD
        // console.log("%c TEST AREA" , "color:rgba(200,100,240,1.0); font-size: 2em;");
        // console.log(this);
        // console.log(this.collection);
        // console.log(this.collection.models);
        // console.log(this.model);
        //console.log(this.model.attributes);
        //console.log("%c" + this.model.attributes.title,
          // "color:rgba(100,100,100,1.0);\
          // font-size:2.25em;\
          // font-weight:bold;\
          // text-transform:uppercase;");
        //console.log("%c" + this.model.attributes.mvp,
          // "color:rgba(120,120,120,1.0);\
          // font-size: 1.25em;\
          // font-weight: bold;\
          // text-transform:uppercase;");
        // console.log(this.model.attributes.tech_used);


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

/*
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
*/
    $project_detail_box.append( $project_detail_card );
    $row_01.append( $project_detail_box );

    //Attach elements to this view
    this.$el.append($row_01);


    // console.log(this.$el);
    //console.log(this);
    // console.log(this.model);
    //console.log(this.model.attributes.owner_reference);
    //console.log(this.model.attributes.owner_reference.indexOf('hello'));
    //console.log( this.model.attributes.owner_reference.indexOf( this.logged_user_key ) > -1 );






    if ( this.model.attributes.owner_reference.indexOf( this.logged_user_key ) > -1 ) {
          console.log("%cTEST AREA",'font-size:3em;');
          //Creat row 00
          var $row_00 =  $('<div>').attr({
            'class': 'row' ,
            'id': 'row_00'
          });
          //Create content box for edit_button
          var $edit_this_project_button_box = $('<div>').attr({
            'class': 'content_box col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,
            'id': ''
          });


          if ( (this.user_session === true) && ( this.model.attributes.owner_reference.indexOf( this.logged_user_key ) > -1 ) ) {
            console.log("create 'edit this project' button for logged-in-users who are owners of this particular project");
            var $my_content_header = $( '<h2>' ).addClass(' my_content_header' ).text( this.model.attributes.title );
            var $edit_this_project = $( '<a>' ).attr({
              'class' : 'btn btn-primary btn-lg edit_save_button',
              'href': '#projects/' + this.model.attributes.project_url_id + '/edit'
            }).text(
              "Edit This Project"
            );
            $edit_this_project_button_box.append( $my_content_header );
            $edit_this_project_button_box.append( $edit_this_project );
          }

          $row_00.append( $edit_this_project_button_box );
          this.$el.prepend($row_00);
    }








    //Attach this view to the DOM
    $(".centerdiv").append(this.$el);












/*
    var $p = $('<p>').text("This is the project page for "+ this.model.attributes.title);
    this.$el.append($p);

*/

	},
	initialize: function(opts) {
    this.user_session = opts.user_session;
    this.logged_user = opts.logged_user;
    this.logged_user_key = opts.logged_user_key;
    this.project_url_id = opts.project_url_id;
    this.listenTo(this.collection, "update", this.render);
    this.render();
    //console.log("%c " + this.project_url_id, "color:rgba(250,200,200,1.0);font-size:2.5em;");
    //console.log(this.collection);
	}
});
