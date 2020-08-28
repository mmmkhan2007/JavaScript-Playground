/*
You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

For example, given the string , remove an  at positions  and  to make  in  deletions.

Function Description

Complete the alternatingCharacters function in the editor below. It must return an integer representing the minimum number of deletions to make the alternating string.

alternatingCharacters has the following parameter(s):

s: a string
Input Format

The first line contains an integer , the number of queries. 
The next  lines each contain a string .

Constraints

Each string  will consist only of characters  and 
Output Format

For each query, print the minimum number of deletions required on a new line.

Sample Input

5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB
Sample Output

3
4
0
0
4
Explanation

The characters marked red are the ones that can be deleted so that the string doesn't have matching consecutive characters.

image
*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
'use strict';

var fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var currentLine = 0;
process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});
process.stdin.on('end', function (_) {
  inputString = inputString.replace(/\s*$/, '').split('\n').map(function (str) {
    return str.replace(/\s*$/, '');
  });
  main();
});

function readLine() {
  return inputString[currentLine++];
} // Complete the alternatingCharacters function below.


function alternatingCharacters(s) {
  var del = 0;
  s.split("").map(function (v, i, arr) {
    return v === arr[i + 1] ? del++ : v;
  });
  return del;
}

function main() {
  var ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  var q = parseInt(readLine(), 10);

  for (var qItr = 0; qItr < q; qItr++) {
    var s = readLine();
    var result = alternatingCharacters(s);
    ws.write(result + "\n");
  }

  ws.end();
}