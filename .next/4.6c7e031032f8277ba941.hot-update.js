webpackHotUpdate(4,{

/***/ "./components/banner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\Solut\\Google Drive\\work2\\tutorials\\myPlayground\\components\\banner.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/images/web-development",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  });
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css__ = __webpack_require__("./style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bloomer__ = __webpack_require__("./node_modules/bloomer/bundles/bloomer.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bloomer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bloomer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_homeCards__ = __webpack_require__("./components/homeCards.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_certification__ = __webpack_require__("./components/certification.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_banner__ = __webpack_require__("./components/banner.js");
var _jsxFileName = "C:\\Users\\Solut\\Google Drive\\work2\\tutorials\\myPlayground\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var mainPage =
/*#__PURE__*/
function (_Component) {
  _inherits(mainPage, _Component);

  function mainPage() {
    _classCallCheck(this, mainPage);

    return _possibleConstructorReturn(this, (mainPage.__proto__ || Object.getPrototypeOf(mainPage)).apply(this, arguments));
  }

  _createClass(mainPage, [{
    key: "render",
    //    rederCards(){
    //        return(<div>
    //            <HomeCard/>
    //        </div>)
    //    }
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_banner__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_bloomer__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "test",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Welcome"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_homeCards__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_certification__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })));
    }
  }]);

  return mainPage;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.6c7e031032f8277ba941.hot-update.js.map