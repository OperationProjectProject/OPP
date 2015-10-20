describe('Testing Properties of app and app.views', function () {

  before(function () {
    // any code you put here will be run before any of your tests run
  });

  after(function() {
    // any code you put here will be run after all of your tests run
  });

  beforeEach(function () {
    // var app = new app.MainView
    // any code you put here will be run before each of your tests run
  });

  afterEach(function () {
    // any code you put here will be run after each of your tests run
  });

  it('typeof app should be an object', function () {
    expect(typeof app).to.equal('object');
  });

  it('app should be an object', function () {
    expect(app).to.be.a('object');
  });

  it('typeof app.AllProjectsView should be a function', function() {
    expect(typeof app.AllProjectsView).to.equal('function');
  });

  it('app.AllProjectsView should be a function', function() {
    expect(app.Views.AllProjectsView).to.be.a('function');
  });

  it('typeof app.EditProfileView should be a function', function() {
    expect(typeof app.Views.EditProfileView).to.equal('function');
  });

  it('app.EditProfileView should be a function', function() {
    expect(app.Views.EditProfileView).to.be.a('function');
  });

  it('typeof app.EditProjectView should be a function', function() {
    expect(typeof app.Views.EditProjectView).to.equal('function');
  });

  it('app.EditProjectView should be a function', function() {
    expect(app.Views.EditProjectView).to.be.a('function');
  });

  it('typeof app.ErrorView should be a function', function() {
    expect(typeof app.Views.ErrorView).to.equal('function');
  });

  it('app.ErrorView should be a function', function() {
    expect(app.Views.ErrorView).to.be.a('function');
  });

  it('typeof app.ForgotPasswordView should be a function', function() {
    expect(typeof app.Views.ForgotPasswordView).to.equal('function');
  });

  it('app.ForgotPasswordView should be a function', function() {
    expect(app.Views.ForgotPasswordView).to.be.a('function');
  });

  it('typeof app.ProjectView should be a function', function() {
    expect(typeof app.Views.ProjectView).to.equal('function');
  });

  it('app.ProjectView should be a function', function() {
    expect(app.Views.ProjectView).to.be.a('function');
  });

  it('OPP_users should exist in the database', function() {
    expect(app.Views.OPP_users).to.be.a('object');
  });
});
