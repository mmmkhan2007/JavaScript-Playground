/*


Find the Characters Counterpart Char Code
Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.

Examples
Given that:
  - "A" char code is: 65
  - "a" char code is: 97

counterpartCharCode("A") ➞ 97

counterpartCharCode("a") ➞ 65
Notes
The argument will always be a single character.
Not all inputs will have a counterpart (e.g. numbers), in which case return the inputs char code.


*/






/*  Solution 1   */

counterpartCharCode = c => (c.toLowerCase() == c ? c.toUpperCase() : c.toLowerCase()).charCodeAt(0)

const counterpartCharCode = (char) => char == char.toUpperCase() ?
    char.toLowerCase().charCodeAt(0) : char.toUpperCase().charCodeAt(0)




/*  Solution 2   */


const counterpartCharCode = char => {
    if (char >= '0' && char <= '9') return char.charCodeAt(0);
    if (char.toLowerCase() === char) {
        return char.toUpperCase().charCodeAt(0);
    } else {
        return char.toLowerCase().charCodeAt(0);
    }
}


/*  Solution 3   */

function counterpartCharCode(char) {
    if (char.toLowerCase() == char) {
        return char.toUpperCase().charCodeAt(0)
    } else {
        return char.toLowerCase().charCodeAt(0)
    }
}




/*  Solution 4   */


function counterpartCharCode(char) {
    if (char == char.toUpperCase()) {
        return char.toLowerCase().charCodeAt(0);
    } else {
        return char.toUpperCase().charCodeAt(0);
    }
}