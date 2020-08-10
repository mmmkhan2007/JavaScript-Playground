/*

Get Sum of People's Budget
Create the function that takes an array with objects and returns the sum of people's budgets.

Examples
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
]) ➞ 62600
Notes



*/






/*  Solution 1   */

const getBudgets = arr => arr.reduce((a,v) => a + v.budget, 0);

const getBudgets = arr => arr.reduce((a,b) => a + b.budget, 0);

const getBudgets = arr => arr.reduce((tot, cur) => tot + cur.budget, 0);

/*  Solution 2   */

function getBudgets(arr) {
	const budgets = arr.reduce((total, person) => total + person.budget, 0);
	return budgets;
}



function getBudgets(arr) {
	return arr.map(x=>x.budget).reduce((a,b)=>a+b)
}


/*  Solution 3   */


function getBudgets(arr) {
	return arr.reduce((a,c)=>a + c.budget,0)
}



/*  Solution 4   */


function getBudgets(arr) {
    total = 0;
        for(i=0;i<arr.length;i++){
            total += arr[i].budget
        }
        return total
    }


    function getBudgets(arr) {
        var sum = 0;
        
        for (var i = 0; i < arr.length; i++)
            {
                sum += arr[i].budget;
            }
        
        return sum;
    }



    function getBudgets(arr) {
        return arr.reduce((acc, el) => acc + el.budget, 0);
    }



    function getBudgets(arr) {
        return arr
          .map(obj => Object.values(obj)[2])
          .reduce((acc, curr) => acc + curr);
      }


      function getBudgets(arr) {
        return arr.map(elem => elem.budget).reduce((acc,idx) => acc += idx);
    }