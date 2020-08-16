module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"0":"lang-en-US","1":"lang-ru-RU"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return vueI18n; });
/* unused harmony export vueI18nLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return defaultLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return routesNameSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return defaultLocaleRouteNameSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return strategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return lazy; });
/* unused harmony export langDir */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return rootRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return detectBrowserLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return differentDomains; });
/* unused harmony export seo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return vuex; });
/* unused harmony export parsePages */
/* unused harmony export pages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return beforeLanguageSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return onLanguageSwitched; });
/* unused harmony export IS_UNIVERSAL_MODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MODULE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOCALE_CODE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOCALE_ISO_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOCALE_DOMAIN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOCALE_FILE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return STRATEGIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENT_OPTIONS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return localeCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return trailingSlash; });
const vueI18n = {};
const vueI18nLoader = false;
const locales = [{
  "code": "ru",
  "name": "Русский",
  "iso": "ru-RU",
  "file": "ru-RU.js"
}, {
  "code": "ru",
  "name": "English",
  "iso": "en-US",
  "file": "en-US.js"
}];
const defaultLocale = 'ru';
const routesNameSeparator = '___';
const defaultLocaleRouteNameSuffix = 'default';
const strategy = 'no_prefix';
const lazy = true;
const langDir = 'lang/';
const rootRedirect = null;
const detectBrowserLanguage = {
  "useCookie": true,
  "cookieDomain": null,
  "cookieKey": "i18n_redirected",
  "alwaysRedirect": false,
  "fallbackLocale": "ru"
};
const differentDomains = false;
const seo = false;
const baseUrl = '';
const vuex = {
  "moduleName": "i18n",
  "syncLocale": false,
  "syncMessages": false,
  "syncRouteParams": true
};
const parsePages = true;
const pages = {};
const beforeLanguageSwitch = () => null;
const onLanguageSwitched = () => null;
const IS_UNIVERSAL_MODE = true;
const MODULE_NAME = 'nuxt-i18n';
const LOCALE_CODE_KEY = 'code';
const LOCALE_ISO_KEY = 'iso';
const LOCALE_DOMAIN_KEY = 'domain';
const LOCALE_FILE_KEY = 'file';
const STRATEGIES = {
  "PREFIX": "prefix",
  "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
  "PREFIX_AND_DEFAULT": "prefix_and_default",
  "NO_PREFIX": "no_prefix"
};
const COMPONENT_OPTIONS_KEY = 'nuxtI18n';
const localeCodes = ["ru", "ru"];
const trailingSlash = undefined;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nuxt-property-decorator");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vuescroll");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("de94c39a", content, true, context)
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4a96bc54", content, true, context)
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f82f029e", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7d9ef54c", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("72daabed", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3191d5ad", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f93fe718", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("08af7ee6", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("edf87c24", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("49f61046", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2570ef5e", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(78)


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("vue-apollo");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/user-avatar2.a948d52.jpg";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGQ0M0RCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMThTMCAyNy45NDEgMCAxOCA4LjA1OSAwIDE4IDBzMTggOC4wNTkgMTggMTgiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzI5MkYzMyIgZD0iTTEuMjQgMTEuMDE4Yy4yNC4yMzkgMS40MzguOTU3IDEuNjc3IDEuNjc1LjI0LjcxNy43MiA0Ljc4NCAyLjE1OCA1Ljk4MSAxLjQ4MyAxLjIzMiA3LjA3Ny43NzQgOC4xNDguMjQgMi4zOTctMS4xOTUgMi42OTEtNC41MzEgMy4xMTUtNi4yMjEuMjM5LS45NTcgMS42NzctLjk1NyAxLjY3Ny0uOTU3czEuNDM4IDAgMS42NzguOTU2Yy40MjQgMS42OTEuNzIgNS4wMjcgMy4xMTUgNi4yMjEgMS4wNzIuNTM1IDYuNjY2Ljk5NCA4LjE1MS0uMjM4IDEuNDM2LTEuMTk3IDEuOTE1LTUuMjY0IDIuMTU1LTUuOTgyLjIzOC0uNzE3IDEuNDM4LTEuNDM1IDEuNjc3LTEuNjc0LjI0MS0uMjM5LjI0MS0xLjE5NiAwLTEuNDM2LS40NzktLjQ3OC02LjEzNC0uOTA0LTEyLjIyMy0uMjM5LTEuMjE1LjEzMy0xLjY3Ny40NzgtNC41NTQuNDc4LTIuODc1IDAtMy4zMzktLjM0Ni00LjU1My0uNDc4LTYuMDg1LS42NjYtMTEuNzQxLS4yNC0xMi4yMjEuMjM4LS4yMzkuMjM5LS4yMzkgMS4xOTcgMCAxLjQzNnoiLz48cGF0aCBmaWxsPSIjNjY0NTAwIiBkPSJNMjcuMzM1IDIzLjYyOWMtLjE3OC0uMTYxLS40NDQtLjE3MS0uNjM1LS4wMjktLjAzOS4wMjktMy45MjIgMi45LTguNyAyLjktNC43NjYgMC04LjY2Mi0yLjg3MS04LjctMi45LS4xOTEtLjE0Mi0uNDU3LS4xMy0uNjM1LjAyOS0uMTc3LjE2LS4yMTcuNDI0LS4wOTQuNjI4QzguNyAyNC40NzIgMTEuNzg4IDI5LjUgMTggMjkuNXM5LjMwMS01LjAyOCA5LjQyOS01LjI0M2MuMTIzLS4yMDUuMDg0LS40NjgtLjA5NC0uNjI4eiIvPjwvc3ZnPg=="

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/faces.3c3e548.png";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("vue-functional-data-merge");

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ({
  app,
  route,
  store,
  redirect
}) {
  const blockedForLoggedIn = ['login'];
  const blockedForLoggedOut = [];

  if (blockedForLoggedIn.includes(route.name || '') && store.state.logged && app.router) {
    redirect(302, '/');
  } else if (blockedForLoggedOut.includes(route.name || '') && !store.state.logged && app.router) {
    redirect(302, '/login');
  }
});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PGNpcmNsZSBmaWxsPSIjRkZDQzREIiBjeD0iMTgiIGN5PSIxOCIgcj0iMTgiLz48cGF0aCBmaWxsPSIjNjY0NTAwIiBkPSJNMTggMjFjLTMuNjIzIDAtNi4wMjctLjQyMi05LTEtLjY3OS0uMTMxLTIgMC0yIDIgMCA0IDQuNTk1IDkgMTEgOSA2LjQwNCAwIDExLTUgMTEtOSAwLTItMS4zMjEtMi4xMzItMi0yLTIuOTczLjU3OC01LjM3NyAxLTkgMXoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNOSAyMnMzIDEgOSAxIDktMSA5LTEtMiA0LTkgNC05LTQtOS00eiIvPjxlbGxpcHNlIGZpbGw9IiM2NjQ1MDAiIGN4PSIxMiIgY3k9IjEzLjUiIHJ4PSIyLjUiIHJ5PSIzLjUiLz48ZWxsaXBzZSBmaWxsPSIjNjY0NTAwIiBjeD0iMjQiIGN5PSIxMy41IiByeD0iMi41IiByeT0iMy41Ii8+PC9zdmc+"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGQ0M0RCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMTgtOS45NCAwLTE4LTguMDU5LTE4LTE4QzAgOC4wNiA4LjA2IDAgMTggMGM5Ljk0MSAwIDE4IDguMDYgMTggMTgiLz48cGF0aCBmaWxsPSIjNjY0NTAwIiBkPSJNMjguNDU3IDE3Ljc5N2MtLjA2LS4xMzUtMS40OTktMy4yOTctNC40NTctMy4yOTctMi45NTcgMC00LjM5NyAzLjE2Mi00LjQ1NyAzLjI5Ny0uMDkyLjIwNy0uMDMyLjQ0OS4xNDUuNTkxLjE3NS4xNDIuNDI2LjE0Ny42MS4wMTQuMDEyLS4wMDkgMS4yNjItLjkwMiAzLjcwMi0uOTAyIDIuNDI2IDAgMy42NzQuODgxIDMuNzAyLjkwMS4wODguMDY2LjE5NC4wOTkuMjk4LjA5OS4xMSAwIC4yMjEtLjAzNy4zMTItLjEwOS4xNzctLjE0Mi4yMzgtLjM4Ni4xNDUtLjU5NHptLTEyIDBjLS4wNi0uMTM1LTEuNDk5LTMuMjk3LTQuNDU3LTMuMjk3LTIuOTU3IDAtNC4zOTcgMy4xNjItNC40NTcgMy4yOTctLjA5Mi4yMDctLjAzMi40NDkuMTQ0LjU5MS4xNzYuMTQyLjQyNy4xNDcuNjEuMDE0LjAxMy0uMDA5IDEuMjYyLS45MDIgMy43MDMtLjkwMiAyLjQyNiAwIDMuNjc0Ljg4MSAzLjcwMi45MDEuMDg4LjA2Ni4xOTQuMDk5LjI5OC4wOTkuMTEgMCAuMjIxLS4wMzcuMzEyLS4xMDkuMTc4LS4xNDIuMjM3LS4zODYuMTQ1LS41OTR6TTE4IDIyYy0zLjYyMyAwLTYuMDI3LS40MjItOS0xLS42NzktLjEzMS0yIDAtMiAyIDAgNCA0LjU5NSA5IDExIDkgNi40MDQgMCAxMS01IDExLTkgMC0yLTEuMzIxLTIuMTMyLTItMi0yLjk3My41NzgtNS4zNzcgMS05IDF6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTkgMjNzMyAxIDkgMSA5LTEgOS0xLTIgNC05IDQtOS00LTktNHoiLz48L3N2Zz4="

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_upload_file_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_upload_file_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_upload_file_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_upload_file_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_upload_file_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_upload_file_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".upload-file{display:none;width:100%;height:100%;background-color:rgba(0,0,0,.502)}.upload-file_type_active{display:flex}.upload-file__wrapper{width:300px;margin:auto;background-color:var(--secondary-background);border-radius:4px}.upload-file__section{display:flex;justify-content:center;align-items:center;flex-direction:column;margin:10px;padding:20px;color:var(--gray_600);cursor:pointer;border:2px dashed var(--primary-background);transition:all .3s ease}.upload-file__section:hover,.upload-file__section_type_hovered{color:var(--accent-text);border-color:var(--accent-background)}.upload-file__section:hover .upload-file__icon,.upload-file__section_type_hovered .upload-file__icon{fill:var(--accent-background)}.upload-file__icon{width:90px;height:90px;margin-bottom:10px;fill:var(--primary-background);transition:all .3s ease}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_message_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_message_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_message_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_message_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_message_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_message_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".message{position:relative;display:block;flex-shrink:0;min-height:48px;margin-top:14px;padding-right:50px;padding-left:80px;line-height:22px;transition:all .3s ease}.message:hover{background-color:var(--secondary-background)}.message__avatar{position:absolute;top:4px;left:20px;width:40px;height:40px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:50%;-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center}.message__author-name{display:inline-block;vertical-align:middle;overflow:hidden;max-width:150px;font-size:14px;font-weight:600;white-space:nowrap;text-overflow:ellipsis;cursor:pointer}.message__author-name:hover{text-decoration:underline}.message__header{min-height:22px;font-size:0;white-space:pre-line}.message__timestamp{display:none;vertical-align:middle;margin-left:4px;color:var(--gray_600);font-size:12px;cursor:default}@media screen and (min-width:768px){.message__timestamp{display:inline}}.message__text{color:var(--gray_200)}.message__emoji{vertical-align:bottom;width:22px;height:22px;-o-object-fit:contain;object-fit:contain}.message__body{flex-shrink:0}.message__image{display:inline-block;max-width:80%;-o-object-fit:cover;object-fit:cover}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_chat_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_chat_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_chat_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_chat_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_chat_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_chat_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chat{position:relative;display:block;width:100%;height:100%;margin-right:30px;padding:20px 0}@media screen and (min-width:768px){.chat{margin-right:0}}.chat__messages{position:absolute;display:flex;justify-content:flex-end;flex-direction:column;width:100%;min-height:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_main_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_main_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_main_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_main_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_main_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_main_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".main{position:relative;display:block}.main__header{position:fixed;top:0;z-index:100;width:100vw}.main__header_type_transparent{background:transparent}.main__header_type_colored{background:linear-gradient(45deg,#5c1cdd,#701bb5)}.main__player{position:fixed;bottom:0;width:100%}.main__footer{height:60px;background:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("19c3077e", content, true)

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{margin:.67em 0;font-size:2em}hr{overflow:visible;box-sizing:content-box;height:0}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;border-bottom:none}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{position:relative;vertical-align:baseline;font-size:75%;line-height:0}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:100%;line-height:1.15}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}[type=button]-moz-focusring,[type=reset]-moz-focusring,[type=submit]-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{display:table;box-sizing:border-box;max-width:100%;padding:0;color:inherit;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}details{display:block}summary{display:list-item}[hidden],template{display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("c9897de0", content, true)

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".grid{display:block;box-sizing:border-box;min-width:320px}.grid__container{box-sizing:border-box;width:100%;max-width:1440px;margin:0 auto}.grid__container_width_full,.grid__container padding 0 grids.default.gutter_full{width:100%;max-width:100%}.grid__group{display:flex;flex-wrap:wrap;box-sizing:border-box;margin:0 -10px}.grid__group_no_gutters .grid__col{padding:0}.grid__group_align-items_start{align-items:flex-start}.grid__group_align-items_center{align-items:center}.grid__group_align-items_end{align-items:flex-end}@media screen and (min-width:1px){.grid__group_align-items_xs-start{align-items:flex-start}}@media screen and (min-width:1px){.grid__group_align-items_xs-center{align-items:center}}@media screen and (min-width:1px){.grid__group_align-items_xs-end{align-items:flex-end}}@media screen and (min-width:480px){.grid__group_align-items_s-start{align-items:flex-start}}@media screen and (min-width:480px){.grid__group_align-items_s-center{align-items:center}}@media screen and (min-width:480px){.grid__group_align-items_s-end{align-items:flex-end}}@media screen and (min-width:768px){.grid__group_align-items_m-start{align-items:flex-start}}@media screen and (min-width:768px){.grid__group_align-items_m-center{align-items:center}}@media screen and (min-width:768px){.grid__group_align-items_m-end{align-items:flex-end}}@media screen and (min-width:1025px){.grid__group_align-items_l-start{align-items:flex-start}}@media screen and (min-width:1025px){.grid__group_align-items_l-center{align-items:center}}@media screen and (min-width:1025px){.grid__group_align-items_l-end{align-items:flex-end}}@media screen and (min-width:1170px){.grid__group_align-items_xl-start{align-items:flex-start}}@media screen and (min-width:1170px){.grid__group_align-items_xl-center{align-items:center}}@media screen and (min-width:1170px){.grid__group_align-items_xl-end{align-items:flex-end}}@media screen and (min-width:1440px){.grid__group_align-items_xxl-start{align-items:flex-start}}@media screen and (min-width:1440px){.grid__group_align-items_xxl-center{align-items:center}}@media screen and (min-width:1440px){.grid__group_align-items_xxl-end{align-items:flex-end}}.grid__group_justify-content_start{justify-content:flex-start}.grid__group_justify-content_center{justify-content:center}.grid__group_justify-content_end{justify-content:flex-end}.grid__group_justify-content_around{justify-content:space-around}.grid__group_justify-content_between{justify-content:space-between}@media screen and (min-width:1px){.grid__group_justify-content_xs-start{justify-content:flex-start}}@media screen and (min-width:1px){.grid__group_justify-content_xs-center{justify-content:center}}@media screen and (min-width:1px){.grid__group_justify-content_xs-end{justify-content:flex-end}}@media screen and (min-width:1px){.grid__group_justify-content_xs-around{justify-content:space-around}}@media screen and (min-width:1px){.grid__group_justify-content_xs-between{justify-content:space-between}}@media screen and (min-width:480px){.grid__group_justify-content_s-start{justify-content:flex-start}}@media screen and (min-width:480px){.grid__group_justify-content_s-center{justify-content:center}}@media screen and (min-width:480px){.grid__group_justify-content_s-end{justify-content:flex-end}}@media screen and (min-width:480px){.grid__group_justify-content_s-around{justify-content:space-around}}@media screen and (min-width:480px){.grid__group_justify-content_s-between{justify-content:space-between}}@media screen and (min-width:768px){.grid__group_justify-content_m-start{justify-content:flex-start}}@media screen and (min-width:768px){.grid__group_justify-content_m-center{justify-content:center}}@media screen and (min-width:768px){.grid__group_justify-content_m-end{justify-content:flex-end}}@media screen and (min-width:768px){.grid__group_justify-content_m-around{justify-content:space-around}}@media screen and (min-width:768px){.grid__group_justify-content_m-between{justify-content:space-between}}@media screen and (min-width:1025px){.grid__group_justify-content_l-start{justify-content:flex-start}}@media screen and (min-width:1025px){.grid__group_justify-content_l-center{justify-content:center}}@media screen and (min-width:1025px){.grid__group_justify-content_l-end{justify-content:flex-end}}@media screen and (min-width:1025px){.grid__group_justify-content_l-around{justify-content:space-around}}@media screen and (min-width:1025px){.grid__group_justify-content_l-between{justify-content:space-between}}@media screen and (min-width:1170px){.grid__group_justify-content_xl-start{justify-content:flex-start}}@media screen and (min-width:1170px){.grid__group_justify-content_xl-center{justify-content:center}}@media screen and (min-width:1170px){.grid__group_justify-content_xl-end{justify-content:flex-end}}@media screen and (min-width:1170px){.grid__group_justify-content_xl-around{justify-content:space-around}}@media screen and (min-width:1170px){.grid__group_justify-content_xl-between{justify-content:space-between}}@media screen and (min-width:1440px){.grid__group_justify-content_xxl-start{justify-content:flex-start}}@media screen and (min-width:1440px){.grid__group_justify-content_xxl-center{justify-content:center}}@media screen and (min-width:1440px){.grid__group_justify-content_xxl-end{justify-content:flex-end}}@media screen and (min-width:1440px){.grid__group_justify-content_xxl-around{justify-content:space-around}}@media screen and (min-width:1440px){.grid__group_justify-content_xxl-between{justify-content:space-between}}.grid__col{position:relative;flex-grow:1;flex-basis:0%;box-sizing:border-box}.grid .grid__group>.grid__col{min-height:1px;padding:0 10px}.grid .grid__group>.grid__col_align-self_start{align-items:flex-start}.grid .grid__group>.grid__col_align-self_center{align-items:center}.grid .grid__group>.grid__col_align-self_end{align-items:flex-end}@media screen and (min-width:1px){.grid .grid__group>.grid__col_align-self_xs-start{align-items:flex-start}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_align-self_xs-center{align-items:center}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_align-self_xs-end{align-items:flex-end}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_align-self_s-start{align-items:flex-start}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_align-self_s-center{align-items:center}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_align-self_s-end{align-items:flex-end}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_align-self_m-start{align-items:flex-start}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_align-self_m-center{align-items:center}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_align-self_m-end{align-items:flex-end}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_align-self_l-start{align-items:flex-start}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_align-self_l-center{align-items:center}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_align-self_l-end{align-items:flex-end}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_align-self_xl-start{align-items:flex-start}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_align-self_xl-center{align-items:center}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_align-self_xl-end{align-items:flex-end}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_align-self_xxl-start{align-items:flex-start}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_align-self_xxl-center{align-items:center}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_align-self_xxl-end{align-items:flex-end}}.grid .grid__group>.grid__col_size_auto{flex-grow:1}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-auto{flex-grow:1}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-auto{flex-grow:1}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-auto{flex-grow:1}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-auto{flex-grow:1}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-auto{flex-grow:1}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-auto{flex-grow:1}}.grid .grid__group>.grid__col_size_1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}.grid .grid__group>.grid__col_size_2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}.grid .grid__group>.grid__col_size_3{flex:0 0 25%;max-width:25%}.grid .grid__group>.grid__col_size_4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}.grid .grid__group>.grid__col_size_5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}.grid .grid__group>.grid__col_size_6{flex:0 0 50%;max-width:50%}.grid .grid__group>.grid__col_size_7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}.grid .grid__group>.grid__col_size_8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}.grid .grid__group>.grid__col_size_9{flex:0 0 75%;max-width:75%}.grid .grid__group>.grid__col_size_10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}.grid .grid__group>.grid__col_size_11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}.grid .grid__group>.grid__col_size_12{flex:0 0 100%;max-width:100%}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_size_xs-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_size_s-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_size_m-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_size_l-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_size_xl-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_size_xxl-12{flex:0 0 100%;max-width:100%}}.grid .grid__group>.grid__col_order_1{order:1}.grid .grid__group>.grid__col_order_2{order:2}.grid .grid__group>.grid__col_order_3{order:3}.grid .grid__group>.grid__col_order_4{order:4}.grid .grid__group>.grid__col_order_5{order:5}.grid .grid__group>.grid__col_order_6{order:6}.grid .grid__group>.grid__col_order_7{order:7}.grid .grid__group>.grid__col_order_8{order:8}.grid .grid__group>.grid__col_order_9{order:9}.grid .grid__group>.grid__col_order_10{order:10}.grid .grid__group>.grid__col_order_11{order:11}.grid .grid__group>.grid__col_order_12{order:12}.grid .grid__group>.grid__col_order_first{order:-1}.grid .grid__group>.grid__col_order_last{order:13}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-1{order:1}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-2{order:2}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-3{order:3}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-4{order:4}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-5{order:5}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-6{order:6}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-7{order:7}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-8{order:8}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-9{order:9}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-10{order:10}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-11{order:11}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-12{order:12}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-first{order:-1}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_order_xs-last{order:13}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-1{order:1}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-2{order:2}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-3{order:3}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-4{order:4}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-5{order:5}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-6{order:6}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-7{order:7}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-8{order:8}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-9{order:9}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-10{order:10}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-11{order:11}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-12{order:12}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-first{order:-1}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_order_s-last{order:13}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-1{order:1}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-2{order:2}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-3{order:3}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-4{order:4}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-5{order:5}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-6{order:6}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-7{order:7}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-8{order:8}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-9{order:9}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-10{order:10}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-11{order:11}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-12{order:12}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-first{order:-1}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_order_m-last{order:13}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-1{order:1}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-2{order:2}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-3{order:3}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-4{order:4}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-5{order:5}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-6{order:6}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-7{order:7}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-8{order:8}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-9{order:9}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-10{order:10}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-11{order:11}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-12{order:12}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-first{order:-1}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_order_l-last{order:13}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-1{order:1}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-2{order:2}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-3{order:3}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-4{order:4}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-5{order:5}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-6{order:6}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-7{order:7}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-8{order:8}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-9{order:9}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-10{order:10}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-11{order:11}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-12{order:12}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-first{order:-1}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_order_xl-last{order:13}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-1{order:1}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-2{order:2}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-3{order:3}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-4{order:4}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-5{order:5}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-6{order:6}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-7{order:7}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-8{order:8}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-9{order:9}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-10{order:10}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-11{order:11}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-12{order:12}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-first{order:-1}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_order_xxl-last{order:13}}.grid .grid__group>.grid__col_push_1{position:relative;left:8.333333333333334%}.grid .grid__group>.grid__col_push_2{position:relative;left:16.666666666666668%}.grid .grid__group>.grid__col_push_3{position:relative;left:25%}.grid .grid__group>.grid__col_push_4{position:relative;left:33.333333333333336%}.grid .grid__group>.grid__col_push_5{position:relative;left:41.66666666666667%}.grid .grid__group>.grid__col_push_6{position:relative;left:50%}.grid .grid__group>.grid__col_push_7{position:relative;left:58.333333333333336%}.grid .grid__group>.grid__col_push_8{position:relative;left:66.66666666666667%}.grid .grid__group>.grid__col_push_9{position:relative;left:75%}.grid .grid__group>.grid__col_push_10{position:relative;left:83.33333333333334%}.grid .grid__group>.grid__col_push_11{position:relative;left:91.66666666666667%}.grid .grid__group>.grid__col_push_12{position:relative;left:100%}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-3{position:relative;left:25%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-6{position:relative;left:50%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-9{position:relative;left:75%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_push_xs-12{position:relative;left:100%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-3{position:relative;left:25%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-6{position:relative;left:50%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-9{position:relative;left:75%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_push_s-12{position:relative;left:100%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-3{position:relative;left:25%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-6{position:relative;left:50%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-9{position:relative;left:75%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_push_m-12{position:relative;left:100%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-3{position:relative;left:25%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-6{position:relative;left:50%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-9{position:relative;left:75%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_push_l-12{position:relative;left:100%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-3{position:relative;left:25%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-6{position:relative;left:50%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-9{position:relative;left:75%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_push_xl-12{position:relative;left:100%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-3{position:relative;left:25%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-6{position:relative;left:50%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-9{position:relative;left:75%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_push_xxl-12{position:relative;left:100%}}.grid .grid__group>.grid__col_pull_1{position:relative;right:8.333333333333334%}.grid .grid__group>.grid__col_pull_2{position:relative;right:16.666666666666668%}.grid .grid__group>.grid__col_pull_3{position:relative;right:25%}.grid .grid__group>.grid__col_pull_4{position:relative;right:33.333333333333336%}.grid .grid__group>.grid__col_pull_5{position:relative;right:41.66666666666667%}.grid .grid__group>.grid__col_pull_6{position:relative;right:50%}.grid .grid__group>.grid__col_pull_7{position:relative;right:58.333333333333336%}.grid .grid__group>.grid__col_pull_8{position:relative;right:66.66666666666667%}.grid .grid__group>.grid__col_pull_9{position:relative;right:75%}.grid .grid__group>.grid__col_pull_10{position:relative;right:83.33333333333334%}.grid .grid__group>.grid__col_pull_11{position:relative;right:91.66666666666667%}.grid .grid__group>.grid__col_pull_12{position:relative;right:100%}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-3{position:relative;right:25%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-6{position:relative;right:50%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-9{position:relative;right:75%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_pull_xs-12{position:relative;right:100%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-3{position:relative;right:25%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-6{position:relative;right:50%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-9{position:relative;right:75%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_pull_s-12{position:relative;right:100%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-3{position:relative;right:25%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-6{position:relative;right:50%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-9{position:relative;right:75%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_pull_m-12{position:relative;right:100%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-3{position:relative;right:25%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-6{position:relative;right:50%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-9{position:relative;right:75%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_pull_l-12{position:relative;right:100%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-3{position:relative;right:25%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-6{position:relative;right:50%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-9{position:relative;right:75%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_pull_xl-12{position:relative;right:100%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-3{position:relative;right:25%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-6{position:relative;right:50%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-9{position:relative;right:75%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_pull_xxl-12{position:relative;right:100%}}.grid .grid__group>.grid__col_offset_1{margin-left:8.333333333333334%}.grid .grid__group>.grid__col_offset_2{margin-left:16.666666666666668%}.grid .grid__group>.grid__col_offset_3{margin-left:25%}.grid .grid__group>.grid__col_offset_4{margin-left:33.333333333333336%}.grid .grid__group>.grid__col_offset_5{margin-left:41.66666666666667%}.grid .grid__group>.grid__col_offset_6{margin-left:50%}.grid .grid__group>.grid__col_offset_7{margin-left:58.333333333333336%}.grid .grid__group>.grid__col_offset_8{margin-left:66.66666666666667%}.grid .grid__group>.grid__col_offset_9{margin-left:75%}.grid .grid__group>.grid__col_offset_10{margin-left:83.33333333333334%}.grid .grid__group>.grid__col_offset_11{margin-left:91.66666666666667%}.grid .grid__group>.grid__col_offset_12{margin-left:100%}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-1{margin-left:8.333333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-2{margin-left:16.666666666666668%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-3{margin-left:25%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-4{margin-left:33.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-5{margin-left:41.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-6{margin-left:50%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-7{margin-left:58.333333333333336%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-8{margin-left:66.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-9{margin-left:75%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-10{margin-left:83.33333333333334%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-11{margin-left:91.66666666666667%}}@media screen and (min-width:1px){.grid .grid__group>.grid__col_offset_xs-12{margin-left:100%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-1{margin-left:8.333333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-2{margin-left:16.666666666666668%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-3{margin-left:25%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-4{margin-left:33.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-5{margin-left:41.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-6{margin-left:50%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-7{margin-left:58.333333333333336%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-8{margin-left:66.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-9{margin-left:75%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-10{margin-left:83.33333333333334%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-11{margin-left:91.66666666666667%}}@media screen and (min-width:480px){.grid .grid__group>.grid__col_offset_s-12{margin-left:100%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-1{margin-left:8.333333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-2{margin-left:16.666666666666668%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-3{margin-left:25%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-4{margin-left:33.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-5{margin-left:41.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-6{margin-left:50%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-7{margin-left:58.333333333333336%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-8{margin-left:66.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-9{margin-left:75%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-10{margin-left:83.33333333333334%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-11{margin-left:91.66666666666667%}}@media screen and (min-width:768px){.grid .grid__group>.grid__col_offset_m-12{margin-left:100%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-1{margin-left:8.333333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-2{margin-left:16.666666666666668%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-3{margin-left:25%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-4{margin-left:33.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-5{margin-left:41.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-6{margin-left:50%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-7{margin-left:58.333333333333336%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-8{margin-left:66.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-9{margin-left:75%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-10{margin-left:83.33333333333334%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-11{margin-left:91.66666666666667%}}@media screen and (min-width:1025px){.grid .grid__group>.grid__col_offset_l-12{margin-left:100%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-1{margin-left:8.333333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-2{margin-left:16.666666666666668%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-3{margin-left:25%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-4{margin-left:33.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-5{margin-left:41.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-6{margin-left:50%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-7{margin-left:58.333333333333336%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-8{margin-left:66.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-9{margin-left:75%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-10{margin-left:83.33333333333334%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-11{margin-left:91.66666666666667%}}@media screen and (min-width:1170px){.grid .grid__group>.grid__col_offset_xl-12{margin-left:100%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-1{margin-left:8.333333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-2{margin-left:16.666666666666668%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-3{margin-left:25%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-4{margin-left:33.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-5{margin-left:41.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-6{margin-left:50%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-7{margin-left:58.333333333333336%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-8{margin-left:66.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-9{margin-left:75%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-10{margin-left:83.33333333333334%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-11{margin-left:91.66666666666667%}}@media screen and (min-width:1440px){.grid .grid__group>.grid__col_offset_xxl-12{margin-left:100%}}.grid__holder{box-sizing:border-box;height:100%}.grid__panel{padding:10px}.grid__breaker,.grid__panel{display:block;box-sizing:border-box}.grid__breaker{width:100%!important}.grid__breaker_xs{display:block}@media screen and (min-width:1px){.grid__breaker_xs{display:none}}.grid__breaker_s{display:block}@media screen and (min-width:480px){.grid__breaker_s{display:none}}.grid__breaker_m{display:block}@media screen and (min-width:768px){.grid__breaker_m{display:none}}.grid__breaker_l{display:block}@media screen and (min-width:1025px){.grid__breaker_l{display:none}}.grid__breaker_xl{display:block}@media screen and (min-width:1170px){.grid__breaker_xl{display:none}}.grid__breaker_xxl{display:block}@media screen and (min-width:1440px){.grid__breaker_xxl{display:none}}.grid__view-panel{box-sizing:border-box;padding:30px 0}.grid_name_type .grid__container_width_full,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_full{width:100%;max-width:100%}@media screen and (min-width:1px){.grid_name_type .grid__container_width_fixed,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_fixed{width:320px}}@media screen and (min-width:480px){.grid_name_type .grid__container_width_fixed,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_fixed{width:100%;max-width:380px}}@media screen and (min-width:768px){.grid_name_type .grid__container_width_fixed,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_fixed{width:100%;max-width:668px}}@media screen and (min-width:1025px){.grid_name_type .grid__container_width_fixed,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_fixed{width:100%;max-width:925px}}@media screen and (min-width:1170px){.grid_name_type .grid__container_width_fixed,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_fixed{width:100%;max-width:1070px}}@media screen and (min-width:1440px){.grid_name_type .grid__container_width_fixed,.grid_name_type .grid__container max-width gridFields.containerMaxWidth_fixed{width:100%;max-width:1340px}}.grid_name_type .grid__group>.grid__col{min-height:1px;padding:0 10px}.grid_name_type .grid__group>.grid__col_align-self_start{align-items:flex-start}.grid_name_type .grid__group>.grid__col_align-self_center{align-items:center}.grid_name_type .grid__group>.grid__col_align-self_end{align-items:flex-end}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_align-self_xs-start{align-items:flex-start}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_align-self_xs-center{align-items:center}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_align-self_xs-end{align-items:flex-end}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_align-self_s-start{align-items:flex-start}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_align-self_s-center{align-items:center}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_align-self_s-end{align-items:flex-end}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_align-self_m-start{align-items:flex-start}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_align-self_m-center{align-items:center}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_align-self_m-end{align-items:flex-end}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_align-self_l-start{align-items:flex-start}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_align-self_l-center{align-items:center}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_align-self_l-end{align-items:flex-end}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_align-self_xl-start{align-items:flex-start}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_align-self_xl-center{align-items:center}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_align-self_xl-end{align-items:flex-end}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_align-self_xxl-start{align-items:flex-start}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_align-self_xxl-center{align-items:center}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_align-self_xxl-end{align-items:flex-end}}.grid_name_type .grid__group>.grid__col_size_auto{flex-grow:1}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-auto{flex-grow:1}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-auto{flex-grow:1}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-auto{flex-grow:1}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-auto{flex-grow:1}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-auto{flex-grow:1}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-auto{flex-grow:1}}.grid_name_type .grid__group>.grid__col_size_1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}.grid_name_type .grid__group>.grid__col_size_2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}.grid_name_type .grid__group>.grid__col_size_3{flex:0 0 25%;max-width:25%}.grid_name_type .grid__group>.grid__col_size_4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}.grid_name_type .grid__group>.grid__col_size_5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}.grid_name_type .grid__group>.grid__col_size_6{flex:0 0 50%;max-width:50%}.grid_name_type .grid__group>.grid__col_size_7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}.grid_name_type .grid__group>.grid__col_size_8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}.grid_name_type .grid__group>.grid__col_size_9{flex:0 0 75%;max-width:75%}.grid_name_type .grid__group>.grid__col_size_10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}.grid_name_type .grid__group>.grid__col_size_11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}.grid_name_type .grid__group>.grid__col_size_12{flex:0 0 100%;max-width:100%}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_size_xs-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_size_s-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_size_m-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_size_l-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_size_xl-12{flex:0 0 100%;max-width:100%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-1{flex:0 0 8.333333333333334%;max-width:8.333333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-2{flex:0 0 16.666666666666668%;max-width:16.666666666666668%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-3{flex:0 0 25%;max-width:25%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-4{flex:0 0 33.333333333333336%;max-width:33.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-5{flex:0 0 41.66666666666667%;max-width:41.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-6{flex:0 0 50%;max-width:50%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-7{flex:0 0 58.333333333333336%;max-width:58.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-8{flex:0 0 66.66666666666667%;max-width:66.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-9{flex:0 0 75%;max-width:75%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-10{flex:0 0 83.33333333333334%;max-width:83.33333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-11{flex:0 0 91.66666666666667%;max-width:91.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_size_xxl-12{flex:0 0 100%;max-width:100%}}.grid_name_type .grid__group>.grid__col_order_1{order:1}.grid_name_type .grid__group>.grid__col_order_2{order:2}.grid_name_type .grid__group>.grid__col_order_3{order:3}.grid_name_type .grid__group>.grid__col_order_4{order:4}.grid_name_type .grid__group>.grid__col_order_5{order:5}.grid_name_type .grid__group>.grid__col_order_6{order:6}.grid_name_type .grid__group>.grid__col_order_7{order:7}.grid_name_type .grid__group>.grid__col_order_8{order:8}.grid_name_type .grid__group>.grid__col_order_9{order:9}.grid_name_type .grid__group>.grid__col_order_10{order:10}.grid_name_type .grid__group>.grid__col_order_11{order:11}.grid_name_type .grid__group>.grid__col_order_12{order:12}.grid_name_type .grid__group>.grid__col_order_first{order:-1}.grid_name_type .grid__group>.grid__col_order_last{order:13}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-1{order:1}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-2{order:2}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-3{order:3}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-4{order:4}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-5{order:5}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-6{order:6}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-7{order:7}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-8{order:8}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-9{order:9}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-10{order:10}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-11{order:11}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-12{order:12}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-first{order:-1}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_order_xs-last{order:13}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-1{order:1}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-2{order:2}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-3{order:3}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-4{order:4}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-5{order:5}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-6{order:6}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-7{order:7}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-8{order:8}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-9{order:9}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-10{order:10}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-11{order:11}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-12{order:12}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-first{order:-1}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_order_s-last{order:13}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-1{order:1}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-2{order:2}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-3{order:3}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-4{order:4}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-5{order:5}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-6{order:6}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-7{order:7}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-8{order:8}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-9{order:9}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-10{order:10}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-11{order:11}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-12{order:12}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-first{order:-1}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_order_m-last{order:13}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-1{order:1}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-2{order:2}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-3{order:3}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-4{order:4}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-5{order:5}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-6{order:6}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-7{order:7}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-8{order:8}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-9{order:9}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-10{order:10}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-11{order:11}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-12{order:12}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-first{order:-1}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_order_l-last{order:13}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-1{order:1}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-2{order:2}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-3{order:3}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-4{order:4}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-5{order:5}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-6{order:6}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-7{order:7}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-8{order:8}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-9{order:9}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-10{order:10}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-11{order:11}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-12{order:12}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-first{order:-1}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_order_xl-last{order:13}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-1{order:1}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-2{order:2}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-3{order:3}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-4{order:4}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-5{order:5}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-6{order:6}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-7{order:7}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-8{order:8}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-9{order:9}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-10{order:10}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-11{order:11}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-12{order:12}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-first{order:-1}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_order_xxl-last{order:13}}.grid_name_type .grid__group>.grid__col_push_1{position:relative;left:8.333333333333334%}.grid_name_type .grid__group>.grid__col_push_2{position:relative;left:16.666666666666668%}.grid_name_type .grid__group>.grid__col_push_3{position:relative;left:25%}.grid_name_type .grid__group>.grid__col_push_4{position:relative;left:33.333333333333336%}.grid_name_type .grid__group>.grid__col_push_5{position:relative;left:41.66666666666667%}.grid_name_type .grid__group>.grid__col_push_6{position:relative;left:50%}.grid_name_type .grid__group>.grid__col_push_7{position:relative;left:58.333333333333336%}.grid_name_type .grid__group>.grid__col_push_8{position:relative;left:66.66666666666667%}.grid_name_type .grid__group>.grid__col_push_9{position:relative;left:75%}.grid_name_type .grid__group>.grid__col_push_10{position:relative;left:83.33333333333334%}.grid_name_type .grid__group>.grid__col_push_11{position:relative;left:91.66666666666667%}.grid_name_type .grid__group>.grid__col_push_12{position:relative;left:100%}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-3{position:relative;left:25%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-6{position:relative;left:50%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-9{position:relative;left:75%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_push_xs-12{position:relative;left:100%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-3{position:relative;left:25%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-6{position:relative;left:50%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-9{position:relative;left:75%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_push_s-12{position:relative;left:100%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-3{position:relative;left:25%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-6{position:relative;left:50%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-9{position:relative;left:75%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_push_m-12{position:relative;left:100%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-3{position:relative;left:25%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-6{position:relative;left:50%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-9{position:relative;left:75%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_push_l-12{position:relative;left:100%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-3{position:relative;left:25%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-6{position:relative;left:50%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-9{position:relative;left:75%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_push_xl-12{position:relative;left:100%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-1{position:relative;left:8.333333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-2{position:relative;left:16.666666666666668%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-3{position:relative;left:25%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-4{position:relative;left:33.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-5{position:relative;left:41.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-6{position:relative;left:50%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-7{position:relative;left:58.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-8{position:relative;left:66.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-9{position:relative;left:75%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-10{position:relative;left:83.33333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-11{position:relative;left:91.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_push_xxl-12{position:relative;left:100%}}.grid_name_type .grid__group>.grid__col_pull_1{position:relative;right:8.333333333333334%}.grid_name_type .grid__group>.grid__col_pull_2{position:relative;right:16.666666666666668%}.grid_name_type .grid__group>.grid__col_pull_3{position:relative;right:25%}.grid_name_type .grid__group>.grid__col_pull_4{position:relative;right:33.333333333333336%}.grid_name_type .grid__group>.grid__col_pull_5{position:relative;right:41.66666666666667%}.grid_name_type .grid__group>.grid__col_pull_6{position:relative;right:50%}.grid_name_type .grid__group>.grid__col_pull_7{position:relative;right:58.333333333333336%}.grid_name_type .grid__group>.grid__col_pull_8{position:relative;right:66.66666666666667%}.grid_name_type .grid__group>.grid__col_pull_9{position:relative;right:75%}.grid_name_type .grid__group>.grid__col_pull_10{position:relative;right:83.33333333333334%}.grid_name_type .grid__group>.grid__col_pull_11{position:relative;right:91.66666666666667%}.grid_name_type .grid__group>.grid__col_pull_12{position:relative;right:100%}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-3{position:relative;right:25%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-6{position:relative;right:50%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-9{position:relative;right:75%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_pull_xs-12{position:relative;right:100%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-3{position:relative;right:25%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-6{position:relative;right:50%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-9{position:relative;right:75%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_pull_s-12{position:relative;right:100%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-3{position:relative;right:25%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-6{position:relative;right:50%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-9{position:relative;right:75%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_pull_m-12{position:relative;right:100%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-3{position:relative;right:25%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-6{position:relative;right:50%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-9{position:relative;right:75%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_pull_l-12{position:relative;right:100%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-3{position:relative;right:25%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-6{position:relative;right:50%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-9{position:relative;right:75%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_pull_xl-12{position:relative;right:100%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-1{position:relative;right:8.333333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-2{position:relative;right:16.666666666666668%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-3{position:relative;right:25%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-4{position:relative;right:33.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-5{position:relative;right:41.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-6{position:relative;right:50%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-7{position:relative;right:58.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-8{position:relative;right:66.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-9{position:relative;right:75%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-10{position:relative;right:83.33333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-11{position:relative;right:91.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_pull_xxl-12{position:relative;right:100%}}.grid_name_type .grid__group>.grid__col_offset_1{margin-left:8.333333333333334%}.grid_name_type .grid__group>.grid__col_offset_2{margin-left:16.666666666666668%}.grid_name_type .grid__group>.grid__col_offset_3{margin-left:25%}.grid_name_type .grid__group>.grid__col_offset_4{margin-left:33.333333333333336%}.grid_name_type .grid__group>.grid__col_offset_5{margin-left:41.66666666666667%}.grid_name_type .grid__group>.grid__col_offset_6{margin-left:50%}.grid_name_type .grid__group>.grid__col_offset_7{margin-left:58.333333333333336%}.grid_name_type .grid__group>.grid__col_offset_8{margin-left:66.66666666666667%}.grid_name_type .grid__group>.grid__col_offset_9{margin-left:75%}.grid_name_type .grid__group>.grid__col_offset_10{margin-left:83.33333333333334%}.grid_name_type .grid__group>.grid__col_offset_11{margin-left:91.66666666666667%}.grid_name_type .grid__group>.grid__col_offset_12{margin-left:100%}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-1{margin-left:8.333333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-2{margin-left:16.666666666666668%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-3{margin-left:25%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-4{margin-left:33.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-5{margin-left:41.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-6{margin-left:50%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-7{margin-left:58.333333333333336%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-8{margin-left:66.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-9{margin-left:75%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-10{margin-left:83.33333333333334%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-11{margin-left:91.66666666666667%}}@media screen and (min-width:1px){.grid_name_type .grid__group>.grid__col_offset_xs-12{margin-left:100%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-1{margin-left:8.333333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-2{margin-left:16.666666666666668%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-3{margin-left:25%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-4{margin-left:33.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-5{margin-left:41.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-6{margin-left:50%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-7{margin-left:58.333333333333336%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-8{margin-left:66.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-9{margin-left:75%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-10{margin-left:83.33333333333334%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-11{margin-left:91.66666666666667%}}@media screen and (min-width:480px){.grid_name_type .grid__group>.grid__col_offset_s-12{margin-left:100%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-1{margin-left:8.333333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-2{margin-left:16.666666666666668%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-3{margin-left:25%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-4{margin-left:33.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-5{margin-left:41.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-6{margin-left:50%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-7{margin-left:58.333333333333336%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-8{margin-left:66.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-9{margin-left:75%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-10{margin-left:83.33333333333334%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-11{margin-left:91.66666666666667%}}@media screen and (min-width:768px){.grid_name_type .grid__group>.grid__col_offset_m-12{margin-left:100%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-1{margin-left:8.333333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-2{margin-left:16.666666666666668%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-3{margin-left:25%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-4{margin-left:33.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-5{margin-left:41.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-6{margin-left:50%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-7{margin-left:58.333333333333336%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-8{margin-left:66.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-9{margin-left:75%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-10{margin-left:83.33333333333334%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-11{margin-left:91.66666666666667%}}@media screen and (min-width:1025px){.grid_name_type .grid__group>.grid__col_offset_l-12{margin-left:100%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-1{margin-left:8.333333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-2{margin-left:16.666666666666668%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-3{margin-left:25%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-4{margin-left:33.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-5{margin-left:41.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-6{margin-left:50%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-7{margin-left:58.333333333333336%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-8{margin-left:66.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-9{margin-left:75%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-10{margin-left:83.33333333333334%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-11{margin-left:91.66666666666667%}}@media screen and (min-width:1170px){.grid_name_type .grid__group>.grid__col_offset_xl-12{margin-left:100%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-1{margin-left:8.333333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-2{margin-left:16.666666666666668%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-3{margin-left:25%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-4{margin-left:33.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-5{margin-left:41.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-6{margin-left:50%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-7{margin-left:58.333333333333336%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-8{margin-left:66.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-9{margin-left:75%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-10{margin-left:83.33333333333334%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-11{margin-left:91.66666666666667%}}@media screen and (min-width:1440px){.grid_name_type .grid__group>.grid__col_offset_xxl-12{margin-left:100%}}.grid_name_type .grid__group_no_gutters .grid__col{padding:0}.grid_style_debug .grid__col{outline:1px solid red}.grid_style_debug .grid__panel{background:#f4f4f4}.grid_style_debug .grid__holder{outline:1px solid green}.grid_style_demo .grid__col{padding-top:5px;padding-bottom:5px}.grid_style_demo .grid__panel{color:#7d7d7d;font-size:14px;line-height:1.2;background:#f4f4f4;border:1px solid #c7c7c7}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("0af5d4d6", content, true)

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*,:after,:before{box-sizing:border-box;margin:0}#__layout,#__nuxt{height:100%}.link_no_styles{color:inherit;text-decoration:none}ul{margin:0;padding:0;list-style:none}.icon{max-width:100%;max-height:100%}.page{overflow:hidden;height:100%;min-height:100%}.page__wrapper{display:flex;flex-direction:column;height:100%}.page__body{height:100%;min-height:100%;color:var(--primary-text);font-family:Open Sans,sans-serif;font-size:14px;background:var(--primary-background)}.page__body,.page__body_overflow_hidden{overflow:hidden}.page__header{z-index:99;width:100%}.page__main{display:flex;overflow:hidden;flex-grow:1}.page__chat{display:flex;width:100%;height:100%}.page__footer{background:transparent}.page__aside{position:relative}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("1182f508", content, true)

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page{--gray_20:#fafafa;--gray_40:#f4f6f5;--gray_50:#ebf0ed;--gray_100:#e1e5e3;--gray_200:#c3cbc7;--gray_300:#a9b2ad;--gray_400:#909894;--gray_500:#757a78;--gray_600:#5c605e;--gray_700:#434645;--gray_800:#2d2f2e;--gray_900:#191a1a;--gray_950:#0a0a0a;--green_100:#00e673;--green_200:#0c6;--green_300:#00b359;--green_400:#00994d;--green_500:#007a3d;--green_600:#006130}.page_theme_light{--primary:var(--green_300);--primary-dark:var(--green_500);--primary-text:var(--gray_800);--secondary-text:var(--gray_700);--accent-text:var(--green_300);--contrast-text:var(--gray_100);--primary-background:var(--gray_20);--secondary-background:var(--gray_100);--accent-background:var(--green_600);--contrast-background:var(--gray_950);--shadow:rgba(0,0,0,0.14)}.page_theme_dark{--primary:var(--green_200);--primary-dark:var(--green_400);--primary-text:var(--gray_100);--secondary-text:var(--gray_300);--accent-text:var(--green_200);--contrast-text:var(--gray_950);--primary-background:var(--gray_900);--secondary-background:var(--gray_800);--accent-background:var(--green_400);--contrast-background:var(--gray_100);--shadow:rgba(0,0,0,0.14)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_emoji_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_emoji_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_emoji_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_emoji_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_emoji_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_emoji_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".emoji-panel{display:block;background:var(--secondary-background);border-radius:5px}.emoji-panel__group{display:flex;flex-wrap:wrap;padding:12px;box-shadow:0 0 6px rgba(0,0,0,.4)}.emoji-panel__item{width:40px;height:40px;padding:4px;border-radius:5px}.emoji-panel__item:hover{background:var(--gray_700)}.emoji-panel__icon{width:32px;height:32px;cursor:pointer;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:0 0;background-size:352px 160px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_attach_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_attach_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_attach_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_attach_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_attach_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_attach_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".attach-panel{display:flex;flex-direction:column;padding:12px;background:var(--secondary-background);border-radius:5px;box-shadow:0 0 6px rgba(0,0,0,.4)}.attach-panel__item{display:flex;align-items:center;height:40px;padding:4px 8px 4px 4px;cursor:pointer;border-radius:5px}.attach-panel__item:hover{background:var(--gray_700)}.attach-panel__item:hover .attach-panel__icon{fill:var(--accent-text)}.attach-panel__icon{width:32px;height:32px;fill:var(--primary-text)}.attach-panel__text{margin-left:12px;color:var(--primary-text);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_footer_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_footer_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_footer_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_footer_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_footer_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_footer_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(31);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".footer{position:relative;display:flex;padding:14px 12px;box-shadow:0 -3px 6px rgba(0,0,0,.16)}.footer__emoji-panel{max-width:376px;height:250px;max-height:250px}.footer__attach-panel,.footer__emoji-panel{position:absolute;left:0;bottom:100%;padding:12px 12px 0}.footer__input-field{overflow:hidden;width:100%;height:40px;margin-right:12px;padding:0 16px;background-color:var(--secondary-background);border-radius:5px;box-shadow:0 0 6px rgba(0,0,0,.16)}.footer__actions-left,.footer__input-field{position:relative;display:flex;align-items:center}.footer__actions-left{flex-shrink:0;margin-right:16px}.footer__actions-button{display:block;width:28px;height:28px;fill:var(--primary-text);cursor:pointer}.footer__actions-button:hover{fill:var(--accent-text)}.footer__actions-button:not(:last-child){margin-right:12px}.footer__emoji-button{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:0 0;background-size:308px 140px;-webkit-filter:grayscale(1);filter:grayscale(1)}.footer__emoji-button.footer__actions-button_type_active,.footer__emoji-button:hover{-webkit-filter:grayscale(0);filter:grayscale(0)}.footer__attach-button{transform:rotate(225deg)}.footer__attach-button.footer__actions-button_type_active,.footer__attach-button:hover{fill:var(--accent-text)}.footer__input{display:block;flex-grow:1;flex-basis:100%;width:100%;height:100%;margin-right:8px;color:var(--primary-text);background:transparent;border:none;outline:none}.footer__actions-right{display:flex;align-items:center;flex-shrink:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_users_list_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_users_list_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_users_list_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_users_list_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_users_list_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_users_list_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".users-list{display:block;list-style:none}.users-list__item{display:flex;align-items:center;height:46px;margin-bottom:2px;padding:5px 10px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:5px;transition:all .3s ease}.users-list__item:hover{background-color:var(--gray_700)}.users-list__item:active{background-color:var(--gray_600)}.users-list__item:last-child{margin-bottom:0}.users-list__info{overflow:hidden}.users-list__avatar{flex-shrink:0;width:34px;height:34px;margin-right:10px;border-radius:50%;-o-object-fit:cover;object-fit:cover}.users-list__username{font-size:14px;font-weight:400;line-height:20px}.users-list__status,.users-list__username{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.users-list__status{color:var(--secondary-text);font-size:12px;line-height:16px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_aside_panel_styl_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".aside-panel{position:absolute;left:-30px;z-index:2;visibility:visible;width:300px;height:100%;background-color:var(--secondary-background);opacity:1;box-shadow:-3px 0 6px rgba(0,0,0,.16);transition:all .3s ease}@media screen and (min-width:768px){.aside-panel{position:relative;left:0}}.aside-panel_type_open{left:-300px}@media screen and (min-width:768px){.aside-panel_type_open{left:0}}.aside-panel__section{padding:0 17px 30px 40px}@media screen and (min-width:768px){.aside-panel__section{padding:0 17px 30px 10px}}.aside-panel__section-title{margin-bottom:10px;padding:0 5px;color:var(--secondary-text);font-size:14px;font-weight:600;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.aside-panel__section:first-child{padding-top:30px}.aside-panel__open-button{position:absolute;z-index:3;display:flex;justify-content:center;align-items:center;width:30px;height:100%;fill:currentColor;cursor:pointer;background-color:var(--gray_700)}@media screen and (min-width:768px){.aside-panel__open-button{display:none}}.aside-panel__open-icon{width:20px;height:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);

const state = () => ({
  logged: false,
  myId: 0,
  now: 0,
  emojisPanelActive: false,
  attachPanelActive: false
});
const getters = {};
const mutations = {
  login: state => state.logged = true,
  logout: state => state.logged = false,
  setMyId: (state, myId) => state.myId = myId,
  setNow: (state, now) => state.now = now,
  setEmojisPanelActive: (state, status) => state.emojisPanelActive = status,
  toggleEmojisPanel: state => state.emojisPanelActive = !state.emojisPanelActive,
  setAttachPanelActive: (state, status) => state.attachPanelActive = status,
  toggleAttachPanel: state => state.attachPanelActive = !state.attachPanelActive
};
const actions = {
  nuxtServerInit({
    commit
  }, context) {
    const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0___default.a(context.req.headers.cookie);
    const id = cookies.get('id');
    const token = cookies.get('apollo-token');
    if (id) commit('setMyId', parseInt(id, 10));
    if (token) commit('login');
  },

  nuxtClientInit({
    dispatch
  }) {
    dispatch('setNow');
  },

  setNow({
    commit
  }) {
    commit('setNow', Date.now());
    setInterval(() => {
      commit('setNow', Date.now());
    }, 100);
  }

};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("is-https");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLanguageAsync", function() { return loadLanguageAsync; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Asynchronously load messages from translation files
 * @param  {Context}  context  Nuxt context
 * @param  {String}   locale  Language code to load
 */

async function loadLanguageAsync(context, locale) {
  const {
    app
  } = context;

  if (!app.i18n.loadedLanguages) {
    app.i18n.loadedLanguages = [];
  }

  if (!app.i18n.loadedLanguages.includes(locale)) {
    const langOptions = app.i18n.locales.find(l => l[_options__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE_CODE_KEY */ "b"]] === locale);

    if (langOptions) {
      const file = langOptions[_options__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE_FILE_KEY */ "d"]];

      if (file) {
        // Hiding template directives from eslint so that parsing doesn't break.

        /*  */
        try {
          const module = await __webpack_require__(76)("./" + file);
          const messages = module.default ? module.default : module;
          const result = typeof messages === 'function' ? await Promise.resolve(messages(context, locale)) : messages;
          app.i18n.setLocaleMessage(locale, result);
          app.i18n.loadedLanguages.push(locale);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
        /*  */

      } else {
        // eslint-disable-next-line no-console
        console.warn(`[${_options__WEBPACK_IMPORTED_MODULE_0__[/* MODULE_NAME */ "f"]}] Could not find lang file for locale ${locale}`);
      }
    }
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en-US": [
		36,
		0
	],
	"./en-US.js": [
		36,
		0
	],
	"./ru-RU": [
		37,
		1
	],
	"./ru-RU.js": [
		37,
		1
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 76;
module.exports = webpackAsyncContext;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("cross-fetch/polyfill");

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApolloClient = createApolloClient;
exports.restartWebsockets = restartWebsockets;

var _apolloClient = __webpack_require__(79);

var _apolloLink = __webpack_require__(80);

var _apolloUploadClient = __webpack_require__(81);

var _apolloCacheInmemory = __webpack_require__(21);

var _subscriptionsTransportWs = __webpack_require__(82);

var _messageTypes = _interopRequireDefault(__webpack_require__(83));

var _apolloLinkWs = __webpack_require__(84);

var _apolloUtilities = __webpack_require__(85);

var _apolloLinkPersistedQueries = __webpack_require__(86);

var _apolloLinkContext = __webpack_require__(87);

var _apolloLinkState = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createApolloClient(_ref) {
  var _ref$clientId = _ref.clientId,
      clientId = _ref$clientId === void 0 ? 'defaultClient' : _ref$clientId,
      httpEndpoint = _ref.httpEndpoint,
      _ref$wsEndpoint = _ref.wsEndpoint,
      wsEndpoint = _ref$wsEndpoint === void 0 ? null : _ref$wsEndpoint,
      _ref$tokenName = _ref.tokenName,
      tokenName = _ref$tokenName === void 0 ? 'apollo-token' : _ref$tokenName,
      _ref$persisting = _ref.persisting,
      persisting = _ref$persisting === void 0 ? false : _ref$persisting,
      _ref$ssr = _ref.ssr,
      ssr = _ref$ssr === void 0 ? false : _ref$ssr,
      _ref$websocketsOnly = _ref.websocketsOnly,
      websocketsOnly = _ref$websocketsOnly === void 0 ? false : _ref$websocketsOnly,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? null : _ref$link,
      _ref$defaultHttpLink = _ref.defaultHttpLink,
      defaultHttpLink = _ref$defaultHttpLink === void 0 ? true : _ref$defaultHttpLink,
      _ref$httpLinkOptions = _ref.httpLinkOptions,
      httpLinkOptions = _ref$httpLinkOptions === void 0 ? {} : _ref$httpLinkOptions,
      _ref$cache = _ref.cache,
      cache = _ref$cache === void 0 ? null : _ref$cache,
      _ref$inMemoryCacheOpt = _ref.inMemoryCacheOptions,
      inMemoryCacheOptions = _ref$inMemoryCacheOpt === void 0 ? {} : _ref$inMemoryCacheOpt,
      _ref$apollo = _ref.apollo,
      apollo = _ref$apollo === void 0 ? {} : _ref$apollo,
      _ref$clientState = _ref.clientState,
      clientState = _ref$clientState === void 0 ? null : _ref$clientState,
      _ref$getAuth = _ref.getAuth,
      getAuth = _ref$getAuth === void 0 ? defaultGetAuth : _ref$getAuth,
      _ref$typeDefs = _ref.typeDefs,
      typeDefs = _ref$typeDefs === void 0 ? undefined : _ref$typeDefs,
      _ref$resolvers = _ref.resolvers,
      resolvers = _ref$resolvers === void 0 ? undefined : _ref$resolvers,
      _ref$onCacheInit = _ref.onCacheInit,
      onCacheInit = _ref$onCacheInit === void 0 ? undefined : _ref$onCacheInit;
  var wsClient, authLink, stateLink;
  var disableHttp = websocketsOnly && !ssr && wsEndpoint; // Apollo cache

  if (!cache) {
    cache = new _apolloCacheInmemory.InMemoryCache(inMemoryCacheOptions);
  }

  if (!disableHttp) {
    var httpLink = (0, _apolloUploadClient.createUploadLink)(_objectSpread({
      uri: httpEndpoint
    }, httpLinkOptions));

    if (!link) {
      link = httpLink;
    } else if (defaultHttpLink) {
      link = (0, _apolloLink.from)([link, httpLink]);
    } // HTTP Auth header injection


    authLink = (0, _apolloLinkContext.setContext)(function (_, _ref2) {
      var headers = _ref2.headers;
      var authorization = getAuth(tokenName);
      var authorizationHeader = authorization ? {
        authorization: authorization
      } : {};
      return {
        headers: _objectSpread({}, headers, {}, authorizationHeader)
      };
    }); // Concat all the http link parts

    link = authLink.concat(link);
  } // On the server, we don't want WebSockets and Upload links


  if (!ssr) {
    // If on the client, recover the injected state
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-underscore-dangle
      var state = window.__APOLLO_STATE__;

      if (state && state[clientId]) {
        // Restore state
        cache.restore(state[clientId]);
      }
    }

    if (!disableHttp) {
      var persistingOpts = {};

      if (_typeof(persisting) === 'object' && persisting != null) {
        persistingOpts = persisting;
        persisting = true;
      }

      if (persisting === true) {
        link = (0, _apolloLinkPersistedQueries.createPersistedQueryLink)(persistingOpts).concat(link);
      }
    } // Web socket


    if (wsEndpoint) {
      wsClient = new _subscriptionsTransportWs.SubscriptionClient(wsEndpoint, {
        reconnect: true,
        connectionParams: function connectionParams() {
          var authorization = getAuth(tokenName);
          return authorization ? {
            authorization: authorization,
            headers: {
              authorization: authorization
            }
          } : {};
        }
      }); // Create the subscription websocket link

      var wsLink = new _apolloLinkWs.WebSocketLink(wsClient);

      if (disableHttp) {
        link = wsLink;
      } else {
        link = (0, _apolloLink.split)( // split based on operation type
        function (_ref3) {
          var query = _ref3.query;

          var _getMainDefinition = (0, _apolloUtilities.getMainDefinition)(query),
              kind = _getMainDefinition.kind,
              operation = _getMainDefinition.operation;

          return kind === 'OperationDefinition' && operation === 'subscription';
        }, wsLink, link);
      }
    }
  }

  if (clientState) {
    console.warn("clientState is deprecated, see https://vue-cli-plugin-apollo.netlify.com/guide/client-state.html");
    stateLink = (0, _apolloLinkState.withClientState)(_objectSpread({
      cache: cache
    }, clientState));
    link = (0, _apolloLink.from)([stateLink, link]);
  }

  var apolloClient = new _apolloClient.ApolloClient(_objectSpread({
    link: link,
    cache: cache
  }, ssr ? {
    // Set this on the server to optimize queries when SSR
    ssrMode: true
  } : {
    // This will temporary disable query force-fetching
    ssrForceFetchDelay: 100,
    // Apollo devtools
    connectToDevTools: "production" !== 'production'
  }, {
    typeDefs: typeDefs,
    resolvers: resolvers
  }, apollo)); // Re-write the client state defaults on cache reset

  if (stateLink) {
    apolloClient.onResetStore(stateLink.writeDefaults);
  }

  if (onCacheInit) {
    onCacheInit(cache);
    apolloClient.onResetStore(function () {
      return onCacheInit(cache);
    });
  }

  return {
    apolloClient: apolloClient,
    wsClient: wsClient,
    stateLink: stateLink
  };
}

function restartWebsockets(wsClient) {
  // Copy current operations
  var operations = Object.assign({}, wsClient.operations); // Close connection

  wsClient.close(true); // Open a new one

  wsClient.connect(); // Push all current operations to the new connection

  Object.keys(operations).forEach(function (id) {
    wsClient.sendMessage(id, _messageTypes["default"].GQL_START, operations[id].options);
  });
}

function defaultGetAuth(tokenName) {
  if (typeof window !== 'undefined') {
    // get the authentication token from local storage if it exists
    var token = window.localStorage.getItem(tokenName); // return the headers to the context so httpLink can read them

    return token ? "Bearer ".concat(token) : '';
  }
}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("subscriptions-transport-ws");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("subscriptions-transport-ws/dist/message-types");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-persisted-queries");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-state");

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_link_error__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
  const errorLink = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_0__["onError"])(({
    response,
    graphQLErrors
  }) => {
    var _a;

    if (response) {
      response.errors = graphQLErrors && graphQLErrors[0] && ((_a = graphQLErrors[0].extensions) === null || _a === void 0 ? void 0 : _a.exception.response) || {
        message: 'Неизвестная ошибка',
        error: 'UNKNOWN'
      };
    }

    if (graphQLErrors) {
      graphQLErrors.forEach(error => {
        var _a;

        const statusCode = (_a = error.message) === null || _a === void 0 ? void 0 : _a.statusCode;
        if (!statusCode || statusCode !== 401) return;
        const isLoginPath = Array.isArray(error.path) && error.path.find(p => p === 'login');
        if (isLoginPath) return;
        ctx.redirect('/logout');
      });
    }
  });
  return {
    link: errorLink,
    httpEndpoint: process.env.GRAPHQL || 'http://localhost:4000/graphql',
    httpLinkOptions: {
      fetch: (uri, options) => {
        // const lang: string = new Cookies().get('i18n_redirected');
        const uriWithLang = `${uri}?lang=ru`;
        return fetch(uriWithLang, options);
      }
    },
    tokenName: 'apollo-token',
    inMemoryCacheOptions: {
      addTypename: false
    },
    apollo: {
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all'
        },
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all'
        },
        mutate: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all'
        }
      }
    }
  };
});

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("vue-apollo/ssr");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icons.svg": 92
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 91;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9b7d4de9be37c8708b4e5885c7aa3093.svg";

/***/ }),
/* 93 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(32);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(33);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['authenticated'] = __webpack_require__(39);
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
};
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(6);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(22);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(19);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(23);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/main/main.vue?vue&type=template&id=3482ca78&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page__chat"},[_c('el-chat')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/main/main.vue?vue&type=template&id=3482ca78&

// EXTERNAL MODULE: external "nuxt-property-decorator"
var external_nuxt_property_decorator_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/chat.vue?vue&type=template&id=c0dd2276&
var chatvue_type_template_id_c0dd2276_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chat"},[_c('el-upload-file'),_vm._ssrNode(" "),_c('vuescroll',[_c('div',{staticClass:"chat__messages"},[_c('el-message',{attrs:{"message":"Hello, world!","timestamp":"Сегодня, в 19:30","username":"Username"}}),_vm._v(" "),_c('el-message',{attrs:{"message":"\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n      aliquip ex ea commodo consequat.","timestamp":"Сегодня, в 19:30","username":"Username"}}),_vm._v(" "),_c('div',{staticClass:"message"},[_c('img',{staticClass:"message__avatar",attrs:{"src":__webpack_require__(28),"alt":"User Avatar"}}),_vm._v(" "),_c('div',{staticClass:"message__content"},[_c('div',{staticClass:"message__header"},[_c('router-link',{staticClass:"message__author-name link_no_styles",attrs:{"to":"/"}},[_vm._v("Username")]),_vm._v(" "),_c('time',{staticClass:"message__timestamp"},[_vm._v("Сегодня, в 19:30")])],1),_vm._v(" "),_c('div',{staticClass:"message__body"},[_c('span',{staticClass:"message__text"},[_vm._v("\n              Lorem ipsum dolor sit amet\n              "),_c('img',{staticClass:"message__emoji",attrs:{"src":__webpack_require__(40),"alt":"emoji"}}),_vm._v(" "),_c('img',{staticClass:"message__emoji",attrs:{"src":__webpack_require__(41),"alt":"emoji"}}),_vm._v("\n              consectetur adipiscing elit\n              "),_c('img',{staticClass:"message__emoji",attrs:{"src":__webpack_require__(29),"alt":"emoji"}}),_vm._v("\n              sed do eiusmod tempor incididunt ut labore\n              "),_c('img',{staticClass:"message__emoji",attrs:{"src":__webpack_require__(29),"alt":"emoji"}}),_vm._v("\n              asfsf\n            ")])])])]),_vm._v(" "),_c('el-message',{attrs:{"image":"https://via.placeholder.com/300","timestamp":"Сегодня, в 19:30","username":"Username"}}),_vm._v(" "),_c('el-message',{attrs:{"image":"https://via.placeholder.com/800","timestamp":"Сегодня, в 19:30","username":"Username"}})],1)])],2)}
var chatvue_type_template_id_c0dd2276_staticRenderFns = []


// CONCATENATED MODULE: ./components/chat/chat.vue?vue&type=template&id=c0dd2276&

// EXTERNAL MODULE: external "vuescroll"
var external_vuescroll_ = __webpack_require__(5);
var external_vuescroll_default = /*#__PURE__*/__webpack_require__.n(external_vuescroll_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/upload-file/upload-file.vue?vue&type=template&id=3cfc81f7&
var upload_filevue_type_template_id_3cfc81f7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload-file"},[_vm._ssrNode("<div class=\"upload-file__wrapper\">","</div>",[_vm._ssrNode("<div class=\"upload-file__section\">","</div>",[_c('svg-icon',{staticClass:"upload-file__icon",attrs:{"name":"description"}}),_vm._ssrNode("\n      Upload as document\n    ")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"upload-file__section\">","</div>",[_c('svg-icon',{staticClass:"upload-file__icon",attrs:{"name":"image"}}),_vm._ssrNode("\n      Upload as image\n    ")],2)],2)])}
var upload_filevue_type_template_id_3cfc81f7_staticRenderFns = []


// CONCATENATED MODULE: ./components/upload-file/upload-file.vue?vue&type=template&id=3cfc81f7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/upload-file/upload-file.vue?vue&type=script&lang=ts&
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let upload_filevue_type_script_lang_ts_UploadFile = class UploadFile extends external_nuxt_property_decorator_["Vue"] {};
upload_filevue_type_script_lang_ts_UploadFile = __decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'el-upload-file'
})], upload_filevue_type_script_lang_ts_UploadFile);
/* harmony default export */ var upload_filevue_type_script_lang_ts_ = (upload_filevue_type_script_lang_ts_UploadFile);
// CONCATENATED MODULE: ./components/upload-file/upload-file.vue?vue&type=script&lang=ts&
 /* harmony default export */ var upload_file_upload_filevue_type_script_lang_ts_ = (upload_filevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./components/upload-file/upload-file.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var upload_file_component = normalizeComponent(
  upload_file_upload_filevue_type_script_lang_ts_,
  upload_filevue_type_template_id_3cfc81f7_render,
  upload_filevue_type_template_id_3cfc81f7_staticRenderFns,
  false,
  injectStyles,
  null,
  "31365f82"
  
)

/* harmony default export */ var upload_file = (upload_file_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/message/message.vue?vue&type=template&id=fd9e29a8&
var messagevue_type_template_id_fd9e29a8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"message"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt=\"User Avatar\" class=\"message__avatar\"> "),_vm._ssrNode("<div class=\"message__content\">","</div>",[_vm._ssrNode("<div class=\"message__header\">","</div>",[_c('router-link',{staticClass:"message__author-name link_no_styles",attrs:{"to":"/"}},[_vm._v(_vm._s(_vm.username))]),_vm._ssrNode(" <time class=\"message__timestamp\">"+_vm._ssrEscape(_vm._s(_vm.timestamp))+"</time>")],2),_vm._ssrNode(" <div class=\"message__body\">"+((_vm.image)?("<img"+(_vm._ssrAttr("src",_vm.image))+" alt=\"Image\" class=\"message__image\">"):"<!---->")+" <span class=\"message__text\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</span></div>")],2)],2)}
var messagevue_type_template_id_fd9e29a8_staticRenderFns = []


// CONCATENATED MODULE: ./components/message/message.vue?vue&type=template&id=fd9e29a8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/message/message.vue?vue&type=script&lang=ts&
var messagevue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let messagevue_type_script_lang_ts_Message = class Message extends external_nuxt_property_decorator_["Vue"] {};

messagevue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String
})], messagevue_type_script_lang_ts_Message.prototype, "message", void 0);

messagevue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String
})], messagevue_type_script_lang_ts_Message.prototype, "image", void 0);

messagevue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String
})], messagevue_type_script_lang_ts_Message.prototype, "username", void 0);

messagevue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Prop"])({
  type: String
})], messagevue_type_script_lang_ts_Message.prototype, "timestamp", void 0);

messagevue_type_script_lang_ts_Message = messagevue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'el-message'
})], messagevue_type_script_lang_ts_Message);
/* harmony default export */ var messagevue_type_script_lang_ts_ = (messagevue_type_script_lang_ts_Message);
// CONCATENATED MODULE: ./components/message/message.vue?vue&type=script&lang=ts&
 /* harmony default export */ var message_messagevue_type_script_lang_ts_ = (messagevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/message/message.vue



function message_injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var message_component = normalizeComponent(
  message_messagevue_type_script_lang_ts_,
  messagevue_type_template_id_fd9e29a8_render,
  messagevue_type_template_id_fd9e29a8_staticRenderFns,
  false,
  message_injectStyles,
  null,
  "883a2c00"
  
)

/* harmony default export */ var message = (message_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/chat/chat.vue?vue&type=script&lang=ts&
var chatvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let chatvue_type_script_lang_ts_Chat = class Chat extends external_nuxt_property_decorator_["Vue"] {};
chatvue_type_script_lang_ts_Chat = chatvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'el-chat',
  components: {
    ElMessage: message,
    ElUploadFile: upload_file,
    vuescroll: external_vuescroll_default.a
  }
})], chatvue_type_script_lang_ts_Chat);
/* harmony default export */ var chatvue_type_script_lang_ts_ = (chatvue_type_script_lang_ts_Chat);
// CONCATENATED MODULE: ./components/chat/chat.vue?vue&type=script&lang=ts&
 /* harmony default export */ var chat_chatvue_type_script_lang_ts_ = (chatvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/chat/chat.vue



function chat_injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var chat_component = normalizeComponent(
  chat_chatvue_type_script_lang_ts_,
  chatvue_type_template_id_c0dd2276_render,
  chatvue_type_template_id_c0dd2276_staticRenderFns,
  false,
  chat_injectStyles,
  null,
  "169f85aa"
  
)

/* harmony default export */ var chat = (chat_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/main/main.vue?vue&type=script&lang=ts&
var mainvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let mainvue_type_script_lang_ts_MainPage = class MainPage extends external_nuxt_property_decorator_["Vue"] {};
mainvue_type_script_lang_ts_MainPage = mainvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  components: {
    ElChat: chat
  }
})], mainvue_type_script_lang_ts_MainPage);
/* harmony default export */ var mainvue_type_script_lang_ts_ = (mainvue_type_script_lang_ts_MainPage);
// CONCATENATED MODULE: ./pages/main/main.vue?vue&type=script&lang=ts&
 /* harmony default export */ var main_mainvue_type_script_lang_ts_ = (mainvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./pages/main/main.vue



function main_injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var main_component = normalizeComponent(
  main_mainvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  main_injectStyles,
  null,
  "4e4be500"
  
)

/* harmony default export */ var main = (main_component.exports);
// CONCATENATED MODULE: ./router.js



external_vue_default.a.use(external_vue_router_default.a);
function createRouter() {
  return new external_vue_router_default.a({
    mode: 'history',
    routes: [{
      path: '/',
      name: 'main',
      component: main
    }, {
      path: '*',
      redirect: '/'
    }]
  });
}
// CONCATENATED MODULE: ./.nuxt/router.js

const createDefaultRouter = null;
const routerOptions = null;
function router_createRouter(ssrContext) {
  return createRouter(ssrContext, createDefaultRouter, routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=39174add&
var nuxt_errorvue_type_template_id_39174add_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var nuxt_errorvue_type_template_id_39174add_staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=39174add&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function nuxt_error_injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = normalizeComponent(
  components_nuxt_errorvue_type_script_lang_js_,
  nuxt_errorvue_type_template_id_39174add_render,
  nuxt_errorvue_type_template_id_39174add_staticRenderFns,
  false,
  nuxt_error_injectStyles,
  null,
  "f4cbfb16"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = normalizeComponent(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "050b932e"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=3c1a39fc&
var defaultvue_type_template_id_3c1a39fc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page__wrapper"},[_vm._ssrNode("<div class=\"page__header\"></div> "),_vm._ssrNode("<div class=\"page__main\">","</div>",[_c('nuxt'),_vm._ssrNode(" "),_vm._ssrNode("<aside class=\"page__aside\">","</aside>",[_c('el-aside-panel')],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"page__footer\">","</div>",[_c('el-footer')],1)],2)}
var defaultvue_type_template_id_3c1a39fc_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=3c1a39fc&

// EXTERNAL MODULE: ./assets/stylus/normalize.styl
var normalize = __webpack_require__(54);

// EXTERNAL MODULE: ./assets/stylus/grid.styl
var grid = __webpack_require__(56);

// EXTERNAL MODULE: ./assets/stylus/global.styl
var stylus_global = __webpack_require__(58);

// EXTERNAL MODULE: ./assets/stylus/colors.styl
var colors = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/footer.vue?vue&type=template&id=f2892e66&
var footervue_type_template_id_f2892e66_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_vm._ssrNode("<div class=\"footer__emoji-panel\""+(_vm._ssrStyle(null,null, { display: (_vm.emojisPanelActive) ? '' : 'none' }))+">","</div>",[_c('el-emoji-panel')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"footer__attach-panel\""+(_vm._ssrStyle(null,null, { display: (_vm.attachPanelActive) ? '' : 'none' }))+">","</div>",[_c('el-attach-panel')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"footer__input-field\">","</div>",[_vm._ssrNode("<div class=\"footer__actions-left\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("footer__actions-button footer__emoji-button",{ 'footer__actions-button_type_active': _vm.emojisPanelActive }))+"></div> "),_c('svg-icon',{ref:"attach",staticClass:"footer__actions-button footer__attach-button",class:{ 'footer__actions-button_type_active': _vm.attachPanelActive },attrs:{"name":"attach_file"},on:{"click":function($event){return _vm.toggleAttachPanel()}}})],2),_vm._ssrNode(" <input type=\"text\" placeholder=\"Введите сообщение\" class=\"footer__input\">")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"footer__actions-right\">","</div>",[_c('svg-icon',{staticClass:"footer__actions-button footer__send-button",attrs:{"name":"paper_plane"}})],1)],2)}
var footervue_type_template_id_f2892e66_staticRenderFns = []


// CONCATENATED MODULE: ./components/footer/footer.vue?vue&type=template&id=f2892e66&

// CONCATENATED MODULE: ./tools/util.ts
// [0, 1)
function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/emoji-panel/emoji-panel.vue?vue&type=template&id=1a2bcc9a&
var emoji_panelvue_type_template_id_1a2bcc9a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('vuescroll',{staticClass:"emoji-panel"},[_c('div',{staticClass:"emoji-panel__group"},_vm._l((50),function(i){return _c('div',{key:i,staticClass:"emoji-panel__item"},[_c('div',{staticClass:"emoji-panel__icon",style:({
          backgroundPosition: ("-" + ((i - 1) * 32) + "px -" + (Math.floor((i - 1) / 11) * 32) + "px"),
        })})])}),0)])}
var emoji_panelvue_type_template_id_1a2bcc9a_staticRenderFns = []


// CONCATENATED MODULE: ./components/emoji-panel/emoji-panel.vue?vue&type=template&id=1a2bcc9a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/emoji-panel/emoji-panel.vue?vue&type=script&lang=ts&
var emoji_panelvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let emoji_panelvue_type_script_lang_ts_EmojiPanel = class EmojiPanel extends external_nuxt_property_decorator_["Vue"] {};
emoji_panelvue_type_script_lang_ts_EmojiPanel = emoji_panelvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'el-emoji-panel',
  components: {
    vuescroll: external_vuescroll_default.a
  }
})], emoji_panelvue_type_script_lang_ts_EmojiPanel);
/* harmony default export */ var emoji_panelvue_type_script_lang_ts_ = (emoji_panelvue_type_script_lang_ts_EmojiPanel);
// CONCATENATED MODULE: ./components/emoji-panel/emoji-panel.vue?vue&type=script&lang=ts&
 /* harmony default export */ var emoji_panel_emoji_panelvue_type_script_lang_ts_ = (emoji_panelvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/emoji-panel/emoji-panel.vue



function emoji_panel_injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var emoji_panel_component = normalizeComponent(
  emoji_panel_emoji_panelvue_type_script_lang_ts_,
  emoji_panelvue_type_template_id_1a2bcc9a_render,
  emoji_panelvue_type_template_id_1a2bcc9a_staticRenderFns,
  false,
  emoji_panel_injectStyles,
  null,
  "dd3d9a28"
  
)

/* harmony default export */ var emoji_panel = (emoji_panel_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/attach-panel/attach-panel.vue?vue&type=template&id=ea104280&
var attach_panelvue_type_template_id_ea104280_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"attach-panel"},_vm._l((_vm.items),function(item,i){return _vm._ssrNode("<div class=\"attach-panel__item\">","</div>",[_c('svg-icon',{staticClass:"attach-panel__icon",attrs:{"name":item.icon}}),_vm._ssrNode(" <div class=\"attach-panel__text\">"+_vm._ssrEscape(_vm._s(item.text))+"</div>")],2)}),0)}
var attach_panelvue_type_template_id_ea104280_staticRenderFns = []


// CONCATENATED MODULE: ./components/attach-panel/attach-panel.vue?vue&type=template&id=ea104280&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/attach-panel/attach-panel.vue?vue&type=script&lang=ts&
var attach_panelvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let attach_panelvue_type_script_lang_ts_AttachPanel = class AttachPanel extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.items = [{
      icon: 'image',
      text: 'Picture'
    }, {
      icon: 'description',
      text: 'Document'
    }];
  }

};
attach_panelvue_type_script_lang_ts_AttachPanel = attach_panelvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'el-attach-panel'
})], attach_panelvue_type_script_lang_ts_AttachPanel);
/* harmony default export */ var attach_panelvue_type_script_lang_ts_ = (attach_panelvue_type_script_lang_ts_AttachPanel);
// CONCATENATED MODULE: ./components/attach-panel/attach-panel.vue?vue&type=script&lang=ts&
 /* harmony default export */ var attach_panel_attach_panelvue_type_script_lang_ts_ = (attach_panelvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/attach-panel/attach-panel.vue



function attach_panel_injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var attach_panel_component = normalizeComponent(
  attach_panel_attach_panelvue_type_script_lang_ts_,
  attach_panelvue_type_template_id_ea104280_render,
  attach_panelvue_type_template_id_ea104280_staticRenderFns,
  false,
  attach_panel_injectStyles,
  null,
  "8d9c5fac"
  
)

/* harmony default export */ var attach_panel = (attach_panel_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/footer.vue?vue&type=script&lang=ts&
var footervue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let footervue_type_script_lang_ts_Footer = class Footer extends external_nuxt_property_decorator_["Vue"] {
  changeEmoji() {
    const options = {
      rows: 5,
      cols: 11,
      count: 50,
      size: 28
    };
    const emojiIndex = getRandomIntInRange(1, options.count);
    const y = Math.floor((emojiIndex - 1) / options.cols) + 1;
    const x = emojiIndex - options.cols * (y - 1);
    this.emoji.style.backgroundPosition = `-${(x - 1) * options.size}px -${(y - 1) * options.size}px`;
  }

  mounted() {
    document.body.addEventListener('click', event => {
      if (!this.emoji.contains(event.target) && !this.emojiPanel.contains(event.target)) this.setEmojisPanelActive(false);
      if (!this.attach.contains(event.target) && !this.attachPanel.contains(event.target)) this.setAttachPanelActive(false);
    });
  }

};

footervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], footervue_type_script_lang_ts_Footer.prototype, "emoji", void 0);

footervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], footervue_type_script_lang_ts_Footer.prototype, "emojiPanel", void 0);

footervue_type_script_lang_ts_decorate([external_nuxt_property_decorator_["State"]], footervue_type_script_lang_ts_Footer.prototype, "emojisPanelActive", void 0);

footervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], footervue_type_script_lang_ts_Footer.prototype, "attach", void 0);

footervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Ref"])()], footervue_type_script_lang_ts_Footer.prototype, "attachPanel", void 0);

footervue_type_script_lang_ts_decorate([external_nuxt_property_decorator_["State"]], footervue_type_script_lang_ts_Footer.prototype, "attachPanelActive", void 0);

footervue_type_script_lang_ts_decorate([external_nuxt_property_decorator_["Mutation"]], footervue_type_script_lang_ts_Footer.prototype, "toggleEmojisPanel", void 0);

footervue_type_script_lang_ts_decorate([external_nuxt_property_decorator_["Mutation"]], footervue_type_script_lang_ts_Footer.prototype, "setEmojisPanelActive", void 0);

footervue_type_script_lang_ts_decorate([external_nuxt_property_decorator_["Mutation"]], footervue_type_script_lang_ts_Footer.prototype, "toggleAttachPanel", void 0);

footervue_type_script_lang_ts_decorate([external_nuxt_property_decorator_["Mutation"]], footervue_type_script_lang_ts_Footer.prototype, "setAttachPanelActive", void 0);

footervue_type_script_lang_ts_Footer = footervue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'el-footer',
  components: {
    ElAttachPanel: attach_panel,
    ElEmojiPanel: emoji_panel
  }
})], footervue_type_script_lang_ts_Footer);
/* harmony default export */ var footervue_type_script_lang_ts_ = (footervue_type_script_lang_ts_Footer);
// CONCATENATED MODULE: ./components/footer/footer.vue?vue&type=script&lang=ts&
 /* harmony default export */ var footer_footervue_type_script_lang_ts_ = (footervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/footer/footer.vue



function footer_injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var footer_component = normalizeComponent(
  footer_footervue_type_script_lang_ts_,
  footervue_type_template_id_f2892e66_render,
  footervue_type_template_id_f2892e66_staticRenderFns,
  false,
  footer_injectStyles,
  null,
  "ae200f6c"
  
)

/* harmony default export */ var footer = (footer_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/aside-panel/aside-panel.vue?vue&type=template&id=0fdbb9ab&
var aside_panelvue_type_template_id_0fdbb9ab_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"aside-panel",class:{ 'aside-panel_type_open': _vm.openMenu }},[_vm._ssrNode("<div class=\"aside-panel__open-button\">","</div>",[_c('svg-icon',{staticClass:"aside-panel__open-icon",attrs:{"name":"apps"}})],1),_vm._ssrNode(" "),_c('vuescroll',[_c('section',{staticClass:"aside-panel__section"},[_c('h2',{staticClass:"aside-panel__section-title"},[_vm._v("В сети – 10")]),_vm._v(" "),_c('div',{staticClass:"aside-panel__section-body"},[_c('el-users-list')],1)]),_vm._v(" "),_c('section',{staticClass:"aside-panel__section"},[_c('h2',{staticClass:"aside-panel__section-title"},[_vm._v("Не сети – 10")]),_vm._v(" "),_c('div',{staticClass:"aside-panel__section-body"},[_c('el-users-list')],1)]),_vm._v(" "),_c('section',{staticClass:"aside-panel__section"},[_c('h2',{staticClass:"aside-panel__section-title"},[_vm._v("В сети – 10")]),_vm._v(" "),_c('div',{staticClass:"aside-panel__section-body"},[_c('el-users-list')],1)]),_vm._v(" "),_c('section',{staticClass:"aside-panel__section"},[_c('h2',{staticClass:"aside-panel__section-title"},[_vm._v("Не сети – 10")]),_vm._v(" "),_c('div',{staticClass:"aside-panel__section-body"},[_c('el-users-list')],1)]),_vm._v(" "),_c('section',{staticClass:"aside-panel__section"},[_c('h2',{staticClass:"aside-panel__section-title"},[_vm._v("В сети – 10")]),_vm._v(" "),_c('div',{staticClass:"aside-panel__section-body"},[_c('el-users-list')],1)]),_vm._v(" "),_c('section',{staticClass:"aside-panel__section"},[_c('h2',{staticClass:"aside-panel__section-title"},[_vm._v("Не сети – 10")]),_vm._v(" "),_c('div',{staticClass:"aside-panel__section-body"},[_c('el-users-list')],1)]),_vm._v(" "),_c('section',{staticClass:"aside-panel__section"},[_c('h2',{staticClass:"aside-panel__section-title"},[_vm._v("В сети – 10")]),_vm._v(" "),_c('div',{staticClass:"aside-panel__section-body"},[_c('el-users-list')],1)]),_vm._v(" "),_c('section',{staticClass:"aside-panel__section"},[_c('h2',{staticClass:"aside-panel__section-title"},[_vm._v("Не сети – 10")]),_vm._v(" "),_c('div',{staticClass:"aside-panel__section-body"},[_c('el-users-list')],1)]),_vm._v(" "),_c('section',{staticClass:"aside-panel__section"},[_c('h2',{staticClass:"aside-panel__section-title"},[_vm._v("В сети – 10")]),_vm._v(" "),_c('div',{staticClass:"aside-panel__section-body"},[_c('el-users-list')],1)]),_vm._v(" "),_c('section',{staticClass:"aside-panel__section"},[_c('h2',{staticClass:"aside-panel__section-title"},[_vm._v("Не сети – 10")]),_vm._v(" "),_c('div',{staticClass:"aside-panel__section-body"},[_c('el-users-list')],1)]),_vm._v(" "),_c('section',{staticClass:"aside-panel__section"},[_c('h2',{staticClass:"aside-panel__section-title"},[_vm._v("В сети – 10")]),_vm._v(" "),_c('div',{staticClass:"aside-panel__section-body"},[_c('el-users-list')],1)]),_vm._v(" "),_c('section',{staticClass:"aside-panel__section"},[_c('h2',{staticClass:"aside-panel__section-title"},[_vm._v("Не сети – 10")]),_vm._v(" "),_c('div',{staticClass:"aside-panel__section-body"},[_c('el-users-list')],1)])])],2)}
var aside_panelvue_type_template_id_0fdbb9ab_staticRenderFns = []


// CONCATENATED MODULE: ./components/aside-panel/aside-panel.vue?vue&type=template&id=0fdbb9ab&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/users-list/users-list.vue?vue&type=template&id=1b79a0cb&
var users_listvue_type_template_id_1b79a0cb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"users-list"},[_vm._ssrNode((_vm._ssrList((_vm.users),function(user){return ("<li class=\"users-list__item\"><img"+(_vm._ssrAttr("src",user.avatar))+" alt=\"avatar\" class=\"users-list__avatar\"> <div class=\"users-list__info\"><h3 class=\"users-list__username\">"+_vm._ssrEscape(_vm._s(user.name))+"</h3> "+((user.status)?("<p class=\"users-list__status\">"+_vm._ssrEscape(_vm._s(user.status))+"</p>"):"<!---->")+"</div></li>")})))])}
var users_listvue_type_template_id_1b79a0cb_staticRenderFns = []


// CONCATENATED MODULE: ./components/users-list/users-list.vue?vue&type=template&id=1b79a0cb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/users-list/users-list.vue?vue&type=script&lang=ts&
var users_listvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let users_listvue_type_script_lang_ts_UsersList = class UsersList extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.users = [{
      avatar: '/images/user-avatar2.jpg',
      name: 'IntelRug',
      status: 'Играет в Webstorm'
    }, {
      avatar: '/images/user-avatar.png',
      name: 'TrenLok'
    }];
  }

};
users_listvue_type_script_lang_ts_UsersList = users_listvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'el-users-list'
})], users_listvue_type_script_lang_ts_UsersList);
/* harmony default export */ var users_listvue_type_script_lang_ts_ = (users_listvue_type_script_lang_ts_UsersList);
// CONCATENATED MODULE: ./components/users-list/users-list.vue?vue&type=script&lang=ts&
 /* harmony default export */ var users_list_users_listvue_type_script_lang_ts_ = (users_listvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/users-list/users-list.vue



function users_list_injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var users_list_component = normalizeComponent(
  users_list_users_listvue_type_script_lang_ts_,
  users_listvue_type_template_id_1b79a0cb_render,
  users_listvue_type_template_id_1b79a0cb_staticRenderFns,
  false,
  users_list_injectStyles,
  null,
  "2db8b0ca"
  
)

/* harmony default export */ var users_list = (users_list_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/aside-panel/aside-panel.vue?vue&type=script&lang=ts&
var aside_panelvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let aside_panelvue_type_script_lang_ts_AsidePanel = class AsidePanel extends external_nuxt_property_decorator_["Vue"] {
  constructor() {
    super(...arguments);
    this.openMenu = false;
  }

};
aside_panelvue_type_script_lang_ts_AsidePanel = aside_panelvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  name: 'el-aside-panel',
  components: {
    ElUsersList: users_list,
    vuescroll: external_vuescroll_default.a
  }
})], aside_panelvue_type_script_lang_ts_AsidePanel);
/* harmony default export */ var aside_panelvue_type_script_lang_ts_ = (aside_panelvue_type_script_lang_ts_AsidePanel);
// CONCATENATED MODULE: ./components/aside-panel/aside-panel.vue?vue&type=script&lang=ts&
 /* harmony default export */ var aside_panel_aside_panelvue_type_script_lang_ts_ = (aside_panelvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/aside-panel/aside-panel.vue



function aside_panel_injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var aside_panel_component = normalizeComponent(
  aside_panel_aside_panelvue_type_script_lang_ts_,
  aside_panelvue_type_template_id_0fdbb9ab_render,
  aside_panelvue_type_template_id_0fdbb9ab_staticRenderFns,
  false,
  aside_panel_injectStyles,
  null,
  "583994d0"
  
)

/* harmony default export */ var aside_panel = (aside_panel_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=ts&
var defaultvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let defaultvue_type_script_lang_ts_Default = class Default extends external_nuxt_property_decorator_["Vue"] {};
defaultvue_type_script_lang_ts_Default = defaultvue_type_script_lang_ts_decorate([Object(external_nuxt_property_decorator_["Component"])({
  components: {
    ElAsidePanel: aside_panel,
    ElFooter: footer
  }
})], defaultvue_type_script_lang_ts_Default);
/* harmony default export */ var defaultvue_type_script_lang_ts_ = (defaultvue_type_script_lang_ts_Default);
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_ts_ = (defaultvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = normalizeComponent(
  layouts_defaultvue_type_script_lang_ts_,
  defaultvue_type_template_id_3c1a39fc_render,
  defaultvue_type_template_id_3c1a39fc_staticRenderFns,
  false,
  null,
  null,
  "78e3c80a"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js




const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail(this.nuxt.err);
        }

        if (this.$loading.finish) {
          this.$loading.finish();
        }
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(24);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(72), 'store/index.ts'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/middleware.js

/** @type {import('@nuxt/types').Middleware} */

_nuxt_middleware.nuxti18n = async context => {
  const {
    app,
    isHMR
  } = context;

  if (isHMR) {
    return;
  }

  const [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(context.route);

  if (status && redirectPath) {
    const query = preserveQuery ? context.route.query : undefined;
    context.redirect(status, redirectPath, query);
  }
};
// EXTERNAL MODULE: ./.nuxt/nuxt-i18n/options.js
var nuxt_i18n_options = __webpack_require__(0);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.routing.js




function localePath(route, locale) {
  const localizedRoute = localeRoute.call(this, route, locale);

  if (!localizedRoute) {
    return;
  }

  return localizedRoute.fullPath;
}

function localeRoute(route, locale) {
  // Abort if no route or no locale
  if (!route) {
    return;
  }

  const {
    i18n
  } = this;

  if (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX && locale && locale !== i18n.locale) {
    // eslint-disable-next-line no-console
    console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Passing non-current locale to localePath is unsupported when using no_prefix strategy`);
  }

  locale = locale || i18n.locale;

  if (!locale) {
    return;
  } // If route parameter is a string, check if it's a path or name of route.


  if (typeof route === 'string') {
    if (route[0] === '/') {
      // If route parameter is a path, create route object with path.
      route = {
        path: route
      };
    } else {
      // Else use it as route name.
      route = {
        name: route
      };
    }
  }

  const localizedRoute = Object.assign({}, route);

  if (route.path && !route.name) {
    const isDefaultLocale = locale === nuxt_i18n_options["j" /* defaultLocale */]; // if route has a path defined but no name, resolve full route using the path

    const isPrefixed = // don't prefix default locale
    !(isDefaultLocale && [nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_EXCEPT_DEFAULT, nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT].includes(nuxt_i18n_options["t" /* strategy */])) && // no prefix for any language
    !(nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) && // no prefix for different domains
    !i18n.differentDomains;
    let path = isPrefixed ? `/${locale}${route.path}` : route.path;
    path = path.replace(/\/+$/, '') + (nuxt_i18n_options["u" /* trailingSlash */] ? '/' : '') || '/';
    localizedRoute.path = path;
  } else {
    if (!route.name && !route.path) {
      localizedRoute.name = this.getRouteBaseName();
    }

    localizedRoute.name = getLocaleRouteName(localizedRoute.name, locale);
    const {
      params
    } = localizedRoute;

    if (params && params['0'] === undefined && params.pathMatch) {
      params['0'] = params.pathMatch;
    }
  }

  return this.router.resolve(localizedRoute).route;
}

function switchLocalePath(locale) {
  const i18n = this.i18n;

  if (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX && locale && locale !== i18n.locale) {
    // eslint-disable-next-line no-console
    console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Passing non-current locale to switchLocalePath is unsupported when using no_prefix strategy`);
  }

  const name = this.getRouteBaseName();

  if (!name) {
    return '';
  }

  const {
    route,
    store
  } = this;
  const {
    params,
    ...routeCopy
  } = route;
  let langSwitchParams = {};

  if (nuxt_i18n_options["w" /* vuex */] && nuxt_i18n_options["w" /* vuex */].syncRouteParams && store) {
    langSwitchParams = store.getters[`${nuxt_i18n_options["w" /* vuex */].moduleName}/localeRouteParams`](locale);
  }

  const baseRoute = Object.assign({}, routeCopy, {
    name,
    params: { ...params,
      ...langSwitchParams,
      0: params.pathMatch
    }
  });
  let path = this.localePath(baseRoute, locale); // Handle different domains

  if (i18n.differentDomains) {
    const lang = i18n.locales.find(l => l[nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]] === locale);

    if (lang && lang[nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */]]) {
      let protocol;

      if (true) {
        const isHTTPS = __webpack_require__(73);

        protocol = isHTTPS(this.req) ? 'https' : 'http';
      } else {}

      path = protocol + '://' + lang[nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */]] + path;
    } else {
      // eslint-disable-next-line no-console
      console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Could not find domain name for locale ${locale}`);
    }
  }

  return path;
}

function getRouteBaseName(givenRoute) {
  const route = givenRoute !== undefined ? givenRoute : this.route;

  if (!route.name) {
    return null;
  }

  return route.name.split(nuxt_i18n_options["s" /* routesNameSeparator */])[0];
}

function getLocaleRouteName(routeName, locale) {
  const name = routeName + (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX ? '' : nuxt_i18n_options["s" /* routesNameSeparator */] + locale); // Match route without prefix for default locale

  if (locale === nuxt_i18n_options["j" /* defaultLocale */] && nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT) {
    return name + nuxt_i18n_options["s" /* routesNameSeparator */] + nuxt_i18n_options["k" /* defaultLocaleRouteNameSuffix */];
  }

  return name;
}

const VueInstanceProxy = function (targetFunction) {
  return function () {
    const proxy = {
      getRouteBaseName: this.getRouteBaseName,
      i18n: this.$i18n,
      localePath: this.localePath,
      req:  true ? this.$ssrContext.req : undefined,
      route: this.$route,
      router: this.$router,
      store: this.$store
    };
    return targetFunction.apply(proxy, arguments);
  };
};

const NuxtContextProxy = function (context, targetFunction) {
  return function () {
    const {
      app,
      req,
      route,
      store
    } = context;
    const proxy = {
      getRouteBaseName: app.getRouteBaseName,
      i18n: app.i18n,
      localePath: app.localePath,
      req:  true ? req : undefined,
      route,
      router: app.router,
      store
    };
    return targetFunction.apply(proxy, arguments);
  };
};

const plugin_routing_plugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        localePath: VueInstanceProxy(localePath),
        localeRoute: VueInstanceProxy(localeRoute),
        switchLocalePath: VueInstanceProxy(switchLocalePath),
        getRouteBaseName: VueInstanceProxy(getRouteBaseName)
      }
    });
  }

};
/* harmony default export */ var plugin_routing = (context => {
  external_vue_default.a.use(plugin_routing_plugin);
  const {
    app
  } = context;
  app.localePath = NuxtContextProxy(context, localePath);
  app.localeRoute = NuxtContextProxy(context, localeRoute);
  app.switchLocalePath = NuxtContextProxy(context, switchLocalePath);
  app.getRouteBaseName = NuxtContextProxy(context, getRouteBaseName);
});
// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(25);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/seo-head.js


const nuxtI18nSeo = function () {
  if (!(external_vue_meta_default.a.hasMetaInfo ? external_vue_meta_default.a.hasMetaInfo(this) : this._hasMetaInfo) || !this.$i18n || !this.$i18n.locale || !this.$i18n.locales || this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]] === false || this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]] && this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]].seo === false) {
    return {};
  }

  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const currentLocale = this.$i18n.locales.find(l => codeFromLocale(l) === this.$i18n.locale);
  const currentLocaleIso = isoFromLocale(currentLocale);

  if (currentLocale && currentLocaleIso) {
    metaObject.htmlAttrs.lang = currentLocaleIso; // TODO: simple lang or "specific" lang with territory?
  }

  addHreflangLinks.bind(this)(this.$i18n.locales, this.$i18n.__baseUrl, metaObject.link);
  addCanonicalLinks.bind(this)(currentLocale, this.$i18n.__baseUrl, metaObject.link);
  addCurrentOgLocale.bind(this)(currentLocale, currentLocaleIso, metaObject.meta);
  addAlternateOgLocales.bind(this)(this.$i18n.locales, currentLocaleIso, metaObject.meta);
  return metaObject;
};

function addHreflangLinks(locales, baseUrl, link) {
  if (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
    return;
  }

  const localeMap = new Map();

  for (const locale of locales) {
    const localeIso = isoFromLocale(locale);

    if (!localeIso) {
      // eslint-disable-next-line no-console
      console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Locale ISO code is required to generate alternate link`);
      continue;
    }

    const [language, region] = localeIso.split('-');

    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }

    localeMap.set(localeIso, locale);
  }

  for (const [iso, mapLocale] of localeMap.entries()) {
    link.push({
      hid: `alternate-hreflang-${iso}`,
      rel: 'alternate',
      href: baseUrl + this.switchLocalePath(mapLocale.code),
      hreflang: iso
    });
  }
}

function addCanonicalLinks(currentLocale, baseUrl, link) {
  if (nuxt_i18n_options["t" /* strategy */] !== nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT) {
    return;
  }

  const currentLocaleCode = codeFromLocale(currentLocale);
  const canonicalPath = this.switchLocalePath(currentLocaleCode);
  const canonicalPathIsDifferentFromCurrent = canonicalPath !== this.$route.path;
  const shouldAddCanonical = canonicalPath && canonicalPathIsDifferentFromCurrent;

  if (!shouldAddCanonical) {
    return;
  }

  link.push({
    hid: `canonical-lang-${currentLocaleCode}`,
    rel: 'canonical',
    href: baseUrl + canonicalPath
  });
}

function addCurrentOgLocale(currentLocale, currentLocaleIso, meta) {
  const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;

  if (!hasCurrentLocaleAndIso) {
    return;
  }

  meta.push({
    hid: 'og:locale',
    property: 'og:locale',
    // Replace dash with underscore as defined in spec: language_TERRITORY
    content: underscoreIsoFromLocale(currentLocale)
  });
}

function addAlternateOgLocales(locales, currentLocaleIso, meta) {
  const localesWithoutCurrent = locales.filter(locale => {
    const localeIso = isoFromLocale(locale);
    return localeIso && localeIso !== currentLocaleIso;
  });
  const alternateLocales = localesWithoutCurrent.map(locale => ({
    hid: `og:locale:alternate-${isoFromLocale(locale)}`,
    property: 'og:locale:alternate',
    content: underscoreIsoFromLocale(locale)
  }));
  meta.push(...alternateLocales);
}

function isoFromLocale(locale) {
  return locale[nuxt_i18n_options["e" /* LOCALE_ISO_KEY */]];
}

function underscoreIsoFromLocale(locale) {
  return isoFromLocale(locale).replace(/-/g, '_');
}

function codeFromLocale(locale) {
  return locale[nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]];
}
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(26);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(74);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/utils-common.js


/**
 * Parses locales provided from browser through `accept-language` header.
 * @param {string} input
 * @return {string[]} An array of locale codes. Priority determined by order in array.
 */

const parseAcceptLanguage = input => {
  // Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
  // Contains tags separated by comma.
  // Each tag consists of locale code (2-3 letter language code) and optionally country code
  // after dash. Tag can also contain score after semicolon, that is assumed to match order
  // so it's not explicitly used.
  return input.split(',').map(tag => tag.split(';')[0]);
};
/**
 * Find locale code that best matches provided list of browser locales.
 * @param {string[]} appLocales The user-configured locale codes that are to be matched.
 * @param {string[]} browserLocales The locales to match against configured.
 * @return {string?}
 */

const matchBrowserLocale = (appLocales, browserLocales) => {
  /** @type {{ code: string, score: number }[]} */
  const matchedLocales = []; // First pass: match exact locale.

  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedCode = appLocales.find(appCode => appCode.toLowerCase() === browserCode.toLowerCase());

    if (matchedCode) {
      matchedLocales.push({
        code: matchedCode,
        score: 1 - index / browserLocales.length
      });
      break;
    }
  } // Second pass: match only locale code part of the browser locale (not including country).


  for (const [index, browserCode] of browserLocales.entries()) {
    if (browserCode.includes('-')) {
      // For backwards-compatibility, this is lower-cased before comparing.
      const languageCode = browserCode.split('-')[0].toLowerCase();

      if (appLocales.includes(languageCode)) {
        // Deduct a thousandth for being non-exact match.
        matchedLocales.push({
          code: languageCode,
          score: 0.999 - index / browserLocales.length
        });
        break;
      }
    }
  } // Sort the list by score (0 - lowest, 1 - highest).


  if (matchedLocales.length > 1) {
    matchedLocales.sort((localeA, localeB) => {
      if (localeA.score === localeB.score) {
        // If scores are equal then pick more specific (longer) code.
        return localeB.code.length - localeA.code.length;
      }

      return localeB.score - localeA.score;
    });
  }

  return matchedLocales.length ? matchedLocales[0].code : null;
};
/**
 * Resolves base URL value if provided as function. Otherwise just returns verbatim.
 * @param {string | function} baseUrl
 * @param {import('@nuxt/types').Context} context
 * @return {string}
 */

const resolveBaseUrl = (baseUrl, context) => {
  if (typeof baseUrl === 'function') {
    return baseUrl(context);
  }

  return baseUrl;
};
/**
 * Get locale code that corresponds to current hostname
 * @param  {object} locales
 * @param  {object} [req] Request object
 * @param  {{ localDomainKey: string, localeCodeKey: string }} options
 * @return {string | null} Locade code found if any
 */

const getLocaleDomain = (locales, req, {
  localDomainKey,
  localeCodeKey
}) => {
  const hostname =  false ? undefined : req.headers['x-forwarded-host'] || req.headers.host;

  if (hostname) {
    const localeDomain = locales.find(l => l[localDomainKey] === hostname);

    if (localeDomain) {
      return localeDomain[localeCodeKey];
    }
  }

  return null;
};
/**
 * Creates getter for getLocaleFromRoute
 * @param  {string[]} localeCodes
 * @param  {{ routesNameSeparator: string, defaultLocaleRouteNameSuffix: string }} options
 * @return {(route) => string| null}
 */

const createLocaleFromRouteGetter = (localeCodes, {
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) => {
  const localesPattern = `(${localeCodes.join('|')})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, 'i');
  const regexpPath = new RegExp(`^/${localesPattern}/`, 'i');
  /**
   * Extract locale code from given route:
   * - If route has a name, try to extract locale from it
   * - Otherwise, fall back to using the routes'path
   * @param  {Object} route
   * @param  {string[]} localeCodes
   * @param  {{ routesNameSeparator: string, defaultLocaleRouteNameSuffix: string }} options
   * @return {string | null} Locale code found if any
   */

  const getLocaleFromRoute = route => {
    // Extract from route name
    if (route.name) {
      const matches = route.name.match(regexpName);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    } else if (route.path) {
      // Extract from path
      const matches = route.path.match(regexpPath);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    }

    return null;
  };

  return getLocaleFromRoute;
};
/**
 * @param {object} [req]
 * @param {{ useCookie: boolean, localeCodes: string[], cookieKey: string}} options
 * @return {string | void}
 */

const getLocaleCookie = (req, {
  useCookie,
  cookieKey,
  localeCodes
}) => {
  if (useCookie) {
    let localeCode;

    if (false) {} else if (req && typeof req.headers.cookie !== 'undefined') {
      const cookies = req.headers && req.headers.cookie ? external_cookie_default.a.parse(req.headers.cookie) : {};
      localeCode = cookies[cookieKey];
    }

    if (localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
};
/**
 * @param {string} locale
 * @param {object} [res]
 * @param {{ useCookie: boolean, cookieDomain: string, cookieKey: string}} options
 */

const setLocaleCookie = (locale, res, {
  useCookie,
  cookieDomain,
  cookieKey
}) => {
  if (!useCookie) {
    return;
  }

  const date = new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: '/',
    sameSite: 'lax'
  };

  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }

  if (false) {} else if (res) {
    let headers = res.getHeader('Set-Cookie') || [];

    if (typeof headers === 'string') {
      headers = [headers];
    }

    const redirectCookie = external_cookie_default.a.serialize(cookieKey, locale, cookieOptions);
    headers.push(redirectCookie);
    res.setHeader('Set-Cookie', headers);
  }
};
const registerStore = (store, vuex, localeCodes, moduleName) => {
  store.registerModule(vuex.moduleName, {
    namespaced: true,
    state: () => ({ ...(vuex.syncLocale ? {
        locale: ''
      } : {}),
      ...(vuex.syncMessages ? {
        messages: {}
      } : {}),
      ...(vuex.syncRouteParams ? {
        routeParams: {}
      } : {})
    }),
    actions: { ...(vuex.syncLocale ? {
        setLocale({
          commit
        }, locale) {
          commit('setLocale', locale);
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages({
          commit
        }, messages) {
          commit('setMessages', messages);
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams({
          commit
        }, params) {
          if (false) {}

          commit('setRouteParams', params);
        }

      } : {})
    },
    mutations: { ...(vuex.syncLocale ? {
        setLocale(state, locale) {
          state.locale = locale;
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages(state, messages) {
          state.messages = messages;
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams(state, params) {
          state.routeParams = params;
        }

      } : {})
    },
    getters: { ...(vuex.syncRouteParams ? {
        localeRouteParams: ({
          routeParams
        }) => locale => routeParams[locale] || {}
      } : {})
    }
  }, {
    preserveState: !!store.state[vuex.moduleName]
  });
};
/**
 * Dispatch store module actions to keep it in sync with app's locale data
 * @param  {Store} store     Vuex store
 * @param  {String} locale   Current locale
 * @param  {Object} messages Current messages
 * @param  {{ vuex: object }} options
 * @return {Promise(void)}
 */

const syncVuex = async (store, locale = null, messages = null, {
  vuex
}) => {
  if (vuex && store) {
    if (locale !== null && vuex.syncLocale) {
      await store.dispatch(vuex.moduleName + '/setLocale', locale);
    }

    if (messages !== null && vuex.syncMessages) {
      await store.dispatch(vuex.moduleName + '/setMessages', messages);
    }
  }
};

const isObject = value => value && !Array.isArray(value) && typeof value === 'object';
/**
 * Validate setRouteParams action's payload
 * @param {object} routeParams The action's payload
 * @param {string[]} localeCodes
 * @param {string} moduleName
 */


const validateRouteParams = (routeParams, localeCodes, moduleName) => {
  if (!isObject(routeParams)) {
    // eslint-disable-next-line no-console
    console.warn(`[${moduleName}] Route params should be an object`);
    return;
  }

  for (const [key, value] of Object.entries(routeParams)) {
    if (!localeCodes.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(`[${moduleName}] Trying to set route params for key ${key} which is not a valid locale`);
    } else if (!isObject(value)) {
      // eslint-disable-next-line no-console
      console.warn(`[${moduleName}] Trying to set route params for locale ${key} with a non-object value`);
    }
  }
};
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.main.js





external_vue_default.a.use(external_vue_i18n_default.a);
const getLocaleFromRoute = createLocaleFromRouteGetter(nuxt_i18n_options["o" /* localeCodes */], {
  routesNameSeparator: nuxt_i18n_options["s" /* routesNameSeparator */],
  defaultLocaleRouteNameSuffix: nuxt_i18n_options["k" /* defaultLocaleRouteNameSuffix */]
});
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_main = (async context => {
  const {
    app,
    route,
    store,
    req,
    res,
    redirect
  } = context;

  if (nuxt_i18n_options["w" /* vuex */] && store) {
    registerStore(store, nuxt_i18n_options["w" /* vuex */], nuxt_i18n_options["o" /* localeCodes */], nuxt_i18n_options["f" /* MODULE_NAME */]);
  }

  const {
    useCookie,
    cookieKey,
    cookieDomain
  } = nuxt_i18n_options["l" /* detectBrowserLanguage */];

  const loadAndSetLocale = async (newLocale, {
    initialSetup = false
  } = {}) => {
    // Abort if different domains option enabled
    if (!initialSetup && app.i18n.differentDomains) {
      return;
    } // Abort if newLocale did not change


    if (newLocale === app.i18n.locale) {
      return;
    }

    const oldLocale = app.i18n.locale;

    if (!initialSetup) {
      app.i18n.beforeLanguageSwitch(oldLocale, newLocale);

      if (useCookie) {
        app.i18n.setLocaleCookie(newLocale);
      }
    } // Lazy-loading enabled


    if (nuxt_i18n_options["n" /* lazy */]) {
      const {
        loadLanguageAsync
      } = __webpack_require__(75); // Load fallback locale.


      if (app.i18n.fallbackLocale && newLocale !== app.i18n.fallbackLocale) {
        await loadLanguageAsync(context, app.i18n.fallbackLocale);
      }

      await loadLanguageAsync(context, newLocale);
    }

    app.i18n.locale = newLocale;
    await syncVuex(store, newLocale, app.i18n.getLocaleMessage(newLocale), {
      vuex: nuxt_i18n_options["w" /* vuex */]
    }); // Must retrieve from context as it might have changed since plugin initialization.

    const {
      route
    } = context;
    const redirectPath = getRedirectPathForLocale(route, newLocale);

    if (initialSetup) {
      // Redirect will be delayed until middleware runs as redirecting from plugin does not
      // work in SPA (https://github.com/nuxt/nuxt.js/issues/4491).
      app.i18n.__redirect = redirectPath;
    } else {
      app.i18n.onLanguageSwitched(oldLocale, newLocale);

      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  };

  const getRedirectPathForLocale = (route, locale) => {
    if (!locale || app.i18n.differentDomains || nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
      return '';
    }

    if (getLocaleFromRoute(route) === locale) {
      return '';
    } // At this point we are left with route that either has no or different locale.


    let redirectPath = app.switchLocalePath(locale);

    if (!redirectPath) {
      // Current route could be 404 in which case attempt to find matching route for given locale.
      redirectPath = app.localePath(route.fullPath, locale);

      if (redirectPath === route.fullPath) {
        return '';
      }
    }

    return redirectPath;
  }; // Called by middleware on navigation (also on the initial one).


  const onNavigate = async route => {
    // Handle root path redirect
    if (route.path === '/' && nuxt_i18n_options["r" /* rootRedirect */]) {
      let statusCode = 302;
      let path = nuxt_i18n_options["r" /* rootRedirect */];

      if (typeof nuxt_i18n_options["r" /* rootRedirect */] !== 'string') {
        statusCode = nuxt_i18n_options["r" /* rootRedirect */].statusCode;
        path = nuxt_i18n_options["r" /* rootRedirect */].path;
      }

      return [statusCode, `/${path}`,
      /* preserve query */
      true];
    }

    const storedRedirect = app.i18n.__redirect;

    if (storedRedirect) {
      app.i18n.__redirect = null;
      return [302, storedRedirect];
    }

    app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["h" /* baseUrl */], context);
    const finalLocale = nuxt_i18n_options["l" /* detectBrowserLanguage */] && doDetectBrowserLanguage() || getLocaleFromRoute(route) || app.i18n.locale || app.i18n.defaultLocale || '';
    await app.i18n.setLocale(finalLocale);
    return [null, null];
  };

  const doDetectBrowserLanguage = () => {
    // Browser detection is ignored if it is a nuxt generate.
    if (false) {}

    const {
      alwaysRedirect,
      fallbackLocale
    } = nuxt_i18n_options["l" /* detectBrowserLanguage */];
    let matchedLocale;

    if (useCookie && (matchedLocale = app.i18n.getLocaleCookie())) {// Get preferred language from cookie if present and enabled
    } else if (false) {} else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      matchedLocale = matchBrowserLocale(nuxt_i18n_options["o" /* localeCodes */], parseAcceptLanguage(req.headers['accept-language']));
    }

    const finalLocale = matchedLocale || fallbackLocale; // Handle cookie option to prevent multiple redirections

    if (finalLocale && (!useCookie || alwaysRedirect || !app.i18n.getLocaleCookie())) {
      if (finalLocale !== app.i18n.locale) {
        return finalLocale;
      } else if (useCookie && !app.i18n.getLocaleCookie()) {
        app.i18n.setLocaleCookie(finalLocale);
      }
    }

    return false;
  };

  const extendVueI18nInstance = i18n => {
    i18n.locales = nuxt_i18n_options["p" /* locales */];
    i18n.defaultLocale = nuxt_i18n_options["j" /* defaultLocale */];
    i18n.differentDomains = nuxt_i18n_options["m" /* differentDomains */];
    i18n.beforeLanguageSwitch = nuxt_i18n_options["i" /* beforeLanguageSwitch */];
    i18n.onLanguageSwitched = nuxt_i18n_options["q" /* onLanguageSwitched */];

    i18n.setLocaleCookie = locale => setLocaleCookie(locale, res, {
      useCookie,
      cookieDomain,
      cookieKey
    });

    i18n.getLocaleCookie = () => getLocaleCookie(req, {
      useCookie,
      cookieKey,
      localeCodes: nuxt_i18n_options["o" /* localeCodes */]
    });

    i18n.setLocale = locale => loadAndSetLocale(locale);

    i18n.__baseUrl = app.i18n.__baseUrl;
  }; // Set instance options


  const vueI18nOptions = typeof nuxt_i18n_options["v" /* vueI18n */] === 'function' ? Object(nuxt_i18n_options["v" /* vueI18n */])(context) : nuxt_i18n_options["v" /* vueI18n */];
  vueI18nOptions.componentInstanceCreatedListener = extendVueI18nInstance;
  app.i18n = new external_vue_i18n_default.a(vueI18nOptions); // Initialize locale and fallbackLocale as vue-i18n defaults those to 'en-US' if falsey

  app.i18n.locale = '';
  app.i18n.fallbackLocale = vueI18nOptions.fallbackLocale || '';
  extendVueI18nInstance(app.i18n);
  app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["h" /* baseUrl */], context);
  app.i18n.__onNavigate = onNavigate; // Inject seo function

  external_vue_default.a.prototype.$nuxtI18nSeo = nuxtI18nSeo;

  if (store) {
    // Inject in store.
    store.$i18n = app.i18n;

    if (store.state.localeDomains) {
      app.i18n.locales.forEach(locale => {
        locale.domain = store.state.localeDomains[locale.code];
      });
    }
  }

  let finalLocale = nuxt_i18n_options["l" /* detectBrowserLanguage */] && doDetectBrowserLanguage();

  if (!finalLocale) {
    if (nuxt_i18n_options["w" /* vuex */] && nuxt_i18n_options["w" /* vuex */].syncLocale && store && store.state[nuxt_i18n_options["w" /* vuex */].moduleName].locale !== '') {
      finalLocale = store.state[nuxt_i18n_options["w" /* vuex */].moduleName].locale;
    } else if (app.i18n.differentDomains) {
      const options = {
        localDomainKey: nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */],
        localeCodeKey: nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]
      };
      const domainLocale = getLocaleDomain(nuxt_i18n_options["p" /* locales */], req, options);
      finalLocale = domainLocale;
    } else if (nuxt_i18n_options["t" /* strategy */] !== nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
      const routeLocale = getLocaleFromRoute(route);
      finalLocale = routeLocale;
    } else if (useCookie) {
      finalLocale = app.i18n.getLocaleCookie();
    }
  }

  if (!finalLocale) {
    finalLocale = app.i18n.defaultLocale || '';
  }

  await loadAndSetLocale(finalLocale, {
    initialSetup: true
  });

  if (false) {}
});
// EXTERNAL MODULE: external "vue-apollo"
var external_vue_apollo_ = __webpack_require__(27);
var external_vue_apollo_default = /*#__PURE__*/__webpack_require__.n(external_vue_apollo_);

// EXTERNAL MODULE: external "cross-fetch/polyfill"
var polyfill_ = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vue-cli-plugin-apollo/graphql-client/index.js
var graphql_client = __webpack_require__(20);

// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(18);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external_apollo_cache_inmemory_ = __webpack_require__(21);

// CONCATENATED MODULE: ./.nuxt/apollo-module.js






external_vue_default.a.use(external_vue_apollo_default.a);
/* harmony default export */ var apollo_module = ((ctx, inject) => {
  const providerOptions = {
    clients: {}
  };
  const {
    app,
    beforeNuxtRender,
    req
  } = ctx;
  const AUTH_TOKEN_NAME = 'apollo-token';
  const COOKIE_ATTRIBUTES = {
    "expires": 7,
    "path": "\u002F",
    "secure": false
  };
  const AUTH_TYPE = 'Bearer ';
  const cookies = new external_universal_cookie_default.a(req && req.headers.cookie);
  const onCacheInitStore = {}; // Config

  const defaultTokenName =  false || AUTH_TOKEN_NAME;

  function defaultGetAuth() {
    const token = cookies.get(defaultTokenName);
    return token && defaultClientConfig.validateToken(token) ? AUTH_TYPE + token : '';
  }

  let defaultClientConfig;
  defaultClientConfig = __webpack_require__(89);

  if ('default' in defaultClientConfig) {
    defaultClientConfig = defaultClientConfig.default;
  }

  defaultClientConfig = defaultClientConfig(ctx);

  if (true) {
    onCacheInitStore['default'] = defaultClientConfig.onCacheInit;
    defaultClientConfig.onCacheInit = null;
  }

  const defaultValidateToken = () => true;

  if (!defaultClientConfig.validateToken) {
    defaultClientConfig.validateToken = defaultValidateToken;
  }

  const defaultCache = defaultClientConfig.cache ? defaultClientConfig.cache : new external_apollo_cache_inmemory_["InMemoryCache"](defaultClientConfig.inMemoryCacheOptions ? defaultClientConfig.inMemoryCacheOptions : undefined);

  if (false) {}

  if (!defaultClientConfig.getAuth) {
    defaultClientConfig.getAuth = defaultGetAuth;
  }

  if (false) {}

  defaultClientConfig.ssr = !!true;
  defaultClientConfig.cache = defaultCache;
  defaultClientConfig.tokenName = defaultTokenName; // if ssr we'd still like to have our webclient's cookies

  if ( true && req && req.headers && req.headers.cookie) {
    if (!defaultClientConfig.httpLinkOptions) {
      defaultClientConfig.httpLinkOptions = {};
    }

    if (!defaultClientConfig.httpLinkOptions.headers) {
      defaultClientConfig.httpLinkOptions.headers = {};
    }

    defaultClientConfig.httpLinkOptions.headers.cookie = req.headers.cookie;
  } // Create apollo client


  let defaultApolloCreation = Object(graphql_client["createApolloClient"])({ ...defaultClientConfig
  });
  defaultApolloCreation.apolloClient.wsClient = defaultApolloCreation.wsClient;
  providerOptions.defaultClient = defaultApolloCreation.apolloClient;
  const vueApolloOptions = Object.assign(providerOptions, {
    errorHandler(error) {
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message);
    }

  });
  const apolloProvider = new external_vue_apollo_default.a(vueApolloOptions); // Allow access to the provider in the context

  app.apolloProvider = apolloProvider;

  if (true) {
    const ApolloSSR = __webpack_require__(90);

    beforeNuxtRender(({
      nuxtState
    }) => {
      nuxtState.apollo = ApolloSSR.getStates(apolloProvider); // Clear apollo client cache after each request
      // Issues: https://github.com/nuxt-community/apollo-module/issues/273
      //         https://github.com/nuxt-community/apollo-module/issues/251

      Object.keys(apolloProvider.clients).forEach(clientName => {
        const client = apolloProvider.clients[clientName];
        const onCacheInitKey = clientName === 'defaultClient' ? 'default' : clientName;
        const onCacheInit = onCacheInitStore[onCacheInitKey];
        client.cache.reset();
        if (typeof onCacheInit === 'function') onCacheInit(client.cache);
      });
    });
  }

  inject('apolloHelpers', {
    onLogin: async (token, apolloClient = apolloProvider.defaultClient, cookieAttributes = COOKIE_ATTRIBUTES, skipResetStore = false) => {
      // Fallback for tokenExpires param
      if (typeof cookieAttributes === 'number') cookieAttributes = {
        expires: cookieAttributes
      };

      if (typeof cookieAttributes.expires === 'number') {
        cookieAttributes.expires = new Date(Date.now() + 86400 * 1000 * cookieAttributes.expires);
      }

      if (token) {
        cookies.set(AUTH_TOKEN_NAME, token, cookieAttributes);
      } else {
        cookies.remove(AUTH_TOKEN_NAME, cookieAttributes);
      }

      if (apolloClient.wsClient) Object(graphql_client["restartWebsockets"])(apolloClient.wsClient);

      if (!skipResetStore) {
        try {
          await apolloClient.resetStore();
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('%cError on cache reset (setToken)', 'color: orange;', e.message);
        }
      }
    },
    onLogout: async (apolloClient = apolloProvider.defaultClient, skipResetStore = false) => {
      cookies.remove(AUTH_TOKEN_NAME, COOKIE_ATTRIBUTES);
      if (apolloClient.wsClient) Object(graphql_client["restartWebsockets"])(apolloClient.wsClient);

      if (!skipResetStore) {
        try {
          await apolloClient.resetStore();
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('%cError on cache reset (logout)', 'color: orange;', e.message);
        }
      }
    },
    getToken: (tokenName = AUTH_TOKEN_NAME) => {
      return cookies.get(tokenName);
    }
  });
});
// EXTERNAL MODULE: external "vue-functional-data-merge"
var external_vue_functional_data_merge_ = __webpack_require__(35);

// CONCATENATED MODULE: ./.nuxt/nuxt-svg-sprite.js



function generateName(name) {
  return name.toLowerCase().replace(/\.svg$/, '').replace(/[^a-z0-9-]/g, '-');
}
/**
 * Find sprite file name after nuxt build
 * @param {string} sprite Name of a sprite
 */


function getSpritePath(sprite) {
  const module = __webpack_require__(91)("./" + sprite + ".svg");

  if (typeof module === 'string') {
    return module;
  } // nuxt-edge v3.0.0-26398097.20b0379b returns object instead of string


  if (typeof module === 'object' && typeof module.default === 'string') {
    return module.default;
  }

  return '';
}

function getIcon(info) {
  const {
    icon,
    sprite
  } = info;
  return getSpritePath(sprite) + `#i-${generateName(icon)}`;
}

function getInfo(name) {
  let [sprite, icon] = name.split('/');

  if (!icon) {
    icon = sprite;
    sprite = 'icons';
  }

  return {
    icon,
    sprite
  };
} // @vue/component


const SvgIcon = {
  name: 'SvgIcon',
  functional: true,
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    viewBox: {
      type: String,
      default: null,

      validator(value) {
        return value.split(' ').every(v => {
          return !isNaN(parseInt(v));
        });
      }

    }
  },

  render(h, {
    props,
    data
  }) {
    const info = getInfo(props.name);
    const icon = getIcon(info);
    const use = h('use', {
      attrs: {
        // Since SVG 2, the xlink:href attribute is deprecated in favor of simply href.
        href: icon,
        // xlink:href can still be required in practice for cross-browser compatibility.
        'xlink:href': icon
      }
    });
    const title = props.title ? h('title', props.title) : null;
    const desc = props.desc ? h('desc', props.desc) : null;
    const {
      sprite
    } = info;
    const componentData = {
      class: 'icon sprite-' + sprite,
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: props.viewBox
      }
    };
    return h('svg', Object(external_vue_functional_data_merge_["mergeData"])(data, componentData), [title, desc, use].filter(Boolean));
  }

};
external_vue_default.a.component(SvgIcon.name, SvgIcon);
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(93);

// CONCATENATED MODULE: ./plugins/vuescroll.ts


external_vue_default.a.use(external_vuescroll_default.a, {
  ops: {
    scrollPanel: {
      easing: 'easeInQuad',
      scrollingX: false
    },
    rail: {
      background: '#00000044',
      opacity: 1,
      size: '8px',
      specifyBorderRadius: false,
      gutterOfEnds: '16px',
      gutterOfSide: '4px'
    },
    bar: {
      keepShow: true,
      background: '#00000044',
      minSize: 0.2,
      size: '8px'
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/index.js











/* Plugins */

 // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')

 // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')

 // Source: .\\apollo-module.js (mode: 'all')

 // Source: .\\nuxt-svg-sprite.js (mode: 'all')

 // Source: .\\router.js (mode: 'all')

 // Source: ..\\plugins\\nuxt-client-init.client.ts (mode: 'client')

 // Source: ..\\plugins\\vuescroll.ts (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await router_createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  const registerModule = store.registerModule;

  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({
    preserveState: false
  }, options)); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.


  const app = {
    head: {
      "title": "@staypony\u002Ftalker",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "Chatting platform by StayPony Team"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap\" rel=\"stylesheet"
      }],
      "htmlAttrs": {
        "class": ["page page_theme_dark"]
      },
      "bodyAttrs": {
        "class": ["page__body grid grid_type_default"]
      },
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof plugin_routing === 'function') {
    await plugin_routing(app.context, inject);
  }

  if (typeof plugin_main === 'function') {
    await plugin_main(app.context, inject);
  }

  if (typeof apollo_module === 'function') {
    await apollo_module(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt-svg-sprite.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/nuxt-svg-sprite.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/router.js" (known exports: createRouter, known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/router.js" (known exports: createRouter, known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (typeof /* Cannot get final name for export "default" in "./plugins/vuescroll.ts" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vuescroll.ts" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = ["authenticated", "nuxti18n"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map