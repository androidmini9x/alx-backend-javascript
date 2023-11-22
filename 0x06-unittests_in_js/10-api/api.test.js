const { expect } = require('chai');
const requset = require('request');

const API = 'http://localhost:7865';

describe('Index page', () => {
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

describe('Test login Endpoist', () => {
  it('/login: Pass Ronny as userName parameter', (done) => {
    requset.post(`${API}/login`, { json: { userName: 'Ronny' } }, (_, resp, body) => {
      expect(resp.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Ronny');
      done();
    });
  });

  it('/available_payments Endpoint', (done) => {
    requset.get(`${API}/available_payments`, (_, resp, body) => {
      expect(resp.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
});
