"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[9845],{

/***/ 59845:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryEngine.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buffer": () => (/* binding */ v),
/* harmony export */   "clip": () => (/* binding */ u),
/* harmony export */   "contains": () => (/* binding */ o),
/* harmony export */   "convexHull": () => (/* binding */ E),
/* harmony export */   "crosses": () => (/* binding */ c),
/* harmony export */   "cut": () => (/* binding */ i),
/* harmony export */   "densify": () => (/* binding */ H),
/* harmony export */   "difference": () => (/* binding */ h),
/* harmony export */   "disjoint": () => (/* binding */ g),
/* harmony export */   "distance": () => (/* binding */ f),
/* harmony export */   "equals": () => (/* binding */ l),
/* harmony export */   "extendedSpatialReferenceInfo": () => (/* binding */ t),
/* harmony export */   "flipHorizontal": () => (/* binding */ z),
/* harmony export */   "flipVertical": () => (/* binding */ B),
/* harmony export */   "generalize": () => (/* binding */ D),
/* harmony export */   "geodesicArea": () => (/* binding */ q),
/* harmony export */   "geodesicBuffer": () => (/* binding */ S),
/* harmony export */   "geodesicDensify": () => (/* binding */ L),
/* harmony export */   "geodesicLength": () => (/* binding */ C),
/* harmony export */   "intersect": () => (/* binding */ y),
/* harmony export */   "intersects": () => (/* binding */ a),
/* harmony export */   "isSimple": () => (/* binding */ x),
/* harmony export */   "nearestCoordinate": () => (/* binding */ j),
/* harmony export */   "nearestVertex": () => (/* binding */ J),
/* harmony export */   "nearestVertices": () => (/* binding */ N),
/* harmony export */   "offset": () => (/* binding */ I),
/* harmony export */   "overlaps": () => (/* binding */ m),
/* harmony export */   "planarArea": () => (/* binding */ b),
/* harmony export */   "planarLength": () => (/* binding */ k),
/* harmony export */   "relate": () => (/* binding */ d),
/* harmony export */   "rotate": () => (/* binding */ V),
/* harmony export */   "simplify": () => (/* binding */ w),
/* harmony export */   "symmetricDifference": () => (/* binding */ A),
/* harmony export */   "touches": () => (/* binding */ s),
/* harmony export */   "union": () => (/* binding */ R),
/* harmony export */   "within": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/geometryEngineBase.js */ 66571);
/* harmony import */ var _geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometryAdapters/hydrated.js */ 77551);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(n){return Array.isArray(n)?n[0].spatialReference:n&&n.spatialReference}function t(e){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.extendedSpatialReferenceInfo(e)}function u(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.clip(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function i(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.cut(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function o(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.contains(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function c(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.crosses(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function f(t,u,i){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.distance(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u,i)}function l(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.equals(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function a(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.intersects(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function s(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.touches(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function p(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.within(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function g(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.disjoint(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function m(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.overlaps(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function d(t,u,i){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.relate(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u,i)}function x(t){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.isSimple(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t)}function w(t){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.simplify(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t)}function E(t,u=!1){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.convexHull(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function h(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.difference(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function A(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.symmetricDifference(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function y(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.intersect(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function R(t,u=null){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.union(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function I(t,u,i,o,c,f){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.offset(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u,i,o,c,f)}function v(t,u,i,o=!1){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.buffer(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u,i,o)}function S(t,u,i,o,c,f){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.geodesicBuffer(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u,i,o,c,f)}function j(t,u,i=!0){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.nearestCoordinate(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u,i)}function J(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.nearestVertex(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function N(t,u,i,o){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.nearestVertices(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u,i,o)}function O(n){return"xmin"in n?"center"in n?n.center:null:"x"in n?n:"extent"in n?n.extent.center:null}function V(e,r,t){var u;if(null==e)throw new Error("Illegal Argument Exception");const i=e.spatialReference;if(null==(t=null!=(u=t)?u:O(e)))throw new Error("Illegal Argument Exception");const o=e.constructor.fromJSON(_chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.rotate(e,r,t));return o.spatialReference=i,o}function z(e,r){var t;if(null==e)throw new Error("Illegal Argument Exception");const u=e.spatialReference;if(null==(r=null!=(t=r)?t:O(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(_chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.flipHorizontal(e,r));return i.spatialReference=u,i}function B(e,r){var t;if(null==e)throw new Error("Illegal Argument Exception");const u=e.spatialReference;if(null==(r=null!=(t=r)?t:O(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(_chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.flipVertical(e,r));return i.spatialReference=u,i}function D(t,u,i,o){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.generalize(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u,i,o)}function H(t,u,i){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.densify(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u,i)}function L(t,u,i,o=0){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.geodesicDensify(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u,i,o)}function b(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.planarArea(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function k(t,u){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.planarLength(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u)}function q(t,u,i){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.geodesicArea(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u,i)}function C(t,u,i){return _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.geodesicLength(_geometryAdapters_hydrated_js__WEBPACK_IMPORTED_MODULE_1__.hydratedAdapter,r(t),t,u,i)}


/***/ })

}]);
//# sourceMappingURL=9845.70cbac8fe8448cf6c19a.js.map