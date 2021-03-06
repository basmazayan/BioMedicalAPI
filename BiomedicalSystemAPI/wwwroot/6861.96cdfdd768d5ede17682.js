"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[6861],{

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

/***/ 87009:
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/placements/CIMMarkerPlacementHelper.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CIMMarkerPlacementHelper": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CIMCursor.js */ 30026);
/* harmony import */ var _CIMOperators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CIMOperators.js */ 96743);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{static getPlacement(e,o,s){const c=(0,_CIMOperators_js__WEBPACK_IMPORTED_MODULE_1__.getPlacementOperator)(o);if(!c)return null;const n=(0,_CIMCursor_js__WEBPACK_IMPORTED_MODULE_0__.cloneAndDecodeGeometry)(e);return c.execute(n,o,s)}}


/***/ }),

/***/ 8071:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/MeshData.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeshData": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _tiling_PagedTileQueue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../tiling/PagedTileQueue.js */ 1153);
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../tiling/TileInfoView.js */ 58902);
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tiling/TileKey.js */ 5507);
/* harmony import */ var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tiling/TileQueue.js */ 73795);
/* harmony import */ var _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tiling/TileStrategy.js */ 59937);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../definitions.js */ 30603);
/* harmony import */ var _DisplayId_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DisplayId.js */ 71369);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums.js */ 31620);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Utils.js */ 25840);
/* harmony import */ var _VertexDataWriter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VertexDataWriter.js */ 97681);
/* harmony import */ var _layers_features_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../layers/features/support/tileUtils.js */ 66998);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=1,c=2,o=4,l=8,_=16,d=32,p=64,g=128;function x(e){switch(e){case h:case l:case d:return-1;case c:case p:return 0;case o:case _:case g:return 1}}function f(e){switch(e){case h:case c:case o:return-1;case l:case _:return 0;case d:case p:case g:return 1}}const m=h|l|d,w=o|_|g,y=h|c|o,v=d|p|g;class E{constructor(e,t,r,i,s){this._hasAggregate=!1,this.hasRecords=!1,this._data={self:new Map,neighbors:new Array},this._current={geometryType:0,writer:null,overlaps:0,start:0,insertAfter:0,sortKey:0,id:0,materialKey:0,indexStart:0,vertStart:0,isDotDensity:!1,bufferingEnabled:!1,metricBoxLenPointer:0},this.hint=t,this.tileKey=e,this._hasAggregate=i,this._pixelBufferEnabled=s,this._strideOptions=r}get hasAggregates(){return this._hasAggregate}get hasPixelBufferEnabled(){return this._pixelBufferEnabled}serialize(t){const r=[];return r.push(this._serializeTileVertexData(this.tileKey,this.tileKey,this._data.self)),this._data.neighbors.forEach(((i,s)=>{const n=1<<s,a=x(n),h=f(n),c=(0,_layers_features_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_10__.getPow2NeighborKey)(new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__.default(this.tileKey),a,h,t),o=this._serializeTileVertexData(this.tileKey,c.id,i.vertexData);o.message.bufferIds=i.displayIds,r.push(o)})),r}_serializeTileVertexData(e,t,r){var i,n,a,u,h;const c=new Array;return{message:{tileKeyOrigin:e,tileKey:t,data:{[_enums_js__WEBPACK_IMPORTED_MODULE_7__.WGLGeometryType.MARKER]:null==(i=r.get(_enums_js__WEBPACK_IMPORTED_MODULE_7__.WGLGeometryType.MARKER))?void 0:i.serialize(c),[_enums_js__WEBPACK_IMPORTED_MODULE_7__.WGLGeometryType.FILL]:null==(n=r.get(_enums_js__WEBPACK_IMPORTED_MODULE_7__.WGLGeometryType.FILL))?void 0:n.serialize(c),[_enums_js__WEBPACK_IMPORTED_MODULE_7__.WGLGeometryType.LINE]:null==(a=r.get(_enums_js__WEBPACK_IMPORTED_MODULE_7__.WGLGeometryType.LINE))?void 0:a.serialize(c),[_enums_js__WEBPACK_IMPORTED_MODULE_7__.WGLGeometryType.TEXT]:null==(u=r.get(_enums_js__WEBPACK_IMPORTED_MODULE_7__.WGLGeometryType.TEXT))?void 0:u.serialize(c),[_enums_js__WEBPACK_IMPORTED_MODULE_7__.WGLGeometryType.LABEL]:null==(h=r.get(_enums_js__WEBPACK_IMPORTED_MODULE_7__.WGLGeometryType.LABEL))?void 0:h.serialize(c)}},transferList:c}}featureStart(e,t){this._current.insertAfter=e,this._current.sortKey=t}featureEnd(){}recordStart(e,t,r,i){this._current.writer=this._getVertexWriter(r),this._current.overlaps=0,this._current.indexStart=this._current.writer.indexCount,this._current.vertStart=this._current.writer.vertexCount,this._current.bufferingEnabled=i,this._current.id=e,this._current.materialKey=t,this._current.geometryType=r,this._current.isDotDensity=!1,this._current.writer.recordStart()}recordCount(){return this._current.writer.recordCount}vertexCount(){return this._current.writer.vertexCount}indexCount(){return this._current.writer.indexCount}vertexEnsureSize(e){this._current.writer.vertexEnsureSize(e)}indexEnsureSize(e){this._current.writer.indexEnsureSize(e)}vertexBounds(e,t,r,i){this._current.bufferingEnabled&&this._addOverlap(e,t,r,i)}vertexWrite(e){this._current.writer.writeVertex(e)}vertexWriteF32(e){this._current.writer.writeVertexF32(e)}vertexEnd(){}vertexWriter(){return this._current.writer.vertexWriter}indexWrite(e){this._current.writer.writeIndex(e)}indexWriter(){return this._current.writer.indexWriter}metricWriter(){return this._current.writer.metricWriter}metricStart(e,t,r,n,a,u,h,c){this._current.writer=this._getVertexWriter(_enums_js__WEBPACK_IMPORTED_MODULE_7__.WGLGeometryType.LABEL);const o=this._current.writer.metricWriter;o.push((0,_DisplayId_js__WEBPACK_IMPORTED_MODULE_6__.getDisplayIdTexel)(e)),o.push(t),o.push(r),o.push(n),o.push(a),o.push(u),o.push(h),o.push(c),o.push(255),this._current.metricBoxLenPointer=o.push(0)}metricEnd(){const e=this._current.writer.metricWriter;0===e.getValue(this._current.metricBoxLenPointer)&&e.seek(e.length-10)}metricBoxWrite(e,t,r,i){const s=this._current.writer.metricWriter;s.incr(this._current.metricBoxLenPointer),s.push(0),s.push(0),s.push(e),s.push(t),s.push(r),s.push(i)}recordEnd(){const e=this._current.indexStart,r=this._current.writer.indexCount;if(e===r)return!1;this.hasRecords=!0;const i=r-e,u=this._current.vertStart,h=this._current.writer.vertexCount-u;if(this._current.writer.recordEnd(this._current.id,this._current.materialKey,this._current.insertAfter,e,i,u,h,this._current.sortKey),!this._pixelBufferEnabled||this._hasAggregate||0===this._current.overlaps||this._current.geometryType===_enums_js__WEBPACK_IMPORTED_MODULE_7__.WGLGeometryType.LABEL)return!0;const c=this._current.writer;for(let s=0;s<8;s++){const e=1<<s;if(!!(this._current.overlaps&e)){this._data.neighbors[s]||(this._data.neighbors[s]={vertexData:new Map,displayIds:new Set});const r=this._data.neighbors[s],i=this._current.geometryType;if(!r.vertexData.has(i)){const e=(0,_Utils_js__WEBPACK_IMPORTED_MODULE_8__.getStrides)(i,this._strideOptions).geometry,s=new _VertexDataWriter_js__WEBPACK_IMPORTED_MODULE_9__.VertexDataWriter(i,e,_definitions_js__WEBPACK_IMPORTED_MODULE_5__.PATCH_PIXEL_BUFFER_ALLOC_SIZE);r.vertexData.set(i,s)}const u=r.vertexData.get(this._current.geometryType),h=8,o=512*-x(e)*h,l=512*-f(e)*h;u.copyLastFrom(c,o,l),r.displayIds.add(this._current.id)}}return!0}_addOverlap(e,t,i,s){const n=255^((e<0+i?w:e>=_definitions_js__WEBPACK_IMPORTED_MODULE_5__.TILE_SIZE-i?m:w|m)|(t<0+s?v:t>=_definitions_js__WEBPACK_IMPORTED_MODULE_5__.TILE_SIZE-s?y:v|y));this._current.overlaps|=n}_getVertexWriter(e){if(!this._data.self.has(e)){const t=this._data.self,r=(0,_Utils_js__WEBPACK_IMPORTED_MODULE_8__.getStrides)(e,this._strideOptions).geometry;t.set(e,new _VertexDataWriter_js__WEBPACK_IMPORTED_MODULE_9__.VertexDataWriter(e,r,this.hint.records))}return this._data.self.get(e)}}


/***/ }),

/***/ 97681:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/VertexDataWriter.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexDataWriter": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../definitions.js */ 30603);
/* harmony import */ var _heuristics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heuristics.js */ 35473);
/* harmony import */ var _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Writer.js */ 29541);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(e,r,i){this._start={index:0,vertex:0};const h=(0,_heuristics_js__WEBPACK_IMPORTED_MODULE_1__.getMeshSizeHint)(e,r,i),c=r/4;this.geometryType=e,this._records=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__.default(Int32Array,h.recordBytes),this._indices=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__.default(Uint32Array,h.indexBytes),this._vertices=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__.default(Uint32Array,h.vertexBytes),this._metrics=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_2__.default(Float32Array,0),this._strideInt=c}serialize(e){const t=this._records.buffer(),s=this._indices.buffer(),r=this._vertices.buffer(),i=this._metrics.length?this._metrics.buffer():null,h=4*this._strideInt;return e.push(t,s,r),{stride:h,records:t,indices:s,vertices:r,metrics:i}}get strideInt(){return this._strideInt}get recordCount(){return this._records.length/_definitions_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_RECORD_INT_PER_ELEMENT}get vertexCount(){return this._vertices.length/this._strideInt}get indexCount(){return this._indices.length}get indexWriter(){return this._indices}get vertexWriter(){return this._vertices}get metricWriter(){return this._metrics}vertexEnsureSize(e){this._vertices.ensureSize(e)}indexEnsureSize(e){this._indices.ensureSize(e)}recordStart(){this._start.index=this._indices.length,this._start.vertex=this._vertices.length}recordEnd(e,t,s,r,i,h,c,n){this._records.push(e),this._records.push(t),this._records.push(s),this._records.push(r),this._records.push(i),this._records.push(h),this._records.push(c),this._records.writeF32(n)}writeIndex(e){this._indices.push(e)}writeVertex(e){this._vertices.push(e)}writeVertexF32(e){this._vertices.writeF32(e)}copyLastFrom(t,s,r){const i=t._records.length-_definitions_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_RECORD_INT_PER_ELEMENT,h=t._records.getValue(i),c=t._records.getValue(i+1),n=t._records.getValue(i+2),_=t._records.getValue(i+4),d=t._records.getValue(i+6),o=t._records.getValue(i+7),u=this._vertices.length,l=(t._start.vertex-this._vertices.length)/this._strideInt,g=this._indices.length,p=this.vertexCount;for(let e=t._start.index;e!==t._indices.length;e++){const s=t._indices.getValue(e);this._indices.push(s-l)}for(let e=t._start.vertex;e!==t._vertices.length;e++){const s=t._vertices.getValue(e);this._vertices.push(s)}for(let e=u;e<=this._vertices.length;e+=this._strideInt)this._vertices.i1616Add(e,s,r);this._records.push(h),this._records.push(c),this._records.push(n),this._records.push(g),this._records.push(_),this._records.push(p),this._records.push(d),this._records.push(o)}}


/***/ }),

/***/ 20142:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/bufcut.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bufcut": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t,r,i,u,l,o){D=0;const f=(i-r)*l,p=u&&u.length,c=p?(u[0]-r)*l:f;let v,s,h,d,Z,a=n(t,r,i,0,c,l,!0);if(a&&a.next!==a.prev){if(p&&(a=y(t,r,i,u,a,l)),f>80*l){v=h=t[0+r*l],s=d=t[1+r*l];for(let e=l;e<c;e+=l){const n=t[e+r*l],x=t[e+1+r*l];v=Math.min(v,n),s=Math.min(s,x),h=Math.max(h,n),d=Math.max(d,x)}Z=Math.max(h-v,d-s),Z=0!==Z?1/Z:0}x(a,e,l,v,s,Z,o,0)}}function n(e,n,t,x,r,i,o){let y;if(o===Z(e,n,t,x,r,i)>0)for(let l=x;l<r;l+=i)y=u(l+n*i,e[l+n*i],e[l+1+n*i],y);else for(let l=r-i;l>=x;l-=i)y=u(l+n*i,e[l+n*i],e[l+1+n*i],y);return y&&M(y,y.next)&&(l(y),y=y.next),y}function t(e,n=e){if(!e)return e;let t,x=e;do{if(t=!1,x.steiner||!M(x,x.next)&&0!==s(x.prev,x,x.next))x=x.next;else{if(l(x),x=n=x.prev,x===x.next)break;t=!0}}while(t||x!==n);return n}function x(e,n,u,o,y,f,p,v){if(!e)return;!v&&f&&(e=c(e,o,y,f));let s=e;for(;e.prev!==e.next;){const c=e.prev,h=e.next;if(f?i(e,o,y,f):r(e))n.push(c.index/u+p),n.push(e.index/u+p),n.push(h.index/u+p),l(e),e=h.next,s=h.next;else if((e=h)===s){v?1===v?x(e=b(e,n,u,p),n,u,o,y,f,p,2):2===v&&g(e,n,u,o,y,f,p):x(t(e),n,u,o,y,f,p,1);break}}}function r(e){const n=e.prev,t=e,x=e.next;if(s(n,t,x)>=0)return!1;let r=e.next.next;const i=r;let u=0;for(;r!==e.prev&&(0===u||r!==i);){if(u++,a(n.x,n.y,t.x,t.y,x.x,x.y,r.x,r.y)&&s(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function i(e,n,t,x){const r=e.prev,i=e,u=e.next;if(s(r,i,u)>=0)return!1;const l=r.x<i.x?r.x<u.x?r.x:u.x:i.x<u.x?i.x:u.x,o=r.y<i.y?r.y<u.y?r.y:u.y:i.y<u.y?i.y:u.y,y=r.x>i.x?r.x>u.x?r.x:u.x:i.x>u.x?i.x:u.x,f=r.y>i.y?r.y>u.y?r.y:u.y:i.y>u.y?i.y:u.y,p=z(l,o,n,t,x),c=z(y,f,n,t,x);let v=e.prevZ,h=e.nextZ;for(;v&&v.z>=p&&h&&h.z<=c;){if(v!==e.prev&&v!==e.next&&a(r.x,r.y,i.x,i.y,u.x,u.y,v.x,v.y)&&s(v.prev,v,v.next)>=0)return!1;if(v=v.prevZ,h!==e.prev&&h!==e.next&&a(r.x,r.y,i.x,i.y,u.x,u.y,h.x,h.y)&&s(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(;v&&v.z>=p;){if(v!==e.prev&&v!==e.next&&a(r.x,r.y,i.x,i.y,u.x,u.y,v.x,v.y)&&s(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;h&&h.z<=c;){if(h!==e.prev&&h!==e.next&&a(r.x,r.y,i.x,i.y,u.x,u.y,h.x,h.y)&&s(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function u(e,n,t,x){const r=q.create(e,n,t);return x?(r.next=x.next,r.prev=x,x.next.prev=r,x.next=r):(r.prev=r,r.next=r),r}function l(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function o(e){let n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function y(e,x,r,i,u,l){const y=new Array;for(let t=0,f=i.length;t<f;t++){const u=n(e,x,r,i[t]*l,t<f-1?i[t+1]*l:r*l,l,!1);u===u.next&&(u.steiner=!0),y.push(o(u))}y.sort(m);for(const n of y)f(n,u),u=t(u,u.next);return u}function f(e,n){if(n=p(e,n)){const x=j(n,e);t(x,x.next)}}function p(e,n){let t=n;const x=e.x,r=e.y;let i,u=-1/0;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const e=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(e<=x&&e>u){if(u=e,e===x){if(r===t.y)return t;if(r===t.next.y)return t.next}i=t.x<t.next.x?t:t.next}}t=t.next}while(t!==n);if(!i)return null;if(x===u)return i.prev;const l=i,o=i.x,y=i.y;let f,p=1/0;for(t=i.next;t!==l;)x>=t.x&&t.x>=o&&x!==t.x&&a(r<y?x:u,r,o,y,r<y?u:x,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(x-t.x),(f<p||f===p&&t.x>i.x)&&w(t,e)&&(i=t,p=f)),t=t.next;return i}function c(e,n,t,x){for(let r;r!==e;r=r.next){if(r=r||e,null===r.z&&(r.z=z(r.x,r.y,n,t,x)),r.prev.next!==r||r.next.prev!==r)return r.prev.next=r,r.next.prev=r,c(e,n,t,x);r.prevZ=r.prev,r.nextZ=r.next}return e.prevZ.nextZ=null,e.prevZ=null,v(e)}function v(e){let n,t=1;for(;;){let x,r=e;e=null,n=null;let i=0;for(;r;){i++,x=r;let u=0;for(;u<t&&x;u++)x=x.nextZ;let l=t;for(;u>0||l>0&&x;){let t;0===u?(t=x,x=x.nextZ,l--):0!==l&&x?r.z<=x.z?(t=r,r=r.nextZ,u--):(t=x,x=x.nextZ,l--):(t=r,r=r.nextZ,u--),n?n.nextZ=t:e=t,t.prevZ=n,n=t}r=x}if(n.nextZ=null,t*=2,i<2)return e}}function s(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function h(e,n,t,x){return!!(M(e,n)&&M(t,x)||M(e,x)&&M(t,n))||s(e,n,t)>0!=s(e,n,x)>0&&s(t,x,e)>0!=s(t,x,n)>0}function d(e,n){let t=e;do{if(t.index!==e.index&&t.next.index!==e.index&&t.index!==n.index&&t.next.index!==n.index&&h(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function Z(e,n,t,x,r,i){let u=0;for(let l=x,o=r-i;l<r;l+=i)u+=(e[o+n*i]-e[l+n*i])*(e[l+1+n*i]+e[o+1+n*i]),o=l;return u}function a(e,n,t,x,r,i,u,l){return(r-u)*(n-l)-(e-u)*(i-l)>=0&&(e-u)*(x-l)-(t-u)*(n-l)>=0&&(t-u)*(i-l)-(r-u)*(x-l)>=0}function w(e,n){return s(e.prev,e,e.next)<0?s(e,n,e.next)>=0&&s(e,e.prev,n)>=0:s(e,n,e.prev)<0||s(e,e.next,n)<0}function z(e,n,t,x,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-x)*r)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function M(e,n){return e.x===n.x&&e.y===n.y}function m(e,n){return e.x-n.x}function b(e,n,t,x){let r=e;do{const i=r.prev,u=r.next.next;!M(i,u)&&h(i,r,r.next,u)&&w(i,u)&&w(u,i)&&(n.push(i.index/t+x),n.push(r.index/t+x),n.push(u.index/t+x),l(r),l(r.next),r=e=u),r=r.next}while(r!==e);return r}function g(e,n,r,i,u,l,o){let y=e;do{let e=y.next.next;for(;e!==y.prev;){if(y.index!==e.index&&k(y,e)){let f=j(y,e);return y=t(y,y.next),f=t(f,f.next),x(y,n,r,i,u,l,o,0),void x(f,n,r,i,u,l,o,0)}e=e.next}y=y.next}while(y!==e)}function k(e,n){return e.next.index!==n.index&&e.prev.index!==n.index&&!d(e,n)&&w(e,n)&&w(n,e)&&A(e,n)}function A(e,n){let t=e,x=!1;const r=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&r<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(x=!x),t=t.next}while(t!==e);return x}function j(e,n){const t=q.create(e.index,e.x,e.y),x=q.create(n.index,n.x,n.y),r=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=r,r.prev=t,x.next=t,t.prev=x,i.next=x,x.prev=i,x}class q{constructor(){this.index=0,this.x=0,this.y=0,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}static create(e,n,t){const x=D<B.length?B[D++]:new q;return x.index=e,x.x=n,x.y=t,x.prev=null,x.next=null,x.z=null,x.prevZ=null,x.nextZ=null,x.steiner=!1,x}}const B=new Array,C=8096;let D=0;for(let E=0;E<C;E++)B.push(new q);


/***/ }),

/***/ 96433:
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/factories/WGLMeshFactory.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WGLMeshFactory": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/has.js */ 30627);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _geometry_libtess_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../geometry/libtess.js */ 2607);
/* harmony import */ var _DisplayId_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../DisplayId.js */ 71369);
/* harmony import */ var _templates_WGLLabelTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/WGLLabelTemplate.js */ 73177);
/* harmony import */ var _templates_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../templates/WGLMarkerTemplate.js */ 38981);
/* harmony import */ var _templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../templates/WGLTemplateStore.js */ 34371);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/









class l {
  constructor(e, t, s) {
    this._loadPromise = (0,_geometry_libtess_js__WEBPACK_IMPORTED_MODULE_4__.loadLibtess)(), this._geometryType = e, this._idField = t, this._templateStore = s;
  }

  update(t, r) {
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(t.mesh.labels) && (this._labelTemplates = this._createLabelTemplates(t.mesh.labels, r)), this._schema = t;
  }

  _createLabelTemplates(e, t) {
    const r = new Map();

    if ("simple" === e.type) {
      for (const s of e.classes) {
        const e = _templates_WGLLabelTemplate_js__WEBPACK_IMPORTED_MODULE_6__.default.fromLabelClass(s, t);
        r.set(s.index, e);
      }

      return r;
    }

    for (const s in e.classes) {
      const o = e.classes[s];

      for (const e of o) {
        const s = _templates_WGLLabelTemplate_js__WEBPACK_IMPORTED_MODULE_6__.default.fromLabelClass(e, t);
        r.set(e.index, s);
      }
    }

    return r;
  }

  get templates() {
    return this._templateStore;
  }

  analyze(r, i, o, l, n, m, p) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAborted)(p)) return;
      let f;
      "dictionary" === o.type && (f = yield o.analyze(_this._idField, r.copy(), i, n, m, p));
      let c = 0;

      for (; r.next();) {
        let t;

        if (t = f ? f[c++] : (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(l) && (0,_DisplayId_js__WEBPACK_IMPORTED_MODULE_5__.isAggregateId)(r.getDisplayId()) && 1 !== r.readAttribute("cluster_count") ? l.match(_this._idField, r, _this._geometryType, n, m) : o.match(_this._idField, r, _this._geometryType, n, m), r.setGroupId(t), (0,_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_8__.isDynamicId)(t)) {
          const e = _this._templateStore.getDynamicTemplateGroup(t);

          for (const t of e) t && t.analyze && t.analyze(_this._templateStore, r, n, m);
        }
      }

      return yield _this._loadPromise, _this._templateStore.finalize(p);
    })();
  }

  analyzeGraphics(e, r, s, i, o, l) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAborted)(l)) return;
      const n = e.getCursor();

      for (s && (yield s.analyze(_this2._idField, n.copy(), r, i, o, l)); n.next();) {
        let e = n.getGroupId();

        if (null != e && -1 !== e || (e = s.match(_this2._idField, n, n.geometryType, i, o), n.setGroupId(e)), (0,_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_8__.isDynamicId)(e)) {
          const t = _this2._templateStore.getDynamicTemplateGroup(e);

          for (const e of t) e && e.analyze && e.analyze(_this2._templateStore, n, i, o);
        }

        n.setGroupId(e);
      }

      return yield _this2._loadPromise, _this2._templateStore.finalize(l);
    })();
  }

  writeGraphic(e, t, r) {
    const s = t.getGroupId(),
          i = t.getDisplayId(),
          o = this._templateStore.getTemplateGroup(s);

    if (e.featureStart(t.insertAfter, 0), null != i) {
      if ((0,_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_8__.isDynamicId)(s)) for (const e of o) e && e.bindFeature(t, null, null);

      if (o) {
        for (const s of o) s && s.write(e, t, r);

        e.featureEnd();
      }
    }
  }

  writeCursor(t, r, s, i, o, l) {
    const n = r.getGroupId(),
          m = r.getDisplayId(),
          p = this._templateStore.getTemplateGroup(n),
          f = this._schema.mesh.sortKey;

    let c = 0;

    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(f) && (c = null != f.fieldIndex ? r.getComputedNumericAtIndex(f.fieldIndex) : null != f.field ? r.readAttribute(f.field) : r.readAttribute(this._idField), c *= "asc" === f.order ? 1 : -1), t.featureStart(0, null == c || isNaN(c) ? 0 : c), null != m && p) {
      if ((0,_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_8__.isDynamicId)(n)) for (const e of p) e.bindFeature(r, s, i);

      for (const e of p) e.write(t, r, o);

      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(l) && t.hasRecords) {
        const e = l && this._findLabelRef(p);

        this._writeLabels(t, r, l, e, o);
      }

      t.featureEnd();
    }
  }

  _findLabelRef(e) {
    for (const t of e) if (t instanceof _templates_WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_7__.default) return t;

    return null;
  }

  _writeLabels(t, r, s, i, o) {
    for (const a of s) if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(a) && a) {
      const {
        glyphs: e,
        rtl: s,
        index: l
      } = a,
            n = this._labelTemplates.get(l);

      n.setZoomLevel(o), n.bindReferenceTemplate(i), n.bindTextInfo(e, s), n.write(t, r, null);
    }
  }

}



/***/ }),

/***/ 35473:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/heuristics.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMeshHeuristic": () => (/* binding */ t),
/* harmony export */   "getMeshSizeHint": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../definitions.js */ 30603);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ 31620);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=new Map;function t(e){return i.get(e)}function c(r,t,c){const{indicesPerRecord:s,multiplier:o,verticesPerRecord:d}=i.get(r);return{recordBytes:c*_definitions_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_RECORD_INT_PER_ELEMENT*Uint32Array.BYTES_PER_ELEMENT,indexBytes:o*s*c*Uint32Array.BYTES_PER_ELEMENT,vertexBytes:o*d*c*t}}i.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.MARKER,{multiplier:1,indicesPerRecord:6,verticesPerRecord:4}),i.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.LINE,{multiplier:1,indicesPerRecord:24,verticesPerRecord:8}),i.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.FILL,{multiplier:1,indicesPerRecord:10,verticesPerRecord:10}),i.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.TEXT,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4}),i.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.LABEL,{multiplier:8,indicesPerRecord:6,verticesPerRecord:4});


/***/ }),

/***/ 79166:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseFillTemplate.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ 18502);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums.js */ 31620);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../number.js */ 97062);
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ 23155);
/* harmony import */ var _templateUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templateUtils.js */ 18572);
/* harmony import */ var _WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WGLLineTemplate.js */ 54696);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=100,c=1,p=p=>class extends p{constructor(...e){super(...e),this.forceLibtess=!1,this._bitset=0,this._lineTemplate=null,this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_2__.WGLGeometryType.FILL}_maybeAddLineTemplate(e){this._lineTemplate=_WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_6__.default.fromFillOutline(e)}_write(t,r,i){const s="esriGeometryPoint"===r.geometryType,o=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__.FillMaterialKey.load(this._materialKey);t.recordStart(r.getDisplayId(),this._materialKey,this.geometryType,s),this._writeGeometry(t,r,o,i,s),o.outlinedFill&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(this._lineTemplate)&&this._lineTemplate.writeGeometry(t,r,i,s),t.recordEnd()}_writeGeometry(e,r,i,s,o){const n=this._getGeometry(r,s,o);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(n))return;const a=e.indexCount();if(!(n.maxLength>y)&&!this.forceLibtess&&(0,_templateUtils_js__WEBPACK_IMPORTED_MODULE_5__.triangulate)(e,n)){return void(!(a===e.indexCount())&&this._writeVertices(e,r,n.coords,n.lengths,i))}const h=(0,_templateUtils_js__WEBPACK_IMPORTED_MODULE_5__.triangulateLibtess)(e,n);!(a===e.indexCount())&&this._writeVertices(e,r,h,[h.length/2],i)}_writeVertices(e,t,r,i,s){const n=t.getDisplayId(),m=this._bitset<<24|n;let l=0;const a=i.reduce(((e,t)=>e+t)),h=s.dotDensity?4:10;e.vertexEnsureSize(h*a);for(const y of i){const i=y+l;for(let n=l;n<i;n++){const i=r[2*n],l=r[2*n+1],a=(0,_number_js__WEBPACK_IMPORTED_MODULE_3__.i1616to32)(c*i,c*l);e.vertexBounds(i,l,0,0),e.vertexWrite(a),e.vertexWrite(m),s.dotDensity?e.vertexWriteF32(1/Math.abs(t.readGeometryArea())):(e.vertexWrite(this.fillColor),s.simple||(e.vertexWrite(this.tl),e.vertexWrite(this.br)),e.vertexWrite(this.aux2),e.vertexWrite(this.aux3),s.simple||e.vertexWrite(this._minMaxZoom))}l+=y}}_getGeometry(e,t,s){const o=t?(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__.deltaDecodeGeometry)((0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__.convertFromGeometry)(t),2):e.readGeometryForDisplay();if(!o)return null;return (0,_templateUtils_js__WEBPACK_IMPORTED_MODULE_5__.clipMarshall)(o,s?256:8)}};


/***/ }),

/***/ 86003:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseLineTemplate.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ 18502);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums.js */ 31620);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../number.js */ 97062);
/* harmony import */ var _TurboLine_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../TurboLine.js */ 63537);
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ 23155);
/* harmony import */ var _templateUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templateUtils.js */ 18572);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=8,d=16,m=65535,p=r=>class extends r{constructor(...e){super(...e),this.tessellationProperties={},this._tessellationOptions={halfWidth:0,pixelCoordRatio:1,offset:0},this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_2__.WGLGeometryType.LINE}writeGeometry(e,t,i,r){this._writeGeometry(e,t,i,r)}_initializeTessellator(e){const i=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_5__.LineMaterialKey.load(this._materialKey),r=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_5__.FillMaterialKey.load(this._materialKey),s=this._tessellationOptions,a=i.vvSizeFieldStops||i.vvSizeMinMaxValue||i.vvSizeScaleStops||i.vvSizeUnitValue,h=this.tessellationProperties._halfWidth<_definitions_js__WEBPACK_IMPORTED_MODULE_1__.THIN_LINE_HALF_WIDTH_THRESHOLD&&!e&&!a;this.tessellationProperties.minMaxZoom=this._minMaxZoom,s.wrapDistance=m,s.textured=this._isDashed||this._hasPattern,s.offset=this.tessellationProperties.offset,s.halfWidth=this.tessellationProperties._halfWidth;const d=h?0:1,p=r.outlinedFill?f:x;this._lineTessellator=new _TurboLine_js__WEBPACK_IMPORTED_MODULE_4__.LineTessellation(p(this.tessellationProperties,d,d),_(this.tessellationProperties),h)}_write(e,t,i){const r="esriGeometryPoint"===t.geometryType;e.recordStart(t.getDisplayId(),this._materialKey,this.geometryType,r),this._writeGeometry(e,t,i,r),e.recordEnd()}_writeGeometry(t,i,r,s){const o=null!=r?r:i.readLegacyGeometryForDisplay(),l=this._getLines(o,s);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(l)||this._writeVertices(t,i,l)}_getLines(t,i){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(t))return null;const r=t.paths||t.rings;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(r))return null;return (0,_templateUtils_js__WEBPACK_IMPORTED_MODULE_6__.clipLinesMarshall)(r,i?256:16)}_writeVertices(e,t,i){const r=t.getDisplayId(),s=e.vertexCount(),o=this.tessellationProperties,a=this._tessellationOptions;o.out=e,o.id=r,o.indexCount=0,o.vertexCount=0,o.offset=s,a.capType=this._capType,a.joinType=this._joinType;const h=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_5__.FillMaterialKey.load(this._materialKey);this.tessellationProperties.key=h.outlinedFill?h:_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_5__.LineMaterialKey.load(this._materialKey);for(const{line:l,start:n}of i)a.initialDistance=n%m,this._lineTessellator.tessellate(l,a)}},x=(e,t,i)=>(o,l,n,a,m,p,x,f,_,u,v)=>{const y=(0,_number_js__WEBPACK_IMPORTED_MODULE_3__.i1616to32)(v,Math.ceil(d*e._halfWidth)),c=(0,_number_js__WEBPACK_IMPORTED_MODULE_3__.i8888to32)(Math.round(d*x),Math.round(d*f),Math.round(d*_),Math.round(d*u)),W=(0,_number_js__WEBPACK_IMPORTED_MODULE_3__.i8888to32)(d*m,d*p,0,e._bitset),M=e.out;return M.vertexBounds(o,l,t,i),M.vertexWrite((0,_number_js__WEBPACK_IMPORTED_MODULE_3__.i1616to32)(h*o,h*l)),M.vertexWrite(e.id),M.vertexWrite(e._fillColor),M.vertexWrite(c),M.vertexWrite(y),M.vertexWrite(e._tl),M.vertexWrite(e._br),M.vertexWrite(W),M.vertexWrite((0,_number_js__WEBPACK_IMPORTED_MODULE_3__.i1616to32)(Math.ceil(d*e._halfReferenceWidth),0)),M.vertexWrite(e.minMaxZoom),M.vertexEnd(),e.offset+e.vertexCount++},f=(e,t,i)=>(o,l,n,a,m,p,x,f,_,u,v)=>{const y=(0,_number_js__WEBPACK_IMPORTED_MODULE_3__.i8888to32)(0,0,d*e._halfWidth,d*e._halfReferenceWidth),c=(0,_number_js__WEBPACK_IMPORTED_MODULE_3__.i8888to32)(d*x+128,d*f+128,d*_+128,d*u+128),W=e.out,M=e._bitset<<24|e.id;return W.vertexBounds(o,l,t,i),W.vertexWrite((0,_number_js__WEBPACK_IMPORTED_MODULE_3__.i1616to32)(h*o,h*l)),W.vertexWrite(M),W.vertexWrite(e._fillColor),e.key.simple||(W.vertexWrite(0),W.vertexWrite(0)),W.vertexWrite(y),W.vertexWrite(c),e.key.simple||W.vertexWrite(e.minMaxZoom),W.vertexEnd(),e.offset+e.vertexCount++},_=e=>(t,i,r)=>{const s=e.out;s.indexWrite(t),s.indexWrite(i),s.indexWrite(r),e.indexCount+=3};


/***/ }),

/***/ 84440:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseMarkerTemplate.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/mat2d.js */ 62039);
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/mat2df32.js */ 63319);
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../chunks/vec2.js */ 68292);
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/vec2f32.js */ 74181);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper.js */ 87009);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../enums.js */ 31620);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../number.js */ 97062);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const v=3.14159265359/180,W=8,u=u=>class extends u{constructor(...t){super(...t),this.angle=0,this.xOffset=0,this.yOffset=0,this.width=0,this.height=0,this.boundsType="square",this._anchorX=0,this._anchorY=0,this._computedWidth=0,this._computedHeight=0,this._vertexBoundsScaleX=1,this._vertexBoundsScaleY=1,this._offsets={xUpperLeft:0,yUpperLeft:0,xUpperRight:0,yUpperRight:0,xBottomLeft:0,yBottomLeft:0,xBottomRight:0,yBottomRight:0},this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_8__.WGLGeometryType.MARKER}_write(t,e,i){const r=e.getDisplayId();t.recordStart(r,this._materialKey,this.geometryType,!0),this._writeGeometry(t,e,r,i),t.recordEnd()}_writeGeometry(i,r,s,o){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(this._markerPlacement))return this._writePlacedMarkers(i,r,o);const h=o?(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__.deltaDecodeGeometry)((0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__.convertFromGeometry)(o),2):"esriGeometryPolygon"===r.geometryType?r.readCentroid():r.readGeometryForDisplay();if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(h)){if(h.isPoint){const[t,e]=h.coords;if(!i.hasAggregates&&i.hasPixelBufferEnabled&&(t<0||t>=512||e<0||e>=512))return;return this._writeVertices(i,s,this._getPos(t,e),t,e)}h.forEachVertex(((t,e)=>this._writeVertices(i,s,this._getPos(t,e),t,e)))}}_writePlacedMarkers(t,e,s){const o=null!=s?s:e.readLegacyGeometryForDisplay(),h=_symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_7__.CIMMarkerPlacementHelper.getPlacement(o,(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.unwrap)(this._markerPlacement),(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(1));if(!h)return;const n=e.getDisplayId(),x=(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_5__.c)(),a=(0,_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_3__.c)(),_=-128,l=640;let c=h.next();for(;null!=c;){const{tx:e,ty:i}=c;e>=_&&e<=l&&i>=_&&i<=l&&(this._applyTransformation(a,x,c.getAngle()/v),this._writeVertices(t,n,this._getPos(e,i),e,i)),c=h.next()}}_writeVertices(t,e,i,r,s){const o=t.vertexCount();t.vertexBounds(r+this.xOffset,s-this.yOffset,this._computedWidth*this._vertexBoundsScaleX,this._computedHeight*this._vertexBoundsScaleY),t.vertexWrite(i),t.vertexWrite(this._offsetUpperLeft),t.vertexWrite(this._texUpperLeft),t.vertexWrite(this._bitestAndDistRatio),t.vertexWrite(e),t.vertexWrite(this._fillColor),t.vertexWrite(this._outlineColor),t.vertexWrite(this._sizeOutlineWidth),t.vertexWrite(this._minMaxZoom),t.vertexEnd(),t.vertexWrite(i),t.vertexWrite(this._offsetUpperRight),t.vertexWrite(this._texUpperRight),t.vertexWrite(this._bitestAndDistRatio),t.vertexWrite(e),t.vertexWrite(this._fillColor),t.vertexWrite(this._outlineColor),t.vertexWrite(this._sizeOutlineWidth),t.vertexWrite(this._minMaxZoom),t.vertexEnd(),t.vertexWrite(i),t.vertexWrite(this._offsetBottomLeft),t.vertexWrite(this._texBottomLeft),t.vertexWrite(this._bitestAndDistRatio),t.vertexWrite(e),t.vertexWrite(this._fillColor),t.vertexWrite(this._outlineColor),t.vertexWrite(this._sizeOutlineWidth),t.vertexWrite(this._minMaxZoom),t.vertexEnd(),t.vertexWrite(i),t.vertexWrite(this._offsetBottomRight),t.vertexWrite(this._texBottomRight),t.vertexWrite(this._bitestAndDistRatio),t.vertexWrite(e),t.vertexWrite(this._fillColor),t.vertexWrite(this._outlineColor),t.vertexWrite(this._sizeOutlineWidth),t.vertexWrite(this._minMaxZoom),t.vertexEnd(),t.indexWrite(o+0),t.indexWrite(o+1),t.indexWrite(o+2),t.indexWrite(o+1),t.indexWrite(o+3),t.indexWrite(o+2)}_applyTransformation(t,e,i=0){(0,_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_2__.i)(t),(0,_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_2__.t)(t,t,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_5__.f)(this.xOffset,-this.yOffset)),this.angle+i!==0&&(0,_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_2__.r)(t,t,v*(this.angle+i));const r=this._computedWidth,f=this._computedHeight,m=(this._anchorX-.5)*r,_=(this._anchorY-.5)*f;(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__.s)(e,m,_),(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__.t)(e,e,t),this._offsetUpperLeft=(0,_number_js__WEBPACK_IMPORTED_MODULE_9__.i1616to32)(16*e[0],16*e[1]),this._offsets.xUpperLeft=e[0],this._offsets.yUpperLeft=e[1],(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__.s)(e,m+r,_),(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__.t)(e,e,t),this._offsetUpperRight=(0,_number_js__WEBPACK_IMPORTED_MODULE_9__.i1616to32)(16*e[0],16*e[1]),this._offsets.xUpperRight=e[0],this._offsets.yUpperRight=e[1],(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__.s)(e,m,_+f),(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__.t)(e,e,t),this._offsetBottomLeft=(0,_number_js__WEBPACK_IMPORTED_MODULE_9__.i1616to32)(16*e[0],16*e[1]),this._offsets.xBottomLeft=e[0],this._offsets.yBottomLeft=e[1],(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__.s)(e,m+r,_+f),(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__.t)(e,e,t),this._offsetBottomRight=(0,_number_js__WEBPACK_IMPORTED_MODULE_9__.i1616to32)(16*e[0],16*e[1]),this._offsets.xBottomRight=e[0],this._offsets.yBottomRight=e[1]}_getPos(t,e){return (0,_number_js__WEBPACK_IMPORTED_MODULE_9__.i1616to32)(Math.round(W*t),Math.round(W*e))}};


/***/ }),

/***/ 26387:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLBaseTextTemplate.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../symbols/cim/placements/CIMMarkerPlacementHelper.js */ 87009);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums.js */ 31620);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../number.js */ 97062);
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ 23155);
/* harmony import */ var _shapingUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shapingUtils.js */ 99273);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const f=8,_=_=>class extends _{constructor(...e){super(...e),this._isCIM=!1,this._vertexBoundsScale=1,this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_5__.WGLGeometryType.TEXT,this._aux=(0,_number_js__WEBPACK_IMPORTED_MODULE_6__.i8888to32)(0,0,this._referenceSize,this._bitset)}bindTextInfo(t,i){t&&t.length?this._shapingInfo=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.andThen)(t,(e=>(0,_shapingUtils_js__WEBPACK_IMPORTED_MODULE_8__.shapeGlyphs)(e,i,{scale:this._scale,angle:this._angle,xOffset:this._xOffset,yOffset:this._yOffset,hAlign:this._xAlignD,vAlign:this._yAlignD,maxLineWidth:Math.max(32,Math.min(this._lineWidth,512)),lineHeight:_definitions_js__WEBPACK_IMPORTED_MODULE_4__.MAGIC_LABEL_LINE_HEIGHT*Math.max(.25,Math.min(this._lineHeight,4)),decoration:this._decoration,isCIM:this._isCIM}))):this._shapingInfo=null}_write(e,t,i){const r=t.getDisplayId();this._writeGeometry(e,t,r,i)}_writeGeometry(e,r,s,h){const a=this._shapingInfo;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(a))return;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(this._textPlacement)){const t=null!=h?h:r.readLegacyGeometryForDisplay();return this._writePlacedText(e,s,t,a)}const x=h?(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__.deltaDecodeGeometry)((0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__.convertFromGeometry)(h),2):"esriGeometryPolygon"===r.geometryType?r.readCentroid():r.readGeometryForDisplay();if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(x)){if(x.isPoint){const[t,i]=x.coords;if(!e.hasAggregates&&e.hasPixelBufferEnabled&&(t<0||t>=512||i<0||i>=512))return;return this._writeGlyphs(e,s,{x:t,y:i},a)}x.forEachVertex(((t,i)=>this._writeGlyphs(e,s,{x:t,y:i},a)))}}_writePlacedText(e,t,i,o){const n=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.unwrap)(this._textPlacement),a=_symbols_cim_placements_CIMMarkerPlacementHelper_js__WEBPACK_IMPORTED_MODULE_3__.CIMMarkerPlacementHelper.getPlacement(i,n,(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(1));if(!a)return;let x=a.next();for(;null!=x;){const i=x.getAngle();o.setRotation(i);const r=x.tx,s=x.ty;r<0||r>=512||s<0||s>=512?x=a.next():(this._writeGlyphs(e,t,{x:r,y:s},o),o.setRotation(-i),x=a.next())}}_writeGlyphs(e,t,i,r){const s=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__.MaterialKeyBase.load(this._materialKey),o=(0,_number_js__WEBPACK_IMPORTED_MODULE_6__.i1616to32)(Math.round(f*i.x),Math.round(f*i.y)),n=this._vertexBoundsScale,h=r.bounds,a=2*Math.max(h.width,h.height);for(const x of r.glyphs)s.textureBinding=x.textureBinding,e.recordStart(t,s.data,this.geometryType,!0),e.vertexBounds(i.x+h.x+this._xOffset,i.y+h.y-this._yOffset,a*n,a*n),this._writeVertices(e,t,o,x),e.recordEnd()}_writeGlyph(e,t,i,r,s){const o=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__.MaterialKeyBase.load(this._materialKey),n=(0,_number_js__WEBPACK_IMPORTED_MODULE_6__.i1616to32)(Math.round(f*i),Math.round(f*r));o.textureBinding=s.textureBinding,e.recordStart(t,o.data,this.geometryType,!0);const h=s.bounds,a=this._vertexBoundsScale;e.vertexBounds(i+h.x*a,r+h.y*a,h.width*a,h.height*a),this._writeVertices(e,t,n,s),e.recordEnd()}_writeVertices(e,t,i,r){const s=e.vertexCount();this._writeVertexCommon(e,t,i,r),e.vertexWrite(r.offsets.upperLeft),e.vertexWrite(r.texcoords.upperLeft),e.vertexEnd(),this._writeVertexCommon(e,t,i,r),e.vertexWrite(r.offsets.upperRight),e.vertexWrite(r.texcoords.upperRight),e.vertexEnd(),this._writeVertexCommon(e,t,i,r),e.vertexWrite(r.offsets.lowerLeft),e.vertexWrite(r.texcoords.lowerLeft),e.vertexEnd(),this._writeVertexCommon(e,t,i,r),e.vertexWrite(r.offsets.lowerRight),e.vertexWrite(r.texcoords.lowerRight),e.vertexEnd(),e.indexWrite(s+0),e.indexWrite(s+1),e.indexWrite(s+2),e.indexWrite(s+1),e.indexWrite(s+3),e.indexWrite(s+2)}_writeVertexCommon(e,t,i,r){const s=this._color,o=this._haloColor,n=(0,_number_js__WEBPACK_IMPORTED_MODULE_6__.i8888to32)(0,0,this._referenceSize,this._bitset),h=(0,_number_js__WEBPACK_IMPORTED_MODULE_6__.i8888to32)(0,0,this._size,this._haloSize);e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(s),e.vertexWrite(o),e.vertexWrite(h),e.vertexWrite(n),e.vertexWrite(this._minMaxZoom)}};


/***/ }),

/***/ 39047:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicFillTemplate.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../color.js */ 20727);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GeometryUtils.js */ 76272);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../number.js */ 97062);
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ 23155);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util.js */ 28852);
/* harmony import */ var _WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WGLBaseFillTemplate.js */ 79166);
/* harmony import */ var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLDynamicMeshTemplate.js */ 4634);
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util/Result.js */ 81476);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=128;class d extends((0,_WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_7__.default)(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__.default)){constructor(i,a,h){var f;if(super(i),this._minMaxZoom=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(Math.round(a*_definitions_js__WEBPACK_IMPORTED_MODULE_2__.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(h*_definitions_js__WEBPACK_IMPORTED_MODULE_2__.MIN_MAX_ZOOM_PRECISION_FACTOR)),(0,_util_js__WEBPACK_IMPORTED_MODULE_6__.isFunction)(i.color)){const t=(t,s,r)=>{const o=i.color(t,s,r);return o&&(0,_color_js__WEBPACK_IMPORTED_MODULE_1__.premultiplyAlphaRGBA)(o)||0};this._dynamicPropertyMap.set("fillColor",t)}else{const t=i.color;this.fillColor=t&&(0,_color_js__WEBPACK_IMPORTED_MODULE_1__.premultiplyAlphaRGBA)(t)||0}let c=0;(0,_util_js__WEBPACK_IMPORTED_MODULE_6__.isFunction)(i.height)||(c=i.height||0);const m="CIMMarkerPlacementInsidePolygon"===(null==(f=i.cim.placement)?void 0:f.type)&&i.cim.placement.shiftOddRows?2:1,d=(t,e,s)=>(0,_util_js__WEBPACK_IMPORTED_MODULE_6__.isFunction)(i.height)?i.height(t,e,s)*m:c*m;this._dynamicPropertyMap.set("_height",d);let u=0;(0,_util_js__WEBPACK_IMPORTED_MODULE_6__.isFunction)(i.offsetX)||(u=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(i.offsetX||0)+p,u>255&&(u=255));const y=(e,s,r)=>{if((0,_util_js__WEBPACK_IMPORTED_MODULE_6__.isFunction)(i.offsetX)){let o=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(i.offsetX(e,s,r))+p;return o>255&&(o=255),o}return u};this._dynamicPropertyMap.set("_offsetX",y);let _=1;(0,_util_js__WEBPACK_IMPORTED_MODULE_6__.isFunction)(i.scaleX)||(_=i.scaleX||1);const M=(t,e,s)=>(0,_util_js__WEBPACK_IMPORTED_MODULE_6__.isFunction)(i.scaleX)?i.scaleX(t,e,s):_;this._dynamicPropertyMap.set("_scaleX",M);let g=0;(0,_util_js__WEBPACK_IMPORTED_MODULE_6__.isFunction)(i.offsetY)||(g=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(-i.offsetY||0)+p,g>255&&(g=255));const X=(e,s,r)=>{if((0,_util_js__WEBPACK_IMPORTED_MODULE_6__.isFunction)(i.offsetY)){let o=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(-i.offsetY(e,s,r))+p;return o>255&&(o=255),o}return g};this._dynamicPropertyMap.set("_offsetY",X);let x=0;(0,_util_js__WEBPACK_IMPORTED_MODULE_6__.isFunction)(i.angle)||(x=(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__.radToByte)(i.angle)||0);const j=(t,e,s)=>(0,_util_js__WEBPACK_IMPORTED_MODULE_6__.isFunction)(i.angle)?(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__.radToByte)(i.angle(t,e,s)):x;this._dynamicPropertyMap.set("_angle",j),this._effects=i.effects,this._cimFillLayer=i,this._fillMaterialKey=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_5__.FillMaterialKey.load(i.materialKey)}static fromCIMFill(t,e){const[s,i]=(0,_util_js__WEBPACK_IMPORTED_MODULE_6__.getMinMaxZoom)(t.scaleInfo,e);return new d(t,s,i)}bindFeature(e,s,r){const l=e.readLegacyFeature();this._dynamicPropertyMap.forEach(((t,e)=>{this[e]=t(l,s,r)}));const n=this._fillMaterialKey,h=this._materialCache,f=(0,this._cimFillLayer.materialHash)(l,s,r),c=h.get(f);let p=null;if(c&&(0,_util_Result_js__WEBPACK_IMPORTED_MODULE_9__.ok)(c.spriteMosaicItem)&&(p=c.spriteMosaicItem),p){const{rect:e,width:s,height:r}=p,l=e.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__.SPRITE_PADDING,h=e.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__.SPRITE_PADDING,f=l+s,c=h+r;let m=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(this._height));m>255?m=255:m<=0&&(m=c-h);let d=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(this._height/r*s||0));d>255?d=255:d<=0&&(d=f-l);const u=this._scaleX,y=1;this.tl=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(l,h),this.br=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(f,c),this.aux2=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i8888to32)(d,m,this._offsetX,this._offsetY),this.aux3=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i8888to32)(u,y,this._angle,0),n.sdf=p.sdf,n.pattern=!0,n.textureBinding=p.textureBinding}else this.tl=0,this.br=0,this.aux2=0,this.aux3=0,n.sdf=!1,n.pattern=!1,n.textureBinding=0;this._materialKey=n.data}}


/***/ }),

/***/ 87681:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicLineTemplate.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../color.js */ 20727);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../number.js */ 97062);
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ 23155);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util.js */ 28852);
/* harmony import */ var _WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WGLBaseLineTemplate.js */ 86003);
/* harmony import */ var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WGLDynamicMeshTemplate.js */ 4634);
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/Result.js */ 81476);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class p extends((0,_WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_6__.default)(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_7__.default)){constructor(s,o,h){super(s),this._minMaxZoom=(0,_number_js__WEBPACK_IMPORTED_MODULE_3__.i1616to32)(Math.round(o*_definitions_js__WEBPACK_IMPORTED_MODULE_2__.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(h*_definitions_js__WEBPACK_IMPORTED_MODULE_2__.MIN_MAX_ZOOM_PRECISION_FACTOR)),this._cimLineLayer=s;let n=0;(0,_util_js__WEBPACK_IMPORTED_MODULE_5__.isFunction)(s.width)||(n=.5*(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(s.width));const c=(e,i,r)=>(0,_util_js__WEBPACK_IMPORTED_MODULE_5__.isFunction)(s.width)?.5*(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(s.width(e,i,r)):n;if(this._dynamicPropertyMap.set("_halfWidth",c),(0,_util_js__WEBPACK_IMPORTED_MODULE_5__.isFunction)(s.cap)?this._dynamicPropertyMap.set("_capType",s.cap):this._capType=s.cap,(0,_util_js__WEBPACK_IMPORTED_MODULE_5__.isFunction)(s.join)?this._dynamicPropertyMap.set("_joinType",s.join):this._joinType=s.join,(0,_util_js__WEBPACK_IMPORTED_MODULE_5__.isFunction)(s.color)){const t=(t,i,r)=>{const o=s.color(t,i,r);return o&&(0,_color_js__WEBPACK_IMPORTED_MODULE_1__.premultiplyAlphaRGBA)(o)||0};this._dynamicPropertyMap.set("_fillColor",t)}else{const t=s.color;this._fillColor=t&&(0,_color_js__WEBPACK_IMPORTED_MODULE_1__.premultiplyAlphaRGBA)(t)||0}if((0,_util_js__WEBPACK_IMPORTED_MODULE_5__.isFunction)(s.miterLimit)){const t=(t,e,i)=>(0,_util_js__WEBPACK_IMPORTED_MODULE_5__.getLimitCosine)(s.miterLimit(t,e,i));this._dynamicPropertyMap.set("_miterLimitCosine",t)}else this._miterLimitCosine=(0,_util_js__WEBPACK_IMPORTED_MODULE_5__.getLimitCosine)(s.miterLimit);this._scaleFactor=s.scaleFactor||1,this._isDashed=null!=s.dashTemplate,this._effects=s.effects,this.tessellationProperties._bitset=(s.colorLocked?1:0)|(s.scaleDash?1:0)<<1,this._materialKey=s.materialKey,this._initializeTessellator(!0)}static fromCIMLine(t,e){const[i,s]=(0,_util_js__WEBPACK_IMPORTED_MODULE_5__.getMinMaxZoom)(t.scaleInfo,e);return new p(t,i,s)}bindFeature(t,e,i){const a=t.readLegacyFeature();this._dynamicPropertyMap.forEach(((t,s)=>{this[s]=t(a,e,i)})),this._halfWidth*=this._scaleFactor;const l=this._materialCache,h=(0,this._cimLineLayer.materialHash)(a,e,i),n=l.get(h);let c=null;if(n&&(0,_util_Result_js__WEBPACK_IMPORTED_MODULE_8__.ok)(n.spriteMosaicItem)&&(c=n.spriteMosaicItem),c){this._hasPattern=!0;const{rect:t,width:e,height:i}=c,o=t.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__.SPRITE_PADDING,a=t.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__.SPRITE_PADDING,l=o+e,h=a+i;this.tessellationProperties._tl=(0,_number_js__WEBPACK_IMPORTED_MODULE_3__.i1616to32)(o,a),this.tessellationProperties._br=(0,_number_js__WEBPACK_IMPORTED_MODULE_3__.i1616to32)(l,h)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0;this.tessellationProperties._fillColor=this._fillColor,this.tessellationProperties._halfWidth=this._halfWidth,this.tessellationProperties.offset=0,this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;const p=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_4__.LineMaterialKey.load(this._materialKey);c&&(p.sdf=c.sdf,p.pattern=!0,p.textureBinding=c.textureBinding),this._materialKey=p.data}}


/***/ }),

/***/ 62385:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicMarkerTemplate.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ k)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../chunks/mat2df32.js */ 63319);
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/vec2f32.js */ 74181);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../color.js */ 20727);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../number.js */ 97062);
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ 23155);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util.js */ 28852);
/* harmony import */ var _WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WGLBaseMarkerTemplate.js */ 84440);
/* harmony import */ var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WGLDynamicMeshTemplate.js */ 4634);
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../util/Result.js */ 81476);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const M=(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_5__.c)(),u=(0,_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_4__.c)(),g=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.default.getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate");class k extends((0,_WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_11__.default)(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_12__.default)){constructor(t,e,r){if(super(t),this._cimMarkerLayer=t,this._minMaxZoom=(0,_number_js__WEBPACK_IMPORTED_MODULE_8__.i1616to32)(Math.round(e*_definitions_js__WEBPACK_IMPORTED_MODULE_7__.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(r*_definitions_js__WEBPACK_IMPORTED_MODULE_7__.MIN_MAX_ZOOM_PRECISION_FACTOR)),(0,_util_js__WEBPACK_IMPORTED_MODULE_10__.isFunction)(t.color)){const e=(e,i,s)=>(0,_color_js__WEBPACK_IMPORTED_MODULE_6__.premultiplyAlphaRGBA)(t.color(e,i,s));this._dynamicPropertyMap.set("_fillColor",e)}else this._fillColor=(0,_color_js__WEBPACK_IMPORTED_MODULE_6__.premultiplyAlphaRGBA)(t.color);if((0,_util_js__WEBPACK_IMPORTED_MODULE_10__.isFunction)(t.outlineColor)){const e=(e,i,s)=>(0,_color_js__WEBPACK_IMPORTED_MODULE_6__.premultiplyAlphaRGBA)(t.outlineColor(e,i,s));this._dynamicPropertyMap.set("_outlineColor",e)}else this._outlineColor=(0,_color_js__WEBPACK_IMPORTED_MODULE_6__.premultiplyAlphaRGBA)(t.outlineColor);if((0,_util_js__WEBPACK_IMPORTED_MODULE_10__.isFunction)(t.size)){const e=(e,i,r)=>(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__.pt2px)(t.size(e,i,r));this._dynamicPropertyMap.set("_size",e)}else this._size=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__.pt2px)(t.size)||0;if((0,_util_js__WEBPACK_IMPORTED_MODULE_10__.isFunction)(t.scaleX)?this._dynamicPropertyMap.set("_scaleX",t.scaleX):this._scaleX=t.scaleX||1,(0,_util_js__WEBPACK_IMPORTED_MODULE_10__.isFunction)(t.offsetX)){const e=(e,i,r)=>(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__.pt2px)(t.offsetX(e,i,r));this._dynamicPropertyMap.set("xOffset",e)}else this.xOffset=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__.pt2px)(t.offsetX)||0;if((0,_util_js__WEBPACK_IMPORTED_MODULE_10__.isFunction)(t.offsetY)){const e=(e,i,r)=>(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__.pt2px)(t.offsetY(e,i,r));this._dynamicPropertyMap.set("yOffset",e)}else this.yOffset=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__.pt2px)(t.offsetY)||0;if((0,_util_js__WEBPACK_IMPORTED_MODULE_10__.isFunction)(t.outlineWidth)){const e=(e,i,r)=>(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__.pt2px)(t.outlineWidth(e,i,r));this._dynamicPropertyMap.set("_outlineWidth",e)}else this._outlineWidth=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__.pt2px)(t.outlineWidth)||0;(0,_util_js__WEBPACK_IMPORTED_MODULE_10__.isFunction)(t.rotation)?this._dynamicPropertyMap.set("_angle",t.rotation):this._angle=t.rotation||0,this._scaleFactor=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.unwrapOr)(t.scaleFactor,1),this._markerPlacement=t.markerPlacement,this._effects=t.effects,this._bitSet=(1===t.alignment?1:0)|(t.colorLocked?1:0)<<1|(t.scaleSymbolsProportionally?1:0)<<3,this._materialKey=t.materialKey}static fromCIMMarker(t,e){const[i,s]=(0,_util_js__WEBPACK_IMPORTED_MODULE_10__.getMinMaxZoom)(t.scaleInfo,e);return new k(t,i,s)}bindFeature(e,i,r){const o=e.readLegacyFeature();this._dynamicPropertyMap.forEach(((t,e)=>{this[e]=t(o,i,r)}));const a=this._cimMarkerLayer.materialHash,h="function"==typeof a?a(o,i,r):a,f=this._materialCache.get(h);if(!f||!(0,_util_Result_js__WEBPACK_IMPORTED_MODULE_13__.ok)(f.spriteMosaicItem)||!f.spriteMosaicItem)return void g.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("mapview-cim","Encountered an error when binding feature"));const _=f.spriteMosaicItem,p=this._cimMarkerLayer.sizeRatio,y=_.width/_.height*this._scaleX,k=this._cimMarkerLayer.rotateClockwise?this._angle:-this._angle;let L=this._size,x=L*y;const P=this.xOffset,j=this.yOffset;this.xOffset*=this._scaleFactor,this.yOffset*=this._scaleFactor;const w=this._cimMarkerLayer.scaleSymbolsProportionally&&this._cimMarkerLayer.frameHeight?this._size/(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__.pt2px)(this._cimMarkerLayer.frameHeight):1,z=this._outlineWidth*w,b=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__.pt2px)(this._cimMarkerLayer.referenceSize);let O=0,W=0;const C=this._cimMarkerLayer.anchorPoint;C&&(this._cimMarkerLayer.isAbsoluteAnchorPoint?this._size&&(O=-C.x/(this._size*y),W=C.y/this._size):(O=C.x,W=C.y)),this._sizeOutlineWidth=(0,_number_js__WEBPACK_IMPORTED_MODULE_8__.i8888to32)(Math.round(Math.min(Math.sqrt(128*x),255)),Math.round(Math.min(Math.sqrt(128*L),255)),Math.round(Math.min(Math.sqrt(128*z),255)),Math.round(Math.min(Math.sqrt(128*b),255))),this.angle=k;const X=Math.round(64*p);this._bitestAndDistRatio=(0,_number_js__WEBPACK_IMPORTED_MODULE_8__.i1616to32)(this._bitSet,X);const F=_.rect.x+_definitions_js__WEBPACK_IMPORTED_MODULE_7__.SPRITE_PADDING,K=_.rect.y+_definitions_js__WEBPACK_IMPORTED_MODULE_7__.SPRITE_PADDING,B=F+_.width,I=K+_.height;this._texUpperLeft=(0,_number_js__WEBPACK_IMPORTED_MODULE_8__.i1616to32)(F,K),this._texUpperRight=(0,_number_js__WEBPACK_IMPORTED_MODULE_8__.i1616to32)(B,K),this._texBottomLeft=(0,_number_js__WEBPACK_IMPORTED_MODULE_8__.i1616to32)(F,I),this._texBottomRight=(0,_number_js__WEBPACK_IMPORTED_MODULE_8__.i1616to32)(B,I);const R=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_9__.MarkerMaterialKey.load(this._materialKey);R.sdf=_.sdf,R.pattern=!0,R.textureBinding=_.textureBinding,this._materialKey=R.data,this._anchorX=.5-(.5+O)*_.width/_.width,this._anchorY=.5-(.5+W)*_.height/_.height,x*=p,L*=p,x*=this._scaleFactor,L*=this._scaleFactor,x*=_.rect.width/_.width,L*=_.rect.height/_.height,this._computedWidth=x,this._computedHeight=L,this._applyTransformation(u,M),this.xOffset=P,this.yOffset=j}}


/***/ }),

/***/ 4634:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicMeshTemplate.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ 22345);
/* harmony import */ var _symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../symbols/cim/cimAnalyzer.js */ 77600);
/* harmony import */ var _symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../symbols/cim/utils.js */ 56314);
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ 82530);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__.default.getLogger("esri.views.2d.engine.webgl.WGLDynamicMeshTemplate");class r extends _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_3__.default{constructor(e){super(),this._ongoingMaterialRequestMap=new Map,this._materialCache=new Map,this._dynamicPropertyMap=new Map,this._cimLayer=e}analyze(e,s,r,n,o){if(o&&0===o.length)return null;const l=o&&o.length>0,m=s.readLegacyFeature(),c=this._materialCache,h=this._cimLayer.materialHash;if(!h)return i.error("A Dynamic mesh template must have a material hash value or function!"),Promise.reject(null);const u="function"==typeof h?h(m,r,n):h;if(c.has(u)){const e=c.get(u);return Promise.resolve(e)}const p=this._ongoingMaterialRequestMap.get(u);if(p)return p;const g=this._cimLayer,y=(0,_symbols_cim_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_1__.analyzeCIMResource)(g.cim,this._cimLayer.materialOverrides);y.mosaicHash=u;const{type:M,url:f}=g,_={cim:y,type:M,mosaicHash:u,url:f,size:null,dashTemplate:null,text:null,fontName:null};switch(M){case"marker":_.size=(0,_symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_2__.evaluateValueOrFunction)(g.size,m,r,n);break;case"line":_.dashTemplate=g.dashTemplate;break;case"text":_.text=(0,_symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_2__.evaluateValueOrFunction)(g.text,m,r,n),_.fontName=(0,_symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_2__.evaluateValueOrFunction)(g.fontName,m,r,n)}const d=e.getMosaicItem(_,o).then((e=>(l||(this._ongoingMaterialRequestMap.delete(u),c.set(u,e)),e))).catch((e=>(this._ongoingMaterialRequestMap.delete(u),i.error(".analyze()",e.message),null)));return l||this._ongoingMaterialRequestMap.set(u,d),d}}


/***/ }),

/***/ 35749:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLDynamicTextTemplate.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../alignmentUtils.js */ 48197);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../color.js */ 20727);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../number.js */ 97062);
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ 23155);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util.js */ 28852);
/* harmony import */ var _WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLBaseTextTemplate.js */ 26387);
/* harmony import */ var _WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLDynamicMeshTemplate.js */ 4634);
/* harmony import */ var _layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../layers/features/textUtils.js */ 77439);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/










const f = 5;

function y(t, e, i, s) {
  return "string" == typeof t.text ? t.text : "function" == typeof t.text ? t.text(e, i, s) : "";
}

class p extends (0,_WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_8__.default)(_WGLDynamicMeshTemplate_js__WEBPACK_IMPORTED_MODULE_9__.default) {
  constructor(e, i, a) {
    super(e), this._horizontalAlignment = "center", this._verticalAlignment = "middle", this._textToGlyphs = new Map(), this._minMaxZoom = (0,_number_js__WEBPACK_IMPORTED_MODULE_5__.i1616to32)(Math.round(i * _definitions_js__WEBPACK_IMPORTED_MODULE_4__.MIN_MAX_ZOOM_PRECISION_FACTOR), Math.round(a * _definitions_js__WEBPACK_IMPORTED_MODULE_4__.MIN_MAX_ZOOM_PRECISION_FACTOR));
    const h = e.scaleFactor || 1;

    if (this._cimTextLayer = e, (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(e.color)) {
      const t = (t, i, o) => (0,_color_js__WEBPACK_IMPORTED_MODULE_3__.premultiplyAlphaRGBA)(e.color(t, i, o));

      this._dynamicPropertyMap.set("_color", t);
    } else this._color = (0,_color_js__WEBPACK_IMPORTED_MODULE_3__.premultiplyAlphaRGBA)(e.color);

    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(e.color)) {
      const t = (t, i, o) => (0,_color_js__WEBPACK_IMPORTED_MODULE_3__.premultiplyAlphaRGBA)(e.outlineColor(t, i, o));

      this._dynamicPropertyMap.set("_haloColor", t);
    } else this._haloColor = (0,_color_js__WEBPACK_IMPORTED_MODULE_3__.premultiplyAlphaRGBA)(e.outlineColor);

    let c;
    (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(e.size) || (c = Math.min(Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.size * e.sizeRatio)), 127));

    const m = (i, s, o) => (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(e.size) ? Math.min(Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.size(i, s, o) * e.sizeRatio)), 127) : c;

    if (this._dynamicPropertyMap.set("_size", m), (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(e.outlineSize)) {
      const i = (i, s, o) => Math.min(Math.floor(f * (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.outlineSize(i, s, o) * e.sizeRatio)), 127);

      this._dynamicPropertyMap.set("_haloSize", i);
    } else this._haloSize = Math.min(Math.floor(f * (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.outlineSize * e.sizeRatio)), 127);

    let _;

    (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(e.offsetX) || (_ = Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.offsetX * e.sizeRatio)));

    const y = (i, s, o) => (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(e.offsetX) ? Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.offsetX(i, s, o) * e.sizeRatio)) : _;

    let p;
    this._dynamicPropertyMap.set("_xOffset", y), (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(e.offsetY) || (p = Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.offsetY * e.sizeRatio)));

    const d = (i, s, o) => (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(e.offsetY) ? Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.offsetY(i, s, o) * e.sizeRatio)) : p;

    this._dynamicPropertyMap.set("_yOffset", d), (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(e.angle) ? this._dynamicPropertyMap.set("_angle", e.angle) : this._angle = e.angle, (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(e.horizontalAlignment) ? this._dynamicPropertyMap.set("_horizontalAlignment", e.horizontalAlignment) : this._horizontalAlignment = e.horizontalAlignment, (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(e.verticalAlignment) ? this._dynamicPropertyMap.set("_verticalAlignment", e.verticalAlignment) : this._verticalAlignment = e.verticalAlignment, this._scaleFactor = h, (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.isFunction)(e.text) ? this._dynamicPropertyMap.set("_text", e.text) : this._text = e.text;
    const M = Math.min(Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.referenceSize * e.sizeRatio)), 127);
    this._referenceSize = Math.round(Math.sqrt(256 * M)), this._materialKey = e.materialKey;
    const g = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__.TextMaterialKey.load(this._materialKey);
    g.sdf = !0, this._bitset = (1 === e.alignment ? 1 : 0) | (e.colorLocked ? 1 : 0) << 1, this._materialKey = g.data, this._decoration = "none", this._lineHeight = 1, this._lineWidth = 512, this._textPlacement = e.markerPlacement, this._effects = e.effects, this._isCIM = !0;
  }

  static fromCIMText(t, e) {
    const [i, s] = (0,_util_js__WEBPACK_IMPORTED_MODULE_7__.getMinMaxZoom)(t.scaleInfo, e);
    return new p(t, i, s);
  }

  analyze(t, e, i, s) {
    var _superprop_getAnalyze = () => super.analyze,
        _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const o = e.readLegacyFeature(),
            a = y(_this._cimTextLayer, o, i, s),
            n = yield _superprop_getAnalyze().call(_this, t, e, i, s, (0,_layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_10__.codepoints)(a));
      return n && n.glyphMosaicItems && _this._textToGlyphs.set(a, n.glyphMosaicItems), n;
    })();
  }

  bindFeature(t, s, o) {
    const n = t.readLegacyFeature();
    if (this._dynamicPropertyMap.forEach((t, e) => {
      this[e] = t(n, s, o);
    }), !this._text || 0 === this._text.length) return void (this._shapingInfo = null);
    this._size *= this._scaleFactor, this._scale = this._size / _definitions_js__WEBPACK_IMPORTED_MODULE_4__.GLYPH_SIZE, this._xOffset *= this._scaleFactor, this._yOffset *= this._scaleFactor, this._xAlignD = (0,_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_2__.getXAnchorDirection)(this._horizontalAlignment || "center"), this._yAlignD = (0,_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_2__.getYAnchorDirection)(this._verticalAlignment || "baseline");

    const r = this._textToGlyphs.get(this._text);

    this.bindTextInfo(r, !1);
  }

}



/***/ }),

/***/ 63175:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLFillTemplate.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../color.js */ 20727);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GeometryUtils.js */ 76272);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../number.js */ 97062);
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ 23155);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util.js */ 28852);
/* harmony import */ var _WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WGLBaseFillTemplate.js */ 79166);
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ 82530);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=128;class x extends((0,_WGLBaseFillTemplate_js__WEBPACK_IMPORTED_MODULE_7__.default)(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_8__.default)){constructor(t,e,o,l,i,s,n,f,h,u,d,p,y,x,M,j){super(),this._effects=x;const w=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_5__.FillMaterialKey.load(t);e&&(w.sdf=e.sdf,w.pattern=!0,w.textureBinding=e.textureBinding),this.fillColor=o,this.tl=l,this.br=i,this.aux2=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i8888to32)(s,n,f,h),this.aux3=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i8888to32)(u,d,p,0),this._bitset=y,this._minMaxZoom=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(Math.round(M*_definitions_js__WEBPACK_IMPORTED_MODULE_2__.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(j*_definitions_js__WEBPACK_IMPORTED_MODULE_2__.MIN_MAX_ZOOM_PRECISION_FACTOR)),this._materialKey=w.data}static fromCIMFill(e,r,i){const s=e.color,a=s&&(0,_color_js__WEBPACK_IMPORTED_MODULE_1__.premultiplyAlphaRGBA)(s)||0,c=e.materialKey,[h,u]=(0,_util_js__WEBPACK_IMPORTED_MODULE_6__.getMinMaxZoom)(e.scaleInfo,i);if(!r)return new x(c,null,a,0,0,0,0,0,0,0,0,0,e.colorLocked?1:0,e.effects,h,u);const{rect:d,width:p,height:M}=r,j=e.scaleX||1,w=d.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__.SPRITE_PADDING,g=d.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__.SPRITE_PADDING,K=w+p,L=g+M,_=e.height,b=j*_;let F=Math.round(_);F>255?F=255:F<=0&&(F=L-g);let T=Math.round(b);T>255?T=255:T<=0&&(T=K-w);let B=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(e.offsetX||0)+y;B>255&&(B=255);let G=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(-e.offsetY||0)+y;G>255&&(G=255);const S=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(w,g),k=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(K,L);return new x(c,r,a,S,k,T,F,B,G,y,y,(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_3__.degToByte)(e.angle),e.colorLocked?1:0,e.effects,h,u)}static fromSimpleFill(t,o,r=!1){const{color:s}=t,n=s&&"esriSFSNull"!==t.style&&(0,_color_js__WEBPACK_IMPORTED_MODULE_1__.premultiplyAlphaRGBAArray)(s)||0,a=r?_definitions_js__WEBPACK_IMPORTED_MODULE_2__.BITSET_GENERIC_LOCK_COLOR:0,c=t.materialKey;let f;if(o){const{rect:t,width:e,height:r}=o,i=t.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__.SPRITE_PADDING,s=t.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__.SPRITE_PADDING,d=i+e,p=s+r,M=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(i,s),j=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(d,p);f=new x(c,o,n,M,j,e,r,0,0,y,y,0,a,null,_util_js__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_MIN_ZOOM,_util_js__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_MAX_ZOOM)}else f=new x(c,null,n,0,0,0,0,0,0,0,0,0,a,null,_util_js__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_MIN_ZOOM,_util_js__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_MAX_ZOOM);return f._maybeAddLineTemplate(t),f}static fromPictureFill(e,o,r=!1){const n=_definitions_js__WEBPACK_IMPORTED_MODULE_2__.PICTURE_FILL_COLOR,{rect:a,width:c,height:f}=o,d=a.x+_definitions_js__WEBPACK_IMPORTED_MODULE_2__.SPRITE_PADDING,p=a.y+_definitions_js__WEBPACK_IMPORTED_MODULE_2__.SPRITE_PADDING,M=d+c,j=p+f,w=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(d,p),g=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(M,j);let K=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(e.width));K>255&&(K=255);let L=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(e.height));L>255&&(L=255);let _=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(e.xoffset)+y;_>255&&(_=255);let b=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(-e.yoffset)+y;b>255&&(b=255);const F=e.materialKey,T=r?_definitions_js__WEBPACK_IMPORTED_MODULE_2__.BITSET_GENERIC_LOCK_COLOR:0,B=new x(F,o,n,w,g,K,L,_,b,y*e.xscale,y*e.yscale,0,T,null,_util_js__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_MIN_ZOOM,_util_js__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_MAX_ZOOM);return B._maybeAddLineTemplate(e),B}}


/***/ }),

/***/ 73177:
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLLabelTemplate.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ z)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/mathUtils.js */ 88415);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../alignmentUtils.js */ 48197);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../color.js */ 20727);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../enums.js */ 31620);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../number.js */ 97062);
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ 23155);
/* harmony import */ var _meshUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./meshUtils.js */ 44915);
/* harmony import */ var _segmentUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./segmentUtils.js */ 14850);
/* harmony import */ var _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WGLTextTemplate.js */ 51253);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const x=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.default.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),y=(t,i="mapview-labeling")=>x.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default(i,t)),b=1,L=0,P=4;function v(e,t){const o=!!e.minScale&&t.scaleToZoom(e.minScale)||0;return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__.clamp)(o,0,25.5)}function w(e,t){const o=!!e.maxScale&&t.scaleToZoom(e.maxScale)||255;return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__.clamp)(o,0,25.5)}function S(e){const t=new Map;return i=>(t.has(i)||t.set(i,e(i)),t.get(i))}const M=S((e=>{let t=0;if(0===e)return 1/0;for(;!(e%2);)t++,e/=2;return t})),Z=e=>Math.floor(127*e+127),A=e=>Math.floor(10*e),O=e=>Math.round(e*(254/360));class z extends _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_13__.default{constructor(e,t,i,o){var n,a,l;super(e,i.font.size,i.haloSize||0,i.font.size,i.color&&(0,_color_js__WEBPACK_IMPORTED_MODULE_6__.premultiplyAlphaRGBAArray)(i.color)||0,i.haloColor&&(0,_color_js__WEBPACK_IMPORTED_MODULE_6__.premultiplyAlphaRGBAArray)(i.haloColor)||0,i.horizontalAlignment,i.verticalAlignment,(0,_meshUtils_js__WEBPACK_IMPORTED_MODULE_11__.isMapAligned)(t.labelPlacement)?1:0,i.font.decoration,!1,i.angle||0,i.xoffset,i.yoffset,i.lineWidth,i.lineHeight,null,null,null,null,null),this._outLineLabelAngle=0,this._refPlacementPadding=0,this._refPlacementDirX=0,this._refPlacementDirY=0,this._refOffsetX=0,this._refOffsetY=0,this._zoomLevel=0,this.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_8__.WGLGeometryType.LABEL,this._allowOverrun=null!=(n=t.allowOverrun)&&n,this._repeatLabel=null==(a=t.repeatLabel)||a,this._labelPosition=null!=(l=t.labelPosition)?l:"curved";const f=v(t,o),g=w(t,o),u=t.labelPlacement,[d,x]=(0,_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_5__.getAlignmentFromPlacement)(u);this._xAlignD=d,this._yAlignD=x,this._minZoom=f,this._maxZoom=g,this._refPlacementPadding=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(i.haloSize)+_definitions_js__WEBPACK_IMPORTED_MODULE_7__.TEXT_PLACEMENT_PADDING,this._repeatLabelDistance=t.repeatLabelDistance?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(t.repeatLabelDistance):128;const y=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_10__.LabelMaterialKey.load(e);y.sdf=!0,this._materialKey=y.data}static fromLabelClass(e,t){if("esriServerLinePlacementCenterAlong"===e.labelPlacement){const t=e.symbol;t.xoffset=0,t.yoffset=0,t.angle=0,t.font.decoration="none"}return new z(e.materialKey,e,e.symbol,t)}get _shapedBox(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.unwrap)(this._shapingInfo).bounds}setZoomLevel(e){this._zoomLevel=e}bindReferenceTemplate(e){let t=(0,_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_5__.getXDirection)(this._xAlignD),i=(0,_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_5__.getYDirection)(this._yAlignD);if(this._refOffsetX=0,this._refOffsetY=0,(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(e))return void(this._refSymbolAndPlacementOffset=(0,_number_js__WEBPACK_IMPORTED_MODULE_9__.i8888to32)(0,0,Z(t),Z(i)));if("circle"===e.boundsType&&(t||i)){const e=Math.sqrt(t*t+i*i);t/=e,i/=e}const o=Math.max(e.height,e.width),r=this._refPlacementPadding*P;this._refSymbolAndPlacementOffset=(0,_number_js__WEBPACK_IMPORTED_MODULE_9__.i8888to32)(r,o,Z(t),Z(i)),this._referenceSize=o,this._refPlacementDirX=t,this._refPlacementDirY=i,this._refOffsetX=e.xOffset,this._refOffsetY=e.yOffset}_write(e,t){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(this._shapingInfo))return;const i=this._shapingInfo,o=t.getDisplayId(),r="esriGeometryPolygon"===t.geometryType?t.readLegacyCentroid():t.readLegacyGeometry();if(r)switch(this.current={out:e,inId:o,inShaping:i,zoomLevel:this._zoomLevel},t.geometryType){case"esriGeometryPolyline":this._placeLineLabels(r);break;case"esriGeometryPoint":case"esriGeometryPolygon":this._placePointLabels(r);break;default:y("mapview-labeling",`Geometry of type ${t.geometryType} is not supported`)}}_isVisible(e,t){const i=A(this.current.zoomLevel);return A(e)<=i&&i<=A(t)}_placePointLabels(e){const{out:t,inId:i,inShaping:o}=this.current;this._writeGlyphs(t,i,e,o)}_placeLineLabels(e){const t=(0,_segmentUtils_js__WEBPACK_IMPORTED_MODULE_12__.smoothPaths)(e.paths,this.current.inShaping.bounds.width),i=this._placeSubdivGlyphs.bind(this),o=(this._shapedBox.width+this._repeatLabelDistance)/(1<<b);for(const n of t)(0,_segmentUtils_js__WEBPACK_IMPORTED_MODULE_12__.pathDivide)(n,o,i,this._repeatLabel)}_placeSubdivGlyphs(e,t,i,o){const n=M(t),r=this._shapedBox.width/(1<<b),s=Math.sqrt(this._repeatLabelDistance)/(1<<b),a=Math.min(i,o-i),l=Math.log2(a/(s+r/2)),h=0===t?l:Math.min(n,l),c=Math.max(this._minZoom,this.current.zoomLevel+b-h),m=this.current.zoomLevel-c,f=this._shapedBox.width/2*2**m;this.current.inShaping.isMultiline?0===t&&this._placeStraight(e,c):this._allowOverrun&&m<0?this._placeStraightAlong(e,this._minZoom):"parallel"===this._labelPosition?this._placeStraightAlong(e,c):"curved"===this._labelPosition&&this._placeCurved(e,c,f)}_placeStraight(e,t){const{out:i,inId:o,inShaping:n}=this.current;this._writeGlyphs(i,o,e,n,t)}_placeCurved(e,t,i){const{out:o,inId:n}=this.current;o.metricStart(n,t,e.x,e.y,0,0,0,0);const r=e.clone(),s=e.angle*(180/Math.PI)%360,a=(e.angle*(180/Math.PI)+180)%360;this._outLineLabelAngle=O(s),this._placeFirst(r,t,1),this._placeBack(e,r,t,i,1),this._placeForward(e,r,t,i,1),this._outLineLabelAngle=O(a),this._placeFirst(r,t,0),this._placeBack(e,r,t,i,0),this._placeForward(e,r,t,i,0),o.metricEnd()}_placeStraightAlong(e,t){const{out:i,inId:o}=this.current;i.metricStart(o,t,e.x,e.y,0,0,0,0);const n=e.clone(),r=e.angle*(180/Math.PI)%360,s=(e.angle*(180/Math.PI)+180)%360;this._outLineLabelAngle=O(r),this._placeFirst(n,t,1,!0),this._outLineLabelAngle=O(s),this._placeFirst(n,t,0,!0),i.metricEnd()}_placeBack(e,t,i,o,n){const r=e.clone();let s=e.backwardLength+L;for(;r.prev()&&!(s>=o);)this._placeOnSegment(r,t,s,i,-1,n),s+=r.length+L}_placeForward(e,t,i,o,n){const r=e.clone();let s=e.remainingLength+L;for(;r.next()&&!(s>=o);)this._placeOnSegment(r,t,s,i,1,n),s+=r.length+L}_placeFirst(e,t,i,o=!1){const n=e,r=this.current.inShaping,s=r.glyphs,a=this.current.zoomLevel,{out:l,inId:h}=this.current;for(const c of s){const s=c.x>r.bounds.x?i:1-i,m=s*e.remainingLength+(1-s)*e.backwardLength,f=Math.abs(c.x+c.width/2-r.bounds.x),_=Math.max(0,a+Math.log2(f/(m+L))),p=Math.max(t,o?0:_);if(c.maxZoom=25,c.angle=e.angle+(1-i)*Math.PI,c.minZoom=p,this._writeGlyph(l,h,n.x,n.y,c),i&&this._isVisible(c.minZoom,c.maxZoom)){const e=c.bounds;l.metricBoxWrite(e.center[0],e.center[1],e.width,e.height)}}}_placeOnSegment(e,t,i,o,n,r){const s=this.current.inShaping.glyphs,{out:a,inId:l}=this.current,h=this.current.inShaping,c=this.current.zoomLevel,m=e.dx/e.length,f=e.dy/e.length,_={x:e.x+i*-n*m,y:e.y+i*-n*f};for(const p of s){const s=p.x>h.bounds.x?r:1-r;if(!(s&&1===n||!s&&-1===n))continue;const m=Math.abs(p.x+p.width/2-h.bounds.x),f=Math.max(0,c+Math.log2(m/i)-.1),g=Math.max(o,c+Math.log2(m/(i+e.length+L)));if(0!==f&&(p.angle=e.angle+(1-r)*Math.PI,p.minZoom=g,p.maxZoom=f,this._writeGlyph(a,l,_.x,_.y,p),r&&this._isVisible(p.minZoom,p.maxZoom))){const i=p.bounds,o=e.x-t.x,n=e.y-t.y;a.metricBoxWrite(i.center[0]+o,i.center[1]+n,i.width,i.height)}}}_writeGlyphs(e,t,i,o,n=this._minZoom){if(i.x<0||i.x>=512||i.y<0||i.y>=512)return;const r=i.x+this._refOffsetX,s=i.y-this._refOffsetY;for(const c of o.glyphs)c.minZoom=n,c.maxZoom=this._maxZoom,this._writeGlyph(e,t,r,s,c);const a=this._refPlacementDirX,l=this._refPlacementDirY,h=o.boundsT;e.metricStart(t,n,r,s,a,l,this._referenceSize,this._materialKey),e.metricBoxWrite(h.center[0],h.center[1],h.width,h.height),e.metricEnd()}_writeVertexCommon(e,t,i,o){const n=this._color,r=this._haloColor,s=(0,_number_js__WEBPACK_IMPORTED_MODULE_9__.i8888to32)(0,0,this._size,this._haloSize),a=Math.max(o.minZoom,this._minZoom),l=Math.min(o.maxZoom,this._maxZoom),h=(0,_number_js__WEBPACK_IMPORTED_MODULE_9__.i8888to32)(A(a),A(l),this._outLineLabelAngle,0);e.vertexWrite(i),e.vertexWrite(t),e.vertexWrite(n),e.vertexWrite(r),e.vertexWrite(s),e.vertexWrite(this._refSymbolAndPlacementOffset),e.vertexWrite(h)}}


/***/ }),

/***/ 54696:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLLineTemplate.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../color.js */ 20727);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../number.js */ 97062);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utils.js */ 25840);
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ 23155);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util.js */ 28852);
/* harmony import */ var _WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLBaseLineTemplate.js */ 86003);
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ 82530);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const _=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__.default.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate");class j extends((0,_WGLBaseLineTemplate_js__WEBPACK_IMPORTED_MODULE_8__.default)(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_9__.default)){constructor(e,t,i,r,o,c,h,d,p,L,y,S,_,j,g,w,P,K,x){super();const T=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__.LineMaterialKey.load(e);t&&(T.sdf=t.sdf,T.pattern=!0,T.textureBinding=t.textureBinding),this._capType=r,this._joinType=o,this._miterLimitCosine=(0,_util_js__WEBPACK_IMPORTED_MODULE_7__.getLimitCosine)(c),this.tessellationProperties._fillColor=h,this.tessellationProperties._tl=d,this.tessellationProperties._br=p,this._hasPattern=L,this._isDashed=y,this._zOrder=w,this._effects=P,this._minMaxZoom=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(Math.round(K*_definitions_js__WEBPACK_IMPORTED_MODULE_3__.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(x*_definitions_js__WEBPACK_IMPORTED_MODULE_3__.MIN_MAX_ZOOM_PRECISION_FACTOR)),this._materialKey=T.data;const b=(_?_definitions_js__WEBPACK_IMPORTED_MODULE_3__.BITSET_GENERIC_LOCK_COLOR:0)|(j?_definitions_js__WEBPACK_IMPORTED_MODULE_3__.BITSET_TYPE_FILL_OUTLINE:0)|(S?_definitions_js__WEBPACK_IMPORTED_MODULE_3__.BITSET_LINE_SCALE_DASH:0);this.tessellationProperties._bitset=b,this.tessellationProperties._halfWidth=.5*i,this.tessellationProperties._halfReferenceWidth=.5*g,this.tessellationProperties.offset=0,this._initializeTessellator(!1)}static fromCIMLine(e,i,s){const l=e.color,n=e.scaleFactor||1,a=!!e.dashTemplate;let c=e.cap;a&&1===c&&(c=2);const h=e.join,f=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.width)*n,u=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.referenceWidth),p=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.miterLimit),L=l&&(0,_color_js__WEBPACK_IMPORTED_MODULE_2__.premultiplyAlphaRGBA)(l)||0,[y,S]=(0,_util_js__WEBPACK_IMPORTED_MODULE_7__.getMinMaxZoom)(e.scaleInfo,s),_=!1;if(!i)return new j(e.materialKey,i,f,c,h,p,L,0,0,!1,a,e.scaleDash,e.colorLocked,_,u,e.zOrder,e.effects,y,S);const{rect:g,width:w,height:P}=i,K=g.x+_definitions_js__WEBPACK_IMPORTED_MODULE_3__.SPRITE_PADDING,x=g.y+_definitions_js__WEBPACK_IMPORTED_MODULE_3__.SPRITE_PADDING,T=K+w,b=x+P,M=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(K,x),W=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(T,b),O=!1;return new j(e.materialKey,i,f,c,h,p,L,M,W,!0,a,e.scaleDash,e.colorLocked,O,u,e.zOrder,e.effects,y,S)}static fromFillOutline(e){var t;return e.isOutlinedFill&&e.outline&&"esriSLSSolid"===(null==(t=e.outline)?void 0:t.style)?j.fromSimpleLine({hash:"",materialKey:e.materialKey,...e.outline},null,!0):null}static fromSimpleLine(e,r,s=!1){const{color:l}=e,n="esriSLSSolid"!==e.style&&"esriSLSNull"!==e.style,a=(0,_Utils_js__WEBPACK_IMPORTED_MODULE_5__.getCapType)(e.cap||"round"),f=(0,_Utils_js__WEBPACK_IMPORTED_MODULE_5__.getJoinType)(e.join||"round");let u=l&&"esriSLSNull"!==e.style&&(0,_color_js__WEBPACK_IMPORTED_MODULE_2__.premultiplyAlphaRGBAArray)(l)||0;"esriSLSNull"===e.style&&(u=0);const d=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.width),y=e.miterLimit;if(!r)return new j(e.materialKey,r,d,a,f,y,u,0,0,!1,n,!0,!1,s,d,0,null,_util_js__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_MIN_ZOOM,_util_js__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_MAX_ZOOM);const{rect:S,width:_,height:g}=r,w=S.x+_definitions_js__WEBPACK_IMPORTED_MODULE_3__.SPRITE_PADDING,P=S.y+_definitions_js__WEBPACK_IMPORTED_MODULE_3__.SPRITE_PADDING,K=w+_,x=P+g,T=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(w,P),b=(0,_number_js__WEBPACK_IMPORTED_MODULE_4__.i1616to32)(K,x);return new j(e.materialKey,r,d,a,f,y,u,T,b,!0,n,!0,!1,s,d,0,null,_util_js__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_MIN_ZOOM,_util_js__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_MAX_ZOOM)}static fromPictureLineSymbol(e,t,i,r){return _.error("PictureLineSymbol support does not exist!"),null}}


/***/ }),

/***/ 38981:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLMarkerTemplate.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ V)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/mat2df32.js */ 63319);
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/vec2f32.js */ 74181);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../color.js */ 20727);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../number.js */ 97062);
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ 23155);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util.js */ 28852);
/* harmony import */ var _WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLBaseMarkerTemplate.js */ 84440);
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ 82530);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class V extends((0,_WGLBaseMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_9__.default)(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_10__.default)){constructor(t,e,s,r,d,M,y,_,S,g,V,z,B,k,w,b,L,j,P,C,R,v,K){super(),this.angle=r,this.height=y,this.width=M,this.xOffset=e*P,this.yOffset=s*P,this._markerPlacement=C,this._effects=R,this._anchorX=.5-(.5+b)*w.width/w.width,this._anchorY=.5-(.5+L)*w.height/w.height,this._minMaxZoom=(0,_number_js__WEBPACK_IMPORTED_MODULE_6__.i1616to32)(Math.round(v*_definitions_js__WEBPACK_IMPORTED_MODULE_5__.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(K*_definitions_js__WEBPACK_IMPORTED_MODULE_5__.MIN_MAX_ZOOM_PRECISION_FACTOR));const U=(1===k?_definitions_js__WEBPACK_IMPORTED_MODULE_5__.BITSET_MARKER_ALIGNMENT_MAP:_definitions_js__WEBPACK_IMPORTED_MODULE_5__.BITSET_MARKER_ALIGNMENT_SCREEN)|(V?_definitions_js__WEBPACK_IMPORTED_MODULE_5__.BITSET_GENERIC_LOCK_COLOR:0)|(B?_definitions_js__WEBPACK_IMPORTED_MODULE_5__.BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE:0)|(z?_definitions_js__WEBPACK_IMPORTED_MODULE_5__.BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY:0),W=w&&w.sdf,X=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_7__.MarkerMaterialKey.load(t);X.sdf=W,X.pattern=!0,X.textureBinding=w.textureBinding,this._materialKey=X.data,this._fillColor=d,this._outlineColor=S,this._sizeOutlineWidth=(0,_number_js__WEBPACK_IMPORTED_MODULE_6__.i8888to32)(Math.round(Math.min(Math.sqrt(128*M),255)),Math.round(Math.min(Math.sqrt(128*y),255)),Math.round(Math.min(Math.sqrt(128*g),255)),Math.round(Math.min(Math.sqrt(128*_),255)));const q=w.rect.x+_definitions_js__WEBPACK_IMPORTED_MODULE_5__.SPRITE_PADDING,T=w.rect.y+_definitions_js__WEBPACK_IMPORTED_MODULE_5__.SPRITE_PADDING,A=q+w.width,Y=T+w.height;this._offsets.xUpperLeft=q,this._offsets.yUpperLeft=T,this._offsets.xUpperRight=A,this._offsets.yUpperRight=T,this._offsets.xBottomLeft=q,this._offsets.yBottomLeft=Y,this._offsets.xBottomRight=A,this._offsets.yBottomRight=Y,this._texUpperLeft=(0,_number_js__WEBPACK_IMPORTED_MODULE_6__.i1616to32)(q,T),this._texUpperRight=(0,_number_js__WEBPACK_IMPORTED_MODULE_6__.i1616to32)(A,T),this._texBottomLeft=(0,_number_js__WEBPACK_IMPORTED_MODULE_6__.i1616to32)(q,Y),this._texBottomRight=(0,_number_js__WEBPACK_IMPORTED_MODULE_6__.i1616to32)(A,Y),M*=j,y*=j,M*=P,y*=P;const H=Math.round(64*j);this._bitestAndDistRatio=(0,_number_js__WEBPACK_IMPORTED_MODULE_6__.i1616to32)(U,H),this._computedWidth=M,this._computedHeight=y;const I=(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__.c)(),O=(0,_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_2__.c)();this._applyTransformation(O,I)}static fromCIMMarker(o,i,r){const a=i&&i.width||1,n=i&&i.height||1,h=o.size,l=a/n*o.scaleX,m=o.scaleSymbolsProportionally&&o.frameHeight?h/o.frameHeight:1;let c=(0,_color_js__WEBPACK_IMPORTED_MODULE_4__.premultiplyAlphaRGBA)(o.color);const f=(0,_color_js__WEBPACK_IMPORTED_MODULE_4__.premultiplyAlphaRGBA)(o.outlineColor),d=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(h),u=d*l,x=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(o.offsetX||0),p=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(o.offsetY||0),y=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(o.outlineWidth||0)*m,_=o.alignment||0,S=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(o.referenceSize),[g,z]=(0,_util_js__WEBPACK_IMPORTED_MODULE_8__.getMinMaxZoom)(o.scaleInfo,r);i.sdf||0!==c||(c=-1);let B=o.rotation||0;o.rotateClockwise||(B=-B);let k=0,w=0;const b=o.anchorPoint;b&&(o.isAbsoluteAnchorPoint?h&&(k=-b.x/(h*l),w=b.y/h):(k=b.x,w=b.y));const L=new V(o.materialKey,x,p,B,c,u,d,S,f,y,o.colorLocked,o.scaleSymbolsProportionally,!1,_,i,k,w,o.sizeRatio,(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.unwrapOr)(o.scaleFactor,1),o.markerPlacement,o.effects,g,z);return L._vertexBoundsScaleX=o.maxVVSize?o.maxVVSize/u:1,L._vertexBoundsScaleY=o.maxVVSize?o.maxVVSize/d:1,L}static fromPictureMarker(t,o){const i=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(t.width)),s=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(t.height)),r=_definitions_js__WEBPACK_IMPORTED_MODULE_5__.PICTURE_FILL_COLOR,a=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(t.xoffset||0)),n=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(t.yoffset||0)),h=new V(t.materialKey,a,n,t.angle,r,i,s,s,0,0,!1,!1,!1,0,o,0,0,1,1,null,null,_util_js__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_MIN_ZOOM,_util_js__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_MAX_ZOOM);return h._vertexBoundsScaleX=t.maxVVSize?t.maxVVSize/t.width:1,h._vertexBoundsScaleY=t.maxVVSize?t.maxVVSize/t.height:1,h}static fromSimpleMarker(t,o){const i=(0,_color_js__WEBPACK_IMPORTED_MODULE_4__.premultiplyAlphaRGBAArray)(t.color),s=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(t.size)),a=s,n=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(t.xoffset||0)),h=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(t.yoffset||0)),l=t.style,m=t.outline,c=0|(m&&m.color&&(0,_color_js__WEBPACK_IMPORTED_MODULE_4__.premultiplyAlphaRGBAArray)(m.color)),f=0|(m&&m.width&&Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(m.width))),d=new V(t.materialKey,n,h,t.angle,i,s,a,a,c,f,!1,!1,"esriSMSCross"===l||"esriSMSX"===l,0,o,0,0,126/64,1,null,null,_util_js__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_MIN_ZOOM,_util_js__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_MAX_ZOOM);return d.boundsType="esriSMSCircle"===l?"circle":"square",d._vertexBoundsScaleX=t.maxVVSize?t.maxVVSize/t.size:1,d._vertexBoundsScaleY=t.maxVVSize?t.maxVVSize/t.size:1,d}static fromLineSymbolMarker(t,o){const i=(0,_color_js__WEBPACK_IMPORTED_MODULE_4__.premultiplyAlphaRGBAArray)(t.color),s=6,a=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(s*t.lineWidth)),n=a,h="cross"===t.style||"x"===t.style;let l;switch(t.placement){case"begin-end":l="Both";break;case"begin":l="JustBegin";break;case"end":l="JustEnd";break;default:l="None"}const m={type:"CIMMarkerPlacementAtExtremities",angleToLine:!0,offset:0,extremityPlacement:l,offsetAlongLine:0},c=new V(t.materialKey,0,0,0,i,a,n,n/s,i,h?Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(t.lineWidth)):0,!1,!1,h,1,o,0,0,126/64,1,m,null,_util_js__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_MIN_ZOOM,_util_js__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_MAX_ZOOM);return c.boundsType="circle"===t.style?"circle":"square",c}}


/***/ }),

/***/ 82530:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLMeshTemplate.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ 18502);
/* harmony import */ var _symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../symbols/cim/effects/CIMEffectHelper.js */ 7019);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{bindFeature(e,t,r){}write(r,s,f){var i;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(this._effects)||0===(null==(i=this._effects)?void 0:i.length))return this._write(r,s);const c=_symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_1__.CIMEffectHelper.executeEffects(this._effects,s.readLegacyGeometryForDisplay());let o=_symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_1__.CIMEffectHelper.next(c);for(;o;)this._write(r,s,o),o=_symbols_cim_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_1__.CIMEffectHelper.next(c)}_write(e,t,r){}}


/***/ }),

/***/ 34371:
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLTemplateStore.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WGLTemplateStore": () => (/* binding */ j),
/* harmony export */   "errorPointSchema2D": () => (/* binding */ k),
/* harmony export */   "errorPolygonSchema2D": () => (/* binding */ L),
/* harmony export */   "errorPolylineSchema2D": () => (/* binding */ C),
/* harmony export */   "isDynamicId": () => (/* binding */ G)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../symbols/support/defaultsJSON.js */ 70338);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums.js */ 31620);
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ 23155);
/* harmony import */ var _WGLDynamicFillTemplate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WGLDynamicFillTemplate.js */ 39047);
/* harmony import */ var _WGLDynamicLineTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLDynamicLineTemplate.js */ 87681);
/* harmony import */ var _WGLDynamicMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLDynamicMarkerTemplate.js */ 62385);
/* harmony import */ var _WGLDynamicTextTemplate_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WGLDynamicTextTemplate.js */ 35749);
/* harmony import */ var _WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WGLFillTemplate.js */ 63175);
/* harmony import */ var _WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WGLLineTemplate.js */ 54696);
/* harmony import */ var _WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WGLMarkerTemplate.js */ 38981);
/* harmony import */ var _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WGLTextTemplate.js */ 51253);
/* harmony import */ var _util_Lock_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../util/Lock.js */ 49866);
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../util/Result.js */ 81476);
/* harmony import */ var _layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../layers/features/textUtils.js */ 77439);
/* harmony import */ var _layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../layers/support/cimSymbolUtils.js */ 21835);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


















const g = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"),
      S = new Array(),
      w = {
  isOutline: !1,
  isOutlinedFill: !1,
  placement: null,
  stride: {
    fill: "default"
  },
  vvFlags: 0
},
      k = { ..._symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_4__.errorPointSymbolJSON,
  hash: JSON.stringify(_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_4__.errorPointSymbolJSON),
  materialKey: (0,_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__.createMaterialKey)(_enums_js__WEBPACK_IMPORTED_MODULE_5__.WGLGeometryType.MARKER, w)
},
      C = { ..._symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_4__.errorPolylineSymbolJSON,
  hash: JSON.stringify(_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_4__.errorPolylineSymbolJSON),
  materialKey: (0,_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__.createMaterialKey)(_enums_js__WEBPACK_IMPORTED_MODULE_5__.WGLGeometryType.LINE, w)
},
      L = { ..._symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_4__.errorPolygonSymbolJSON,
  hash: JSON.stringify(_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_4__.errorPolygonSymbolJSON),
  materialKey: (0,_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__.createMaterialKey)(_enums_js__WEBPACK_IMPORTED_MODULE_5__.WGLGeometryType.FILL, w)
};

function b(e, t) {
  const r = e.length;
  return e.push(null), t.then(t => e[r] = t), e;
}

function G(e) {
  return !!(1 & e);
}

function E(e) {
  return "worker:port-closed" === e.name;
}

class j {
  constructor(e, t) {
    this._idCounter = 1, this._templateIdCounter = 1, this._idToTemplateGroup = new Map(), this._symbolToTemplate = new Map(), this._fetchQueue = [], this._idToResolver = new Map(), this._cimTemplateCache = new Map(), this._cimAnalyses = [], this._lock = new _util_Lock_js__WEBPACK_IMPORTED_MODULE_15__.default(), this._fetchResource = e, this._tileInfo = t;
  }

  get _markerError() {
    return this._errorTemplates.marker[0];
  }

  get _fillError() {
    return this._errorTemplates.fill[0];
  }

  get _lineError() {
    return this._errorTemplates.line[0];
  }

  get _textError() {
    return this._errorTemplates.line[0];
  }

  createTemplateGroup(e, t) {
    this._initErrorTemplates();

    const r = e.hash;
    if (this._symbolToTemplate.has(r)) return this._symbolToTemplate.get(r);
    const s = new Array();
    t && this._createMeshTemplates(s, t, !0), this._createMeshTemplates(s, e, !1);

    const i = this._createGroupId("expanded-cim" === e.type && x(e));

    return this._idToTemplateGroup.set(i, s), this._symbolToTemplate.set(r, i), i;
  }

  getTemplateGroup(e) {
    return this._idToTemplateGroup.has(e) ? this._idToTemplateGroup.get(e) : S;
  }

  getDynamicTemplateGroup(e) {
    return this._idToTemplateGroup.has(e) ? (G(e) || g.error("mapview-template-store", `Id ${e} does not refer to a dynamic template`), this._idToTemplateGroup.get(e)) : S;
  }

  getMosaicItem(e, t) {
    const r = this._createTemplateId(),
          s = new Promise(e => this._idToResolver.set(r, e));

    return this._fetchQueue.push({
      symbol: e,
      id: r,
      glyphIds: t
    }), s;
  }

  finalize(e) {
    return this._fetchQueue.length || this._lock.isHeld() ? (0,_util_Lock_js__WEBPACK_IMPORTED_MODULE_15__.withLock)(this._lock, this._fetchAllQueuedResources.bind(this), e) : Promise.resolve();
  }

  _initErrorTemplates() {
    this._errorTemplates || (this._errorTemplates = {
      fill: this._createMeshTemplates([], L, !1),
      marker: this._createMeshTemplates([], k, !1),
      line: this._createMeshTemplates([], C, !1)
    });
  }

  _fetchAllQueuedResources(t) {
    if (!this._fetchQueue.length) return Promise.resolve();
    const s = this._fetchQueue,
          i = this._cimAnalyses;
    return this._fetchQueue = [], this._cimAnalyses = [], Promise.all(i).then(() => this._fetchResource(s, t).then(e => {
      for (const {
        id: t,
        mosaicItem: r
      } of e) {
        this._idToResolver.get(t)(r), this._idToResolver.delete(t);
      }
    })).catch(t => {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAbortError)(t) ? this._fetchQueue = this._fetchQueue.concat(s) : E(t) || g.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("mapview-template-store", "Unable to fetch requested texture resources", t));
    });
  }

  _createGroupId(e) {
    return this._idCounter++ << 1 | (e ? 1 : 0);
  }

  _createTemplateId() {
    return this._templateIdCounter++;
  }

  _createSMS(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        spriteMosaicItem: t
      } = yield _this.getMosaicItem(e);
      return (0,_util_Result_js__WEBPACK_IMPORTED_MODULE_16__.ok)(t, g) ? _WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_13__.default.fromSimpleMarker(e, t) : _this._markerError;
    })();
  }

  _createPMS(e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        spriteMosaicItem: t
      } = yield _this2.getMosaicItem(e);
      return (0,_util_Result_js__WEBPACK_IMPORTED_MODULE_16__.ok)(t, g) ? _WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_13__.default.fromPictureMarker(e, t) : _this2._markerError;
    })();
  }

  _createSFS(e, t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        spriteMosaicItem: r
      } = yield _this3.getMosaicItem(e);
      return (0,_util_Result_js__WEBPACK_IMPORTED_MODULE_16__.ok)(r, g) ? _WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_11__.default.fromSimpleFill(e, r, t) : _this3._fillError;
    })();
  }

  _createPFS(e, t) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        spriteMosaicItem: r
      } = yield _this4.getMosaicItem(e);
      return (0,_util_Result_js__WEBPACK_IMPORTED_MODULE_16__.ok)(r, g) ? _WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_11__.default.fromPictureFill(e, r, t) : _this4._fillError;
    })();
  }

  _createSLS(e, t) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        spriteMosaicItem: r
      } = yield _this5.getMosaicItem(e);
      return (0,_util_Result_js__WEBPACK_IMPORTED_MODULE_16__.ok)(r, g) ? _WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_12__.default.fromSimpleLine(e, r) : _this5._lineError;
    })();
  }

  _createLMS(e) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        spriteMosaicItem: t
      } = yield _this6.getMosaicItem(e);
      return (0,_util_Result_js__WEBPACK_IMPORTED_MODULE_16__.ok)(t, g) ? _WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_13__.default.fromLineSymbolMarker(e, t) : _this6._markerError;
    })();
  }

  _createTS(e) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        glyphMosaicItems: t
      } = yield _this7.getMosaicItem(e);
      return _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_14__.default.fromText(e, t);
    })();
  }

  _createCIMText(e) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        glyphMosaicItems: t
      } = yield _this8.getMosaicItem((0,_layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_18__.cimLayerToRasterizationInfo)(e), (0,_layers_features_textUtils_js__WEBPACK_IMPORTED_MODULE_17__.codepoints)(e.text));
      return (0,_util_Result_js__WEBPACK_IMPORTED_MODULE_16__.ok)(t, g) ? _WGLTextTemplate_js__WEBPACK_IMPORTED_MODULE_14__.default.fromCIMText(e, t, _this8._tileInfo) : _this8._textError;
    })();
  }

  _createCIMFill(e) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        spriteMosaicItem: t
      } = yield _this9.getMosaicItem((0,_layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_18__.cimLayerToRasterizationInfo)(e));
      return (0,_util_Result_js__WEBPACK_IMPORTED_MODULE_16__.ok)(t, g) ? _WGLFillTemplate_js__WEBPACK_IMPORTED_MODULE_11__.default.fromCIMFill(e, t, _this9._tileInfo) : _this9._fillError;
    })();
  }

  _createCIMLine(e) {
    var _this10 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        spriteMosaicItem: t
      } = yield _this10.getMosaicItem((0,_layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_18__.cimLayerToRasterizationInfo)(e));
      return (0,_util_Result_js__WEBPACK_IMPORTED_MODULE_16__.ok)(t, g) ? _WGLLineTemplate_js__WEBPACK_IMPORTED_MODULE_12__.default.fromCIMLine(e, t, _this10._tileInfo) : _this10._lineError;
    })();
  }

  _createCIMMarker(e) {
    var _this11 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        spriteMosaicItem: t
      } = yield _this11.getMosaicItem((0,_layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_18__.cimLayerToRasterizationInfo)(e));
      return (0,_util_Result_js__WEBPACK_IMPORTED_MODULE_16__.ok)(t, g) ? _WGLMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_13__.default.fromCIMMarker(e, t, _this11._tileInfo) : _this11._markerError;
    })();
  }

  _createCIM(e) {
    var _this12 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = e.templateHash;
      if (_this12._cimTemplateCache.has(t)) return _this12._cimTemplateCache.get(t);
      let r;

      switch (e.type) {
        case "marker":
          r = _this12._createCIMMarker(e);
          break;

        case "line":
          r = _this12._createCIMLine(e);
          break;

        case "fill":
          r = _this12._createCIMFill(e);
          break;

        case "text":
          r = _this12._createCIMText(e);
      }

      return r.then(e => _this12._cimTemplateCache.set(t, e)), r;
    })();
  }

  _createDynamicCIM(e) {
    const t = e.templateHash;
    if (this._cimTemplateCache.has(t)) return this._cimTemplateCache.get(t);
    let r;

    switch (e.type) {
      case "marker":
        r = _WGLDynamicMarkerTemplate_js__WEBPACK_IMPORTED_MODULE_9__.default.fromCIMMarker(e, this._tileInfo);
        break;

      case "line":
        r = _WGLDynamicLineTemplate_js__WEBPACK_IMPORTED_MODULE_8__.default.fromCIMLine(e, this._tileInfo);
        break;

      case "fill":
        r = _WGLDynamicFillTemplate_js__WEBPACK_IMPORTED_MODULE_7__.default.fromCIMFill(e, this._tileInfo);
        break;

      case "text":
        r = _WGLDynamicTextTemplate_js__WEBPACK_IMPORTED_MODULE_10__.default.fromCIMText(e, this._tileInfo);
    }

    return this._cimTemplateCache.set(t, r), r;
  }

  _createPrimitiveMeshTemplates(e, t, r) {
    switch (t.type) {
      case "esriSMS":
        return b(e, this._createSMS(t));

      case "esriPMS":
        return b(e, this._createPMS(t));

      case "esriSFS":
        return b(e, this._createSFS(t, r));

      case "line-marker":
        return b(e, this._createLMS(t));

      case "esriPFS":
        return b(e, this._createPFS(t, r));

      case "esriSLS":
        return b(e, this._createSLS(t, !1));

      case "esriTS":
        return b(e, this._createTS(t));

      default:
        return g.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"), e;
    }
  }

  _createMeshTemplates(e, t, r) {
    if (-1 !== t.type.indexOf("3d")) return g.error("3D symbols are not supported with MapView"), e;

    if ("expanded-cim" === t.type) {
      for (const r of t.layers) "function" == typeof r.materialHash ? e.push(this._createDynamicCIM(r)) : b(e, this._createCIM(r));

      return e;
    }

    if ("composite-symbol" === t.type) {
      for (const s of t.layers) this._createPrimitiveMeshTemplates(e, s, r);

      return e;
    }

    return "cim" === t.type || "label" === t.type || "web-style" === t.type ? e : this._createPrimitiveMeshTemplates(e, t, r);
  }

}

const x = e => {
  if (!e.layers) return !1;

  for (const t of e.layers) if ("function" == typeof t.materialHash) return !0;

  return !1;
};



/***/ }),

/***/ 51253:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/WGLTextTemplate.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var _core_BidiText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/BidiText.js */ 40295);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _alignmentUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../alignmentUtils.js */ 48197);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../color.js */ 20727);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../number.js */ 97062);
/* harmony import */ var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../materialKey/MaterialKey.js */ 23155);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util.js */ 28852);
/* harmony import */ var _WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLBaseTextTemplate.js */ 26387);
/* harmony import */ var _WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WGLMeshTemplate.js */ 82530);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=5;class M extends((0,_WGLBaseTextTemplate_js__WEBPACK_IMPORTED_MODULE_8__.default)(_WGLMeshTemplate_js__WEBPACK_IMPORTED_MODULE_9__.default)){constructor(t,r,a,c,_,d,x,z,M,p,g,j,S,y,b,T,V,A,C=!1,I,K){super(),this._xOffset=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(S),this._yOffset=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(y),this._decoration=p||"none",this._color=_,this._haloColor=d,this._haloSize=Math.min(Math.floor(u*(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.toPt)(a))),127),this._size=Math.min(Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(r)),127);const v=Math.min(Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(c||r)),127);this._referenceSize=Math.round(Math.sqrt(256*v)),this._scale=this._size/_definitions_js__WEBPACK_IMPORTED_MODULE_4__.GLYPH_SIZE,this._angle=j,this._justify=(0,_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJustification)(x||"center"),this._xAlignD=(0,_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_2__.getXAnchorDirection)(x||"center"),this._yAlignD=(0,_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_2__.getYAnchorDirection)(z||"baseline"),this._baseline="baseline"===(z||"baseline"),this._bitset=(1===M?1:0)|(g?1:0)<<1;const B=_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_6__.MaterialKeyBase.load(t);B.sdf=!0,this._materialKey=B.data,this._lineWidth=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(b)||512,this._lineHeight=T||1,this._textPlacement=V,this._effects=A,this._isCIM=C,this._minMaxZoom=(0,_number_js__WEBPACK_IMPORTED_MODULE_5__.i1616to32)(Math.round(I*_definitions_js__WEBPACK_IMPORTED_MODULE_4__.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(K*_definitions_js__WEBPACK_IMPORTED_MODULE_4__.MIN_MAX_ZOOM_PRECISION_FACTOR))}static fromText(e,i){const o=new M(e.materialKey,e.font.size,e.haloSize||0,e.font.size,e.color&&(0,_color_js__WEBPACK_IMPORTED_MODULE_3__.premultiplyAlphaRGBAArray)(e.color)||0,e.haloColor&&(0,_color_js__WEBPACK_IMPORTED_MODULE_3__.premultiplyAlphaRGBAArray)(e.haloColor)||0,e.horizontalAlignment,e.verticalAlignment,0,e.font.decoration,!1,e.angle||0,e.xoffset,e.yoffset,e.lineWidth,e.lineHeight,null,null,!1,_util_js__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_MIN_ZOOM,_util_js__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_MAX_ZOOM),[,s]=(0,_core_BidiText_js__WEBPACK_IMPORTED_MODULE_0__.bidiText)(e.text);return o.bindTextInfo(i,s),o._vertexBoundsScale=e.maxVVSize?e.maxVVSize/e.font.size:1,o}static fromCIMText(e,i,o){const s=e.scaleFactor||1,n=e.size*e.sizeRatio*s,[r,l]=(0,_util_js__WEBPACK_IMPORTED_MODULE_7__.getMinMaxZoom)(e.scaleInfo,o),m=new M(e.materialKey,n,e.outlineSize*e.sizeRatio,e.referenceSize,(0,_color_js__WEBPACK_IMPORTED_MODULE_3__.premultiplyAlphaRGBA)(e.color),(0,_color_js__WEBPACK_IMPORTED_MODULE_3__.premultiplyAlphaRGBA)(e.outlineColor),e.horizontalAlignment,e.verticalAlignment,e.alignment,e.decoration,e.colorLocked,e.angle,e.offsetX*e.sizeRatio*s,e.offsetY*e.sizeRatio*s,512,1,e.markerPlacement,e.effects,!0,r,l),[,h]=(0,_core_BidiText_js__WEBPACK_IMPORTED_MODULE_0__.bidiText)(e.text);return m.bindTextInfo(i,h),m._vertexBoundsScale=e.maxVVSize?e.maxVVSize/n:1,m}}


/***/ }),

/***/ 14850:
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/segmentUtils.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SegmentCursor": () => (/* binding */ c),
/* harmony export */   "pathDivide": () => (/* binding */ u),
/* harmony export */   "pathLength": () => (/* binding */ a),
/* harmony export */   "pathSubdivide": () => (/* binding */ o),
/* harmony export */   "segmentAt": () => (/* binding */ r),
/* harmony export */   "segmentCount": () => (/* binding */ h),
/* harmony export */   "segmentLength": () => (/* binding */ d),
/* harmony export */   "smoothPaths": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ 18502);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ 28852);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t,e){return t[e+1]}function h(t){return t.length-1}function a(t){let e=0;for(let s=0;s<h(t);s++)e+=d(t,s);return e}function d(t,e,s=1){const[n,i]=r(t,e);return Math.sqrt(n*n+i*i)*s}class c{constructor(t,e,s,n,i){this._segments=t,this._index=e,this._distance=s,this._xStart=n,this._yStart=i,this._done=!1}static create(t){return new c(t,0,0,t[0][0],t[0][1])}clone(){return new c(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(t){return this._index===t._index||t._index===this._index-1&&(0===this._distance||1===t._distance)||t._index===this._index+1&&(1===this._distance||0===t._distance)}leq(t){return this._index<t._index||this._index===t._index&&this._distance<=t._distance}geq(t){return this._index>t._index||this._index===t._index&&this._distance>=t._distance}get _segment(){return this._segments[this._index+1]}get angle(){const t=this.dy,e=(0*t+-1*-this.dx)/(1*this.length);let s=Math.acos(e);return t>0&&(s=2*Math.PI-s),s}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:t,dy:e}=this;return Math.sqrt(t*t+e*e)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<h(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(t,e){const s=this.backwardLength;if(t<=s)return this._distance=(s-t)/this.length,this;let n=this.backwardLength;for(;this.prev();){if(n+this.length>t)return this._seekBackwards(t-n);n+=this.length}return this._distance=0,e?this:null}seek(t,e=!1){if(t<0)return this._seekBackwards(Math.abs(t),e);if(t<=this.remainingLength)return this._distance=(this.backwardLength+t)/this.length,this;let s=this.remainingLength;for(;this.next();){if(s+this.length>t)return this.seek(t-s,e);s+=this.length}return this._distance=1,e?this:null}}function u(t,e,s,n=!0){const i=a(t),r=c.create(t),h=i/2;if(!n)return r.seek(h),void s(r.clone(),0,h+0*e,i);const d=Math.max((i-e)/2,0),u=Math.floor(d/e),o=h-u*e;r.seek(o);for(let a=-u;a<=u;a++)r.x<512&&r.x>=0&&r.y<512&&r.y>=0&&s(r.clone(),a,h+a*e,i),r.seek(e)}function o(t,e,s){_(s,e,a(t),c.create(t),0)}function _(s,n,i,r,h){if(i<n)return;const a=r.clone().seek(i/2);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(a))return;s(a.clone(),i,h),i=(i-n)/2;const d=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.unwrap)(a.seek(n/2));_(s,n,i,r,h+1),_(s,n,i,d,h+1)}function l(t,e){const s=e;for(let n=0;n<t.length;n++){let e=t[n];const i=[];i.push(e[0]);for(let t=1;t<e.length;t++){let[s,n]=i[t-1];s+=e[t][0],n+=e[t][1],i.push([s,n])}g(i,s);const r=[];r.push(i[0]);for(let t=1;t<i.length;t++){const[e,s]=i[t-1],[n,h]=i[t],a=Math.round(n-e),d=Math.round(h-s);r.push([a,d])}t[n]=r,e=r}return t}function g(t,e){const r=1e-6;if(e<=0)return;const h=t.length;if(h<3)return;const a=[];let d=0;a.push(0);for(let n=1;n<h;n++)d+=(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.dist)(t[n],t[n-1]),a.push(d);e=Math.min(e,.2*d);const c=[];c.push(t[0][0]),c.push(t[0][1]);const u=t[h-1][0],o=t[h-1][1],_=(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.sub)([0,0],t[0],t[1]);(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.normalize)(_),t[0][0]+=e*_[0],t[0][1]+=e*_[1],(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.sub)(_,t[h-1],t[h-2]),(0,_util_js__WEBPACK_IMPORTED_MODULE_1__.normalize)(_),t[h-1][0]+=e*_[0],t[h-1][1]+=e*_[1];for(let s=1;s<h;s++)a[s]+=e;a[h-1]+=e;const l=.5*e;for(let s=1;s<h-1;s++){let n=0,i=0,d=0;for(let h=s-1;h>=0&&!(a[h+1]<a[s]-l);h--){const c=l+a[h+1]-a[s],u=a[h+1]-a[h],o=a[s]-a[h]<l?1:c/u;if(Math.abs(o)<r)break;const _=o*o,g=o*c-.5*_*u,x=o*u/e,f=t[h+1],y=t[h][0]-f[0],k=t[h][1]-f[1];n+=x/g*(f[0]*o*c+.5*_*(c*y-u*f[0])-_*o*u*y/3),i+=x/g*(f[1]*o*c+.5*_*(c*k-u*f[1])-_*o*u*k/3),d+=x}for(let c=s+1;c<h&&!(a[c-1]>a[s]+l);c++){const h=l-a[c-1]+a[s],u=a[c]-a[c-1],o=a[c]-a[s]<l?1:h/u;if(Math.abs(o)<r)break;const _=o*o,g=o*h-.5*_*u,x=o*u/e,f=t[c-1],y=t[c][0]-f[0],k=t[c][1]-f[1];n+=x/g*(f[0]*o*h+.5*_*(h*y-u*f[0])-_*o*u*y/3),i+=x/g*(f[1]*o*h+.5*_*(h*k-u*f[1])-_*o*u*k/3),d+=x}c.push(n/d),c.push(i/d)}c.push(u),c.push(o);for(let s=0,n=0;s<h;s++)t[s][0]=c[n++],t[s][1]=c[n++]}


/***/ }),

/***/ 18572:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/templateUtils.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "area": () => (/* binding */ c),
/* harmony export */   "clipLinesMarshall": () => (/* binding */ x),
/* harmony export */   "clipMarshall": () => (/* binding */ d),
/* harmony export */   "triangleArea": () => (/* binding */ h),
/* harmony export */   "triangulate": () => (/* binding */ a),
/* harmony export */   "triangulateEarcut": () => (/* binding */ g),
/* harmony export */   "triangulateLibtess": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ 18502);
/* harmony import */ var _chunks_earcut_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/earcut.js */ 2226);
/* harmony import */ var _geometry_libtess_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../geometry/libtess.js */ 2607);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../layers/graphics/OptimizedGeometry.js */ 82760);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _TileClipper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../TileClipper.js */ 24145);
/* harmony import */ var _bufcut_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bufcut.js */ 20142);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=1e-5,f=new _TileClipper_js__WEBPACK_IMPORTED_MODULE_5__.TileClipper(0,0,0,1,0),u=new _TileClipper_js__WEBPACK_IMPORTED_MODULE_5__.TileClipper(0,0,0,1,0);function c(t,e,n){let r=0;for(let o=1;o<n;o++){const n=t[2*(e+o-1)],s=t[2*(e+o-1)+1];r+=(t[2*(e+o)]-n)*(t[2*(e+o)+1]+s)}return r}function h(t,e,n,r,o){let s=0;const l=2;for(let i=n;i<r;i+=3){const n=(t.getValue(i)-o)*l,r=(t.getValue(i+1)-o)*l,f=(t.getValue(i+2)-o)*l;s+=Math.abs((e[n]-e[f])*(e[r+1]-e[n+1])-(e[n]-e[r])*(e[f+1]-e[n+1]))}return s}function a(t,e){const{coords:n,lengths:r,hasIndeterminateRingOrder:o}=e,s=t.indexWriter(),f=t.vertexCount();if(o)return!1;const u=s.length;let a=0;for(let g=0;g<r.length;){let t=g,e=r[g],o=c(n,a,e);const m=[];for(;++t<r.length;){const s=r[t],l=c(n,a+e,s);if(!(l>0))break;o+=l,m.push(a+e),e+=s}const p=s.length;(0,_bufcut_js__WEBPACK_IMPORTED_MODULE_6__.bufcut)(s,n,a,a+e,m,2,f);const d=h(s,n,p,s.length,f),x=Math.abs(o);if(Math.abs((d-x)/Math.max(1e-7,x))>i)return s.seek(u),!1;g=t,a+=e}return!0}function g(t,n,r){const{coords:o,lengths:s,hasIndeterminateRingOrder:l}=n;if(l)return!1;let i=0;for(let f=0;f<s.length;){let l=f,u=s[f];const h=[];for(;++l<s.length;){const t=s[l];if(!(c(o,i+u,t)>0))break;h.push(i+u-i),u+=t}const a=i+u,g=n.coords.slice(2*i,2*a),m=(0,_chunks_earcut_js__WEBPACK_IMPORTED_MODULE_1__.e)(g,h,2);for(const e of m)t.push(e+r+i);f=l,i+=u}return!0}function m(t,e){const r=t.indexWriter(),o=t.vertexCount(),{coords:s,lengths:l}=e,{buffer:i,vertexCount:f}=(0,_geometry_libtess_js__WEBPACK_IMPORTED_MODULE_2__.triangulate)(s,l);r.ensureSize(f);for(let n=0;n<f;n++)r.push(n+o);return i}function p(t,e,n){let r=0;for(let o=0;o<t.lengths.length;o++){const s=t.lengths[o];for(let o=0;o<s;o++){const s=t.coords[2*(o+r)],l=t.coords[2*(o+r)+1];if(s<e||s>n||l<e||l>n)return!0}r+=s}return!1}function d(e,n){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(e))return null;if(!p(e,-128,_definitions_js__WEBPACK_IMPORTED_MODULE_4__.TILE_SIZE+128))return e;f.setPixelMargin(n),f.reset(3);let s=0;for(let t=0;t<e.lengths.length;t++){const n=e.lengths[t];let r=e.coords[2*(0+s)],o=e.coords[2*(0+s)+1];f.moveTo(r,o);for(let t=1;t<n;t++)r=e.coords[2*(t+s)],o=e.coords[2*(t+s)+1],f.lineTo(r,o);f.close(),s+=n}const l=f.result(!1);if(!l)return null;const i=[],u=[];for(const t of l){let e=0;for(const n of t)u.push(n.x),u.push(n.y),e++;i.push(e)}return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__.default(i,u)}function x(t,e){u.setPixelMargin(e);const n=u,r=-e,s=_definitions_js__WEBPACK_IMPORTED_MODULE_4__.TILE_SIZE+e;let l=[],i=!1,f=0;for(;f<t.length;){const e=[],o=t[f];if(!o)return null;n.reset(2);let[u,c]=o[0];if(i)n.moveTo(u,c);else{if(u<r||u>s||c<r||c>s){i=!0;continue}e.push({x:u,y:c})}let h=!1;const a=o.length;for(let t=1;t<a;++t)if(u+=o[t][0],c+=o[t][1],i)n.lineTo(u,c);else{if(u<r||u>s||c<r||c>s){h=!0;break}e.push({x:u,y:c})}if(h)i=!0;else{if(i){const t=n.resultWithStarts();if(t)for(const e of t)l.push(e)}else l.push({line:e,start:0});f++,i=!1}}return l=l.filter((t=>t.line.length>1)),0===l.length?null:l}f.setExtent(_definitions_js__WEBPACK_IMPORTED_MODULE_4__.TILE_SIZE),u.setExtent(_definitions_js__WEBPACK_IMPORTED_MODULE_4__.TILE_SIZE);


/***/ }),

/***/ 28852:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/util.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_MAX_ZOOM": () => (/* binding */ o),
/* harmony export */   "DEFAULT_MIN_ZOOM": () => (/* binding */ n),
/* harmony export */   "dist": () => (/* binding */ u),
/* harmony export */   "getLimitCosine": () => (/* binding */ e),
/* harmony export */   "getMinMaxZoom": () => (/* binding */ x),
/* harmony export */   "isExtent": () => (/* binding */ a),
/* harmony export */   "isFunction": () => (/* binding */ c),
/* harmony export */   "isMultipoint": () => (/* binding */ f),
/* harmony export */   "isPoint": () => (/* binding */ m),
/* harmony export */   "isPolygon": () => (/* binding */ v),
/* harmony export */   "isPolyline": () => (/* binding */ d),
/* harmony export */   "len": () => (/* binding */ i),
/* harmony export */   "normalize": () => (/* binding */ r),
/* harmony export */   "sub": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=0,o=100;function t(n,o,t){return n[0]=o[0]-t[0],n[1]=o[1]-t[1],n}function i(n,o){return Math.sqrt(n*n+o*o)}function r(n){const o=i(n[0],n[1]);n[0]/=o,n[1]/=o}function u(n,o){return i(n[0]-o[0],n[1]-o[1])}function c(n){return"function"==typeof n}function e(n=2){return 1/Math.max(n,1)}function a(n){return void 0!==n.xmin&&void 0!==n.ymin&&void 0!==n.xmax&&void 0!==n.ymax}function f(n){return void 0!==n.points}function m(n){return void 0!==n.x&&void 0!==n.y}function d(n){return void 0!==n.paths}function v(n){return void 0!==n.rings}function x(t,i){return[!!t.minScale&&i.scaleToZoom(t.minScale)||n,!!t.maxScale&&i.scaleToZoom(t.maxScale)||o]}


/***/ }),

/***/ 49866:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Lock.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r),
/* harmony export */   "withLock": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ 7808);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


class r {
  constructor() {
    this._resolver = null;
  }

  isHeld() {
    return !!this._resolver;
  }

  acquire() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this._resolver) return _this._resolver = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.createResolver)(), Promise.resolve();
      yield _this._resolver.promise, yield _this.acquire();
    })();
  }

  release() {
    const e = this._resolver;
    this._resolver = null, e.resolve();
  }

}

function s(_x, _x2, _x3) {
  return _s.apply(this, arguments);
}

function _s() {
  _s = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r, s) {
    try {
      yield e.acquire(), yield r(s), e.release();
    } catch (t) {
      throw e.release(), t;
    }
  });
  return _s.apply(this, arguments);
}



/***/ }),

/***/ 7077:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Matcher.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DictionaryMatcher": () => (/* binding */ _),
/* harmony export */   "FeatureMatcher": () => (/* binding */ u),
/* harmony export */   "IntervalMatcher": () => (/* binding */ d),
/* harmony export */   "MapMatcher": () => (/* binding */ h),
/* harmony export */   "SubtypeMatcher": () => (/* binding */ c),
/* harmony export */   "createMatcher": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/LRUCache.js */ 72468);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../support/arcadeOnDemand.js */ 2999);
/* harmony import */ var _symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../symbols/cim/utils.js */ 56314);
/* harmony import */ var _arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../arcade/callExpressionWithFeature.js */ 83184);
/* harmony import */ var _layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layers/support/cimSymbolUtils.js */ 21835);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/







const l = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri/views/2d/engine/webgl/util/Matcher");

function o(_x, _x2, _x3, _x4) {
  return _o.apply(this, arguments);
}

function _o() {
  _o = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, s, r) {
    switch (e.type) {
      case "simple":
        return u.fromBasicRenderer(e, t, s, r);

      case "map":
        return h.fromUVRenderer(e, t, s, r);

      case "interval":
        return d.fromCBRenderer(e, t, s, r);

      case "dictionary":
        return _.fromDictionaryRenderer(e, t, s, r);

      case "subtype":
        return c.fromSubtypes(e, t, s, r);
    }
  });
  return _o.apply(this, arguments);
}

class u {
  constructor() {
    this.type = "feature", this._defaultResult = null;
  }

  static fromBasicRenderer(e, t, s, r) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = new u();

      if (e.symbol) {
        const a = yield (0,_layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__.expandSymbol)(e.symbol, s, r),
              l = t.createTemplateGroup(a, null);
        i.setDefault(l);
      }

      return i;
    })();
  }

  size() {
    return 1;
  }

  getDefault() {
    return this._defaultResult;
  }

  setDefault(e) {
    this._defaultResult = e;
  }

  match(e, t, s, r, i) {
    return this.getDefault();
  }

  analyze(e, t, s, r, i, a) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return null;
    })();
  }

}

class c extends u {
  constructor(e, t) {
    super(), this._subMatchers = e, this._subtypeField = t;
  }

  static fromSubtypes(e, t, s, r) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = new Map(),
            a = [];

      for (const n in e.renderers) {
        const l = parseInt(n, 10),
              u = o(e.renderers[n], t, s, r).then(e => i.set(l, e));
        a.push(u);
      }

      return yield Promise.all(a), new c(i, e.subtypeField);
    })();
  }

  match(e, t, s, r, i) {
    const a = t.readAttribute(this._subtypeField),
          n = this._subMatchers.get(a);

    return n ? n.match(e, t, s, r, i) : null;
  }

}

class d extends u {
  constructor(e, t, s, r) {
    super(), this.type = "interval", this._intervals = [], this._isMaxInclusive = t, this._fieldIndex = r, this._field = e, this._normalizationInfo = s;
  }

  static fromCBRenderer(e, t, s, r) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        isMaxInclusive: i,
        normalizationField: a,
        normalizationTotal: l,
        normalizationType: o
      } = e,
            u = e.field,
            c = new d(u, i, {
        normalizationField: a,
        normalizationTotal: l,
        normalizationType: o
      }, e.fieldIndex),
            h = yield (0,_layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__.expandSymbol)(e.backgroundFillSymbol, s, r);
      yield Promise.all(e.intervals.map( /*#__PURE__*/function () {
        var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
          const i = yield (0,_layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__.expandSymbol)(e.symbol, s, r),
                a = yield t.createTemplateGroup(i, h),
                l = {
            min: e.min,
            max: e.max
          };
          c.add(l, a);
        });

        return function (_x5) {
          return _ref.apply(this, arguments);
        };
      }()));
      const m = yield (0,_layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__.expandSymbol)(e.defaultSymbol, s, r);

      if (m) {
        const e = yield t.createTemplateGroup(m, h);
        c.setDefault(e);
      }

      return c;
    })();
  }

  add(e, t) {
    this._intervals.push({
      interval: e,
      result: t
    }), this._intervals.sort((e, t) => e.interval.min - t.interval.min);
  }

  size() {
    return super.size() + this._intervals.length;
  }

  match(e, t, s, r, i) {
    if (null == this._fieldIndex && !this._field) return this.getDefault();
    const a = null != this._fieldIndex ? t.getComputedNumericAtIndex(this._fieldIndex) : this._getValueFromField(t);
    if (!a && (null == a || isNaN(a))) return this.getDefault();

    for (let n = 0; n < this._intervals.length; n++) {
      const {
        interval: e,
        result: t
      } = this._intervals[n],
            s = a >= e.min,
            r = this._isMaxInclusive ? a <= e.max : a < e.max;
      if (s && r) return t;
    }

    return this.getDefault();
  }

  _needsNormalization() {
    const e = this._normalizationInfo;
    return e && (e.normalizationField || e.normalizationTotal || e.normalizationType);
  }

  _getValueFromField(e) {
    const t = e.readAttribute(this._field);
    if (!this._needsNormalization() || null == t) return t;
    const {
      normalizationField: s,
      normalizationTotal: r,
      normalizationType: i
    } = this._normalizationInfo,
          a = !!s && e.readAttribute(s);
    if (i) switch (i) {
      case "esriNormalizeByField":
        return a ? t / a : void 0;

      case "esriNormalizeByLog":
        return Math.log(t) * Math.LOG10E;

      case "esriNormalizeByPercentOfTotal":
        return t / r * 100;

      default:
        return void l.error(`Found unknown normalization type: ${i}`);
    } else l.error("Normalization is required, but no type was set!");
  }

}

class h extends u {
  constructor(e, t, s) {
    super(), this.type = "map", this._nullResult = null, this._resultsMap = new Map(), this._fieldsIndex = s, this._fields = e, this._seperator = t || "";
  }

  static fromUVRenderer(e, t, s, r) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = e.fieldDelimiter,
            a = [e.field];
      e.field2 && a.push(e.field2), e.field3 && a.push(e.field3);
      const l = yield (0,_layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__.expandSymbol)(e.backgroundFillSymbol, s, r),
            o = new h(a, i, e.fieldIndex);
      yield Promise.all(e.map.map( /*#__PURE__*/function () {
        var _ref2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
          const i = yield (0,_layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__.expandSymbol)(e.symbol, s, r),
                a = yield t.createTemplateGroup(i, l);
          "<Null>" === e.value ? o.setNullResult(a) : o.add(e.value, a);
        });

        return function (_x6) {
          return _ref2.apply(this, arguments);
        };
      }()));
      const u = yield (0,_layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__.expandSymbol)(e.defaultSymbol, s, r);

      if (u) {
        const e = yield t.createTemplateGroup(u, l);
        o.setDefault(e);
      }

      return o;
    })();
  }

  setNullResult(e) {
    this._nullResult = e;
  }

  add(e, t) {
    this._resultsMap.set(e.toString(), t);
  }

  size() {
    return super.size() + this._resultsMap.size;
  }

  match(e, t, s, r, i) {
    if (null == this._fieldsIndex && !this._fields) return this.getDefault();
    const a = null != this._fieldsIndex ? t.getComputedStringAtIndex(this._fieldsIndex) : this._getValueFromFields(t);
    if (null !== this._nullResult && (null == a || "" === a || "<Null>" === a)) return this._nullResult;
    if (!a && null == a) return this.getDefault();
    const n = a.toString();
    return this._resultsMap.has(n) ? this._resultsMap.get(n) : this.getDefault();
  }

  _getValueFromFields(e) {
    const t = [];

    for (const s of this._fields) {
      const r = e.readAttribute(s);
      null == r || "" === r ? t.push("<Null>") : t.push(r);
    }

    return t.join(this._seperator);
  }

}

function m(_x7, _x8) {
  return _m.apply(this, arguments);
}

function _m() {
  _m = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    const s = e || 1;
    if ("number" == typeof s) return (e, t, r) => s;
    const i = yield (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_4__.createRendererExpression)(s, t.spatialReference, t.fields);
    return (e, s, r) => (0,_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_6__.default)(i, e, {
      $view: r
    }, t.geometryType, s) || 1;
  });
  return _m.apply(this, arguments);
}

let f;

function p() {
  return _p.apply(this, arguments);
}

function _p() {
  _p = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
    return f || (f = __webpack_require__.e(/*! import() */ 1904).then(__webpack_require__.bind(__webpack_require__, /*! ../../../layers/features/schemaUtils.js */ 51904))), f;
  });
  return _p.apply(this, arguments);
}

class _ extends u {
  constructor(e, t, r, i, a) {
    super(), this.type = "dictionary", this._groupIdCache = new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_3__.default(100), this._renderer = e, this._fieldMap = e.fieldMap, this._symbolFields = e.getSymbolFields(), this._templates = t, this._info = r, this._scaleFn = i, this._schemaUtilsModule = a;
  }

  static fromDictionaryRenderer(e, t, s, r) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const [{
        default: i
      }, a] = yield Promise.all([Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../../renderers/DictionaryRenderer.js */ 15206)), p()]),
            n = i.fromJSON(e.renderer);
      yield n.fetchResources({
        spatialReference: s.spatialReference,
        fields: s.fields
      });
      const l = yield m(n.scaleExpression, s);
      return new _(n, t, s, l, a);
    })();
  }

  _analyzeFeature(t, s, r, a, o) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const u = t.readLegacyFeature(),
            c = _this._scaleFn(u, r, a),
            d = _this._attributeHash(u) + "-" + c,
            h = _this._groupIdCache.get(d);

      if (h) return h;

      const m = { ...a,
        spatialReference: _this._info.spatialReference,
        abortOptions: o,
        fields: _this._info.fields
      },
            f = yield _this._renderer.getSymbolAsync(u, m),
            p = _this._schemaUtilsModule.createSymbolSchema(f, _this._renderer),
            _ = (0,_layers_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__.expandSymbol)(p, _this._info, s, o).then(t => {
        if ("expanded-cim" !== t.type) return l.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("mapview-bad-type", `Found unexpected type ${t.type} in dictionary response`)), null;
        t.hash += "-" + c;

        for (const e of t.layers) e.scaleFactor = c, e.templateHash += "-" + c, "text" === e.type && "string" == typeof e.text && e.text.indexOf("[") > -1 && (e.text = (0,_symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_5__.createLabelOverrideFunction)(_this._fieldMap, e.text, e.cim.textCase));

        return _this._templates.createTemplateGroup(t, null);
      });

      return _this._groupIdCache.put(d, _, 1), _;
    })();
  }

  analyze(e, t, s, r, i, a) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const n = t.getCursor(),
            l = [];

      for (; n.next();) l.push(_this2._analyzeFeature(n, s, r, i, a));

      return Promise.all(l);
    })();
  }

  match(e, t, s, r, i) {
    return null;
  }

  _attributeHash(e) {
    let t = "";

    for (const s of this._symbolFields) {
      const r = this._fieldMap[s];
      r && (t += e.attributes[r] + "-");
    }

    return t;
  }

}



/***/ }),

/***/ 81476:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Result.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ok": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ 61414);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,n){if(e&&"name"in e){const o=e;return n&&n.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default(o.name,o.message,o.details)),!1}return!0}


/***/ }),

/***/ 29541:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Writer.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=1.25;class e{constructor(t,e){this._pos=0;const r=e?this._roundToNearest(e,t.BYTES_PER_ELEMENT):40;this._array=new ArrayBuffer(r),this._buffer=new t(this._array),this._ctor=t,this._i16View=new Int16Array(this._array)}get length(){return this._pos}_roundToNearest(t,e){const r=Math.round(t);return r+(e-r%e)}_ensureSize(e){if(this._pos+e>=this._buffer.length){const r=this._roundToNearest((this._array.byteLength+e*this._buffer.BYTES_PER_ELEMENT)*t,this._buffer.BYTES_PER_ELEMENT),s=new ArrayBuffer(r),i=new this._ctor(s);i.set(this._buffer,0),this._array=s,this._buffer=i,this._i16View=new Int16Array(this._array)}}ensureSize(t){this._ensureSize(t)}writeF32(t){this._ensureSize(1);const e=this._pos;return new Float32Array(this._array,4*this._pos,1)[0]=t,this._pos++,e}push(t){this._ensureSize(1);const e=this._pos;return this._buffer[this._pos++]=t,e}writeFixed(t){this._buffer[this._pos++]=t}setValue(t,e){this._buffer[t]=e}i1616Add(t,e,r){this._i16View[2*t]+=e,this._i16View[2*t+1]+=r}getValue(t){return this._buffer[t]}incr(t){if(this._buffer.length<t)throw new Error("Increment index overflows the target buffer");this._buffer[t]++}decr(t){this._buffer[t]--}writeRegion(t){this._ensureSize(t.length);const e=this._pos;return this._buffer.set(t,this._pos),this._pos+=t.length,e}writeManyFrom(t,e,r){this._ensureSize(r-e);for(let s=e;s!==r;s++)this.writeFixed(t._buffer[s])}buffer(){const t=this._array.slice(0,4*this._pos);return this.destroy(),t}toArray(){const t=this._array,e=[];for(let r=0;r<t.byteLength/4;r++)e.push(t[r]);return e}seek(t){this._pos=t}destroy(){this._array=null,this._buffer=null}}


/***/ }),

/***/ 66998:
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/tileUtils.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPow2NeighborKey": () => (/* binding */ l),
/* harmony export */   "getPow2NeighborTile": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile.js */ 65533);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,n,r){const t=e.tileInfoView.tileInfo.isWrappable,i=l(e.key,n,r,t);return new _Tile_js__WEBPACK_IMPORTED_MODULE_0__.Tile(e.tileInfoView,i)}function l(o,e,l,n){const r=o.clone(),t=1<<r.level,i=r.col+e,c=r.row+l;return n&&i<0?(r.col=i+t,r.world-=1):i>=t?(r.col=i-t,r.world+=1):r.col=i,r.row=c,r}


/***/ }),

/***/ 77439:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/textUtils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "codepoints": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t){const e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}


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



/***/ })

}]);
//# sourceMappingURL=6861.96cdfdd768d5ede17682.js.map