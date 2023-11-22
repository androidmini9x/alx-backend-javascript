const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('Two int number', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('One int and one float number', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('Two float number', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('Two float number', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
