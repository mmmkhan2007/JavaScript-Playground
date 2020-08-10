/*

The Reverser!
The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

Examples
reverse("Hello World") ➞ "DLROw OLLEh"

reverse("ReVeRsE") ➞ "eSrEvEr"

reverse("Radar") ➞ "RADAr"
Notes
There will be no punctuation in any of the test cases.



*/






/*  Solution 1   */

function reverse(txt) {
    return [...txt].reverse().map(x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('');
}



function reverse(txt) {
    return [...txt].map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).reverse().join('');
}


/*  Solution 2   */

const reverse = txt => [...txt].reverse().map(c => c < "a" ? c.toLowerCase() : c.toUpperCase()).join("");





const reverse = t => [...t].map((c) => c === c.toUpperCase() ?
    c.toLowerCase() : c.toUpperCase()).reverse().join('')






const reverse = (txt) => [...txt].reverse().map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('');


/*  Solution 3   */


function reverse(txt) {
    let reverz = txt.split('').reverse().join('');
    let daFinalCountdown = '';
    for (let i = 0; i < reverz.length; i++) {
        if (reverz[i] == reverz[i].toUpperCase()) {
            daFinalCountdown += reverz[i].toLowerCase();
        } else {
            daFinalCountdown += reverz[i].toUpperCase();
        }
    }
    return daFinalCountdown;
}





/*  Solution 4   */



function reverse(txt) {
    return txt.split("").map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).reverse().join("");
}