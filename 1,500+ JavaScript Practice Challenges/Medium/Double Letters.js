/*



Double Letters
Create a function that takes a word and returns true if the word has two consecutive identical letters.

Examples
doubleLetters("loop") ➞ true

doubleLetters("yummy") ➞ true

doubleLetters("orange") ➞ false

doubleLetters("munchkin") ➞ false
Notes

*/






/*  Solution 1   */


function doubleLetters(word) {
    return /(\w)\1/.test(word)
}


/*  Solution 2   */



function doubleLetters(word) {
    word = word.split("");
    for (var i = 1; i < word.length; i++) {
        if (word[i - 1] == word[i]) {
            return true;
            break;
        }
    }
    return false;
}

/*  Solution 3   */

function doubleLetters(word) {
    let regex = /([a-z])\1/gi
    return regex.test(word);
}




/*  Solution 4   */



function doubleLetters(word) {
    var x = false
    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[i + 1]) {
            x = true
        }
    }
    return x
}




function doubleLetters(word) {

    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word.includes(word[i].repeat(2))) {
            count++;
        }
    }
    return count >= 2;

}