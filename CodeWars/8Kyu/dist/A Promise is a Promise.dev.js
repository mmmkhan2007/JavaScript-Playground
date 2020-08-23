"use strict";

/*

Description:
Create a resolved javascript Promise that will return 'Hello World!'.


*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
function promiseHelloWorld() {
  return regeneratorRuntime.async(function promiseHelloWorld$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap('Hello World!');

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}