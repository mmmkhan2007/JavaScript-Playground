/*

Longest Sequence of Consecutive Zeroes

Write a function that returns the longest sequence of consecutive zeroes in a binary string.

Examples
longestZero("01100001011000") ➞ "0000"

longestZero("100100100") ➞ "00"

longestZero("11111") ➞ ""

Notes
If no zeroes exist in the input, return an empty string.
*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 


function longestZero(s) {
    return s.split('1').sort().reverse()[0]
}



//#  SOLUTION 2  


function longestZero(s) {
    return s.split("1").sort((a, b) => b.length - a.length)[0]
}



//#  SOLUTION 3


function longestZero(s) {
    return s.split('1').reduce((a, b) => a.length > b.length ? a : b);
}



//#  SOLUTION 4


const byLength = (a, b) => b.length - a.length;

const longestZero = str => (str.match(/0+/g) || []).sort(byLength)[0] || '';



//#  SOLUTION 5


function longestZero(s) {
    return '0'.repeat(Math.max(...(s.split("1").map(x => x.length))))
}