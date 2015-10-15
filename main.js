var app = {};

$(function() { //when DOM is ready...
	// app.users = new UserCollection([
	// 	{username:'Person1'}
	// ]);

	
	app.gui = new GUI(app.users,
						app.tasks,
						'#app');// selector of main div
});
