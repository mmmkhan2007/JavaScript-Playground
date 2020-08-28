/*
Lena is preparing for an important coding competition that is preceded by a number of sequential preliminary contests. Initially, her luck balance is 0. She believes in "saving luck", and wants to check her theory. Each contest is described by two integers,  and :

 is the amount of luck associated with a contest. If Lena wins the contest, her luck balance will decrease by ; if she loses it, her luck balance will increase by .
 denotes the contest's importance rating. It's equal to  if the contest is important, and it's equal to  if it's unimportant.
If Lena loses no more than  important contests, what is the maximum amount of luck she can have after competing in all the preliminary contests? This value may be negative.

For example,  and:

Contest		L[i]	T[i]
1		5	1
2		1	1
3		4	0
If Lena loses all of the contests, her will be . Since she is allowed to lose  important contests, and there are only  important contests. She can lose all three contests to maximize her luck at . If , she has to win at least  of the important contests. She would choose to win the lowest value important contest worth . Her final luck will be .

Function Description

Complete the luckBalance function in the editor below. It should return an integer that represents the maximum luck balance achievable.

luckBalance has the following parameter(s):

k: the number of important contests Lena can lose
contests: a 2D array of integers where each  contains two integers that represent the luck balance and importance of the  contest.
Input Format

The first line contains two space-separated integers  and , the number of preliminary contests and the maximum number of important contests Lena can lose. 
Each of the next  lines contains two space-separated integers,  and , the contest's luck balance and its importance rating.

Constraints

Output Format

Print a single integer denoting the maximum amount of luck Lena can have after all the contests.

Sample Input

6 3
5 1
2 1
1 1
8 1
10 0
5 0
Sample Output

29
Explanation

There are  contests. Of these contests,  are important and she cannot lose more than  of them. Lena maximizes her luck if she wins the  important contest (where ) and loses all of the other five contests for a total luck balance of .
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
process.stdin.on('end', function () {
  inputString = inputString.replace(/\s*$/, '').split('\n').map(function (str) {
    return str.replace(/\s*$/, '');
  });
  main();
});

function readLine() {
  return inputString[currentLine++];
} // Complete the luckBalance function below.


function luckBalance(k, contests) {
  // Lose all unimportant
  var L = contests.filter(function (c) {
    return !c[1];
  }).reduce(function (s, c) {
    return s + c[0];
  }, 0); // Important, decensing by luck

  var a = contests.filter(function (c) {
    return c[1];
  }).sort(function (a, b) {
    return b[0] - a[0];
  });
  k = Math.min(k, a.length); // Lose at most k important

  L += a.slice(0, k).reduce(function (s, c) {
    return s + c[0];
  }, 0); // Win rest of important

  L -= a.slice(k).reduce(function (s, c) {
    return s + c[0];
  }, 0);
  return L;
}

function main() {
  var ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  var nk = readLine().split(' ');
  var n = parseInt(nk[0], 10);
  var k = parseInt(nk[1], 10);
  var contests = Array(n);

  for (var i = 0; i < n; i++) {
    contests[i] = readLine().split(' ').map(function (contestsTemp) {
      return parseInt(contestsTemp, 10);
    });
  }

  var result = luckBalance(k, contests);
  ws.write(result + '\n');
  ws.end();
}