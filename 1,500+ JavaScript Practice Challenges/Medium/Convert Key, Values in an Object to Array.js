/*

Convert Key, Values in an Object to Array
Write a function that converts an object into an array of keys and values.

Examples
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
Notes



*/






/*  Solution 1   */


function objectToArray(obj) {
	return Object.keys(obj).map(key => [key, obj[key]])
}


/*  Solution 2   */

const objectToArray = o => Object.entries(o);

const objectToArray = obj=> Object.entries(obj)

const objectToArray = obj => Object.keys(obj).map(key => [key, obj[key]]);

const objectToArray = obj => Object.keys(obj).map(x => [x,obj[x]]);

const objectToArray= o => Object.keys(o).map(k => [k, o[k]]);

objectToArray = object => Object.keys(object).map(a => [a, object[a]])

let objectToArray=(obj)=>Object.keys(obj).map(x=>[x,obj[x]])


/*  Solution 3   */


function objectToArray(obj) {
	var r = [];
  for (var i in obj) {
		r.push([i, obj[i]]);
	}
	return r;
}



/*  Solution 4   */


function objectToArray(obj) {
	return Object.keys(obj).map(key => [key, obj[key]]);
}



function objectToArray(obj) {
	let i = Object.keys(obj).length
	resArray = new Array(i);
	while (i--)
      resArray[i] = [Object.keys(obj)[i], obj[Object.keys(obj)[i]]];
    return resArray;
}



objectToArray = (ob) => {
    let l = Object.keys(ob).length, arr = [], vals = Object.keys(ob).map(x=> ob[x])
      for(i = 0; i < l; i++){
        arr.push(new Array(Object.keys(ob)[i], vals[i]))
      }
    return arr
    }



    function objectToArray(obj) {
        return Object.keys(obj).map(elem => new Array(elem,obj[elem]))
    }


    function objectToArray(obj) {
        return Object.keys(obj).map(a => [a, obj[a]]);
    }



    function objectToArray(obj) {
        let arr =[];
        for(key in obj) {
            arr.push([key, obj[key]]);
        }
        return arr;
    }



    function objectToArray(obj) {
        return Object.keys(obj).map((key) => [key, obj[key]]);
    }