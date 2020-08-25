"use strict";

/* Find the intersection of two arrays. Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?
intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
intersection([1, 5, 4, 2], [7, 12])             // []
*/
// My first attempt at it
arrayIntersection1 = function arrayIntersection1(arr1, arr2) {
  return arr1.filter(function (item) {
    return arr2.indexOf(item) !== -1;
  });
}; // console.log(arrayIntersection1 ( [1, 5, 4, 2], [8, 91, 4, 1, 3] ));
// console.log(arrayIntersection1 ( [1, 5, 4, 2], [7, 12] ));
// console.log(arrayIntersection1 ( [1, 5, 4, 2], [7, 12, 2] ));
// More compact version of above


arrayIntersection1_compact = function arrayIntersection1_compact(arr1, arr2) {
  return arr1.filter(function (i) {
    return arr2.indexOf(i) !== -1;
  });
}; // Second Alt


arrayIntersection2 = function arrayIntersection2(arr1, arr2) {
  var intersection = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = arr2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _j = _step2.value;

          if (i === _j) {
            intersection.push(i);
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
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

  return intersection;
}; // console.log(arrayIntersection2 ( [1, 5, 4, 2], [8, 91, 4, 1, 3] ));
// console.log(arrayIntersection2 ( [1, 5, 4, 2], [7, 12] ));
// console.log(arrayIntersection2 ( [1, 5, 4, 2], [7, 12, 2] ));
// The most elegant and compact


arrayIntersection3 = function arrayIntersection3(arr1, arr2) {
  return arr1.filter(function (elem) {
    return -1 !== arr2.indexOf(elem);
  });
}; // console.log(arrayIntersection3 ( [1, 5, 4, 2], [8, 91, 4, 1, 3] ));  // => [ 1, 4 ]
// console.log(arrayIntersection3 ( [1, 5, 4, 2], [7, 12] ));      // => []
// console.log(arrayIntersection3 ( [1, 5, 4, 2], [7, 12, 2] ));   // => [ 2 ]

/* Destructively finds the intersection of two arrays in a simple fashion.
  a - first array, must already be sorted
  b - second array, must already be sorted
 State of input arrays is undefined when the function returns.  They should be (prolly) be dumped.
 Should have O(n) operations, where n satisfies n = MIN(a.length, b.length)
 */


arrayIntersection_destructive = function arrayIntersection_destructive(arr1, arr2) {
  var intersection = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      arr1.shift();
    } else if (arr1[0] > arr2[0]) {
      arr2.shift();
    } else // i.e they are equal
      {
        intersection.push(arr1.shift());
        arr2.shift();
      }
  }

  return intersection;
}; // console.log(arrayIntersection_destructive ( [1, 2, 4, 5], [1, 3, 4, 8, 91] ));  // => [ 1, 4 ]
// console.log(arrayIntersection_destructive ( [1, 2, 4, 5], [7, 12] ));      // => []
// console.log(arrayIntersection_destructive ( [1, 2, 4, 5], [2, 7, 12] ));   // => [ 2 ]
// Non destructive and non-sorted


arrayIntersection4 = function arrayIntersection4(arr1, arr2) {
  var intersection = [];
  arr1 = arr1.sort(function (a, b) {
    return a - b;
  });
  arr2 = arr2.sort(function (a, b) {
    return a - b;
  });
  var i = j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) i++;else if (arr1[i] > arr2[j]) j++;else {
      intersection.push(arr1[i]);
      i++, j++;
    }
  }

  return intersection;
};

console.log(arrayIntersection4([1, 5, 4, 2], [8, 91, 4, 1, 3])); // => [ 1, 4 ]

console.log(arrayIntersection4([1, 5, 4, 2], [7, 12])); // => []

console.log(arrayIntersection4([1, 5, 4, 2], [7, 12, 2])); // => [ 2 ]