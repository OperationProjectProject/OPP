// var app = app || {};

App.Views.EditProjectView = Backbone.View.extend({
    tagName: 'div' ,

    id: 'project_editor_view' ,

    initialize: function(opts) {
      $('body').css({'background':'rgba(240,240,240,1.0)'});
      console.log("%c EditProjectView Init","font-size:2em;color:purple;");
      console.log(opts);
      console.log(this.collection);
      this.model = opts.model;
      this.user_session = opts.user_session;
      this.logged_user = opts.logged_user;
      this.logged_user_key = opts.logged_user_key;
      this.new_project = opts.new_project;
      this.render();
  	} ,

    render: function() {
    console.log("%c EditProjectView Render","font-size:2em;color:purple;");
  /*
    console.log(" ---- EditProjectView rendered ---- ");
		var $form = $('<form class="" action="/register" method="post">');
		var $inputName = $('<input type="text" name="name" id = "fullName" placeholder="Enter Your Full Name"><br>');
		var $inputEmail = $('<input type="text" name="email" id = "email" placeholder="Enter Your E-mail"><br>');
		var $inputPassword = $('<input type="password" name="password" id = "password" placeholder="Enter A Password"><br>');
		var $inputConfirmPass = $('<input type="password" name="confirmPass" id = "passwordConfirm" placeholder="Confirm Password"><br>');
		var $inputSubmit = $('<input type="submit" name="submit" value="Sign Up">');
		$form.append($inputName);
		$form.append($inputEmail);
		$form.append($inputPassword);
		$form.append($inputConfirmPass);
		$form.append($inputSubmit);
		this.$el.append($form);
		$('#app').append(this.$el);
  */
    console.log(this.$el);
    console.log(this.collection);

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

    var $my_content_header = $( '<h2>' ).addClass('my_content_header' ).text( 'Project Editor' );


    console.log(this.new_project);



    var id_for_save_and_publish_button = '';
    id_for_save_and_publish_button = ( this.new_project === true ) ? 'save_and_publish_new_project' : 'save_and_publish_project';


    console.log("%c "+ id_for_save_and_publish_button,'font-size: 1.25em;');

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
      'value': 'test title value'
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
      'value': 'test_url_id_value'
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
      'value': 'test_github_repo_url_value'
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
    var $mvp_edit_input = $('<textarea>');
    $mvp_edit_input.attr({
      'id': 'mvp_input',
      'class': 'form-control',
      'value': 'test_mvp_value'
    });
    $mvp_form_group.append( $mvp_edit_input );

    //Form Group get's attached to the card
    $project_general_info_edit_card.append( $mvp_form_group );
    //













    //Card with a bunch of input elements, finally gets attached to it's parent box
    $project_general_info_edit_box.append( $project_general_info_edit_card );
    //The Box containing the first card in this view, is append to it's parent row, row 02
    $row_02.append( $project_general_info_edit_box );


    //Append rows to this view
    this.$el.append( $row_01 );
    this.$el.append( $row_02 );
    $( '.centerdiv' ).append( this.$el );
	},

  events: {
    'click #save_and_publish_new_project': 'create_project' ,
    'click #save_and_publish_project': 'update_project'
  } ,

  create_project: function() {
    console.log("%c create_project method", "font-size: 3em; color: orange;");

    if ( this.validate_form() ) {
      console.log( this.validate_form() );
      this.collection.create({
        owner_reference:[ this.logged_user_key ],
    		title: $('input[id="project_title_input"]').val() ,
    		project_url_id: $('input[id="url_id_input"]').val() ,
    		github_repo_url: $('input[id="github_repo_url_input"]').val() ,
    		mvp:$('textarea[id="mvp_input"]').val() ,
    		main_img:'',
    		tech_used: []
      });
    } else {
      console.log("Form not valid");
      $('#url_id_form_group').addClass("has-error");
    }
  } ,

  update_project: function() {
    console.log("%c update_project method", "font-size: 3em; color: orange;");
      this.model.set({
        owner_reference:[],
        title: $('input[id="project_title_input"]').val() ,
    		project_url_id: $('input[id="url_id_input"]').val() ,
    		github_repo_url: $('input[id="github_repo_url_input"]').val() ,
    		mvp:$('textarea[id="mvp_input"]').val() ,
        main_img:'',
        tech_used: []
      });

      this.model.save();
  } ,

  validate_form: function() {
    console.log("%c FORM VALIDATION", "font-size: 3em; color: orange;");
    var form_is_valid = false;
    console.log( form_is_valid );
    console.log( this.collection );
    console.log(form_is_valid);
    return form_is_valid;
  }

});
