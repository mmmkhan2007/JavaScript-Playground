"use strict";

/**
 * @param {number} n
 * @return {number}
 */
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
// interative
var _climbStairs = function climbStairs(n) {
  var result = 0;
  var stepOne = 1;
  var stepTwo = 2;
  if (n === 1) return stepOne;
  if (n === 2) return stepTwo;

  for (var i = 3; i <= n; i++) {
    result = stepOne + stepTwo;
    stepOne = stepTwo;
    stepTwo = result;
  }

  return result;
}; // recursive, exponential complexity. Not accepted


var _climbStairs = function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n > 2) return _climbStairs(n - 2) + _climbStairs(n - 1);
}; // not optimal


var _climbStairs = function _climbStairs(n) {
  var f = [1, 2];

  for (var i = 2; i < n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[n - 1];
};