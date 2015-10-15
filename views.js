var GUI = (function(){ //IIFE for all Views

var TaskView = Backbone.View.extend({

});

var CreateTaskView = Backbone.View.extend({

});

var UnassignedTasksView = Backbone.View.extend({

});

var UserTasksView = Backbone.View.extend({

});

var UserView = Backbone.View.extend({

});

var RegisterView = Backbone.View.extend({
	render: function() {
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
	},
	initialize: function() {
		this.render();
	},
	events: {

	}
});

var LoginView = Backbone.View.extend({
	render: function() {
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
	},
	initialize: function() {
		this.render();
	},
	events: {

	}
});

var MainView = Backbone.View.extend({
  render: function(){
	  var $loginButton = $('<button name="login" id="loginButton">').text('Login');
	  var $registerButton = $('<button name="register" id="registerButton">').text('Register');
	  this.$el.append($loginButton);
	  this.$el.append($registerButton);
	  $('#app').append(this.$el);
  },
  intialize: function() {
    this.render();
  },
	events: {

	}
});

// generic ctor to represent interface:
function GUI(users,tasks,el) {
	// users is collection of User models
	// tasks is collection of Task models
	// el is selector for where GUI connects in DOM
	// var RegisterView = new RegisterView();
	var mainView = new MainView();
	//...
}

return GUI;
}());
