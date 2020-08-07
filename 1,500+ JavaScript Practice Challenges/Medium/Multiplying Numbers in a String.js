/*

Multiplying Numbers in a String
Given a string of numbers separated by a comma and space, return the product of the numbers.

Examples
multiplyNums("2, 3") ➞ 6

multiplyNums("1, 2, 3, 4") ➞ 24

multiplyNums("54, 75, 453, 0") ➞ 0

multiplyNums("10, -2") ➞ -20
Notes
Bonus: Try to complete this challenge in one line!



*/






/*  Solution 1   */

function multiplyNums(nums) {
    return nums.split(', ').reduce((a, b) => a * +b, 1);
}



/*  Solution 2   */

const multiplyNums = a => a.split(', ').map(Number).reduce((a, b) => a * b);

const multiplyNums = str => str.split(', ').reduce((total, num) => total * num, 1);

const multiplyNums = (nums) => +(nums.split(',').reduce((a, b) => a * b));

const multiplyNums = str => str.split(',').reduce((prod, el) => prod * +el, 1);

const multiplyNums = n => n.split(',').reduce((a, b) => a * b, 1)


const multiplyNums = nums => eval(nums.replace(/,/g, '*'));

/*  Solution 3   */

function multiplyNums(nums) {
    var numsArr = nums.split(", ");
    var sum = 1;
    for (var i = 0; i < numsArr.length; i++) {
        sum *= numsArr[i];
    }
    return sum;
}




function multiplyNums(nums) {
    return nums.split(', ').reduce((acc, num) => acc * +num, 1);
}






/*  Solution 4   */



function multiplyNums(nums) {
    var acc = 1;
    var numarr = nums.split(",");
    for (i = 0; i <= numarr.length - 1; i++) {
        acc *= parseInt(numarr[i], 10);
    }
    return acc;
}



function multiplyNums(nums) {
    return (nums.split(",")).map(elem => Number(elem))
        .reduce((total, currentValue) =>
            total * currentValue)
}