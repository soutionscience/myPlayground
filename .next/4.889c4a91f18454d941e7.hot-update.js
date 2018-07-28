webpackHotUpdate(4,{

/***/ "./components/navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myNavBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bloomer__ = __webpack_require__("./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bloomer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bloomer__);
var _jsxFileName = "C:\\Users\\Solut\\Google Drive\\work2\\tutorials\\myPlayground\\components\\navbar.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var myNavBar =
/*#__PURE__*/
function (_Component) {
  _inherits(myNavBar, _Component);

  function myNavBar() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, myNavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = myNavBar.__proto__ || Object.getPrototypeOf(myNavBar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        brand: '' //isActive: false

      }
    }), _temp));
  }

  _createClass(myNavBar, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["Navbar"], {
        style: {
          border: 'solid 1px #00D1B2',
          margin: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarBrand"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarItem"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: this.brand,
        style: {
          marginRight: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), " Logo"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarItem"], {
        isHidden: "desktop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["Icon"], {
        className: "fab fa-github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarItem"], {
        isHidden: "desktop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["Icon"], {
        className: "fab fa-twitter",
        style: {
          color: '#55acee'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarBurger"], {
        isActive: this.state.isActive,
        onClick: this.onClickNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarMenu"], {
        isActive: this.state.isActive,
        onClick: this.onClickNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarStart"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarItem"], {
        href: "#/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Home"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarItem"], {
        hasDropdown: true,
        isHoverable: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarLink"], {
        href: "#/documentation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "DAPPS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarDropdown"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarItem"], {
        href: "#/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "KickStarter"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarItem"], {
        href: "#/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Two B"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarDivider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarItem"], {
        href: "#/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Two A")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarEnd"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarItem"], {
        href: "https://github.com/AlgusDark/bloomer",
        isHidden: "touch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["Icon"], {
        className: "fab fa-github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarItem"], {
        href: "https://twitter.com/AlgusDark",
        isHidden: "touch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["Icon"], {
        className: "fab fa-twitter",
        style: {
          color: '#55acee'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["NavbarItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["Field"], {
        isGrouped: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["Control"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["Button"], {
        id: "twitter",
        "data-social-network": "Twitter",
        "data-social-action": "tweet",
        "data-social-target": "http://bloomer.js.org",
        target: "_blank",
        href: "https://twitter.com/intent/tweet?text=bloomer:\r a set of React Stateless Components for bulma.io&url=http://bloomer.js.org&via=AlgusDark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_bloomer__["Icon"], {
        className: "fab fa-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Tweet")))))))));
    }
  }]);

  return myNavBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ })

})
//# sourceMappingURL=4.889c4a91f18454d941e7.hot-update.js.map