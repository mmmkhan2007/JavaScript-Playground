/*


Purge and Organize
Given an array of numbers, write a function that returns an array that...

Has all duplicate elements removed.
Is sorted from least to greatest value.
Examples
uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
Notes



*/






/*  Solution 1   */

function uniqueSort(arr) {
    return Array.from(new Set(arr)).sort((a, b) => a - b);
}


function uniqueSort(arr) {
    var prev = null;
    return arr.sort(function(a, b) { return a - b; }).filter(function(i) { if (i !== prev) { prev = i; return true; } })
}


function uniqueSort(arr) {
    return [...(new Set(arr))].sort((a, b) => a - b)
}



function uniqueSort(arr) {
    return arr.filter((item, pos, self) => self.indexOf(item) == pos).sort((a, b) => a - b);
}






function uniqueSort(arr) {
    var mySet = new Set()
    arr.map(x => mySet.add(x))
    return Array.from(mySet).sort(function(a, b) {
        return a - b
    })
}


/*  Solution 2   */

const uniqueSort = arr => [...new Set(arr)].sort((a, b) => a > b)

const uniqueSort = arr => [...new Set(arr)].sort((a, b) => a - b);

const uniqueSort = arr => arr.sort((a, b) => a - b).filter((x, i, a) => x !== a[i - 1]);





/*  Solution 3   */


function uniqueSort(arr) {
    return arr.sort((x, y) => x - y).filter((x, i, a) => x !== a[i - 1]);
}








function uniqueSort(arr) {
    var set = new Set(arr);
    return Array.from(set.values()).sort((a, b) => { return a - b; });
}






function uniqueSort(arr) {
    return arr.sort((a, b) => { return a > b; }).reduce((acc, val) => { if (acc.indexOf(val) === -1) { acc.push(val); } return acc; }, []);
}



/*  Solution 4   */


function uniqueSort(arr) {
    return arr.sort((a, b) => a - b)
        .filter((item, index, array) => item != array[index + 1])
}







function uniqueSort(arr) {
    return arr.filter((x, i) => arr.indexOf(x) === i).sort((a, b) => a - b)
}






function uniqueSort(arr) {
    var newArr = [];
    var newLen = 0;
    arr = arr.sort(function(a, b) {
        return a > b;
    });
    newArr.push(arr[0]);
    ++newLen;
    for (var i = 1, l = arr.length; i < l; i++) {
        if (newArr[newLen - 1] == arr[i]) {
            continue;
        } else {
            newArr.push(arr[i]);
            ++newLen;
        }
    }
    return newArr;
}