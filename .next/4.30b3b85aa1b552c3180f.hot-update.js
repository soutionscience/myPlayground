webpackHotUpdate(4,{

/***/ "./pages/dapps/playground.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dapps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bloomer__ = __webpack_require__("./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bloomer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bloomer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
var _jsxFileName = "C:\\Users\\Solution Science\\Google Drive\\work2\\projects\\myPlayground\\pages\\dapps\\playground.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Dapps =
/*#__PURE__*/
function (_Component) {
  _inherits(Dapps, _Component);

  function Dapps() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Dapps);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Dapps.__proto__ || Object.getPrototypeOf(Dapps)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        metamask: '',
        message: false,
        errorMessage: '' // static async getInitialProps() {
        //     console.log("checking web3")
        //   return {metamask: web3}
        // }

      }
    }), _temp));
  }

  _createClass(Dapps, [{
    key: "checkMetamask",
    value: function checkMetamask(w) {
      console.log(w);

      if (w == '') {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Message"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["MessageHeader"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, "Metamask"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Delete"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["MessageBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, "Pellentesque risus mi"), ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, "felis venenatis"), " efficitur. Aenean ac ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("em", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, "eleifend lacus"), ", in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem."));
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log("what is in ", __WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */]);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Title"], {
        isSize: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, " The playground page "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, " Ethereum playground "), this.checkMetamask(__WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */])), " ");
    }
  }]);

  return Dapps;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/dapps\\playground")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.30b3b85aa1b552c3180f.hot-update.js.map