/*

Concatenate Variable Number of Input Arrays
Create a function that concatenates n input arrays, where n is variable.

Examples
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
Notes
Arrays should be concatenated in order of the arguments.



*/






/*  Solution 1   */

function concat(...args) {
    return [].concat(...args)
}



/*  Solution 2   */

const concat = (...a) => a.flat(Infinity);

const concat = (...arrays) => arrays.reduce((result, arr) => result.concat(arr), []);

const concat = (...a) => a.reduce((t, c) => t.concat(c));




/*  Solution 3   */

function concat(...args) {
    return args.reduce((accum, curr) => accum.concat(curr))
}




/*  Solution 4   */


function concat(...args) {
    let result = [];
    return result.concat(...args)
}



function concat(...args) {
    return args.reduce((acc, a) => acc.concat(a), []);
}



function concat(...args) {
    return args.reduce((acc, arr) => acc.concat(arr), [])
}