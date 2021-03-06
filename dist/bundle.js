// [DozCookieNotice]  Build version: 1.0.5  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("doz"));
	else if(typeof define === 'function' && define.amd)
		define("DozCookieNotice", ["doz"], factory);
	else if(typeof exports === 'object')
		exports["DozCookieNotice"] = factory(require("doz"));
	else
		root["DozCookieNotice"] = factory(root["Doz"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"doz","commonjs2":"doz","amd":"doz","root":"Doz"}
var external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _dec, _class, _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var CookieNoticeAgreement = (_dec = Object(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["tag"])('doz-cookie-notice'), _dec(_class = /*#__PURE__*/function (_Component) {
  _inherits(CookieNoticeAgreement, _Component);

  var _super = _createSuper(CookieNoticeAgreement);

  function CookieNoticeAgreement(o) {
    var _this;

    _classCallCheck(this, CookieNoticeAgreement);

    _this = _super.call(this, o);
    _this.props = {
      storageKey: 'doz-cookie-notice-agreement',
      position: 'bottom',
      message: '',
      moreInfoText: '',
      moreInfoLink: '',
      privacyLink: '',
      okButtonText: 'Ok',
      theme: 'dark'
    };
    return _this;
  }

  _createClass(CookieNoticeAgreement, [{
    key: "template",
    value: function template(h) {
      //language=HTML
      return h(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            <style> \n                :component {\n                    display: ", ";\n                    position: fixed;\n                    ", ";\n                    left: 0;\n                    width: 100%;\n                    z-index: 99999;\n                    font-family: Arial, 'sans-serif';\n                }\n                \n                * {\n                    box-sizing: border-box;\n                }\n                \n                .cookie-notice-container {\n                    ", "\n                    padding: 24px;\n                    font-size: 14px;\n                }\n                \n                .message-container {\n                    margin-bottom: 16px;\n                }\n                \n                .button {\n                    padding: 8px;\n                    border: none;\n                    display: inline-block;\n                    border-radius: 4px;\n                    text-transform: uppercase;\n                }\n                \n                .ok-button {\n                    border: none;\n                    background: cornflowerblue;\n                    color: #fff;\n                    cursor: pointer;\n                }\n                \n                a {\n                    ", "\n                }\n            </style>\n            <div class=\"cookie-notice-container\" data-nosnippet=\"true\">\n                <div class=\"message-container\">\n                    <span class=\"message-text\">", "</span>\n                    <span d-show=\"", "\" class=\"more-info-text\">&nbsp;\n                        <a href=\"", "\" target=\"_blank\">", "</a>\n                    </span>\n                </div>\n                <div class=\"buttons-container\">\n                    <button class=\"ok-button button\" onclick=\"", "\">\n                        ", "\n                    </button>\n                </div>\n            </div>\n        "])), this.agreementExists() ? 'none' : 'block', this.props.position === 'top' ? 'top: 0' : 'bottom: 0', this.props.theme === 'dark' ? 'background: #000; color: #fff;' : 'background: #fff; color: #000;', this.props.theme === 'dark' ? 'color: #fff;' : 'color: #000;', this.props.message, !!this.props.moreInfoLink, this.props.moreInfoLink, this.props.moreInfoText, this.agree, this.props.okButtonText);
    }
  }, {
    key: "agreementExists",
    value: function agreementExists() {
      return !!localStorage.getItem(this.props.storageKey);
    }
  }, {
    key: "agree",
    value: function agree() {
      localStorage.setItem(this.props.storageKey, new Date().getTime() + '');
      this.render();
    }
  }]);

  return CookieNoticeAgreement;
}(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["Component"])) || _class);

;
// CONCATENATED MODULE: ./index.js

 // expose component to global scope

function register() {
  if (typeof window !== 'undefined') {
    Object(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["define"])(CookieNoticeAgreement.tag || 'doz-cookie-notice', CookieNoticeAgreement); // Keep in mind to add a prefix like this: 'dwc-' to the name of the component you are going to define, 
    // this to prevent Doz from processing possible Web Components that have the same name as the Doz Components.

    Object(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["defineWebComponent"])('dwc-doz-cookie-notice', CookieNoticeAgreement, ['storage-key', 'position', 'message', 'more-info-text', 'more-info-link', 'privacy-link', 'ok-button-text', 'theme']);
  }
}

register();
/* harmony default export */ var index = __webpack_exports__["default"] = (CookieNoticeAgreement);

if (false) {}

/***/ })
/******/ ]);
}); 