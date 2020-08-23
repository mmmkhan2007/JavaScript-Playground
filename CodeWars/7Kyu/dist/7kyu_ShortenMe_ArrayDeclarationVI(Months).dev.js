"use strict";

/*

7kyu - Shorten Me: Array Declaration VI (Months)
Task
You have to write an array() function returning an array object with elements 
as follow:

[ 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December' ]
Coding Limitation:
Less than 120 characters

  */
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
s = 'JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember', array = function array(_) {
  return (s + s).match(/[A-Z][a-z]+/g);
};