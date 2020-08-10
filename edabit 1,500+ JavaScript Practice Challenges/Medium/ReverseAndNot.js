/*


ReverseAndNot
Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

To illustrate:

123
We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

Examples
reverseAndNot(123) ➞ 321123

reverseAndNot(152) ➞ 251152

reverseAndNot(123456789) ➞ 987654321123456789
Notes
i is a non-negative integer.


*/






/*  Solution 1   */


function reverseAndNot(i) {
    var reverse = parseInt(i.toString().split("").reverse().join(""));
    return Number(reverse + '' + i);
}


/*  Solution 2   */

const reverseAndNot = n => +([...
    '' + n
].reverse().join('') + n);

const reverseAndNot = i => +(i.toString().split('').reverse().join('') + i);

const reverseAndNot = i => Number([...
    `${i}`
].reverse().join('') + i);

const reverseAndNot = i => +([...
    `${i}`
].reverse().join("") + i);

const reverseAndNot = n => parseInt(Array.from(n.toString()).reverse().join('') + n)

const reverseAndNot = n => Number([...
    `${n}`
].reverse().join('') + n);

const reverseAndNot = i => +([...
    "" + i
].reverse().join `` + `${i}`)

/*  Solution 3   */

const reverseAndNot = number => (+([...
    `${number}`
].reverse().join("") + number));






/*  Solution 4   */


function reverseAndNot(i) {
    return parseInt(i.toString().split('').reverse().join('') + i)
}