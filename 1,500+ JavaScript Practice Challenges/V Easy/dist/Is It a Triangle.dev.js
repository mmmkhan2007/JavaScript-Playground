"use strict";

/*  
Is It a Triangle?
Create a function that takes three numbers as arguments and returns true if it's a triangle and false if not.

Examples
isTriangle(2, 3, 4) ➞ true

isTriangle(3, 4, 5) ➞ true

isTriangle(4, 3, 8) ➞ false
Notes
a, b and, c are the side lengths of the triangles.
Test input will always be three positive numbers.

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################

/*  

Solution 1

*/
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
}
/*  

Solution 2

*/

/*  

Solution 3

*/