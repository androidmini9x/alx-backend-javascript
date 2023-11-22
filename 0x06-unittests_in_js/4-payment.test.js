const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('calculateNumber called with the correct arguments', () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
        const consoleSpy = sinon.spy(console, 'log');
        calculateNumberStub.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberStub.called).to.be.true;
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
        calculateNumberStub.restore();
        consoleSpy.restore();
    });
});
