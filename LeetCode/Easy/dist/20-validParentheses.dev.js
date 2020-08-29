"use strict";

/*  


*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function isValid(s) {
  var stack = [];

  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    }

    if (s[i] === ')') {
      if (stack[stack.length - 1] !== '(') return false;else stack.pop();
    }

    if (s[i] === ']') {
      if (stack[stack.length - 1] !== '[') return false;else stack.pop();
    }

    if (s[i] === '}') {
      if (stack[stack.length - 1] !== '{') return false;else stack.pop();
    }
  }

  return stack.length === 0;
}; // second try


var isValid = function isValid(s) {
  var stack = [];
  s.split('').forEach(function (_char) {
    if (_char === '(' || _char === '{' || _char === '[') {
      stack.push(_char);
    }

    if (_char === ')') {
      if (stack.length > 0 && stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(_char);
      }
    }

    if (_char === ']') {
      if (stack.length > 0 && stack[stack.length - 1] === '[') {
        stack.pop();
      } else {
        stack.push(_char);
      }
    }

    if (_char === '}') {
      if (stack.length > 0 && stack[stack.length - 1] === '{') {
        stack.pop();
      } else {
        stack.push(_char);
      }
    }
  });
  return stack.length === 0;
};