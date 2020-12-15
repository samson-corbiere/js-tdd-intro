// test/capitalizeFirst.test.js
const assert = require('assert');
const rectangle = require('../rectangleForTest');

// give the test suite a label using describe
describe('rectangle', () => {
  // give the test a label using it

  it('isSquare dont have same length', () => {
    assert.strictEqual(rectangle.isSquare(), false);
  });

  it('getArea send area of rectangle', () => {
    assert.strictEqual(rectangle.getArea(), rectangle.a * rectangle.b);
  });

  it('rectangle.getPerimeter send surface of rectangle', () => {
    assert.strictEqual(rectangle.getPerimeter(), rectangle.a * 2 + rectangle.b * 2);
  });
});