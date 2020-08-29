"use strict";

var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');
var casesLength = Number(lines.shift());
var caseIndex = 0;

for (var _caseIndex = 0; _caseIndex < casesLength; _caseIndex++) {
  var toBeBetween = function toBeBetween(num, min, max) {
    return num >= min && num <= max;
  };

  var string = lines.shift();
  var words = string.split("");

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var wordCode = word.charCodeAt();

    if (toBeBetween(wordCode, 65, 90) || toBeBetween(wordCode, 97, 122)) {
      words[i] = String.fromCharCode(wordCode + 3);
    }
  }

  words.reverse();
  var lastIndex = words.length - 1;
  var isPar = words.length % 2 === 0;
  var halfIndex = Math.floor(lastIndex / 2) + (isPar ? 1 : 0);
  var secondHalf = words.splice(halfIndex, isPar ? halfIndex : halfIndex + 1);

  for (var _i = 0; _i < secondHalf.length; _i++) {
    var _wordCode = secondHalf[_i].charCodeAt();

    secondHalf[_i] = String.fromCharCode(_wordCode - 1);
  }

  console.log(words.concat(secondHalf).join(""));
}