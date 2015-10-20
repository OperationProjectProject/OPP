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
	// Add methods if needed...
});

var ProfileCollection = Backbone.Collection.extend({
	model: ProfileModel
});

var ProjectCollection = Backbone.Collection.extend({
	model: ProjectModel
});
