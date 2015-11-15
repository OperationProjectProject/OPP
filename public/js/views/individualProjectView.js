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
    //Create content box for project title card
    var $project_title_box = $('<div>').attr({
      'class': 'content_box col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,
      'id': 'project_title_box'
    });
    //Create content box for social links edit
    var $project_title_card = $('<div>').attr({
      'class': 'card' ,
      'id': 'project_title_card'
    });
    $project_title_box.append( $project_title_card );
    $row_01.append( $project_title_box );

    //Create div for project img
    var $project_img_div = $('<div>').attr({
      'class': 'col-xs-4 col-sm-4 col-md-4 col-lg-4'
    });
    var $project_img = $('<img>').addClass('project_main_img');

    if ( this.model.attributes.main_img === '' ) {
      $project_img.attr({
        'src': 'https://dl.dropboxusercontent.com/u/18467418/placeholder_animations/diamond.gif'
      });
    } else {
      $project_img.attr({
        'src': this.model.attributes.main_img
      });
    }
    $project_img_div.append( $project_img );
    $project_title_card.append( $project_img_div );


    //Create div for project title
    var $project_title_div = $('<div>').attr({
      'class': 'project_headline col-xs-8 col-sm-8 col-md-8 col-lg-8'
    });
    var $project_title = $('<h2>').attr({
      'class': 'headline '
    });
    $project_title.text( this.model.attributes.title );


    $project_title_div.prepend( $project_title );
    $project_title_card.append( $project_title_div );






    var $project_github_repo_url_holder_holder = $('<div>').attr({
      'class': 'project_out_link_holder_holder col-xs-12  col-sm-12 col-md-12 col-lg-12'
    });

    //If this project has a specified Github repo url, an anchor element will be created
      //The anchor
    console.log(this.model.attributes.github_repo_url);
    console.log(this.model.attributes.github_repo_url !== "");
    if ( this.model.attributes.github_repo_url !== "" ) {

      var $project_github_repo_url_holder = $('<div>').attr({
        'class': 'project_out_link_holder col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-lg-6'
      });

      var $project_github_repo_url = $('<a>').attr({
        'href' : 'https://github.com/' + this.model.attributes.github_repo_url ,
        'class' : 'btn btn-primary' ,
        'id': 'project_github_repo_link'
      }).text('Github Repo');

      $project_github_repo_url_holder.append( $project_github_repo_url );
/**/
      $project_github_repo_url_holder_holder.append( $project_github_repo_url_holder );

    }

//console.log(this.model.attributes.live_project_site_url);
//console.log(this.model.attributes.live_project_site_url !== "");
    //If this project has a specified live project url, an anchor element will be created
    if ( this.model.attributes.live_project_site_url !== "" ) {

      var $project_live_project_site_url_holder = $('<div>').attr({
        'class': 'project_out_link_holder col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-lg-6'
      });

      var $project_live_project_site_url = $('<a>').attr({
        'href' : this.model.attributes.live_project_site_url ,
        'class' : 'btn btn-primary' ,
        'id' : 'project_live_site_link'
      }).text('Live Site');

      $project_live_project_site_url_holder.append( $project_live_project_site_url );
/**/
      $project_github_repo_url_holder_holder.append( $project_live_project_site_url_holder );

    }
    $project_title_card.append( $project_github_repo_url_holder_holder );



    //Create content box for project title card
    var $project_mvp_box = $('<div>').attr({
      'class': 'content_box col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,
      'id': 'project_mvp_box'
    });
    //Create content box for social links edit
    var $project_mvp_card = $('<div>').attr({
      'class': 'card' ,
      'id': 'project_mvp_card'
    });
    $project_mvp_box.append( $project_mvp_card );
    $row_01.append( $project_mvp_box );

    var $mvp_legend = $('<legend>').text('overview');
    $project_mvp_card.append( $mvp_legend );

    var $mvp_blockquote = $( '<blockquote>' );
    var $mvp_blockquote_p = $( '<p>' ).text( this.model.attributes.mvp);
    $mvp_blockquote.append( $mvp_blockquote_p );

    $project_mvp_card.append( $mvp_blockquote );





    //Creat row 02
    var $row_02 =  $('<div>').attr({
      'class': 'row' ,
      'id': 'row_02'
    });
    //Create content box for project title card
    var $project_owners_box = $('<div>').attr({
      'class': 'content_box col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,
      'id': 'project_owners_box'
    });
    //Create content box for social links edit
    var $project_owners_card = $('<div>').attr({
      'class': 'card' ,
      'id': 'project_owners_card'
    });
    $project_owners_box.append( $project_owners_card );
    $row_02.append( $project_owners_box );

    var $owners_legend = $('<legend>').text('owners');
    $project_owners_card.append( $owners_legend );


    //console.log("%c TEST AREA","color: rgba(220,220,220,1.0); font-size: 3em;");
    //console.log( this.model.attributes.owner_reference );

    var self = this;
    this.model.attributes.owner_reference.forEach( function( e, i ){
      console.log( e );
      var individual_collaborator_view = new App.Views.ProjectOwnerView({
        owner_id: e
      });
      $project_owners_card.append( individual_collaborator_view.$el );
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


    //Attach elements to this view
    this.$el.append($row_01);
    this.$el.append($row_02);

    // console.log(this.$el);
    //console.log(this);
    // console.log(this.model);
    //console.log(this.model.attributes.owner_reference);
    //console.log(this.model.attributes.owner_reference.indexOf('hello'));
    //console.log( this.model.attributes.owner_reference.indexOf( this.logged_user_key ) > -1 );






    if ( this.model.attributes.owner_reference.indexOf( this.logged_user_key ) > -1 ) {
          //console.log("%cTEST AREA",'font-size:3em;');
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
            //console.log("create 'edit this project' button for logged-in-users who are owners of this particular project");
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
