"use strict";

var dashInsert = require('./dash_insert');

describe('dashInsert()', function () {
  test('correctly inserts dashes between odd numbers', function () {
    expect(dashInsert('454793')).toBe('4547-9-3');
  });
  test('correctly inserts no dashes when no odd numbers', function () {
    expect(dashInsert('02468')).toBe('02468');
  });
  test('correclty inserts no dashes when no consecutive odd numbers', function () {
    expect(dashInsert('123456789')).toBe('123456789');
  });
  test('handles empty string', function () {
    expect(dashInsert('')).toBe('');
  });
  test('handles single odd number', function () {
    expect(dashInsert('7')).toBe('7');
  });
});