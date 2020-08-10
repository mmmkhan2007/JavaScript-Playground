/*


Sum of Evenly Divisible Numbers from a Range
Create a function that takes three arguments a, b, c and returns the sum of the numbers that are evenly divided by c from the range a, b inclusive.

Examples
evenlyDivisible(1, 10, 20) ➞ 0
// No number between 1 and 10 can be evenly divided by 20.

evenlyDivisible(1, 10, 2) ➞ 30
// 2 + 4 + 6 + 8 + 10 = 30

evenlyDivisible(1, 10, 3) ➞ 18
// 3 + 6 + 9 = 18
Notes
Return 0 if there is no number between a and b that can be evenly divided by c.


*/






/*  Solution 1   */

function evenlyDivisible(a, b, c) {
    let sum = 0;
    for (let i = a; i <= b; i++)
        if (i % c === 0) sum += i;
    return sum;
}



/*  Solution 2   */

function evenlyDivisible(a, b, c) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i % c === 0 ? i : 0;
    }
    return sum;
}




function evenlyDivisible(a, b, c) {
    let sum = 0
    for (let i = a; i <= b; i++) {
        if (i % c == 0) sum += i
    }
    return sum
}


function evenlyDivisible(a, b, c) {
    let range = [];
    for (let i = a; i <= b; i++) {
        range.push(i);
    }
    let result = range.filter(item => item % c === 0).reduce((a, b) => a + b, 0);
    if (result.length === 0) {
        return 0;
    } else {
        return result;
    }

}



/*  Solution 3   */

function evenlyDivisible(a, b, c) {
    var arr = []
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }

    var test = arr.filter(x => x % c == 0)
    return test.length <= 0 ? 0 : test.reduce((a, b) => a + b)
}



function evenlyDivisible(a, b, c) {
    let arr = []
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            arr.push(i)
        }
    }
    return arr.reduce((x, y) => x + y, 0)
}



const evenlyDivisible = (a, b, c) => {
    const filtered = Array.from({ length: b - a + 1 }, ((_, i) => i + a))
        .filter(a => a % c === 0);

    return filtered.length === 0 ? 0 :
        filtered.reduce((acc, cur) => acc + cur, 0);
}


function evenlyDivisible(a, b, c) {
    return Array.from({ length: b - a + 1 }, (x, i) => a + i).filter(x => x % c === 0).reduce((x, y) => x + y, 0)
}

/*  Solution 4   */


const evenlyDivisible = (a, b, c) => Array.from({ length: b - a + 1 }, (_, i) => a + i)
    .reduce((acc, cur) => (cur % c === 0 ? acc + cur : acc + 0), 0)