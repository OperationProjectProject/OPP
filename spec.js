var request = require('supertest');
require = require('really-need');
describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('./server', { bustCache: true });
  });
  afterEach(function (done) {
    server.close(done);
  });
  it('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    console.log('test 404');
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});

describe('GET /', function(){
  var server;
  beforeEach(function () {
    server = require('./server', { bustCache: true });
  });
  afterEach(function (done) {
    server.close(done);
  });
  it('respond with text/html', function(done){
    request(server)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200, done);
  });
});
