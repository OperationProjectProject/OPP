// var app = app || {};

App.Views.EditProjectView = Backbone.View.extend({
    tagName: 'div' ,

    id: 'project_editor_view' ,

    initialize: function(opts) {
      $('body').css({'background':'rgba(240,240,240,1.0)'});
      console.log("%c EditProjectView Init","font-size:2em;color:purple;");
      console.log(opts);
      console.log(this.collection);
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

    //console.log("create 'edit my profile' button for logged-in-users");
    var $edit_my_profile = $( '<a>' ).attr({
      'class' : 'btn btn-primary btn-lg edit_save_button',
      'href': '#projects/my_projects',
      'id': 'save_and_publish_project'
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

    //Build User Title Label and Input
    var $project_title_edit_label = $('<label>');
    $project_title_edit_label.attr({
      'for': 'project_title_input',
      'class': 'project_editor_input_label control-label'
    }).text("Project Title");
    var $project_title_edit_input = $('<input type="text">');
    $project_title_edit_input.attr({
      'id': 'project_title_input',
      'class': 'form-control',
      'value': 'test title value'
    });



    //Build URL_ID Label and Input
    var $url_id_form_group = $('<div>').attr({
      'id': 'url_id_form_group' ,
      'class': 'form-group'
    });

    var $url_id_edit_label = $('<label>');
    $url_id_edit_label.attr({
      'for': 'project_title_input',
      'class': 'project_editor_input_label control-label'
    }).text("unique url:");
    var $url_id_input_group = $('<div>').attr({
      'class':'input-group'
    });

    var $url_id_edit_input = $('<input type="text">');
    $url_id_edit_input.attr({
      'id': 'url_id_input',
      'class': 'form-control',
      'value': 'test_url_id_value'
    });

    [ $url_id_edit_label ,
      $url_id_edit_input ].forEach(function( e , i ){
      $url_id_input_group.append( e );
    });


    $project_general_info_edit_card.append( $project_title_edit_label );
    $project_general_info_edit_card.append( $project_title_edit_input );
    $project_general_info_edit_card.append( $url_id_input_group );

    $project_general_info_edit_box.append( $project_general_info_edit_card );
    $row_02.append( $project_general_info_edit_box );


    //Append rows to this view
    this.$el.append( $row_01 );
    this.$el.append( $row_02 );
    $( '.centerdiv' ).append( this.$el );
	},

  events: {

  } ,

  create_project: function() {
    this.collection.create({
      owner_reference: [],
      title: 'hello',
      project_url_id: 'this_isnt_a_new_project',
      
    });
  }
});
