//Profile Preview View
//
//
App.Views.ProfilePreviewView = Backbone.View.extend({
  tagName: 'li' ,
  className: 'profile_preview card row',
  render: function(){
    console.log("%cProfilePreviewView","color:rgba(200,200,200,1.0);font-size:1.25em;");
    var $profile_link = $('<a href="/#profiles/'+this.model.attributes.url_id+'" class="preview_link">');
    var $text_div = $('<div class="col-sm-12 col-lg-6">');
    var $user_name = $('<h2 class="user_name">').text(this.model.attributes.name);
    var $user_title = $('<h3 class="user_title">').text(this.model.attributes.title);

    [ $user_name , $user_title ].forEach( function(e,i){
      $text_div.append( e );
    });

    $profile_link.append( $text_div );

    this.$el.append($profile_link);
  } ,
  initialize: function(){
    this.listenTo(this.model, "change", this.render);
    this.render();
  }
});
