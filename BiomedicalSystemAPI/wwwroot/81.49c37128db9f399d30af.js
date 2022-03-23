"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[81],{

/***/ 30773:
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec3f32.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ f),
/* harmony export */   "U": () => (/* binding */ l),
/* harmony export */   "Z": () => (/* binding */ i),
/* harmony export */   "a": () => (/* binding */ r),
/* harmony export */   "b": () => (/* binding */ e),
/* harmony export */   "c": () => (/* binding */ n),
/* harmony export */   "d": () => (/* binding */ s),
/* harmony export */   "e": () => (/* binding */ c),
/* harmony export */   "f": () => (/* binding */ t),
/* harmony export */   "g": () => (/* binding */ _),
/* harmony export */   "h": () => (/* binding */ w),
/* harmony export */   "o": () => (/* binding */ o),
/* harmony export */   "u": () => (/* binding */ u),
/* harmony export */   "v": () => (/* binding */ y),
/* harmony export */   "z": () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function r(n){const r=new Float32Array(3);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function t(n,r,t){const e=new Float32Array(3);return e[0]=n,e[1]=r,e[2]=t,e}function e(n,r){return new Float32Array(n,r,3)}function a(){return n()}function o(){return t(1,1,1)}function u(){return t(1,0,0)}function s(){return t(0,1,0)}function c(){return t(0,0,1)}const i=a(),f=o(),l=u(),_=s(),w=c(),y=Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,createView:e,zeros:a,ones:o,unitX:u,unitY:s,unitZ:c,ZEROS:i,ONES:f,UNIT_X:l,UNIT_Y:_,UNIT_Z:w});


/***/ }),

/***/ 1552:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/normalizeUtilsSync.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeCentralMeridianSync": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aaBoundingRect.js */ 7401);
/* harmony import */ var _boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boundsUtils.js */ 15783);
/* harmony import */ var _intersectsBase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intersectsBase.js */ 93877);
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsonUtils.js */ 70279);
/* harmony import */ var _normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./normalizeUtilsCommon.js */ 13409);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spatialReferenceUtils.js */ 35169);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(n){if(!n)return null;let r=null;const u=n.spatialReference,d=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__.getInfo)(u);if(!d)return"toJSON"in n?n.toJSON():n;const I=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__.isWebMercator)(u)?102100:4326,g=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__.cutParams[I].maxX,j=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__.cutParams[I].minX,M=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__.cutParams[I].plus180Line,N=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__.cutParams[I].minus180Line;let O;const S="toJSON"in n?n.toJSON():n;if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.isPoint)(S))O=h(S,g,j);else if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.isMultipoint)(S))S.points=S.points.map((n=>h(n,g,j))),O=S;else if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.isExtent)(S))O=y(S,d);else if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.isPolygon)(S)||(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.isPolyline)(S)){const n=J;(0,_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__.getBoundsXY)(n,S);const m={xmin:n[0],ymin:n[1],xmax:n[2],ymax:n[3]},s=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__.offsetMagnitude)(m.xmin,j)*(2*g),e=0===s?S:p(S,s);m.xmin+=s,m.xmax+=s,(0,_intersectsBase_js__WEBPACK_IMPORTED_MODULE_2__.extentIntersectsPolyline)(m,M)&&m.xmax!==g||(0,_intersectsBase_js__WEBPACK_IMPORTED_MODULE_2__.extentIntersectsPolyline)(m,N)&&m.xmin!==j?r=e:O=e}else O=S;if(null!==r){return(new v).cut(r,g)}return O}function p(n,t){const i=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__.getGeometryParts)(n);for(const m of i)for(const n of m)n[0]+=t;return n}function y(n,t){if(!t)return n;const i=d(n,t).map((n=>n.extent));return i.length<2?i[0]||n:i.length>2?(n.xmin=t.valid[0],n.xmax=t.valid[1],n):{rings:i.map((n=>[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]))}}function h(n,t,i){if(Array.isArray(n)){const m=n[0];if(m>t){const i=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__.offsetMagnitude)(m,t);n[0]=m+i*(-2*t)}else if(m<i){const t=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__.offsetMagnitude)(m,i);n[0]=m+t*(-2*i)}}else{const m=n.x;if(m>t){const i=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__.offsetMagnitude)(m,t);n.x+=i*(-2*t)}else if(m<i){const t=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__.offsetMagnitude)(m,i);n.x+=t*(-2*i)}}return n}function d(n,t){const i=[],{ymin:m,ymax:s}=n,e=n.xmax-n.xmin,x=n.xmin,o=n.xmax;let a;const[r,f]=t.valid;a=I(n.xmin,t);const c=a.x,l=a.frameId;a=I(n.xmax,t);const u=a.x,p=a.frameId,y=c===u&&e>0;if(e>2*f){const n={xmin:x<o?c:u,ymin:m,xmax:f,ymax:s},t={xmin:r,ymin:m,xmax:x<o?u:c,ymax:s},e={xmin:0,ymin:m,xmax:f,ymax:s},a={xmin:r,ymin:m,xmax:0,ymax:s},y=[],h=[];g(n,e)&&y.push(l),g(n,a)&&h.push(l),g(t,e)&&y.push(p),g(t,a)&&h.push(p);for(let i=l+1;i<p;i++)y.push(i),h.push(i);i.push({extent:n,frameIds:[l]},{extent:t,frameIds:[p]},{extent:e,frameIds:y},{extent:a,frameIds:h})}else c>u||y?i.push({extent:{xmin:c,ymin:m,xmax:f,ymax:s},frameIds:[l]},{extent:{xmin:r,ymin:m,xmax:u,ymax:s},frameIds:[p]}):i.push({extent:{xmin:c,ymin:m,xmax:u,ymax:s},frameIds:[l]});return i}function I(n,t){const[i,m]=t.valid,s=2*m;let e,x=0;return n>m?(e=Math.ceil(Math.abs(n-m)/s),n-=e*s,x=e):n<i&&(e=Math.ceil(Math.abs(n-i)/s),n+=e*s,x=-e),{x:n,frameId:x}}function g(n,t){const{xmin:i,ymin:m,xmax:s,ymax:e}=t;return j(n,i,m)&&j(n,i,e)&&j(n,s,e)&&j(n,s,m)}function j(n,t,i){return t>=n.xmin&&t<=n.xmax&&i>=n.ymin&&i<=n.ymax}class v{cut(n,t){let i;if(n.rings)this.closed=!0,i=n.rings,this.minPts=4;else{if(!n.paths)return null;this.closed=!1,i=n.paths,this.minPts=2}const m=i.length,s=-2*t;for(let e=0;e<m;e++){const n=i[e];if(n&&n.length>=this.minPts){const t=[];for(const i of n)t.push([i[0]+s,i[1]]);i.push(t)}}return this.closed?n.rings=i:n.paths=i,n}}const J=(0,_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__.create)();


/***/ }),

/***/ 13763:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/DirtyMap.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=-1;class e{constructor(){this._dirties=[{vertexFrom:t,vertexCount:t,indexFrom:t,indexCount:t,allDirty:!1},{vertexFrom:t,vertexCount:t,indexFrom:t,indexCount:t,allDirty:!1},{vertexFrom:t,vertexCount:t,indexFrom:t,indexCount:t,allDirty:!1},{vertexFrom:t,vertexCount:t,indexFrom:t,indexCount:t,allDirty:!1},{vertexFrom:t,vertexCount:t,indexFrom:t,indexCount:t,allDirty:!1}]}hasDirty(){return this._dirties.some((e=>e.indexCount!==t||e.allDirty))}markAllClean(){for(const e of this._dirties)e.indexFrom=t,e.indexCount=t,e.vertexFrom=t,e.vertexCount=t,e.allDirty=!1}markAllDirty(){for(const t of this._dirties)t.allDirty=!0}forEach(e){for(let r=0;r<this._dirties.length;++r){const{indexCount:i,indexFrom:o,vertexCount:n,vertexFrom:x,allDirty:l}=this._dirties[r],s={};let d,m=!1;(l||x!==t&&n>0)&&(s.geometry={count:n,from:x,allDirty:l},m=!0),(l||o!==t&&i>0)&&(d={count:i,from:o,allDirty:l},m=!0),m&&e({indices:d,vertices:s},r)}}markDirtyIndices(e,r,i){const o=this._dirties[e],n=r,x=i;if(!o.allDirty)if(o.indexCount!==t){const t=Math.min(o.indexFrom,n),e=Math.max(o.indexFrom+o.indexCount,n+x)-t;o.indexFrom=t,o.indexCount=e}else o.indexFrom=n,o.indexCount=x}markDirtyVertices(e,r,i,o){const n=this._dirties[e],x=i,l=o;if(!n.allDirty)if(n.vertexCount!==t){const t=Math.min(n.vertexFrom,x),e=Math.max(n.vertexFrom+n.vertexCount,x+l)-t;n.vertexFrom=t,n.vertexCount=e}else n.vertexFrom=x,n.vertexCount=l}}


/***/ }),

/***/ 58526:
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/DisplayRecordStore.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _FreeList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FreeList.js */ 91305);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils.js */ 25840);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=["FILL","LINE","MARKER","TEXT","LABEL"];function o(e){const t=e.getStrides(),r={};for(let i=0;i<t.length;i++)r[s[i]]=t[i];return r}const n=.5;class d{constructor(r,i,s,o){this._strides=r,this._displayList=i,this._freeListsAndStorage={},this._dirtyMap=null,this._dirtyMap=s;for(const n in r){this._freeListsAndStorage[n]={vtxFreeList:o?new _FreeList_js__WEBPACK_IMPORTED_MODULE_1__.FreeList(o):null,idxFreeList:o?new _FreeList_js__WEBPACK_IMPORTED_MODULE_1__.FreeList(o):null,vertexBuffers:{},indexBuffer:o?new Uint32Array(o):null};for(const e in r[n])this._freeListsAndStorage[n].vertexBuffers[e]={data:o?(0,_Utils_js__WEBPACK_IMPORTED_MODULE_2__.allocateTypedArrayBuffer)(o,r[n][e]):null,stride:r[n][e]}}}static fromTileData(t,i){const n=o(t),a=[0,0,0,0,0],x=[0,0,0,0,0],u=t.tileDisplayData.displayObjects;for(const e of u)for(const t of e.displayRecords)a[t.geometryType]=Math.max(a[t.geometryType],t.vertexFrom+t.vertexCount),x[t.geometryType]=Math.max(x[t.geometryType],t.indexFrom+t.indexCount);const f=new d(n,t.tileDisplayData.displayList,i,null);for(let o=0;o<t.tileBufferData.geometries.length;++o){const i=a[o],n=x[o],d=t.tileBufferData.geometries[o],u=s[o],l=f._storageFor(u),c=t.tileBufferData.geometries[o].indexBuffer;let m;l.indexBuffer=c,l.idxFreeList=new _FreeList_js__WEBPACK_IMPORTED_MODULE_1__.FreeList(c.length),l.idxFreeList.allocate(n);for(const e in d.vertexBuffer){const i=t.tileBufferData.geometries[o].vertexBuffer[e];l.vertexBuffers[e].data=i.data,l.vertexBuffers[e].stride=i.stride;const s=(0,_Utils_js__WEBPACK_IMPORTED_MODULE_2__.strideToPackingFactor)(i.stride),n=i.data.length*s/i.stride;m||(m=n)}l.vtxFreeList=new _FreeList_js__WEBPACK_IMPORTED_MODULE_1__.FreeList(m),l.vtxFreeList.allocate(i)}return f}delete(e){const t=s[e.geometryType];this._freeVertices(t,e.vertexFrom,e.vertexCount),this._freeIndices(t,e.indexFrom,e.indexCount),this._displayList.removeFromList(e),e.vertexFrom=void 0,e.indexFrom=void 0}setMeshData(e,t,r,o,n){const d=s[e.geometryType];let a,x;e.meshData=null,void 0===e.vertexFrom?(x=t.vertexCount,a=this._allocateVertices(d,x)):t.vertexCount>e.vertexCount?(this._freeVertices(d,e.vertexFrom,e.vertexCount),x=t.vertexCount,a=this._allocateVertices(d,x)):t.vertexCount===e.vertexCount?(a=e.vertexFrom,x=e.vertexCount):(this._freeVertices(d,e.vertexFrom+t.vertexCount,e.vertexCount-t.vertexCount),a=e.vertexFrom,x=t.vertexCount);let u,f,l,c=!0;if(void 0===e.indexFrom?(u=n,l=t.indexCount,f=this._allocateIndices(d,l)):t.indexCount>e.indexCount?(u=this._displayList.removeFromList(e),this._freeIndices(d,e.indexFrom,e.indexCount),l=t.indexCount,f=this._allocateIndices(d,l)):t.indexCount===e.indexCount?(c=!1,f=e.indexFrom,l=e.indexCount):(u=this._displayList.removeFromList(e),this._freeIndices(d,e.indexFrom+t.indexCount,e.indexCount-t.indexCount),f=e.indexFrom,l=t.indexCount),-1!==a&&-1!==f){const s=this._storageFor(d);if((0,_Utils_js__WEBPACK_IMPORTED_MODULE_2__.copyMeshData)(a,f,s.vertexBuffers,s.indexBuffer,t,r,o),e.vertexFrom=a,e.indexFrom=f,e.vertexCount=t.vertexCount,e.indexCount=t.indexCount,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount);for(const t in r)this._dirtyMap.markDirtyVertices(e.geometryType,t,e.vertexFrom,e.vertexCount)}return c&&this._displayList.addToList(e,u),!0}return-1!==a&&this._freeVertices(d,a,x),-1!==f&&this._freeIndices(d,f,l),e.setMeshDataFromBuffers(t,r,o),e.vertexFrom=void 0,e.vertexCount=0,e.indexFrom=void 0,e.indexCount=0,!1}tryAddMeshData(e,t){const r=t.vertexBuffer,o=t.indexBuffer,n=s[e.geometryType],d=this._allocateVertices(n,e.vertexCount);if(-1===d)return this._freeVertices(n,d,e.vertexCount),!1;const a=this._allocateIndices(n,e.indexCount);if(-1===a)return this._freeVertices(n,d,e.vertexCount),this._freeIndices(n,a,e.indexCount),!1;const x=this._storageFor(n);if((0,_Utils_js__WEBPACK_IMPORTED_MODULE_2__.copyMeshData)(d,a,x.vertexBuffers,x.indexBuffer,e,r,o),e.vertexFrom=d,e.indexFrom=a,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount);for(const t in r)this._dirtyMap.markDirtyVertices(e.geometryType,t,d,e.vertexCount)}return this._displayList.addToList(e),!0}_allocateVertices(e,t){const r=this._storageFor(e),i=r.vtxFreeList.allocate(t);if(-1===i)return-1;return r.vtxFreeList.fragmentation>n?-1:i}_freeVertices(e,t,r){this._storageFor(e).vtxFreeList.free(t,r)}_freeIndices(e,t,r){this._storageFor(e).idxFreeList.free(t,r)}_allocateIndices(e,t){const r=this._storageFor(e),i=r.idxFreeList.allocate(t);if(-1===i)return-1;return r.idxFreeList.fragmentation>n?-1:i}_storageFor(e){return this._freeListsAndStorage[e]}_stridesFor(e,t){return this._strides[e][t]}}


/***/ }),

/***/ 91305:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/FreeList.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreeList": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(e){this._largestRange=null,this._parent=e,this._updateLargestRange()}get largestRange(){return this._largestRange}rangeCreated(e){(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}rangeResized(e,t){e===this._largestRange?e.count<t&&this._updateLargestRange():(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}findBestRange(e){let t=this._parent._freeHead,n=null;for(;null!==t;)t.count>=e&&(!n||t.count-e<n.count-e)&&(n=t),t=t.next;return n}findAdjacentRanges(e,t){let n=!0,r=!1,s=null,o=this._parent._freeHead;for(;n&&!r;){const a=null!==s?s.from+s.count:0,l=null!==o?o.from:this._parent._size;e>=a&&e+t<=l?(n=!1,r=!0):null!==o?(s=o,o=o.next):n=!1}return[s,o]}_updateLargestRange(){let e=null,t=this._parent._freeHead;for(;null!==t;)(!e||t.count>e.count)&&(e=t),t=t.next;this._largestRange=e}}class t{constructor(t,n){this._allocated=0,this._size=t,this._freeHead=t>0?{from:0,count:t,prev:null,next:null}:null,this._bookKeeper=n||new e(this),this._freeHead&&this._bookKeeper.rangeCreated(this._freeHead)}allocate(e){const n=this._bookKeeper.findBestRange(e);if(null===n)return-1;const r=n.from,s=n.count;if(n.from+=e,n.count-=e,this._bookKeeper.rangeResized(n,r,s),this._allocated+=e,0===n.count){const e=null!==n.prev?this._freeHead:n.next;t._removeRange(n),this._freeHead=e}return r}free(e,n){const[r,s]=this._bookKeeper.findAdjacentRanges(e,n),o={from:e,count:n,prev:r,next:s};if(null!==r&&(r.next=o),null!==s&&(s.prev=o),this._bookKeeper.rangeCreated(o),this._allocated-=n,null!==s&&o.from+o.count===s.from){const e=o.from,n=o.count;t._fuse(o,s),t._removeRange(s),this._bookKeeper.rangeResized(o,e,n),this._bookKeeper.rangeResized(s,void 0,0)}if(null!==r&&r.from+r.count===o.from){const e=r.from,n=r.count;t._fuse(r,o),t._removeRange(o),this._bookKeeper.rangeResized(r,e,n),this._bookKeeper.rangeResized(o,void 0,0)}this._freeHead=null!==o.prev?this._freeHead:o}get fragmentation(){const e=this._size-this._allocated;if(0===e)return 0;return 1-this._bookKeeper.largestRange.count/e}static _removeRange(e){null!==e.prev?null!==e.next?(e.prev.next=e.next,e.next.prev=e.prev):e.prev.next=null:null!==e.next&&(e.next.prev=null)}static _fuse(e,t){e.count+=t.count,e.next=t.next,t.from+=t.count,t.count=0,null!==t.next&&(t.next.prev=e)}}


/***/ }),

/***/ 81526:
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GraphicDisplayList.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ 31620);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(e,t,n,...o){t<e.length?e.splice(t,n,...o):e.push(...o)}const o=new Map;o.set(_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLDrawPhase.MAP,[_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLGeometryType.FILL,_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLGeometryType.LINE,_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLGeometryType.MARKER,_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLGeometryType.TEXT]),o.set(_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLDrawPhase.LABEL,[_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLGeometryType.LABEL]),o.set(_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLDrawPhase.LABEL_ALPHA,[_enums_js__WEBPACK_IMPORTED_MODULE_0__.WGLGeometryType.LABEL]);class i{constructor(){this.symbolLevels=[]}replay(e,t,n){for(const o of this.symbolLevels)for(const i of o.zLevels){const o=i.geometryDPInfo.unified;if(o)for(const i of o){const o=e.painter.getGeometryBrush(i.geometryType),r=t.getGeometry(i.geometryType),s={geometryType:i.geometryType,materialKey:i.materialKey,indexFrom:i.indexFrom,indexCount:i.indexCount,draw:(e,t,n)=>{r.draw(e,t,n,i.indexFrom,i.indexCount)}};o.prepareState(e,t),o.drawGeometry(e,t,s,n)}}}get empty(){return!this.symbolLevels||0===this.symbolLevels.length}clear(){this.symbolLevels.length=0}addToList(e,t){if(Array.isArray(e))for(const n of e)this._addToList(n,t);else this._addToList(e,t)}removeFromList(e){Array.isArray(e)||(e=[e]);let t=null;for(const n of e)t=this._removeFromList(n);return t}clone(){const e=new i;for(const t of this.symbolLevels)e.symbolLevels.push(t.clone());return e}splitAfter(e){const t=this._getDisplayList(e.symbolLevel,e.zOrder),n=t.length,o=e.indexFrom+e.indexCount;for(let i=0;i<n;++i){const n=t[i];if(n.geometryType===e.geometryType&&o>n.indexFrom&&o<=n.indexFrom+n.indexCount){if(o<n.indexFrom+n.indexCount){const e=new r;e.geometryType=n.geometryType,e.materialKey=n.materialKey,e.indexFrom=o,e.indexCount=n.indexFrom+n.indexCount-o,t.splice(i+1,0,e),n.indexCount=o-n.indexFrom}return i}}}_addToList(e,t){const o=e.symbolLevel,i=e.zOrder,s=this._getDisplayList(o,i),l=null!=t?t:s.length-1,m=l>=0&&l<s.length?s[l]:null;if(null!==m&&m.materialKey===e.materialKey&&m.indexFrom+m.indexCount===e.indexFrom&&m.geometryType===e.geometryType)m.indexCount+=e.indexCount;else{const t=new r;t.indexFrom=e.indexFrom,t.indexCount=e.indexCount,t.materialKey=e.materialKey,t.geometryType=e.geometryType,n(s,l+1,0,t)}}_removeFromList(e){const t=e.symbolLevel,o=e.zOrder,i=this._getDisplayList(t,o),s=i.length;let l;for(let n=0;n<s;++n){const t=i[n];if(e.indexFrom+e.indexCount>t.indexFrom&&e.indexFrom<t.indexFrom+t.indexCount&&t.geometryType===e.geometryType){l=n;break}}if(void 0!==l){const t=i[l];if(e.indexFrom===t.indexFrom)return t.indexCount-=e.indexCount,t.indexFrom+=e.indexCount,0===t.indexCount&&n(i,l,1),l-1;if(e.indexFrom+e.indexCount===t.indexFrom+t.indexCount)return t.indexCount-=e.indexCount,0===t.indexCount?(n(i,l,1),l-1):l;{const o=t.indexFrom,s=e.indexFrom-t.indexFrom,m=e.indexCount,d=t.indexFrom+t.indexCount-(e.indexFrom+e.indexCount);t.indexCount=s;const y=new r;return y.geometryType=t.geometryType,y.materialKey=t.materialKey,y.indexFrom=o+s+m,y.indexCount=d,n(i,l+1,0,y),l}}return null}_getDisplayList(e,t){let n;const o=this.symbolLevels.length;for(let s=0;s<o;s++)if(this.symbolLevels[s].symbolLevel===e){n=this.symbolLevels[s];break}let i;n||(n=new m,n.symbolLevel=e,this.symbolLevels.push(n));const r=n.zLevels.length;for(let s=0;s<r;s++)if(n.zLevels[s].zLevel===t){i=n.zLevels[s];break}return i||(i=new l,i.geometryDPInfo=new s,i.zLevel=t,n.zLevels.push(i)),i.geometryDPInfo.unified||(i.geometryDPInfo.unified=[]),i.geometryDPInfo.unified}getDPInfoType(){return"unified"}}class r{constructor(){this.materialKey=null,this.indexFrom=0,this.indexCount=0}clone(){const e=new r;return e.geometryType=this.geometryType,e.materialKey=this.materialKey,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e}}class s{constructor(){this.fill=null,this.line=null,this.marker=null,this.text=null,this.label=null,this.unified=null}clone(){const e=new s;return e.fill=this.fill&&this.fill.map((e=>e.clone())),e.line=this.line&&this.line.map((e=>e.clone())),e.marker=this.marker&&this.marker.map((e=>e.clone())),e.text=this.text&&this.text.map((e=>e.clone())),e.label=this.label&&this.label.map((e=>e.clone())),e.unified=this.unified&&this.unified.map((e=>e.clone())),e}}class l{constructor(){this.geometryDPInfo=new s}clone(){const e=new l;return e.zLevel=this.zLevel,e.geometryDPInfo=this.geometryDPInfo.clone(),e}}class m{constructor(){this.zLevels=[]}clone(){const e=new m;e.symbolLevel=this.symbolLevel;for(const t of this.zLevels)e.zLevels.push(t.clone());return e}}


/***/ }),

/***/ 48926:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GraphicTile.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicTile": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _DirtyMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DirtyMap.js */ 13763);
/* harmony import */ var _DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayRecordStore.js */ 58526);
/* harmony import */ var _WGLBuffers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WGLBuffers.js */ 93003);
/* harmony import */ var _WGLTile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WGLTile.js */ 110);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a extends _WGLTile_js__WEBPACK_IMPORTED_MODULE_3__.WGLTile{constructor(){super(...arguments),this._data=null,this._displayList=null,this._lastCommitTime=0,this._hasData=!1,this._invalidated=!1,this._wglBuffers=null,this._dirtyMap=new _DirtyMap_js__WEBPACK_IMPORTED_MODULE_0__.default}destroy(){super.destroy(),this.clear()}get hasData(){return!!this._hasData}get displayObjects(){var t;return null!=(t=this._displayObjects)?t:[]}getGeometry(t){return this._wglBuffers&&this._wglBuffers.has(t)?this._wglBuffers.get(t):null}getDisplayList(){return this._displayList}patch(e){if(!0===e.clear)return this.clear(),void(this._hasData=!1);const i=e.addOrUpdate,a=e.remove;!this._data&&i&&i.tileDisplayData.displayObjects.length?(i.tileDisplayData.computeDisplayList(),this._dirtyMap=new _DirtyMap_js__WEBPACK_IMPORTED_MODULE_0__.default,this._dispRecStore=_DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_1__.default.fromTileData(i,this._dirtyMap),this._data=i,this._dirtyMap.markAllDirty(),this._hasData=!0,e.end&&this.ready()):this._data&&(i&&i.tileDisplayData.displayObjects.length||a.length)?this._doPatchData(e):e.end&&this.ready(),e.end&&!this._data&&this.clear(),this.requestRender(),this.emit("change")}commit(t){t.time&&t.time===this._lastCommitTime||(this._lastCommitTime=t.time,this.visible&&this._data&&(this._wglBuffers||(this._wglBuffers=new _WGLBuffers_js__WEBPACK_IMPORTED_MODULE_2__.default(t.context)),(this._dirtyMap.hasDirty()||this._invalidated)&&(this._invalidated=!1,this._wglBuffers.upload(this._data.tileBufferData,this._dirtyMap),this._displayList=this._data.tileDisplayData.displayList.clone(),this._displayObjects=this._data.tileDisplayData.displayObjects.slice(),this._dirtyMap.markAllClean())))}clear(){this._data=null,this._displayList=null,this._dispRecStore=null,this._wglBuffers&&(this._wglBuffers.dispose(),this._wglBuffers=null)}_doPatchData(t){this._invalidated=!0,this._patchData(t)||(this._dirtyMap.markAllDirty(),this._data.reshuffle(),this._dispRecStore=_DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_1__.default.fromTileData(this._data,this._dirtyMap)),this.requestRender()}_patchData(t){let s=!0;const e=t.addOrUpdate&&t.addOrUpdate.tileDisplayData&&t.addOrUpdate.tileDisplayData.displayObjects||[],i=(t.remove||[]).slice();for(const a of e)null!=a.insertAfter&&i.push(a.id);for(const a of i){const t=this._data.tileDisplayData.displayObjectRegistry.get(a);if(t){this._data.tileDisplayData.displayList.removeFromList(t.displayRecords);for(const e of t.displayRecords)this._dispRecStore.delete(e);this._data.tileDisplayData.displayObjectRegistry.delete(a);const s=this._data.tileDisplayData.displayObjects.indexOf(t);this._data.tileDisplayData.displayObjects.splice(s,1)}}for(const a of e){let e,i=this._data.tileDisplayData.displayObjectRegistry.get(a.id);if(i){const t=i.displayRecords;i.set(a),i.displayRecords=t;const s=i.displayRecords.length;for(let e=0;e<s;++e){const t=i.displayRecords[e],s=a.displayRecords[e];(e>=a.displayRecords.length||t.geometryType!==s.geometryType||t.symbolLevel!==s.symbolLevel||t.zOrder!==s.zOrder||t.materialKey!==s.materialKey)&&(this._dispRecStore.delete(i.displayRecords[e]),e<a.displayRecords.length&&(i.displayRecords[e]=void 0))}i.displayRecords.length=a.displayRecords.length}else{let t;i=a.copy(),i.displayRecords=[],this._data.tileDisplayData.displayObjectRegistry.set(a.id,i);const s=this._data.tileDisplayData.displayObjects;if(null!=i.insertAfter)if(e={},i.insertAfter>=0){const e=this._data.tileDisplayData.displayObjectRegistry.get(i.insertAfter);e?(t=s.indexOf(e)+1,t<s.length?s.splice(t,0,i):(s.push(i),t=s.length)):(s.push(i),t=s.length)}else s.unshift(i),t=0;else s.push(i),t=s.length;if(e){const i=a.displayRecords.length>0?1:0;let l=0;for(let a=t-1;a>=0&&l<i;--a)for(let t=s[a].displayRecords.length-1;t>=0&&l<i;--t){const i=s[a].displayRecords[t],d=this._data.tileDisplayData.displayList.getDPInfoType();e[d]||(e[d]=i,++l)}}}const l=a.displayRecords.length;for(let d=0;d<l;++d){const l=a.displayRecords[d];let r=i.displayRecords[d];r?(r.meshData=l.meshData,r.materialKey=l.materialKey):(r=l.copy(),r.vertexFrom=void 0,r.indexFrom=void 0,i.displayRecords[d]=r);const p=l.geometryType,h=this._data.tileDisplayData.displayList.getDPInfoType(),o=t.addOrUpdate.tileBufferData.geometries[p],y=o.vertexBuffer,c=o.indexBuffer;let n;e&&(n=e[h]?this._data.tileDisplayData.displayList.splitAfter(e[h]):-1),s=this._dispRecStore.setMeshData(r,l,y,c,n)&&s,e&&null!=r.indexFrom&&null!=r.indexFrom&&(e[h]=r)}}return s}}


/***/ }),

/***/ 61051:
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/MemoryRequirements.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(){this._byGeometryType=null}get satisfied(){return!this._byGeometryType}reset(){this._byGeometryType=null}verticesFor(e){return this._byGeometryType?this._byGeometryType[e].vertices:0}indicesFor(e){return this._byGeometryType?this._byGeometryType[e].indices:0}needMore(e,t,i){if(!t&&!i)return;this._byGeometryType||(this._byGeometryType=[{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0}]);const s=this._byGeometryType[e];s.vertices+=t,s.indices+=i}}


/***/ }),

/***/ 21740:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/MeshData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(){this.vertexData=new Map,this.vertexCount=0,this.indexData=[]}clear(){this.vertexData.clear(),this.vertexCount=0,this.indexData=[]}update(t,e,a){for(const s in t)this.vertexData.set(s,t[s]);for(const s in this.vertexData)null===t[s]&&this.vertexData.delete(s);this.vertexCount=e,this.indexData=a}}


/***/ }),

/***/ 22099:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileBufferData.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ 25840);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=5;class f{constructor(){this.geometries=[{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}}]}clone(){const e=new f;for(let r=0;r<this.geometries.length;r++){const f=this.geometries[r],t=e.geometries[r];t.indexBuffer=f.indexBuffer.slice(),t.vertexBuffer={};for(const e in f.vertexBuffer){const{data:r,stride:i}=f.vertexBuffer[e];t.vertexBuffer[e]={data:r.slice(),stride:i}}}return e}static deserialize(t){const i=new f;for(let f=0;f<r;++f){i.geometries[f].indexBuffer=new Uint32Array(t.geometries[f].indexBuffer),i.geometries[f].vertexBuffer={};for(const r in t.geometries[f].vertexBuffer)i.geometries[f].vertexBuffer[r]={data:(0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.allocateTypedArrayBufferwithData)(t.geometries[f].vertexBuffer[r].data,t.geometries[f].vertexBuffer[r].stride),stride:t.geometries[f].vertexBuffer[r].stride}}return i}serialize(){const e={geometries:[{indexBuffer:this.geometries[0].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[1].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[2].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[3].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[4].indexBuffer.buffer,vertexBuffer:{}}]};for(let f=0;f<r;++f)for(const r in this.geometries[f].vertexBuffer)e.geometries[f].vertexBuffer[r]={data:this.geometries[f].vertexBuffer[r].data.buffer,stride:this.geometries[f].vertexBuffer[r].stride};return e}getBuffers(){const e=[];for(let f=0;f<r;++f){e.push(this.geometries[f].indexBuffer.buffer);for(const r in this.geometries[f].vertexBuffer)e.push(this.geometries[f].vertexBuffer[r].data.buffer)}return e}}


/***/ }),

/***/ 87570:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TileData": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _MemoryRequirements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemoryRequirements.js */ 61051);
/* harmony import */ var _TileBufferData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TileBufferData.js */ 22099);
/* harmony import */ var _TileDisplayData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TileDisplayData.js */ 84917);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils.js */ 25840);
/* harmony import */ var _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WGLDisplayRecord.js */ 84035);
/* harmony import */ var _cpuMapped_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cpuMapped/DisplayRecordReader.js */ 76691);
/* harmony import */ var _mesh_VertexBuffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mesh/VertexBuffer.js */ 5340);
/* harmony import */ var _mesh_VertexVector_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mesh/VertexVector.js */ 49145);
/* harmony import */ var _util_Writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/Writer.js */ 29541);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const D=new _MemoryRequirements_js__WEBPACK_IMPORTED_MODULE_1__.default,d=new _MemoryRequirements_js__WEBPACK_IMPORTED_MODULE_1__.default,p=1.5,h=5;function x(e,t){const r={};for(const s in e){const i={data:(0,_Utils_js__WEBPACK_IMPORTED_MODULE_4__.allocateTypedArrayBuffer)(t,e[s]),stride:e[s]};r[s]=i}return r}function B(e){return[e.fill||{},e.line||{},e.icon||{},e.text||{},e.label||{}]}class y{constructor(){this.tileDisplayData=null,this.tileBufferData=null}reshuffle(){D.reset();const e=(0,_TileDisplayData_js__WEBPACK_IMPORTED_MODULE_3__.groupRecordsByGeometryType)(this.tileDisplayData.displayObjects);for(const r of e)for(const e of r)e&&D.needMore(e.geometryType,e.meshData?e.meshData.vertexCount:e.vertexCount,e.meshData?e.meshData.indexData.length:e.indexCount);const t=e.length,s=new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_2__.default;for(let r=0;r<t;++r){s.geometries[r].indexBuffer=new Uint32Array(Math.round(p*D.indicesFor(r)));const e=[];for(const s in this.tileBufferData.geometries[r].vertexBuffer)e.push(this.tileBufferData.geometries[r].vertexBuffer[s].stride);const t=y._computeVertexAlignment(e),i=Math.round(p*D.verticesFor(r)),o=y._align(i,t);for(const f in this.tileBufferData.geometries[r].vertexBuffer){const e=this.tileBufferData.geometries[r].vertexBuffer[f].stride;s.geometries[r].vertexBuffer[f]={stride:e,data:(0,_Utils_js__WEBPACK_IMPORTED_MODULE_4__.allocateTypedArrayBuffer)(o,e)}}}d.reset(),this.tileDisplayData.displayList.clear();for(let r=0;r<t;++r){const t=e[r];for(const e of t){if(e.meshData)e.writeMeshDataToBuffers(d.verticesFor(r),s.geometries[r].vertexBuffer,d.indicesFor(r),s.geometries[r].indexBuffer),e.meshData=null;else{const t=this.tileBufferData.geometries[r].vertexBuffer,i=this.tileBufferData.geometries[r].indexBuffer,a=s.geometries[r].vertexBuffer,f=s.geometries[r].indexBuffer,n=d.verticesFor(r),l=d.indicesFor(r);(0,_Utils_js__WEBPACK_IMPORTED_MODULE_4__.copyMeshData)(n,l,a,f,e,t,i),e.vertexFrom=n,e.indexFrom=l}d.needMore(r,e.vertexCount,e.indexCount)}}for(const r of this.tileDisplayData.displayObjects)this.tileDisplayData.displayList.addToList(r.displayRecords);this.tileBufferData=s}getStrides(){const e=[];for(let t=0;t<this.tileBufferData.geometries.length;++t){const r=this.tileBufferData.geometries[t];e[t]={};for(const s in r.vertexBuffer)e[t][s]=r.vertexBuffer[s].stride}return e}clone(){const e=new y;return e.tileBufferData=this.tileBufferData.clone(),e.tileDisplayData=this.tileDisplayData.clone(),e}_guessSize(){const{displayObjects:e}=this.tileDisplayData,t=Math.min(e.length,4),r=12,s=40;let i=0;for(let a=0;a<t;a++)i=Math.max(i,e[a].displayRecords.length);return 2*(e.length*r+e.length*i*s)}serialize(){const e=this.tileBufferData.serialize(),t=this.tileBufferData.getBuffers(),r=this.tileDisplayData.serialize(new _util_Writer_js__WEBPACK_IMPORTED_MODULE_9__.default(Int32Array,this._guessSize())).buffer();return t.push(r),{result:{displayData:r,bufferData:e},transferList:t}}static fromVertexData(t,r){const s={},i=new Map;for(const e of r)i.set(e.id,e);return (0,_Utils_js__WEBPACK_IMPORTED_MODULE_4__.forEachGeometryType)((r=>{const a=t.data[r];if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(a)){const e=_cpuMapped_DisplayRecordReader_js__WEBPACK_IMPORTED_MODULE_6__.DisplayRecordReader.from(a.records).getCursor();for(;e.next();){const t=e.id,s=e.materialKey,a=e.indexFrom,o=e.indexCount,f=e.vertexFrom,l=e.vertexCount,u=i.get(t),c=new _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_5__.default(t,r,s);c.indexFrom=a,c.indexCount=o,c.vertexFrom=f,c.vertexCount=l,u.displayRecords.push(c)}s[r]=_mesh_VertexBuffer_js__WEBPACK_IMPORTED_MODULE_7__.VertexBuffers.fromVertexData(a,r)}else s[r]=new _mesh_VertexVector_js__WEBPACK_IMPORTED_MODULE_8__.VertexVectors(r,0,{fill:"default"}).intoBuffers()})),y.fromMeshData({displayObjects:r,vertexBuffersMap:s})}static fromMeshData(e){const t=new y,i=new _TileDisplayData_js__WEBPACK_IMPORTED_MODULE_3__.default,a=new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_2__.default;i.displayObjects=e.displayObjects;for(const r in e.vertexBuffersMap){const t=e.vertexBuffersMap[r];a.geometries[r].indexBuffer=t.indexBuffer,a.geometries[r].vertexBuffer=t.namedBuffers}return t.tileDisplayData=i,t.tileBufferData=a,t}static bind(e,t){const r=new y;return r.tileDisplayData=e,r.tileBufferData=t,r}static create(e,t){const i=new y;i.tileDisplayData=new _TileDisplayData_js__WEBPACK_IMPORTED_MODULE_3__.default,i.tileDisplayData.displayObjects=e;const a=[0,0,0,0,0],o=[0,0,0,0,0],f=[[],[],[],[],[]];for(const r of e)for(const e of r.displayRecords)f[e.geometryType].push(e),a[e.geometryType]+=e.meshData.vertexCount,o[e.geometryType]+=e.meshData.indexData.length;const l=new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_2__.default,u=B(t);for(let r=0;r<h;r++){const e=new Uint32Array(o[r]),t=x(u[r],a[r]);_WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_5__.default.writeAllMeshDataToBuffers(f[r],t,e),l.geometries[r]={indexBuffer:e,vertexBuffer:t}}return i.tileBufferData=l,i}static _align(e,t){const r=e%t;return 0===r?e:e+(t-r)}static _computeVertexAlignment(e){let t=!1,r=!1;for(const s of e)s%4==2?t=!0:s%4!=0&&(r=!0);return r?4:t?2:1}}


/***/ }),

/***/ 84917:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileDisplayData.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r),
/* harmony export */   "groupRecordsByGeometryType": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _GraphicDisplayList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphicDisplayList.js */ 81526);
/* harmony import */ var _WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WGLDisplayObject.js */ 15374);
/* harmony import */ var _util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/serializationUtils.js */ 17516);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(s){const t=[[],[],[],[],[]],i=s;for(const e of i)for(const s of e.displayRecords)t[s.geometryType].push(s);return t}class r{constructor(){}get displayObjectRegistry(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map;for(const s of this.displayObjects)this._displayObjectRegistry.set(s.id,s)}return this._displayObjectRegistry}get displayList(){return this._displayList}computeDisplayList(){this._displayList=new _GraphicDisplayList_js__WEBPACK_IMPORTED_MODULE_0__.default;for(const s of this.displayObjects)for(const t of s.displayRecords)this._displayList.addToList(t)}clone(){const s=new r;return this.displayObjects&&(s.displayObjects=this.displayObjects.map((s=>s.clone()))),s}serialize(s){return (0,_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_2__.serializeList)(s,this.displayObjects),s}_deserializeObjects(s){const i=s.readInt32(),e=new Array(i),r=new Map;for(let a=0;a<e.length;++a){const i=_WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_1__.default.deserialize(s);e[a]=i,r.set(i.id,i)}this.displayObjects=e,this._displayList=null,this._displayObjectRegistry=r}static deserialize(s){const t=new r;return t._deserializeObjects(s),t}}


/***/ }),

/***/ 93003:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLBuffers.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Utils.js */ 25840);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a{constructor(t){this.geometryMap=(0,_Utils_js__WEBPACK_IMPORTED_MODULE_8__.createGeometryData)((()=>({indexBuffer:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__.default.createIndex(t,35044),vao:null})),((r,a)=>({vertexBuffer:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__.default.createVertex(t,_Utils_js__WEBPACK_IMPORTED_MODULE_8__.C_VBO_INFO[a])})))}dispose(){for(let e=0;e<5;e++){const t=this.geometryMap[e];if(t){t.data.vao&&t.data.vao.dispose(!1),t.data.indexBuffer&&t.data.indexBuffer.dispose();for(const e in t.buffers)t.buffers[e]&&t.buffers[e].data.vertexBuffer.dispose()}}}get(e){const r=this.geometryMap[e];return{draw(e,s,a,i,f){if(!r.data.vao){const i={};for(const e in r.buffers)i[e]=r.buffers[e].data.vertexBuffer;r.data.vao=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__.default(e,a,s,i,r.data.indexBuffer)}const o=r.data.vao;e.bindVAO(o),e.drawElements(4,f,5125,Uint32Array.BYTES_PER_ELEMENT*i),e.bindVAO(null)}}}has(e){return null!=this.geometryMap[e]}upload(e,t){t.forEach(((t,r)=>{this._upload(t,r,e)}))}_upload(e,t,r){if(e.indices&&(e.indices.allDirty?this._uploadIndices(r,t):null!=e.indices.from&&null!=e.indices.count&&this._uploadIndices(r,t,e.indices.from,e.indices.count)),e.vertices){const s=e.vertices;for(const e in s){const a=s[e];a.allDirty?this._uploadVertices(r,t,e):null!=a.from&&null!=a.count&&this._uploadVertices(r,t,e,a.from,a.count)}}}_uploadVertices(e,t,r,s,a){const i=this.geometryMap[t];if(!i)return;const f=e.geometries[t].vertexBuffer[r];if(!f)return;const o=f.stride,n=f.data.buffer;i.buffers[r]&&n.byteLength>0&&(null!=s&&null!=a?i.buffers[r].data.vertexBuffer.setSubData(n,s*o,s*o,(s+a)*o):i.buffers[r].data.vertexBuffer.setData(n))}_uploadIndices(e,t,r,s){const a=this.geometryMap[t];if(!a)return;const i=4,f=e.geometries[t].indexBuffer.buffer;a.data.indexBuffer&&f.byteLength>0&&(null!=r&&null!=s?a.data.indexBuffer.setSubData(f,r*i,r*i,(r+s)*i):a.data.indexBuffer.setData(f))}}


/***/ }),

/***/ 15374:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLDisplayObject.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WGLDisplayRecord.js */ 84035);
/* harmony import */ var _util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/serializationUtils.js */ 17516);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(s){this.insertAfter=null,this.id=s,this.displayRecords=[]}copy(){const s=new e(this.id);return s.set(this),s}clone(){const s=new e(this.id);return s.displayRecords=this.displayRecords.map((s=>s.clone())),s.insertAfter=this.insertAfter,s}set(s){this.id=s.id,this.displayRecords=s.displayRecords,this.insertAfter=s.insertAfter}serialize(s){return s.push(this.id),(0,_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__.serializeList)(s,this.displayRecords),s}static deserialize(i){const r=i.readInt32(),d=new e(r),o={id:r};return d.displayRecords=(0,_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__.deserializeList)(i,_WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_0__.default,o),d}}


/***/ }),

/***/ 84035:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLDisplayRecord.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _MeshData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MeshData.js */ 21740);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils.js */ 25840);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t,e,s,r=0,i=0){this.id=t,this.geometryType=e,this.materialKey=s,this.minZoom=r,this.maxZoom=i,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0}get sortKey(){return void 0===this._sortKey&&this._computeSortKey(),this._sortKey}clone(){return this.copy()}copy(){const t=new s(this.id,this.geometryType,this.materialKey);return t.vertexFrom=this.vertexFrom,t.vertexCount=this.vertexCount,t.indexFrom=this.indexFrom,t.indexCount=this.indexCount,t.zOrder=this.zOrder,t.symbolLevel=this.symbolLevel,t.meshData=this.meshData,t.minZoom=this.minZoom,t.maxZoom=this.maxZoom,t}setMeshDataFromBuffers(s,r,i){const o=new _MeshData_js__WEBPACK_IMPORTED_MODULE_0__.default;for(const t in r){const i=r[t].stride,a=r[t].data,h=[],n=(0,_Utils_js__WEBPACK_IMPORTED_MODULE_1__.strideToPackingFactor)(i);for(let t=0;t<i*s.vertexCount/n;++t)h[t]=a[t+i*s.vertexFrom/n];o.vertexData.set(t,h)}o.indexData.length=0;for(let t=0;t<s.indexCount;++t)o.indexData[t]=i[t+s.indexFrom]-s.vertexFrom;o.vertexCount=s.vertexCount,this.meshData=o}readMeshDataFromBuffers(s,r){this.meshData?this.meshData.clear():this.meshData=new _MeshData_js__WEBPACK_IMPORTED_MODULE_0__.default;for(const t in s){const r=s[t].stride,i=s[t].data,o=[],a=(0,_Utils_js__WEBPACK_IMPORTED_MODULE_1__.strideToPackingFactor)(r);for(let t=0;t<r*this.vertexCount/a;++t)o[t]=i[t+r*this.vertexFrom/a];this.meshData.vertexData.set(t,o)}this.meshData.indexData.length=0;for(let t=0;t<this.indexCount;++t)this.meshData.indexData[t]=r[t+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount}writeMeshDataToBuffers(t,s,r,i){for(const o in s){const r=s[o].stride,i=this.meshData.vertexData.get(o),a=s[o].data,h=(0,_Utils_js__WEBPACK_IMPORTED_MODULE_1__.strideToPackingFactor)(r);for(let e=0;e<r*this.meshData.vertexCount/h;++e)a[e+r*t/h]=i[e]}for(let e=0;e<this.meshData.indexData.length;++e)i[e+r]=this.meshData.indexData[e]+t;this.vertexFrom=t,this.vertexCount=this.meshData.vertexCount,this.indexFrom=r,this.indexCount=this.meshData.indexData.length}static writeAllMeshDataToBuffers(t,e,s){let r=0,i=0;for(const o of t)o.writeMeshDataToBuffers(r,e,i,s),r+=o.vertexCount,i+=o.indexCount}_computeSortKey(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType}serialize(t){return t.push(this.geometryType),t.push(this.materialKey),t.push(this.vertexFrom),t.push(this.vertexCount),t.push(this.indexFrom),t.push(this.indexCount),t.push(this.minZoom),t.push(this.maxZoom),t}static deserialize(t,e){const r=t.readInt32(),i=t.readInt32(),o=new s(e.id,r,i);return o.vertexFrom=t.readInt32(),o.vertexCount=t.readInt32(),o.indexFrom=t.readInt32(),o.indexCount=t.readInt32(),o.minZoom=t.readInt32(),o.maxZoom=t.readInt32(),o}}


/***/ }),

/***/ 5340:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/VertexBuffer.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexBuffers": () => (/* binding */ r),
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils.js */ 25840);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(e,t){this.data=e,this.stride=t}static decode(r){const s=(0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.allocateTypedArrayBufferwithData)(r.data,r.stride),n=r.stride;return new t(s,n)}static fromVertexVector(r){const s=(0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.allocateTypedArrayBufferwithData)(r.data.buffer(),r.stride),n=r.stride;return new t(s,n)}}class r{constructor(e,t,r){this.geometryType=e,this.indexBuffer=new Uint32Array(t),this.namedBuffers=r}static decode(e){const s=e.geometryType,n=e.indexBuffer,o={};for(const r in e.namedBuffers)o[r]=t.decode(e.namedBuffers[r]);return new r(s,n,o)}static fromVertexData(s,n){const o=s.indices,c=(0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.allocateTypedArrayBufferwithData)(s.vertices,s.stride),i=s.stride,d={geometry:new t(c,i)};return new r(n,o,d)}static fromVertexVectors(e){const s=e.geometryType,n=e.indexVector.buffer(),o={};for(const r in e.namedVectors)o[r]=t.fromVertexVector(e.namedVectors[r]);return new r(s,n,o)}}


/***/ }),

/***/ 49145:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/VertexVector.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexVectors": () => (/* binding */ o),
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils.js */ 25840);
/* harmony import */ var _VertexBuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VertexBuffer.js */ 5340);
/* harmony import */ var _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Writer.js */ 29541);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t,e){this.data=t,this.stride=e}get vertexCount(){const t=this.stride/4,e=this.data.length/t;return e!==(0|e)&&console.debug("Corrupted stride"),e}transfer(t,e){const r=this.data.buffer();t.vertexCount=this.vertexCount,t.data=r,t.stride=this.stride,e.push(r)}}class o{constructor(e,o,n){this.geometryType=e,this.indexVector=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__.default(Uint32Array,6*o),this.namedVectors={};const i=(0,_Utils_js__WEBPACK_IMPORTED_MODULE_0__.getStrides)(e,n);for(const t in i){const e=i[t];let n;switch(e%4){case 0:case 2:n=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__.default(Uint32Array,e*o);break;case 1:case 3:n=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__.default(Uint8Array,e*o)}this.namedVectors[t]=new s(n,e)}}get(t){return this.namedVectors[t].data}getVector(t){return this.namedVectors[t]}transfer(t,e){const r=this.indexVector.buffer(),s={};e.push(r);for(const o in this.namedVectors){const t=this.namedVectors[o];s[o]={},t.transfer(s[o],e)}t.geometryType=this.geometryType,t.indexBuffer=r,t.namedBuffers=s,this.destroy()}intoBuffers(){const t=_VertexBuffer_js__WEBPACK_IMPORTED_MODULE_1__.VertexBuffers.fromVertexVectors(this);return this.destroy(),t}destroy(){this.indexVector=null,this.namedVectors=null}}


/***/ }),

/***/ 17516:
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/serializationUtils.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deserializeList": () => (/* binding */ n),
/* harmony export */   "serializeList": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,n){if(null!==n){e.push(n.length);for(const r of n)r.serialize(e);return e}e.push(0)}function n(e,n,r){const t=e.readInt32(),o=new Array(t);for(let i=0;i<o.length;i++)o[i]=n.deserialize(e,r);return o}


/***/ }),

/***/ 35001:
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/GraphicsReader.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsReader": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeatureSetReader.js */ 56738);
/* harmony import */ var _FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeatureSetReaderJSON.js */ 92722);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o extends _FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_3__.FeatureSetReaderJSON{constructor(r,t){super(r,t,null)}static from(s){const n=_FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_2__.FeatureSetReader.createInstance(),i=[],c=s.filter((r=>!!r.geometry));for(const e of c){const s=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJsonType)(e.geometry);(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__.convertFromGraphics)(i,[e],s,!1,!1,"uid")}return new o(n,i)}get geometryType(){const r=this._current;return r?r.geometryType:null}get insertAfter(){return this._current.insertAfter}readGraphic(){return this._current}getCursor(){return this.copy()}copy(){const r=new o(this.instance,this._features);return this.copyInto(r),r}}


/***/ }),

/***/ 74112:
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/BaseGraphicContainer.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/FeatureContainer.js */ 85026);
/* harmony import */ var _GraphicBoundsRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphicBoundsRenderer.js */ 95855);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends _engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_0__.FeatureContainer{constructor(e){super(e),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer&&(this._boundsRenderer.destroy(),this._boundsRenderer=null)}enableRenderingBounds(e){this._boundsRenderer=new _GraphicBoundsRenderer_js__WEBPACK_IMPORTED_MODULE_1__.default(e),this.requestRender()}get hasLabels(){return!1}onTileData(e,s){e.patch(s),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,s){for(const t of this.children)t.isReady&&t.hasData&&(t.commit(e),e.context.setStencilFunction(514,t.stencilRef,255),t._displayList.replay(e,t,s))}}


/***/ }),

/***/ 95855:
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicBoundsRenderer.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ 72425);
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat3f32.js */ 87266);
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec2f32.js */ 74181);
/* harmony import */ var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec3f32.js */ 30773);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../geometry/support/normalizeUtils.js */ 46010);
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/Program.js */ 9713);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/enums.js */ 42909);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../engine/DisplayObject.js */ 17821);
/* harmony import */ var _engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../engine/webgl/Utils.js */ 25840);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d=Math.PI/180,p=4;class _ extends _engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_11__.DisplayObject{constructor(t){super(),this._dvsMat3=(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__.c)(),this._localOrigin={x:0,y:0},this._getBounds=t}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program&&(this._program.dispose(),this._program=null)}doRender(t){const{context:e}=t,s=this._getBounds();if(s.length<1)return;this._createShaderProgram(e),this._updateMatricesAndLocalOrigin(t),this._updateBufferData(e,s),e.setBlendingEnabled(!0),e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1),e.setBlendFunction(1,771),e.setColorMask(!0,!0,!0,!0);const r=this._program;e.bindVAO(this._vao),e.useProgram(r),r.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),e.gl.lineWidth(1),e.drawElements(1,8*s.length,5125,0),e.bindVAO()}_createTransforms(){return{dvs:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_1__.c)()}}_createShaderProgram(t){if(this._program)return;const e="precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }",s="precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }";this._program=new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_7__.Program(t,e,s,g().attributes)}_updateMatricesAndLocalOrigin(o){const{state:l}=o,{displayMat3:m,size:u,resolution:c,pixelRatio:h,rotation:p,viewpoint:_}=l,g=d*p,{x:v,y:b}=_.targetGeometry,x=(0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_4__.normalizeMapX)(v,l.spatialReference);this._localOrigin.x=x,this._localOrigin.y=b;const j=h*u[0],y=h*u[1],B=c*j,w=c*y,M=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.b)(this._dvsMat3);(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.m)(M,M,m),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.c)(M,M,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__.f)(j/2,y/2)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.d)(M,M,(0,_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_3__.f)(u[0]/B,-y/w,1)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.r)(M,M,-g)}_updateBufferData(t,e){const{x:s,y:r}=this._localOrigin,i=2*p*e.length,o=new Float32Array(i),a=new Uint32Array(8*e.length);let n=0,f=0;for(const l of e)l&&(o[2*n+0]=l[0]-s,o[2*n+1]=l[1]-r,o[2*n+2]=l[0]-s,o[2*n+3]=l[3]-r,o[2*n+4]=l[2]-s,o[2*n+5]=l[3]-r,o[2*n+6]=l[2]-s,o[2*n+7]=l[1]-r,a[f+0]=n+0,a[f+1]=n+3,a[f+2]=n+3,a[f+3]=n+2,a[f+4]=n+2,a[f+5]=n+1,a[f+6]=n+1,a[f+7]=n+0,n+=4,f+=8);if(this._vertexBuffer?this._vertexBuffer.setData(o.buffer):this._vertexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_5__.default.createVertex(t,35048,o.buffer),this._indexBuffer?this._indexBuffer.setData(a):this._indexBuffer=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_5__.default.createIndex(t,35048,a),!this._vao){const e=g();this._vao=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_10__.default(t,e.attributes,e.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const g=()=>(0,_engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_12__.createProgramDescriptor)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:5126}]});


/***/ }),

/***/ 59204:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicStore.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _chunks_rbush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/rbush.js */ 30928);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ 7401);
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../geometry/support/boundsUtils.js */ 15783);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../geometry/support/normalizeUtils.js */ 46010);
/* harmony import */ var _geometry_support_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../geometry/support/normalizeUtilsCommon.js */ 13409);
/* harmony import */ var _symbols_cim_CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../symbols/cim/CIMSymbolDrawHelper.js */ 52390);
/* harmony import */ var _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../symbols/cim/CIMSymbolHelper.js */ 14915);
/* harmony import */ var _GraphicStoreItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GraphicStoreItem.js */ 27021);
/* harmony import */ var _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graphicsUtils.js */ 73896);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const g={minX:0,minY:0,maxX:0,maxY:0},f=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__.create)(),_=1e-5;function b(e,t,r,i,s){return g.minX=t,g.minY=r,g.maxX=i,g.maxY=s,e.search(g)}function y(e){return{minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}}class I{constructor(e,t,r,s,o,n,h){this._graphics=s,this._onAdd=o,this._onRemove=n,this._hashToCIM=h,this._index=(0,_chunks_rbush_js__WEBPACK_IMPORTED_MODULE_2__.r)(9,y),this._itemByGraphic=new Map,this._inflatedSizeHelper=new _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__.CIMSimbolInflatedSizeHelper,this._tileInfoView=e,this._uidFieldName=r;const u=e.getClosestInfoForScale(t);u&&(this._resolution=this._tileInfoView.getTileResolution(u.level))}setResourceManager(e){this._cimResourceManager=e,this._hittestDrawHelper=new _symbols_cim_CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_7__.HittestDrawHelper(e)}hitTest(e,t,r,i,n){e=(0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_5__.normalizeMapX)(e,this._tileInfoView.spatialReference);const h=.5*i*window.devicePixelRatio*r;f[0]=e-h,f[1]=t-h,f[2]=e+h,f[3]=t+h;const a=.5*i*(r+_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__.PIXEL_BUFFER),l=b(this._index,e-a,t-a,e+a,t+a);if(!l||0===l.length)return[];const c=[],m=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__.create)(),p=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__.create)();for(const s of l){const{geometry:e,symbolResource:t}=s;this._getSymbolBounds(m,t,e,p,n),p[3]=p[2]=p[1]=p[0]=0,(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__.intersects)(m,f)&&s.graphic.visible&&c.push(s)}if(0===c.length)return[];const g=this._hittestDrawHelper,_=[];for(const s of c){const{geometry:e,symbolResource:t}=s,{hash:r,textInfo:o}=t,h=this._hashToCIM.get(r);h&&(g.hitTest(f,h.symbol,e,o,n,i)&&_.push(s))}return _.sort(z),_.map((e=>e.graphic))}getGraphicsData(e,t,r){const i=this._searchForItems(t);if(0===i.length||0===r.length)return[];i.sort(((e,t)=>e.zorder-t.zorder)),i[0].insertAfter=-1;for(let l=1;l<i.length;l++)i[l].insertAfter=i[l-1].graphic.uid;i.sort(((e,t)=>e.graphic.uid-t.graphic.uid)),r.sort(((e,t)=>e.uid-t.uid));let s,o=0,n=0;const h=t.resolution,u=[],a={originPosition:"upperLeft",scale:[h,h],translate:[t.bounds[0],t.bounds[3]]};for(const l of r){for(n=-2;o<i.length;)if(s=i[o],o++,l.uid===s.graphic.uid){n=s.insertAfter;break}if(!s.geometry||-2===n)continue;const r=s.getGeometryQuantized(a,t.bounds,this._tileInfoView.spatialReference,h),c={...s.graphic.attributes};c[this._uidFieldName]=l.uid,null==s.groupId&&(s.groupId=e.createTemplateGroup(s.symbol,null)),u.push({centroid:_GraphicStoreItem_js__WEBPACK_IMPORTED_MODULE_9__.default.getCentroidQuantized(s,a),geometry:r,attributes:c,symbol:s.symbol,groupId:s.groupId,insertAfter:n,zorder:s.zorder})}return u.sort(((e,t)=>e.zorder-t.zorder)),u}queryTileData(e,t){if(0===this._graphics.length)return[];const{bounds:r,resolution:i}=t,s=this._searchForItems(t),o=[];return 0===s.length||this._createTileGraphics(o,e,s,{originPosition:"upperLeft",scale:[i,i],translate:[r[0],r[3]]},t),o}has(e){return this._itemByGraphic.has(e)}getBounds(e){const t=this._itemByGraphic.get(e);return t?t.bounds:null}getAllBounds(){return Array.from(this._itemByGraphic.values()).filter((e=>e.graphic.visible)).map((e=>e.bounds))}addOrModify(r,i,s){if(!r||(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(i))return;this.has(r)&&this.remove(r),this._onAdd(r);const o=[0,0,0,0],n=this._getSymbolBounds(null,i,s,o,0),h=_GraphicStoreItem_js__WEBPACK_IMPORTED_MODULE_9__.default.acquire(r,i,s,(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(n)?n:null,o);return this._itemByGraphic.set(r,h),s&&this._index.insert(h),h.bounds}remove(e){if(!this._itemByGraphic.has(e))return;this._onRemove(e);const t=this._itemByGraphic.get(e);t.bounds&&this._index.remove(t),this._itemByGraphic.delete(e)}updateZ(){const e=this._graphics.items;let t,r;for(let i=0;i<e.length;i++)r=e[i],t=this._itemByGraphic.get(r),t&&(t.zorder=i)}update(e,r,i){const s=this._itemByGraphic.get(e);s.groupId=null;const o=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__.clone)(s.bounds);this._index.remove(s);const h=this._getSymbolBounds(s.bounds,r,i,s.size,0);return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(h)&&s.set(e,r,i,h,s.size),i&&this._index.insert(s),{oldBounds:o,newBounds:s.bounds}}updateLevel(e){if(this._resolution===e)return;this._resolution=e,this._index.clear();const r=this._itemByGraphic,i=[];for(const[s,o]of r){const e=this._getSymbolBounds(o.bounds,o.symbolResource,o.geometry,o.size,0);o.geometry&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(e)&&(o.bounds=e,i.push(o))}this._index.load(i)}clear(){this._itemByGraphic.clear(),this._index.clear()}_createTileGraphics(e,t,r,i,s){const o=this._uidFieldName,n=this._tileInfoView.spatialReference,{bounds:h,resolution:u}=s;let a,l,c,d;r.sort(((e,t)=>e.zorder-t.zorder));for(let p=0;p<r.length;p++){c=r[p],a=c.graphic,l=c.getGeometryQuantized(i,h,n,u),d=0===p?-1:r[p-1].graphic.uid;const s={...c.graphic.attributes};s[o]=a.uid,null==c.groupId&&(c.groupId=t.createTemplateGroup(c.symbol,null)),e.push({centroid:_GraphicStoreItem_js__WEBPACK_IMPORTED_MODULE_9__.default.getCentroidQuantized(c,i),geometry:l,attributes:s,symbol:c.symbol,groupId:c.groupId,insertAfter:d,zorder:c.zorder})}}_searchForItems(e){const t=this._tileInfoView.spatialReference,r=e.bounds;if(t.isWrappable){const[i,o]=(0,_geometry_support_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_6__.getSpatialReferenceMinMaxX)(t),n=Math.abs(r[2]-o)<_,h=Math.abs(r[0]-i)<_;if((!n||!h)&&(n||h)){const t=e.resolution;let h;h=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__.create)(n?[i,r[1],i+t*_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__.PIXEL_BUFFER,r[3]]:[o-t*_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__.PIXEL_BUFFER,r[1],o,r[3]]);const u=b(this._index,r[0],r[1],r[2],r[3]),a=b(this._index,h[0],h[1],h[2],h[3]);return[...new Set([...u,...a])]}}return b(this._index,r[0],r[1],r[2],r[3])}_getSymbolBounds(e,t,i,o,n){if(!t||!t.symbol||!i)return null;if(e||(e=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__.create)()),(0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__.getBoundsXY)(e,i),!o||0===o[0]&&0===o[1]&&0===o[2]&&0===o[3]){const{hash:e,textInfo:i}=t,s=this._hashToCIM.get(e);if(!s)return null;o||(o=[0,0,0,0]);const h=this._inflatedSizeHelper.getSymbolInflateSize(o,s.symbol,this._cimResourceManager,n,i);o[0]=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(h[0]),o[1]=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(h[1]),o[2]=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(h[2]),o[3]=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(h[3])}const u=this._resolution,a=_symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_8__.CIMSimbolInflatedSizeHelper.SafeSize(o);return e[0]-=a*u,e[1]-=a*u,e[2]+=a*u,e[3]+=a*u,e}}const z=(e,t)=>{const r=(0,_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__.graphicGeometryToNumber)(e.graphic),i=(0,_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_10__.graphicGeometryToNumber)(t.graphic);return r===i?t.zorder-e.zorder:r-i};


/***/ }),

/***/ 27021:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicStoreItem.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ 7401);
/* harmony import */ var _geometry_support_centroid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/centroid.js */ 87449);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _geometry_support_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../geometry/support/normalizeUtilsCommon.js */ 13409);
/* harmony import */ var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../geometry/support/quantizationUtils.js */ 91409);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../layers/graphics/OptimizedGeometry.js */ 82760);
/* harmony import */ var _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./graphicsUtils.js */ 73896);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_7__.default,z=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_7__.default,b="esriGeometryPolyline";function j(t){t.coords.length=0,t.lengths.length=0}class _{constructor(){this.bounds=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__.create)(),this.graphic=null}static acquire(t=null,e,s,r,o){let i;return 0===_._pool.length?i=new _:(i=_._pool.pop(),this._set.delete(i)),i.acquire(t,e,s,r,o),i}static release(t){t&&!this._set.has(t)&&(t.release(),this._pool.push(t),this._set.add(t))}static getCentroidQuantized(e,s){if((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.isPolygon)(e.geometry)){const o=e.symbol;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(o))return null;if((0,_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_8__.isMarkerSymbol)(o.type)||(0,_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_8__.isTextSymbol)(o.type)){const t=(0,_geometry_support_centroid_js__WEBPACK_IMPORTED_MODULE_2__.polygonCentroid)(e.geometry);return (0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_5__.quantizePoint)(s,{},{x:t[0],y:t[1]},!1,!1)}}return null}acquire(t=null,e,s,r,o){t&&this.set(t,e,s,r,o)}release(){this.graphic=null,this.symbolResource=null,this.geometry=null}get symbol(){return this.symbolResource.symbol}set(t,e,s,r,o){this.graphic=t,this.geometry=s,this.symbolResource=e,this.bounds=r,o&&(this.size=o)}getGeometryQuantized(t,e,r,h){const g=this.geometry;if((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.isPolygon)(g)){const e=g.rings;if(1===e.length&&2===e[0].length)return (0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_5__.quantizeGeometry)(t,{paths:[[e[0][0],e[0][1]]]})}else{if((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.isPolyline)(g))return j(d),j(z),(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__.convertFromPolyline)(d,g),(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__.generalizeOptimizedGeometry)(z,d,g.hasZ,g.hasM,b,t.scale[0]),(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__.quantizeOptimizedGeometry)(d,z,g.hasZ,g.hasM,b,t),(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__.convertToPolyline)(d,g.hasZ,g.hasM);if((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.isMultipoint)(g)){const o=.5*h*Math.max(Math.abs(this.size[0])+this.size[2]-this.size[0],Math.abs(this.size[1])+this.size[3]-this.size[1]),[i,n]=(0,_geometry_support_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__.getSpatialReferenceMinMaxX)(r),m=n-i,u=g.points.filter((t=>{if(t[0]+o>n||t[0]-o<i){const r=[...t];return t[0]+o>n?r[0]-=m:r[0]+=m,(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__.containsPointWithMargin)(e,t,o)||(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__.containsPointWithMargin)(e,r,o)}return (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__.containsPointWithMargin)(e,t,o)}));return 0===u.length?{points:u}:(0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_5__.quantizeGeometry)(t,{points:u})}}return (0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_5__.quantizeGeometry)(t,this.geometry)}}_._pool=[],_._set=new Set;


/***/ }),

/***/ 20483:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicsView2D.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ it)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Accessor.js */ 98240);
/* harmony import */ var _core_BidiText_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/BidiText.js */ 40295);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ 7401);
/* harmony import */ var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../geometry/support/coordsUtils.js */ 57141);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _geometry_support_normalizeUtilsSync_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../geometry/support/normalizeUtilsSync.js */ 1552);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../layers/graphics/data/projectionSupport.js */ 79371);
/* harmony import */ var _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../symbols/cim/CIMSymbolHelper.js */ 14915);
/* harmony import */ var _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../symbols/support/defaults.js */ 98667);
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../engine/webgl/definitions.js */ 30603);
/* harmony import */ var _engine_webgl_GraphicTile_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../engine/webgl/GraphicTile.js */ 48926);
/* harmony import */ var _engine_webgl_TileData_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../engine/webgl/TileData.js */ 87570);
/* harmony import */ var _engine_webgl_WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../engine/webgl/WGLDisplayObject.js */ 15374);
/* harmony import */ var _engine_webgl_mesh_MeshData_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../engine/webgl/mesh/MeshData.js */ 8071);
/* harmony import */ var _engine_webgl_mesh_factories_WGLMeshFactory_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../engine/webgl/mesh/factories/WGLMeshFactory.js */ 96433);
/* harmony import */ var _engine_webgl_mesh_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../engine/webgl/mesh/templates/WGLTemplateStore.js */ 34371);
/* harmony import */ var _engine_webgl_util_Matcher_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../engine/webgl/util/Matcher.js */ 7077);
/* harmony import */ var _features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../features/schemaUtils.js */ 51904);
/* harmony import */ var _features_support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../features/support/AttributeStore.js */ 28603);
/* harmony import */ var _features_support_ComputedAttributeStorage_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../features/support/ComputedAttributeStorage.js */ 38570);
/* harmony import */ var _features_support_GraphicsReader_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../features/support/GraphicsReader.js */ 35001);
/* harmony import */ var _GraphicStore_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./GraphicStore.js */ 59204);
/* harmony import */ var _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./graphicsUtils.js */ 73896);
/* harmony import */ var _support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../support/cimSymbolUtils.js */ 21835);
/* harmony import */ var _layers_GraphicsView_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../layers/GraphicsView.js */ 63075);
/* harmony import */ var _webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../webgl/capabilities.js */ 62965);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





































const tt = (0,_core_has_js__WEBPACK_IMPORTED_MODULE_5__.default)("esri-2d-graphic-debug");

function et(t, e, s) {
  if (s.has(t)) return s.get(t);
  const i = {
    tile: e,
    addedOrModified: [],
    removed: []
  };
  return s.set(t, i), i;
}

let st = class extends (0,_layers_GraphicsView_js__WEBPACK_IMPORTED_MODULE_36__.GraphicsView)((0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_4__.HandleOwnerMixin)(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__.default)) {
  constructor(t) {
    super(t), this._storage = new _features_support_ComputedAttributeStorage_js__WEBPACK_IMPORTED_MODULE_31__.ComputedAttributeStorage(), this._displayIds = new Map(), this._controller = new AbortController(), this._tiles = new Map(), this._graphicStoreUpdate = !1, this._graphicsSet = new Set(), this._matcher = Promise.resolve(null), this._tileUpdateSet = new Set(), this._tilesToUpdate = new Map(), this._graphicIdToAbortController = new Map(), this._attached = !1, this._highlightIds = new Map(), this._updatingGraphicsTimer = null, this._hashToExpandedSymbol = new Map(), this._hashToExpandedSymbolPromise = new Map(), this._hashToCIMSymbolPromise = new Map(), this._hashToCIM = new Map(), this._processing = !1, this._needsProcessing = !1, this._pendingUpdate = {
      added: new Set(),
      updated: new Set(),
      removed: new Set()
    }, this.lastUpdateId = -1, this.updateRequested = !1, this.graphicUpdateHandler = this.graphicUpdateHandler.bind(this);
  }

  _createMatcher(t, e, s) {
    if (t) {
      const i = (0,_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_29__.createMatcherSchema)({
        indexCount: 0,
        fields: {}
      }, "feature", t);
      this._matcher = (0,_engine_webgl_util_Matcher_js__WEBPACK_IMPORTED_MODULE_28__.createMatcher)(i, e, null, s);
    }
  }

  _createDisplayId(t) {
    return this._displayIds.has(t) || this._displayIds.set(t, this._storage.createDisplayId()), this._displayIds.get(t);
  }

  initialize() {
    this._attributeStore = new _features_support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_30__.default({
      type: "local",
      initialize: t => Promise.resolve(this.container.attributeView.initialize(t)),
      update: t => this.container.attributeView.requestUpdate(t),
      render: () => this.container.requestRender()
    }, (0,_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_37__.default)()), this.container.hasHighlight = () => !!this._highlightIds.size;

    const t = t => {
      this._createDisplayId(t.uid), this._setFilterState(t.uid, t.visible);
    },
          e = t => {
      const e = this._displayIds.get(t.uid);

      this._displayIds.delete(t.uid), this._storage.releaseDisplayId(e);
    },
          s = new _engine_webgl_mesh_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_27__.WGLTemplateStore(this.container.getMaterialItems.bind(this.container), this.view.featuresTilingScheme.tileInfo);

    this._graphicStore = new _GraphicStore_js__WEBPACK_IMPORTED_MODULE_33__.default(this.view.featuresTilingScheme, this.view.state.scale, this.uid, this.graphics, t, e, this._hashToCIM), this._meshFactory = new _engine_webgl_mesh_factories_WGLMeshFactory_js__WEBPACK_IMPORTED_MODULE_26__.WGLMeshFactory(null, this.uid, s), this._templateStore = s, this.handles.add([this.watch("renderer", t => {
      this._createMatcher(t, s, this.container.stage.resourceManager);

      for (const e of this.graphics) this._pendingUpdate.updated.add(e);

      this.requestUpdate();
    }), this.view.graphicsTileStore.on("update", t => this._onTileUpdate(t)), this.container.on("attach", () => {
      tt && this.container.enableRenderingBounds(() => this._graphicStore.getAllBounds()), this.graphics.items.length > 0 && this._graphicsChangeHandler({
        target: this.graphics,
        added: this.graphics.items,
        removed: [],
        moved: []
      }), this.handles.add(this.graphics.on("change", t => this._graphicsChangeHandler(t)), "graphics");
      const t = this.container.stage.resourceManager;
      this._createMatcher(this.renderer, s, t), this._graphicStore.setResourceManager(t), this._attached = !0, this.notifyChange("updating");
    })]);
    const i = this.view.graphicsTileStore.tiles;

    this._onTileUpdate({
      added: i,
      removed: []
    });
  }

  destroy() {
    this._updatingGraphicsTimer && (clearTimeout(this._updatingGraphicsTimer), this._updatingGraphicsTimer = null, this.notifyChange("updating")), this._controller.abort(), this.container.destroy(), this._set("graphics", null), this._graphicStore.clear(), this._attributeStore = null, this._hashToExpandedSymbol.clear(), this.view = null, this.renderer = null, this._hashToCIM.clear(), this._hashToCIMSymbolPromise.clear(), this._hashToExpandedSymbolPromise.clear();
  }

  get updating() {
    return !this._attached || null !== this._updatingGraphicsTimer || this._tileUpdateSet.size > 0 || this._tilesToUpdate.size > 0;
  }

  hitTest(t) {
    if (!this.view || !this.view.position) return null;
    const {
      resolution: e,
      rotation: s
    } = this.view.state;
    return this._graphicStore.hitTest(t.x, t.y, 2, e, s);
  }

  update(t) {
    (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(this._controller.signal);
    const e = t.state,
          {
      resolution: s
    } = e;

    if (this._graphicStore.updateLevel(s), this._graphicStoreUpdate = !0, this.updateRequested = !1, this._pendingUpdate.updated.size > 0) {
      if (!this._processing) return void this._updateGraphics();
      this._needsProcessing = !0;
    }
  }

  viewChange() {
    this.requestUpdate();
  }

  requestUpdate() {
    this.updateRequested || (this.updateRequested = !0, this.requestUpdateCallback());
  }

  processUpdate(t) {
    this.updateRequested && (this.updateRequested = !1, this.update(t));
  }

  graphicUpdateHandler(t) {
    const {
      graphic: e,
      property: s,
      newValue: i
    } = t;

    switch (s) {
      case "attributes":
        break;

      case "geometry":
      case "symbol":
        this._pendingUpdate.updated.add(e), this.requestUpdate();
        break;

      case "visible":
        this._setFilterState(e.uid, i), this._attributeStore.sendUpdates();
    }
  }

  addHighlight(t) {
    for (const e of t) if (this._highlightIds.has(e)) {
      const t = this._highlightIds.get(e);

      this._highlightIds.set(e, t + 1);
    } else this._highlightIds.set(e, 1);

    this._updateHighlight();
  }

  removeHighlight(t) {
    for (const e of t) if (this._highlightIds.has(e)) {
      const t = this._highlightIds.get(e) - 1;
      0 === t ? this._highlightIds.delete(e) : this._highlightIds.set(e, t);
    }

    this._updateHighlight();
  }

  _updateHighlight() {
    const t = Array.from(this._highlightIds.keys()),
          e = t.map(t => this._displayIds.get(t));

    this._attributeStore.setHighlight(t, e);
  }

  _getIntersectingTiles(t) {
    const e = this._graphicStore.getBounds(t);

    if (!e || 0 === (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__.width)(e) || 0 === (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__.height)(e)) return [];
    const s = (0,_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.intersectingInternationalDateline)(e, this.view.spatialReference);
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(s) ? [...new Set([...this.view.graphicsTileStore.boundsIntersections(s[0]), ...this.view.graphicsTileStore.boundsIntersections(s[1])])] : this.view.graphicsTileStore.boundsIntersections(e);
  }

  _updateTile(t) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(_this._controller.signal);

      const e = t.tile,
            s = _this._getGraphicsData(_this._templateStore, e, t.addedOrModified),
            i = yield _this._processGraphics(e, s);

      return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(_this._controller.signal), _this._patchTile(e.key, {
        type: "update",
        addOrUpdate: i,
        remove: t.removed,
        end: !0,
        clear: !1,
        sort: !1
      }), i;
    })();
  }

  _patchTile(t, e) {
    if (!this._tiles.has(t)) return;

    const s = this._tiles.get(t);

    this.container.onTileData(s, e), this.container.requestRender();
  }

  _graphicsChangeHandler(t) {
    const e = this._pendingUpdate;

    for (const s of t.added) e.added.add(s);

    for (const s of t.moved) e.updated.add(s);

    for (const s of t.removed) this._pendingUpdate.added.has(s) ? e.added.delete(s) : e.removed.add(s);

    this._processing ? this._needsProcessing = !0 : this._updateGraphics();
  }

  _getGraphicsToUpdate() {
    const t = {
      added: [],
      removed: [],
      updated: []
    };
    if (!this.graphics) return t;
    const e = this._pendingUpdate;

    for (const s of this.graphics.items) e.added.has(s) ? t.added.push(s) : e.updated.has(s) && t.updated.push(s);

    for (const s of e.removed) this._graphicStore.has(s) && t.removed.push(s);

    return e.added.clear(), e.removed.clear(), e.updated.clear(), t;
  }

  _updateGraphics() {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2._processing = !0;

      const {
        added: t,
        removed: e,
        updated: s
      } = _this2._getGraphicsToUpdate(),
            i = _this2._tilesToUpdate;

      let r;

      try {
        if (!_this2._graphicStoreUpdate) {
          const t = _this2.view.state,
                {
            resolution: e
          } = t;

          _this2._graphicStore.updateLevel(e);
        }

        const o = [],
              a = new Array(t.length + e.length);

        for (let t = 0; t < s.length; t++) {
          const e = s[t],
                h = _this2._getIntersectingTiles(e);

          for (const t of h) {
            r = t.id;
            et(r, t, i).removed.push(_this2._displayIds.get(e.uid));
          }

          o.push(_this2._updateGraphic(e, null)), a[t] = e;
        }

        const h = s.length;

        for (let e = 0; e < t.length; e++) {
          const s = t[e];
          a[h + e] = s, _this2._graphicsSet.add(s), o.push(_this2._addGraphic(s));
        }

        for (const t of e) {
          _this2._abortProcessingGraphic(t.uid);

          const e = _this2._getIntersectingTiles(t);

          for (const s of e) {
            r = s.id;
            et(r, s, i).removed.push(_this2._displayIds.get(t.uid));
          }

          _this2._graphicsSet.delete(t), _this2._graphicStore.remove(t);
        }

        let n;
        _this2._flipUpdatingGraphics(), yield Promise.all(o);

        for (let t = 0; t < a.length; t++) {
          n = a[t];

          const e = _this2._getIntersectingTiles(n);

          for (const t of e) {
            r = t.id;
            et(r, t, i).addedOrModified.push(n);
          }
        }

        _this2._graphicStore.updateZ();

        const l = [];

        for (const [t, e] of i) l.push(_this2._updateTile(e));

        yield Promise.all(l);
      } catch (o) {
        (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.isAbortError)(o), 0;
      }

      for (const a of e) try {
        const t = yield _this2._getSymbolForGraphic(a, {});

        if (t) {
          const e = t.hash();

          _this2._hashToExpandedSymbol.delete(e);
        }
      } catch (o) {
        (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.isAbortError)(o), 0;
      }

      i.clear(), _this2.notifyChange("updating"), _this2._processing = !1, _this2._needsProcessing && (_this2._needsProcessing = !1, _this2._updateGraphics());
    })();
  }

  _getArcadeInfo(t) {
    const e = (t.attributes ? Object.keys(t.attributes) : []).map(e => ({
      name: e,
      alias: e,
      type: "string" == typeof t.attributes[e] ? "esriFieldTypeString" : "esriFieldTypeDouble"
    }));
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(t.geometry) ? null : {
      geometryType: (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__.getJsonType)(t.geometry),
      spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__.default.fromJSON(t.geometry.spatialReference),
      fields: e
    };
  }

  _getSymbolForGraphic(t, e) {
    return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(this._controller.signal), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(t.symbol) ? Promise.resolve(t.symbol) : (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.renderer) ? this.renderer.getSymbolAsync(t, {
      scale: this.view.scale,
      abortOptions: e
    }) : Promise.resolve(this._getNullSymbol(t));
  }

  _getCIMSymbol(t, e, s) {
    let i = this._hashToCIM.get(e);

    if (i) return Promise.resolve(i);
    const r = (0,_symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_19__.symbolToCIM)(t);

    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(r)) {
      if ("CIMSymbolReference" === r.type) return i = r, this._hashToCIM.set(e, i), Promise.resolve(i);

      let t = this._hashToCIMSymbolPromise.get(e);

      return t || (t = r.fetchCIMSymbol(s).then(t => (this._hashToCIM.set(e, t.data), this._hashToCIMSymbolPromise.delete(e), t)).catch(t => (this._hashToCIMSymbolPromise.delete(e), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAbortError)(t), null)), this._hashToCIMSymbolPromise.set(e, t), t);
    }

    return Promise.resolve(null);
  }

  _expandCIMSymbol(t, e, s, i) {
    const r = this._hashToExpandedSymbol.get(s);

    if (r) return Promise.resolve(r);

    let o = this._hashToExpandedSymbolPromise.get(s);

    if (o) return o;

    const a = this.container.stage,
          h = this._getArcadeInfo(e),
          n = (0,_features_schemaUtils_js__WEBPACK_IMPORTED_MODULE_29__.createSymbolSchema)(t);

    return o = (0,_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_35__.expandSymbol)(n, h, a.resourceManager, i), this._hashToExpandedSymbolPromise.set(s, o), o.then(t => (this._hashToExpandedSymbol.set(s, t), this._hashToExpandedSymbolPromise.delete(s), t)), o;
  }

  _getSymbolResources(t, e) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(_this3._controller.signal);
      return _this3.container.stage ? _this3._getSymbolForGraphic(t, e).then(i => {
        const r = i.hash();
        return _this3._getCIMSymbol(i, r, e).then(i => (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(i) ? null : _this3._expandCIMSymbol(i, t, r, e).then(t => {
          const e = t.layers.filter(t => "text" === t.type && "string" == typeof t.text);

          if (e && e.length > 0) {
            const i = new Array(e.length);

            for (let t = 0; t < e.length; t++) {
              const r = e[t],
                    o = [],
                    [a] = (0,_core_BidiText_js__WEBPACK_IMPORTED_MODULE_3__.bidiText)(r.text);

              for (let t = 0; t < a.length; t++) o.push(a.charCodeAt(t));

              i[t] = {
                symbol: r,
                id: t,
                glyphIds: o
              };
            }

            const o = new Map();
            return _this3.container.getMaterialItems(i).then(s => {
              for (let t = 0; t < e.length; t++) {
                const i = e[t];
                o.set(i.cim, {
                  text: i.text,
                  mosaicItem: s[t].mosaicItem
                });
              }

              return {
                symbol: t,
                textInfo: o,
                hash: r
              };
            });
          }

          return {
            symbol: t,
            hash: r
          };
        }));
      }).catch(t => ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAbortError)(t), null)) : null;
    })();
  }

  _projectAndNormalizeGeometry(t, e) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(_this4._controller.signal), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(t.geometry) || "mesh" === t.geometry.type) return null;
      let s = t.geometry;

      if ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__.isPolygon)(s)) {
        const t = s.rings;
        s.rings = t;
      } else if ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__.isPolyline)(s)) {
        const t = s.paths;
        s.paths = t;
      } else if ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__.isExtent)(s)) {
        const i = yield _this4._getSymbolForGraphic(t, e);

        if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(_this4._controller.signal), (0,_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.isMarkerSymbol)(i.type) || (0,_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.isTextSymbol)(i.type)) {
          s = s.center;
        } else s = (0,_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.polygonFromExtent)(s);
      }

      yield (0,_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_18__.checkProjectionSupport)(s.spatialReference, _this4.view.spatialReference);
      const i = (0,_geometry_support_normalizeUtilsSync_js__WEBPACK_IMPORTED_MODULE_16__.normalizeCentralMeridianSync)(s),
            r = (0,_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_18__.project)(i, s.spatialReference, _this4.view.spatialReference);
      return (0,_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_14__.closeRingsAndFixWinding)(r), r;
    })();
  }

  _onTileUpdate(t) {
    const e = (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_17__.getInfo)(this.view.spatialReference);
    if (t.added && t.added.length > 0) for (const s of t.added) this._addNewTile(s, e);
    if (t.removed && t.removed.length > 0) for (const s of t.removed) this._removeTile(s.key);
  }

  _addGraphic(t) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this5._abortProcessingGraphic(t.uid), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(_this5._controller.signal);
      const e = new AbortController();

      _this5._graphicIdToAbortController.set(t.uid, e);

      const s = {
        signal: e.signal
      };

      try {
        yield _this5._addOrUpdateGraphic(t, s), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(_this5._controller.signal), _this5._graphicIdToAbortController.delete(t.uid);
      } catch (i) {
        if (_this5._graphicIdToAbortController.delete(t.uid), !(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.isAbortError)(i)) throw i;
      }
    })();
  }

  _updateGraphic(t, e) {
    (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(this._controller.signal);

    const s = this._projectAndNormalizeGeometry(t, e),
          i = this._getSymbolResources(t, e);

    return Promise.all([s, i]).then(([e, s]) => {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(this._controller.signal), this._graphicStore.addOrModify(t, s, e);
    });
  }

  _addOrUpdateGraphic(t, e) {
    (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(this._controller.signal);

    const s = this._projectAndNormalizeGeometry(t, e),
          i = this._getSymbolResources(t, e);

    return Promise.all([s, i]).then(([e, s]) => {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(this._controller.signal), this._graphicsSet.has(t) && this._graphicStore.addOrModify(t, s, e);
    });
  }

  _addTile(t) {
    const e = this.view.featuresTilingScheme.getTileBounds((0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__.create)(), t),
          s = new _engine_webgl_GraphicTile_js__WEBPACK_IMPORTED_MODULE_22__.GraphicTile(t, e[0], e[3]);
    return this._tiles.set(t, s), this.container.addChild(s), s;
  }

  _addNewTile(t, e) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const s = _this6._addTile(t.key),
            i = _this6._graphicStore.queryTileData(_this6._templateStore, t);

      if (0 === i.length) return;

      if (e) {
        const s = Math.round((e.valid[1] - e.valid[0]) / t.resolution);

        for (const t of i) t.geometry && ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__.isPoint)(t.geometry) || (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__.isMultipoint)(t.geometry)) && _this6._wrapPoints(t, s);
      }

      const r = t.key;
      _this6._tileUpdateSet.add(t.key), _this6.notifyChange("updating");

      try {
        const e = {
          type: "update",
          clear: !1,
          addOrUpdate: yield _this6._processGraphics(t, i),
          remove: [],
          end: !0,
          sort: !1
        };
        s.patch(e), _this6._tileUpdateSet.delete(r), _this6.notifyChange("updating");
      } catch (o) {
        if (_this6._tileUpdateSet.delete(r), _this6.notifyChange("updating"), !(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.isAbortError)(o)) throw o;
      }
    })();
  }

  _removeTile(t) {
    if (!this._tiles.has(t)) return;

    const e = this._tiles.get(t);

    this.container.removeChild(e), e.destroy(), this._tiles.delete(t);
  }

  _setFilterState(t, e) {
    const s = this._displayIds.get(t),
          i = this._attributeStore.getHighlightFlag(t);

    this._attributeStore.setData(s, 0, 0, i | (e ? _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_21__.FILTER_FLAG_0 : 0));
  }

  _getGraphicsData(t, e, s) {
    const i = this.view,
          r = (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_17__.getInfo)(i.spatialReference),
          o = this._graphicStore.getGraphicsData(t, e, s);

    if (r) {
      const t = Math.round((r.valid[1] - r.valid[0]) / e.resolution);

      for (const e of o) e.geometry && ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__.isPoint)(e.geometry) || (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__.isMultipoint)(e.geometry)) && this._wrapPoints(e, t);
    }

    return o;
  }

  _wrapPoints(t, e) {
    const s = t.geometry;
    (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__.isMultipoint)(s) ? this._wrapMultipoint(s, e) : this._wrapPoint(t, e);
  }

  _wrapMultipoint(t, e) {
    const s = t.points,
          i = [];
    let r = 0,
        o = 0;

    for (const [a, h] of s) {
      if (i.push([a + r, h]), r = 0, e === _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.TILE_SIZE) {
        const t = 5 * _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.PIXEL_BUFFER;
        a + o < t ? (i.push([e, 0]), r = -e) : a + o > _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.TILE_SIZE - t && (i.push([-e, 0]), r = e);
      } else a + o < -_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.PIXEL_BUFFER ? (i.push([e, 0]), r = -e) : a + o > _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.TILE_SIZE + _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.PIXEL_BUFFER && (i.push([-e, 0]), r = e);

      o += a;
    }

    t.points = i;
  }

  _wrapPoint(t, e) {
    const s = t.geometry;

    if (e === _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.TILE_SIZE) {
      const i = 5 * _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.PIXEL_BUFFER;
      s.x < i ? t.geometry = {
        points: [[s.x, s.y], [e, 0]]
      } : s.x > _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.TILE_SIZE - i && (t.geometry = {
        points: [[s.x, s.y], [-e, 0]]
      });
    } else s.x < -_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.PIXEL_BUFFER ? t.geometry = {
      points: [[s.x, s.y], [e, 0]]
    } : s.x > _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.TILE_SIZE + _graphicsUtils_js__WEBPACK_IMPORTED_MODULE_34__.PIXEL_BUFFER && (t.geometry = {
      points: [[s.x, s.y], [-e, 0]]
    });
  }

  _processGraphics(t, e, s) {
    if (!(e && e.length) || !this._meshFactory) return null;
    const i = _features_support_GraphicsReader_js__WEBPACK_IMPORTED_MODULE_32__.GraphicsReader.from(e),
          r = this._meshFactory;
    return this._matcher.then(e => r.analyzeGraphics(i, this.container.stage.resourceManager, e, null, null, s).then(() => (this._attributeStore.sendUpdates(), this._processAnalyzedGraphics(t, i))));
  }

  _processAnalyzedGraphics(t, e) {
    const s = this._meshFactory,
          i = e.getSize(),
          r = e.getCursor(),
          o = {
      features: i,
      records: i,
      metrics: 0
    },
          a = new _engine_webgl_mesh_MeshData_js__WEBPACK_IMPORTED_MODULE_25__.MeshData(t.key.id, o, {
      fill: "default"
    }, !1, !1),
          h = [];

    for (; r.next();) {
      const e = r.readGraphic();
      e.insertAfter = -1 === e.insertAfter ? -1 : this._displayIds.get(e.insertAfter), e.displayId = this._displayIds.get(e.attributes[this.uid]);
      const i = new _engine_webgl_WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_24__.default(e.displayId);
      i.insertAfter = e.insertAfter, h.push(i), s.writeGraphic(a, r, t.level);
    }

    const n = t.tileInfoView.tileInfo.isWrappable,
          l = a.serialize(n);
    if (1 !== l.length) return new _engine_webgl_TileData_js__WEBPACK_IMPORTED_MODULE_23__.TileData();
    const d = l[0].message;
    return _engine_webgl_TileData_js__WEBPACK_IMPORTED_MODULE_23__.TileData.fromVertexData(d, h);
  }

  _abortProcessingGraphic(t) {
    if (this._graphicIdToAbortController.has(t)) {
      this._graphicIdToAbortController.get(t).abort();
    }
  }

  _getNullSymbol(t) {
    const e = t.geometry;
    return (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__.isPolyline)(e) ? _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_20__.errorPolylineSymbol2D : (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__.isPolygon)(e) || (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__.isExtent)(e) ? _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_20__.errorPolygonSymbol2D : _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_20__.errorPointSymbol2D;
  }

  _flipUpdatingGraphics() {
    this._updatingGraphicsTimer && clearTimeout(this._updatingGraphicsTimer), this._updatingGraphicsTimer = setTimeout(() => {
      this._updatingGraphicsTimer = null, this.notifyChange("updating");
    }, 160), this.notifyChange("updating");
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  constructOnly: !0
})], st.prototype, "requestUpdateCallback", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], st.prototype, "container", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  constructOnly: !0
})], st.prototype, "graphics", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], st.prototype, "updating", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], st.prototype, "view", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], st.prototype, "updateRequested", void 0), st = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.views.2d.layers.support.GraphicsView2D")], st);
const it = st;


/***/ }),

/***/ 63075:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/GraphicsView.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsView": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Identifiable.js */ 36326);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=t=>{let p=class extends((0,_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_1__.IdentifiableMixin)(t)){constructor(){super(...arguments),this.graphics=null,this.renderer=null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"graphics",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"renderer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"updating",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"view",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.layers.GraphicsView")],p),p};


/***/ })

}]);
//# sourceMappingURL=81.49c37128db9f399d30af.js.map