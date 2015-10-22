//this is the profile preview View
//
App.Views.ProfilePreviewView = Backbone.View.extend({
  tagName: 'li' ,
  className: 'profile_preview',
  render: function(){

    this.$el.text(this.model.attributes.name + " -- Link to Profile");
    //console.log(this.model.attributes);
    //console.log(this.model);
    //console.log(this.model.attributes);
    //console.log("el: " , this.el);
    //console.log("$el: " , this.$el);
  } ,
  initialize: function(){
    this.render();
  }
});
