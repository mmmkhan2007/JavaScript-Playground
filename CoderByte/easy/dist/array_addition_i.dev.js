"use strict";

/**
 * Have the function arrayAdditionI(arr) take the array of numbers stored in arr
 * and return the string true if any combination of numbers in the array
 * (excluding the largest number) can be added up to equal the largest number in
 * the array, otherwise return the string false. For example: if arr contains
 * [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 =
 * 23. The array will not be empty, will not contain all the same elements, and
 * may contain negative numbers.
 *
 * https://www.coderbyte.com/results/bhanson:Array%20Addition%20I:JavaScript
 *
 * @param  {array} arr
 * @return {string} true or false
 */
function arrayAdditionI(arr) {
  // find largest number
  var largestIndex = 0;
  var largestNumber = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestIndex = i;
      largestNumber = arr[i];
    }
  }

  arr.splice(largestIndex, 1);
  var combos = [];
  var size = arr.length;

  for (var _i = 0, max = Math.pow(2, size); _i < max; _i++) {
    var num = _i.toString(2);

    while (num.length < size) {
      num = '0' + num;
    }

    combos.push(num);
  } // iterate over all combos of numbers


  for (var _i2 = 0; _i2 < combos.length; _i2++) {
    var sum = 0;

    for (var j = 0; j < combos[_i2].length; j++) {
      if (combos[_i2][j] === '1') {
        sum += arr[j];
      }
    }

    if (sum === largestNumber) {
      return 'true';
    }
  }

  return 'false';
}

module.exports = arrayAdditionI;