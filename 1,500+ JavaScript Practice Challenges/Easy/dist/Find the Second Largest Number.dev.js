"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*  

Find the Second Largest Number
Create a function that takes an array of numbers and returns the second largest number.

Examples
secondLargest([10, 40, 30, 20, 50]) ➞ 40

secondLargest([25, 143, 89, 13, 105]) ➞ 105

secondLargest([54, 23, 11, 17, 10]) ➞ 23

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################

/*  Solution 1   */
function secondLargest(arr) {
  var _arr$sort = arr.sort(function (x, y) {
    return y - x;
  }),
      _arr$sort2 = _toArray(_arr$sort),
      largest = _arr$sort2[0],
      second = _arr$sort2[1],
      rest = _arr$sort2.slice(2);

  return second;
}
/*  Solution 2   */


secondLargest = function secondLargest(a) {
  return a.sort(function (a, b) {
    return b - a;
  })[1];
};
/*  Solution 3  */

/*  Solution 4   */