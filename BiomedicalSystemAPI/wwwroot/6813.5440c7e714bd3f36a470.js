"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[6813],{

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

/***/ 78177:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMSymbolRasterizer.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CIMSymbolRasterizer": () => (/* binding */ z),
/* harmony export */   "GeometryStyle": () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ 28503);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/screenUtils.js */ 75244);
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/string.js */ 13778);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cimAnalyzer.js */ 77600);
/* harmony import */ var _CIMResourceManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CIMResourceManager.js */ 64345);
/* harmony import */ var _Rasterizer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Rasterizer.js */ 20655);
/* harmony import */ var _TextRasterizer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TextRasterizer.js */ 16120);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils.js */ 56314);
/* harmony import */ var _support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../support/cimSymbolUtils.js */ 80048);
/* harmony import */ var _support_Symbol3DAnchorPosition2D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/Symbol3DAnchorPosition2D.js */ 35716);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/













var M;
!function (e) {
  e.Legend = "legend", e.Preview = "preview";
}(M || (M = {}));

const C = (e, t, r) => {
  if (e && e.targetSize) {
    let i;

    if (r) {
      const t = Math.max(r.frame.xmax - r.frame.xmin, r.frame.ymax - r.frame.ymin);
      i = e.targetSize / (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(t);
    } else i = e.targetSize / t.referenceSize;

    return i;
  }

  return e && e.scaleFactor ? e.scaleFactor : 1;
},
      I = {
  fill: {
    legend: {
      frame: {
        xmax: 15,
        xmin: 0,
        ymax: 15,
        ymin: 0
      },
      geometry: {
        rings: [[[0, 15], [15, 7.5], [15, 0], [0, 0], [0, 15]]]
      },
      canvasPaths: {
        rings: [[[0, 15], [0, 0], [15, 7.5], [15, 15], [0, 15]]]
      }
    },
    preview: {
      frame: {
        xmax: 100,
        xmin: 0,
        ymax: 100,
        ymin: 0
      },
      geometry: {
        rings: [[[0, 100], [100, 100], [100, 0], [0, 0], [0, 100]]]
      },
      canvasPaths: {
        rings: [[[0, 100], [0, 0], [100, 0], [100, 100], [0, 100]]]
      }
    }
  },
  stroke: {
    legend: {
      frame: {
        xmax: 24,
        xmin: 0,
        ymax: 2,
        ymin: -2
      },
      geometry: {
        paths: [[[0, 0], [12, 0], [24, 0]]]
      },
      canvasPaths: {
        paths: [[[0, 2], [12, 2], [24, 2]]]
      }
    },
    preview: {
      frame: {
        xmax: 100,
        xmin: 0,
        ymax: 2,
        ymin: -2
      },
      geometry: {
        paths: [[[0, 0], [50, 0], [100, 0]]]
      },
      canvasPaths: {
        paths: [[[0, 2], [50, 2], [100, 2]]]
      }
    }
  }
};

class z {
  constructor(e, t) {
    this._spatialReference = e, this._avoidSDF = t, this._resourceCache = new Map(), this._pictureMarkerCache = new Map(), this._textRasterizer = new _TextRasterizer_js__WEBPACK_IMPORTED_MODULE_10__.TextRasterizer(), this._cimResourceManager = new _CIMResourceManager_js__WEBPACK_IMPORTED_MODULE_8__.default(), this._rasterizer = new _Rasterizer_js__WEBPACK_IMPORTED_MODULE_9__.default(this._cimResourceManager);
  }

  rasterizeCIMSymbolAsync(e, t, r, a, i, o, n, c) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      a = a || (t ? null != t.centroid ? "esriGeometryPolygon" : (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__.getJsonType)(t.geometry) : null) || P(e);
      const l = yield _this.analyzeCIMSymbol(e, t ? x(t.attributes) : null, r, a, c);
      return _this.rasterizeCIMSymbol(l, t, a, i, o, n);
    })();
  }

  analyzeCIMSymbol(e, t, a, i, s) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const o = [],
            n = t ? {
        geometryType: i,
        spatialReference: _this2._spatialReference,
        fields: t
      } : null;
      let l;
      yield (0,_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_7__.analyzeCIMSymbol)(e.data, n, _this2._cimResourceManager, o, _this2._avoidSDF), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(s);

      for (const r of o) "CIMPictureMarker" !== r.cim.type && "CIMPictureFill" !== r.cim.type && "CIMPictureStroke" !== r.cim.type || (l || (l = []), l.push(_this2.fetchPictureMarkerResource(r, s))), a && "text" === r.type && "string" == typeof r.text && r.text.indexOf("[") > -1 && (r.text = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.createLabelOverrideFunction)(a, r.text, r.cim.textCase));

      return l && (yield Promise.all(l)), o;
    })();
  }

  fetchPictureMarkerResource(e, r) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const a = e.materialHash;

      if (!_this3._pictureMarkerCache.get(a)) {
        const i = (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(e.cim.url, {
          responseType: "image",
          signal: r && r.signal
        })).data;

        _this3._pictureMarkerCache.set(a, i);
      }
    })();
  }

  rasterizeCIMSymbol(e, t, r, a, i, s) {
    const o = [];

    for (const n of e) {
      a && "function" == typeof a.scaleFactor && (a.scaleFactor = a.scaleFactor(t, i, s));

      const e = this._getRasterizedResource(n, t, r, a, i, s);

      if (!e) continue;
      let c = 0,
          l = e.anchorX || 0,
          m = e.anchorY || 0,
          h = !1,
          f = 0,
          g = 0;

      if ("esriGeometryPoint" === r) {
        const e = C(a, n, null);
        if (f = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(n.offsetX, t, i, s) * e || 0, g = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(n.offsetY, t, i, s) * e || 0, "marker" === n.type) c = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(n.rotation, t, i, s) || 0, h = !!n.rotateClockwise && n.rotateClockwise;else if ("text" === n.type) {
          if (c = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(n.angle, t, i, s) || 0, void 0 !== n.horizontalAlignment) switch (n.horizontalAlignment) {
            case "left":
              l = -.5;
              break;

            case "right":
              l = .5;
              break;

            default:
              l = 0;
          }
          if (void 0 !== n.verticalAlignment) switch (n.verticalAlignment) {
            case "top":
              m = .5;
              break;

            case "bottom":
              m = -.5;
              break;

            case "baseline":
              m = -.25;
              break;

            default:
              m = 0;
          }
        }
      }

      null != e && o.push({
        angle: c,
        rotateClockWise: h,
        anchorX: l,
        anchorY: m,
        offsetX: f,
        offsetY: g,
        rasterizedResource: e
      });
    }

    return this.getSymbolImage(o);
  }

  getSymbolImage(e) {
    const t = document.createElement("canvas"),
          r = t.getContext("2d");
    let i = 0,
        s = 0,
        o = 0,
        n = 0;
    const c = [];

    for (let f = 0; f < e.length; f++) {
      const t = e[f],
            l = t.rasterizedResource;
      if (!l) continue;
      const m = l.size,
            h = t.offsetX,
            g = t.offsetY,
            y = t.anchorX,
            u = t.anchorY,
            p = t.rotateClockWise || !1;
      let d = t.angle,
          M = (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(h) - m[0] * (.5 + y),
          C = (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(g) - m[1] * (.5 + u),
          I = M + m[0],
          z = C + m[1];

      if (d) {
        p && (d = -d);
        const e = Math.sin(d * Math.PI / 180),
              t = Math.cos(d * Math.PI / 180),
              r = M * t - C * e,
              a = M * e + C * t,
              i = M * t - z * e,
              s = M * e + z * t,
              o = I * t - z * e,
              n = I * e + z * t,
              c = I * t - C * e,
              l = I * e + C * t;
        M = Math.min(r, i, o, c), C = Math.min(a, s, n, l), I = Math.max(r, i, o, c), z = Math.max(a, s, n, l);
      }

      i = M < i ? M : i, s = C < s ? C : s, o = I > o ? I : o, n = z > n ? z : n;
      const x = r.createImageData(l.size[0], l.size[1]);
      x.data.set(new Uint8ClampedArray(l.image.buffer));
      const P = {
        offsetX: h,
        offsetY: g,
        rotateClockwise: p,
        angle: d,
        rasterizedImage: x,
        anchorX: y,
        anchorY: u
      };
      c.push(P);
    }

    t.width = o - i, t.height = n - s;
    const l = -i,
          m = n;

    for (let f = 0; f < c.length; f++) {
      const e = c[f],
            t = this._imageDataToCanvas(e.rasterizedImage),
            i = e.rasterizedImage.width,
            s = e.rasterizedImage.height,
            o = l - i * (.5 + e.anchorX),
            n = m - s * (.5 - e.anchorY);

      if (e.angle) {
        const i = (360 - e.angle) * Math.PI / 180;
        r.save(), r.translate((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(e.offsetX), -(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(e.offsetY)), r.translate(l, m), r.rotate(i), r.translate(-l, -m), r.drawImage(t, o, n), r.restore();
      } else r.drawImage(t, o + (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(e.offsetX), n - (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(e.offsetY));
    }

    const h = new _support_Symbol3DAnchorPosition2D_js__WEBPACK_IMPORTED_MODULE_13__.default({
      x: l / t.width - .5,
      y: m / t.height - .5
    });
    return {
      imageData: 0 !== t.width && 0 !== t.height ? r.getImageData(0, 0, t.width, t.height) : r.createImageData(1, 1),
      anchorPosition: h
    };
  }

  _imageDataToCanvas(e) {
    this._imageDataCanvas || (this._imageDataCanvas = document.createElement("canvas"));
    const t = this._imageDataCanvas,
          r = t.getContext("2d");
    return t.width = e.width, t.height = e.height, r.putImageData(e, 0, 0), t;
  }

  _imageTo32Array(t, r, a, i) {
    this._imageDataCanvas || (this._imageDataCanvas = document.createElement("canvas"));
    const s = this._imageDataCanvas,
          o = s.getContext("2d");

    if (s.width = r, s.height = a, o.drawImage(t, 0, 0, r, a), i) {
      o.save();
      const s = new _Color_js__WEBPACK_IMPORTED_MODULE_1__.default(i);
      o.fillStyle = s.toHex(), o.globalCompositeOperation = "multiply", o.fillRect(0, 0, r, a), o.globalCompositeOperation = "destination-atop", o.drawImage(t, 0, 0, r, a), o.restore();
    }

    return new Uint32Array(o.getImageData(0, 0, r, a).data.buffer);
  }

  _getRasterizedResource(e, t, r, a, s, o) {
    let n,
        c,
        l,
        m,
        h = null,
        f = null;

    if ("esriGeometryPolyline" === r || "esriGeometryPolygon" === r) {
      const m = a && a.style ? a.style : M.Legend,
            g = "esriGeometryPolyline" === r ? I.stroke[m] : I.fill[m];

      if ("line" === e.type) {
        if ("CIMSolidStroke" !== e.cim.type) {
          if ("CIMPictureStroke" === e.cim.type) {
            const r = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.width, t, s, o),
                  a = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.color, t, s, o),
                  {
              image: i,
              width: n,
              height: c
            } = this._getPictureResource(e, r, a);

            return this._rasterizePictureResource(e, i, n, c, g, r);
          }

          return null;
        }

        ({
          analyzedCIM: n,
          hash: l
        } = w(e, t, s, o)), c = this._embedCIMLayerInVectorMarker(n, g);
      } else if ("marker" === e.type) {
        if ("CIMPictureMarker" === e.cim.type) return null;
        if ("CIMVectorMarker" !== e.cim.type) return null;
        e.cim.offsetX = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.offsetX, t, s, o), e.cim.offsetY = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.offsetY, t, s, o), e.cim.rotation = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.rotation, t, s, o), e.cim.markerPlacement = e.markerPlacement, ({
          analyzedCIM: n
        } = w(e, t, s, o)), l = (0,_core_string_js__WEBPACK_IMPORTED_MODULE_5__.numericHash)(JSON.stringify(n)).toString(), c = this._embedCIMLayerInVectorMarker(n, g), h = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.size, t, s, o), f = e.path;
      } else {
        if ("text" === e.type) return null;

        if ("fill" === e.type) {
          if ("CIMHatchFill" === e.cim.type || "CIMVectorMarker" === e.cim.type || "CIMPictureMarker" === e.cim.type || "CIMPictureFill" === e.cim.type) {
            const r = e.cim.size || e.cim.height;
            let a, i, c;
            if ("CIMPictureMarker" === e.cim.type || "CIMPictureFill" === e.cim.type) ({
              image: a,
              width: i,
              height: c
            } = this._getPictureResource(e, r, (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.color, t, s, o)));else {
              ({
                analyzedCIM: n,
                hash: l
              } = w(e, t, s, o));

              const m = this._rasterizer.rasterizeJSONResource({
                cim: n,
                type: e.type,
                url: e.url,
                mosaicHash: l,
                size: r,
                path: f
              }, 1, this._avoidSDF);

              a = m.image, i = m.size[0], c = m.size[1];
            }
            return this._rasterizePictureResource(e, a, i, c, g, null);
          }

          if ("CIMSolidFill" !== e.cim.type) return null;
          ({
            analyzedCIM: n,
            hash: l
          } = w(e, t, s, o)), c = this._embedCIMLayerInVectorMarker(n, g);
        }
      }
    } else {
      if ("text" === e.type) return m = this._rasterizeTextResource(e, t, a, s, o), m;
      ({
        analyzedCIM: n,
        hash: l
      } = w(e, t, s, o));
      const r = C(a, e, null);

      if ("CIMPictureMarker" === e.cim.type) {
        const a = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.size, t, s, o) * r,
              {
          image: i,
          width: n,
          height: c
        } = this._getPictureResource(e, a, (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.color, t, s, o));

        return m = {
          image: i,
          size: [n, c],
          sdf: !1,
          simplePattern: !1,
          anchorX: e.anchorPoint ? e.anchorPoint.x : 0,
          anchorY: e.anchorPoint ? e.anchorPoint.y : 0
        }, m;
      }

      (0,_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_12__.scaleCIMMarker)(n, r, {
        preserveOutlineWidth: !1
      }), c = n;
    }

    l += r, a && (l += JSON.stringify(a));
    const g = this._resourceCache;
    return g.has(l) ? g.get(l) : (m = this._rasterizer.rasterizeJSONResource({
      cim: c,
      type: e.type,
      url: e.url,
      mosaicHash: l,
      size: h,
      path: f
    }, window.devicePixelRatio || 1, this._avoidSDF), g.set(l, m), m);
  }

  _rasterizeTextResource(e, t, r, a, i) {
    const s = C(r, e, null),
          o = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.text, t, a, i);
    if (!o || 0 === o.length) return null;
    const n = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.fontName, t, a, i),
          c = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.style, t, a, i),
          l = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.weight, t, a, i),
          m = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.decoration, t, a, i),
          h = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.size, t, a, i) * s,
          f = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.horizontalAlignment, t, a, i),
          g = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.verticalAlignment, t, a, i),
          p = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.colorToArray)((0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.color, t, a, i)),
          d = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.colorToArray)((0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.outlineColor, t, a, i)),
          M = {
      color: p,
      size: h,
      horizontalAlignment: f,
      verticalAlignment: g,
      font: {
        family: n,
        style: c,
        weight: l,
        decoration: m
      },
      halo: {
        size: (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.evaluateValueOrFunction)(e.outlineSize, t, a, i) || 0,
        color: d,
        style: c
      },
      pixelRatio: 1,
      premultiplyColors: !this._avoidSDF
    };
    return this._textRasterizer.rasterizeText(o, M);
  }

  _rasterizePictureResource(e, t, r, i, s, c) {
    const l = document.createElement("canvas"),
          m = l.getContext("2d");
    l.height = (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(Math.max(s.frame.ymax - s.frame.ymin, c)), l.width = (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(s.frame.xmax - s.frame.xmin);
    const h = m.createImageData(r, i);
    h.data.set(new Uint8ClampedArray(t.buffer));

    const f = this._imageDataToCanvas(h),
          g = m.createPattern(f, "repeat"),
          y = Math.cos((-e.cim.rotation || 0) * Math.PI / 180),
          u = Math.sin((-e.cim.rotation || 0) * Math.PI / 180);

    g.setTransform({
      m11: y,
      m12: u,
      m21: -u,
      m22: y,
      m41: (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(e.cim.offsetX) || 0,
      m42: (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(e.cim.offsetY) || 0
    });
    const p = s.canvasPaths;
    let d, M, C;
    (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__.isPolygon)(p) ? (d = p.rings, m.fillStyle = g, M = m.fill, C = ["evenodd"]) : (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__.isPolyline)(p) && (d = p.paths, m.strokeStyle = g, m.lineWidth = c, M = m.stroke, d[0][0][1] = l.height / 2, d[0][1][1] = l.height / 2), m.beginPath();

    for (const o of d) {
      const e = o ? o.length : 0;

      if (e > 1) {
        let t = o[0];
        m.moveTo((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(t[0]), (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(t[1]));

        for (let r = 1; r < e; ++r) t = o[r], m.lineTo((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(t[0]), (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(t[1]));

        m.closePath();
      }
    }

    M.apply(m, C);
    const I = m.getImageData(0, 0, l.width, l.height),
          z = new Uint8Array(I.data);
    return {
      size: [l.width, l.height],
      image: new Uint32Array(z.buffer),
      sdf: !1,
      simplePattern: !1,
      anchorX: 0,
      anchorY: 0
    };
  }

  _getPictureResource(e, t, r) {
    const i = this._pictureMarkerCache.get(e.materialHash);

    if (!i) return null;
    const s = i.height / i.width,
          o = t ? s > 1 ? (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(t) : (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(t) / s : i.width,
          n = t ? s > 1 ? (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(t) * s : (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.pt2px)(t) : i.height;
    return {
      image: this._imageTo32Array(i, o, n, r),
      width: o,
      height: n
    };
  }

  _embedCIMLayerInVectorMarker(e, t) {
    const r = (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__.isPolygon)(t.geometry) ? "CIMPolygonSymbol" : "CIMLineSymbol",
          a = t.frame;
    return {
      type: "CIMVectorMarker",
      frame: a,
      size: a.ymax - a.ymin,
      markerGraphics: [{
        type: "CIMMarkerGraphic",
        geometry: t.geometry,
        symbol: {
          type: r,
          symbolLayers: [e]
        }
      }]
    };
  }

}

function x(e) {
  return (e ? Object.keys(e) : []).map(t => ({
    name: t,
    alias: t,
    type: "string" == typeof e[t] ? "esriFieldTypeString" : "esriFieldTypeDouble"
  }));
}

function P(e) {
  if (!(e && e.data && e.data.symbol)) return null;

  switch (e.data.symbol.type) {
    case "CIMPointSymbol":
    case "CIMTextSymbol":
      return "esriGeometryPoint";

    case "CIMLineSymbol":
      return "esriGeometryPolyline";

    case "CIMPolygonSymbol":
      return "esriGeometryPolygon";

    default:
      return null;
  }
}

function w(e, t, r, a) {
  let i, s;

  if ("function" == typeof e.materialHash) {
    i = (0, e.materialHash)(t, r, a), s = (0,_cimAnalyzer_js__WEBPACK_IMPORTED_MODULE_7__.analyzeCIMResource)(e.cim, e.materialOverrides);
  } else i = e.materialHash, s = e.cim;

  return {
    analyzedCIM: s,
    hash: i
  };
}



/***/ }),

/***/ 64576:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/previewCIMSymbol.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "previewCIMSymbol": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/screenUtils.js */ 75244);
/* harmony import */ var _cim_CIMSymbolRasterizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cim/CIMSymbolRasterizer.js */ 78177);
/* harmony import */ var _cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cimSymbolUtils.js */ 80048);
/* harmony import */ var _renderUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderUtils.js */ 70772);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




const o = new _cim_CIMSymbolRasterizer_js__WEBPACK_IMPORTED_MODULE_2__.CIMSymbolRasterizer(null, !0),
      n = 120;

function s(_x) {
  return _s.apply(this, arguments);
}

function _s() {
  _s = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, s = {}) {
    const {
      size: c,
      maxSize: r,
      node: m,
      opacity: f
    } = s,
          h = s.cimOptions || s,
          {
      feature: y,
      fieldMap: d,
      geometryType: p,
      style: u
    } = h,
          g = (0,_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_3__.getCIMSymbolSize)(t),
          w = Math.min(null != c ? c : g, null != r ? r : (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.px2pt)(n));
    w !== g && (t = t.clone(), (0,_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_3__.scaleCIMSymbolTo)(t, w, {
      preserveOutlineWidth: !0
    }));
    let M = 3;
    t && t.data && t.data.symbol && "CIMPointSymbol" !== t.data.symbol.type && (M = 1);
    const b = yield o.rasterizeCIMSymbolAsync(t, y, d, p, {
      scaleFactor: M,
      style: u
    }),
          C = document.createElement("canvas");
    C.width = b.imageData.width, C.height = b.imageData.height;
    C.getContext("2d").putImageData(b.imageData, 0, 0);
    let D = C.width / M,
        I = C.height / M;

    if (null != c && (null == (null == s ? void 0 : s.scale) || (null == s ? void 0 : s.scale))) {
      const e = D / I;
      D = e <= 1 ? Math.ceil(w * e) : w, I = e <= 1 ? w : Math.ceil(w / e);
    }

    const S = new Image(D, I);
    S.src = C.toDataURL(), null != f && (S.style.opacity = `${f}`);
    let j = S;

    if (null != s.effectView) {
      const e = {
        shape: {
          type: "image",
          x: 0,
          y: 0,
          width: D,
          height: I,
          src: S.src
        },
        fill: null,
        stroke: null,
        offset: [0, 0]
      };
      j = (0,_renderUtils_js__WEBPACK_IMPORTED_MODULE_4__.renderSymbol)([[e]], [D, I], {
        effectView: s.effectView
      });
    }

    return m && m.appendChild(j), j;
  });
  return _s.apply(this, arguments);
}



/***/ }),

/***/ 30603:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANGLE_FACTOR_256": () => (/* binding */ d),
/* harmony export */   "ATTRIBUTE_DATA_ANIMATION": () => (/* binding */ J),
/* harmony export */   "ATTRIBUTE_DATA_DD0": () => (/* binding */ L),
/* harmony export */   "ATTRIBUTE_DATA_DD1": () => (/* binding */ M),
/* harmony export */   "ATTRIBUTE_DATA_FILTER_FLAGS": () => (/* binding */ I),
/* harmony export */   "ATTRIBUTE_DATA_VV": () => (/* binding */ K),
/* harmony export */   "ATTRIBUTE_STORE_TEXTURE_SIZE": () => (/* binding */ q),
/* harmony export */   "AVERAGE_GLYPH_MOSAIC_ITEM": () => (/* binding */ k),
/* harmony export */   "BITSET_GENERIC_LOCK_COLOR": () => (/* binding */ ct),
/* harmony export */   "BITSET_LINE_SCALE_DASH": () => (/* binding */ dt),
/* harmony export */   "BITSET_MARKER_ALIGNMENT_MAP": () => (/* binding */ it),
/* harmony export */   "BITSET_MARKER_ALIGNMENT_SCREEN": () => (/* binding */ ht),
/* harmony export */   "BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE": () => (/* binding */ ot),
/* harmony export */   "BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY": () => (/* binding */ at),
/* harmony export */   "BITSET_TYPE_FILL_OUTLINE": () => (/* binding */ nt),
/* harmony export */   "BUFFER_DATA_MINIMUM_SIZE": () => (/* binding */ tt),
/* harmony export */   "BUFFER_DATA_POOL_SIZE": () => (/* binding */ _),
/* harmony export */   "COLLISION_BOX_PADDING": () => (/* binding */ l),
/* harmony export */   "COLLISION_BUCKET_SIZE": () => (/* binding */ p),
/* harmony export */   "COLLISION_EARLY_REJECT_BUCKET_SIZE": () => (/* binding */ g),
/* harmony export */   "COLLISION_MAX_ZOOM_DELTA": () => (/* binding */ f),
/* harmony export */   "COLLISION_PLACEMENT_PADDING": () => (/* binding */ v),
/* harmony export */   "COLLISION_TILE_BOX_SIZE": () => (/* binding */ m),
/* harmony export */   "DEBUG_LABELS": () => (/* binding */ n),
/* harmony export */   "DISPLAY_RECORD_INT_PER_ELEMENT": () => (/* binding */ Z),
/* harmony export */   "DOT_DENSITY_MAX_FIELDS": () => (/* binding */ r),
/* harmony export */   "EFFECT_FLAG_0": () => (/* binding */ Q),
/* harmony export */   "ENABLE_EARLY_LABEL_DISCARD": () => (/* binding */ R),
/* harmony export */   "EXTRUDE_SCALE": () => (/* binding */ h),
/* harmony export */   "FILTER_FLAG_0": () => (/* binding */ P),
/* harmony export */   "GLYPH_SIZE": () => (/* binding */ b),
/* harmony export */   "HEURISTIC_GLYPHS_PER_FEATURE": () => (/* binding */ x),
/* harmony export */   "HEURISTIC_GLYPHS_PER_LINE": () => (/* binding */ w),
/* harmony export */   "HIGHLIGHT_FLAG": () => (/* binding */ O),
/* harmony export */   "HITTEST_SEARCH_SIZE": () => (/* binding */ T),
/* harmony export */   "MAGIC_LABEL_LINE_HEIGHT": () => (/* binding */ s),
/* harmony export */   "MAX_FILTERS": () => (/* binding */ N),
/* harmony export */   "MAX_GPU_UPLOADS_PER_FRAME": () => (/* binding */ X),
/* harmony export */   "MIN_MAX_ZOOM_PRECISION_FACTOR": () => (/* binding */ et),
/* harmony export */   "NAN_MAGIC_NUMBER": () => (/* binding */ c),
/* harmony export */   "PATCH_PIXEL_BUFFER_ALLOC_SIZE": () => (/* binding */ $),
/* harmony export */   "PICTURE_FILL_COLOR": () => (/* binding */ i),
/* harmony export */   "RASTER_TILE_SIZE": () => (/* binding */ a),
/* harmony export */   "SPRITE_PADDING": () => (/* binding */ Y),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_0": () => (/* binding */ A),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_1": () => (/* binding */ B),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_2": () => (/* binding */ C),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_3": () => (/* binding */ D),
/* harmony export */   "TEXTURE_BINDING_BITMAP": () => (/* binding */ z),
/* harmony export */   "TEXTURE_BINDING_GLYPH_ATLAS": () => (/* binding */ y),
/* harmony export */   "TEXTURE_BINDING_HIGHLIGHT_0": () => (/* binding */ E),
/* harmony export */   "TEXTURE_BINDING_HIGHLIGHT_1": () => (/* binding */ F),
/* harmony export */   "TEXTURE_BINDING_RENDERER_0": () => (/* binding */ G),
/* harmony export */   "TEXTURE_BINDING_RENDERER_1": () => (/* binding */ H),
/* harmony export */   "TEXTURE_BINDING_SPRITE_ATLAS": () => (/* binding */ u),
/* harmony export */   "TEXT_PLACEMENT_PADDING": () => (/* binding */ j),
/* harmony export */   "THIN_LINE_HALF_WIDTH_THRESHOLD": () => (/* binding */ S),
/* harmony export */   "TILE_SIZE": () => (/* binding */ o),
/* harmony export */   "VTL_HIGH_RES_CUTOFF": () => (/* binding */ W),
/* harmony export */   "VTL_TEXTURE_BINDING_UNIT_GLYPHS": () => (/* binding */ V),
/* harmony export */   "VTL_TEXTURE_BINDING_UNIT_SPRITES": () => (/* binding */ U),
/* harmony export */   "WEBGL_MAX_INNER_STOPS": () => (/* binding */ e),
/* harmony export */   "WEBGL_MAX_STOPS": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=8,e=t-2,c=1e-30,h=64,i=4294967295,o=512,a=256,d=256/360,n=!1,p=128,r=8,s=29,f=1,g=16,l=16,m=o/p,v=8,w=50,x=10,b=24,j=8,k={metrics:{width:15,height:17,left:0,top:-7,advance:14}},q=1024,u=0,y=0,z=0,A=1,B=2,C=3,D=4,E=5,F=6,G=5,H=6,I=0,J=1,K=2,L=3,M=3,N=2,O=1,P=2,Q=4,R=!1,S=1.05,T=6,U=5,V=6,W=1.15,X=2,Y=2,Z=8,$=500,_=4,tt=128,et=10,ct=2,ht=0,it=1,ot=4,at=8,dt=4,nt=1;


/***/ }),

/***/ 97062:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/number.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i16": () => (/* binding */ e),
/* harmony export */   "i1616to32": () => (/* binding */ w),
/* harmony export */   "i32": () => (/* binding */ o),
/* harmony export */   "i8": () => (/* binding */ u),
/* harmony export */   "i8816to32": () => (/* binding */ y),
/* harmony export */   "i8888to32": () => (/* binding */ x),
/* harmony export */   "numTo32": () => (/* binding */ A),
/* harmony export */   "toFloat32": () => (/* binding */ h),
/* harmony export */   "toUint32": () => (/* binding */ a),
/* harmony export */   "u16": () => (/* binding */ i),
/* harmony export */   "u32": () => (/* binding */ c),
/* harmony export */   "u32to4Xu8": () => (/* binding */ M),
/* harmony export */   "u4u4to8": () => (/* binding */ m),
/* harmony export */   "u8": () => (/* binding */ f)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=new Float32Array(1),r=new Uint32Array(n.buffer);function t(n,r,t){return Math.round(Math.max(Math.min(n,t),r))}function u(n){return t(n,-128,127)}function e(n){return t(n,-32768,32767)}function o(n){return t(n,-2147483648,2147483647)}function f(n){return t(n,0,255)}function i(n){return t(n,0,65535)}function c(n){return t(n,0,4294967295)}function a(t){return n[0]=t,r[0]}function h(t){return r[0]=t,n[0]}function M(n){return[255&n,(65280&n)>>>8,(16711680&n)>>>16,(4278190080&n)>>>24]}function m(n,r){return 15&n|(15&r)<<4}function w(n,r){return 65535&n|r<<16}function x(n,r,t,u){return 255&n|(255&r)<<8|(255&t)<<16|u<<24}function y(n,r,t){return 255&n|(255&r)<<8|t<<16}function A(n){return 0|n}


/***/ })

}]);
//# sourceMappingURL=6813.5440c7e714bd3f36a470.js.map