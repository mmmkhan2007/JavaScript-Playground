"use strict";

/*

Description:

Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

I have created two objects that return a one word name in response to the first letter of your first name and one for the first letter of your surname.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
Happy hacking!

*/
var firstLetter = function firstLetter(str) {
  return str[0].toUpperCase();
};

var isValidName = function isValidName(name) {
  return /[a-z]/gi.test(name);
};

var aliasGen = function aliasGen(fName, sName) {
  return isValidName(fName[0]) && isValidName(sName[0]) ? "".concat(firstName[firstLetter(fName)], " ").concat(surname[firstLetter(sName)]) : 'Your name must start with a letter from A - Z.';
};