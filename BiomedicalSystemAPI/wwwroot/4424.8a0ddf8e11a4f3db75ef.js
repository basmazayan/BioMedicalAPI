"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[4424],{

/***/ 3445:
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/AggregateGraphic.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/tslib.es6.js */ 79076);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graphic.js */ 99326);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let s=p=class extends _Graphic_js__WEBPACK_IMPORTED_MODULE_1__.default{constructor(){super(...arguments),this.isAggregate=!0}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;const r=this.sourceLayer&&this.sourceLayer.featureReduction;return r&&"popupTemplate"in r&&r.popupEnabled?r.popupTemplate:null}getObjectId(){return this.objectId}clone(){return new p({objectId:this.objectId,...this.cloneProperties()})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean})],s.prototype,"isAggregate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{read:!0}})],s.prototype,"objectId",void 0),s=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.AggregateGraphic")],s);const c=s;


/***/ }),

/***/ 56648:
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/devEnvironmentUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustStaticAGOUrl": () => (/* binding */ a),
/* harmony export */   "isDevEnvironment": () => (/* binding */ c),
/* harmony export */   "isTelemetryDevEnvironment": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,n.some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(r)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(l)||null!=a.match(s)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}function o(c){c=c||globalThis.location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(n).some((a=>{var o;return null!=(null==(o=c)?void 0:o.match(a))}))}const t=/^devext.arcgis.com$/,l=/^qaext.arcgis.com$/,r=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,n=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,l,/^jsapps.esri.com$/,r,s];


/***/ }),

/***/ 91409:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/quantizationUtils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "equals": () => (/* binding */ f),
/* harmony export */   "getQuantizedBoundsCoordsArray": () => (/* binding */ Y),
/* harmony export */   "getQuantizedBoundsCoordsArrayArray": () => (/* binding */ _),
/* harmony export */   "getQuantizedBoundsPaths": () => (/* binding */ w),
/* harmony export */   "getQuantizedBoundsPoints": () => (/* binding */ A),
/* harmony export */   "getQuantizedBoundsRings": () => (/* binding */ j),
/* harmony export */   "quantizeBounds": () => (/* binding */ g),
/* harmony export */   "quantizeExtent": () => (/* binding */ G),
/* harmony export */   "quantizeGeometry": () => (/* binding */ U),
/* harmony export */   "quantizeMultipoint": () => (/* binding */ L),
/* harmony export */   "quantizePaths": () => (/* binding */ y),
/* harmony export */   "quantizePoint": () => (/* binding */ O),
/* harmony export */   "quantizePoints": () => (/* binding */ p),
/* harmony export */   "quantizePolygon": () => (/* binding */ S),
/* harmony export */   "quantizePolyline": () => (/* binding */ d),
/* harmony export */   "quantizeRings": () => (/* binding */ N),
/* harmony export */   "quantizeX": () => (/* binding */ x),
/* harmony export */   "quantizeY": () => (/* binding */ h),
/* harmony export */   "toQuantizationTransform": () => (/* binding */ s),
/* harmony export */   "unquantizeBounds": () => (/* binding */ P),
/* harmony export */   "unquantizeCoordsArray": () => (/* binding */ M),
/* harmony export */   "unquantizeCoordsArrayArray": () => (/* binding */ E),
/* harmony export */   "unquantizeExtent": () => (/* binding */ k),
/* harmony export */   "unquantizeMultipoint": () => (/* binding */ q),
/* harmony export */   "unquantizePaths": () => (/* binding */ F),
/* harmony export */   "unquantizePoint": () => (/* binding */ v),
/* harmony export */   "unquantizePoints": () => (/* binding */ b),
/* harmony export */   "unquantizePolygon": () => (/* binding */ B),
/* harmony export */   "unquantizePolyline": () => (/* binding */ C),
/* harmony export */   "unquantizeRings": () => (/* binding */ V),
/* harmony export */   "unquantizeX": () => (/* binding */ z),
/* harmony export */   "unquantizeY": () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsonUtils.js */ 70279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(n){return n&&"upperLeft"===n.originPosition}const a=(n,t,e)=>[t,e],m=(n,t,e)=>[t,e,n[2]],c=(n,t,e)=>[t,e,n[2],n[3]];function s(t){if(!t)return null;return{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}}function f(t,e){if(t===e||null==t&&null==e)return!0;if(null==t||null==e)return!1;let r,u,i,o,a,m;return l(t)?(r=t.translate[0],u=t.translate[1],i=t.scale[0]):(r=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(t.extent)?t.extent.xmin:0,u=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(t.extent)?t.extent.ymax:0,i=t.tolerance),l(e)?(o=e.translate[0],a=e.translate[1],m=e.scale[0]):(o=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(e.extent)?e.extent.xmin:0,a=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(e.extent)?e.extent.ymax:0,m=e.tolerance),r===o&&u===a&&i===m}function x({scale:n,translate:t},e){return Math.round((e-t[0])/n[0])}function h({scale:n,translate:t},e){return Math.round((t[1]-e)/n[1])}function I(n,t,e){const r=[];let u,i,o,l;for(let a=0;a<e.length;a++){const m=e[a];a>0?(o=x(n,m[0]),l=h(n,m[1]),o===u&&l===i||(r.push(t(m,o-u,l-i)),u=o,i=l)):(u=x(n,m[0]),i=h(n,m[1]),r.push(t(m,u,i)))}return r.length>0?r:null}function g(n,t,e){return t[0]=x(n,e[0]),t[3]=h(n,e[1]),t[2]=x(n,e[2]),t[1]=h(n,e[3]),t}function p(n,t,e,r){return I(n,e?r?c:m:r?m:a,t)}function N(n,t,e,r){const u=[],i=e?r?c:m:r?m:a;for(let o=0;o<t.length;o++){const e=I(n,i,t[o]);e&&e.length>=3&&u.push(e)}return u.length?u:null}function y(n,t,e,r){const u=[],i=e?r?c:m:r?m:a;for(let o=0;o<t.length;o++){const e=I(n,i,t[o]);e&&e.length>=2&&u.push(e)}return u.length?u:null}function z({scale:n,translate:t},e){return e*n[0]+t[0]}function T({scale:n,translate:t},e){return t[1]-e*n[1]}function M(n,t,e){const r=new Array(e.length);if(!e.length)return r;const[u,i]=n.scale;let o=z(n,e[0][0]),l=T(n,e[0][1]);r[0]=t(e[0],o,l);for(let a=1;a<e.length;a++){const n=e[a];o+=n[0]*u,l-=n[1]*i,r[a]=t(n,o,l)}return r}function E(n,t,e){const r=new Array(e.length);for(let u=0;u<e.length;u++)r[u]=M(n,t,e[u]);return r}function P(n,t,e){return e?(t[0]=z(n,e[0]),t[1]=T(n,e[3]),t[2]=z(n,e[2]),t[3]=T(n,e[1]),t):[z(n,t[0]),T(n,t[3]),z(n,t[2]),T(n,t[1])]}function b(n,t,e,r){return M(n,e?r?c:m:r?m:a,t)}function F(n,t,e,r){return E(n,e?r?c:m:r?m:a,t)}function V(n,t,e,r){return E(n,e?r?c:m:r?m:a,t)}function Y(n,t,e){let[r,u]=e[0],i=Math.min(r,t[0]),o=Math.min(u,t[1]),l=Math.max(r,t[2]),a=Math.max(u,t[3]);for(let m=1;m<e.length;m++){const[n,t]=e[m];r+=n,u+=t,n<0&&(i=Math.min(i,r)),n>0&&(l=Math.max(l,r)),t<0?o=Math.min(o,u):t>0&&(a=Math.max(a,u))}return n[0]=i,n[1]=o,n[2]=l,n[3]=a,n}function _(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(let e=0;e<t.length;e++)Y(n,n,t[e]);return n}function A(n){const t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return Y(t,t,n)}function w(n){return _([0,0,0,0],n)}function j(n){return _([0,0,0,0],n)}function G(n,t,e,r,u){return t.xmin=x(n,e.xmin),t.ymin=h(n,e.ymin),t.xmax=x(n,e.xmax),t.ymax=h(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function L(n,t,e,r,u){return t.points=p(n,e.points,r,u),t}function O(n,t,e,r,u){return t.x=x(n,e.x),t.y=h(n,e.y),t!==e&&(r&&(t.z=e.z),u&&(t.m=e.m)),t}function S(n,t,e,r,u){const i=N(n,e.rings,r,u);return i?(t.rings=i,t):null}function d(n,t,e,r,u){const i=y(n,e.paths,r,u);return i?(t.paths=i,t):null}function U(n,t){return n&&t?(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__.isPoint)(t)?O(n,{},t,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__.isPolyline)(t)?d(n,{},t,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__.isPolygon)(t)?S(n,{},t,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__.isMultipoint)(t)?L(n,{},t,!1,!1):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__.isExtent)(t)?G(n,{},t,!1,!1):null:null}function k(n,t,e,r,u){return t.xmin=z(n,e.xmin),t.ymin=T(n,e.ymin),t.xmax=z(n,e.xmax),t.ymax=T(n,e.ymax),t!==e&&(r&&(t.zmin=e.zmin,t.zmax=e.zmax),u&&(t.mmin=e.mmin,t.mmax=e.mmax)),t}function q(t,e,r,u,i){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(r)&&(e.points=b(t,r.points,u,i)),e}function v(n,e,r,u,i){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(r)||(e.x=z(n,r.x),e.y=T(n,r.y),e!==r&&(u&&(e.z=r.z),i&&(e.m=r.m))),e}function B(t,e,r,u,i){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(r)&&(e.rings=V(t,r.rings,u,i)),e}function C(t,e,r,u,i){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(r)&&(e.paths=F(t,r.paths,u,i)),e}


/***/ }),

/***/ 53174:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/effects/FeatureEffectView.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ 98240);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _EffectView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EffectView.js */ 71590);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__.default{constructor(e){super(e),this._filter=null,this.duration=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__.default)("mapview-transitions-duration"),this._excludedEffectView=new _EffectView_js__WEBPACK_IMPORTED_MODULE_8__.default(e),this._includedEffectView=new _EffectView_js__WEBPACK_IMPORTED_MODULE_8__.default(e)}get excludedEffects(){return this._excludedEffectView.effects}set featureEffect(e){this._get("featureEffect")!==e&&this._transitionTo(e)}get filter(){var e;return this._filter||(null==(e=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.unwrap)(this.featureEffect))?void 0:e.filter)||null}get hasEffects(){return this._excludedEffectView.hasEffects||this._includedEffectView.hasEffects}get includedEffects(){return this._includedEffectView.effects}set scale(e){this._set("scale",e),this._excludedEffectView.scale=e,this._includedEffectView.scale=e}get transitioning(){return this._excludedEffectView.transitioning||this._includedEffectView.transitioning}transitionStep(e,t){this._set("scale",t),this.transitioning?(this._includedEffectView.transitionStep(e,t),this._excludedEffectView.transitionStep(e,t),this.transitioning||(this._filter=null)):(this._excludedEffectView.scale=t,this._includedEffectView.scale=t)}end(){this._includedEffectView.end(),this._excludedEffectView.end(),this._filter=null}_transitionTo(e){const t=this._get("featureEffect"),i=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.unwrap)(e),f=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.unwrap)(null==i?void 0:i.includedEffect),c=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.unwrap)(null==i?void 0:i.excludedEffect),r=this._includedEffectView.canTransitionTo(f)&&this._excludedEffectView.canTransitionTo(c);this._includedEffectView.effect=f,this._excludedEffectView.effect=c,this._set("featureEffect",i),this._filter=(null==i?void 0:i.filter)||(null==t?void 0:t.filter)||null,r||this.end()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],o.prototype,"_filter",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],o.prototype,"_excludedEffectView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],o.prototype,"_includedEffectView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],o.prototype,"duration",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],o.prototype,"excludedEffects",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],o.prototype,"featureEffect",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],o.prototype,"filter",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],o.prototype,"hasEffects",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],o.prototype,"includedEffects",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({value:0})],o.prototype,"scale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],o.prototype,"transitioning",null),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.effects.FeatureEffectView")],o);const l=o;


/***/ }),

/***/ 48109:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateTolerance": () => (/* binding */ s)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t){let e=0,n=0;for(let r=0;r<t.length;r++){const s=t[r].size;"number"==typeof s&&(e+=s,n++)}return e/n}function n(t,n){return"number"==typeof t?t:t&&t.stops&&t.stops.length?e(t.stops):n}function r(t,e){if(!e)return t;const r=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:r,minSize:s}=e;return(n(r,t)+n(s,t))/2}));let s=0;const o=r.length;if(0===o)return t;for(let n=0;n<o;n++)s+=r[n];const f=Math.floor(s/o);return Math.max(f,t)}function s(e){const n=e&&e.renderer,s="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!n)return s;const o="visualVariables"in n?r(s,n.visualVariables):s;if("simple"===n.type)return t(o,n.symbol);if("unique-value"===n.type){let e=o;return n.uniqueValueInfos.forEach((n=>{e=t(e,n.symbol)})),e}if("class-breaks"===n.type){let e=o;return n.classBreakInfos.forEach((n=>{e=t(e,n.symbol)})),e}return n.type,o}


/***/ }),

/***/ 43559:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/ExpandedCIM.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpandedCIM": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../views/2d/engine/webgl/enums.js */ 31620);
/* harmony import */ var _views_2d_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/2d/engine/webgl/materialKey/MaterialKey.js */ 23155);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a={marker:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLGeometryType.MARKER,fill:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLGeometryType.FILL,line:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLGeometryType.LINE,text:_views_2d_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLGeometryType.TEXT};class l{constructor(e,l,s,n){const r={minScale:null==l?void 0:l.minScale,maxScale:null==l?void 0:l.maxScale},c=i(r);this.layers=e,this.data=l,this.hash=this._createHash()+c,this.rendererKey=s;const m={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:s};for(const i of e){const e=a[i.type];i.materialKey=(0,_views_2d_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__.createMaterialKey)(e,m),i.maxVVSize=n,i.scaleInfo=r,i.templateHash+=c}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}function i(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}


/***/ }),

/***/ 92216:
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/visualVariablesUtils.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTypeOfSizeVisualVariable": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums.js */ 31620);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils.js */ 25840);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.default.getLogger("esri.views.2d.engine.webgl");function o(s){return (0,_Utils_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(s.minDataValue)&&(0,_Utils_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(s.maxDataValue)&&null!=s.minSize&&null!=s.maxSize?_enums_js__WEBPACK_IMPORTED_MODULE_2__.WGLVVFlag.SIZE_MINMAX_VALUE:(s.expression&&"view.scale"===s.expression||s.valueExpression&&"$view.scale"===s.valueExpression)&&Array.isArray(s.stops)?_enums_js__WEBPACK_IMPORTED_MODULE_2__.WGLVVFlag.SIZE_SCALE_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&(Array.isArray(s.stops)||"levels"in s&&s.levels)?_enums_js__WEBPACK_IMPORTED_MODULE_2__.WGLVVFlag.SIZE_FIELD_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&null!=s.valueUnit?_enums_js__WEBPACK_IMPORTED_MODULE_2__.WGLVVFlag.SIZE_UNIT_VALUE:(l.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("mapview-bad-type","Found invalid size VisualVariable",s)),_enums_js__WEBPACK_IMPORTED_MODULE_2__.WGLVVFlag.NONE)}


/***/ }),

/***/ 91578:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/FeatureLayerView2D.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ D)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _AggregateGraphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../AggregateGraphic.js */ 3445);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Graphic.js */ 99326);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Collection.js */ 37635);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/lang.js */ 60161);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/reactiveUtils.js */ 7917);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/watchUtils.js */ 11652);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _layers_effects_FeatureEffectView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../layers/effects/FeatureEffectView.js */ 53174);
/* harmony import */ var _layers_support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../layers/support/FeatureFilter.js */ 90589);
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../renderers/support/clickToleranceUtils.js */ 48109);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../rest/support/FeatureSet.js */ 42762);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../rest/support/Query.js */ 37995);
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../engine/webgl/definitions.js */ 30603);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./LayerView2D.js */ 87982);
/* harmony import */ var _features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./features/schemaUtils.js */ 51904);
/* harmony import */ var _features_tileRenderers_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./features/tileRenderers.js */ 45961);
/* harmony import */ var _features_support_pixelBuffering_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./features/support/pixelBuffering.js */ 75124);
/* harmony import */ var _support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/clusterUtils.js */ 38255);
/* harmony import */ var _support_FeatureCommandQueue_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/FeatureCommandQueue.js */ 99367);
/* harmony import */ var _support_FeatureLayerProxy_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./support/FeatureLayerProxy.js */ 16168);
/* harmony import */ var _support_util_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./support/util.js */ 28121);
/* harmony import */ var _tiling_TileManager_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../tiling/TileManager.js */ 6635);
/* harmony import */ var _layers_FeatureLayerView_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../layers/FeatureLayerView.js */ 90390);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../layers/LayerView.js */ 96121);
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ 26263);
/* harmony import */ var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../support/drapedUtils.js */ 7380);
/* harmony import */ var _webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../webgl/capabilities.js */ 62965);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






































function Q(e) {
  return e && "openPorts" in e;
}

const M = _core_Logger_js__WEBPACK_IMPORTED_MODULE_9__.default.getLogger("esri.views.2d.layers.FeatureLayerView2D");
let A = class extends (0,_layers_FeatureLayerView_js__WEBPACK_IMPORTED_MODULE_32__.FeatureLayerView)((0,_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_34__.RefreshableLayerView)((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_23__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_33__.default))) {
  constructor() {
    var _this;

    (super(...arguments), _this = this), this._pipelineIsUpdating = !0, this._commandsQueue = new _support_FeatureCommandQueue_js__WEBPACK_IMPORTED_MODULE_28__.default({
      process: e => {
        switch (e.type) {
          case "processed-edit":
            return this._doEdit(e);

          case "refresh":
            return this._doRefresh(e.dataChanged);

          case "update":
            return this._doUpdate();
        }
      }
    }), this._visibilityOverrides = new Set(), this._highlightIds = new Map(), this._lastPixelBuffer = 0, this._updateHighlight = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__.debounce)( /*#__PURE__*/(0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this._proxy.setHighlight(Array.from(_this._highlightIds.keys()));
    })), this._uploadsLocked = !1, this._needsClusterSizeUpdate = !1, this.featureEffectView = new _layers_effects_FeatureEffectView_js__WEBPACK_IMPORTED_MODULE_17__.default(), this._lastDefinitionExpression = null;
  }

  destroy() {
    var e, t;
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.andThen)(this._updateClusterSizeTask, e => e.remove()), null == (e = this._proxy) || e.destroy(), null == (t = this.tileRenderer) || t.destroy(), this._commandsQueue.destroy();
  }

  initialize() {
    this.addResolvingPromise(Promise.all([this._initProxy(), this._initServiceOptions()])), this.handles.add([this.on("valueRangesChanged", e => {
      this._set("_aggregateValueRanges", e.valueRanges);
    }), (0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_12__.react)(() => this.featureEffect, e => {
      this.featureEffectView.featureEffect = e;
    }, {
      initial: !0,
      sync: !0
    })]);
  }

  _initProxy() {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if ("isTable" in _this2.layer && _this2.layer.isTable) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("featurelayerview:table-not-supported", "table feature layer can't be displayed", {
        layer: _this2.layer
      });
      _this2._proxy && _this2._proxy.destroy();

      const e = _this2._createClientOptions();

      return _this2._set("_proxy", new _support_FeatureLayerProxy_js__WEBPACK_IMPORTED_MODULE_29__.default({
        client: e
      })), _this2._proxy.when();
    })();
  }

  _initServiceOptions() {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this3._set("_serviceOptions", yield _this3._createServiceOptions());
    })();
  }

  get orderByFields() {
    return "stream" !== this._serviceOptions.type && this._serviceOptions.orderByFields;
  }

  get labelsVisible() {
    const e = "subtype-group" === this.layer.type ? this.layer.sublayers.items : [this.layer];
    return !this.suspended && e.some(e => e.labelingInfo && e.labelsVisible);
  }

  get queryMode() {
    return this._serviceOptions.type;
  }

  get renderingConfigHash() {
    if (!this.layer) return null;
    const e = this.availableFields,
          t = this.layer,
          i = this.view.floors,
          {
      definitionExpression: r
    } = t,
          s = "subtype-group" !== this.layer.type && this.layer.labelsVisible && this.layer.labelingInfo,
          a = "renderer" in t && t.renderer,
          n = "feature" === t.type ? t.gdbVersion : void 0,
          o = "feature" === t.type && t.historicMoment ? t.historicMoment.getTime() : void 0,
          {
      timeExtent: l
    } = this,
          u = "customParameters" in t ? JSON.stringify(t.customParameters) : void 0,
          d = "apiKey" in t ? t.apiKey : void 0,
          p = "stream" === t.type ? `${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}` : null,
          c = JSON.stringify(this.clips),
          y = t.featureReduction && t.featureReduction.toJSON(),
          f = "orderBy" in this.layer && JSON.stringify(this.layer.orderBy),
          g = "sublayers" in this.layer && this.layer.sublayers.items.reduce((e, t) => e + `${t.visible ? 1 : 0}.${JSON.stringify(t.renderer)}.${t.labelsVisible}\n.${JSON.stringify(t.labelingInfo)}`, "");
    return JSON.stringify({
      orderBy: f,
      sublayerHash: g,
      filterHash: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(this.filter) && this.filter.toJSON(),
      effectHash: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(this.featureEffect) && this.featureEffect.toJSON(),
      streamFilter: p,
      gdbVersion: n,
      definitionExpression: r,
      historicMoment: o,
      availableFields: e,
      renderer: a,
      labelingInfo: s,
      timeExtent: l,
      floors: i,
      clipsHash: c,
      featureReduction: y,
      customParameters: u,
      apiKey: d
    });
  }

  fetchPopupFeatures(e, t) {
    var _superprop_getFetchPopupFeatures = () => super.fetchPopupFeatures,
        _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var i;
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(t) && 0 === t.clientGraphics.length) return [];

      if (!("cluster" === (null == (i = _this4.layer.featureReduction) ? void 0 : i.type))) {
        const i = (0,_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_19__.calculateTolerance)({
          renderer: "renderer" in _this4.layer && _this4.layer.renderer,
          event: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(t) && t.event
        }),
              r = (0,_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_35__.createQueryGeometry)(e, i, _this4.view),
              {
          features: s
        } = yield _this4.queryVisibleFeatures(new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_21__.default({
          geometry: r,
          outFields: ["*"],
          returnGeometry: !0
        }));
        t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(t) ? t : {};
        const a = new Set(t.clientGraphics.map(e => e.getObjectId()));

        for (const e of s) a.has(e.getObjectId()) || t.clientGraphics.push(e);
      }

      return _superprop_getFetchPopupFeatures().call(_this4, e, t);
    })();
  }

  highlight(e) {
    var t;
    let s;
    return e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_4__.default ? s = [e.getObjectId()] : "number" == typeof e || "string" == typeof e ? s = [e] : Array.isArray(e) && e.length > 0 ? s = "number" == typeof e[0] || "string" == typeof e[0] ? e : e.map(e => null == e ? void 0 : e.getObjectId()) : _core_Collection_js__WEBPACK_IMPORTED_MODULE_5__.default.isCollection(e) && e.length > 0 && (s = e.map(e => null == e ? void 0 : e.getObjectId()).toArray()), s = null == (t = s) ? void 0 : t.filter(e => null != e), s && s.length ? (this._addHighlight(s), {
      remove: () => this._removeHighlight(s)
    }) : {
      remove: () => {}
    };
  }

  hasHighlight() {
    return !!this._highlightIds.size;
  }

  hitTest(e, r) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this5.tileRenderer) return null;
      const s = yield _this5.tileRenderer.hitTest(r);
      if (0 === s.length) return null;
      const {
        features: a,
        aggregates: n
      } = yield _this5._proxy.getFeatures(s);
      return [...n.map(e => _this5._createHittestResult(_AggregateGraphic_js__WEBPACK_IMPORTED_MODULE_2__.default.fromJSON(e))), ...a.map(e => _this5._createHittestResult(_Graphic_js__WEBPACK_IMPORTED_MODULE_4__.default.fromJSON(e)))];
    })();
  }

  queryAggregates() {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield _this6._proxy.getAggregates()).map(e => _AggregateGraphic_js__WEBPACK_IMPORTED_MODULE_2__.default.fromJSON(e));
    })();
  }

  queryStatistics() {
    return this._proxy.queryStatistics();
  }

  querySummaryStatistics(e, t, i) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = { ...t,
        scale: _this7.view.scale
      };
      return _this7._proxy.querySummaryStatistics(_this7._cleanUpQuery(e), r, i);
    })();
  }

  queryUniqueValues(e, t, i) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = { ...t,
        scale: _this8.view.scale
      };
      return _this8._proxy.queryUniqueValues(_this8._cleanUpQuery(e), r, i);
    })();
  }

  queryClassBreaks(e, t, i) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = { ...t,
        scale: _this9.view.scale
      };
      return _this9._proxy.queryClassBreaks(_this9._cleanUpQuery(e), r, i);
    })();
  }

  queryHistogram(e, t, i) {
    var _this10 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = { ...t,
        scale: _this10.view.scale
      };
      return _this10._proxy.queryHistogram(_this10._cleanUpQuery(e), r, i);
    })();
  }

  queryFeatures(e, t) {
    return this.queryFeaturesJSON(e, t).then(e => {
      const t = _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_20__.default.fromJSON(e);
      return t.features.forEach(e => this._setLayersForFeature(e)), t;
    });
  }

  queryVisibleFeatures(e, t) {
    return this._proxy.queryVisibleFeatures(this._cleanUpQuery(e), t).then(e => {
      const t = _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_20__.default.fromJSON(e);
      return t.features.forEach(e => this._setLayersForFeature(e)), t;
    });
  }

  queryFeaturesJSON(e, t) {
    return this._proxy.queryFeatures(this._cleanUpQuery(e), t);
  }

  queryObjectIds(e, t) {
    return this._proxy.queryObjectIds(this._cleanUpQuery(e), t);
  }

  queryFeatureCount(e, t) {
    return this._proxy.queryFeatureCount(this._cleanUpQuery(e), t);
  }

  queryExtent(e, t) {
    return this._proxy.queryExtent(this._cleanUpQuery(e), t).then(e => ({
      count: e.count,
      extent: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_37__.default.fromJSON(e.extent)
    }));
  }

  setVisibility(e, t) {
    t ? this._visibilityOverrides.delete(e) : this._visibilityOverrides.add(e), this._update();
  }

  update(e) {
    if (!this._tileStrategy || !this.tileRenderer) return;

    const {
      hasMissingTiles: t,
      added: i,
      removed: r
    } = this._tileStrategy.update(e);

    (i.length || r.length) && this._proxy.updateTiles({
      added: i,
      removed: r
    }), t && this.requestUpdate(), this.notifyChange("updating");
  }

  attach() {
    this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`), this._tileStrategy = new _tiling_TileManager_js__WEBPACK_IMPORTED_MODULE_31__.TileManager({
      acquireTile: e => this._acquireTile(e),
      releaseTile: e => this._releaseTile(e),
      tileInfoView: this.view.featuresTilingScheme,
      buffer: 0
    }), this.handles.add((0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_13__.init)(this, "renderingConfigHash", () => this._update()), "attach"), "stream" !== this.layer.type && this.handles.add(this.layer.on("edits", e => this._edit(e)), "attach");
  }

  detach() {
    this.container.removeAllChildren(), this.handles.remove("attach"), this.tileRenderer && (this.tileRenderer.uninstall(this.container), this.tileRenderer = null), this._tileStrategy && (this._tileStrategy.destroy(), this._tileStrategy = null), this._tileRendererHash = null;
  }

  moveStart() {
    this.requestUpdate();
  }

  viewChange() {
    this.requestUpdate();
  }

  moveEnd() {
    this.requestUpdate();
  }

  isUpdating() {
    var e;
    const t = "renderer" in this.layer && null != this.layer.renderer,
          i = this._commandsQueue.updating,
          r = null != this._updatingRequiredFieldsPromise,
          s = !this._proxy || !this._proxy.isReady,
          n = this._pipelineIsUpdating,
          o = null === this.tileRenderer || (null == (e = this.tileRenderer) ? void 0 : e.updating),
          l = t && (i || r || s || n || o);
    return (0,_core_has_js__WEBPACK_IMPORTED_MODULE_7__.default)("esri-2d-log-updating") && console.log(`Updating FLV2D: ${l}\n  -> hasRenderer ${t}\n  -> hasPendingCommand ${i}\n  -> updatingRequiredFields ${r}\n  -> updatingProxy ${s}\n  -> updatingPipeline ${n}\n  -> updatingTileRenderer ${o}\n`), l;
  }

  _createClientOptions() {
    return {
      setUpdating: e => {
        this._set("_pipelineIsUpdating", e);
      },
      emitEvent: e => {
        this.emit(e.name, e.event);
      }
    };
  }

  _detectQueryMode(e) {
    var _this11 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var t;
      const i = ("path" in e),
            r = "editingInfo" in _this11.layer && (null == (t = _this11.layer.editingInfo) ? void 0 : t.lastEditDate),
            s = !!_this11.layer.refreshInterval,
            n = !r && s;
      if (i && ("feature" === _this11.layer.type || "subtype-group" === _this11.layer.type) && "point" === _this11.layer.geometryType && _this11.layer.capabilities.query.supportsPagination && !_this11.layer.capabilities.operations.supportsEditing && !n && (0,_core_has_js__WEBPACK_IMPORTED_MODULE_7__.default)("featurelayer-snapshot-enabled")) try {
        const e = yield _this11.layer.queryFeatureCount();
        if (e <= (0,_core_has_js__WEBPACK_IMPORTED_MODULE_7__.default)("featurelayer-snapshot-point-min-threshold")) return {
          mode: "snapshot",
          featureCount: e
        };
        const t = (0,_core_has_js__WEBPACK_IMPORTED_MODULE_7__.default)("featurelayer-snapshot-point-max-threshold"),
              i = (0,_core_has_js__WEBPACK_IMPORTED_MODULE_7__.default)("featurelayer-snapshot-point-coverage"),
              r = _this11.view.extent,
              s = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.unwrap)(_this11.layer.fullExtent),
              n = null == s ? void 0 : s.clone().intersection(r),
              o = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(n) ? n.width * n.height : 0,
              l = (null == s ? void 0 : s.width) * (null == s ? void 0 : s.height),
              d = 0 === l ? 0 : o / l;
        if (e <= t && d >= i) return {
          mode: "snapshot",
          featureCount: e
        };
      } catch (o) {
        M.warn("mapview-feature-layer", "Encountered an error when querying for featureCount", {
          error: o
        });
      }
      return {
        mode: "on-demand"
      };
    })();
  }

  _createServiceOptions() {
    var _this12 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var e;
      const t = _this12.layer;
      if ("stream" === t.type) return null;
      const {
        capabilities: i,
        objectIdField: r
      } = t,
            s = t.fields.map(e => e.toJSON()),
            a = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(t.fullExtent) && t.fullExtent.toJSON(),
            o = (0,_support_util_js__WEBPACK_IMPORTED_MODULE_30__.toJSONGeometryType)(t.geometryType),
            l = t.timeInfo && t.timeInfo.toJSON() || null,
            u = t.spatialReference ? t.spatialReference.toJSON() : null,
            d = "feature" === t.type ? t.globalIdField : null;
      let p;
      "ogc-feature" === t.type ? p = t.source.getFeatureDefinition() : Q(t.source) ? p = yield t.source.openPorts() : t.parsedUrl && (p = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_8__.clone)(t.parsedUrl), "dynamicDataSource" in t && t.dynamicDataSource && (p.query = {
        layer: JSON.stringify({
          source: t.dynamicDataSource
        })
      }));
      const c = "datesInUnknownTimezone" in _this12.layer && _this12.layer.datesInUnknownTimezone,
            y = null != (e = "subtypeField" in _this12.layer && _this12.layer.subtypeField) ? e : null,
            {
        mode: f,
        featureCount: g
      } = yield _this12._detectQueryMode(p);
      let m = _this12.layer.objectIdField;

      if ("feature" === _this12.layer.type && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(_this12.layer.orderBy) && _this12.layer.orderBy.length) {
        const e = !_this12.layer.orderBy[0].valueExpression && _this12.layer.orderBy[0].field;
        e && (m = e);
      }

      return {
        type: f,
        timeReferenceUnknownClient: c,
        subtypeField: y,
        featureCount: g,
        globalIdField: d,
        maxRecordCount: i.query.maxRecordCount,
        tileMaxRecordCount: i.query.tileMaxRecordCount,
        capabilities: i,
        fields: s,
        fullExtent: a,
        geometryType: o,
        objectIdField: r,
        source: p,
        timeInfo: l,
        spatialReference: u,
        orderByFields: m
      };
    })();
  }

  _createMemoryServiceOptions(e) {
    var _this13 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = yield e.openPorts();
      return { ..._this13._createServiceOptions(),
        type: "memory",
        source: t
      };
    })();
  }

  _cleanUpQuery(e) {
    const t = _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_21__.default.from(e) || this.createQuery();
    return t.outSpatialReference || (t.outSpatialReference = this.view.spatialReference), t;
  }

  _update() {
    var _this14 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this14._commandsQueue.push({
        type: "update"
      });
    })();
  }

  _edit(e) {
    var _this15 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this15._validateEdit(e)) return _this15._commandsQueue.push({
        type: "edit",
        edits: e
      });
    })();
  }

  doRefresh(e) {
    var _this16 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this16._commandsQueue.push({
        type: "refresh",
        dataChanged: e
      });
    })();
  }

  _validateEdit(e) {
    const t = "globalIdField" in this.layer && this.layer.globalIdField,
          i = e.deletedFeatures.some(e => -1 === e.objectId || !e.objectId),
          r = t && this.availableFields.includes(t);
    return i && !r ? (M.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("mapview-apply-edits", `Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`)), null) : e;
  }

  _doUpdate() {
    var _this17 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        if (_this17.destroyed || !_this17._hasRequiredSupport(_this17.layer) || !_this17._tileStrategy) return;
        const {
          featureEffectView: t,
          filter: i
        } = _this17;
        yield _this17._updateRequiredFields();

        const {
          renderer: r
        } = _this17._getEffectiveRenderer();

        _this17._set("_effectiveRenderer", r);

        const s = _this17._createSchemaConfig(),
              a = (0,_support_util_js__WEBPACK_IMPORTED_MODULE_30__.toJSONGeometryType)(_this17.layer.geometryType),
              n = yield (0,_features_support_pixelBuffering_js__WEBPACK_IMPORTED_MODULE_26__.computePxBuffer)(r, a, _this17.view.resourceManager, _this17.layer.fields, _this17.layer.spatialReference, _this17.layer.featureReduction),
              o = _this17._createConfiguration(s, i, t.filter),
              l = _this17._lastDefinitionExpression !== o.definitionExpression;

        _this17._lastDefinitionExpression = o.definitionExpression, _this17._lastPixelBuffer = 0 === n ? 0 : Math.max(n, _this17._lastPixelBuffer), o.schema.source.pixelBuffer = _this17._lastPixelBuffer;

        const h = _this17._createTileRendererHash(r);

        if ("snapshot" === _this17._serviceOptions.type && (o.schema.source.featureCount = _this17._serviceOptions.featureCount), h !== _this17._tileRendererHash) {
          yield _this17._initTileRenderer(r);
          const e = _this17._serviceOptions;

          _this17.tileRenderer.onConfigUpdate(r);

          const t = _this17.layer;
          "stream" !== t.type && Q(t.source) && (e.source = yield t.source.openPorts()), "stream" === t.type && (yield _this17._initServiceOptions());
          const i = {
            added: _this17._tileStrategy.tileKeys(),
            removed: []
          };
          yield _this17._proxy.startup(_this17.view.featuresTilingScheme, o, e, i), _this17.hasHighlight() && (yield _this17._proxy.setHighlight(Array.from(_this17._highlightIds.keys()))), yield _this17._onceTilesUpdated(), _this17.tileRenderer.onConfigUpdate(r);
        } else {
          "snapshot" === _this17._serviceOptions.type && l && (o.schema.source.featureCount = yield _this17.layer.queryFeatureCount());
          const t = yield _this17._proxy.update(o);
          (t.mesh || t.targets.aggregate) && _this17._lockGPUUploads();

          try {
            yield _this17._proxy.applyUpdate(t);
          } catch (e) {
            (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__.isAbortError)(e) || M.error(e);
          }

          (t.mesh || t.targets.aggregate) && _this17._unlockGPUUploads(), _this17.tileRenderer.onConfigUpdate(r), _this17._updateClusterSizeVariable(), _this17._forceAttributeTextureUpload();
        }

        _this17._tileRendererHash = h, _this17.tileRenderer.invalidateLabels(), _this17.requestUpdate();
      } catch (e) {}
    })();
  }

  _doEdit(e) {
    var _this18 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        yield _this18._proxy.onEdits(e);
      } catch (t) {
        (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__.isAbortError)(t), 0;
      }
    })();
  }

  _doRefresh(e) {
    var _this19 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this19._lockGPUUploads();

      try {
        yield _this19._proxy.refresh(e);
      } catch (t) {
        (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__.isAbortError)(t), 0;
      }

      _this19._unlockGPUUploads();
    })();
  }

  _updateClusterSizeVariable() {
    this._needsClusterSizeUpdate && (this.tileRenderer.onConfigUpdate(this._effectiveRenderer), this._needsClusterSizeUpdate = !1);
  }

  _createUpdateClusterSizeTask(e, t) {
    var _this20 = this;

    return this.watch("_aggregateValueRanges", /*#__PURE__*/function () {
      var _ref2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i) {
        _this20._updateClusterEffectiveRendererSizeVariable(e, t, i), _this20._needsClusterSizeUpdate = !0, _this20._uploadsLocked || _this20._updateClusterSizeVariable();
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  _updateClusterEffectiveRendererSizeVariable(e, t, i) {
    var _this21 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (e.dynamicClusterSize && "visualVariables" in e && e.visualVariables) {
        const r = (0,_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_27__.findSizeVV)(e.visualVariables);

        if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(r) && "cluster_count" === r.field) {
          const s = e.visualVariables.indexOf(r);
          e.visualVariables[s] = (0,_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_27__.createClusterCountSizeVariable)(t, i);
          const a = e.clone();
          a.dynamicClusterSize = !0, _this21._set("_effectiveRenderer", a);
        }
      }
    })();
  }

  _getEffectiveRenderer() {
    const e = "renderer" in this.layer && this.layer.renderer,
          t = this.layer.featureReduction;

    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(this._updateClusterSizeTask) && (this._updateClusterSizeTask.remove(), this._updateClusterSizeTask = null), t && "cluster" === t.type && (0,_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_27__.isClusterCompatibleRenderer)(e)) {
      const i = t,
            r = [],
            s = (0,_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_27__.createClusterRenderer)(r, e, i, this._aggregateValueRanges);
      return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.andThen)(this._updateClusterSizeTask, e => e.remove()), this._updateClusterSizeTask = this._createUpdateClusterSizeTask(s, i), {
        renderer: s,
        aggregateFields: r,
        featureReduction: t
      };
    }

    return {
      renderer: e,
      aggregateFields: [],
      featureReduction: null
    };
  }

  _acquireTile(e) {
    const t = this.tileRenderer.acquireTile(e);
    return t.once("attach", () => {
      this.requestUpdate();
    }), t;
  }

  _releaseTile(e) {
    this.tileRenderer.releaseTile(e);
  }

  _initTileRenderer(e) {
    var _this22 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = yield (0,_features_tileRenderers_js__WEBPACK_IMPORTED_MODULE_25__.createOrReuseTileRenderer)(e, {
        layerView: _this22,
        tileInfoView: _this22.view.featuresTilingScheme,
        layer: _this22.layer
      });
      return _this22.tileRenderer && (_this22._tileStrategy.clear(), _this22.tileRenderer.uninstall(_this22.container), _this22.tileRenderer.destroy(), _this22.tileRenderer = null), _this22.destroyed ? null : (_this22._proxy.tileRenderer = t, _this22._set("tileRenderer", t), _this22.tileRenderer.install(_this22.container), _this22.tileRenderer.onConfigUpdate(e), _this22.requestUpdate(), _this22.tileRenderer);
    })();
  }

  _createTileRendererHash(e) {
    return `${"heatmap" === e.type ? "heatmap" : "symbol"}.${"dot-density" === e.type}`;
  }

  get hasFilter() {
    const e = !!("floorInfo" in this.layer && this.layer.floorInfo && this.view.floors && this.view.floors.length);
    return !!this.filter || e || !!this._visibilityOverrides.size || !!this.timeExtent;
  }

  _injectOverrides(e) {
    const t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(e) ? e.timeExtent : null,
          i = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(this.timeExtent) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(t) ? this.timeExtent.intersection(t) : this.timeExtent || t;
    let r = null;
    const s = "floorInfo" in this.layer && this.layer.floorInfo;

    if (s) {
      const t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(e) && e.where;
      r = this._addFloorFilterClause(t);
    }

    if (!this._visibilityOverrides.size && !i && !s) return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(e) ? e.toJSON() : null;
    (e = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(e) && e.clone() || new _layers_support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_18__.default()).timeExtent = i, r && (e.where = r);
    const a = e.toJSON();
    return a.hiddenIds = Array.from(this._visibilityOverrides), a;
  }

  _addFloorFilterClause(e) {
    const t = this.layer;
    let i = e || "";

    if ("floorInfo" in t && t.floorInfo) {
      var r;
      let e = this.view.floors;
      if (!e || !e.length) return i;
      null != (r = t.floorInfo.viewAllLevelIds) && r.length && (e = t.floorInfo.viewAllLevelIds);
      const s = e.filter(e => "" !== e).map(e => "'" + e + "'");
      s.push("''");
      const a = t.floorInfo.floorField;
      let n = "(" + a + " IN ({ids}) OR " + a + " IS NULL)";

      if (n = n.replace("{ids}", s.join(", ")), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(i) && i.includes(a)) {
        let e = new RegExp("AND \\(" + a + ".*NULL\\)", "g");
        i = i.replace(e, ""), e = new RegExp("\\(" + a + ".*NULL\\)", "g"), i = i.replace(e, ""), i = i.replace(/\s+/g, " ").trim();
      }

      i = "" !== i ? "(" + i + ") AND " + n : n;
    }

    return "" !== i ? i : null;
  }

  _createConfiguration(e, t, i) {
    const r = "feature" === this.layer.type && this.layer.historicMoment ? this.layer.historicMoment.getTime() : void 0,
          s = "feature" === this.layer.type ? this.layer.gdbVersion : void 0,
          a = new Array(_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_22__.MAX_FILTERS),
          n = this._injectOverrides(t);

    a[0] = n, a[1] = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(i) ? i.toJSON() : null;
    const o = (0,_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_24__.createSchema)(e);
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isNone)(o)) return null;
    const l = (0,_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_36__.default)();
    return {
      definitionExpression: this.layer.definitionExpression,
      availableFields: this.availableFields,
      gdbVersion: s,
      historicMoment: r,
      devicePixelRatio: window.devicePixelRatio || 1,
      filters: a,
      schema: o,
      supportsTextureFloat: l.supportsTextureFloat,
      maxTextureSize: l.maxTextureSize
    };
  }

  _hasRequiredSupport(e) {
    var t;
    return !("renderer" in e && "dot-density" === (null == (t = e.renderer) ? void 0 : t.type) && !(0,_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_36__.default)().supportsTextureFloat) || (M.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("webgl-missing-extension", "Missing WebGL extension OES_Texture_Float which is required for DotDensity")), !1);
  }

  _onceTilesUpdated() {
    return this.requestUpdate(), (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_13__.whenFalseOnce)(this, "_pipelineIsUpdating", !1);
  }

  _lockGPUUploads() {
    this.tileRenderer && (this._uploadsLocked = !0, this.tileRenderer.lockGPUUploads());
  }

  _unlockGPUUploads() {
    this.tileRenderer && (this._uploadsLocked = !1, this.tileRenderer.unlockGPUUploads());
  }

  _forceAttributeTextureUpload() {
    this.tileRenderer && this.tileRenderer.forceAttributeTextureUpload();
  }

  _createSchemaConfig() {
    const e = "feature" === this.layer.type ? this.layer.historicMoment : null,
          t = "feature" === this.layer.type ? this.layer.gdbVersion : null;
    return {
      renderer: "renderer" in this.layer && this.layer.renderer,
      spatialReference: this.layer.spatialReference,
      timeExtent: this.layer.timeExtent,
      definitionExpression: this.layer.definitionExpression,
      featureReduction: this.layer.featureReduction,
      fields: this.layer.fields,
      geometryType: this.layer.geometryType,
      historicMoment: e,
      labelsVisible: "labelsVisible" in this.layer && this.layer.labelsVisible,
      labelingInfo: "labelingInfo" in this.layer && this.layer.labelingInfo,
      availableFields: this.availableFields,
      featureEffect: this.featureEffect,
      filter: this.filter,
      gdbVersion: t,
      pixelBuffer: 0,
      orderBy: "orderBy" in this.layer && this.layer.orderBy ? this.layer.orderBy : null,
      customParameters: { ...("customParameters" in this.layer ? this.layer.customParameters : void 0),
        token: "apiKey" in this.layer ? this.layer.apiKey : void 0
      }
    };
  }

  _addHighlight(e) {
    for (const t of e) if (this._highlightIds.has(t)) {
      const e = this._highlightIds.get(t);

      this._highlightIds.set(t, e + 1);
    } else this._highlightIds.set(t, 1);

    this._updateHighlight().catch(e => {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__.isAbortError)(e) || M.error(e);
    });
  }

  _removeHighlight(e) {
    for (const t of e) if (this._highlightIds.has(t)) {
      const e = this._highlightIds.get(t) - 1;
      0 === e ? this._highlightIds.delete(t) : this._highlightIds.set(t, e);
    }

    this._updateHighlight().catch(e => {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__.isAbortError)(e) || M.error(e);
    });
  }

  _setLayersForFeature(e) {
    const t = this.layer;
    e.layer = t, e.sourceLayer = t;
  }

  _createHittestResult(e) {
    return this._setLayersForFeature(e), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(e.geometry) && (e.geometry.spatialReference = this.view.spatialReference), e;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()], A.prototype, "_serviceOptions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()], A.prototype, "_proxy", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()], A.prototype, "_pipelineIsUpdating", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()], A.prototype, "_effectiveRenderer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()], A.prototype, "_aggregateValueRanges", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()], A.prototype, "_commandsQueue", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()], A.prototype, "featureEffectView", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()], A.prototype, "labelsVisible", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  readOnly: !0
})], A.prototype, "queryMode", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()], A.prototype, "renderingConfigHash", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()], A.prototype, "tileRenderer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()], A.prototype, "updating", void 0), A = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_16__.subclass)("esri.views.2d.layers.FeatureLayerView2D")], A);
const D = A;


/***/ }),

/***/ 45961:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOrReuseTileRenderer": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(_x, _x2) {
  return _e.apply(this, arguments);
}

function _e() {
  _e = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, a) {
    if (!e) return null;

    switch (e.type) {
      case "class-breaks":
      case "simple":
      case "unique-value":
      case "dot-density":
      case "dictionary":
        return new (yield Promise.all(/*! import() */[__webpack_require__.e(5572), __webpack_require__.e(7629), __webpack_require__.e(7702), __webpack_require__.e(9726), __webpack_require__.e(8592), __webpack_require__.e(8072)]).then(__webpack_require__.bind(__webpack_require__, /*! ./tileRenderers/SymbolTileRenderer.js */ 7013))).default(a);

      case "heatmap":
        return new (yield Promise.all(/*! import() */[__webpack_require__.e(5572), __webpack_require__.e(7629), __webpack_require__.e(7702), __webpack_require__.e(8592), __webpack_require__.e(1729)]).then(__webpack_require__.bind(__webpack_require__, /*! ./tileRenderers/HeatmapTileRenderer.js */ 31729))).default(a);
    }
  });
  return _e.apply(this, arguments);
}



/***/ }),

/***/ 99367:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/FeatureCommandQueue.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Accessor.js */ 98240);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../support/QueueProcessor.js */ 28123);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(e){return e.some((e=>e.globalId))}function d(e){return e.filter((e=>!e.error)).map((e=>{var r;return null!=(r=e.objectId)?r:e.globalId}))}function a(e,r){const s=new Set(e);for(const t of r.values())s.add(t);return s}function i(e,r){const s=new Set(e);for(const t of r.values())s.delete(t);return s}let u=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__.default{constructor(e){super(e),this._hasGlobalIds=!1}normalizeCtorArgs(e){return this._queueProcessor=new _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_7__.QueueProcessor({concurrency:1,process:e.process}),{}}destroy(){this._queueProcessor.clear()}get updating(){return this._queueProcessor.length>0}push(e){const r=this._queueProcessor,s=r.last();switch(e.type){case"update":case"refresh":if((null==s?void 0:s.type)===e.type)return;r.push(e).finally((()=>this.notifyChange("updating")));break;case"edit":{const t="processed-edit"===(null==s?void 0:s.type)?s:null;t&&r.popLast();const o=this._mergeEdits(t,e);for(const e of o)r.push(e).finally((()=>this.notifyChange("updating")));break}}this.notifyChange("updating")}_mergeEdits(e,r){var s,t;const{addedFeatures:o,deletedFeatures:u,updatedFeatures:c}=r.edits;if(this._hasGlobalIds=this._hasGlobalIds||n(o)||n(c)||n(u),this._hasGlobalIds){return[e,{type:"processed-edit",edits:{addOrModified:[...o,...c],removed:u}}]}const l=new Set(d(null!=(s=null==e?void 0:e.edits.addOrModified)?s:[])),p=new Set(d(null!=(t=null==e?void 0:e.edits.removed)?t:[])),f=new Set([...d(o),...d(c)]),h=new Set(d(u));return[{type:"processed-edit",edits:{addOrModified:Array.from(a(i(l,h),f)).map((e=>({objectId:e}))),removed:Array.from(a(i(p,f),h)).map((e=>({objectId:e})))}}]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0})],u.prototype,"updating",null),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.2d.layers.support.FeatureCommandQueue")],u);const c=u;


/***/ }),

/***/ 16168:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/FeatureLayerProxy.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Promise.js */ 67614);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/workers/workers.js */ 74775);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/










function c(e) {
  return Array.isArray(e);
}

let l = class extends _core_Promise_js__WEBPACK_IMPORTED_MODULE_2__.EsriPromise {
  constructor(e) {
    super(e), this._startupResolver = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.createResolver)(), this.isReady = !1;
  }

  initialize() {
    this._controller = new AbortController(), this.addResolvingPromise(this._startWorker(this._controller.signal));
  }

  destroy() {
    this._controller.abort(), this._connection && this._connection.close();
  }

  set tileRenderer(e) {
    this.client.tileRenderer = e;
  }

  get closed() {
    return this._connection.closed;
  }

  startup(e, t, r, s) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.when();
      const o = _this._controller.signal,
            i = c(r.source) ? {
        transferList: r.source,
        signal: o
      } : void 0,
            n = {
        service: r,
        config: t,
        tileInfo: e.tileInfo.toJSON(),
        tiles: s
      };
      yield _this._connection.invoke("startup", n, i), _this._startupResolver.resolve(), _this._set("isReady", !0);
    })();
  }

  updateTiles(e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this2._startupResolver.promise, (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.ignoreAbortErrors)(_this2._connection.invoke("updateTiles", e));
    })();
  }

  update(e) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = {
        config: e
      };
      return yield _this3._startupResolver.promise, _this3._connection.invoke("update", t);
    })();
  }

  applyUpdate(e) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this4._startupResolver.promise, _this4._connection.invoke("applyUpdate", e);
    })();
  }

  setHighlight(e) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this5._startupResolver.promise, (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.ignoreAbortErrors)(_this5._connection.invoke("controller.setHighlight", e));
    })();
  }

  refresh(e) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this6._startupResolver.promise, (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.ignoreAbortErrors)(_this6._connection.invoke("controller.refresh", e));
    })();
  }

  querySummaryStatistics(e, t, r) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this7._startupResolver.promise, _this7._connection.invoke("controller.querySummaryStatistics", {
        query: e.toJSON(),
        params: t
      }, r);
    })();
  }

  queryUniqueValues(e, t, r) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this8._startupResolver.promise, _this8._connection.invoke("controller.queryUniqueValues", {
        query: e.toJSON(),
        params: t
      }, r);
    })();
  }

  queryClassBreaks(e, t, r) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this9._startupResolver.promise, _this9._connection.invoke("controller.queryClassBreaks", {
        query: e.toJSON(),
        params: t
      }, r);
    })();
  }

  queryHistogram(e, t, r) {
    var _this10 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this10._startupResolver.promise, _this10._connection.invoke("controller.queryHistogram", {
        query: e.toJSON(),
        params: t
      }, r);
    })();
  }

  queryFeatures(e, t) {
    var _this11 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this11._startupResolver.promise, _this11._connection.invoke("controller.queryFeatures", e.toJSON(), t);
    })();
  }

  queryVisibleFeatures(e, t) {
    var _this12 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this12._startupResolver.promise, _this12._connection.invoke("controller.queryVisibleFeatures", e.toJSON(), t);
    })();
  }

  queryObjectIds(e, t) {
    var _this13 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this13._startupResolver.promise, _this13._connection.invoke("controller.queryObjectIds", e.toJSON(), t);
    })();
  }

  queryFeatureCount(e, t) {
    var _this14 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this14._startupResolver.promise, _this14._connection.invoke("controller.queryFeatureCount", e.toJSON(), t);
    })();
  }

  queryExtent(e, t) {
    var _this15 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this15._connection.invoke("controller.queryExtent", e.toJSON(), t);
    })();
  }

  queryLatestObservations(e, t) {
    var _this16 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this16._startupResolver.promise, _this16._connection.invoke("controller.queryLatestObservations", e.toJSON(), t);
    })();
  }

  queryStatistics(e) {
    var _this17 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this17._startupResolver.promise, _this17._connection.invoke("controller.queryStatistics", e);
    })();
  }

  getObjectId(e) {
    var _this18 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this18._startupResolver.promise, _this18._connection.invoke("controller.getObjectId", e);
    })();
  }

  getDisplayId(e) {
    var _this19 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this19._startupResolver.promise, _this19._connection.invoke("controller.getDisplayId", e);
    })();
  }

  getFeatures(e) {
    var _this20 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this20._startupResolver.promise, _this20._connection.invoke("controller.getFeatures", e);
    })();
  }

  getAggregates() {
    var _this21 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this21._startupResolver.promise, _this21._connection.invoke("controller.getAggregates");
    })();
  }

  getAggregateValueRanges() {
    var _this22 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this22._startupResolver.promise, _this22._connection.invoke("controller.getAggregateValueRanges");
    })();
  }

  mapValidDisplayIds(e) {
    var _this23 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this23._startupResolver.promise, _this23._connection.invoke("controller.mapValidDisplayIds", e);
    })();
  }

  onEdits(e) {
    var _this24 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this24._startupResolver.promise, (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.ignoreAbortErrors)(_this24._connection.invoke("controller.onEdits", e));
    })();
  }

  enableEvent(e, t) {
    var _this25 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this25._startupResolver.promise, (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.ignoreAbortErrors)(_this25._connection.invoke("controller.enableEvent", {
        name: e,
        value: t
      }));
    })();
  }

  _startWorker(e) {
    var _this26 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this26._connection = yield (0,_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_4__.open)("Pipeline", {
          client: _this26.client,
          strategy: "dedicated",
          signal: e
        });
      } catch (t) {
        (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfNotAbortError)(t);
      }
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], l.prototype, "isReady", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], l.prototype, "client", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], l.prototype, "tileRenderer", null), l = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.views.2d.layers.support.FeatureLayerProxy")], l);
const u = l;


/***/ }),

/***/ 21835:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/cimSymbolUtils.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cimLayerToRasterizationInfo": () => (/* binding */ i),
/* harmony export */   "expandSymbol": () => (/* binding */ l),
/* harmony export */   "expandSymbols": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../symbols/cim/cimAnalyzer.js */ 77600);
/* harmony import */ var _symbols_cim_ExpandedCIM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../symbols/cim/ExpandedCIM.js */ 43559);
/* harmony import */ var _webStyleUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webStyleUtils.js */ 88672);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




const r = /*#__PURE__*/function () {
  var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, a, _r) {
    return Promise.all(e.map(e => l(e, t, a, _r)));
  });

  return function r(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}(),
      n = /*#__PURE__*/function () {
  var _ref2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (a, r, _n) {
    return new _symbols_cim_ExpandedCIM_js__WEBPACK_IMPORTED_MODULE_2__.ExpandedCIM(yield (0,_symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_1__.analyzeCIMSymbol)(a.data, r, _n), a.data, a.rendererKey, a.maxVVSize);
  });

  return function n(_x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}(),
      l = /*#__PURE__*/function () {
  var _ref3 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, r, _l) {
    if (!e) return null;
    if ("cim" === e.type) return n(e, t, r);

    if ("web-style" === e.type) {
      const i = {
        type: "cim",
        data: yield (0,_webStyleUtils_js__WEBPACK_IMPORTED_MODULE_3__.fetchCIMSymbolReference)(e, null, _l),
        rendererKey: e.rendererKey,
        maxVVSize: e.maxVVSize
      };
      return n(i, t, r);
    }

    return e;
  });

  return function l(_x8, _x9, _x10, _x11) {
    return _ref3.apply(this, arguments);
  };
}();

function i(e) {
  if (!e) return null;
  const {
    type: t,
    cim: a,
    url: r,
    materialHash: n
  } = e,
        l = {
    cim: a,
    type: t,
    mosaicHash: n,
    url: r,
    size: null,
    dashTemplate: null,
    path: null,
    text: null,
    fontName: null
  };

  switch (t) {
    case "marker":
      l.size = e.size, l.path = e.path;
      break;

    case "line":
      l.dashTemplate = e.dashTemplate;
      break;

    case "text":
      l.text = e.text, l.fontName = e.fontName;
  }

  return l;
}



/***/ }),

/***/ 88672:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/webStyleUtils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCIMSymbolReference": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/devEnvironmentUtils.js */ 56648);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ 61414);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ 30164);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../portal/Portal.js */ 27149);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/persistableUrlUtils.js */ 26912);
/* harmony import */ var _symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../symbols/support/styleUtils.js */ 29130);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/








function y(_x, _x2, _x3) {
  return _y.apply(this, arguments);
}

function _y() {
  _y = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, r, n) {
    if (!t.name) return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("style-symbol-reference-name-missing", "Missing name in style symbol reference"));
    if (t.styleName && "Esri2DPointSymbolsStyle" === t.styleName) return f(t, n);

    try {
      return p(yield (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__.fetchStyle)(t, r, n), t.name, r, n);
    } catch (s) {
      return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(s), null;
    }
  });
  return _y.apply(this, arguments);
}

function f(_x4, _x5) {
  return _f.apply(this, arguments);
}

function _f() {
  _f = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, r) {
    const e = _symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__.Style2DUrlTemplate.replace(/\{SymbolName\}/gi, t.name);

    try {
      const t = yield (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__.requestJSON)(e, r);
      return (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__.makeCIMSymbolRef)(t.data);
    } catch (n) {
      return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(n), null;
    }
  });
  return _f.apply(this, arguments);
}

function p(_x6, _x7, _x8, _x9) {
  return _p.apply(this, arguments);
}

function _p() {
  _p = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (m, a, y, f) {
    const p = m.data,
          b = {
      portal: y && y.portal || _portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__.default.getDefault(),
      url: (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.urlToObject)(m.baseUrl),
      origin: "portal-item"
    },
          d = p.items.find(t => t.name === a);

    if (!d) {
      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("symbolstyleutils:symbol-name-not-found", `The symbol name '${a}' could not be found`, {
        symbolName: a
      });
    }

    let j = (0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_6__.f)((0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__.symbolUrlFromStyleItem)(d, "cimRef"), b);
    (0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__.isDevEnvironment)() && (j = (0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__.adjustStaticAGOUrl)(j));

    try {
      const t = yield (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__.requestJSON)(j, f);
      return (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__.makeCIMSymbolRef)(t.data);
    } catch (U) {
      return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(U), null;
    }
  });
  return _p.apply(this, arguments);
}



/***/ }),

/***/ 6635:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/tiling/TileManager.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TileManager": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _TileCoverage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TileCoverage.js */ 66645);
/* harmony import */ var _TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TileKey.js */ 5507);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=1e-6;class s{constructor(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer}destroy(){}clear(){this._tiles.forEach((e=>this._releaseTile(e)))}tileKeys(){const e=[];return this._tiles.forEach(((i,t)=>e.push(t))),e}update(e){const l=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),{spans:s,lodInfo:r}=l,{level:a}=r,o=[],d=[],h=new Set,n=new Set;for(const{row:i,colFrom:c,colTo:f}of s)for(let e=c;e<=f;e++){const l=_TileKey_js__WEBPACK_IMPORTED_MODULE_2__.default.getId(a,i,r.normalizeCol(e),r.getWorldForColumn(e)),s=this._getOrAcquireTile(o,l);h.add(l),s.isReady?s.visible=!0:n.add(s.key)}n.forEach((e=>this._addPlaceholders(h,e))),this._tiles.forEach((e=>{h.has(e.key.id)||(d.push(e.key.id),this._releaseTile(e))})),_TileCoverage_js__WEBPACK_IMPORTED_MODULE_1__.default.pool.release(l);return{hasMissingTiles:n.size>0,added:o,removed:d}}_getOrAcquireTile(e,i){if(!this._tiles.has(i)){const l=this.acquireTile(new _TileKey_js__WEBPACK_IMPORTED_MODULE_2__.default(i));e.push(i),this._tiles.set(i,l),l.visible=!1}return this._tiles.get(i)}_getTile(e){return this._tiles.get(e)}_releaseTile(e){this._tiles.delete(e.key.id),this.releaseTile(e)}_addPlaceholders(e,i){const t=this._addPlaceholderChildren(e,i);if(!(Math.abs(1-t)<l)){if(!this._addPlaceholderParent(e,i)){this._getTile(i.id).visible=!0}}}_addPlaceholderChildren(e,i){let t=0;return this._tiles.forEach((l=>{t+=this._addPlaceholderChild(e,l,i)})),t}_addPlaceholderChild(e,i,t){if(i.key.level<=t.level||!i.hasData||!t.contains(i.key))return 0;i.visible=!0,e.add(i.key.id);return 1/(1<<2*(i.key.level-t.level))}_addPlaceholderParent(i,t){let l=t.getParentKey(),s=0,r=null;for(;(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(l);){if(i.has(l.id))return!0;const e=this._getTile(l.id);if(null!=e&&e.isReady)return e.visible=!0,i.add(e.key.id),!0;null!=e&&e.hasData&&e.patchCount>s&&(s=e.patchCount,r=e),l=l.getParentKey()}return!!r&&(r.visible=!0,i.add(r.key.id),!0)}}


/***/ }),

/***/ 90390:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/FeatureLayerView.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureLayerView": () => (/* binding */ O),
/* harmony export */   "default": () => (/* binding */ O)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_deprecate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/deprecate.js */ 41395);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/watchUtils.js */ 11652);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/support/commonProperties.js */ 34042);
/* harmony import */ var _layers_support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layers/support/FeatureEffect.js */ 47827);
/* harmony import */ var _layers_support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../layers/support/FeatureFilter.js */ 90589);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../layers/support/fieldUtils.js */ 81451);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../rest/support/Query.js */ 37995);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../support/arcadeOnDemand.js */ 2999);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./support/popupUtils.js */ 76388);
/* harmony import */ var _support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../support/floorFilterUtils.js */ 89836);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





















const P = _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__.default.getLogger("esri.views.layers.FeatureLayerView"),
      O = i => {
  let O = class extends i {
    constructor(...e) {
      super(...e), this._updatingRequiredFieldsPromise = null, this.filter = null, this.timeExtent = null, this.layer = null, this.requiredFields = [], this.view = null;
    }

    initialize() {
      (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_7__.init)(this, ["layer.renderer", "layer.labelingInfo", "layer.elevationInfo.featureExpressionInfo", "layer.displayField", "filter", "featureEffect", "layer.timeInfo", "layer.floorInfo", "timeExtent"], () => this._handleRequiredFieldsChange(), !0), (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_7__.on)(this, "view.floors", "change", () => this._handleRequiredFieldsChange()), (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_7__.on)(this, "layer.sublayer", "change", () => this._handleRequiredFieldsChange());
    }

    get availableFields() {
      const {
        layer: e,
        layer: {
          fieldsIndex: t
        },
        requiredFields: r
      } = this;
      return "outFields" in e && e.outFields ? (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.fixFields)(t, [...(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.unpackFieldNames)(t, e.outFields), ...r]) : (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.fixFields)(t, r);
    }

    set effect(e) {
      (0,_core_deprecate_js__WEBPACK_IMPORTED_MODULE_2__.deprecatedProperty)(P, "effect", {
        replacement: "featureEffect",
        version: "4.22"
      }), this.featureEffect = e;
    }

    get effect() {
      return (0,_core_deprecate_js__WEBPACK_IMPORTED_MODULE_2__.deprecatedProperty)(P, "effect", {
        replacement: "featureEffect",
        version: "4.22"
      }), this.featureEffect;
    }

    get featureEffect() {
      return this.layer && "featureEffect" in this.layer ? this.layer.featureEffect : null;
    }

    set featureEffect(e) {
      void 0 !== e ? this._override("featureEffect", e) : this._clearOverride("featureEffect");
    }

    get maximumNumberOfFeatures() {
      return 0;
    }

    set maximumNumberOfFeatures(e) {
      P.error("#maximumNumberOfFeatures=", "Setting maximum number of features is not supported");
    }

    get maximumNumberOfFeaturesExceeded() {
      return !1;
    }

    highlight(e) {
      throw new Error("missing implementation");
    }

    createQuery() {
      const e = {
        outFields: ["*"],
        returnGeometry: !0,
        outSpatialReference: this.view.spatialReference
      },
            t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(this.filter) ? this.filter.createQuery(e) : new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_17__.default(e);

      if ("feature" === this.layer.type) {
        const e = (0,_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_20__.getFloorFilterClause)(this);

        (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e) && (t.where = t.where ? `(${t.where}) AND (${e})` : e);
      }

      return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(this.timeExtent) && (t.timeExtent = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(t.timeExtent) ? t.timeExtent.intersection(this.timeExtent) : this.timeExtent.clone()), t;
    }

    queryFeatures(e, t) {
      throw new Error("missing implementation");
    }

    queryObjectIds(e, t) {
      throw new Error("missing implementation");
    }

    queryFeatureCount(e, t) {
      throw new Error("missing implementation");
    }

    queryExtent(e, t) {
      throw new Error("missing implementation");
    }

    fetchPopupFeatures(e, t) {
      var _this = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const r = _this.validateFetchPopupFeatures(t);

        if (r) throw r;
        return _this.fetchClientPopupFeatures(t);
      })();
    }

    _loadArcadeModules(e) {
      if (e.get("expressionInfos.length") || Array.isArray(e.content) && e.content.some(e => "expression" === e.type)) return (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__.loadArcade)();
    }

    _handleRequiredFieldsChange() {
      const e = this._updateRequiredFields();

      this._set("_updatingRequiredFieldsPromise", e), e.then(() => {
        this._updatingRequiredFieldsPromise === e && this._set("_updatingRequiredFieldsPromise", null);
      });
    }

    _updateRequiredFields() {
      var _this2 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if (!_this2.layer || !_this2.view) return;
        const e = "3d" === _this2.view.type,
              {
          layer: t,
          layer: {
            fieldsIndex: r,
            objectIdField: i
          }
        } = _this2,
              o = "renderer" in t && t.renderer,
              n = "orderBy" in t && t.orderBy,
              l = t.featureReduction,
              u = new Set(),
              p = yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.eachAlways)([o ? o.collectRequiredFields(u, r) : null, (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.collectLabelingFields)(u, t), e ? (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.collectElevationFields)(u, t) : null, (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(_this2.filter) ? (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.collectFilterFields)(u, t, _this2.filter) : null, (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(_this2.featureEffect) ? (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.collectFilterFields)(u, t, _this2.featureEffect.filter) : null, l ? (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.collectFeatureReductionFields)(u, t, l) : null, n ? (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.collectOrderByInfos)(u, t, n) : null]);

        if (t.timeInfo && _this2.timeExtent && (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.collectFields)(u, t.fieldsIndex, [t.timeInfo.startField, t.timeInfo.endField]), "feature" === t.type && t.floorInfo && (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.collectFields)(u, t.fieldsIndex, [t.floorInfo.floorField]), "subtype-group" === t.type) {
          (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.collectField)(u, r, t.subtypeField);
          const e = t.sublayers.map(e => {
            var t;
            return Promise.all([null == (t = e.renderer) ? void 0 : t.collectRequiredFields(u, r), (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.collectLabelingFields)(u, e)]);
          });
          yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.eachAlways)(e);
        }

        for (const s of p) s.error && P.error(s.error);

        (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.collectField)(u, r, i), e && "displayField" in t && t.displayField && (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.collectField)(u, r, t.displayField);
        const f = Array.from(u).sort();

        _this2._set("requiredFields", f);
      })();
    }

    validateFetchPopupFeatures(e) {
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(e)) return null;

      for (const t of e.clientGraphics) {
        const i = t.layer;
        if ("popupEnabled" in i && !i.popupEnabled) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("featurelayerview:fetchPopupFeatures", "Popups are disabled", {
          layer: i
        });

        if ("popupTemplate" in i) {
          if (!(0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_19__.getFetchPopupTemplate)(i, e)) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("featurelayerview:fetchPopupFeatures", "Layer does not define a popup template", {
            layer: i
          });
        }

        if (t.isAggregate && !(i.featureReduction && "popupTemplate" in i.featureReduction && i.featureReduction.popupEnabled && i.featureReduction.popupTemplate)) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("featurelayerview:fetchPopupFeatures", "Popups are disabled", {
          layer: i
        });
      }
    }

    fetchClientPopupFeatures(e) {
      var _this3 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e) ? e.clientGraphics : null;
        if (!t || 0 === t.length) return [];
        const r = new Array(t.length),
              i = new Map(),
              o = yield _this3.createPopupQuery(e);

        for (let a = 0; a < t.length; a++) {
          const n = t[a];

          if (n.isAggregate) {
            r[a] = n;
            continue;
          }

          const {
            layer: l
          } = n;
          if (!("popupEnabled" in l)) continue;
          const u = (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.unpackFieldNames)(_this3.layer.fieldsIndex, o.outFields),
                p = (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_19__.getFetchPopupTemplate)(l, e);
          if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(p)) continue;
          const f = yield _this3._loadArcadeModules(p);
          f && f.arcadeUtils.hasGeometryOperations(p) || !(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.featureHasFields)(u, n) ? i.set(n.getObjectId(), a) : r[a] = n;
        }

        if ("stream" === _this3.layer.type || 0 === i.size) return r.filter(Boolean);
        o.objectIds = Array.from(i.keys());

        try {
          const e = yield _this3.layer.queryFeatures(o);

          for (const t of e.features) {
            r[i.get(t.getObjectId())] = t;
          }
        } catch {}

        return r.filter(Boolean);
      })();
    }

    createPopupQuery(e) {
      var _this4 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const t = _this4.layer.createQuery(),
              r = new Set();

        let i = !1;
        const o = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e) && e.clientGraphics ? e.clientGraphics.map(e => e.layer) : [_this4.layer];

        for (const a of o) {
          if (!("popupEnabled" in a)) continue;
          const t = (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_19__.getFetchPopupTemplate)(a, e);
          if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(t)) continue;
          const o = yield _this4._loadArcadeModules(t),
                n = o && o.arcadeUtils.hasGeometryOperations(t);
          i = !("point" !== _this4.layer.geometryType && !n);
          const l = yield (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_19__.getRequiredFields)(_this4.layer, t);

          for (const e of l) r.add(e);
        }

        if (t.returnGeometry = i, t.returnZ = i, t.returnM = i, t.outFields = Array.from(r), t.outSpatialReference = _this4.view.spatialReference, "feature" === _this4.layer.type) {
          const e = (0,_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_20__.getFloorFilterClause)(_this4);

          (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e) && (t.where = t.where ? `(${t.where}) AND (${e})` : e);
        }

        return t;
      })();
    }

    canResume() {
      return !!super.canResume() && (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(this.timeExtent) || !this.timeExtent.isEmpty);
    }

  };
  return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], O.prototype, "_updatingRequiredFieldsPromise", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
    readOnly: !0
  })], O.prototype, "availableFields", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], O.prototype, "effect", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
    type: _layers_support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_14__.default
  })], O.prototype, "featureEffect", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
    type: _layers_support_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_15__.default
  })], O.prototype, "filter", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_13__.combinedViewLayerTimeExtentProperty)], O.prototype, "timeExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], O.prototype, "layer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
    type: Number
  })], O.prototype, "maximumNumberOfFeatures", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
    readOnly: !0,
    type: Boolean
  })], O.prototype, "maximumNumberOfFeaturesExceeded", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
    readOnly: !0
  })], O.prototype, "requiredFields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], O.prototype, "suspended", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], O.prototype, "view", void 0), O = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__.subclass)("esri.views.layers.FeatureLayerView")], O), O;
};



/***/ }),

/***/ 26263:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefreshableLayerView": () => (/* binding */ i),
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/watchUtils.js */ 11652);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add((0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_3__.on)(this,"layer","refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAbortError)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.default.getLogger(this.declaredClass).error(r)}))})),"RefreshableLayerView")}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],c.prototype,"layer",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.mixins.RefreshableLayerView")],c),c};


/***/ }),

/***/ 76388:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/popupUtils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFetchPopupTemplate": () => (/* binding */ d),
/* harmony export */   "getRequiredFields": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layers/support/fieldUtils.js */ 81451);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



function t(_x) {
  return _t.apply(this, arguments);
}

function _t() {
  _t = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, d = t.popupTemplate) {
    if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(d)) return [];
    const i = yield d.getRequiredFields(t.fieldsIndex),
          {
      lastEditInfoEnabled: n
    } = d,
          {
      objectIdField: s,
      typeIdField: a,
      globalIdField: o,
      relationships: u
    } = t;
    if (i.includes("*")) return ["*"];
    const f = n ? yield (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__.getFeatureEditFields)(t) : [],
          r = (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__.fixFields)(t.fieldsIndex, [...i, ...f]);
    return a && r.push(a), r && s && t.fieldsIndex.has(s) && -1 === r.indexOf(s) && r.push(s), r && o && t.fieldsIndex.has(o) && -1 === r.indexOf(o) && r.push(o), u && u.forEach(e => {
      const {
        keyField: p
      } = e;
      r && p && t.fieldsIndex.has(p) && -1 === r.indexOf(p) && r.push(p);
    }), r;
  });
  return _t.apply(this, arguments);
}

function d(p, l) {
  return p.popupTemplate ? p.popupTemplate : (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(l) && l.defaultPopupTemplateEnabled && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(p.defaultPopupTemplate) ? p.defaultPopupTemplate : null;
}



/***/ }),

/***/ 7380:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/support/drapedUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createQueryGeometry": () => (/* binding */ a),
/* harmony export */   "intersectsDrapedGeometry": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/unitUtils.js */ 55612);
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ 48109);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(t,n,a,o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__.default){let s;if("2d"===a.type)s=n*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(o)&&!o.equals(a.spatialReference)?(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__.getMetersPerUnitForSR)(o)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__.getMetersPerUnitForSR)(a.spatialReference):n*i}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}function o(e,r,i){const o=i.toMap(e);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(o))return!1;return a(o,(0,_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_3__.calculateTolerance)(),i,s).intersects(r)}const s=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__.default;


/***/ })

}]);
//# sourceMappingURL=4424.8a0ddf8e11a4f3db75ef.js.map