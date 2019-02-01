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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./node_modules/lightning-container/index.js":
/*!***************************************************!*\
  !*** ./node_modules/lightning-container/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nCopyright 2016 salesforce.com, inc. All rights reserved. \n\nUse of this software is subject to the salesforce.com Developerforce Terms of Use and other\napplicable terms that salesforce.com may make available, as may be amended from time to time.\nYou may not decompile, reverse engineer, disassemble, attempt to derive the source code of,\ndecrypt, modify, or create derivative works of this software, updates thereto, or any part\nthereof. You may not use the software to engage in any development activity that interferes\nwith, disrupts, damages, or accesses in an unauthorized manner the servers, networks, or\nother properties or services of salesforce.com or any third party.\n\nWITHOUT LIMITING THE GENERALITY OF THE FOREGOING, THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT\nWARRANTY OF ANY KIND, EXPRESS OR IMPLIED. IN NO EVENT SHALL SALESFORCE.COM HAVE ANY LIABILITY\nFOR ANY DAMAGES, INCLUDING BUT NOT LIMITED TO, DIRECT, INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE,\nOR CONSEQUENTIAL DAMAGES, OR DAMAGES BASED ON LOST PROFITS, DATA OR USE, IN CONNECTION WITH THE\nSOFTWARE, HOWEVER CAUSED AND, WHETHER IN CONTRACT, TORT OR UNDER ANY OTHER THEORY OF LIABILITY,\nWHETHER OR NOT YOU HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.\n*/\n\n\n\nmodule.exports.sendMessage = function(userMessage) {\n    if (typeof LCC !== \"undefined\" && typeof LCC.onlineSupport !== \"undefined\") {\n        LCC.onlineSupport.sendMessage(\"containerUserMessage\", {payload: userMessage});\n    }\n    else {\n        // TODO: offline\n    }\n}\n\nmodule.exports.addErrorHandler = function(handler) {\n    if (typeof LCC !== \"undefined\" && typeof LCC.onlineSupport !== \"undefined\") {\n        LCC.onlineSupport.addErrorHandler(handler);\n    }\n    else {\n        // TODO: offline\n    }\n}\n\nmodule.exports.removeErrorHandler = function(handler) {\n    if (typeof LCC !== \"undefined\" && typeof LCC.onlineSupport !== \"undefined\") {\n        LCC.onlineSupport.removeErrorHandler(handler);\n    }\n    else {\n        // TODO: offline\n    }\n}\n\nmodule.exports.addMessageHandler = function(handler) {\n    if (typeof LCC !== \"undefined\" && typeof LCC.onlineSupport !== \"undefined\") {\n        LCC.onlineSupport.addMessageHandler(handler);\n    }\n    else {\n        // TODO: offline\n    }\n}\n\nmodule.exports.removeMessageHandler = function(handler) {\n    if (typeof LCC !== \"undefined\" && typeof LCC.onlineSupport !== \"undefined\") {\n        LCC.onlineSupport.removeMessageHandler(handler);\n    }\n    else {\n        // TODO: offline\n    }\n}\n\nmodule.exports.getRESTAPISessionKey = function() {\n    if (typeof LCC !== \"undefined\" && typeof LCC.onlineSupport !== \"undefined\") {\n        return LCC.onlineSupport.getRESTAPISessionKey();\n    }\n    else {\n        // TODO: offline\n        return \"\";\n    }\n}\n\nmodule.exports.callApex = function(fullyQualifiedApexMethodName,\n                                   apexMethodParameters,\n                                   callbackFunction,\n                                   apexCallConfiguration) {\n    if (typeof Visualforce !== \"undefined\" && \n        typeof Visualforce.remoting !== \"undefined\" &&\n        typeof Visualforce.remoting.Manager !== \"undefined\") {\n\n            Visualforce.remoting.Manager.invokeAction(fullyQualifiedApexMethodName,\n                                                      apexMethodParameters,\n                                                      callbackFunction,\n                                                      apexCallConfiguration);\n    }\n    else {\n        // TODO: offline\n    }\n}\n\n//# sourceURL=webpack:///./node_modules/lightning-container/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lightning_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lightning-container */ \"./node_modules/lightning-container/index.js\");\n/* harmony import */ var lightning_container__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lightning_container__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// Select the node that will be observed for mutations\nvar targetNode = document.getElementById('resizable');\n\n// Options for the observer (which mutations to observe)\nvar config = { attributes: true, childList: false, subtree: false };\n\n// Callback function to execute when mutations are observed\nvar callback = function(mutationsList, observer) {\n    for(var mutation of mutationsList) {\n        if (mutation.type == 'attributes') {\n            console.log('The ' + mutation.attributeName + ' attribute was modified.');\n        }\n    }\n\n    //Get the targets new size\n    var h = mutationsList[0].target.clientHeight\n    var w = mutationsList[0].target.clientWidth\n\n    lightning_container__WEBPACK_IMPORTED_MODULE_0___default.a.sendMessage([h, w]);\n};\n\n// Create an observer instance linked to the callback function\nvar observer = new MutationObserver(callback);\n\n// Start observing the target node for configured mutations\nobserver.observe(targetNode, config);\n\n// Register for messages sent by hosting component\nlightning_container__WEBPACK_IMPORTED_MODULE_0___default.a.addMessageHandler(function(message) {\n\t//TODO, Handle size commands from the parent.\n});\n\n// Functions for example resizing.\nfunction resize(height, width) {\n    var targetNode = document.getElementById('resizable');\n    targetNode.style.height = height + \"px\";\n    targetNode.style.width = width + \"px\";\n}\n\nfunction resize1() {\n    resize(200, 200);\n}\n\nfunction resize2() {\n    resize(200, 1000);\n}\n\nfunction resize3() {\n    resize(900 * Math.random() + 100, 900 * Math.random() + 100);\n}\n\ndocument.getElementById(\"sendBtn1\").addEventListener(\"click\", resize1);\ndocument.getElementById(\"sendBtn2\").addEventListener(\"click\", resize2);\ndocument.getElementById(\"sendBtn3\").addEventListener(\"click\", resize3);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });