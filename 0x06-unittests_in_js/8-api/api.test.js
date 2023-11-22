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
