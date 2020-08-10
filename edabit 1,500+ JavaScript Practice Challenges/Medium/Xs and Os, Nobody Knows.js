/*

Xs and Os, Nobody Knows
Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

Return a boolean value (true or false).
The string can contain any character.
When no x and no o are in the string, return true.
Examples
XO("ooxx") ➞ true

XO("xooxx") ➞ false

XO("ooxXm") ➞ true
// Case insensitive.

XO("zpzpzpp") ➞ true
// Returns true if no x and o.

XO("zzoo") ➞ false
Notes
Remember to return true if there aren't any x's or o's.
Must be case insensitive.

*/






/*  Solution 1   */


function XO(str) {
    let x = str.toLowerCase().split('').filter(x => x === 'x').length;
    let o = str.toLowerCase().split('').filter(x => x === 'o').length;
    return x === o;
}


/*  Solution 2   */

const XO = str => (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length;

const XO = str => str.replace(/[^x]/gi, '').length === str.replace(/[^o]/gi, '').length;


/*  Solution 3   */


function XO(str) {
    var x = 0,
        o = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            x += 1;
        } else if (str[i].toLowerCase() == 'o') {
            o += 1;
        }
    }
    return x === o;
}



/*  Solution 4   */


function XO(str) {
    function countLetter(str, letter) {
        str = str.toLowerCase();
        letter = letter.toLowerCase();
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === letter) count++;
        }
        return count;
    }
    return (countLetter(str, 'x') === countLetter(str, 'o'));
}