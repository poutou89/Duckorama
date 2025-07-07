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
canard.src = document.getElementById('canard');
document.addEventListener('DOMContentLoaded', function () {
  canard.id = 'canard';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NhbmFyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9qcy9jYW5hcmQuanMnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1cmdlclwiKTtcclxuICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZMaW5rc1wiKTtcclxuICBcclxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBuYXZMaW5rcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCdzb25nL3F1YWNrXzUubXAzJyk7XHJcbiAgICAgICAgYXVkaW8ucGxheSgpLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBkZSBsZWN0dXJlIGF1ZGlvIDonLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG4iLCJcclxuY2FuYXJkLnNyYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5hcmQnKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNhbmFyZC5pZCA9ICdjYW5hcmQnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW5hcmQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmVDYW5hcmQoKSB7XHJcbiAgICAgICAgY29uc3QgbWF4WCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTAwO1xyXG4gICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMDA7XHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiBtYXhYO1xyXG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnJhbmRvbSgpICogbWF4WTtcclxuICAgICAgICBjYW5hcmQuc3R5bGUubGVmdCA9IHggKyAncHgnO1xyXG4gICAgICAgIGNhbmFyZC5zdHlsZS5ib3R0b20gPSB5ICsgJ3B4JztcclxuICAgICAgICBjYW5hcmQuY2xhc3NMaXN0LmFkZCgnbW92aW5nJyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2FuYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ21vdmluZycpLCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcnZhbChtb3ZlQ2FuYXJkLCA0MDAwKTsgLy8gVG91dGVzIGxlcyA0IHNlY29uZGVzXHJcblxyXG4gICAgY2FuYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oJy9zb25nL3F1YWNrXzUubXAzJyk7XHJcbiAgICAgICAgYXVkaW8ucGxheSgpLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsZWN0dXJlIHNvbiA6JywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJidXJnZXIiLCJnZXRFbGVtZW50QnlJZCIsIm5hdkxpbmtzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjYW5hcmQiLCJzcmMiLCJpZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm1vdmVDYW5hcmQiLCJtYXhYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1heFkiLCJpbm5lckhlaWdodCIsIngiLCJNYXRoIiwicmFuZG9tIiwieSIsInN0eWxlIiwibGVmdCIsImJvdHRvbSIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=