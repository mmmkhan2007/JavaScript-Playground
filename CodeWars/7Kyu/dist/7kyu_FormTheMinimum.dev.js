"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*

7kyu - Form the Minimum

Given a list of digits, return the smallest number that could be formed 
from these digits, using the digits only once (= ignore duplicates).

Note: Only positive integers will be passed to the function (> 0 ), no 
negatives or zeros.

Examples
[1, 3, 1]  ==> 13

[5, 7, 5, 9, 7]  ==> 579

[1, 9, 3, 1, 7, 4, 6, 6, 7] ==> 134679

  */
function minValue(values) {
  return +_toConsumableArray(new Set(values)).sort().join("");
}