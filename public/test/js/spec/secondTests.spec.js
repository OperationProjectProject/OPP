console.log(" ----- secondTests -----");
console.log(" ----- how do i get this to run? -----");

describe('Testing Navigation View', function () {
  it('typeof object', function () {
    expect( typeof {} ).to.equal('object');
  });

  it('app.gui.navigationView', function () {
    expect( typeof app.gui.navigationView ).to.equal('object');
  });

  it('app.gui.navigationView', function () {
    expect( app.gui.navigationView.$el.length ).to.equal( 1 );
  });

});
