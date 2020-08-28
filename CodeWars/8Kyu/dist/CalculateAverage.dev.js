"use strict";

// 8kyu - Calculate Average
// Write function avg which calculates average of numbers in given list.
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
function find_average(array) {
  return array.reduce(function (a, b) {
    return a + b;
  }, 0) / array.length;
}