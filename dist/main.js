/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url["default"] : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Sacramento-qmPd.ttf */ "./src/scss/font/Sacramento-qmPd.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/NotoEmoji-VariableFont_wght.ttf */ "./src/scss/font/NotoEmoji-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nul, ul li, a, h3, p {\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n}\n\n/*\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}*/\ninput,\ntextarea,\nselect,\nbutton {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"Sacramento\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-style: normal;\n  font-weight: normal;\n}\n@font-face {\n  font-family: \"NotoColorEmoji\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n}\nimg {\n  width: 100%;\n  height: 100%;\n}\n\n.icon {\n  font-family: \"NotoColorEmoji\";\n  color: black;\n}\n\nbody {\n  background-color: #f8f6f0;\n  font-size: 16px;\n  font-family: \"Sacramento\", Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\na {\n  color: black;\n}\n\nheader {\n  font-size: 1.7rem;\n  font-weight: 600;\n  border: 1px solid #000;\n}\nheader nav {\n  padding: 1em 0;\n}\nheader nav .img-wraper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n}\nheader nav img {\n  width: 80%;\n  height: 80%;\n}\n\nnav ul {\n  border: 1px solid #000;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\nnav ul a {\n  position: relative;\n}\nnav ul a::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  border-bottom: 1px solid #000;\n  transform: scaleX(0);\n}\nnav ul a:hover::after {\n  transition: 150ms;\n  transform: scale(100%);\n}\n\n/* Main section */\nfooter, .about, .location-picker, .hero {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  grid-template-rows: none;\n  align-items: center;\n  justify-items: center;\n}\n\nbutton {\n  border: none;\n  border-radius: 30px;\n}\n\n/** Hero **/\n.hero {\n  border: 1px solid #000;\n  font-size: 2rem;\n  line-height: 1.25;\n  word-spacing: 2px;\n  /*\n  .rainbow {\n     background: -webkit-linear-gradient(\n          45deg,\n          rgba(255, 0, 0, 1) 0%,\n          rgba(255, 154, 0, 1) 10%,\n          rgba(208, 222, 33, 1) 20%,\n          rgba(79, 220, 74, 1) 30%,\n          rgba(63, 218, 216, 1) 40%,\n          rgba(47, 201, 226, 1) 50%,\n          rgba(28, 127, 238, 1) 60%,\n          rgba(95, 21, 242, 1) 70%,\n          rgba(186, 12, 248, 1) 80%,\n          rgba(251, 7, 217, 1) 90%,\n          rgba(255, 0, 0, 1) 100%\n      );\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n  }\n  */\n}\n.hero .hero-deal {\n  border: 1px solid #000;\n  padding: 40px;\n}\n.hero .hero-deal h2 {\n  font-weight: 700;\n}\n.hero .hero-deal button {\n  margin-top: 20px;\n  padding: 0.5em 2em;\n  border-radius: 30px;\n  border: none;\n}\n.hero .hero-img {\n  border: 1px solid #000;\n}\n/** Recommend **/\n.recommend {\n  border: 1px solid #000;\n  padding: 5em 1em;\n}\n.recommend-title {\n  font-style: italic;\n  text-align: center;\n  padding: 1em;\n}\n.recommend-title h3 {\n  font-size: 1.8rem;\n  text-decoration: underline;\n}\n.recommend-title p {\n  font-size: 1.5rem;\n  margin-top: 10px;\n}\n.recommend-item-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-template-rows: none;\n  gap: 20px;\n  border: 1px solid #000;\n  max-width: 700px;\n  margin: 0 auto;\n}\n.recommend-item a {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: normal;\n  align-items: center;\n  border: 1px solid #000;\n}\n.recommend-item a button {\n  width: 50%;\n  padding: 0.5em 1em;\n}\n.recommend-item p {\n  text-align: center;\n}\n.recommend-menu {\n  font-style: italic;\n  text-align: center;\n  padding: 1em;\n}\n.recommend-menu h4 {\n  font-size: 1.8rem;\n  text-decoration: underline;\n}\n.recommend-menu button {\n  font-size: 1.5rem;\n  padding: 0.5em 2em;\n  margin-top: 10px;\n}\n\n/** Location picker **/\n.location-picker {\n  border: 1px solid #000;\n}\n.location-picker-tidesc {\n  border: 1px solid #000;\n  padding: 1em;\n}\n.location-picker p, .location-picker button {\n  font-size: 1.5rem;\n  line-height: 1.25;\n  word-spacing: 2px;\n}\n.location-picker button {\n  margin-top: 20px;\n  padding: 0.2em 1em;\n  border-radius: 30px;\n  border: none;\n}\n\n/** About **/\n.about {\n  border: 1px solid #000;\n}\n.about-tidesc {\n  border: 1px solid #000;\n  padding: 2em;\n}\n.about p, .about button {\n  font-size: 1.5rem;\n  line-height: 1.25;\n  word-spacing: 2px;\n}\n.about button {\n  margin-top: 20px;\n  padding: 0.2em 1em;\n  border: none;\n  border-radius: 30px;\n}\n\nfooter {\n  border: 1px solid #000;\n  padding: 5em 1em;\n}\nfooter .footer-left-side .img-wraper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n}\nfooter .footer-left-side img {\n  width: 80%;\n  height: 80%;\n}\nfooter .footer-right-side ul {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: normal;\n  gap: 20px;\n}", "",{"version":3,"sources":["webpack://./src/scss/starter/_normalizeReset.scss","webpack://./src/scss/style.scss","webpack://./src/scss/starter/_starter.scss","webpack://./src/scss/_base.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","@import './starter/starter';\n@import 'base';\n\n//Body\nbody {\n    background-color: $main-color-pearl-white;\n    font-size: $font-size;\n\n    font-family: 'Sacramento', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    //font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n//Links text color\na {\n    color: black;\n}\n\n//Header\nheader {\n    font-size: 1.7rem;\n    font-weight: 600;\n    border: 1px solid #000;\n    nav {\n        padding: 1em 0;\n        \n        .img-wraper{\n            @include flex($justify: center, $align: center);\n        }\n        img {\n            width: 80%;\n            height: 80%;\n        }\n    }\n}\n\nnav ul {\n    border: 1px solid #000;\n    @include flex($justify: center, $align: center, $wrap: wrap);\n    gap: 20px;\n\n    a {\n        position: relative;\n    }\n\n    //The underline effect\n    a::after {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n\n        width: 100%;\n        border-bottom: 1px solid #000;\n        transform: scaleX(0);\n    }\n\n    //Hovering effect\n    a:hover::after {\n        transition: 150ms;\n        transform: scale(100%);\n    }\n}\n\n/* Main section */\n%split-5050-JusAligItemsCenter {\n    @include grid($column: repeat(auto-fit, minmax(320px, 1fr)));\n    align-items: center;\n    justify-items: center;\n}\n\n$button-border-radius: 30px;\nbutton {\n    border: none;\n    border-radius: $button-border-radius;\n}\n\n/** Hero **/\n.hero {\n    @extend %split-5050-JusAligItemsCenter;\n   border: 1px solid #000;\n\n    //background-color: #e5e5f7;\n    //opacity: 0.8;\n    //background: repeating-linear-gradient( -45deg, #E55982, #E55982 5px, #e5e5f7 5px, #e5e5f7 25px );\n    //color: $font-color-light;\n    //padding: 2em 3em;\n\n    font-size: 2rem;\n    line-height: 1.25;\n    word-spacing: 2px;\n    //text-shadow: 1px 3px 3px rgba(0, 0, 0, 0.3);\n    .hero-deal {\n        border: 1px solid #000;\n        h2 {\n            font-weight: 700;\n        }\n        button {\n            margin-top: 20px;\n            padding: .5em 2em;\n            border-radius: $button-border-radius;\n            border: none;\n            //color: $font-color-dark;\n            //box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.1);\n        }\n        //background-color: lighten($main-hero-background,5%);\n        padding: 40px;\n    }\n\n    .hero-img {\n        border: 1px solid #000;\n        .img-wraper {\n            //width: fit-content;\n        }\n    }\n\n    //The deal\n    .strawberry {\n    }\n\n    /*\n    .rainbow {\n       background: -webkit-linear-gradient(\n            45deg,\n            rgba(255, 0, 0, 1) 0%,\n            rgba(255, 154, 0, 1) 10%,\n            rgba(208, 222, 33, 1) 20%,\n            rgba(79, 220, 74, 1) 30%,\n            rgba(63, 218, 216, 1) 40%,\n            rgba(47, 201, 226, 1) 50%,\n            rgba(28, 127, 238, 1) 60%,\n            rgba(95, 21, 242, 1) 70%,\n            rgba(186, 12, 248, 1) 80%,\n            rgba(251, 7, 217, 1) 90%,\n            rgba(255, 0, 0, 1) 100%\n        );\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n    }\n    */\n}\n\n/** Recommend **/\n.recommend {\n    //background-color: lighten($color-blue,10%);\n    border: 1px solid #000;\n    padding: 5em 1em;\n    &-title{\n        font-style: italic;\n        text-align: center;\n        padding: 1em;\n\n        h3 {\n            font-size: 1.8rem;\n            text-decoration: underline;\n        }\n        p {\n            font-size: 1.5rem;\n            margin-top: 10px;\n        }\n    }\n    //==========\n    &-item-list{\n        @include grid($column: repeat(auto-fill, minmax(200px,1fr))); \n        gap: 20px;\n        border: 1px solid #000;\n        max-width: 700px;\n        margin: 0 auto;\n    }\n\n    &-item {\n        a {\n            @include flex($direction: column, $align: center);\n            border: 1px solid #000;\n            button {\n\n                width: 50%;\n                padding: 0.5em 1em;\n            }\n        }\n\n        p {\n            text-align: center;\n        }\n    }\n    //==========\n    &-menu {\n        font-style: italic;\n        text-align: center;\n        padding: 1em;\n\n        h4 {\n            font-size: 1.8rem;\n            text-decoration: underline;\n        }\n        button {\n            font-size: 1.5rem;\n            padding: 0.5em 2em;\n            margin-top: 10px;\n        }\n \n    }\n}\n\n\n/** Location picker **/\n.location-picker{\n    @extend %split-5050-JusAligItemsCenter;\n    //Overide column\n    //grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    border: 1px solid #000;\n    p, button, img {\n    }\n    &-tidesc{\n        border: 1px solid #000;\n        padding: 1em;\n    }\n    p, button{\n        font-size: 1.5rem;\n        line-height: 1.25;\n        word-spacing: 2px;\n    }\n    button {\n        margin-top: 20px;\n        padding: 0.2em 1em;\n        border-radius: $button-border-radius;\n        border: none;\n    }\n}\n\n/** About **/\n.about {\n    @extend %split-5050-JusAligItemsCenter;\n    //Overide column\n    //grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    border: 1px solid #000;\n    &-tidesc{\n        border: 1px solid #000;\n        padding: 2em;\n    }\n    p, button{\n        font-size: 1.5rem;\n        line-height: 1.25;\n        word-spacing: 2px;\n    }\n    button {\n        margin-top: 20px;\n        padding: 0.2em 1em;\n        border: none;\n        border-radius: $button-border-radius;\n    }\n}\n\n//Footer\nfooter {\n    @extend %split-5050-JusAligItemsCenter;\n    border: 1px solid #000;\n    padding: 5em 1em;\n    .footer {\n        &-left-side{\n            .img-wraper{\n                @include flex($justify: center, $align: center);\n            }\n            img {\n                width: 80%;\n                height: 80%;\n            }\n        }\n        &-right-side{\n            ul {\n                @include flex($justify: center, $wrap: wrap);\n                gap: 20px;\n            }\n        }\n    }\n}","//Your preferece to use any of these two reset file\n//@import '_meyerReset' \n@import '_normalizeReset';\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n%reset-margin-padding {\n    margin: 0;\n    padding: 0;\n}\n\n//This should makes the most sense\n//Default value for this is \n//left to right, 1440px, auto, 0 auto\n//But I found out that it's needed to explicitly declare the value or else it will apply things\n@mixin content-wraper($max-width: none, $min-width: auto, $max-height: none, $min-height: auto) {\n    max-width: $max-width;\n    min-width: $min-width;\n    max-height: $max-height;\n    min-height: $min-height;\n}\n\n//General mixins\n@mixin flex($display: flex, $direction: row, $wrap: nowrap, $justify: normal, $align: normal) {\n    display: $display;\n    flex-direction: $direction;\n    flex-wrap: $wrap;\n    justify-content: $justify;\n    align-items: $align;\n}\n\n@mixin grid($display: grid, $column: none, $row: none) {\n    display: $display;\n    grid-template-columns: $column;\n    grid-template-rows: $row;\n}\n\n//Use for grid template areas, use map to map section to area\n//Search for interpolation in sass if you forget how this\n//work, this accepts a map.\n//This down here is an example of ussage.\n//General layout\n//body {\n//    @include grid($column: 1fr 2fr);\n//    @include defineGridArea(\n//        (\n//            'aside': aside,\n//            'main': main\n//        )\n//    );\n//    grid-template-areas: \n//        'aside main'\n//    ;\n//}\n@mixin defineGridArea($areas){\n    @each $area, $name in $areas{\n        #{$area} {\n            grid-area: $name;\n        }\n    }\n}\n\n//Typography mixin for goggle\n@mixin google-font($font){\n    @import url('https://fonts.googleapis.com/css?family=#{$font}');\n}\n\n//Or use this to host your own font\n//Example\n//@font-face{\n//    font-family: westmeath;\n//    src: url('./font/Westmeath.ttf')\n//}\n//\n//@font-face{\n//    font-family: westmeath;\n//    src: url('./font/Westmeath\\ Italic.ttf');\n//    font-style: italic;\n//}\n\n\n\n//Font awesome icon since it's ussage is very easy, but\n//it require a cdn, you can take time to set it up\n//or use cdnjs, paste this to head of html file then use as normal\n// link rel css here -> https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\n\n//Fall back fonts, Usually roboto and sans serif, techy stuff, it's good I think\n$font-fallback: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\nbody {\n    @debug \"Default body content wraper to @include content-wraper(1440px, auto, 0 auto)\";\n    //@include content-wraper(1440px, auto, 0 auto);\n}\n\nul {\n   list-style-type: none;\n}\n\n//Damn underline, go fuck yourself\na {\n    text-decoration: none;\n}\n\n//Forms and their widgets \n//----------------------\n//Font style that should be the same everywhere \n//But this should be in the normalize CSS reset file\n/*\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}*/\n\n//For consistent in any border,padding n shits \n//Didn't see it in the normalize reset CSS\ninput,\ntextarea,\nselect,\nbutton {\n  //It depends here\n  //width: 150px;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n","//Font\n$font-size: 16px; //Either this or use rem\n\n//Define sacramento\n@font-face {\n    font-family: 'Sacramento';\n    src: url('./font/Sacramento-qmPd.ttf') format('truetype');\n    font-style: normal;\n    font-weight: normal;\n}\n\n//Noti emoji font\n@font-face {\n    font-family: 'NotoColorEmoji';\n    src: url('./font/NotoEmoji-VariableFont_wght.ttf') format('truetype');\n}\n\n$font-family-sacramento: 'Sacramento';\n\n//Color scheme\n$font-color-light: #F0F8FB;\n$font-color-dark: #4E4B51;\n\n$main-hero-background: #E55982;\n$color-blue: #8bb1dc;\n$color-grey: #776d6d;\n$color-purple: #47388e;\n$color-brown: #EFD2A8;\n\n$main-color-white: white;\n$main-color-pearl-white: #f8f6f0;\n$main-background-pink: pink;\n\n$secondary-color-black: black;\n\n//General resets\nul, ul li, a, h3, p{\n    @extend %reset-margin-padding;\n}\n\n//Images \nimg {\n    width: 100%;\n    height: 100%;\n}\n\n//Icon\n.icon {\n    font-family: 'NotoColorEmoji';\n    color: black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pug/index.pug":
/*!***************************!*\
  !*** ./src/pug/index.pug ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (htmlWebpackPlugin) {var pug_indent = [];
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"en\"\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"UTF-8\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\n    \u003Ctitle\u003E " + (pug.escape(null == (pug_interp = htmlWebpackPlugin.options.title) ? "" : pug_interp)) + "\n    \u003C\u002Ftitle\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody\u003E\n    \u003Cdiv id=\"content\"\u003E\n      \u003Cheader\u003E\n        \u003Cnav\u003E\n          \u003Cul\u003E\n            \u003C!--This can be a button, this home here--\u003E\n            \u003Cli\u003E \u003Ca href=\"#\"\u003EMenu\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli\u003E\u003Ca href=\"#\"\u003ELocation\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli\u003E \u003Ca href=\"index.html\"\u003E\n                \u003Cdiv class=\"img-wraper\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png"), true, true)+" alt=\"Logo of Kaf'n'Dunk donut and coffee shop\" srcset=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli\u003E\u003Ca href=\"#\"\u003EMembership\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli\u003E\u003Ca href=\"about.html\"\u003EAbout\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n          \u003C\u002Ful\u003E\n        \u003C\u002Fnav\u003E\n      \u003C\u002Fheader\u003E\n      \u003Cmain\u003E\n        \u003C!--Main menu goes here--\u003E\n        \u003C!--Special deal\u002F combo section hero--\u003E\n        \u003Csection class=\"hero\"\u003E\n          \u003Cdiv class=\"hero-deal\"\u003E\n            \u003Ch2\u003ESpecial Friday night deal\u003C\u002Fh2\u003E\n            \u003Cp\u003E\n                \u003Cem\u003E\"This\"\u003C\u002Fem\u003E\u003Cspan class=\"icon\"\u003E👏\u003C\u002Fspan\u003E is what makes life go \"Round\"! Get the limited \n               \u003Cspan class=\"strawberry\"\u003EStrawberry\u003Cspan class=\"icon\"\u003E🍓\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\n               \u003Cspan class=\"rainbow\"\u003Erainbow\u003Cspan class=\"icon\"\u003E🌈\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E \n               \u003Cspan class=\"sprinkles\"\u003Esprinkles\u003C\u002Fspan\u003E \n               d\u003Cspan class=\"icon\"\u003E🍩\u003C\u002Fspan\u003Enut.\n            \u003C\u002Fp\u003E\n            \u003Cp\u003ETaste the finest donut today !\u003C\u002Fp\u003E\n            \u003Cbutton\u003EMe want !\u003C\u002Fbutton\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"hero-img\"\u003E\n            \u003Cdiv class=\"img-wraper\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/pink_donut.png */ "./src/img/pink_donut.png"), true, true)+" alt=\"\" srcset=\"\"") + "\u003E\u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fsection\u003E\n        \u003C!--Recommend section--\u003E\n        \u003Csection class=\"recommend\"\u003E\n          \u003Cdiv class=\"recommend-title\"\u003E\n            \u003Ch3\u003EOur recommendation for the day\u003C\u002Fh3\u003E\n            \u003Cp\u003EFreshly made and \u003Cspan style=\"text-decoration: underline;\"\u003Eready just for you\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cul class=\"recommend-item-list\"\u003E\n            \u003Cli class=\"recommend-item\"\u003E \u003Ca href=\"\"\u003EItem 1\n                \u003Cdiv class=\"img-wraper\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/pink_donut.png */ "./src/img/pink_donut.png"), true, true)+" alt=\"\" srcset=\"\"") + "\u003E\u003C\u002Fdiv\u003E\n                \u003Cp\u003EPink donut\u003C\u002Fp\u003E\n                \u003Cbutton\u003EPick me!\u003C\u002Fbutton\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli class=\"recommend-item\"\u003E \u003Ca href=\"\"\u003EItem 2\n                \u003Cdiv class=\"img-wraper\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/pink_donut.png */ "./src/img/pink_donut.png"), true, true)+" alt=\"\" srcset=\"\"") + "\u003E\u003C\u002Fdiv\u003E\n                \u003Cp\u003EPink donut\u003C\u002Fp\u003E\n                \u003Cbutton\u003EPick me!\u003C\u002Fbutton\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli class=\"recommend-item\"\u003E \u003Ca href=\"\"\u003EItem 3\n                \u003Cdiv class=\"img-wraper\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/pink_donut.png */ "./src/img/pink_donut.png"), true, true)+" alt=\"\" srcset=\"\"") + "\u003E\u003C\u002Fdiv\u003E\n                \u003Cp\u003EPink donut\u003C\u002Fp\u003E\n                \u003Cbutton\u003EPick me!\u003C\u002Fbutton\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli class=\"recommend-item\"\u003E \u003Ca href=\"\"\u003EItem 4\n                \u003Cdiv class=\"img-wraper\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/pink_donut.png */ "./src/img/pink_donut.png"), true, true)+" alt=\"\" srcset=\"\"") + "\u003E\u003C\u002Fdiv\u003E\n                \u003Cp\u003EPink donut\u003C\u002Fp\u003E\n                \u003Cbutton\u003EPick me!\u003C\u002Fbutton\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli class=\"recommend-item\"\u003E \u003Ca href=\"\"\u003EItem 5\n                \u003Cdiv class=\"img-wraper\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/pink_donut.png */ "./src/img/pink_donut.png"), true, true)+" alt=\"\" srcset=\"\"") + "\u003E\u003C\u002Fdiv\u003E\n                \u003Cp\u003EPink donut\u003C\u002Fp\u003E\n                \u003Cbutton\u003EPick me!\u003C\u002Fbutton\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli class=\"recommend-item\"\u003E \u003Ca href=\"\"\u003EItem 6\n                \u003Cdiv class=\"img-wraper\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/pink_donut.png */ "./src/img/pink_donut.png"), true, true)+" alt=\"\" srcset=\"\"") + "\u003E\u003C\u002Fdiv\u003E\n                \u003Cp\u003EPink donut\u003C\u002Fp\u003E\n                \u003Cbutton\u003EPick me!\u003C\u002Fbutton\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n          \u003C\u002Ful\u003E\n          \u003Cdiv class=\"recommend-menu\"\u003E\n            \u003Ch4\u003E Or choose from our menu\u003C\u002Fh4\u003E\n            \u003Cbutton\u003EMenu\u003C\u002Fbutton\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fsection\u003E\n        \u003C!--Location picker--\u003E\n        \u003Csection class=\"location-picker\"\u003E\n          \u003C!--Title and description--\u003E\n          \u003Cdiv class=\"location-picker-tidesc\"\u003E \n            \u003Cp\u003EOrder here or eat at your local Kaf'n'dunk\u003C\u002Fp\u003E\n            \u003CButton\u003EDirection to nearest Kaf'n'dunk\u003C\u002FButton\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"location-picker-img\"\u003E\n            \u003Cdiv class=\"img-wraper\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/donut_shop.jpg */ "./src/img/donut_shop.jpg"), true, true)+" alt=\"\" srcset=\"\"") + "\u003E\u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fsection\u003E\n        \u003C!--About us core values--\u003E\n        \u003Csection class=\"about\"\u003E\n          \u003Cdiv class=\"about-img\"\u003E\n            \u003Cdiv class=\"img-wraper\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/donut_about.jpg */ "./src/img/donut_about.jpg"), true, true)+" alt=\"\" srcset=\"\"") + "\u003E\u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003C!--Title and description--\u003E\n          \u003Cdiv class=\"about-tidesc\"\u003E\n            \u003Cp\u003E\n                We put our customers needs priority on top of everything we do everyday,\n               we are create magical donuts everyday especially for you. Click to learn\n               more about our magic and what we can offers you.\n            \u003C\u002Fp\u003E\n            \u003Cbutton\u003EFind out more\u003C\u002Fbutton\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fsection\u003E\n      \u003C\u002Fmain\u003E\n      \u003Cfooter\u003E\n        \u003C!--Logo and social medias--\u003E\n        \u003Cdiv class=\"footer-left-side\"\u003E\n          \u003Cdiv class=\"img-wraper\"\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png"), true, true)+" alt=\"\" srcset=\"\"") + "\u003E\u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n        \u003C!--right side navgation menu--\u003E\n        \u003Cdiv class=\"footer-right-side\"\u003E\n          \u003Cul\u003E\n            \u003Cli\u003E \u003Ca href=\"index.html\"\u003EHome \u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli\u003E \u003Ca href=\"#\"\u003EMenu\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli\u003E\u003Ca href=\"#\"\u003ELocation\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli\u003E\u003Ca href=\"#\"\u003EMembership\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli\u003E\u003Ca href=\"about.html\"\u003EAbout\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli\u003E \u003Ca href=\"#\"\u003EEmployment\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n            \u003Cli\u003E \u003Ca href=\"#\"\u003EContact\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n          \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Ffooter\u003E\n      \u003Cdiv style=\"text-align: center;\"\u003ECreated by Tomifuchi\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";}.call(this,"htmlWebpackPlugin" in locals_for_with?locals_for_with.htmlWebpackPlugin:typeof htmlWebpackPlugin!=="undefined"?htmlWebpackPlugin:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/donut_about.jpg":
/*!*********************************!*\
  !*** ./src/img/donut_about.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ed528a7bd96c1cf62017.jpg";

/***/ }),

/***/ "./src/img/donut_shop.jpg":
/*!********************************!*\
  !*** ./src/img/donut_shop.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "998cf659055b112397b5.jpg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d2a55033702a116d426d.png";

/***/ }),

/***/ "./src/img/pink_donut.png":
/*!********************************!*\
  !*** ./src/img/pink_donut.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "271ba48d127c0ecb4a2e.png";

/***/ }),

/***/ "./src/scss/font/NotoEmoji-VariableFont_wght.ttf":
/*!*******************************************************!*\
  !*** ./src/scss/font/NotoEmoji-VariableFont_wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0065ce9f4db9c1e5b7f1.ttf";

/***/ }),

/***/ "./src/scss/font/Sacramento-qmPd.ttf":
/*!*******************************************!*\
  !*** ./src/scss/font/Sacramento-qmPd.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e8c87b94a9bae9bc1366.ttf";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _pug_index_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pug/index.pug */ "./src/pug/index.pug");
/* harmony import */ var _pug_index_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pug_index_pug__WEBPACK_IMPORTED_MODULE_1__);


console.log("hello");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLE1BQU0sTUFBTSxPQUFPLEtBQUssU0FBUyxxQkFBcUIsb0JBQW9CLHFCQUFxQixvQkFBb0IsT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFVLFdBQVcsT0FBTyxRQUFRLEtBQUssS0FBSyxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssUUFBUSxXQUFXLE9BQU8sT0FBTyxLQUFLLFFBQVEsV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFFBQVEsV0FBVyxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsT0FBTyxVQUFVLEtBQUssS0FBSyxxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0Isb0JBQW9CLHFCQUFxQixPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sUUFBUSxLQUFLLE1BQU0scUJBQXFCLG9CQUFvQixPQUFPLE9BQU8sS0FBSyxNQUFNLFVBQVUsT0FBTyxRQUFRLEtBQUssS0FBSyxxQkFBcUIscUJBQXFCLE9BQU8sT0FBTyxLQUFLLEtBQUssV0FBVyxPQUFPLFFBQVEsS0FBSyxLQUFLLHFCQUFxQixvQkFBb0IsT0FBTyxNQUFNLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsT0FBTyxNQUFNLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLFlBQVksS0FBSyxRQUFRLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxhQUFhLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsYUFBYSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLFlBQVksS0FBSyxZQUFZLGNBQWMsY0FBYyxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxRQUFRLFdBQVcsS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLHdCQUF3QixLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxZQUFZLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksY0FBYyxjQUFjLFlBQVksV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksY0FBYyxjQUFjLGFBQWEsY0FBYyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sWUFBWSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsT0FBTyxXQUFXLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsWUFBWSxRQUFRLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxjQUFjLGVBQWUsT0FBTyxN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O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDRjtBQUUxQitCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3B1Zy9pbmRleC5wdWciLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS9pZ25vcmVkfC9ob21lL3BodWxvYy90b21pZnVjaGkvcmVwb3MvdGhlb2RpbnByb2plY3QtcmVzdGF1cmFudC1wYWdlL25vZGVfbW9kdWxlcy9wdWctcnVudGltZXxmcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvU2FjcmFtZW50by1xbVBkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udC9Ob3RvRW1vamktVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcblt0eXBlPWJ1dHRvbl0sXFxuW3R5cGU9cmVzZXRdLFxcblt0eXBlPXN1Ym1pdF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5bdHlwZT1jaGVja2JveF0sXFxuW3R5cGU9cmFkaW9dIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblt0eXBlPXNlYXJjaF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG51bCwgdWwgbGksIGEsIGgzLCBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59Ki9cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3QsXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2FjcmFtZW50b1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk5vdG9Db2xvckVtb2ppXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmljb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvQ29sb3JFbW9qaVxcXCI7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjZmMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2FjcmFtZW50b1xcXCIsIENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzZXJpZjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5oZWFkZXIgbmF2IHtcXG4gIHBhZGRpbmc6IDFlbSAwO1xcbn1cXG5oZWFkZXIgbmF2IC5pbWctd3JhcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmhlYWRlciBuYXYgaW1nIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxubmF2IHVsIGEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5uYXYgdWwgYTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxufVxcbm5hdiB1bCBhOmhvdmVyOjphZnRlciB7XFxuICB0cmFuc2l0aW9uOiAxNTBtcztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMTAwJSk7XFxufVxcblxcbi8qIE1haW4gc2VjdGlvbiAqL1xcbmZvb3RlciwgLmFib3V0LCAubG9jYXRpb24tcGlja2VyLCAuaGVybyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjBweCwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuXFxuLyoqIEhlcm8gKiovXFxuLmhlcm8ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgd29yZC1zcGFjaW5nOiAycHg7XFxuICAvKlxcbiAgLnJhaW5ib3cge1xcbiAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXFxuICAgICAgICAgIDQ1ZGVnLFxcbiAgICAgICAgICByZ2JhKDI1NSwgMCwgMCwgMSkgMCUsXFxuICAgICAgICAgIHJnYmEoMjU1LCAxNTQsIDAsIDEpIDEwJSxcXG4gICAgICAgICAgcmdiYSgyMDgsIDIyMiwgMzMsIDEpIDIwJSxcXG4gICAgICAgICAgcmdiYSg3OSwgMjIwLCA3NCwgMSkgMzAlLFxcbiAgICAgICAgICByZ2JhKDYzLCAyMTgsIDIxNiwgMSkgNDAlLFxcbiAgICAgICAgICByZ2JhKDQ3LCAyMDEsIDIyNiwgMSkgNTAlLFxcbiAgICAgICAgICByZ2JhKDI4LCAxMjcsIDIzOCwgMSkgNjAlLFxcbiAgICAgICAgICByZ2JhKDk1LCAyMSwgMjQyLCAxKSA3MCUsXFxuICAgICAgICAgIHJnYmEoMTg2LCAxMiwgMjQ4LCAxKSA4MCUsXFxuICAgICAgICAgIHJnYmEoMjUxLCA3LCAyMTcsIDEpIDkwJSxcXG4gICAgICAgICAgcmdiYSgyNTUsIDAsIDAsIDEpIDEwMCVcXG4gICAgICApO1xcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gICovXFxufVxcbi5oZXJvIC5oZXJvLWRlYWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcbi5oZXJvIC5oZXJvLWRlYWwgaDIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmhlcm8gLmhlcm8tZGVhbCBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5oZXJvIC5oZXJvLWltZyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG4vKiogUmVjb21tZW5kICoqL1xcbi5yZWNvbW1lbmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIHBhZGRpbmc6IDVlbSAxZW07XFxufVxcbi5yZWNvbW1lbmQtdGl0bGUge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG4ucmVjb21tZW5kLXRpdGxlIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5yZWNvbW1lbmQtdGl0bGUgcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5yZWNvbW1lbmQtaXRlbS1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmU7XFxuICBnYXA6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4ucmVjb21tZW5kLWl0ZW0gYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuLnJlY29tbWVuZC1pdGVtIGEgYnV0dG9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxufVxcbi5yZWNvbW1lbmQtaXRlbSBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnJlY29tbWVuZC1tZW51IHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuLnJlY29tbWVuZC1tZW51IGg0IHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5yZWNvbW1lbmQtbWVudSBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nOiAwLjVlbSAyZW07XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4vKiogTG9jYXRpb24gcGlja2VyICoqL1xcbi5sb2NhdGlvbi1waWNrZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuLmxvY2F0aW9uLXBpY2tlci10aWRlc2Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuLmxvY2F0aW9uLXBpY2tlciBwLCAubG9jYXRpb24tcGlja2VyIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgd29yZC1zcGFjaW5nOiAycHg7XFxufVxcbi5sb2NhdGlvbi1waWNrZXIgYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAwLjJlbSAxZW07XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiogQWJvdXQgKiovXFxuLmFib3V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxufVxcbi5hYm91dC10aWRlc2Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIHBhZGRpbmc6IDJlbTtcXG59XFxuLmFib3V0IHAsIC5hYm91dCBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIHdvcmQtc3BhY2luZzogMnB4O1xcbn1cXG4uYWJvdXQgYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAwLjJlbSAxZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIHBhZGRpbmc6IDVlbSAxZW07XFxufVxcbmZvb3RlciAuZm9vdGVyLWxlZnQtc2lkZSAuaW1nLXdyYXBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5mb290ZXIgLmZvb3Rlci1sZWZ0LXNpZGUgaW1nIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuZm9vdGVyIC5mb290ZXItcmlnaHQtc2lkZSB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IG5vcm1hbDtcXG4gIGdhcDogMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3RhcnRlci9fbm9ybWFsaXplUmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3RhcnRlci9fc3RhcnRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fYmFzZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUFBO0FBRUE7K0VBQUE7QUFHQTs7O0VBQUE7QUFLQTtFQUNFLGlCQUFBLEVBQUEsTUFBQTtFQUNBLDhCQUFBLEVBQUEsTUFBQTtBQ0ZGOztBREtBOytFQUFBO0FBR0E7O0VBQUE7QUFJQTtFQUNFLFNBQUE7QUNKRjs7QURPQTs7RUFBQTtBQUlBO0VBQ0UsY0FBQTtBQ0xGOztBRFFBOzs7RUFBQTtBQUtBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDTkY7O0FEU0E7K0VBQUE7QUFHQTs7O0VBQUE7QUFLQTtFQUNFLHVCQUFBLEVBQUEsTUFBQTtFQUNBLFNBQUEsRUFBQSxNQUFBO0VBQ0EsaUJBQUEsRUFBQSxNQUFBO0FDUkY7O0FEV0E7OztFQUFBO0FBS0E7RUFDRSxpQ0FBQSxFQUFBLE1BQUE7RUFDQSxjQUFBLEVBQUEsTUFBQTtBQ1RGOztBRFlBOytFQUFBO0FBR0E7O0VBQUE7QUFJQTtFQUNFLDZCQUFBO0FDWEY7O0FEY0E7OztFQUFBO0FBS0E7RUFDRSxtQkFBQSxFQUFBLE1BQUE7RUFDQSwwQkFBQSxFQUFBLE1BQUE7RUFDQSxpQ0FBQSxFQUFBLE1BQUE7QUNaRjs7QURlQTs7RUFBQTtBQUlBOztFQUVFLG1CQUFBO0FDYkY7O0FEZ0JBOzs7RUFB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SVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLFwiQGltcG9ydCAnLi9zdGFydGVyL3N0YXJ0ZXInO1xcbkBpbXBvcnQgJ2Jhc2UnO1xcblxcbi8vQm9keVxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvci1wZWFybC13aGl0ZTtcXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xcblxcbiAgICBmb250LWZhbWlseTogJ1NhY3JhbWVudG8nLCBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuICAgIC8vZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXG59XFxuXFxuLy9MaW5rcyB0ZXh0IGNvbG9yXFxuYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLy9IZWFkZXJcXG5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgbmF2IHtcXG4gICAgICAgIHBhZGRpbmc6IDFlbSAwO1xcbiAgICAgICAgXFxuICAgICAgICAuaW1nLXdyYXBlcntcXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyKTtcXG4gICAgICAgIH1cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICBAaW5jbHVkZSBmbGV4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkd3JhcDogd3JhcCk7XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgYSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLy9UaGUgdW5kZXJsaW5lIGVmZmVjdFxcbiAgICBhOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICByaWdodDogMDtcXG5cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgfVxcblxcbiAgICAvL0hvdmVyaW5nIGVmZmVjdFxcbiAgICBhOmhvdmVyOjphZnRlciB7XFxuICAgICAgICB0cmFuc2l0aW9uOiAxNTBtcztcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwJSk7XFxuICAgIH1cXG59XFxuXFxuLyogTWFpbiBzZWN0aW9uICovXFxuJXNwbGl0LTUwNTAtSnVzQWxpZ0l0ZW1zQ2VudGVyIHtcXG4gICAgQGluY2x1ZGUgZ3JpZCgkY29sdW1uOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjBweCwgMWZyKSkpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiRidXR0b24tYm9yZGVyLXJhZGl1czogMzBweDtcXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRidXR0b24tYm9yZGVyLXJhZGl1cztcXG59XFxuXFxuLyoqIEhlcm8gKiovXFxuLmhlcm8ge1xcbiAgICBAZXh0ZW5kICVzcGxpdC01MDUwLUp1c0FsaWdJdGVtc0NlbnRlcjtcXG4gICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcblxcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNlNWU1Zjc7XFxuICAgIC8vb3BhY2l0eTogMC44O1xcbiAgICAvL2JhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoIC00NWRlZywgI0U1NTk4MiwgI0U1NTk4MiA1cHgsICNlNWU1ZjcgNXB4LCAjZTVlNWY3IDI1cHggKTtcXG4gICAgLy9jb2xvcjogJGZvbnQtY29sb3ItbGlnaHQ7XFxuICAgIC8vcGFkZGluZzogMmVtIDNlbTtcXG5cXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcXG4gICAgd29yZC1zcGFjaW5nOiAycHg7XFxuICAgIC8vdGV4dC1zaGFkb3c6IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgLmhlcm8tZGVhbCB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICAgICAgaDIge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICB9XFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogLjVlbSAyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJ1dHRvbi1ib3JkZXItcmFkaXVzO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAvL2NvbG9yOiAkZm9udC1jb2xvci1kYXJrO1xcbiAgICAgICAgICAgIC8vYm94LXNoYWRvdzogMXB4IDFweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICAgIH1cXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkbWFpbi1oZXJvLWJhY2tncm91bmQsNSUpO1xcbiAgICAgICAgcGFkZGluZzogNDBweDtcXG4gICAgfVxcblxcbiAgICAuaGVyby1pbWcge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgICAgIC5pbWctd3JhcGVyIHtcXG4gICAgICAgICAgICAvL3dpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvL1RoZSBkZWFsXFxuICAgIC5zdHJhd2JlcnJ5IHtcXG4gICAgfVxcblxcbiAgICAvKlxcbiAgICAucmFpbmJvdyB7XFxuICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxcbiAgICAgICAgICAgIDQ1ZGVnLFxcbiAgICAgICAgICAgIHJnYmEoMjU1LCAwLCAwLCAxKSAwJSxcXG4gICAgICAgICAgICByZ2JhKDI1NSwgMTU0LCAwLCAxKSAxMCUsXFxuICAgICAgICAgICAgcmdiYSgyMDgsIDIyMiwgMzMsIDEpIDIwJSxcXG4gICAgICAgICAgICByZ2JhKDc5LCAyMjAsIDc0LCAxKSAzMCUsXFxuICAgICAgICAgICAgcmdiYSg2MywgMjE4LCAyMTYsIDEpIDQwJSxcXG4gICAgICAgICAgICByZ2JhKDQ3LCAyMDEsIDIyNiwgMSkgNTAlLFxcbiAgICAgICAgICAgIHJnYmEoMjgsIDEyNywgMjM4LCAxKSA2MCUsXFxuICAgICAgICAgICAgcmdiYSg5NSwgMjEsIDI0MiwgMSkgNzAlLFxcbiAgICAgICAgICAgIHJnYmEoMTg2LCAxMiwgMjQ4LCAxKSA4MCUsXFxuICAgICAgICAgICAgcmdiYSgyNTEsIDcsIDIxNywgMSkgOTAlLFxcbiAgICAgICAgICAgIHJnYmEoMjU1LCAwLCAwLCAxKSAxMDAlXFxuICAgICAgICApO1xcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG4gICAgKi9cXG59XFxuXFxuLyoqIFJlY29tbWVuZCAqKi9cXG4ucmVjb21tZW5kIHtcXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvci1ibHVlLDEwJSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgIHBhZGRpbmc6IDVlbSAxZW07XFxuICAgICYtdGl0bGV7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxuXFxuICAgICAgICBoMyB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgICB9XFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC8vPT09PT09PT09PVxcbiAgICAmLWl0ZW0tbGlzdHtcXG4gICAgICAgIEBpbmNsdWRlIGdyaWQoJGNvbHVtbjogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LDFmcikpKTsgXFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB9XFxuXFxuICAgICYtaXRlbSB7XFxuICAgICAgICBhIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4KCRkaXJlY3Rpb246IGNvbHVtbiwgJGFsaWduOiBjZW50ZXIpO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgICAgICAgICAgYnV0dG9uIHtcXG5cXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAvLz09PT09PT09PT1cXG4gICAgJi1tZW51IHtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXG5cXG4gICAgICAgIGg0IHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgIH1cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMmVtO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICB9XFxuIFxcbiAgICB9XFxufVxcblxcblxcbi8qKiBMb2NhdGlvbiBwaWNrZXIgKiovXFxuLmxvY2F0aW9uLXBpY2tlcntcXG4gICAgQGV4dGVuZCAlc3BsaXQtNTA1MC1KdXNBbGlnSXRlbXNDZW50ZXI7XFxuICAgIC8vT3ZlcmlkZSBjb2x1bW5cXG4gICAgLy9ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgcCwgYnV0dG9uLCBpbWcge1xcbiAgICB9XFxuICAgICYtdGlkZXNje1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgfVxcbiAgICBwLCBidXR0b257XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgICAgICAgd29yZC1zcGFjaW5nOiAycHg7XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwLjJlbSAxZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAkYnV0dG9uLWJvcmRlci1yYWRpdXM7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuLyoqIEFib3V0ICoqL1xcbi5hYm91dCB7XFxuICAgIEBleHRlbmQgJXNwbGl0LTUwNTAtSnVzQWxpZ0l0ZW1zQ2VudGVyO1xcbiAgICAvL092ZXJpZGUgY29sdW1uXFxuICAgIC8vZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAgICYtdGlkZXNje1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgfVxcbiAgICBwLCBidXR0b257XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgICAgICAgd29yZC1zcGFjaW5nOiAycHg7XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAwLjJlbSAxZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAkYnV0dG9uLWJvcmRlci1yYWRpdXM7XFxuICAgIH1cXG59XFxuXFxuLy9Gb290ZXJcXG5mb290ZXIge1xcbiAgICBAZXh0ZW5kICVzcGxpdC01MDUwLUp1c0FsaWdJdGVtc0NlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gICAgcGFkZGluZzogNWVtIDFlbTtcXG4gICAgLmZvb3RlciB7XFxuICAgICAgICAmLWxlZnQtc2lkZXtcXG4gICAgICAgICAgICAuaW1nLXdyYXBlcntcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlcik7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogODAlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgICYtcmlnaHQtc2lkZXtcXG4gICAgICAgICAgICB1bCB7XFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgoJGp1c3RpZnk6IGNlbnRlciwgJHdyYXA6IHdyYXApO1xcbiAgICAgICAgICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFwiLy9Zb3VyIHByZWZlcmVjZSB0byB1c2UgYW55IG9mIHRoZXNlIHR3byByZXNldCBmaWxlXFxuLy9AaW1wb3J0ICdfbWV5ZXJSZXNldCcgXFxuQGltcG9ydCAnX25vcm1hbGl6ZVJlc2V0JztcXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuJXJlc2V0LW1hcmdpbi1wYWRkaW5nIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vL1RoaXMgc2hvdWxkIG1ha2VzIHRoZSBtb3N0IHNlbnNlXFxuLy9EZWZhdWx0IHZhbHVlIGZvciB0aGlzIGlzIFxcbi8vbGVmdCB0byByaWdodCwgMTQ0MHB4LCBhdXRvLCAwIGF1dG9cXG4vL0J1dCBJIGZvdW5kIG91dCB0aGF0IGl0J3MgbmVlZGVkIHRvIGV4cGxpY2l0bHkgZGVjbGFyZSB0aGUgdmFsdWUgb3IgZWxzZSBpdCB3aWxsIGFwcGx5IHRoaW5nc1xcbkBtaXhpbiBjb250ZW50LXdyYXBlcigkbWF4LXdpZHRoOiBub25lLCAkbWluLXdpZHRoOiBhdXRvLCAkbWF4LWhlaWdodDogbm9uZSwgJG1pbi1oZWlnaHQ6IGF1dG8pIHtcXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xcbiAgICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XFxuICAgIG1heC1oZWlnaHQ6ICRtYXgtaGVpZ2h0O1xcbiAgICBtaW4taGVpZ2h0OiAkbWluLWhlaWdodDtcXG59XFxuXFxuLy9HZW5lcmFsIG1peGluc1xcbkBtaXhpbiBmbGV4KCRkaXNwbGF5OiBmbGV4LCAkZGlyZWN0aW9uOiByb3csICR3cmFwOiBub3dyYXAsICRqdXN0aWZ5OiBub3JtYWwsICRhbGlnbjogbm9ybWFsKSB7XFxuICAgIGRpc3BsYXk6ICRkaXNwbGF5O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcXG4gICAgZmxleC13cmFwOiAkd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcXG4gICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcXG59XFxuXFxuQG1peGluIGdyaWQoJGRpc3BsYXk6IGdyaWQsICRjb2x1bW46IG5vbmUsICRyb3c6IG5vbmUpIHtcXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAkcm93O1xcbn1cXG5cXG4vL1VzZSBmb3IgZ3JpZCB0ZW1wbGF0ZSBhcmVhcywgdXNlIG1hcCB0byBtYXAgc2VjdGlvbiB0byBhcmVhXFxuLy9TZWFyY2ggZm9yIGludGVycG9sYXRpb24gaW4gc2FzcyBpZiB5b3UgZm9yZ2V0IGhvdyB0aGlzXFxuLy93b3JrLCB0aGlzIGFjY2VwdHMgYSBtYXAuXFxuLy9UaGlzIGRvd24gaGVyZSBpcyBhbiBleGFtcGxlIG9mIHVzc2FnZS5cXG4vL0dlbmVyYWwgbGF5b3V0XFxuLy9ib2R5IHtcXG4vLyAgICBAaW5jbHVkZSBncmlkKCRjb2x1bW46IDFmciAyZnIpO1xcbi8vICAgIEBpbmNsdWRlIGRlZmluZUdyaWRBcmVhKFxcbi8vICAgICAgICAoXFxuLy8gICAgICAgICAgICAnYXNpZGUnOiBhc2lkZSxcXG4vLyAgICAgICAgICAgICdtYWluJzogbWFpblxcbi8vICAgICAgICApXFxuLy8gICAgKTtcXG4vLyAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4vLyAgICAgICAgJ2FzaWRlIG1haW4nXFxuLy8gICAgO1xcbi8vfVxcbkBtaXhpbiBkZWZpbmVHcmlkQXJlYSgkYXJlYXMpe1xcbiAgICBAZWFjaCAkYXJlYSwgJG5hbWUgaW4gJGFyZWFze1xcbiAgICAgICAgI3skYXJlYX0ge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogJG5hbWU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLy9UeXBvZ3JhcGh5IG1peGluIGZvciBnb2dnbGVcXG5AbWl4aW4gZ29vZ2xlLWZvbnQoJGZvbnQpe1xcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PSN7JGZvbnR9Jyk7XFxufVxcblxcbi8vT3IgdXNlIHRoaXMgdG8gaG9zdCB5b3VyIG93biBmb250XFxuLy9FeGFtcGxlXFxuLy9AZm9udC1mYWNle1xcbi8vICAgIGZvbnQtZmFtaWx5OiB3ZXN0bWVhdGg7XFxuLy8gICAgc3JjOiB1cmwoJy4vZm9udC9XZXN0bWVhdGgudHRmJylcXG4vL31cXG4vL1xcbi8vQGZvbnQtZmFjZXtcXG4vLyAgICBmb250LWZhbWlseTogd2VzdG1lYXRoO1xcbi8vICAgIHNyYzogdXJsKCcuL2ZvbnQvV2VzdG1lYXRoXFxcXCBJdGFsaWMudHRmJyk7XFxuLy8gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbi8vfVxcblxcblxcblxcbi8vRm9udCBhd2Vzb21lIGljb24gc2luY2UgaXQncyB1c3NhZ2UgaXMgdmVyeSBlYXN5LCBidXRcXG4vL2l0IHJlcXVpcmUgYSBjZG4sIHlvdSBjYW4gdGFrZSB0aW1lIHRvIHNldCBpdCB1cFxcbi8vb3IgdXNlIGNkbmpzLCBwYXN0ZSB0aGlzIHRvIGhlYWQgb2YgaHRtbCBmaWxlIHRoZW4gdXNlIGFzIG5vcm1hbFxcbi8vIGxpbmsgcmVsIGNzcyBoZXJlIC0+IGh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS82LjIuMC9jc3MvYWxsLm1pbi5jc3NcXG5cXG4vL0ZhbGwgYmFjayBmb250cywgVXN1YWxseSByb2JvdG8gYW5kIHNhbnMgc2VyaWYsIHRlY2h5IHN0dWZmLCBpdCdzIGdvb2QgSSB0aGlua1xcbiRmb250LWZhbGxiYWNrOiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG5cXG5ib2R5IHtcXG4gICAgQGRlYnVnIFxcXCJEZWZhdWx0IGJvZHkgY29udGVudCB3cmFwZXIgdG8gQGluY2x1ZGUgY29udGVudC13cmFwZXIoMTQ0MHB4LCBhdXRvLCAwIGF1dG8pXFxcIjtcXG4gICAgLy9AaW5jbHVkZSBjb250ZW50LXdyYXBlcigxNDQwcHgsIGF1dG8sIDAgYXV0byk7XFxufVxcblxcbnVsIHtcXG4gICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi8vRGFtbiB1bmRlcmxpbmUsIGdvIGZ1Y2sgeW91cnNlbGZcXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vL0Zvcm1zIGFuZCB0aGVpciB3aWRnZXRzIFxcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbi8vRm9udCBzdHlsZSB0aGF0IHNob3VsZCBiZSB0aGUgc2FtZSBldmVyeXdoZXJlIFxcbi8vQnV0IHRoaXMgc2hvdWxkIGJlIGluIHRoZSBub3JtYWxpemUgQ1NTIHJlc2V0IGZpbGVcXG4vKlxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEwMCU7XFxufSovXFxuXFxuLy9Gb3IgY29uc2lzdGVudCBpbiBhbnkgYm9yZGVyLHBhZGRpbmcgbiBzaGl0cyBcXG4vL0RpZG4ndCBzZWUgaXQgaW4gdGhlIG5vcm1hbGl6ZSByZXNldCBDU1NcXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3QsXFxuYnV0dG9uIHtcXG4gIC8vSXQgZGVwZW5kcyBoZXJlXFxuICAvL3dpZHRoOiAxNTBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cIixcIi8vRm9udFxcbiRmb250LXNpemU6IDE2cHg7IC8vRWl0aGVyIHRoaXMgb3IgdXNlIHJlbVxcblxcbi8vRGVmaW5lIHNhY3JhbWVudG9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTYWNyYW1lbnRvJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udC9TYWNyYW1lbnRvLXFtUGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi8vTm90aSBlbW9qaSBmb250XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90b0NvbG9yRW1vamknO1xcbiAgICBzcmM6IHVybCgnLi9mb250L05vdG9FbW9qaS1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbiRmb250LWZhbWlseS1zYWNyYW1lbnRvOiAnU2FjcmFtZW50byc7XFxuXFxuLy9Db2xvciBzY2hlbWVcXG4kZm9udC1jb2xvci1saWdodDogI0YwRjhGQjtcXG4kZm9udC1jb2xvci1kYXJrOiAjNEU0QjUxO1xcblxcbiRtYWluLWhlcm8tYmFja2dyb3VuZDogI0U1NTk4MjtcXG4kY29sb3ItYmx1ZTogIzhiYjFkYztcXG4kY29sb3ItZ3JleTogIzc3NmQ2ZDtcXG4kY29sb3ItcHVycGxlOiAjNDczODhlO1xcbiRjb2xvci1icm93bjogI0VGRDJBODtcXG5cXG4kbWFpbi1jb2xvci13aGl0ZTogd2hpdGU7XFxuJG1haW4tY29sb3ItcGVhcmwtd2hpdGU6ICNmOGY2ZjA7XFxuJG1haW4tYmFja2dyb3VuZC1waW5rOiBwaW5rO1xcblxcbiRzZWNvbmRhcnktY29sb3ItYmxhY2s6IGJsYWNrO1xcblxcbi8vR2VuZXJhbCByZXNldHNcXG51bCwgdWwgbGksIGEsIGgzLCBwe1xcbiAgICBAZXh0ZW5kICVyZXNldC1tYXJnaW4tcGFkZGluZztcXG59XFxuXFxuLy9JbWFnZXMgXFxuaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLy9JY29uXFxuLmljb24ge1xcbiAgICBmb250LWZhbWlseTogJ05vdG9Db2xvckVtb2ppJztcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGh0bWxXZWJwYWNrUGx1Z2luKSB7dmFyIHB1Z19pbmRlbnQgPSBbXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0MhRE9DVFlQRSBodG1sXFx1MDAzRVxcblxcdTAwM0NodG1sIGxhbmc9XFxcImVuXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NoZWFkXFx1MDAzRVxcbiAgICBcXHUwMDNDbWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ3RpdGxlXFx1MDAzRSBcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBodG1sV2VicGFja1BsdWdpbi5vcHRpb25zLnRpdGxlKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcbiAgICBcXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZoZWFkXFx1MDAzRVxcbiAgXFx1MDAzQ2JvZHlcXHUwMDNFXFxuICAgIFxcdTAwM0NkaXYgaWQ9XFxcImNvbnRlbnRcXFwiXFx1MDAzRVxcbiAgICAgIFxcdTAwM0NoZWFkZXJcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDbmF2XFx1MDAzRVxcbiAgICAgICAgICBcXHUwMDNDdWxcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQyEtLVRoaXMgY2FuIGJlIGEgYnV0dG9uLCB0aGlzIGhvbWUgaGVyZS0tXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NsaVxcdTAwM0UgXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFTWVudVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NsaVxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0VMb2NhdGlvblxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NsaVxcdTAwM0UgXFx1MDAzQ2EgaHJlZj1cXFwiaW5kZXguaHRtbFxcXCJcXHUwMDNFXFxuICAgICAgICAgICAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImltZy13cmFwZXJcXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKFwiLi4vaW1nL2xvZ28ucG5nXCIpLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIkxvZ28gb2YgS2FmJ24nRHVuayBkb251dCBhbmQgY29mZmVlIHNob3BcXFwiIHNyY3NldD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NsaVxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0VNZW1iZXJzaGlwXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2xpXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcImFib3V0Lmh0bWxcXFwiXFx1MDAzRUFib3V0XFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFxuICAgICAgICAgIFxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDXFx1MDAyRm5hdlxcdTAwM0VcXG4gICAgICBcXHUwMDNDXFx1MDAyRmhlYWRlclxcdTAwM0VcXG4gICAgICBcXHUwMDNDbWFpblxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0MhLS1NYWluIG1lbnUgZ29lcyBoZXJlLS1cXHUwMDNFXFxuICAgICAgICBcXHUwMDNDIS0tU3BlY2lhbCBkZWFsXFx1MDAyRiBjb21ibyBzZWN0aW9uIGhlcm8tLVxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJoZXJvXFxcIlxcdTAwM0VcXG4gICAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyby1kZWFsXFxcIlxcdTAwM0VcXG4gICAgICAgICAgICBcXHUwMDNDaDJcXHUwMDNFU3BlY2lhbCBGcmlkYXkgbmlnaHQgZGVhbFxcdTAwM0NcXHUwMDJGaDJcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ3BcXHUwMDNFXFxuICAgICAgICAgICAgICAgIFxcdTAwM0NlbVxcdTAwM0VcXFwiVGhpc1xcXCJcXHUwMDNDXFx1MDAyRmVtXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJpY29uXFxcIlxcdTAwM0Xwn5GPXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRSBpcyB3aGF0IG1ha2VzIGxpZmUgZ28gXFxcIlJvdW5kXFxcIiEgR2V0IHRoZSBsaW1pdGVkIFxcbiAgICAgICAgICAgICAgIFxcdTAwM0NzcGFuIGNsYXNzPVxcXCJzdHJhd2JlcnJ5XFxcIlxcdTAwM0VTdHJhd2JlcnJ5XFx1MDAzQ3NwYW4gY2xhc3M9XFxcImljb25cXFwiXFx1MDAzRfCfjZNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcbiAgICAgICAgICAgICAgIFxcdTAwM0NzcGFuIGNsYXNzPVxcXCJyYWluYm93XFxcIlxcdTAwM0VyYWluYm93XFx1MDAzQ3NwYW4gY2xhc3M9XFxcImljb25cXFwiXFx1MDAzRfCfjIhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRSBcXG4gICAgICAgICAgICAgICBcXHUwMDNDc3BhbiBjbGFzcz1cXFwic3ByaW5rbGVzXFxcIlxcdTAwM0VzcHJpbmtsZXNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFIFxcbiAgICAgICAgICAgICAgIGRcXHUwMDNDc3BhbiBjbGFzcz1cXFwiaWNvblxcXCJcXHUwMDNF8J+NqVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VudXQuXFxuICAgICAgICAgICAgXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NwXFx1MDAzRVRhc3RlIHRoZSBmaW5lc3QgZG9udXQgdG9kYXkgIVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXG4gICAgICAgICAgICBcXHUwMDNDYnV0dG9uXFx1MDAzRU1lIHdhbnQgIVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcbiAgICAgICAgICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyby1pbWdcXFwiXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImltZy13cmFwZXJcXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKFwiLi4vaW1nL3BpbmtfZG9udXQucG5nXCIpLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCIgc3Jjc2V0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ1xcdTAwMkZzZWN0aW9uXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQyEtLVJlY29tbWVuZCBzZWN0aW9uLS1cXHUwMDNFXFxuICAgICAgICBcXHUwMDNDc2VjdGlvbiBjbGFzcz1cXFwicmVjb21tZW5kXFxcIlxcdTAwM0VcXG4gICAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwicmVjb21tZW5kLXRpdGxlXFxcIlxcdTAwM0VcXG4gICAgICAgICAgICBcXHUwMDNDaDNcXHUwMDNFT3VyIHJlY29tbWVuZGF0aW9uIGZvciB0aGUgZGF5XFx1MDAzQ1xcdTAwMkZoM1xcdTAwM0VcXG4gICAgICAgICAgICBcXHUwMDNDcFxcdTAwM0VGcmVzaGx5IG1hZGUgYW5kIFxcdTAwM0NzcGFuIHN0eWxlPVxcXCJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXFwiXFx1MDAzRXJlYWR5IGp1c3QgZm9yIHlvdVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFxuICAgICAgICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgICAgICBcXHUwMDNDdWwgY2xhc3M9XFxcInJlY29tbWVuZC1pdGVtLWxpc3RcXFwiXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NsaSBjbGFzcz1cXFwicmVjb21tZW5kLWl0ZW1cXFwiXFx1MDAzRSBcXHUwMDNDYSBocmVmPVxcXCJcXFwiXFx1MDAzRUl0ZW0gMVxcbiAgICAgICAgICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJpbWctd3JhcGVyXFxcIlxcdTAwM0VcXHUwMDNDaW1nXCIgKyAocHVnLmF0dHIoXCJzcmNcIiwgcmVxdWlyZShcIi4uL2ltZy9waW5rX2RvbnV0LnBuZ1wiKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiIHNyY3NldD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgICAgICAgICAgICBcXHUwMDNDcFxcdTAwM0VQaW5rIGRvbnV0XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcbiAgICAgICAgICAgICAgICBcXHUwMDNDYnV0dG9uXFx1MDAzRVBpY2sgbWUhXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2xpIGNsYXNzPVxcXCJyZWNvbW1lbmQtaXRlbVxcXCJcXHUwMDNFIFxcdTAwM0NhIGhyZWY9XFxcIlxcXCJcXHUwMDNFSXRlbSAyXFxuICAgICAgICAgICAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImltZy13cmFwZXJcXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKFwiLi4vaW1nL3BpbmtfZG9udXQucG5nXCIpLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCIgc3Jjc2V0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgICAgICAgICAgIFxcdTAwM0NwXFx1MDAzRVBpbmsgZG9udXRcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFxuICAgICAgICAgICAgICAgIFxcdTAwM0NidXR0b25cXHUwMDNFUGljayBtZSFcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXG4gICAgICAgICAgICBcXHUwMDNDbGkgY2xhc3M9XFxcInJlY29tbWVuZC1pdGVtXFxcIlxcdTAwM0UgXFx1MDAzQ2EgaHJlZj1cXFwiXFxcIlxcdTAwM0VJdGVtIDNcXG4gICAgICAgICAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW1nLXdyYXBlclxcXCJcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoXCIuLi9pbWcvcGlua19kb251dC5wbmdcIiksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIiBzcmNzZXQ9XFxcIlxcXCJcIikgKyBcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICAgICAgICAgICAgXFx1MDAzQ3BcXHUwMDNFUGluayBkb251dFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXG4gICAgICAgICAgICAgICAgXFx1MDAzQ2J1dHRvblxcdTAwM0VQaWNrIG1lIVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NsaSBjbGFzcz1cXFwicmVjb21tZW5kLWl0ZW1cXFwiXFx1MDAzRSBcXHUwMDNDYSBocmVmPVxcXCJcXFwiXFx1MDAzRUl0ZW0gNFxcbiAgICAgICAgICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJpbWctd3JhcGVyXFxcIlxcdTAwM0VcXHUwMDNDaW1nXCIgKyAocHVnLmF0dHIoXCJzcmNcIiwgcmVxdWlyZShcIi4uL2ltZy9waW5rX2RvbnV0LnBuZ1wiKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiIHNyY3NldD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgICAgICAgICAgICBcXHUwMDNDcFxcdTAwM0VQaW5rIGRvbnV0XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcbiAgICAgICAgICAgICAgICBcXHUwMDNDYnV0dG9uXFx1MDAzRVBpY2sgbWUhXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2xpIGNsYXNzPVxcXCJyZWNvbW1lbmQtaXRlbVxcXCJcXHUwMDNFIFxcdTAwM0NhIGhyZWY9XFxcIlxcXCJcXHUwMDNFSXRlbSA1XFxuICAgICAgICAgICAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImltZy13cmFwZXJcXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKFwiLi4vaW1nL3BpbmtfZG9udXQucG5nXCIpLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCIgc3Jjc2V0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgICAgICAgICAgIFxcdTAwM0NwXFx1MDAzRVBpbmsgZG9udXRcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFxuICAgICAgICAgICAgICAgIFxcdTAwM0NidXR0b25cXHUwMDNFUGljayBtZSFcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXG4gICAgICAgICAgICBcXHUwMDNDbGkgY2xhc3M9XFxcInJlY29tbWVuZC1pdGVtXFxcIlxcdTAwM0UgXFx1MDAzQ2EgaHJlZj1cXFwiXFxcIlxcdTAwM0VJdGVtIDZcXG4gICAgICAgICAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaW1nLXdyYXBlclxcXCJcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoXCIuLi9pbWcvcGlua19kb251dC5wbmdcIiksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIiBzcmNzZXQ9XFxcIlxcXCJcIikgKyBcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICAgICAgICAgICAgXFx1MDAzQ3BcXHUwMDNFUGluayBkb251dFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXG4gICAgICAgICAgICAgICAgXFx1MDAzQ2J1dHRvblxcdTAwM0VQaWNrIG1lIVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcbiAgICAgICAgICBcXHUwMDNDXFx1MDAyRnVsXFx1MDAzRVxcbiAgICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJyZWNvbW1lbmQtbWVudVxcXCJcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2g0XFx1MDAzRSBPciBjaG9vc2UgZnJvbSBvdXIgbWVudVxcdTAwM0NcXHUwMDJGaDRcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2J1dHRvblxcdTAwM0VNZW51XFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXFxuICAgICAgICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ1xcdTAwMkZzZWN0aW9uXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQyEtLUxvY2F0aW9uIHBpY2tlci0tXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ3NlY3Rpb24gY2xhc3M9XFxcImxvY2F0aW9uLXBpY2tlclxcXCJcXHUwMDNFXFxuICAgICAgICAgIFxcdTAwM0MhLS1UaXRsZSBhbmQgZGVzY3JpcHRpb24tLVxcdTAwM0VcXG4gICAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibG9jYXRpb24tcGlja2VyLXRpZGVzY1xcXCJcXHUwMDNFIFxcbiAgICAgICAgICAgIFxcdTAwM0NwXFx1MDAzRU9yZGVyIGhlcmUgb3IgZWF0IGF0IHlvdXIgbG9jYWwgS2FmJ24nZHVua1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXG4gICAgICAgICAgICBcXHUwMDNDQnV0dG9uXFx1MDAzRURpcmVjdGlvbiB0byBuZWFyZXN0IEthZiduJ2R1bmtcXHUwMDNDXFx1MDAyRkJ1dHRvblxcdTAwM0VcXG4gICAgICAgICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImxvY2F0aW9uLXBpY2tlci1pbWdcXFwiXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImltZy13cmFwZXJcXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKCcuLi9pbWcvZG9udXRfc2hvcC5qcGcnKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiIHNyY3NldD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgICAgICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcXG4gICAgICAgIFxcdTAwM0MhLS1BYm91dCB1cyBjb3JlIHZhbHVlcy0tXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ3NlY3Rpb24gY2xhc3M9XFxcImFib3V0XFxcIlxcdTAwM0VcXG4gICAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYWJvdXQtaW1nXFxcIlxcdTAwM0VcXG4gICAgICAgICAgICBcXHUwMDNDZGl2IGNsYXNzPVxcXCJpbWctd3JhcGVyXFxcIlxcdTAwM0VcXHUwMDNDaW1nXCIgKyAocHVnLmF0dHIoXCJzcmNcIiwgcmVxdWlyZSgnLi4vaW1nL2RvbnV0X2Fib3V0LmpwZycpLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCIgc3Jjc2V0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgICAgIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgICAgICBcXHUwMDNDIS0tVGl0bGUgYW5kIGRlc2NyaXB0aW9uLS1cXHUwMDNFXFxuICAgICAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0LXRpZGVzY1xcXCJcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ3BcXHUwMDNFXFxuICAgICAgICAgICAgICAgIFdlIHB1dCBvdXIgY3VzdG9tZXJzIG5lZWRzIHByaW9yaXR5IG9uIHRvcCBvZiBldmVyeXRoaW5nIHdlIGRvIGV2ZXJ5ZGF5LFxcbiAgICAgICAgICAgICAgIHdlIGFyZSBjcmVhdGUgbWFnaWNhbCBkb251dHMgZXZlcnlkYXkgZXNwZWNpYWxseSBmb3IgeW91LiBDbGljayB0byBsZWFyblxcbiAgICAgICAgICAgICAgIG1vcmUgYWJvdXQgb3VyIG1hZ2ljIGFuZCB3aGF0IHdlIGNhbiBvZmZlcnMgeW91LlxcbiAgICAgICAgICAgIFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXG4gICAgICAgICAgICBcXHUwMDNDYnV0dG9uXFx1MDAzRUZpbmQgb3V0IG1vcmVcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0VcXG4gICAgICAgICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXFxuICAgICAgXFx1MDAzQ1xcdTAwMkZtYWluXFx1MDAzRVxcbiAgICAgIFxcdTAwM0Nmb290ZXJcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDIS0tTG9nbyBhbmQgc29jaWFsIG1lZGlhcy0tXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyLWxlZnQtc2lkZVxcXCJcXHUwMDNFXFxuICAgICAgICAgIFxcdTAwM0NkaXYgY2xhc3M9XFxcImltZy13cmFwZXJcXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKCcuLi9pbWcvbG9nby5wbmcnKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiIHNyY3NldD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDIS0tcmlnaHQgc2lkZSBuYXZnYXRpb24gbWVudS0tXFx1MDAzRVxcbiAgICAgICAgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyLXJpZ2h0LXNpZGVcXFwiXFx1MDAzRVxcbiAgICAgICAgICBcXHUwMDNDdWxcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2xpXFx1MDAzRSBcXHUwMDNDYSBocmVmPVxcXCJpbmRleC5odG1sXFxcIlxcdTAwM0VIb21lIFxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NsaVxcdTAwM0UgXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFTWVudVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NsaVxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0VMb2NhdGlvblxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcbiAgICAgICAgICAgIFxcdTAwM0NsaVxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0VNZW1iZXJzaGlwXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2xpXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcImFib3V0Lmh0bWxcXFwiXFx1MDAzRUFib3V0XFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2xpXFx1MDAzRSBcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0VFbXBsb3ltZW50XFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFxuICAgICAgICAgICAgXFx1MDAzQ2xpXFx1MDAzRSBcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0VDb250YWN0XFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFxuICAgICAgICAgIFxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFxuICAgICAgICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gICAgICBcXHUwMDNDXFx1MDAyRmZvb3RlclxcdTAwM0VcXG4gICAgICBcXHUwMDNDZGl2IHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7XFxcIlxcdTAwM0VDcmVhdGVkIGJ5IFRvbWlmdWNoaVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcbiAgICBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGYm9keVxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmh0bWxcXHUwMDNFXCI7fS5jYWxsKHRoaXMsXCJodG1sV2VicGFja1BsdWdpblwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguaHRtbFdlYnBhY2tQbHVnaW46dHlwZW9mIGh0bWxXZWJwYWNrUGx1Z2luIT09XCJ1bmRlZmluZWRcIj9odG1sV2VicGFja1BsdWdpbjp1bmRlZmluZWQpKTs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHB1Z19oYXNfb3duX3Byb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBNZXJnZSB0d28gYXR0cmlidXRlIG9iamVjdHMgZ2l2aW5nIHByZWNlZGVuY2VcbiAqIHRvIHZhbHVlcyBpbiBvYmplY3QgYGJgLiBDbGFzc2VzIGFyZSBzcGVjaWFsLWNhc2VkXG4gKiBhbGxvd2luZyBmb3IgYXJyYXlzIGFuZCBtZXJnaW5nL2pvaW5pbmcgYXBwcm9wcmlhdGVseVxuICogcmVzdWx0aW5nIGluIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge09iamVjdH0gYlxuICogQHJldHVybiB7T2JqZWN0fSBhXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLm1lcmdlID0gcHVnX21lcmdlO1xuZnVuY3Rpb24gcHVnX21lcmdlKGEsIGIpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgYXR0cnMgPSBhWzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgYXR0cnMgPSBwdWdfbWVyZ2UoYXR0cnMsIGFbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYXR0cnM7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChrZXkgPT09ICdjbGFzcycpIHtcbiAgICAgIHZhciB2YWxBID0gYVtrZXldIHx8IFtdO1xuICAgICAgYVtrZXldID0gKEFycmF5LmlzQXJyYXkodmFsQSkgPyB2YWxBIDogW3ZhbEFdKS5jb25jYXQoYltrZXldIHx8IFtdKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgdmFyIHZhbEEgPSBwdWdfc3R5bGUoYVtrZXldKTtcbiAgICAgIHZhbEEgPSB2YWxBICYmIHZhbEFbdmFsQS5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQSArICc7JyA6IHZhbEE7XG4gICAgICB2YXIgdmFsQiA9IHB1Z19zdHlsZShiW2tleV0pO1xuICAgICAgdmFsQiA9IHZhbEIgJiYgdmFsQlt2YWxCLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxCICsgJzsnIDogdmFsQjtcbiAgICAgIGFba2V5XSA9IHZhbEEgKyB2YWxCO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGE7XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgYXJyYXksIG9iamVjdCwgb3Igc3RyaW5nIGFzIGEgc3RyaW5nIG9mIGNsYXNzZXMgZGVsaW1pdGVkIGJ5IGEgc3BhY2UuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gYXJyYXksIGFsbCBtZW1iZXJzIG9mIGl0IGFuZCBpdHMgc3ViYXJyYXlzIGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBJZiBgZXNjYXBpbmdgIGlzIGFuIGFycmF5LCB0aGVuIHdoZXRoZXIgb3Igbm90IHRoZSBpdGVtIGluIGB2YWxgIGlzXG4gKiBlc2NhcGVkIGRlcGVuZHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgaXRlbSBpbiBgZXNjYXBpbmdgLiBJZiBgZXNjYXBpbmdgIGlzXG4gKiBub3QgYW4gYXJyYXksIG5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gb2JqZWN0LCBhbGwgdGhlIGtleXMgd2hvc2UgdmFsdWUgaXMgdHJ1dGh5IGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGEgc3RyaW5nLCBpdCBpcyBjb3VudGVkIGFzIGEgY2xhc3MuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogQHBhcmFtIHsoQXJyYXkuPHN0cmluZz58T2JqZWN0LjxzdHJpbmcsIGJvb2xlYW4+fHN0cmluZyl9IHZhbFxuICogQHBhcmFtIHs/QXJyYXkuPHN0cmluZz59IGVzY2FwaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuY2xhc3NlcyA9IHB1Z19jbGFzc2VzO1xuZnVuY3Rpb24gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZykge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgY2xhc3NOYW1lLCBwYWRkaW5nID0gJycsIGVzY2FwZUVuYWJsZWQgPSBBcnJheS5pc0FycmF5KGVzY2FwaW5nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICBjbGFzc05hbWUgPSBwdWdfY2xhc3Nlcyh2YWxbaV0pO1xuICAgIGlmICghY2xhc3NOYW1lKSBjb250aW51ZTtcbiAgICBlc2NhcGVFbmFibGVkICYmIGVzY2FwaW5nW2ldICYmIChjbGFzc05hbWUgPSBwdWdfZXNjYXBlKGNsYXNzTmFtZSkpO1xuICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsgY2xhc3NOYW1lO1xuICAgIHBhZGRpbmcgPSAnICc7XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCkge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgcGFkZGluZyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4gdmFsKSB7XG4gICAgaWYgKGtleSAmJiB2YWxba2V5XSAmJiBwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwga2V5KSkge1xuICAgICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBrZXk7XG4gICAgICBwYWRkaW5nID0gJyAnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlcyh2YWwsIGVzY2FwaW5nKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZyk7XG4gIH0gZWxzZSBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgfHwgJyc7XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdCBvciBzdHJpbmcgdG8gYSBzdHJpbmcgb2YgQ1NTIHN0eWxlcyBkZWxpbWl0ZWQgYnkgYSBzZW1pY29sb24uXG4gKlxuICogQHBhcmFtIHsoT2JqZWN0LjxzdHJpbmcsIHN0cmluZz58c3RyaW5nKX0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZXhwb3J0cy5zdHlsZSA9IHB1Z19zdHlsZTtcbmZ1bmN0aW9uIHB1Z19zdHlsZSh2YWwpIHtcbiAgaWYgKCF2YWwpIHJldHVybiAnJztcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIHN0eWxlIGluIHZhbCkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwgc3R5bGUpKSB7XG4gICAgICAgIG91dCA9IG91dCArIHN0eWxlICsgJzonICsgdmFsW3N0eWxlXSArICc7JztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsICsgJyc7XG4gIH1cbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBlc2NhcGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRlcnNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0ciA9IHB1Z19hdHRyO1xuZnVuY3Rpb24gcHVnX2F0dHIoa2V5LCB2YWwsIGVzY2FwZWQsIHRlcnNlKSB7XG4gIGlmICh2YWwgPT09IGZhbHNlIHx8IHZhbCA9PSBudWxsIHx8ICF2YWwgJiYgKGtleSA9PT0gJ2NsYXNzJyB8fCBrZXkgPT09ICdzdHlsZScpKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICByZXR1cm4gJyAnICsgKHRlcnNlID8ga2V5IDoga2V5ICsgJz1cIicgKyBrZXkgKyAnXCInKTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICgodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHZhbC50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YWwgPSB2YWwudG9KU09OKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICBpZiAoIWVzY2FwZWQgJiYgdmFsLmluZGV4T2YoJ1wiJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cXCcnICsgdmFsLnJlcGxhY2UoLycvZywgJyYjMzk7JykgKyAnXFwnJztcbiAgICB9XG4gIH1cbiAgaWYgKGVzY2FwZWQpIHZhbCA9IHB1Z19lc2NhcGUodmFsKTtcbiAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJztcbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGVzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge09iamVjdH0gdGVyc2Ugd2hldGhlciB0byB1c2UgSFRNTDUgdGVyc2UgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0cnMgPSBwdWdfYXR0cnM7XG5mdW5jdGlvbiBwdWdfYXR0cnMob2JqLCB0ZXJzZSl7XG4gIHZhciBhdHRycyA9ICcnO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCdjbGFzcycgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfY2xhc3Nlcyh2YWwpO1xuICAgICAgICBhdHRycyA9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpICsgYXR0cnM7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCdzdHlsZScgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfc3R5bGUodmFsKTtcbiAgICAgIH1cbiAgICAgIGF0dHJzICs9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRycztcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBnaXZlbiBzdHJpbmcgb2YgYGh0bWxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgcHVnX21hdGNoX2h0bWwgPSAvW1wiJjw+XS87XG5leHBvcnRzLmVzY2FwZSA9IHB1Z19lc2NhcGU7XG5mdW5jdGlvbiBwdWdfZXNjYXBlKF9odG1sKXtcbiAgdmFyIGh0bWwgPSAnJyArIF9odG1sO1xuICB2YXIgcmVnZXhSZXN1bHQgPSBwdWdfbWF0Y2hfaHRtbC5leGVjKGh0bWwpO1xuICBpZiAoIXJlZ2V4UmVzdWx0KSByZXR1cm4gX2h0bWw7XG5cbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgaSwgbGFzdEluZGV4LCBlc2NhcGU7XG4gIGZvciAoaSA9IHJlZ2V4UmVzdWx0LmluZGV4LCBsYXN0SW5kZXggPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKykge1xuICAgIHN3aXRjaCAoaHRtbC5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICBjYXNlIDM0OiBlc2NhcGUgPSAnJnF1b3Q7JzsgYnJlYWs7XG4gICAgICBjYXNlIDM4OiBlc2NhcGUgPSAnJmFtcDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjA6IGVzY2FwZSA9ICcmbHQ7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYyOiBlc2NhcGUgPSAnJmd0Oyc7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogY29udGludWU7XG4gICAgfVxuICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHJlc3VsdCArPSBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgIGxhc3RJbmRleCA9IGkgKyAxO1xuICAgIHJlc3VsdCArPSBlc2NhcGU7XG4gIH1cbiAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmV0dXJuIHJlc3VsdCArIGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gIGVsc2UgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmUtdGhyb3cgdGhlIGdpdmVuIGBlcnJgIGluIGNvbnRleHQgdG8gdGhlXG4gKiB0aGUgcHVnIGluIGBmaWxlbmFtZWAgYXQgdGhlIGdpdmVuIGBsaW5lbm9gLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbGluZW5vXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIG9yaWdpbmFsIHNvdXJjZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5yZXRocm93ID0gcHVnX3JldGhyb3c7XG5mdW5jdGlvbiBwdWdfcmV0aHJvdyhlcnIsIGZpbGVuYW1lLCBsaW5lbm8sIHN0cil7XG4gIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkgdGhyb3cgZXJyO1xuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgfHwgIWZpbGVuYW1lKSAmJiAhc3RyKSB7XG4gICAgZXJyLm1lc3NhZ2UgKz0gJyBvbiBsaW5lICcgKyBsaW5lbm87XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIHRyeSB7XG4gICAgc3RyID0gc3RyIHx8IHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCAndXRmOCcpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcHVnX3JldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pXG4gIH1cbiAgdmFyIGNvbnRleHQgPSAzXG4gICAgLCBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJylcbiAgICAsIHN0YXJ0ID0gTWF0aC5tYXgobGluZW5vIC0gY29udGV4dCwgMClcbiAgICAsIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgY29udGV4dCk7XG5cbiAgLy8gRXJyb3IgY29udGV4dFxuICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbihsaW5lLCBpKXtcbiAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJylcbiAgICAgICsgY3VyclxuICAgICAgKyAnfCAnXG4gICAgICArIGxpbmU7XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFsdGVyIGV4Y2VwdGlvbiBtZXNzYWdlXG4gIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gIGVyci5tZXNzYWdlID0gKGZpbGVuYW1lIHx8ICdQdWcnKSArICc6JyArIGxpbmVub1xuICAgICsgJ1xcbicgKyBjb250ZXh0ICsgJ1xcblxcbicgKyBlcnIubWVzc2FnZTtcbiAgdGhyb3cgZXJyO1xufTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4uL3B1Zy9pbmRleC5wdWcnO1xuXG5jb25zb2xlLmxvZyhcImhlbGxvXCIpOyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwidGVzdCIsInNsaWNlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9