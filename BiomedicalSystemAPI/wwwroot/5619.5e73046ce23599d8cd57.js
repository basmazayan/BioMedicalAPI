"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[5619],{

/***/ 74520:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/intersects.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extentIntersectsExtent": () => (/* reexport safe */ _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__.extentIntersectsExtent),
/* harmony export */   "extentIntersectsMultipoint": () => (/* reexport safe */ _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__.extentIntersectsMultipoint),
/* harmony export */   "extentIntersectsPoint": () => (/* reexport safe */ _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__.extentIntersectsPoint),
/* harmony export */   "extentIntersectsPolygon": () => (/* reexport safe */ _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__.extentIntersectsPolygon),
/* harmony export */   "extentIntersectsPolyline": () => (/* reexport safe */ _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__.extentIntersectsPolyline),
/* harmony export */   "getFeatureExtentIntersector": () => (/* reexport safe */ _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__.getFeatureExtentIntersector),
/* harmony export */   "isSelfIntersecting": () => (/* reexport safe */ _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__.isSelfIntersecting),
/* harmony export */   "segmentIntersects": () => (/* reexport safe */ _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__.segmentIntersects),
/* harmony export */   "getExtentIntersector": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intersectsBase.js */ 93877);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return"mesh"===n?_intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__.extentIntersectsExtent:(0,_intersectsBase_js__WEBPACK_IMPORTED_MODULE_0__.getFeatureExtentIntersector)(n)}


/***/ }),

/***/ 89310:
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/contains.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polygonContainsCoords": () => (/* binding */ o),
/* harmony export */   "polygonContainsMultipoint": () => (/* binding */ r),
/* harmony export */   "polygonContainsPoint": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,t){return n?t?4:3:t?3:2}function t(n,t,r,e){return o(n,t,r,e.coords[0],e.coords[1])}function r(t,r,e,c,u,f){const s=n(u,f),{coords:i,lengths:l}=c;if(!l)return!1;for(let n=0,d=0;n<l.length;n++,d+=s)if(!o(t,r,e,i[d],i[d+1]))return!1;return!0}function o(t,r,o,c,u){if(!t)return!1;const f=n(r,o),{coords:s,lengths:i}=t;let l=!1,d=0;for(const n of i)l=e(l,s,f,d,n,c,u),d+=n*f;return l}function e(n,t,r,o,e,c,u){let f=n,s=o;for(let i=o,l=o+e*r;i<l;i+=r){s=i+r,s===l&&(s=o);const n=t[i],e=t[i+1],d=t[s],g=t[s+1];(e<u&&g>=u||g<u&&e>=u)&&n+(u-e)/(g-e)*(d-n)<c&&(f=!f)}return f}


/***/ }),

/***/ 75736:
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/spatialQuerySupport.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canQueryWithRBush": () => (/* binding */ I),
/* harmony export */   "checkSpatialQuerySupport": () => (/* binding */ P),
/* harmony export */   "getSpatialQueryOperator": () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/contains.js */ 57098);
/* harmony import */ var _geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/intersects.js */ 74520);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contains.js */ 89310);
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../featureConversionUtils.js */ 42187);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../OptimizedGeometry.js */ 82760);
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projectionSupport.js */ 79371);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils.js */ 27939);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/










const c = "feature-store:unsupported-query",
      R = {
  esriSpatialRelIntersects: "intersects",
  esriSpatialRelContains: "contains",
  esriSpatialRelCrosses: "crosses",
  esriSpatialRelDisjoint: "disjoint",
  esriSpatialRelEnvelopeIntersects: "intersects",
  esriSpatialRelIndexIntersects: null,
  esriSpatialRelOverlaps: "overlaps",
  esriSpatialRelTouches: "touches",
  esriSpatialRelWithin: "within",
  esriSpatialRelRelation: null
},
      S = {
  spatialRelationship: {
    esriSpatialRelIntersects: !0,
    esriSpatialRelContains: !0,
    esriSpatialRelWithin: !0,
    esriSpatialRelCrosses: !0,
    esriSpatialRelDisjoint: !0,
    esriSpatialRelTouches: !0,
    esriSpatialRelOverlaps: !0,
    esriSpatialRelEnvelopeIntersects: !0,
    esriSpatialRelIndexIntersects: !1,
    esriSpatialRelRelation: !1
  },
  queryGeometry: {
    esriGeometryPoint: !0,
    esriGeometryMultipoint: !0,
    esriGeometryPolyline: !0,
    esriGeometryPolygon: !0,
    esriGeometryEnvelope: !0
  },
  layerGeometry: {
    esriGeometryPoint: !0,
    esriGeometryMultipoint: !0,
    esriGeometryPolyline: !0,
    esriGeometryPolygon: !0,
    esriGeometryEnvelope: !1
  }
};

function G(e) {
  return !0 === S.spatialRelationship[e];
}

function g(e) {
  return !0 === S.queryGeometry[(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.getJsonType)(e)];
}

function j(e) {
  return !0 === S.layerGeometry[e];
}

function h() {
  return Promise.all(/*! import() */[__webpack_require__.e(6571), __webpack_require__.e(8592), __webpack_require__.e(5571)]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../geometry/geometryEngineJSON.js */ 25571));
}

function v(e, n, l, y, c) {
  if ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isPolygon)(n) && "esriGeometryPoint" === l && ("esriSpatialRelIntersects" === e || "esriSpatialRelContains" === e)) {
    const e = (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__.convertFromPolygon)(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__.default(), n, !1, !1);
    return Promise.resolve(r => (0,_contains_js__WEBPACK_IMPORTED_MODULE_6__.polygonContainsPoint)(e, !1, !1, r));
  }

  if ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isPolygon)(n) && "esriGeometryMultipoint" === l) {
    const r = (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__.convertFromPolygon)(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__.default(), n, !1, !1);
    if ("esriSpatialRelContains" === e) return Promise.resolve(e => (0,_contains_js__WEBPACK_IMPORTED_MODULE_6__.polygonContainsMultipoint)(r, !1, !1, e, y, c));
  }

  if ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isExtent)(n) && "esriGeometryPoint" === l && ("esriSpatialRelIntersects" === e || "esriSpatialRelContains" === e)) return Promise.resolve(e => (0,_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_2__.extentContainsPoint)(n, (0,_utils_js__WEBPACK_IMPORTED_MODULE_10__.getGeometry)(l, y, c, e)));
  if ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isExtent)(n) && "esriGeometryMultipoint" === l && "esriSpatialRelContains" === e) return Promise.resolve(e => (0,_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_2__.extentContainsMultipoint)(n, (0,_utils_js__WEBPACK_IMPORTED_MODULE_10__.getGeometry)(l, y, c, e)));

  if ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isExtent)(n) && "esriSpatialRelIntersects" === e) {
    const e = (0,_geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_3__.getExtentIntersector)(l);
    return Promise.resolve(r => e(n, (0,_utils_js__WEBPACK_IMPORTED_MODULE_10__.getGeometry)(l, y, c, r)));
  }

  return h().then(r => {
    const t = r[R[e]].bind(null, n.spatialReference, n);
    return e => t((0,_utils_js__WEBPACK_IMPORTED_MODULE_10__.getGeometry)(l, y, c, e));
  });
}

function P(_x, _x2, _x3) {
  return _P.apply(this, arguments);
}

function _P() {
  _P = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, t, i) {
    const {
      spatialRel: s,
      geometry: o
    } = r;

    if (o) {
      if (!G(s)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default(c, "Unsupported query spatial relationship", {
        query: r
      });

      if ((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__.isValid)(o.spatialReference) && (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__.isValid)(i)) {
        if (!g(o)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default(c, "Unsupported query geometry type", {
          query: r
        });
        if (!j(t)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default(c, "Unsupported layer geometry type", {
          query: r
        });
        if (r.outSR) return (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_9__.checkProjectionSupport)(r.geometry && r.geometry.spatialReference, r.outSR);
      }
    }
  });
  return _P.apply(this, arguments);
}

function I(e) {
  if ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isExtent)(e)) return !0;

  if ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isPolygon)(e)) {
    for (const r of e.rings) {
      if (5 !== r.length) return !1;
      if (r[0][0] !== r[1][0] || r[0][0] !== r[4][0] || r[2][0] !== r[3][0] || r[0][1] !== r[3][1] || r[0][1] !== r[4][1] || r[1][1] !== r[2][1]) return !1;
    }

    return !0;
  }

  return !1;
}



/***/ }),

/***/ 808:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/timeSupport.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimeExtent": () => (/* binding */ t),
/* harmony export */   "getTimeOperator": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,n){if(!t)return null;const e=n.featureAdapter,{startTimeField:u,endTimeField:l}=t;let r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(u&&l)n.forEach((t=>{const n=e.getAttribute(t,u),o=e.getAttribute(t,l);null==n||isNaN(n)||(r=Math.min(r,n)),null==o||isNaN(o)||(i=Math.max(i,o))}));else{const t=u||l;n.forEach((n=>{const u=e.getAttribute(n,t);null==u||isNaN(u)||(r=Math.min(r,u),i=Math.max(i,u))}))}return{start:r,end:i}}function n(t,n,r){if(!n||!t)return null;const{startTimeField:i,endTimeField:o}=t;if(!i&&!o)return null;const{start:s,end:a}=n;return null===s&&null===a?null:void 0===s&&void 0===a?l():i&&o?e(r,i,o,s,a):u(r,i||o,s,a)}function e(t,n,e,u,l){return null!=u&&null!=l?r=>{const i=t.getAttribute(r,n),o=t.getAttribute(r,e);return(null==i||i<=l)&&(null==o||o>=u)}:null!=u?n=>{const l=t.getAttribute(n,e);return null==l||l>=u}:null!=l?e=>{const u=t.getAttribute(e,n);return null==u||u<=l}:void 0}function u(t,n,e,u){return null!=e&&null!=u&&e===u?u=>t.getAttribute(u,n)===e:null!=e&&null!=u?l=>{const r=t.getAttribute(l,n);return r>=e&&r<=u}:null!=e?u=>t.getAttribute(u,n)>=e:null!=u?e=>t.getAttribute(e,n)<=u:void 0}function l(){return()=>!1}


/***/ }),

/***/ 27939:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/utils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QUERY_ENGINE_EMPTY_RESULT": () => (/* binding */ U),
/* harmony export */   "cleanFromGeometryEngine": () => (/* binding */ z),
/* harmony export */   "getCentroid": () => (/* binding */ _),
/* harmony export */   "getGeometry": () => (/* binding */ J),
/* harmony export */   "normalizeFilter": () => (/* binding */ v),
/* harmony export */   "normalizeQuery": () => (/* binding */ P),
/* harmony export */   "normalizeQueryLike": () => (/* binding */ Z),
/* harmony export */   "transformCentroid": () => (/* binding */ O)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/jsonMap.js */ 74856);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/unitUtils.js */ 55612);
/* harmony import */ var _geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/extentUtils.js */ 81280);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../geometry/support/normalizeUtils.js */ 46010);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../centroid.js */ 53755);
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../featureConversionUtils.js */ 42187);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../OptimizedGeometry.js */ 82760);
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projectionSupport.js */ 79371);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/











const j = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({
  esriSRUnit_Meter: "meters",
  esriSRUnit_Kilometer: "kilometers",
  esriSRUnit_Foot: "feet",
  esriSRUnit_StatuteMile: "miles",
  esriSRUnit_NauticalMile: "nautical-miles",
  esriSRUnit_USNauticalMile: "us-nautical-miles"
}),
      U = Object.freeze({}),
      M = new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_10__.default(),
      F = new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_10__.default(),
      G = new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_10__.default(),
      N = {
  esriGeometryPoint: _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_9__.convertToPoint,
  esriGeometryPolyline: _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_9__.convertToPolyline,
  esriGeometryPolygon: _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_9__.convertToPolygon,
  esriGeometryMultipoint: _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_9__.convertToMultipoint
};

function O(e, r, i, o = e.hasZ, n = e.hasM) {
  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(r)) return null;
  const s = e.hasZ && o,
        l = e.hasM && n;

  if (i) {
    const t = (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_9__.quantizeOptimizedGeometry)(G, r, e.hasZ, e.hasM, "esriGeometryPoint", i, o, n);
    return (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_9__.convertToPoint)(t, s, l);
  }

  return (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_9__.convertToPoint)(r, s, l);
}

function _(e, t, r) {
  return "esriGeometryPolygon" === e.geometryType && t && (t.centroid || t.geometry) ? (t.centroid || (t.centroid = (0,_centroid_js__WEBPACK_IMPORTED_MODULE_8__.getCentroidOptimizedGeometry)(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_10__.default(), t.geometry, e.hasZ, e.hasM)), O(e, t.centroid, r)) : null;
}

function J(e, i, o, n, s, l, a = i, m = o) {
  const c = i && a,
        f = o && m,
        g = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(n) ? "coords" in n ? n : n.geometry : null;
  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(g)) return null;

  if (s) {
    let t = (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_9__.generalizeOptimizedGeometry)(F, g, i, o, e, s, a, m);
    return l && (t = (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_9__.quantizeOptimizedGeometry)(G, t, c, f, e, l)), N[e](t, c, f);
  }

  if (l) {
    const t = (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_9__.quantizeOptimizedGeometry)(G, g, i, o, e, l, a, m);
    return N[e](t, c, f);
  }

  return (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_9__.removeZMValues)(M, g, i, o, a, m), N[e](M, c, f);
}

function P(_x, _x2, _x3) {
  return _P.apply(this, arguments);
}

function _P() {
  _P = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, r) {
    const {
      outFields: i,
      orderByFields: o,
      groupByFieldsForStatistics: n,
      outStatistics: s
    } = e;
    if (i) for (let l = 0; l < i.length; l++) i[l] = i[l].trim();
    if (o) for (let l = 0; l < o.length; l++) o[l] = o[l].trim();
    if (n) for (let l = 0; l < n.length; l++) n[l] = n[l].trim();
    if (s) for (let l = 0; l < s.length; l++) s[l].onStatisticField && (s[l].onStatisticField = s[l].onStatisticField.trim());
    return e.geometry && !e.outSR && (e.outSR = e.geometry.spatialReference), Z(e, t, r);
  });
  return _P.apply(this, arguments);
}

function v(_x4, _x5, _x6) {
  return _v.apply(this, arguments);
}

function _v() {
  _v = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, r) {
    return Z(e, t, r);
  });
  return _v.apply(this, arguments);
}

function Z(_x7, _x8, _x9) {
  return _Z.apply(this, arguments);
}

function _Z() {
  _Z = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r, i) {
    if (!e) return null;
    let {
      where: l
    } = e;
    if (e.where = l = l && l.trim(), (!l || /^1 *= *1$/.test(l) || r && r === l) && (e.where = null), !e.geometry) return e;
    let a = yield b(e);

    if (e.distance = 0, e.units = null, "esriSpatialRelEnvelopeIntersects" === e.spatialRel) {
      const {
        spatialReference: t
      } = e.geometry;
      a = (0,_geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_4__.getGeometryExtent)(a), a.spatialReference = t;
    }

    e.geometry = a, yield (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_11__.checkProjectionSupport)(a.spatialReference, i);
    const m = (yield (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_6__.normalizeCentralMeridian)((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__.fromJSON)(a)))[0];
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(m)) throw U;
    const c = m.toJSON(),
          u = yield (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_11__.project)(c, c.spatialReference, i);
    if (!u) throw U;
    return u.spatialReference = i, e.geometry = u, e;
  });
  return _Z.apply(this, arguments);
}

function b(_x10) {
  return _b.apply(this, arguments);
}

function _b() {
  _b = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    const {
      geometry: t,
      distance: r,
      units: o
    } = e;
    if (null == r || "vertexAttributes" in t) return t;
    const n = t.spatialReference,
          s = o ? j.fromJSON(o) : (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__.getUnitString)(n),
          c = n && ((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__.isGeographic)(n) || (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__.isWebMercator)(n)) ? t : yield (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_11__.checkProjectionSupport)(n, _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__.WGS84).then(() => (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_11__.project)(t, _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__.WGS84));
    return (yield x())(c.spatialReference, c, r, s);
  });
  return _b.apply(this, arguments);
}

function x() {
  return _x11.apply(this, arguments);
}

function _x11() {
  _x11 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
    return (yield Promise.all(/*! import() */[__webpack_require__.e(6571), __webpack_require__.e(8592), __webpack_require__.e(5571)]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../geometry/geometryEngineJSON.js */ 25571))).geodesicBuffer;
  });
  return _x11.apply(this, arguments);
}

function z(e) {
  return e && B in e ? JSON.parse(JSON.stringify(e, E)) : e;
}

const B = "_geVersion",
      E = (e, t) => e !== B ? t : void 0;



/***/ })

}]);
//# sourceMappingURL=5619.5e73046ce23599d8cd57.js.map