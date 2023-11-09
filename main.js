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
let Task = {}

Task.tags = ['#Tag1', '#Tag2']
Task.spaces = {
    'Default' : {
        priorities: ['LOW', 'MEDIUM', 'HIGH'],
        colors: ['black', 'blue', 'red'],
        states : ['TODO', 'DOING', 'DONE'],
    },
    'Other' : {
        priorities: ['LOW', 'MEDIUM', 'HIGH'],
        colors: ['black', 'blue', 'red'],
        states : ['TODO', 'DOING', 'DONE'],
    },
    'Another' : {
        priorities: ['LOW', 'MEDIUM', 'HIGH'],
        colors: ['black', 'blue', 'red'],
        states : ['TODO', 'DOING', 'DONE'],
    },
};

Task.currentSpace = 'Default';

Task.boards = [];
Task.list = new Map();

let _idCounter = 0;

Task.save = () => {
    let SaveObject = {
        list:Array.from(Task.list),
        _idCounter,
        spaces:Task.spaces,
    }
    window.localStorage.setItem('data', JSON.stringify(SaveObject));
}

Task.saveCurrentSpace = () => {
    window.localStorage.setItem('currentSpace', Task.currentSpace);
}

Task.load = () => {
    let data = window.localStorage.getItem('data');
    if (data) {
        data = JSON.parse(data);
        Task.list = new Map(data.list);
        _idCounter = data._idCounter;
        Task.spaces = data.spaces;
    }
    let currentSpace = window.localStorage.getItem('currentSpace')
    if (currentSpace) {
        Task.currentSpace = currentSpace
    }
}

Task.makeDefaultSpaceElements = () => {
    return {
        priorities: ['LOW', 'MEDIUM', 'HIGH'],
        colors: ['black', 'blue', 'red'],
        states : ['TODO', 'DOING', 'DONE'],
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
    let obj = {};
    obj.description = description;
    obj.date = date;
    obj.priority = priority;
    obj.notes = notes;
    obj.state = state;
    obj.space = space;
    obj.tags = tags;
    obj.subtask = []
    obj.id = _idCounter++;

    return obj;
}

Task.addTask = (task) => {
    Task.list.set(task.id, task);
}

Task.deleteTask = (task) => {
    Task.list.delete(task.id);
}

Task.deleteTasks = (filters) => {
    let taskToDelete = Task.getTasks(filters);

    for (const task of taskToDelete) {
        Task.list.delete(task.id);
    }
}

Task.getTasks = (filters) => {
    let list = [];

    for (const task of Task.list.values()) {
        list.push(task)
        for (const filter of filters) {
            if (!filter(task)) {
                list.pop()
                break;
            }
        }
    }

    return list;
}

Task.sortTasks = (tasks, comparator, descending) => {}

Task.getSpacesList = () => {
    let list = [];

    for (const space in Task.spaces) {
        list.push(space);
    }

    return list;
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
let UI = {}

let appContainer = document.querySelector('#app');
let newTaskActive = false;

let _handler;

UI.setHandler = (handler) => {
    _handler = handler;
}

UI.updateSpaceHeader = () => {
    let oldSpaceSelect = document.querySelector('.space-header-select')
    let newSpaceSelect = buildSelect(
        _handler.getCurrentSpace(),
        _handler.getSpacesList(),
        'space-header-select',
    );

    newSpaceSelect.addEventListener('input', () => { 
        _handler.setCurrentSpace(newSpaceSelect.value);
    })

    oldSpaceSelect.replaceWith(newSpaceSelect);
}

UI.createBaseInterface = () => {
    let spaceContainer = buildElement('div', '', 'space-container')
    let spaceSelect = buildSelect(
        _handler.getCurrentSpace(),
        _handler.getSpacesList(),
        'space-header-select',
    );
    let buttonsContainer = buildElement('div', '', 'space-buttons-container');
    let addSpaceButton = buildElement('button', '+', 'space-option-button');
    let deleteSpaceButton = buildElement('button', '-', 'space-option-button');
    let editSpaceButton = buildElement('button', 'e', 'space-option-button');
    let addItemButton = buildElement('button', '+', 'add-item-button');


    buttonsContainer.appendChild(addSpaceButton)
    buttonsContainer.appendChild(deleteSpaceButton)
    buttonsContainer.appendChild(editSpaceButton)
    
    spaceSelect.addEventListener('input', () => { 
        _handler.setCurrentSpace(spaceSelect.value);
    })

    addSpaceButton.addEventListener('click', () => {
        let spaceInputContainer = buildElement('div', '', 'space-input-container');
        let textInput = buildElement('input', '', 'space-input');
        let newSpaceButton = buildElement('button', 'new space', 'new-space-button');
        let cancelSpaceButton = buildElement('button', 'cancel', 'new-space-button');

        textInput.setAttribute('type', 'text');
        textInput.setAttribute('placeholder', 'space name')
        let restorePrevState = () => {
            spaceInputContainer.remove()

            spaceContainer.appendChild(buttonsContainer)
        }
        newSpaceButton.addEventListener('click', () => {
            if (textInput.value == '') return 

            _handler.addNewSpace(textInput.value);

            restorePrevState()
        });

        cancelSpaceButton.addEventListener('click', () => {
            restorePrevState()
        });

        buttonsContainer.remove();

        spaceInputContainer.appendChild(textInput);
        spaceInputContainer.appendChild(newSpaceButton);
        spaceInputContainer.appendChild(cancelSpaceButton);
        spaceContainer.appendChild(spaceInputContainer);
    })

    deleteSpaceButton.addEventListener('click', () => {
        let spaceWarningContainer = buildElement('div', '', 'space-warning-container');
        let warningText = buildElement('div', 'Delete current space?', 'delete-space-warning');
        let confirmButton = buildElement('button', 'Yes', 'deletion-button')
        let cancelButton = buildElement('button', 'Cancel', 'deletion-button')

        let restorePrevState = () => {
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

        buttonsContainer.remove();

        spaceWarningContainer.appendChild(warningText);
        spaceWarningContainer.appendChild(confirmButton);
        spaceWarningContainer.appendChild(cancelButton);
        spaceContainer.appendChild(spaceWarningContainer);
    })

    editSpaceButton.addEventListener('click', () => {
        let spaceEditContainer = buildElement('div', '', 'space-edit-container');
        let textInput = buildElement('input', '', 'space-edit-input');
        let confirmButton = buildElement('button', 'change name', 'edit-space-button');
        let cancelButton = buildElement('button', 'cancel', 'edit-space-button');

        textInput.setAttribute('type', 'text');
        textInput.setAttribute('value', _handler.getCurrentSpace());

        const restorePrevState = () => {
            spaceEditContainer.remove();

            spaceContainer.appendChild(buttonsContainer);
        }

        confirmButton.addEventListener('click', () => {
            _handler.updateCurrentSpaceName(textInput.value);

            restorePrevState()
        })

        cancelButton.addEventListener('click', () => {
            restorePrevState()
        })

        buttonsContainer.remove()

        spaceEditContainer.appendChild(textInput);
        spaceEditContainer.appendChild(confirmButton);
        spaceEditContainer.appendChild(cancelButton);

        spaceContainer.appendChild(spaceEditContainer);
    })

    addItemButton.addEventListener('click', () => {
        if (newTaskActive) return;
        appContainer.appendChild(buildNewTaskInterface())
        newTaskActive = true;
    });
    // here should be added the rest of the items stored
    spaceContainer.appendChild(spaceSelect);
    spaceContainer.appendChild(buttonsContainer);
    appContainer.appendChild(spaceContainer);
    appContainer.appendChild(addItemButton);
}

UI.createTaskList = (taskList) => {
    let oldTask = document.querySelectorAll('.task-container');

    for (const taskElement of oldTask) {
        taskElement.remove();
    }

    for (const task of taskList) {
        appContainer.appendChild(buildTask(task));
    }
}

const buildNewTaskInterface = () => {
    let newTaskContainer = buildElement('div','','new-task-container');
    let descriptionInput = buildElement('input', '', 'task-description', 'description-input');
    let spaceSelect = buildSelect(
        _handler.getCurrentSpace(),
        _handler.getSpacesList(),
        'new-task-space-select',
    );
    let addButton = buildElement('button', 'add', 'new-task-button')
    let cancelButton = buildElement('button', 'cancel', 'new-task-button')
    let dateInput = buildElement('input','','date-input');
    const posibleStates = _handler.getStates()
    const posiblePriorities = _handler.getPriorities()
    let prioritySelect = buildSelect(posiblePriorities[0], posiblePriorities, 'new-task-priority')
    let stateSelect = buildSelect(posibleStates[0], posibleStates, 'new-task-state')

    descriptionInput.setAttribute('type', 'text')
    descriptionInput.setAttribute('placeholder', 'description')

    dateInput.setAttribute('type', 'date');

    addButton.addEventListener('click', () => {
        if (spaceSelect.value == '') return;

        _handler.handleNewTaskInput({
            description: descriptionInput.value,
            space: spaceSelect.value,
            date: dateInput.value,
            priority:prioritySelect.value,
            state:stateSelect.value,
        });

        newTaskContainer.remove();
        newTaskActive = false;
    });

    cancelButton.addEventListener('click', () => {
        newTaskContainer.remove();
        newTaskActive = false;
    });

    newTaskContainer.appendChild(descriptionInput)
    newTaskContainer.appendChild(spaceSelect);
    newTaskContainer.appendChild(addButton);
    newTaskContainer.appendChild(cancelButton);
    newTaskContainer.appendChild(dateInput);
    newTaskContainer.appendChild(prioritySelect);
    newTaskContainer.appendChild(stateSelect);
    return newTaskContainer;
}

const buildSelect = (defaultOption, itemList, ...cssClasses) => {
    let select = buildElement('select', '', ...cssClasses);

    let option = document.createElement('option');
    option.setAttribute('value', defaultOption);
    option.textContent = defaultOption;
    select.appendChild(option);

    for (const item of itemList) {
        if (item == defaultOption) continue;

        option = document.createElement('option');
        option.setAttribute('value', item);
        option.textContent = item;
        select.appendChild(option);
    }

    return select;
}

const buildTask = (task) => {
    let taskContainer = buildElement('div','', 'task-container');
    let taskDescription = buildElement('input', '', 'task-description', 'description-input');
    let taskDetails = buildElement('button', 'Details', 'task-details');
    let taskDeleteButton = buildElement('button', 'Delete', 'task-delete');
    let taskState = buildSelect(task.state, _handler.getStates(), 'task-state')
    let taskDate = buildElement('input','','date-input');
    let taskSpace = buildSelect(task.space, _handler.getSpacesList(), 'task-space');
    let taskPriority = buildSelect(task.priority, _handler.getPriorities(), 'task-priority');
    let taskNotes = buildElement('button', 'notes', 'task-notes');
    let taskNotesTextarea = buildElement('textarea', task.notes, 'task-notes-textarea');

    taskContainer.style.border = `1px solid ${_handler.getPriorityColor(task)}`;

    taskDescription.setAttribute('type', 'text');
    taskDescription.setAttribute('value', task.description);
    taskDescription.setAttribute('placeholder', 'task description');
    taskDescription.addEventListener('input', () => {
        _handler.updateTask(task, {description:taskDescription.value})
    })

    taskState.addEventListener('input', () => {
        _handler.updateTask(task, {state: taskState.value});
    });

    taskDate.setAttribute('type', 'date');
    taskDate.setAttribute('value', task.date);
    taskDate.addEventListener('input', () => {
        _handler.updateTask(task, {date:taskDate.value})
    });

    taskSpace.addEventListener('input', () => {
        _handler.updateTask(task, {space:taskSpace.value})
        _handler.setCurrentSpace(_handler.getCurrentSpace())
    })

    taskPriority.addEventListener('input', () => {
        _handler.updateTask(task, {priority:taskPriority.value})
        setPriorityColor(task, taskContainer);
    })

    const cleanOffNotes = () => {
        taskNotes.textContent = 'notes'
        taskNotesTextarea.remove();
        taskContainer.classList.remove('task-container-with-notes')
    }

    taskNotes.addEventListener('click', () => {
        if (taskNotes.textContent == 'notes') {
            taskNotes.textContent = 'close notes'
            taskNotesTextarea.value = task.notes;
            
            taskNotesTextarea.addEventListener('input', () => {
                _handler.updateTask(task, {notes:taskNotesTextarea.value});
            })

            taskContainer.appendChild(taskNotesTextarea);
            taskContainer.classList.add('task-container-with-notes')
        } else if (taskNotes.textContent == 'close notes') {
            cleanOffNotes()
        }

    })

    taskDetails.addEventListener('click', () => {
        if (taskDetails.textContent == 'Details') {
            taskDetails.textContent = 'Less';
            
            taskDeleteButton.remove();
            taskState.remove();

            taskContainer.appendChild(taskDate)
            taskContainer.appendChild(taskSpace)
            taskContainer.appendChild(taskPriority)
            taskContainer.appendChild(taskNotes)
            taskContainer.appendChild(taskState)

        } else if(taskDetails.textContent == 'Less') {
            taskDetails.textContent = 'Details';

            taskDate.remove();
            taskSpace.remove();
            taskPriority.remove();
            taskState.remove();
            taskNotes.remove();
            
            cleanOffNotes();

            taskContainer.appendChild(taskDeleteButton)
            taskContainer.appendChild(taskState)
        }
    });

    taskDeleteButton.addEventListener('click', () => {
        _handler.handleDeletion(task);
        taskContainer.remove();
    });

    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskDetails);
    taskContainer.appendChild(taskDeleteButton);
    taskContainer.appendChild(taskState);

    return taskContainer;
}

const buildElement = (type, text, ...classes) => {
    let element = document.createElement(type);

    for (const cssClass of classes) {
        element.classList.add(cssClass);
    }

    element.textContent = text;

    return element;
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




let Handler = {}

Handler.handleNewTaskInput = (newTask) => {
    let task = _task__WEBPACK_IMPORTED_MODULE_1__.Task.newTask(
        newTask.description,
        newTask.date, 
        'notes', 
        '#t1 #t2',
        newTask.space,
        newTask.priority, 
        newTask.state, 
    );
    _task__WEBPACK_IMPORTED_MODULE_1__.Task.addTask(task);
    _ui__WEBPACK_IMPORTED_MODULE_2__.UI.createTaskList(_task__WEBPACK_IMPORTED_MODULE_1__.Task.getTasks([
        e => e.space == _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace
    ]));
    _task__WEBPACK_IMPORTED_MODULE_1__.Task.save();

    console.log(_task__WEBPACK_IMPORTED_MODULE_1__.Task.list)
}

Handler.addNewSpace = (spaceName) => {
    _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[spaceName] = _task__WEBPACK_IMPORTED_MODULE_1__.Task.makeDefaultSpaceElements();
    _ui__WEBPACK_IMPORTED_MODULE_2__.UI.updateSpaceHeader();
    _task__WEBPACK_IMPORTED_MODULE_1__.Task.save()
}

Handler.handleDeletion = (task) => {
    _task__WEBPACK_IMPORTED_MODULE_1__.Task.deleteTask(task);
    _task__WEBPACK_IMPORTED_MODULE_1__.Task.save();

    console.log(_task__WEBPACK_IMPORTED_MODULE_1__.Task.list);
}

Handler.deleteCurrentSpace = () => {
    let spaces = _task__WEBPACK_IMPORTED_MODULE_1__.Task.getSpacesList();
    if (spaces.length == 1) return
    
    delete _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[_task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace];
    _task__WEBPACK_IMPORTED_MODULE_1__.Task.deleteTasks([(e) => e.space == _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace]);
    spaces = _task__WEBPACK_IMPORTED_MODULE_1__.Task.getSpacesList();
    _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace = spaces[0];

    Handler.setCurrentSpace(_task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace);
    _ui__WEBPACK_IMPORTED_MODULE_2__.UI.updateSpaceHeader();
    _task__WEBPACK_IMPORTED_MODULE_1__.Task.save()
}

Handler.updateTask = (task, newAttributes) => {
    for (const key in newAttributes) {
        task[key] = newAttributes[key];
    }

    _task__WEBPACK_IMPORTED_MODULE_1__.Task.save();
}

Handler.updateCurrentSpaceName = (newName) => {
    if (newName == _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace) return ;

    _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[newName] = _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[_task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace]
    delete _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[_task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace]

    // update the task space of the previous space
    let currSpaceTask = _task__WEBPACK_IMPORTED_MODULE_1__.Task.getTasks([(e) => e.space == _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace])
    for (const task of currSpaceTask) {
        task.space = newName;
    }

    _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace = newName;

    _ui__WEBPACK_IMPORTED_MODULE_2__.UI.updateSpaceHeader()
    _task__WEBPACK_IMPORTED_MODULE_1__.Task.save();
    _task__WEBPACK_IMPORTED_MODULE_1__.Task.saveCurrentSpace();
}

Handler.getSpacesList = () => {
    return _task__WEBPACK_IMPORTED_MODULE_1__.Task.getSpacesList()
}

Handler.getStates = () => {
    return _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[_task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace].states;
}

Handler.getPriorities = () => {
    return _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[_task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace].priorities;    
}

Handler.getCurrentSpace = () => {
    return _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace;
}

Handler.getPriorityColor = (task) => {
    let colors = _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[task.space].colors;
    let colorI = _task__WEBPACK_IMPORTED_MODULE_1__.Task.spaces[task.space].priorities.findIndex((e) => e == task.priority);
    return colors[colorI];
}

// changes the current space and shows that space list.
Handler.setCurrentSpace = (space) => {
    _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace = space;
    _ui__WEBPACK_IMPORTED_MODULE_2__.UI.createTaskList(_task__WEBPACK_IMPORTED_MODULE_1__.Task.getTasks([
        e => e.space == _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace
    ]));
    _task__WEBPACK_IMPORTED_MODULE_1__.Task.saveCurrentSpace();
}

_task__WEBPACK_IMPORTED_MODULE_1__.Task.addTask(_task__WEBPACK_IMPORTED_MODULE_1__.Task.newTask(
    'This belongs in Default', 
    '', 
    'notes', 
    '#t1 #t2',
    'Default',
    'LOW', 
    'TODO', 
));

_task__WEBPACK_IMPORTED_MODULE_1__.Task.addTask(_task__WEBPACK_IMPORTED_MODULE_1__.Task.newTask(
    'This also belongs to Default',
    '2023-11-06',
    'notes',
    '#t1',
    'Default',
    'HIGH',
    'DOING',
));

_task__WEBPACK_IMPORTED_MODULE_1__.Task.addTask(_task__WEBPACK_IMPORTED_MODULE_1__.Task.newTask(
    'This belongs in Other', 
    '', 
    'notes', 
    '#t1 #t2',
    'Other',
    'LOW', 
    'TODO', 
));

_task__WEBPACK_IMPORTED_MODULE_1__.Task.load();
_ui__WEBPACK_IMPORTED_MODULE_2__.UI.setHandler(Handler);
_ui__WEBPACK_IMPORTED_MODULE_2__.UI.createBaseInterface();
_ui__WEBPACK_IMPORTED_MODULE_2__.UI.createTaskList(_task__WEBPACK_IMPORTED_MODULE_1__.Task.getTasks([
    e => e.space == _task__WEBPACK_IMPORTED_MODULE_1__.Task.currentSpace
]));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLE1BQU07QUFDakIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxnQ0FBZ0M7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtDQUFrQztBQUNyRSxLQUFLOztBQUVMO0FB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O0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksdUNBQUk7QUFDUixJQUFJLG1DQUFFLGdCQUFnQix1Q0FBSTtBQUMxQix3QkFBd0IsdUNBQUk7QUFDNUI7QUFDQSxJQUFJLHVDQUFJO0FBQ1I7O0FBRUEsdUNBQUksU0FBUyx1Q0FBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUFJLFNBQVMsdUNBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBSSxTQUFTLHVDQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQUk7QUFDSixtQ0FBRTtBQUNGLG1DQUFFO0FBQ0YsbUNBQUUsZ0JBQWdCLHVDQUFJO0FBQ3RCLG9CQUFvQix1Q0FBSTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jYXBwIHtcbiAgICB3aWR0aDogNzIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTZyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMS42cmVtO1xufVxuXG4uc3BhY2UtaGVhZGVyLXNlbGVjdCB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi5zcGFjZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbn1cblxuLnNwYWNlLW9wdGlvbi1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgd2lkdGg6IDRyZW07XG59XG5cbi5zcGFjZS1pbnB1dC1jb250YWluZXIsIFxuLnNwYWNlLXdhcm5pbmctY29udGFpbmVyLFxuLnNwYWNlLWVkaXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbn1cblxuLnNwYWNlLWlucHV0LFxuLmRlbGV0ZS1zcGFjZS13YXJuaW5nLFxuLnNwYWNlLWVkaXQtaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uYWRkLWl0ZW0tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IDZyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5zZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xufVxuXG4ubmV3LXRhc2stY29udGFpbmVyIHtcbiAgICB3aWR0aCA6IDgwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gNDAwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMS42cmVtO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4ubmV3LXRhc2stY29udGFpbmVyID4gLmRlc2NyaXB0aW9uLWlucHV0IHtcbiAgICB3aWR0aDogNjklO1xufVxuXG4uZGVzY3JpcHRpb24taW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmV3LXRhc2stc3BhY2Utc2VsZWN0IHtcbiAgICB3aWR0aDogMTAlO1xuICAgIGhlaWdodDogNi44Y2g7XG59XG5cbi5uZXctdGFzay1idXR0b24ge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgaGVpZ2h0OiA1Y2g7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgcGFkZGluZzogLjhyZW0gMS42cmVtO1xuICAgIHJvdy1nYXA6IC44cmVtO1xufVxuXG4udGFzay1jb250YWluZXItd2l0aC1ub3RlcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcbn1cblxuLnRhc2stY29udGFpbmVyID4gZGl2IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAuOHJlbSAxLjZyZW07XG59XG5cbi50YXNrLWRlc2NyaXB0aW9uIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4udGFzay1zdGF0ZSB7XG4gICAgZ3JpZC1jb2x1bW46IC0yO1xufVxuXG4udGFzay1ub3Rlcy10ZXh0YXJlYSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgICBncmlkLXJvdzogMyAvIDY7XG5cbiAgICByZXNpemU6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOzs7SUFHSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHFDQUFxQztBQUN6Qzs7QUFFQTs7O0lBR0ksZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7O0lBRXZCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7O0lBRWYsWUFBWTtJQUNaLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2FwcCB7XFxuICAgIHdpZHRoOiA3MjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTZyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMS42cmVtO1xcbn1cXG5cXG4uc3BhY2UtaGVhZGVyLXNlbGVjdCB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgd2lkdGg6IDI1JTtcXG59XFxuXFxuLnNwYWNlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5zcGFjZS1vcHRpb24tYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbn1cXG5cXG4uc3BhY2UtaW5wdXQtY29udGFpbmVyLCBcXG4uc3BhY2Utd2FybmluZy1jb250YWluZXIsXFxuLnNwYWNlLWVkaXQtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLnNwYWNlLWlucHV0LFxcbi5kZWxldGUtc3BhY2Utd2FybmluZyxcXG4uc3BhY2UtZWRpdC1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFkZC1pdGVtLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XFxufVxcblxcbi5uZXctdGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aCA6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSA0MDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwIDEuNnJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLm5ldy10YXNrLWNvbnRhaW5lciA+IC5kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIHdpZHRoOiA2OSU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm5ldy10YXNrLXNwYWNlLXNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogNi44Y2g7XFxufVxcblxcbi5uZXctdGFzay1idXR0b24ge1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDVjaDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZzogLjhyZW0gMS42cmVtO1xcbiAgICByb3ctZ2FwOiAuOHJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLXdpdGgtbm90ZXMge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgPiBkaXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogLjhyZW0gMS42cmVtO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcbn1cXG5cXG4udGFzay1zdGF0ZSB7XFxuICAgIGdyaWQtY29sdW1uOiAtMjtcXG59XFxuXFxuLnRhc2stbm90ZXMtdGV4dGFyZWEge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogMyAvIDY7XFxuXFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCBUYXNrID0ge31cblxuVGFzay50YWdzID0gWycjVGFnMScsICcjVGFnMiddXG5UYXNrLnNwYWNlcyA9IHtcbiAgICAnRGVmYXVsdCcgOiB7XG4gICAgICAgIHByaW9yaXRpZXM6IFsnTE9XJywgJ01FRElVTScsICdISUdIJ10sXG4gICAgICAgIGNvbG9yczogWydibGFjaycsICdibHVlJywgJ3JlZCddLFxuICAgICAgICBzdGF0ZXMgOiBbJ1RPRE8nLCAnRE9JTkcnLCAnRE9ORSddLFxuICAgIH0sXG4gICAgJ090aGVyJyA6IHtcbiAgICAgICAgcHJpb3JpdGllczogWydMT1cnLCAnTUVESVVNJywgJ0hJR0gnXSxcbiAgICAgICAgY29sb3JzOiBbJ2JsYWNrJywgJ2JsdWUnLCAncmVkJ10sXG4gICAgICAgIHN0YXRlcyA6IFsnVE9ETycsICdET0lORycsICdET05FJ10sXG4gICAgfSxcbiAgICAnQW5vdGhlcicgOiB7XG4gICAgICAgIHByaW9yaXRpZXM6IFsnTE9XJywgJ01FRElVTScsICdISUdIJ10sXG4gICAgICAgIGNvbG9yczogWydibGFjaycsICdibHVlJywgJ3JlZCddLFxuICAgICAgICBzdGF0ZXMgOiBbJ1RPRE8nLCAnRE9JTkcnLCAnRE9ORSddLFxuICAgIH0sXG59O1xuXG5UYXNrLmN1cnJlbnRTcGFjZSA9ICdEZWZhdWx0JztcblxuVGFzay5ib2FyZHMgPSBbXTtcblRhc2subGlzdCA9IG5ldyBNYXAoKTtcblxubGV0IF9pZENvdW50ZXIgPSAwO1xuXG5UYXNrLnNhdmUgPSAoKSA9PiB7XG4gICAgbGV0IFNhdmVPYmplY3QgPSB7XG4gICAgICAgIGxpc3Q6QXJyYXkuZnJvbShUYXNrLmxpc3QpLFxuICAgICAgICBfaWRDb3VudGVyLFxuICAgICAgICBzcGFjZXM6VGFzay5zcGFjZXMsXG4gICAgfVxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIEpTT04uc3RyaW5naWZ5KFNhdmVPYmplY3QpKTtcbn1cblxuVGFzay5zYXZlQ3VycmVudFNwYWNlID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFNwYWNlJywgVGFzay5jdXJyZW50U3BhY2UpO1xufVxuXG5UYXNrLmxvYWQgPSAoKSA9PiB7XG4gICAgbGV0IGRhdGEgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGEnKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgVGFzay5saXN0ID0gbmV3IE1hcChkYXRhLmxpc3QpO1xuICAgICAgICBfaWRDb3VudGVyID0gZGF0YS5faWRDb3VudGVyO1xuICAgICAgICBUYXNrLnNwYWNlcyA9IGRhdGEuc3BhY2VzO1xuICAgIH1cbiAgICBsZXQgY3VycmVudFNwYWNlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U3BhY2UnKVxuICAgIGlmIChjdXJyZW50U3BhY2UpIHtcbiAgICAgICAgVGFzay5jdXJyZW50U3BhY2UgPSBjdXJyZW50U3BhY2VcbiAgICB9XG59XG5cblRhc2subWFrZURlZmF1bHRTcGFjZUVsZW1lbnRzID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByaW9yaXRpZXM6IFsnTE9XJywgJ01FRElVTScsICdISUdIJ10sXG4gICAgICAgIGNvbG9yczogWydibGFjaycsICdibHVlJywgJ3JlZCddLFxuICAgICAgICBzdGF0ZXMgOiBbJ1RPRE8nLCAnRE9JTkcnLCAnRE9ORSddLFxuICAgIH1cbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiBcbiAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZSBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmlvcml0eSBcbiAqIEBwYXJhbSB7c3RyaW5nfSBub3RlcyBcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZSBcbiAqIEBwYXJhbSB7c3RyaW5nfSBzcGFjZSBcbiAqL1xuVGFzay5uZXdUYXNrID0gKGRlc2NyaXB0aW9uLCBkYXRlLCBub3RlcywgdGFncywgc3BhY2UsIHByaW9yaXR5LCBzdGF0ZSkgPT4ge1xuICAgIGxldCBvYmogPSB7fTtcbiAgICBvYmouZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBvYmouZGF0ZSA9IGRhdGU7XG4gICAgb2JqLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgb2JqLm5vdGVzID0gbm90ZXM7XG4gICAgb2JqLnN0YXRlID0gc3RhdGU7XG4gICAgb2JqLnNwYWNlID0gc3BhY2U7XG4gICAgb2JqLnRhZ3MgPSB0YWdzO1xuICAgIG9iai5zdWJ0YXNrID0gW11cbiAgICBvYmouaWQgPSBfaWRDb3VudGVyKys7XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG5UYXNrLmFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgIFRhc2subGlzdC5zZXQodGFzay5pZCwgdGFzayk7XG59XG5cblRhc2suZGVsZXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgVGFzay5saXN0LmRlbGV0ZSh0YXNrLmlkKTtcbn1cblxuVGFzay5kZWxldGVUYXNrcyA9IChmaWx0ZXJzKSA9PiB7XG4gICAgbGV0IHRhc2tUb0RlbGV0ZSA9IFRhc2suZ2V0VGFza3MoZmlsdGVycyk7XG5cbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza1RvRGVsZXRlKSB7XG4gICAgICAgIFRhc2subGlzdC5kZWxldGUodGFzay5pZCk7XG4gICAgfVxufVxuXG5UYXNrLmdldFRhc2tzID0gKGZpbHRlcnMpID0+IHtcbiAgICBsZXQgbGlzdCA9IFtdO1xuXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIFRhc2subGlzdC52YWx1ZXMoKSkge1xuICAgICAgICBsaXN0LnB1c2godGFzaylcbiAgICAgICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgZmlsdGVycykge1xuICAgICAgICAgICAgaWYgKCFmaWx0ZXIodGFzaykpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnBvcCgpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbn1cblxuVGFzay5zb3J0VGFza3MgPSAodGFza3MsIGNvbXBhcmF0b3IsIGRlc2NlbmRpbmcpID0+IHt9XG5cblRhc2suZ2V0U3BhY2VzTGlzdCA9ICgpID0+IHtcbiAgICBsZXQgbGlzdCA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBzcGFjZSBpbiBUYXNrLnNwYWNlcykge1xuICAgICAgICBsaXN0LnB1c2goc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgeyBUYXNrIH0iLCJsZXQgVUkgPSB7fVxuXG5sZXQgYXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpO1xubGV0IG5ld1Rhc2tBY3RpdmUgPSBmYWxzZTtcblxubGV0IF9oYW5kbGVyO1xuXG5VSS5zZXRIYW5kbGVyID0gKGhhbmRsZXIpID0+IHtcbiAgICBfaGFuZGxlciA9IGhhbmRsZXI7XG59XG5cblVJLnVwZGF0ZVNwYWNlSGVhZGVyID0gKCkgPT4ge1xuICAgIGxldCBvbGRTcGFjZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGFjZS1oZWFkZXItc2VsZWN0JylcbiAgICBsZXQgbmV3U3BhY2VTZWxlY3QgPSBidWlsZFNlbGVjdChcbiAgICAgICAgX2hhbmRsZXIuZ2V0Q3VycmVudFNwYWNlKCksXG4gICAgICAgIF9oYW5kbGVyLmdldFNwYWNlc0xpc3QoKSxcbiAgICAgICAgJ3NwYWNlLWhlYWRlci1zZWxlY3QnLFxuICAgICk7XG5cbiAgICBuZXdTcGFjZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHsgXG4gICAgICAgIF9oYW5kbGVyLnNldEN1cnJlbnRTcGFjZShuZXdTcGFjZVNlbGVjdC52YWx1ZSk7XG4gICAgfSlcblxuICAgIG9sZFNwYWNlU2VsZWN0LnJlcGxhY2VXaXRoKG5ld1NwYWNlU2VsZWN0KTtcbn1cblxuVUkuY3JlYXRlQmFzZUludGVyZmFjZSA9ICgpID0+IHtcbiAgICBsZXQgc3BhY2VDb250YWluZXIgPSBidWlsZEVsZW1lbnQoJ2RpdicsICcnLCAnc3BhY2UtY29udGFpbmVyJylcbiAgICBsZXQgc3BhY2VTZWxlY3QgPSBidWlsZFNlbGVjdChcbiAgICAgICAgX2hhbmRsZXIuZ2V0Q3VycmVudFNwYWNlKCksXG4gICAgICAgIF9oYW5kbGVyLmdldFNwYWNlc0xpc3QoKSxcbiAgICAgICAgJ3NwYWNlLWhlYWRlci1zZWxlY3QnLFxuICAgICk7XG4gICAgbGV0IGJ1dHRvbnNDb250YWluZXIgPSBidWlsZEVsZW1lbnQoJ2RpdicsICcnLCAnc3BhY2UtYnV0dG9ucy1jb250YWluZXInKTtcbiAgICBsZXQgYWRkU3BhY2VCdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICcrJywgJ3NwYWNlLW9wdGlvbi1idXR0b24nKTtcbiAgICBsZXQgZGVsZXRlU3BhY2VCdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICctJywgJ3NwYWNlLW9wdGlvbi1idXR0b24nKTtcbiAgICBsZXQgZWRpdFNwYWNlQnV0dG9uID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnZScsICdzcGFjZS1vcHRpb24tYnV0dG9uJyk7XG4gICAgbGV0IGFkZEl0ZW1CdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICcrJywgJ2FkZC1pdGVtLWJ1dHRvbicpO1xuXG5cbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFNwYWNlQnV0dG9uKVxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlU3BhY2VCdXR0b24pXG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0U3BhY2VCdXR0b24pXG4gICAgXG4gICAgc3BhY2VTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7IFxuICAgICAgICBfaGFuZGxlci5zZXRDdXJyZW50U3BhY2Uoc3BhY2VTZWxlY3QudmFsdWUpO1xuICAgIH0pXG5cbiAgICBhZGRTcGFjZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IHNwYWNlSW5wdXRDb250YWluZXIgPSBidWlsZEVsZW1lbnQoJ2RpdicsICcnLCAnc3BhY2UtaW5wdXQtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCB0ZXh0SW5wdXQgPSBidWlsZEVsZW1lbnQoJ2lucHV0JywgJycsICdzcGFjZS1pbnB1dCcpO1xuICAgICAgICBsZXQgbmV3U3BhY2VCdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICduZXcgc3BhY2UnLCAnbmV3LXNwYWNlLWJ1dHRvbicpO1xuICAgICAgICBsZXQgY2FuY2VsU3BhY2VCdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICdjYW5jZWwnLCAnbmV3LXNwYWNlLWJ1dHRvbicpO1xuXG4gICAgICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdzcGFjZSBuYW1lJylcbiAgICAgICAgbGV0IHJlc3RvcmVQcmV2U3RhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBzcGFjZUlucHV0Q29udGFpbmVyLnJlbW92ZSgpXG5cbiAgICAgICAgICAgIHNwYWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpXG4gICAgICAgIH1cbiAgICAgICAgbmV3U3BhY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGV4dElucHV0LnZhbHVlID09ICcnKSByZXR1cm4gXG5cbiAgICAgICAgICAgIF9oYW5kbGVyLmFkZE5ld1NwYWNlKHRleHRJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgIHJlc3RvcmVQcmV2U3RhdGUoKVxuICAgICAgICB9KTtcblxuICAgICAgICBjYW5jZWxTcGFjZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlc3RvcmVQcmV2U3RhdGUoKVxuICAgICAgICB9KTtcblxuICAgICAgICBidXR0b25zQ29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgIHNwYWNlSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dElucHV0KTtcbiAgICAgICAgc3BhY2VJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdTcGFjZUJ1dHRvbik7XG4gICAgICAgIHNwYWNlSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsU3BhY2VCdXR0b24pO1xuICAgICAgICBzcGFjZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFjZUlucHV0Q29udGFpbmVyKTtcbiAgICB9KVxuXG4gICAgZGVsZXRlU3BhY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBzcGFjZVdhcm5pbmdDb250YWluZXIgPSBidWlsZEVsZW1lbnQoJ2RpdicsICcnLCAnc3BhY2Utd2FybmluZy1jb250YWluZXInKTtcbiAgICAgICAgbGV0IHdhcm5pbmdUZXh0ID0gYnVpbGRFbGVtZW50KCdkaXYnLCAnRGVsZXRlIGN1cnJlbnQgc3BhY2U/JywgJ2RlbGV0ZS1zcGFjZS13YXJuaW5nJyk7XG4gICAgICAgIGxldCBjb25maXJtQnV0dG9uID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnWWVzJywgJ2RlbGV0aW9uLWJ1dHRvbicpXG4gICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICdDYW5jZWwnLCAnZGVsZXRpb24tYnV0dG9uJylcblxuICAgICAgICBsZXQgcmVzdG9yZVByZXZTdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHNwYWNlV2FybmluZ0NvbnRhaW5lci5yZW1vdmUoKVxuXG4gICAgICAgICAgICBzcGFjZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9oYW5kbGVyLmRlbGV0ZUN1cnJlbnRTcGFjZSgpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlc3RvcmVQcmV2U3RhdGUoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlc3RvcmVQcmV2U3RhdGUoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ1dHRvbnNDb250YWluZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgc3BhY2VXYXJuaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHdhcm5pbmdUZXh0KTtcbiAgICAgICAgc3BhY2VXYXJuaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuICAgICAgICBzcGFjZVdhcm5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgc3BhY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhY2VXYXJuaW5nQ29udGFpbmVyKTtcbiAgICB9KVxuXG4gICAgZWRpdFNwYWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgc3BhY2VFZGl0Q29udGFpbmVyID0gYnVpbGRFbGVtZW50KCdkaXYnLCAnJywgJ3NwYWNlLWVkaXQtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCB0ZXh0SW5wdXQgPSBidWlsZEVsZW1lbnQoJ2lucHV0JywgJycsICdzcGFjZS1lZGl0LWlucHV0Jyk7XG4gICAgICAgIGxldCBjb25maXJtQnV0dG9uID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnY2hhbmdlIG5hbWUnLCAnZWRpdC1zcGFjZS1idXR0b24nKTtcbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGJ1aWxkRWxlbWVudCgnYnV0dG9uJywgJ2NhbmNlbCcsICdlZGl0LXNwYWNlLWJ1dHRvbicpO1xuXG4gICAgICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIF9oYW5kbGVyLmdldEN1cnJlbnRTcGFjZSgpKTtcblxuICAgICAgICBjb25zdCByZXN0b3JlUHJldlN0YXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgc3BhY2VFZGl0Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBzcGFjZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfaGFuZGxlci51cGRhdGVDdXJyZW50U3BhY2VOYW1lKHRleHRJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgIHJlc3RvcmVQcmV2U3RhdGUoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlc3RvcmVQcmV2U3RhdGUoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGJ1dHRvbnNDb250YWluZXIucmVtb3ZlKClcblxuICAgICAgICBzcGFjZUVkaXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dElucHV0KTtcbiAgICAgICAgc3BhY2VFZGl0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmZpcm1CdXR0b24pO1xuICAgICAgICBzcGFjZUVkaXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICBzcGFjZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFjZUVkaXRDb250YWluZXIpO1xuICAgIH0pXG5cbiAgICBhZGRJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAobmV3VGFza0FjdGl2ZSkgcmV0dXJuO1xuICAgICAgICBhcHBDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGROZXdUYXNrSW50ZXJmYWNlKCkpXG4gICAgICAgIG5ld1Rhc2tBY3RpdmUgPSB0cnVlO1xuICAgIH0pO1xuICAgIC8vIGhlcmUgc2hvdWxkIGJlIGFkZGVkIHRoZSByZXN0IG9mIHRoZSBpdGVtcyBzdG9yZWRcbiAgICBzcGFjZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFjZVNlbGVjdCk7XG4gICAgc3BhY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XG4gICAgYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYWNlQ29udGFpbmVyKTtcbiAgICBhcHBDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkSXRlbUJ1dHRvbik7XG59XG5cblVJLmNyZWF0ZVRhc2tMaXN0ID0gKHRhc2tMaXN0KSA9PiB7XG4gICAgbGV0IG9sZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jb250YWluZXInKTtcblxuICAgIGZvciAoY29uc3QgdGFza0VsZW1lbnQgb2Ygb2xkVGFzaykge1xuICAgICAgICB0YXNrRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza0xpc3QpIHtcbiAgICAgICAgYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkVGFzayh0YXNrKSk7XG4gICAgfVxufVxuXG5jb25zdCBidWlsZE5ld1Rhc2tJbnRlcmZhY2UgPSAoKSA9PiB7XG4gICAgbGV0IG5ld1Rhc2tDb250YWluZXIgPSBidWlsZEVsZW1lbnQoJ2RpdicsJycsJ25ldy10YXNrLWNvbnRhaW5lcicpO1xuICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gYnVpbGRFbGVtZW50KCdpbnB1dCcsICcnLCAndGFzay1kZXNjcmlwdGlvbicsICdkZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgIGxldCBzcGFjZVNlbGVjdCA9IGJ1aWxkU2VsZWN0KFxuICAgICAgICBfaGFuZGxlci5nZXRDdXJyZW50U3BhY2UoKSxcbiAgICAgICAgX2hhbmRsZXIuZ2V0U3BhY2VzTGlzdCgpLFxuICAgICAgICAnbmV3LXRhc2stc3BhY2Utc2VsZWN0JyxcbiAgICApO1xuICAgIGxldCBhZGRCdXR0b24gPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICdhZGQnLCAnbmV3LXRhc2stYnV0dG9uJylcbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnY2FuY2VsJywgJ25ldy10YXNrLWJ1dHRvbicpXG4gICAgbGV0IGRhdGVJbnB1dCA9IGJ1aWxkRWxlbWVudCgnaW5wdXQnLCcnLCdkYXRlLWlucHV0Jyk7XG4gICAgY29uc3QgcG9zaWJsZVN0YXRlcyA9IF9oYW5kbGVyLmdldFN0YXRlcygpXG4gICAgY29uc3QgcG9zaWJsZVByaW9yaXRpZXMgPSBfaGFuZGxlci5nZXRQcmlvcml0aWVzKClcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBidWlsZFNlbGVjdChwb3NpYmxlUHJpb3JpdGllc1swXSwgcG9zaWJsZVByaW9yaXRpZXMsICduZXctdGFzay1wcmlvcml0eScpXG4gICAgbGV0IHN0YXRlU2VsZWN0ID0gYnVpbGRTZWxlY3QocG9zaWJsZVN0YXRlc1swXSwgcG9zaWJsZVN0YXRlcywgJ25ldy10YXNrLXN0YXRlJylcblxuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdkZXNjcmlwdGlvbicpXG5cbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcblxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHNwYWNlU2VsZWN0LnZhbHVlID09ICcnKSByZXR1cm47XG5cbiAgICAgICAgX2hhbmRsZXIuaGFuZGxlTmV3VGFza0lucHV0KHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICAgICAgc3BhY2U6IHNwYWNlU2VsZWN0LnZhbHVlLFxuICAgICAgICAgICAgZGF0ZTogZGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgcHJpb3JpdHk6cHJpb3JpdHlTZWxlY3QudmFsdWUsXG4gICAgICAgICAgICBzdGF0ZTpzdGF0ZVNlbGVjdC52YWx1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3VGFza0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgbmV3VGFza0FjdGl2ZSA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBuZXdUYXNrQWN0aXZlID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpXG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFjZVNlbGVjdCk7XG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG4gICAgbmV3VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0ZVNlbGVjdCk7XG4gICAgcmV0dXJuIG5ld1Rhc2tDb250YWluZXI7XG59XG5cbmNvbnN0IGJ1aWxkU2VsZWN0ID0gKGRlZmF1bHRPcHRpb24sIGl0ZW1MaXN0LCAuLi5jc3NDbGFzc2VzKSA9PiB7XG4gICAgbGV0IHNlbGVjdCA9IGJ1aWxkRWxlbWVudCgnc2VsZWN0JywgJycsIC4uLmNzc0NsYXNzZXMpO1xuXG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGVmYXVsdE9wdGlvbik7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gZGVmYXVsdE9wdGlvbjtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtTGlzdCkge1xuICAgICAgICBpZiAoaXRlbSA9PSBkZWZhdWx0T3B0aW9uKSBjb250aW51ZTtcblxuICAgICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdDtcbn1cblxuY29uc3QgYnVpbGRUYXNrID0gKHRhc2spID0+IHtcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGJ1aWxkRWxlbWVudCgnZGl2JywnJywgJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGJ1aWxkRWxlbWVudCgnaW5wdXQnLCAnJywgJ3Rhc2stZGVzY3JpcHRpb24nLCAnZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICBsZXQgdGFza0RldGFpbHMgPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICdEZXRhaWxzJywgJ3Rhc2stZGV0YWlscycpO1xuICAgIGxldCB0YXNrRGVsZXRlQnV0dG9uID0gYnVpbGRFbGVtZW50KCdidXR0b24nLCAnRGVsZXRlJywgJ3Rhc2stZGVsZXRlJyk7XG4gICAgbGV0IHRhc2tTdGF0ZSA9IGJ1aWxkU2VsZWN0KHRhc2suc3RhdGUsIF9oYW5kbGVyLmdldFN0YXRlcygpLCAndGFzay1zdGF0ZScpXG4gICAgbGV0IHRhc2tEYXRlID0gYnVpbGRFbGVtZW50KCdpbnB1dCcsJycsJ2RhdGUtaW5wdXQnKTtcbiAgICBsZXQgdGFza1NwYWNlID0gYnVpbGRTZWxlY3QodGFzay5zcGFjZSwgX2hhbmRsZXIuZ2V0U3BhY2VzTGlzdCgpLCAndGFzay1zcGFjZScpO1xuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBidWlsZFNlbGVjdCh0YXNrLnByaW9yaXR5LCBfaGFuZGxlci5nZXRQcmlvcml0aWVzKCksICd0YXNrLXByaW9yaXR5Jyk7XG4gICAgbGV0IHRhc2tOb3RlcyA9IGJ1aWxkRWxlbWVudCgnYnV0dG9uJywgJ25vdGVzJywgJ3Rhc2stbm90ZXMnKTtcbiAgICBsZXQgdGFza05vdGVzVGV4dGFyZWEgPSBidWlsZEVsZW1lbnQoJ3RleHRhcmVhJywgdGFzay5ub3RlcywgJ3Rhc2stbm90ZXMtdGV4dGFyZWEnKTtcblxuICAgIHRhc2tDb250YWluZXIuc3R5bGUuYm9yZGVyID0gYDFweCBzb2xpZCAke19oYW5kbGVyLmdldFByaW9yaXR5Q29sb3IodGFzayl9YDtcblxuICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFzay5kZXNjcmlwdGlvbik7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAndGFzayBkZXNjcmlwdGlvbicpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgX2hhbmRsZXIudXBkYXRlVGFzayh0YXNrLCB7ZGVzY3JpcHRpb246dGFza0Rlc2NyaXB0aW9uLnZhbHVlfSlcbiAgICB9KVxuXG4gICAgdGFza1N0YXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBfaGFuZGxlci51cGRhdGVUYXNrKHRhc2ssIHtzdGF0ZTogdGFza1N0YXRlLnZhbHVlfSk7XG4gICAgfSk7XG5cbiAgICB0YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIHRhc2tEYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrLmRhdGUpO1xuICAgIHRhc2tEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBfaGFuZGxlci51cGRhdGVUYXNrKHRhc2ssIHtkYXRlOnRhc2tEYXRlLnZhbHVlfSlcbiAgICB9KTtcblxuICAgIHRhc2tTcGFjZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgX2hhbmRsZXIudXBkYXRlVGFzayh0YXNrLCB7c3BhY2U6dGFza1NwYWNlLnZhbHVlfSlcbiAgICAgICAgX2hhbmRsZXIuc2V0Q3VycmVudFNwYWNlKF9oYW5kbGVyLmdldEN1cnJlbnRTcGFjZSgpKVxuICAgIH0pXG5cbiAgICB0YXNrUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIF9oYW5kbGVyLnVwZGF0ZVRhc2sodGFzaywge3ByaW9yaXR5OnRhc2tQcmlvcml0eS52YWx1ZX0pXG4gICAgICAgIHNldFByaW9yaXR5Q29sb3IodGFzaywgdGFza0NvbnRhaW5lcik7XG4gICAgfSlcblxuICAgIGNvbnN0IGNsZWFuT2ZmTm90ZXMgPSAoKSA9PiB7XG4gICAgICAgIHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9ICdub3RlcydcbiAgICAgICAgdGFza05vdGVzVGV4dGFyZWEucmVtb3ZlKCk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1jb250YWluZXItd2l0aC1ub3RlcycpXG4gICAgfVxuXG4gICAgdGFza05vdGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGFza05vdGVzLnRleHRDb250ZW50ID09ICdub3RlcycpIHtcbiAgICAgICAgICAgIHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9ICdjbG9zZSBub3RlcydcbiAgICAgICAgICAgIHRhc2tOb3Rlc1RleHRhcmVhLnZhbHVlID0gdGFzay5ub3RlcztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza05vdGVzVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgX2hhbmRsZXIudXBkYXRlVGFzayh0YXNrLCB7bm90ZXM6dGFza05vdGVzVGV4dGFyZWEudmFsdWV9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05vdGVzVGV4dGFyZWEpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lci13aXRoLW5vdGVzJylcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrTm90ZXMudGV4dENvbnRlbnQgPT0gJ2Nsb3NlIG5vdGVzJykge1xuICAgICAgICAgICAgY2xlYW5PZmZOb3RlcygpXG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICB0YXNrRGV0YWlscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRhc2tEZXRhaWxzLnRleHRDb250ZW50ID09ICdEZXRhaWxzJykge1xuICAgICAgICAgICAgdGFza0RldGFpbHMudGV4dENvbnRlbnQgPSAnTGVzcyc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhc2tEZWxldGVCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgICAgICB0YXNrU3RhdGUucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGUpXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tTcGFjZSlcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KVxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTm90ZXMpXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tTdGF0ZSlcblxuICAgICAgICB9IGVsc2UgaWYodGFza0RldGFpbHMudGV4dENvbnRlbnQgPT0gJ0xlc3MnKSB7XG4gICAgICAgICAgICB0YXNrRGV0YWlscy50ZXh0Q29udGVudCA9ICdEZXRhaWxzJztcblxuICAgICAgICAgICAgdGFza0RhdGUucmVtb3ZlKCk7XG4gICAgICAgICAgICB0YXNrU3BhY2UucmVtb3ZlKCk7XG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkucmVtb3ZlKCk7XG4gICAgICAgICAgICB0YXNrU3RhdGUucmVtb3ZlKCk7XG4gICAgICAgICAgICB0YXNrTm90ZXMucmVtb3ZlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsZWFuT2ZmTm90ZXMoKTtcblxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnV0dG9uKVxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrU3RhdGUpXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRhc2tEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIF9oYW5kbGVyLmhhbmRsZURlbGV0aW9uKHRhc2spO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ1dHRvbik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrU3RhdGUpO1xuXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG59XG5cbmNvbnN0IGJ1aWxkRWxlbWVudCA9ICh0eXBlLCB0ZXh0LCAuLi5jbGFzc2VzKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gICAgZm9yIChjb25zdCBjc3NDbGFzcyBvZiBjbGFzc2VzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgfVxuXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IHsgVUkgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFzaydcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi91aSc7XG5cbmxldCBIYW5kbGVyID0ge31cblxuSGFuZGxlci5oYW5kbGVOZXdUYXNrSW5wdXQgPSAobmV3VGFzaykgPT4ge1xuICAgIGxldCB0YXNrID0gVGFzay5uZXdUYXNrKFxuICAgICAgICBuZXdUYXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICBuZXdUYXNrLmRhdGUsIFxuICAgICAgICAnbm90ZXMnLCBcbiAgICAgICAgJyN0MSAjdDInLFxuICAgICAgICBuZXdUYXNrLnNwYWNlLFxuICAgICAgICBuZXdUYXNrLnByaW9yaXR5LCBcbiAgICAgICAgbmV3VGFzay5zdGF0ZSwgXG4gICAgKTtcbiAgICBUYXNrLmFkZFRhc2sodGFzayk7XG4gICAgVUkuY3JlYXRlVGFza0xpc3QoVGFzay5nZXRUYXNrcyhbXG4gICAgICAgIGUgPT4gZS5zcGFjZSA9PSBUYXNrLmN1cnJlbnRTcGFjZVxuICAgIF0pKTtcbiAgICBUYXNrLnNhdmUoKTtcblxuICAgIGNvbnNvbGUubG9nKFRhc2subGlzdClcbn1cblxuSGFuZGxlci5hZGROZXdTcGFjZSA9IChzcGFjZU5hbWUpID0+IHtcbiAgICBUYXNrLnNwYWNlc1tzcGFjZU5hbWVdID0gVGFzay5tYWtlRGVmYXVsdFNwYWNlRWxlbWVudHMoKTtcbiAgICBVSS51cGRhdGVTcGFjZUhlYWRlcigpO1xuICAgIFRhc2suc2F2ZSgpXG59XG5cbkhhbmRsZXIuaGFuZGxlRGVsZXRpb24gPSAodGFzaykgPT4ge1xuICAgIFRhc2suZGVsZXRlVGFzayh0YXNrKTtcbiAgICBUYXNrLnNhdmUoKTtcblxuICAgIGNvbnNvbGUubG9nKFRhc2subGlzdCk7XG59XG5cbkhhbmRsZXIuZGVsZXRlQ3VycmVudFNwYWNlID0gKCkgPT4ge1xuICAgIGxldCBzcGFjZXMgPSBUYXNrLmdldFNwYWNlc0xpc3QoKTtcbiAgICBpZiAoc3BhY2VzLmxlbmd0aCA9PSAxKSByZXR1cm5cbiAgICBcbiAgICBkZWxldGUgVGFzay5zcGFjZXNbVGFzay5jdXJyZW50U3BhY2VdO1xuICAgIFRhc2suZGVsZXRlVGFza3MoWyhlKSA9PiBlLnNwYWNlID09IFRhc2suY3VycmVudFNwYWNlXSk7XG4gICAgc3BhY2VzID0gVGFzay5nZXRTcGFjZXNMaXN0KCk7XG4gICAgVGFzay5jdXJyZW50U3BhY2UgPSBzcGFjZXNbMF07XG5cbiAgICBIYW5kbGVyLnNldEN1cnJlbnRTcGFjZShUYXNrLmN1cnJlbnRTcGFjZSk7XG4gICAgVUkudXBkYXRlU3BhY2VIZWFkZXIoKTtcbiAgICBUYXNrLnNhdmUoKVxufVxuXG5IYW5kbGVyLnVwZGF0ZVRhc2sgPSAodGFzaywgbmV3QXR0cmlidXRlcykgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG5ld0F0dHJpYnV0ZXMpIHtcbiAgICAgICAgdGFza1trZXldID0gbmV3QXR0cmlidXRlc1trZXldO1xuICAgIH1cblxuICAgIFRhc2suc2F2ZSgpO1xufVxuXG5IYW5kbGVyLnVwZGF0ZUN1cnJlbnRTcGFjZU5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgIGlmIChuZXdOYW1lID09IFRhc2suY3VycmVudFNwYWNlKSByZXR1cm4gO1xuXG4gICAgVGFzay5zcGFjZXNbbmV3TmFtZV0gPSBUYXNrLnNwYWNlc1tUYXNrLmN1cnJlbnRTcGFjZV1cbiAgICBkZWxldGUgVGFzay5zcGFjZXNbVGFzay5jdXJyZW50U3BhY2VdXG5cbiAgICAvLyB1cGRhdGUgdGhlIHRhc2sgc3BhY2Ugb2YgdGhlIHByZXZpb3VzIHNwYWNlXG4gICAgbGV0IGN1cnJTcGFjZVRhc2sgPSBUYXNrLmdldFRhc2tzKFsoZSkgPT4gZS5zcGFjZSA9PSBUYXNrLmN1cnJlbnRTcGFjZV0pXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIGN1cnJTcGFjZVRhc2spIHtcbiAgICAgICAgdGFzay5zcGFjZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgVGFzay5jdXJyZW50U3BhY2UgPSBuZXdOYW1lO1xuXG4gICAgVUkudXBkYXRlU3BhY2VIZWFkZXIoKVxuICAgIFRhc2suc2F2ZSgpO1xuICAgIFRhc2suc2F2ZUN1cnJlbnRTcGFjZSgpO1xufVxuXG5IYW5kbGVyLmdldFNwYWNlc0xpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFRhc2suZ2V0U3BhY2VzTGlzdCgpXG59XG5cbkhhbmRsZXIuZ2V0U3RhdGVzID0gKCkgPT4ge1xuICAgIHJldHVybiBUYXNrLnNwYWNlc1tUYXNrLmN1cnJlbnRTcGFjZV0uc3RhdGVzO1xufVxuXG5IYW5kbGVyLmdldFByaW9yaXRpZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFRhc2suc3BhY2VzW1Rhc2suY3VycmVudFNwYWNlXS5wcmlvcml0aWVzOyAgICBcbn1cblxuSGFuZGxlci5nZXRDdXJyZW50U3BhY2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFRhc2suY3VycmVudFNwYWNlO1xufVxuXG5IYW5kbGVyLmdldFByaW9yaXR5Q29sb3IgPSAodGFzaykgPT4ge1xuICAgIGxldCBjb2xvcnMgPSBUYXNrLnNwYWNlc1t0YXNrLnNwYWNlXS5jb2xvcnM7XG4gICAgbGV0IGNvbG9ySSA9IFRhc2suc3BhY2VzW3Rhc2suc3BhY2VdLnByaW9yaXRpZXMuZmluZEluZGV4KChlKSA9PiBlID09IHRhc2sucHJpb3JpdHkpO1xuICAgIHJldHVybiBjb2xvcnNbY29sb3JJXTtcbn1cblxuLy8gY2hhbmdlcyB0aGUgY3VycmVudCBzcGFjZSBhbmQgc2hvd3MgdGhhdCBzcGFjZSBsaXN0LlxuSGFuZGxlci5zZXRDdXJyZW50U3BhY2UgPSAoc3BhY2UpID0+IHtcbiAgICBUYXNrLmN1cnJlbnRTcGFjZSA9IHNwYWNlO1xuICAgIFVJLmNyZWF0ZVRhc2tMaXN0KFRhc2suZ2V0VGFza3MoW1xuICAgICAgICBlID0+IGUuc3BhY2UgPT0gVGFzay5jdXJyZW50U3BhY2VcbiAgICBdKSk7XG4gICAgVGFzay5zYXZlQ3VycmVudFNwYWNlKCk7XG59XG5cblRhc2suYWRkVGFzayhUYXNrLm5ld1Rhc2soXG4gICAgJ1RoaXMgYmVsb25ncyBpbiBEZWZhdWx0JywgXG4gICAgJycsIFxuICAgICdub3RlcycsIFxuICAgICcjdDEgI3QyJyxcbiAgICAnRGVmYXVsdCcsXG4gICAgJ0xPVycsIFxuICAgICdUT0RPJywgXG4pKTtcblxuVGFzay5hZGRUYXNrKFRhc2submV3VGFzayhcbiAgICAnVGhpcyBhbHNvIGJlbG9uZ3MgdG8gRGVmYXVsdCcsXG4gICAgJzIwMjMtMTEtMDYnLFxuICAgICdub3RlcycsXG4gICAgJyN0MScsXG4gICAgJ0RlZmF1bHQnLFxuICAgICdISUdIJyxcbiAgICAnRE9JTkcnLFxuKSk7XG5cblRhc2suYWRkVGFzayhUYXNrLm5ld1Rhc2soXG4gICAgJ1RoaXMgYmVsb25ncyBpbiBPdGhlcicsIFxuICAgICcnLCBcbiAgICAnbm90ZXMnLCBcbiAgICAnI3QxICN0MicsXG4gICAgJ090aGVyJyxcbiAgICAnTE9XJywgXG4gICAgJ1RPRE8nLCBcbikpO1xuXG5UYXNrLmxvYWQoKTtcblVJLnNldEhhbmRsZXIoSGFuZGxlcik7XG5VSS5jcmVhdGVCYXNlSW50ZXJmYWNlKCk7XG5VSS5jcmVhdGVUYXNrTGlzdChUYXNrLmdldFRhc2tzKFtcbiAgICBlID0+IGUuc3BhY2UgPT0gVGFzay5jdXJyZW50U3BhY2Vcbl0pKTtcblxuLyoqXG4gKiBET05FIGFkZCBhYmlsaXR5IHRvIGNoYW5nZSBzcGFjZXMgdGFzayBsaXN0XG4gKiBET05FIG1ha2UgdGhlIGRlZmF1bHQgc3BhY2Ugd2hlbiBjcmVhdGluZyBhIG5ldyB0YXNrIHRvIGJlIHRoZSBjdXJyZW50IHNwYWNlLlxuICogRE9ORSBhZGQgZGF0ZSBcbiAqIERPTkUgYWRkIGFiaWxpdHkgdG8gZXhwYW5kIGEgc2luZ2xlIHRvZG8gdG8gc2VlL2VkaXQgaXRzIGRldGFpbHNcbiAqIERPTkUgYWRkIGFiaWxpdHkgdG8gZWRpdCBhbmQgc2F2ZSB0aGUgZGF0ZSBvZiBhbiBleGlzdGluZyB0YXNrXG4gKiBET05FIGFkZCBzdGF0ZSBwcm9wZXJ0eVxuICogRE9ORSBhZGQgYWJpbGl0eSB0byBjaGFnZSB0aGUgZGVzY3JpcHRpb24gb2YgYW4gZXhpc3RpbmcgdGFza1xuICogRE9ORSBmaXggdGhlIHN0YXRlIHBvc2l0aW9uaW5nXG4gKiBET05FIGFkZCBhYmlsaXR5IHRvIGNoYW5nZSB0aGUgc3BhY2Ugb2YgYW4gZXhpc3RpbmcgdGFzay5cbiAqIERPTkUgYWRkIHByaW9yaXR5XG4gKiBET05FIHNhdmUgZGF0YVxuICogRE9ORSBhZGQgYWJpbGl0eSB0byBtYWtlIGFuZCBkZWxldGUgc3BhY2VzXG4gKiBET05FIGFkZCBwcmlvcml0eSBhbmQgc3RhdGUgc2VsZWN0aW9uIHdoZW4gYWRkaW5nIGEgdGFza1xuICogRE9ORSBlZGl0IGEgc3BhY2UgbmFtZVxuICogRE9ORSBhZGQgbm90ZXNcbiAqIFRPRE8gYWRkIGFiaWxpdHkgdG8gc29ydCB0YXNrXG4gKiBUT0RPIGNyZWF0ZSBuZXcgdGFzayBieSBwcmVzc2luZyBlbnRlclxuICogVE9ETyBjbG9zZSBub3RlcyB3aXRoIHRoZSAnZXNjYXBlJyBrZXlcbiAqIFRPRE8gY2xlYW4gdXAgYnVpbGRUYXNrICYgYnVpbGROZXdUYXNrSW50ZXJmYWNlXG4gKiBUT0RPIGFkZCB0aW1lXG4gKiBUT0RPIGFkZCB0YWdzXG4gKiBUT0RPIGFkZCBmaWx0ZXJzXG4gKiBUT0RPIGFkZCBtYW51YWwgc29ydGluZyBhbmQgc2F2ZSBpdCBvbiAnYm9hcmRzJ1xuICogVE9ETyBhZGQgc3VidGFza1xuICovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9