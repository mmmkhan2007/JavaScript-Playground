"use strict";

// 8kyu - Remove Exclamation Marks
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var removeExclamationMarks = function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
};