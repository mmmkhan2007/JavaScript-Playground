"use strict";

/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

 

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"
*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var countAndSay = function countAndSay(n) {
  var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
  return Array.from({
    length: n - 1
  }, function (v, i) {
    return str = str.replace(/(.)\1*/g, function (m) {
      return m.length + m[0];
    });
  }).reverse()[0] || str;
};