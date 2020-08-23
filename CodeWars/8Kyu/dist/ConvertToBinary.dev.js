"use strict";

/*
8kyu - Convert to Binary

Task Overview
Given a non-negative integer n, write a function toBinary/ToBinary 
which returns that number in a binary format.

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var toBinary = function toBinary(n) {
  return +(n >>> 0).toString(2);
};