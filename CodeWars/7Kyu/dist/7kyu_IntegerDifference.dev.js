"use strict";

/*

7kyu - Integer Difference 

Write a function that accepts two arguments: an array/list of integers and another integer (n).

Determine the number of times where two integers in the array have a difference of n.

For example:

[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)


 */
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var intDiff = function intDiff(arr, n) {
  var count = 0;

  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (Math.abs(arr[i] - arr[j]) === n) count++;
    }
  }

  return count;
};