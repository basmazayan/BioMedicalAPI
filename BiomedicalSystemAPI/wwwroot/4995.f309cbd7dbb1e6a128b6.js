"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[4995],{

/***/ 61476:
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/geohash/GeohashTree.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeohashTree": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/CircularArray.js */ 94546);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _geohashUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geohashUtils.js */ 95146);
/* harmony import */ var _views_2d_layers_features_support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/2d/layers/features/support/FeatureSetReaderJSON.js */ 92722);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n{constructor(s=[],e=8096){this._nodes=0,this._root=new a(0,0,0),this._statisticFields=s,this._pool=e?new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__.default(8096):null}_acquire(t,e,i){this._nodes++;let o=null;return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(this._pool)&&(o=this._pool.dequeue()),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(o)?o.realloc(t,e,i):new a(t,e,i)}_release(t){this._nodes--,(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(this._pool)&&this._pool.enqueue(t)}get count(){return this._root.count}get size(){return this._nodes}get poolSize(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.mapOr)(this._pool,0,(t=>t.size))}get depth(){let t=0;return this._forEachNode((s=>t=Math.max(t,s.depth))),t}dropLevels(t){this._forEachNode((s=>{if(s.depth>=t)for(let t=0;t<s.children.length;t++){const e=s.children[t];s.children[t]=null,e&&this._release(e)}}))}clear(){this.dropLevels(0)}insert(t,s,e=0){const i=_views_2d_layers_features_support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_3__.FeatureSetReaderJSON.fromOptimizedFeatures([t],"esriGeometryPoint").getCursor();i.next();const n=i.readGeometry();if(!n)return;const[a,l]=n.coords,r=t.geohashX,h=t.geohashY;this.insertCursor(i,t.displayId,a,l,r,h,s,e)}insertCursor(t,s,e,i,o,n,a,l=0){let r=this._root,h=0,c=0,d=0;for(;null!==r;){if(r.depth>=l&&(r.count+=1,r.xTotal+=e,r.yTotal+=i,r.xGeohashTotal+=o,r.yGeohashTotal+=n,r.displayId=s,this._updateStatisticsCursor(t,r,1)),h>=a)return void r.add(s);const u=Math.ceil((h+1)/2),f=Math.floor((h+1)/2),x=1-h%2,m=30-(3*u+2*f),p=30-(2*u+3*f),y=(o&7*x+3*(1-x)<<m)>>m,g=(n&3*x+7*(1-x)<<p)>>p,_=y+g*(8*x+4*(1-x));c=c<<3*x+2*(1-x)|y,d=d<<2*x+3*(1-x)|g,null==r.children[_]&&(r.children[_]=this._acquire(c,d,h+1)),h+=1,r=r.children[_]}}remove(t,s){const e=_views_2d_layers_features_support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_3__.FeatureSetReaderJSON.fromOptimizedFeatures([t],"esriGeometryPoint").getCursor();e.next();const i=e.readGeometry();if(!i)return;const[n,a]=i.coords,l=t.geohashX,r=t.geohashY;this.removeCursor(e,n,a,l,r,s)}removeCursor(t,s,e,i,o,n){let a=this._root,l=0;for(;null!==a;){if(a.count-=1,a.xTotal-=s,a.yTotal-=e,a.xGeohashTotal-=i,a.yGeohashTotal-=o,this._updateStatisticsCursor(t,a,-1),l>=n)return void a.remove(t.getDisplayId());const r=Math.ceil((l+1)/2),h=Math.floor((l+1)/2),c=1-l%2,d=30-(3*r+2*h),u=30-(2*r+3*h),f=((i&7*c+3*(1-c)<<d)>>d)+((o&3*c+7*(1-c)<<u)>>u)*(8*c+4*(1-c)),x=a.children[f];1===x.count&&(this._release(x),a.children[f]=null),l+=1,a=x}}find(t,s,e){return this._root.find(t,s,e,0,0,0)}findSingleOccupancyNode(t,s,e,i,o){let n=this._root;for(;null!==n;){const a=n.depth,l=n.xNode,r=n.yNode,h=1-a%2,c=n.xGeohashTotal/n.count,d=n.yGeohashTotal/n.count;if(1===n.count&&t<c&&c<=e&&s<d&&d<=i)return n;if(a>=o){n=n.next;continue}const u=Math.ceil((a+1)/2),f=Math.floor((a+1)/2),x=30-(3*u+2*f),m=30-(2*u+3*f),p=~((1<<x)-1),y=~((1<<m)-1),g=(t&p)>>x,_=(s&y)>>m,N=(e&p)>>x,T=(i&y)>>m,M=l<<3*h+2*(1-h),C=r<<2*h+3*(1-h),S=M+8*h+4*(1-h),b=C+4*h+8*(1-h),v=Math.max(M,g),G=Math.max(C,_),k=Math.min(S,N),F=Math.min(b,T);let I=null,z=null;for(let t=G;t<=F;t++)for(let s=v;s<=k;s++){const e=s-M+(t-C)*(8*h+4*(1-h)),i=n.children[e];i&&(I||(I=i,I.next=n.next),z&&(z.next=i),z=i,i.next=n.next)}n=I||n.next}return null}getRegionDisplayIds(t,s,e,i,o){let n=this._root;const a=[];for(;null!==n;){const l=n.depth,r=n.xNode,h=n.yNode;if(l>=o){const o=n.xGeohashTotal/n.count,l=n.yGeohashTotal/n.count;t<=o&&o<=e&&s<=l&&l<=i&&n.displayIds.forEach((t=>a.push(t))),n=n.next;continue}const c=Math.ceil((l+1)/2),d=Math.floor((l+1)/2),u=1-l%2,f=30-(3*c+2*d),x=30-(2*c+3*d),m=~((1<<f)-1),p=~((1<<x)-1),y=(t&m)>>f,g=(s&p)>>x,_=(e&m)>>f,N=(i&p)>>x,T=r<<3*u+2*(1-u),M=h<<2*u+3*(1-u),C=T+8*u+4*(1-u),S=M+4*u+8*(1-u),b=Math.max(T,y),v=Math.max(M,g),G=Math.min(C,_),k=Math.min(S,N);let F=null,I=null;for(let t=v;t<=k;t++)for(let s=b;s<=G;s++){const e=s-T+(t-M)*(8*u+4*(1-u)),i=n.children[e];i&&(F||(F=i,F.next=n.next),I&&(I.next=i),I=i,i.next=n.next)}n=F||n.next}return a}getRegionStatistics(t,s,e,i,o){let n=this._root,a=0,l=0,r=0;const h={};let c=0;for(;null!==n;){const d=n.depth,u=n.xNode,f=n.yNode;if(d>=o){const o=n.xGeohashTotal/n.count,d=n.yGeohashTotal/n.count;t<o&&o<=e&&s<d&&d<=i&&(a+=n.count,l+=n.xTotal,r+=n.yTotal,1===n.count&&(c=n.displayId),this._aggregateStatistics(h,n.statistics)),n=n.next;continue}const x=Math.ceil((d+1)/2),m=Math.floor((d+1)/2),p=1-d%2,y=30-(3*x+2*m),g=30-(2*x+3*m),_=~((1<<y)-1),N=~((1<<g)-1),T=(t&_)>>y,M=(s&N)>>g,C=(e&_)>>y,S=(i&N)>>g,b=u<<3*p+2*(1-p),v=f<<2*p+3*(1-p),G=b+8*p+4*(1-p),k=v+4*p+8*(1-p),F=Math.max(b,T),I=Math.max(v,M),z=Math.min(G,C),w=Math.min(k,S);let A=null,j=null;for(let o=I;o<=w;o++)for(let d=F;d<=z;d++){const u=d-b+(o-v)*(8*p+4*(1-p)),f=n.children[u];if(f){if(o!==I&&o!==w&&d!==F&&d!==z){const o=f.xGeohashTotal/f.count,n=f.yGeohashTotal/f.count;t<o&&o<=e&&s<n&&n<=i&&(a+=f.count,l+=f.xTotal,r+=f.yTotal,1===f.count&&(c=f.displayId),this._aggregateStatistics(h,f.statistics));continue}A||(A=f,A.next=n.next),j&&(j.next=f),j=f,f.next=n.next}}n=A||n.next}return{count:a,attributes:this._normalizeStatistics(h,a),xTotal:l,yTotal:r,referenceId:c}}_forEachNode(t){let s=this._root;for(;null!==s;){const e=this._linkChildren(s)||s.next;t(s),s=e}}_linkChildren(t){let s=null,e=null;for(let i=0;i<=t.children.length;i++){const o=t.children[i];o&&(s||(s=o,s.next=t.next),e&&(e.next=o),e=o,o.next=t.next)}return s}_updateStatisticsCursor(t,s,e){for(const i of this._statisticFields){const o=i.name,n=i.inField?t.readAttribute(i.inField):t.getComputedNumericAtIndex(i.inFieldIndex);switch(i.statisticType){case"norm":{s.statistics[o]||(s.statistics[o]={});const a=i.inNormalizationField,l=t.readAttribute(a),r=s.statistics[o].onStatisticField||0,h=s.statistics[o].onStatisticNormalizationField||0;null==n||isNaN(n)||null==l||0===l||isNaN(l)||(s.statistics[o].onStatisticField=r+e*n,s.statistics[o].onStatisticNormalizationField=h+e*l);break}case"sum":case"avg":{s.statistics[o]||(s.statistics[o]={value:0,nanCount:0});const t=s.statistics[o].value,i=s.statistics[o].nanCount;null==n||isNaN(n)?s.statistics[o].nanCount=i+e:s.statistics[o].value=t+e*n;break}case"avg_angle":{s.statistics[o]||(s.statistics[o]={x:0,y:0,nanCount:0});const t=s.statistics[o].x,i=s.statistics[o].y,a=s.statistics[o].nanCount,l=Math.PI/180;null==n||isNaN(n)?s.statistics[o].nanCount=a+e:(s.statistics[o].x=t+e*Math.cos(n*l),s.statistics[o].y=i+e*Math.sin(n*l));break}case"mode":{s.statistics[o]||(s.statistics[o]={});const t=s.statistics[o][n]||0;s.statistics[o][n]=t+e;break}}}}_aggregateStatistics(t,s){for(const e of this._statisticFields){const i=e.name;switch(e.statisticType){case"sum":case"avg":case"avg_angle":case"mode":case"norm":t[i]||(t[i]={});for(const e in s[i]){const o=t[i][e]||0;t[i][e]=o+s[i][e]}}}}_normalizeStatistics(t,s){const e={};for(const i of this._statisticFields){const o=i.name;switch(i.statisticType){case"norm":{const i=t[o];if(s&&null==i.onStatisticNormalizationField)break;if(s&&i.onStatisticNormalizationField){e[o]=i.onStatisticField/i.onStatisticNormalizationField;break}e[o]=0;break}case"sum":{if(!s)break;const{value:i,nanCount:n}=t[o];if(!(s-n))break;e[o]=i;break}case"avg":{if(!s)break;const{value:i,nanCount:n}=t[o];if(!(s-n))break;e[o]=i/(s-n);break}case"avg_angle":{if(!s)break;const{x:i,y:n,nanCount:a}=t[o];if(!(s-a))break;const l=i/(s-a),r=n/(s-a),h=180/Math.PI,c=Math.atan2(r,l)*h;e[o]=c;break}case"mode":{const s=t[o];let i=0,n=null;for(const t in s){const e=s[t];e>i&&(i=e,n=t)}e[o]="null"===n?null:n;break}}}return e}}class a{constructor(t,s,e){this.count=0,this.xTotal=0,this.yTotal=0,this.statistics={},this.displayId=0,this.displayIds=new Set,this.next=null,this.depth=0,this.xNode=0,this.yNode=0,this.xGeohashTotal=0,this.yGeohashTotal=0,this.children=new Array(32);for(let i=0;i<this.children.length;i++)this.children[i]=null;this.xNode=t,this.yNode=s,this.depth=e}realloc(t,s,e){for(let i=0;i<this.children.length;i++)this.children[i]=null;return this.xNode=t,this.yNode=s,this.depth=e,this.next=null,this.xGeohashTotal=0,this.yGeohashTotal=0,this.xTotal=0,this.yTotal=0,this.count=0,this.statistics={},this.displayIds.clear(),this}add(t){this.displayIds.add(t)}remove(t){this.displayIds.delete(t)}getLngLatBounds(){const t=this.depth,s=Math.ceil(t/2),e=Math.floor(t/2),o=30-(3*s+2*e),n=30-(2*s+3*e),a=this.xNode<<o,l=this.yNode<<n;return (0,_geohashUtils_js__WEBPACK_IMPORTED_MODULE_2__.decodeGeohashXY)({geohashX:a,geohashY:l},this.depth)}find(t,s,e,i,o,n){if(i>=e)return this;const a=1-i%2,l=3*a+2*(1-a),r=2*a+3*(1-a),h=30-o-l,c=30-n-r,d=((t&7*a+3*(1-a)<<h)>>h)+((s&3*a+7*(1-a)<<c)>>c)*(8*a+4*(1-a)),u=this.children[d];return null==u?null:u.find(t,s,e,i+1,o+l,n+r)}}


/***/ }),

/***/ 95146:
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/geohash/geohashUtils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertGeohash32ToXY": () => (/* binding */ w),
/* harmony export */   "decodeBase32Char": () => (/* binding */ i),
/* harmony export */   "decodeGeohash": () => (/* binding */ d),
/* harmony export */   "decodeGeohashXY": () => (/* binding */ x),
/* harmony export */   "encodeBase32Char": () => (/* binding */ M),
/* harmony export */   "encodeGeohash": () => (/* binding */ C),
/* harmony export */   "forEachIntersectingGeohash": () => (/* binding */ z),
/* harmony export */   "getIntersectingGeohashes": () => (/* binding */ v),
/* harmony export */   "getRelativeGeohash": () => (/* binding */ q),
/* harmony export */   "latDistPerGeohash": () => (/* binding */ X),
/* harmony export */   "lonDistPerGeohash": () => (/* binding */ Y),
/* harmony export */   "setGeohashBuf": () => (/* binding */ p),
/* harmony export */   "setGeohashXY": () => (/* binding */ y),
/* harmony export */   "unpackXBits": () => (/* binding */ j),
/* harmony export */   "unpackYBits": () => (/* binding */ k)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=16,n=8,o=4,e=2,r=1,c=new Float64Array(2),h=new Float64Array(2),f=-90,l=90,a=-180,u=180,s="0123456789bcdefghjkmnpqrstuvwxyz";function i(t){return t<=57?t-48:t<=104?t-88:t<=107?t-89:t<=110?t-90:t-91}function M(t){return s[t]}function g(t){return(t[0]+t[1])/2}function b(t,n,o){return t[0]=n,t[1]=o,t}function A(t,n){const o=g(t),e=n,r=!n;t[0]=r*t[0]+e*o,t[1]=r*o+e*t[1]}function m(t,n){const o=n>g(t);return A(t,o),o}function d(s,M){const m=b(c,f,l),d=b(h,a,u);for(let c=0;c<M.length;c++){const h=i(M.charCodeAt(c));c%2==0?(A(d,!!(t&h)),A(d,!!(o&h)),A(d,!!(r&h)),A(m,!!(n&h)),A(m,!!(e&h))):(A(m,!!(t&h)),A(m,!!(o&h)),A(m,!!(r&h)),A(d,!!(n&h)),A(d,!!(e&h)))}return s[0]=g(m),s[1]=g(d),s}function w(t,n){let o=0,e=0,r=30,c=30;for(let h=0;h<n.length;h++){const t=i(n.charCodeAt(h)),f=h%2==0;r-=f?3:2,c-=f?2:3,o|=j(t,f)<<r,e|=k(t,f)<<c}return{geohashX:o,geohashY:e}}function x(t,n){let o=-90,e=90,r=-180,c=180;for(let h=0;h<n;h++){const n=Math.ceil((h+1)/2),f=Math.floor((h+1)/2),l=1-h%2,a=30-(3*n+2*f),u=30-(2*n+3*f),s=3*l+2*(1-l),i=2*l+3*(1-l),M=3*l+7*(1-l)<<u,g=(7*l+3*(1-l)<<a&t.geohashX)>>a,b=(M&t.geohashY)>>u;for(let t=s-1;t>=0;t--){const n=(r+c)/2,o=g&1<<t?1:0;r=(1-o)*r+o*n,c=(1-o)*n+o*c}for(let t=i-1;t>=0;t--){const n=(o+e)/2,r=b&1<<t?1:0;o=(1-r)*o+r*n,e=(1-r)*n+r*e}}return[r,o,c,e]}function y(t,n,o,e){e%2&&(e+=1);let r=0,c=0,h=-90,f=90,l=-180,a=180;for(let u=0;u<e/2;u++){for(let t=0;t<5;t++){const n=(l+a)/2,e=o>n?1:0;r|=e<<29-(t+5*u),l=(1-e)*l+e*n,a=(1-e)*n+e*a}for(let t=0;t<5;t++){const o=(h+f)/2,e=n>o?1:0;c|=e<<29-(t+5*u),h=(1-e)*h+e*o,f=(1-e)*o+e*f}}t.geohashX=r,t.geohashY=c}function p(t,n,o,e,r){r%2&&(r+=1);let c=0,h=0,f=-90,l=90,a=-180,u=180;for(let s=0;s<r/2;s++){for(let t=0;t<5;t++){const n=(a+u)/2,o=e>n?1:0;c|=o<<29-(t+5*s),a=(1-o)*a+o*n,u=(1-o)*n+o*u}for(let t=0;t<5;t++){const n=(f+l)/2,e=o>n?1:0;h|=e<<29-(t+5*s),f=(1-e)*f+e*n,l=(1-e)*n+e*l}}t[2*n]=c,t[2*n+1]=h}function C(t,n,o){let e="";const r=b(c,-90,90),f=b(h,-180,180);for(let c=0;c<o;c++){let o=0;!(c%2)?(o|=m(f,n)<<4,o|=m(r,t)<<3,o|=m(f,n)<<2,o|=m(r,t)<<1,o|=m(f,n)<<0):(o|=m(r,t)<<4,o|=m(f,n)<<3,o|=m(r,t)<<2,o|=m(f,n)<<1,o|=m(r,t)<<0),e+=M(o)}return e}function X(t){const n=Math.floor(5*t/2);return(l-f)/2**n}function Y(t){const n=Math.ceil(5*t/2);return(u-a)/2**n}function F(t,n,c){return c?t&r|(n&r)<<1|(t&e)<<1|(n&e)<<2|(t&o)<<2:n&r|(t&r)<<1|(n&e)<<1|(t&e)<<2|(n&o)<<2}function j(c,h){return h?r&c|(o&c)>>1|(t&c)>>2:(e&c)>>1|(n&c)>>2}function k(c,h){return h?(e&c)>>1|(n&c)>>2:r&c|(o&c)>>1|(t&c)>>2}function q(c,h,f){const l=!((c.length-1)%2),a=c.substring(0,c.length-1),u=i(c.charCodeAt(c.length-1));let s=0,g=0,b=0,A=0;l?(s=8,g=4,b=r&u|(o&u)>>1|(t&u)>>2,A=(e&u)>>1|(n&u)>>2):(s=4,g=8,A=r&u|(o&u)>>1|(t&u)>>2,b=(e&u)>>1|(n&u)>>2);const m=b+h,d=A+f,w=Math.floor(m/s),x=Math.floor(d/g),y=M(F(m-w*s,d-x*g,l));return c.length>1&&(w||x)?q(a,w,x)+y:a+y}function v(t,n,o,e,r){const c=Math.abs(o-t),h=Math.abs(e-n),f=X(r),l=Y(r),a=Math.ceil(h/l),u=Math.ceil(c/f),s=C(t,n,r),i=new Array;for(let M=0;M<a;M++)for(let t=0;t<u;t++)i.push(q(s,M,t));return i}function z(t,n,o,e,r,c){const h=Math.abs(o-t),f=Math.abs(e-n),l=X(r),a=Y(r),u=Math.ceil(f/a),s=Math.ceil(h/l),i=C(t,n,r);for(let M=0;M<u;M++)for(let r=0;r<s;r++){const h=q(i,M,r),[f,u]=d([0,0],h),s=f-l/2,g=u-a/2,b=f+l/2,A=u+a/2,m=l*a,w=Math.max(t,s),x=Math.max(n,g),y=Math.min(o,b)-w,p=Math.min(e,A)-x;c(h,Math.abs(y*p)/m)}}


/***/ }),

/***/ 1924:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/StreamFeatureManager.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_STREAM_ID_FIELD": () => (/* binding */ o),
/* harmony export */   "ESRI_TIMESTAMP": () => (/* binding */ d),
/* harmony export */   "default": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/CircularArray.js */ 94546);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/mathUtils.js */ 88415);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o="__esri_stream_id__",d="__esri_timestamp__",a=1e3;class h{constructor(t,e,s,i,r=128){this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=s,this._purgeOptions=i,this.store=t,this.objectIdField=e,this.purgeInterval=r,this._useGeneratedIds=this.objectIdField===o}add(r){if(this._useGeneratedIds){const t=this._nextId();r.attributes[this.objectIdField]=t,r.objectId=t}else r.objectId=r.attributes[this.objectIdField];if(this._addOrUpdated.set(r.objectId,r),this._maxAge=Math.max(this._maxAge,r.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(this._trackIdLessObservations)&&(this._trackIdLessObservations=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__.default(1e5)),void this._trackIdLessObservations.enqueue(r.objectId);const o=r.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(o)){const s=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(this._purgeOptions)&&null!=this._purgeOptions.maxObservations?this._purgeOptions.maxObservations:a,r=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(s,0,a);this._trackIdToObservations.set(o,new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__.default(r))}const d=this._trackIdToObservations.get(o).enqueue(r.objectId);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(d)&&(this._addOrUpdated.has(d)?this._addOrUpdated.delete(d):this._removed.push(d))}checkForUpdates(){const t=this._getToAdd(),e=this._getToRemove(),s=performance.now();s-this._lastPurge>=this.purgeInterval&&(this._purge(s),this._lastPurge=s);const r=[];if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e))for(const o of e){const t=this.store.removeById(o);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(t)&&r.push(t)}if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(t))for(const i of t)i.attributes[d]=s,this.store.add(i);(t||r)&&this.store.update(t,r)}_getToAdd(){if(!this._addOrUpdated.size)return null;const t=new Array(this._addOrUpdated.size);let e=0;return this._addOrUpdated.forEach((s=>t[e++]=s)),this._addOrUpdated.clear(),t}_getToRemove(){const t=this._removed;return this._removed.length?(this._removed=[],t):null}_nextId(){const t=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,t}_purge(t){const e=this._purgeOptions;(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e)&&(this._purgeSomeByDisplayCount(e),this._purgeByAge(e),this._purgeByAgeReceived(t,e),this._purgeTracks())}_purgeSomeByDisplayCount(t){if(!t.displayCount)return;let e=this.store.size;if(e>t.displayCount){if(this._timeInfo.trackIdField)for(const s of this._trackIdToObservations.values())if(e>t.displayCount&&s.size){const t=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.unwrap)(s.dequeue());this._removed.push(t),e--}if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(this._trackIdLessObservations)){let s=e-t.displayCount;for(;s-- >0;){const t=this._trackIdLessObservations.dequeue();(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(t)&&this._removed.push(t)}}}}_purgeByAge(t){var e;if(!t.age||null==(e=this._timeInfo)||!e.startTimeField)return;const s=60*t.age*1e3,i=this._maxAge-s;this.store.forEach((t=>{t.attributes[this._timeInfo.startTimeField]<i&&this._removed.push(t.objectId)}))}_purgeByAgeReceived(t,e){if(!e.ageReceived)return;const s=t-60*e.ageReceived*1e3;this.store.forEach((t=>{t.attributes[d]<s&&this._removed.push(t.objectId)}))}_purgeTracks(){this._trackIdToObservations.forEach(((t,e)=>{0===t.size&&this._trackIdToObservations.delete(e)}))}}


/***/ }),

/***/ 6369:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/connections/GeoEventConnection.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry.js */ 61243);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/accessorSupport/set.js */ 72062);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _WebSocketConnection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WebSocketConnection.js */ 17479);
/* harmony import */ var _rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../rest/query/operations/query.js */ 36351);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../rest/support/Query.js */ 37995);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../geometry/SpatialReference.js */ 96583);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


















const p = _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__.default.getLogger("esri.layers.graphics.sources.connections.GeoEventConnection"),
      g = 1e4,
      _ = {
  maxQueryDepth: 5,
  maxRecordCountFactor: 3
};
let w = class extends _WebSocketConnection_js__WEBPACK_IMPORTED_MODULE_14__.WebSocketConnection {
  constructor(e) {
    super({ ..._,
      ...e
    });
  }

  _open() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = yield _this._fetchServiceDefinition(_this._config.source);
      e.timeInfo.trackIdField || p.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");

      const t = _this._fetchWebSocketUrl(e.streamUrls, _this._config.spatialReference);

      _this._buddyServicesQuery || (_this._buddyServicesQuery = _this._queryBuddyServices()), yield _this._buddyServicesQuery, yield _this._tryCreateWebSocket(t);
      const {
        filter: r,
        outFields: o
      } = _this._config;
      _this.destroyed || _this._setFilter(r, o);
    })();
  }

  _onMessage(e) {
    let t;

    try {
      t = this._enrich(JSON.parse(e.data)), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this._featureZScaler) && this._featureZScaler(t.geometry);
    } catch (o) {
      return void p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("geoevent-connection", "Failed to parse message", o));
    }

    this.onFeature(t);
  }

  _fetchServiceDefinition(e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = {
        f: "json",
        ..._this2._config.customParameters
      },
            o = (0,_request_js__WEBPACK_IMPORTED_MODULE_3__.default)(e.path, {
        query: r,
        responseType: "json"
      }),
            s = (yield o).data;
      return _this2._serviceDefinition = s, s;
    })();
  }

  _fetchWebSocketUrl(e, t) {
    const r = e[0],
          {
      urls: o,
      token: s
    } = r,
          i = this._inferWebSocketBaseUrl(o);

    return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__.addQueryParameters)(`${i}/subscribe`, {
      outSR: "" + t.wkid,
      token: s
    });
  }

  _inferWebSocketBaseUrl(e) {
    if (1 === e.length) return e[0];

    for (const t of e) if (-1 !== t.indexOf("wss")) return t;

    return p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("geoevent-connection", "Unable to infer WebSocket url", e)), null;
  }

  _setFilter(e, t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const o = _this3._websocket;
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(o) || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(e) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(t)) return;
      const s = JSON.stringify({
        filter: _this3._serializeFilter(e, t)
      });
      let n = !1;

      const a = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.createResolver)(),
            u = () => {
        n || (_this3.destroyed || _this3._websocket !== o || p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("geoevent-connection", "Server timed out when setting filter")), a.reject());
      },
            f = e => {
        const t = JSON.parse(e.data);
        t.filter && (t.error && (p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("geoevent-connection", "Failed to set service filter", t.error)), _this3._set("errorString", `Could not set service filter - ${t.error}`), a.reject(t.error)), o.onmessage = _this3._onMessage.bind(_this3), n = !0, a.resolve());
      };

      return o.onmessage = f, o.send(s), setTimeout(u, g), a.promise;
    })();
  }

  _serializeFilter(e, t) {
    const o = {};
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(e) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(t)) return o;
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(e) && e.geometry) try {
      const t = (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_17__.fromJSON)(e.geometry);
      if ("extent" !== t.type) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default(`Expected extent but found type ${t.type}`);
      o.geometry = JSON.stringify(t.shiftCentralMeridian());
    } catch (n) {
      p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("geoevent-connection", "Encountered an error when setting connection geometryDefinition", n));
    }
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(e) && e.where && "1 = 1" !== e.where && (o.where = e.where), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(t) && (o.outFields = t.join(",")), o;
  }

  _enrich(e) {
    if (!this._relatedFeatures) return e;
    const t = this._serviceDefinition.relatedFeatures.joinField,
          o = e.attributes[t];
    if (!this._relatedFeatures.has(o)) return p.warn("geoevent-connection", "Feature join failed. Is the join field configured correctly?", e), e;

    const {
      attributes: s,
      geometry: i
    } = this._relatedFeatures.get(o);

    for (const r in s) e.attributes[r] = s[r];

    return i && (e.geometry = i), e.geometry || e.centroid || p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("geoevent-connection", "Found malformed feature - no geometry found", e)), e;
  }

  _queryBuddyServices() {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        const {
          relatedFeatures: e,
          keepLatestArchive: t
        } = _this4._serviceDefinition,
              r = _this4._queryRelatedFeatures(e),
              o = _this4._queryArchive(t);

        yield r;
        const s = yield o;
        if (!s) return;

        for (const i of s.features) _this4.onFeature(_this4._enrich(i));
      } catch (e) {
        p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("geoevent-connection", "Encountered an error when querying buddy services", {
          error: e
        }));
      }
    })();
  }

  _queryRelatedFeatures(e) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!e) return;
      const t = yield _this5._queryBuddy(e.featuresUrl);

      _this5._addRelatedFeatures(t);
    })();
  }

  _queryArchive(e) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (e) return _this6._queryBuddy(e.featuresUrl);
    })();
  }

  _queryBuddy(e) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = new (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../FeatureLayer.js */ 36328))).default({
        url: e
      }),
            {
        capabilities: r
      } = yield t.load(),
            o = r.query.supportsMaxRecordCountFactor,
            s = r.query.supportsPagination,
            i = r.query.supportsCentroid,
            c = _this7._config.maxRecordCountFactor,
            u = t.capabilities.query.maxRecordCount,
            f = o ? u * c : u,
            d = new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_16__.default();
      if (d.outFields = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.unwrapOr)(_this7._config.outFields, ["*"]), d.where = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.unwrapOr)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.get)(_this7._config.filter, "where"), "1=1"), d.returnGeometry = !0, d.returnExceededLimitFeatures = !0, d.outSpatialReference = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__.default.fromJSON(_this7._config.spatialReference), i && (d.returnCentroid = !0), o && (d.maxRecordCountFactor = c), s) return d.num = f, t.destroy(), _this7._queryPages(e, d);
      const y = yield (0,_rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_15__.executeQuery)(e, d, _this7._config.sourceSpatialReference);
      return t.destroy(), y.data;
    })();
  }

  _queryPages(e, t, r = [], o = 0) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      t.start = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(t.num) ? o * t.num : null;
      const {
        data: i
      } = yield (0,_rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_15__.executeQuery)(e, t, _this8._config.sourceSpatialReference);
      return i.exceededTransferLimit && o < _this8._config.maxQueryDepth ? (i.features.forEach(e => r.push(e)), _this8._queryPages(e, t, r, o + 1)) : (r.forEach(e => i.features.push(e)), i);
    })();
  }

  _addRelatedFeatures(e) {
    const t = new Map(),
          r = e.features,
          o = this._serviceDefinition.relatedFeatures.joinField;

    for (const s of r) {
      const e = s.attributes[o];
      t.set(e, s);
    }

    this._relatedFeatures = t;
  }

};
w = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__.subclass)("esri.layers.graphics.sources.connections.GeoEventConnection")], w);
const F = w;


/***/ }),

/***/ 52677:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/connections/StreamConnection.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Evented.js */ 33380);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/set.js */ 72062);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends(_core_Evented_js__WEBPACK_IMPORTED_MODULE_1__.default.EventedMixin(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__.HandleOwner)){onFeature(r){this.emit("feature",r)}};t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.graphics.sources.connections.StreamConnection")],t);const c=t;


/***/ }),

/***/ 17479:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/connections/WebSocketConnection.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadyState": () => (/* binding */ u),
/* harmony export */   "WebSocketConnection": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/support/zscale.js */ 3615);
/* harmony import */ var _StreamConnection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./StreamConnection.js */ 52677);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/













const p = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__.default.getLogger("esri.layers.graphics.sources.connections.WebSocketConnection");
var u;
!function (e) {
  e[e.CONNECTING = 0] = "CONNECTING", e[e.OPEN = 1] = "OPEN", e[e.CLOSING = 2] = "CLOSING", e[e.CLOSED = 3] = "CLOSED";
}(u || (u = {}));
let m = class extends _StreamConnection_js__WEBPACK_IMPORTED_MODULE_13__.default {
  constructor(e) {
    super(), this.errorString = null;
    const {
      geometryType: t,
      spatialReference: o,
      sourceSpatialReference: r
    } = e;
    this._config = e, this._featureZScaler = (0,_geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_12__.getGeometryZScaler)(t, r, o), this._open();
  }

  _open() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this._tryCreateWebSocket(), _this.destroyed || (yield _this._handshake());
    })();
  }

  destroy() {
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(this._websocket) && (this._websocket.onopen = null, this._websocket.onclose = null, this._websocket.onerror = null, this._websocket.onmessage = null, this._websocket.close()), this._websocket = null;
  }

  get connectionStatus() {
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(this._websocket)) return "disconnected";

    switch (this._websocket.readyState) {
      case u.CONNECTING:
      case u.OPEN:
        return "connected";

      case u.CLOSING:
      case u.CLOSED:
        return "disconnected";
    }
  }

  _tryCreateWebSocket(e = this._config.source.path, o = 1e3, r = 0) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        if (_this2.destroyed) return;
        const t = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryParameters)(e, _this2._config.customParameters);
        _this2._websocket = yield _this2._createWebSocket(t), _this2.notifyChange("connectionStatus");
      } catch (s) {
        const c = o / 1e3;
        return _this2._config.maxReconnectionAttempts && r >= _this2._config.maxReconnectionAttempts ? (p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("websocket-connection", "Exceeded maxReconnectionAttempts attempts. No further attempts will be made")), void _this2.destroy()) : (p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("websocket-connection", `Failed to connect. Attempting to reconnect in ${c}s`, s)), yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.after)(o), _this2._tryCreateWebSocket(e, Math.min(1.5 * o, 1e3 * _this2._config.maxReconnectionInterval), r + 1));
      }
    })();
  }

  _createWebSocket(e) {
    return new Promise((t, o) => {
      const r = new WebSocket(e);
      r.onopen = () => {
        if (r.onopen = null, this.destroyed) return r.onclose = null, void r.close();
        r.onclose = e => this._onClose(e), r.onerror = e => this._onError(e), r.onmessage = e => this._onMessage(e), t(r);
      }, r.onclose = e => {
        r.onopen = r.onclose = null, o(e);
      };
    });
  }

  _handshake(e = 1e4) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const o = _this3._websocket;
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(o)) return;
      const r = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createResolver)(),
            n = o.onmessage,
            {
        filter: i,
        outFields: a,
        spatialReference: l
      } = _this3._config;
      return r.timeout(e), o.onmessage = e => {
        var s;
        let c = null;

        try {
          c = JSON.parse(e.data);
        } catch (d) {}

        c && "object" == typeof c || (p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("websocket-connection", "Protocol violation. Handshake failed - malformed message", e.data)), r.reject(), _this3.destroy()), (null == (s = c.spatialReference) ? void 0 : s.wkid) !== (null == l ? void 0 : l.wkid) && (p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("websocket-connection", `Protocol violation. Handshake failed - expected wkid of ${l.wkid}`, e.data)), r.reject(), _this3.destroy()), "json" !== c.format && (p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("websocket-connection", "Protocol violation. Handshake failed - format is not set", e.data)), r.reject(), _this3.destroy()), i && c.filter !== i && p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("websocket-connection", "Tried to set filter, but server doesn't support it")), a && c.outFields !== a && p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("websocket-connection", "Tried to set outFields, but server doesn't support it")), o.onmessage = n, r.resolve();
      }, o.send(JSON.stringify({
        filter: i,
        outFields: a,
        format: "json",
        spatialReference: {
          wkid: l.wkid
        }
      })), r.promise;
    })();
  }

  _onMessage(e) {
    try {
      const o = JSON.parse(e.data);
      if ("featureResult" !== o.type) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("websocket-connection", "Protocol violation - Expected to find message of type 'featureResult'", o);

      for (const e of o.features) (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(this._featureZScaler) && this._featureZScaler(e.geometry), this.onFeature(e);
    } catch (o) {
      return p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("websocket-connection", "Failed to parse message", o)), void this.destroy();
    }
  }

  _onError(e) {
    const t = "Encountered an error over WebSocket connection";
    this._set("errorString", t), p.error("websocket-connection", t);
  }

  _onClose(e) {
    this._websocket = null, this.notifyChange("connectionStatus"), 1e3 !== e.code && p.error("websocket-connection", `WebSocket closed unexpectedly with error code ${e.code}`), this.destroyed || this._open();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()], m.prototype, "connectionStatus", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()], m.prototype, "errorString", void 0), m = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.layers.graphics.sources.connections.WebSocketConnection")], m);


/***/ }),

/***/ 98082:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/connections/createConnection.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createConnection": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _GeoEventConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeoEventConnection.js */ 6369);
/* harmony import */ var _WebSocketConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebSocketConnection.js */ 17479);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,o,r,c,i,s,a,m){const p=0===t.path.indexOf("wss://")||0===t.path.indexOf("ws://"),f={source:t,sourceSpatialReference:o,spatialReference:r,geometryType:c,filter:i,maxReconnectionAttempts:s,maxReconnectionInterval:a,customParameters:m};return p?new _WebSocketConnection_js__WEBPACK_IMPORTED_MODULE_1__.WebSocketConnection(f):new _GeoEventConnection_js__WEBPACK_IMPORTED_MODULE_0__.default(f)}


/***/ }),

/***/ 44995:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/Pipeline.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d),
/* harmony export */   "getInstances": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ 87940);
/* harmony import */ var _processors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./processors.js */ 50013);
/* harmony import */ var _controllers_FeatureController2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controllers/FeatureController2D.js */ 73769);
/* harmony import */ var _support_TileStore_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/TileStore.js */ 21931);
/* harmony import */ var _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./support/UpdateToken.js */ 81228);
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../tiling/TileInfoView.js */ 58902);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/













const p = new Set();

function h() {
  return p;
}

let u = class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__.HandleOwner {
  constructor() {
    super(...arguments), this.controller = null, this.processor = null, this.remoteClient = null, this.tileStore = null, this.service = null, this.viewState = null, this._paused = !1, this._pendingTileUpdates = [];
  }

  initialize() {
    this.handles.add(this.watch("updating", t => {
      this.remoteClient.invoke("setUpdating", t).catch(t => {});
    }));
  }

  destroy() {
    var t, e, r;
    null == (t = this.controller) || t.destroy(), null == (e = this.processor) || e.destroy(), null == (r = this.tileStore) || r.destroy(), this.controller = this.processor = this.tileStore = this.remoteClient = null;
  }

  get updating() {
    return !this.controller || this.controller.updating;
  }

  startup({
    service: t,
    config: e,
    tileInfo: r,
    tiles: o
  }) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this._paused = !0, _this.service = t, !_this.tileStore) {
        const t = new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_13__.default(_layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_8__.default.fromJSON(r));
        _this.tileStore = new _support_TileStore_js__WEBPACK_IMPORTED_MODULE_11__.default(t);
      }

      for (yield _this._createProcessorAndController(e), yield _this.update({
        config: e
      }, !0), _this.tileStore.clear(), _this.tileStore.updateTiles(o), _this._paused = !1; _this._pendingTileUpdates.length;) _this.tileStore.updateTiles(_this._pendingTileUpdates.pop());
    })();
  }

  updateTiles(t) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2._paused ? _this2._pendingTileUpdates.push(t) : _this2.tileStore.updateTiles(t);
    })();
  }

  update({
    config: t
  }, e = !1) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_12__.UpdateToken.empty();
      return e || _this3.controller.pause(), yield Promise.all([_this3.processor.update(r, t), _this3.controller.update(r, t)]), r.toJSON();
    })();
  }

  applyUpdate(t) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this4.controller.applyUpdate(_support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_12__.UpdateToken.create(t));
    })();
  }

  _createProcessorAndController(t) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield Promise.all([_this5._handleControllerConfig(t), _this5._handleProcessorConfig(t)]), _this5.controller.processor = _this5.processor;
    })();
  }

  _handleControllerConfig(t) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = yield _this6._createController(_this6.service, t);
      return yield e.startup(), e;
    })();
  }

  _handleProcessorConfig(t) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this7._createProcessor(_this7.service, t);
    })();
  }

  _createController(t, e) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this8.controller && _this8.controller.destroy();
      const {
        tileStore: r,
        remoteClient: o
      } = _this8,
            s = new _controllers_FeatureController2D_js__WEBPACK_IMPORTED_MODULE_10__.default({
        service: t,
        config: e,
        tileStore: r,
        remoteClient: o
      });
      return _this8.controller = s, s;
    })();
  }

  _createProcessor(t, e) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = e.schema.processors[0].type,
            o = (yield (0,_processors_js__WEBPACK_IMPORTED_MODULE_9__.loadProcessorModule)(r)).default,
            {
        remoteClient: s,
        tileStore: l
      } = _this9,
            n = new o({
        service: t,
        config: e,
        tileStore: l,
        remoteClient: s
      });
      return _this9.processor && _this9.processor.destroy(), _this9.processor = n, n;
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], u.prototype, "controller", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], u.prototype, "processor", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], u.prototype, "updating", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], u.prototype, "viewState", void 0), u = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.views.2d.layers.features.Pipeline")], u);
const d = u;


/***/ }),

/***/ 73769:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/controllers/FeatureController2D.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ U)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/watchUtils.js */ 11652);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _layers_graphics_data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../layers/graphics/data/QueryEngine.js */ 43971);
/* harmony import */ var _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../layers/support/FieldsIndex.js */ 62419);
/* harmony import */ var _engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../engine/webgl/DisplayId.js */ 71369);
/* harmony import */ var _FeatureStore2D_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../FeatureStore2D.js */ 67906);
/* harmony import */ var _sources_createSource_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../sources/createSource.js */ 73145);
/* harmony import */ var _support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../support/AttributeStore.js */ 28603);
/* harmony import */ var _support_ClusterStore_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../support/ClusterStore.js */ 87049);
/* harmony import */ var _support_ComputedAttributeStorage_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../support/ComputedAttributeStorage.js */ 38570);
/* harmony import */ var _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../support/FeatureSetReaderJSON.js */ 92722);
/* harmony import */ var _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../support/UpdateToken.js */ 81228);
/* harmony import */ var _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../support/QueueProcessor.js */ 28123);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






















const E = 5e3,
      j = "tileRenderer.featuresView.attributeView.initialize",
      F = "tileRenderer.featuresView.attributeView.requestUpdate",
      T = "tileRenderer.featuresView.requestRender";

function k(e) {
  return "worker:port-closed" === e.name;
}

function q(e) {
  if (!(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.isAbortError)(e) && !k(e)) throw e;
}

function R(e) {
  return "feature" === e.type && "snapshot" === e.mode;
}

let x = class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__.HandleOwner {
  constructor() {
    super(...arguments), this._storage = new _support_ComputedAttributeStorage_js__WEBPACK_IMPORTED_MODULE_19__.ComputedAttributeStorage(), this._markedIdsBufId = this._storage.createBitset(), this._lastCleanup = performance.now(), this._cleanupNeeded = !1, this._invalidated = !1, this._tileToResolver = new Map(), this._didEdit = !1, this.tileStore = null, this.config = null, this.processor = null, this.remoteClient = null, this.service = null;
  }

  initialize() {
    this._initAttributeStore(), this._initStores(), this._initQueryEngine(), this._initSource(), this._updateQueue = new _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_22__.QueueProcessor({
      concurrency: "geoevent" === this._source.type ? 1 : 4,
      process: (e, t) => this._onTileMessage(e, {
        signal: t
      })
    }), this.handles.add([this.tileStore.on("update", this.onTileUpdate.bind(this)), this.watch("updating", e => !e && this.onIdle())]), this._checkUpdating = setInterval(() => this.notifyChange("updating"), 300);
  }

  startup() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this._initAttributeStore();
    })();
  }

  _initSource() {
    const e = this.tileStore.tileScheme,
          t = () => this._updateQueue.length < 50,
          r = (e, t) => (this._invalidated = !0, this._patchTile(e, t));

    this._source = (0,_sources_createSource_js__WEBPACK_IMPORTED_MODULE_16__.createSource)(this.service, this.spatialReference, e, r, t, this.featureStore), this._proxyEvents();
  }

  _proxyEvents() {
    if ("geoevent" === this._source.type) {
      const e = this._source.events;
      this.handles.add([e.on("connectionStatus", e => this.remoteClient.invoke("setProperty", {
        propertyName: "connectionStatus",
        value: e
      }).catch(q)), e.on("errorString", e => this.remoteClient.invoke("setProperty", {
        propertyName: "errorString",
        value: e
      }).catch(q)), e.on("feature", e => this.remoteClient.invoke("emitEvent", {
        name: "data-received",
        event: {
          attributes: e.attributes,
          centroid: e.centroid,
          geometry: e.geometry
        }
      }).catch(q)), e.on("updateRate", e => this.remoteClient.invoke("emitEvent", {
        name: "update-rate",
        event: { ...e
        }
      }).catch(q))]);
    }
  }

  _initAttributeStore() {
    this.attributeStore ? this.attributeStore.invalidateResources() : this.attributeStore = new _support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_17__.default({
      type: "remote",
      initialize: (e, t) => (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(this.remoteClient.invoke(j, e, {
        signal: t
      }).catch(q)),
      update: (e, t) => (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(this.remoteClient.invoke(F, e, {
        signal: t
      }).catch(q)),
      render: e => (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(this.remoteClient.invoke(T, void 0, {
        signal: e
      }).catch(q))
    }, this.config);
  }

  _initStores() {
    const e = "snapshot" === this.service.type ? "snapshot" : "on-demand",
          t = {
      geometryInfo: {
        geometryType: this.service.geometryType,
        hasM: !1,
        hasZ: !1
      },
      spatialReference: this.spatialReference,
      fieldsIndex: this.fieldsIndex,
      fields: this.service.fields
    };
    this.featureStore = new _FeatureStore2D_js__WEBPACK_IMPORTED_MODULE_15__.FeatureStore2D(t, this._storage, e), this.aggregateStore = new _support_ClusterStore_js__WEBPACK_IMPORTED_MODULE_18__.ClusterStore(t, this.spatialReference, this._storage), this.handles.add(this.aggregateStore.events.on("valueRangesChanged", e => {
      this.remoteClient.invoke("emitEvent", {
        name: "valueRangesChanged",
        event: {
          valueRanges: e.valueRanges
        }
      }).catch(q);
    }));
  }

  _initQueryEngine() {
    var e;
    const t = this;
    null == (e = this.queryEngine) || e.destroy(), this.queryEngine = new _layers_graphics_data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_12__.default({
      definitionExpression: this.config.definitionExpression,
      fields: this.service.fields,
      geometryType: this.service.geometryType,
      objectIdField: this.service.objectIdField,
      hasM: !1,
      hasZ: !1,
      spatialReference: this.spatialReference.toJSON(),
      cacheSpatialQueries: !0,
      featureStore: this.featureStore,
      aggregateAdapter: {
        getFeatureObjectIds: e => t.aggregateStore.getFeatureDisplayIdsForAggregate(e).map(e => t.getObjectId(e))
      },
      timeInfo: this.service.timeInfo
    });
  }

  destroy() {
    this._updateQueue.destroy(), this._source.destroy(), this.queryEngine.destroy(), this.attributeStore && this.attributeStore.destroy();

    for (const e of this.tileStore.tiles) this._source.unsubscribe(e);

    clearInterval(this._checkUpdating);
  }

  get fieldsIndex() {
    return new _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_13__.default(this.service.fields);
  }

  get hasAggregates() {
    return !!this.config.schema.targets.aggregate;
  }

  get spatialReference() {
    return this.tileStore.tileScheme.spatialReference;
  }

  get updating() {
    return this.isUpdating();
  }

  isUpdating() {
    return this._source.updating || !!this._updateQueue.length;
  }

  enableEvent(e) {
    this._source.enableEvent(e.name, e.value);
  }

  pause() {
    this._updateQueue.pause(), this._updateQueue.clear();
  }

  update(e, t) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2._set("config", t), _this2._schema = t.schema, _this2._initQueryEngine(), yield Promise.all([_this2._source.update(e, t.schema.source), _this2.featureStore.updateSchema(e, t.schema.targets.feature), _this2.attributeStore.update(e, t), _this2.attributeStore.updateFilters(e, _this2)]), yield _this2.aggregateStore.updateSchema(e, t.schema.targets.aggregate), (0,_core_has_js__WEBPACK_IMPORTED_MODULE_3__.default)("esri-2d-update-debug") && e.describe();
    })();
  }

  applyUpdate(e) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      e.mesh && _this3.clearTiles(), _this3._updateQueue.resume(), yield _this3._source.applyUpdate(e), _this3.notifyChange("updating"), yield (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__.whenFalseOnce)(_this3, "updating", !0), _this3.hasAggregates && (yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.after)(10), yield (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__.whenFalseOnce)(_this3, "updating", !0));
    })();
  }

  onEdits({
    edits: e
  }) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      (0,_core_has_js__WEBPACK_IMPORTED_MODULE_3__.default)("esri-2d-update-debug") && console.debug("Applying Edit:", e), _this4._didEdit = !0;

      try {
        const t = e.removed.map(e => e.objectId && -1 !== e.objectId ? e.objectId : _this4._lookupObjectIdByGlobalId(e.globalId)),
              r = e.addOrModified.map(({
          objectId: e
        }) => e);
        _this4.featureStore.invalidate(), yield _this4._source.edit(r, t), _this4.clearTiles(), _this4.notifyChange("updating"), _this4.aggregateStore.clear(), yield _this4._source.resend(), yield (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__.whenFalseOnce)(_this4, "updating", !0);
      } catch (t) {}
    })();
  }

  refresh(e) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!e) {
        const e = _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_21__.UpdateToken.empty();
        return e.storage.filters = !0, _this5.applyUpdate(e);
      }

      _this5.featureStore.invalidate(), _this5.clearTiles(), _this5._source.refresh(), _this5._cleanupNeeded = !0, _this5.notifyChange("updating"), yield (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__.whenFalseOnce)(_this5, "updating", !0);
    })();
  }

  clearTiles() {
    for (const e of this.tileStore.tiles) this.processor.onTileClear(e);
  }

  onTileUpdate(e) {
    this.aggregateStore.onTileUpdate(e);

    for (const t of e.added) this._source.subscribe(t), this._level = t.level;

    for (const t of e.removed) this._source.unsubscribe(t), this._cleanupNeeded = !0, this._tileToResolver.has(t.id) && (this._tileToResolver.get(t.id).resolve(), this._tileToResolver.delete(t.id));

    this.notifyChange("updating");
  }

  onIdle() {
    this._invalidated && ((this.hasAggregates || "heatmap" === this.processor.type) && this._repushCurrentLevelTiles(), this._invalidated = !1), this._markAndSweep();
  }

  querySummaryStatistics({
    query: e,
    params: t
  }) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this6.queryEngine.executeQueryForSummaryStatistics(e, t);
    })();
  }

  queryUniqueValues({
    query: e,
    params: t
  }) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this7.queryEngine.executeQueryForUniqueValues(e, t);
    })();
  }

  queryClassBreaks({
    query: e,
    params: t
  }) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this8.queryEngine.executeQueryForClassBreaks(e, t);
    })();
  }

  queryHistogram({
    query: e,
    params: t
  }) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this9.queryEngine.executeQueryForHistogram(e, t);
    })();
  }

  queryExtent(e) {
    return this.queryEngine.executeQueryForExtent(e);
  }

  queryFeatures(e) {
    return this.queryEngine.executeQuery(e);
  }

  queryVisibleFeatures(e) {
    var _this10 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = yield _this10.queryEngine.executeQuery(e),
            r = t.objectIdFieldName;
      return t.features = t.features.filter(e => {
        const t = e.attributes[r],
              s = _this10.getDisplayId(t);

        return _this10.attributeStore.isVisible(s);
      }), t;
    })();
  }

  queryFeatureCount(e) {
    return this.queryEngine.executeQueryForCount(e);
  }

  queryLatestObservations(e) {
    return this.queryEngine.executeQueryForLatestObservations(e);
  }

  queryObjectIds(e) {
    return this.queryEngine.executeQueryForIds(e);
  }

  queryStatistics() {
    var _this11 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this11.featureStore.storeStatistics;
    })();
  }

  getObjectId(e) {
    return this.featureStore.lookupObjectId(e, this._storage);
  }

  getDisplayId(e) {
    if (this._schema.targets.aggregate) {
      const t = this.aggregateStore.getDisplayId(e);

      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(t)) {
        const t = this.featureStore.lookupDisplayId(e);
        return this.aggregateStore.getDisplayIdForReferenceId(t);
      }

      return t;
    }

    return this.featureStore.lookupDisplayId(e);
  }

  getFeatures(e) {
    const t = [],
          r = [];

    for (const s of e) if ((0,_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_14__.isAggregateId)(s)) {
      const e = this.getAggregate(s);
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(e)) if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(e.referenceId)) {
        const r = this.getFeature(e.referenceId);
        (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(r) && t.push(r);
      } else r.push(e);
    } else {
      const e = this.getFeature(s);
      (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(e) && t.push(e);
    }

    return {
      features: t,
      aggregates: r
    };
  }

  getFeature(e) {
    const t = this.featureStore.lookupFeatureByDisplayId(e, this._storage);
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(t)) return null;
    const r = t.readHydratedGeometry(),
          i = (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_11__.convertToGeometry)(r, t.geometryType, t.hasZ, t.hasM);
    return {
      attributes: t.readAttributes(),
      geometry: i
    };
  }

  getAggregate(e) {
    return this.aggregateStore.getAggregate(e);
  }

  getAggregates() {
    return this.aggregateStore.getAggregates();
  }

  setHighlight(e) {
    var _this12 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = e.map(e => _this12.getDisplayId(e));
      return _this12.attributeStore.setHighlight(e, t);
    })();
  }

  _lookupObjectIdByGlobalId(e) {
    const t = this.service.globalIdField;
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(t)) throw new Error("Expected globalIdField to be defined");
    let r = null;
    if (this.featureStore.forEach(s => {
      e === s.readAttribute(t) && (r = s.getObjectId());
    }), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(r)) throw new Error(`Expected to find a feature with globalId ${e}`);
    return r;
  }

  _repushCurrentLevelTiles() {
    const e = this.tileStore.tiles.filter(e => e.level === this._level);

    for (const t of e) this._patchTile({
      type: "append",
      id: t.key.id,
      addOrUpdate: _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_20__.FeatureSetReaderJSON.fromOptimizedFeatures([], this.service.geometryType),
      remove: [],
      end: !0,
      status: _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_21__.UpdateToken.empty()
    });
  }

  _maybeForceCleanup() {
    performance.now() - this._lastCleanup > E && this._markAndSweep();
  }

  _patchTile(e, t) {
    const r = this._updateQueue.push(e, t).then(() => {
      this.notifyChange("updating");
    }).catch(e => {
      this.notifyChange("updating");
    });

    return this.notifyChange("updating"), r;
  }

  _onTileMessage(e, t) {
    var _this13 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(t);

      const r = _this13.tileStore.get(e.id);

      if (!r) return;
      if (e.clear) return _this13.processor.onTileClear(r);
      const i = e.status;
      _this13._cleanupNeeded = !0;
      const a = [];

      for (const s of e.remove) {
        const e = _this13.featureStore.lookupDisplayId(s);

        e && a.push(e);
      }

      e.remove = a;

      try {
        if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(e.addOrUpdate)) return void _this13.processor.onTileMessage(r, { ...e,
          addOrUpdate: null
        }, _this13.hasAggregates, t).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfNotAbortError);

        if (e.addOrUpdate.setArcadeSpatialReference(_this13.spatialReference), _this13.featureStore.hasInstance(e.addOrUpdate.instance) && i.targets.feature || (i.targets.feature = !0, _this13.featureStore.onTileData(r, e)), !i.storage.data || !i.storage.filters) {
          i.storage.data = !0, i.storage.filters = !0, _this13.attributeStore.onTileData(r, e);
          "geoevent" === _this13._source.type || _this13._didEdit ? (yield _this13.attributeStore.sendUpdates(), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(t)) : _this13.attributeStore.sendUpdates();
        }

        if (_this13.hasAggregates && !i.targets.aggregate) {
          i.targets.aggregate = !0;

          const t = R(_this13._source) && _this13._source.loading,
                s = !R(_this13._source) || t || e.end;

          if (_this13.aggregateStore.onTileData(r, e, _this13._storage, _this13.attributeStore, s), !s) return;
          i.mesh || (_this13.attributeStore.onTileData(r, e), yield _this13.attributeStore.sendUpdates(), _this13.processor.onTileClear(r));
        }

        i.mesh || (i.mesh = !0, yield _this13.processor.onTileMessage(r, e, _this13.hasAggregates, t), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(t)), _this13._maybeForceCleanup();
      } catch (o) {
        (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfNotAbortError)(o);
      }
    })();
  }

  _mark(e, t, r) {
    const s = (4294901760 & this._storage.getInstanceId(e)) >>> 16;
    e && (t.add(s), r.set(e));
  }

  _markAndSweep() {
    this._lastCleanup = performance.now();
    if (!(!("feature" === this._source.type && "snapshot" === this._source.mode) && ("geoevent" === this._source.type || this._cleanupNeeded))) return;
    this._cleanupNeeded = !1;

    const e = this._storage.getBitset(this._markedIdsBufId),
          t = new Set();

    e.clear();

    for (const r of this.tileStore.tiles) for (const s of this._source.readers(r.id)) {
      const r = s.getCursor();

      for (; r.next();) {
        let s = r.getDisplayId();

        if (!s) {
          const e = r.getObjectId();
          s = this.featureStore.lookupDisplayId(e);
        }

        this._mark(s, t, e);
      }
    }

    "symbol" === this.processor.type && this.processor.forEachBufferId(r => {
      this._mark(r, t, e);
    }), this._updateQueue.forEach(r => {
      for (const s of r.remove) {
        const r = this.featureStore.lookupDisplayId(s);

        this._mark(r, t, e);
      }
    }), this.config.schema.targets.aggregate && (this.aggregateStore.sweepFeatures(e, this.featureStore), this.aggregateStore.sweepClusters(this._storage, this.attributeStore, this._level)), this.featureStore.sweepFeatures(e, this._storage, this.attributeStore), this.featureStore.sweepFeatureSets(t);
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  constructOnly: !0
})], x.prototype, "tileStore", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()], x.prototype, "config", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  readOnly: !0
})], x.prototype, "fieldsIndex", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()], x.prototype, "processor", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  constructOnly: !0
})], x.prototype, "remoteClient", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  constructOnly: !0
})], x.prototype, "service", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()], x.prototype, "spatialReference", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()], x.prototype, "updating", null), x = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.views.2d.layers.features.controllers.FeatureController2D")], x);
const U = x;


/***/ }),

/***/ 91092:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/controllers/support/sourceAdapters.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SourceAdapter": () => (/* binding */ l),
/* harmony export */   "createSourceAdapter": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/has.js */ 30627);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_workers_Connection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/workers/Connection.js */ 35506);
/* harmony import */ var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../geometry/support/quantizationUtils.js */ 91409);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _layers_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../layers/ogc/ogcFeatureUtils.js */ 44921);
/* harmony import */ var _rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../rest/query/operations/query.js */ 36351);
/* harmony import */ var _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../support/FeatureSetReaderJSON.js */ 92722);
/* harmony import */ var _support_FeatureSetReaderPBF_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../support/FeatureSetReaderPBF.js */ 89738);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/










class l {
  constructor(e) {
    this.service = e;
  }

  destroy() {}

}

function f(e) {
  return Array.isArray(e.source);
}

function y(e) {
  return e && e.capabilities && e.collection && e.layerDefinition;
}

function d(t) {
  const {
    capabilities: r
  } = t;
  return y(t.source) ? new w(t) : f(t) ? new F(t) : r.query.supportsFormatPBF && (0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__.default)("featurelayer-pbf") ? new q(t) : new v(t);
}

function h(_x) {
  return _h.apply(this, arguments);
}

function _h() {
  _h = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    const t = new _core_workers_Connection_js__WEBPACK_IMPORTED_MODULE_3__.default();
    return yield t.open(e, {}), t;
  });
  return _h.apply(this, arguments);
}

class F extends l {
  constructor(e) {
    super(e), this._portsOpen = h(e.source).then(e => this.client = e);
  }

  destroy() {
    this.client.close(), this.client = null;
  }

  executeQuery(e, t) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this._portsOpen;
      const r = yield _this.client.invoke("queryFeatures", e.toJSON(), t);
      return _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_8__.FeatureSetReaderJSON.fromFeatureSet(r, _this.service.objectIdField);
    })();
  }

}

class q extends l {
  executeQuery(e, t) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        data: r
      } = yield (0,_rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_7__.executeQueryPBFBuffer)(_this2.service.source, e, t),
            s = !e.quantizationParameters;
      return _support_FeatureSetReaderPBF_js__WEBPACK_IMPORTED_MODULE_9__.FeatureSetReaderPBF.fromBuffer(r, _this2.service.geometryType, s);
    })();
  }

}

class v extends l {
  executeQuery(e, s) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        source: n,
        capabilities: c,
        spatialReference: p,
        objectIdField: l,
        geometryType: f
      } = _this3.service;

      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e.quantizationParameters) && !c.query.supportsQuantization) {
        const t = e.clone(),
              c = (0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_4__.toQuantizationTransform)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.unwrap)(t.quantizationParameters));
        t.quantizationParameters = null;
        const {
          data: f
        } = yield (0,_rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_7__.executeQuery)(n, t, p, s),
              y = (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__.convertFromFeatureSet)(f, l);
        return (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__.quantizeOptimizedFeatureSet)(c, y), _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_8__.FeatureSetReaderJSON.fromOptimizedFeatureSet(y);
      }

      const {
        data: y
      } = yield (0,_rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_7__.executeQuery)(n, e, _this3.service.spatialReference, s);
      var d;
      "esriGeometryPoint" === f && (y.features = null == (d = y.features) ? void 0 : d.filter(e => {
        if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e.geometry)) {
          const t = e.geometry;
          return Number.isFinite(t.x) && Number.isFinite(t.y);
        }

        return !0;
      }));
      return _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_8__.FeatureSetReaderJSON.fromFeatureSet(y, _this3.service.objectIdField);
    })();
  }

}

class w extends l {
  executeQuery(e, t) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        capabilities: s
      } = _this4.service;

      if (e.quantizationParameters && !s.query.supportsQuantization) {
        const s = e.clone(),
              o = (0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_4__.toQuantizationTransform)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.unwrap)(s.quantizationParameters));
        s.quantizationParameters = null;
        const c = yield (0,_layers_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_6__.queryOptimizedFeatureSet)(_this4.service.source, e, t);
        return (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__.quantizeOptimizedFeatureSet)(o, c), _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_8__.FeatureSetReaderJSON.fromOptimizedFeatureSet(c);
      }

      const o = yield (0,_layers_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_6__.queryOptimizedFeatureSet)(_this4.service.source, e, t);
      return _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_8__.FeatureSetReaderJSON.fromOptimizedFeatureSet(o);
    })();
  }

}



/***/ }),

/***/ 50013:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadProcessorModule": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){return"heatmap"===o?Promise.all(/*! import() */[__webpack_require__.e(8592), __webpack_require__.e(3033)]).then(__webpack_require__.bind(__webpack_require__, /*! ./processors/HeatmapProcessor.js */ 93033)):Promise.all(/*! import() */[__webpack_require__.e(9293), __webpack_require__.e(4915), __webpack_require__.e(7600), __webpack_require__.e(8350), __webpack_require__.e(6861), __webpack_require__.e(8592), __webpack_require__.e(413)]).then(__webpack_require__.bind(__webpack_require__, /*! ./processors/SymbolProcessor.js */ 40186))}


/***/ }),

/***/ 55653:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/BaseFeatureSource.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseFeatureSource": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Error.js */ 61414);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _controllers_support_sourceAdapters_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controllers/support/sourceAdapters.js */ 91092);
/* harmony import */ var _DataTileSource_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DataTileSource.js */ 96961);
/* harmony import */ var _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../support/QueueProcessor.js */ 28123);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/









const p = _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__.default.getLogger("esri.views.2d.layers.features.sources.BaseFeatureSource"),
      h = 4;

class y extends _DataTileSource_js__WEBPACK_IMPORTED_MODULE_8__.DataTileSource {
  constructor(e) {
    var _this;

    (super(e), _this = this), this.type = "feature", this.mode = "on-demand", this._adapter = (0,_controllers_support_sourceAdapters_js__WEBPACK_IMPORTED_MODULE_7__.createSourceAdapter)(e.serviceInfo), this._queue = new _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_9__.QueueProcessor({
      concurrency: 8,
      process: function () {
        var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
          if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAborted)(e), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e.tile)) {
            const t = e.tile.key.id,
                  {
              signal: s
            } = e,
                  i = (0,_core_has_js__WEBPACK_IMPORTED_MODULE_3__.default)("esri-tiles-debug") ? {
              tile: t.replace(/\//g, "."),
              depth: e.depth
            } : void 0,
                  a = yield _this._adapter.executeQuery(e.query, {
              signal: s,
              query: { ...i,
                ..._this._schema.customParameters
              }
            });
            return a.level = e.tile.key.level, a;
          }

          return _this._adapter.executeQuery(e.query, { ...e,
            query: _this._schema.customParameters
          });
        });

        return function process(_x) {
          return _ref.apply(this, arguments);
        };
      }()
    }), this._patchQueue = new _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_9__.QueueProcessor({
      concurrency: 8,
      process: function () {
        var _ref2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
          if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAborted)(e), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e.tile)) {
            const t = e.tile.key.id,
                  {
              signal: s
            } = e,
                  i = (0,_core_has_js__WEBPACK_IMPORTED_MODULE_3__.default)("esri-tiles-debug") ? {
              tile: t.replace(/\//g, "."),
              depth: e.depth
            } : void 0,
                  a = yield _this._adapter.executeQuery(e.query, {
              signal: s,
              query: { ...i,
                ..._this._schema.customParameters
              }
            });
            return a.level = e.tile.key.level, a;
          }

          return _this._adapter.executeQuery(e.query, { ...e,
            query: _this._schema.customParameters
          });
        });

        return function process(_x2) {
          return _ref2.apply(this, arguments);
        };
      }()
    });
  }

  destroy() {
    super.destroy(), this._adapter.destroy(), this._queue.destroy(), this._patchQueue.destroy();
  }

  get updating() {
    return !!this._queue.length || Array.from(this._subscriptions.values()).some(e => !e.done);
  }

  get maxRecordCountFactor() {
    const {
      query: e
    } = this._serviceInfo.capabilities;
    return e.supportsMaxRecordCountFactor ? h : null;
  }

  get maxPageSize() {
    var e;
    const {
      query: t
    } = this._serviceInfo.capabilities;
    return (null != (e = t.maxRecordCount) ? e : 8e3) * (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.unwrapOr)(this.maxRecordCountFactor, 1);
  }

  get pageSize() {
    return Math.min(8e3, this.maxPageSize);
  }

  enableEvent(e, t) {}

  subscribe(e) {
    super.subscribe(e);

    const r = this._subscriptions.get(e.id);

    this._fetchDataTile(e).catch(r => {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.isAbortError)(r) || p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("mapview-query-error", "Encountered error when fetching tile", {
        tile: e,
        error: r
      }));
    }).then(() => r.end());
  }

  unsubscribe(e) {
    super.unsubscribe(e);
  }

  readers(e) {
    return this._subscriptions.get(e).readers();
  }

  query(e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this2._adapter.executeQuery(e, {
        query: _this2._schema.customParameters
      });
    })();
  }

  queryLastEditDate() {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = _this3._serviceInfo.source,
            r = { ...t.query,
        f: "json"
      };
      return (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(t.path, {
        query: r,
        responseType: "json"
      })).data.editingInfo.lastEditDate;
    })();
  }

  createTileQuery(e, t = {}) {
    var r;
    const s = this.createQuery(t);
    return s.quantizationParameters = null != (r = t.quantizationParameters) ? r : e.getQuantizationParameters(), s.resultType = "tile", s.geometry = e.extent, s.quantizationParameters && "esriGeometryPolyline" === this._serviceInfo.geometryType && (s.maxAllowableOffset = e.resolution), s;
  }

  _executePatchQuery(e, t, r, s) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const a = t.clone();
      a.outFields = [_this4._serviceInfo.objectIdField, ...r], a.returnCentroid = !1, a.returnGeometry = !1;
      const o = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(a.start) ? a.start / 8e3 : 0,
            n = s.signal;
      return _this4._patchQueue.push({
        tile: e,
        query: a,
        signal: n,
        depth: o
      });
    })();
  }

  _resend(e, t) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        query: r,
        message: s
      } = e,
            a = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(r.outFields) ? r.outFields : [],
            u = _this5._queryInfo.outFields,
            c = u.filter(e => -1 === a.indexOf(e));
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(s.addOrUpdate)) _this5._onMessage({ ...s,
        type: "append"
      });else if (c.length) try {
        const e = _this5._subscriptions.get(s.id).tile,
              i = yield _this5._executePatchQuery(e, r, c, t);

        (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAborted)(t), r.outFields = u, s.addOrUpdate.joinAttributes(i), _this5._onMessage({ ...s,
          end: s.end,
          type: "append"
        });
      } catch (d) {} else _this5._onMessage({ ...s,
        type: "append"
      });
    })();
  }

  _resendSubscription(e) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (e.empty) return _this6._onMessage({
        id: e.tile.id,
        addOrUpdate: null,
        end: !1,
        type: "append"
      });
      const t = e.signal;

      for (const r of e.requests.done) yield _this6._resend(r, {
        signal: t
      });

      return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e.edits) ? _this6._onMessage(e.edits) : void 0;
    })();
  }

  resend() {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = Array.from(_this7._subscriptions.values());
      yield Promise.all(e.map(e => _this7._resendSubscription(e)));
    })();
  }

}



/***/ }),

/***/ 96961:
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/DataTileSource.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTileSource": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../TimeExtent.js */ 85362);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Evented.js */ 33380);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/diffUtils.js */ 58616);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../rest/support/Query.js */ 37995);
/* harmony import */ var _DataTileSubscription_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DataTileSubscription.js */ 47744);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/









function l(e, s) {
  const t = new Set();
  return e && e.forEach(e => t.add(e)), s && s.forEach(e => t.add(e)), t.has("*") ? ["*"] : Array.from(t);
}

class m {
  constructor(e) {
    this.events = new _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__.default(), this._resolver = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createResolver)(), this._didEdit = !1, this._subscriptions = new Map(), this._outSR = e.outSR, this._serviceInfo = e.serviceInfo, this._onTileUpdateMessage = e.onMessage;
  }

  destroy() {}

  _onMessage(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var s;

      const t = _this._subscriptions.get(e.id);

      if (!t) return;
      const r = { ...e,
        remove: null != (s = e.remove) ? s : [],
        status: e.status
      };
      return _this._onTileUpdateMessage(r, t.options);
    })();
  }

  update(s, r) {
    var i;
    const o = r.fields.length;
    r.outFields = l(null == (i = this._schema) ? void 0 : i.outFields, r.outFields), r.outFields = r.outFields.length >= .75 * o ? ["*"] : r.outFields, r.outFields.sort();
    const n = (0,_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_6__.diff)(this._schema, r);
    if (!n) return;
    (0,_core_has_js__WEBPACK_IMPORTED_MODULE_3__.default)("esri-2d-update-debug") && console.debug("Applying Update - Source:", n);
    const h = "orderByFields" in this._serviceInfo && this._serviceInfo.orderByFields ? this._serviceInfo.orderByFields : this._serviceInfo.objectIdField + " ASC",
          d = {
      returnCentroid: (0,_core_has_js__WEBPACK_IMPORTED_MODULE_3__.default)("esri-2d-query-centroid-enabled") && "esriGeometryPolygon" === this._serviceInfo.geometryType,
      returnGeometry: !0,
      timeReferenceUnknownClient: "stream" !== this._serviceInfo.type && this._serviceInfo.timeReferenceUnknownClient,
      outFields: r.outFields,
      outSpatialReference: this._outSR,
      orderByFields: [h],
      where: r.definitionExpression || "1=1",
      gdbVersion: r.gdbVersion,
      historicMoment: r.historicMoment,
      timeExtent: _TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__.default.fromJSON(r.timeExtent),
      customParameters: r.customParameters
    },
          m = this._schema && (0,_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_6__.hasDiff)(n, "outFields");
    this._schema && (0,_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_6__.hasDiffAny)(n, ["timeExtent", "definitionExpression", "gdbVersion", "historicMoment", "customParameters"]) && (s.why.mesh.push("Layer filter and/or custom parameters changed"), s.why.source.push("Layer filter and/or custom parameters changed"), s.mesh = !0, s.source = !0, s.queryFilter = !0), m && (s.why.source.push("Layer required fields changed"), s.source = !0), (0,_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_6__.diff)(d, this._queryInfo) && (this._queryInfo = d), this._schema = r, this._resolver.resolve();
  }

  whenInitialized() {
    return this._resolver.promise;
  }

  applyUpdate(e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (e.queryFilter || e.source && _this2._didEdit) return _this2.refresh(), void (_this2._didEdit = !1);
      _this2._subscriptions.forEach(s => s.applyUpdate(e)), yield _this2.resend();
    })();
  }

  refresh() {
    for (const e of this._tiles()) this.unsubscribe(e), this.subscribe(e);
  }

  subscribe(e) {
    const s = new _DataTileSubscription_js__WEBPACK_IMPORTED_MODULE_8__.DataTileSubscription(e);

    this._subscriptions.set(e.id, s);
  }

  unsubscribe(e) {
    const s = this.get(e.id);
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(s) && s.abort(), this._subscriptions.delete(e.id);
  }

  createQuery(e = {}) {
    const s = this._queryInfo.historicMoment ? new Date(this._queryInfo.historicMoment) : null;
    return new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_7__.default({ ...this._queryInfo,
      historicMoment: s,
      ...e
    });
  }

  get(e) {
    return this._subscriptions.has(e) ? this._subscriptions.get(e) : null;
  }

  queryLastEditDate() {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      throw new Error("Service does not support query type");
    })();
  }

  query(e) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      throw new Error("Service does not support query");
    })();
  }

  *_tiles() {
    const e = Array.from(this._subscriptions.values());

    for (const s of e) yield s.tile;
  }

  edit(e, s) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = Array.from(_this3._subscriptions.values()),
            r = t.map(({
        tile: e
      }) => e);

      for (const i of t) i.removeIds(s);

      if (e.length) {
        const t = r.map(s => {
          const t = _this3.createTileQuery(s);

          return t.objectIds = e, {
            tile: s,
            query: t
          };
        }).map( /*#__PURE__*/function () {
          var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* ({
            tile: e,
            query: s
          }) {
            return {
              tile: e,
              result: yield _this3.query(s),
              query: s
            };
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()),
              i = (yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.eachAlwaysValues)(t)).map( /*#__PURE__*/function () {
          var _ref2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* ({
            tile: t,
            result: r
          }) {
            if (!r.hasFeatures && !s.length && !e.length) return;

            const i = _this3._subscriptions.get(t.key.id);

            i && i.edit(r, e);
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
        yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.eachAlways)(i);
      }

      _this3._didEdit = !0;
    })();
  }

}



/***/ }),

/***/ 47744:
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/DataTileSubscription.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTileSubscription": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/CircularArray.js */ 94546);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support/FeatureSetReaderJSON.js */ 92722);
/* harmony import */ var _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/UpdateToken.js */ 81228);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a{constructor(t){this.requests={done:new Array,stream:new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__.default(10)},this._edits=null,this._abortController=new AbortController,this._done=!1,this.didSend=!1,this.tile=t}get signal(){return this._abortController.signal}get options(){return{signal:this._abortController.signal}}get empty(){return!this.requests.done.length}get edits(){return this._edits}get done(){return this._done}end(){this._done=!0}clear(){this.requests.done=[]}applyUpdate(e){this.requests.done.forEach((t=>t.message.status.unset(e))),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(this._edits)&&this._edits.status.unset(e)}add(e){var s;e.message.status=null!=(s=e.message.status)?s:_support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_3__.UpdateToken.empty(),e.message.end&&this.requests.done.forEach((e=>{(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(e.message)&&e.message.end&&(e.message.end=!1)})),this.requests.done.push(e)}edit(e,t){const a=e.getQuantizationTransform(),o=e.geometryType,n=Array.from(e.features()),h=[...t,...n.map((e=>e.objectId))];if(this.removeIds(h),this._invalidate(),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(this._edits))return void(this._edits={type:"append",addOrUpdate:_support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_2__.FeatureSetReaderJSON.fromOptimizedFeatures(n,o,(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.unwrap)(a)),id:this.tile.id,status:_support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_3__.UpdateToken.empty(),end:!0});this.requests.done.forEach((e=>e.message.end=!1));(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.unwrap)(this._edits.addOrUpdate).append(e.features())}*readers(){for(const{message:e}of this.requests.done)(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(e.addOrUpdate)&&(yield e.addOrUpdate);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(this._edits)&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(this._edits.addOrUpdate)&&(yield this._edits.addOrUpdate)}_invalidate(){for(const e of this.requests.done)e.message.status=_support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_3__.UpdateToken.empty();(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(this._edits)&&(this._edits.status=_support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_3__.UpdateToken.empty())}removeIds(e){this._invalidate();for(const{message:s}of this.requests.done){const r=s.addOrUpdate;(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(r)&&(r.removeIds(e),r.isEmpty&&(s.addOrUpdate=null))}(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(this._edits)&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(this._edits.addOrUpdate)&&this._edits.addOrUpdate.removeIds(e),this.requests.done=this.requests.done.filter((e=>e.message.addOrUpdate||e.message.end))}abort(){this._abortController.abort()}}


/***/ }),

/***/ 39670:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/DrillDownFeatureSource.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrillDownFeatureSource": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _BaseFeatureSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseFeatureSource.js */ 55653);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



const i = (0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__.default)("esri-mobile"),
      a = {
  maxDrillLevel: i ? 1 : 4,
  maxRecordCountFactor: i ? 1 : 3
};

class o extends _BaseFeatureSource_js__WEBPACK_IMPORTED_MODULE_3__.BaseFeatureSource {
  constructor(e) {
    super(e);
  }

  _fetchDataTile(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const s = _this._serviceInfo.capabilities.query.supportsMaxRecordCountFactor,
            i = _this._subscriptions.get(e.key.id),
            o = i.signal,
            n = e.getQuantizationParameters();

      let c = 0;

      const d = /*#__PURE__*/function () {
        var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (u, l) {
          const p = _this._queryInfo,
                m = _this.createTileQuery(u, {
            maxRecordCountFactor: s ? a.maxRecordCountFactor : void 0,
            returnExceededLimitFeatures: !1,
            quantizationParameters: n
          });

          c++;

          try {
            const r = yield _this._queue.push({
              tile: e,
              query: m,
              signal: o,
              depth: l
            });
            if (c--, (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.throwIfAborted)(o), !r) return;
            if (p !== _this._queryInfo) return void d(u, l);

            if (r.exceededTransferLimit && l < a.maxDrillLevel) {
              for (const e of u.createChildTiles()) d(e, l + 1);

              return;
            }

            const s = {
              id: e.id,
              addOrUpdate: r,
              end: 0 === c,
              type: "append"
            };
            i.add({
              query: m,
              message: s
            }), _this._onMessage(s);
          } catch (h) {
            (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAbortError)(h) || _this._onMessage({
              id: e.id,
              addOrUpdate: null,
              end: !0,
              type: "append"
            });
          }
        });

        return function d(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();

      d(e, 0);
    })();
  }

}



/***/ }),

/***/ 756:
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/GeoEventSource.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeoEventSource": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _chunks_rbush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/rbush.js */ 30928);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../layers/graphics/OptimizedGeometry.js */ 82760);
/* harmony import */ var _layers_graphics_data_StreamFeatureManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../layers/graphics/data/StreamFeatureManager.js */ 1924);
/* harmony import */ var _layers_graphics_sources_connections_createConnection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../layers/graphics/sources/connections/createConnection.js */ 98082);
/* harmony import */ var _DataTileSource_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DataTileSource.js */ 96961);
/* harmony import */ var _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/FeatureSetReaderJSON.js */ 92722);
/* harmony import */ var _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../support/UpdateToken.js */ 81228);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/










const m = 2500;

function p(t, s) {
  const r = t.weakClone();

  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(t.geometry)) {
    const e = (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__.quantizeX)(s, t.geometry.coords[0]),
          a = (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__.quantizeY)(s, t.geometry.coords[1]);
    r.geometry = new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__.default([], [e, a]);
  }

  return r;
}

function l(e) {
  return "esriGeometryPoint" === e ? p : (t, s) => {
    const n = t.weakClone(),
          o = new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__.default(),
          a = !1,
          c = !1,
          d = (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__.quantizeOptimizedGeometry)(o, t.geometry, a, c, e, s, !1, !1);
    return n.geometry = d, n;
  };
}

function _(t) {
  return "esriGeometryPoint" === t ? t => (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(t.geometry) ? {
    minX: t.geometry.coords[0],
    minY: t.geometry.coords[1],
    maxX: t.geometry.coords[0],
    maxY: t.geometry.coords[1]
  } : {
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0
  } : t => {
    let s = 1 / 0,
        r = 1 / 0,
        n = -1 / 0,
        o = -1 / 0;
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(t.geometry) && t.geometry.forEachVertex((e, t) => {
      s = Math.min(s, e), r = Math.min(r, t), n = Math.max(n, e), o = Math.max(o, t);
    }), {
      minX: s,
      minY: r,
      maxX: n,
      maxY: o
    };
  };
}

function f(e, s) {
  const r = (0,_chunks_rbush_js__WEBPACK_IMPORTED_MODULE_3__.r)(9, _(s));
  return r.load(e), r;
}

function g(e, t) {
  return e.search({
    minX: t.bounds[0],
    minY: t.bounds[1],
    maxX: t.bounds[2],
    maxY: t.bounds[3]
  });
}

class y {
  constructor(e, t) {
    this.onUpdate = e, this._geometryType = t, this._objectIdToFeature = new Map();
  }

  get _features() {
    const e = [];
    return this._objectIdToFeature.forEach(t => e.push(t)), e;
  }

  add(e) {
    this._objectIdToFeature.set(e.objectId, e), this._index = null;
  }

  get(e) {
    return this._objectIdToFeature.has(e) ? this._objectIdToFeature.get(e) : null;
  }

  forEach(e) {
    this._objectIdToFeature.forEach(e);
  }

  search(e) {
    return this._index || (this._index = f(this._features, this._geometryType)), g(this._index, e);
  }

  removeById(e) {
    const t = this._objectIdToFeature.get(e);

    return t ? (this._objectIdToFeature.delete(e), this._index = null, t) : null;
  }

  update(e, t) {
    this.onUpdate(e, t);
  }

  get size() {
    return this._objectIdToFeature.size;
  }

}

class b extends _DataTileSource_js__WEBPACK_IMPORTED_MODULE_8__.DataTileSource {
  constructor(e) {
    super(e), this.type = "geoevent", this._dataReceiveEventEnabled = !1, this._level = 0, this._updateInfo = {
      websocket: 0,
      client: 0
    };
    const {
      outSR: t
    } = e,
          {
      geometryType: s,
      objectIdField: r,
      timeInfo: n,
      purgeOptions: o,
      source: i,
      spatialReference: d,
      serviceFilter: u,
      maxReconnectionAttempts: h,
      maxReconnectionInterval: p,
      updateInterval: _,
      enableDataReceived: f,
      customParameters: g
    } = e.serviceInfo,
          b = new y(this._onUpdate.bind(this), s),
          v = new _layers_graphics_data_StreamFeatureManager_js__WEBPACK_IMPORTED_MODULE_6__.default(b, r, n, o),
          I = (0,_layers_graphics_sources_connections_createConnection_js__WEBPACK_IMPORTED_MODULE_7__.createConnection)(i, d, t, s, u, h, p, g);
    this._store = b, this._manager = v, this._connection = I, this._quantize = l(s), this._dataReceiveEventEnabled = f, this._handles = [this._connection.on("feature", e => this._onFeature(e)), this._connection.watch("connectionStatus", e => this.events.emit("connectionStatus", e)), this._connection.watch("errorString", e => this.events.emit("errorString", e))];
    let F = performance.now();
    this._updateIntervalId = setInterval(() => {
      const t = performance.now(),
            s = t - F;

      if (s > m) {
        F = t;
        const e = Math.round(this._updateInfo.client / (s / 1e3)),
              r = Math.round(this._updateInfo.websocket / (s / 1e3));
        this._updateInfo.client = 0, this._updateInfo.websocket = 0, this.events.emit("updateRate", {
          client: e,
          websocket: r
        });
      }

      e.canAcceptRequest() && this._manager.checkForUpdates();
    }, _);
  }

  destroy() {
    super.destroy(), clearInterval(this._updateIntervalId), this._handles.forEach(e => e.remove()), this._connection.destroy();
  }

  _fetchDataTile() {}

  resume() {}

  enableEvent(e, t) {
    "data-received" === e && (this._dataReceiveEventEnabled = t);
  }

  get updating() {
    return !1;
  }

  subscribe(e) {
    super.subscribe(e);

    const t = this._subscriptions.get(e.id);

    this._level = e.level;

    const s = this._getTileFeatures(e);

    this._onMessage({
      type: "append",
      id: e.key.id,
      addOrUpdate: s,
      end: !0
    }), t.didSend = !0;
  }

  unsubscribe(e) {
    super.unsubscribe(e);
  }

  *readers(t) {
    const s = this._subscriptions.get(t),
          {
      tile: r
    } = s;

    yield this._getTileFeatures(r);

    for (const n of s.requests.stream.entries) (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(n) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(n.addOrUpdate) && (yield n.addOrUpdate);
  }

  createTileQuery(e) {
    throw new Error("Service does not support tile  queries");
  }

  resend() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this._subscriptions.forEach(e => {
        const {
          tile: t
        } = e,
              s = {
          type: "append",
          id: t.id,
          addOrUpdate: _this._getTileFeatures(t),
          end: !0
        };

        _this._onMessage(s);
      });
    })();
  }

  _getTileFeatures(e) {
    const t = this._store.search(e).map(t => this._quantize(t, e.transform));

    return _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_9__.FeatureSetReaderJSON.fromOptimizedFeatures(t, this._serviceInfo.geometryType, e.transform);
  }

  _onFeature(e) {
    this._updateInfo.websocket++;

    try {
      this._dataReceiveEventEnabled && this.events.emit("feature", e);
      const t = (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__.convertFromFeature)(e, this._serviceInfo.geometryType, !1, !1, this._serviceInfo.objectIdField);

      this._manager.add(t);
    } catch (t) {}
  }

  _onUpdate(t, s) {
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(t) && (this._updateInfo.client += t.length), this._subscriptions.forEach((e, t) => {
      e.didSend && e.tile.level === this._level && this._onMessage({
        type: "append",
        id: t,
        addOrUpdate: null,
        clear: !0,
        end: !1
      });
    }), this._subscriptions.forEach((e, t) => {
      if (!e.didSend || e.tile.level !== this._level) return;
      const s = e.tile,
            r = {
        type: "append",
        id: t,
        addOrUpdate: this._getTileFeatures(s),
        remove: [],
        end: !0,
        status: _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_10__.UpdateToken.empty()
      };
      e.requests.stream.enqueue(r), this._onMessage(r);
    });
  }

}



/***/ }),

/***/ 65456:
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/PagedFeatureSource.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagedFeatureSource": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _BaseFeatureSource_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseFeatureSource.js */ 55653);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





const n = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri.views.2d.layers.features.sources.FeatureSource");

class d extends _BaseFeatureSource_js__WEBPACK_IMPORTED_MODULE_5__.BaseFeatureSource {
  constructor(e) {
    super(e);
  }

  _fetchDataTile(t) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = 6,
            i = 20,
            o = _this._subscriptions.get(t.key.id);

      let d = !1,
          c = 0,
          u = 0;

      const p = (e, r) => {
        u--, (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(o);
        const a = t.id,
              i = e.reader,
              n = e.query;

        if (!i.exceededTransferLimit) {
          if (d = !0, 0 !== r && !i.hasFeatures) {
            const e = {
              id: a,
              addOrUpdate: i,
              end: 0 === u,
              type: "append"
            };
            return o.add({
              message: e,
              query: n
            }), void _this._onMessage(e);
          }

          const e = {
            id: a,
            addOrUpdate: i,
            end: 0 === u,
            type: "append"
          };
          return o.add({
            message: e,
            query: n
          }), void _this._onMessage(e);
        }

        const c = {
          id: a,
          addOrUpdate: i,
          end: d && 0 === u,
          type: "append"
        };
        o.add({
          message: c,
          query: n
        }), _this._onMessage(c);
      };

      let h = 0,
          m = 0;

      for (; !d && m++ < i;) {
        let i;

        for (let r = 0; r < h + 1; r++) {
          const r = c++;
          u++, i = _this._fetchDataTilePage(t, r, o).then(e => e && p(e, r)).catch(r => {
            d = !0, (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAbortError)(r) || (n.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("mapview-query-error", "Encountered error when fetching tile", {
              tile: t,
              error: r
            })), _this._onMessage({
              id: t.id,
              addOrUpdate: null,
              end: d,
              type: "append"
            }));
          });
        }

        yield i, (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(o), h = Math.min(h + 2, r);
      }
    })();
  }

  _fetchDataTilePage(e, t, a) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(a);
      const o = _this2._queryInfo,
            n = {
        start: _this2.pageSize * t,
        num: _this2.pageSize,
        returnExceededLimitFeatures: !0,
        quantizationParameters: e.getQuantizationParameters()
      };
      (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(_this2.maxRecordCountFactor) && (n.maxRecordCountFactor = _this2.maxRecordCountFactor);

      const d = _this2.createTileQuery(e, n);

      try {
        const r = a.signal,
              i = yield _this2._queue.push({
          tile: e,
          query: d,
          signal: r,
          depth: t
        });
        return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(a), i ? o !== _this2._queryInfo ? _this2._fetchDataTilePage(e, t, a) : {
          reader: i,
          query: d
        } : null;
      } catch (c) {
        return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfNotAbortError)(c), null;
      }
    })();
  }

}



/***/ }),

/***/ 46586:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/SnapshotFeatureSource.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnapshotFeatureSource": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/RandomLCG.js */ 46255);
/* harmony import */ var _BaseFeatureSource_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseFeatureSource.js */ 55653);
/* harmony import */ var _support_FeatureSetReaderPBFIndirect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../support/FeatureSetReaderPBFIndirect.js */ 14011);
/* harmony import */ var _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../support/UpdateToken.js */ 81228);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/








const l = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri.views.2d.layers.features.sources.SnapshotFeatureSource");

function u(t, e, s) {
  const r = t.getXHydrated(),
        o = t.getYHydrated(),
        a = e.getColumnForX(r),
        i = Math.floor(e.normalizeCol(a));
  return `${s}/${Math.floor(e.getRowForY(o))}/${i}`;
}

function c(t, e) {
  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(t)) return null;
  const s = e.transform,
        o = t.getQuantizationTransform();

  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(o)) {
    const [e, r] = s.scale,
          [o, a] = s.translate,
          i = -o / e,
          n = 1 / e,
          d = a / r,
          h = 1 / -r;
    return t.transform(i, d, n, h);
  }

  const [a, i] = o.scale,
        [n, d] = o.translate,
        [h, l] = s.scale,
        [u, c] = s.translate,
        g = a / h,
        p = (n - u) / h,
        _ = i / l,
        m = (-d + c) / l;

  return t.transform(p, m, g, _);
}

class g extends _BaseFeatureSource_js__WEBPACK_IMPORTED_MODULE_6__.BaseFeatureSource {
  constructor(t) {
    super(t), this.mode = "snapshot", this._loading = !0, this._controller = new AbortController(), this._downloadPromise = null, this._didSendEnd = !1, this._queries = new Array(), this._invalidated = !1, this._hasAggregates = !1, this._random = new _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__.default(1e3), this._store = t.store, this._markedIdsBufId = this._store.storage.createBitset();
  }

  destroy() {
    super.destroy(), this._controller.abort();
  }

  get loading() {
    return this._loading;
  }

  get _signal() {
    return this._controller.signal;
  }

  update(t, e) {
    super.update(t, e), this._hasAggregates = t.targets.aggregate;
  }

  resend(t = !1) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (yield _this._downloadPromise, _this._invalidated || t) {
        const t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.unwrapOrThrow)(_this._schema.featureCount, "Expected featureCount to be defined");
        return _this._invalidated = !1, _this._subscriptions.forEach(t => t.clear()), _this._downloadPromise = _this._download(t), void (yield _this._downloadPromise);
      }

      const s = _this._queries.map(({
        query: t,
        reader: e
      }) => _this._sendPatchQuery(t, e));

      yield Promise.all(s), _this._subscriptions.forEach(t => {
        t.requests.done.forEach(t => _this._onMessage(t.message));
      });
    })();
  }

  refresh() {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this2.resend(!0);
    })();
  }

  _sendPatchQuery(t, e) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(t.outFields) ? t.outFields : [],
            a = _this3._queryInfo.outFields,
            i = a.filter(t => -1 === r.indexOf(t));
      if (!i.length) return;
      const n = t.clone(),
            d = _this3._signal;
      n.returnGeometry = !1, n.returnCentroid = !1, n.outFields = i, t.outFields = a;
      const h = yield _this3._queue.push({
        query: n,
        depth: 0,
        signal: d
      });
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)({
        signal: d
      }), e.joinAttributes(h);
    })();
  }

  _fetchDataTile(t) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this4._downloadPromise) {
        const t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.unwrapOrThrow)(_this4._schema.featureCount, "Expected featureCount to be defined");
        _this4._downloadPromise = _this4._download(t);
      }

      const s = _this4._store.search(t),
            r = _this4._subscriptions.get(t.key.id),
            o = s.length - 1;

      for (let e = 0; e < o; e++) {
        const o = c(s[e], t),
              i = {
          type: "append",
          id: t.id,
          addOrUpdate: o,
          end: !1,
          status: _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_8__.UpdateToken.empty()
        };
        r.add({
          query: null,
          message: i
        }), _this4._hasAggregates || (yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.after)(1)), _this4._onMessage(i);
      }

      const i = c(o >= 0 ? s[o] : null, t),
            n = _this4._didSendEnd,
            d = {
        type: "append",
        id: t.id,
        addOrUpdate: i,
        end: n,
        status: _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_8__.UpdateToken.empty()
      };
      r.add({
        query: null,
        message: d
      }), _this4._onMessage(d);
    })();
  }

  _download(t) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        yield _this5.whenInitialized();

        const e = _this5._store.storage.getBitset(_this5._markedIdsBufId),
              s = new Set();

        e.clear();
        const r = Math.ceil(t / _this5.pageSize),
              o = Array.from({
          length: r
        }, (t, e) => e).sort((t, e) => _this5._random.getInt() - _this5._random.getInt()).map(t => _this5._downloadPage(t, e, s));
        yield Promise.all(o), _this5._store.sweepFeatures(e, _this5._store.storage), _this5._store.sweepFeatureSets(s);
      } catch (e) {
        l.error("mapview-snapshot-source", "Encountered and error when downloading feature snapshot", e);
      }

      _this5._sendEnd(), _this5._loading = !1;
    })();
  }

  _downloadPage(t, e, r) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const a = _this6.pageSize,
            i = {
        start: t * a,
        num: a,
        cacheHint: !0
      };
      (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(_this6.maxRecordCountFactor) && (i.maxRecordCountFactor = _this6.maxRecordCountFactor);

      const n = _this6.createQuery(i),
            d = _this6._signal,
            h = yield _this6._queue.push({
        query: n,
        depth: t,
        signal: d
      });

      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)({
        signal: d
      }), _this6._queries.push({
        query: n,
        reader: h
      }), _this6._store.insert(h), r.add(h.instance);
      const l = h.getCursor();

      for (; l.next();) e.set(l.getDisplayId());

      _this6._send(h);
    })();
  }

  _send(t) {
    if (!this._subscriptions.size) return;
    let e = null;
    const o = new Map(),
          a = new Set(),
          i = new Map();

    this._subscriptions.forEach(t => {
      var s;
      const r = t.tile;
      o.set(r.key.id, null), e = r.tileInfoView, a.add(r.level);
      const {
        row: n,
        col: d
      } = r.key,
            h = `${r.level}/${n}/${d}`,
            l = null != (s = i.get(h)) ? s : [];
      l.push(t), i.set(h, l);
    });

    for (const s of a) {
      const a = e.getLODInfoAt(s),
            n = t.getCursor();

      for (; n.next();) {
        const t = u(n, a, s),
              e = n.getIndex();
        if (i.has(t)) for (const s of i.get(t)) {
          const t = s.tile.id;
          let a = o.get(t);
          (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(a) && (a = [], o.set(t, a)), a.push(e);
        }
      }
    }

    o.forEach((e, r) => {
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(e)) {
        const s = this._subscriptions.get(r),
              o = {
          type: "append",
          id: r,
          addOrUpdate: c(_support_FeatureSetReaderPBFIndirect_js__WEBPACK_IMPORTED_MODULE_7__.FeatureSetReaderIndirect.from(t, e), s.tile),
          end: !1,
          status: _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_8__.UpdateToken.empty()
        };

        s.add({
          query: null,
          message: o
        }), this._onMessage(o);
      }
    });
  }

  _sendEnd() {
    this._subscriptions.forEach(t => {
      const e = {
        type: "append",
        id: t.tile.id,
        addOrUpdate: null,
        end: !0,
        status: _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_8__.UpdateToken.empty()
      };
      t.add({
        query: null,
        message: e
      }), this._onMessage(e);
    }), this._didSendEnd = !0;
  }

}



/***/ }),

/***/ 73145:
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/createSource.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSource": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _layers_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../layers/support/arcgisLayerUrl.js */ 46996);
/* harmony import */ var _DrillDownFeatureSource_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrillDownFeatureSource.js */ 39670);
/* harmony import */ var _GeoEventSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GeoEventSource.js */ 756);
/* harmony import */ var _PagedFeatureSource_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PagedFeatureSource.js */ 65456);
/* harmony import */ var _SnapshotFeatureSource_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SnapshotFeatureSource.js */ 46586);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(e,r,a,u,i,p){const f=c(e,r,a,u,i,p);switch(f.type){case"feature":switch(f.origin){case"hosted":case"local":return new _PagedFeatureSource_js__WEBPACK_IMPORTED_MODULE_4__.PagedFeatureSource(f);case"snapshot":return new _SnapshotFeatureSource_js__WEBPACK_IMPORTED_MODULE_5__.SnapshotFeatureSource(f);case"unknown":return new _DrillDownFeatureSource_js__WEBPACK_IMPORTED_MODULE_2__.DrillDownFeatureSource(f)}case"geoevent":return new _GeoEventSource_js__WEBPACK_IMPORTED_MODULE_3__.GeoEventSource(f)}}function c(t,o,n,s,a,c){switch(t.type){case"snapshot":return{type:"feature",origin:"snapshot",featureCount:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.unwrapOr)(t.featureCount,0),serviceInfo:t,onMessage:s,outSR:o,tileInfoView:n,canAcceptRequest:a,store:c};case"stream":return{type:"geoevent",serviceInfo:t,onMessage:s,outSR:o,canAcceptRequest:a};case"memory":case"on-demand":return{type:"feature",serviceInfo:t,onMessage:s,outSR:o,origin:u(t.source),tileInfoView:n,canAcceptRequest:a}}function u(e){return Array.isArray(e)?"local":"path"in e&&(0,_layers_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_1__.isHostedAgolService)(e.path)?"hosted":"unknown"}}


/***/ }),

/***/ 87049:
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/ClusterStore.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClusterInfo": () => (/* binding */ x),
/* harmony export */   "ClusterStore": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../geometry.js */ 61243);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Evented.js */ 33380);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/diffUtils.js */ 58616);
/* harmony import */ var _geohash_GeohashTree_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../geohash/GeohashTree.js */ 61476);
/* harmony import */ var _geohash_geohashUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../geohash/geohashUtils.js */ 95146);
/* harmony import */ var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../geometry/support/Ellipsoid.js */ 3401);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../layers/graphics/OptimizedFeature.js */ 56499);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../layers/graphics/OptimizedGeometry.js */ 82760);
/* harmony import */ var _layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../layers/graphics/data/projectionSupport.js */ 79371);
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../engine/webgl/definitions.js */ 30603);
/* harmony import */ var _Store2D_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Store2D.js */ 89271);
/* harmony import */ var _FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./FeatureSetReaderJSON.js */ 92722);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../geometry/SpatialReference.js */ 96583);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/

















const C = 12,
      M = 1;

class x extends _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_11__.OptimizedFeatureWithGeometry {
  constructor(e, t, s, r, a) {
    super(new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_12__.default([], [t, s]), r, null, e), this.geohashBoundsInfo = a;
  }

  get count() {
    return this.attributes.cluster_count;
  }

  static create(e, t, s, r, a, i, o, h) {
    const l = new x(t, s, r, i, o);
    return l.displayId = e.createDisplayId(!0), l.referenceId = h, l.tileLevel = a, l;
  }

  update(e, t, s, r, a, i) {
    return this.geometry.coords[0] = e, this.geometry.coords[1] = t, this.tileLevel = s, this.attributes = r, this.geohashBoundsInfo = a, this.referenceId = null, this.referenceId = i, this;
  }

  toJSON() {
    return {
      objectId: this.objectId,
      referenceId: 1 === this.attributes.cluster_count ? this.referenceId : null,
      attributes: { ...this.attributes,
        clusterId: this.objectId
      },
      geometry: {
        x: this.geometry.coords[0],
        y: this.geometry.coords[1]
      }
    };
  }

}

function L(e) {
  return 57.29577951308232 * e;
}

class j extends _Store2D_js__WEBPACK_IMPORTED_MODULE_15__.Store2D {
  constructor(t, s, r) {
    super(t, r), this.events = new _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__.default(), this._geohashLevel = 0, this._tileLevel = 0, this._aggregateValueRanges = {}, this._aggregateValueRangesChanged = !1, this._geohashBuf = [], this._clusters = new Map(), this._tiles = new Map(), this.geometryInfo = t.geometryInfo, this._spatialReference = s, this._projectionSupportCheck = (0,_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_13__.checkProjectionSupport)(s, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__.default.WGS84), this._bitsets.geohash = r.getBitset(r.createBitset()), this._bitsets.inserted = r.getBitset(r.createBitset());
  }

  updateSchema(e, r) {
    var _superprop_getUpdateSchema = () => super.updateSchema,
        _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const a = _this._schema;

      try {
        yield _superprop_getUpdateSchema().call(_this, e, r), yield _this._projectionSupportCheck;
      } catch (n) {}

      const l = (0,_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_5__.diff)(a, r);
      r && (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(l) || e.source || e.storage.filters) ? (((0,_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_5__.hasDiff)(l, "params.fields") || !_this._tree || e.source) && (_this._tree = new _geohash_GeohashTree_js__WEBPACK_IMPORTED_MODULE_6__.GeohashTree(_this._statisticFields), _this._rebuildTree(), (0,_core_has_js__WEBPACK_IMPORTED_MODULE_3__.default)("esri-2d-update-debug") && console.debug("Aggregate mesh needs update due to tree changing")), (0,_core_has_js__WEBPACK_IMPORTED_MODULE_3__.default)("esri-2d-update-debug") && console.debug("Applying Update - ClusterStore:", l), e.targets[r.name] = !0, e.mesh = !1, _this._aggregateValueRanges = {}) : a && (e.mesh = !0);
    })();
  }

  clear() {
    this._rebuildTree();
  }

  sweepFeatures(e, t) {
    this._bitsets.inserted.forEachSet(s => {
      if (!e.has(s)) {
        const e = t.lookupByDisplayIdUnsafe(s);

        this._remove(e);
      }
    });
  }

  sweepClusters(e, t, s) {
    this._clusters.forEach((r, a) => {
      r && r.tileLevel !== s && (e.releaseDisplayId(r.displayId), t.unsetAttributeData(r.displayId), this._clusters.delete(a));
    });
  }

  onTileData(e, t, r, a, i = !0) {
    if (!this._schema || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(t.addOrUpdate)) return t;

    const o = this._getTransforms(e, this._spatialReference);

    {
      const e = t.addOrUpdate.getCursor();

      for (; e.next();) this._update(e, a);
    }
    if (t.status.mesh || !i) return t;
    const h = new Array(),
          l = this._schema.params.clusterRadius;
    this._getClustersForTile(h, e, l, r, o), t.addOrUpdate = _FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_16__.FeatureSetReaderJSON.fromOptimizedFeatures(h, "esriGeometryPoint"), t.addOrUpdate.attachStorage(r), t.end = !0;
    {
      const s = t.addOrUpdate.getCursor();

      for (; s.next();) {
        const t = s.getDisplayId();
        this._bitsets.computed.unset(t), this.setComputedAttributes(r, s, t, e.scale);
      }
    }
    return this._aggregateValueRangesChanged && t.end && (this.events.emit("valueRangesChanged", {
      valueRanges: this._aggregateValueRanges
    }), this._aggregateValueRangesChanged = !1), t;
  }

  onTileUpdate({
    added: e,
    removed: t
  }) {
    if (e.length) {
      const t = e[0].level;
      this._tileLevel = t, this._setGeohashLevel(t);
    }

    if (!this._schema) return;
    const s = this._schema.params.clusterRadius;
    t.forEach(e => {
      this._tiles.delete(e.key.id), this._markTileClustersForDeletion(e, s);
    });
  }

  getAggregate(e) {
    for (const t of this._clusters.values()) if ((null == t ? void 0 : t.displayId) === e) return t.toJSON();

    return null;
  }

  getAggregates() {
    const e = [];

    for (const t of this._clusters.values()) (null == t ? void 0 : t.tileLevel) === this._tileLevel && e.push(t.toJSON());

    return e;
  }

  getDisplayId(e) {
    const t = this._clusters.get(e);

    return t ? t.displayId : null;
  }

  getFeatureDisplayIdsForAggregate(e) {
    const t = this._clusters.get(e);

    if (!t) return [];
    const s = t.geohashBoundsInfo;
    return this._tree.getRegionDisplayIds(s.xLL, s.yLL, s.xTR, s.yTR, s.level);
  }

  getDisplayIdForReferenceId(e) {
    for (const t of this._clusters.values()) if ((null == t ? void 0 : t.referenceId) === e) return t.displayId;

    return null;
  }

  getAggregateValueRanges() {
    return this._aggregateValueRanges;
  }

  forEach(e) {
    for (const [t, s] of this._clusters) s && e(s, t);
  }

  size() {
    let e = 0;
    return this.forEach(t => e++), e;
  }

  _rebuildTree() {
    this._bitsets.computed.clear(), this._bitsets.inserted.clear(), this._tree && this._tree.clear();
  }

  _remove(e) {
    const t = e.getDisplayId(),
          s = e.getXHydrated(),
          r = e.getYHydrated(),
          a = this._geohashBuf[2 * t],
          i = this._geohashBuf[2 * t + 1];
    this._bitsets.inserted.has(t) && (this._bitsets.inserted.unset(t), this._tree.removeCursor(e, s, r, a, i, this._geohashLevel));
  }

  _update(e, t) {
    const s = e.getDisplayId(),
          r = this._bitsets.inserted,
          a = t.isVisible(s);
    if (a === r.has(s)) return;
    if (!a) return void this._remove(e);
    const i = e.getXHydrated(),
          o = e.getYHydrated();
    if (!this._setGeohash(s, i, o)) return;
    const h = this._geohashBuf[2 * s],
          l = this._geohashBuf[2 * s + 1];
    this._tree.insertCursor(e, s, i, o, h, l, this._geohashLevel), r.set(s);
  }

  _setGeohash(e, t, s) {
    if (this._bitsets.geohash.has(e)) return !0;
    const r = this._geohashBuf;

    if (this._spatialReference.isWebMercator) {
      const a = L(t / _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_8__.earth.radius),
            i = a - 360 * Math.floor((a + 180) / 360),
            o = L(Math.PI / 2 - 2 * Math.atan(Math.exp(-s / _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_8__.earth.radius)));
      (0,_geohash_geohashUtils_js__WEBPACK_IMPORTED_MODULE_7__.setGeohashBuf)(r, e, o, i, C);
    } else {
      const a = (0,_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_13__.project)({
        x: t,
        y: s
      }, this._spatialReference, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__.default.WGS84);
      if (!a) return !1;
      (0,_geohash_geohashUtils_js__WEBPACK_IMPORTED_MODULE_7__.setGeohashBuf)(r, e, a.y, a.x, C);
    }

    return this._bitsets.geohash.set(e), !0;
  }

  _getClustersForTile(e, t, i, o, h, l = !0) {
    const n = this._schema.params.clusterPixelBuffer,
          u = 2 * i,
          c = this._getGeohashLevel(t.key.level),
          f = Math.ceil(2 ** t.key.level * _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__.TILE_SIZE / u),
          _ = Math.ceil(n / u) + 0,
          m = Math.ceil(_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__.TILE_SIZE / u),
          {
      row: y,
      col: I
    } = t.key,
          b = I * _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__.TILE_SIZE,
          R = y * _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__.TILE_SIZE,
          C = Math.floor(b / u) - _,
          M = Math.floor(R / u) - _,
          x = C + m + 2 * _,
          L = M + m + 2 * _,
          j = t.tileInfoView.getLODInfoAt(t.key.level);

    for (let v = C; v <= x; v++) for (let i = M; i <= L; i++) {
      let n = v;
      j.wrap && (n = v < 0 ? v + f : v % f);

      const u = j.wrap && v < 0,
            _ = j.wrap && v % f !== v,
            m = this._lookupCluster(o, j, t.key.level, n, i, c);

      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(m)) {
        const t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.andThen)(h, e => u ? e.left : _ ? e.right : e.tile);
        if (l && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(t)) continue;
        if (!m.count) continue;

        if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(t) && l) {
          const s = m.geometry.clone();
          let a = m.attributes;
          s.coords[0] = (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_10__.quantizeX)(t, s.coords[0]), s.coords[1] = (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_10__.quantizeY)(t, s.coords[1]), 1 === m.count && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(m.referenceId) && (a = { ...m.attributes,
            referenceId: m.referenceId
          });
          const i = new _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_11__.default(s, a);
          i.displayId = m.displayId, e.push(i);
        }
      }
    }
  }

  _getGeohashLevel(e) {
    return Math.min(Math.ceil(e / 2 + 2), C);
  }

  _setGeohashLevel(e) {
    const t = this._getGeohashLevel(e),
          s = (Math.floor(t / M) + 1) * M - 1;

    if (this._geohashLevel !== s) return this._geohashLevel = s, this._rebuildTree(), void this._bitsets.geohash.clear();
  }

  _getTransforms(e, t) {
    const s = {
      originPosition: "upperLeft",
      scale: [e.resolution, e.resolution],
      translate: [e.bounds[0], e.bounds[3]]
    },
          r = (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.getInfo)(t);
    if (!r) return {
      tile: s,
      left: null,
      right: null
    };
    const [a, i] = r.valid;
    return {
      tile: s,
      left: { ...s,
        translate: [i, e.bounds[3]]
      },
      right: { ...s,
        translate: [a - i + e.bounds[0], e.bounds[3]]
      }
    };
  }

  _getClusterId(e, t, s) {
    return (15 & e) << 28 | (16383 & t) << 14 | 16383 & s;
  }

  _markForDeletion(e, t, s) {
    const r = this._getClusterId(e, t, s);

    this._clusters.delete(r);
  }

  _getClusterBounds(e, t, s) {
    const r = this._schema.params.clusterRadius,
          a = 2 * r;
    let i = s % 2 ? t * a : t * a - r;
    const o = s * a;
    let h = i + a;
    const l = o - a,
          n = 2 ** e.level * _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__.TILE_SIZE;
    e.wrap && i < 0 && (i = 0), e.wrap && h > n && (h = n);
    const u = i / _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__.TILE_SIZE,
          c = o / _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__.TILE_SIZE,
          g = h / _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__.TILE_SIZE,
          d = l / _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__.TILE_SIZE;
    return [e.getXForColumn(u), e.getYForRow(c), e.getXForColumn(g), e.getYForRow(d)];
  }

  _lookupCluster(e, t, s, a, i, o) {
    const h = this._getClusterId(s, a, i),
          l = this._clusters.get(h),
          [c, g, d, p] = this._getClusterBounds(t, a, i),
          f = {
      x: c,
      y: g
    },
          _ = {
      x: d,
      y: p
    };

    let m = 0,
        v = 0,
        I = 0,
        b = 0;

    if (this._spatialReference.isWebMercator) {
      {
        const e = L(f.x / _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_8__.earth.radius);
        m = e - 360 * Math.floor((e + 180) / 360), v = L(Math.PI / 2 - 2 * Math.atan(Math.exp(-f.y / _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_8__.earth.radius)));
      }
      {
        const e = L(_.x / _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_8__.earth.radius);
        I = e - 360 * Math.floor((e + 180) / 360), b = L(Math.PI / 2 - 2 * Math.atan(Math.exp(-_.y / _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_8__.earth.radius)));
      }
    } else {
      const e = (0,_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_13__.project)(f, this._spatialReference, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__.default.WGS84),
            t = (0,_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_13__.project)(_, this._spatialReference, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__.default.WGS84);
      if (!e || !t) return null;
      m = e.x, v = e.y, I = t.x, b = t.y;
    }

    const C = {
      geohashX: 0,
      geohashY: 0
    },
          M = {
      geohashX: 0,
      geohashY: 0
    };
    (0,_geohash_geohashUtils_js__WEBPACK_IMPORTED_MODULE_7__.setGeohashXY)(C, v, m, o), (0,_geohash_geohashUtils_js__WEBPACK_IMPORTED_MODULE_7__.setGeohashXY)(M, b, I, o);

    const j = C.geohashX,
          w = C.geohashY,
          V = M.geohashX,
          S = M.geohashY,
          F = {
      xLL: j,
      yLL: w,
      xTR: V,
      yTR: S,
      level: o
    },
          T = this._tree.getRegionStatistics(j, w, V, S, o),
          {
      count: D,
      xTotal: k,
      yTotal: B,
      referenceId: G
    } = T,
          O = D ? k / D : 0,
          A = D ? B / D : 0;

    if (0 === D) return this._clusters.set(h, null), null;
    const U = {
      cluster_count: D,
      ...T.attributes
    },
          X = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(l) ? l.update(O, A, s, U, F, G) : x.create(e, h, O, A, s, U, F, G);
    return 0 === D && (X.geometry.coords[0] = (c + d) / 2, X.geometry.coords[1] = (g + p) / 2), this._clusters.set(h, X), this._updateAggregateValueRangeForCluster(X, X.tileLevel), X;
  }

  _updateAggregateValueRangeForCluster(e, t) {
    const s = this._aggregateValueRanges[t] || {
      minValue: 1 / 0,
      maxValue: 0
    },
          r = s.minValue,
          a = s.maxValue;
    s.minValue = Math.min(r, e.count), s.maxValue = Math.max(a, e.count), this._aggregateValueRanges[t] = s, r === s.minValue && a === s.maxValue || (this._aggregateValueRangesChanged = !0);
  }

  _markTileClustersForDeletion(e, t) {
    const s = 2 * t,
          r = Math.ceil(_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__.TILE_SIZE / s),
          {
      row: a,
      col: i
    } = e.key,
          o = i * _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__.TILE_SIZE,
          h = a * _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__.TILE_SIZE,
          l = Math.floor(o / s),
          n = Math.floor(h / s);

    for (let u = l; u < l + r; u++) for (let t = n; t < n + r; t++) this._markForDeletion(e.key.level, u, t);
  }

}



/***/ }),

/***/ 89738:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReaderPBF.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureSetReaderPBF": () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/pbf.js */ 96545);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../layers/graphics/OptimizedFeature.js */ 56499);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../layers/graphics/OptimizedGeometry.js */ 82760);
/* harmony import */ var _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FeatureSetReader.js */ 56738);
/* harmony import */ var _FeatureSetReaderPBFHeader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FeatureSetReaderPBFHeader.js */ 89668);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.default.getLogger("esri.view.2d.layers.features.support.FeatureSetReaderPBF"),g=!0,_=268435455,l=128,f=128e3,y={small:{delta:new Int32Array(l),decoded:new Int32Array(l)},large:{delta:new Int32Array(f),decoded:new Int32Array(f)}};function I(e){return e<=y.small.delta.length?y.small:(e<=y.large.delta.length||(y.large.delta=new Int32Array(Math.round(1.25*e)),y.large.decoded=new Int32Array(Math.round(1.25*e))),y.large)}function p(e){return e.toLowerCase().trim()}function m(t){try{const e=2,r=new _core_pbf_js__WEBPACK_IMPORTED_MODULE_3__.default(new Uint8Array(t),new DataView(t));for(;r.next();){if(r.tag()===e)return x(r.getMessage());r.skip()}}catch(r){const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:r});c.error(t)}return null}function x(e){const t=1;for(;e.next();){if(e.tag()===t)return e.getMessage();e.skip()}return null}function S(e){const t=1,r=2,s=3,i=4,n=5,a=6,h=7,o=8,d=9,u=e.getLength(),c=e.pos()+u;for(;e.pos()<c&&e.next();)switch(e.tag()){case t:return e.getString();case r:return e.getFloat();case s:return e.getDouble();case i:return e.getSInt32();case n:return e.getUInt32();case a:return e.getInt64();case h:return e.getUInt64();case o:return e.getSInt64();case d:return e.getBool();default:return e.skip(),null}return null}function F(e,t,r,s,i,n){return.5*Math.abs(e*s+r*n+i*t-e*n-r*t-i*s)}function G(e,t,r,s){return 0===e*s-r*t&&e*r+t*s>0}class v extends _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_7__.FeatureSetReader{constructor(e,t,r,s){super(e),this._hasNext=!1,this._isPoints=!1,this._featureIndex=-1,this._featureOffset=0,this._cache={area:0,unquantGeometry:void 0,geometry:void 0,centroid:void 0,legacyFeature:void 0,optFeature:void 0},this._geometryType=s,this._reader=t,this._header=r,this._hasNext=r.hasFeatures,this._isPoints="esriGeometryPoint"===s}static fromBuffer(e,t,r=!1){const s=m(e),i=(0,_FeatureSetReaderPBFHeader_js__WEBPACK_IMPORTED_MODULE_8__.parseHeader)(s,"esriGeometryPoint"===t,r),n=_FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_7__.FeatureSetReader.createInstance();return new v(n,s,i,t)}get geometryType(){return this._geometryType}get size(){return this._header.featureCount}get hasZ(){return!1}get hasM(){return!1}get stride(){return 2+(this.hasZ?1:0)+(this.hasM?1:0)}get hasFeatures(){return this._header.hasFeatures}get hasNext(){return this._hasNext}get exceededTransferLimit(){return this._header.exceededTransferLimit}getSize(){return this.size}getQuantizationTransform(){return this._header.transform}getCursor(){return this.copy()}getIndex(){return this._featureIndex}setIndex(e){this._cache.area=0,this._cache.unquantGeometry=void 0,this._cache.geometry=void 0,this._cache.centroid=void 0,this._cache.legacyFeature=void 0,this._cache.optFeature=void 0,this._featureIndex=e}getAttributeHash(){let e="";return this._header.fields.forEach((({index:t})=>{e+=this._readAttributeAtIndex(t)+"."})),e}getObjectId(){return this._readAttributeAtIndex(this._header.objectIdFieldIndex)}getDisplayId(){return this._header.displayIds[this._featureIndex]}setDisplayId(e){this._header.displayIds[this._featureIndex]=e}getGroupId(){return this._header.groupIds[this._featureIndex]}setGroupId(e){this._header.groupIds[this._featureIndex]=e}readLegacyFeature(){if(void 0===this._cache.legacyFeature){var e;const t=this.readCentroid(),r={attributes:this.readAttributes(),geometry:this._isPoints?this.readLegacyPointGeometry():this.readLegacyGeometry(),centroid:null!=(e=t&&{x:t.coords[0],y:t.coords[1]})?e:null};return this._cache.legacyFeature=r,r}return this._cache.legacyFeature}readOptimizedFeature(){if(void 0===this._cache.optFeature){const e=new _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__.default(this.readGeometry(),this.readAttributes(),this.readCentroid());return e.objectId=this.getObjectId(),e.displayId=this.getDisplayId(),this._cache.optFeature=e,e}return this._cache.optFeature}getXHydrated(){const e=this._header.centroid[2*this._featureIndex],t=this.getQuantizationTransform();return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(t)?e:e*t.scale[0]+t.translate[0]}getYHydrated(){const e=this._header.centroid[2*this._featureIndex+1],t=this.getQuantizationTransform();return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(t)?e:t.translate[1]-e*t.scale[1]}getX(){return this._header.centroid[2*this._featureIndex]*this._sx+this._tx}getY(){return this._header.centroid[2*this._featureIndex+1]*this._sy+this._ty}readLegacyPointGeometry(){return{x:this.getX(),y:this.getY()}}readLegacyGeometry(e){const t=this.readGeometry(e);return (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__.convertToGeometry)(t,this.geometryType,!1,!1)}readLegacyCentroid(){const e=this.readCentroid();if(!e)return null;const[t,r]=e.coords;return{x:t,y:r}}readGeometryArea(){return this._cache.area||this.readGeometry(!0),this._cache.area}readUnquantizedGeometry(e=!1){if(void 0===this._cache.unquantGeometry){const t=this.readGeometry(e);if(!t)return this._cache.unquantGeometry=null,null;const r=I(t.coords.length).decoded,s=t.clone(r),i=s.coords;let n=0;for(const e of s.lengths){for(let t=1;t<e;t++){const e=2*(n+t),r=2*(n+t-1);i[e]+=i[r],i[e+1]+=i[r+1]}n+=e}return this._cache.unquantGeometry=s,s}return this._cache.unquantGeometry}readHydratedGeometry(){if(this._isPoints){if(this._header.centroid[2*this._featureIndex]===_)return null;const e=this.getXHydrated(),t=this.getYHydrated();return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__.default([],[e,t])}const e=this.readGeometry();if(!e)return null;const t=e.clone(),r=this.getQuantizationTransform();return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(r)&&(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__.unquantizeOptimizedGeometry)(t,t,this.hasZ,this.hasM,r),t}readGeometry(e=!1){if(void 0===this._cache.geometry){let r=null;if(this._isPoints){if(this._header.centroid[2*this._featureIndex]===_)return null;const e=this.getX(),t=this.getY();r=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__.default([],[e,t])}else{const s=this._header.offsets.geometry[this._featureIndex],i=this._reader;if(0===s)return null;i.move(s);try{r=e?this._parseGeometryForDisplay(i):this._parseGeometry(i)}catch(t){return console.error("Failed to parse geometry!",t),null}}return this._cache.geometry=r,r}return this._cache.geometry}readCentroid(){if(void 0===this._cache.centroid){let e=null;const t=this._header.centroid[2*this._featureIndex]+this._tx,r=this._header.centroid[2*this._featureIndex+1]+this._ty;return t===_?(e=this._computeCentroid(),e&&(this._header.centroid[2*this._featureIndex]=e.coords[0]-this._tx,this._header.centroid[2*this._featureIndex+1]=e.coords[1]-this._ty)):e=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__.default([],[t,r]),this._cache.centroid=e,e}return this._cache.centroid}copy(){const e=this._reader.clone(),t=new v(this.instance,e,this._header,this.geometryType);return this.copyInto(t),t}next(){for(this._cache.area=0,this._cache.unquantGeometry=void 0,this._cache.geometry=void 0,this._cache.centroid=void 0,this._cache.legacyFeature=void 0,this._cache.optFeature=void 0;++this._featureIndex<this.size&&!this._getExists(););return this._featureIndex<this.size}_readAttribute(e,t){const r=this._header.hasField(e)?e:p(e),s=this._header.getFieldIndex(r);if(null==s)return;const i=this._readAttributeAtIndex(s);if(!t)return i;if(null==i)return i;return this._header.isDateField(r)?new Date(i):i}_readAttributes(){const e={};return this._header.fields.forEach((({fieldName:t,index:r})=>{e[t]=this._readAttributeAtIndex(r)})),e}copyInto(e){super.copyInto(e),e._featureIndex=this._featureIndex,e._featureOffset=this._featureOffset,e._hasNext=this._hasNext}_readAttributeAtIndex(e){const t=this._header.offsets.attributes[this._featureIndex*this._header.fieldCount+e],r=this._reader;return r.move(t),S(r)}_parseGeometry(e){const t=2,r=3,s=e.getLength(),i=e.pos()+s,n=[],a=[];for(;e.pos()<i&&e.next();)switch(e.tag()){case t:{const t=e.getUInt32(),r=e.pos()+t;for(;e.pos()<r;)a.push(e.getUInt32());break}case r:{const t=e.getUInt32(),r=e.pos()+t;for(n.push(e.getSInt32()+this._tx),n.push(e.getSInt32()+this._ty),this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32();e.pos()<r;)n.push(e.getSInt32()),n.push(e.getSInt32()),this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32();break}default:e.skip()}return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__.default(a,n)}_parseGeometryForDisplay(e){const t=2,r=3,s=e.getLength(),i=e.pos()+s,n=[],a=[];let h=0,d=0,u=null,c=0;const _="esriGeometryPolygon"===this.geometryType;for(;e.pos()<i&&e.next();)switch(e.tag()){case t:{const t=e.getUInt32(),r=e.pos()+t;for(;e.pos()<r;){const t=e.getUInt32();n.push(t),h+=t}u=I(2*h).delta;break}case r:{e.getUInt32();const t=2+(this.hasZ?1:0)+(this.hasM?1:0);for(const r of n)if(d+t*r>u.length)for(let t=0;t<r;t++)e.getSInt32(),e.getSInt32(),this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32();else if(_&&g){const t=this.getAreaSimplificationThreshold(r,this._header.vertexCount);let s=2,i=1;const n=!1;let h=e.getSInt32(),o=e.getSInt32();u[d++]=h,u[d++]=o,this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32();let g=e.getSInt32(),_=e.getSInt32();for(this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32();s<r;){let r=e.getSInt32(),n=e.getSInt32();this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32();const a=h+g,l=o+_;F(h,o,a,l,a+r,l+n)>=t?(c+=-.5*(a-h)*(l+o),i>1&&G(u[d-2],u[d-1],g,_)?(u[d-2]+=g,u[d-1]+=_):(u[d++]=g,u[d++]=_,i++),h=a,o=l):(r+=g,n+=_),g=r,_=n,s++}i<3||n?d-=2*i:(c+=-.5*(h+g-h)*(o+_+o),G(u[d-2],u[d-1],g,_)?(u[d-2]+=g,u[d-1]+=_,a.push(i)):(u[d++]=g,u[d++]=_,a.push(++i)))}else{let t=0,s=e.getSInt32(),i=e.getSInt32();this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32(),u[d++]=s,u[d++]=i,t+=1;for(let n=1;n<r;n++){const r=e.getSInt32(),a=e.getSInt32(),h=s+r,o=i+a;c+=-.5*(h-s)*(o+i),this.hasZ&&e.getSInt32(),this.hasM&&e.getSInt32(),n>2&&G(u[d-2],u[d-1],r,a)?(u[d-2]+=r,u[d-1]+=a):(u[d++]=r,u[d++]=a,t+=1),s=h,i=o}a.push(t)}break}default:e.skip()}if(this._cache.area=c,!a.length)return null;if(this._tx||this._ty){let e=0;for(const t of a)u[2*e]+=this._tx,u[2*e+1]+=this._ty,e+=t}return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__.default(a,u)}}


/***/ }),

/***/ 89668:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReaderPBFHeader.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureSetHeader": () => (/* binding */ n),
/* harmony export */   "parseHeader": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ 61414);
/* harmony import */ var _rest_query_operations_pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../rest/query/operations/pbfFeatureServiceParser.js */ 6305);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=268435455;class n{constructor(){this.fieldMap=new Map,this.fields=[],this.hasFeatures=!1,this.fieldCount=0,this.featureCount=0,this.objectIdFieldIndex=0,this.vertexCount=0,this.offsets={attributes:new Array,geometry:new Array},this.centroid=new Array}hasField(e){return this.fieldMap.has(e)}isDateField(e){var t;return null==(t=this.fieldMap.get(e))?void 0:t.isDate}getFieldIndex(e){var t;return null==(t=this.fieldMap.get(e))?void 0:t.index}}function a(e){const t=1,r=2,n=e.getLength(),a=e.pos()+n,i={name:"",isDate:!1};for(;e.pos()<a&&e.next();)switch(e.tag()){case t:i.name=e.getString();break;case r:"esriFieldTypeDate"===(0,_rest_query_operations_pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_1__.parseFieldType)(e.getEnum())&&(i.isDate=!0);break;default:e.skip()}return i}function i(e){return e.toLowerCase().trim()}function o(s,o,c=!1){const f=1,d=3,l=9,u=12,g=13,p=15,h=s.pos(),m=new n;let b=0,w=0;const k=1,x=2,y=4,I=3;let F=null,L=null,A=null,C=!1;for(;s.next();)switch(s.tag()){case f:F=s.getString();break;case d:L=s.getString();break;case u:A=s.processMessage(_rest_query_operations_pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_1__.parseTransform);break;case l:if(m.exceededTransferLimit=s.getBool(),m.exceededTransferLimit){m.offsets.geometry=c?new Float64Array(8e3):new Int32Array(8e3),m.centroid=c?new Float64Array(16e3):new Int32Array(16e3);for(let e=0;e<m.centroid.length;e++)m.centroid[e]=r}break;case g:{const e=a(s),t=e.name,r=i(e.name),n={fieldName:t,index:b++,isDate:e.isDate};m.fields.push(n),m.fieldMap.set(e.name,n),m.fieldMap.set(r,n);break}case p:{const e=s.getLength(),t=s.pos()+e;if(!m.exceededTransferLimit){const e=m.offsets.geometry,t=m.centroid;e.push(0),t.push(r),t.push(r)}!C&&m.exceededTransferLimit&&(C=!0,m.offsets.attributes=c?new Float64Array(8e3*b):new Uint32Array(8e3*b));let n=w*b;for(;s.pos()<t&&s.next();)switch(s.tag()){case k:{if(C)m.offsets.attributes[n++]=s.pos();else{m.offsets.attributes.push(s.pos())}const e=s.getLength();s.skipLen(e);break}case x:if(o){const e=s.getLength(),t=s.pos()+e;for(;s.pos()<t&&s.next();)switch(s.tag()){case I:{s.getUInt32();const e=s.getSInt64(),t=s.getSInt64();m.centroid[2*w]=e,m.centroid[2*w+1]=t;break}default:s.skip()}}else{m.offsets.geometry[w]=s.pos();const e=s.getLength();m.vertexCount+=e,s.skipLen(e)}break;case y:{const e=s.getLength(),t=s.pos()+e;for(;s.pos()<t&&s.next();)switch(s.tag()){case I:{s.getUInt32();const e=s.getSInt64(),t=s.getSInt64();m.centroid[2*w]=e,m.centroid[2*w+1]=t;break}default:s.skip()}break}default:s.skip()}w++,m.hasFeatures=!0;break}default:s.skip()}const S=F||L;if(!S)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("FeatureSet has no objectId or globalId field name");return m.featureCount=w,m.fieldCount=b,m.objectIdFieldIndex=m.getFieldIndex(S),m.transform=A,m.displayIds=new Uint32Array(m.featureCount),m.groupIds=new Uint16Array(m.featureCount),s.move(h),m}


/***/ }),

/***/ 81228:
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/UpdateToken.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateToken": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(){this.source=!1,this.targets={feature:!1,aggregate:!1},this.storage={filters:!1,data:!1},this.mesh=!1,this.queryFilter=!1,this.why={mesh:[],source:[]}}static create(e){const s=new t;for(const t in e){const r=e[t];if("object"==typeof r)for(const e in r){const a=r[e];s[t][e]=a}s[t]=r}return s}static empty(){return t.create({})}static all(){return t.create({source:!0,targets:{feature:!0,aggregate:!0},storage:{filters:!0,data:!0},mesh:!0})}unset(t){t.source&&(this.source=!1),t.targets.feature&&(this.targets.feature=!1),t.targets.aggregate&&(this.targets.aggregate=!1),t.storage.filters&&(this.storage.filters=!1),t.storage.data&&(this.storage.data=!1),t.mesh&&(this.mesh=!1),t.queryFilter&&(this.queryFilter=!1)}any(){return this.source||this.mesh||this.storage.filters||this.storage.data||this.targets.feature||this.targets.aggregate||this.queryFilter}describe(){let t=0,e="";if(this.mesh){t+=20,e+="-> (20) Mesh needs update\n";for(const t of this.why.mesh)e+=`    + ${t}\n`}if(this.source){t+=10,e+="-> (10) The source needs update\n";for(const t of this.why.source)e+=`    + ${t}\n`}this.targets.feature&&(t+=5,e+="-> (5) Feature target parameters changed\n"),this.storage.filters&&(t+=5,e+="-> (5) Feature filter parameters changed\n"),this.targets.aggregate&&(t+=4,e+="-> (4) Aggregate target parameters changed\n"),this.storage.data&&(t+=1,e+="-> (1) Texture storage parameters changed");const s=t<5?"Fastest":t<10?"Fast":t<15?"Moderate":t<20?"Slow":"Very Slow";console.debug(`Applying ${s} update of cost ${t}/45 `),console.debug(e)}toJSON(){return{queryFilter:this.queryFilter,source:this.source,targets:this.targets,storage:this.storage,mesh:this.mesh}}}


/***/ })

}]);
//# sourceMappingURL=4995.f309cbd7dbb1e6a128b6.js.map