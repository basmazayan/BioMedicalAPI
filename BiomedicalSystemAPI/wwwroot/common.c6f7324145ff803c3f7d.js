"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[8592],{

/***/ 62701:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/geometryEngineJSON.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ D),
/* harmony export */   "B": () => (/* binding */ H),
/* harmony export */   "C": () => (/* binding */ R),
/* harmony export */   "D": () => (/* binding */ b),
/* harmony export */   "E": () => (/* binding */ B),
/* harmony export */   "F": () => (/* binding */ L),
/* harmony export */   "G": () => (/* binding */ S),
/* harmony export */   "H": () => (/* binding */ _),
/* harmony export */   "I": () => (/* binding */ q),
/* harmony export */   "J": () => (/* binding */ C),
/* harmony export */   "K": () => (/* binding */ G),
/* harmony export */   "a": () => (/* binding */ i),
/* harmony export */   "b": () => (/* binding */ s),
/* harmony export */   "c": () => (/* binding */ t),
/* harmony export */   "d": () => (/* binding */ u),
/* harmony export */   "e": () => (/* binding */ r),
/* harmony export */   "f": () => (/* binding */ o),
/* harmony export */   "g": () => (/* binding */ k),
/* harmony export */   "h": () => (/* binding */ a),
/* harmony export */   "i": () => (/* binding */ c),
/* harmony export */   "j": () => (/* binding */ p),
/* harmony export */   "k": () => (/* binding */ m),
/* harmony export */   "l": () => (/* binding */ y),
/* harmony export */   "m": () => (/* binding */ x),
/* harmony export */   "n": () => (/* binding */ w),
/* harmony export */   "o": () => (/* binding */ g),
/* harmony export */   "p": () => (/* binding */ A),
/* harmony export */   "q": () => (/* binding */ j),
/* harmony export */   "r": () => (/* binding */ d),
/* harmony export */   "s": () => (/* binding */ h),
/* harmony export */   "t": () => (/* binding */ f),
/* harmony export */   "u": () => (/* binding */ E),
/* harmony export */   "v": () => (/* binding */ z),
/* harmony export */   "w": () => (/* binding */ l),
/* harmony export */   "x": () => (/* binding */ I),
/* harmony export */   "y": () => (/* binding */ V),
/* harmony export */   "z": () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometryEngineBase.js */ 66571);
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/geometryAdapters/json.js */ 27889);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(n){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.extendedSpatialReferenceInfo(n)}function t(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.clip(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function i(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.cut(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function s(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.contains(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function u(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.crosses(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function o(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.distance(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i,s)}function a(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.equals(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function c(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.intersects(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function f(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.touches(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function l(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.within(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function p(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.disjoint(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function g(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.overlaps(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function d(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.relate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i,s)}function m(r,t){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.isSimple(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t)}function h(r,t){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.simplify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t)}function y(r,t,i=!1){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.convexHull(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function x(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.difference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function w(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.symmetricDifference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function A(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.intersect(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function E(r,t,i=null){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.union(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function j(r,t,i,s,u,o,a){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.offset(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i,s,u,o,a)}function z(r,t,i,s,u=!1){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.buffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i,s,u)}function I(r,t,i,s,u,o,a){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.geodesicBuffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i,s,u,o,a)}function V(r,t,i,s=!0){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.nearestCoordinate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i,s)}function v(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.nearestVertex(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function D(r,t,i,s,u){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.nearestVertices(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i,s,u)}function H(n,r,t,i){if(null==r||null==i)throw new Error("Illegal Argument Exception");const s=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.rotate(r,t,i);return s.spatialReference=n,s}function R(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.flipHorizontal(r,t);return i.spatialReference=n,i}function b(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.flipVertical(r,t);return i.spatialReference=n,i}function B(r,t,i,s,u){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.generalize(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i,s,u)}function L(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.densify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i,s)}function S(r,t,i,s,u=0){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.geodesicDensify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i,s,u)}function _(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.planarArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function q(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.planarLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i)}function C(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.geodesicArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i,s)}function G(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.geodesicLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter,r,t,i,s)}const k=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:r,clip:t,cut:i,contains:s,crosses:u,distance:o,equals:a,intersects:c,touches:f,within:l,disjoint:p,overlaps:g,relate:d,isSimple:m,simplify:h,convexHull:y,difference:x,symmetricDifference:w,intersect:A,union:E,offset:j,buffer:z,geodesicBuffer:I,nearestCoordinate:V,nearestVertex:v,nearestVertices:D,rotate:H,flipHorizontal:R,flipVertical:b,generalize:B,densify:L,geodesicDensify:S,planarArea:_,planarLength:q,geodesicArea:C,geodesicLength:G});


/***/ }),

/***/ 48154:
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/byteSizeEstimations.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "estimateAttributesObjectSize": () => (/* binding */ e),
/* harmony export */   "estimateFixedArraySize": () => (/* binding */ r),
/* harmony export */   "estimateNumberByteSize": () => (/* binding */ t),
/* harmony export */   "estimateStringByteSize": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return 32+n.length}function t(){return 16}function e(e){if(!e)return 0;let r=32;for(const o in e)if(e.hasOwnProperty(o)){const c=e[o];switch(typeof c){case"string":r+=n(c);break;case"number":r+=t();break;case"boolean":r+=4}}return r}function r(n,t){return 32+n.length*t}


/***/ }),

/***/ 77551:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryAdapters/hydrated.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hydratedAdapter": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _Extent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Extent.js */ 70157);
/* harmony import */ var _Multipoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Multipoint.js */ 43245);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Point.js */ 7309);
/* harmony import */ var _Polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Polygon.js */ 38535);
/* harmony import */ var _Polyline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Polyline.js */ 23926);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r={convertToGEGeometry:s,exportPoint:a,exportPolygon:c,exportPolyline:h,exportMultipoint:m,exportExtent:x};function s(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t}function a(e,n,o){const i=e.hasZ(n),r=e.hasM(n),s=new _Point_js__WEBPACK_IMPORTED_MODULE_2__.default({x:e.getPointX(n),y:e.getPointY(n),spatialReference:o});return i&&(s.z=e.getPointZ(n)),r&&(s.m=e.getPointM(n)),s.cache._geVersion=n,s}function c(e,n,t){const i=new _Polygon_js__WEBPACK_IMPORTED_MODULE_3__.default({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return i.cache._geVersion=n,i}function h(e,n,t){const o=new _Polyline_js__WEBPACK_IMPORTED_MODULE_4__.default({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return o.cache._geVersion=n,o}function m(e,t,o){const i=new _Multipoint_js__WEBPACK_IMPORTED_MODULE_1__.default({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:o});return i.cache._geVersion=t,i}function x(n,t,o){const i=n.hasZ(t),r=n.hasM(t),s=new _Extent_js__WEBPACK_IMPORTED_MODULE_0__.default({xmin:n.getXMin(t),ymin:n.getYMin(t),xmax:n.getXMax(t),ymax:n.getYMax(t),spatialReference:o});if(i){const e=n.getZExtent(t);s.zmin=e.vmin,s.zmax=e.vmax}if(r){const e=n.getMExtent(t);s.mmin=e.vmin,s.mmax=e.vmax}return s.cache._geVersion=t,s}


/***/ }),

/***/ 25272:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/deduplicate.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deduplicate": () => (/* binding */ n),
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/mathUtils.js */ 88415);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,f,i){var u;const c=n.byteLength/(4*f),s=new Uint32Array(n,0,c*f);let a=new Uint32Array(c);const h=null!=(u=null==i?void 0:i.minReduction)?u:0,d=(null==i?void 0:i.originalIndices)||null,g=d?d.length:0,y=(null==i?void 0:i.componentOffsets)||null;let U=0;if(y)for(let t=0;t<y.length-1;t++){const n=y[t+1]-y[t];n>U&&(U=n)}else U=c;const w=Math.floor(1.1*U)+1;(null==o||o.length<2*w)&&(o=new Uint32Array((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.nextHighestPowerOfTwo)(2*w)));for(let t=0;t<2*w;t++)o[t]=0;let A=0;const m=!!y&&!!d,b=m?g:c,v=m?new Uint32Array(g):null,p=1.96;let M=0!==h?Math.ceil(4*p*p/(h*h)*h*(1-h)):b,q=1,j=y?y[1]:b;for(let t=0;t<b;t++){if(t===M){const n=1-A/t;if(n+p*Math.sqrt(n*(1-n)/t)<h)return null;M*=2}if(t===j){for(let t=0;t<2*w;t++)o[t]=0;if(d)for(let t=y[q-1];t<y[q];t++)v[t]=a[d[t]];j=y[++q]}const n=m?d[t]:t,l=n*f,i=r(s,l,f);let u=i%w,c=A;for(;0!==o[2*u+1];){if(o[2*u]===i){const t=o[2*u+1]-1;if(e(s,l,t*f,f)){c=a[t];break}}u++,u>=w&&(u-=w)}c===A&&(o[2*u]=i,o[2*u+1]=n+1,A++),a[n]=c}if(0!==h&&1-A/c<h)return null;if(m){for(let t=y[q-1];t<v.length;t++)v[t]=a[d[t]];a=v}const k=new Uint32Array(f*A);A=0;for(let t=0;t<b;t++)if(a[t]===A){l(s,(m?d[t]:t)*f,k,A*f,f),A++}if(d&&!m){const t=new Uint32Array(g);for(let n=0;n<t.length;n++)t[n]=a[d[n]];a=t}return{buffer:k.buffer,indices:a,uniqueCount:A}}function e(t,n,e,l){for(let r=0;r<l;r++)if(t[n+r]!==t[e+r])return!1;return!0}function l(t,n,e,l,r){for(let o=0;o<r;o++)e[l+o]=t[n+o]}function r(t,n,e){let l=0;for(let r=0;r<e;r++)l=t[n+r]+l|0,l=l+(l<<11)+(l>>>2)|0;return l>>>0}let o=null;


/***/ }),

/***/ 84523:
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/WebTileLayer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry.js */ 61243);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/string.js */ 13778);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ 53730);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/LOD.js */ 38881);
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/TileInfo.js */ 87940);
/* harmony import */ var _support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/WMTSLayerInfo.js */ 30971);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../geometry/Point.js */ 7309);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let R=class extends((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__.BlendLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_18__.RefreshableLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__.ScaleRangeLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__.PortalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_14__.default))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_23__.default(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__.default.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__.default.WebMercator,this.subDomains=null,this.tileInfo=new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_21__.default({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_25__.default({x:-20037508.342787,y:20037508.342787,spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__.default.WebMercator}),spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__.default.WebMercator,lods:[new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:0,scale:591657527.591555,resolution:156543.033928}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:1,scale:295828763.795777,resolution:78271.5169639999}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:2,scale:147914381.897889,resolution:39135.7584820001}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:3,scale:73957190.948944,resolution:19567.8792409999}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:4,scale:36978595.474472,resolution:9783.93962049996}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:5,scale:18489297.737236,resolution:4891.96981024998}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:6,scale:9244648.868618,resolution:2445.98490512499}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:7,scale:4622324.434309,resolution:1222.99245256249}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:8,scale:2311162.217155,resolution:611.49622628138}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:9,scale:1155581.108577,resolution:305.748113140558}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:10,scale:577790.554289,resolution:152.874056570411}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:11,scale:288895.277144,resolution:76.4370282850732}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:12,scale:144447.638572,resolution:38.2185141425366}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:13,scale:72223.819286,resolution:19.1092570712683}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:14,scale:36111.909643,resolution:9.55462853563415}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:15,scale:18055.954822,resolution:4.77731426794937}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:16,scale:9027.977411,resolution:2.38865713397468}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:17,scale:4513.988705,resolution:1.19432856685505}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:18,scale:2256.994353,resolution:.597164283559817}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:19,scale:1128.497176,resolution:.298582141647617}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:20,scale:564.248588,resolution:.14929107082380833}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:21,scale:282.124294,resolution:.07464553541190416}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:22,scale:141.062147,resolution:.03732276770595208}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_20__.default({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.Url(this.urlTemplate);!!this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__.default.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,l=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.Url(t),o=l.scheme?l.scheme+"://":"//",i=o+l.authority+"/";if(-1===l.authority.indexOf("{subDomain}"))e.push(i);else if(r&&r.length>0&&l.authority.split(".").length>1)for(const s of r)e.push(o+l.authority.replace(/\{subDomain\}/gi,s)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.Url(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.isProtocolRelative)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.normalize)(e)),t.templateUrl=e}fetchTile(e,r,l,o={}){const{signal:s}=o,i=this.getTileUrl(e,r,l),n={responseType:"image",signal:s,query:{...this.refreshParameters}};return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(i,n).then((e=>e.data))}getTileUrl(e,t,r){const l=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+(0,_core_string_js__WEBPACK_IMPORTED_MODULE_5__.replace)(this.urlPath,{level:l,z:l,col:r,x:r,row:t,y:t})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_23__.default,json:{write:!0},nonNullable:!0})],R.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"legendEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["show","hide"]})],R.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],R.prototype,"levelValues",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["WebTiledLayer"],value:"WebTiledLayer"})],R.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__.default})],R.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__.reader)("spatialReference",["spatialReference","fullExtent.spatialReference"])],R.prototype,"readSpatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:[String],json:{write:!0}})],R.prototype,"subDomains",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_21__.default,json:{write:!0}})],R.prototype,"tileInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],R.prototype,"tileServers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:!1}})],R.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],R.prototype,"urlPath",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],R.prototype,"urlTemplate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__.reader)("urlTemplate",["urlTemplate","templateUrl"])],R.prototype,"readUrlTemplate",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__.writer)("urlTemplate",{templateUrl:{type:String}})],R.prototype,"writeUrlTemplate",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_22__.default,json:{write:!0}})],R.prototype,"wmtsInfo",void 0),R=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__.subclass)("esri.layers.WebTileLayer")],R);const x=R;


/***/ }),

/***/ 19109:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/objectIdUtils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findLastObjectIdFromFeatures": () => (/* binding */ n),
/* harmony export */   "initialObjectId": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=1;function n(t,n){let o=0;for(const r of n){var e;const n=null==(e=r.attributes)?void 0:e[t];"number"==typeof n&&isFinite(n)&&(o=Math.max(o,n))}return o}


/***/ }),

/***/ 6035:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/sourceUtils.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFeatureEditErrorResult": () => (/* binding */ u),
/* harmony export */   "createFeatureEditSuccessResult": () => (/* binding */ c),
/* harmony export */   "loadGeometryEngine": () => (/* binding */ g),
/* harmony export */   "loadGeometryEngineForSimplify": () => (/* binding */ y),
/* harmony export */   "mixAttributes": () => (/* binding */ d),
/* harmony export */   "simplify": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../support/fieldUtils.js */ 81451);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



class o {
  constructor() {
    this.code = null, this.description = null;
  }

}

class l {
  constructor(e) {
    this.error = new o(), this.globalId = null, this.objectId = null, this.success = !1, this.uniqueId = null, this.error.description = e;
  }

}

function u(e) {
  return new l(e);
}

class a {
  constructor(e) {
    this.globalId = null, this.success = !0, this.objectId = this.uniqueId = e;
  }

}

function c(e) {
  return new a(e);
}

const f = new Set();

function d(e, t, r, s = !1, o) {
  f.clear();

  for (const l in r) {
    const a = e.get(l);
    if (!a) continue;
    const c = r[l],
          d = m(a, c);

    if (d !== c && o && o.push({
      name: "invalid-value-type",
      message: "attribute value was converted to match the field type",
      details: {
        field: a,
        originalValue: c,
        sanitizedValue: d
      }
    }), f.add(a.name), a && (s || a.editable)) {
      const e = (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__.validateFieldValue)(a, d);
      if (e) return u((0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__.validationErrorToString)(e, a, d));
      t[a.name] = d;
    }
  }

  for (const n of e.requiredFields) if (!f.has(n.name)) return u(`missing required field "${n.name}"`);

  return null;
}

function m(e, n) {
  let i = n;
  return "string" == typeof n && (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__.isNumericField)(e) ? i = parseFloat(n) : null != n && (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__.isStringField)(e) && "string" != typeof n && (i = String(n)), (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__.sanitizeNullFieldValue)(i);
}

let p;

function h(t, n) {
  if (!t || !(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__.isValid)(n)) return t;

  if ("rings" in t || "paths" in t) {
    if (!p) throw new TypeError("geometry engine not loaded");
    return p.simplify(n, t);
  }

  return t;
}

function g() {
  return _g.apply(this, arguments);
}

function _g() {
  _g = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
    return p || (p = yield Promise.all(/*! import() */[__webpack_require__.e(6571), __webpack_require__.e(8592), __webpack_require__.e(5571)]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../geometry/geometryEngineJSON.js */ 25571)), p);
  });
  return _g.apply(this, arguments);
}

function y(_x, _x2) {
  return _y.apply(this, arguments);
}

function _y() {
  _y = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, n) {
    !(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__.isValid)(t) || "esriGeometryPolygon" !== n && "esriGeometryPolyline" !== n || (yield g());
  });
  return _y.apply(this, arguments);
}



/***/ }),

/***/ 90363:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArcGISCachedService": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../support/serviceTileInfoProperty.js */ 57275);
/* harmony import */ var _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/TilemapCache.js */ 55261);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=s=>{let l=class extends s{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}readMaxScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_9__.TilemapCache({layer:this}):null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],l.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("service","minScale")],l.prototype,"readMinScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],l.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("service","maxScale")],l.prototype,"readMaxScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__.default})],l.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0})],l.prototype,"supportsBlankTile",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)(_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_8__.serviceTileInfoProperty)],l.prototype,"tileInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],l.prototype,"tilemapCache",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("service","tilemapCache",["capabilities"])],l.prototype,"readTilemapCache",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],l.prototype,"version",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.mixins.ArcGISCachedService")],l),l};


/***/ }),

/***/ 71995:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ExportImageParameters.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportImageParameters": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ 98240);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commonProperties.js */ 34042);
/* harmony import */ var _sublayerUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sublayerUtils.js */ 20975);
/* harmony import */ var _views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/support/floorFilterUtils.js */ 89836);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends((0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__.HandleOwnerMixin)(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__.default)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=(0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_11__.getLayerFloorFilterClause)(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_10__.isExportDynamic)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(m[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const r=!(null==(e=this.floors)||!e.length),s=this.visibleSublayers.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return s.length?JSON.stringify(s.reduce(((e,r)=>{const s=(0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_11__.getLayerFloorFilterClause)(this.floors,r),i=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(s)?(0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_11__.combineFloorsDefinitionExpression)(s,r):r.definitionExpression;return e[r.id]=i,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=r=>{const t=this.scale,i=0===t,o=0===r.minScale||t<=r.minScale,a=0===r.maxScale||t>=r.maxScale;r.visible&&(i||o&&a)&&(r.sublayers?r.sublayers.forEach(s):e.unshift(r))};r&&r.forEach(s);const t=this._get("visibleSublayers");return!t||t.length!==e.length||t.some(((r,s)=>e[s]!==r))?e:t}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],c.prototype,"dynamicLayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],c.prototype,"floors",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],c.prototype,"hasDynamicLayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],c.prototype,"layer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],c.prototype,"layers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],c.prototype,"layerDefs",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number})],c.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__.combinedViewLayerTimeExtentProperty)],c.prototype,"timeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],c.prototype,"version",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],c.prototype,"visibleSublayers",null),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.mixins.ExportImageParameters")],c);


/***/ }),

/***/ 28763:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ExportWMSImageParameters.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportWMSImageParameters": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ 98240);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a={visible:"visibleSublayers"};let l=class extends((0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__.HandleOwnerMixin)(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__.default)){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(a[e.propertyName])))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter((e=>e.name)).map((e=>e.name)).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:r}=this,s=null==e?void 0:e.sublayers,t=[],o=e=>{const{minScale:s,maxScale:a,sublayers:l,visible:i}=e;i&&(0===r||(0===s||r<=s)&&(0===a||r>=a))&&(l?l.forEach(o):t.unshift(e))};return null==s||s.forEach(o),t}toJSON(){const{layer:e,layers:r}=this,{imageFormat:s,imageTransparency:t,version:o}=e;return{format:s,request:"GetMap",service:"WMS",styles:"",transparent:t,version:o,layers:r}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],l.prototype,"layer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],l.prototype,"layers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number})],l.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],l.prototype,"version",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],l.prototype,"visibleSublayers",null),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.ExportWMSImageParameters")],l);


/***/ }),

/***/ 30971:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/WMTSLayerInfo.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WMTSLayerInfo": () => (/* binding */ p),
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;let p=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r)}clone(){return new i({customLayerParameters:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.customLayerParameters),customParameters:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layer.support.WMTSLayerInfo")],p);const a=p;


/***/ }),

/***/ 5285:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/kmlUtils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computeExtent": () => (/* binding */ j),
/* harmony export */   "fetchService": () => (/* binding */ g),
/* harmony export */   "getGraphics": () => (/* binding */ b),
/* harmony export */   "parseKML": () => (/* binding */ d),
/* harmony export */   "sublayersFromJSON": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ 76925);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kernel.js */ 77871);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PopupTemplate.js */ 95821);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/support/aaBoundingBox.js */ 61164);
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/support/boundsUtils.js */ 15783);
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../renderers/support/jsonUtils.js */ 94111);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../rest/support/FeatureSet.js */ 42762);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/











const c = {
  esriGeometryPoint: "points",
  esriGeometryPolyline: "polylines",
  esriGeometryPolygon: "polygons"
};

function d(e) {
  const o = e.folders || [],
        t = o.slice(),
        r = new Map(),
        n = new Map(),
        i = new Map(),
        f = new Map(),
        a = new Map(),
        l = {
    esriGeometryPoint: n,
    esriGeometryPolyline: i,
    esriGeometryPolygon: f
  };
  (e.featureCollection && e.featureCollection.layers || []).forEach(e => {
    const o = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)(e);
    o.featureSet.features = [];
    const t = e.featureSet.geometryType;
    r.set(t, o);
    const a = e.layerDefinition.objectIdField;
    "esriGeometryPoint" === t ? G(n, a, e.featureSet.features) : "esriGeometryPolyline" === t ? G(i, a, e.featureSet.features) : "esriGeometryPolygon" === t && G(f, a, e.featureSet.features);
  }), e.groundOverlays && e.groundOverlays.forEach(e => {
    a.set(e.id, e);
  }), o.forEach(o => {
    o.networkLinkIds.forEach(r => {
      const s = P(r, o.id, e.networkLinks);
      s && t.push(s);
    });
  }), t.forEach(e => {
    if (e.featureInfos) {
      e.points = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)(r.get("esriGeometryPoint")), e.polylines = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)(r.get("esriGeometryPolyline")), e.polygons = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)(r.get("esriGeometryPolygon")), e.mapImages = [];

      for (const o of e.featureInfos) switch (o.type) {
        case "esriGeometryPoint":
        case "esriGeometryPolyline":
        case "esriGeometryPolygon":
          {
            const t = l[o.type].get(o.id);
            t && e[c[o.type]].featureSet.features.push(t);
            break;
          }

        case "GroundOverlay":
          {
            const t = a.get(o.id);
            t && e.mapImages.push(t);
            break;
          }
      }

      e.fullExtent = j([e]);
    }
  });
  const u = j(t);
  return {
    folders: o,
    sublayers: t,
    extent: u
  };
}

function g(t, s, i, f) {
  const a = _kernel_js__WEBPACK_IMPORTED_MODULE_2__.id && _kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.findCredential(t);
  t = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryParameters)(t, {
    token: a && a.token
  });
  const l = _config_js__WEBPACK_IMPORTED_MODULE_1__.default.kmlServiceUrl;
  return (0,_request_js__WEBPACK_IMPORTED_MODULE_4__.default)(l, {
    query: {
      url: t,
      model: "simple",
      folders: "",
      refresh: 0 !== i || void 0,
      outSR: JSON.stringify(s)
    },
    responseType: "json",
    signal: f
  });
}

function S(e, o, t = null, r = []) {
  const s = [],
        n = {},
        i = o.sublayers,
        f = o.folders.map(e => e.id);
  return i.forEach(o => {
    const i = new e();

    if (t ? i.read(o, t) : i.read(o), r.length && f.indexOf(i.id) > -1 && (i.visible = -1 !== r.indexOf(i.id)), n[o.id] = i, null != o.parentFolderId && -1 !== o.parentFolderId) {
      const e = n[o.parentFolderId];
      e.sublayers || (e.sublayers = []), e.sublayers.unshift(i);
    } else s.unshift(i);
  }), s;
}

function G(e, o, t) {
  t.forEach(t => {
    e.set(t.attributes[o], t);
  });
}

function h(e, o) {
  let t;
  return o.some(o => o.id === e && (t = o, !0)), t;
}

function P(e, o, t) {
  const r = h(e, t);
  return r && (r.parentFolderId = o, r.networkLink = r), r;
}

function b(_x) {
  return _b.apply(this, arguments);
}

function _b() {
  _b = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    const o = _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__.default.fromJSON(e.featureSet).features,
          r = e.layerDefinition,
          s = (0,_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__.fromJSON)(r.drawingInfo.renderer),
          n = _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_3__.default.fromJSON(e.popupInfo),
          i = [];

    for (const t of o) {
      const e = yield s.getSymbolAsync(t);
      t.symbol = e, t.popupTemplate = n, t.visible = !0, i.push(t);
    }

    return i;
  });
  return _b.apply(this, arguments);
}

function j(e) {
  const o = (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.create)(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.NEGATIVE_INFINITY),
        t = (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.create)(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.NEGATIVE_INFINITY);

  for (const r of e) {
    if (r.polygons && r.polygons.featureSet && r.polygons.featureSet.features) for (const e of r.polygons.featureSet.features) (0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_9__.getBoundsXYZ)(o, e.geometry), (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.expandWithAABB)(t, o);
    if (r.polylines && r.polylines.featureSet && r.polylines.featureSet.features) for (const e of r.polylines.featureSet.features) (0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_9__.getBoundsXYZ)(o, e.geometry), (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.expandWithAABB)(t, o);
    if (r.points && r.points.featureSet && r.points.featureSet.features) for (const e of r.points.featureSet.features) (0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_9__.getBoundsXYZ)(o, e.geometry), (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.expandWithAABB)(t, o);
    if (r.mapImages) for (const e of r.mapImages) (0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_9__.getBoundsXYZ)(o, e.extent), (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.expandWithAABB)(t, o);
  }

  return (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.equals)(t, _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.NEGATIVE_INFINITY) ? null : {
    xmin: t[0],
    ymin: t[1],
    zmin: t[2],
    xmax: t[3],
    ymax: t[4],
    zmax: t[5],
    spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_7__.default.WGS84
  };
}



/***/ }),

/***/ 85549:
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/EphemeralBlockCache.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t=15e3,e=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=t,this._interval=Math.min(t,e)}decreaseRefCount(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.refCount--,t.refCount<=0&&(r.delete(s),t.controller&&t.controller.abort()),t.refCount}return 0}getBlock(t,e){const s=t+"/"+e,r=this._cachedBlocks;if(r.has(s)){const t=r.get(s);return t.ts=Date.now(),t.refCount++,r.delete(s),r.set(s,t),t.block}return null}putBlock(t,e,s,r=null){const i=this._cachedBlocks,c=t+"/"+e;if(i.has(c)){const t=i.get(c);t.ts=Date.now(),t.refCount++}else i.set(c,{block:s,ts:Date.now(),refCount:1,controller:r});this.trim(),this.updateTimer()}deleteBlock(t,e){const s=this._cachedBlocks,r=t+"/"+e;s.has(r)&&s.delete(r)}updateMaxSize(t){this._size=t,this.trim()}empty(){this._cachedBlocks.clear(),this.clearTimer()}getCurrentSize(){return this._cachedBlocks.size}updateTimer(){if(null!=this._timer)return;const t=this._cachedBlocks;this._timer=setInterval((()=>{const e=Array.from(t),s=Date.now();for(let r=0;r<e.length&&e[r][1].ts<=s-this._duration;r++)t.delete(e[r][0]);0===t.size&&this.clearTimer()}),this._interval)}trim(){const t=this._cachedBlocks;if(-1===this._size||this._size>=t.size)return;const e=Array.from(t);for(let s=0;s<e.length-this._size;s++)t.delete(e[s][0])}clearTimer(){null!=this._timer&&(clearInterval(this._timer),this._timer=null)}}


/***/ }),

/***/ 50033:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/RawBlockCache.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decreaseRefCount": () => (/* binding */ h),
/* harmony export */   "deleteBlock": () => (/* binding */ d),
/* harmony export */   "deleteRaster": () => (/* binding */ f),
/* harmony export */   "getBlock": () => (/* binding */ m),
/* harmony export */   "getRasterId": () => (/* binding */ i),
/* harmony export */   "putBlock": () => (/* binding */ x),
/* harmony export */   "register": () => (/* binding */ s),
/* harmony export */   "unregister": () => (/* binding */ u),
/* harmony export */   "update": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _EphemeralBlockCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EphemeralBlockCache.js */ 85549);
/* harmony import */ var _rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rasterFunctions/rasterProjectionHelper.js */ 11057);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/Point.js */ 7309);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=new Map,a=new _EphemeralBlockCache_js__WEBPACK_IMPORTED_MODULE_2__.default;function i(e,t){return null==t?e:`${e}?sliceId=${t}`}function s(e,t){const n={extent:null,rasterInfo:t,cache:new Map};if(c.has(e)){const t=c.get(e);return t.push(n),t.length-1}return c.set(e,[n]),0}function u(e,t){if(c.has(e)){const n=c.get(e);n[t]=null,n.some((e=>null!=e))||c.delete(e)}}function f(e){c.delete(e)}function h(e,t,n){if(!c.has(e))return null==t?a.decreaseRefCount(e,n):0;const o=c.get(e);if(null==o[t])return a.decreaseRefCount(e,n);const r=o[t].cache;if(r.has(n)){const e=r.get(n);if(e.refCount--,0===e.refCount){r.delete(n);for(let e=0;e<o.length;e++)o[e]&&o[e].cache.has(n)&&o[e].cache.delete(n);e.controller&&e.controller.abort()}return e.refCount}return 0}function m(e,t,n){if(!c.has(e))return null==t?a.getBlock(e,n):null;const o=c.get(e);if(null==o[t]){for(let e=0;e<o.length;e++)if(o[e]&&o[e].cache.has(n)){const t=o[e].cache.get(n);return t.refCount++,t.block}return a.getBlock(e,n)}const r=o[t].cache;if(r.has(n)){const e=r.get(n);return e.refCount++,e.block}for(let l=0;l<o.length;l++)if(l!==t&&o[l]&&o[l]&&o[l].cache.has(n)){const e=o[l].cache.get(n);return e.refCount++,r.set(n,e),e.block}return null}function x(e,t,n,o,r=null){if(!c.has(e))return void(null==t&&a.putBlock(e,n,o,r));const l=c.get(e);if(null==l[t])return void a.putBlock(e,n,o,r);const i={refCount:1,block:o,isResolved:!1,isRejected:!1,controller:r};o.then((()=>i.isResolved=!0)).catch((()=>i.isRejected=!0)),l[t].cache.set(n,i)}function d(e,t,n){if(!c.has(e))return void(null==t&&a.deleteBlock(e,n));const o=c.get(e);null!=o[t]?o[t].cache.delete(n):a.deleteBlock(e,n)}function y(e,t){if(!c.has(e))return null;const n=c.get(e);return null==n[t]?null:n[t]}function g(t,c,a,i,s,u,f=null){const h=y(t,c),m=h.extent,{cache:x,rasterInfo:d}=h;if(m&&m.xmin===a.xmin&&m.xmax===a.xmax&&m.ymin===a.ymin&&m.ymax===a.ymax)return;const g=a.clone().normalize(),{spatialReference:p,transform:k}=d,M=new Set;for(let y=0;y<g.length;y++){const t=g[y];if(t.xmax-t.xmin<=i||t.ymax-t.ymin<=i)continue;let c=(0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__.projectExtent)(t,p,f);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(k)&&(c=k.inverseTransform(c));const a=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_4__.default({x:i,y:i,spatialReference:t.spatialReference});if(null==s&&!(s=(0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__.projectResolution)(a,p,t,f)))return;const{pyramidLevel:h,pyramidResolution:m,excessiveReading:x}=(0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_3__.snapPyramid)(s,d,u||"closest");if(x)return;const{storageInfo:R}=d,{origin:C}=R,j={x:Math.max(0,Math.floor((c.xmin-C.x)/m.x)),y:Math.max(0,Math.floor((C.y-c.ymax)/m.y))},v=Math.ceil((c.xmax-c.xmin)/m.x-.1),B=Math.ceil((c.ymax-c.ymin)/m.y-.1),b=h>0?R.pyramidBlockWidth:R.blockWidth,w=h>0?R.pyramidBlockHeight:R.blockHeight,$=1,I=Math.max(0,Math.floor(j.x/b)-$),H=Math.max(0,Math.floor(j.y/w)-$),E=Math.floor((j.x+v-1)/b)+$,P=Math.floor((j.y+B-1)/w)+$;for(let e=H;e<=P;e++)for(let t=I;t<=E;t++)M.add(`${h}/${e}/${t}`)}x.forEach(((e,t)=>{if(!M.has(t)){const e=x.get(t);(null==e||e.isResolved||e.isRejected)&&x.delete(t)}})),h.extent={xmin:a.xmin,ymin:a.ymin,xmax:a.xmax,ymax:a.ymax}}


/***/ }),

/***/ 26655:
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterTransforms/BaseRasterTransform.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{get affectsPixelSize(){return!1}forwardTransform(r){return r}inverseTransform(r){return r}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],t.prototype,"affectsPixelSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],t.prototype,"spatialReference",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.rasterTransforms.BaseRasterTransform")],t);const a=t;


/***/ }),

/***/ 91646:
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterTransforms/GCSShiftTransform.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BaseRasterTransform.js */ 26655);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_7__.default{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(r){return"point"===(r=r.clone()).type?(r.x>180+this.tolerance&&(r.x-=360),r):(r.xmin>=180-this.tolerance?(r.xmax-=360,r.xmin-=360):r.xmax>180+this.tolerance&&(r.xmin=-180,r.xmax=180),r)}inverseTransform(r){return"point"===(r=r.clone()).type?(r.x<-this.tolerance&&(r.x+=360),r):(r.xmin<-this.tolerance&&(r.xmin+=360,r.xmax+=360),r)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__.enumeration)({GCSShiftXform:"gcs-shift"})],a.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)()],a.prototype,"tolerance",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.rasterTransforms.GCSShiftTransform")],a);const c=a;


/***/ }),

/***/ 57741:
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterTransforms/IdentityTransform.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/set.js */ 72062);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BaseRasterTransform.js */ 26655);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_8__.default{constructor(){super(...arguments),this.type="identity"}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({IdentityXform:"identity"})],e.prototype,"type",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.rasterTransforms.IdentityTransform")],e);const p=e;


/***/ }),

/***/ 66294:
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterTransforms/PolynomialTransform.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BaseRasterTransform.js */ 26655);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../geometry/Point.js */ 7309);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p(e,r,o){const{x:t,y:s}=r;if(o<2){return{x:e[0]+t*e[2]+s*e[4],y:e[1]+t*e[3]+s*e[5]}}if(2===o){const r=t*t,o=s*s,n=t*s;return{x:e[0]+t*e[2]+s*e[4]+r*e[6]+n*e[8]+o*e[10],y:e[1]+t*e[3]+s*e[5]+r*e[7]+n*e[9]+o*e[11]}}const n=t*t,i=s*s,f=t*s,l=n*t,p=n*s,a=t*i,c=s*i;return{x:e[0]+t*e[2]+s*e[4]+n*e[6]+f*e[8]+i*e[10]+l*e[12]+p*e[14]+a*e[16]+c*e[18],y:e[1]+t*e[3]+s*e[5]+n*e[7]+f*e[9]+i*e[11]+l*e[13]+p*e[15]+a*e[17]+c*e[19]}}function a(e,r,o){const{xmin:t,ymin:s,xmax:n,ymax:i,spatialReference:f}=r;let a=[];if(o<2)a.push({x:t,y:i}),a.push({x:n,y:i}),a.push({x:t,y:s}),a.push({x:n,y:s});else{let e=10;for(let r=0;r<e;r++)a.push({x:t,y:s+(i-s)*r/(e-1)}),a.push({x:n,y:s+(i-s)*r/(e-1)});e=8;for(let r=1;r<=e;r++)a.push({x:t+(n-t)*r/e,y:s}),a.push({x:t+(n-t)*r/e,y:i})}a=a.map((r=>p(e,r,o)));const c=a.map((e=>e.x)),u=a.map((e=>e.y));return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__.default({xmin:Math.min.apply(null,c),xmax:Math.max.apply(null,c),ymin:Math.min.apply(null,u),ymax:Math.max.apply(null,u),spatialReference:f})}function c(e){const[r,o,t,s,n,i]=e,f=t*i-n*s,l=n*s-t*i;return[(n*o-r*i)/f,(t*o-r*s)/l,i/f,s/l,-n/f,-t/l]}let u=class extends _BaseRasterTransform_js__WEBPACK_IMPORTED_MODULE_10__.default{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,r){const{coeffX:o,coeffY:t}=r;if(null==o||!o.length||null==t||!t.length||o.length!==t.length)return null;const s=[];for(let n=0;n<o.length;n++)s.push(o[n]),s.push(t[n]);return s}writeForwardCoefficients(e,r,o){const t=[],s=[];for(let n=0;n<(null==e?void 0:e.length);n++)n%2==0?t.push(e[n]):s.push(e[n]);r.coeffX=t,r.coeffY=s}get inverseCoefficients(){let e=this._get("inverseCoefficients");const r=this._get("forwardCoefficients");return!e&&r&&this.polynomialOrder<2&&(e=c(r)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,r){const{inverseCoeffX:o,inverseCoeffY:t}=r;if(null==o||!o.length||null==t||!t.length||o.length!==t.length)return null;const s=[];for(let n=0;n<o.length;n++)s.push(o[n]),s.push(t[n]);return s}writeInverseCoefficients(e,r,o){const t=[],s=[];for(let n=0;n<(null==e?void 0:e.length);n++)n%2==0?t.push(e[n]):s.push(e[n]);r.inverseCoeffX=t,r.inverseCoeffY=s}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if("point"===e.type){const r=p(this.forwardCoefficients,e,this.polynomialOrder);return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__.default({x:r.x,y:r.y,spatialReference:e.spatialReference})}return a(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if("point"===e.type){const r=p(this.inverseCoefficients,e,this.polynomialOrder);return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__.default({x:r.x,y:r.y,spatialReference:e.spatialReference})}return a(this.inverseCoefficients,e,this.polynomialOrder)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],u.prototype,"polynomialOrder",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],u.prototype,"forwardCoefficients",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__.reader)("forwardCoefficients",["coeffX","coeffY"])],u.prototype,"readForwardCoefficients",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__.writer)("forwardCoefficients")],u.prototype,"writeForwardCoefficients",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],u.prototype,"inverseCoefficients",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__.reader)("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],u.prototype,"readInverseCoefficients",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__.writer)("inverseCoefficients")],u.prototype,"writeInverseCoefficients",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],u.prototype,"affectsPixelSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({PolynomialXform:"polynomial"})],u.prototype,"type",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.support.rasterTransforms.PolynomialTransform")],u);const m=u;


/***/ }),

/***/ 47963:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterTransforms/utils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTransformSupported": () => (/* binding */ e),
/* harmony export */   "readTransform": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _GCSShiftTransform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GCSShiftTransform.js */ 91646);
/* harmony import */ var _IdentityTransform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IdentityTransform.js */ 57741);
/* harmony import */ var _PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PolynomialTransform.js */ 66294);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={GCSShiftXform:_GCSShiftTransform_js__WEBPACK_IMPORTED_MODULE_0__.default,IdentityXform:_IdentityTransform_js__WEBPACK_IMPORTED_MODULE_1__.default,PolynomialXform:_PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_2__.default},i=Object.keys(t);function e(n){const o=null==n?void 0:n.type;return!n||i.includes(o)}function f(n){if(!(null==n?void 0:n.type))return null;const o=t[null==n?void 0:n.type];if(o){const r=new o;return r.read(n),r}return null}


/***/ }),

/***/ 62882:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/portalLayers.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromItem": () => (/* binding */ u),
/* harmony export */   "selectLayerClassPath": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layers/support/lazyLayerLoader.js */ 40506);
/* harmony import */ var _PortalItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PortalItem.js */ 30424);
/* harmony import */ var _layersLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layersLoader.js */ 24174);
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portalItemUtils.js */ 26562);
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../support/requestPresets.js */ 50325);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/







function u(e) {
  return !e.portalItem || e.portalItem instanceof _PortalItem_js__WEBPACK_IMPORTED_MODULE_3__.default || (e = { ...e,
    portalItem: new _PortalItem_js__WEBPACK_IMPORTED_MODULE_3__.default(e.portalItem)
  }), l(e.portalItem).then(r => {
    const t = {
      portalItem: e.portalItem,
      ...r.properties
    },
          a = r.constructor;
    return Promise.resolve(new a(t));
  });
}

function l(e) {
  return e.load().then(i).then(y);
}

function i(r) {
  switch (r.type) {
    case "Map Service":
      return m(r);

    case "Feature Service":
      return p(r);

    case "Feature Collection":
      return L(r);

    case "Scene Service":
      return f(r);

    case "Image Service":
      return d(r);

    case "Stream Service":
      return N();

    case "Vector Tile Service":
      return S();

    case "KML":
      return I();

    case "WFS":
      return h();

    case "WMTS":
      return v();

    case "WMS":
      return g();

    case "Feed":
      return w();

    default:
      return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("portal:unknown-item-type", "Unknown item type '${type}'", {
        type: r.type
      }));
  }
}

function y(e) {
  return (0, _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_2__.layerLookupMap[e.className])().then(r => ({
    constructor: r,
    properties: e.properties
  }));
}

function m(e) {
  return T(e).then(e => e ? {
    className: "TileLayer"
  } : {
    className: "MapImageLayer"
  });
}

function p(e) {
  return M(e).then(e => {
    if ("object" == typeof e) {
      const r = {};
      return null != e.id && (r.layerId = e.id), {
        className: "FeatureLayer",
        properties: r
      };
    }

    return {
      className: "GroupLayer"
    };
  });
}

function f(e) {
  return M(e).then(r => {
    if ("object" == typeof r) {
      const t = {};
      let a;

      if (null != r.id ? (t.layerId = r.id, a = `${e.url}/layers/${r.id}`) : a = e.url, Array.isArray(e.typeKeywords) && e.typeKeywords.length > 0) {
        const r = {
          IntegratedMesh: "IntegratedMeshLayer",
          "3DObject": "SceneLayer",
          Point: "SceneLayer",
          PointCloud: "PointCloudLayer",
          Building: "BuildingSceneLayer"
        };

        for (const t of Object.keys(r)) if (-1 !== e.typeKeywords.indexOf(t)) return {
          className: r[t]
        };
      }

      return (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_6__.requestArcGISServiceJSON)(a).then(e => {
        let r = "SceneLayer";
        const a = {
          Point: "SceneLayer",
          "3DObject": "SceneLayer",
          IntegratedMesh: "IntegratedMeshLayer",
          PointCloud: "PointCloudLayer",
          Building: "BuildingSceneLayer"
        };
        return e && e.layerType && a[e.layerType] && (r = a[e.layerType]), {
          className: r,
          properties: t
        };
      });
    }

    return !1 === r ? (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_6__.requestArcGISServiceJSON)(e.url).then(e => "Voxel" === (null == e ? void 0 : e.layerType) ? {
      className: "VoxelLayer"
    } : {
      className: "GroupLayer"
    }) : {
      className: "GroupLayer"
    };
  });
}

function L(_x) {
  return _L.apply(this, arguments);
}

function _L() {
  _L = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    yield e.load();
    if ((0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__.hasTypeKeyword)(e, "Map Notes")) return {
      className: "MapNotesLayer"
    };
    if ((0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__.hasTypeKeyword)(e, "Route Layer")) return {
      className: "RouteLayer"
    };
    const r = yield e.fetchData();
    return 1 === (0,_layersLoader_js__WEBPACK_IMPORTED_MODULE_4__.getNumLayersAndTables)(r) ? {
      className: "FeatureLayer"
    } : {
      className: "GroupLayer"
    };
  });
  return _L.apply(this, arguments);
}

function d(_x2) {
  return _d.apply(this, arguments);
}

function _d() {
  _d = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    var r, t, a;
    yield e.load();
    const n = null != (r = null == (t = e.typeKeywords) ? void 0 : t.map(e => e.toLowerCase())) ? r : [];
    if (n.indexOf("elevation 3d layer") > -1) return {
      className: "ElevationLayer"
    };
    if (n.indexOf("tiled imagery") > -1) return {
      className: "ImageryTileLayer"
    };
    const o = yield e.fetchData(),
          s = null == o ? void 0 : o.layerType;
    if ("ArcGISTiledImageServiceLayer" === s) return {
      className: "ImageryTileLayer"
    };
    if ("ArcGISImageServiceLayer" === s) return {
      className: "ImageryLayer"
    };
    return "map" === (null == (a = (yield (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_6__.requestArcGISServiceJSON)(e.url)).cacheType) ? void 0 : a.toLowerCase()) ? {
      className: "ImageryTileLayer"
    } : {
      className: "ImageryLayer"
    };
  });
  return _d.apply(this, arguments);
}

function N() {
  return {
    className: "StreamLayer"
  };
}

function S() {
  return {
    className: "VectorTileLayer"
  };
}

function I() {
  return {
    className: "KMLLayer"
  };
}

function h() {
  return {
    className: "WFSLayer"
  };
}

function g() {
  return {
    className: "WMSLayer"
  };
}

function v() {
  return {
    className: "WMTSLayer"
  };
}

function w() {
  return {
    className: "StreamLayer"
  };
}

function T(e) {
  return (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_6__.requestArcGISServiceJSON)(e.url).then(e => e.tileInfo);
}

function M(e) {
  return !e.url || e.url.match(/\/\d+$/) ? Promise.resolve({}) : e.load().then(() => e.fetchData()).then( /*#__PURE__*/function () {
    var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r) {
      if ("Feature Service" === e.type) return j(r = yield (0,_layersLoader_js__WEBPACK_IMPORTED_MODULE_4__.preprocessFSItemData)(r, e.url));
      return (0,_layersLoader_js__WEBPACK_IMPORTED_MODULE_4__.getNumLayersAndTables)(r) > 0 ? j(r) : (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_6__.requestArcGISServiceJSON)(e.url).then(j);
    });

    return function (_x3) {
      return _ref.apply(this, arguments);
    };
  }());
}

function j(e) {
  return 1 === (0,_layersLoader_js__WEBPACK_IMPORTED_MODULE_4__.getNumLayersAndTables)(e) && {
    id: (0,_layersLoader_js__WEBPACK_IMPORTED_MODULE_4__.getFirstLayerOrTableId)(e)
  };
}



/***/ }),

/***/ 39115:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/heatmapUtils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateHeatmapIntensityInfo": () => (/* binding */ n),
/* harmony export */   "calculateHeatmapIntensityInfoReaders": () => (/* binding */ r),
/* harmony export */   "createHeatmapImageData": () => (/* binding */ a),
/* harmony export */   "createKernel": () => (/* binding */ i),
/* harmony export */   "createValueFunction": () => (/* binding */ f),
/* harmony export */   "createValueFunctionCursor": () => (/* binding */ c),
/* harmony export */   "drawHeatmap": () => (/* binding */ o),
/* harmony export */   "generateGradient": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ 88415);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=(()=>{if(!("document"in globalThis))return()=>null;const t=document.createElement("canvas"),e=t.getContext("2d"),n=512;return t.height=n,t.width=1,n=>{e.clearRect(0,0,1,t.height);const r=e.createLinearGradient(0,0,0,t.height);for(const{ratio:t,color:e}of n.colorStops)r.addColorStop(Math.max(t,.001),`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`);return e.fillStyle=r,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}})();function n(t,e,n,r){const{blurRadius:o,fieldOffset:a,field:c}=e,u=new Float64Array(n*r),l=i(o),h=Math.round(3*o);let s,d=Number.NEGATIVE_INFINITY;const m=f(c,a);for(const{geometry:i,attributes:f}of t){const t=i.x-h,e=i.y-h,o=Math.max(0,t),a=Math.max(0,e),c=Math.min(r,i.y+h),g=Math.min(n,i.x+h),y=+m(f);for(let r=a;r<c;r++){const a=l[r-e];for(let e=o;e<g;e++){const o=l[e-t];s=u[r*n+e]+=a*o*y,s>d&&(d=s)}}}return{matrix:u.buffer,max:d}}function r(t,e,n,r){const{blurRadius:o,fieldOffset:a,field:f}=e,u=new Float64Array(n*r),l=i(o),h=Math.round(3*o);let s,d=Number.NEGATIVE_INFINITY;const m=c(f,a),g=new Set;for(const i of t){const t=i.getCursor();for(;t.next();){const e=t.getObjectId();if(g.has(e))continue;g.add(e);const o=t.readLegacyPointGeometry(),a=128;if(o.x<-a||o.x>=n+a||o.y<-a||o.y>r+a)continue;const i=+m(t),f=Math.round(o.x)-h,c=Math.round(o.y)-h,y=Math.max(0,f),M=Math.max(0,c),x=Math.min(r,Math.round(o.y)+h),b=Math.min(n,Math.round(o.x)+h);for(let t=M;t<x;t++){const e=l[t-c];for(let r=y;r<b;r++){const o=l[r-f];s=u[t*n+r]+=e*o*i,s>d&&(d=s)}}}}return{matrix:u.buffer,max:d}}function o(t,e,n,r,o,i){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);const f=t.getImageData(0,0,e,e);n&&r&&f.data.set(new Uint8ClampedArray(a(e,n,r,o,i))),t.putImageData(f,0,0)}function a(e,n,r,o,a){const i=new Uint32Array(e*e),f="buffer"in n?n:new Float64Array(n),c="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),u=c.length/(a-o);for(let l=0;l<f.length;l++){const e=f[l],n=Math.floor((e-o)*u);i[l]=c[(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(n,0,c.length-1)]}return i.buffer}function i(t){const e=Math.round(3*t),n=2*t*t,r=new Float64Array(2*e+1);for(let o=0;o<=r.length;o++)r[o]=Math.exp(-((o-e)**2)/n)/Math.sqrt(2*Math.PI)*(t/2);return r}function f(t,e){return"function"==typeof t?t:t?"string"==typeof e?e=>-1*+e[t]:n=>+n[t]+e:()=>1}function c(t,e){return null!=t?"string"==typeof e?e=>-1*+e.readAttribute(t):n=>+n.readAttribute(t)+e:t=>1}


/***/ }),

/***/ 55481:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/requestImageUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestImage": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.js */ 30351);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


function t(_x, _x2) {
  return _t.apply(this, arguments);
}

function _t() {
  _t = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, r) {
    const {
      data: a
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(t, {
      responseType: "image",
      ...r
    });
    return a;
  });
  return _t.apply(this, arguments);
}



/***/ }),

/***/ 20655:
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/Rasterizer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CIMSymbolHelper.js */ 14915);
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rect.js */ 49198);
/* harmony import */ var _SDFHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SDFHelper.js */ 51256);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ 56314);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=512;class m{constructor(e){this._resourceManager=e}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(s,o,m){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===s.type||"esriSFS"===s.type){const[t,r,a]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__.SymbolHelper.rasterizeSimpleFill(this._rasterizationCanvas,s.style,o);return{size:[r,a],image:new Uint32Array(t.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===s.type||"esriSLS"===s.type||"line"===s.type&&s.dashTemplate){let r,a;if("simple-line"===s.type||"esriSLS"===s.type)switch(r=(0,_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__.slsDashToTemplateArray)(s.style,s.cap),s.cap){case"butt":a="Butt";break;case"square":a="Square";break;default:a="Round"}else r=s.dashTemplate,a=s.cim.capStyle;const[i,n,o]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__.SymbolHelper.rasterizeSimpleLine(r,a);return{size:[n,o],image:new Uint32Array(i.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let l,c,f;if("simple-marker"===s.type||"esriSMS"===s.type||"line-marker"===s.type?(l=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__.CIMSymbolHelper.fromSimpleMarker(s),f=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_2__.getSDFInfo)(l)):s.cim&&"CIMHatchFill"===s.cim.type?(l=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__.CIMSymbolHelper.fromCIMHatchFill(s.cim),c=new _Rect_js__WEBPACK_IMPORTED_MODULE_1__.default(l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin)):s.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===s.cim.markerPlacement.type?(l=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__.CIMSymbolHelper.fromCIMInsidePolygon(s.cim),c=new _Rect_js__WEBPACK_IMPORTED_MODULE_1__.default(l.frame.xmin,-l.frame.ymax,l.frame.xmax-l.frame.xmin,l.frame.ymax-l.frame.ymin)):(l=s.cim,f=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_2__.getSDFInfo)(l)),f&&!m){const[e,t,r]=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_2__.buildSDF)(f);return e?{size:[t,r],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[p,h,u,y,d]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__.CIMSymbolHelper.rasterize(this._rasterizationCanvas,l,c,this._resourceManager,!m);return p?{size:[h,u],image:new Uint32Array(p.buffer),sdf:!1,simplePattern:!1,anchorX:y,anchorY:d}:null}rasterizeImageResource(e,t,r,a){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const i=this._rasterizationCanvas.getContext("2d");r instanceof ImageData?i.putImageData(r,0,0):(r.setAttribute("width",`${e}px`),r.setAttribute("height",`${t}px`),i.drawImage(r,0,0,e,t));const n=i.getImageData(0,0,e,t),m=new Uint8Array(n.data);if(a)for(const s of a)if(s&&s.oldColor&&4===s.oldColor.length&&s.newColor&&4===s.newColor.length){const[e,t,r,a]=s.oldColor,[i,n,o,l]=s.newColor;if(e===i&&t===n&&r===o&&a===l)continue;for(let s=0;s<m.length;s+=4)e===m[s]&&t===m[s+1]&&r===m[s+2]&&a===m[s+3]&&(m[s]=i,m[s+1]=n,m[s+2]=o,m[s+3]=l)}let l;for(let s=0;s<m.length;s+=4)l=m[s+3]/255,m[s]=m[s]*l,m[s+1]=m[s+1]*l,m[s+2]=m[s+2]*l;let c=m,f=e,p=t;const h=o;if(f>=h||p>=h){const r=f/p;r>1?(f=h,p=Math.round(h/r)):(p=h,f=Math.round(h*r)),c=new Uint8Array(4*f*p);const a=new Uint8ClampedArray(c.buffer);(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.resampleHermite)(m,e,t,a,f,p,!1)}return{size:[f,p],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}


/***/ }),

/***/ 65864:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/previewUtils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustColorBrightness": () => (/* binding */ h),
/* harmony export */   "adjustColorComponentBrightness": () => (/* binding */ u),
/* harmony export */   "getConeShapes": () => (/* binding */ n),
/* harmony export */   "getCubeShapes": () => (/* binding */ p),
/* harmony export */   "getCylinderShapes": () => (/* binding */ L),
/* harmony export */   "getDiamondShapes": () => (/* binding */ s),
/* harmony export */   "getExtrudeSymbolShapes": () => (/* binding */ m),
/* harmony export */   "getInvertedConeShapes": () => (/* binding */ o),
/* harmony export */   "getPathSymbolShapes": () => (/* binding */ e),
/* harmony export */   "getTetrahedronShapes": () => (/* binding */ l),
/* harmony export */   "getWaterSymbolShapes": () => (/* binding */ c),
/* harmony export */   "shapes": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Color.js */ 28503);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],squareFill:[{type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],tallCone:[{type:"path",path:"M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],tallCube:[{type:"path",path:"M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z"},{type:"path",path:"M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z"},{type:"path",path:"M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],tallCylinder:[{type:"path",path:"M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:3.5,ry:1}],diamond:[{type:"path",path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]};function e(a,t,e){const m=22;let c=m,p=m;a<1?c*=.75:a>1&&(p*=1.25);const L=0,n=0;let o=m,s=m;t&&e&&(c=p=o=s=0);return[{type:"path",path:[{command:"M",values:[o,L]},{command:"L",values:[e?o:.875*o,L]},{command:"L",values:[e?c-.5*o:n,p-.5*s]},{command:"L",values:[c-.5*o,p-.5*s]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[o,L]},{command:"L",values:[o,t?L:.125*s]},{command:"L",values:[c-.5*o,t?p-.5*s:s]},{command:"L",values:[c-.5*o,p-.5*s]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c-.5*o,p-.5*s]},{command:"L",values:[e?c-.5*o:n,p-.5*s]},{command:"L",values:[e?c-.5*o:n,t?p-.5*s:s]},{command:"L",values:[c-.5*o,t?p-.5*s:s]},{command:"Z",values:[]}]}]}function m(a){const t=22,e=.5*a,m=0,c=0;return[{type:"path",path:[{command:"M",values:[c,.7*t*.5]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+e]},{command:"L",values:[c,.7*t+e-.7*t*.5]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,.7*t]},{command:"L",values:[.3*t,.7*t+e]},{command:"L",values:[t,e]},{command:"L",values:[t,m]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*t,m]},{command:"L",values:[t,m]},{command:"L",values:[.3*t,.7*t]},{command:"L",values:[c,.7*t*.5]},{command:"Z",values:[]}]}]}function c(){return[{type:"path",path:"M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27"},{type:"path",path:"M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z"},{type:"path",path:"M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z"}]}function p(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=0,p=0,L=t?.35*e:.5*e;return[{type:"path",path:[{command:"M",values:[.5*e,c]},{command:"L",values:[e,.5*L]},{command:"L",values:[.5*e,L]},{command:"L",values:[p,.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c,.5*L]},{command:"L",values:[.5*e,L]},{command:"L",values:[.5*e,a]},{command:"L",values:[p,a-.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.5*e,L]},{command:"L",values:[.5*e,a]},{command:"L",values:[e,a-.5*L]},{command:"L",values:[e,.5*L]},{command:"Z",values:[]}]}]}function L(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=.5*e,p=.15*e,L=0,n=a-p;return[{type:"ellipse",cx:.5*e,cy:n,rx:c,ry:p},{type:"path",path:[{command:"M",values:[L,p]},{command:"L",values:[L,n]},{command:"L",values:[e,n]},{command:"L",values:[e,p]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*e,cy:p,rx:c,ry:p}]}function n(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=.15*e,p=a-c;return[{type:"ellipse",cx:.5*e,cy:p,rx:.5*e,ry:c},{type:"path",path:[{command:"M",values:[.5*e,0]},{command:"L",values:[e,p]},{command:"L",values:[0,p]},{command:"Z",values:[]}]}]}function o(a){let t=a;const e=6;t-=t<22?.5*e:e;const m=.15*t,c=0;return[{type:"path",path:[{command:"M",values:[0,c]},{command:"L",values:[t,c]},{command:"L",values:[.5*t,a-m]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*t,cy:c,rx:.5*t,ry:m}]}function s(a){let t=a;const e=a,m=4;t-=t<22?.5*m:m;const c=0,p=0,L=t,n=e,o=Math.floor(a/10)-1||1;return[{type:"path",path:[{command:"M",values:[.45*L,c]},{command:"L",values:[L,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*L,c]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"L",values:[p,.5*n-o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[p,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"L",values:[.45*L,e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*L,e]},{command:"L",values:[L,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"Z",values:[]}]}]}function l(a){const t=2;let e=a;e-=e<22?.5*t:t;const m=0,c=0;return[{type:"path",path:[{command:"M",values:[.45*a,m]},{command:"L",values:[a,e]},{command:"L",values:[.45*a,.6*e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*a,m]},{command:"L",values:[.45*a,.6*e]},{command:"L",values:[c,e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c,e]},{command:"L",values:[.45*a,.6*e]},{command:"L",values:[a,e]},{command:"Z",values:[]}]}]}function u(a,t){const e=.75;return Math.round(Math.min(Math.max(a+255*t*e,0),255))}function h(t,e){if("type"in t&&("linear"===t.type||"pattern"===t.type))return t;const m=new _Color_js__WEBPACK_IMPORTED_MODULE_0__.default(t);return new _Color_js__WEBPACK_IMPORTED_MODULE_0__.default([u(m.r,e),u(m.g,e),u(m.b,e),m.a])}


/***/ }),

/***/ 3512:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/webStyleSymbolUtils.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchSymbolFromStyle": () => (/* binding */ h),
/* harmony export */   "resolveWebStyleSymbol": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../symbols.js */ 58650);
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/devEnvironmentUtils.js */ 56648);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../portal/Portal.js */ 27149);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ 26912);
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jsonUtils.js */ 20351);
/* harmony import */ var _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StyleOrigin.js */ 76853);
/* harmony import */ var _styleUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styleUtils.js */ 29130);
/* harmony import */ var _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Thumbnail.js */ 98666);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?j(t,e,l):(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.fetchStyle)(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(y,c,g,h,j){const d=y.data,U={portal:g&&g.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__.default.getDefault(),url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.urlToObject)(y.baseUrl),origin:"portal-item"},N=d.items.find((t=>t.name===c));if(!N){const t=`The symbol name '${c}' could not be found`;return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("symbolstyleutils:symbol-name-not-found",t,{symbolName:c}))}let w=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)((0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.symbolUrlFromStyleItem)(N,h),U),P=N.thumbnail&&N.thumbnail.href;const S=N.thumbnail&&N.thumbnail.imageData;(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__.isDevEnvironment)()&&(w=(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__.adjustStaticAGOUrl)(w),P=(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__.adjustStaticAGOUrl)(P));const D={portal:g.portal,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.urlToObject)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.removeFile)(w)),origin:"portal-item"};return (0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.requestJSON)(w,j).then((e=>{const r="cimRef"===h?(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.makeCIMSymbolRef)(e.data):e.data,o=(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__.fromJSON)(r,D);if(o&&(0,_symbols_js__WEBPACK_IMPORTED_MODULE_0__.isSymbol3D)(o)){if(P){const t=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(P,U);o.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__.default({url:t})}else S&&(o.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__.default({url:`data:image/png;base64,${S}`}));y.styleUrl?o.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__.default({portal:g.portal,styleUrl:y.styleUrl,name:c}):y.styleName&&(o.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__.default({portal:g.portal,styleName:y.styleName,name:c}))}return o}))}function j(t,e,r){const o=_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.Style2DUrlTemplate.replace(/\{SymbolName\}/gi,t.name);return (0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.requestJSON)(o,r).then((t=>{const r=(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.makeCIMSymbolRef)(t.data);return (0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__.fromJSON)(r,{portal:e.portal,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.urlToObject)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.removeFile)(o)),origin:"portal-item"})}))}


/***/ }),

/***/ 62497:
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/BaseProcessor.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__.HandleOwner{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0})],s.prototype,"supportsTileUpdates",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({constructOnly:!0})],s.prototype,"remoteClient",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({constructOnly:!0})],s.prototype,"service",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],s.prototype,"spatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({constructOnly:!0})],s.prototype,"tileInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({constructOnly:!0})],s.prototype,"tileStore",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s;


/***/ }),

/***/ 86923:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/BaseTileRenderer.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__.HandleOwner{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],i.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],i.prototype,"layerView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],i.prototype,"tileInfoView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],i.prototype,"updating",null),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],i);const o=i;


/***/ }),

/***/ 84853:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/webgl/enums.js */ 31620);
/* harmony import */ var _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseGraphicContainer.js */ 74112);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__.default{renderChildren(r){this.attributeView.bindTextures(r.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLDrawPhase.MAP&&this._renderChildren(r),this.hasHighlight()&&r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLDrawPhase.HIGHLIGHT&&this._renderHighlight(r),this._boundsRenderer&&this._boundsRenderer.doRender(r))}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}


/***/ }),

/***/ 46880:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterleavedBuffer": () => (/* binding */ N),
/* harmony export */   "InterleavedLayout": () => (/* binding */ T),
/* harmony export */   "newLayout": () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ 79399);
/* harmony import */ var _geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry/support/buffer/types.js */ 81681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class N{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const i of e.fieldNames){const t=e.fields.get(i);this[i]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new N(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,i,s){const r=this.stride;if(r%4==0){const n=new Uint32Array(e.buffer,t*r,s*r/4);new Uint32Array(this.buffer,i*r,s*r/4).set(n)}else{const n=new Uint8Array(e.buffer,t*r,s*r);new Uint8Array(this.buffer,i*r,s*r).set(n)}}}class T{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(t,i){return this.appendField(t,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2f,i),this}vec2f64(e,i){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2f64,i),this}vec3f(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3f,t),this}vec3f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3f64,t),this}vec4f(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4f,t),this}vec4f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4f64,t),this}mat3f(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat3f,t),this}mat3f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat3f64,t),this}mat4f(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat4f,t),this}mat4f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat4f64,t),this}vec4u8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4u8,t),this}f32(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewFloat,t),this}f64(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewFloat64,t),this}u8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint8,t),this}u16(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint16,t),this}i8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewInt8,t),this}vec2i8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2i8,t),this}vec2i16(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2i16,t),this}vec2u8(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2u8,t),this}vec4u16(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4u16,t),this}u32(e,t){return this.appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint32,t),this}appendField(e,t,i){const s=t.ElementCount*(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__.elementTypeSize)(t.ElementType),r=this.stride;this.fields.set(e,{size:s,constructor:t,offset:r,optional:i}),this.stride+=s,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new N(this,e)}createView(e){return new N(this,e)}clone(){const e=new T;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,i)=>e.fields.set(i,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function A(){return new T}


/***/ }),

/***/ 81269:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OITBlending": () => (/* binding */ c),
/* harmony export */   "OITDepthTest": () => (/* binding */ a),
/* harmony export */   "OITDepthWrite": () => (/* binding */ l),
/* harmony export */   "OITPolygonOffset": () => (/* binding */ i),
/* harmony export */   "OITPolygonOffsetLimit": () => (/* binding */ f),
/* harmony export */   "blendingAlpha": () => (/* binding */ o),
/* harmony export */   "blendingColor": () => (/* binding */ e),
/* harmony export */   "blendingDefault": () => (/* binding */ u),
/* harmony export */   "getOITPolygonOffset": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/renderState.js */ 89501);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__.separateBlendingParams)(770,1,771,771),e=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__.simpleBlendingParams)(1,1),o=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__.simpleBlendingParams)(0,771);function c(n){return 2===n?null:1===n?o:e}function l(n){return 2===n?_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__.defaultDepthWriteParams:null}const f=5e5,i={factor:-1,units:-2};function s(n){return n?i:null}function a(n){return 3===n||2===n?513:515}


/***/ }),

/***/ 61791:
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ProgramCache.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _programUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programUtils.js */ 80541);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(r){this._programCacheByTemplate=new Map,this._rctx=r}dispose(){this._programCacheByTemplate.forEach((r=>r.programs.forEach((r=>r.dispose())))),this._programCacheByTemplate=null}getProgram(t,a){return this._programCacheByTemplate.has(t)||this.addProgramTemplate(t,(a=>(0,_programUtils_js__WEBPACK_IMPORTED_MODULE_0__.createProgram)(this._rctx,t,a))),this.getProgramTemplateInstance(t,a)}addProgramTemplate(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map})}getProgramTemplateInstance(r,t){const a=this._programCacheByTemplate.get(r);if(a){const r=t?JSON.stringify(t):"default";if(!a.programs.has(r)){const e=a.constructor(t);a.programs.set(r,e)}return a.programs.get(r)}return null}}


/***/ }),

/***/ 46117:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/doublePrecisionUtils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeDoubleArray": () => (/* binding */ t),
/* harmony export */   "encodeDouble": () => (/* binding */ n),
/* harmony export */   "encodeDoubleArray": () => (/* binding */ o),
/* harmony export */   "encodeDoubleArraySplit": () => (/* binding */ r)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,o){e[0]=n,e[1]=n-e[0],o[0]=e[0],o[1]=e[1]}function o(n,o,t){for(let r=0;r<t;++r)o[2*r]=n[r],o[2*r+1]=n[r]-o[2*r]}function t(n,o,t){for(let r=0;r<t;++r)o[r]=n[2*r]+n[2*r+1]}function r(n,t,r,c){for(let l=0;l<c;++l)f[0]=n[l],o(f,e,1),t[l]=e[0],r[l]=e[1]}const f=new Float64Array(1),e=new Float32Array(2);


/***/ }),

/***/ 89501:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/renderState.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateTracker": () => (/* binding */ K),
/* harmony export */   "backFaceCullingParams": () => (/* binding */ i),
/* harmony export */   "cullingParams": () => (/* binding */ s),
/* harmony export */   "defaultColorWriteParams": () => (/* binding */ r),
/* harmony export */   "defaultDepthWriteParams": () => (/* binding */ l),
/* harmony export */   "frontFaceCullingParams": () => (/* binding */ n),
/* harmony export */   "makeBlending": () => (/* binding */ h),
/* harmony export */   "makeColorWrite": () => (/* binding */ u),
/* harmony export */   "makeCulling": () => (/* binding */ o),
/* harmony export */   "makeDepthTest": () => (/* binding */ c),
/* harmony export */   "makeDepthWrite": () => (/* binding */ p),
/* harmony export */   "makePipelineState": () => (/* binding */ g),
/* harmony export */   "makePolygonOffset": () => (/* binding */ a),
/* harmony export */   "makeStencilTest": () => (/* binding */ d),
/* harmony export */   "makeStencilWrite": () => (/* binding */ _),
/* harmony export */   "separateBlendingParams": () => (/* binding */ e),
/* harmony export */   "simpleBlendingParams": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,e,i=32774,n=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function e(t,e,i,n,s=32774,l=32774,r=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:n,opRgb:s,opAlpha:l,color:{r:r[0],g:r[1],b:r[2],a:r[3]}}}const i={face:1029,mode:2305},n={face:1028,mode:2305},s=t=>2===t?i:1===t?n:null,l={zNear:0,zFar:1},r={r:!0,g:!0,b:!0,a:!0};function h(t){return I.intern(t)}function o(t){return S.intern(t)}function a(t){return T.intern(t)}function c(t){return O.intern(t)}function d(t){return w.intern(t)}function p(t){return D.intern(t)}function u(t){return A.intern(t)}function _(t){return k.intern(t)}function g(t){return B.intern(t)}class f{constructor(t,e){this.makeKey=t,this.makeRef=e,this.interns=new Map}intern(t){if(!t)return null;const e=this.makeKey(t),i=this.interns;return i.has(e)||i.set(e,this.makeRef(t)),i.get(e)}}function v(t){return"["+t.join(",")+"]"}const I=new f(W,(t=>({__tag:"Blending",...t})));function W(t){return t?v([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const S=new f(b,(t=>({__tag:"Culling",...t})));function b(t){return t?v([t.face,t.mode]):null}const T=new f(y,(t=>({__tag:"PolygonOffset",...t})));function y(t){return t?v([t.factor,t.units]):null}const O=new f(R,(t=>({__tag:"DepthTest",...t})));function R(t){return t?v([t.func]):null}const w=new f(C,(t=>({__tag:"StencilTest",...t})));function C(t){return t?v([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const D=new f(m,(t=>({__tag:"DepthWrite",...t})));function m(t){return t?v([t.zNear,t.zFar]):null}const A=new f(P,(t=>({__tag:"ColorWrite",...t})));function P(t){return t?v([t.r,t.g,t.b,t.a]):null}const k=new f(z,(t=>({__tag:"StencilWrite",...t})));function z(t){return t?v([t.mask]):null}const B=new f(F,(t=>({blending:h(t.blending),culling:o(t.culling),polygonOffset:a(t.polygonOffset),depthTest:c(t.depthTest),stencilTest:d(t.stencilTest),depthWrite:p(t.depthWrite),colorWrite:u(t.colorWrite),stencilWrite:_(t.stencilWrite)})));function F(t){return t?v([W(t.blending),b(t.culling),y(t.polygonOffset),R(t.depthTest),C(t.stencilTest),m(t.depthWrite),P(t.colorWrite),z(t.stencilWrite)]):null}class K{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=t}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this.setBlending(t.blending),this.setCulling(t.culling),this.setPolygonOffset(t.polygonOffset),this.setDepthTest(t.depthTest),this.setStencilTest(t.stencilTest),this.setDepthWrite(t.depthWrite),this.setColorWrite(t.colorWrite),this.setStencilWrite(t.stencilWrite),this._pipeline=t),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}setBlending(t){this._blending=this.setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}setCulling(t){this._culling=this.setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}setPolygonOffset(t){this._polygonOffset=this.setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}setDepthTest(t){this._depthTest=this.setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}setStencilTest(t){this._stencilTest=this.setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}setDepthWrite(t){this._depthWrite=this.setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}setColorWrite(t){this._colorWrite=this.setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}setStencilWrite(t){this._stencilWrite=this.setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}setSubState(t,e,i,n){return(i||t!==e)&&(n(t),this._pipelineInvalid=!0),t}}


/***/ })

}]);
//# sourceMappingURL=common.c6f7324145ff803c3f7d.js.map