"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_canard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/canard.js */ "./assets/js/canard.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */


document.addEventListener("DOMContentLoaded", function () {
  var burger = document.getElementById("burger");
  var navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.classList.toggle("active");
  });
});
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function () {
    var audio = new Audio('song/quack_5.mp3');
    audio.play()["catch"](function (error) {
      console.error('Erreur de lecture audio :', error);
    });
  });
});
console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/images/canard.png":
/*!**********************************!*\
  !*** ./assets/images/canard.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/canard.07d7bda5.png";

/***/ }),

/***/ "./assets/js/canard.js":
/*!*****************************!*\
  !*** ./assets/js/canard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_canard_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/canard.png */ "./assets/images/canard.png");


document.addEventListener('DOMContentLoaded', function () {
  var canard = document.createElement('img');
  canard.id = 'canard';
  canard.src = _images_canard_png__WEBPACK_IMPORTED_MODULE_1__;
  document.body.appendChild(canard);
  function moveCanard() {
    var maxX = window.innerWidth - 100;
    var maxY = window.innerHeight - 100;
    var x = Math.random() * maxX;
    var y = Math.random() * maxY;
    canard.style.left = x + 'px';
    canard.style.bottom = y + 'px';
    canard.classList.add('moving');
    setTimeout(function () {
      return canard.classList.remove('moving');
    }, 2000);
  }
  setInterval(moveCanard, 4000); // Toutes les 4 secondes

  canard.addEventListener('click', function () {
    var audio = new Audio('/song/quack_5.mp3');
    audio.play()["catch"](function (error) {
      console.error('Erreur lecture son :', error);
    });
  });
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_web_timers_js"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7QUM1QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jYW5hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vanMvY2FuYXJkLmpzJztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXJnZXJcIik7XHJcbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2TGlua3NcIik7XHJcbiAgXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbmF2TGlua3MuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnc29uZy9xdWFja181Lm1wMycpO1xyXG4gICAgICAgIGF1ZGlvLnBsYXkoKS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgZGUgbGVjdHVyZSBhdWRpbyA6JywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcclxuIiwiaW1wb3J0IGNhbmFyZEltZyBmcm9tICcuLi9pbWFnZXMvY2FuYXJkLnBuZyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjYW5hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNhbmFyZC5pZCA9ICdjYW5hcmQnO1xyXG4gICAgY2FuYXJkLnNyYyA9IGNhbmFyZEltZztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FuYXJkKTtcclxuXHJcbiAgICBmdW5jdGlvbiBtb3ZlQ2FuYXJkKCkge1xyXG4gICAgICAgIGNvbnN0IG1heFggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDEwMDtcclxuICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMTAwO1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpICogbWF4WDtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIG1heFk7XHJcbiAgICAgICAgY2FuYXJkLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcclxuICAgICAgICBjYW5hcmQuc3R5bGUuYm90dG9tID0geSArICdweCc7XHJcbiAgICAgICAgY2FuYXJkLmNsYXNzTGlzdC5hZGQoJ21vdmluZycpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNhbmFyZC5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZpbmcnKSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwobW92ZUNhbmFyZCwgNDAwMCk7IC8vIFRvdXRlcyBsZXMgNCBzZWNvbmRlc1xyXG5cclxuICAgIGNhbmFyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCcvc29uZy9xdWFja181Lm1wMycpO1xyXG4gICAgICAgIGF1ZGlvLnBsYXkoKS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbGVjdHVyZSBzb24gOicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnVyZ2VyIiwiZ2V0RWxlbWVudEJ5SWQiLCJuYXZMaW5rcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2FuYXJkSW1nIiwiY2FuYXJkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwic3JjIiwiYm9keSIsImFwcGVuZENoaWxkIiwibW92ZUNhbmFyZCIsIm1heFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWF4WSIsImlubmVySGVpZ2h0IiwieCIsIk1hdGgiLCJyYW5kb20iLCJ5Iiwic3R5bGUiLCJsZWZ0IiwiYm90dG9tIiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInNldEludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==