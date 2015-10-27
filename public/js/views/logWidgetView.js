//Log Widget View
//
//

App.Views.LogWidgetView = Backbone.View.extend({

  tagName: 'li',

  className: 'log_widget' ,

  render_no_user_session: function() {
    console.log("%cLogWidgetView","color:rgba(210,210,210,1.0);font-size:1.35em;");

    console.log(this);
    console.log(this.el);
    console.log(this.$el);
    var $link = $('<a>').attr( 'href', "/auth/github" ).text( 'Login with Github' );
    this.$el.append( $link );
    return this
  } ,

  render_user_session: function() {
    console.log("%cLogWidgetView","color:rgba(210,210,210,1.0);font-size:1.35em;");
    var $img = $('<img>').attr({
      src: 'http://placehold.it/100x100' ,
      alt: 'this is test alt text in an img tag'
    });
    this.$el.append( $img );
    return this
  } ,

  initialize: function( opts ) {
    if ( opts.user_session === false ){
      this.user_session = false;
      this.render_no_user_session();
    } else {
      console.log("%c opts.user_session === true; ","color:rgba(10,210,210,1.0);font-size:2.5em;");
      this.user_session = true;
      this.render_user_session();
    }

  }

});
