/*
Numbered Alphabet

Create a function that converts a string of letters to their respective number in the alphabet.

A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	...
0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22	...
Examples
alphNum("XYZ") ➞ "23 24 25"

alphNum("ABCDEF") ➞ "0 1 2 3 4 5"

alphNum("JAVASCRIPT") ➞ "9 0 21 0 18 2 17 8 15 19"

Notes
Make sure the numbers are spaced.
*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1 
//#############################################################

const alphNum = str => [...str]
    .map(value => value.charCodeAt() - 65)
    .join(' ')






//#############################################################
//#  SOLUTION 2  
//#############################################################


function alphNum(str) {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return str.split('').map(x => letters.indexOf(x)).join(' ')
}






//#############################################################
//#  SOLUTION 3
//#############################################################


function alphNum(str) {
    return [...str].map(c => c.charCodeAt(0) - 'A'.charCodeAt(0)).join(' ');
}