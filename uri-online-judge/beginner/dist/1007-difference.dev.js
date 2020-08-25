"use strict";

var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');
var a = Number(lines.shift());
var b = Number(lines.shift());
var c = Number(lines.shift());
var d = Number(lines.shift());
var prodAB = a * b;
var prodCD = c * d;
var dif = prodAB - prodCD;
var mensagem = "DIFERENCA = ".concat(dif);
console.log(mensagem);