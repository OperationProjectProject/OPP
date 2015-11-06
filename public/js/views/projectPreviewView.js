//Project Preview View
//
//
App.Views.ProjectPreviewView = Backbone.View.extend({
  tagName: 'li' ,

  className: 'project_preview col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2',

  initialize: function(){
    this.listenTo(this.model, "change", this.render);
    this.render();
  } ,

  render: function(){
    console.log("%cProjectPreviewView","color:rgba(200,200,200,1.0);font-size:1.25em;");
    //console.log(this);

    var $project_link = $('<a href="/#projects/' + this.model.attributes.project_url_id + '" ' + 'class="preview_link">');

    //Create the two boxes that hold content inside of $project_link
    var $project_img_box = $('<div>').attr({
      'class':'col-sm-12 col-md-8 col-lg-6'
    });



    var ranomized_preview_revel = Math.random() > 0.5 ? 'fadeInLeftBig': 'fadeInRightBig'; 
    var $project_img = $("<img>").attr({
      'alt': this.model.attributes.title + " main image." ,
      'class': 'project_img_preview animated ' + ranomized_preview_revel,
      'id': this.model.attributes.project_url_id + '_profile_img' ,
    });

    if ( this.model.attributes.main_img !== '') {
      $project_img.attr({
        'src': this.model.attributes.main_img
      });
    } else {
      $project_img.attr({
        'src': 'https://dl.dropboxusercontent.com/u/18467418/placeholder_animations/diamond.gif'
        //'src': 'http://www.rammandir.ca/sites/default/files/default_images/defaul-avatar_0.jpg'
      }).css('background','rgba(200,200,200,1.0)');
    }

    $project_img_box.append( $project_img );









    var $text_div = $('<div>').attr({
      'class':'col-sm-12 col-md4 col-lg-6 preview_text'
    });










    var $project_title = $('<h6>');

    var $title_arr = $('<p>').text(this.model.attributes.title);

    console.log( $title_arr.text().split('') );
    $title_arr.text().split('').forEach(function( e, i ){
      console.log(e);
      function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      var $span = $('<span class="animated profile_preview_text_span">').text(e);
      var roll_dice = getRandomIntInclusive( 1, 6 );
      console.log(roll_dice);
      switch (roll_dice) {
        case 1:
          console.log("case 1");
          $span.addClass('bounceInDown');
          break;
        case 2:
          console.log("case 2");
          $span.addClass('bounceInRight');
          break;
        case 3:
          console.log("case 3");
          $span.addClass('bounceInDown');
          break;
        case 4:
          console.log("case 4");
          $span.addClass('bounceInLeft');
          break;
        case 5:
          console.log("case 5");
          $span.addClass('fadeInDownBig');
          break;
        case 6:
          console.log("case 6");
          $span.addClass('fadeInUpBig');
          break;
        case 7:
          console.log("case 7");
          $span.addClass('fadeInRightBig');
          break;
        case 8:
          console.log("case 8");
          $span.addClass('fadeInLeftBig');
          break;
        default:
          console.log("default case." );
      }
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      var random_animation_durations = getRandomArbitrary(0.2,1.5);
      console.log('%c'+ random_animation_durations,'color:orange; font-size:3em;');
      $span.css('animation-duration' , random_animation_durations + 's');
      $project_title.append( $span );
    });

    $text_div.append( $project_title );

    $project_link.append( $project_img_box );
    $project_link.append( $text_div );

    this.$el.append($project_link);
  }
});
