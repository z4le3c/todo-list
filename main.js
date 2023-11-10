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
    const newSpaceButton = buildElement('button', 'new space', 'new-space-button')
    const cancelSpaceButton = buildElement('button', 'cancel', 'new-space-button')

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
    const spaceWarningContainer = buildElement('div', '', 'space-warning-container')
    const warningText = buildElement('div', 'Delete current space?', 'delete-space-warning')
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
    const confirmButton = buildElement('button', 'change name', 'edit-space-button')
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
  const descriptionInput = buildElement('input', '', 'task-description', 'description-input')
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
  const prioritySelect = buildSelect(posiblePriorities[0], posiblePriorities, 'new-task-priority')
  const stateSelect = buildSelect(posibleStates[0], posibleStates, 'new-task-state')

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
  const taskDescription = buildElement('input', '', 'task-description', 'description-input')
  const taskDetails = buildElement('button', 'Details', 'task-details')
  const taskDeleteButton = buildElement('button', 'Delete', 'task-delete')
  const taskState = buildSelect(task.state, _handler.getStates(), 'task-state')
  const taskDate = buildElement('input', '', 'date-input')
  const taskSpace = buildSelect(task.space, _handler.getSpacesList(), 'task-space')
  const taskPriority = buildSelect(task.priority, _handler.getPriorities(), 'task-priority')
  const taskNotes = buildElement('button', 'notes', 'task-notes')
  const taskNotesTextarea = buildElement('textarea', task.notes, 'task-notes-textarea')

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
  _ui__WEBPACK_IMPORTED_MODULE_2__.UI.createTaskList(_task__WEBPACK_IMPORTED_MODULE_1__.Task.getTasks([
    e => e.space === _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace
  ]))
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
  const colorI = _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[task.space].priorities.findIndex((e) => e === task.priority)
  return colors[colorI]
}

// changes the current space and shows that space list.
Handler.setCurrentSpace = (space) => {
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace = space
  _ui__WEBPACK_IMPORTED_MODULE_2__.UI.createTaskList(_task__WEBPACK_IMPORTED_MODULE_1__.Task.getTasks([
    e => e.space === _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace
  ]))
  _task__WEBPACK_IMPORTED_MODULE_1__.Task.saveCurrentSpace()
}

_task__WEBPACK_IMPORTED_MODULE_1__.Task.addTask(_task__WEBPACK_IMPORTED_MODULE_1__.Task.newTask(
  'This belongs in Default',
  '',
  'notes',
  '#t1 #t2',
  'Default',
  'LOW',
  'TODO'
))

_task__WEBPACK_IMPORTED_MODULE_1__.Task.addTask(_task__WEBPACK_IMPORTED_MODULE_1__.Task.newTask(
  'This also belongs to Default',
  '2023-11-06',
  'notes',
  '#t1',
  'Default',
  'HIGH',
  'DOING'
))

_task__WEBPACK_IMPORTED_MODULE_1__.Task.addTask(_task__WEBPACK_IMPORTED_MODULE_1__.Task.newTask(
  'This belongs in Other',
  '',
  'notes',
  '#t1 #t2',
  'Other',
  'LOW',
  'TODO'
))

_task__WEBPACK_IMPORTED_MODULE_1__.Task.load()
_ui__WEBPACK_IMPORTED_MODULE_2__.UI.setHandler(Handler)
_ui__WEBPACK_IMPORTED_MODULE_2__.UI.createBaseInterface()
_ui__WEBPACK_IMPORTED_MODULE_2__.UI.createTaskList(_task__WEBPACK_IMPORTED_MODULE_1__.Task.getTasks([
  e => e.space === _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace
]))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlOzs7Ozs7Ozs7Ozs7Ozs7QUNuSWY7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxnQ0FBZ0M7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9DQUFvQztBQUNwRSxHQUFHOztBQUVIO0FBQ0EsZ0NBQWdDLHdCQUF3QjtBQUN4RCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzQkFBc0I7QUFDdEQsR0FBRzs7QUFFSDtBQUNBLGdDQUFnQyx3QkFBd0I7QUFDeEQ7QUFDQSxHQUFHOztBQUVIO0FBQ0EsZ0NBQWdDLDhCQUE4QjtBQUM5RCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsZ0NBQWdDO0FBQ3BFLE9BQU87O0FBRVA7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFYTs7Ozs7OztVQ2xXYjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDUztBQUNKOztBQUV6Qjs7QUFFQTtBQUNBLGVBQWUsdUNBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUNBQUk7QUFDTixFQUFFLG1DQUFFLGdCQUFnQix1Q0FBSTtBQUN4QixxQkFBcUIsdUNBQUk7QUFDekI7QUFDQSxFQUFFLHVDQUFJOztBQUVOLGNBQWMsdUNBQUk7QUFDbEI7O0FBRUE7QUFDQSxFQUFFLHVDQUFJLHFCQUFxQix1Q0FBSTtBQUMvQixFQUFFLG1DQUFFO0FBQ0osRUFBRSx1Q0FBSTtBQUNOOztBQUVBO0FBQ0EsRUFBRSx1Q0FBSTtBQUNOLEVBQUUsdUNBQUk7O0FBRU4sY0FBYyx1Q0FBSTtBQUNsQjs7QUFFQTtBQUNBLGVBQWUsdUNBQUk7QUFDbkI7O0FBRUEsU0FBUyx1Q0FBSSxRQUFRLHVDQUFJO0FBQ3pCLEVBQUUsdUNBQUksaUNBQWlDLHVDQUFJO0FBQzNDLFdBQVcsdUNBQUk7QUFDZixFQUFFLHVDQUFJOztBQUVOLDBCQUEwQix1Q0FBSTtBQUM5QixFQUFFLG1DQUFFO0FBQ0osRUFBRSx1Q0FBSTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsdUNBQUk7QUFDTjs7QUFFQTtBQUNBLGtCQUFrQix1Q0FBSTs7QUFFdEIsRUFBRSx1Q0FBSSxtQkFBbUIsdUNBQUksUUFBUSx1Q0FBSTtBQUN6QyxTQUFTLHVDQUFJLFFBQVEsdUNBQUk7O0FBRXpCO0FBQ0Esd0JBQXdCLHVDQUFJLDhCQUE4Qix1Q0FBSTtBQUM5RDtBQUNBO0FBQ0E7O0FBRUEsRUFBRSx1Q0FBSTs7QUFFTixFQUFFLG1DQUFFO0FBQ0osRUFBRSx1Q0FBSTtBQUNOLEVBQUUsdUNBQUk7QUFDTjs7QUFFQTtBQUNBLFNBQVMsdUNBQUk7QUFDYjs7QUFFQTtBQUNBLFNBQVMsdUNBQUksUUFBUSx1Q0FBSTtBQUN6Qjs7QUFFQTtBQUNBLFNBQVMsdUNBQUksUUFBUSx1Q0FBSTtBQUN6Qjs7QUFFQTtBQUNBLFNBQVMsdUNBQUk7QUFDYjs7QUFFQTtBQUNBLGlCQUFpQix1Q0FBSTtBQUNyQixpQkFBaUIsdUNBQUk7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSx1Q0FBSTtBQUNOLEVBQUUsbUNBQUUsZ0JBQWdCLHVDQUFJO0FBQ3hCLHFCQUFxQix1Q0FBSTtBQUN6QjtBQUNBLEVBQUUsdUNBQUk7QUFDTjs7QUFFQSx1Q0FBSSxTQUFTLHVDQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQUksU0FBUyx1Q0FBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUFJLFNBQVMsdUNBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBSTtBQUNKLG1DQUFFO0FBQ0YsbUNBQUU7QUFDRixtQ0FBRSxnQkFBZ0IsdUNBQUk7QUFDdEIsbUJBQW1CLHVDQUFJO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jYXBwIHtcbiAgICB3aWR0aDogNzIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTZyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMS42cmVtO1xufVxuXG4uc3BhY2UtaGVhZGVyLXNlbGVjdCB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi5zcGFjZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbn1cblxuLnNwYWNlLW9wdGlvbi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgd2lkdGg6IDRyZW07XG59XG5cbi5zcGFjZS1pbnB1dC1jb250YWluZXIsIFxuLnNwYWNlLXdhcm5pbmctY29udGFpbmVyLFxuLnNwYWNlLWVkaXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbn1cblxuLnNwYWNlLWlucHV0LFxuLmRlbGV0ZS1zcGFjZS13YXJuaW5nLFxuLnNwYWNlLWVkaXQtaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uYWRkLWl0ZW0tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IDZyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5zZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xufVxuXG4ubmV3LXRhc2stY29udGFpbmVyIHtcbiAgICB3aWR0aCA6IDgwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNDAwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMS42cmVtO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4ubmV3LXRhc2stY29udGFpbmVyID4gLmRlc2NyaXB0aW9uLWlucHV0IHtcbiAgICB3aWR0aDogNjklO1xufVxuXG4uZGVzY3JpcHRpb24taW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmV3LXRhc2stc3BhY2Utc2VsZWN0IHtcbiAgICB3aWR0aDogMTAlO1xuICAgIGhlaWdodDogNi44Y2g7XG59XG5cbi5uZXctdGFzay1idXR0b24ge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgaGVpZ2h0OiA1Y2g7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgcGFkZGluZzogLjhyZW0gMS42cmVtO1xuICAgIHJvdy1nYXA6IC44cmVtO1xufVxuXG4udGFzay1jb250YWluZXItd2l0aC1ub3RlcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcbn1cblxuLnRhc2stY29udGFpbmVyID4gZGl2IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAuOHJlbSAxLjZyZW07XG59XG5cbi50YXNrLWRlc2NyaXB0aW9uIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4udGFzay1zdGF0ZSB7XG4gICAgZ3JpZC1jb2x1bW46IC0yO1xufVxuXG4udGFzay1ub3Rlcy10ZXh0YXJlYSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICBncmlkLXJvdzogMyAvIDY7XG5cbiAgICByZXNpemU6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOzs7SUFHSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHFDQUFxQztBQUN6Qzs7QUFFQTs7O0lBR0ksZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7O0lBRXZCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7O0lBRWYsWUFBWTtJQUNaLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2FwcCB7XFxuICAgIHdpZHRoOiA3MjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTZyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMS42cmVtO1xcbn1cXG5cXG4uc3BhY2UtaGVhZGVyLXNlbGVjdCB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgd2lkdGg6IDI1JTtcXG59XFxuXFxuLnNwYWNlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5zcGFjZS1vcHRpb24tYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbn1cXG5cXG4uc3BhY2UtaW5wdXQtY29udGFpbmVyLCBcXG4uc3BhY2Utd2FybmluZy1jb250YWluZXIsXFxuLnNwYWNlLWVkaXQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLnNwYWNlLWlucHV0LFxcbi5kZWxldGUtc3BhY2Utd2FybmluZyxcXG4uc3BhY2UtZWRpdC1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFkZC1pdGVtLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XFxufVxcblxcbi5uZXctdGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aCA6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSA0MDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwIDEuNnJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLm5ldy10YXNrLWNvbnRhaW5lciA+IC5kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIHdpZHRoOiA2OSU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm5ldy10YXNrLXNwYWNlLXNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogNi44Y2g7XFxufVxcblxcbi5uZXctdGFzay1idXR0b24ge1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDVjaDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZzogLjhyZW0gMS42cmVtO1xcbiAgICByb3ctZ2FwOiAuOHJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLXdpdGgtbm90ZXMge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgPiBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogLjhyZW0gMS42cmVtO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcbn1cXG5cXG4udGFzay1zdGF0ZSB7XFxuICAgIGdyaWQtY29sdW1uOiAtMjtcXG59XFxuXFxuLnRhc2stbm90ZXMtdGV4dGFyZWEge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogMyAvIDY7XFxuXFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFRhc2sgPSB7fVxuXG5UYXNrLnRhZ3MgPSBbJyNUYWcxJywgJyNUYWcyJ11cblRhc2suc3BhY2VzID0ge1xuICBEZWZhdWx0OiB7XG4gICAgcHJpb3JpdGllczogWydMT1cnLCAnTUVESVVNJywgJ0hJR0gnXSxcbiAgICBjb2xvcnM6IFsnYmxhY2snLCAnYmx1ZScsICdyZWQnXSxcbiAgICBzdGF0ZXM6IFsnVE9ETycsICdET0lORycsICdET05FJ11cbiAgfSxcbiAgT3RoZXI6IHtcbiAgICBwcmlvcml0aWVzOiBbJ0xPVycsICdNRURJVU0nLCAnSElHSCddLFxuICAgIGNvbG9yczogWydibGFjaycsICdibHVlJywgJ3JlZCddLFxuICAgIHN0YXRlczogWydUT0RPJywgJ0RPSU5HJywgJ0RPTkUnXVxuICB9LFxuICBBbm90aGVyOiB7XG4gICAgcHJpb3JpdGllczogWydMT1cnLCAnTUVESVVNJywgJ0hJR0gnXSxcbiAgICBjb2xvcnM6IFsnYmxhY2snLCAnYmx1ZScsICdyZWQnXSxcbiAgICBzdGF0ZXM6IFsnVE9ETycsICdET0lORycsICdET05FJ11cbiAgfVxufVxuXG5UYXNrLmN1cnJlbnRTcGFjZSA9ICdEZWZhdWx0J1xuXG5UYXNrLmJvYXJkcyA9IFtdXG5UYXNrLmxpc3QgPSBuZXcgTWFwKClcblxubGV0IF9pZENvdW50ZXIgPSAwXG5cblRhc2suc2F2ZSA9ICgpID0+IHtcbiAgY29uc3QgU2F2ZU9iamVjdCA9IHtcbiAgICBsaXN0OiBBcnJheS5mcm9tKFRhc2subGlzdCksXG4gICAgX2lkQ291bnRlcixcbiAgICBzcGFjZXM6IFRhc2suc3BhY2VzXG4gIH1cbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoU2F2ZU9iamVjdCkpXG59XG5cblRhc2suc2F2ZUN1cnJlbnRTcGFjZSA9ICgpID0+IHtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50U3BhY2UnLCBUYXNrLmN1cnJlbnRTcGFjZSlcbn1cblxuVGFzay5sb2FkID0gKCkgPT4ge1xuICBsZXQgZGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpXG4gIGlmIChkYXRhKSB7XG4gICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICBUYXNrLmxpc3QgPSBuZXcgTWFwKGRhdGEubGlzdClcbiAgICBfaWRDb3VudGVyID0gZGF0YS5faWRDb3VudGVyXG4gICAgVGFzay5zcGFjZXMgPSBkYXRhLnNwYWNlc1xuICB9XG4gIGNvbnN0IGN1cnJlbnRTcGFjZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFNwYWNlJylcbiAgaWYgKGN1cnJlbnRTcGFjZSkge1xuICAgIFRhc2suY3VycmVudFNwYWNlID0gY3VycmVudFNwYWNlXG4gIH1cbn1cblxuVGFzay5tYWtlRGVmYXVsdFNwYWNlRWxlbWVudHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJpb3JpdGllczogWydMT1cnLCAnTUVESVVNJywgJ0hJR0gnXSxcbiAgICBjb2xvcnM6IFsnYmxhY2snLCAnYmx1ZScsICdyZWQnXSxcbiAgICBzdGF0ZXM6IFsnVE9ETycsICdET0lORycsICdET05FJ11cbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb25cbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHByaW9yaXR5XG4gKiBAcGFyYW0ge3N0cmluZ30gbm90ZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHNwYWNlXG4gKi9cblRhc2submV3VGFzayA9IChkZXNjcmlwdGlvbiwgZGF0ZSwgbm90ZXMsIHRhZ3MsIHNwYWNlLCBwcmlvcml0eSwgc3RhdGUpID0+IHtcbiAgY29uc3Qgb2JqID0ge31cbiAgb2JqLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgb2JqLmRhdGUgPSBkYXRlXG4gIG9iai5wcmlvcml0eSA9IHByaW9yaXR5XG4gIG9iai5ub3RlcyA9IG5vdGVzXG4gIG9iai5zdGF0ZSA9IHN0YXRlXG4gIG9iai5zcGFjZSA9IHNwYWNlXG4gIG9iai50YWdzID0gdGFnc1xuICBvYmouc3VidGFzayA9IFtdXG4gIG9iai5pZCA9IF9pZENvdW50ZXIrK1xuXG4gIHJldHVybiBvYmpcbn1cblxuVGFzay5hZGRUYXNrID0gKHRhc2spID0+IHtcbiAgVGFzay5saXN0LnNldCh0YXNrLmlkLCB0YXNrKVxufVxuXG5UYXNrLmRlbGV0ZVRhc2sgPSAodGFzaykgPT4ge1xuICBUYXNrLmxpc3QuZGVsZXRlKHRhc2suaWQpXG59XG5cblRhc2suZGVsZXRlVGFza3MgPSAoZmlsdGVycykgPT4ge1xuICBjb25zdCB0YXNrVG9EZWxldGUgPSBUYXNrLmdldFRhc2tzKGZpbHRlcnMpXG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tUb0RlbGV0ZSkge1xuICAgIFRhc2subGlzdC5kZWxldGUodGFzay5pZClcbiAgfVxufVxuXG5UYXNrLmdldFRhc2tzID0gKGZpbHRlcnMpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdXG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIFRhc2subGlzdC52YWx1ZXMoKSkge1xuICAgIGxpc3QucHVzaCh0YXNrKVxuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIGZpbHRlcnMpIHtcbiAgICAgIGlmICghZmlsdGVyKHRhc2spKSB7XG4gICAgICAgIGxpc3QucG9wKClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGlzdFxufVxuXG5UYXNrLnNvcnRUYXNrcyA9ICh0YXNrcywgY29tcGFyYXRvciwgZGVzY2VuZGluZykgPT4ge31cblxuVGFzay5nZXRTcGFjZXNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBsaXN0ID0gW11cblxuICBmb3IgKGNvbnN0IHNwYWNlIGluIFRhc2suc3BhY2VzKSB7XG4gICAgbGlzdC5wdXNoKHNwYWNlKVxuICB9XG5cbiAgcmV0dXJuIGxpc3Rcbn1cblxuZXhwb3J0IHsgVGFzayB9XG4iLCJjb25zdCBVSSA9IHt9XG5cbmNvbnN0IGFwcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKVxubGV0IG5ld1Rhc2tBY3RpdmUgPSBmYWxzZVxuXG5sZXQgX2hhbmRsZXJcblxuVUkuc2V0SGFuZGxlciA9IChoYW5kbGVyKSA9PiB7XG4gIF9oYW5kbGVyID0gaGFuZGxlclxufVxuXG5VSS51cGRhdGVTcGFjZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qgb2xkU3BhY2VTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BhY2UtaGVhZGVyLXNlbGVjdCcpXG4gIGNvbnN0IG5ld1NwYWNlU2VsZWN0ID0gYnVpbGRTZWxlY3QoXG4gICAgX2hhbmRsZXIuZ2V0Q3VycmVudFNwYWNlKCksXG4gICAgX2hhbmRsZXIuZ2V0U3BhY2VzTGlzdCgpLFxuICAgICdzcGFjZS1oZWFkZXItc2VsZWN0J1xuICApXG5cbiAgbmV3U3BhY2VTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgX2hhbmRsZXIuc2V0Q3VycmVudFNwYWNlKG5ld1NwYWNlU2VsZWN0LnZhbHVlKVxuICB9KVxuXG4gIG9sZFNwYWNlU2VsZWN0LnJlcGxhY2VXaXRoKG5ld1NwYWNlU2VsZWN0KVxufVxuXG5VSS5jcmVhdGVCYXNlSW50ZXJmYWNlID0gKCkgPT4ge1xuICBjb25zdCBzcGFjZUNvbnRhaW5lciA9IGJ1aWxkRWxlbWVudCgnZGl2JywgJycsICdzcGFjZS1jb250YWluZXInKVxuICBjb25zdCBzcGFjZVNlbGVjdCA9IGJ1aWxkU2VsZWN0KFxuICAgIF9oYW5kbGVyLmdldEN1cnJlbnRTcGFjZSgpLFxuICAgIF9oYW5kbGVyLmdldFNwYWNlc0xpc3QoKSxcbiAgICAnc3BhY2UtaGVhZGVyLXNlbGVjdCdcbiAgKVxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gYnVpbGRFbGVtZW50KCdkaXYnLCAnJywgJ3NwYWNlLWJ1dHRvbnMtY29udGFpbmVyJylcbiAgY29uc3QgYWRkU3BhY2VCdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICcrJywgJ3NwYWNlLW9wdGlvbi1idXR0b24nKVxuICBjb25zdCBkZWxldGVTcGFjZUJ1dHRvbiA9IGJ1aWxkRWxlbWVudCgnYnV0dG9uJywgJy0nLCAnc3BhY2Utb3B0aW9uLWJ1dHRvbicpXG4gIGNvbnN0IGVkaXRTcGFjZUJ1dHRvbiA9IGJ1aWxkRWxlbWVudCgnYnV0dG9uJywgJ2UnLCAnc3BhY2Utb3B0aW9uLWJ1dHRvbicpXG4gIGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICcrJywgJ2FkZC1pdGVtLWJ1dHRvbicpXG5cbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRTcGFjZUJ1dHRvbilcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVTcGFjZUJ1dHRvbilcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0U3BhY2VCdXR0b24pXG5cbiAgc3BhY2VTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgX2hhbmRsZXIuc2V0Q3VycmVudFNwYWNlKHNwYWNlU2VsZWN0LnZhbHVlKVxuICB9KVxuXG4gIGFkZFNwYWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHNwYWNlSW5wdXRDb250YWluZXIgPSBidWlsZEVsZW1lbnQoJ2RpdicsICcnLCAnc3BhY2UtaW5wdXQtY29udGFpbmVyJylcbiAgICBjb25zdCB0ZXh0SW5wdXQgPSBidWlsZEVsZW1lbnQoJ2lucHV0JywgJycsICdzcGFjZS1pbnB1dCcpXG4gICAgY29uc3QgbmV3U3BhY2VCdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICduZXcgc3BhY2UnLCAnbmV3LXNwYWNlLWJ1dHRvbicpXG4gICAgY29uc3QgY2FuY2VsU3BhY2VCdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICdjYW5jZWwnLCAnbmV3LXNwYWNlLWJ1dHRvbicpXG5cbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3NwYWNlIG5hbWUnKVxuICAgIGNvbnN0IHJlc3RvcmVQcmV2U3RhdGUgPSAoKSA9PiB7XG4gICAgICBzcGFjZUlucHV0Q29udGFpbmVyLnJlbW92ZSgpXG5cbiAgICAgIHNwYWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpXG4gICAgfVxuICAgIG5ld1NwYWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRleHRJbnB1dC52YWx1ZSA9PT0gJycpIHJldHVyblxuXG4gICAgICBfaGFuZGxlci5hZGROZXdTcGFjZSh0ZXh0SW5wdXQudmFsdWUpXG5cbiAgICAgIHJlc3RvcmVQcmV2U3RhdGUoKVxuICAgIH0pXG5cbiAgICBjYW5jZWxTcGFjZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc3RvcmVQcmV2U3RhdGUoKVxuICAgIH0pXG5cbiAgICBidXR0b25zQ29udGFpbmVyLnJlbW92ZSgpXG5cbiAgICBzcGFjZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRJbnB1dClcbiAgICBzcGFjZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1NwYWNlQnV0dG9uKVxuICAgIHNwYWNlSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsU3BhY2VCdXR0b24pXG4gICAgc3BhY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhY2VJbnB1dENvbnRhaW5lcilcbiAgfSlcblxuICBkZWxldGVTcGFjZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBzcGFjZVdhcm5pbmdDb250YWluZXIgPSBidWlsZEVsZW1lbnQoJ2RpdicsICcnLCAnc3BhY2Utd2FybmluZy1jb250YWluZXInKVxuICAgIGNvbnN0IHdhcm5pbmdUZXh0ID0gYnVpbGRFbGVtZW50KCdkaXYnLCAnRGVsZXRlIGN1cnJlbnQgc3BhY2U/JywgJ2RlbGV0ZS1zcGFjZS13YXJuaW5nJylcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnWWVzJywgJ2RlbGV0aW9uLWJ1dHRvbicpXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnQ2FuY2VsJywgJ2RlbGV0aW9uLWJ1dHRvbicpXG5cbiAgICBjb25zdCByZXN0b3JlUHJldlN0YXRlID0gKCkgPT4ge1xuICAgICAgc3BhY2VXYXJuaW5nQ29udGFpbmVyLnJlbW92ZSgpXG5cbiAgICAgIHNwYWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpXG4gICAgfVxuXG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIF9oYW5kbGVyLmRlbGV0ZUN1cnJlbnRTcGFjZSgpXG5cbiAgICAgIHJlc3RvcmVQcmV2U3RhdGUoKVxuICAgIH0pXG5cbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXN0b3JlUHJldlN0YXRlKClcbiAgICB9KVxuXG4gICAgYnV0dG9uc0NvbnRhaW5lci5yZW1vdmUoKVxuXG4gICAgc3BhY2VXYXJuaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHdhcm5pbmdUZXh0KVxuICAgIHNwYWNlV2FybmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtQnV0dG9uKVxuICAgIHNwYWNlV2FybmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pXG4gICAgc3BhY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhY2VXYXJuaW5nQ29udGFpbmVyKVxuICB9KVxuXG4gIGVkaXRTcGFjZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBzcGFjZUVkaXRDb250YWluZXIgPSBidWlsZEVsZW1lbnQoJ2RpdicsICcnLCAnc3BhY2UtZWRpdC1jb250YWluZXInKVxuICAgIGNvbnN0IHRleHRJbnB1dCA9IGJ1aWxkRWxlbWVudCgnaW5wdXQnLCAnJywgJ3NwYWNlLWVkaXQtaW5wdXQnKVxuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICdjaGFuZ2UgbmFtZScsICdlZGl0LXNwYWNlLWJ1dHRvbicpXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnY2FuY2VsJywgJ2VkaXQtc3BhY2UtYnV0dG9uJylcblxuICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBfaGFuZGxlci5nZXRDdXJyZW50U3BhY2UoKSlcblxuICAgIGNvbnN0IHJlc3RvcmVQcmV2U3RhdGUgPSAoKSA9PiB7XG4gICAgICBzcGFjZUVkaXRDb250YWluZXIucmVtb3ZlKClcblxuICAgICAgc3BhY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcilcbiAgICB9XG5cbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgX2hhbmRsZXIudXBkYXRlQ3VycmVudFNwYWNlTmFtZSh0ZXh0SW5wdXQudmFsdWUpXG5cbiAgICAgIHJlc3RvcmVQcmV2U3RhdGUoKVxuICAgIH0pXG5cbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXN0b3JlUHJldlN0YXRlKClcbiAgICB9KVxuXG4gICAgYnV0dG9uc0NvbnRhaW5lci5yZW1vdmUoKVxuXG4gICAgc3BhY2VFZGl0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRJbnB1dClcbiAgICBzcGFjZUVkaXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbilcbiAgICBzcGFjZUVkaXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKVxuXG4gICAgc3BhY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhY2VFZGl0Q29udGFpbmVyKVxuICB9KVxuXG4gIGFkZEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG5ld1Rhc2tBY3RpdmUpIHJldHVyblxuICAgIGFwcENvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZE5ld1Rhc2tJbnRlcmZhY2UoKSlcbiAgICBuZXdUYXNrQWN0aXZlID0gdHJ1ZVxuICB9KVxuICAvLyBoZXJlIHNob3VsZCBiZSBhZGRlZCB0aGUgcmVzdCBvZiB0aGUgaXRlbXMgc3RvcmVkXG4gIHNwYWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYWNlU2VsZWN0KVxuICBzcGFjZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKVxuICBhcHBDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhY2VDb250YWluZXIpXG4gIGFwcENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRJdGVtQnV0dG9uKVxufVxuXG5VSS5jcmVhdGVUYXNrTGlzdCA9ICh0YXNrTGlzdCkgPT4ge1xuICBjb25zdCBvbGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stY29udGFpbmVyJylcblxuICBmb3IgKGNvbnN0IHRhc2tFbGVtZW50IG9mIG9sZFRhc2spIHtcbiAgICB0YXNrRWxlbWVudC5yZW1vdmUoKVxuICB9XG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tMaXN0KSB7XG4gICAgYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkVGFzayh0YXNrKSlcbiAgfVxufVxuXG5jb25zdCBidWlsZE5ld1Rhc2tJbnRlcmZhY2UgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld1Rhc2tDb250YWluZXIgPSBidWlsZEVsZW1lbnQoJ2RpdicsICcnLCAnbmV3LXRhc2stY29udGFpbmVyJylcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGJ1aWxkRWxlbWVudCgnaW5wdXQnLCAnJywgJ3Rhc2stZGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24taW5wdXQnKVxuICBjb25zdCBzcGFjZVNlbGVjdCA9IGJ1aWxkU2VsZWN0KFxuICAgIF9oYW5kbGVyLmdldEN1cnJlbnRTcGFjZSgpLFxuICAgIF9oYW5kbGVyLmdldFNwYWNlc0xpc3QoKSxcbiAgICAnbmV3LXRhc2stc3BhY2Utc2VsZWN0J1xuICApXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGJ1aWxkRWxlbWVudCgnYnV0dG9uJywgJ2FkZCcsICduZXctdGFzay1idXR0b24nKVxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICdjYW5jZWwnLCAnbmV3LXRhc2stYnV0dG9uJylcbiAgY29uc3QgZGF0ZUlucHV0ID0gYnVpbGRFbGVtZW50KCdpbnB1dCcsICcnLCAnZGF0ZS1pbnB1dCcpXG4gIGNvbnN0IHBvc2libGVTdGF0ZXMgPSBfaGFuZGxlci5nZXRTdGF0ZXMoKVxuICBjb25zdCBwb3NpYmxlUHJpb3JpdGllcyA9IF9oYW5kbGVyLmdldFByaW9yaXRpZXMoKVxuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGJ1aWxkU2VsZWN0KHBvc2libGVQcmlvcml0aWVzWzBdLCBwb3NpYmxlUHJpb3JpdGllcywgJ25ldy10YXNrLXByaW9yaXR5JylcbiAgY29uc3Qgc3RhdGVTZWxlY3QgPSBidWlsZFNlbGVjdChwb3NpYmxlU3RhdGVzWzBdLCBwb3NpYmxlU3RhdGVzLCAnbmV3LXRhc2stc3RhdGUnKVxuXG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZGVzY3JpcHRpb24nKVxuXG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG5cbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChzcGFjZVNlbGVjdC52YWx1ZSA9PT0gJycpIHJldHVyblxuXG4gICAgX2hhbmRsZXIuaGFuZGxlTmV3VGFza0lucHV0KHtcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgc3BhY2U6IHNwYWNlU2VsZWN0LnZhbHVlLFxuICAgICAgZGF0ZTogZGF0ZUlucHV0LnZhbHVlLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5U2VsZWN0LnZhbHVlLFxuICAgICAgc3RhdGU6IHN0YXRlU2VsZWN0LnZhbHVlXG4gICAgfSlcblxuICAgIG5ld1Rhc2tDb250YWluZXIucmVtb3ZlKClcbiAgICBuZXdUYXNrQWN0aXZlID0gZmFsc2VcbiAgfSlcblxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3VGFza0NvbnRhaW5lci5yZW1vdmUoKVxuICAgIG5ld1Rhc2tBY3RpdmUgPSBmYWxzZVxuICB9KVxuXG4gIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dClcbiAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFjZVNlbGVjdClcbiAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG4gIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKVxuICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dClcbiAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdClcbiAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0ZVNlbGVjdClcbiAgcmV0dXJuIG5ld1Rhc2tDb250YWluZXJcbn1cblxuY29uc3QgYnVpbGRTZWxlY3QgPSAoZGVmYXVsdE9wdGlvbiwgaXRlbUxpc3QsIC4uLmNzc0NsYXNzZXMpID0+IHtcbiAgY29uc3Qgc2VsZWN0ID0gYnVpbGRFbGVtZW50KCdzZWxlY3QnLCAnJywgLi4uY3NzQ2xhc3NlcylcblxuICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkZWZhdWx0T3B0aW9uKVxuICBvcHRpb24udGV4dENvbnRlbnQgPSBkZWZhdWx0T3B0aW9uXG4gIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pXG5cbiAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1MaXN0KSB7XG4gICAgaWYgKGl0ZW0gPT09IGRlZmF1bHRPcHRpb24pIGNvbnRpbnVlXG5cbiAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbSlcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpdGVtXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgfVxuXG4gIHJldHVybiBzZWxlY3Rcbn1cblxuY29uc3QgYnVpbGRUYXNrID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGJ1aWxkRWxlbWVudCgnZGl2JywgJycsICd0YXNrLWNvbnRhaW5lcicpXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGJ1aWxkRWxlbWVudCgnaW5wdXQnLCAnJywgJ3Rhc2stZGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24taW5wdXQnKVxuICBjb25zdCB0YXNrRGV0YWlscyA9IGJ1aWxkRWxlbWVudCgnYnV0dG9uJywgJ0RldGFpbHMnLCAndGFzay1kZXRhaWxzJylcbiAgY29uc3QgdGFza0RlbGV0ZUJ1dHRvbiA9IGJ1aWxkRWxlbWVudCgnYnV0dG9uJywgJ0RlbGV0ZScsICd0YXNrLWRlbGV0ZScpXG4gIGNvbnN0IHRhc2tTdGF0ZSA9IGJ1aWxkU2VsZWN0KHRhc2suc3RhdGUsIF9oYW5kbGVyLmdldFN0YXRlcygpLCAndGFzay1zdGF0ZScpXG4gIGNvbnN0IHRhc2tEYXRlID0gYnVpbGRFbGVtZW50KCdpbnB1dCcsICcnLCAnZGF0ZS1pbnB1dCcpXG4gIGNvbnN0IHRhc2tTcGFjZSA9IGJ1aWxkU2VsZWN0KHRhc2suc3BhY2UsIF9oYW5kbGVyLmdldFNwYWNlc0xpc3QoKSwgJ3Rhc2stc3BhY2UnKVxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBidWlsZFNlbGVjdCh0YXNrLnByaW9yaXR5LCBfaGFuZGxlci5nZXRQcmlvcml0aWVzKCksICd0YXNrLXByaW9yaXR5JylcbiAgY29uc3QgdGFza05vdGVzID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnbm90ZXMnLCAndGFzay1ub3RlcycpXG4gIGNvbnN0IHRhc2tOb3Rlc1RleHRhcmVhID0gYnVpbGRFbGVtZW50KCd0ZXh0YXJlYScsIHRhc2subm90ZXMsICd0YXNrLW5vdGVzLXRleHRhcmVhJylcblxuICB0YXNrQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9IGAxcHggc29saWQgJHtfaGFuZGxlci5nZXRQcmlvcml0eUNvbG9yKHRhc2spfWBcblxuICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhc2suZGVzY3JpcHRpb24pXG4gIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3Rhc2sgZGVzY3JpcHRpb24nKVxuICB0YXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgX2hhbmRsZXIudXBkYXRlVGFzayh0YXNrLCB7IGRlc2NyaXB0aW9uOiB0YXNrRGVzY3JpcHRpb24udmFsdWUgfSlcbiAgfSlcblxuICB0YXNrU3RhdGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgX2hhbmRsZXIudXBkYXRlVGFzayh0YXNrLCB7IHN0YXRlOiB0YXNrU3RhdGUudmFsdWUgfSlcbiAgfSlcblxuICB0YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gIHRhc2tEYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrLmRhdGUpXG4gIHRhc2tEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIF9oYW5kbGVyLnVwZGF0ZVRhc2sodGFzaywgeyBkYXRlOiB0YXNrRGF0ZS52YWx1ZSB9KVxuICB9KVxuXG4gIHRhc2tTcGFjZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBfaGFuZGxlci51cGRhdGVUYXNrKHRhc2ssIHsgc3BhY2U6IHRhc2tTcGFjZS52YWx1ZSB9KVxuICAgIF9oYW5kbGVyLnNldEN1cnJlbnRTcGFjZShfaGFuZGxlci5nZXRDdXJyZW50U3BhY2UoKSlcbiAgfSlcblxuICB0YXNrUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgX2hhbmRsZXIudXBkYXRlVGFzayh0YXNrLCB7IHByaW9yaXR5OiB0YXNrUHJpb3JpdHkudmFsdWUgfSlcbiAgfSlcblxuICBjb25zdCBjbGVhbk9mZk5vdGVzID0gKCkgPT4ge1xuICAgIHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9ICdub3RlcydcbiAgICB0YXNrTm90ZXNUZXh0YXJlYS5yZW1vdmUoKVxuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItd2l0aC1ub3RlcycpXG4gIH1cblxuICB0YXNrTm90ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9PT0gJ25vdGVzJykge1xuICAgICAgdGFza05vdGVzLnRleHRDb250ZW50ID0gJ2Nsb3NlIG5vdGVzJ1xuICAgICAgdGFza05vdGVzVGV4dGFyZWEudmFsdWUgPSB0YXNrLm5vdGVzXG5cbiAgICAgIHRhc2tOb3Rlc1RleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBfaGFuZGxlci51cGRhdGVUYXNrKHRhc2ssIHsgbm90ZXM6IHRhc2tOb3Rlc1RleHRhcmVhLnZhbHVlIH0pXG4gICAgICB9KVxuXG4gICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tOb3Rlc1RleHRhcmVhKVxuICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci13aXRoLW5vdGVzJylcbiAgICB9IGVsc2UgaWYgKHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9PT0gJ2Nsb3NlIG5vdGVzJykge1xuICAgICAgY2xlYW5PZmZOb3RlcygpXG4gICAgfVxuICB9KVxuXG4gIHRhc2tEZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh0YXNrRGV0YWlscy50ZXh0Q29udGVudCA9PT0gJ0RldGFpbHMnKSB7XG4gICAgICB0YXNrRGV0YWlscy50ZXh0Q29udGVudCA9ICdMZXNzJ1xuXG4gICAgICB0YXNrRGVsZXRlQnV0dG9uLnJlbW92ZSgpXG4gICAgICB0YXNrU3RhdGUucmVtb3ZlKClcblxuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGF0ZSlcbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1NwYWNlKVxuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpXG4gICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tOb3RlcylcbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1N0YXRlKVxuICAgIH0gZWxzZSBpZiAodGFza0RldGFpbHMudGV4dENvbnRlbnQgPT09ICdMZXNzJykge1xuICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSAnRGV0YWlscydcblxuICAgICAgdGFza0RhdGUucmVtb3ZlKClcbiAgICAgIHRhc2tTcGFjZS5yZW1vdmUoKVxuICAgICAgdGFza1ByaW9yaXR5LnJlbW92ZSgpXG4gICAgICB0YXNrU3RhdGUucmVtb3ZlKClcbiAgICAgIHRhc2tOb3Rlcy5yZW1vdmUoKVxuXG4gICAgICBjbGVhbk9mZk5vdGVzKClcblxuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnV0dG9uKVxuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrU3RhdGUpXG4gICAgfVxuICB9KVxuXG4gIHRhc2tEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgX2hhbmRsZXIuaGFuZGxlRGVsZXRpb24odGFzaylcbiAgICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpXG4gIH0pXG5cbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ1dHRvbilcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrU3RhdGUpXG5cbiAgcmV0dXJuIHRhc2tDb250YWluZXJcbn1cblxuY29uc3QgYnVpbGRFbGVtZW50ID0gKHR5cGUsIHRleHQsIC4uLmNsYXNzZXMpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcblxuICBmb3IgKGNvbnN0IGNzc0NsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpXG4gIH1cblxuICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dFxuXG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCB7IFVJIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJ1xuaW1wb3J0IHsgVUkgfSBmcm9tICcuL3VpJ1xuXG5jb25zdCBIYW5kbGVyID0ge31cblxuSGFuZGxlci5oYW5kbGVOZXdUYXNrSW5wdXQgPSAobmV3VGFzaykgPT4ge1xuICBjb25zdCB0YXNrID0gVGFzay5uZXdUYXNrKFxuICAgIG5ld1Rhc2suZGVzY3JpcHRpb24sXG4gICAgbmV3VGFzay5kYXRlLFxuICAgICdub3RlcycsXG4gICAgJyN0MSAjdDInLFxuICAgIG5ld1Rhc2suc3BhY2UsXG4gICAgbmV3VGFzay5wcmlvcml0eSxcbiAgICBuZXdUYXNrLnN0YXRlXG4gIClcbiAgVGFzay5hZGRUYXNrKHRhc2spXG4gIFVJLmNyZWF0ZVRhc2tMaXN0KFRhc2suZ2V0VGFza3MoW1xuICAgIGUgPT4gZS5zcGFjZSA9PT0gVGFzay5jdXJyZW50U3BhY2VcbiAgXSkpXG4gIFRhc2suc2F2ZSgpXG5cbiAgY29uc29sZS5sb2coVGFzay5saXN0KVxufVxuXG5IYW5kbGVyLmFkZE5ld1NwYWNlID0gKHNwYWNlTmFtZSkgPT4ge1xuICBUYXNrLnNwYWNlc1tzcGFjZU5hbWVdID0gVGFzay5tYWtlRGVmYXVsdFNwYWNlRWxlbWVudHMoKVxuICBVSS51cGRhdGVTcGFjZUhlYWRlcigpXG4gIFRhc2suc2F2ZSgpXG59XG5cbkhhbmRsZXIuaGFuZGxlRGVsZXRpb24gPSAodGFzaykgPT4ge1xuICBUYXNrLmRlbGV0ZVRhc2sodGFzaylcbiAgVGFzay5zYXZlKClcblxuICBjb25zb2xlLmxvZyhUYXNrLmxpc3QpXG59XG5cbkhhbmRsZXIuZGVsZXRlQ3VycmVudFNwYWNlID0gKCkgPT4ge1xuICBsZXQgc3BhY2VzID0gVGFzay5nZXRTcGFjZXNMaXN0KClcbiAgaWYgKHNwYWNlcy5sZW5ndGggPT09IDEpIHJldHVyblxuXG4gIGRlbGV0ZSBUYXNrLnNwYWNlc1tUYXNrLmN1cnJlbnRTcGFjZV1cbiAgVGFzay5kZWxldGVUYXNrcyhbKGUpID0+IGUuc3BhY2UgPT09IFRhc2suY3VycmVudFNwYWNlXSlcbiAgc3BhY2VzID0gVGFzay5nZXRTcGFjZXNMaXN0KClcbiAgVGFzay5jdXJyZW50U3BhY2UgPSBzcGFjZXNbMF1cblxuICBIYW5kbGVyLnNldEN1cnJlbnRTcGFjZShUYXNrLmN1cnJlbnRTcGFjZSlcbiAgVUkudXBkYXRlU3BhY2VIZWFkZXIoKVxuICBUYXNrLnNhdmUoKVxufVxuXG5IYW5kbGVyLnVwZGF0ZVRhc2sgPSAodGFzaywgbmV3QXR0cmlidXRlcykgPT4ge1xuICBmb3IgKGNvbnN0IGtleSBpbiBuZXdBdHRyaWJ1dGVzKSB7XG4gICAgdGFza1trZXldID0gbmV3QXR0cmlidXRlc1trZXldXG4gIH1cblxuICBUYXNrLnNhdmUoKVxufVxuXG5IYW5kbGVyLnVwZGF0ZUN1cnJlbnRTcGFjZU5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICBpZiAobmV3TmFtZSA9PT0gVGFzay5jdXJyZW50U3BhY2UpIHJldHVyblxuXG4gIFRhc2suc3BhY2VzW25ld05hbWVdID0gVGFzay5zcGFjZXNbVGFzay5jdXJyZW50U3BhY2VdXG4gIGRlbGV0ZSBUYXNrLnNwYWNlc1tUYXNrLmN1cnJlbnRTcGFjZV1cblxuICAvLyB1cGRhdGUgdGhlIHRhc2sgc3BhY2Ugb2YgdGhlIHByZXZpb3VzIHNwYWNlXG4gIGNvbnN0IGN1cnJTcGFjZVRhc2sgPSBUYXNrLmdldFRhc2tzKFsoZSkgPT4gZS5zcGFjZSA9PT0gVGFzay5jdXJyZW50U3BhY2VdKVxuICBmb3IgKGNvbnN0IHRhc2sgb2YgY3VyclNwYWNlVGFzaykge1xuICAgIHRhc2suc3BhY2UgPSBuZXdOYW1lXG4gIH1cblxuICBUYXNrLmN1cnJlbnRTcGFjZSA9IG5ld05hbWVcblxuICBVSS51cGRhdGVTcGFjZUhlYWRlcigpXG4gIFRhc2suc2F2ZSgpXG4gIFRhc2suc2F2ZUN1cnJlbnRTcGFjZSgpXG59XG5cbkhhbmRsZXIuZ2V0U3BhY2VzTGlzdCA9ICgpID0+IHtcbiAgcmV0dXJuIFRhc2suZ2V0U3BhY2VzTGlzdCgpXG59XG5cbkhhbmRsZXIuZ2V0U3RhdGVzID0gKCkgPT4ge1xuICByZXR1cm4gVGFzay5zcGFjZXNbVGFzay5jdXJyZW50U3BhY2VdLnN0YXRlc1xufVxuXG5IYW5kbGVyLmdldFByaW9yaXRpZXMgPSAoKSA9PiB7XG4gIHJldHVybiBUYXNrLnNwYWNlc1tUYXNrLmN1cnJlbnRTcGFjZV0ucHJpb3JpdGllc1xufVxuXG5IYW5kbGVyLmdldEN1cnJlbnRTcGFjZSA9ICgpID0+IHtcbiAgcmV0dXJuIFRhc2suY3VycmVudFNwYWNlXG59XG5cbkhhbmRsZXIuZ2V0UHJpb3JpdHlDb2xvciA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGNvbG9ycyA9IFRhc2suc3BhY2VzW3Rhc2suc3BhY2VdLmNvbG9yc1xuICBjb25zdCBjb2xvckkgPSBUYXNrLnNwYWNlc1t0YXNrLnNwYWNlXS5wcmlvcml0aWVzLmZpbmRJbmRleCgoZSkgPT4gZSA9PT0gdGFzay5wcmlvcml0eSlcbiAgcmV0dXJuIGNvbG9yc1tjb2xvckldXG59XG5cbi8vIGNoYW5nZXMgdGhlIGN1cnJlbnQgc3BhY2UgYW5kIHNob3dzIHRoYXQgc3BhY2UgbGlzdC5cbkhhbmRsZXIuc2V0Q3VycmVudFNwYWNlID0gKHNwYWNlKSA9PiB7XG4gIFRhc2suY3VycmVudFNwYWNlID0gc3BhY2VcbiAgVUkuY3JlYXRlVGFza0xpc3QoVGFzay5nZXRUYXNrcyhbXG4gICAgZSA9PiBlLnNwYWNlID09PSBUYXNrLmN1cnJlbnRTcGFjZVxuICBdKSlcbiAgVGFzay5zYXZlQ3VycmVudFNwYWNlKClcbn1cblxuVGFzay5hZGRUYXNrKFRhc2submV3VGFzayhcbiAgJ1RoaXMgYmVsb25ncyBpbiBEZWZhdWx0JyxcbiAgJycsXG4gICdub3RlcycsXG4gICcjdDEgI3QyJyxcbiAgJ0RlZmF1bHQnLFxuICAnTE9XJyxcbiAgJ1RPRE8nXG4pKVxuXG5UYXNrLmFkZFRhc2soVGFzay5uZXdUYXNrKFxuICAnVGhpcyBhbHNvIGJlbG9uZ3MgdG8gRGVmYXVsdCcsXG4gICcyMDIzLTExLTA2JyxcbiAgJ25vdGVzJyxcbiAgJyN0MScsXG4gICdEZWZhdWx0JyxcbiAgJ0hJR0gnLFxuICAnRE9JTkcnXG4pKVxuXG5UYXNrLmFkZFRhc2soVGFzay5uZXdUYXNrKFxuICAnVGhpcyBiZWxvbmdzIGluIE90aGVyJyxcbiAgJycsXG4gICdub3RlcycsXG4gICcjdDEgI3QyJyxcbiAgJ090aGVyJyxcbiAgJ0xPVycsXG4gICdUT0RPJ1xuKSlcblxuVGFzay5sb2FkKClcblVJLnNldEhhbmRsZXIoSGFuZGxlcilcblVJLmNyZWF0ZUJhc2VJbnRlcmZhY2UoKVxuVUkuY3JlYXRlVGFza0xpc3QoVGFzay5nZXRUYXNrcyhbXG4gIGUgPT4gZS5zcGFjZSA9PT0gVGFzay5jdXJyZW50U3BhY2Vcbl0pKVxuXG4vKipcbiAqIERPTkUgYWRkIGFiaWxpdHkgdG8gY2hhbmdlIHNwYWNlcyB0YXNrIGxpc3RcbiAqIERPTkUgbWFrZSB0aGUgZGVmYXVsdCBzcGFjZSB3aGVuIGNyZWF0aW5nIGEgbmV3IHRhc2sgdG8gYmUgdGhlIGN1cnJlbnQgc3BhY2UuXG4gKiBET05FIGFkZCBkYXRlXG4gKiBET05FIGFkZCBhYmlsaXR5IHRvIGV4cGFuZCBhIHNpbmdsZSB0b2RvIHRvIHNlZS9lZGl0IGl0cyBkZXRhaWxzXG4gKiBET05FIGFkZCBhYmlsaXR5IHRvIGVkaXQgYW5kIHNhdmUgdGhlIGRhdGUgb2YgYW4gZXhpc3RpbmcgdGFza1xuICogRE9ORSBhZGQgc3RhdGUgcHJvcGVydHlcbiAqIERPTkUgYWRkIGFiaWxpdHkgdG8gY2hhZ2UgdGhlIGRlc2NyaXB0aW9uIG9mIGFuIGV4aXN0aW5nIHRhc2tcbiAqIERPTkUgZml4IHRoZSBzdGF0ZSBwb3NpdGlvbmluZ1xuICogRE9ORSBhZGQgYWJpbGl0eSB0byBjaGFuZ2UgdGhlIHNwYWNlIG9mIGFuIGV4aXN0aW5nIHRhc2suXG4gKiBET05FIGFkZCBwcmlvcml0eVxuICogRE9ORSBzYXZlIGRhdGFcbiAqIERPTkUgYWRkIGFiaWxpdHkgdG8gbWFrZSBhbmQgZGVsZXRlIHNwYWNlc1xuICogRE9ORSBhZGQgcHJpb3JpdHkgYW5kIHN0YXRlIHNlbGVjdGlvbiB3aGVuIGFkZGluZyBhIHRhc2tcbiAqIERPTkUgZWRpdCBhIHNwYWNlIG5hbWVcbiAqIERPTkUgYWRkIG5vdGVzXG4gKiBUT0RPIGFkZCBhYmlsaXR5IHRvIHNvcnQgdGFza1xuICogVE9ETyBjcmVhdGUgbmV3IHRhc2sgYnkgcHJlc3NpbmcgZW50ZXJcbiAqIFRPRE8gY2xvc2Ugbm90ZXMgd2l0aCB0aGUgJ2VzY2FwZScga2V5XG4gKiBUT0RPIGNsZWFuIHVwIGJ1aWxkVGFzayAmIGJ1aWxkTmV3VGFza0ludGVyZmFjZVxuICogVE9ETyBhZGQgdGltZVxuICogVE9ETyBhZGQgdGFnc1xuICogVE9ETyBhZGQgZmlsdGVyc1xuICogVE9ETyBhZGQgbWFudWFsIHNvcnRpbmcgYW5kIHNhdmUgaXQgb24gJ2JvYXJkcydcbiAqIFRPRE8gYWRkIHN1YnRhc2tcbiAqL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9