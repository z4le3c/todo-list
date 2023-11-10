/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font-size: 62.5%;
}

body {
    margin: 0;
    display: flex;
    justify-content: center;
}

#app {
    width: 720px;
    margin-top: 16rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
}

.space-header-select {
    font-size: 4rem;
    width: 25%;
}

.space-container {
    display: flex;
    align-items: end;
}

.space-option-button {
    font-size: 3rem;
    height: 4rem;
    width: 4rem;
}

.space-input-container, 
.space-warning-container,
.space-edit-container {
    width: 75%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.space-input,
.delete-space-warning,
.space-edit-input {
    font-size: 2rem;
    outline: none;
}

.add-item-button {
    background-color: white;
    border: 1px solid black;
    font-size: 6rem;
    text-align: center;
}

select {
    background-color: white;
    outline: none;
    border: 1px solid black;
}

button {
    background-color: white;
    border: 1px solid black;
    text-align: center;
    font-size: 1.8rem;
}

button:hover {
    background-color: lightgray;
}

button:active {
    background-color: rgb(153, 153, 153);
}

.new-task-container {
    width : 800px;
    height: 100px;
    border: 2px solid black;
    position: absolute;
    top: 30%;
    left: calc(50% - 400px);
    background-color: white;
    padding: 0 1.6rem;

    display: flex;
    justify-content: stretch;
    align-items: center;
    flex-wrap: wrap;
    align-content: space-evenly;
}

.new-task-container > .description-input {
    width: 69%;
}

.description-input {
    border: none;
    outline: none;
}

.new-task-space-select {
    width: 10%;
    height: 6.8ch;
}

.new-task-button {
    width: 10%;
    height: 5ch;
}

.task-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    font-size: 1.8rem;
    border: 1px solid black;
    justify-content: center;

    padding: .8rem 1.6rem;
    row-gap: .8rem;
}

.task-container-with-notes {
    grid-template-rows: repeat(5, 1fr);
}

.task-container > div {
    border: 1px solid black;
    padding: .8rem 1.6rem;
}

.task-description {
    grid-column: 1 / -1;
    font-size: 2.4rem;
}

.task-state {
    grid-column: -2;
}

.task-notes-textarea {
    grid-column: 1 / -1;
    grid-row: 3 / 6;

    resize: none;
    outline: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,UAAU;AACd;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;AACf;;AAEA;;;IAGI,UAAU;IACV,aAAa;IACb,qCAAqC;AACzC;;AAEA;;;IAGI,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;IACR,uBAAuB;IACvB,uBAAuB;IACvB,iBAAiB;;IAEjB,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,iBAAiB;IACjB,uBAAuB;IACvB,uBAAuB;;IAEvB,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,eAAe;;IAEf,YAAY;IACZ,aAAa;AACjB","sourcesContent":[":root {\n    font-size: 62.5%;\n}\n\nbody {\n    margin: 0;\n    display: flex;\n    justify-content: center;\n}\n\n#app {\n    width: 720px;\n    margin-top: 16rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1.6rem;\n}\n\n.space-header-select {\n    font-size: 4rem;\n    width: 25%;\n}\n\n.space-container {\n    display: flex;\n    align-items: end;\n}\n\n.space-option-button {\n    font-size: 3rem;\n    height: 4rem;\n    width: 4rem;\n}\n\n.space-input-container, \n.space-warning-container,\n.space-edit-container {\n    width: 75%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}\n\n.space-input,\n.delete-space-warning,\n.space-edit-input {\n    font-size: 2rem;\n    outline: none;\n}\n\n.add-item-button {\n    background-color: white;\n    border: 1px solid black;\n    font-size: 6rem;\n    text-align: center;\n}\n\nselect {\n    background-color: white;\n    outline: none;\n    border: 1px solid black;\n}\n\nbutton {\n    background-color: white;\n    border: 1px solid black;\n    text-align: center;\n    font-size: 1.8rem;\n}\n\nbutton:hover {\n    background-color: lightgray;\n}\n\nbutton:active {\n    background-color: rgb(153, 153, 153);\n}\n\n.new-task-container {\n    width : 800px;\n    height: 100px;\n    border: 2px solid black;\n    position: absolute;\n    top: 30%;\n    left: calc(50% - 400px);\n    background-color: white;\n    padding: 0 1.6rem;\n\n    display: flex;\n    justify-content: stretch;\n    align-items: center;\n    flex-wrap: wrap;\n    align-content: space-evenly;\n}\n\n.new-task-container > .description-input {\n    width: 69%;\n}\n\n.description-input {\n    border: none;\n    outline: none;\n}\n\n.new-task-space-select {\n    width: 10%;\n    height: 6.8ch;\n}\n\n.new-task-button {\n    width: 10%;\n    height: 5ch;\n}\n\n.task-container {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    font-size: 1.8rem;\n    border: 1px solid black;\n    justify-content: center;\n\n    padding: .8rem 1.6rem;\n    row-gap: .8rem;\n}\n\n.task-container-with-notes {\n    grid-template-rows: repeat(5, 1fr);\n}\n\n.task-container > div {\n    border: 1px solid black;\n    padding: .8rem 1.6rem;\n}\n\n.task-description {\n    grid-column: 1 / -1;\n    font-size: 2.4rem;\n}\n\n.task-state {\n    grid-column: -2;\n}\n\n.task-notes-textarea {\n    grid-column: 1 / -1;\n    grid-row: 3 / 6;\n\n    resize: none;\n    outline: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
const Task = {}

Task.tags = ['#Tag1', '#Tag2']
Task.spaces = {
  Default: {
    priorities: ['LOW', 'MEDIUM', 'HIGH'],
    colors: ['black', 'blue', 'red'],
    states: ['TODO', 'DOING', 'DONE']
  },
  Other: {
    priorities: ['LOW', 'MEDIUM', 'HIGH'],
    colors: ['black', 'blue', 'red'],
    states: ['TODO', 'DOING', 'DONE']
  },
  Another: {
    priorities: ['LOW', 'MEDIUM', 'HIGH'],
    colors: ['black', 'blue', 'red'],
    states: ['TODO', 'DOING', 'DONE']
  }
}

Task.currentSpace = 'Default'

Task.boards = []
Task.list = new Map()

let _idCounter = 0

Task.save = () => {
  const SaveObject = {
    list: Array.from(Task.list),
    _idCounter,
    spaces: Task.spaces
  }
  window.localStorage.setItem('data', JSON.stringify(SaveObject))
}

Task.saveCurrentSpace = () => {
  window.localStorage.setItem('currentSpace', Task.currentSpace)
}

Task.load = () => {
  let data = window.localStorage.getItem('data')
  if (data) {
    data = JSON.parse(data)
    Task.list = new Map(data.list)
    _idCounter = data._idCounter
    Task.spaces = data.spaces
  }
  const currentSpace = window.localStorage.getItem('currentSpace')
  if (currentSpace) {
    Task.currentSpace = currentSpace
  }
}

Task.makeDefaultSpaceElements = () => {
  return {
    priorities: ['LOW', 'MEDIUM', 'HIGH'],
    colors: ['black', 'blue', 'red'],
    states: ['TODO', 'DOING', 'DONE']
  }
}

/**
 *
 * @param {string} description
 * @param {date} date
 * @param {string} priority
 * @param {string} notes
 * @param {string} state
 * @param {string} space
 */
Task.newTask = (description, date, notes, tags, space, priority, state) => {
  const obj = {}
  obj.description = description
  obj.date = date
  obj.priority = priority
  obj.notes = notes
  obj.state = state
  obj.space = space
  obj.tags = tags
  obj.subtask = []
  obj.id = _idCounter++

  return obj
}

Task.addTask = (task) => {
  Task.list.set(task.id, task)
}

Task.deleteTask = (task) => {
  Task.list.delete(task.id)
}

Task.deleteTasks = (filters) => {
  const taskToDelete = Task.getTasks(filters)

  for (const task of taskToDelete) {
    Task.list.delete(task.id)
  }
}

Task.getTasks = (filters) => {
  const list = []

  for (const task of Task.list.values()) {
    list.push(task)
    for (const filter of filters) {
      if (!filter(task)) {
        list.pop()
        break
      }
    }
  }

  return list
}

Task.sortTasks = (tasks, comparator, descending) => {}

Task.getSpacesList = () => {
  const list = []

  for (const space in Task.spaces) {
    list.push(space)
  }

  return list
}




/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
const UI = {}

const appContainer = document.querySelector('#app')
let newTaskActive = false

let _handler

UI.setHandler = (handler) => {
  _handler = handler
}

UI.updateSpaceHeader = () => {
  const oldSpaceSelect = document.querySelector('.space-header-select')
  const newSpaceSelect = buildSelect(
    _handler.getCurrentSpace(),
    _handler.getSpacesList(),
    'space-header-select'
  )

  newSpaceSelect.addEventListener('input', () => {
    _handler.setCurrentSpace(newSpaceSelect.value)
  })

  oldSpaceSelect.replaceWith(newSpaceSelect)
}

UI.createBaseInterface = () => {
  const spaceContainer = buildElement('div', '', 'space-container')
  const spaceSelect = buildSelect(
    _handler.getCurrentSpace(),
    _handler.getSpacesList(),
    'space-header-select'
  )
  const buttonsContainer = buildElement('div', '', 'space-buttons-container')
  const addSpaceButton = buildElement('button', '+', 'space-option-button')
  const deleteSpaceButton = buildElement('button', '-', 'space-option-button')
  const editSpaceButton = buildElement('button', 'e', 'space-option-button')
  const addItemButton = buildElement('button', '+', 'add-item-button')

  buttonsContainer.appendChild(addSpaceButton)
  buttonsContainer.appendChild(deleteSpaceButton)
  buttonsContainer.appendChild(editSpaceButton)

  spaceSelect.addEventListener('input', () => {
    _handler.setCurrentSpace(spaceSelect.value)
  })

  addSpaceButton.addEventListener('click', () => {
    const spaceInputContainer = buildElement('div', '', 'space-input-container')
    const textInput = buildElement('input', '', 'space-input')
    const newSpaceButton = buildElement(
      'button',
      'new space',
      'new-space-button'
    )
    const cancelSpaceButton = buildElement(
      'button',
      'cancel',
      'new-space-button'
    )

    textInput.setAttribute('type', 'text')
    textInput.setAttribute('placeholder', 'space name')
    const restorePrevState = () => {
      spaceInputContainer.remove()

      spaceContainer.appendChild(buttonsContainer)
    }
    newSpaceButton.addEventListener('click', () => {
      if (textInput.value === '') return

      _handler.addNewSpace(textInput.value)

      restorePrevState()
    })

    cancelSpaceButton.addEventListener('click', () => {
      restorePrevState()
    })

    buttonsContainer.remove()

    spaceInputContainer.appendChild(textInput)
    spaceInputContainer.appendChild(newSpaceButton)
    spaceInputContainer.appendChild(cancelSpaceButton)
    spaceContainer.appendChild(spaceInputContainer)
  })

  deleteSpaceButton.addEventListener('click', () => {
    const spaceWarningContainer = buildElement(
      'div',
      '',
      'space-warning-container'
    )
    const warningText = buildElement(
      'div',
      'Delete current space?',
      'delete-space-warning'
    )
    const confirmButton = buildElement('button', 'Yes', 'deletion-button')
    const cancelButton = buildElement('button', 'Cancel', 'deletion-button')

    const restorePrevState = () => {
      spaceWarningContainer.remove()

      spaceContainer.appendChild(buttonsContainer)
    }

    confirmButton.addEventListener('click', () => {
      _handler.deleteCurrentSpace()

      restorePrevState()
    })

    cancelButton.addEventListener('click', () => {
      restorePrevState()
    })

    buttonsContainer.remove()

    spaceWarningContainer.appendChild(warningText)
    spaceWarningContainer.appendChild(confirmButton)
    spaceWarningContainer.appendChild(cancelButton)
    spaceContainer.appendChild(spaceWarningContainer)
  })

  editSpaceButton.addEventListener('click', () => {
    const spaceEditContainer = buildElement('div', '', 'space-edit-container')
    const textInput = buildElement('input', '', 'space-edit-input')
    const confirmButton = buildElement(
      'button',
      'change name',
      'edit-space-button'
    )
    const cancelButton = buildElement('button', 'cancel', 'edit-space-button')

    textInput.setAttribute('type', 'text')
    textInput.setAttribute('value', _handler.getCurrentSpace())

    const restorePrevState = () => {
      spaceEditContainer.remove()

      spaceContainer.appendChild(buttonsContainer)
    }

    confirmButton.addEventListener('click', () => {
      _handler.updateCurrentSpaceName(textInput.value)

      restorePrevState()
    })

    cancelButton.addEventListener('click', () => {
      restorePrevState()
    })

    buttonsContainer.remove()

    spaceEditContainer.appendChild(textInput)
    spaceEditContainer.appendChild(confirmButton)
    spaceEditContainer.appendChild(cancelButton)

    spaceContainer.appendChild(spaceEditContainer)
  })

  addItemButton.addEventListener('click', () => {
    if (newTaskActive) return
    appContainer.appendChild(buildNewTaskInterface())
    newTaskActive = true
  })
  // here should be added the rest of the items stored
  spaceContainer.appendChild(spaceSelect)
  spaceContainer.appendChild(buttonsContainer)
  appContainer.appendChild(spaceContainer)
  appContainer.appendChild(addItemButton)
}

UI.createTaskList = (taskList) => {
  const oldTask = document.querySelectorAll('.task-container')

  for (const taskElement of oldTask) {
    taskElement.remove()
  }

  for (const task of taskList) {
    appContainer.appendChild(buildTask(task))
  }
}

const buildNewTaskInterface = () => {
  const newTaskContainer = buildElement('div', '', 'new-task-container')
  const descriptionInput = buildElement(
    'input',
    '',
    'task-description',
    'description-input'
  )
  const spaceSelect = buildSelect(
    _handler.getCurrentSpace(),
    _handler.getSpacesList(),
    'new-task-space-select'
  )
  const addButton = buildElement('button', 'add', 'new-task-button')
  const cancelButton = buildElement('button', 'cancel', 'new-task-button')
  const dateInput = buildElement('input', '', 'date-input')
  const posibleStates = _handler.getStates()
  const posiblePriorities = _handler.getPriorities()
  const prioritySelect = buildSelect(
    posiblePriorities[0],
    posiblePriorities,
    'new-task-priority'
  )
  const stateSelect = buildSelect(
    posibleStates[0],
    posibleStates,
    'new-task-state'
  )

  descriptionInput.setAttribute('type', 'text')
  descriptionInput.setAttribute('placeholder', 'description')

  dateInput.setAttribute('type', 'date')

  addButton.addEventListener('click', () => {
    if (spaceSelect.value === '') return

    _handler.handleNewTaskInput({
      description: descriptionInput.value,
      space: spaceSelect.value,
      date: dateInput.value,
      priority: prioritySelect.value,
      state: stateSelect.value
    })

    newTaskContainer.remove()
    newTaskActive = false
  })

  cancelButton.addEventListener('click', () => {
    newTaskContainer.remove()
    newTaskActive = false
  })

  newTaskContainer.appendChild(descriptionInput)
  newTaskContainer.appendChild(spaceSelect)
  newTaskContainer.appendChild(addButton)
  newTaskContainer.appendChild(cancelButton)
  newTaskContainer.appendChild(dateInput)
  newTaskContainer.appendChild(prioritySelect)
  newTaskContainer.appendChild(stateSelect)
  return newTaskContainer
}

const buildSelect = (defaultOption, itemList, ...cssClasses) => {
  const select = buildElement('select', '', ...cssClasses)

  let option = document.createElement('option')
  option.setAttribute('value', defaultOption)
  option.textContent = defaultOption
  select.appendChild(option)

  for (const item of itemList) {
    if (item === defaultOption) continue

    option = document.createElement('option')
    option.setAttribute('value', item)
    option.textContent = item
    select.appendChild(option)
  }

  return select
}

const buildTask = (task) => {
  const taskContainer = buildElement('div', '', 'task-container')
  const taskDescription = buildElement(
    'input',
    '',
    'task-description',
    'description-input'
  )
  const taskDetails = buildElement('button', 'Details', 'task-details')
  const taskDeleteButton = buildElement('button', 'Delete', 'task-delete')
  const taskState = buildSelect(task.state, _handler.getStates(), 'task-state')
  const taskDate = buildElement('input', '', 'date-input')
  const taskSpace = buildSelect(
    task.space,
    _handler.getSpacesList(),
    'task-space'
  )
  const taskPriority = buildSelect(
    task.priority,
    _handler.getPriorities(),
    'task-priority'
  )
  const taskNotes = buildElement('button', 'notes', 'task-notes')
  const taskNotesTextarea = buildElement(
    'textarea',
    task.notes,
    'task-notes-textarea'
  )

  taskContainer.style.border = `1px solid ${_handler.getPriorityColor(task)}`

  taskDescription.setAttribute('type', 'text')
  taskDescription.setAttribute('value', task.description)
  taskDescription.setAttribute('placeholder', 'task description')
  taskDescription.addEventListener('input', () => {
    _handler.updateTask(task, { description: taskDescription.value })
  })

  taskState.addEventListener('input', () => {
    _handler.updateTask(task, { state: taskState.value })
  })

  taskDate.setAttribute('type', 'date')
  taskDate.setAttribute('value', task.date)
  taskDate.addEventListener('input', () => {
    _handler.updateTask(task, { date: taskDate.value })
  })

  taskSpace.addEventListener('input', () => {
    _handler.updateTask(task, { space: taskSpace.value })
    _handler.setCurrentSpace(_handler.getCurrentSpace())
  })

  taskPriority.addEventListener('input', () => {
    _handler.updateTask(task, { priority: taskPriority.value })
  })

  const cleanOffNotes = () => {
    taskNotes.textContent = 'notes'
    taskNotesTextarea.remove()
    taskContainer.classList.remove('task-container-with-notes')
  }

  taskNotes.addEventListener('click', () => {
    if (taskNotes.textContent === 'notes') {
      taskNotes.textContent = 'close notes'
      taskNotesTextarea.value = task.notes

      taskNotesTextarea.addEventListener('input', () => {
        _handler.updateTask(task, { notes: taskNotesTextarea.value })
      })

      taskContainer.appendChild(taskNotesTextarea)
      taskContainer.classList.add('task-container-with-notes')
    } else if (taskNotes.textContent === 'close notes') {
      cleanOffNotes()
    }
  })

  taskDetails.addEventListener('click', () => {
    if (taskDetails.textContent === 'Details') {
      taskDetails.textContent = 'Less'

      taskDeleteButton.remove()
      taskState.remove()

      taskContainer.appendChild(taskDate)
      taskContainer.appendChild(taskSpace)
      taskContainer.appendChild(taskPriority)
      taskContainer.appendChild(taskNotes)
      taskContainer.appendChild(taskState)
    } else if (taskDetails.textContent === 'Less') {
      taskDetails.textContent = 'Details'

      taskDate.remove()
      taskSpace.remove()
      taskPriority.remove()
      taskState.remove()
      taskNotes.remove()

      cleanOffNotes()

      taskContainer.appendChild(taskDeleteButton)
      taskContainer.appendChild(taskState)
    }
  })

  taskDeleteButton.addEventListener('click', () => {
    _handler.handleDeletion(task)
    taskContainer.remove()
  })

  taskContainer.appendChild(taskDescription)
  taskContainer.appendChild(taskDetails)
  taskContainer.appendChild(taskDeleteButton)
  taskContainer.appendChild(taskState)

  return taskContainer
}

const buildElement = (type, text, ...classes) => {
  const element = document.createElement(type)

  for (const cssClass of classes) {
    element.classList.add(cssClass)
  }

  element.textContent = text

  return element
}




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");




const Handler = {}

Handler.handleNewTaskInput = (newTask) => {
  const task = _task__WEBPACK_IMPORTED_MODULE_1__.Task.newTask(
    newTask.description,
    newTask.date,
    'notes',
    '#t1 #t2',
    newTask.space,
    newTask.priority,
    newTask.state
  )
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.addTask(task)
  _ui__WEBPACK_IMPORTED_MODULE_2__.UI.createTaskList(_task__WEBPACK_IMPORTED_MODULE_1__.Task.getTasks([(e) => e.space === _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace]))
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.save()

  console.log(_task__WEBPACK_IMPORTED_MODULE_1__.Task.list)
}

Handler.addNewSpace = (spaceName) => {
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[spaceName] = _task__WEBPACK_IMPORTED_MODULE_1__.Task.makeDefaultSpaceElements()
  _ui__WEBPACK_IMPORTED_MODULE_2__.UI.updateSpaceHeader()
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.save()
}

Handler.handleDeletion = (task) => {
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.deleteTask(task)
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.save()

  console.log(_task__WEBPACK_IMPORTED_MODULE_1__.Task.list)
}

Handler.deleteCurrentSpace = () => {
  let spaces = _task__WEBPACK_IMPORTED_MODULE_1__.Task.getSpacesList()
  if (spaces.length === 1) return

  delete _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[_task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace]
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.deleteTasks([(e) => e.space === _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace])
  spaces = _task__WEBPACK_IMPORTED_MODULE_1__.Task.getSpacesList()
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace = spaces[0]

  Handler.setCurrentSpace(_task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace)
  _ui__WEBPACK_IMPORTED_MODULE_2__.UI.updateSpaceHeader()
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.save()
}

Handler.updateTask = (task, newAttributes) => {
  for (const key in newAttributes) {
    task[key] = newAttributes[key]
  }

  _task__WEBPACK_IMPORTED_MODULE_1__.Task.save()
}

Handler.updateCurrentSpaceName = (newName) => {
  if (newName === _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace) return

  _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[newName] = _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[_task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace]
  delete _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[_task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace]

  // update the task space of the previous space
  const currSpaceTask = _task__WEBPACK_IMPORTED_MODULE_1__.Task.getTasks([(e) => e.space === _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace])
  for (const task of currSpaceTask) {
    task.space = newName
  }

  _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace = newName

  _ui__WEBPACK_IMPORTED_MODULE_2__.UI.updateSpaceHeader()
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.save()
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.saveCurrentSpace()
}

Handler.getSpacesList = () => {
  return _task__WEBPACK_IMPORTED_MODULE_1__.Task.getSpacesList()
}

Handler.getStates = () => {
  return _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[_task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace].states
}

Handler.getPriorities = () => {
  return _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[_task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace].priorities
}

Handler.getCurrentSpace = () => {
  return _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace
}

Handler.getPriorityColor = (task) => {
  const colors = _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[task.space].colors
  const colorI = _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[task.space].priorities.findIndex(
    (e) => e === task.priority
  )
  return colors[colorI]
}

// changes the current space and shows that space list.
Handler.setCurrentSpace = (space) => {
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace = space
  _ui__WEBPACK_IMPORTED_MODULE_2__.UI.createTaskList(_task__WEBPACK_IMPORTED_MODULE_1__.Task.getTasks([(e) => e.space === _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace]))
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.saveCurrentSpace()
}

_task__WEBPACK_IMPORTED_MODULE_1__.Task.addTask(
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.newTask(
    'This belongs in Default',
    '',
    'notes',
    '#t1 #t2',
    'Default',
    'LOW',
    'TODO'
  )
)

_task__WEBPACK_IMPORTED_MODULE_1__.Task.addTask(
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.newTask(
    'This also belongs to Default',
    '2023-11-06',
    'notes',
    '#t1',
    'Default',
    'HIGH',
    'DOING'
  )
)

_task__WEBPACK_IMPORTED_MODULE_1__.Task.addTask(
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.newTask(
    'This belongs in Other',
    '',
    'notes',
    '#t1 #t2',
    'Other',
    'LOW',
    'TODO'
  )
)

_task__WEBPACK_IMPORTED_MODULE_1__.Task.load()
_ui__WEBPACK_IMPORTED_MODULE_2__.UI.setHandler(Handler)
_ui__WEBPACK_IMPORTED_MODULE_2__.UI.createBaseInterface()
_ui__WEBPACK_IMPORTED_MODULE_2__.UI.createTaskList(_task__WEBPACK_IMPORTED_MODULE_1__.Task.getTasks([(e) => e.space === _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace]))

/**
 * DONE add ability to change spaces task list
 * DONE make the default space when creating a new task to be the current space.
 * DONE add date
 * DONE add ability to expand a single todo to see/edit its details
 * DONE add ability to edit and save the date of an existing task
 * DONE add state property
 * DONE add ability to chage the description of an existing task
 * DONE fix the state positioning
 * DONE add ability to change the space of an existing task.
 * DONE add priority
 * DONE save data
 * DONE add ability to make and delete spaces
 * DONE add priority and state selection when adding a task
 * DONE edit a space name
 * DONE add notes
 * TODO add ability to sort task
 * TODO create new task by pressing enter
 * TODO close notes with the 'escape' key
 * TODO clean up buildTask & buildNewTaskInterface
 * TODO add time
 * TODO add tags
 * TODO add filters
 * TODO add manual sorting and save it on 'boards'
 * TODO add subtask
 */

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxpQ0FBaUMsdUJBQXVCLEdBQUcsVUFBVSxnQkFBZ0Isb0JBQW9CLDhCQUE4QixHQUFHLFVBQVUsbUJBQW1CLHdCQUF3QixvQkFBb0IsNkJBQTZCLGtCQUFrQixHQUFHLDBCQUEwQixzQkFBc0IsaUJBQWlCLEdBQUcsc0JBQXNCLG9CQUFvQix1QkFBdUIsR0FBRywwQkFBMEIsc0JBQXNCLG1CQUFtQixrQkFBa0IsR0FBRyxnRkFBZ0YsaUJBQWlCLG9CQUFvQiw0Q0FBNEMsR0FBRyw4REFBOEQsc0JBQXNCLG9CQUFvQixHQUFHLHNCQUFzQiw4QkFBOEIsOEJBQThCLHNCQUFzQix5QkFBeUIsR0FBRyxZQUFZLDhCQUE4QixvQkFBb0IsOEJBQThCLEdBQUcsWUFBWSw4QkFBOEIsOEJBQThCLHlCQUF5Qix3QkFBd0IsR0FBRyxrQkFBa0Isa0NBQWtDLEdBQUcsbUJBQW1CLDJDQUEyQyxHQUFHLHlCQUF5QixvQkFBb0Isb0JBQW9CLDhCQUE4Qix5QkFBeUIsZUFBZSw4QkFBOEIsOEJBQThCLHdCQUF3QixzQkFBc0IsK0JBQStCLDBCQUEwQixzQkFBc0Isa0NBQWtDLEdBQUcsOENBQThDLGlCQUFpQixHQUFHLHdCQUF3QixtQkFBbUIsb0JBQW9CLEdBQUcsNEJBQTRCLGlCQUFpQixvQkFBb0IsR0FBRyxzQkFBc0IsaUJBQWlCLGtCQUFrQixHQUFHLHFCQUFxQixvQkFBb0IsNENBQTRDLHdCQUF3Qiw4QkFBOEIsOEJBQThCLDhCQUE4QixxQkFBcUIsR0FBRyxnQ0FBZ0MseUNBQXlDLEdBQUcsMkJBQTJCLDhCQUE4Qiw0QkFBNEIsR0FBRyx1QkFBdUIsMEJBQTBCLHdCQUF3QixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRywwQkFBMEIsMEJBQTBCLHNCQUFzQixxQkFBcUIsb0JBQW9CLEdBQUcsbUJBQW1CO0FBQ3prSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzNKMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlOzs7Ozs7Ozs7Ozs7Ozs7QUNuSWY7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUFFLHVDQUFJO0FBQ04sRUFBRSx1Q0FBSTtBQUNOOztBQUVBO0FBQ0EsU0FBUyx1Q0FBSTtBQUNiOztBQUVBO0FBQ0EsU0FBUyx1Q0FBSSxRQUFRLHVDQUFJO0FBQ3pCOztBQUVBO0FBQ0EsU0FBUyx1Q0FBSSxRQUFRLHVDQUFJO0FBQ3pCOztBQUVBO0FBQ0EsU0FBUyx1Q0FBSTtBQUNiOztBQUVBO0FBQ0EsaUJBQWlCLHVDQUFJO0FBQ3JCLGlCQUFpQix1Q0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSx1Q0FBSTtBQUNOLEVBQUUsbUNBQUUsZ0JBQWdCLHVDQUFJLDhCQUE4Qix1Q0FBSTtBQUMxRCxFQUFFLHVDQUFJO0FBQ047O0FBRUEsdUNBQUk7QUFDSixFQUFFLHVDQUFJO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUFJO0FBQ0osRUFBRSx1Q0FBSTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBSTtBQUNKLEVBQUUsdUNBQUk7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQUk7QUFDSixtQ0FBRTtBQUNGLG1DQUFFO0FBQ0YsbUNBQUUsZ0JBQWdCLHVDQUFJLDhCQUE4Qix1Q0FBSTs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNhcHAge1xuICAgIHdpZHRoOiA3MjBweDtcbiAgICBtYXJnaW4tdG9wOiAxNnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxLjZyZW07XG59XG5cbi5zcGFjZS1oZWFkZXItc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgd2lkdGg6IDI1JTtcbn1cblxuLnNwYWNlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xufVxuXG4uc3BhY2Utb3B0aW9uLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICB3aWR0aDogNHJlbTtcbn1cblxuLnNwYWNlLWlucHV0LWNvbnRhaW5lciwgXG4uc3BhY2Utd2FybmluZy1jb250YWluZXIsXG4uc3BhY2UtZWRpdC1jb250YWluZXIge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xufVxuXG4uc3BhY2UtaW5wdXQsXG4uZGVsZXRlLXNwYWNlLXdhcm5pbmcsXG4uc3BhY2UtZWRpdC1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5hZGQtaXRlbS1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XG59XG5cbi5uZXctdGFzay1jb250YWluZXIge1xuICAgIHdpZHRoIDogODAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG4gICAgbGVmdDogY2FsYyg1MCUgLSA0MDBweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMCAxLjZyZW07XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5uZXctdGFzay1jb250YWluZXIgPiAuZGVzY3JpcHRpb24taW5wdXQge1xuICAgIHdpZHRoOiA2OSU7XG59XG5cbi5kZXNjcmlwdGlvbi1pbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uZXctdGFzay1zcGFjZS1zZWxlY3Qge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgaGVpZ2h0OiA2LjhjaDtcbn1cblxuLm5ldy10YXNrLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBoZWlnaHQ6IDVjaDtcbn1cblxuLnRhc2stY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nOiAuOHJlbSAxLjZyZW07XG4gICAgcm93LWdhcDogLjhyZW07XG59XG5cbi50YXNrLWNvbnRhaW5lci13aXRoLW5vdGVzIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xufVxuXG4udGFzay1jb250YWluZXIgPiBkaXYge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IC44cmVtIDEuNnJlbTtcbn1cblxuLnRhc2stZGVzY3JpcHRpb24ge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG59XG5cbi50YXNrLXN0YXRlIHtcbiAgICBncmlkLWNvbHVtbjogLTI7XG59XG5cbi50YXNrLW5vdGVzLXRleHRhcmVhIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIGdyaWQtcm93OiAzIC8gNjtcblxuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLFVBQVU7SUFDVixhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDOztBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjs7SUFFakIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHVCQUF1Qjs7SUFFdkIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTs7SUFFZixZQUFZO0lBQ1osYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgd2lkdGg6IDcyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxLjZyZW07XFxufVxcblxcbi5zcGFjZS1oZWFkZXItc2VsZWN0IHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB3aWR0aDogMjUlO1xcbn1cXG5cXG4uc3BhY2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuXFxuLnNwYWNlLW9wdGlvbi1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxufVxcblxcbi5zcGFjZS1pbnB1dC1jb250YWluZXIsIFxcbi5zcGFjZS13YXJuaW5nLWNvbnRhaW5lcixcXG4uc3BhY2UtZWRpdC1jb250YWluZXIge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4uc3BhY2UtaW5wdXQsXFxuLmRlbGV0ZS1zcGFjZS13YXJuaW5nLFxcbi5zcGFjZS1lZGl0LWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYWRkLWl0ZW0tYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcXG59XFxuXFxuLm5ldy10YXNrLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoIDogODAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDQwMHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAgMS42cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ubmV3LXRhc2stY29udGFpbmVyID4gLmRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgd2lkdGg6IDY5JTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubmV3LXRhc2stc3BhY2Utc2VsZWN0IHtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgaGVpZ2h0OiA2LjhjaDtcXG59XFxuXFxuLm5ldy10YXNrLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogNWNoO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiAuOHJlbSAxLjZyZW07XFxuICAgIHJvdy1nYXA6IC44cmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXItd2l0aC1ub3RlcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAuOHJlbSAxLjZyZW07XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZm9udC1zaXplOiAyLjRyZW07XFxufVxcblxcbi50YXNrLXN0YXRlIHtcXG4gICAgZ3JpZC1jb2x1bW46IC0yO1xcbn1cXG5cXG4udGFzay1ub3Rlcy10ZXh0YXJlYSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtcm93OiAzIC8gNjtcXG5cXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgVGFzayA9IHt9XG5cblRhc2sudGFncyA9IFsnI1RhZzEnLCAnI1RhZzInXVxuVGFzay5zcGFjZXMgPSB7XG4gIERlZmF1bHQ6IHtcbiAgICBwcmlvcml0aWVzOiBbJ0xPVycsICdNRURJVU0nLCAnSElHSCddLFxuICAgIGNvbG9yczogWydibGFjaycsICdibHVlJywgJ3JlZCddLFxuICAgIHN0YXRlczogWydUT0RPJywgJ0RPSU5HJywgJ0RPTkUnXVxuICB9LFxuICBPdGhlcjoge1xuICAgIHByaW9yaXRpZXM6IFsnTE9XJywgJ01FRElVTScsICdISUdIJ10sXG4gICAgY29sb3JzOiBbJ2JsYWNrJywgJ2JsdWUnLCAncmVkJ10sXG4gICAgc3RhdGVzOiBbJ1RPRE8nLCAnRE9JTkcnLCAnRE9ORSddXG4gIH0sXG4gIEFub3RoZXI6IHtcbiAgICBwcmlvcml0aWVzOiBbJ0xPVycsICdNRURJVU0nLCAnSElHSCddLFxuICAgIGNvbG9yczogWydibGFjaycsICdibHVlJywgJ3JlZCddLFxuICAgIHN0YXRlczogWydUT0RPJywgJ0RPSU5HJywgJ0RPTkUnXVxuICB9XG59XG5cblRhc2suY3VycmVudFNwYWNlID0gJ0RlZmF1bHQnXG5cblRhc2suYm9hcmRzID0gW11cblRhc2subGlzdCA9IG5ldyBNYXAoKVxuXG5sZXQgX2lkQ291bnRlciA9IDBcblxuVGFzay5zYXZlID0gKCkgPT4ge1xuICBjb25zdCBTYXZlT2JqZWN0ID0ge1xuICAgIGxpc3Q6IEFycmF5LmZyb20oVGFzay5saXN0KSxcbiAgICBfaWRDb3VudGVyLFxuICAgIHNwYWNlczogVGFzay5zcGFjZXNcbiAgfVxuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShTYXZlT2JqZWN0KSlcbn1cblxuVGFzay5zYXZlQ3VycmVudFNwYWNlID0gKCkgPT4ge1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRTcGFjZScsIFRhc2suY3VycmVudFNwYWNlKVxufVxuXG5UYXNrLmxvYWQgPSAoKSA9PiB7XG4gIGxldCBkYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhJylcbiAgaWYgKGRhdGEpIHtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKVxuICAgIFRhc2subGlzdCA9IG5ldyBNYXAoZGF0YS5saXN0KVxuICAgIF9pZENvdW50ZXIgPSBkYXRhLl9pZENvdW50ZXJcbiAgICBUYXNrLnNwYWNlcyA9IGRhdGEuc3BhY2VzXG4gIH1cbiAgY29uc3QgY3VycmVudFNwYWNlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3BhY2UnKVxuICBpZiAoY3VycmVudFNwYWNlKSB7XG4gICAgVGFzay5jdXJyZW50U3BhY2UgPSBjdXJyZW50U3BhY2VcbiAgfVxufVxuXG5UYXNrLm1ha2VEZWZhdWx0U3BhY2VFbGVtZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcmlvcml0aWVzOiBbJ0xPVycsICdNRURJVU0nLCAnSElHSCddLFxuICAgIGNvbG9yczogWydibGFjaycsICdibHVlJywgJ3JlZCddLFxuICAgIHN0YXRlczogWydUT0RPJywgJ0RPSU5HJywgJ0RPTkUnXVxuICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblxuICogQHBhcmFtIHtkYXRlfSBkYXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJpb3JpdHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBub3Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3BhY2VcbiAqL1xuVGFzay5uZXdUYXNrID0gKGRlc2NyaXB0aW9uLCBkYXRlLCBub3RlcywgdGFncywgc3BhY2UsIHByaW9yaXR5LCBzdGF0ZSkgPT4ge1xuICBjb25zdCBvYmogPSB7fVxuICBvYmouZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICBvYmouZGF0ZSA9IGRhdGVcbiAgb2JqLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgb2JqLm5vdGVzID0gbm90ZXNcbiAgb2JqLnN0YXRlID0gc3RhdGVcbiAgb2JqLnNwYWNlID0gc3BhY2VcbiAgb2JqLnRhZ3MgPSB0YWdzXG4gIG9iai5zdWJ0YXNrID0gW11cbiAgb2JqLmlkID0gX2lkQ291bnRlcisrXG5cbiAgcmV0dXJuIG9ialxufVxuXG5UYXNrLmFkZFRhc2sgPSAodGFzaykgPT4ge1xuICBUYXNrLmxpc3Quc2V0KHRhc2suaWQsIHRhc2spXG59XG5cblRhc2suZGVsZXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gIFRhc2subGlzdC5kZWxldGUodGFzay5pZClcbn1cblxuVGFzay5kZWxldGVUYXNrcyA9IChmaWx0ZXJzKSA9PiB7XG4gIGNvbnN0IHRhc2tUb0RlbGV0ZSA9IFRhc2suZ2V0VGFza3MoZmlsdGVycylcblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza1RvRGVsZXRlKSB7XG4gICAgVGFzay5saXN0LmRlbGV0ZSh0YXNrLmlkKVxuICB9XG59XG5cblRhc2suZ2V0VGFza3MgPSAoZmlsdGVycykgPT4ge1xuICBjb25zdCBsaXN0ID0gW11cblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgVGFzay5saXN0LnZhbHVlcygpKSB7XG4gICAgbGlzdC5wdXNoKHRhc2spXG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgZmlsdGVycykge1xuICAgICAgaWYgKCFmaWx0ZXIodGFzaykpIHtcbiAgICAgICAgbGlzdC5wb3AoKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsaXN0XG59XG5cblRhc2suc29ydFRhc2tzID0gKHRhc2tzLCBjb21wYXJhdG9yLCBkZXNjZW5kaW5nKSA9PiB7fVxuXG5UYXNrLmdldFNwYWNlc0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXVxuXG4gIGZvciAoY29uc3Qgc3BhY2UgaW4gVGFzay5zcGFjZXMpIHtcbiAgICBsaXN0LnB1c2goc3BhY2UpXG4gIH1cblxuICByZXR1cm4gbGlzdFxufVxuXG5leHBvcnQgeyBUYXNrIH1cbiIsImNvbnN0IFVJID0ge31cblxuY29uc3QgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXG5sZXQgbmV3VGFza0FjdGl2ZSA9IGZhbHNlXG5cbmxldCBfaGFuZGxlclxuXG5VSS5zZXRIYW5kbGVyID0gKGhhbmRsZXIpID0+IHtcbiAgX2hhbmRsZXIgPSBoYW5kbGVyXG59XG5cblVJLnVwZGF0ZVNwYWNlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBvbGRTcGFjZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGFjZS1oZWFkZXItc2VsZWN0JylcbiAgY29uc3QgbmV3U3BhY2VTZWxlY3QgPSBidWlsZFNlbGVjdChcbiAgICBfaGFuZGxlci5nZXRDdXJyZW50U3BhY2UoKSxcbiAgICBfaGFuZGxlci5nZXRTcGFjZXNMaXN0KCksXG4gICAgJ3NwYWNlLWhlYWRlci1zZWxlY3QnXG4gIClcblxuICBuZXdTcGFjZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBfaGFuZGxlci5zZXRDdXJyZW50U3BhY2UobmV3U3BhY2VTZWxlY3QudmFsdWUpXG4gIH0pXG5cbiAgb2xkU3BhY2VTZWxlY3QucmVwbGFjZVdpdGgobmV3U3BhY2VTZWxlY3QpXG59XG5cblVJLmNyZWF0ZUJhc2VJbnRlcmZhY2UgPSAoKSA9PiB7XG4gIGNvbnN0IHNwYWNlQ29udGFpbmVyID0gYnVpbGRFbGVtZW50KCdkaXYnLCAnJywgJ3NwYWNlLWNvbnRhaW5lcicpXG4gIGNvbnN0IHNwYWNlU2VsZWN0ID0gYnVpbGRTZWxlY3QoXG4gICAgX2hhbmRsZXIuZ2V0Q3VycmVudFNwYWNlKCksXG4gICAgX2hhbmRsZXIuZ2V0U3BhY2VzTGlzdCgpLFxuICAgICdzcGFjZS1oZWFkZXItc2VsZWN0J1xuICApXG4gIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBidWlsZEVsZW1lbnQoJ2RpdicsICcnLCAnc3BhY2UtYnV0dG9ucy1jb250YWluZXInKVxuICBjb25zdCBhZGRTcGFjZUJ1dHRvbiA9IGJ1aWxkRWxlbWVudCgnYnV0dG9uJywgJysnLCAnc3BhY2Utb3B0aW9uLWJ1dHRvbicpXG4gIGNvbnN0IGRlbGV0ZVNwYWNlQnV0dG9uID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnLScsICdzcGFjZS1vcHRpb24tYnV0dG9uJylcbiAgY29uc3QgZWRpdFNwYWNlQnV0dG9uID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnZScsICdzcGFjZS1vcHRpb24tYnV0dG9uJylcbiAgY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGJ1aWxkRWxlbWVudCgnYnV0dG9uJywgJysnLCAnYWRkLWl0ZW0tYnV0dG9uJylcblxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFNwYWNlQnV0dG9uKVxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVNwYWNlQnV0dG9uKVxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRTcGFjZUJ1dHRvbilcblxuICBzcGFjZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBfaGFuZGxlci5zZXRDdXJyZW50U3BhY2Uoc3BhY2VTZWxlY3QudmFsdWUpXG4gIH0pXG5cbiAgYWRkU3BhY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgc3BhY2VJbnB1dENvbnRhaW5lciA9IGJ1aWxkRWxlbWVudCgnZGl2JywgJycsICdzcGFjZS1pbnB1dC1jb250YWluZXInKVxuICAgIGNvbnN0IHRleHRJbnB1dCA9IGJ1aWxkRWxlbWVudCgnaW5wdXQnLCAnJywgJ3NwYWNlLWlucHV0JylcbiAgICBjb25zdCBuZXdTcGFjZUJ1dHRvbiA9IGJ1aWxkRWxlbWVudChcbiAgICAgICdidXR0b24nLFxuICAgICAgJ25ldyBzcGFjZScsXG4gICAgICAnbmV3LXNwYWNlLWJ1dHRvbidcbiAgICApXG4gICAgY29uc3QgY2FuY2VsU3BhY2VCdXR0b24gPSBidWlsZEVsZW1lbnQoXG4gICAgICAnYnV0dG9uJyxcbiAgICAgICdjYW5jZWwnLFxuICAgICAgJ25ldy1zcGFjZS1idXR0b24nXG4gICAgKVxuXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdzcGFjZSBuYW1lJylcbiAgICBjb25zdCByZXN0b3JlUHJldlN0YXRlID0gKCkgPT4ge1xuICAgICAgc3BhY2VJbnB1dENvbnRhaW5lci5yZW1vdmUoKVxuXG4gICAgICBzcGFjZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKVxuICAgIH1cbiAgICBuZXdTcGFjZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0ZXh0SW5wdXQudmFsdWUgPT09ICcnKSByZXR1cm5cblxuICAgICAgX2hhbmRsZXIuYWRkTmV3U3BhY2UodGV4dElucHV0LnZhbHVlKVxuXG4gICAgICByZXN0b3JlUHJldlN0YXRlKClcbiAgICB9KVxuXG4gICAgY2FuY2VsU3BhY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXN0b3JlUHJldlN0YXRlKClcbiAgICB9KVxuXG4gICAgYnV0dG9uc0NvbnRhaW5lci5yZW1vdmUoKVxuXG4gICAgc3BhY2VJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpXG4gICAgc3BhY2VJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdTcGFjZUJ1dHRvbilcbiAgICBzcGFjZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbFNwYWNlQnV0dG9uKVxuICAgIHNwYWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYWNlSW5wdXRDb250YWluZXIpXG4gIH0pXG5cbiAgZGVsZXRlU3BhY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3Qgc3BhY2VXYXJuaW5nQ29udGFpbmVyID0gYnVpbGRFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICAnJyxcbiAgICAgICdzcGFjZS13YXJuaW5nLWNvbnRhaW5lcidcbiAgICApXG4gICAgY29uc3Qgd2FybmluZ1RleHQgPSBidWlsZEVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgICdEZWxldGUgY3VycmVudCBzcGFjZT8nLFxuICAgICAgJ2RlbGV0ZS1zcGFjZS13YXJuaW5nJ1xuICAgIClcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnWWVzJywgJ2RlbGV0aW9uLWJ1dHRvbicpXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnQ2FuY2VsJywgJ2RlbGV0aW9uLWJ1dHRvbicpXG5cbiAgICBjb25zdCByZXN0b3JlUHJldlN0YXRlID0gKCkgPT4ge1xuICAgICAgc3BhY2VXYXJuaW5nQ29udGFpbmVyLnJlbW92ZSgpXG5cbiAgICAgIHNwYWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpXG4gICAgfVxuXG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIF9oYW5kbGVyLmRlbGV0ZUN1cnJlbnRTcGFjZSgpXG5cbiAgICAgIHJlc3RvcmVQcmV2U3RhdGUoKVxuICAgIH0pXG5cbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXN0b3JlUHJldlN0YXRlKClcbiAgICB9KVxuXG4gICAgYnV0dG9uc0NvbnRhaW5lci5yZW1vdmUoKVxuXG4gICAgc3BhY2VXYXJuaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHdhcm5pbmdUZXh0KVxuICAgIHNwYWNlV2FybmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKVxuICAgIHNwYWNlV2FybmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pXG4gICAgc3BhY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhY2VXYXJuaW5nQ29udGFpbmVyKVxuICB9KVxuXG4gIGVkaXRTcGFjZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBzcGFjZUVkaXRDb250YWluZXIgPSBidWlsZEVsZW1lbnQoJ2RpdicsICcnLCAnc3BhY2UtZWRpdC1jb250YWluZXInKVxuICAgIGNvbnN0IHRleHRJbnB1dCA9IGJ1aWxkRWxlbWVudCgnaW5wdXQnLCAnJywgJ3NwYWNlLWVkaXQtaW5wdXQnKVxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBidWlsZEVsZW1lbnQoXG4gICAgICAnYnV0dG9uJyxcbiAgICAgICdjaGFuZ2UgbmFtZScsXG4gICAgICAnZWRpdC1zcGFjZS1idXR0b24nXG4gICAgKVxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGJ1aWxkRWxlbWVudCgnYnV0dG9uJywgJ2NhbmNlbCcsICdlZGl0LXNwYWNlLWJ1dHRvbicpXG5cbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgX2hhbmRsZXIuZ2V0Q3VycmVudFNwYWNlKCkpXG5cbiAgICBjb25zdCByZXN0b3JlUHJldlN0YXRlID0gKCkgPT4ge1xuICAgICAgc3BhY2VFZGl0Q29udGFpbmVyLnJlbW92ZSgpXG5cbiAgICAgIHNwYWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpXG4gICAgfVxuXG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIF9oYW5kbGVyLnVwZGF0ZUN1cnJlbnRTcGFjZU5hbWUodGV4dElucHV0LnZhbHVlKVxuXG4gICAgICByZXN0b3JlUHJldlN0YXRlKClcbiAgICB9KVxuXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdG9yZVByZXZTdGF0ZSgpXG4gICAgfSlcblxuICAgIGJ1dHRvbnNDb250YWluZXIucmVtb3ZlKClcblxuICAgIHNwYWNlRWRpdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpXG4gICAgc3BhY2VFZGl0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pXG4gICAgc3BhY2VFZGl0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbilcblxuICAgIHNwYWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYWNlRWRpdENvbnRhaW5lcilcbiAgfSlcblxuICBhZGRJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChuZXdUYXNrQWN0aXZlKSByZXR1cm5cbiAgICBhcHBDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGROZXdUYXNrSW50ZXJmYWNlKCkpXG4gICAgbmV3VGFza0FjdGl2ZSA9IHRydWVcbiAgfSlcbiAgLy8gaGVyZSBzaG91bGQgYmUgYWRkZWQgdGhlIHJlc3Qgb2YgdGhlIGl0ZW1zIHN0b3JlZFxuICBzcGFjZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFjZVNlbGVjdClcbiAgc3BhY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcilcbiAgYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYWNlQ29udGFpbmVyKVxuICBhcHBDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkSXRlbUJ1dHRvbilcbn1cblxuVUkuY3JlYXRlVGFza0xpc3QgPSAodGFza0xpc3QpID0+IHtcbiAgY29uc3Qgb2xkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNvbnRhaW5lcicpXG5cbiAgZm9yIChjb25zdCB0YXNrRWxlbWVudCBvZiBvbGRUYXNrKSB7XG4gICAgdGFza0VsZW1lbnQucmVtb3ZlKClcbiAgfVxuXG4gIGZvciAoY29uc3QgdGFzayBvZiB0YXNrTGlzdCkge1xuICAgIGFwcENvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFRhc2sodGFzaykpXG4gIH1cbn1cblxuY29uc3QgYnVpbGROZXdUYXNrSW50ZXJmYWNlID0gKCkgPT4ge1xuICBjb25zdCBuZXdUYXNrQ29udGFpbmVyID0gYnVpbGRFbGVtZW50KCdkaXYnLCAnJywgJ25ldy10YXNrLWNvbnRhaW5lcicpXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBidWlsZEVsZW1lbnQoXG4gICAgJ2lucHV0JyxcbiAgICAnJyxcbiAgICAndGFzay1kZXNjcmlwdGlvbicsXG4gICAgJ2Rlc2NyaXB0aW9uLWlucHV0J1xuICApXG4gIGNvbnN0IHNwYWNlU2VsZWN0ID0gYnVpbGRTZWxlY3QoXG4gICAgX2hhbmRsZXIuZ2V0Q3VycmVudFNwYWNlKCksXG4gICAgX2hhbmRsZXIuZ2V0U3BhY2VzTGlzdCgpLFxuICAgICduZXctdGFzay1zcGFjZS1zZWxlY3QnXG4gIClcbiAgY29uc3QgYWRkQnV0dG9uID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnYWRkJywgJ25ldy10YXNrLWJ1dHRvbicpXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGJ1aWxkRWxlbWVudCgnYnV0dG9uJywgJ2NhbmNlbCcsICduZXctdGFzay1idXR0b24nKVxuICBjb25zdCBkYXRlSW5wdXQgPSBidWlsZEVsZW1lbnQoJ2lucHV0JywgJycsICdkYXRlLWlucHV0JylcbiAgY29uc3QgcG9zaWJsZVN0YXRlcyA9IF9oYW5kbGVyLmdldFN0YXRlcygpXG4gIGNvbnN0IHBvc2libGVQcmlvcml0aWVzID0gX2hhbmRsZXIuZ2V0UHJpb3JpdGllcygpXG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gYnVpbGRTZWxlY3QoXG4gICAgcG9zaWJsZVByaW9yaXRpZXNbMF0sXG4gICAgcG9zaWJsZVByaW9yaXRpZXMsXG4gICAgJ25ldy10YXNrLXByaW9yaXR5J1xuICApXG4gIGNvbnN0IHN0YXRlU2VsZWN0ID0gYnVpbGRTZWxlY3QoXG4gICAgcG9zaWJsZVN0YXRlc1swXSxcbiAgICBwb3NpYmxlU3RhdGVzLFxuICAgICduZXctdGFzay1zdGF0ZSdcbiAgKVxuXG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZGVzY3JpcHRpb24nKVxuXG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG5cbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChzcGFjZVNlbGVjdC52YWx1ZSA9PT0gJycpIHJldHVyblxuXG4gICAgX2hhbmRsZXIuaGFuZGxlTmV3VGFza0lucHV0KHtcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgc3BhY2U6IHNwYWNlU2VsZWN0LnZhbHVlLFxuICAgICAgZGF0ZTogZGF0ZUlucHV0LnZhbHVlLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5U2VsZWN0LnZhbHVlLFxuICAgICAgc3RhdGU6IHN0YXRlU2VsZWN0LnZhbHVlXG4gICAgfSlcblxuICAgIG5ld1Rhc2tDb250YWluZXIucmVtb3ZlKClcbiAgICBuZXdUYXNrQWN0aXZlID0gZmFsc2VcbiAgfSlcblxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3VGFza0NvbnRhaW5lci5yZW1vdmUoKVxuICAgIG5ld1Rhc2tBY3RpdmUgPSBmYWxzZVxuICB9KVxuXG4gIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dClcbiAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFjZVNlbGVjdClcbiAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG4gIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKVxuICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dClcbiAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdClcbiAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0ZVNlbGVjdClcbiAgcmV0dXJuIG5ld1Rhc2tDb250YWluZXJcbn1cblxuY29uc3QgYnVpbGRTZWxlY3QgPSAoZGVmYXVsdE9wdGlvbiwgaXRlbUxpc3QsIC4uLmNzc0NsYXNzZXMpID0+IHtcbiAgY29uc3Qgc2VsZWN0ID0gYnVpbGRFbGVtZW50KCdzZWxlY3QnLCAnJywgLi4uY3NzQ2xhc3NlcylcblxuICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkZWZhdWx0T3B0aW9uKVxuICBvcHRpb24udGV4dENvbnRlbnQgPSBkZWZhdWx0T3B0aW9uXG4gIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG5cbiAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1MaXN0KSB7XG4gICAgaWYgKGl0ZW0gPT09IGRlZmF1bHRPcHRpb24pIGNvbnRpbnVlXG5cbiAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbSlcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpdGVtXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgfVxuXG4gIHJldHVybiBzZWxlY3Rcbn1cblxuY29uc3QgYnVpbGRUYXNrID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGJ1aWxkRWxlbWVudCgnZGl2JywgJycsICd0YXNrLWNvbnRhaW5lcicpXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGJ1aWxkRWxlbWVudChcbiAgICAnaW5wdXQnLFxuICAgICcnLFxuICAgICd0YXNrLWRlc2NyaXB0aW9uJyxcbiAgICAnZGVzY3JpcHRpb24taW5wdXQnXG4gIClcbiAgY29uc3QgdGFza0RldGFpbHMgPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICdEZXRhaWxzJywgJ3Rhc2stZGV0YWlscycpXG4gIGNvbnN0IHRhc2tEZWxldGVCdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICdEZWxldGUnLCAndGFzay1kZWxldGUnKVxuICBjb25zdCB0YXNrU3RhdGUgPSBidWlsZFNlbGVjdCh0YXNrLnN0YXRlLCBfaGFuZGxlci5nZXRTdGF0ZXMoKSwgJ3Rhc2stc3RhdGUnKVxuICBjb25zdCB0YXNrRGF0ZSA9IGJ1aWxkRWxlbWVudCgnaW5wdXQnLCAnJywgJ2RhdGUtaW5wdXQnKVxuICBjb25zdCB0YXNrU3BhY2UgPSBidWlsZFNlbGVjdChcbiAgICB0YXNrLnNwYWNlLFxuICAgIF9oYW5kbGVyLmdldFNwYWNlc0xpc3QoKSxcbiAgICAndGFzay1zcGFjZSdcbiAgKVxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBidWlsZFNlbGVjdChcbiAgICB0YXNrLnByaW9yaXR5LFxuICAgIF9oYW5kbGVyLmdldFByaW9yaXRpZXMoKSxcbiAgICAndGFzay1wcmlvcml0eSdcbiAgKVxuICBjb25zdCB0YXNrTm90ZXMgPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICdub3RlcycsICd0YXNrLW5vdGVzJylcbiAgY29uc3QgdGFza05vdGVzVGV4dGFyZWEgPSBidWlsZEVsZW1lbnQoXG4gICAgJ3RleHRhcmVhJyxcbiAgICB0YXNrLm5vdGVzLFxuICAgICd0YXNrLW5vdGVzLXRleHRhcmVhJ1xuICApXG5cbiAgdGFza0NvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSBgMXB4IHNvbGlkICR7X2hhbmRsZXIuZ2V0UHJpb3JpdHlDb2xvcih0YXNrKX1gXG5cbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrLmRlc2NyaXB0aW9uKVxuICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICd0YXNrIGRlc2NyaXB0aW9uJylcbiAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIF9oYW5kbGVyLnVwZGF0ZVRhc2sodGFzaywgeyBkZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLnZhbHVlIH0pXG4gIH0pXG5cbiAgdGFza1N0YXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIF9oYW5kbGVyLnVwZGF0ZVRhc2sodGFzaywgeyBzdGF0ZTogdGFza1N0YXRlLnZhbHVlIH0pXG4gIH0pXG5cbiAgdGFza0RhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxuICB0YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFzay5kYXRlKVxuICB0YXNrRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBfaGFuZGxlci51cGRhdGVUYXNrKHRhc2ssIHsgZGF0ZTogdGFza0RhdGUudmFsdWUgfSlcbiAgfSlcblxuICB0YXNrU3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgX2hhbmRsZXIudXBkYXRlVGFzayh0YXNrLCB7IHNwYWNlOiB0YXNrU3BhY2UudmFsdWUgfSlcbiAgICBfaGFuZGxlci5zZXRDdXJyZW50U3BhY2UoX2hhbmRsZXIuZ2V0Q3VycmVudFNwYWNlKCkpXG4gIH0pXG5cbiAgdGFza1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIF9oYW5kbGVyLnVwZGF0ZVRhc2sodGFzaywgeyBwcmlvcml0eTogdGFza1ByaW9yaXR5LnZhbHVlIH0pXG4gIH0pXG5cbiAgY29uc3QgY2xlYW5PZmZOb3RlcyA9ICgpID0+IHtcbiAgICB0YXNrTm90ZXMudGV4dENvbnRlbnQgPSAnbm90ZXMnXG4gICAgdGFza05vdGVzVGV4dGFyZWEucmVtb3ZlKClcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stY29udGFpbmVyLXdpdGgtbm90ZXMnKVxuICB9XG5cbiAgdGFza05vdGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh0YXNrTm90ZXMudGV4dENvbnRlbnQgPT09ICdub3RlcycpIHtcbiAgICAgIHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9ICdjbG9zZSBub3RlcydcbiAgICAgIHRhc2tOb3Rlc1RleHRhcmVhLnZhbHVlID0gdGFzay5ub3Rlc1xuXG4gICAgICB0YXNrTm90ZXNUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgX2hhbmRsZXIudXBkYXRlVGFzayh0YXNrLCB7IG5vdGVzOiB0YXNrTm90ZXNUZXh0YXJlYS52YWx1ZSB9KVxuICAgICAgfSlcblxuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTm90ZXNUZXh0YXJlYSlcbiAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXItd2l0aC1ub3RlcycpXG4gICAgfSBlbHNlIGlmICh0YXNrTm90ZXMudGV4dENvbnRlbnQgPT09ICdjbG9zZSBub3RlcycpIHtcbiAgICAgIGNsZWFuT2ZmTm90ZXMoKVxuICAgIH1cbiAgfSlcblxuICB0YXNrRGV0YWlscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAodGFza0RldGFpbHMudGV4dENvbnRlbnQgPT09ICdEZXRhaWxzJykge1xuICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSAnTGVzcydcblxuICAgICAgdGFza0RlbGV0ZUJ1dHRvbi5yZW1vdmUoKVxuICAgICAgdGFza1N0YXRlLnJlbW92ZSgpXG5cbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGUpXG4gICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tTcGFjZSlcbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KVxuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTm90ZXMpXG4gICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tTdGF0ZSlcbiAgICB9IGVsc2UgaWYgKHRhc2tEZXRhaWxzLnRleHRDb250ZW50ID09PSAnTGVzcycpIHtcbiAgICAgIHRhc2tEZXRhaWxzLnRleHRDb250ZW50ID0gJ0RldGFpbHMnXG5cbiAgICAgIHRhc2tEYXRlLnJlbW92ZSgpXG4gICAgICB0YXNrU3BhY2UucmVtb3ZlKClcbiAgICAgIHRhc2tQcmlvcml0eS5yZW1vdmUoKVxuICAgICAgdGFza1N0YXRlLnJlbW92ZSgpXG4gICAgICB0YXNrTm90ZXMucmVtb3ZlKClcblxuICAgICAgY2xlYW5PZmZOb3RlcygpXG5cbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ1dHRvbilcbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1N0YXRlKVxuICAgIH1cbiAgfSlcblxuICB0YXNrRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIF9oYW5kbGVyLmhhbmRsZURlbGV0aW9uKHRhc2spXG4gICAgdGFza0NvbnRhaW5lci5yZW1vdmUoKVxuICB9KVxuXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKVxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKVxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdXR0b24pXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1N0YXRlKVxuXG4gIHJldHVybiB0YXNrQ29udGFpbmVyXG59XG5cbmNvbnN0IGJ1aWxkRWxlbWVudCA9ICh0eXBlLCB0ZXh0LCAuLi5jbGFzc2VzKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG5cbiAgZm9yIChjb25zdCBjc3NDbGFzcyBvZiBjbGFzc2VzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKVxuICB9XG5cbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRcblxuICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQgeyBVSSB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFzaydcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi91aSdcblxuY29uc3QgSGFuZGxlciA9IHt9XG5cbkhhbmRsZXIuaGFuZGxlTmV3VGFza0lucHV0ID0gKG5ld1Rhc2spID0+IHtcbiAgY29uc3QgdGFzayA9IFRhc2submV3VGFzayhcbiAgICBuZXdUYXNrLmRlc2NyaXB0aW9uLFxuICAgIG5ld1Rhc2suZGF0ZSxcbiAgICAnbm90ZXMnLFxuICAgICcjdDEgI3QyJyxcbiAgICBuZXdUYXNrLnNwYWNlLFxuICAgIG5ld1Rhc2sucHJpb3JpdHksXG4gICAgbmV3VGFzay5zdGF0ZVxuICApXG4gIFRhc2suYWRkVGFzayh0YXNrKVxuICBVSS5jcmVhdGVUYXNrTGlzdChUYXNrLmdldFRhc2tzKFsoZSkgPT4gZS5zcGFjZSA9PT0gVGFzay5jdXJyZW50U3BhY2VdKSlcbiAgVGFzay5zYXZlKClcblxuICBjb25zb2xlLmxvZyhUYXNrLmxpc3QpXG59XG5cbkhhbmRsZXIuYWRkTmV3U3BhY2UgPSAoc3BhY2VOYW1lKSA9PiB7XG4gIFRhc2suc3BhY2VzW3NwYWNlTmFtZV0gPSBUYXNrLm1ha2VEZWZhdWx0U3BhY2VFbGVtZW50cygpXG4gIFVJLnVwZGF0ZVNwYWNlSGVhZGVyKClcbiAgVGFzay5zYXZlKClcbn1cblxuSGFuZGxlci5oYW5kbGVEZWxldGlvbiA9ICh0YXNrKSA9PiB7XG4gIFRhc2suZGVsZXRlVGFzayh0YXNrKVxuICBUYXNrLnNhdmUoKVxuXG4gIGNvbnNvbGUubG9nKFRhc2subGlzdClcbn1cblxuSGFuZGxlci5kZWxldGVDdXJyZW50U3BhY2UgPSAoKSA9PiB7XG4gIGxldCBzcGFjZXMgPSBUYXNrLmdldFNwYWNlc0xpc3QoKVxuICBpZiAoc3BhY2VzLmxlbmd0aCA9PT0gMSkgcmV0dXJuXG5cbiAgZGVsZXRlIFRhc2suc3BhY2VzW1Rhc2suY3VycmVudFNwYWNlXVxuICBUYXNrLmRlbGV0ZVRhc2tzKFsoZSkgPT4gZS5zcGFjZSA9PT0gVGFzay5jdXJyZW50U3BhY2VdKVxuICBzcGFjZXMgPSBUYXNrLmdldFNwYWNlc0xpc3QoKVxuICBUYXNrLmN1cnJlbnRTcGFjZSA9IHNwYWNlc1swXVxuXG4gIEhhbmRsZXIuc2V0Q3VycmVudFNwYWNlKFRhc2suY3VycmVudFNwYWNlKVxuICBVSS51cGRhdGVTcGFjZUhlYWRlcigpXG4gIFRhc2suc2F2ZSgpXG59XG5cbkhhbmRsZXIudXBkYXRlVGFzayA9ICh0YXNrLCBuZXdBdHRyaWJ1dGVzKSA9PiB7XG4gIGZvciAoY29uc3Qga2V5IGluIG5ld0F0dHJpYnV0ZXMpIHtcbiAgICB0YXNrW2tleV0gPSBuZXdBdHRyaWJ1dGVzW2tleV1cbiAgfVxuXG4gIFRhc2suc2F2ZSgpXG59XG5cbkhhbmRsZXIudXBkYXRlQ3VycmVudFNwYWNlTmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gIGlmIChuZXdOYW1lID09PSBUYXNrLmN1cnJlbnRTcGFjZSkgcmV0dXJuXG5cbiAgVGFzay5zcGFjZXNbbmV3TmFtZV0gPSBUYXNrLnNwYWNlc1tUYXNrLmN1cnJlbnRTcGFjZV1cbiAgZGVsZXRlIFRhc2suc3BhY2VzW1Rhc2suY3VycmVudFNwYWNlXVxuXG4gIC8vIHVwZGF0ZSB0aGUgdGFzayBzcGFjZSBvZiB0aGUgcHJldmlvdXMgc3BhY2VcbiAgY29uc3QgY3VyclNwYWNlVGFzayA9IFRhc2suZ2V0VGFza3MoWyhlKSA9PiBlLnNwYWNlID09PSBUYXNrLmN1cnJlbnRTcGFjZV0pXG4gIGZvciAoY29uc3QgdGFzayBvZiBjdXJyU3BhY2VUYXNrKSB7XG4gICAgdGFzay5zcGFjZSA9IG5ld05hbWVcbiAgfVxuXG4gIFRhc2suY3VycmVudFNwYWNlID0gbmV3TmFtZVxuXG4gIFVJLnVwZGF0ZVNwYWNlSGVhZGVyKClcbiAgVGFzay5zYXZlKClcbiAgVGFzay5zYXZlQ3VycmVudFNwYWNlKClcbn1cblxuSGFuZGxlci5nZXRTcGFjZXNMaXN0ID0gKCkgPT4ge1xuICByZXR1cm4gVGFzay5nZXRTcGFjZXNMaXN0KClcbn1cblxuSGFuZGxlci5nZXRTdGF0ZXMgPSAoKSA9PiB7XG4gIHJldHVybiBUYXNrLnNwYWNlc1tUYXNrLmN1cnJlbnRTcGFjZV0uc3RhdGVzXG59XG5cbkhhbmRsZXIuZ2V0UHJpb3JpdGllcyA9ICgpID0+IHtcbiAgcmV0dXJuIFRhc2suc3BhY2VzW1Rhc2suY3VycmVudFNwYWNlXS5wcmlvcml0aWVzXG59XG5cbkhhbmRsZXIuZ2V0Q3VycmVudFNwYWNlID0gKCkgPT4ge1xuICByZXR1cm4gVGFzay5jdXJyZW50U3BhY2Vcbn1cblxuSGFuZGxlci5nZXRQcmlvcml0eUNvbG9yID0gKHRhc2spID0+IHtcbiAgY29uc3QgY29sb3JzID0gVGFzay5zcGFjZXNbdGFzay5zcGFjZV0uY29sb3JzXG4gIGNvbnN0IGNvbG9ySSA9IFRhc2suc3BhY2VzW3Rhc2suc3BhY2VdLnByaW9yaXRpZXMuZmluZEluZGV4KFxuICAgIChlKSA9PiBlID09PSB0YXNrLnByaW9yaXR5XG4gIClcbiAgcmV0dXJuIGNvbG9yc1tjb2xvckldXG59XG5cbi8vIGNoYW5nZXMgdGhlIGN1cnJlbnQgc3BhY2UgYW5kIHNob3dzIHRoYXQgc3BhY2UgbGlzdC5cbkhhbmRsZXIuc2V0Q3VycmVudFNwYWNlID0gKHNwYWNlKSA9PiB7XG4gIFRhc2suY3VycmVudFNwYWNlID0gc3BhY2VcbiAgVUkuY3JlYXRlVGFza0xpc3QoVGFzay5nZXRUYXNrcyhbKGUpID0+IGUuc3BhY2UgPT09IFRhc2suY3VycmVudFNwYWNlXSkpXG4gIFRhc2suc2F2ZUN1cnJlbnRTcGFjZSgpXG59XG5cblRhc2suYWRkVGFzayhcbiAgVGFzay5uZXdUYXNrKFxuICAgICdUaGlzIGJlbG9uZ3MgaW4gRGVmYXVsdCcsXG4gICAgJycsXG4gICAgJ25vdGVzJyxcbiAgICAnI3QxICN0MicsXG4gICAgJ0RlZmF1bHQnLFxuICAgICdMT1cnLFxuICAgICdUT0RPJ1xuICApXG4pXG5cblRhc2suYWRkVGFzayhcbiAgVGFzay5uZXdUYXNrKFxuICAgICdUaGlzIGFsc28gYmVsb25ncyB0byBEZWZhdWx0JyxcbiAgICAnMjAyMy0xMS0wNicsXG4gICAgJ25vdGVzJyxcbiAgICAnI3QxJyxcbiAgICAnRGVmYXVsdCcsXG4gICAgJ0hJR0gnLFxuICAgICdET0lORydcbiAgKVxuKVxuXG5UYXNrLmFkZFRhc2soXG4gIFRhc2submV3VGFzayhcbiAgICAnVGhpcyBiZWxvbmdzIGluIE90aGVyJyxcbiAgICAnJyxcbiAgICAnbm90ZXMnLFxuICAgICcjdDEgI3QyJyxcbiAgICAnT3RoZXInLFxuICAgICdMT1cnLFxuICAgICdUT0RPJ1xuICApXG4pXG5cblRhc2subG9hZCgpXG5VSS5zZXRIYW5kbGVyKEhhbmRsZXIpXG5VSS5jcmVhdGVCYXNlSW50ZXJmYWNlKClcblVJLmNyZWF0ZVRhc2tMaXN0KFRhc2suZ2V0VGFza3MoWyhlKSA9PiBlLnNwYWNlID09PSBUYXNrLmN1cnJlbnRTcGFjZV0pKVxuXG4vKipcbiAqIERPTkUgYWRkIGFiaWxpdHkgdG8gY2hhbmdlIHNwYWNlcyB0YXNrIGxpc3RcbiAqIERPTkUgbWFrZSB0aGUgZGVmYXVsdCBzcGFjZSB3aGVuIGNyZWF0aW5nIGEgbmV3IHRhc2sgdG8gYmUgdGhlIGN1cnJlbnQgc3BhY2UuXG4gKiBET05FIGFkZCBkYXRlXG4gKiBET05FIGFkZCBhYmlsaXR5IHRvIGV4cGFuZCBhIHNpbmdsZSB0b2RvIHRvIHNlZS9lZGl0IGl0cyBkZXRhaWxzXG4gKiBET05FIGFkZCBhYmlsaXR5IHRvIGVkaXQgYW5kIHNhdmUgdGhlIGRhdGUgb2YgYW4gZXhpc3RpbmcgdGFza1xuICogRE9ORSBhZGQgc3RhdGUgcHJvcGVydHlcbiAqIERPTkUgYWRkIGFiaWxpdHkgdG8gY2hhZ2UgdGhlIGRlc2NyaXB0aW9uIG9mIGFuIGV4aXN0aW5nIHRhc2tcbiAqIERPTkUgZml4IHRoZSBzdGF0ZSBwb3NpdGlvbmluZ1xuICogRE9ORSBhZGQgYWJpbGl0eSB0byBjaGFuZ2UgdGhlIHNwYWNlIG9mIGFuIGV4aXN0aW5nIHRhc2suXG4gKiBET05FIGFkZCBwcmlvcml0eVxuICogRE9ORSBzYXZlIGRhdGFcbiAqIERPTkUgYWRkIGFiaWxpdHkgdG8gbWFrZSBhbmQgZGVsZXRlIHNwYWNlc1xuICogRE9ORSBhZGQgcHJpb3JpdHkgYW5kIHN0YXRlIHNlbGVjdGlvbiB3aGVuIGFkZGluZyBhIHRhc2tcbiAqIERPTkUgZWRpdCBhIHNwYWNlIG5hbWVcbiAqIERPTkUgYWRkIG5vdGVzXG4gKiBUT0RPIGFkZCBhYmlsaXR5IHRvIHNvcnQgdGFza1xuICogVE9ETyBjcmVhdGUgbmV3IHRhc2sgYnkgcHJlc3NpbmcgZW50ZXJcbiAqIFRPRE8gY2xvc2Ugbm90ZXMgd2l0aCB0aGUgJ2VzY2FwZScga2V5XG4gKiBUT0RPIGNsZWFuIHVwIGJ1aWxkVGFzayAmIGJ1aWxkTmV3VGFza0ludGVyZmFjZVxuICogVE9ETyBhZGQgdGltZVxuICogVE9ETyBhZGQgdGFnc1xuICogVE9ETyBhZGQgZmlsdGVyc1xuICogVE9ETyBhZGQgbWFudWFsIHNvcnRpbmcgYW5kIHNhdmUgaXQgb24gJ2JvYXJkcydcbiAqIFRPRE8gYWRkIHN1YnRhc2tcbiAqL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9