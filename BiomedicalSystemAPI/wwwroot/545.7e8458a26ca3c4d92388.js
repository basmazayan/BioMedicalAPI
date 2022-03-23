"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[545],{

/***/ 80545:
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/request.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "execute": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error.js */ 61414);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maybe.js */ 18502);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


let r;

function s(s, a) {
  let n = a.responseType;
  n ? "array-buffer" !== n && "blob" !== n && "json" !== n && "native" !== n && "native-request-init" !== n && "text" !== n && (n = "text") : n = "json", a.responseType = n;
  const o = (0,_maybe_js__WEBPACK_IMPORTED_MODULE_2__.unwrap)(a.signal);
  return delete a.signal, globalThis.invokeStaticMessage("request", {
    url: s,
    options: a
  }, {
    signal: o
  }).then( /*#__PURE__*/function () {
    var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t) {
      let i, l, u, c, b;
      if (t.data) if (t.data instanceof ArrayBuffer) {
        if (!("json" !== n && "text" !== n && "blob" !== n || (i = new Blob([t.data]), "json" !== n && "text" !== n || (r || (r = new FileReaderSync()), c = r.readAsText(i), "json" !== n)))) {
          try {
            l = JSON.parse(c || null);
          } catch (f) {
            const t = { ...f,
              url: s,
              requestOptions: a
            };
            throw new _Error_js__WEBPACK_IMPORTED_MODULE_1__.default("request:server", f.message, t);
          }

          if (l.error) {
            const t = { ...l.error,
              url: s,
              requestOptions: a
            };
            throw new _Error_js__WEBPACK_IMPORTED_MODULE_1__.default("request:server", l.error.message, t);
          }
        }
      } else "native" === n && (t.data.signal = o, u = yield fetch(t.data.url, t.data));

      switch (n) {
        case "blob":
          b = i;
          break;

        case "json":
          b = l;
          break;

        case "native":
          b = u;
          break;

        case "text":
          b = c;
          break;

        default:
          b = t.data;
      }

      return {
        data: b,
        requestOptions: a,
        ssl: t.ssl,
        url: s
      };
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}



/***/ })

}]);
//# sourceMappingURL=545.7e8458a26ca3c4d92388.js.map