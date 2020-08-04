/*


Hitting the Jackpot
Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

Examples
testJackpot(["@", "@", "@", "@"]) ➞ true

testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
Notes
The elements must be exactly identical for there to be a jackpot.


*/






/*  Solution 1   */


function testJackpot(result) {
	return new Set(result).size === 1
}


/*  Solution 2   */


const testJackpot = result => result.every(v => v===result[0])

const testJackpot = arr => new Set(arr).size === 1;

const testJackpot = (result) => new Set(result).size === 1;

const testJackpot = r => r.every(v => v == r[0])

const testJackpot=(r)=>r.every((item,index,arr)=>item==arr[0])

const testJackpot = result => result.every(x => x === result[0]);





function testJackpot(result) {
	return result.filter((v,i,s) => v == s[0]).length == result.length;
}





/*  Solution 3   */

function testJackpot(result) {
    return result.every(x => x === result[0]);	
  }



  function testJackpot(result) {
	return result.filter((val,index,arr) => arr.indexOf(val) == index).length < 2
}


/*  Solution 4   */


function testJackpot(result) {
	return result.filter(x => x == result[0]).length == result.length;
}
