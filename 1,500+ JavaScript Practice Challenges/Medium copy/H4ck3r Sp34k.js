/*

H4ck3r Sp34k
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

Examples

hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"


Notes
In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.

*/


/*  Solution 1   */

function hackerSpeak(str) {
    var chars = { 'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5' };
    str = str.replace(/[aeios]/g, letter => chars[letter]);

    return str;
}

/*  Solution 2   */

const hackerSpeak = str => str.replace(/[oieas]/ig, x => [0, 1, 3, 4, 5][
    ['o', 'i', 'e', 'a', 's'].indexOf(x)
])



/*  Solution 3   */

const hackerSpeak = (str) => str.split('').map(e => dict.hasOwnProperty(e) ? dict[e] : e).join('');

const dict = { 'a': 4, 'e': 3, 'i': 1, 'o': 0, 's': 5 };

/*  Solution 4   */

function hackerSpeak(str) {
    const l33t = { 'a': 4, 'e': 3, 'i': 1, 'o': 0, 's': 5 };
    return str.replace(/[aeios]/g, m => l33t[m])
}


/*  Solution 5  */

function hackerSpeak(str) {
    const m = {
        a: 4,
        i: 1,
        e: 3,
        o: 0,
        s: 5
    }
    return str.replace(/[aieos]/gi, match => m[match.toLowerCase()])
}


/*  Solution 6  */

function hackerSpeak(str) {

    var strarr = str.split('');
    for (let x = 0; x < strarr.length; x++) {
        if (strarr[x] == 'a') {
            strarr[x] = 4
        } else if (strarr[x] == 'e') {
            strarr[x] = 3
        } else if (strarr[x] == 'i') {
            strarr[x] = 1
        } else if (strarr[x] == 'o') {
            strarr[x] = 0
        } else if (strarr[x] == 's') {
            strarr[x] = 5
        }
    }

    return strarr.join('')

}




/*  Solution 7  */

function replace(arr, char) {
    let index = arr.indexOf(char);
    return index;
}

function hackerSpeak(str) {
    let arr = str.split('')
    index = 0;
    for (let char of arr) {
        switch (char) {
            case 'a':
                arr[replace(arr, char)] = '4';
                break;
            case 's':
                arr[replace(arr, char)] = '5';
                break;
            case 'o':
                arr[replace(arr, char)] = '0';
                break;
            case 'e':
                arr[replace(arr, char)] = '3';
                break;
            case 'i':
                arr[replace(arr, char)] = '1';
                break;
        }
    }
    return arr.join('');
}



/*  Solution 8  */



function hackerSpeak(str) {
    let newArr = [];
    str = str.split('');
    for (let char of str) {
        if (char === 'a') {
            newArr.push('4');
        } else if (char === 'e') {
            newArr.push('3');
        } else if (char === 'i') {
            newArr.push('1');
        } else if (char === 'o') {
            newArr.push('0');
        } else if (char === 's') {
            newArr.push('5');
        } else {
            newArr.push(char);
        }
    }
    return newArr.join('');
}