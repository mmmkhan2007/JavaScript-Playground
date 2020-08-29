"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = void 0;

var parse = function parse(phrase) {
  return phrase.toUpperCase().match(/([A-Z]|')+/g).map(function (word) {
    return word[0];
  }).join("");
};

exports.parse = parse;