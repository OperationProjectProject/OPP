var app = {};


$(function() { //when DOM is ready...

	 app.profile_content = new ProfileCollection([
	 	{username:'Susie', byline:'JS Dev' , github_url: 'http://github.com/example'} ,
	 	{username:'Frankie', byline:'Front-End' , github_url: 'http://github.com/example'} ,
	 	{username:'Example User', byline:'Example Occupation' , github_url: 'http://github.com/example'}
	 ]);

	 app.project_content = new ProjectCollection([
	 	{title:'amazon', mvp:'buy stuff' , tech_used: [ 'fedex' , 'servers' , 'factories' ]} ,
	 	{title:'google', mvp:'find stuff' , tech_used: [ 'servers', 'ping-pong tables' ]} ,
	 	{title:'uber', mvp:'go somewhere' , tech_used: [ 'cars', 'iPhones', 'lawlessness' ]}
	 ]);

		//app.profile_content = new ProfileCollection();
		//app.project_content = new ProjectCollection();
		app.gui = new GUI( app.profile_content,
						app.project_content,
						'#app');// selector of main div

		console.log(app.profile_content);
		console.log(app.project_content);
		console.log(app.gui);

});
