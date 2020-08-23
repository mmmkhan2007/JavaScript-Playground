"use strict";

/* 

7kyu - Simple Directions Reversal
In this Kata, you will be given directions and your task will be to
find your way back.

solve(["Begin on Road A","Right on Road B","Right on Road C","Left on 
	Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road 
	B', 'Left on Road A']
solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) 
=  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']
More examples in test cases.Good luck!

 */
function solve(arr) {
  var res = [],
      a = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _i = _step.value;
      a.push(_i.split(" "));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  res.push("Begin " + a.slice(-1).pop().slice(1).join(" "));

  for (var i = a.length - 1; i > 0; i--) {
    a[i][0] === "Right" ? res.push("Left " + a[i - 1].slice(1).join(" ")) : res.push("Right " + a[i - 1].slice(1).join(" "));
  }

  return res;
}