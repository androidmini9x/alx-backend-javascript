const { expect } = require('chai');
const requset = require('request');

describe('Index page', () => {
  const API = 'http://localhost:7865';
  let respone = {};

  beforeEach((done) => {
    requset.get(API, (err, resp, body) => {
      if (err) {
        done(err);
      } else {
        respone = {
          error: err,
          statusCode: resp && resp.statusCode,
          body: body
        }
        done();
      }
    });
  });

  it('GET /: statusCode', () => {
    expect(respone.statusCode).to.be.equal(200);
  });

  it('GET /: body', () => {
    expect(respone.body).to.be.equal('Welcome to the payment system');
  });
});

describe('Get Cart id', () => {
  const API = 'http://localhost:7865';

  it('GET /cart/12 :id is Number', (done) => {
    requset.get(`${API}/cart/12`, (_, resp, body) => {
      expect(resp.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });

  });

  it('GET /cart/aaa :id not a Number', (done) => {
    requset.get(`${API}/cart/aaa`, (_, resp) => {
      expect(resp.statusCode).to.be.equal(404);
      done();
    });
  });
});
