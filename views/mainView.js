// var app = app || {};

App.MainView = Backbone.View.extend({
  //This view contains NavigationView, multiple links/methods, as well as individual divs for each link/method:

  //1. Link/method to MainView
  //2. Link/method to StudentsView
  //3. Link/method to ProjectsView
  //4. Link/method to ClassesView



//Create a Navigation View at the top of the page:
//var navigationView = new NavigationView




  render: function(){
  $loginButton = $('<button type="button" name="button" id="loginButton">').text('Login');
  $registerButton = $('<button type="button" name="button" id="registerButton">').text('Register');
  this.$el.append($loginButton);
  this.$el.append($registerButton);
  $('#app').append(this.$el);
  },
  intialize: function() {
    this.render();
  }
});
