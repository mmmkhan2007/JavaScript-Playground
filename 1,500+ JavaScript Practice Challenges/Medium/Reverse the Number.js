/*


Reverse the Number
Create a function that takes an integer n and reverses it.

Examples
rev(5121) ➞ "1215"

rev(69) ➞ "96"

rev(-122157) ➞ "751221"
Notes
This challenge is about using two operators that are related to division.
If the number is negative, treat it like it's positive.


*/






/*  Solution 1   */


function rev(n) {
    let num = Math.abs(n);
    return num.toString().split('').reverse().join('');
}





/*  Solution 2   */



function rev(n) {
    var e = String(n);
    var a = e.split("");
    var b = a.reverse();
    var c = [];
    for (var i = 0; i < b.length; i++) {
        if (b[i] == "-") {

        } else {
            c.push(b[i]);
        }
    }
    var d = c.join("");
    return d;
}




/*  Solution 3   */


function rev(n) {
    return String(Math.abs(n)).split('').reverse().join('')
}


/*  Solution 4   */


const rev = n => [...
    '' + Math.abs(n)
].reverse().join('');