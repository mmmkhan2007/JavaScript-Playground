"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*

7kyu - Simple Eviternity Numbers

An eviternity number is a number in which the count of the 
digit 8 >= count of digit 5 >= count of digit 3. The first few 
eviternity numbers are as follows. Note that they comprise of 
digits 8, 5 and 3 only.

[8, 58, 85, 88, 358, 385, 538, 583, 588, 835, 853, 858, 885, 888]
You will be given two integers, a and b, and your task is to return 
the number of eviternity numbers in the range >= a and < b.

For example:
solve(0,1000) = 14, because they are [8, 58, 85, 88, 358, 385, 
538, 583, 588, 835, 853, 858, 885, 888]
The upper bound will not exceed 500,000.

More examples in test cases. Good luck!

  */
function solve(a, b) {
  var count = 0;

  for (var i = a; i < b; i++) {
    var res = i + '';
    if (!/^[358]+$/.test(res)) continue;
    res = _toConsumableArray(res);
    var n8 = res.filter(function (x) {
      return x === '8';
    }).length,
        n5 = res.filter(function (x) {
      return x === '5';
    }).length,
        n3 = res.length - n5 - n8;
    count += n8 >= n5 && n5 >= n3;
  }

  return count;
}