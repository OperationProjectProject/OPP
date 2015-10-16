var GUI = (function(){ //IIFE for all Views


// generic ctor to represent interface:
function GUI(users,projects,el) {
	// users is collection of User models
	// tasks is collection of Task models
	// el is selector for where GUI connects in DOM
	var navigationView = new App.NavigationView();
	var mainView = new App.MainView();
	var footerView = new App.FooterView();
	//...
}

return GUI;
}());
