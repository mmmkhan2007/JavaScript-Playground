"use strict";

function _templateObject2() {
  var data = _taggedTemplateLiteral([" "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n"], ["\\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*

You have an empty sequence, and you will be given  queries. Each query is one of these three types:

1 x  -Push the element x into the stack.
2    -Delete the element present at the top of the stack.
3    -Print the maximum element in the stack.
Input Format

The first line of input contains an integer, . The next  lines each contain an above mentioned query. (It is guaranteed that each query is valid.)

Constraints



Output Format

For each type  query, print the maximum element in the stack on a new line.

Sample Input

10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3
Sample Output

26
91

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
function processData(input) {
  var stack = [];
  input = input.split(_templateObject()).slice(1).map(function (v) {
    if (v == 2) return stack.pop();else if (v == 3) console.log(Math.max.apply(Math, stack));else return stack.push(v.split(_templateObject2())[1] * 1);
  });
}