"use strict";

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*

Description:
You will be given a string of letters. The string must be returned in alphabetical order.

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
function alphabetti(str) {
  return str.split(_templateObject2()).sort(function (a, b) {
    return a.toLowerCase() > b.toLowerCase();
  }).join(_templateObject());
}