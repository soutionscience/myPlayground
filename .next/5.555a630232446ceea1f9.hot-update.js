webpackHotUpdate(5,{

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
        errorMessage: '',
        mainAccount: '',
        version: '',
        mainAccountBalance: '' // getAccountList = async (web3) =>{
        //    const accounts = await web3.eth.getAccounts()
        //     this.setState({mainAccount: accounts[0]})
        //     console.log(this.state.mainAccount)
        //     return(<div>the hell?</div>)
        //     // const coinbase = await web3.eth.coinbase;
        //     // const balance = await web3.eth.getBalance(accounts[0])
        //     // this.setState({mainAccountBalance: balance})
        // }

      }
    }), _temp));
  }

  _createClass(Dapps, [{
    key: "checkMetamask",
    value: function checkMetamask(w) {
      if (w !== '') {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "message is-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["MessageHeader"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, "Metamask"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Delete"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["MessageBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, "You have metamask installed"));
      } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "message is-danger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["MessageHeader"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, "Metamask"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Delete"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["MessageBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, "You are not connected to Metamask. Please install Metamask to experience all the features of this page!!"));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Title"], {
        isSize: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, " The playground page "), this.checkMetamask(__WEBPACK_IMPORTED_MODULE_3__ethereum_web3__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Card"], {
        style: {
          padding: '8px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Content"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Playground"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "We will interact with the blockchain technologies to check balances, unlock accounts, transfer coins  & more")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          background: 'grey',
          height: '400px',
          color: 'white',
          padding: '8px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Connect"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Columns"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Column"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["CardHeaderTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Accounts")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Content"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "what is in: ", this.state.mainAccount))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Column"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["CardHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["CardHeaderTitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Version")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_bloomer__["Content"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, this.state.mainAccountBalance))))))), " ");
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
//# sourceMappingURL=5.555a630232446ceea1f9.hot-update.js.map