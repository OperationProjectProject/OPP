var GUI = (function(){ //IIFE for all Views


// generic ctor to represent interface:
function GUI( profiles, projects, el ) {

	console.log(" ---- GUI ---- ");
	console.log(profiles);
	console.log(projects);

	//console.log("profiles: " , profiles);
	//console.log("projects: " , projects);
	console.log("el: " , el);

	var navigationView = new App.Views.NavigationView();
	var mainView = new App.Views.MainView();
	var footerView = new App.Views.FooterView();

}

return GUI;
}());
