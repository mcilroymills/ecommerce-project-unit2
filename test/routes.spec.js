/*Testing routes here!!!*/

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server/app');

var should = chai.should();

chai.use(chaiHttp);

describe('testing API routes', function () {
  it('should get the index page', function (done) {
    chai.request(server)
    .get('/')
    .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.html;
      res.text.should.have.string('<p class="text-center">$99.99</p>');
      done();
    });
  });
  it('should get the index page', function (done) {
    chai.request(server)
    .get('/products')
    .end(function(err, res) {
      console.log("response:");
      console.log(res.text);
      res.should.have.status(202);
      res.should.be.html;
      res.text.should.have.string('<h4>Products That We Love</h4>');
      done();
    });
  });
});