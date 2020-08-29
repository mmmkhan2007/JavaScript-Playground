"use strict";

// Convert HTML Entities

/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
  var htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;'
  };
  str = str.split('').map(function (_char) {
    return htmlEntities[_char] || _char;
  });
  return str.join('');
}

convertHTML("Dolce & Gabbana");