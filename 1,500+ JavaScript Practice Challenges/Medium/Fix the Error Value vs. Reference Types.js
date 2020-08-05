/*

Fix the Error: Value vs. Reference Types
Create a function that returns true if two arrays contain identical values, and false otherwise.

To solve this question, your friend writes the following code:

function checkEquals(arr1, arr2) {
if (arr1 === arr2) {
  return true
 } else {
  return false
 }
}
But testing the code, you see that something is not quite right. Running the code yields the following results:

checkEquals([1, 2], [1, 3]) ➞ false
// Good so far...

checkEquals([1, 2], [1, 2]) ➞ false
// Yikes! What happened?
Rewrite your friend's code so that it correctly checks if two arrays are equal. The tests below should pass:

Examples
checkEquals([1, 2], [1, 3]) ➞ false

checkEquals([1, 2], [1, 2]) ➞ true

checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

checkEquals([4, 7, 6], [4, 5, 6]) ➞ false
Notes
Hint: This has to do with value vs. reference types.



*/






/*  Solution 1   */



function checkEquals(arr1, arr2) {
    return arr1.every((x, i) => x == arr2[i])
}



/*  Solution 2   */

const checkEquals = (a, b) => a.join(",") == b.join(",")





/*  Solution 3   */

function checkEquals(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;

        }
    }
    return true;
}




/*  Solution 4   */


function checkEquals(arr1, arr2) {
    if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
        return true
    } else {
        return false
    }
}



function checkEquals(arr1, arr2) {

    return arr1.every((x, i) => x === arr2[i])
}



function checkEquals(arr1, arr2) {
    if (arr1.every((v, i) => v === arr2[i])) {
        return true
    } else {
        return false
    }
}