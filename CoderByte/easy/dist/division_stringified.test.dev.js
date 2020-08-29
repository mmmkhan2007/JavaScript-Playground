"use strict";

var divisionStringified = require('./division_stringified');

describe('divisionStringified()', function () {
  test('returns properly formatted string', function () {
    expect(divisionStringified(123456789, 10000)).toBe('12,346');
  });
  test('handles result with no commas', function () {
    expect(divisionStringified(940000, 1000)).toBe('940');
    expect(divisionStringified(94000, 1000)).toBe('94');
    expect(divisionStringified(9400, 1000)).toBe('9');
  });
  test('handles result with more than one comma', function () {
    expect(divisionStringified(10000000, 10)).toBe('1,000,000');
  });
  test('rounds results', function () {
    expect(divisionStringified(999999, 1000)).toBe('1,000');
  });
  test('handles division by 0', function () {
    expect(divisionStringified(7, 0)).toBe('undefined');
  });
});