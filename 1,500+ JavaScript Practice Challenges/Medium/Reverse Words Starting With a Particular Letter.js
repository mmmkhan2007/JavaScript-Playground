/*

Reverse Words Starting With a Particular Letter
Write a function that reverses all the words in a sentence that start with a particular letter.

Examples
specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun"

specialReverse("first man to walk on the moon", "m")
➞ "first nam to walk on the noom"

specialReverse("peter piper picked pickled peppers", "p")
➞ "retep repip dekcip delkcip sreppep"
Notes
Reverse the words themselves, not the entire sentence.
All characters in the sentence will be in lower case.



*/






/*  Solution 1   */

function specialReverse(s, c) {
    return s.split(" ").map(x => x.includes(c) ? x.split("").reverse().join("") : x).join(" ")
}



/*  Solution 2   */


function specialReverse(s, c) {
    return s.split(' ').map(word => {
        return word.startsWith(c) ? [...word].reverse().join('') : word
    }).join(' ')
}




/*  Solution 3   */


function specialReverse(s, c) {
    const words = s.split(" ");
    const result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] === c) {
            result.push(words[i].split("").reverse().join(""));
        } else {
            result.push(words[i]);
        }
    }
    return result.join(" ");
}





/*  Solution 4   */


function specialReverse(s, c) {
    let arr = s.split(' ')
    return arr.map(word => (word.includes(c)) ? [...word].reverse().join('') : word).join(' ')

}