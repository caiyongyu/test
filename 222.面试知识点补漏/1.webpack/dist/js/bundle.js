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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body{\\r\\n    background: red;\\r\\n    /* background-image: url('./2.jpg'); */\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = cssWithMappingToString(item, useSourceMap);\r\n\r\n      if (item[2]) {\r\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n      }\r\n\r\n      return content;\r\n    }).join('');\r\n  }; // import a list of modules into the list\r\n  // eslint-disable-next-line func-names\r\n\r\n\r\n  list.i = function (modules, mediaQuery, dedupe) {\r\n    if (typeof modules === 'string') {\r\n      // eslint-disable-next-line no-param-reassign\r\n      modules = [[null, modules, '']];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var i = 0; i < this.length; i++) {\r\n        // eslint-disable-next-line prefer-destructuring\r\n        var id = this[i][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _i = 0; _i < modules.length; _i++) {\r\n      var item = [].concat(modules[_i]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        // eslint-disable-next-line no-continue\r\n        continue;\r\n      }\r\n\r\n      if (mediaQuery) {\r\n        if (!item[2]) {\r\n          item[2] = mediaQuery;\r\n        } else {\r\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\r\n\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n\r\n  var cssMapping = item[3];\r\n\r\n  if (!cssMapping) {\r\n    return content;\r\n  }\r\n\r\n  if (useSourceMap && typeof btoa === 'function') {\r\n    var sourceMapping = toComment(cssMapping);\r\n    var sourceURLs = cssMapping.sources.map(function (source) {\r\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n    });\r\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n  }\r\n\r\n  return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\n\r\n\r\nfunction toComment(sourceMap) {\r\n  // eslint-disable-next-line no-undef\r\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n  return \"/*# \".concat(data, \" */\");\r\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar isOldIE = function isOldIE() {\r\n  var memo;\r\n  return function memorize() {\r\n    if (typeof memo === 'undefined') {\r\n      // Test for IE <= 9 as proposed by Browserhacks\r\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\r\n      // Tests for existence of standard globals is to allow style-loader\r\n      // to operate correctly into non-standard environments\r\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\r\n      memo = Boolean(window && document && document.all && !window.atob);\r\n    }\r\n\r\n    return memo;\r\n  };\r\n}();\r\n\r\nvar getTarget = function getTarget() {\r\n  var memo = {};\r\n  return function memorize(target) {\r\n    if (typeof memo[target] === 'undefined') {\r\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n        try {\r\n          // This will throw an exception if access to iframe is blocked\r\n          // due to cross-origin restrictions\r\n          styleTarget = styleTarget.contentDocument.head;\r\n        } catch (e) {\r\n          // istanbul ignore next\r\n          styleTarget = null;\r\n        }\r\n      }\r\n\r\n      memo[target] = styleTarget;\r\n    }\r\n\r\n    return memo[target];\r\n  };\r\n}();\r\n\r\nvar stylesInDom = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDom.length; i++) {\r\n    if (stylesInDom[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var index = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3]\r\n    };\r\n\r\n    if (index !== -1) {\r\n      stylesInDom[index].references++;\r\n      stylesInDom[index].updater(obj);\r\n    } else {\r\n      stylesInDom.push({\r\n        identifier: identifier,\r\n        updater: addStyle(obj, options),\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction insertStyleElement(options) {\r\n  var style = document.createElement('style');\r\n  var attributes = options.attributes || {};\r\n\r\n  if (typeof attributes.nonce === 'undefined') {\r\n    var nonce =  true ? __webpack_require__.nc : undefined;\r\n\r\n    if (nonce) {\r\n      attributes.nonce = nonce;\r\n    }\r\n  }\r\n\r\n  Object.keys(attributes).forEach(function (key) {\r\n    style.setAttribute(key, attributes[key]);\r\n  });\r\n\r\n  if (typeof options.insert === 'function') {\r\n    options.insert(style);\r\n  } else {\r\n    var target = getTarget(options.insert || 'head');\r\n\r\n    if (!target) {\r\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n    }\r\n\r\n    target.appendChild(style);\r\n  }\r\n\r\n  return style;\r\n}\r\n\r\nfunction removeStyleElement(style) {\r\n  // istanbul ignore if\r\n  if (style.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  style.parentNode.removeChild(style);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nvar replaceText = function replaceText() {\r\n  var textStore = [];\r\n  return function replace(index, replacement) {\r\n    textStore[index] = replacement;\r\n    return textStore.filter(Boolean).join('\\n');\r\n  };\r\n}();\r\n\r\nfunction applyToSingletonTag(style, index, remove, obj) {\r\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n  if (style.styleSheet) {\r\n    style.styleSheet.cssText = replaceText(index, css);\r\n  } else {\r\n    var cssNode = document.createTextNode(css);\r\n    var childNodes = style.childNodes;\r\n\r\n    if (childNodes[index]) {\r\n      style.removeChild(childNodes[index]);\r\n    }\r\n\r\n    if (childNodes.length) {\r\n      style.insertBefore(cssNode, childNodes[index]);\r\n    } else {\r\n      style.appendChild(cssNode);\r\n    }\r\n  }\r\n}\r\n\r\nfunction applyToTag(style, options, obj) {\r\n  var css = obj.css;\r\n  var media = obj.media;\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (media) {\r\n    style.setAttribute('media', media);\r\n  } else {\r\n    style.removeAttribute('media');\r\n  }\r\n\r\n  if (sourceMap && btoa) {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  if (style.styleSheet) {\r\n    style.styleSheet.cssText = css;\r\n  } else {\r\n    while (style.firstChild) {\r\n      style.removeChild(style.firstChild);\r\n    }\r\n\r\n    style.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nvar singleton = null;\r\nvar singletonCounter = 0;\r\n\r\nfunction addStyle(obj, options) {\r\n  var style;\r\n  var update;\r\n  var remove;\r\n\r\n  if (options.singleton) {\r\n    var styleIndex = singletonCounter++;\r\n    style = singleton || (singleton = insertStyleElement(options));\r\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\r\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\r\n  } else {\r\n    style = insertStyleElement(options);\r\n    update = applyToTag.bind(null, style, options);\r\n\r\n    remove = function remove() {\r\n      removeStyleElement(style);\r\n    };\r\n  }\r\n\r\n  update(obj);\r\n  return function updateStyle(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\r\n        return;\r\n      }\r\n\r\n      update(obj = newObj);\r\n    } else {\r\n      remove();\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\r\n  // tags it will allow on a page\r\n\r\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\r\n    options.singleton = isOldIE();\r\n  }\r\n\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\r\n      return;\r\n    }\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDom[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDom[_index].references === 0) {\r\n        stylesInDom[_index].updater();\r\n\r\n        stylesInDom.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nconsole.log(111);\nvar a = 10;\nconsole.log(a);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });