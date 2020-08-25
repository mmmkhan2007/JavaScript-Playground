"use strict";

/*A pipe function takes an n sequence of functions or operations ; in which each operation takes an argument; process it; and gives the processed output as an input for the next operation in the sequence. The result of a pipe function is a function that is a bundled up version of the sequence of operations.
Lets implement a pipe function to performs left-to-right function composition.
Use Array.reduce() with the spread operator (...) to perform left-to-right function composition. The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.
*/
var pipeFunction = function pipeFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (x, y) {
    return function () {
      return y(x.apply(void 0, arguments));
    };
  });
}; // Example implementation


var add5 = function add5(x) {
  return x + 5;
};

var multiply = function multiply(x, y) {
  return x * y;
};

var multiplyAndAdd5 = pipeFunction(multiply, add5);
console.log(multiplyAndAdd5(5, 2)); // 15 because ((5 * 2) + 5)