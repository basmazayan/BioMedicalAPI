"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[6830],{

/***/ 44946:
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Bitmap.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bitmap": () => (/* binding */ g),
/* harmony export */   "isImageSource": () => (/* binding */ c),
/* harmony export */   "rasterize": () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat3.js */ 72425);
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ 87266);
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/vec2f32.js */ 74181);
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayObject.js */ 17821);
/* harmony import */ var _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageryBitmapSource.js */ 89001);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webgl/Texture.js */ 36079);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(t){return t&&"render"in t}function l(t){return t&&!("render"in t)}function x(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function _(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__.default(t,s)}class g extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__.DisplayObject{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__.c)()}}setTransform(t){const n=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.transforms.dvs),[o,a]=t.toScreenNoRotation([0,0],[this.x,this.y]),d=this.resolution/this.pixelRatio/t.resolution,c=d*this.width,l=d*this.height,x=Math.PI*this.rotation/180;(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.c)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__.f)(o,a)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.c)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__.f)(c/2,l/2)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.r)(n,n,-x),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.c)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__.f)(-c/2,-l/2)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.j)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__.f)(c,l)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.m)(this.transforms.dvs,t.displayViewMat3,n)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}updateTexture(e){var i;if(!this.stage)return null==(i=this._texture)||i.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=_(e,this.sourceWidth,this.sourceHeight):this._texture=_(e));const s=this.source;if(s){if(this._texture.resize(this.sourceWidth,this.sourceHeight),c(s))if(s instanceof _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_5__.default){const e=s.getRenderedRasterPixels();this._texture.setData((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(e)?e.renderedRasterPixels:null)}else this._texture.setData(x(s));else l(s)&&this._texture.setData(s);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}


/***/ }),

/***/ 23335:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BitmapContainer": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brushes.js */ 27274);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl/enums.js */ 31620);
/* harmony import */ var _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/WGLContainer.js */ 17702);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__.default{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[_brushes_js__WEBPACK_IMPORTED_MODULE_0__.brushes.bitmap],target:()=>this.children,drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLDrawPhase.MAP});return[...super.prepareRenderPasses(s),t]}}


/***/ }),

/***/ 89001:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const i=this.pixelBlock;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(i))return;const l=this.filter({pixelBlock:i});if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(l.pixelBlock))return;const r=l.pixelBlock.getAsRGBA(),o=e.createImageData(l.pixelBlock.width,l.pixelBlock.height);o.data.set(r),e.putImageData(o,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}


/***/ }),

/***/ 73004:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Accessor.js */ 98240);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ 7401);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ 87940);
/* harmony import */ var _viewStateUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../viewStateUtils.js */ 90836);
/* harmony import */ var _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../engine/Bitmap.js */ 44946);
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../tiling/TileInfoView.js */ 58902);
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../tiling/TileKey.js */ 5507);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
















const u = (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.create)(),
      g = [0, 0],
      f = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_16__.default(0, 0, 0, 0),
      x = {
  container: null,
  fetchSource: null,
  requestUpdate: null,
  imageMaxWidth: 2048,
  imageMaxHeight: 2048,
  imageRotationSupported: !1,
  imageNormalizationSupported: !1,
  hidpi: !1
};
let y = class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__.default {
  constructor(t) {
    var _this;

    (super(t), _this = this), this._imagePromise = null, this.bitmaps = [], this.hidpi = x.hidpi, this.imageMaxWidth = x.imageMaxWidth, this.imageMaxHeight = x.imageMaxHeight, this.imageRotationSupported = x.imageRotationSupported, this.imageNormalizationSupported = x.imageNormalizationSupported, this.update = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.debounce)( /*#__PURE__*/function () {
      var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, e) {
        if (!t.stationary || _this.destroyed) return null;
        const i = t.state,
              o = (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__.getInfo)(i.spatialReference),
              r = _this.hidpi ? t.pixelRatio : 1,
              s = _this.imageNormalizationSupported && i.worldScreenWidth && i.worldScreenWidth < i.size[0];
        s ? (g[0] = i.worldScreenWidth, g[1] = i.size[1]) : _this.imageRotationSupported ? (g[0] = i.size[0], g[1] = i.size[1]) : (0,_viewStateUtils_js__WEBPACK_IMPORTED_MODULE_13__.getOuterSize)(g, i);

        const a = Math.floor(g[0] * r) > _this.imageMaxWidth || Math.floor(g[1] * r) > _this.imageMaxHeight,
              n = o && (i.extent.xmin < o.valid[0] || i.extent.xmax > o.valid[1]),
              l = !_this.imageNormalizationSupported && n,
              d = !a && !l,
              h = _this.imageRotationSupported ? i.rotation : 0;

        if (d) {
          const t = s ? i.paddedViewState.center : i.center;
          _this._imagePromise = _this._singleExport(i, g, t, i.resolution, h, r, e);
        } else {
          let t = Math.min(_this.imageMaxWidth, _this.imageMaxHeight);
          l && (t = Math.min(i.worldScreenWidth, t)), _this._imagePromise = _this._tiledExport(i, t, h, r, e);
        }

        return _this._imagePromise.then( /*#__PURE__*/function () {
          var _ref2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t) {
            if (_this._imagePromise = null, !_this.destroyed) {
              _this.bitmaps = null != t ? t : [];

              for (const e of _this.container.children) t.includes(e) || e.fadeOut().then(() => {
                e.remove();
              });

              for (const e of t) _this.container.addChild(e), e.fadeIn();
            }
          });

          return function (_x3) {
            return _ref2.apply(this, arguments);
          };
        }()).catch(t => {
          throw _this._imagePromise = null, t;
        });
      });

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), 5e3);
  }

  destroy() {
    this.bitmaps = [];
  }

  get updating() {
    return !this.destroyed && null !== this._imagePromise;
  }

  updateExports(t) {
    for (const e of this.container.children) {
      if (!e.visible || !e.stage) return;
      t(e), e.invalidateTexture(), e.requestRender();
    }
  }

  _export(t, e, i, o, r, s) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const a = yield _this2.fetchSource(t, Math.floor(e * r), Math.floor(i * r), {
        rotation: o,
        pixelRatio: r,
        signal: s
      }),
            p = new _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_14__.Bitmap(a, "additive");
      return p.x = t.xmin, p.y = t.ymax, p.resolution = t.width / e, p.rotation = o, p.pixelRatio = r, p;
    })();
  }

  _singleExport(t, e, i, o, r, a, p) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      (0,_viewStateUtils_js__WEBPACK_IMPORTED_MODULE_13__.getBBox)(u, i, o, e);
      const n = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__.default(u[0], u[1], u[2], u[3], t.spatialReference);
      return [yield _this3._export(n, e[0], e[1], r, a, p)];
    })();
  }

  _tiledExport(t, e, i, o, r) {
    const a = _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_12__.default.create({
      size: e,
      spatialReference: t.spatialReference,
      scales: [t.scale]
    }),
          p = new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_15__.default(a),
          m = p.getTileCoverage(t);
    if (!m) return null;
    const l = [];
    return m.forEach((a, n, m, d) => {
      f.set(a, n, m, d), p.getTileBounds(u, f);
      const h = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__.default(u[0], u[1], u[2], u[3], t.spatialReference);
      l.push(this._export(h, e, e, i, o, r));
    }), Promise.all(l);
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], y.prototype, "_imagePromise", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], y.prototype, "bitmaps", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], y.prototype, "container", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], y.prototype, "fetchSource", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], y.prototype, "hidpi", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], y.prototype, "imageMaxWidth", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], y.prototype, "imageMaxHeight", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], y.prototype, "imageRotationSupported", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], y.prototype, "imageNormalizationSupported", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], y.prototype, "requestUpdate", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], y.prototype, "updating", null), y = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.2d.layers.support.ExportStrategy")], y);
const S = y;


/***/ }),

/***/ 90836:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/viewStateUtils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bboxIntersects": () => (/* binding */ a),
/* harmony export */   "getBBox": () => (/* binding */ u),
/* harmony export */   "getOuterSize": () => (/* binding */ r),
/* harmony export */   "snapToPixel": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=Math.PI/180;function n(n){return n*t}function o(t,n,o){const{resolution:r,size:u}=o;return t[0]=r*(Math.round(n[0]/r)+u[0]%2*.5),t[1]=r*(Math.round(n[1]/r)+u[1]%2*.5),t}function r(t,o){const r=n(o.rotation),u=Math.abs(Math.cos(r)),a=Math.abs(Math.sin(r)),[s,c]=o.size;return t[0]=Math.round(c*a+s*u),t[1]=Math.round(c*u+s*a),t}function u(t,n,o,r){const[u,a]=n,[s,c]=r,i=.5*o;return t[0]=u-i*s,t[1]=a-i*c,t[2]=u+i*s,t[3]=a+i*c,t}function a(t,n){const[o,r,u,a]=t,[s,c,i,e]=n;return!(o>i||u<s||r>e||a<c)}


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


/***/ })

}]);
//# sourceMappingURL=6830.e68edcc58130b28a4d21.js.map