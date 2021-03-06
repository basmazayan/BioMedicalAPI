"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[3969],{

/***/ 7664:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/areasAndLengths.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areasAndLengths": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 16727);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



function o(_x, _x2, _x3) {
  return _o.apply(this, arguments);
}

function _o() {
  _o = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (o, s, e) {
    const a = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(o),
          u = { ...a.query,
      f: "json",
      ...s.toJSON()
    },
          f = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.asValidOptions)(u, e);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(a.path + "/areasAndLengths", f).then(t => t.data);
  });
  return _o.apply(this, arguments);
}



/***/ }),

/***/ 39940:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/autoComplete.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autoComplete": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ 6837);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/Polygon.js */ 38535);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






function i(_x, _x2, _x3, _x4) {
  return _i.apply(this, arguments);
}

function _i() {
  _i = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i, n, m, p) {
    const g = n[0].spatialReference,
          f = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(i),
          a = { ...f.query,
      f: "json",
      sr: JSON.stringify(g.toJSON()),
      polygons: JSON.stringify((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.encodeGeometries)(n).geometries),
      polylines: JSON.stringify((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.encodeGeometries)(m).geometries)
    },
          y = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asValidOptions)(a, p);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(f.path + "/autoComplete", y).then(({
      data: e
    }) => (e.geometries || []).map(({
      rings: e
    }) => new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_5__.default({
      spatialReference: g,
      rings: e
    })));
  });
  return _i.apply(this, arguments);
}



/***/ }),

/***/ 21682:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/buffer.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buffer": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/Polygon.js */ 38535);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





function s(_x, _x2, _x3) {
  return _s.apply(this, arguments);
}

function _s() {
  _s = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (s, n, i) {
    const m = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(s),
          a = { ...m.query,
      f: "json",
      ...n.toJSON()
    },
          f = n.outSpatialReference || n.geometries[0].spatialReference,
          p = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asValidOptions)(a, i);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(m.path + "/buffer", p).then(e => (e.data.geometries || []).map(({
      rings: e
    }) => new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__.default({
      spatialReference: f,
      rings: e
    })));
  });
  return _s.apply(this, arguments);
}



/***/ }),

/***/ 50941:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/convexHull.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convexHull": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ 6837);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





function i(_x, _x2, _x3) {
  return _i.apply(this, arguments);
}

function _i() {
  _i = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i, n, m) {
    const f = n[0].spatialReference,
          p = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(i),
          a = { ...p.query,
      f: "json",
      sr: JSON.stringify(f.toJSON()),
      geometries: JSON.stringify((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.encodeGeometries)(n))
    },
          u = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asValidOptions)(a, m);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(p.path + "/convexHull", u).then(({
      data: t
    }) => (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.fromJSON)(t.geometry).set({
      spatialReference: f
    }));
  });
  return _i.apply(this, arguments);
}



/***/ }),

/***/ 62087:
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/cut.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cut": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ 16727);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





function o(_x, _x2, _x3, _x4) {
  return _o.apply(this, arguments);
}

function _o() {
  _o = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (o, i, n, m) {
    const a = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.parseUrl)(o),
          p = i[0].spatialReference,
          u = { ...m,
      query: { ...a.query,
        f: "json",
        sr: JSON.stringify(p),
        target: JSON.stringify({
          geometryType: (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.getJsonType)(i[0]),
          geometries: i
        }),
        cutter: JSON.stringify(n)
      }
    },
          c = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(a.path + "/cut", u),
          {
      cutIndexes: f,
      geometries: g = []
    } = c.data;
    return {
      cutIndexes: f,
      geometries: g.map(e => {
        const t = (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.fromJSON)(e);
        return t.spatialReference = p, t;
      })
    };
  });
  return _o.apply(this, arguments);
}



/***/ }),

/***/ 21674:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/densify.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "densify": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ 16727);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




function o(_x, _x2, _x3) {
  return _o.apply(this, arguments);
}

function _o() {
  _o = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (o, i, n) {
    const m = i.geometries[0].spatialReference,
          p = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(o),
          a = { ...p.query,
      f: "json",
      ...i.toJSON()
    },
          f = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asValidOptions)(a, n);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(p.path + "/densify", f).then(({
      data: e
    }) => (e.geometries || []).map(e => (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.fromJSON)(e).set({
      spatialReference: m
    })));
  });
  return _o.apply(this, arguments);
}



/***/ }),

/***/ 42122:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/difference.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "difference": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ 6837);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





function i(_x, _x2, _x3, _x4) {
  return _i.apply(this, arguments);
}

function _i() {
  _i = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i, m, n, f) {
    const p = m[0].spatialReference,
          y = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(i);
    let a = {
      query: { ...y.query,
        f: "json",
        sr: JSON.stringify(p.toJSON()),
        geometries: JSON.stringify((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.encodeGeometries)(m)),
        geometry: JSON.stringify({
          geometryType: (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJsonType)(n),
          geometry: n.toJSON()
        })
      }
    };
    return f && (a = { ...f,
      ...a
    }), (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(y.path + "/difference", a).then(({
      data: e
    }) => (e.geometries || []).map(e => (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.fromJSON)(e).set({
      spatialReference: p
    })));
  });
  return _i.apply(this, arguments);
}



/***/ }),

/***/ 69545:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/distance.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distance": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 16727);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



function r(_x, _x2, _x3) {
  return _r.apply(this, arguments);
}

function _r() {
  _r = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, s, e) {
    const a = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(r),
          i = { ...a.query,
      f: "json",
      ...s.toJSON()
    },
          c = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.asValidOptions)(i, e);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(a.path + "/distance", c).then(({
      data: t
    }) => t && t.distance);
  });
  return _r.apply(this, arguments);
}



/***/ }),

/***/ 75957:
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/fromGeoCoordinateString.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromGeoCoordinateString": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _units_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./units.js */ 41564);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




function t(_x, _x2, _x3) {
  return _t.apply(this, arguments);
}

function _t() {
  _t = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, i, e) {
    const c = {};
    null != i.sr && "object" == typeof i.sr ? c.sr = i.sr.wkid || JSON.stringify(i.sr) : c.sr = i.sr, c.strings = JSON.stringify(i.strings);
    const f = i.conversionType || "mgrs";
    c.conversionType = _units_js__WEBPACK_IMPORTED_MODULE_3__.conversionTypeKebabDict.toJSON(f), c.conversionMode = i.conversionMode;
    const m = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(t),
          p = { ...m.query,
      f: "json",
      ...c
    },
          u = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.asValidOptions)(p, e);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(m.path + "/fromGeoCoordinateString", u).then(({
      data: o
    }) => o.coordinates);
  });
  return _t.apply(this, arguments);
}



/***/ }),

/***/ 4308:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/generalize.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generalize": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _support_GeneralizeParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/GeneralizeParameters.js */ 90599);
/* harmony import */ var _tasks_operations_generalize_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tasks/operations/generalize.js */ 73883);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






function i(_x, _x2, _x3) {
  return _i.apply(this, arguments);
}

function _i() {
  _i = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i, m, p) {
    const n = (m = _support_GeneralizeParameters_js__WEBPACK_IMPORTED_MODULE_4__.default.from(m)).toJSON(),
          f = (0,_tasks_operations_generalize_js__WEBPACK_IMPORTED_MODULE_5__.generalizeToRESTParameters)(m),
          j = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(i),
          l = { ...j.query,
      f: "json",
      ...f
    },
          u = n.geometries[0].spatialReference,
          c = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asValidOptions)(l, p);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(j.path + "/generalize", c).then(({
      data: e
    }) => (e.geometries || []).map(e => (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.fromJSON)(e).set({
      spatialReference: u
    })));
  });
  return _i.apply(this, arguments);
}



/***/ }),

/***/ 87224:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/intersect.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "intersect": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ 6837);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





function m(_x, _x2, _x3, _x4) {
  return _m.apply(this, arguments);
}

function _m() {
  _m = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (m, n, p, f) {
    const y = n[0].spatialReference,
          a = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(m),
          g = { ...a.query,
      f: "json",
      sr: JSON.stringify(y.toJSON()),
      geometries: JSON.stringify((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.encodeGeometries)(n)),
      geometry: JSON.stringify({
        geometryType: (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJsonType)(p),
        geometry: p.toJSON()
      })
    },
          u = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asValidOptions)(g, f);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(a.path + "/intersect", u).then(({
      data: e
    }) => (e.geometries || []).map(e => (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.fromJSON)(e).set({
      spatialReference: y
    })));
  });
  return _m.apply(this, arguments);
}



/***/ }),

/***/ 36083:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/labelPoints.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "labelPoints": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 16727);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,i,n){const p=i.map((t=>t.toJSON())),a=i[0].spatialReference,f=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(r),l={...f.query,f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(p)},m=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.asValidOptions)(l,n);return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.default)(f.path+"/labelPoints",m).then((({data:t})=>(t.labelPoints||[]).map((t=>(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__.fromJSON)(t).set({spatialReference:a})))))}


/***/ }),

/***/ 63893:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/lengths.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lengths": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _support_LengthsParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/LengthsParameters.js */ 97834);
/* harmony import */ var _tasks_operations_lengths_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tasks/operations/lengths.js */ 68157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





function n(_x, _x2, _x3) {
  return _n.apply(this, arguments);
}

function _n() {
  _n = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, m, p) {
    m = _support_LengthsParameters_js__WEBPACK_IMPORTED_MODULE_3__.default.from(m);
    const a = (0,_tasks_operations_lengths_js__WEBPACK_IMPORTED_MODULE_4__.lengthsToRESTParameters)(m),
          f = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(n),
          i = { ...f.query,
      f: "json",
      ...a
    },
          u = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.asValidOptions)(i, p);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(f.path + "/lengths", u).then(({
      data: t
    }) => t);
  });
  return _n.apply(this, arguments);
}



/***/ }),

/***/ 66543:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/offset.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offset": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _support_OffsetParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/OffsetParameters.js */ 95560);
/* harmony import */ var _tasks_operations_offset_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tasks/operations/offset.js */ 64843);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






function m(_x, _x2, _x3) {
  return _m.apply(this, arguments);
}

function _m() {
  _m = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (m, p, a) {
    p = _support_OffsetParameters_js__WEBPACK_IMPORTED_MODULE_4__.default.from(p);
    const i = (0,_tasks_operations_offset_js__WEBPACK_IMPORTED_MODULE_5__.offsetToRESTParameters)(p),
          n = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(m),
          j = { ...n.query,
      f: "json",
      ...i
    },
          u = p.geometries[0].spatialReference,
          c = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asValidOptions)(j, a);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(n.path + "/offset", c).then(({
      data: e
    }) => (e.geometries || []).map(e => (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.fromJSON)(e).set({
      spatialReference: u
    })));
  });
  return _m.apply(this, arguments);
}



/***/ }),

/***/ 12008:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/relation.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "relation": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _support_RelationParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/RelationParameters.js */ 66030);
/* harmony import */ var _tasks_operations_relation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tasks/operations/relation.js */ 29583);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





function a(_x, _x2, _x3) {
  return _a.apply(this, arguments);
}

function _a() {
  _a = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (a, n, i) {
    n = _support_RelationParameters_js__WEBPACK_IMPORTED_MODULE_3__.default.from(n);
    const m = (0,_tasks_operations_relation_js__WEBPACK_IMPORTED_MODULE_4__.relationToRESTParameters)(n),
          p = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(a),
          f = { ...p.query,
      f: "json",
      ...m
    },
          u = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.asValidOptions)(f, i);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(p.path + "/relation", u).then(({
      data: r
    }) => r.relations);
  });
  return _a.apply(this, arguments);
}



/***/ }),

/***/ 41725:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/reshape.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reshape": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ 16727);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




function i(_x, _x2, _x3, _x4) {
  return _i.apply(this, arguments);
}

function _i() {
  _i = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i, n, p, a) {
    const f = n.spatialReference,
          m = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(i),
          y = { ...m.query,
      f: "json",
      sr: JSON.stringify(f.toJSON()),
      target: JSON.stringify({
        geometryType: (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJsonType)(n),
        geometry: n.toJSON()
      }),
      reshaper: JSON.stringify(p.toJSON())
    },
          g = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asValidOptions)(y, a);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(m.path + "/reshape", g).then(({
      data: e
    }) => (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.fromJSON)(e.geometry).set({
      spatialReference: f
    }));
  });
  return _i.apply(this, arguments);
}



/***/ }),

/***/ 6358:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/simplify.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "simplify": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ 6837);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





function o(_x, _x2, _x3) {
  return _o.apply(this, arguments);
}

function _o() {
  _o = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (o, m, f) {
    const n = "string" == typeof o ? (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.urlToObject)(o) : o,
          p = m[0].spatialReference,
          a = (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.getJsonType)(m[0]),
          u = { ...f,
      query: { ...n.query,
        f: "json",
        sr: p.wkid ? p.wkid : JSON.stringify(p),
        geometries: JSON.stringify((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.encodeGeometries)(m))
      }
    },
          {
      data: y
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(n.path + "/simplify", u);
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.decodeGeometries)(y.geometries, a, p);
  });
  return _o.apply(this, arguments);
}



/***/ }),

/***/ 47869:
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/toGeoCoordinateString.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toGeoCoordinateString": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _units_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./units.js */ 41564);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




function t(_x, _x2, _x3) {
  return _t.apply(this, arguments);
}

function _t() {
  _t = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, i, e) {
    const c = {};
    null != i.sr && "object" == typeof i.sr ? c.sr = i.sr.wkid || JSON.stringify(i.sr) : c.sr = i.sr, c.coordinates = JSON.stringify(i.coordinates);
    const d = i.conversionType || "mgrs";
    c.conversionType = _units_js__WEBPACK_IMPORTED_MODULE_3__.conversionTypeKebabDict.toJSON(d), c.conversionMode = i.conversionMode, c.numOfDigits = i.numOfDigits, c.rounding = i.rounding, c.addSpaces = i.addSpaces;
    const a = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(t),
          u = { ...a.query,
      f: "json",
      ...c
    },
          f = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.asValidOptions)(u, e);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(a.path + "/toGeoCoordinateString", f).then(({
      data: o
    }) => o.strings);
  });
  return _t.apply(this, arguments);
}



/***/ }),

/***/ 18044:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/trimExtend.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trimExtend": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _support_TrimExtendParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/TrimExtendParameters.js */ 11869);
/* harmony import */ var _tasks_operations_trimExtend_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tasks/operations/trimExtend.js */ 86336);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/Polyline.js */ 23926);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/







function i(_x, _x2, _x3) {
  return _i.apply(this, arguments);
}

function _i() {
  _i = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i, p, n) {
    p = _support_TrimExtendParameters_js__WEBPACK_IMPORTED_MODULE_4__.default.from(p);
    const a = (0,_tasks_operations_trimExtend_js__WEBPACK_IMPORTED_MODULE_5__.trimExtendToRESTParameters)(p),
          f = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(i),
          j = { ...f.query,
      f: "json",
      ...a
    },
          u = p.sr,
          y = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asValidOptions)(j, n);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(f.path + "/trimExtend", y).then(({
      data: t
    }) => (t.geometries || []).map(({
      paths: t
    }) => new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__.default({
      spatialReference: u,
      paths: t
    })));
  });
  return _i.apply(this, arguments);
}



/***/ }),

/***/ 27554:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/union.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "union": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ 6837);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





function i(_x, _x2, _x3) {
  return _i.apply(this, arguments);
}

function _i() {
  _i = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i, n, m) {
    const f = n[0].spatialReference,
          p = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(i),
          a = { ...p.query,
      f: "json",
      sr: JSON.stringify(f.toJSON()),
      geometries: JSON.stringify((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.encodeGeometries)(n))
    },
          u = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asValidOptions)(a, m);
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(p.path + "/union", u).then(({
      data: t
    }) => (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.fromJSON)(t.geometry).set({
      spatialReference: f
    }));
  });
  return _i.apply(this, arguments);
}



/***/ }),

/***/ 41564:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/units.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conversionTypeKebabDict": () => (/* binding */ _),
/* harmony export */   "units": () => (/* binding */ N)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const _=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.JSONMap({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"}),N={UNIT_METER:9001,UNIT_GERMAN_METER:9031,UNIT_FOOT:9002,UNIT_SURVEY_FOOT:9003,UNIT_CLARKE_FOOT:9005,UNIT_FATHOM:9014,UNIT_NAUTICAL_MILE:9030,UNIT_SURVEY_CHAIN:9033,UNIT_SURVEY_LINK:9034,UNIT_SURVEY_MILE:9035,UNIT_KILOMETER:9036,UNIT_CLARKE_YARD:9037,UNIT_CLARKE_CHAIN:9038,UNIT_CLARKE_LINK:9039,UNIT_SEARS_YARD:9040,UNIT_SEARS_FOOT:9041,UNIT_SEARS_CHAIN:9042,UNIT_SEARS_LINK:9043,UNIT_BENOIT_1895A_YARD:9050,UNIT_BENOIT_1895A_FOOT:9051,UNIT_BENOIT_1895A_CHAIN:9052,UNIT_BENOIT_1895A_LINK:9053,UNIT_BENOIT_1895B_YARD:9060,UNIT_BENOIT_1895B_FOOT:9061,UNIT_BENOIT_1895B_CHAIN:9062,UNIT_BENOIT_1895B_LINK:9063,UNIT_INDIAN_FOOT:9080,UNIT_INDIAN_1937_FOOT:9081,UNIT_INDIAN_1962_FOOT:9082,UNIT_INDIAN_1975_FOOT:9083,UNIT_INDIAN_YARD:9084,UNIT_INDIAN_1937_YARD:9085,UNIT_INDIAN_1962_YARD:9086,UNIT_INDIAN_1975_YARD:9087,UNIT_FOOT_1865:9070,UNIT_RADIAN:9101,UNIT_DEGREE:9102,UNIT_ARCMINUTE:9103,UNIT_ARCSECOND:9104,UNIT_GRAD:9105,UNIT_GON:9106,UNIT_MICRORADIAN:9109,UNIT_ARCMINUTE_CENTESIMAL:9112,UNIT_ARCSECOND_CENTESIMAL:9113,UNIT_MIL6400:9114,UNIT_BRITISH_1936_FOOT:9095,UNIT_GOLDCOAST_FOOT:9094,UNIT_INTERNATIONAL_CHAIN:109003,UNIT_INTERNATIONAL_LINK:109004,UNIT_INTERNATIONAL_YARD:109001,UNIT_STATUTE_MILE:9093,UNIT_SURVEY_YARD:109002,UNIT_50KILOMETER_LENGTH:109030,UNIT_150KILOMETER_LENGTH:109031,UNIT_DECIMETER:109005,UNIT_CENTIMETER:109006,UNIT_MILLIMETER:109007,UNIT_INTERNATIONAL_INCH:109008,UNIT_US_SURVEY_INCH:109009,UNIT_INTERNATIONAL_ROD:109010,UNIT_US_SURVEY_ROD:109011,UNIT_US_NAUTICAL_MILE:109012,UNIT_UK_NAUTICAL_MILE:109013,UNIT_SQUARE_INCHES:"esriSquareInches",UNIT_SQUARE_FEET:"esriSquareFeet",UNIT_SQUARE_YARDS:"esriSquareYards",UNIT_ACRES:"esriAcres",UNIT_SQUARE_MILES:"esriSquareMiles",UNIT_SQUARE_MILLIMETERS:"esriSquareMillimeters",UNIT_SQUARE_CENTIMETERS:"esriSquareCentimeters",UNIT_SQUARE_DECIMETERS:"esriSquareDecimeters",UNIT_SQUARE_METERS:"esriSquareMeters",UNIT_ARES:"esriAres",UNIT_HECTARES:"esriHectares",UNIT_SQUARE_KILOMETERS:"esriSquareKilometers"};


/***/ }),

/***/ 90599:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/GeneralizeParameters.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"deviationUnit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{read:{reader:r=>r?r.map((r=>(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__.fromJSON)(r))):null},write:{writer:(r,o)=>{o.geometries=r.map((r=>r.toJSON()))}}}})],p.prototype,"geometries",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],p.prototype,"maxDeviation",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.GeneralizeParameters")],p),p.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.ensureType)(p);const a=p;


/***/ }),

/***/ 97834:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/LengthsParameters.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/Polyline.js */ 23926);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(o){super(o),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],l.prototype,"calculationType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{write:!0}})],l.prototype,"geodesic",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{write:!0}})],l.prototype,"lengthUnit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[_geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_9__.default],json:{read:{reader:o=>o?o.map((o=>(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__.fromJSON)(o))):null},write:{writer:(o,r)=>{r.polylines=o.map((o=>o.toJSON()))}}}})],l.prototype,"polylines",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.LengthsParameters")],l),l.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__.ensureType)(l);const n=l;


/***/ }),

/***/ 95560:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/OffsetParameters.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(o){super(o),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],i.prototype,"bevelRatio",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{read:{reader:o=>o?o.map((o=>(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__.fromJSON)(o))):null},write:{writer:(o,t)=>{t.geometries=o.map((o=>o.toJSON()))}}}})],i.prototype,"geometries",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],i.prototype,"offsetDistance",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],i.prototype,"offsetHow",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],i.prototype,"offsetUnit",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.OffsetParameters")],i),i.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.ensureType)(i);const m=i;


/***/ }),

/***/ 66030:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/RelationParameters.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{read:{reader:r=>r?r.map((r=>(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__.fromJSON)(r))):null},write:{writer:(r,e)=>{e.geometries1=r.map((r=>r.toJSON()))}}}})],p.prototype,"geometries1",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{read:{reader:r=>r?r.map((r=>(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__.fromJSON)(r))):null},write:{writer:(r,e)=>{e.geometries2=r.map((r=>r.toJSON()))}}}})],p.prototype,"geometries2",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"relation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"relationParameter",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.RelationParameters")],p),p.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.ensureType)(p);const a=p;


/***/ }),

/***/ 11869:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/TrimExtendParameters.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/Polyline.js */ 23926);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(r){super(r),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],m.prototype,"extendHow",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[_geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_9__.default],json:{read:{reader:r=>r?r.map((r=>(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__.fromJSON)(r))):null},write:{writer:(r,o)=>{o.polylines=r.map((r=>r.toJSON()))}}}})],m.prototype,"polylines",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{read:{reader:r=>r?(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__.fromJSON)(r):null},write:{writer:(r,o)=>{o.trimExtendTo=r.toJSON()}}}})],m.prototype,"trimExtendTo",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.TrimExtendParameters")],m),m.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__.ensureType)(m);const n=m;


/***/ }),

/***/ 83969:
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/GeometryService.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _rest_geometryService_areasAndLengths_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest/geometryService/areasAndLengths.js */ 7664);
/* harmony import */ var _rest_geometryService_autoComplete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rest/geometryService/autoComplete.js */ 39940);
/* harmony import */ var _rest_geometryService_buffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rest/geometryService/buffer.js */ 21682);
/* harmony import */ var _rest_geometryService_convexHull_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rest/geometryService/convexHull.js */ 50941);
/* harmony import */ var _rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rest/geometryService/cut.js */ 62087);
/* harmony import */ var _rest_geometryService_densify_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rest/geometryService/densify.js */ 21674);
/* harmony import */ var _rest_geometryService_difference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../rest/geometryService/difference.js */ 42122);
/* harmony import */ var _rest_geometryService_distance_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../rest/geometryService/distance.js */ 69545);
/* harmony import */ var _rest_geometryService_fromGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../rest/geometryService/fromGeoCoordinateString.js */ 75957);
/* harmony import */ var _rest_geometryService_generalize_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rest/geometryService/generalize.js */ 4308);
/* harmony import */ var _rest_geometryService_intersect_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../rest/geometryService/intersect.js */ 87224);
/* harmony import */ var _rest_geometryService_labelPoints_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../rest/geometryService/labelPoints.js */ 36083);
/* harmony import */ var _rest_geometryService_lengths_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../rest/geometryService/lengths.js */ 63893);
/* harmony import */ var _rest_geometryService_offset_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../rest/geometryService/offset.js */ 66543);
/* harmony import */ var _rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../rest/geometryService/project.js */ 74769);
/* harmony import */ var _rest_geometryService_relation_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../rest/geometryService/relation.js */ 12008);
/* harmony import */ var _rest_geometryService_reshape_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../rest/geometryService/reshape.js */ 41725);
/* harmony import */ var _rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../rest/geometryService/simplify.js */ 6358);
/* harmony import */ var _rest_geometryService_toGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../rest/geometryService/toGeoCoordinateString.js */ 47869);
/* harmony import */ var _rest_geometryService_trimExtend_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../rest/geometryService/trimExtend.js */ 18044);
/* harmony import */ var _rest_geometryService_union_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../rest/geometryService/union.js */ 27554);
/* harmony import */ var _rest_geometryService_units_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../rest/geometryService/units.js */ 41564);
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Task.js */ 91474);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let C=class extends _Task_js__WEBPACK_IMPORTED_MODULE_28__.default{constructor(r){super(r),this.url=null}areasAndLengths(r,e){return (0,_rest_geometryService_areasAndLengths_js__WEBPACK_IMPORTED_MODULE_6__.areasAndLengths)(this.url,r,e)}autoComplete(r,e,t){return (0,_rest_geometryService_autoComplete_js__WEBPACK_IMPORTED_MODULE_7__.autoComplete)(this.url,r,e,t)}buffer(r,e){return (0,_rest_geometryService_buffer_js__WEBPACK_IMPORTED_MODULE_8__.buffer)(this.url,r,e)}convexHull(r,e){return (0,_rest_geometryService_convexHull_js__WEBPACK_IMPORTED_MODULE_9__.convexHull)(this.url,r,e)}cut(r,e,t){return (0,_rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_10__.cut)(this.url,r,e,t)}densify(r,e){return (0,_rest_geometryService_densify_js__WEBPACK_IMPORTED_MODULE_11__.densify)(this.url,r,e)}difference(r,e,t){return (0,_rest_geometryService_difference_js__WEBPACK_IMPORTED_MODULE_12__.difference)(this.url,r,e,t)}distance(r,e){return (0,_rest_geometryService_distance_js__WEBPACK_IMPORTED_MODULE_13__.distance)(this.url,r,e)}fromGeoCoordinateString(r,e){return (0,_rest_geometryService_fromGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_14__.fromGeoCoordinateString)(this.url,r,e)}generalize(r,e){return (0,_rest_geometryService_generalize_js__WEBPACK_IMPORTED_MODULE_15__.generalize)(this.url,r,e)}intersect(r,e,t){return (0,_rest_geometryService_intersect_js__WEBPACK_IMPORTED_MODULE_16__.intersect)(this.url,r,e,t)}labelPoints(r,e){return (0,_rest_geometryService_labelPoints_js__WEBPACK_IMPORTED_MODULE_17__.labelPoints)(this.url,r,e)}lengths(r,e){return (0,_rest_geometryService_lengths_js__WEBPACK_IMPORTED_MODULE_18__.lengths)(this.url,r,e)}offset(r,e){return (0,_rest_geometryService_offset_js__WEBPACK_IMPORTED_MODULE_19__.offset)(this.url,r,e)}project(r,e){return (0,_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_20__.project)(this.url,r,e)}relation(r,e){return (0,_rest_geometryService_relation_js__WEBPACK_IMPORTED_MODULE_21__.relation)(this.url,r,e)}reshape(r,e,t){return (0,_rest_geometryService_reshape_js__WEBPACK_IMPORTED_MODULE_22__.reshape)(this.url,r,e,t)}simplify(r,e){return (0,_rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_23__.simplify)(this.url,r,e)}toGeoCoordinateString(r,e){return (0,_rest_geometryService_toGeoCoordinateString_js__WEBPACK_IMPORTED_MODULE_24__.toGeoCoordinateString)(this.url,r,e)}trimExtend(r,e){return (0,_rest_geometryService_trimExtend_js__WEBPACK_IMPORTED_MODULE_25__.trimExtend)(this.url,r,e)}union(r,e){return (0,_rest_geometryService_union_js__WEBPACK_IMPORTED_MODULE_26__.union)(this.url,r,e)}};C.UNIT_METER=9001,C.UNIT_GERMAN_METER=9031,C.UNIT_FOOT=9002,C.UNIT_SURVEY_FOOT=9003,C.UNIT_CLARKE_FOOT=9005,C.UNIT_FATHOM=9014,C.UNIT_NAUTICAL_MILE=9030,C.UNIT_SURVEY_CHAIN=9033,C.UNIT_SURVEY_LINK=9034,C.UNIT_SURVEY_MILE=9035,C.UNIT_KILOMETER=9036,C.UNIT_CLARKE_YARD=9037,C.UNIT_CLARKE_CHAIN=9038,C.UNIT_CLARKE_LINK=9039,C.UNIT_SEARS_YARD=9040,C.UNIT_SEARS_FOOT=9041,C.UNIT_SEARS_CHAIN=9042,C.UNIT_SEARS_LINK=9043,C.UNIT_BENOIT_1895A_YARD=9050,C.UNIT_BENOIT_1895A_FOOT=9051,C.UNIT_BENOIT_1895A_CHAIN=9052,C.UNIT_BENOIT_1895A_LINK=9053,C.UNIT_BENOIT_1895B_YARD=9060,C.UNIT_BENOIT_1895B_FOOT=9061,C.UNIT_BENOIT_1895B_CHAIN=9062,C.UNIT_BENOIT_1895B_LINK=9063,C.UNIT_INDIAN_FOOT=9080,C.UNIT_INDIAN_1937_FOOT=9081,C.UNIT_INDIAN_1962_FOOT=9082,C.UNIT_INDIAN_1975_FOOT=9083,C.UNIT_INDIAN_YARD=9084,C.UNIT_INDIAN_1937_YARD=9085,C.UNIT_INDIAN_1962_YARD=9086,C.UNIT_INDIAN_1975_YARD=9087,C.UNIT_FOOT_1865=9070,C.UNIT_RADIAN=9101,C.UNIT_DEGREE=9102,C.UNIT_ARCMINUTE=9103,C.UNIT_ARCSECOND=9104,C.UNIT_GRAD=9105,C.UNIT_GON=9106,C.UNIT_MICRORADIAN=9109,C.UNIT_ARCMINUTE_CENTESIMAL=9112,C.UNIT_ARCSECOND_CENTESIMAL=9113,C.UNIT_MIL6400=9114,C.UNIT_BRITISH_1936_FOOT=9095,C.UNIT_GOLDCOAST_FOOT=9094,C.UNIT_INTERNATIONAL_CHAIN=109003,C.UNIT_INTERNATIONAL_LINK=109004,C.UNIT_INTERNATIONAL_YARD=109001,C.UNIT_STATUTE_MILE=9093,C.UNIT_SURVEY_YARD=109002,C.UNIT_50KILOMETER_LENGTH=109030,C.UNIT_150KILOMETER_LENGTH=109031,C.UNIT_DECIMETER=109005,C.UNIT_CENTIMETER=109006,C.UNIT_MILLIMETER=109007,C.UNIT_INTERNATIONAL_INCH=109008,C.UNIT_US_SURVEY_INCH=109009,C.UNIT_INTERNATIONAL_ROD=109010,C.UNIT_US_SURVEY_ROD=109011,C.UNIT_US_NAUTICAL_MILE=109012,C.UNIT_UK_NAUTICAL_MILE=109013,C.UNIT_SQUARE_INCHES="esriSquareInches",C.UNIT_SQUARE_FEET="esriSquareFeet",C.UNIT_SQUARE_YARDS="esriSquareYards",C.UNIT_ACRES="esriAcres",C.UNIT_SQUARE_MILES="esriSquareMiles",C.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",C.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",C.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",C.UNIT_SQUARE_METERS="esriSquareMeters",C.UNIT_ARES="esriAres",C.UNIT_HECTARES="esriHectares",C.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)()],C.prototype,"url",void 0),C=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.tasks.GeometryService")],C);const g=C;


/***/ }),

/***/ 73883:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/operations/generalize.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generalizeToRESTParameters": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.JSONMap({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});function r(e){const{geometries:r,deviationUnit:s,maxDeviation:o}=e.toJSON(),n={maxDeviation:o};return r&&r.length&&(n.geometries=JSON.stringify({geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__.getJsonType)(r[0]),geometries:r}),n.sr=JSON.stringify(r[0].spatialReference)),i.write(s,n,"deviationUnit"),n}


/***/ }),

/***/ 68157:
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/operations/lengths.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lengthsToRESTParameters": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.JSONMap({preserveShape:"preserve-shape"});function o(e){const{polylines:o,lengthUnit:t,geodesic:i,calculationType:s}=e.toJSON(),r={};r.polylines=JSON.stringify(o);const l=e.polylines[0].spatialReference;return r.sr=l.wkid?l.wkid:JSON.stringify(l.toJSON()),t&&(r.lengthUnit=t),i&&(r.geodesic=i),s&&(r.calculationType=n.toJSON(s)),r}


/***/ }),

/***/ 64843:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/operations/offset.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offsetToRESTParameters": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.JSONMap({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),s=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});function r(e){const{geometries:r,bevelRatio:i,offsetDistance:f,offsetHow:n,offsetUnit:m}=e.toJSON(),l={bevelRatio:i,offsetDistance:f};return r&&r.length&&(l.geometries=JSON.stringify({geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__.getJsonType)(r[0]),geometries:r}),l.sr=JSON.stringify(r[0].spatialReference)),n&&(l.offsetHow=o.toJSON(n)),m&&(l.offsetUnit=s.toJSON(m)),l}


/***/ }),

/***/ 29583:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/operations/relation.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "relationToRESTParameters": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.JSONMap({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});function o(e){const{geometries1:o,geometries2:r,relation:n,relationParameter:s}=e.toJSON(),a={};if(o&&o.length){a.geometries1=JSON.stringify({geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__.getJsonType)(o[0]),geometries:o});const e=o[0].spatialReference;a.sr=e.wkid?e.wkid:JSON.stringify(e)}return r&&r.length>0&&(a.geometries2=JSON.stringify({geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__.getJsonType)(r[0]),geometries:r})),n&&(a.relation=t.toJSON(n)),s&&(a.relationParam=s),a}


/***/ }),

/***/ 86336:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/operations/trimExtend.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trimExtendToRESTParameters": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.JSONMap({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});function n(e){const{extendHow:n,polylines:o,trimExtendTo:r}=e.toJSON(),i={};return i.extendHow=t.toJSON(n),o&&o.length&&(i.polylines=JSON.stringify(o),i.sr=JSON.stringify(o[0].spatialReference)),r&&(i.trimExtendTo=JSON.stringify(r)),i}


/***/ })

}]);
//# sourceMappingURL=3969.acb36c1f2353583c02bf.js.map