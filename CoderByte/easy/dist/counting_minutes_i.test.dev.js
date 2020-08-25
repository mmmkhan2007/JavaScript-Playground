"use strict";

var countingMinutesI = require('./counting_minutes_i');

describe('countingMinutesI()', function () {
  test('returns correct number of minutes between two times', function () {
    expect(countingMinutesI('9:00am-10:00am')).toBe(60);
    expect(countingMinutesI('1:00pm-11:00am')).toBe(1320);
  });
  test('correctly returns 0 for same input', function () {
    expect(countingMinutesI('9:00am-09:00am')).toBe(0);
    expect(countingMinutesI('1:00pm-1:00pm')).toBe(0);
  });
});