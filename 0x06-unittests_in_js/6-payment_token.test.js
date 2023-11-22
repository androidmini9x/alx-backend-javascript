const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');
describe('Async tests with done', () => {
  it('getPaymentTokenFromAPI', (done) => {
    getPaymentTokenFromAPI(true).then(resp => {
      expect(resp).to.include({ data: 'Successful response from the API' });
      done();
    })
      .catch((err) => done(err));;
  });
});