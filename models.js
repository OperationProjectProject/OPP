var UserModel = Backbone.Model.extend({
	defaults: {
		username:''
	}
});

var ProjectModel = Backbone.Model.extend({
	defaults: {
		title:''
	}
	// Add methods if needed...
});

var UserCollection = Backbone.Collection.extend({
	model:UserModel
});

var IssueCollection = Backbone.Collection.extend({
	model:ProjectModel
});
