/*



Return the Middle Character(s) of a String
Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

Examples
getMiddle("test") ➞ "es"

getMiddle("testing") ➞ "t"

getMiddle("middle") ➞ "dd"

getMiddle("A") ➞ "A"
Notes
All test cases contain a single word (as a string).

*/






/*  Solution 1   */


function getMiddle(str) {
    var start = Math.ceil(str.length / 2) - 1;
    var end = Math.floor(str.length / 2) + 1;
    return str.substring(start, end);
}


/*  Solution 2   */


var getMiddle = str => {
    const mid = (str.length / 2)
    const even = !(str.length % 2)

    return even ? str.substring(mid - 1, mid + 1) : str.charAt(mid)
}


/*  Solution 3   */

let getMiddle = s => s.length % 2 ? s[Math.floor(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2]






/*  Solution 4   */



function getMiddle(str) {

    while (str.length > 2) {
        str = str.substring(1, str.length - 1);
    }

    if (str.length === 3) {
        return str.substring(1, 1);
    }

    return str;

}