"use strict";

// Implement a isPalindrome function with class constructor
function Palindrome(str) {
  this.str = str;
}

Palindrome.prototype.isPalindrome = function (str) {
  this.str = str;
  var cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/gi, "");
  var len = cleanStr.length;

  for (var i = 0; i < len / 2; i++) {
    if (cleanStr[i] !== cleanStr[len - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log(Palindrome.prototype.isPalindrome("eye"));
console.log("eye".Palindrome.prototype.isPalindrome());