/*


Vowel Sandwich
Create a function which validates whether a 3 character string is a vowel sandwich. In order to have a valid sandwich, the string must satisfy the following rules:

The first and last characters must be a consonant.
The character in the middle must be a vowel.
Examples
isVowelSandwich("cat") ➞ true

isVowelSandwich("ear") ➞ false

isVowelSandwich("bake") ➞ false

isVowelSandwich("try") ➞ false
Notes
Return false if the word is not 3 characters in length.
All words will be given in lowercase.
y is not considered a vowel.


*/






/*  Solution 1   */


function isVowelSandwich(str) {
	if (str.length !== 3) return false;
	return /^[^aeiou][aeiou][^aeiou]$/ig.test(str);
}


/*  Solution 2   */

const isVowelSandwich = s => /^[^aeiou][aeiou][^aeiou]$/gi.test(s)


const isVowelSandwich = str => str.length === 3 ?
	/[^aeiou](?=[aeiou])/.test(str) && /(?<=[aeiou])[^aeiou]/.test(str) : false;


/*  Solution 3   */

const isVowelSandwich = str => str.length === 3 && /[^aeiou][aeiou][^aeiou]/.test(str);




/*  Solution 4   */


const isVowelSandwich = str => str.length ===3 && (/^[^aeiou][aeiou]{1}[^aeiou]$/g).test(str)


const isVowelSandwich = str => /^[^aeiou][aeiou][^aeiou]$/.test(str);