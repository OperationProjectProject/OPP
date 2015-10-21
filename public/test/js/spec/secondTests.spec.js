describe('Navigation View', function () {

  it('Navigation View --> should be an object', function () {
    expect( typeof app.gui.navigationView ).to.equal('object');
  });

  it('Navigation View --> should be 1 DOM element', function () {
    expect( app.gui.navigationView.$el.length ).to.equal( 1 );
  });

  it('Navigation View --> should be a DOM element with 4 child elements', function () {
    expect( app.gui.navigationView.$el[0].children.length ).to.equal( 4 );
  });

});


describe('Nav Tabbing Order (non-logged user)', function () {

  it('Home Link should be tabindex 1', function () {
    expect( null ).to.equal( null );
  });

  it('Log in Link should be tabindex 2', function () {
    expect( null ).to.equal( null );
  });

  it('Log in Link should be tabindex 3', function () {
    expect( null ).to.equal( null );
  });

  it('Log in Link should be tabindex 4', function () {
    expect( null ).to.equal( null );
  });
});


describe('Nav Tabbing Order (logged-in user)', function () {

  it('Home Link should be tabindex 1', function () {
    expect( null ).to.equal( null );
  });

  it('Profile Options should be tabindex 2', function () {
    expect( null ).to.equal( null );
  });

  it('My Profile should be tabindex 3', function () {
    expect( null ).to.equal( null );
  });

  it('Edit My Profile should be tabindex 4', function () {
    expect( null ).to.equal( null );
  });

  it('My Projects should be tabindex 5', function () {
    expect( null ).to.equal( null );
  });

  it('Log Out should be tabindex 6', function () {
    expect( null ).to.equal( null );
  });

  it('Profiles should be tabindex 7', function () {
    expect( null ).to.equal( null );
  });

  it('Project should be tabindex 8', function () {
    expect( null ).to.equal( null );
  });

});


describe('Nav Link -- Home', function () {

  it( 'Should refresh the page' , function () {
    expect( null ).to.equal( null );
  });

});

describe('Nav Link -- Profiles', function () {

  it( 'Should link to profiles' , function () {
    expect( null ).to.equal( null );
  });

  it( 'All profiles view should be rendered' , function () {
    expect( null ).to.equal( null );
  });

});

describe('Nav Link -- Projects', function () {

  it( 'Should link to Projects' , function () {
    expect( null ).to.equal( null );
  });

  it( 'All projects view should be rendered' , function () {
    expect( null ).to.equal( null );
  });

});

describe('Nav Subview -- Log Widget', function () {

  it('Should log in and out', function () {
    expect( null ).to.equal( null );
  });

});
