"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 

8kyu - Basic subclasses - Adam and Eve

According to the creation myths of the Abrahamic religions, Adam and Eva were the 
first Humans to wander the earth.

You have to do God’s job. The creation method must return an array of length 2 
containing objects representing Adam and Eva. The first object in the array should 
be an instance of the class Man. The second should be an instance of the class Woman. 
Both objects have to be subclasses of Human. Your job is to implement the Human, 
Man and Woman classes.

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
var Human = function Human(name) {
  _classCallCheck(this, Human);

  this.name = name;
};

var Man =
/*#__PURE__*/
function (_Human) {
  _inherits(Man, _Human);

  function Man(name) {
    _classCallCheck(this, Man);

    return _possibleConstructorReturn(this, _getPrototypeOf(Man).call(this, name));
  }

  return Man;
}(Human);

var Woman =
/*#__PURE__*/
function (_Human2) {
  _inherits(Woman, _Human2);

  function Woman(name) {
    _classCallCheck(this, Woman);

    return _possibleConstructorReturn(this, _getPrototypeOf(Woman).call(this, name));
  }

  return Woman;
}(Human);

var God =
/*#__PURE__*/
function () {
  function God() {
    _classCallCheck(this, God);
  }

  _createClass(God, null, [{
    key: "create",
    value: function create() {
      return [new Man("Adam"), new Woman("Eve")];
    }
  }]);

  return God;
}();