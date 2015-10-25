var ProfileModel = Backbone.Model.extend({
	defaults: {
		name:'',
		title:'',
		github_url:'',
		personal_site_url:'',
		linkedin_url:'',
		twitter_url:'',
		job_status:'',
		url_id:'',
		top_skills:[],
		top_tools:[],
		js_tidbit:'',
		work_status:[],
		dream_job:'',
		projects:[]
	} ,
	urlRoot: '/profiles' ,
	initialize: function() {
	}
});

var ProjectModel = Backbone.Model.extend({
	defaults: {
		title:'',
		project_urlid:'',
		mvp:'',
		tech_used: []
	} ,
	urlRoot: '/projects' ,
	initialize: function() {
	}
});

//Profile Collections are Read-only
var ProfileCollection = Backbone.Collection.extend({
	model: ProfileModel ,
	url: '/profiles' ,
	initialize: function() {
		this.fetch({
			success:function(){
				console.log("%cProfileCollection","color:rgba(100,100,100,1.0);font-size:1.25em;");
			}
		});
	}
});

//Project Collections are Read-only
var ProjectCollection = Backbone.Collection.extend({
	model: ProjectModel ,
	url: '/projects' ,
	initialize: function() {
		this.fetch({
			success:function(){
				console.log("%cProjectCollection","color:rgba(100,100,100,1.0);font-size:1.25em;");
			}
		});
	}
});

//===============
//USER-EDITABLE MODELS
//===============
// -- Edit Models should be subclasses of their read-only counterparts
// -- There is no need for Edit Models to be stored in Collections , because the client will only ever have one at a time
//===============

//Logged-in User only ever has access to one Profile Edit Model at a given time
var ProfileEditModel = Backbone.Model.extend({

});

//Logged-in User only ever has access to one Project Edit Model
var ProjectEditModel = Backbone.Model.extend({

});
