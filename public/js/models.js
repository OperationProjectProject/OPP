var ProfileModel = Backbone.Model.extend({
	defaults: {
		username:'',
		byline:'',
		github_url:''
	}
});

var ProjectModel = Backbone.Model.extend({
	defaults: {
		title:'',
		mvp:'',
		tech_used: []
	}
});

var ProfileCollection = Backbone.Collection.extend({
	model: ProfileModel ,
	url: '/profiles'
});

var ProjectCollection = Backbone.Collection.extend({
	model: ProjectModel ,
	url: '/projects'
});
