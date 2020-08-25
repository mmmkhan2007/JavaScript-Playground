"use strict";

var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');
var a = Number(lines.shift());
var b = Number(lines.shift());
var produto = a * b;
var mensagem = "PROD = ".concat(produto);
console.log(mensagem);