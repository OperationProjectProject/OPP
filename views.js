var GUI = (function(){ //IIFE for all Views


// generic ctor to represent interface:
function GUI(users,tasks,el) {
	// users is collection of User models
	// tasks is collection of Task models
	// el is selector for where GUI connects in DOM
	// var RegisterView = new RegisterView();
	var mainView = new App.MainView();
	//...
}

return GUI;
}());
