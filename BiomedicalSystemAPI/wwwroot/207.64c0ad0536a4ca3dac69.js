"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[207],{

/***/ 10207:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/symbolLayerUtils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearBoundingBoxCache": () => (/* binding */ a),
/* harmony export */   "computeIconLayerResourceSize": () => (/* binding */ l),
/* harmony export */   "computeLayerResourceSize": () => (/* binding */ y),
/* harmony export */   "computeLayerSize": () => (/* binding */ f),
/* harmony export */   "computeObjectLayerResourceSize": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_ItemCache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/ItemCache.js */ 97486);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/support/aaBoundingBox.js */ 61164);
/* harmony import */ var _symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symbolLayerUtils3D.js */ 26136);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






let c = m();

function m() {
  return new _core_ItemCache_js__WEBPACK_IMPORTED_MODULE_3__.default(50);
}

function a() {
  c = m();
}

function y(e, o) {
  if ("icon" === e.type) return l(e, o);
  if ("object" === e.type) return b(e, o);
  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("symbol3d:unsupported-symbol-layer", "computeLayerSize only works with symbol layers of type Icon and Object");
}

function f(_x, _x2) {
  return _f.apply(this, arguments);
}

function _f() {
  _f = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, o) {
    if ("icon" === e.type) return p(e, o);
    if ("object" === e.type) return d(e, o);
    throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("symbol3d:unsupported-symbol-layer", "computeLayerSize only works with symbol layers of type Icon and Object");
  });
  return _f.apply(this, arguments);
}

function l(_x3, _x4) {
  return _l.apply(this, arguments);
}

function _l() {
  _l = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, o) {
    if (e.resource.href) return h(e.resource.href).then(e => [e.width, e.height]);
    if (e.resource.primitive) return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(o) ? [o, o] : [256, 256];
    throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("symbol3d:invalid-symbol-layer", "symbol layers of type Icon must have either an href or a primitive resource");
  });
  return _l.apply(this, arguments);
}

function p(e, r) {
  return l(e, r).then(r => {
    if (null == e.size) return r;
    const o = r[0] / r[1];
    return o > 1 ? [e.size, e.size / o] : [e.size * o, e.size];
  });
}

function h(r) {
  return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(r, {
    responseType: "image"
  }).then(e => e.data);
}

function b(e, r) {
  return w(e, r).then(e => (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_5__.size)(e));
}

function d(_x5, _x6) {
  return _d.apply(this, arguments);
}

function _d() {
  _d = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r) {
    const o = yield b(e, r);
    return (0,_symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_6__.objectSymbolLayerSizeWithResourceSize)(o, e);
  });
  return _d.apply(this, arguments);
}

function w(_x7, _x8) {
  return _w.apply(this, arguments);
}

function _w() {
  _w = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, o) {
    if (!e.isPrimitive) {
      const r = e.resource.href,
            o = c.get(r);
      if (void 0 !== o) return Promise.resolve(o);
      const t = yield Promise.all(/*! import() */[__webpack_require__.e(7629), __webpack_require__.e(9399), __webpack_require__.e(4411), __webpack_require__.e(8592), __webpack_require__.e(4204)]).then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/layers/graphics/objectResourceUtils.js */ 64204)),
            n = yield t.fetch(r, {
        disableTextures: !0
      });
      return c.put(r, n.referenceBoundingBox), n.referenceBoundingBox;
    }

    let n = null;
    if (e.resource && e.resource.primitive && (n = (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_5__.create)((0,_symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_6__.objectSymbolLayerPrimitiveBoundingBox)(e.resource.primitive)), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(o))) for (let r = 0; r < n.length; r++) n[r] *= o;
    return n ? Promise.resolve(n) : Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("symbol:invalid-resource", "The symbol does not have a valid resource"));
  });
  return _w.apply(this, arguments);
}



/***/ })

}]);
//# sourceMappingURL=207.64c0ad0536a4ca3dac69.js.map