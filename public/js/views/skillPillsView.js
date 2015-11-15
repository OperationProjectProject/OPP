App.Views.SkillPillsView = Backbone.View.extend({

  tagName: 'div' ,

  className: 'row' ,

  initialize: function() {

    if ( this.model ) {
      console.log( this.model );
      this.skills_array = this.model.attributes.top_skills;
      console.log( this.skills_array );
      this.tools_array = this.model.attributes.top_tools;
      console.log( this.tools_array );

      //this.skills_and_tools_array = this.skills_array.concat( this.tools_array );
      this.skills_and_tools_array = [];



      var self = this;
      this.skills_array.forEach( function( e, i ) {
        if ( e !== "") {
          self.skills_and_tools_array.push( e );
        }
      });
      this.tools_array.forEach( function( e, i ) {
        if ( e !== "") {
          self.skills_and_tools_array.push( e );
        }
      });

      console.log( this.skills_and_tools_array.length );
      console.log( this.skills_and_tools_array );

    }

    this.render();
    this.listenTo(this.model, "change", this.render);
  } ,

  render: function() {
    console.log("%cSkillPillsView","color:rgba(200,200,200,1.0);font-size:1.25em;");

    this.$el.empty();

//SKILLS
    //Create content box for skill pills
    var $skills_box = $('<div>').attr({
      'class': 'content_box' ,
      'id': 'skills_box'
    });
    //Create card for skill pills
    var $skills_card = $('<div>').attr({
      'class': 'card'
    });
    var $skills_legend = $('<legend>').text('top skills');
    $skills_card.append( $skills_legend );
    //Append card to box, and box to row
    $skills_box.append( $skills_card );

    var $top_skills_ol = $('<ol id="top_skills_list" class="col-sm-12 col-md-12 col-lg-12">');
    $skills_card.append( $top_skills_ol );

    this.skills_array.forEach( function( e, i ) {
      if ( e !== "" ) {
        var $skill_li = $('<li class="skill_pills" >').text( e );
        $top_skills_ol.append( $skill_li );
      }
    });



//TOOLS
    var $tools_box = $('<div>').attr({
      'class': 'content_box' ,
      'id': 'tools_box'
    });
    //Create card for skill pills
    var $tools_card = $('<div>').attr({
      'class': 'card'
    });
    var $tools_legend = $('<legend>').text('top tools');
    $tools_card.append( $tools_legend );
    //Append card to box, and box to row
    $tools_box.append( $tools_card );

    var $top_tools_ol = $('<ol id="top_tools_list" class="col-sm-12 col-md-12 col-lg-12">');
    $tools_card.append( $top_tools_ol );

    this.tools_array.forEach( function( e, i ) {
      if ( e !== "" ) {
        var $tool_li = $('<li class="skill_pills" >').text( e );
        $top_tools_ol.append( $tool_li );
      }
    });


    console.log( $top_skills_ol.children().length > 0 );
    console.log( $top_tools_ol.children().length > 0 );
    if ( $top_skills_ol.children().length > 0 && $top_tools_ol.children().length > 0 ) {
      $skills_box.addClass( 'col-xs-12 col-sm-12 col-md-4 col-md-offset-2 col-lg-4 col-lg-offset-2' );
      $tools_box.addClass( 'col-xs-12 col-sm-12 col-md-4 col-lg-4' );
      this.$el.append( $skills_box );
      this.$el.append( $tools_box );
    } else if ( $top_skills_ol.children().length > 0 && $top_tools_ol.children().length === 0 ) {
      $skills_box.addClass( 'col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' );
      this.$el.append( $skills_box );
    } else if (  $top_skills_ol.children().length === 0 && $top_tools_ol.children().length > 0 ) {
      $tools_box.addClass( 'col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' );
      this.$el.append( $tools_box );
    } else {
      console.log('no skills or tools content');
    }


/*

    //console.log( $top_skills_ol instanceOf $);
    console.log( $top_skills_ol.children().length > 0  );
    if ( $top_skills_ol.children().length > 0 ) {
      this.$el.append( $skills_box );
    }

    console.log( $top_tools_ol.children().length > 0);
    if ( $top_tools_ol.children().length > 0 ) {
      this.$el.append( $tools_box );
    }
*/



/*
            //Create content box for skill pills
            var $skill_pills_box = $('<div>').attr({
              'class': 'content_box col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2' ,
              'id': 'skill_pills_box'
            });

            //Create card for skill pills
            var $skill_pill_card = $('<div>').attr({
              'class': 'card'
            });

            //Append card to box, and box to row
            $skill_pills_box.append( $skill_pill_card );
            this.$el.append( $skill_pills_box );

            var $skill_pill_legend = $('<legend>').text('skills & tools');
            $skill_pill_card.append( $skill_pill_legend );




            var user_top_three_skills = this.model.attributes.top_skills;
            var user_top_five_tools = this.model.attributes.top_tools;
            var skill_pill_text_list = user_top_three_skills.concat( user_top_five_tools );


            console.log(user_top_three_skills);
            console.log(user_top_five_tools);
            console.log(skill_pill_text_list);

            function shuffle(array) {
              var currentIndex = array.length, temporaryValue, randomIndex ;

              // While there remain elements to shuffle...
              while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
              }

              return array;
            }

            var shuffled_skill_pills = shuffle( skill_pill_text_list );


            console.log(shuffled_skill_pills);

            var $skill_pill_ul = $('<ul id="skill_pill_list" class="skill_pills col-sm-12 col-md-12 col-lg-12">');

            shuffled_skill_pills.forEach( function( e, i ) {
              if ( e !== '' ) {
                var $skill_pill = $( '<li>' );
                $skill_pill.attr({
                  'class': 'skill_pill'
                }).text( e );
                //console.log(e);

                $skill_pill_ul.append( $skill_pill );

              }
            });
            $skill_pill_card.append( $skill_pill_ul );

*/



  } ,

  hasContent: function() {
    console.log("hasConent function");
    console.log( this.skills_and_tools_array.length );
    console.log( this.skills_and_tools_array.length > 0 );
    return ( this.skills_and_tools_array.length > 0 );
  }



});
