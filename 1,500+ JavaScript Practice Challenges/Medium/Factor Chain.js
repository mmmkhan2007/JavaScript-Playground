/*


Factor Chain
A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

[3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
Create a function that determines whether or not an array is a factor chain.

Examples
factorChain([1, 2, 4, 8, 16, 32]) ➞ true

factorChain([1, 1, 1, 1, 1, 1]) ➞ true

factorChain([2, 4, 6, 7, 12]) ➞ false

factorChain([10, 1]) ➞ false
Notes


*/






/*  Solution 1   */

function factorChain(arr) {
	for (let  i =  1; i<arr.length ; i++){
		let currentValue = arr[i];
		let anteriorValue = arr[i-1];
		if (currentValue% anteriorValue !== 0 ){
			return false
		}
	}
	return true;
}



function factorChain(arr) {
	return arr.every((num, i) => arr[i+1] !== undefined ? arr[i+1] % num === 0 : true)
}




function factorChain(arr) {
	
	let res = [];
	
	for(let i = 0; i < arr.length; i++){
		if(arr[i + 1]){
			if(arr[i + 1] % arr[i] != 0){
				return false;
			}
			else {
			}
		}
	}
	return true;
}



function factorChain(arr) {
	return arr.every((v, i, a) => i === 0 || v % a[i - 1] === 0);
}


/*  Solution 2   */

const factorChain = arr => arr.slice(1).every((num, i) => num % arr[i] === 0);

const factorChain=a=>a.every((v,i)=>!(i&&v%a[i-1]))

const factorChain = arr => arr.filter((x,i) => arr[i+1]%arr[i] > 0).length === 0;

function factorChain(arr) {
    var counter = 0;
     for(var i = 0; i < arr.length - 1; i++) {
       if(arr[i+1] % arr[i] != 0) {
         counter++
       }
     }
     return counter < 1
   }





/*  Solution 3   */


const factorChain = arr => {
	return arr.reduce((bool, element, i) => {
		return arr[i]%arr[i-1]===0;
	})
}





/*  Solution 4   */


function factorChain(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if ((arr[i + 1] % arr[i]))
			return false
	}
	return true
}


function factorChain(arr) {
	let f = 1;
	return arr.every(a => {
		let r = a % f;
		f = a;
		return r === 0;
	})
}



function factorChain(arr) {
	var factor = true
	for(let i = 1; i < arr.length; i++){
		if (!Number.isInteger(arr[i] / arr[i-1])){
			factor = false
		}
	}
		return factor
}