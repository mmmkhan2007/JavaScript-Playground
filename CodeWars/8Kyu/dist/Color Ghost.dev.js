"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*

Description:
Color Ghost
Create a class Ghost
Ghost objects are instantiated without any arguments.
Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated
ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var Ghost =
/*#__PURE__*/
function () {
  function Ghost() {
    _classCallCheck(this, Ghost);

    this.colors = ['white', 'yellow', 'purple', 'red'];
  }

  _createClass(Ghost, [{
    key: "color",
    get: function get() {
      var randomPosition = Math.trunc(Math.random() * this.colors.length);
      return this.colors[randomPosition];
    }
  }]);

  return Ghost;
}();