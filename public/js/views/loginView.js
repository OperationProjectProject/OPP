// var app = app || {};

App.Views.LoginView = Backbone.View.extend({
	render: function() {
    console.log(" ---- LoginView rendered ---- ");
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
	}
});
