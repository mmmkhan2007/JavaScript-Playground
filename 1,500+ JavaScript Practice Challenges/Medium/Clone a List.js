/*


Clone a List
The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

Examples
clone([1, 1]) ➞ [1, 1, [1, 1]]

clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]

clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]
Notes


*/






/*  Solution 1   */





/*  Solution 2   */

const clone = r => [...r, r]

const clone = arr => [...arr, arr];


/*  Solution 3   */

function clone(arr) {
	arr.push(arr.slice(0))
	return arr
}



function clone(arr) {
	return arr.concat([arr.map(item=>item)])
	
}


function clone(arr) {
    const copy = arr.map(el => el);
    arr.push(copy);
      return arr;
  }

  function clone(arr) {
	let clone = []
 for(let i = 0; i < arr.length; i++){
	 clone.push(arr[i])
 }
return new Array(...arr,clone)
}


/*  Solution 4   */


const clone = arr => [...arr, arr.slice(0)];

const clone = a => a.concat([a]);



function clone(arr) {
    na = arr.concat([arr])
      return na
  }