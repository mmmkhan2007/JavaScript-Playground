"use strict";

var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');
var leds = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
var caseTestLength = Number(lines.shift());

for (var i = 0; i < caseTestLength; i++) {
  var ledQuantity = 0;
  var value = lines.shift();
  var valueArray = value.split("");

  for (var _i = 0; _i < valueArray.length; _i++) {
    var item = Number(valueArray[_i]);
    ledQuantity += leds[item];
  }

  console.log("".concat(ledQuantity, " leds"));
}