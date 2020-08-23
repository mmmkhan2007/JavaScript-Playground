"use strict";

/**
 * Using the JavaScript language, have the function arrayMinJumps(arr) take the
 * array of integers stored in arr, where each integer represents the maximum
 * number of steps that can be made from that position, and determine the least
 * amount of jumps that can be made to reach the end of the array. For example:
 * if arr is [1, 5, 4, 6, 9, 3, 0, 0, 1, 3] then your program should output the
 * number 3 because you can reach the end of the array from the beginning via
 * the following steps: 1 -> 5 -> 9 -> END or 1 -> 5 -> 6 -> END. Both of these
 * combinations produce a series of 3 steps. And as you can see, you don't
 * always have to take the maximum number of jumps at a specific position, you
 * can take less jumps even though the number is higher.
 *
 * If it is not possible to reach the end of the array, return -1.
 *
 * https://www.coderbyte.com/results/bhanson:Array%20Min%20Jumps:JavaScript
 *
 * @param  {array} arr of integers
 * @return {number}
 */
function arrayMinJumps(arr) {
  // Brute force
  // Generate combos
  var combos = [];

  for (var max = Math.pow(2, arr.length), i = max / 2; i < max; i++) {
    var combo = i.toString(2);
    combos.push(combo);
  } // Find combos that can reach the end


  var goodCombos = [];
  combos.forEach(function (combo) {
    var goodCombo = true;

    for (var _i = 0, last = 0, skips = 0; _i < combo.length; _i++) {
      if (combo[_i] === '1') {
        if (_i - last > skips) {
          // fail
          goodCombo = false;
          break;
        }

        skips = arr[_i];
        last = _i;
      }
    } // Must be able to get to the end


    if (combo[combo.length - 1] !== '1') {
      goodCombo = false;
    }

    if (goodCombo) {
      goodCombos.push(combo);
    }
  }); // Replace combos with number of jumps to reach the end,
  // and sort combos by number of jumps ascending

  var numJumps = goodCombos.map(function (combo) {
    return combo.split('').map(Number).reduce(function (sum, value) {
      return sum += value;
    }, -1);
  }).sort(function (a, b) {
    return a - b;
  });

  if (numJumps.length === 0) {
    return -1;
  }

  return numJumps[0];
}

module.exports = arrayMinJumps;