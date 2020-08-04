/*


Even or Odd Number of Factors
Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.

Examples
factorGroup(33) ➞ "even"

factorGroup(36) ➞ "odd"

factorGroup(7) ➞ "even"
Notes
You don't need to actually calculate the factors to solve this problem.
Think about why a number would have an odd number of factors.


*/






/*  Solution 1   */

function factorGroup(num) {
	return Math.sqrt(num) % 1 > 0 ? 'even' : 'odd'
}



/*  Solution 2   */

const factorGroup = num => Number.isInteger(Math.sqrt(num)) ? 'odd' : 'even';

let factorGroup=(num)=>Number.isInteger(Math.sqrt(num))?'odd':'even'



/*  Solution 3   */

function factorGroup(num) {
	var r = [];
	for (var i = 1; i <= num; i++) {
		if (num % i == 0) r.push(i);
	}
	return r.length % 2 == 1 ? 'odd' : 'even';
}




/*  Solution 4   */


function factorGroup(num) {
	var x;
	var total = 0;
	for (x = 1; x <= num; x++)
	{
		if (num % x === 0)
		{
			total++;
		}
	}
	if (total % 2 === 0) return "even"; 
	else return "odd";
	
}