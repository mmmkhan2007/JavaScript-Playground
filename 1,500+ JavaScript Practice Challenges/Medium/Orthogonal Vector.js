/*


Orthogonal Vector
Create a function that takes two vectors as arrays and checks if the two vectors are orthogonal or not. The return value is boolean. Two vectors a and b are orthogonal if their dot product is equal to zero.

Examples
isOrthogonal([1, 2], [2, -1]) ➞ true

isOrthogonal([3, -1], [7, 5]) ➞ false

isOrthogonal([1, 2, 0], [2, -1, 10]) ➞ true
Notes
The two arrays will be of same length.
Check out the Resources tab.


*/






/*  Solution 1   */


function isOrthogonal(arr1, arr2) {
	return !arr1.reduce((t,c,i)=> t+c*arr2[i],0)
}


/*  Solution 2   */

const isOrthogonal = ([x1, y1, z1 = 0], [x2, y2, z2 = 0]) =>   x1 * x2 + y1 * y2 + z1 * z2 === 0;

const isOrthogonal = (a, b) => !a.reduce((t, e, i) => t + e * b[i], 0);

const isOrthogonal = (arr1, arr2) => arr1.map((el,i) => arr2[i] * el).reduce((sum, el) => sum + el) === 0;

const isOrthogonal = (arr1, arr2) => arr1.reduce((a, c, i) => a + c * arr2[i], 0) === 0;

/*  Solution 3   */

function isOrthogonal(arr1, arr2) {
	return arr1.reduce((s,c,i)=>s+c*arr2[i],0)==0;
}



function isOrthogonal(arr1, arr2) {
	let sum=0
for (let i = 0; i < arr1.length; i++) 
    sum+=arr1[i]*arr2[i]
	return sum==0
}


function isOrthogonal(arr1, arr2) {
	var result=0;
	for(var i=0;i<arr1.length;i++){
		result+=arr1[i]*arr2[i];
	}
	return result ? false : true;
}



/*  Solution 4   */


function isOrthogonal(arr1, arr2) {
	var sum=0
	for(var i=0;i<arr1.length;i++){
		sum+=(arr1[i] *arr2[i]);
	}
	return sum ==0;
}


const isOrthogonal = (arr1, arr2) => {
    return (arr1[0] * arr2[0]) + (arr1[1] * arr2[1]) + (arr1[2] ? arr1[2] * arr2[2] : 0) == 0;
  }



  function isOrthogonal(arr1, arr2) {
	return arr1.reduce((a, c, i) => a + c * arr2[i], 0) === 0
}


function isOrthogonal(arr1, arr2) {
	let x=0;
	for (let i=0; i< arr1.length; i++) {
		x+=arr1[i]*arr2[i];
	}
	return x==0;
}



function isOrthogonal(arr1, arr2) {
	return arr1.reduce((sum, val, i) => sum + val * arr2[i], 0) === 0;
}



function isOrthogonal(arr1, arr2) {
	let sum = 0
	for (let i = 0; i < arr1.length; i++){
		sum += arr1[i]*arr2[i]
	}
											 
	if (sum === 0){	return true} 
		else{ return false }
}


function isOrthogonal(arr1, arr2) {
    let a = 0
    for (let i = 0; i < arr1.length; i++) {
  
      a += arr1[i] * arr2[i]
  
    }
    return a === 0
  }