var app = {};


$(function() { //when DOM is ready...

		app.profile_content = new ProfileCollection();
		app.project_content = new ProjectCollection();

		console.log("app.profile_content: " , app.profile_content);
		console.log("app.profile_content: " , app.project_content);

		app.gui = new GUI('#app');

});
