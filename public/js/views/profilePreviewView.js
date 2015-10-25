//Profile Preview View
//
//
App.Views.ProfilePreviewView = Backbone.View.extend({
  tagName: 'li' ,
  className: 'profile_preview',
  render: function(){

//console.log("%cProfilePreviewView","color:rgba(200,200,200,1.0);font-size:1.25em;");
//console.log(this);
    /*
    //Mini-views in console
    //Can be removed for production code
    console.log("====================================================================================================");
    console.log("%c" + this.model.attributes.name,
      "color:rgba(51,51,51,1.0);\
      font-size:2em;\
      text-transform:uppercase;");
    console.log("%c" + this.model.attributes.title,
      "color:rgba(51,51,51,1.0);\
      font-size:1.25em;\
      text-transform:uppercase;");
    console.log("  - "+ "%c" + this.model.attributes.github_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
    console.log("  - "+ "%c" + this.model.attributes.personal_site_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
    console.log("  - "+ "%c" + this.model.attributes.linkedin_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
    console.log("  - "+ "%c" + this.model.attributes.twitter_url, "color:rgba(51,51,151,1.0); text-decoration:underline;");
    console.log("\n\n\n");
*/


    var $profile_link = $('<a href="/#profiles/'+this.model.attributes.url_id+'" id="profiles_link" tabindex="3">').text(this.model.attributes.name + " -- Link to Profile");
    this.$el.append($profile_link);
    $(".centerdiv").prepend(this.$el);

  } ,
  initialize: function(){
    this.listenTo(this.model, "change", this.render);
    this.render();
  }
});
