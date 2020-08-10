/*


Count Ones in Binary Representation of Integer
Count the amount of ones in the binary representation of an integer. So for example, since 12 is '1100' in binary, the return value should be 2.

Examples
countOnes(0) ➞ 0

countOnes(100) ➞ 3

countOnes(999) ➞ 8
Notes
The input will always be a valid integer (number).


*/






/*  Solution 1   */

function countOnes(i) {
    return (i >>> 0).toString(2).replace(/0/g, '').length;
}



/*  Solution 2   */


function countOnes(i) {
    return i.toString(2).split('').filter((c) => c == 1).length
}


/*  Solution 3   */


countOnes = i => (i.toString(2).match(/1/g) || []).length

const countOnes = i => i.toString(2).split('').reduce((acc, item) => acc + parseInt(item), 0);

const countOnes = i => i.toString(2).split('').filter(i => i === '1').length

const countOnes = n => (n >>> 0).toString(2).replace(/0/g, '').length

countOnes = n => (n.toString(2).match(/1/g) || []).length

const countOnes = i => (i.toString(2).match(/1/g) || []).length;








/*  Solution 4   */


function countOnes(i) {
    return (i >>> 0).toString(2).split('').filter(char => char == '1').length;
}


function countOnes(i) {
    let r = 0;
    while (i > 0) {
        r += i & 1;
        i >>= 1;
    }
    return r;
}