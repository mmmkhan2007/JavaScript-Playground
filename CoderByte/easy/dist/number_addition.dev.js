"use strict";

/**
 * Have the function numberAddition(str) take the str parameter, search for all
 * the numbers in the string, add them together, then return that final number.
 * For example: if str is "88Hello 3World!" the output should be 91. You will
 * have to differentiate between single digit numbers and multiple digit numbers
 * like in the example above. So "55Hello" and "5Hello 5" should return two
 * different answers. Each string will contain at least one letter or symbol.
 *
 * https://www.coderbyte.com/results/bhanson:Number%20Addition:JavaScript
 *
 * @param  {string} str
 * @return {number}
 */
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
function numberAddition(str) {
  var DIGITS = '0123456789';
  var numbers = []; // First find numbers

  for (var i = 0, number = ''; i < str.length; i++) {
    if (!DIGITS.includes(str[i])) {
      if (number !== '') {
        numbers.push(number);
      }

      number = '';
    } else {
      number += str[i]; // Special case for last char

      if (i === str.length - 1) {
        numbers.push(number);
      }
    }
  }

  var sum = 0;

  for (var _i = 0; _i < numbers.length; _i++) {
    sum += parseInt(numbers[_i]);
  }

  return sum;
}

module.exports = numberAddition;