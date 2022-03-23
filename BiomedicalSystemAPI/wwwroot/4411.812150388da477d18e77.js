"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[4411],{

/***/ 89778:
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat32.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ e),
/* harmony export */   "m": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let s=(r&&r.dstIndex?r.dstIndex:0)*f,u=(r&&r.srcIndex?r.srcIndex:0)*o;for(let p=0;p<c;++p){for(let e=0;e<9;++e)d[s+e]=n[u+e];s+=f,u+=o}}const t=Object.freeze({__proto__:null,copy:e});


/***/ }),

/***/ 4105:
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat42.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ e),
/* harmony export */   "m": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let s=(r&&r.dstIndex?r.dstIndex:0)*f,u=(r&&r.srcIndex?r.srcIndex:0)*o;for(let p=0;p<c;++p){for(let e=0;e<16;++e)d[s+e]=n[u+e];s+=f,u+=o}}const t=Object.freeze({__proto__:null,copy:e});


/***/ }),

/***/ 58653:
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/scalar.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ e),
/* harmony export */   "m": () => (/* binding */ t),
/* harmony export */   "s": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t,n){const r=e.typedBuffer,o=e.typedBufferStride,c=t.typedBuffer,d=t.typedBufferStride,f=n?n.count:t.count;let s=(n&&n.dstIndex?n.dstIndex:0)*o,u=(n&&n.srcIndex?n.srcIndex:0)*d;for(let p=0;p<f;++p)r[s]=c[u],s+=o,u+=d}function t(e,t){const n=e.count;t||(t=new e.TypedArrayConstructor(n));for(let r=0;r<n;r++)t[r]=e.get(r);return t}const n=Object.freeze({__proto__:null,copy:e,makeDense:t});


/***/ }),

/***/ 14121:
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec22.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ f),
/* harmony export */   "f": () => (/* binding */ d),
/* harmony export */   "n": () => (/* binding */ r),
/* harmony export */   "v": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/support/buffer/types.js */ 81681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function f(e,t,n){const f=e.typedBuffer,r=e.typedBufferStride,d=t.typedBuffer,o=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*r,s=(n&&n.srcIndex?n.srcIndex:0)*o;for(let c=0;c<u;++c)f[l]=d[s],f[l+1]=d[s+1],l+=r,s+=o}function r(r,d,o){const u=r.typedBuffer,l=r.typedBufferStride,s=d.typedBuffer,c=d.typedBufferStride,p=o?o.count:d.count;let y=(o&&o.dstIndex?o.dstIndex:0)*l,i=(o&&o.srcIndex?o.srcIndex:0)*c;if((0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__.isInteger)(d.elementType)){const e=(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__.maximumValue)(d.elementType);if((0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__.isSigned)(d.elementType))for(let t=0;t<p;++t)u[y]=Math.max(s[i]/e,-1),u[y+1]=Math.max(s[i+1]/e,-1),y+=l,i+=c;else for(let t=0;t<p;++t)u[y]=s[i]/e,u[y+1]=s[i+1]/e,y+=l,i+=c}else f(r,d,o);return r}function d(e,t,n,f){var r,d;const o=e.typedBuffer,u=e.typedBufferStride,l=null!=(r=null==f?void 0:f.count)?r:e.count;let s=(null!=(d=null==f?void 0:f.dstIndex)?d:0)*u;for(let c=0;c<l;++c)o[s]=t,o[s+1]=n,s+=u}const o=Object.freeze({__proto__:null,copy:f,normalizeIntegerBuffer:r,fill:d});


/***/ }),

/***/ 14567:
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec42.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ o),
/* harmony export */   "b": () => (/* binding */ t),
/* harmony export */   "s": () => (/* binding */ f),
/* harmony export */   "t": () => (/* binding */ r),
/* harmony export */   "v": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/support/buffer/math/common.js */ 6525);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,r,f){if(t.count!==r.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__.logger.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],m=f[9],B=f[10],h=f[11],l=f[12],S=f[13],b=f[14],v=f[15],M=t.typedBuffer,_=t.typedBufferStride,g=r.typedBuffer,j=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*_,r=e*j,f=g[r],o=g[r+1],x=g[r+2],z=g[r+3];M[t]=n*f+c*o+y*x+l*z,M[t+1]=u*f+i*o+m*x+S*z,M[t+2]=d*f+a*o+B*x+b*z,M[t+3]=s*f+p*o+h*x+v*z}}function r(t,r,f){if(t.count!==r.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__.logger.error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],m=t.typedBuffer,B=t.typedBufferStride,h=r.typedBuffer,l=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*B,r=e*l,f=h[r],o=h[r+1],S=h[r+2],b=h[r+3];m[t]=n*f+s*o+a*S,m[t+1]=u*f+c*o+p*S,m[t+2]=d*f+i*o+y*S,m[t+3]=b}}function f(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=r*u[t],o[e+1]=r*u[t+1],o[e+2]=r*u[t+2],o[e+3]=r*u[t+3]}}function o(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let s=0;s<f;s++){const e=s*n,t=s*d;o[e]=u[t]>>r,o[e+1]=u[t+1]>>r,o[e+2]=u[t+2]>>r,o[e+3]=u[t+3]>>r}}const n=Object.freeze({__proto__:null,transformMat4:t,transformMat3:r,scale:f,shiftRight:o});


/***/ }),

/***/ 9168:
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec43.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ e),
/* harmony export */   "f": () => (/* binding */ t),
/* harmony export */   "v": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t,n){const d=e.typedBuffer,f=e.typedBufferStride,o=t.typedBuffer,r=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*f,c=(n&&n.srcIndex?n.srcIndex:0)*r;for(let s=0;s<u;++s)d[l]=o[c],d[l+1]=o[c+1],d[l+2]=o[c+2],d[l+3]=o[c+3],l+=f,c+=r}function t(e,t,n,d,f,o){var r,u;const l=e.typedBuffer,c=e.typedBufferStride,s=null!=(r=null==o?void 0:o.count)?r:e.count;let p=(null!=(u=null==o?void 0:o.dstIndex)?u:0)*c;for(let i=0;i<s;++i)l[p]=t,l[p+1]=n,l[p+2]=d,l[p+3]=f,p+=c}const n=Object.freeze({__proto__:null,copy:e,fill:t});


/***/ }),

/***/ 7731:
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec4f64.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ l),
/* harmony export */   "U": () => (/* binding */ N),
/* harmony export */   "Z": () => (/* binding */ _),
/* harmony export */   "a": () => (/* binding */ u),
/* harmony export */   "b": () => (/* binding */ t),
/* harmony export */   "c": () => (/* binding */ n),
/* harmony export */   "d": () => (/* binding */ e),
/* harmony export */   "e": () => (/* binding */ c),
/* harmony export */   "f": () => (/* binding */ r),
/* harmony export */   "g": () => (/* binding */ i),
/* harmony export */   "h": () => (/* binding */ f),
/* harmony export */   "i": () => (/* binding */ U),
/* harmony export */   "j": () => (/* binding */ I),
/* harmony export */   "k": () => (/* binding */ O),
/* harmony export */   "o": () => (/* binding */ o),
/* harmony export */   "u": () => (/* binding */ s),
/* harmony export */   "v": () => (/* binding */ T),
/* harmony export */   "z": () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){return[0,0,0,0]}function t(n){return[n[0],n[1],n[2],n[3]]}function r(n,t,r,e){return[n,t,r,e]}function e(t){const r=n(),e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,4)}function a(){return n()}function o(){return r(1,1,1,1)}function s(){return r(1,0,0,0)}function c(){return r(0,1,0,0)}function i(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}const _=a(),l=o(),N=s(),U=c(),I=i(),O=f(),T=Object.freeze({__proto__:null,create:n,clone:t,fromValues:r,fromArray:e,createView:u,zeros:a,ones:o,unitX:s,unitY:c,unitZ:i,unitW:f,ZEROS:_,ONES:l,UNIT_X:N,UNIT_Y:U,UNIT_Z:I,UNIT_W:O});


/***/ }),

/***/ 29067:
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/ObjectStack.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectStack": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextTick.js */ 31230);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this.grow()}get(){return 0===this._itemsPtr&&(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)((()=>this.reset())),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this.allocator())}}const i=1024;


/***/ }),

/***/ 8883:
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/VectorStack.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorStack": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextTick.js */ 31230);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/mat3f64.js */ 30641);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/mat4f64.js */ 25336);
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/quatf64.js */ 49635);
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/vec2f64.js */ 41558);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chunks/vec3f64.js */ 33989);
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chunks/vec4f64.js */ 7731);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m{constructor(t,e,s){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize)}get(){0===this._itemsPtr&&(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)((()=>this.reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=a){return new m(16,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_4__.c,t)}static createVec3f64(t=a){return new m(24,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.b,t)}static createVec4f64(t=a){return new m(32,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_6__.a,t)}static createMat3f64(t=a){return new m(72,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.a,t)}static createMat4f64(t=a){return new m(128,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__.a,t)}static createQuatf64(t=a){return new m(32,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_3__.c,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const a=4096;


/***/ }),

/***/ 81681:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/types.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementTypeSize": () => (/* binding */ e),
/* harmony export */   "isInteger": () => (/* binding */ c),
/* harmony export */   "isSigned": () => (/* binding */ r),
/* harmony export */   "maximumValue": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function r(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function c(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function u(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}


/***/ }),

/***/ 66094:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/utils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mat3": () => (/* reexport safe */ _chunks_mat32_js__WEBPACK_IMPORTED_MODULE_1__.m),
/* harmony export */   "mat4": () => (/* reexport safe */ _chunks_mat42_js__WEBPACK_IMPORTED_MODULE_2__.m),
/* harmony export */   "scalar": () => (/* reexport safe */ _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_3__.s),
/* harmony export */   "vec2": () => (/* reexport safe */ _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_4__.v),
/* harmony export */   "vec3": () => (/* reexport safe */ _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_5__.v),
/* harmony export */   "vec4": () => (/* reexport safe */ _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_6__.v),
/* harmony export */   "createBuffer": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ 81681);
/* harmony import */ var _chunks_mat32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat32.js */ 89778);
/* harmony import */ var _chunks_mat42_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat42.js */ 4105);
/* harmony import */ var _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/scalar.js */ 58653);
/* harmony import */ var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/vec22.js */ 14121);
/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/vec33.js */ 18635);
/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/vec43.js */ 9168);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(s,r){return new s(new ArrayBuffer(r*s.ElementCount*(0,_types_js__WEBPACK_IMPORTED_MODULE_0__.elementTypeSize)(s.ElementType)))}


/***/ }),

/***/ 51412:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/lineSegment.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closestLineSegmentDistance2": () => (/* binding */ S),
/* harmony export */   "closestLineSegmentPoint": () => (/* binding */ k),
/* harmony export */   "closestRayDistance2": () => (/* binding */ B),
/* harmony export */   "copy": () => (/* binding */ h),
/* harmony export */   "create": () => (/* binding */ v),
/* harmony export */   "distance": () => (/* binding */ M),
/* harmony export */   "distance2": () => (/* binding */ b),
/* harmony export */   "fromPoints": () => (/* binding */ l),
/* harmony export */   "fromValues": () => (/* binding */ m),
/* harmony export */   "pointAt": () => (/* binding */ j),
/* harmony export */   "projectPoint": () => (/* binding */ d),
/* harmony export */   "projectPointClamp": () => (/* binding */ A),
/* harmony export */   "wrap": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ 88415);
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ObjectStack.js */ 29067);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3.js */ 63702);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ 33989);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vectorStacks.js */ 6279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function v(t){return t?{origin:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.a)(t.origin),vector:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.a)(t.vector)}:{origin:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),vector:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)()}}function p(t,r){const n=x.get();return n.origin=t,n.vector=r,n}function h(t,r=v()){return m(t.origin,t.vector,r)}function m(t,r,o=v()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(o.origin,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(o.vector,r),o}function l(t,r,i=v()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(i.origin,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(i.vector,r,t),i}function b(r,n){const c=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),n,r.origin),u=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.d)(r.vector,c),s=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.d)(r.vector,r.vector),a=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(u/s,0,1),g=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),r.vector,a),c);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.d)(g,g)}function M(t,r){return Math.sqrt(b(t,r))}function d(t,r,n){return A(t,r,0,1,n)}function j(t,r,n){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(n,t.origin,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)(n,t.vector,r))}function A(r,n,s,a,g){const{vector:v,origin:p}=r,h=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),n,p),m=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.d)(v,h)/(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.p)(v);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)(g,v,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(m,s,a)),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(g,g,r.origin)}function B(t,r){if(q(t,p(r.origin,r.direction),!1,w)){const{tA:r,pB:n,distance2:o}=w;if(r>=0&&r<=1)return o;if(r<0)return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.h)(t.origin,n);if(r>1)return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.h)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),t.origin,t.vector),n)}return null}function k(t,r,o){return!!q(t,r,!0,w)&&((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(o,w.pA),!0)}function S(t,r){return q(t,r,!0,w)?w.distance2:null}function q(r,n,o,i){const e=1e-6,u=r.origin,a=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),u,r.vector),g=n.origin,v=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),g,n.vector),p=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),h=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get();if(p[0]=u[0]-g[0],p[1]=u[1]-g[1],p[2]=u[2]-g[2],h[0]=v[0]-g[0],h[1]=v[1]-g[1],h[2]=v[2]-g[2],Math.abs(h[0])<e&&Math.abs(h[1])<e&&Math.abs(h[2])<e)return!1;const m=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get();if(m[0]=a[0]-u[0],m[1]=a[1]-u[1],m[2]=a[2]-u[2],Math.abs(m[0])<e&&Math.abs(m[1])<e&&Math.abs(m[2])<e)return!1;const l=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],b=h[0]*m[0]+h[1]*m[1]+h[2]*m[2],M=p[0]*m[0]+p[1]*m[1]+p[2]*m[2],d=h[0]*h[0]+h[1]*h[1]+h[2]*h[2],j=(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])*d-b*b;if(Math.abs(j)<e)return!1;let A=(l*b-M*d)/j,B=(l+b*A)/d;o&&(A=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(A,0,1),B=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(B,0,1));const k=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),S=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get();return k[0]=u[0]+A*m[0],k[1]=u[1]+A*m[1],k[2]=u[2]+A*m[2],S[0]=g[0]+B*h[0],S[1]=g[1]+B*h[1],S[2]=g[2]+B*h[2],i.tA=A,i.tB=B,i.pA=k,i.pB=S,i.distance2=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.h)(k,S),!0}const w={tA:0,tB:0,pA:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),pB:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),distance2:0},x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__.ObjectStack((()=>({origin:null,vector:null})));


/***/ }),

/***/ 17710:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/triangle.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "area2d": () => (/* binding */ w),
/* harmony export */   "areaPoints2d": () => (/* binding */ S),
/* harmony export */   "areaPoints3d": () => (/* binding */ M),
/* harmony export */   "copy": () => (/* binding */ k),
/* harmony export */   "create": () => (/* binding */ j),
/* harmony export */   "distance2": () => (/* binding */ b),
/* harmony export */   "fromValues": () => (/* binding */ v),
/* harmony export */   "intersectRay": () => (/* binding */ d),
/* harmony export */   "wrap": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ObjectStack.js */ 29067);
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec2.js */ 68292);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec3.js */ 63702);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ 33989);
/* harmony import */ var _lineSegment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lineSegment.js */ 51412);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vectorStacks.js */ 6279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function j(t){return t?{p0:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.a)(t.p0),p1:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.a)(t.p1),p2:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.a)(t.p2)}:{p0:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),p1:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),p2:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)()}}function h(t,n,r){const e=x.get();return e.p0=t,e.p1=n,e.p2=r,e}function k(t,n=j()){return v(t.p0,t.p1,t.p2,n)}function v(t,n,e,p=j()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(p.p0,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(p.p1,n),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(p.p2,e),p}function b(t,n){const r=t.p0,s=t.p1,c=t.p2,u=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),s,r),i=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),c,s),f=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),r,c),a=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),n,r),j=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),n,s),h=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),n,c),k=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(u,u,f),v=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.d)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),u,k),a),b=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.d)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),i,k),j),d=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.d)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),f,k),h);if(v>0&&b>0&&d>0){const t=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.d)(k,a);return t*t/(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.d)(k,k)}const S=(0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__.distance2)((0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__.fromValues)(r,u,q.get()),n),w=(0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__.distance2)((0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__.fromValues)(s,i,q.get()),n),M=(0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__.distance2)((0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__.fromValues)(c,f,q.get()),n);return Math.min(S,w,M)}function d(t,n,r){const e=1e-5,{direction:p,origin:o}=n,{p0:u,p1:i,p2:f}=t,a=i[0]-u[0],g=i[1]-u[1],m=i[2]-u[2],l=f[0]-u[0],j=f[1]-u[1],h=f[2]-u[2],k=p[1]*h-j*p[2],v=p[2]*l-h*p[0],b=p[0]*j-l*p[1],d=a*k+g*v+m*b;if(d>-e&&d<e)return!1;const S=1/d,w=o[0]-u[0],M=o[1]-u[1],q=o[2]-u[2],x=S*(w*k+M*v+q*b);if(x<0||x>1)return!1;const O=M*m-g*q,V=q*a-m*w,y=w*g-a*M,z=S*(p[0]*O+p[1]*V+p[2]*y);if(z<0||x+z>1)return!1;if(r){(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)(r,p,S*(l*O+j*V+h*y)),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(r,o,r)}return!0}function S(t,r,e){const p=(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__.b)(t,r),o=(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__.b)(r,e),s=(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_1__.b)(e,t),c=(p+o+s)/2,u=c*(c-p)*(c-o)*(c-s);return u<=0?0:Math.sqrt(u)}function w(t){return S(t.p0,t.p1,t.p2)}function M(t,n,r){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(O,n,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(V,r,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.l)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(O,O,V))/2}const q=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__.ObjectStack(_lineSegment_js__WEBPACK_IMPORTED_MODULE_4__.create),x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__.ObjectStack((()=>({p0:null,p1:null,p2:null}))),O=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),V=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)();


/***/ }),

/***/ 6279:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/vectorStacks.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sm3d": () => (/* binding */ a),
/* harmony export */   "sm4d": () => (/* binding */ f),
/* harmony export */   "sq4d": () => (/* binding */ o),
/* harmony export */   "sv2d": () => (/* binding */ t),
/* harmony export */   "sv3d": () => (/* binding */ c),
/* harmony export */   "sv4d": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/VectorStack.js */ 8883);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__.VectorStack.createVec2f64(),c=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__.VectorStack.createVec3f64(),r=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__.VectorStack.createVec4f64(),a=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__.VectorStack.createMat3f64(),f=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__.VectorStack.createMat4f64(),o=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__.VectorStack.createQuatf64();


/***/ }),

/***/ 9469:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/DefaultErrorContext.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultErrorContext": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.default.getLogger("esri.views.3d.glTF");class t{error(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("gltf-loader-error",e)}errorUnsupported(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(r,e){r&&this.errorUnsupported(e)}assert(r,e){r||this.error(e)}warn(r){o.warn(r)}warnUnsupported(r){this.warn("[Unsupported Feature] "+r)}warnUnsupportedIf(r,e){r&&this.warnUnsupported(e)}}


/***/ }),

/***/ 39685:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLoadingContext": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../request.js */ 30351);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/asyncUtils.js */ 97073);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/urlUtils.js */ 30164);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/







class n {
  constructor(r) {
    this.streamDataRequester = r;
  }

  loadJSON(r, e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this.load("json", r, e);
    })();
  }

  loadBinary(r, e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.isDataProtocol)(r) ? ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(e), (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.dataToArrayBuffer)(r)) : _this2.load("binary", r, e);
    })();
  }

  loadImage(r, e) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this3.load("image", r, e);
    })();
  }

  load(t, i, m) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(_this4.streamDataRequester)) return (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(i, {
        responseType: c[t]
      })).data;
      const n = yield (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__.result)(_this4.streamDataRequester.request(i, t, m));
      if (!0 === n.ok) return n.value;
      throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAbortError)(n.error), new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("", `Request for resource failed: ${n.error}`);
    })();
  }

}

const c = {
  image: "image",
  binary: "array-buffer",
  json: "json"
};


/***/ }),

/***/ 94022:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeMaterialParameters": () => (/* binding */ e),
/* harmony export */   "makeTextureSource": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function t(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}


/***/ }),

/***/ 91252:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BinaryStreamReader": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t){this.data=t,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const t=this.offset4;return this.offset4+=1,this.dataUint32[t]}readUint8Array(t){const s=4*this.offset4;return this.offset4+=t/4,new Uint8Array(this.data,s,t)}remainingBytes(){return this.data.byteLength-4*this.offset4}}


/***/ }),

/***/ 45345:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resource": () => (/* binding */ G)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/compilerUtils.js */ 25618);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/MapUtils.js */ 68305);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ 30164);
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/Version.js */ 63772);
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ 60411);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ 25336);
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/quat.js */ 3456);
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../chunks/quatf64.js */ 49635);
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ 79399);
/* harmony import */ var _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/scalar.js */ 58653);
/* harmony import */ var _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BinaryStreamReader.js */ 91252);
/* harmony import */ var _fillDefaults_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fillDefaults.js */ 71201);
/* harmony import */ var _pathUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pathUtils.js */ 8805);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/













const D = {
  MAGIC: 1179937895,
  CHUNK_TYPE_JSON: 1313821514,
  CHUNK_TYPE_BIN: 5130562,
  MIN_HEADER_LENGTH: 20
};

class G {
  constructor(e, t, r, n, s) {
    this.context = e, this.errorContext = t, this.uri = r, this.json = n, this.glbBuffer = s, this.bufferLoaders = new Map(), this.textureLoaders = new Map(), this.textureCache = new Map(), this.materialCache = new Map(), this.nodeParentMap = new Map(), this.nodeTransformCache = new Map(), this.baseUri = (0,_pathUtils_js__WEBPACK_IMPORTED_MODULE_13__.splitURI)(this.uri).dirPart, this.checkVersionSupported(), this.checkRequiredExtensionsSupported(), t.errorUnsupportedIf(null == n.scenes, "Scenes must be defined."), t.errorUnsupportedIf(null == n.meshes, "Meshes must be defined"), t.errorUnsupportedIf(null == n.nodes, "Nodes must be defined."), this.computeNodeParents();
  }

  static load(e, t, o, a) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if ((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.isDataProtocol)(o)) {
        const r = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.dataComponents)(o);
        if ("model/gltf-binary" !== r.mediaType) try {
          const n = JSON.parse(r.isBase64 ? atob(r.data) : r.data);
          return new G(e, t, o, n);
        } catch {}
        const a = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.dataToArrayBuffer)(o);
        if (G.isGLBData(a)) return _this.fromGLBData(e, t, o, a);
      }

      if (o.endsWith(".gltf")) {
        const r = yield e.loadJSON(o, a);
        return new G(e, t, o, r);
      }

      const i = yield e.loadBinary(o, a);
      if (G.isGLBData(i)) return _this.fromGLBData(e, t, o, i);
      const u = yield e.loadJSON(o, a);
      return new G(e, t, o, u);
    })();
  }

  static isGLBData(e) {
    const t = new _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_11__.BinaryStreamReader(e);
    return t.remainingBytes() >= 4 && t.readUint32() === D.MAGIC;
  }

  static fromGLBData(e, t, r, n) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const s = yield G.parseGLBData(t, n);
      return new G(e, t, r, s.json, s.binaryData);
    })();
  }

  static parseGLBData(e, t) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = new _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_11__.BinaryStreamReader(t);
      e.assert(r.remainingBytes() >= 12, "GLB binary data is insufficiently large.");
      const n = r.readUint32(),
            s = r.readUint32(),
            o = r.readUint32();
      e.assert(n === D.MAGIC, "Magic first 4 bytes do not fit to expected GLB value."), e.assert(t.byteLength >= o, "GLB binary data is smaller than header specifies."), e.errorUnsupportedIf(2 !== s, "An unsupported GLB container version was detected. Only version 2 is supported.");
      let a,
          i,
          u = 0;

      for (; r.remainingBytes() >= 8;) {
        const t = r.readUint32(),
              n = r.readUint32();
        0 === u ? (e.assert(n === D.CHUNK_TYPE_JSON, "First GLB chunk must be JSON."), e.assert(t >= 0, "No JSON data found."), a = yield q(r.readUint8Array(t))) : 1 === u ? (e.errorUnsupportedIf(n !== D.CHUNK_TYPE_BIN, "Second GLB chunk expected to be BIN."), i = r.readUint8Array(t)) : e.warnUnsupported("More than 2 GLB chunks detected. Skipping."), u += 1;
      }

      return a || e.error("No GLB JSON chunk detected."), {
        json: a,
        binaryData: i
      };
    })();
  }

  getBuffer(e, t) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = _this2.json.buffers[e],
            n = _this2.errorContext;
      if (null == r.uri) return n.assert(null != _this2.glbBuffer, "GLB buffer not present"), _this2.glbBuffer;
      const s = yield _this2.getBufferLoader(e, t);
      return n.assert(s.byteLength === r.byteLength, "Buffer byte lengths should match."), s;
    })();
  }

  getBufferLoader(e, t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = _this3.bufferLoaders.get(e);

      if (r) return r;

      const n = _this3.json.buffers[e],
            s = _this3.context.loadBinary(_this3.resolveUri(n.uri), t).then(e => new Uint8Array(e));

      return _this3.bufferLoaders.set(e, s), s;
    })();
  }

  getAccessor(e, t) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = _this4.errorContext;
      r.errorUnsupportedIf(!_this4.json.accessors, "Accessors missing.");
      const n = _this4.json.accessors[e];
      r.errorUnsupportedIf(null == (null == n ? void 0 : n.bufferView), "Some accessor does not specify a bufferView."), r.errorUnsupportedIf(n.type in ["MAT2", "MAT3", "MAT4"], `AttributeType ${n.type} is not supported`);
      const s = _this4.json.bufferViews[n.bufferView],
            o = yield _this4.getBuffer(s.buffer, t),
            a = k[n.type],
            i = V[n.componentType],
            u = a * i,
            c = s.byteStride || u;
      return {
        raw: o.buffer,
        byteStride: c,
        byteOffset: o.byteOffset + (s.byteOffset || 0) + (n.byteOffset || 0),
        entryCount: n.count,
        isDenselyPacked: c === u,
        componentCount: a,
        componentByteSize: i,
        componentType: n.componentType,
        min: n.min,
        max: n.max,
        normalized: !!n.normalized
      };
    })();
  }

  getIndexData(e, t) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (null == e.indices) return null;
      const r = yield _this5.getAccessor(e.indices, t);
      if (r.isDenselyPacked) switch (r.componentType) {
        case 5121:
          return new Uint8Array(r.raw, r.byteOffset, r.entryCount);

        case 5123:
          return new Uint16Array(r.raw, r.byteOffset, r.entryCount);

        case 5125:
          return new Uint32Array(r.raw, r.byteOffset, r.entryCount);
      } else switch (r.componentType) {
        case 5121:
          return (0,_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_10__.m)(_this5.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewUint8, r));

        case 5123:
          return (0,_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_10__.m)(_this5.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewUint16, r));

        case 5125:
          return (0,_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_10__.m)(_this5.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewUint32, r));
      }
    })();
  }

  getPositionData(e, t) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = _this6.errorContext;
      r.errorUnsupportedIf(null == e.attributes.POSITION, "No POSITION vertex data found.");
      const n = yield _this6.getAccessor(e.attributes.POSITION, t);
      return r.errorUnsupportedIf(5126 !== n.componentType, "Expected type FLOAT for POSITION vertex attribute, but found " + X[n.componentType]), r.errorUnsupportedIf(3 !== n.componentCount, "POSITION vertex attribute must have 3 components, but found " + n.componentCount.toFixed()), _this6.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f, n);
    })();
  }

  getNormalData(e, t) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = _this7.errorContext;
      r.assert(null != e.attributes.NORMAL, "No NORMAL vertex data found.");
      const n = yield _this7.getAccessor(e.attributes.NORMAL, t);
      return r.errorUnsupportedIf(5126 !== n.componentType, "Expected type FLOAT for NORMAL vertex attribute, but found " + X[n.componentType]), r.errorUnsupportedIf(3 !== n.componentCount, "NORMAL vertex attribute must have 3 components, but found " + n.componentCount.toFixed()), _this7.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f, n);
    })();
  }

  getTangentData(e, t) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = _this8.errorContext;
      r.assert(null != e.attributes.TANGENT, "No TANGENT vertex data found.");
      const n = yield _this8.getAccessor(e.attributes.TANGENT, t);
      return r.errorUnsupportedIf(5126 !== n.componentType, "Expected type FLOAT for TANGENT vertex attribute, but found " + X[n.componentType]), r.errorUnsupportedIf(4 !== n.componentCount, "TANGENT vertex attribute must have 4 components, but found " + n.componentCount.toFixed()), new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec4f(n.raw, n.byteOffset, n.byteStride, n.byteOffset + n.byteStride * n.entryCount);
    })();
  }

  getTextureCoordinates(e, t) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = _this9.errorContext;
      r.assert(null != e.attributes.TEXCOORD_0, "No TEXCOORD_0 vertex data found.");
      const n = yield _this9.getAccessor(e.attributes.TEXCOORD_0, t);
      return r.errorUnsupportedIf(2 !== n.componentCount, "TEXCOORD_0 vertex attribute must have 2 components, but found " + n.componentCount.toFixed()), 5126 === n.componentType ? _this9.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec2f, n) : (r.errorUnsupportedIf(!n.normalized, "Integer component types are only supported for a normalized accessor for TEXCOORD_0."), J(n));
    })();
  }

  getVertexColors(e, t) {
    var _this10 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = _this10.errorContext;
      r.assert(null != e.attributes.COLOR_0, "No COLOR_0 vertex data found.");
      const n = yield _this10.getAccessor(e.attributes.COLOR_0, t);

      if (r.errorUnsupportedIf(4 !== n.componentCount && 3 !== n.componentCount, "COLOR_0 attribute must have 3 or 4 components, but found " + n.componentCount.toFixed()), 4 === n.componentCount) {
        if (5126 === n.componentType) return _this10.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec4f, n);
        if (5121 === n.componentType) return _this10.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec4u8, n);
        if (5123 === n.componentType) return _this10.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec4u16, n);
      } else if (3 === n.componentCount) {
        if (5126 === n.componentType) return _this10.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f, n);
        if (5121 === n.componentType) return _this10.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3u8, n);
        if (5123 === n.componentType) return _this10.wrapAccessor(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3u16, n);
      }

      r.errorUnsupported("Unsupported component type for COLOR_0 attribute: " + X[n.componentType]);
    })();
  }

  hasPositions(e) {
    return void 0 !== e.attributes.POSITION;
  }

  hasNormals(e) {
    return void 0 !== e.attributes.NORMAL;
  }

  hasVertexColors(e) {
    return void 0 !== e.attributes.COLOR_0;
  }

  hasTextureCoordinates(e) {
    return void 0 !== e.attributes.TEXCOORD_0;
  }

  hasTangents(e) {
    return void 0 !== e.attributes.TANGENT;
  }

  getMaterial(e, t, r) {
    var _this11 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let n = _this11.materialCache.get(e.material);

      if (!n) {
        const s = null != e.material ? (0,_fillDefaults_js__WEBPACK_IMPORTED_MODULE_12__.material)(_this11.json.materials[e.material]) : (0,_fillDefaults_js__WEBPACK_IMPORTED_MODULE_12__.material)(),
              o = s.pbrMetallicRoughness,
              a = _this11.hasVertexColors(e),
              i = _this11.getTexture(o.baseColorTexture, t),
              u = _this11.getTexture(s.normalTexture, t),
              c = r ? _this11.getTexture(s.occlusionTexture, t) : null,
              p = r ? _this11.getTexture(s.emissiveTexture, t) : null,
              f = r ? _this11.getTexture(o.metallicRoughnessTexture, t) : null,
              d = null != e.material ? e.material : -1;

        n = {
          alphaMode: s.alphaMode,
          alphaCutoff: s.alphaCutoff,
          color: o.baseColorFactor,
          doubleSided: !!s.doubleSided,
          colorTexture: yield i,
          normalTexture: yield u,
          name: s.name,
          id: d,
          occlusionTexture: yield c,
          emissiveTexture: yield p,
          emissiveFactor: s.emissiveFactor,
          metallicFactor: o.metallicFactor,
          roughnessFactor: o.roughnessFactor,
          metallicRoughnessTexture: yield f,
          vertexColors: a,
          ESRI_externalColorMixMode: s.extras.ESRI_externalColorMixMode
        };
      }

      return n;
    })();
  }

  getTexture(e, r) {
    var _this12 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!e) return null;

      _this12.errorContext.errorUnsupportedIf(0 !== (e.texCoord || 0), "Only TEXCOORD with index 0 is supported.");

      const n = e.index,
            s = _this12.errorContext,
            o = _this12.json.textures[n],
            a = (0,_fillDefaults_js__WEBPACK_IMPORTED_MODULE_12__.textureSampler)(null != o.sampler ? _this12.json.samplers[o.sampler] : {});
      s.errorUnsupportedIf(null == o.source, "Source is expected to be defined for a texture.");
      const i = _this12.json.images[o.source],
            u = yield _this12.loadTextureImageData(n, o, r);
      return (0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__.getOrCreateMapValue)(_this12.textureCache, n, () => {
        const e = e => 33071 === e || 33648 === e || 10497 === e,
              t = e => (s.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`), 10497);

        return {
          data: u,
          wrapS: e(a.wrapS) ? a.wrapS : t(a.wrapS),
          wrapT: e(a.wrapT) ? a.wrapT : t(a.wrapT),
          minFilter: a.minFilter,
          name: i.name,
          id: n
        };
      });
    })();
  }

  getNodeTransform(e) {
    if (void 0 === e) return P;
    let t = this.nodeTransformCache.get(e);

    if (!t) {
      const r = this.getNodeTransform(this.getNodeParent(e)),
            n = this.json.nodes[e];
      n.matrix ? t = (0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_5__.m)((0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(), r, n.matrix) : n.translation || n.rotation || n.scale ? (t = (0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__.b)(r), n.translation && (0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_5__.a)(t, t, n.translation), n.rotation && (F[3] = (0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_7__.g)(F, n.rotation), (0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_5__.e)(t, t, F[3], F)), n.scale && (0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_5__.f)(t, t, n.scale)) : t = r, this.nodeTransformCache.set(e, t);
    }

    return t;
  }

  wrapAccessor(e, t) {
    return new e(t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * (t.entryCount - 1) + t.componentByteSize * t.componentCount);
  }

  resolveUri(e) {
    return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.makeAbsolute)(e, this.baseUri);
  }

  getNodeParent(e) {
    return this.nodeParentMap.get(e);
  }

  checkVersionSupported() {
    const e = _core_Version_js__WEBPACK_IMPORTED_MODULE_4__.Version.parse(this.json.asset.version, "glTF");

    _.validate(e);
  }

  checkRequiredExtensionsSupported() {
    const e = this.json,
          t = this.errorContext;
    e.extensionsRequired && 0 !== e.extensionsRequired.length && t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: " + e.extensionsRequired.join(", "));
  }

  computeNodeParents() {
    this.json.nodes.forEach((e, t) => {
      e.children && e.children.forEach(e => {
        this.nodeParentMap.set(e, t);
      });
    });
  }

  loadTextureImageData(e, t, r) {
    var _this13 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const n = _this13.textureLoaders.get(e);

      if (n) return n;

      const s = _this13.createTextureLoader(t, r);

      return _this13.textureLoaders.set(e, s), s;
    })();
  }

  createTextureLoader(e, t) {
    var _this14 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = _this14.json.images[e.source];
      if (r.uri) return _this14.context.loadImage(_this14.resolveUri(r.uri), t);
      const n = _this14.errorContext;
      n.errorUnsupportedIf(null == r.bufferView, "Image bufferView must be defined."), n.errorUnsupportedIf(null == r.mimeType, "Image mimeType must be defined.");
      const s = _this14.json.bufferViews[r.bufferView],
            o = yield _this14.getBuffer(s.buffer, t);
      return n.errorUnsupportedIf(null != s.byteStride, "byteStride not supported for image buffer"), H(new Uint8Array(o.buffer, o.byteOffset + (s.byteOffset || 0), s.byteLength), r.mimeType);
    })();
  }

}

const _ = new _core_Version_js__WEBPACK_IMPORTED_MODULE_4__.Version(2, 0, "glTF"),
      P = (0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_5__.u)((0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(), Math.PI / 2),
      F = (0,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_8__.a)(),
      k = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4
},
      V = {
  5120: 1,
  5121: 1,
  5122: 2,
  5123: 2,
  5126: 4,
  5125: 4
};

function J(t) {
  switch (t.componentType) {
    case 5120:
      return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec2i8(t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);

    case 5121:
      return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec2u8(t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);

    case 5122:
      return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec2i16(t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);

    case 5123:
      return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec2u16(t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);

    case 5125:
      return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec2u32(t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);

    case 5126:
      return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec2f(t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);

    default:
      return void (0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_1__.neverReached)(t.componentType);
  }
}

function q(_x) {
  return _q.apply(this, arguments);
}

function _q() {
  _q = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    return new Promise((t, r) => {
      const n = new Blob([e]),
            s = new FileReader();
      s.onload = () => {
        const e = s.result;
        t(JSON.parse(e));
      }, s.onerror = e => {
        r(e);
      }, s.readAsText(n);
    });
  });
  return _q.apply(this, arguments);
}

function H(_x2, _x3) {
  return _H.apply(this, arguments);
}

function _H() {
  _H = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    return new Promise((r, n) => {
      const s = new Blob([e], {
        type: t
      }),
            o = URL.createObjectURL(s),
            a = new Image();
      a.addEventListener("load", () => {
        URL.revokeObjectURL(o), "decode" in a ? a.decode().then(() => r(a), () => r(a)) : r(a);
      }), a.addEventListener("error", e => {
        URL.revokeObjectURL(o), n(e);
      }), a.src = o;
    });
  });
  return _H.apply(this, arguments);
}

const X = {
  5120: "BYTE",
  5121: "UNSIGNED_BYTE",
  5122: "SHORT",
  5123: "UNSIGNED_SHORT",
  5125: "UNSIGNED_INT",
  5126: "FLOAT"
};


/***/ }),

/***/ 71201:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "material": () => (/* binding */ a),
/* harmony export */   "textureSampler": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/compilerUtils.js */ 25618);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},r={pbrMetallicRoughness:o,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},t={ESRI_externalColorMixMode:"tint"},a=(e={})=>{const a={...o,...e.pbrMetallicRoughness},i=l({...t,...e.extras});return{...r,...e,pbrMetallicRoughness:a,extras:i}};function l(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint"}return o}const i={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},s=e=>({...i,...e});


/***/ }),

/***/ 12569:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "triangleFanToTriangles": () => (/* binding */ i),
/* harmony export */   "triangleStripToTriangles": () => (/* binding */ o),
/* harmony export */   "trianglesToTriangles": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ 65218);
/* harmony import */ var _webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../webgl-engine/lib/geometryDataUtils.js */ 62691);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n,o=_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__.generateDefaultIndexArray){return"number"==typeof n?o(n):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isUint16Array)(n)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isUint8Array)(n)?new Uint32Array(n):n}function o(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;e+=1)e%2==0?(n[t++]=e,n[t++]=e+1,n[t++]=e+2):(n[t++]=e+1,n[t++]=e,n[t++]=e+2)}else{let e=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=t[o],i=t[o+1],f=t[o+2];n[e++]=r,n[e++]=i,n[e++]=f}else{const r=t[o+1],i=t[o],f=t[o+2];n[e++]=r,n[e++]=i,n[e++]=f}}return n}function i(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;++e)n[t++]=0,n[t++]=e+1,n[t++]=e+2;return n}{const e=t[0];let o=t[1],i=0;for(let f=0;f<r;++f){const r=t[f+2];n[i++]=e,n[i++]=o,n[i++]=r,o=r}return n}}


/***/ }),

/***/ 8805:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "splitURI": () => (/* binding */ r)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r){let e,t;return r.replace(/^(.*\/)?([^/]*)$/,((r,a,i)=>(e=a||"",t=i||"",""))),{dirPart:e,filePart:t}}


/***/ }),

/***/ 71176:
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/loader.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "load": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat4f64.js */ 25336);
/* harmony import */ var _DefaultErrorContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultErrorContext.js */ 9469);
/* harmony import */ var _LoaderResult_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoaderResult.js */ 94022);
/* harmony import */ var _internal_Resource_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/Resource.js */ 45345);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





let i = 0;

function l(_x, _x2) {
  return _l.apply(this, arguments);
}

function _l() {
  _l = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (s, r, a = {}, l = !0) {
    const m = yield _internal_Resource_js__WEBPACK_IMPORTED_MODULE_5__.Resource.load(s, p, r, a),
          x = "gltf_" + i++,
          h = {
      lods: [],
      materials: new Map(),
      textures: new Map(),
      meta: u(m)
    },
          T = !(!m.json.asset.extras || "symbolResource" !== m.json.asset.extras.ESRI_type),
          g = new Map();
    yield c(m, /*#__PURE__*/function () {
      var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (s, r, n, i) {
        var u;
        const c = null != (u = g.get(n)) ? u : 0;
        g.set(n, c + 1);
        const T = void 0 !== s.mode ? s.mode : 4,
              S = 4 === T || 5 === T || 6 === T ? T : null;
        if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(S)) return void p.warnUnsupported("Unsupported primitive mode (" + f[T] + "). Skipping primitive.");
        if (!m.hasPositions(s)) return void p.warn("Skipping primitive without POSITION vertex attribute.");

        const v = m.getPositionData(s, a),
              w = m.getMaterial(s, a, l),
              _ = m.hasNormals(s) ? m.getNormalData(s, a) : null,
              I = m.hasTangents(s) ? m.getTangentData(s, a) : null,
              R = m.hasTextureCoordinates(s) ? m.getTextureCoordinates(s, a) : null,
              E = m.hasVertexColors(s) ? m.getVertexColors(s, a) : null,
              M = m.getIndexData(s, a),
              F = {
          transform: (0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__.b)(r),
          attributes: {
            position: yield v,
            normal: _ ? yield _ : null,
            texCoord0: R ? yield R : null,
            color: E ? yield E : null,
            tangent: I ? yield I : null
          },
          indices: yield M,
          primitiveType: S,
          material: d(h, yield w, x)
        };

        let y = null;
        (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(h.meta) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(h.meta.ESRI_lod) && "screenSpaceRadius" === h.meta.ESRI_lod.metric && (y = h.meta.ESRI_lod.thresholds[n]), h.lods[n] = h.lods[n] || {
          parts: [],
          name: i,
          lodThreshold: y
        }, h.lods[n].parts[c] = F;
      });

      return function (_x5, _x6, _x7, _x8) {
        return _ref.apply(this, arguments);
      };
    }());

    for (const e of h.lods) e.parts = e.parts.filter(e => !!e);

    return {
      model: h,
      meta: {
        isEsriSymbolResource: T,
        uri: m.uri
      },
      customMeta: {}
    };
  });
  return _l.apply(this, arguments);
}

function u(t) {
  const o = t.json;
  let s = null;
  return o.nodes.forEach(t => {
    const o = t.extras;
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(o) && (o.ESRI_proxyEllipsoid || o.ESRI_lod) && (s = o);
  }), s;
}

function c(_x3, _x4) {
  return _c.apply(this, arguments);
}

function _c() {
  _c = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    const o = e.json,
          s = o.scenes[o.scene || 0].nodes,
          r = s.length > 1,
          a = [];

    for (const i of s) {
      const e = o.nodes[i];

      if (a.push(n(i, 0)), m(e) && !r) {
        e.extensions.MSFT_lod.ids.forEach((e, t) => n(e, t + 1));
      }
    }

    function n(_x9, _x10) {
      return _n.apply(this, arguments);
    }

    function _n() {
      _n = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (s, r) {
        const i = o.nodes[s],
              l = e.getNodeTransform(s);

        if (p.warnUnsupportedIf(null != i.weights, "Morph targets are not supported."), null != i.mesh) {
          const e = o.meshes[i.mesh];

          for (const o of e.primitives) a.push(t(o, l, r, e.name));
        }

        for (const e of i.children || []) a.push(n(e, r));
      });
      return _n.apply(this, arguments);
    }

    yield Promise.all(a);
  });
  return _c.apply(this, arguments);
}

function m(e) {
  return e.extensions && e.extensions.MSFT_lod && Array.isArray(e.extensions.MSFT_lod.ids);
}

function d(e, t, o) {
  const s = t => {
    const s = `${o}_tex_${t && t.id}${t && t.name ? "_" + t.name : ""}`;

    if (t && !e.textures.has(s)) {
      const o = (0,_LoaderResult_js__WEBPACK_IMPORTED_MODULE_4__.makeTextureSource)(t.data, {
        wrap: {
          s: t.wrapS,
          t: t.wrapT
        },
        mipmap: x.some(e => e === t.minFilter),
        noUnpackFlip: !0
      });
      e.textures.set(s, o);
    }

    return s;
  },
        n = `${o}_mat_${t.id}_${t.name}`;

  if (!e.materials.has(n)) {
    const o = (0,_LoaderResult_js__WEBPACK_IMPORTED_MODULE_4__.makeMaterialParameters)({
      color: [t.color[0], t.color[1], t.color[2]],
      opacity: t.color[3],
      alphaMode: t.alphaMode,
      alphaCutoff: t.alphaCutoff,
      doubleSided: t.doubleSided,
      colorMixMode: t.ESRI_externalColorMixMode,
      textureColor: t.colorTexture ? s(t.colorTexture) : void 0,
      textureNormal: t.normalTexture ? s(t.normalTexture) : void 0,
      textureOcclusion: t.occlusionTexture ? s(t.occlusionTexture) : void 0,
      textureEmissive: t.emissiveTexture ? s(t.emissiveTexture) : void 0,
      textureMetallicRoughness: t.metallicRoughnessTexture ? s(t.metallicRoughnessTexture) : void 0,
      emissiveFactor: [t.emissiveFactor[0], t.emissiveFactor[1], t.emissiveFactor[2]],
      metallicFactor: t.metallicFactor,
      roughnessFactor: t.roughnessFactor
    });
    e.materials.set(n, o);
  }

  return n;
}

const p = new _DefaultErrorContext_js__WEBPACK_IMPORTED_MODULE_3__.DefaultErrorContext(),
      x = [9987, 9985],
      f = ["POINTS", "LINES", "LINE_LOOP", "LINE_STRIP", "TRIANGLES", "TRIANGLE_STRIP", "TRIANGLE_FAN"];


/***/ }),

/***/ 62691:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computeAttachmentOriginLines": () => (/* binding */ g),
/* harmony export */   "computeAttachmentOriginPoints": () => (/* binding */ h),
/* harmony export */   "computeAttachmentOriginTriangles": () => (/* binding */ u),
/* harmony export */   "generateDefaultIndexArray": () => (/* binding */ l),
/* harmony export */   "generateIndexArray": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ 63702);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ 33989);
/* harmony import */ var _geometry_support_triangle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/triangle.js */ 17710);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=(()=>{const t=new Uint32Array(131072);for(let n=0;n<t.length;++n)t[n]=n;return t})();const f=new Uint16Array([0]),c=(()=>{const t=new Uint16Array(65536);for(let n=0;n<t.length;++n)t[n]=n;return t})();function l(t){if(1===t)return f;if(t<c.length)return new Uint16Array(c.buffer,0,t);if(t>s.length){const n=Math.max(2*s.length,t);s=new Uint32Array(n);for(let t=0;t<s.length;t++)s[t]=t}return new Uint32Array(s.buffer,0,t)}function a(t){if(1===t)return new Uint16Array(f);if(t<c.length)return new Uint16Array(c.slice(0,t));if(t>s.length){const n=new Uint32Array(t);for(let t=0;t<n.length;t++)n[t]=t;return n}return new Uint32Array(s.slice(0,t))}function u(e,o,s){if(!e)return!1;const{size:f,data:c}=e;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(s,0,0,0),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(U,0,0,0);let l=0,a=0;for(let u=0;u<o.length-2;u+=3){const e=o[u+0]*f,h=o[u+1]*f,g=o[u+2]*f;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(y,c[e+0],c[e+1],c[e+2]),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(w,c[h+0],c[h+1],c[h+2]),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(A,c[g+0],c[g+1],c[g+2]);const m=(0,_geometry_support_triangle_js__WEBPACK_IMPORTED_MODULE_2__.areaPoints3d)(y,w,A);m?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.b)(y,y,w),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.b)(y,y,A),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(y,y,1/3*m),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.b)(s,s,y),l+=m):((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.b)(U,U,y),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.b)(U,U,w),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.b)(U,U,A),a+=3)}return(0!==a||0!==l)&&(0!==l?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(s,s,1/l),!0):0!==a&&((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(s,U,1/a),!0))}function h(n,e,o){if(!n||!e)return!1;const{size:i,data:s}=n;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(o,0,0,0);let f=-1,c=0;for(let t=0;t<e.length;t++){const n=e[t]*i;f!==n&&(o[0]+=s[n+0],o[1]+=s[n+1],o[2]+=s[n+2],c++),f=n}return c>1&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(o,o,1/c),c>0}function g(o,i,s,f){if(!o)return!1;const{size:c,data:l}=o;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(f,0,0,0),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(U,0,0,0);let a=0,u=0;const h=i?i.length-1:l.length/c-1,g=h+(s?2:0);for(let t=0;t<g;t+=2){const o=t<h?t:h,s=t<h?t+1:0,g=(i?i[o]:o)*c,A=(i?i[s]:s)*c;y[0]=l[g+0],y[1]=l[g+1],y[2]=l[g+2],w[0]=l[A+0],w[1]=l[A+1],w[2]=l[A+2],(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(y,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.b)(y,y,w),.5);const m=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.j)(y,w);m>0?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.b)(f,f,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(y,y,m)),a+=m):((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.b)(U,U,y),u++)}return 0!==a?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(f,f,1/a),!0):0!==u&&((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(f,U,1/u),!0)}const y=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)(),w=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)(),A=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)(),U=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)();


/***/ }),

/***/ 87335:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLOR_GAMMA": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=2.1;


/***/ })

}]);
//# sourceMappingURL=4411.812150388da477d18e77.js.map