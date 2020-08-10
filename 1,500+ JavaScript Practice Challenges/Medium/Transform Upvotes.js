/*


Transform Upvotes
Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

Examples
transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]

transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]

transformUpvotes("20.3k 3.8k 7.7k 992") ➞ [20300, 3800, 7700, 992]
Notes
Return the upvotes as an array.


*/






/*  Solution 1   */

function transformUpvotes(str) {
    return str.split(' ')
        .map(a => (a.endsWith("k") ? parseFloat(a) * 1000 : parseInt(a)));
}



/*  Solution 2   */


function transformUpvotes(str) {
    return str.split(' ').map(element => element.endsWith('k') ? parseFloat(element) * 1000 : parseFloat(element));
}


/*  Solution 3   */

const transformUpvotes = (str) => str.replace(/k/g, '*1000').split(' ').map(x => eval(x))






/*  Solution 4   */


function transformUpvotes(str) {
    return str.split(" ")
        .map(x => { return x.includes("k") ? Number(x.slice(0, x.length - 1) * 1000) : Number(x) })
}







function transformUpvotes(str) {
    let arr = str.split(' ');
    let arr2 = []
    arr.forEach(x => {
        if (x.includes('k')) {
            arr2.push(Number.parseFloat(x) * 1000)
        } else {
            arr2.push(Number(x))
        }
    })

    return arr2
}





function transformUpvotes(str) {
    return str.split(" ").map(x => Number(x.replace(/k/gi, '00').replace(/\./gi, "")))
}