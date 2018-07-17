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

/***/ "./server/config/keys.js":
/*!*******************************!*\
  !*** ./server/config/keys.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  mongoURI: \"mongodb://localhost:27017/mern-boilerplate2\",\n  secretOrKey: \"secret\"\n};\n\n//# sourceURL=webpack:///./server/config/keys.js?");

/***/ }),

/***/ "./server/config/passport.js":
/*!***********************************!*\
  !*** ./server/config/passport.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _keys = __webpack_require__(/*! ./keys */ \"./server/config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar JwtStrategy = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").Strategy;\nvar ExtractJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").ExtractJwt;\n\nvar User = _mongoose2.default.model(\"users\");\n\n\nvar opts = {};\nopts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();\nopts.secretOrKey = _keys2.default.secretOrKey;\n\nmodule.exports = function (passport) {\n  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {\n    User.findById(jwt_payload.id).then(function (user) {\n      if (user) {\n        return done(null, user);\n      }\n      return done(null, false);\n    }).catch(function (err) {\n      return console.log(err);\n    });\n  }));\n};\n\n//# sourceURL=webpack:///./server/config/passport.js?");

/***/ }),

/***/ "./server/models/User.js":
/*!*******************************!*\
  !*** ./server/models/User.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar Schema = mongoose.Schema;\n\n// create schema\nvar UserSchema = new Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  avatar: {\n    type: String\n  },\n  date: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nexports.default = mongoose.model(\"users\", UserSchema);\n\n//# sourceURL=webpack:///./server/models/User.js?");

/***/ }),

/***/ "./server/routes/api/users.js":
/*!************************************!*\
  !*** ./server/routes/api/users.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _gravatar = __webpack_require__(/*! gravatar */ \"gravatar\");\n\nvar _gravatar2 = _interopRequireDefault(_gravatar);\n\nvar _bcryptjs = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nvar _bcryptjs2 = _interopRequireDefault(_bcryptjs);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _register = __webpack_require__(/*! ../../validation/register */ \"./server/validation/register.js\");\n\nvar _register2 = _interopRequireDefault(_register);\n\nvar _login = __webpack_require__(/*! ../../validation/login */ \"./server/validation/login.js\");\n\nvar _login2 = _interopRequireDefault(_login);\n\nvar _User = __webpack_require__(/*! ../../models/User */ \"./server/models/User.js\");\n\nvar _User2 = _interopRequireDefault(_User);\n\nvar _keys = __webpack_require__(/*! ../../config/keys */ \"./server/config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n// Load Input Validation\n\n// Load user model\n\n// Load config\n\n\n// @route   POST api/users/register\n// @desc    Register user\n// @access  Public\nrouter.post(\"/register\", function (req, res) {\n  var _validationRegisterIn = (0, _register2.default)(req.body),\n      errors = _validationRegisterIn.errors,\n      isValid = _validationRegisterIn.isValid;\n\n  if (!isValid) {\n    return res.status(400).json(errors);\n  }\n  _User2.default.findOne({ email: req.body.email }).then(function (user) {\n    if (user) {\n      errors.email = \"Email already exists\";\n      return res.status(400).json(errors);\n    } else {\n      var avatar = _gravatar2.default.url(req.body.email, {\n        s: \"200\", // size\n        r: \"pg\", // Rating\n        d: \"mm\" // Default\n      });\n      var newUser = new _User2.default({\n        name: req.body.name,\n        email: req.body.email,\n        avatar: avatar,\n        password: req.body.password\n      });\n      _bcryptjs2.default.genSalt(10, function (err, salt) {\n        _bcryptjs2.default.hash(newUser.password, salt, function (err, hash) {\n          if (err) {\n            throw err;\n          }\n          newUser.password = hash;\n          newUser.save().then(function (user) {\n            return res.json(user);\n          }).catch(function (err) {\n            return console.log(err);\n          });\n        });\n      });\n    }\n  });\n});\n\n// @route   POST api/users/login\n// @desc    Login User / Returning JWT Token\n// @access  Public\nrouter.post(\"/login\", function (req, res) {\n  var _validationLoginInput = (0, _login2.default)(req.body),\n      errors = _validationLoginInput.errors,\n      isValid = _validationLoginInput.isValid;\n\n  if (!isValid) {\n    return res.status(400).json(errors);\n  }\n  var email = req.body.email;\n  var password = req.body.password;\n\n  _User2.default.findOne({ email: email }).then(function (user) {\n    // Check for user\n    if (!user) {\n      errors.email = \"User not found\";\n      return res.status(404).json(errors);\n    }\n    // Check password\n    _bcryptjs2.default.compare(password, user.password).then(function (isMatch) {\n      if (isMatch) {\n        // user matched\n        var payload = { id: user.id, name: user.name, avatar: user.avatar };\n        // sign token\n        _jsonwebtoken2.default.sign(payload, _keys2.default.secretOrKey, { expiresIn: 3600 }, function (err, token) {\n          res.json({ success: true, token: \"Bearer \" + token });\n        });\n      } else {\n        errors.password = \"Password incorrect\";\n        return res.status(400).json(errors);\n      }\n    });\n  });\n});\n\n// @route   POST api/users/current\n// @desc    Return current user\n// @access  Private\nrouter.get(\"/current\", _passport2.default.authenticate(\"jwt\", { session: false }), function (req, res) {\n  res.send({ id: req.user.id, name: req.user.name, email: req.user.email });\n});\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./server/routes/api/users.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _users = __webpack_require__(/*! ./routes/api/users */ \"./server/routes/api/users.js\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nvar _keys = __webpack_require__(/*! ./config/keys */ \"./server/config/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_mongoose2.default.Promise = global.Promise;\n// Api\n\n// Initialize app\nvar app = (0, _express2.default)();\n// Body parser middleware\napp.use(_bodyParser2.default.urlencoded({ extended: false }));\napp.use(_bodyParser2.default.json());\n// Connect to MongoDB\n_mongoose2.default.connect(_keys2.default.mongoURI).then(function () {\n  return console.log(\"MongoDB connected\");\n}).catch(function (err) {\n  return console.log(err);\n});\n\n// Passport middleware\napp.use(_passport2.default.initialize());\n\n// Passport config\n__webpack_require__(/*! ./config/passport */ \"./server/config/passport.js\")(_passport2.default);\n\napp.use(\"/api/users\", _users2.default);\n\nvar port = process.env.PORT || 8000;\napp.listen(port, function () {\n  console.log(\"Server running on port \" + port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./server/validation/is-empty.js":
/*!***************************************!*\
  !*** ./server/validation/is-empty.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar isEmpty = function isEmpty(value) {\n  return value === undefined || value === null || (typeof value === \"undefined\" ? \"undefined\" : _typeof(value)) === \"object\" && Object.keys(value).length === 0 || typeof value === \"string\" && value.trim().length === 0;\n};\n\nmodule.exports = isEmpty;\n\n//# sourceURL=webpack:///./server/validation/is-empty.js?");

/***/ }),

/***/ "./server/validation/login.js":
/*!************************************!*\
  !*** ./server/validation/login.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Validator = __webpack_require__(/*! validator */ \"validator\");\nvar isEmpty = __webpack_require__(/*! ./is-empty */ \"./server/validation/is-empty.js\");\n\nvar validateLoginInput = function validateLoginInput(data) {\n  var errors = {};\n  // validate inputs are not empty\n  data.email = !isEmpty(data.email) ? data.email : \"\";\n  data.password = !isEmpty(data.password) ? data.password : \"\";\n  // Validate his email\n  if (!Validator.isEmail(data.email)) {\n    errors.email = \"Email is invalid\";\n  }\n  // Check empty email\n  if (Validator.isEmpty(data.email)) {\n    errors.email = \"Email field is required\";\n  }\n  // Check empty password\n  if (Validator.isEmpty(data.password)) {\n    errors.password = \"Password field is required\";\n  }\n\n  return {\n    errors: errors,\n    isValid: isEmpty(errors)\n  };\n};\n\nexports.default = validateLoginInput;\n\n//# sourceURL=webpack:///./server/validation/login.js?");

/***/ }),

/***/ "./server/validation/register.js":
/*!***************************************!*\
  !*** ./server/validation/register.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _validator = __webpack_require__(/*! validator */ \"validator\");\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _isEmpty = __webpack_require__(/*! ./is-empty */ \"./server/validation/is-empty.js\");\n\nvar _isEmpty2 = _interopRequireDefault(_isEmpty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar validateRegisterInput = function validateRegisterInput(data) {\n  var errors = {};\n  // validate inputs are not empty\n  data.name = !(0, _isEmpty2.default)(data.name) ? data.name : \"\";\n  data.email = !(0, _isEmpty2.default)(data.email) ? data.email : \"\";\n  data.password = !(0, _isEmpty2.default)(data.password) ? data.password : \"\";\n  data.password2 = !(0, _isEmpty2.default)(data.password2) ? data.password2 : \"\";\n  // check that name is the proper length\n  if (!_validator2.default.isLength(data.name, { min: 2, max: 30 })) {\n    errors.name = \"Name must be between 2 and 30 characters\";\n  }\n  // Check empty name\n  if (_validator2.default.isEmpty(data.name)) {\n    errors.name = \"Name field is required\";\n  }\n  // Check empty email\n  if (_validator2.default.isEmpty(data.email)) {\n    errors.email = \"Email field is required\";\n  }\n  // Validate his email\n  if (!_validator2.default.isEmail(data.email)) {\n    errors.email = \"Email is invalid\";\n  }\n  // Check empty password\n  if (_validator2.default.isEmpty(data.password)) {\n    errors.password = \"Password field is required\";\n  }\n  // check that password is the proper length\n  if (!_validator2.default.isLength(data.password, { min: 6, max: 30 })) {\n    errors.password = \"Password must be at least 6 characters\";\n  }\n  // Check empty password2\n  if (_validator2.default.isEmpty(data.password2)) {\n    errors.password2 = \"Confirm Password field is required\";\n  }\n  // Check Passwords match\n  if (!_validator2.default.equals(data.password, data.password2)) {\n    errors.password2 = \"Passwords must match\";\n  }\n  return {\n    errors: errors,\n    isValid: (0, _isEmpty2.default)(errors)\n  };\n};\n\nexports.default = validateRegisterInput;\n\n//# sourceURL=webpack:///./server/validation/register.js?");

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

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });