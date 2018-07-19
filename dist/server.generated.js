module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/App.js":
/*!***********************!*\
  !*** ./client/App.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Index = __webpack_require__(/*! ./components/pages/Index */ \"./client/components/pages/Index.js\");\n\nvar _Index2 = _interopRequireDefault(_Index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// Components\n\n\nvar App = function (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"container\" },\n        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: \"/\", component: _Index2.default })\n      );\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nvar _default = App;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, \"App\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/client/App.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/client/App.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/App.js?");

/***/ }),

/***/ "./client/components/pages/Index.js":
/*!******************************************!*\
  !*** ./client/components/pages/Index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Landing = function (_Component) {\n  _inherits(Landing, _Component);\n\n  function Landing() {\n    _classCallCheck(this, Landing);\n\n    return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).apply(this, arguments));\n  }\n\n  _createClass(Landing, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.auth.isAuthenticated) {\n        this.props.history.push(\"/dashboard\");\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"landing\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"dark-overlay landing-inner text-light\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"container\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"row\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"col-md-12 text-center\" },\n                _react2.default.createElement(\n                  \"h1\",\n                  { className: \"display-3 mb-4\" },\n                  \"MERN BOILERPLATE\"\n                ),\n                _react2.default.createElement(\n                  \"p\",\n                  { className: \"lead\" },\n                  \" \",\n                  \"This is a boilerplate project to build an application with the MERN Stack.\"\n                ),\n                _react2.default.createElement(\"hr\", null),\n                _react2.default.createElement(\n                  _reactRouterDom.Link,\n                  { to: \"/register\", className: \"btn btn-lg btn-info mr-2\" },\n                  \"Sign Up\"\n                ),\n                _react2.default.createElement(\n                  _reactRouterDom.Link,\n                  { to: \"/login\", className: \"btn btn-lg btn-light\" },\n                  \"Login\"\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Landing;\n}(_react.Component);\n\nLanding.propTypes = {\n  auth: _propTypes.PropTypes.object.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    auth: state.auth\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(Landing);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Landing, \"Landing\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/client/components/pages/Index.js\");\n  reactHotLoader.register(mapStateToProps, \"mapStateToProps\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/client/components/pages/Index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/client/components/pages/Index.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/components/pages/Index.js?");

/***/ }),

/***/ "./client/reducers/authReducer.js":
/*!****************************************!*\
  !*** ./client/reducers/authReducer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar initialState = {\n  isAuthenticated: false,\n  user: {}\n};\n\nvar _default = function _default() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    default:\n      return state;\n  }\n};\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(initialState, \"initialState\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/client/reducers/authReducer.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/client/reducers/authReducer.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/reducers/authReducer.js?");

/***/ }),

/***/ "./client/reducers/index.js":
/*!**********************************!*\
  !*** ./client/reducers/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _authReducer = __webpack_require__(/*! ./authReducer */ \"./client/reducers/authReducer.js\");\n\nvar _authReducer2 = _interopRequireDefault(_authReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _default = (0, _redux.combineReducers)({\n  auth: _authReducer2.default\n});\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/client/reducers/index.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/reducers/index.js?");

/***/ }),

/***/ "./client/store.js":
/*!*************************!*\
  !*** ./client/store.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar enhancers = void 0;\nvar initialState = void 0;\n\nif (typeof window !== \"undefined\") {\n  enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()];\n  initialState = window.__INITIAL_STATE__;\n} else {\n  enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];\n  initialState = {};\n}\n\nvar store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, _toConsumableArray(enhancers)));\n\n// For hot reloading reducers\nif (false) {}\n\nvar _default = store;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(enhancers, \"enhancers\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/client/store.js\");\n  reactHotLoader.register(initialState, \"initialState\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/client/store.js\");\n  reactHotLoader.register(store, \"store\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/client/store.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/client/store.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/store.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/config/keys.js":
/*!*******************************!*\
  !*** ./server/config/keys.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _default = {\n  mongoURI: \"mongodb://localhost:27017/mern-boilerplate2\",\n  secretOrKey: \"secret\"\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/config/keys.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/config/keys.js?");

/***/ }),

/***/ "./server/config/passport.js":
/*!***********************************!*\
  !*** ./server/config/passport.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _keys = __webpack_require__(/*! ./keys */ \"./server/config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar JwtStrategy = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").Strategy;\nvar ExtractJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").ExtractJwt;\n\nvar User = _mongoose2.default.model(\"users\");\n\n\nvar opts = {};\nopts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();\nopts.secretOrKey = _keys2.default.secretOrKey;\n\nmodule.exports = function (passport) {\n  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {\n    User.findById(jwt_payload.id).then(function (user) {\n      if (user) {\n        return done(null, user);\n      }\n      return done(null, false);\n    }).catch(function (err) {\n      return console.log(err);\n    });\n  }));\n};\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(JwtStrategy, \"JwtStrategy\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/config/passport.js\");\n  reactHotLoader.register(ExtractJwt, \"ExtractJwt\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/config/passport.js\");\n  reactHotLoader.register(User, \"User\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/config/passport.js\");\n  reactHotLoader.register(opts, \"opts\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/config/passport.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/config/passport.js?");

/***/ }),

/***/ "./server/models/User.js":
/*!*******************************!*\
  !*** ./server/models/User.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar Schema = mongoose.Schema;\n\n// create schema\nvar UserSchema = new Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  avatar: {\n    type: String\n  },\n  date: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nvar _default = mongoose.model(\"users\", UserSchema);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Schema, \"Schema\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/models/User.js\");\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/models/User.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/models/User.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/User.js?");

/***/ }),

/***/ "./server/routes/api/users.js":
/*!************************************!*\
  !*** ./server/routes/api/users.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _gravatar = __webpack_require__(/*! gravatar */ \"gravatar\");\n\nvar _gravatar2 = _interopRequireDefault(_gravatar);\n\nvar _bcryptjs = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nvar _bcryptjs2 = _interopRequireDefault(_bcryptjs);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _register = __webpack_require__(/*! ../../validation/register */ \"./server/validation/register.js\");\n\nvar _register2 = _interopRequireDefault(_register);\n\nvar _login = __webpack_require__(/*! ../../validation/login */ \"./server/validation/login.js\");\n\nvar _login2 = _interopRequireDefault(_login);\n\nvar _User = __webpack_require__(/*! ../../models/User */ \"./server/models/User.js\");\n\nvar _User2 = _interopRequireDefault(_User);\n\nvar _keys = __webpack_require__(/*! ../../config/keys */ \"./server/config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = _express2.default.Router();\n// Load Input Validation\n\n// Load user model\n\n// Load config\n\n\n// @route   POST api/users/register\n// @desc    Register user\n// @access  Public\nrouter.post(\"/register\", function (req, res) {\n  var _validationRegisterIn = (0, _register2.default)(req.body),\n      errors = _validationRegisterIn.errors,\n      isValid = _validationRegisterIn.isValid;\n\n  if (!isValid) {\n    return res.status(400).json(errors);\n  }\n  _User2.default.findOne({ email: req.body.email }).then(function (user) {\n    if (user) {\n      errors.email = \"Email already exists\";\n      return res.status(400).json(errors);\n    } else {\n      var avatar = _gravatar2.default.url(req.body.email, {\n        s: \"200\", // size\n        r: \"pg\", // Rating\n        d: \"mm\" // Default\n      });\n      var newUser = new _User2.default({\n        name: req.body.name,\n        email: req.body.email,\n        avatar: avatar,\n        password: req.body.password\n      });\n      _bcryptjs2.default.genSalt(10, function (err, salt) {\n        _bcryptjs2.default.hash(newUser.password, salt, function (err, hash) {\n          if (err) {\n            throw err;\n          }\n          newUser.password = hash;\n          newUser.save().then(function (user) {\n            return res.json(user);\n          }).catch(function (err) {\n            return console.log(err);\n          });\n        });\n      });\n    }\n  });\n});\n\n// @route   POST api/users/login\n// @desc    Login User / Returning JWT Token\n// @access  Public\nrouter.post(\"/login\", function (req, res) {\n  var _validationLoginInput = (0, _login2.default)(req.body),\n      errors = _validationLoginInput.errors,\n      isValid = _validationLoginInput.isValid;\n\n  if (!isValid) {\n    return res.status(400).json(errors);\n  }\n  var email = req.body.email;\n  var password = req.body.password;\n\n  _User2.default.findOne({ email: email }).then(function (user) {\n    // Check for user\n    if (!user) {\n      errors.email = \"User not found\";\n      return res.status(404).json(errors);\n    }\n    // Check password\n    _bcryptjs2.default.compare(password, user.password).then(function (isMatch) {\n      if (isMatch) {\n        // user matched\n        var payload = { id: user.id, name: user.name, avatar: user.avatar };\n        // sign token\n        _jsonwebtoken2.default.sign(payload, _keys2.default.secretOrKey, { expiresIn: 3600 }, function (err, token) {\n          res.json({ success: true, token: \"Bearer \" + token });\n        });\n      } else {\n        errors.password = \"Password incorrect\";\n        return res.status(400).json(errors);\n      }\n    });\n  });\n});\n\n// @route   POST api/users/current\n// @desc    Return current user\n// @access  Private\nrouter.get(\"/current\", _passport2.default.authenticate(\"jwt\", { session: false }), function (req, res) {\n  res.send({ id: req.user.id, name: req.user.name, email: req.user.email });\n});\n\nmodule.exports = router;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/routes/api/users.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/api/users.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _devServer = __webpack_require__(/*! ./utils/dev-server */ \"./server/utils/dev-server.js\");\n\nvar _devServer2 = _interopRequireDefault(_devServer);\n\nvar _reactApp = __webpack_require__(/*! ./utils/react-app */ \"./server/utils/react-app.js\");\n\nvar _reactApp2 = _interopRequireDefault(_reactApp);\n\nvar _users = __webpack_require__(/*! ./routes/api/users */ \"./server/routes/api/users.js\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nvar _keys = __webpack_require__(/*! ./config/keys */ \"./server/config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n// Dev Server\n\n// React App\n\n\n_mongoose2.default.Promise = global.Promise;\n// Api\n\n// Initialize app\nvar CURRENT_WORKING_DIR = process.cwd();\nvar app = (0, _express2.default)();\n// Initialize webpack dev middleware\n(0, _devServer2.default)(app);\n// Body parser middleware\napp.use(_bodyParser2.default.urlencoded({ extended: false }));\napp.use(_bodyParser2.default.json());\n// Connect to MongoDB\n_mongoose2.default.connect(_keys2.default.mongoURI).then(function () {\n  return console.log(\"MongoDB connected\");\n}).catch(function (err) {\n  return console.log(err);\n});\n\n// Passport middleware\napp.use(_passport2.default.initialize());\n\n// Passport config\n__webpack_require__(/*! ./config/passport */ \"./server/config/passport.js\")(_passport2.default);\n\napp.use(\"/api/users\", _users2.default);\n\napp.use(\"/dist\", _express2.default.static(_path2.default.join(CURRENT_WORKING_DIR, \"dist\")));\n\n// React Application\napp.get(\"*\", _reactApp2.default);\n\nvar port = process.env.PORT || 8000;\napp.listen(port, function () {\n  console.log(\"Server running on port \" + port);\n});\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/server.js\");\n  reactHotLoader.register(app, \"app\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/server.js\");\n  reactHotLoader.register(port, \"port\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/server.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./server/utils/dev-server.js":
/*!************************************!*\
  !*** ./server/utils/dev-server.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackConfigDevelopment = __webpack_require__(/*! ../../webpack.config.development.js */ \"./webpack.config.development.js\");\n\nvar _webpackConfigDevelopment2 = _interopRequireDefault(_webpackConfigDevelopment);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default(app) {\n  // Run Webpack dev server in development mode\n  if (true) {\n    var compiler = (0, _webpack2.default)(_webpackConfigDevelopment2.default);\n    app.use((0, _webpackDevMiddleware2.default)(compiler, {\n      noInfo: false,\n      colors: true,\n      publicPath: _webpackConfigDevelopment2.default.output.publicPath,\n      headers: { \"Access-Control-Allow-Origin\": \"*\" }\n    }));\n    app.use((0, _webpackHotMiddleware2.default)(compiler));\n  }\n};\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/utils/dev-server.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/utils/dev-server.js?");

/***/ }),

/***/ "./server/utils/react-app.js":
/*!***********************************!*\
  !*** ./server/utils/react-app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _store = __webpack_require__(/*! ../../client/store */ \"./client/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _App = __webpack_require__(/*! ../../client/App.js */ \"./client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _renderer = __webpack_require__(/*! ./renderer */ \"./server/utils/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar reactApp = function reactApp(req, res) {\n  var context = {};\n  var appWithRouter = _react2.default.createElement(\n    _reactRedux.Provider,\n    { store: _store2.default },\n    _react2.default.createElement(\n      _reactRouter.StaticRouter,\n      { context: {}, location: req.url },\n      _react2.default.createElement(_App2.default, null)\n    )\n  );\n  if (context.url) {\n    return res.redirect(context.url);\n  }\n  var finalState = _store2.default.getState();\n  var initialView = (0, _server.renderToString)(appWithRouter);\n  res.set(\"Content-Type\", \"text/html\").status(200).end((0, _renderer2.default)(initialView, finalState));\n};\n\nvar _default = reactApp;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(reactApp, \"reactApp\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/utils/react-app.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/utils/react-app.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/utils/react-app.js?");

/***/ }),

/***/ "./server/utils/renderer.js":
/*!**********************************!*\
  !*** ./server/utils/renderer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default(html, initialState) {\n  return \"\\n    <!DOCTYPE HTML>\\n    <html>\\n      <head>\\n      <meta charset=\\\"utf-8\\\">\\n      <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1, shrink-to-fit=no\\\">\\n      <link rel=\\\"stylesheet\\\" href=\\\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\\\" integrity=\\\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\\\"\\n      crossorigin=\\\"anonymous\\\">\\n      <script defer src=\\\"https://use.fontawesome.com/releases/v5.1.0/js/all.js\\\" integrity=\\\"sha384-3LK/3kTpDE/Pkp8gTNp2gR/2gOiwQ6QaO7Td0zV76UFJVhqLl4Vl3KL1We6q6wR9\\\"\\n      crossorigin=\\\"anonymous\\\"></script>\\n        <title>MERN BOILERPLATE</title>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\" + html + \"</div>\\n        <script>window.__INITIAL_STATE__ = \" + JSON.stringify(initialState) + \"; </script>\\n        <script src=\\\"/dist/bundle.js\\\"></script>\\n        <script src=\\\"https://code.jquery.com/jquery-3.3.1.slim.min.js\\\" integrity=\\\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\\\" crossorigin=\\\"anonymous\\\"></script>\\n        <script src=\\\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\\\" integrity=\\\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\\\" crossorigin=\\\"anonymous\\\"></script>\\n        <script src=\\\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\\\" integrity=\\\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\\\" crossorigin=\\\"anonymous\\\"></script>\\n      </body>\\n    </html>\\n  \";\n};\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/utils/renderer.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/utils/renderer.js?");

/***/ }),

/***/ "./server/validation/is-empty.js":
/*!***************************************!*\
  !*** ./server/validation/is-empty.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar isEmpty = function isEmpty(value) {\n  return value === undefined || value === null || (typeof value === \"undefined\" ? \"undefined\" : _typeof(value)) === \"object\" && Object.keys(value).length === 0 || typeof value === \"string\" && value.trim().length === 0;\n};\n\nmodule.exports = isEmpty;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isEmpty, \"isEmpty\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/validation/is-empty.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/validation/is-empty.js?");

/***/ }),

/***/ "./server/validation/login.js":
/*!************************************!*\
  !*** ./server/validation/login.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar Validator = __webpack_require__(/*! validator */ \"validator\");\nvar isEmpty = __webpack_require__(/*! ./is-empty */ \"./server/validation/is-empty.js\");\n\nvar validateLoginInput = function validateLoginInput(data) {\n  var errors = {};\n  // validate inputs are not empty\n  data.email = !isEmpty(data.email) ? data.email : \"\";\n  data.password = !isEmpty(data.password) ? data.password : \"\";\n  // Validate his email\n  if (!Validator.isEmail(data.email)) {\n    errors.email = \"Email is invalid\";\n  }\n  // Check empty email\n  if (Validator.isEmpty(data.email)) {\n    errors.email = \"Email field is required\";\n  }\n  // Check empty password\n  if (Validator.isEmpty(data.password)) {\n    errors.password = \"Password field is required\";\n  }\n\n  return {\n    errors: errors,\n    isValid: isEmpty(errors)\n  };\n};\n\nvar _default = validateLoginInput;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(validateLoginInput, \"validateLoginInput\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/validation/login.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/validation/login.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/validation/login.js?");

/***/ }),

/***/ "./server/validation/register.js":
/*!***************************************!*\
  !*** ./server/validation/register.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _validator = __webpack_require__(/*! validator */ \"validator\");\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _isEmpty = __webpack_require__(/*! ./is-empty */ \"./server/validation/is-empty.js\");\n\nvar _isEmpty2 = _interopRequireDefault(_isEmpty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar validateRegisterInput = function validateRegisterInput(data) {\n  var errors = {};\n  // validate inputs are not empty\n  data.name = !(0, _isEmpty2.default)(data.name) ? data.name : \"\";\n  data.email = !(0, _isEmpty2.default)(data.email) ? data.email : \"\";\n  data.password = !(0, _isEmpty2.default)(data.password) ? data.password : \"\";\n  data.password2 = !(0, _isEmpty2.default)(data.password2) ? data.password2 : \"\";\n  // check that name is the proper length\n  if (!_validator2.default.isLength(data.name, { min: 2, max: 30 })) {\n    errors.name = \"Name must be between 2 and 30 characters\";\n  }\n  // Check empty name\n  if (_validator2.default.isEmpty(data.name)) {\n    errors.name = \"Name field is required\";\n  }\n  // Check empty email\n  if (_validator2.default.isEmpty(data.email)) {\n    errors.email = \"Email field is required\";\n  }\n  // Validate his email\n  if (!_validator2.default.isEmail(data.email)) {\n    errors.email = \"Email is invalid\";\n  }\n  // Check empty password\n  if (_validator2.default.isEmpty(data.password)) {\n    errors.password = \"Password field is required\";\n  }\n  // check that password is the proper length\n  if (!_validator2.default.isLength(data.password, { min: 6, max: 30 })) {\n    errors.password = \"Password must be at least 6 characters\";\n  }\n  // Check empty password2\n  if (_validator2.default.isEmpty(data.password2)) {\n    errors.password2 = \"Confirm Password field is required\";\n  }\n  // Check Passwords match\n  if (!_validator2.default.equals(data.password, data.password2)) {\n    errors.password2 = \"Passwords must match\";\n  }\n  return {\n    errors: errors,\n    isValid: (0, _isEmpty2.default)(errors)\n  };\n};\n\nvar _default = validateRegisterInput;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(validateRegisterInput, \"validateRegisterInput\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/validation/register.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/validation/register.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/validation/register.js?");

/***/ }),

/***/ "./webpack.config.development.js":
/*!***************************************!*\
  !*** ./webpack.config.development.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: \"eval-source-map\",\n  entry: [\"react-hot-loader/patch\", \"webpack-hot-middleware/client?reload=true\", path.join(CURRENT_WORKING_DIR, \"client/index.js\")],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, \"/dist\"),\n    filename: \"bundle.js\",\n    publicPath: \"/dist/\"\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: [\"babel-loader\"]\n    }, {\n      test: /\\.css$/,\n      use: [\"style-loader\", \"css-loader\"]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: \"file-loader\"\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/webpack.config.development.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/webpack.config.development.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.development.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/nigelreoch/nigel-development/packt/fullstack-react/mern-boilerplate2/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "gravatar":
/*!***************************!*\
  !*** external "gravatar" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gravatar\");\n\n//# sourceURL=webpack:///external_%22gravatar%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });