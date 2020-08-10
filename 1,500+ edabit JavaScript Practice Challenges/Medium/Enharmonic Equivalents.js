/*

Enharmonic Equivalents
In music, notes can be written out in multiple ways (especially for notes on the black keys). Although these notes are spelled out differently, they still are the same note physically.

C# = Db, D# = Eb, F# = Gb, G# = Ab, A# = Bb

Given a musical note, create a function that returns its enharmonic equivalent. The examples below should make this clear.

Examples
getEquivalent("D#") ➞ "Eb"

getEquivalent("Gb") ➞ "F#"

getEquivalent("Bb") ➞"A#"
Notes
Note names will always be a capital letter followed by either # or b.
Remember that the note after G is A and vice versa.



*/






/*  Solution 1   */

const noteValues = {
    'C#': 'Db',
    'D#': 'Eb',
    'F#': 'Gb',
    'G#': 'Ab',
    'A#': 'Bb',
    'Db': 'C#',
    'Eb': 'D#',
    'Gb': 'F#',
    'Ab': 'G#',
    'Bb': 'A#'
}
const getEquivalent = note => noteValues[note]






/*  Solution 2   */


function getEquivalent(note) {
    let o = {
        "Ab": "G#",
        "Bb": "A#",
        "Cb": "B#",
        "Db": "C#",
        "Eb": "D#",
        "Fb": "E#",
        "Gb": "F#"
    };
    return o[note] ? o[note] : Object.keys(o).find(x => o[x] == note);
}





/*  Solution 3   */


const getEquivalent = note => "GABCDEFGA" [" ABCDEFG ".indexOf(note[0]) + { "#": 1, "b": -1 }[note[1]]] + { "#": "b", "b": "#" }[note[1]];





function getEquivalent(note) {
    const obj = {};
    const keys = { 'C#': 'Db', 'D#': 'Eb', 'F#': 'Gb', 'G#': 'Ab', 'A#': 'Bb' };
    Object.keys(keys).forEach(item => { obj[keys[item]] = item });
    return (keys[note]) ? keys[note] : obj[note];
}




/*  Solution 4   */

function getEquivalent(note) {
    const stringFull = "GABCDEFGA";
    const stringTrim = " ABCDEFG ";
    const noteIndex = stringTrim.indexOf(note[0]);
    const adjustment = { "#": 1, "b": -1 }[note[1]];
    const newIndex = noteIndex + adjustment;
    const newSymbol = { "#": "b", "b": "#" }[note[1]];
    return stringFull[newIndex] + newSymbol;
}







function getEquivalent(note) {
    switch (note) {
        case "C#":
            return "Db"
            break;

        case "Db":
            return "C#"
            break;

        case "D#":
            return "Eb"
            break;

        case "Eb":
            return "D#"
            break;

        case "F#":
            return "Gb"
            break;

        case "Gb":
            return "F#"
            break;

        case "G#":
            return "Ab"
            break;

        case "Ab":
            return "G#"
            break;

        case "A#":
            return "Bb"
            break;

        case "Bb":
            return "A#"
            break;

        default:
            console.log("Error")
    }
}