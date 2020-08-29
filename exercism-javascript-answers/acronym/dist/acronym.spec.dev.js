"use strict";

var _acronym = require("./acronym");

describe('Acronyms are produced from', function () {
  test('title cased phrases', function () {
    expect((0, _acronym.parse)('Portable Network Graphics')).toEqual('PNG');
  });
  test('other title cased phrases', function () {
    expect((0, _acronym.parse)('Ruby on Rails')).toEqual('ROR');
  });
  test('phrases with punctuation', function () {
    expect((0, _acronym.parse)('First In, First Out')).toEqual('FIFO');
  });
  test('phrases with all uppercase words', function () {
    expect((0, _acronym.parse)('GNU Image Manipulation Program')).toEqual('GIMP');
  });
  test('phrases with punctuation without whitespace', function () {
    expect((0, _acronym.parse)('Complementary metal-oxide semiconductor')).toEqual('CMOS');
  });
  test('long phrases', function () {
    expect((0, _acronym.parse)('Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me')).toEqual('ROTFLSHTMDCOALM');
  });
  test('phrases with consecutive delimiters', function () {
    expect((0, _acronym.parse)('Something - I made up from thin air')).toEqual('SIMUFTA');
  });
  test('phrases with apostrophes', function () {
    expect((0, _acronym.parse)("Halley's Comet")).toEqual('HC');
  });
  test('phrases with underscore emphasis', function () {
    expect((0, _acronym.parse)('The Road _Not_ Taken')).toEqual('TRNT');
  });
});