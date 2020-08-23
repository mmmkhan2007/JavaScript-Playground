"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*

7kyu - Shape Symmetry

Following on from 
[Points of Reflection(https://www.codewars.com/kata/points-of-reflection),
given a number of points and a single midpoint, a 2D shape can be inferred.

Task:

You will be given two inputs. The first will be a two-dimensional array in 
which the inner arrays contain two elements representing partial coordinates of 
a 2D shape. The second input will be a two-element array representing the shape's 
mid-point. Using the existing coordinates and the mid-point, return the complete 
shape as a two-dimensional array.

  */
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var symmetricShape = function symmetricShape(shape, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      x0 = _ref2[0],
      y0 = _ref2[1];

  return shape.concat(shape.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        x1 = _ref4[0],
        y1 = _ref4[1];

    return [2 * x0 - x1, 2 * y0 - y1];
  }));
};