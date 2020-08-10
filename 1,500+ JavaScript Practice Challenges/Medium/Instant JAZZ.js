/*


Instant JAZZ
Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

Examples
jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]

jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

jazzify([]) ➞ []
Notes
Return an empty array if the given array is empty.
You can expect all the tests to have valid chords.


*/






/*  Solution 1   */

function jazzify(arr) {
	return arr.map(item=> item.endsWith("7") ? item : item+7)
}

function jazzify(arr) {
	return arr.map(el => el[el.length-1] != "7" ? el.concat("7"): el);
}


/*  Solution 2   */

const jazzify = arr => arr.map(i => i.endsWith('7') ? i : i + '7');

const jazzify = arr => arr.map(x => x.split(7)[0] + 7);

const jazzify = a => a.map(b => !b.endsWith('7') ? b+'7' : b);

const jazzify = arr => arr.map(chord => chord + (chord.endsWith('7') ? '' : '7'));

const jazzify = arr => arr.map(e => e.endsWith('7') ? e : e + '7');



/*  Solution 3   */

function jazzify(arr) {
	return arr.map(x => String(x).includes(7)? x: x+7);
}


function jazzify(arr) {
	return arr.map(v => v.match(/7/) ? v : v + '7')
}


function jazzify(arr) {

	return arr.map(el => el.indexOf(7) > -1 ? el : el+7)
}


/*  Solution 4   */


function jazzify(arr) {
	if (arr.length === 0) {
		return []
	}
	
	return arr.map((chord) => {
		let pattern = /[ABCDEFG][bm]?7/
		
		if (pattern.test(chord)) {
			return chord
		}
		
		return chord + "7"
	})
}



function jazzify(arr) {
    return arr.map( chord => !chord.includes('7') ? chord + '7' : chord )
  }




  function jazzify(arr) {
	return arr.map(item => item.endsWith('7') ? item : item + '7')
}