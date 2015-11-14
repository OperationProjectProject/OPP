App.Views.SkillPillsView = Backbone.View.extend({

  tagName: 'div' ,

  className: 'row' ,

  initialize: function() {
    this.render();
    this.listenTo(this.model, "change", this.render);
  } ,

  render: function() {


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


  } ,

  hasContent: function() {

    console.log("hasConent function");
    return true;

  }



});
