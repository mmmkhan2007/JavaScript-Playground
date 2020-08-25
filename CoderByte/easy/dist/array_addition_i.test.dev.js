"use strict";

var arrayAdditionI = require('./array_addition_i');

describe('arrayAdditionI()', function () {
  test('Correctly finds combination equal to largest number', function () {
    expect(arrayAdditionI([4, 6, 23, 10, 1, 3])).toBe('true');
  });
  test('Correctly finds no combination equal to largest number', function () {
    expect(arrayAdditionI([4, 6, 230, 10, 1, 3])).toBe('false');
  });
});