//Project Preview View
//
//
App.Views.ProjectPreviewView = Backbone.View.extend({
  tagName: 'li' ,
  className: 'project_preview col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2',
  render: function(){
    console.log("%cProjectPreviewView","color:rgba(200,200,200,1.0);font-size:1.25em;");
    //console.log(this);

    var $project_link = $('<a href="/#projects/' + this.model.attributes.project_url_id + '" ' + 'class="preview_link">');
    var $project_title = $('<h2>').text(this.model.attributes.title);


    console.log( $project_title.text().split('') );



    $project_title.text().split('').forEach(function( e, i ){
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

      var random_animation_durations = getRandomArbitrary(0.25, 1.25)
      console.log('%c'+ random_animation_durations,'color:orange; font-size:3em;')
      $span.css('animation-duration' , random_animation_durations + 's');



      $project_link.append( $span );


    });


    this.$el.append($project_link);
  } ,
  initialize: function(){
    this.listenTo(this.model, "change", this.render);
    this.render();
  }
});
