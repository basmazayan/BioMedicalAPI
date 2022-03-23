"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1885],{

/***/ 31885:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/resourceUtils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOrUpdateResource": () => (/* binding */ u),
/* harmony export */   "contentToBlob": () => (/* binding */ h),
/* harmony export */   "fetchResources": () => (/* binding */ c),
/* harmony export */   "getSiblingOfSameType": () => (/* binding */ f),
/* harmony export */   "getSiblingOfSameTypeI": () => (/* binding */ w),
/* harmony export */   "removeAllResources": () => (/* binding */ l),
/* harmony export */   "removeResource": () => (/* binding */ i),
/* harmony export */   "splitPrefixFileNameAndExtension": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





function c(_x) {
  return _c.apply(this, arguments);
}

function _c() {
  _c = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t = {}, a) {
    yield e.load(a);
    const o = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)(e.itemUrl, "resources"),
          {
      start: n = 1,
      num: c = 10,
      sortOrder: u = "asc",
      sortField: i = "created"
    } = t,
          l = {
      query: {
        start: n,
        num: c,
        sortOrder: u,
        sortField: i,
        token: e.apiKey
      },
      signal: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.get)(a, "signal")
    },
          p = yield e.portal._request(o, l);
    return {
      total: p.total,
      nextStart: p.nextStart,
      resources: p.resources.map(({
        created: t,
        size: r,
        resource: a
      }) => ({
        created: new Date(t),
        size: r,
        resource: e.resourceFromPath(a)
      }))
    };
  });
  return _c.apply(this, arguments);
}

function u(_x2, _x3, _x4, _x5) {
  return _u.apply(this, arguments);
}

function _u() {
  _u = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, o, n, c) {
    if (!e.hasPath()) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default(`portal-item-resource-${o}:invalid-path`, "Resource does not have a valid path");
    const u = e.portalItem;
    yield u.load(c);
    const i = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)(u.userItemUrl, "add" === o ? "addResources" : "updateResources"),
          [l, d] = p(e.path),
          m = yield h(n),
          f = new FormData();
    return l && "." !== l && f.append("resourcesPrefix", l), f.append("fileName", d), f.append("file", m, d), f.append("f", "json"), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(c) && c.access && f.append("access", c.access), yield u.portal._request(i, {
      method: "post",
      body: f,
      signal: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.get)(c, "signal")
    }), e;
  });
  return _u.apply(this, arguments);
}

function i(_x6, _x7, _x8) {
  return _i.apply(this, arguments);
}

function _i() {
  _i = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, a, o) {
    if (!a.hasPath()) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("portal-item-resources-remove:invalid-path", "Resource does not have a valid path");
    yield e.load(o);
    const n = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)(e.userItemUrl, "removeResources");
    yield e.portal._request(n, {
      method: "post",
      query: {
        resource: a.path
      },
      signal: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.get)(o, "signal")
    }), a.portalItem = null;
  });
  return _i.apply(this, arguments);
}

function l(_x9, _x10) {
  return _l.apply(this, arguments);
}

function _l() {
  _l = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    yield e.load(t);
    const a = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)(e.userItemUrl, "removeResources");
    return e.portal._request(a, {
      method: "post",
      query: {
        deleteAll: !0
      },
      signal: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.get)(t, "signal")
    });
  });
  return _l.apply(this, arguments);
}

function p(e) {
  const t = e.lastIndexOf("/");
  return -1 === t ? [".", e] : [e.slice(0, t), e.slice(t + 1)];
}

function d(e) {
  const [t, r] = m(e),
        [a, o] = p(t);
  return [a, o, r];
}

function m(e) {
  const t = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.getPathExtension)(e);
  return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(t) ? [e, ""] : [e.slice(0, e.length - t.length - 1), `.${t}`];
}

function h(_x11) {
  return _h.apply(this, arguments);
}

function _h() {
  _h = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t) {
    if (t instanceof Blob) return t;
    return (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(t.url, {
      responseType: "blob"
    })).data;
  });
  return _h.apply(this, arguments);
}

function f(e, t) {
  if (!e.hasPath()) return null;
  const [r,, a] = d(e.path);
  return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)(r, t + a));
}

function w(e, t) {
  if (!e.hasPath()) return null;
  const [r,, a] = d(e.path);
  return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)(r, t + a));
}



/***/ })

}]);
//# sourceMappingURL=1885.96fe9d23b7dc7c362108.js.map