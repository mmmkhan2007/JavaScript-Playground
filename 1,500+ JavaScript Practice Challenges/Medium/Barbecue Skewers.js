/*


Barbecue Skewers
You are in charge of the barbecue grill. A vegetarian skewer is a skewer that has only vegetables (-o). A non-vegetarian skewer is a skewer with at least one piece of meat (-x).

For example, the grill below has 4 non-vegetarian skewers and 1 vegetarian skewer (the one in the middle).

["--xo--x--ox--",
"--xx--x--xx--",
"--oo--o--oo--",      <<< vegetarian skewer
"--xx--x--ox--",
"--xx--x--ox--"]
Given a BBQ grill, write a function that returns [# vegetarian skewers, # non-vegetarian skewers]. For example above, the function should return [1, 4].

Examples
bbqSkewers( [
  "--oooo-ooo--",
  "--xx--x--xx--",
  "--o---o--oo--",
  "--xx--x--ox--",
  "--xx--x--ox--"
]) ➞ [2, 3]

bbqSkewers([
  "--oooo-ooo--",
  "--xxxxxxxx--",
  "--o---",
  "-o-----o---x--",
  "--o---o-----"
]) ➞ [3, 2]
Notes
N/A


*/






/*  Solution 1   */



function bbqSkewers(grill) {
    let non = grill.filter(x => x.includes('x')).length
    return [grill.length - non, non]
}

/*  Solution 2   */


const bbqSkewers = (grill) => {
    arr = [0, 0]
    grill.forEach(g => g.includes('x') ? arr[1]++ : arr[0]++)
    return arr;
}


/*  Solution 3   */


let bbqSkewers = (grill) => [grill.filter(x => !x.includes('x')).length, grill.filter(x => x.includes('x')).length]

const bbqSkewers = g => (n = g.reduce((t, c) => /x/.test(c) ? t + 1 : t + 0, 0), [g.length - n, n])


/*  Solution 4   */


const bbqSkewers = grill => {
    const meat = grill.map(a => a.split `-`.join ``).filter(a => a.match(/[^o]/g))
    const veggieLength = grill.length - meat.length;
    return [veggieLength, meat.length];
}


function bbqSkewers(grill) {
    let res = grill.map(a => a.includes('x') ? 1 : 0).reduce((acc, next) => acc + next)
    return [grill.length - res, res]
}


function bbqSkewers(grill) {
    return [grill.filter(x => !x.includes('x')).length, grill.filter(x => x.includes('x')).length]
}