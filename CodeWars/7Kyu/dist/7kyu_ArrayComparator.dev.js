"use strict";

/*
7kyu - Array Comparator

You have two arrays in this kata, every array contain only unique elements. Your task is to calcualate number of elements in first array which also are in second array.

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var matchArrays = function matchArrays(v, r) {
  return v.filter(function (e) {
    return r.indexOf(e) != -1;
  }).length;
};