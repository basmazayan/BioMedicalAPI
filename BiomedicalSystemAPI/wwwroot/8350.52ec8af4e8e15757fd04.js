"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[8350],{

/***/ 2607:
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/libtess.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadLibtess": () => (/* binding */ a),
/* harmony export */   "triangulate": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets.js */ 22287);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/has.js */ 30627);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


const n = 128e3;
let e = null,
    i = null;

function a() {
  return _a.apply(this, arguments);
}

function _a() {
  _a = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
    return e || (e = o()), e;
  });
  return _a.apply(this, arguments);
}

function o() {
  return _o.apply(this, arguments);
}

function _o() {
  _o = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
    const n = (0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__.default)("esri-csp-restrictions") ? yield __webpack_require__.e(/*! import() */ 5919).then(__webpack_require__.bind(__webpack_require__, /*! ../chunks/libtess-asm.js */ 35919)).then(s => s.l) : yield __webpack_require__.e(/*! import() */ 6460).then(__webpack_require__.bind(__webpack_require__, /*! ../chunks/libtess.js */ 36460)).then(s => s.l);
    i = yield n.load({
      locateFile: () => (0,_assets_js__WEBPACK_IMPORTED_MODULE_1__.getAssetUrl)("esri/core/libs/libtess/libtess.wasm")
    });
  });
  return _o.apply(this, arguments);
}

function r(s, t) {
  const e = Math.max(s.length, n);
  return i.triangulate(s, t, e);
}



/***/ }),

/***/ 74953:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Geometry.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Point": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t,s){this.x=t,this.y=s}clone(){return new t(this.x,this.y)}equals(t,s){return t===this.x&&s===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,s){this.x=t,this.y=s}normalize(){const t=this.x,s=this.y,i=Math.sqrt(t*t+s*s);this.x/=i,this.y/=i}rightPerpendicular(){const t=this.x;this.x=this.y,this.y=-t}move(t,s){this.x+=t,this.y+=s}assign(t){this.x=t.x,this.y=t.y}assignAdd(t,s){this.x=t.x+s.x,this.y=t.y+s.y}assignSub(t,s){this.x=t.x-s.x,this.y=t.y-s.y}rotate(t,s){const i=this.x,h=this.y;this.x=i*t-h*s,this.y=i*s+h*t}scale(t){this.x*=t,this.y*=t}length(){const t=this.x,s=this.y;return Math.sqrt(t*t+s*s)}static distance(t,s){const i=s.x-t.x,h=s.y-t.y;return Math.sqrt(i*i+h*h)}static add(s,i){return new t(s.x+i.x,s.y+i.y)}static sub(s,i){return new t(s.x-i.x,s.y-i.y)}}


/***/ }),

/***/ 24145:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileClipper.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleBuilder": () => (/* binding */ e),
/* harmony export */   "TileClipper": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions.js */ 30603);
/* harmony import */ var _Geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Geometry.js */ 74953);
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GeometryUtils.js */ 76272);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class h{constructor(i,t,s){this.ratio=i,this.x=t,this.y=s}}class n{constructor(t,s,h,n=8,e=8){this.lines=[],this.starts=[],this.validateTessellation=!0,this.pixelRatio=n,this.pixelMargin=e,this.tileSize=_definitions_js__WEBPACK_IMPORTED_MODULE_0__.TILE_SIZE*n,this.dz=t,this.yPos=s,this.xPos=h}setPixelMargin(i){i!==this.pixelMargin&&(this.pixelMargin=i,this.setExtent(this._extent))}setExtent(i){this._extent=i,this.finalRatio=this.tileSize/i*(1<<this.dz);let t=this.pixelRatio*this.pixelMargin;t/=this.finalRatio;const s=i>>this.dz;t>s&&(t=s),this.margin=t,this.xmin=s*this.xPos-t,this.ymin=s*this.yPos-t,this.xmax=this.xmin+s+2*t,this.ymax=this.ymin+s+2*t}reset(i){this.type=i,this.lines=[],this.starts=[],this.line=null,this.start=0}moveTo(i,s){this._pushLine(),this._prevIsIn=this._isIn(i,s),this._moveTo(i,s,this._prevIsIn),this._prevPt=new _Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Point(i,s),this._firstPt=new _Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Point(i,s),this._dist=0}lineTo(i,s){const n=this._isIn(i,s),e=new _Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Point(i,s),l=_Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Point.distance(this._prevPt,e);let x,a,y,r,o,m,p,u;if(n)this._prevIsIn?this._lineTo(i,s,!0):(x=this._prevPt,a=e,y=this._intersect(a,x),this.start=this._dist+l*(1-this._r),this._lineTo(y.x,y.y,!0),this._lineTo(a.x,a.y,!0));else if(this._prevIsIn)a=this._prevPt,x=e,y=this._intersect(a,x),this._lineTo(y.x,y.y,!0),this._lineTo(x.x,x.y,!1);else{const i=this._prevPt,t=e;if(i.x<=this.xmin&&t.x<=this.xmin||i.x>=this.xmax&&t.x>=this.xmax||i.y<=this.ymin&&t.y<=this.ymin||i.y>=this.ymax&&t.y>=this.ymax)this._lineTo(t.x,t.y,!1);else{const s=[];if((i.x<this.xmin&&t.x>this.xmin||i.x>this.xmin&&t.x<this.xmin)&&(r=(this.xmin-i.x)/(t.x-i.x),u=i.y+r*(t.y-i.y),u<=this.ymin?m=!1:u>=this.ymax?m=!0:s.push(new h(r,this.xmin,u))),(i.x<this.xmax&&t.x>this.xmax||i.x>this.xmax&&t.x<this.xmax)&&(r=(this.xmax-i.x)/(t.x-i.x),u=i.y+r*(t.y-i.y),u<=this.ymin?m=!1:u>=this.ymax?m=!0:s.push(new h(r,this.xmax,u))),(i.y<this.ymin&&t.y>this.ymin||i.y>this.ymin&&t.y<this.ymin)&&(r=(this.ymin-i.y)/(t.y-i.y),p=i.x+r*(t.x-i.x),p<=this.xmin?o=!1:p>=this.xmax?o=!0:s.push(new h(r,p,this.ymin))),(i.y<this.ymax&&t.y>this.ymax||i.y>this.ymax&&t.y<this.ymax)&&(r=(this.ymax-i.y)/(t.y-i.y),p=i.x+r*(t.x-i.x),p<=this.xmin?o=!1:p>=this.xmax?o=!0:s.push(new h(r,p,this.ymax))),0===s.length)o?m?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):m?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0);else if(s.length>1&&s[0].ratio>s[1].ratio)this.start=this._dist+l*s[1].ratio,this._lineTo(s[1].x,s[1].y,!0),this._lineTo(s[0].x,s[0].y,!0);else{this.start=this._dist+l*s[0].ratio;for(let i=0;i<s.length;i++)this._lineTo(s[i].x,s[i].y,!0)}this._lineTo(t.x,t.y,!1)}}this._dist+=l,this._prevIsIn=n,this._prevPt=e}close(){if(this.line.length>2){const i=this._firstPt,t=this._prevPt;i.x===t.x&&i.y===t.y||this.lineTo(i.x,i.y);const s=this.line;let h=s.length;for(;h>=4&&(s[0].x===s[1].x&&s[0].x===s[h-2].x||s[0].y===s[1].y&&s[0].y===s[h-2].y);)s.pop(),s[0].x=s[h-2].x,s[0].y=s[h-2].y,--h}}result(i=!0){return this._pushLine(),0===this.lines.length?null:(3===this.type&&i&&l.simplify(this.tileSize,this.margin*this.finalRatio,this.lines),this.lines)}resultWithStarts(){if(2!==this.type)throw new Error("Only valid for lines");this._pushLine();const i=this.lines,t=i.length;if(0===t)return null;const s=[];for(let h=0;h<t;h++)s.push({line:i[h],start:this.starts[h]||0});return s}_isIn(i,t){return i>=this.xmin&&i<=this.xmax&&t>=this.ymin&&t<=this.ymax}_intersect(i,s){let h,n,e;if(s.x>=this.xmin&&s.x<=this.xmax)n=s.y<=this.ymin?this.ymin:this.ymax,e=(n-i.y)/(s.y-i.y),h=i.x+e*(s.x-i.x);else if(s.y>=this.ymin&&s.y<=this.ymax)h=s.x<=this.xmin?this.xmin:this.xmax,e=(h-i.x)/(s.x-i.x),n=i.y+e*(s.y-i.y);else{n=s.y<=this.ymin?this.ymin:this.ymax,h=s.x<=this.xmin?this.xmin:this.xmax;const t=(h-i.x)/(s.x-i.x),l=(n-i.y)/(s.y-i.y);t<l?(e=t,n=i.y+t*(s.y-i.y)):(e=l,h=i.x+l*(s.x-i.x))}return this._r=e,new _Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Point(h,n)}_pushLine(){this.line&&(1===this.type?this.line.length>0&&(this.lines.push(this.line),this.starts.push(this.start)):2===this.type?this.line.length>1&&(this.lines.push(this.line),this.starts.push(this.start)):3===this.type&&this.line.length>3&&(this.lines.push(this.line),this.starts.push(this.start))),this.line=[],this.start=0}_moveTo(i,s,h){3!==this.type?h&&(i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),s=Math.round((s-(this.ymin+this.margin))*this.finalRatio),this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Point(i,s))):(h||(i<this.xmin&&(i=this.xmin),i>this.xmax&&(i=this.xmax),s<this.ymin&&(s=this.ymin),s>this.ymax&&(s=this.ymax)),i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),s=Math.round((s-(this.ymin+this.margin))*this.finalRatio),this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Point(i,s)),this._is_h=!1,this._is_v=!1)}_lineTo(i,s,h){let n,e;if(3!==this.type)if(h){if(i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),s=Math.round((s-(this.ymin+this.margin))*this.finalRatio),this.line.length>0&&(n=this.line[this.line.length-1],n.equals(i,s)))return;this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Point(i,s))}else this.line&&this.line.length>0&&this._pushLine();else if(h||(i<this.xmin&&(i=this.xmin),i>this.xmax&&(i=this.xmax),s<this.ymin&&(s=this.ymin),s>this.ymax&&(s=this.ymax)),i=Math.round((i-(this.xmin+this.margin))*this.finalRatio),s=Math.round((s-(this.ymin+this.margin))*this.finalRatio),this.line&&this.line.length>0){n=this.line[this.line.length-1];const h=n.x===i,l=n.y===s;if(h&&l)return;this._is_h&&h||this._is_v&&l?(n.x=i,n.y=s,e=this.line[this.line.length-2],e.x===i&&e.y===s?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(e=this.line[this.line.length-2],this._is_h=e.x===i,this._is_v=e.y===s)):(this._is_h=e.x===i,this._is_v=e.y===s)):(this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Point(i,s)),this._is_h=h,this._is_v=l)}else this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Point(i,s))}}class e{setExtent(i){this._ratio=4096===i?1:4096/i}get validateTessellation(){return this._ratio<1}reset(i){this.lines=[],this.line=null}moveTo(i,s){this.line&&this.lines.push(this.line),this.line=[];const h=this._ratio;this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Point(i*h,s*h))}lineTo(i,s){const h=this._ratio;this.line.push(new _Geometry_js__WEBPACK_IMPORTED_MODULE_1__.Point(i*h,s*h))}close(){const i=this.line;i&&!i[0].isEqual(i[i.length-1])&&i.push(i[0])}result(){return this.line&&this.lines.push(this.line),0===this.lines.length?null:this.lines}}class l{static simplify(i,t,s){if(!s)return;const h=-t,n=i+t,e=-t,x=i+t,a=[],y=[],r=s.length;for(let l=0;l<r;++l){const i=s[l];if(!i||i.length<2)continue;let t,r=i[0];const o=i.length;for(let s=1;s<o;++s)t=i[s],r.x===t.x&&(r.x<=h&&(r.y>t.y?(a.push(l),a.push(s),a.push(0),a.push(-1)):(y.push(l),y.push(s),y.push(0),y.push(-1))),r.x>=n&&(r.y<t.y?(a.push(l),a.push(s),a.push(1),a.push(-1)):(y.push(l),y.push(s),y.push(1),y.push(-1)))),r.y===t.y&&(r.y<=e&&(r.x<t.x?(a.push(l),a.push(s),a.push(2),a.push(-1)):(y.push(l),y.push(s),y.push(2),y.push(-1))),r.y>=x&&(r.x>t.x?(a.push(l),a.push(s),a.push(3),a.push(-1)):(y.push(l),y.push(s),y.push(3),y.push(-1)))),r=t}if(0===a.length||0===y.length)return;l.fillParent(s,y,a),l.fillParent(s,a,y);const o=[];l.calcDeltas(o,y,a),l.calcDeltas(o,a,y),l.addDeltas(o,s)}static fillParent(i,t,h){const n=h.length,e=t.length;for(let l=0;l<e;l+=4){const e=t[l],x=t[l+1],a=t[l+2],y=i[e][x-1],r=i[e][x];let o=8092,m=-1;for(let t=0;t<n;t+=4){if(h[t+2]!==a)continue;const n=h[t],e=h[t+1],l=i[n][e-1],x=i[n][e];switch(a){case 0:case 1:if((0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__.between)(y.y,l.y,x.y)&&(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__.between)(r.y,l.y,x.y)){const i=Math.abs(x.y-l.y);i<o&&(o=i,m=t)}break;case 2:case 3:if((0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__.between)(y.x,l.x,x.x)&&(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__.between)(r.x,l.x,x.x)){const i=Math.abs(x.x-l.x);i<o&&(o=i,m=t)}}}t[l+3]=m}}static calcDeltas(i,t,s){const h=t.length;for(let n=0;n<h;n+=4){const h=[],e=l.calcDelta(n,t,s,h);i.push(t[n]),i.push(t[n+1]),i.push(t[n+2]),i.push(e)}}static calcDelta(i,t,s,h){const n=t[i+3];if(-1===n)return 0;const e=h.length;return e>1&&h[e-2]===n?0:(h.push(n),l.calcDelta(n,s,t,h)+1)}static addDeltas(i,t){const s=i.length;let h=0;for(let n=0;n<s;n+=4){const t=i[n+3];t>h&&(h=t)}for(let n=0;n<s;n+=4){const s=t[i[n]],e=i[n+1],l=h-i[n+3];switch(i[n+2]){case 0:s[e-1].x-=l,s[e].x-=l,1===e&&(s[s.length-1].x-=l),e===s.length-1&&(s[0].x-=l);break;case 1:s[e-1].x+=l,s[e].x+=l,1===e&&(s[s.length-1].x+=l),e===s.length-1&&(s[0].x+=l);break;case 2:s[e-1].y-=l,s[e].y-=l,1===e&&(s[s.length-1].y-=l),e===s.length-1&&(s[0].y-=l);break;case 3:s[e-1].y+=l,s[e].y+=l,1===e&&(s[s.length-1].y+=l),e===s.length-1&&(s[0].y+=l)}}}}


/***/ }),

/***/ 63537:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TurboLine.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineTessellation": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions.js */ 30603);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(t,e){return t.x===e.x&&t.y===e.y}function i(t){if(!t)return;const i=t.length;if(i<=1)return;let x=0;for(let r=1;r<i;r++)e(t[r],t[x])||++x===r||(t[x]=t[r]);t.length=x+1}function x(t,e){return t.x=e.y,t.y=-e.x,t}function r(t,e){return t.x=-e.y,t.y=e.x,t}function n(t,e){return t.x=e.x,t.y=e.y,t}function s(t,e){return t.x=-e.x,t.y=-e.y,t}function y(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function o(t,e){return t.x*e.y-t.y*e.x}function h(t,e){return t.x*e.x+t.y*e.y}function l(t,e,i,x){return t.x=e.x*i+e.y*x,t.y=e.x*x-e.y*i,t}class a{constructor(t,e,i){this.writeVertex=t,this.writeTriangle=e,this.canUseThinTessellation=i,this.prevNormal={x:void 0,y:void 0},this.nextNormal={x:void 0,y:void 0},this.textureNormalLeft={x:0,y:1},this.textureNormalRight={x:0,y:-1},this.textureNormal={x:void 0,y:void 0},this.joinNormal={x:void 0,y:void 0},this.inner={x:void 0,y:void 0},this.outer={x:void 0,y:void 0},this.roundStart={x:void 0,y:void 0},this.roundEnd={x:void 0,y:void 0},this.startBreak={x:void 0,y:void 0},this.endBreak={x:void 0,y:void 0},this.innerPrev={x:void 0,y:void 0},this.innerNext={x:void 0,y:void 0},this.bevelStart={x:void 0,y:void 0},this.bevelEnd={x:void 0,y:void 0},this.bevelMiddle={x:void 0,y:void 0}}tessellate(e,x){i(e),this.canUseThinTessellation&&x.halfWidth<_definitions_js__WEBPACK_IMPORTED_MODULE_0__.THIN_LINE_HALF_WIDTH_THRESHOLD&&!x.offset?this.tessellateThin_(e,x):this.tessellate_(e,x)}tessellateThin_(t,e){if(t.length<2)return;const i=e.wrapDistance||65535;let x=e.initialDistance||0,r=!1,n=t[0].x,s=t[0].y;const y=t.length;for(let o=1;o<y;++o){r&&(r=!1,x=0);let e=t[o].x,y=t[o].y,h=e-n,l=y-s,a=Math.sqrt(h*h+l*l);if(h/=a,l/=a,x+a>i){r=!0;const t=(i-x)/a;a=i-x,e=(1-t)*n+t*e,y=(1-t)*s+t*y,--o}const c=this.writeVertex(n,s,0,0,h,l,l,-h,0,-1,x),d=this.writeVertex(n,s,0,0,h,l,-l,h,0,1,x);x+=a;const u=this.writeVertex(e,y,0,0,h,l,l,-h,0,-1,x),v=this.writeVertex(e,y,0,0,h,l,-l,h,0,1,x);this.writeTriangle(c,d,u),this.writeTriangle(d,u,v),n=e,s=y}}tessellate_(t,i){const a=t[0],c=t[t.length-1],d=e(a,c),u=d?3:2;if(t.length<u)return;const v=i.pixelCoordRatio,f=null!=i.capType?i.capType:0,w=null!=i.joinType?i.joinType:2,g=null!=i.miterLimit?Math.min(i.miterLimit,4):2,T=null!=i.roundLimit?Math.min(i.roundLimit,1.05):1.05,m=null!=i.halfWidth?i.halfWidth:2,V=!!i.textured;let b,N,k=null,p=null;const M=this.prevNormal,E=this.nextNormal;let L=-1,B=-1;const S=this.joinNormal;let _,j;const P=this.textureNormalLeft,A=this.textureNormalRight,D=this.textureNormal;let U=-1,R=-1;const W=i.wrapDistance||65535;let q=i.initialDistance||0;const X=this.writeVertex,C=this.writeTriangle,z=function(t,e,i,x,r,n){const s=X(b,N,_,j,i,x,t,e,r,n,q);return U>=0&&R>=0&&s>=0&&C(U,R,s),U=R,R=s,s};d&&(k=t[t.length-2],E.x=c.x-k.x,E.y=c.y-k.y,B=y(E),E.x/=B,E.y/=B);let F=!1;for(let e=0;e<t.length;++e){if(F&&(F=!1,q=0),k&&(M.x=-E.x,M.y=-E.y,L=B,q+L>W&&(F=!0)),F){const i=(W-q)/L;L=W-q,k={x:(1-i)*k.x+i*t[e].x,y:(1-i)*k.y+i*t[e].y},--e}else k=t[e];b=k.x,N=k.y;const i=e<=0&&!F,a=e===t.length-1;if(i||(q+=L),p=a?d?t[1]:null:t[e+1],p?(E.x=p.x-b,E.y=p.y-N,B=y(E),E.x/=B,E.y/=B):(E.x=void 0,E.y=void 0),!d){if(i){r(S,E),_=S.x,j=S.y,2===f&&(z(-E.y-E.x,E.x-E.y,E.x,E.y,0,-1),z(E.y-E.x,-E.x-E.y,E.x,E.y,0,1)),1===f&&(z(-E.y-E.x,E.x-E.y,E.x,E.y,-1,-1),z(E.y-E.x,-E.x-E.y,E.x,E.y,-1,1)),1!==f&&0!==f||(z(-E.y,E.x,E.x,E.y,0,-1),z(E.y,-E.x,E.x,E.y,0,1));continue}if(a){x(S,M),_=S.x,j=S.y,1!==f&&0!==f||(z(M.y,-M.x,-M.x,-M.y,0,-1),z(-M.y,M.x,-M.x,-M.y,0,1)),2===f&&(z(M.y-M.x,-M.x-M.y,-M.x,-M.y,0,-1),z(-M.y-M.x,M.x-M.y,-M.x,-M.y,0,1)),1===f&&(z(M.y-M.x,-M.x-M.y,-M.x,-M.y,1,-1),z(-M.y-M.x,M.x-M.y,-M.x,-M.y,1,1));continue}}let c,u,X=-o(M,E);if(Math.abs(X)<.01)h(M,E)>0?(S.x=M.x,S.y=M.y,X=1,c=Number.MAX_VALUE,u=!0):(r(S,E),X=1,c=1,u=!1);else{S.x=(M.x+E.x)/X,S.y=(M.y+E.y)/X,c=y(S);const t=(c-1)*m*v;u=c>4||t>L&&t>B}_=S.x,j=S.y;let C=w;switch(w){case 0:c<1.05&&(C=2);break;case 1:c<T&&(C=2);break;case 2:c>g&&(C=0)}switch(C){case 2:if(z(S.x,S.y,-M.x,-M.y,0,-1),z(-S.x,-S.y,-M.x,-M.y,0,1),a)break;if(V){const t=F?0:q;U=this.writeVertex(b,N,_,j,E.x,E.y,S.x,S.y,0,-1,t),R=this.writeVertex(b,N,_,j,E.x,E.y,-S.x,-S.y,0,1,t)}break;case 0:{const t=X<0;let e,i,y,o;if(t){const t=U;U=R,R=t,e=P,i=A}else e=A,i=P;if(u)y=t?r(this.innerPrev,M):x(this.innerPrev,M),o=t?x(this.innerNext,E):r(this.innerNext,E);else{const e=t?s(this.inner,S):n(this.inner,S);y=e,o=e}const h=t?x(this.bevelStart,M):r(this.bevelStart,M);z(y.x,y.y,-M.x,-M.y,e.x,e.y);const c=z(h.x,h.y,-M.x,-M.y,i.x,i.y);if(a)break;const d=t?r(this.bevelEnd,E):x(this.bevelEnd,E);if(u){const t=this.writeVertex(b,N,_,j,-M.x,-M.y,0,0,0,0,q);U=this.writeVertex(b,N,_,j,E.x,E.y,o.x,o.y,e.x,e.y,q),R=this.writeVertex(b,N,_,j,E.x,E.y,d.x,d.y,i.x,i.y,q),this.writeTriangle(c,t,R)}else{if(V){const t=this.bevelMiddle;t.x=(h.x+d.x)/2,t.y=(h.y+d.y)/2,l(D,t,-M.x,-M.y),z(t.x,t.y,-M.x,-M.y,D.x,D.y),l(D,t,E.x,E.y),U=this.writeVertex(b,N,_,j,E.x,E.y,t.x,t.y,D.x,D.y,q),R=this.writeVertex(b,N,_,j,E.x,E.y,o.x,o.y,e.x,e.y,q)}else{const t=U;U=R,R=t}z(d.x,d.y,E.x,E.y,i.x,i.y)}if(t){const t=U;U=R,R=t}break}case 1:{const t=X<0;let e,i;if(t){const t=U;U=R,R=t,e=P,i=A}else e=A,i=P;const y=t?s(this.inner,S):n(this.inner,S);let o,d;u?(o=t?r(this.innerPrev,M):x(this.innerPrev,M),d=t?x(this.innerNext,E):r(this.innerNext,E)):(o=y,d=y);const v=t?x(this.roundStart,M):r(this.roundStart,M),f=t?r(this.roundEnd,E):x(this.roundEnd,E),w=z(o.x,o.y,-M.x,-M.y,e.x,e.y),g=z(v.x,v.y,-M.x,-M.y,i.x,i.y);if(a)break;const T=this.writeVertex(b,N,_,j,-M.x,-M.y,0,0,0,0,q);u||this.writeTriangle(U,R,T);const m=s(this.outer,y),k=this.writeVertex(b,N,_,j,E.x,E.y,f.x,f.y,i.x,i.y,q);let p,L;const B=c>2;if(B){let e;c!==Number.MAX_VALUE?(m.x/=c,m.y/=c,e=h(M,m),e=(c*(e*e-1)+1)/e):e=-1,p=t?x(this.startBreak,M):r(this.startBreak,M),p.x+=M.x*e,p.y+=M.y*e,L=t?r(this.endBreak,E):x(this.endBreak,E),L.x+=E.x*e,L.y+=E.y*e}l(D,m,-M.x,-M.y);const W=this.writeVertex(b,N,_,j,-M.x,-M.y,m.x,m.y,D.x,D.y,q);l(D,m,E.x,E.y);const C=V?this.writeVertex(b,N,_,j,E.x,E.y,m.x,m.y,D.x,D.y,q):W,F=T,G=V?this.writeVertex(b,N,_,j,E.x,E.y,0,0,0,0,q):T;let H=-1,I=-1;if(B&&(l(D,p,-M.x,-M.y),H=this.writeVertex(b,N,_,j,-M.x,-M.y,p.x,p.y,D.x,D.y,q),l(D,L,E.x,E.y),I=this.writeVertex(b,N,_,j,E.x,E.y,L.x,L.y,D.x,D.y,q)),V?B?(this.writeTriangle(F,g,H),this.writeTriangle(F,H,W),this.writeTriangle(G,C,I),this.writeTriangle(G,I,k)):(this.writeTriangle(F,g,W),this.writeTriangle(G,C,k)):B?(this.writeTriangle(T,g,H),this.writeTriangle(T,H,I),this.writeTriangle(T,I,k)):(this.writeTriangle(T,g,W),this.writeTriangle(T,C,k)),u?(U=this.writeVertex(b,N,_,j,E.x,E.y,d.x,d.y,e.x,e.y,q),R=k):(U=V?this.writeVertex(b,N,_,j,E.x,E.y,d.x,d.y,e.x,e.y,q):w,this.writeTriangle(U,G,k),R=k),t){const t=U;U=R,R=t}break}}}}}


/***/ })

}]);
//# sourceMappingURL=8350.52ec8af4e8e15757fd04.js.map