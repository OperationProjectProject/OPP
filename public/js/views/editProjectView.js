App.Views.EditProjectView = Backbone.View.extend({
    tagName: 'div' ,

    id: 'project_editor_view' ,

    initialize: function(opts) {
      this.user_session = opts.user_session;
      this.logged_user = opts.logged_user;
      this.logged_user_key = opts.logged_user_key;
      this.new_project = opts.new_project;
      this.project_url_id = opts.project_url_id;
      this.render();
  	} ,

    render: function() {
    $('body').css({'background':'rgba(240,240,240,1.0)'});
    console.log("%c EditProjectView Render TEST","font-size:3em;color:purple;");
    this.$el.empty();

    console.log(this.$el);
    console.log(this.new_project);
    console.log(this.collection);
    console.log(this.project_url_id);
    console.log("%c this.model: " + this.model , "font-size:2em;color:purple;");


    if ( this.new_project === true ) {
      console.log("this is a new project");
      this.model = undefined;
    } else if ( this.new_project === false ) {
      console.log("this is an existing project");
      for( var i=0; i < this.collection.models.length; i++ ){
        if( this.collection.models[i].attributes.project_url_id === this.project_url_id ){
          this.model = this.collection.models[i];
        }
      }
    } else {
      console.log( "Something is wrong in the project editor, or the router that initialized it." );
    }


    console.log('%c this.model: ' + this.model , "font-size:2em; color: red;");
          //Should router pass project editor a model?
            //Or a collection and a project_url_id?
            //Should the editor be told what its model is?
            //Or  determine that on render? ...
          //this.model = opts.model;






    //Create the placeholder strings
    var placeholder_title = '';
    var placeholder_project_url_id = '';
    var placeholder_github_repo_url = '';
    var placeholder_mvp = '';

    if ( (this.new_project === false) && ( this.model !== undefined ) ) {
      console.log(this.model.attributes);
      placeholder_title = this.model.attributes.title;
      placeholder_project_url_id = this.model.attributes.project_url_id;
      placeholder_github_repo_url = this.model.attributes.github_repo_url;
      placeholder_mvp = this.model.attributes.mvp;
    }

    console.log("%c Placeholder Values: " , "font-size: 2em; color: orange;");
    console.log(placeholder_title);
    console.log(placeholder_project_url_id);
    console.log(placeholder_github_repo_url);
    console.log(placeholder_mvp);






    //create row 01
    var $row_01 =  $('<div>').attr({
      'class': 'row' ,
      'id': 'row_01'
    });
    //Create content box for basic info
    var $edit_save_button_box = $('<div>').attr({
      'class': 'content_box col-sm-12 col-md-12 col-lg-12' ,
      'id': 'edit_save_button_box'
    });

    var $my_content_header = $( '<h2>' ).addClass('my_content_header' );

    if (this.new_project === true ) {
      $my_content_header.text( 'New Project' );
    } else {
      $my_content_header.text( 'Edit' );
    }


    console.log(this.new_project);



    var id_for_save_and_publish_button = '';
    id_for_save_and_publish_button = ( this.new_project === true ) ? 'save_and_publish_new_project' : 'save_and_publish_project';


    console.log("%c "+ id_for_save_and_publish_button + " button",'font-size: 1.25em;');

    //console.log("create 'edit my profile' button for logged-in-users");
    var $edit_my_profile = $( '<a>' ).attr({
      'class' : 'btn btn-primary btn-lg edit_save_button',
      'id': id_for_save_and_publish_button
    }).text(
      "Save and Publish"
    );
    $edit_save_button_box.prepend( $my_content_header );
    $edit_save_button_box.append( $edit_my_profile );
    $row_01.append( $edit_save_button_box );



    //create row 02
    var $row_02 =  $('<div>').attr({
      'class': 'row' ,
      'id': 'row_02'
    });
    //Create content box for user info box
    var $project_general_info_edit_box = $('<div>').attr({
      'class': 'content_box col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,
      'id': 'general_info_edit_box'
    });
    //Create content box for social links edit
    var $project_general_info_edit_card = $('<div>').attr({
      'class': 'card' ,
    });
    var $project_general_info_edit_legend = $('<legend>');
    $project_general_info_edit_legend.attr({
      'class': ''
    }).text('General Info');
    $project_general_info_edit_legend.append('<i class="fa fa-book fa-lg"></i>');
    $project_general_info_edit_card.append( $project_general_info_edit_legend );




    //Build Form Group for User to Edit Project Title
    var $project_title_form_group = $('<div>').attr({
      'id': 'title_form_group',
      'class': 'form-group'
    });

    //Build User Title Label and Input
    var $project_title_edit_label = $('<label>');
    $project_title_edit_label.attr({
      'for': 'project_title_input',
      'class': 'user_editor_input_label control-label'
    }).text("Project Title");
    $project_title_form_group.append( $project_title_edit_label );

    var $project_title_edit_input = $('<input type="text">');
    $project_title_edit_input.attr({
      'id': 'project_title_input',
      'class': 'form-control',
      'value': placeholder_title
    });
    $project_title_form_group.append( $project_title_edit_input );



    //User Title Input get's attached to card
    $project_general_info_edit_card.append( $project_title_form_group );
    //





    //Build URL_ID Label and Input

      //Form Group
    var $url_id_form_group = $('<div>').attr({
      'id': 'url_id_form_group' ,
      'class': 'form-group'
    });

        //Label - Get's attached to the form group
    var $url_id_edit_label = $('<label>');
    $url_id_edit_label.attr({
      'for': 'url_id_input',
      'class': 'user_editor_input_label control-label'
    }).text("Custom URL");
    $url_id_form_group.append( $url_id_edit_label );

        //Input Group - Get's attached to the form group
    var $url_id_input_group = $('<div>').attr({
      'class':'input-group'
    });
    $url_id_form_group.append( $url_id_input_group );

      //These goes inside of the Input Group:
          //Prefixer Span
    var $project_url_id_input_prefixer =  $('<span>').attr({
      'class': 'input-group-addon'
    }).text('#projects/');
          //Input Element
    var $url_id_edit_input = $('<input type="text">');
    $url_id_edit_input.attr({
      'id': 'url_id_input',
      'class': 'form-control',
      'value': placeholder_project_url_id
    });

    //Input Prefixer and Input are appended to input group,
    // , which is already attached to the Form Group
    [ $project_url_id_input_prefixer ,
      $url_id_edit_input
    ].forEach(function( e , i ){
      $url_id_input_group.append( e );
    });

    //Form Group get's attached to the card
    $project_general_info_edit_card.append( $url_id_form_group );
    //




    //Build Github Repo URL Label and Input

      //Form Group
    var $github_repo_url_form_group = $('<div>').attr({
      'id': 'github_repo_url_form_group' ,
      'class': 'form-group'
    });

        //Label - Get's attached to the form group
    var $github_repo_url_edit_label = $('<label>');
    $github_repo_url_edit_label.attr({
      'for': 'github_repo_url_input',
      'class': 'user_editor_input_label control-label'
    }).text("Link to Repository");
    $github_repo_url_form_group.append( $github_repo_url_edit_label );


        //Input Group
    var $github_repo_url_input_group = $('<div>').attr({
      'class':'input-group'
    });
      //Attach Input Group to Form Group
    $github_repo_url_form_group.append( $github_repo_url_input_group );


      //These goes inside of the Input Group:
          //Prefixer Span
    var $github_repo_url_input_prefixer =  $('<span>').attr({
      'class': 'input-group-addon'
    }).text('github.com/');
          //Input Element
    var $github_repo_url_edit_input = $('<input type="text">');
    $github_repo_url_edit_input.attr({
      'id': 'github_repo_url_input',
      'class': 'form-control',
      'value': placeholder_github_repo_url
    });

    //Input Prefixer and Input are appended to input group,
    // , which is already attached to the Form Group
    [ $github_repo_url_input_prefixer ,
      $github_repo_url_edit_input
    ].forEach(function( e , i ){
      $github_repo_url_input_group.append( e );
    });

    //Form Group get's attached to the card
    $project_general_info_edit_card.append( $github_repo_url_form_group );
    //














  //MVP Info
    // Build Form Group
    var $mvp_form_group = $('<div>').attr({
      'id': 'mvp_form_group' ,
      'class': 'form-group'
    });

    //Label - Get's attached to the form group
    var $mvp_edit_label = $('<label>');
    $mvp_edit_label.attr({
      'for': 'mvp_input',
      'class': 'user_editor_input_label control-label'
    }).text("Brief Description");
    //Attach Label to Form Group
    $mvp_form_group.append( $mvp_edit_label );


    //Input Element
    var $mvp_edit_input = $('<textarea>').text( placeholder_mvp );
    $mvp_edit_input.attr({
      'id': 'mvp_input',
      'class': 'form-control'
    });
    $mvp_form_group.append( $mvp_edit_input );

    //Form Group get's attached to the card
    $project_general_info_edit_card.append( $mvp_form_group );

    //Card with a bunch of input elements, finally gets attached to it's parent box
    $project_general_info_edit_box.append( $project_general_info_edit_card );
    //The Box containing the first card in this view, is append to it's parent row, row 02
    $row_02.append( $project_general_info_edit_box );


    console.log('%c TEST AREA', 'font-size: 3.5em; color: rgba(220,220,220,1.0);');
    //create row 03
    var $row_03 =  $('<div>').attr({
      'class': 'row' ,
      'id': 'row_03'
    });

    this.collaborator_selector_view = new App.Views.CollaboratorSelectorView({
      logged_user_key: this.logged_user_key ,
      project_being_edited: this.model
    });
    console.log( this.collaborator_selector_view );
    console.log( this.collaborator_selector_view.$el );

    $row_03.append( this.collaborator_selector_view.$el );


    //This will be the array of user keys who will be given editing permission to this project
    console.log( this.collaborator_selector_view.tallied_owner_reference() );








    //Append rows to this view
    this.$el.append( $row_01 );
    this.$el.append( $row_02 );
    this.$el.append( $row_03 );
    $( '.centerdiv' ).append( this.$el );
	},

  events: {
    'click #save_and_publish_new_project': 'create_project' ,
    'click #save_and_publish_project': 'update_project' ,
    'focus #url_id_input': 'clean_url_id_input'
  } ,


  create_project: function() {
    console.log("%c create_project method", "font-size: 3em; color: orange;");

    $('#save_and_publish_new_project').text('Checking...');

    var project_url_id_in_escrow = $('input[id="url_id_input"]').val();

    //This will be the array of user keys who will be given editing permission to this project
    console.log( this.collaborator_selector_view.tallied_owner_reference() );

    if ( this.validate_form() ) {
      console.log( this.validate_form() );
      this.collection.create({
        owner_reference: this.collaborator_selector_view.tallied_owner_reference() ,
    		title: $('input[id="project_title_input"]').val() ,
    		project_url_id: $('input[id="url_id_input"]').val() ,
    		github_repo_url: $('input[id="github_repo_url_input"]').val() ,
    		mvp:$('textarea[id="mvp_input"]').val() ,
    		main_img:'',
    		tech_used: []
      } , {
        wait: true ,
        success: function() {
          console.log('POST success!');
          app.router.navigate("#projects/" + project_url_id_in_escrow , {trigger: true});
        } ,
        error: function() {
          $('#save_and_publish_new_project').text('Edit and Resave');
          console.log('error');
        }
      });
    } else {
      console.log("Form not valid");
      $( '#url_id_form_group' ).addClass( "has-error" );
      var $error_message = $( '<span>' ).text( ' - please choose another url' );
      $( '#url_id_form_group label' ).append( $error_message );
    }
  } ,

  update_project: function() {
    console.log("%c update_project method", "font-size: 3em; color: orange;");

    $('#save_and_publish_project').text('Checking...');

    var project_url_id_in_escrow = $('input[id="url_id_input"]').val();

    //This will be the array of user keys who will be given editing permission to this project
    console.log( this.collaborator_selector_view.tallied_owner_reference() );

    if ( this.validate_form() ) {
      console.log("%c form passed validation", "font-size: 1.3em; color: orange;");
      console.log(this);
      this.model.save({
        owner_reference: this.collaborator_selector_view.tallied_owner_reference() ,
        title: $('input[id="project_title_input"]').val() ,
    		project_url_id: $('input[id="url_id_input"]').val() ,
    		github_repo_url: $('input[id="github_repo_url_input"]').val() ,
    		mvp:$('textarea[id="mvp_input"]').val() ,
        main_img:'',
        tech_used: []
      } , {
        wait: true ,
        success: function() {
          console.log('successfully saved');
          app.router.navigate("#projects/" + project_url_id_in_escrow , {trigger: true});
        } ,
        error: function() {
          $('#save_and_publish_project').text('Edit and Resave');
          console.log("error");
        }
      });
    } else {
      console.log("Form not valid");
      $( '#url_id_form_group' ).addClass( "has-error" );
      var $error_message = $( '<span class="error_message">' ).text( ' - please choose another url' );
      $( '#url_id_form_group label' ).append( $error_message );
    }
  } ,



  validate_form: function() {
    console.log("%c FORM VALIDATION", "font-size: 3em; color: orange;");
    var form_is_valid = false;
    console.log( form_is_valid );
    console.log( this.collection.models );
    console.log(form_is_valid);
    var all_project_url_ids = this.collection.models.map(function( e, i ){
      return e.attributes.project_url_id;
    });
    console.log( all_project_url_ids );
    console.log( all_project_url_ids.indexOf( $('input[id="url_id_input"]').val() ));

    if  (
      all_project_url_ids.indexOf( $( 'input[id="url_id_input"]' ).val() ) === -1
      ||
      $( 'input[id="url_id_input"]' ).val() === this.project_url_id
    ) {
      form_is_valid = true;
    }

    return form_is_valid;
  } ,

  clean_url_id_input: function() {
    console.log("clean_url__id_input method ");
    $( '#url_id_form_group' ).removeClass( "has-error" );
    $( "#url_id_form_group span.error_message" ).remove();
  }

});
