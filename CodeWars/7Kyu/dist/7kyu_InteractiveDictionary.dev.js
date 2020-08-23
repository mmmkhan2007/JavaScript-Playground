"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  
7kyu - Interactive Dictionary

In this kata, your job is to create a class Dictionary which you can add 
words to and their entries. Example:

>>> let d = new Dictionary();

>>> d.newEntry("Apple", "A fruit that grows on trees");

>>> console.log(d.look("Apple"));
A fruit that grows on trees

>>> console.log(d.look("Banana"));
Cant find entry for Banana
Good luck and happy coding!

*/
var Dictionary =
/*#__PURE__*/
function () {
  function Dictionary() {
    _classCallCheck(this, Dictionary);

    this.obj = {};
  }

  _createClass(Dictionary, [{
    key: "newEntry",
    value: function newEntry(key, value) {
      this.obj[key] = value;
    }
  }, {
    key: "look",
    value: function look(key) {
      return this.obj[key] || "Can't find entry for ".concat(key);
    }
  }]);

  return Dictionary;
}();