(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_canard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/canard.js */ "./assets/js/canard.js");
/* harmony import */ var _js_canard_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_canard_js__WEBPACK_IMPORTED_MODULE_1__);
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

/***/ "./assets/js/canard.js":
/*!*****************************!*\
  !*** ./assets/js/canard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
document.addEventListener('DOMContentLoaded', function () {
  var canard = document.createElement('img');
  canard.id = 'canard';
  canard.src = './images/canard.png';
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

"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUMxQkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jYW5hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vanMvY2FuYXJkLmpzJztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXJnZXJcIik7XHJcbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2TGlua3NcIik7XHJcbiAgXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbmF2TGlua3MuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnc29uZy9xdWFja181Lm1wMycpO1xyXG4gICAgICAgIGF1ZGlvLnBsYXkoKS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgZGUgbGVjdHVyZSBhdWRpbyA6JywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgY2FuYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjYW5hcmQuaWQgPSAnY2FuYXJkJztcclxuICAgIGNhbmFyZC5zcmMgPSAnLi9pbWFnZXMvY2FuYXJkLnBuZyc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbmFyZCk7XHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZUNhbmFyZCgpIHtcclxuICAgICAgICBjb25zdCBtYXhYID0gd2luZG93LmlubmVyV2lkdGggLSAxMDA7XHJcbiAgICAgICAgY29uc3QgbWF4WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDEwMDtcclxuICAgICAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIG1heFg7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiBtYXhZO1xyXG4gICAgICAgIGNhbmFyZC5zdHlsZS5sZWZ0ID0geCArICdweCc7XHJcbiAgICAgICAgY2FuYXJkLnN0eWxlLmJvdHRvbSA9IHkgKyAncHgnO1xyXG4gICAgICAgIGNhbmFyZC5jbGFzc0xpc3QuYWRkKCdtb3ZpbmcnKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYW5hcmQuY2xhc3NMaXN0LnJlbW92ZSgnbW92aW5nJyksIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEludGVydmFsKG1vdmVDYW5hcmQsIDQwMDApOyAvLyBUb3V0ZXMgbGVzIDQgc2Vjb25kZXNcclxuXHJcbiAgICBjYW5hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnL3NvbmcvcXVhY2tfNS5tcDMnKTtcclxuICAgICAgICBhdWRpby5wbGF5KCkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxlY3R1cmUgc29uIDonLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1cmdlciIsImdldEVsZW1lbnRCeUlkIiwibmF2TGlua3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhdWRpbyIsIkF1ZGlvIiwicGxheSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNhbmFyZCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInNyYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm1vdmVDYW5hcmQiLCJtYXhYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1heFkiLCJpbm5lckhlaWdodCIsIngiLCJNYXRoIiwicmFuZG9tIiwieSIsInN0eWxlIiwibGVmdCIsImJvdHRvbSIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=