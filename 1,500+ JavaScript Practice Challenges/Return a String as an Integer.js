

/*  */

/*  

Return a String as an Integer
Create a function that takes a string and returns it as an integer.

Examples
stringInt("6") ➞ 6

stringInt("1000") ➞ 1000

stringInt("12") ➞ 12
Notes
All numbers will be whole numbers.



*/


function stringInt(str) {
	return parseInt(str);
}



const stringInt = s => +s;







let  stringInt = str => Number(str);