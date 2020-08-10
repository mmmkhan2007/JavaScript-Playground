/*
Explosion Intensity
Given a number, return a string of the word "Boom", which varies in the following ways:

The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
If n is evenly divisible by 2, add an exclamation mark to the end.
If n is evenly divisible by 5, return the string in ALL CAPS.
If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
The example below should help clarify these instructions.

Examples
boomIntensity(4) ➞ "Boooom!"
// There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)

boomIntensity(1) ➞ "boom"
// 1 is lower than 2, so we return "boom"

boomIntensity(5) ➞ "BOOOOOM"
// There are 5 "o"s and 5 is divisible by 5 (all caps)

boomIntensity(10) ➞ "BOOOOOOOOOOM!"
// There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)
Notes
A number which is evenly divisible by 2 and 5 will have both effects applied (see example #4).
"Boom" will always start with a capital "B", except when n is less than 2, then return a minature explosion as "boom".




*/






/*  Solution 1   */

function boomIntensity(n) {
    let o = "o";
    let finished = `B${o.repeat(n)}m`;

    if (n <= 1) {
        return "boom";
    } else if (n % 2 === 0 && n % 5 === 0) {
        return finished.toUpperCase() + "!";
    } else if (n % 2 === 0) {
        return `${finished}!`;
    } else if (n % 5 === 0) {
        return finished.toUpperCase();
    } else {
        return finished;
    }
}



/*  Solution 2   */

const boomIntensity = n => n < 2 ? `boom` : `B` + (n % 5 ? `o`.repeat(n) + `m` : (`o`.repeat(n) + `m`).toUpperCase()) + (n % 2 ? `` : `!`)

const boomIntensity = n => n < 2 ? `boom` : `B` + (n % 5 ? `o`.repeat(n) + `m` : (`o`.repeat(n) + `m`).toUpperCase()) + (n % 2 ? `` : `!`)





/*  Solution 3   */


function boomIntensity(n) {
    var word;
    switch (true) {
        case n < 2:
            word = 'boom';
            break;
        case n >= 2:
            var counter = 1;
            var zeros = '';
            while (counter <= n) {
                zeros += 'o';
                if (n % 2 == 0 && n % 5 == 0) {
                    word = "B" + zeros.toUpperCase() + "M!";
                } else if (n % 2 == 0) {
                    word = 'B' + zeros + 'm!';
                } else if (n % 5 == 0) {
                    word = "B" + zeros.toUpperCase() + "M";
                } else {
                    word = 'B' + zeros + 'm';
                }
                counter++;
            }
            break;
    }
    return word;
}



/*  Solution 4   */


function boomIntensity(n) {
    if (n < 2) {
        return "boom";
    } else {
        var res = "B";

        if (n % 5 === 0)
            res += "O".repeat(n) + "M";
        else
            res += "o".repeat(n) + "m";

        if (n % 2 === 0)
            res += "!"

        console.log(res)
        return res;
    }
}