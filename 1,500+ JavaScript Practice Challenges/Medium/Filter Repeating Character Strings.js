/*


Filter Repeating Character Strings
Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

Examples
identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
➞ ["aaaaaa", "d", "eeee"]

identicalFilter(["88", "999", "22", "545", "133"]) 
➞ ["88", "999", "22"]

identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
➞ []
Notes
A string with a single character is trivially counted as a string with repeating identical characters.
If there are no strings with repeating identical characters, return an empty array (see example #3).


*/






/*  Solution 1   */

function identicalFilter(arr) {
    return arr.filter((str) => new Set(str).size === 1)
}



/*  Solution 2   */


const identicalFilter = arr => arr.filter(item => new Set(item).size === 1);

const identicalFilter = (arr) => arr.filter(val => [...new Set(val)].length === 1);

er = (arr) => arr.filter(x => new Set(x).size === 1);


/*  Solution 3   */


function identicalFilter(arr) {
    return arr.filter(i => i === i[0].repeat(i.length))
}


function identicalFilter(arr) {
    return arr.filter((e) => e.split("").every((char) => char === e[0]));
}


function identicalFilter(arr) {
    return arr.filter(x => new Set(x.split('')).size == 1)
}







/*  Solution 4   */



function identicalFilter(arr) {
    return arr.filter(word => {
        let keep = true;
        for (let i = 1; i < word.length; i++) {
            if (word[i] !== word[0]) {
                keep = false;
            }
        }
        return keep;
    })
}






function identicalFilter(arr) {
    let rez = [];

    arr.map(el => el[0].repeat(el.length) === el ? rez.push(el) : false);

    return rez;
}







function identicalFilter(arr) {
    return arr.filter(x => Array.from(new Set(x.split(""))).length == 1)
}






function identicalFilter(arr) {
    return arr.filter(v => new Set(v).size === 1);
}