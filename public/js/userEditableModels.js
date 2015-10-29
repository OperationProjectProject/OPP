//===============
//USER-EDITABLE MODELS
//===============
// -- Edit Models should be subclasses of their read-only counterparts
// -- There is no need for Edit Models to be stored in Collections , because the client will only ever have one at a time
//===============

//Logged-in User only ever has access to one Profile Edit Model
var ProfileEditorModel = Backbone.Model.extend({
	defaults: {
		name:''
	} ,
	urlRoot: '/edit_profile' ,
	initialize: function() {
		this.fetch({
			success:function(){
				console.log("%cProfileEditModel","color:rgba(100,100,100,1.0);font-size:1.25em;");
			}
		});
	}
});

//Logged-in User only ever has access to one Project Edit Model at a given time
var ProjectEditorModel = Backbone.Model.extend({
	defaults: {
		title:''
	} ,
	urlRoot: '/edit_project/:project' ,
	initialize: function() {
		this.fetch({
			success:function(){
				console.log("%cProjectEditModel","color:rgba(100,100,100,1.0);font-size:1.25em;");
			}
		});
	}
});
