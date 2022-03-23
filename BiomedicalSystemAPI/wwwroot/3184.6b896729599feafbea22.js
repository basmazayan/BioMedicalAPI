"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[3184],{

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

/***/ 73184:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/KMLLayerView2D.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../kernel.js */ 77871);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../request.js */ 30351);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Collection.js */ 37635);
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Handles.js */ 65333);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../geometry/projection.js */ 15695);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../geometry/support/webMercatorUtils.js */ 3403);
/* harmony import */ var _layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../layers/support/kmlUtils.js */ 5285);
/* harmony import */ var _rest_utils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../rest/utils.js */ 16727);
/* harmony import */ var _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../support/GraphicsCollection.js */ 78779);
/* harmony import */ var _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../engine/Bitmap.js */ 44946);
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../engine/BitmapContainer.js */ 23335);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./LayerView2D.js */ 87982);
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./graphics/GraphicContainer.js */ 84853);
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ 20483);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../layers/LayerView.js */ 96121);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


























class C {
  constructor() {
    this.allSublayers = new Map(), this.allPoints = [], this.allPolylines = [], this.allPolygons = [], this.allMapImages = [];
  }

}

let j = class extends (0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_22__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_25__.default) {
  constructor() {
    super(...arguments), this._handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_5__.default(), this._bitmapIndex = new Map(), this._mapImageContainer = new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_21__.BitmapContainer(), this._kmlVisualData = new C(), this.allVisiblePoints = new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_19__.GraphicsCollection(), this.allVisiblePolylines = new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_19__.GraphicsCollection(), this.allVisiblePolygons = new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_19__.GraphicsCollection(), this.allVisibleMapImages = new _core_Collection_js__WEBPACK_IMPORTED_MODULE_4__.default();
  }

  hitTest(e, i) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var t, s, a;
      return (yield Promise.all([null == (t = _this._pointsView) ? void 0 : t.hitTest(e), null == (s = _this._polylinesView) ? void 0 : s.hitTest(e), null == (a = _this._polygonsView) ? void 0 : a.hitTest(e)])).flat().filter(e => !!e && (e.layer = _this.layer, e.sourceLayer = _this.layer, !0));
    })();
  }

  update(e) {
    this._polygonsView && this._polygonsView.processUpdate(e), this._polylinesView && this._polylinesView.processUpdate(e), this._pointsView && this._pointsView.processUpdate(e);
  }

  attach() {
    this._handles.add([this.allVisibleMapImages.on("change", e => {
      e.added.forEach(e => this._addMapImage(e)), e.removed.forEach(e => this._removeMapImage(e));
    })]), this.container.addChild(this._mapImageContainer), this._polygonsView = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_24__.default({
      view: this.view,
      graphics: this.allVisiblePolygons,
      requestUpdateCallback: () => this.requestUpdate(),
      container: new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_23__.default(this.view.featuresTilingScheme)
    }), this.container.addChild(this._polygonsView.container), this._polylinesView = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_24__.default({
      view: this.view,
      graphics: this.allVisiblePolylines,
      requestUpdateCallback: () => this.requestUpdate(),
      container: new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_23__.default(this.view.featuresTilingScheme)
    }), this.container.addChild(this._polylinesView.container), this._pointsView = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_24__.default({
      view: this.view,
      graphics: this.allVisiblePoints,
      requestUpdateCallback: () => this.requestUpdate(),
      container: new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_23__.default(this.view.featuresTilingScheme)
    }), this.container.addChild(this._pointsView.container), this.watch("layer.visibleSublayers", e => {
      for (const [i, t] of this._kmlVisualData.allSublayers) t.visibility = 0;

      for (const i of e) {
        const e = this._kmlVisualData.allSublayers.get(i.id);

        e && (e.visibility = 1);
      }

      this._refreshCollections();
    }), this._fetchingPromise = this._fetchService().then(() => {
      this._fetchingPromise = null, this.notifyChange("updating");
    });
  }

  detach() {
    this._handles.removeAll(), this._mapImageContainer.removeAllChildren(), this.container.removeAllChildren(), this._bitmapIndex.clear(), this._polygonsView && (this._polygonsView.destroy(), this._polygonsView = null), this._polylinesView && (this._polylinesView.destroy(), this._polylinesView = null), this._pointsView && (this._pointsView.destroy(), this._pointsView = null);
  }

  moveStart() {}

  viewChange() {
    this._polygonsView.viewChange(), this._polylinesView.viewChange(), this._pointsView.viewChange();
  }

  moveEnd() {}

  isUpdating() {
    return null != this._fetchingPromise || this._pointsView.updating || this._polygonsView.updating || this._polylinesView.updating;
  }

  _addMapImage(e) {
    (this.view.spatialReference.isWGS84 || this.view.spatialReference.isWebMercator) && (0,_request_js__WEBPACK_IMPORTED_MODULE_3__.default)(e.href, {
      responseType: "image"
    }).then(({
      data: i
    }) => {
      let t = _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__.default.fromJSON(e.extent);
      (0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_16__.canProject)(t, this.view.spatialReference) && (t = (0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_16__.project)(t, this.view.spatialReference));
      const s = new _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_20__.Bitmap(i, "standard");
      s.x = t.xmin, s.y = t.ymax, s.resolution = t.width / i.naturalWidth, s.rotation = e.rotation, this._mapImageContainer.addChild(s), this._bitmapIndex.set(e, s);
    });
  }

  _getViewDependentUrl(e, t) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        viewFormat: s,
        viewBoundScale: a,
        httpQuery: h
      } = e;

      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(s)) {
        if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(t)) throw new Error("Loading this network link requires a view state.");
        let p;

        if (yield (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_14__.load)(), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(a) && 1 !== a) {
          const e = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__.default(t.extent);
          e.expand(a), p = e;
        } else p = t.extent;

        p = (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_14__.project)(p, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__.default.WGS84);

        const w = (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_14__.project)(p, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__.default.WebMercator),
              g = p.xmin,
              u = p.xmax,
              _ = p.ymin,
              V = p.ymax,
              f = t.size[0] * t.pixelRatio,
              v = t.size[1] * t.pixelRatio,
              S = Math.max(w.width, w.height),
              I = {
          "[bboxWest]": g.toString(),
          "[bboxEast]": u.toString(),
          "[bboxSouth]": _.toString(),
          "[bboxNorth]": V.toString(),
          "[lookatLon]": p.center.x.toString(),
          "[lookatLat]": p.center.y.toString(),
          "[lookatRange]": S.toString(),
          "[lookatTilt]": "0",
          "[lookatHeading]": t.rotation.toString(),
          "[lookatTerrainLon]": p.center.x.toString(),
          "[lookatTerrainLat]": p.center.y.toString(),
          "[lookatTerrainAlt]": "0",
          "[cameraLon]": p.center.x.toString(),
          "[cameraLat]": p.center.y.toString(),
          "[cameraAlt]": S.toString(),
          "[horizFov]": "60",
          "[vertFov]": "60",
          "[horizPixels]": f.toString(),
          "[vertPixels]": v.toString(),
          "[terrainEnabled]": "0",
          "[clientVersion]": _kernel_js__WEBPACK_IMPORTED_MODULE_2__.version,
          "[kmlVersion]": "2.2",
          "[clientName]": "ArcGIS API for JavaScript",
          "[language]": "en-US"
        },
              x = e => {
          for (const i in e) for (const t in I) e[i] = e[i].replace(t, I[t]);
        },
              P = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.queryToObject)(s);

        x(P);
        let k = {};
        (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(h) && (k = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.queryToObject)(h), x(k));
        const C = (0,_rest_utils_js__WEBPACK_IMPORTED_MODULE_18__.parseUrl)(e.href);
        C.query = { ...C.query,
          ...P,
          ...k
        };
        return `${C.path}?${(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.objectToQuery)(P)}`;
      }

      return e.href;
    })();
  }

  _fetchService() {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = new C();
      yield _this2._loadVisualData(_this2.layer.url, e), _this2._kmlVisualData = e, _this2._refreshCollections();
    })();
  }

  _refreshCollections() {
    this.allVisiblePoints.removeAll(), this.allVisiblePolylines.removeAll(), this.allVisiblePolygons.removeAll(), this.allVisibleMapImages.removeAll(), this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(e => this._isSublayerVisible(e.sublayerId)).map(({
      item: e
    }) => e)), this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(e => this._isSublayerVisible(e.sublayerId)).map(({
      item: e
    }) => e)), this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(e => this._isSublayerVisible(e.sublayerId)).map(({
      item: e
    }) => e)), this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(e => this._isSublayerVisible(e.sublayerId)).map(({
      item: e
    }) => e));
  }

  _isSublayerVisible(e) {
    const i = this._kmlVisualData.allSublayers.get(e);

    return !!i.visibility && (-1 === i.parentFolderId || this._isSublayerVisible(i.parentFolderId));
  }

  _loadVisualData(e, i) {
    var _this3 = this;

    return this._fetchParsedKML(e).then( /*#__PURE__*/function () {
      var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
        for (const t of e.sublayers) {
          i.allSublayers.set(t.id, t);
          const e = t.points ? yield (0,_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_17__.getGraphics)(t.points) : [],
                s = t.polylines ? yield (0,_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_17__.getGraphics)(t.polylines) : [],
                a = t.polygons ? yield (0,_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_17__.getGraphics)(t.polygons) : [],
                o = t.mapImages || [];

          if (i.allPoints.push(...e.map(e => ({
            item: e,
            sublayerId: t.id
          }))), i.allPolylines.push(...s.map(e => ({
            item: e,
            sublayerId: t.id
          }))), i.allPolygons.push(...a.map(e => ({
            item: e,
            sublayerId: t.id
          }))), i.allMapImages.push(...o.map(e => ({
            item: e,
            sublayerId: t.id
          }))), t.networkLink) {
            const e = yield _this3._getViewDependentUrl(t.networkLink, _this3.view.state);
            yield _this3._loadVisualData(e, i);
          }
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  _fetchParsedKML(e) {
    return (0,_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_17__.fetchService)(e, this.view.spatialReference, this.layer.refreshInterval).then(e => (0,_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_17__.parseKML)(e.data));
  }

  _removeMapImage(e) {
    const i = this._bitmapIndex.get(e);

    i && (this._mapImageContainer.removeChild(i), this._bitmapIndex.delete(e));
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], j.prototype, "_pointsView", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], j.prototype, "_polylinesView", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], j.prototype, "_polygonsView", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], j.prototype, "_fetchingPromise", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], j.prototype, "updating", void 0), j = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__.subclass)("esri.views.2d.layers.KMLLayerView2D")], j);
const M = j;


/***/ })

}]);
//# sourceMappingURL=3184.6b896729599feafbea22.js.map