"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[9814],{

/***/ 30641:
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat3f64.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ t),
/* harmony export */   "b": () => (/* binding */ n),
/* harmony export */   "c": () => (/* binding */ e),
/* harmony export */   "f": () => (/* binding */ r),
/* harmony export */   "m": () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,1,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function r(e,n,r,t,a,o,c,u,f){return[e,n,r,t,a,o,c,u,f]}function t(e,n){return new Float64Array(e,n,9)}const a=Object.freeze({__proto__:null,create:e,clone:n,fromValues:r,createView:t});


/***/ }),

/***/ 25336:
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat4f64.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ a),
/* harmony export */   "a": () => (/* binding */ t),
/* harmony export */   "b": () => (/* binding */ n),
/* harmony export */   "c": () => (/* binding */ e),
/* harmony export */   "f": () => (/* binding */ r),
/* harmony export */   "m": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function r(e,n,r,t,a,o,c,u,s,f,i,l,_,I,b,m){return[e,n,r,t,a,o,c,u,s,f,i,l,_,I,b,m]}function t(e,n){return new Float64Array(e,n,16)}const a=e(),o=Object.freeze({__proto__:null,create:e,clone:n,fromValues:r,createView:t,IDENTITY:a});


/***/ }),

/***/ 3456:
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quat.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ X),
/* harmony export */   "B": () => (/* binding */ Z),
/* harmony export */   "C": () => (/* binding */ J),
/* harmony export */   "D": () => (/* binding */ K),
/* harmony export */   "E": () => (/* binding */ Q),
/* harmony export */   "F": () => (/* binding */ tt),
/* harmony export */   "G": () => (/* binding */ nt),
/* harmony export */   "a": () => (/* binding */ F),
/* harmony export */   "b": () => (/* binding */ b),
/* harmony export */   "c": () => (/* binding */ w),
/* harmony export */   "d": () => (/* binding */ y),
/* harmony export */   "e": () => (/* binding */ E),
/* harmony export */   "f": () => (/* binding */ W),
/* harmony export */   "g": () => (/* binding */ P),
/* harmony export */   "h": () => (/* binding */ H),
/* harmony export */   "i": () => (/* binding */ k),
/* harmony export */   "j": () => (/* binding */ N),
/* harmony export */   "k": () => (/* binding */ C),
/* harmony export */   "l": () => (/* binding */ Y),
/* harmony export */   "m": () => (/* binding */ v),
/* harmony export */   "n": () => (/* binding */ A),
/* harmony export */   "o": () => (/* binding */ _),
/* harmony export */   "p": () => (/* binding */ z),
/* harmony export */   "q": () => (/* binding */ rt),
/* harmony export */   "r": () => (/* binding */ S),
/* harmony export */   "s": () => (/* binding */ I),
/* harmony export */   "t": () => (/* binding */ L),
/* harmony export */   "u": () => (/* binding */ B),
/* harmony export */   "v": () => (/* binding */ D),
/* harmony export */   "w": () => (/* binding */ G),
/* harmony export */   "x": () => (/* binding */ O),
/* harmony export */   "y": () => (/* binding */ R),
/* harmony export */   "z": () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var _mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat3f64.js */ 30641);
/* harmony import */ var _quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quatf64.js */ 49635);
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3f64.js */ 33989);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.js */ 15473);
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vec3.js */ 63702);
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vec4.js */ 64617);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function A(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function I(t,s,a){a*=.5;const n=Math.sin(a);return t[0]=n*s[0],t[1]=n*s[1],t[2]=n*s[2],t[3]=Math.cos(a),t}function P(t,s){const a=2*Math.acos(s[3]),n=Math.sin(a/2);return n>_common_js__WEBPACK_IMPORTED_MODULE_3__.E?(t[0]=s[0]/n,t[1]=s[1]/n,t[2]=s[2]/n):(t[0]=1,t[1]=0,t[2]=0),a}function v(t,s,a){const n=s[0],o=s[1],r=s[2],c=s[3],e=a[0],u=a[1],i=a[2],h=a[3];return t[0]=n*h+c*e+o*i-r*u,t[1]=o*h+c*u+r*e-n*i,t[2]=r*h+c*i+n*u-o*e,t[3]=c*h-n*e-o*u-r*i,t}function b(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+c*e,t[1]=o*u+r*e,t[2]=r*u-o*e,t[3]=c*u-n*e,t}function y(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u-r*e,t[1]=o*u+c*e,t[2]=r*u+n*e,t[3]=c*u-o*e,t}function E(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+o*e,t[1]=o*u-n*e,t[2]=r*u+c*e,t[3]=c*u-r*e,t}function _(t,s){const a=s[0],n=s[1],o=s[2];return t[0]=a,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-a*a-n*n-o*o)),t}function z(t,s,a,n){const r=s[0],c=s[1],e=s[2],u=s[3];let i,h,M,f,l,m=a[0],p=a[1],q=a[2],d=a[3];return h=r*m+c*p+e*q+u*d,h<0&&(h=-h,m=-m,p=-p,q=-q,d=-d),1-h>_common_js__WEBPACK_IMPORTED_MODULE_3__.E?(i=Math.acos(h),M=Math.sin(i),f=Math.sin((1-n)*i)/M,l=Math.sin(n*i)/M):(f=1-n,l=n),t[0]=f*r+l*m,t[1]=f*c+l*p,t[2]=f*e+l*q,t[3]=f*u+l*d,t}function L(t){const s=(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.R)(),a=(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.R)(),n=(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.R)(),o=Math.sqrt(1-s),c=Math.sqrt(s);return t[0]=o*Math.sin(2*Math.PI*a),t[1]=o*Math.cos(2*Math.PI*a),t[2]=c*Math.sin(2*Math.PI*n),t[3]=c*Math.cos(2*Math.PI*n),t}function k(t,s){const a=s[0],n=s[1],o=s[2],r=s[3],c=a*a+n*n+o*o+r*r,e=c?1/c:0;return t[0]=-a*e,t[1]=-n*e,t[2]=-o*e,t[3]=r*e,t}function w(t,s){return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[3]=s[3],t}function B(t,s){const a=s[0]+s[4]+s[8];let n;if(a>0)n=Math.sqrt(a+1),t[3]=.5*n,n=.5/n,t[0]=(s[5]-s[7])*n,t[1]=(s[6]-s[2])*n,t[2]=(s[1]-s[3])*n;else{let a=0;s[4]>s[0]&&(a=1),s[8]>s[3*a+a]&&(a=2);const o=(a+1)%3,r=(a+2)%3;n=Math.sqrt(s[3*a+a]-s[3*o+o]-s[3*r+r]+1),t[a]=.5*n,n=.5/n,t[3]=(s[3*o+r]-s[3*r+o])*n,t[o]=(s[3*o+a]+s[3*a+o])*n,t[r]=(s[3*r+a]+s[3*a+r])*n}return t}function C(t,s,a,n){const o=.5*Math.PI/180;s*=o,a*=o,n*=o;const r=Math.sin(s),c=Math.cos(s),e=Math.sin(a),u=Math.cos(a),i=Math.sin(n),h=Math.cos(n);return t[0]=r*u*h-c*e*i,t[1]=c*e*h+r*u*i,t[2]=c*u*i-r*e*h,t[3]=c*u*h+r*e*i,t}function D(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const F=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.c,G=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.s,O=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.a,R=v,T=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.b,W=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.d,X=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.l,Y=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.e,Z=Y,H=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.f,J=H,K=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.n,N=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.g,Q=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.h;function S(t,s,a){const n=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.d)(s,a);return n<-.999999?((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.c)(U,V,s),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.u)(U)<1e-6&&(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.c)(U,$,s),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.n)(U,U),I(t,U,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.c)(U,s,a),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+n,K(t,t))}const U=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),V=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(1,0,0),$=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(0,1,0);function tt(t,s,a,n,o,r){return z(st,s,o,r),z(at,a,n,r),z(t,st,at,2*r*(1-r)),t}const st=(0,_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.a)(),at=(0,_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.a)();function nt(t,s,a,n){const o=ot;return o[0]=a[0],o[3]=a[1],o[6]=a[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-s[0],o[5]=-s[1],o[8]=-s[2],K(t,B(t,o))}const ot=(0,_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)(),rt=Object.freeze({__proto__:null,identity:A,setAxisAngle:I,getAxisAngle:P,multiply:v,rotateX:b,rotateY:y,rotateZ:E,calculateW:_,slerp:z,random:L,invert:k,conjugate:w,fromMat3:B,fromEuler:C,str:D,copy:F,set:G,add:O,mul:R,scale:T,dot:W,lerp:X,length:Y,len:Z,squaredLength:H,sqrLen:J,normalize:K,exactEquals:N,equals:Q,rotationTo:S,sqlerp:tt,setAxes:nt});


/***/ }),

/***/ 49635:
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quatf64.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ a),
/* harmony export */   "a": () => (/* binding */ e),
/* harmony export */   "b": () => (/* binding */ n),
/* harmony export */   "c": () => (/* binding */ t),
/* harmony export */   "f": () => (/* binding */ r),
/* harmony export */   "q": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3]]}function r(e,n,r,t){return[e,n,r,t]}function t(e,n){return new Float64Array(e,n,4)}const a=e(),o=Object.freeze({__proto__:null,create:e,clone:n,fromValues:r,createView:t,IDENTITY:a});


/***/ }),

/***/ 58535:
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec32.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ f),
/* harmony export */   "b": () => (/* binding */ n),
/* harmony export */   "n": () => (/* binding */ o),
/* harmony export */   "s": () => (/* binding */ r),
/* harmony export */   "t": () => (/* binding */ e),
/* harmony export */   "v": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/support/buffer/math/common.js */ 6525);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,f,r){if(e.count!==f.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__.logger.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],u=r[1],d=r[2],s=r[4],c=r[5],i=r[6],a=r[8],p=r[9],y=r[10],B=r[12],m=r[13],h=r[14],l=e.typedBuffer,S=e.typedBufferStride,b=f.typedBuffer,M=f.typedBufferStride;for(let t=0;t<o;t++){const e=t*S,f=t*M,r=b[f],o=b[f+1],v=b[f+2];l[e]=n*r+s*o+a*v+B,l[e+1]=u*r+c*o+p*v+m,l[e+2]=d*r+i*o+y*v+h}}function f(e,f,r){if(e.count!==f.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__.logger.error("source and destination buffers need to have the same number of elements");const o=e.count,n=r[0],u=r[1],d=r[2],s=r[3],c=r[4],i=r[5],a=r[6],p=r[7],y=r[8],B=e.typedBuffer,m=e.typedBufferStride,h=f.typedBuffer,l=f.typedBufferStride;for(let t=0;t<o;t++){const e=t*m,f=t*l,r=h[f],o=h[f+1],S=h[f+2];B[e]=n*r+s*o+a*S,B[e+1]=u*r+c*o+p*S,B[e+2]=d*r+i*o+y*S}}function r(t,e,f){const r=Math.min(t.count,e.count),o=t.typedBuffer,n=t.typedBufferStride,u=e.typedBuffer,d=e.typedBufferStride;for(let s=0;s<r;s++){const t=s*n,e=s*d;o[t]=f*u[e],o[t+1]=f*u[e+1],o[t+2]=f*u[e+2]}}function o(t,e){const f=Math.min(t.count,e.count),r=t.typedBuffer,o=t.typedBufferStride,n=e.typedBuffer,u=e.typedBufferStride;for(let d=0;d<f;d++){const t=d*o,e=d*u,f=n[e],s=n[e+1],c=n[e+2],i=Math.sqrt(f*f+s*s+c*c);if(i>0){const e=1/i;r[t]=e*f,r[t+1]=e*s,r[t+2]=e*c}}}function n(t,e,f){const r=Math.min(t.count,e.count),o=t.typedBuffer,n=t.typedBufferStride,u=e.typedBuffer,d=e.typedBufferStride;for(let s=0;s<r;s++){const t=s*n,e=s*d;o[t]=u[e]>>f,o[t+1]=u[e+1]>>f,o[t+2]=u[e+2]>>f}}const u=Object.freeze({__proto__:null,transformMat4:e,transformMat3:f,scale:r,normalize:o,shiftRight:n});


/***/ }),

/***/ 18635:
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec33.js ***!
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
function e(e,t,n){const d=e.typedBuffer,f=e.typedBufferStride,o=t.typedBuffer,r=t.typedBufferStride,u=n?n.count:t.count;let l=(n&&n.dstIndex?n.dstIndex:0)*f,c=(n&&n.srcIndex?n.srcIndex:0)*r;for(let s=0;s<u;++s)d[l]=o[c],d[l+1]=o[c+1],d[l+2]=o[c+2],l+=f,c+=r}function t(e,t,n,d,f){var o,r;const u=e.typedBuffer,l=e.typedBufferStride,c=null!=(o=null==f?void 0:f.count)?o:e.count;let s=(null!=(r=null==f?void 0:f.dstIndex)?r:0)*l;for(let p=0;p<c;++p)u[s]=t,u[s+1]=n,u[s+2]=d,s+=l}const n=Object.freeze({__proto__:null,copy:e,fill:t});


/***/ }),

/***/ 27144:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshTransform.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ O)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../chunks/mat4.js */ 60411);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../chunks/mat4f64.js */ 25336);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../chunks/vec3.js */ 63702);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ 33989);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Point.js */ 7309);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../projection.js */ 15695);
/* harmony import */ var _projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../projectionEllipsoid.js */ 69843);
/* harmony import */ var _axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./axisAngleDegrees.js */ 23503);
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./buffer/BufferView.js */ 79399);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../chunks/vec32.js */ 58535);
/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../chunks/vec33.js */ 18635);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var B;let L=B=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.origin=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.c)(),this.translation=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.c)(),this.rotation=(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_15__.create)(),this.scale=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.f)(1,1,1),this.geographic=!0}get localMatrix(){const r=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_9__.c)();return (0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_8__.f)(r,r,this.scale),(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_8__.e)(r,r,(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_15__.angleRad)(this.rotation),(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_15__.axis)(this.rotation)),(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_8__.a)(r,r,this.translation),r}get localMatrixInverse(){return (0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_8__.b)((0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_9__.c)(),this.localMatrix)}applyLocal(r,o){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_10__.m)(o,r,this.localMatrix)}applyLocalInverse(r,o){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_10__.m)(o,r,this.localMatrixInverse)}project(r,o){const t=new Float64Array(r.length),s=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_16__.BufferViewVec3f64.fromTypedArray(t),e=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_16__.BufferViewVec3f64.fromTypedArray(r);if(this.geographic){const r=(0,_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_14__.getSphericalPCPFForEllipsoid)((0,_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_14__.getReferenceEllipsoid)(o)),i=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_9__.c)();return (0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.computeTranslationToOriginAndRotation)(o,this.origin,i,r),(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_8__.m)(i,i,this.localMatrix),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_17__.t)(s,e,i),(0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.projectBuffer)(t,r,0,t,o,0,t.length/3),t}const{localMatrix:i,origin:a}=this;(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_8__.n)(i,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_9__.I)?(0,_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_18__.c)(s,e):(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_17__.t)(s,e,i);for(let n=0;n<t.length;n+=3)t[n+0]+=a[0],t[n+1]+=a[1],t[n+2]+=a[2];return t}getOriginPoint(r){const[o,t,s]=this.origin;return new _Point_js__WEBPACK_IMPORTED_MODULE_12__.default({x:o,y:t,z:s,spatialReference:r})}equals(r){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(r)&&this.geographic===r.geographic&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_10__.k)(this.origin,r.origin)&&(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_8__.p)(this.localMatrix,r.localMatrix)}clone(){const r={origin:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.a)(this.origin),translation:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.a)(this.translation),rotation:(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_15__.create)(this.rotation),scale:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.a)(this.scale),geographic:this.geographic};return new B(r)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Number],nonNullable:!0,json:{write:!0}})],L.prototype,"origin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Number],nonNullable:!0,json:{write:!0}})],L.prototype,"translation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Number],nonNullable:!0,json:{write:!0}})],L.prototype,"rotation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Number],nonNullable:!0,json:{write:!0}})],L.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,nonNullable:!0,json:{write:!0}})],L.prototype,"geographic",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],L.prototype,"localMatrix",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],L.prototype,"localMatrixInverse",null),L=B=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.geometry.support.MeshTransform")],L);const O=L;


/***/ }),

/***/ 23503:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/axisAngleDegrees.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UP": () => (/* binding */ U),
/* harmony export */   "angle": () => (/* binding */ v),
/* harmony export */   "angleRad": () => (/* binding */ x),
/* harmony export */   "axis": () => (/* binding */ l),
/* harmony export */   "compose": () => (/* binding */ q),
/* harmony export */   "copy": () => (/* binding */ h),
/* harmony export */   "create": () => (/* binding */ a),
/* harmony export */   "fromAxisAndAngle": () => (/* binding */ k),
/* harmony export */   "fromPoints": () => (/* binding */ g),
/* harmony export */   "fromValues": () => (/* binding */ j),
/* harmony export */   "setAngle": () => (/* binding */ y),
/* harmony export */   "wrap": () => (/* binding */ m),
/* harmony export */   "wrapAxisAngle": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ 88415);
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/quat.js */ 3456);
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/quatf64.js */ 49635);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec3.js */ 63702);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(n=U){return[n[0],n[1],n[2],n[3]]}function m(n,r,t,u){return j(n,r,t,u,w)}function p(n,r){return j(n[0],n[1],n[2],r,w)}function h(n,r=a()){return j(n[0],n[1],n[2],n[3],r)}function j(n,r,t,u,o=a()){return o[0]=n,o[1]=r,o[2]=t,o[3]=u,o}function k(n,r,t=a()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.g)(l(t),n),t[3]=r,t}function g(n,r,t=a()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.c)(t,n,r),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.n)(t,t),t[3]=-(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.y)(n,r),t}function q(r,c,s=a()){return (0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__.s)(b,l(r),x(r)),(0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__.s)(d,l(c),x(c)),(0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__.m)(b,d,b),y(s,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.rad2deg)((0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__.g)(l(s),b)))}function l(n){return n}function v(n){return n[3]}function x(n){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(n[3])}function y(n,r){return n[3]=r,n}const U=[0,0,1,0],b=(0,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_2__.a)(),d=(0,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_2__.a)(),w=a();


/***/ }),

/***/ 6525:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/math/common.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__.default.getLogger("esri.views.3d.support.buffer.math");


/***/ }),

/***/ 56605:
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/geographicUtils.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isGeographicMesh": () => (/* binding */ r)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,e){var i;return r.isGeographic||r.isWebMercator&&(null==(i=null==e?void 0:e.geographic)||i)}


/***/ }),

/***/ 99814:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/georeference.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "georeference": () => (/* binding */ x),
/* harmony export */   "georeferenceApplyTransform": () => (/* binding */ _),
/* harmony export */   "georeferenceByTransform": () => (/* binding */ b),
/* harmony export */   "ungeoreference": () => (/* binding */ k),
/* harmony export */   "ungeoreferenceByTransform": () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/unitUtils.js */ 55612);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat3f64.js */ 30641);
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/mat4.js */ 60411);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/mat4f64.js */ 25336);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/mat3.js */ 72425);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../projection.js */ 15695);
/* harmony import */ var _projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../projectionEllipsoid.js */ 69843);
/* harmony import */ var _MeshTransform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MeshTransform.js */ 27144);
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../buffer/BufferView.js */ 79399);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../chunks/vec32.js */ 58535);
/* harmony import */ var _geographicUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./geographicUtils.js */ 56605);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projection.js */ 23187);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function x(n,r,t){return (0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_11__.isGeographicMesh)(r.spatialReference,t)?B(n,r,t):P(n,r,t)}function _(t,o,e){const{position:a,normal:i,tangent:l}=t;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(o))return{position:a,normal:i,tangent:l};const s=o.localMatrix;return x({position:(0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.transformPosition)(a,new Float64Array(a.length),s),normal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(i)?(0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.transformNormal)(i,new Float32Array(i.length),s):null,tangent:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(l)?(0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.transformTangent)(l,new Float32Array(l.length),s):null},o.getOriginPoint(e),{geographic:o.geographic})}function b(n,r,t){if(null!=t&&t.useTransform){var o;const{position:e,normal:a,tangent:i}=n;return{vertexAttributes:{position:e,normal:a,tangent:i},transform:new _MeshTransform_js__WEBPACK_IMPORTED_MODULE_8__.default({origin:[r.x,r.y,null!=(o=r.z)?o:0],geographic:(0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_11__.isGeographicMesh)(r.spatialReference,t)})}}return{vertexAttributes:x(n,r,t),transform:null}}function k(n,r,t){return (0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_11__.isGeographicMesh)(r.spatialReference,t)?G(n,r,t):Y(n,r,t)}function M(r,t,o,e){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(t))return k(r,o,e);const a=_(r,t,o.spatialReference);return o.equals(t.getOriginPoint(o.spatialReference))?Y(a,o,e):(0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_11__.isGeographicMesh)(o.spatialReference,e)?G(a,o,e):Y(a,o,e)}function P(n,r,t){const o=new Float64Array(n.position.length),e=n.position,a=r.x,i=r.y,l=r.z||0,{horizontal:s,vertical:f}=C(t?t.unit:null,r.spatialReference);for(let c=0;c<e.length;c+=3)o[c+0]=e[c+0]*s+a,o[c+1]=e[c+1]*s+i,o[c+2]=e[c+2]*f+l;return{position:o,normal:n.normal,tangent:n.tangent}}function B(n,r,t){const o=r.spatialReference,e=O(r,t,D),a=new Float64Array(n.position.length),i=L(n.position,e,o,a),l=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_5__.a)(I,e);return{position:i,normal:N(i,a,n.normal,l,o),tangent:S(i,a,n.tangent,l,o)}}function L(n,r,t,o){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__.t)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f64.fromTypedArray(o),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f64.fromTypedArray(n),r);const e=new Float64Array(n.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.projectFromPCPF)(o,e,t)}function N(r,t,o,e,a){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(o))return null;const i=new Float32Array(o.length);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__.a)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f.fromTypedArray(i),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f.fromTypedArray(o),e),(0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.projectNormalFromPCPF)(i,r,t,a,i),i}function S(r,t,o,e,a){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(o))return null;const i=new Float32Array(o.length);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__.a)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),e);for(let n=3;n<i.length;n+=4)i[n]=o[n];return (0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.projectTangentFromPCPF)(i,r,t,a,i),i}function Y(n,r,t){const o=new Float64Array(n.position.length),e=n.position,a=r.x,i=r.y,l=r.z||0,{horizontal:s,vertical:f}=C(t?t.unit:null,r.spatialReference);for(let c=0;c<e.length;c+=3)o[c+0]=(e[c+0]-a)/s,o[c+1]=(e[c+1]-i)/s,o[c+2]=(e[c+2]-l)/f;return{position:o,normal:n.normal,tangent:n.tangent}}function G(n,r,t){const o=r.spatialReference;O(r,t,D);const e=(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__.b)(H,D),a=new Float64Array(n.position.length),l=U(n.position,o,e,a),s=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_5__.a)(I,e);return{position:l,normal:q(n.normal,n.position,a,o,s),tangent:V(n.tangent,n.position,a,o,s)}}function O(n,r,t){(0,_projection_js__WEBPACK_IMPORTED_MODULE_6__.computeTranslationToOriginAndRotation)(n.spatialReference,[n.x,n.y,n.z||0],t,(0,_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_7__.getSphericalPCPF)(n.spatialReference));const{horizontal:o,vertical:e}=C(r?r.unit:null,n.spatialReference);return (0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__.f)(t,t,[o,o,e]),t}function U(n,r,t,o){const e=(0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.projectToPCPF)(n,r,o),a=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f64.fromTypedArray(e),i=new Float64Array(e.length),l=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f64.fromTypedArray(i);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__.t)(l,a,t),i}function q(r,t,o,e,a){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(r))return null;const i=(0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.projectNormalToPCPF)(r,t,o,e,new Float32Array(r.length)),l=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f.fromTypedArray(i);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__.a)(l,l,a),i}function V(r,t,o,e,a){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(r))return null;const i=(0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.projectTangentToPCPF)(r,t,o,e,new Float32Array(r.length)),l=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_9__.BufferViewVec3f.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_10__.a)(l,l,a),i}function C(r,a){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(r))return J;const i=a.isGeographic?1:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.getMetersPerUnit)(a),l=a.isGeographic?1:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.getMetersPerVerticalUnitForSR)(a),s=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.convertUnit)(1,r,"meters");return{horizontal:s*i,vertical:s*l}}const D=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__.c)(),H=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__.c)(),I=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),J={horizontal:1,vertical:1};


/***/ }),

/***/ 23187:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/projection.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFromPCPF": () => (/* binding */ M),
/* harmony export */   "projectNormalFromPCPF": () => (/* binding */ _),
/* harmony export */   "projectNormalToPCPF": () => (/* binding */ F),
/* harmony export */   "projectTangentFromPCPF": () => (/* binding */ R),
/* harmony export */   "projectTangentToPCPF": () => (/* binding */ B),
/* harmony export */   "projectToPCPF": () => (/* binding */ v),
/* harmony export */   "transformNormal": () => (/* binding */ k),
/* harmony export */   "transformPosition": () => (/* binding */ V),
/* harmony export */   "transformTangent": () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat3.js */ 72425);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/mat3f64.js */ 30641);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/mat4f64.js */ 25336);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/vec3.js */ 63702);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/vec3f64.js */ 33989);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../projection.js */ 15695);
/* harmony import */ var _projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../projectionEllipsoid.js */ 69843);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../spatialReferenceUtils.js */ 35169);
/* harmony import */ var _webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../webMercatorUtils.js */ 3403);
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../buffer/BufferView.js */ 79399);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../chunks/vec32.js */ 58535);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const C=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__.default.getLogger("esri.geometry.support.meshUtils.normalProjection");function F(r,e,o,t,n){return b(t)?(S(0,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f.fromTypedArray(r),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f64.fromTypedArray(e),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f64.fromTypedArray(o),t,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f.fromTypedArray(n)),n):(C.error("Cannot convert spatial reference to PCPF"),n)}function _(r,e,o,t,n){return b(t)?(S(1,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f.fromTypedArray(r),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f64.fromTypedArray(e),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f64.fromTypedArray(o),t,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f.fromTypedArray(n)),n):(C.error("Cannot convert to spatial reference from PCPF"),n)}function v(r,e,o){return (0,_projection_js__WEBPACK_IMPORTED_MODULE_7__.projectBuffer)(r,e,0,o,(0,_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__.getSphericalPCPF)(e),0,r.length/3),o}function M(r,e,o){return (0,_projection_js__WEBPACK_IMPORTED_MODULE_7__.projectBuffer)(r,(0,_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__.getSphericalPCPF)(o),0,e,o,0,r.length/3),e}function V(r,o,t){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(r))return o;const n=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f64.fromTypedArray(r),f=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f64.fromTypedArray(o);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__.t)(f,n,t),o}function k(r,n,f){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(r))return n;(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.a)(x,f);const a=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f.fromTypedArray(r),m=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f.fromTypedArray(n);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__.a)(m,a,x),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.i)(x)||(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__.n)(m,m),n}function L(r,n,f){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(r))return n;(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.a)(x,f);const a=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),m=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT);if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__.a)(m,a,x),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.i)(x)||(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__.n)(m,m),r!==n)for(let e=3;e<r.length;e+=4)n[e]=r[e];return n}function B(r,e,o,t,n){if(!b(t))return C.error("Cannot convert spatial reference to PCPF"),n;S(0,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f64.fromTypedArray(e),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f64.fromTypedArray(o),t,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function R(r,e,o,t,n){if(!b(t))return C.error("Cannot convert to spatial reference from PCPF"),n;S(1,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f.fromTypedArray(r,16),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f64.fromTypedArray(e),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f64.fromTypedArray(o),t,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f.fromTypedArray(n,16));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function S(r,e,o,t,a,m){if(!e)return;const i=o.count,y=(0,_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__.getSphericalPCPF)(a);if(N(a))for(let s=0;s<i;s++)t.getVec(s,U),e.getVec(s,w),(0,_projection_js__WEBPACK_IMPORTED_MODULE_7__.computeTranslationToOriginAndRotation)(y,U,W,y),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.f)(x,W),1===r&&(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.t)(x,x),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__.t)(w,w,x),m.setVec(s,w);else for(let u=0;u<i;u++){t.getVec(u,U),e.getVec(u,w),(0,_projection_js__WEBPACK_IMPORTED_MODULE_7__.computeTranslationToOriginAndRotation)(y,U,W,y),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.f)(x,W);const a=(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_10__.y2lat)(o.get(u,1));let i=Math.cos(a);0===r&&(i=1/i),x[0]*=i,x[1]*=i,x[2]*=i,x[3]*=i,x[4]*=i,x[5]*=i,1===r&&(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.t)(x,x),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__.t)(w,w,x),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__.n)(w,w),m.setVec(u,w)}return m}function b(r){return N(r)||Y(r)}function N(r){return r.isWGS84||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.isCGCS2000)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.isMars)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.isMoon)(r)}function Y(r){return r.isWebMercator}const U=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(),w=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(),W=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__.c)(),x=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)();


/***/ })

}]);
//# sourceMappingURL=9814.e11894cbc5da6afbdba2.js.map