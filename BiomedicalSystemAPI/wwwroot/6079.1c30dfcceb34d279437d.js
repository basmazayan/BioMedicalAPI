"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[6079],{

/***/ 2226:
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/earcut.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ x)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e,n,t,r={exports:{}};e=r,n=function(){function e(e,t,x){x=x||2;var i,u,v,o,y,p,a,l=t&&t.length,h=l?t[0]*x:e.length,s=n(e,0,h,x,!0),c=[];if(!s||s.next===s.prev)return c;if(l&&(s=f(e,t,s,x)),e.length>80*x){i=v=e[0],u=o=e[1];for(var Z=x;Z<h;Z+=x)(y=e[Z])<i&&(i=y),(p=e[Z+1])<u&&(u=p),y>v&&(v=y),p>o&&(o=p);a=0!==(a=Math.max(v-i,o-u))?1/a:0}return r(s,c,x,i,u,a),c}function n(e,n,t,r,x){var i,u;if(x===E(e,n,t,r)>0)for(i=n;i<t;i+=r)u=B(i,e[i],e[i+1],u);else for(i=t-r;i>=n;i-=r)u=B(i,e[i],e[i+1],u);if(u&&M(u,u.next)){var v=u.next;C(u),u=v}return u}function t(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!M(r,r.next)&&0!==w(r.prev,r,r.next))r=r.next;else{var x=r.prev;if(C(r),(r=n=x)===r.next)break;t=!0}}while(t||r!==n);return n}function r(e,n,f,o,y,p,a){if(e){!a&&p&&h(e,o,y,p);for(var l,s,c=e;e.prev!==e.next;)if(l=e.prev,s=e.next,p?i(e,o,y,p):x(e))n.push(l.i/f),n.push(e.i/f),n.push(s.i/f),C(e),e=s.next,c=s.next;else if((e=s)===c){a?1===a?r(e=u(t(e),n,f),n,f,o,y,p,2):2===a&&v(e,n,f,o,y,p):r(t(e),n,f,o,y,p,1);break}}}function x(e){var n=e.prev,t=e,r=e.next;if(w(n,t,r)>=0)return!1;for(var x=e.next.next;x!==e.prev;){if(g(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&w(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function i(e,n,t,r){var x=e.prev,i=e,u=e.next;if(w(x,i,u)>=0)return!1;for(var v=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,f=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,o=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,y=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,p=c(v,f,n,t,r),a=c(o,y,n,t,r),l=e.prevZ,h=e.nextZ;l&&l.z>=p&&h&&h.z<=a;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;if(l=l.prevZ,h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(;l&&l.z>=p;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;l=l.prevZ}for(;h&&h.z<=a;){if(h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function u(e,n,r){var x=e;do{var i=x.prev,u=x.next.next;!M(i,u)&&z(i,x,x.next,u)&&j(i,u)&&j(u,i)&&(n.push(i.i/r),n.push(x.i/r),n.push(u.i/r),C(x),C(x.next),x=e=u),x=x.next}while(x!==e);return t(x)}function v(e,n,x,i,u,v){var f=e;do{for(var o=f.next.next;o!==f.prev;){if(f.i!==o.i&&d(f,o)){var y=A(f,o);return f=t(f,f.next),y=t(y,y.next),r(f,n,x,i,u,v),void r(y,n,x,i,u,v)}o=o.next}f=f.next}while(f!==e)}function f(e,r,x,i){var u,v,f,y=[];for(u=0,v=r.length;u<v;u++)(f=n(e,r[u]*i,u<v-1?r[u+1]*i:e.length,i,!1))===f.next&&(f.steiner=!0),y.push(Z(f));for(y.sort(o),u=0;u<y.length;u++)x=t(x=p(y[u],x),x.next);return x}function o(e,n){return e.x-n.x}function y(e){if(e.next.prev===e)return e;let n=e;for(;;){const t=n.next;if(t.prev===n||t===n||t===e)break;n=t}return n}function p(e,n){var r=a(e,n);if(!r)return n;var x=A(r,e),i=t(r,r.next);let u=y(x);return t(u,u.next),i=y(i),y(n===r?i:n)}function a(e,n){var t,r=n,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var v=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(v<=x&&v>u){if(u=v,v===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(x===u)return t;var f,o=t,y=t.x,p=t.y,a=1/0;r=t;do{x>=r.x&&r.x>=y&&x!==r.x&&g(i<p?x:u,i,y,p,i<p?u:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),j(r,e)&&(f<a||f===a&&(r.x>t.x||r.x===t.x&&l(t,r)))&&(t=r,a=f)),r=r.next}while(r!==o);return t}function l(e,n){return w(e.prev,e,n.prev)<0&&w(n.next,e,e.next)<0}function h(e,n,t,r){var x=e;do{if(null===x.z&&(x.z=c(x.x,x.y,n,t,r)),x.prev.next!==x||x.next.prev!==x)return x.prev.next=x,x.next.prev=x,h(e,n,t,r);x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,s(x)}function s(e){var n,t,r,x,i,u,v,f,o=1;do{for(t=e,e=null,i=null,u=0;t;){for(u++,r=t,v=0,n=0;n<o&&(v++,r=r.nextZ);n++);for(f=o;v>0||f>0&&r;)0!==v&&(0===f||!r||t.z<=r.z)?(x=t,t=t.nextZ,v--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r}i.nextZ=null,o*=2}while(u>1);return e}function c(e,n,t,r,x){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*x)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-r)*x)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function Z(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function g(e,n,t,r,x,i,u,v){return(x-u)*(n-v)-(e-u)*(i-v)>=0&&(e-u)*(r-v)-(t-u)*(n-v)>=0&&(t-u)*(i-v)-(x-u)*(r-v)>=0}function d(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!k(e,n)&&(j(e,n)&&j(n,e)&&q(e,n)&&(w(e.prev,e,n.prev)||w(e,n.prev,n))||M(e,n)&&w(e.prev,e,e.next)>0&&w(n.prev,n,n.next)>0)}function w(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function M(e,n){return e.x===n.x&&e.y===n.y}function z(e,n,t,r){var x=m(w(e,n,t)),i=m(w(e,n,r)),u=m(w(t,r,e)),v=m(w(t,r,n));return x!==i&&u!==v||!(0!==x||!b(e,t,n))||!(0!==i||!b(e,r,n))||!(0!==u||!b(t,e,r))||!(0!==v||!b(t,n,r))}function b(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function m(e){return e>0?1:e<0?-1:0}function k(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&z(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function j(e,n){return w(e.prev,e,e.next)<0?w(e,n,e.next)>=0&&w(e,e.prev,n)>=0:w(e,n,e.prev)<0||w(e,e.next,n)<0}function q(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}function A(e,n){var t=new D(e.i,e.x,e.y),r=new D(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function B(e,n,t,r){var x=new D(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function C(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function D(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function E(e,n,t,r){for(var x=0,i=n,u=t-r;i<t;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}return e.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,u=Math.abs(E(e,0,i,t));if(x)for(var v=0,f=n.length;v<f;v++){var o=n[v]*t,y=v<f-1?n[v+1]*t:e.length;u-=Math.abs(E(e,o,y,t))}var p=0;for(v=0;v<r.length;v+=3){var a=r[v]*t,l=r[v+1]*t,h=r[v+2]*t;p+=Math.abs((e[a]-e[h])*(e[l+1]-e[a+1])-(e[a]-e[l])*(e[h+1]-e[a+1]))}return 0===u&&0===p?0:Math.abs((p-u)/u)},e.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<n;u++)t.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,t.holes.push(r))}return t},e},void 0!==(t=n())&&(e.exports=t);const x=r.exports;


/***/ }),

/***/ 49919:
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/Mesh.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ N)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Loadable.js */ 23412);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/Promise.js */ 67614);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/reactiveUtils.js */ 7917);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../chunks/vec3f64.js */ 33989);
/* harmony import */ var _Extent_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Extent.js */ 70157);
/* harmony import */ var _Geometry_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Geometry.js */ 20119);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Point.js */ 7309);
/* harmony import */ var _Polygon_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Polygon.js */ 38535);
/* harmony import */ var _support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/axisAngleDegrees.js */ 23503);
/* harmony import */ var _support_MeshComponent_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/MeshComponent.js */ 92671);
/* harmony import */ var _support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/MeshTransform.js */ 27144);
/* harmony import */ var _support_MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/MeshVertexAttributes.js */ 16745);
/* harmony import */ var _support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./support/triangulationUtils.js */ 24506);
/* harmony import */ var _support_meshUtils_centerAt_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/meshUtils/centerAt.js */ 21878);
/* harmony import */ var _support_meshUtils_loadExternal_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/meshUtils/loadExternal.js */ 1260);
/* harmony import */ var _support_meshUtils_offset_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/meshUtils/offset.js */ 91131);
/* harmony import */ var _support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/meshUtils/primitives.js */ 50303);
/* harmony import */ var _support_meshUtils_rotate_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./support/meshUtils/rotate.js */ 54287);
/* harmony import */ var _support_meshUtils_scale_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./support/meshUtils/scale.js */ 83645);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






























var I;
const B = _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__.default.getLogger("esri.geometry.Mesh");
let k = I = class extends (0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__.HandleOwnerMixin)(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_4__.default.LoadableMixin((0,_core_Promise_js__WEBPACK_IMPORTED_MODULE_7__.EsriPromiseMixin)(_Geometry_js__WEBPACK_IMPORTED_MODULE_17__.default))) {
  constructor(e) {
    super(e), this.components = null, this.transform = null, this.external = null, this.hasZ = !0, this.hasM = !1, this.vertexAttributes = new _support_MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_23__.MeshVertexAttributes(), this.type = "mesh";
  }

  initialize() {
    ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(this.external) || this.vertexAttributes.position.length) && (this.loadStatus = "loaded"), this.when(() => {
      this.handles.add((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_9__.react)(() => {
        var e;
        return {
          vertexAttributes: this.vertexAttributes,
          components: null == (e = this.components) ? void 0 : e.map(e => e.clone()),
          transform: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.transform) ? this.transform.clone() : null
        };
      }, () => this._set("external", null), {
        once: !0,
        sync: !0
      }));
    });
  }

  get hasExtent() {
    return !this.loaded && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.external) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.external.extent) || this.loaded && this.vertexAttributes.position.length > 0 && (!this.components || this.components.length > 0);
  }

  get boundingInfo() {
    const e = this.vertexAttributes.position,
          t = this.spatialReference;
    if (0 === e.length || this.components && 0 === this.components.length) return {
      extent: new _Extent_js__WEBPACK_IMPORTED_MODULE_16__.default({
        xmin: 0,
        ymin: 0,
        zmin: 0,
        xmax: 0,
        ymax: 0,
        zmax: 0,
        spatialReference: t
      }),
      center: new _Point_js__WEBPACK_IMPORTED_MODULE_18__.default({
        x: 0,
        y: 0,
        z: 0,
        spatialReference: t
      })
    };
    const o = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.transform) ? this.transform.project(e, t) : e;
    let r = 1 / 0,
        n = 1 / 0,
        s = 1 / 0,
        a = -1 / 0,
        l = -1 / 0,
        p = -1 / 0,
        c = 0,
        m = 0,
        h = 0;
    const u = o.length,
          d = 1 / (u / 3);
    let y = 0;

    for (; y < u;) {
      const e = o[y++],
            t = o[y++],
            i = o[y++];
      r = Math.min(r, e), n = Math.min(n, t), s = Math.min(s, i), a = Math.max(a, e), l = Math.max(l, t), p = Math.max(p, i), c += d * e, m += d * t, h += d * i;
    }

    return {
      extent: new _Extent_js__WEBPACK_IMPORTED_MODULE_16__.default({
        xmin: r,
        ymin: n,
        zmin: s,
        xmax: a,
        ymax: l,
        zmax: p,
        spatialReference: t
      }),
      center: new _Point_js__WEBPACK_IMPORTED_MODULE_18__.default({
        x: c,
        y: m,
        z: h,
        spatialReference: t
      })
    };
  }

  get anchor() {
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.transform)) return this.transform.getOriginPoint(this.spatialReference);
    const e = this.boundingInfo;
    return new _Point_js__WEBPACK_IMPORTED_MODULE_18__.default({
      x: e.center.x,
      y: e.center.y,
      z: e.extent.zmin,
      spatialReference: this.spatialReference
    });
  }

  get origin() {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.transform) ? this.transform.getOriginPoint(this.spatialReference) : this.boundingInfo.center;
  }

  get extent() {
    return !this.loaded && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.external) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.external.extent) ? this.external.extent.clone() : this.boundingInfo.extent;
  }

  addComponent(e) {
    this.loaded ? (this.components || (this.components = []), this.components.push(_support_MeshComponent_js__WEBPACK_IMPORTED_MODULE_21__.default.from(e)), this.notifyChange("components")) : B.error("addComponent()", "Mesh must be loaded before applying operations");
  }

  removeComponent(e) {
    if (this.loaded) {
      if (this.components) {
        const t = this.components.indexOf(e);
        if (-1 !== t) return this.components.splice(t, 1), void this.notifyChange("components");
      }

      B.error("removeComponent()", "Provided component is not part of the list of components");
    } else B.error("removeComponent()", "Mesh must be loaded before applying operations");
  }

  rotate(e, t, o, r) {
    return (0,_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_20__.fromAxisAndAngle)(D.x, e, W), (0,_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_20__.fromAxisAndAngle)(D.y, t, Z), (0,_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_20__.fromAxisAndAngle)(D.z, o, _), (0,_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_20__.compose)(W, Z, W), (0,_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_20__.compose)(W, _, W), (0,_support_meshUtils_rotate_js__WEBPACK_IMPORTED_MODULE_29__.rotate)(this, W, r), this;
  }

  offset(e, t, o, r) {
    return this.loaded ? (H[0] = e, H[1] = t, H[2] = o, (0,_support_meshUtils_offset_js__WEBPACK_IMPORTED_MODULE_27__.offset)(this, H, r), this) : (B.error("offset()", "Mesh must be loaded before applying operations"), this);
  }

  scale(e, t) {
    return this.loaded ? ((0,_support_meshUtils_scale_js__WEBPACK_IMPORTED_MODULE_30__.scale)(this, e, t), this) : (B.error("scale()", "Mesh must be loaded before applying operations"), this);
  }

  centerAt(e, t) {
    return this.loaded ? ((0,_support_meshUtils_centerAt_js__WEBPACK_IMPORTED_MODULE_25__.centerAt)(this, e, t), this) : (B.error("centerAt()", "Mesh must be loaded before applying operations"), this);
  }

  load(e) {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.external) && this.addResolvingPromise((0,_support_meshUtils_loadExternal_js__WEBPACK_IMPORTED_MODULE_26__.loadExternal)(this, this.external.source, e)), Promise.resolve(this);
  }

  clone() {
    const e = this.components ? new Map() : null,
          t = this.components ? new Map() : null,
          o = {
      components: this.components ? this.components.map(o => o.cloneWithDeduplication(e, t)) : null,
      spatialReference: this.spatialReference,
      vertexAttributes: this.vertexAttributes.clone(),
      transform: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.transform) ? this.transform.clone() : null,
      external: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.external) ? {
        source: this.external.source,
        extent: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.external.extent) ? this.external.extent.clone() : null
      } : null
    };
    return new I(o);
  }

  vertexAttributesChanged() {
    this.notifyChange("vertexAttributes");
  }

  toBinaryGLTF(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        toBinaryGLTF: t
      } = yield __webpack_require__.e(/*! import() */ 1537).then(__webpack_require__.bind(__webpack_require__, /*! ./support/meshUtils/exporters/gltf/gltfexport.js */ 81537));
      return t(_this, e);
    })();
  }

  static createBox(e, t) {
    if (!(e instanceof _Point_js__WEBPACK_IMPORTED_MODULE_18__.default)) return B.error(".createBox()", "expected location to be a Point instance"), null;
    const o = new I((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_28__.convertUnitGeometry)((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_28__.createUnitSizeBox)(), e, t));
    return t && t.imageFace && "all" !== t.imageFace ? (0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_28__.extractSingleFaceOfBox)(o, t.imageFace) : o;
  }

  static createSphere(e, t) {
    return e instanceof _Point_js__WEBPACK_IMPORTED_MODULE_18__.default ? new I((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_28__.convertUnitGeometry)((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_28__.createUnitSizeSphere)(t && t.densificationFactor || 0), e, t)) : (B.error(".createSphere()", "expected location to be a Point instance"), null);
  }

  static createCylinder(e, t) {
    return e instanceof _Point_js__WEBPACK_IMPORTED_MODULE_18__.default ? new I((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_28__.convertUnitGeometry)((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_28__.createUnitSizeCylinder)(t && t.densificationFactor || 0), e, t)) : (B.error(".createCylinder()", "expected location to be a Point instance"), null);
  }

  static createPlane(e, t) {
    var o;
    if (!(e instanceof _Point_js__WEBPACK_IMPORTED_MODULE_18__.default)) return B.error(".createPlane()", "expected location to be a Point instance"), null;
    const r = null != (o = null == t ? void 0 : t.facing) ? o : "up",
          n = (0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_28__.convertPlaneSizeParameter)(r, null == t ? void 0 : t.size);
    return new I((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_28__.convertUnitGeometry)((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_28__.createUnitSizePlane)(r), e, { ...t,
      size: n
    }));
  }

  static createFromPolygon(e, t) {
    if (!(e instanceof _Polygon_js__WEBPACK_IMPORTED_MODULE_19__.default)) return B.error(".createFromPolygon()", "expected polygon to be a Polygon instance"), null;
    const o = (0,_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_24__.triangulate)(e);
    return new I({
      vertexAttributes: new _support_MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_23__.MeshVertexAttributes({
        position: o.position
      }),
      components: [new _support_MeshComponent_js__WEBPACK_IMPORTED_MODULE_21__.default({
        faces: o.faces,
        shading: "flat",
        material: t && t.material || null
      })],
      spatialReference: e.spatialReference
    });
  }

  static createFromGLTF(e, o, r) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!(e instanceof _Point_js__WEBPACK_IMPORTED_MODULE_18__.default)) throw B.error(".createfromGLTF()", "expected location to be a Point instance"), new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("invalid-input", "Expected location to be a Point instance");
      const {
        loadGLTFMesh: n
      } = yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.whenOrAbort)(Promise.all(/*! import() */[__webpack_require__.e(4411), __webpack_require__.e(3421)]).then(__webpack_require__.bind(__webpack_require__, /*! ./support/meshUtils/loadGLTFMesh.js */ 53421)), r);
      return new I(yield n(e, o, r));
    })();
  }

  static createWithExternalSource(e, t, o) {
    var r, n, s;
    const i = null != (r = null == o ? void 0 : o.extent) ? r : null,
          a = null != (n = null == o ? void 0 : o.transform.clone()) ? n : new _support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_22__.default();
    a.origin = [e.x, e.y, null != (s = e.z) ? s : 0];
    const l = e.spatialReference;
    return new I({
      external: {
        source: t,
        extent: i
      },
      transform: a,
      spatialReference: l
    });
  }

  static createIncomplete(e, o) {
    var r, n;
    const s = null != (r = null == o ? void 0 : o.transform.clone()) ? r : new _support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_22__.default();
    s.origin = [e.x, e.y, null != (n = e.z) ? n : 0];
    const i = e.spatialReference,
          a = new I({
      transform: s,
      spatialReference: i
    });
    return a.addResolvingPromise(Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("mesh-incomplete", "Mesh resources are not complete"))), a;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: [_support_MeshComponent_js__WEBPACK_IMPORTED_MODULE_21__.default],
  json: {
    write: !0
  }
})], k.prototype, "components", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: _support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_22__.default,
  json: {
    write: !0
  }
})], k.prototype, "transform", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  constructOnly: !0
})], k.prototype, "external", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  readOnly: !0
})], k.prototype, "hasExtent", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  readOnly: !0
})], k.prototype, "boundingInfo", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  readOnly: !0
})], k.prototype, "anchor", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  readOnly: !0
})], k.prototype, "origin", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  readOnly: !0,
  json: {
    read: !1
  }
})], k.prototype, "extent", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  readOnly: !0,
  json: {
    read: !1,
    write: !0,
    default: !0
  }
})], k.prototype, "hasZ", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  readOnly: !0,
  json: {
    read: !1,
    write: !0,
    default: !1
  }
})], k.prototype, "hasM", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: _support_MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_23__.MeshVertexAttributes,
  nonNullable: !0,
  json: {
    write: !0
  }
})], k.prototype, "vertexAttributes", void 0), k = I = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__.subclass)("esri.geometry.Mesh")], k);

const D = {
  x: (0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__.f)(1, 0, 0),
  y: (0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__.f)(0, 1, 0),
  z: (0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__.f)(0, 0, 1)
},
      W = (0,_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_20__.create)(),
      Z = (0,_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_20__.create)(),
      _ = (0,_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_20__.create)(),
      H = (0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__.c)(),
      N = k;



/***/ }),

/***/ 92671:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshComponent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ 43465);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MeshMaterial.js */ 90997);
/* harmony import */ var _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MeshMaterialMetallicRoughness.js */ 75329);
/* harmony import */ var _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MeshVertexAttributes.js */ 16745);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__.default.getLogger("esri.geometry.support.MeshComponent");let h=m=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1}static from(r){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__.ensureClass)(m,r)}castFaces(r){return (0,_MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_10__.castArray)(r,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},u)}castMaterial(r){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__.ensureClass)(r&&"object"==typeof r&&("metallic"in r||"roughness"in r||"metallicRoughnessTexture"in r)?_MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__.default:_MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__.default,r)}clone(){return new m({faces:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.faces),shading:this.shading,material:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(r,t){const o={faces:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(r,t):null,trustSourceNormals:this.trustSourceNormals};return new m(o)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:!0}})],h.prototype,"faces",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("faces")],h.prototype,"castFaces",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__.default,json:{write:!0}})],h.prototype,"material",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("material")],h.prototype,"castMaterial",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],h.prototype,"shading",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean})],h.prototype,"trustSourceNormals",void 0),h=m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.geometry.support.MeshComponent")],h);const f=h;


/***/ }),

/***/ 90997:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshMaterial.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ 28503);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MeshTexture.js */ 42461);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let n=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(o){super(o),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(o,e){const t=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(o)?o.get(this):null;if(t)return t;const l=new p(this.clonePropertiesWithDeduplication(e));return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(o)&&o.set(this,l),l}clonePropertiesWithDeduplication(o){return{color:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(this.color)?this.color.clone():null,colorTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(this.colorTexture)?this.colorTexture.cloneWithDeduplication(o):null,normalTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(this.normalTexture)?this.normalTexture.cloneWithDeduplication(o):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__.default,json:{write:!0}})],n.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_9__.default,json:{write:!0}})],n.prototype,"colorTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_9__.default,json:{write:!0}})],n.prototype,"normalTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({nonNullable:!0,json:{write:!0}})],n.prototype,"alphaMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({nonNullable:!0,json:{write:!0}})],n.prototype,"alphaCutoff",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({nonNullable:!0,json:{write:!0}})],n.prototype,"doubleSided",void 0),n=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.geometry.support.MeshMaterial")],n);const u=n;


/***/ }),

/***/ 75329:
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshMaterialMetallicRoughness.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ 28503);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MeshMaterial.js */ 90997);
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MeshTexture.js */ 42461);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n;let u=n=class extends _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__.default{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const s=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e)?e.get(this):null;if(s)return s;const i=new n(this.clonePropertiesWithDeduplication(t));return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e)&&e.set(this,i),i}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(this.emissiveColor)?this.emissiveColor.clone():null,emissiveTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(this.emissiveTexture)?this.emissiveTexture.cloneWithDeduplication(e):null,occlusionTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(this.occlusionTexture)?this.occlusionTexture.cloneWithDeduplication(e):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.cloneWithDeduplication(e):null}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__.default,json:{write:!0}})],u.prototype,"emissiveColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_9__.default,json:{write:!0}})],u.prototype,"emissiveTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_9__.default,json:{write:!0}})],u.prototype,"occlusionTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"metallic",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"roughness",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_9__.default,json:{write:!0}})],u.prototype,"metallicRoughnessTexture",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.geometry.support.MeshMaterialMetallicRoughness")],u);const c=u;


/***/ }),

/***/ 42461:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshTexture.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ 26912);
/* harmony import */ var _views_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../views/support/screenshotUtils.js */ 70629);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;const d=new WeakMap;let h=0,u=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,a,r){if(t instanceof HTMLImageElement){const s={type:"image-element",src:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.t)(t.src,r),crossOrigin:t.crossOrigin};e[a]=s}else if(t instanceof HTMLCanvasElement){const r=t.getContext("2d").getImageData(0,0,t.width,t.height),s={type:"canvas-element",imageData:this.encodeImageData(r)};e[a]=s}else if(t instanceof HTMLVideoElement){const s={type:"video-element",src:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.t)(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[a]=s}else{const r={type:"image-data",imageData:this.encodeImageData(t)};e[a]=r}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=this.decodeImageData(t.imageData),a=document.createElement("canvas");return a.width=e.width,a.height=e.height,a.getContext("2d").putImageData(e,0,0),a}case"image-data":return this.decodeImageData(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const t=this.data,e=this.url;if(t instanceof HTMLCanvasElement)return this.imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this.imageDataContainsTransparent(t);if(e){const t=e.substr(e.length-4,4).toLowerCase(),a=e.substr(0,15).toLocaleLowerCase();if(".png"===t||"data:image/png;"===a)return!0}return!1}set transparent(t){null!=t?this._override("transparent",t):this._clearOverride("transparent")}get contentHash(){const t="string"==typeof this.wrap?this.wrap:"object"==typeof this.wrap?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(e="")=>`d:${e},t:${this.transparent},w:${t}`;return null!=this.url?e(this.url):null!=this.data?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(d.has(this.data)||d.set(this.data,++h),e(d.get(this.data))):e()}clone(){const t={url:this.url,data:this.data,wrap:this.cloneWrap()};return new p(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const a=this.clone();return t.set(this,a),a}cloneWrap(){return"string"==typeof this.wrap?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}encodeImageData(t){let e="";for(let a=0;a<t.data.length;a++)e+=String.fromCharCode(t.data[a]);return{data:btoa(e),width:t.width,height:t.height}}decodeImageData(t){const e=atob(t.data),a=new Uint8ClampedArray(e.length);for(let r=0;r<e.length;r++)a[r]=e.charCodeAt(r);return (0,_views_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_10__.wrapImageData)(a,t.width,t.height)}imageDataContainsTransparent(t){for(let e=3;e<t.data.length;e+=4)if(255!==t.data[e])return!0;return!1}static from(t){return"string"==typeof t?new p({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new p({data:t}):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.ensureClass)(p,t)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.w}})],u.prototype,"url",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],u.prototype,"data",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("data")],u.prototype,"writeData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("data")],u.prototype,"readData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],u.prototype,"transparent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{write:!0}})],u.prototype,"wrap",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],u.prototype,"contentHash",null),u=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.geometry.support.MeshTexture")],u);const m=u;


/***/ }),

/***/ 16745:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshVertexAttributes.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeshVertexAttributes": () => (/* binding */ c),
/* harmony export */   "castArray": () => (/* binding */ u),
/* harmony export */   "default": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ 43465);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;const l=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__.default.getLogger("esri.geometry.support.MeshVertexAttributes");let c=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(r){return u(r,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},l)}castPosition(r){r&&r instanceof Float32Array&&l.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");return u(r,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},l)}castUv(r){return u(r,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},l)}castNormal(r){return u(r,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},l)}castTangent(r){return u(r,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},l)}clone(){const r={position:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.position),uv:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.uv),normal:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.normal),tangent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.tangent),color:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.color)};return new i(r)}clonePositional(){const r={position:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.position),normal:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.normal),tangent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.tangent),uv:this.uv,color:this.color};return new i(r)}};function p(r,t,o,e){const{loggerTag:n,stride:s}=t;return r.length%s!=0?(e.error(n,`Invalid array length, expected a multiple of ${s}`),new o([])):r}function u(r,t,o,e,n){if(!r)return r;if(r instanceof t)return p(r,e,t,n);for(const s of o)if(r instanceof s)return p(new t(r),e,t,n);if(Array.isArray(r))return p(new t(r),e,t,n);{const e=o.map((r=>`'${r.name}'`));return n.error(`Failed to set property, expected one of ${e}, but got ${r.constructor.name}`),new t([])}}function g(r,t,o){t[o]=m(r)}function m(r){const t=new Array(r.length);for(let o=0;o<r.length;o++)t[o]=r[o];return t}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:g}})],c.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("color")],c.prototype,"castColor",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({nonNullable:!0,json:{write:g}})],c.prototype,"position",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("position")],c.prototype,"castPosition",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:g}})],c.prototype,"uv",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("uv")],c.prototype,"castUv",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:g}})],c.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("normal")],c.prototype,"castNormal",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:g}})],c.prototype,"tangent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("tangent")],c.prototype,"castTangent",null),c=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.geometry.support.MeshVertexAttributes")],c);const y=c;


/***/ }),

/***/ 21878:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/centerAt.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "centerAt": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/vec3f64.js */ 33989);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projection.js */ 15695);
/* harmony import */ var _geographicUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geographicUtils.js */ 56605);
/* harmony import */ var _georeference_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./georeference.js */ 99814);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__.default.getLogger("esri.geometry.support.meshUtils.centerAt");function c(e,r,i){var n;if(!e.vertexAttributes||!e.vertexAttributes.position)return;const s=null!=(n=null==i?void 0:i.origin)?n:e.origin;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(e.transform))null!=(null==i?void 0:i.geographic)&&i.geographic!==e.transform.geographic&&a.warn(`Specifying the 'geographic' parameter (${i.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),f(e.transform,r,s);else{(0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_4__.isGeographicMesh)(e.spatialReference,i)?p(e,r,s):g(e,r,s)}}function f(e,t,r){const i=t.x-r.x,o=t.y-r.y,n=t.hasZ&&r.hasZ?t.z-r.z:0,s=e.origin;e.origin=[s[0]+i,s[1]+o,s[2]+n]}function p(e,t,r){const i=(0,_georeference_js__WEBPACK_IMPORTED_MODULE_5__.ungeoreference)(e.vertexAttributes,r,{geographic:!0}),{position:o,normal:a,tangent:c}=(0,_georeference_js__WEBPACK_IMPORTED_MODULE_5__.georeference)(i,t,{geographic:!0});e.vertexAttributes.position=o,e.vertexAttributes.normal=a,e.vertexAttributes.tangent=c,e.vertexAttributesChanged()}function g(e,t,r){const o=u,n=m;if((0,_projection_js__WEBPACK_IMPORTED_MODULE_3__.projectPointToVector)(t,n,e.spatialReference)){if(!(0,_projection_js__WEBPACK_IMPORTED_MODULE_3__.projectPointToVector)(r,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,a.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}l(e.vertexAttributes.position,n,o),e.vertexAttributesChanged()}else a.error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid})`)}function l(e,t,r){if(e)for(let i=0;i<e.length;i+=3)for(let o=0;o<3;o++)e[i+o]+=t[o]-r[o]}const m=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),u=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();


/***/ }),

/***/ 1260:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/loadExternal.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadExternal": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/urlUtils.js */ 30164);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Point.js */ 7309);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






function u(_x, _x2, _x3) {
  return _u.apply(this, arguments);
}

function _u() {
  _u = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, s, o) {
    const {
      loadGLTFMesh: n
    } = yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.whenOrAbort)(Promise.all(/*! import() */[__webpack_require__.e(4411), __webpack_require__.e(3421)]).then(__webpack_require__.bind(__webpack_require__, /*! ./loadGLTFMesh.js */ 53421)), o),
          a = yield m(s, o),
          i = n(new _Point_js__WEBPACK_IMPORTED_MODULE_5__.default({
      x: 0,
      y: 0,
      z: 0,
      spatialReference: e.spatialReference
    }), a.url, {
      resolveFile: f(a),
      useTransform: !0,
      signal: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(o) ? o.signal : null
    });
    i.then(() => a.dispose(), () => a.dispose());
    const {
      vertexAttributes: l,
      components: u
    } = yield i;
    e.vertexAttributes = l, e.components = u;
  });
  return _u.apply(this, arguments);
}

function f(e) {
  const t = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.removeFile)(e.url);
  return s => {
    var r;
    const o = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.makeRelative)(s, t, t),
          n = o ? o.replace(/^ *\.\//, "") : null;
    return null != (r = e.files.get(n)) ? r : s;
  };
}

function m(_x4, _x5) {
  return _m.apply(this, arguments);
}

function _m() {
  _m = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    return e instanceof Blob ? y.fromBlob(e) : "string" == typeof e ? new y(e) : Array.isArray(e) ? p(e, t) : w(e, t);
  });
  return _m.apply(this, arguments);
}

function p(_x6, _x7) {
  return _p.apply(this, arguments);
}

function _p() {
  _p = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, r) {
    const i = new Map();
    let l = null;
    const c = yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.eachAlwaysValues)(t.map( /*#__PURE__*/function () {
      var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
        return {
          name: e.name,
          source: yield m(e instanceof Blob ? e : e.source, r)
        };
      });

      return function (_x10) {
        return _ref.apply(this, arguments);
      };
    }())),
          u = [];

    for (const e of c) e && ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAborted)(r) ? e.source.dispose() : u.push(e));

    (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(r);

    for (const {
      name: e,
      source: o
    } of u) ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(l) || /\.(gltf|glb)/i.test(e)) && (l = o.url), i.set(e, o.url), o.files && o.files.forEach((e, t) => i.set(t, e));

    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(l)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("mesh-load-external:missing-files", "Missing files to load external mesh source");
    return new y(l, () => u.forEach(({
      source: e
    }) => e.dispose()), i);
  });
  return _p.apply(this, arguments);
}

function w(_x8, _x9) {
  return _w.apply(this, arguments);
}

function _w() {
  _w = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    const {
      default: s
    } = yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.whenOrAbort)(Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../request.js */ 30351)), t),
          o = "string" == typeof e.multipart[0] ? yield Promise.all(e.multipart.map( /*#__PURE__*/function () {
      var _ref2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
        return (yield s(e, {
          responseType: "array-buffer"
        })).data;
      });

      return function (_x11) {
        return _ref2.apply(this, arguments);
      };
    }())) : e.multipart;
    return y.fromBlob(new Blob(o));
  });
  return _w.apply(this, arguments);
}

class y {
  constructor(e, t = () => {}, s = new Map()) {
    this.url = e, this.dispose = t, this.files = s;
  }

  static fromBlob(e) {
    const t = URL.createObjectURL(e);
    return new y(t, () => URL.revokeObjectURL(t));
  }

}



/***/ }),

/***/ 91131:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/offset.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offset": () => (/* binding */ x)
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
/* harmony import */ var _geographicUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./geographicUtils.js */ 56605);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projection.js */ 23187);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const v=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__.default.getLogger("esri.geometry.support.meshUtils.offset");function x(t,e,o){if(t.vertexAttributes&&t.vertexAttributes.position)if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(t.transform))null!=(null==o?void 0:o.geographic)&&o.geographic!==t.transform.geographic&&v.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`),A(t.transform,e);else{(0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_9__.isGeographicMesh)(t.spatialReference,o)?b(t,e):y(t,e)}}function A(t,r){const e=t.origin;t.origin=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__.b)((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(),e,r)}function b(t,o){const i=t.spatialReference,n=t.vertexAttributes.position,a=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,v=new Float64Array(n.length),x=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(a)?new Float32Array(a.length):null,A=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(c)?new Float32Array(c.length):null,b=t.extent.center,y=k;(0,_projection_js__WEBPACK_IMPORTED_MODULE_7__.computeTranslationToOriginAndRotation)(i,[b.x,b.y,b.z],w,(0,_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__.getSphericalPCPF)(i)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.f)(F,w),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_5__.t)(y,o,F),(0,_projection_js__WEBPACK_IMPORTED_MODULE_10__.projectToPCPF)(n,i,v),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(a)&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_10__.projectNormalToPCPF)(a,n,v,i,x),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(c)&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_10__.projectTangentToPCPF)(c,n,v,i,A),d(v,y),(0,_projection_js__WEBPACK_IMPORTED_MODULE_10__.projectFromPCPF)(v,n,i),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(a)&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_10__.projectNormalFromPCPF)(x,n,v,i,a),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(c)&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_10__.projectTangentFromPCPF)(A,n,v,i,c),t.vertexAttributesChanged()}function y(t,r){d(t.vertexAttributes.position,r),t.vertexAttributesChanged()}function d(t,r){if(t)for(let e=0;e<t.length;e+=3)for(let o=0;o<3;o++)t[e+o]+=r[o]}const k=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.c)(),w=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__.c)(),F=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)();


/***/ }),

/***/ 50303:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/primitives.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boxFaceOrder": () => (/* binding */ M),
/* harmony export */   "convertPlaneSizeParameter": () => (/* binding */ h),
/* harmony export */   "convertUnitGeometry": () => (/* binding */ A),
/* harmony export */   "createUnitSizeBox": () => (/* binding */ c),
/* harmony export */   "createUnitSizeCylinder": () => (/* binding */ u),
/* harmony export */   "createUnitSizePlane": () => (/* binding */ p),
/* harmony export */   "createUnitSizeSphere": () => (/* binding */ f),
/* harmony export */   "extractSingleFaceOfBox": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat3f64.js */ 30641);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/vec3.js */ 63702);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/vec3f64.js */ 33989);
/* harmony import */ var _MeshComponent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MeshComponent.js */ 92671);
/* harmony import */ var _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MeshVertexAttributes.js */ 16745);
/* harmony import */ var _georeference_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./georeference.js */ 99814);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:n}=d,r=4*t.length,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(2*t.length*3);let c=0,l=0,f=0,u=0;for(let h=0;h<t.length;h++){const r=t[h],p=c/3;for(const t of e)i[u++]=p+t;const m=r.corners;for(let t=0;t<4;t++){const e=m[t];let i=0;a[f++]=.25*n[t][0]+r.uvOrigin[0],a[f++]=r.uvOrigin[1]-.25*n[t][1];for(let t=0;t<3;t++)0!==r.axis[t]?(o[c++]=.5*r.axis[t],s[l++]=r.axis[t]):(o[c++]=.5*e[i++],s[l++]=0)}}return{position:o,normal:s,uv:a,faces:i}}function l(e,n){const r=e.components[0],o=r.faces,a=M[n],i=6*a,c=new Uint32Array(6),l=new Uint32Array(o.length-6);let f=0,u=0;for(let t=0;t<o.length;t++)t>=i&&t<i+6?c[f++]=o[t]:l[u++]=o[t];if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(e.vertexAttributes.uv)){const t=new Float32Array(e.vertexAttributes.uv),n=4*a*2,r=[0,1,1,1,1,0,0,0];for(let e=0;e<r.length;e++)t[n+e]=r[e];e.vertexAttributes.uv=t}return e.components=[new _MeshComponent_js__WEBPACK_IMPORTED_MODULE_4__.default({faces:c,material:r.material}),new _MeshComponent_js__WEBPACK_IMPORTED_MODULE_4__.default({faces:l})],e}function f(t=0){const e=Math.round(8*2**t),n=2*e,r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*((e-1)*n*2));let c=0,l=0,f=0,u=0;for(let h=0;h<=e;h++){const t=h/e*Math.PI+.5*Math.PI,r=Math.cos(t),p=Math.sin(t);F[2]=p;const m=0===h||h===e,w=m?n-1:n;for(let v=0;v<=w;v++){const t=v/w*2*Math.PI;F[0]=-Math.sin(t)*r,F[1]=Math.cos(t)*r;for(let e=0;e<3;e++)o[c]=.5*F[e],s[c]=F[e],++c;a[l++]=(v+(m?.5:0))/n,a[l++]=h/e,0!==h&&v!==n&&(h!==e&&(i[f++]=u,i[f++]=u+1,i[f++]=u-n),1!==h&&(i[f++]=u,i[f++]=u-n,i[f++]=u-n-1)),u++}}return{position:o,normal:s,uv:a,faces:i}}function u(t=0){const e=5,n=Math.round(16*2**t),r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*(4*n));let c=0,l=0,f=0,u=0,h=0;for(let p=0;p<=e;p++){const t=0===p||p===e,r=p<=1||p>=e-1,m=2===p||4===p,w=t?n-1:n;for(let v=0;v<=w;v++){const g=v/w*2*Math.PI,A=t?0:.5;F[0]=A*Math.sin(g),F[1]=A*-Math.cos(g),F[2]=p<=2?.5:-.5;for(let t=0;t<3;t++)o[c++]=F[t],s[l++]=r?2===t?p<=1?1:-1:0:2===t?0:F[t]/A;a[f++]=(v+(t?.5:0))/n,a[f++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,m||0===p||v===n||(p!==e&&(i[u++]=h,i[u++]=h+1,i[u++]=h-n),1!==p&&(i[u++]=h,i[u++]=h-n,i[u++]=h-n-1)),h++}}return{position:o,normal:s,uv:a,faces:i}}function h(t,e){const n="number"==typeof e?e:null!=e?e.width:1,r="number"==typeof e?e:null!=e?e.height:1;switch(t){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function p(t){const e=g.facingAxisOrderSwap[t],n=g.position,r=g.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let a=0;for(let i=0;i<4;i++){const t=a;for(let i=0;i<3;i++){const c=e[i],l=Math.abs(c)-1,f=c>=0?1:-1;o[a]=n[t+l]*f,s[a]=r[t+l]*f,a++}}return{position:o,normal:s,uv:new Float32Array(g.uv),faces:new Uint32Array(g.faces)}}const m=1,w=2,v=3,g={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[v,m,w],west:[-v,-m,w],north:[-m,v,w],south:[m,-v,w],up:[m,w,v],down:[m,-w,-v]}};function A(t,e,n){y(t),x(t,n&&n.size);const{vertexAttributes:r,transform:o}=(0,_georeference_js__WEBPACK_IMPORTED_MODULE_6__.georeferenceByTransform)(t,e,n);return{vertexAttributes:new _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_5__.default({...r,uv:t.uv}),transform:o,components:[new _MeshComponent_js__WEBPACK_IMPORTED_MODULE_4__.default({faces:t.faces,material:n&&n.material||null})],spatialReference:e.spatialReference}}function y(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}function x(t,e){if(null==e)return;const o="number"==typeof e?[e,e,e]:[null!=e.width?e.width:1,null!=e.depth?e.depth:1,null!=e.height?e.height:1];O[0]=o[0],O[4]=o[1],O[8]=o[2];for(let r=0;r<t.position.length;r+=3){for(let e=0;e<3;e++)F[e]=t.position[r+e];(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.t)(F,F,O);for(let e=0;e<3;e++)t.position[r+e]=F[e]}if(o[0]!==o[1]||o[1]!==o[2]){O[0]=1/o[0],O[4]=1/o[1],O[8]=1/o[2];for(let e=0;e<t.normal.length;e+=3){for(let n=0;n<3;n++)F[n]=t.normal[e+n];(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.t)(F,F,O),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.n)(F,F);for(let n=0;n<3;n++)t.normal[e+n]=F[n]}}}const d={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},M={south:0,east:1,north:2,west:3,up:4,down:5},F=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),O=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)();


/***/ }),

/***/ 54287:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/rotate.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rotate": () => (/* binding */ C)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat3.js */ 72425);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/mat3f64.js */ 30641);
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/mat4.js */ 60411);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/mat4f64.js */ 25336);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/vec3.js */ 63702);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/vec3f64.js */ 33989);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../projection.js */ 15695);
/* harmony import */ var _projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../projectionEllipsoid.js */ 69843);
/* harmony import */ var _axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../axisAngleDegrees.js */ 23503);
/* harmony import */ var _geographicUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./geographicUtils.js */ 56605);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projection.js */ 23187);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const z=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__.default.getLogger("esri.geometry.support.meshUtils.rotate");function C(t,r,o){if(!t.vertexAttributes||!t.vertexAttributes.position||0===r[3])return;const i=t.spatialReference;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(t.transform)){var n;null!=(null==o?void 0:o.geographic)&&o.geographic!==t.transform.geographic&&z.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${t.transform.geographic}) is not supported`);const e=null!=(n=null==o?void 0:o.origin)?n:t.transform.getOriginPoint(i);I(t.transform,r,e)}else{var s;const e=null!=(s=null==o?void 0:o.origin)?s:t.origin;(0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_11__.isGeographicMesh)(t.spatialReference,o)?U(t,r,e):D(t,r,e)}}function I(t,e,r){const o=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__.s)(M,r.x,r.y,r.z),i=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__.f)(M,o,t.origin);t.applyLocalInverse(i,O),t.rotation=(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_10__.compose)(t.rotation,e,(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_10__.create)()),t.applyLocalInverse(i,i),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__.f)(i,i,O),t.translation=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__.b)((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.c)(),t.translation,i)}function U(t,r,i){const n=t.spatialReference,s=(0,_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_9__.getSphericalPCPF)(n),a=q;(0,_projection_js__WEBPACK_IMPORTED_MODULE_8__.projectPointToVector)(i,a,s)||(0,_projection_js__WEBPACK_IMPORTED_MODULE_8__.projectPointToVector)(t.origin,a,s);const c=t.vertexAttributes.position,f=t.vertexAttributes.normal,l=t.vertexAttributes.tangent,m=new Float64Array(c.length),g=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(f)?new Float32Array(f.length):null,u=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(l)?new Float32Array(l.length):null;(0,_projection_js__WEBPACK_IMPORTED_MODULE_8__.computeTranslationToOriginAndRotation)(s,a,S,s),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.f)(Z,S);const d=P;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__.t)((0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_10__.axis)(P),(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_10__.axis)(r),Z),d[3]=r[3],(0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.projectToPCPF)(c,n,m),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(f)&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.projectNormalToPCPF)(f,c,m,n,g),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(l)&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.projectTangentToPCPF)(l,c,m,n,u),E(m,d,3,a),(0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.projectFromPCPF)(m,c,n),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(f)&&(E(g,d,3),(0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.projectNormalFromPCPF)(g,c,m,n,f)),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(l)&&(E(u,d,4),(0,_projection_js__WEBPACK_IMPORTED_MODULE_12__.projectTangentFromPCPF)(u,c,m,n,l)),t.vertexAttributesChanged()}function D(t,e,r){const o=q;if(!(0,_projection_js__WEBPACK_IMPORTED_MODULE_8__.projectPointToVector)(r,o,t.spatialReference)){const e=t.origin;o[0]=e.x,o[1]=e.y,o[2]=e.z,z.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}).`)}E(t.vertexAttributes.position,e,3,o),E(t.vertexAttributes.normal,e,3),E(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}function E(t,e,o,i=_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.Z){if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(t)){(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__.i)(S),(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__.e)(S,S,(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_10__.angleRad)(e),(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_10__.axis)(e));for(let e=0;e<t.length;e+=o){for(let r=0;r<3;r++)M[r]=t[e+r]-i[r];(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_6__.m)(M,M,S);for(let r=0;r<3;r++)t[e+r]=M[r]+i[r]}}}const M=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.c)(),O=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.c)(),P=(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_10__.create)(),S=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__.c)(),Z=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),q=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.c)();


/***/ }),

/***/ 83645:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/scale.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scale": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/vec3.js */ 63702);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/vec3f64.js */ 33989);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projection.js */ 15695);
/* harmony import */ var _projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projectionEllipsoid.js */ 69843);
/* harmony import */ var _geographicUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geographicUtils.js */ 56605);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projection.js */ 23187);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__.default.getLogger("esri.geometry.support.meshUtils.scale");function j(e,r,o){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const i=e.spatialReference;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(e.transform)){var n;null!=(null==o?void 0:o.geographic)&&o.geographic!==e.transform.geographic&&d.warn(`Specifying the 'geographic' parameter (${o.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const t=null!=(n=null==o?void 0:o.origin)?n:e.transform.getOriginPoint(i);x(e.transform,r,t)}else{const t=(0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_6__.isGeographicMesh)(e.spatialReference,o),i=o&&o.origin||e.origin;t?A(e,r,i):b(e,r,i)}}function x(e,t,a){const c=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.s)(w,a.x,a.y,a.z),l=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(w,c,e.origin);e.applyLocalInverse(l,k);const p=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),e.scale,t);e.scale=p,e.applyLocalInverse(l,l),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(l,l,k),e.translation=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),e.translation,l)}function A(e,r,o){const i=e.spatialReference,n=(0,_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_5__.getSphericalPCPF)(i),s=R;(0,_projection_js__WEBPACK_IMPORTED_MODULE_4__.projectPointToVector)(o,s,n)||(0,_projection_js__WEBPACK_IMPORTED_MODULE_4__.projectPointToVector)(e.origin,s,n);const a=e.vertexAttributes.position,p=e.vertexAttributes.normal,d=e.vertexAttributes.tangent,j=new Float64Array(a.length),x=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(p)?new Float32Array(p.length):null,A=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(d)?new Float32Array(d.length):null;(0,_projection_js__WEBPACK_IMPORTED_MODULE_7__.projectToPCPF)(a,i,j),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(p)&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_7__.projectNormalToPCPF)(p,a,j,i,x),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(d)&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_7__.projectTangentToPCPF)(d,a,j,i,A),y(j,r,s),(0,_projection_js__WEBPACK_IMPORTED_MODULE_7__.projectFromPCPF)(j,a,i),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(p)&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_7__.projectNormalFromPCPF)(x,a,j,i,p),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(d)&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_7__.projectTangentFromPCPF)(A,a,j,i,d),e.vertexAttributesChanged()}function b(e,t,r){const o=R;if(!(0,_projection_js__WEBPACK_IMPORTED_MODULE_4__.projectPointToVector)(r,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,d.error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}y(e.vertexAttributes.position,t,o),e.vertexAttributesChanged()}function y(e,t,r=_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.Z){if(e)for(let o=0;o<e.length;o+=3){for(let t=0;t<3;t++)w[t]=e[o+t]-r[t];(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)(w,w,t);for(let t=0;t<3;t++)e[o+t]=w[t]+r[t]}}const w=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),k=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),R=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)();


/***/ }),

/***/ 24506:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/triangulationUtils.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pathsToTriangulationInfo": () => (/* binding */ l),
/* harmony export */   "triangulate": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _chunks_earcut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/earcut.js */ 2226);
/* harmony import */ var _coordsUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coordsUtils.js */ 57141);
/* harmony import */ var _meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meshUtils/deduplicate.js */ 25272);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(t){const o=l(t.rings,t.hasZ,1),s=[];let i=0,c=0;for(const e of o.polygons){const t=e.count,r=e.index,l=new Float64Array(o.position.buffer,3*r*o.position.BYTES_PER_ELEMENT,3*t),h=e.holeIndices.map((n=>n-r)),f=new Uint32Array((0,_chunks_earcut_js__WEBPACK_IMPORTED_MODULE_0__.e)(l,h,3));s.push({position:l,faces:f}),i+=l.length,c+=f.length}const h=r(s,i,c),f=(0,_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_2__.deduplicate)(h.position.buffer,6,{originalIndices:h.faces});return h.position=new Float64Array(f.buffer),h.faces=f.indices,h}function r(n,t,e){if(1===n.length)return n[0];const o=new Float64Array(t),r=new Uint32Array(e);let l=0,s=0,i=0;for(const c of n){for(let n=0;n<c.position.length;n++)o[l++]=c.position[n];for(let n=0;n<c.faces.length;n++)r[s++]=c.faces[n]+i;i=l/3}return{position:o,faces:r}}function l(n,t,e){const o=n.length,r=new Array(o),l=new Array(o),c=new Array(o);let h=0,f=0,g=0,a=0;for(let s=0;s<o;++s)a+=n[s].length;const u=new Float64Array(3*a);let p=0;for(let d=o-1;d>=0;d--){const a=n[d],y=1===e&&i(a);if(y&&1!==o)r[h++]=a;else{let n=a.length;for(let t=0;t<h;++t)n+=r[t].length;const e={index:p,pathLengths:new Array(h+1),count:n,holeIndices:new Array(h)};e.pathLengths[0]=a.length,a.length>0&&(c[g++]={index:p,count:a.length}),p=y?s(a,a.length-1,-1,u,p,a.length,t):s(a,0,1,u,p,a.length,t);for(let o=0;o<h;++o){const n=r[o];e.holeIndices[o]=p,e.pathLengths[o+1]=n.length,n.length>0&&(c[g++]={index:p,count:n.length}),p=s(n,0,1,u,p,n.length,t)}h=0,e.count>0&&(l[f++]=e)}}for(let i=0;i<h;++i){const n=r[i];n.length>0&&(c[g++]={index:p,count:n.length}),p=s(n,0,1,u,p,n.length,t)}return f<o&&(l.length=f),g<o&&(c.length=g),{position:u,polygons:l,outlines:c}}function s(n,t,e,o,r,l,s){r*=3;for(let i=0;i<l;++i){const l=n[t];o[r++]=l[0],o[r++]=l[1],o[r++]=s?l[2]:0,t+=e}return r/3}function i(n){return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_1__.isClockwise)(n,!1,!1)}


/***/ }),

/***/ 46079:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/meshFeatureSet.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "meshFeatureSetFromJSON": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Graphic.js */ 99326);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_Mesh_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/Mesh.js */ 49919);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/* harmony import */ var _geometry_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/support/axisAngleDegrees.js */ 23503);
/* harmony import */ var _geometry_support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/support/MeshTransform.js */ 27144);
/* harmony import */ var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FeatureSet.js */ 42762);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(s,o,n){const a=n.features;n.features=[],delete n.geometryType;const i=_FeatureSet_js__WEBPACK_IMPORTED_MODULE_7__.default.fromJSON(n);i.geometryType="mesh";const l=i.spatialReference,f=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(s.outFields)||!s.outFields.length?()=>({}):m(s.outFields.includes("*")?null:new Set(s.outFields));for(const e of a){const s=c(e,l,o);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(s)&&i.features.push(new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__.default({geometry:s,attributes:f(e)}))}return i}function m(t){return({attributes:e})=>{if(!e)return{};if(!t)return e;for(const r in e)t.has(r)||delete e[r];return e}}function c(t,e,r){const{status:n,source:a}=g(t);if(0===n)return null;const i=f(t,e,r),u=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__.default.fromJSON(t.geometry);u.spatialReference=e;const l=p(t,r);return 1===n?_geometry_Mesh_js__WEBPACK_IMPORTED_MODULE_3__.default.createIncomplete(i,{extent:u,transform:l}):_geometry_Mesh_js__WEBPACK_IMPORTED_MODULE_3__.default.createWithExternalSource(i,a,{extent:u,transform:l})}function f({attributes:t},e,{transformFieldRoles:r}){return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_4__.default({x:t[r.originX],y:t[r.originY],z:t[r.originZ],spatialReference:e})}function p({attributes:t,assetMappings:e},{transformFieldRoles:r}){var s;return new _geometry_support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_6__.default({translation:[t[r.translationX],t[r.translationY],t[r.translationZ]],rotation:(0,_geometry_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_5__.fromAxisAndAngle)([t[r.rotationX],t[r.rotationY],t[r.rotationZ]],t[r.rotationDeg]),scale:[t[r.scaleX],t[r.scaleY],t[r.scaleZ]],geographic:!(null!=(s=e.flags)&&s.includes("PROJECT_VERTICES"))})}function g(t){if(!t.assetMappings)return{status:0};const e=[],r=new Map;for(const s of t.assetMappings){const t=s.seqNo,o=s.assetName,n=s.assetURL,a=s.conversionStatus;if("FAILED"===a)return{status:0};if("COMPLETED"!==a)return{status:1};if(null==t)e.push({name:o,source:n});else{const s=r.get(o);let a;s?a=s.multipart:(a=[],e.push({name:o,source:{multipart:a}}),r.set(o,{multipart:a})),a[t]=n}}return{status:2,source:e}}


/***/ })

}]);
//# sourceMappingURL=6079.1c30dfcceb34d279437d.js.map