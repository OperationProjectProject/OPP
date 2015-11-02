var ProfileModel = Backbone.Model.extend({
	defaults: {
		name:'',
		title:'',
		github_url:'',
		profile_img_url:'',
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
		project_url_id:'',
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
				//console.log("%cProfileCollection","color:rgba(100,100,100,1.0);font-size:1.25em;");
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
				//console.log("%cProjectCollection","color:rgba(100,100,100,1.0);font-size:1.25em;");
			}
		});
	}
});
