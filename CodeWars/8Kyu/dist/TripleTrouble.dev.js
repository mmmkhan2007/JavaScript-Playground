"use strict";

/*

8kyu - Triple Trouble

Create a function that will return a string that combines all of the letters 
of the three inputed strings in groups. Taking the first letter of all of the 
inputs and grouping them next to each other. Do this for every letter, see example 
below!

Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
function tripleTrouble(one, two, three) {
  var temp = "";

  for (var i = 0; i < one.length; i++) {
    temp += "".concat(one[i]).concat(two[i]).concat(three[i]);
  }

  return temp;
}