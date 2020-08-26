"use strict";

/*
8kyu - Grasshopper - Personalized

Personalized greeting

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message:

======= case | return --- | --- name equals owner | 'Hello boss' otherwise | 'Hello guest'

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var greet = function greet(n, o) {
  return n === o ? 'Hello boss' : 'Hello guest';
};