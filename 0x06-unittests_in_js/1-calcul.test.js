const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber v2', () => {
  it('Sum two number', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('Subtract two number', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('Divide two number', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('Divied by zero', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
