"use strict";

exports.__esModule = true;
exports.ConcreteClass = exports.AbstractClassWithDefaults = undefined;

var _fableCore = require("fable-core");

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractClassWithDefaults = exports.AbstractClassWithDefaults = function () {
  AbstractClassWithDefaults.prototype[_fableCore.Symbol.properties] = function () {
    return {};
  };

  AbstractClassWithDefaults.prototype[_fableCore.Symbol.typeName] = function () {
    return "fable_abstract_defaults.AbstractClassWithDefaults";
  };

  AbstractClassWithDefaults.prototype[_fableCore.Symbol.interfaces] = function () {
    return [];
  };

  function AbstractClassWithDefaults() {
    _classCallCheck(this, AbstractClassWithDefaults);
  }

  AbstractClassWithDefaults.prototype.MethodWithDefault_0 = function MethodWithDefault_0() {};

  AbstractClassWithDefaults.prototype.CallMethodWithDefault = function CallMethodWithDefault() {
    this.MethodWithDefault_0();
  };

  return AbstractClassWithDefaults;
}();

_fableCore.Util.declare(AbstractClassWithDefaults);

var ConcreteClass = exports.ConcreteClass = function (_AbstractClassWithDef) {
  _inherits(ConcreteClass, _AbstractClassWithDef);

  ConcreteClass.prototype[_fableCore.Symbol.properties] = function () {
    return _fableCore.Util.extendInfo(ConcreteClass, "properties", {});
  };

  ConcreteClass.prototype[_fableCore.Symbol.typeName] = function () {
    return "fable_abstract_defaults.ConcreteClass";
  };

  ConcreteClass.prototype[_fableCore.Symbol.interfaces] = function () {
    return _fableCore.Util.extendInfo(ConcreteClass, "interfaces", []);
  };

  function ConcreteClass() {
    _classCallCheck(this, ConcreteClass);

    var _this = _possibleConstructorReturn(this, _AbstractClassWithDef.call(this));

    return _this;
  }

  ConcreteClass.prototype.MustImplement = function MustImplement() {};

  ConcreteClass.prototype.MethodWithDefault = function MethodWithDefault() {};

  return ConcreteClass;
}(AbstractClassWithDefaults);

_fableCore.Util.declare(ConcreteClass);