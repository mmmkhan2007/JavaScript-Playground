"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');
var getout = false;

while (!getout) {
  var str = lines.shift();

  var _str$split = str.split(" "),
      _str$split2 = _slicedToArray(_str$split, 2),
      failKey = _str$split2[0],
      originalValue = _str$split2[1];

  if (failKey === "0" && originalValue === "0") {
    getout = true;
    continue;
  }

  var regex = new RegExp(failKey, "g");
  var realValue = originalValue.replace(regex, "").replace(/^0*/g, "") || "0";
  console.log(realValue);
}