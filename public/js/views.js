var GUI = (function(){ //IIFE for all Views


// generic ctor to represent interface:
function GUI( profiles, projects, el ) {

	console.log(" ---- GUI ---- ");
	console.log("profiles: " , profiles);
	console.log("projects: " , projects);
	console.log("el: " , el);

	this.navigationView = new App.Views.NavigationView();
	this.mainView = new App.Views.MainView();
	this.footerView = new App.Views.FooterView();

}

return GUI;
}());
