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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: soma, sub, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toma; });\nfunction soma(a, b) {\n  return a + b;\n}\nfunction sub(a, b) {\n  return a - b;\n}\nfunction toma() {\n  for (var _len = arguments.length, tudo = new Array(_len), _key = 0; _key < _len; _key++) {\n    tudo[_key] = arguments[_key];\n  }\n\n  return tudo.reduce(function (total, proximo) {\n    return total + proximo;\n  });\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n/* harmony import */ var _soma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soma */ \"./soma.js\");\n// array\nvar ar = [2, 4, 6, 8];\nvar novo = ar.map(function (item) {\n  return item * 2;\n}); //console.log(novo)\n\nvar sum = ar.reduce(function (total, next) {\n  return total + next;\n});\nconsole.log('sum', sum);\nvar filter = ar.filter(function (item) {\n  return item % 2 == 0;\n}); //console.log(filter)\n\nvar find = ar.find(function (item) {\n  return item === 99;\n}); //console.log(find)\n// desesstruturacao\n// const usuario = {\n//     nome: 'Ricardo',\n//     idade: 28,\n//     endereco: {\n//         cidade: 'Sao Paulo',\n//         estado: 'SP',\n//         nome: 'Rua bonita'\n//     }\n// }\n// const { nome, idade, endereco: { nome:le_nome} } = usuario;\n// console.log(le_nome)\n// rest\n// const usuario = {\n//     nome: 'ricardo',\n//     idade: 22,\n//     empresa: 'ovos'\n// }\n// const { nome, ...resto} = usuario\n// //console.log(nome, resto)\n// const arr = [1,2,3,4]\n// const { a,b,...c } = arr\n// //console.log(c)\n// function soma(...tudo) {\n//     return tudo.reduce((a, b) => {\n//         console.log(\"total\", a)\n//         console.log(\"proximo\", b)\n//         return a + b\n//     })\n// }\n// console.log(\"soma\", soma(1,2,3,4,5,6,7,8,9,10))\n// // spread\n// const arr1 = [1,2,3]\n// const arr2 = [4,5,6]\n// const arr3 = [ ...arr1, ...arr2]\n// console.log(arr3)\n// const usuario1 = {\n//     nome: 'Ricardo',\n//     idade: 23,\n//     empresa: 'pog'\n// }\n// const usuario2 = { ...usuario1, nome: 'peba'}\n// console.log(usuario2)\n// template literal\n// const nome = 'Ricardo'\n// const idade = 33\n// console.log(`meu nome eh ${nome} e tenho ${idade}`)\n// object shor\n// const nome = \"ricardo\"\n// const idade = 20\n// const usuario = {\n//     nome,\n//     idade,\n//     empresa: 'pog'\n// }\n\n\n\n\nconsole.log(Object(_soma__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(10, 2));\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(222, 2));\nconsole.log(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"soma\"](3, 9));\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"sub\"])(20, 10));\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, 4, 6, 8, 10));\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./soma.js":
/*!*****************!*\
  !*** ./soma.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return soma; });\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./soma.js?");

/***/ })

/******/ });