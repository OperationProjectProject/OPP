var GUI = (function(){

function GUI( el ) {
	//console.log(" ---- GUI ---- ");
	//console.log("el: " , el);
	this.navigationView = new App.Views.NavigationView();
	this.centerView = new App.Views.CenterView();
	this.mainView = new App.Views.MainView();
	this.footerView = new App.Views.FooterView();
}

return GUI;
}());
