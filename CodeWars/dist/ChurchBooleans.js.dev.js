"use strict";

/*

 Church Booleans 

There are a few Katas about Church Numerals so let's talk about booleans.

In lambda calculus, the only primitive are lambdas. No numbers, no strings, and of course no booleans. Everything is reduced to anonymous functions.

Booleans are defined thusly (this definition is preloaded for you) :

const True = T => F => T;
const False = T => F => F;
Your task will be to implement basic operators on booleans (using only lambdas and function application) : Not, And, Or and Xor.

To help, the function unchurch comes preloaded, and returns the native boolean given a church boolean :

unchurch(True); //true;
Note: You should not use the following:

numbers
strings
booleans
boolean operators
objects (curly brackets) or arrays (square brackets)
regexp
"new"

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var Not = function Not(A) {
  return A(False)(True);
};

var And = function And(A) {
  return function (B) {
    return A(B)(A);
  };
};

var Or = function Or(A) {
  return function (B) {
    return A(A)(B);
  };
};

var Xor = function Xor(A) {
  return function (B) {
    return A(Not(B))(B);
  };
};