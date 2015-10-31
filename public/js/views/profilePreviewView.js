//Profile Preview View
//
//
App.Views.ProfilePreviewView = Backbone.View.extend({
  tagName: 'li' ,
  className: 'profile_preview row',
  render: function(){
    console.log("%cProfilePreviewView","color:rgba(200,200,200,1.0);font-size:1.25em;");
    var $profile_link = $('<a href="/#profiles/'+ this.model.attributes.url_id +'" class="preview_link">');
    var $text_div = $('<div class="col-sm-12 col-md-8 col-lg-8 preview_text">');
    var $user_name = $('<h2 class="user_name">').text(this.model.attributes.name);
    var $user_title = $('<h3 class="user_title">').text(this.model.attributes.title);

    [ $user_name , $user_title ].forEach( function(e,i){
      $text_div.append( e );
    });

    //console.log("%c profile_img: " + this.model.attributes.profile_img_url , "color: purple; font-size: 1.25em;");

    var $profile_img_box = $('<div class="col-sm-12 col-md-4 col-lg-4">')
    var $profile_img = $("<img>").attr({
      'src': this.model.attributes.profile_img_url ,
      'alt': this.model.attributes.name + " profile image." ,
      'class': 'profile_img_preview' ,
      'id': this.model.attributes.url_id + '_profile_img' ,
    });
    $profile_img_box.append( $profile_img );


    $profile_link.append( $profile_img_box );
    $profile_link.append( $text_div );

    this.$el.append($profile_link);
  } ,
  initialize: function(){
    this.listenTo(this.model, "change", this.render);
    this.render();
  }
});
