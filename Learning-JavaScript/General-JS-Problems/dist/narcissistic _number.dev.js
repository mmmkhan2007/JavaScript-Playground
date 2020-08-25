"use strict";

// Problem STATEMENT - Check if a given number narcissistic number

/* Narcissistic number
Given N, check whether it is a Narcissistic number or not.
Note:Narcissistic Number is a number that is the sum of its own digits each raised to the power of the number of digits
https://www.geeksforgeeks.org/narcissistic-number/
*/
isNarcissistic = function isNarcissistic(num) {
  //convert the original number to string. I can do this in the below way, or using toString()
  // let numStr = '' + num;
  var numStr = num.toString();
  var numLen = numStr.length;
  var narcissisticResult = 0;

  for (var i in numStr) {
    narcissisticResult += Math.pow(parseInt(numStr[i]), numLen);
  }

  return num === narcissisticResult;
}; // console.log(isNarcissistic(153));
// 153 is Nacrissistic number - (3 digits), you can see 153 = 1^3 + 5^3 + 3^3
// Alternate Solution


isNarcissistic1 = function isNarcissistic1(num) {
  return num === num.toString().split('').reduce(function (narcissisticResult, currentNum) {
    return narcissisticResult + Math.pow(parseInt(currentNum), num.toString().length);
  }, 0);
};

console.log(isNarcissistic1(153));