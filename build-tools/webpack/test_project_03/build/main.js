webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_main_scss__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_main_scss__);


// import '../css/test.css';
// import moment from 'moment';
// var moment = require('moment');
// console.log(moment().format());

function determineDate() {
    __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 2)).then(function (moment) {
        return moment().format('LLLL');
    }).then(function (str) {
        return console.log(str);
    }).catch(function (err) {
        return console.log('Failed to load moment', err);
    });
}

determineDate();

function component() {
    var element = document.createElement('div');

    /* 需要引入 lodash，下一行才能正常工作 */
    element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

/***/ })
],[4]);