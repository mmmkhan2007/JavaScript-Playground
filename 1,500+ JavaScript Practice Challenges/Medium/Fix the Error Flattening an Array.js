/*

Fix the Error: Flattening an Array
I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

Here is my code:

function flatten(arr) {
  arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.concat(arr[i]);
  }
  return arr2;
}
But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

Examples
flatten([[1, 2], [3, 4]]) ➞ []
// Expected: [1, 2, 3, 4]

flatten([["a", "b"], ["c", "d"]]) ➞ []
// Expected: ["a", "b", "c", "d"]

flatten([[true, false], [false, false]]) ➞ []
// Expected: [true, false, false, false]
Notes



*/






/*  Solution 1   */

function flatten(arr) {
    return [].concat(...arr)
}


const flatten = (arr) => arr.reduce((acc, next) => acc.concat(next))


const flatten = a => {
    let r = [],
        l = a.length;
    for (let i = 0; i < l; i++) {
        r = r.concat(a[i]);
    }
    return r;
}






/*  Solution 2   */


function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2 = arr2.concat(arr[i]);
    }
    return arr2;
}


/*  Solution 3   */


function flatten(arr) {
    return arr.reduce((a, b) => a.concat(b))
}





/*  Solution 4   */


function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2 = arr2.concat(arr[i]);
    }
    return arr2;
}



// Fix this incorrect code so that all tests pass!
function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        //console.log("array1: "+arr[i]);
        arr2 = arr2.concat(arr[i]);
        //console.log("array2: "+arr2)
    }
    return arr2;
}



// Fix this incorrect code so that all tests pass!
function flatten(arr) {
    return arr.reduce((a, v) => a = [...a, ...v], []);
}



function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr2.push(arr[i][j]);
        }
    }
    return arr2;
}



function flatten(arr) {
    return arr.reduce((one, two) => one.concat(two))
}


function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2 = arr2.concat(arr[i]);
    }
    return arr2;
}