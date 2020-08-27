"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*

8kyu - If you can't sleep, just count sheeps!!

Task:
Given a number, 3 for example, return a string with a murmur: 
"1 sheep...2 sheep...3 sheep..."

Note:
You will always receive a positive integer.

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var countSheep = function countSheep(n) {
  return _toConsumableArray(Array(n).keys()).map(function (x) {
    return x + 1 + " sheep...";
  }).join("");
};