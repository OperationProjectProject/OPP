//this is the profile preview View
//
App.Views.ProfilePreviewView = Backbone.View.extend({
  tagName: 'li' ,
  className: 'profile_preview',
  render: function(){
    var $profile_link = $('<a href="/#profiles/'+this.model.attributes.url_id+'" id="profiles_link" tabindex="3">').text(this.model.attributes.name + " -- Link to Profile");
    this.$el.append($profile_link);
    $(".centerdiv").prepend(this.$el);

  } ,
  initialize: function(){
    this.render();
  },
  events:{
    "click":"link"
  },
  link: function(){
    $('.centerdiv').empty();
    var view = new App.Views.ProfileView({model:this.model});
  }
});
