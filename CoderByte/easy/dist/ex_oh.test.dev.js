"use strict";

var exOh = require('./ex_oh');

describe('exOh()', function () {
  test('correctly returns unmatched exes and ohs', function () {
    expect(exOh('xooxxxxooxo')).toBe('false');
    expect(exOh('x')).toBe('false');
    expect(exOh('o')).toBe('false');
  });
  test('correctly returns matched exes and ohs', function () {
    expect(exOh('oooxxoooxxxx')).toBe('true');
  });
});