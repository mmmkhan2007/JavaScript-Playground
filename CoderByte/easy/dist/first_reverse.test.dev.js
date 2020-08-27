"use strict";

var firstReverse = require('./first_reverse');

describe('firstReverse()', function () {
  test('reverses string and maintains capitalization and spacing', function () {
    expect(firstReverse('Hello World and Coders')).toBe('sredoC dna dlroW olleH');
    expect(firstReverse('12 -345')).toBe('543- 21');
  });
  test('returns empty string when passed empty string', function () {
    expect(firstReverse('')).toBe('');
  });
});