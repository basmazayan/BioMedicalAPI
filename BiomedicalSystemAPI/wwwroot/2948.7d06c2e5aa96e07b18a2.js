"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[2948],{

/***/ 22948:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/ImageryLayerView2D.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/watchUtils.js */ 11652);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _engine_flow_AnimatedFlowView2D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../engine/flow/AnimatedFlowView2D.js */ 61558);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LayerView2D.js */ 87982);
/* harmony import */ var _imagery_ImageryGraphicsView2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imagery/ImageryGraphicsView2D.js */ 69984);
/* harmony import */ var _imagery_ImageryView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./imagery/ImageryView2D.js */ 8211);
/* harmony import */ var _layers_ImageryLayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layers/ImageryLayerView.js */ 41015);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/LayerView.js */ 96121);
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ 26263);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/














let p = class extends (0,_layers_ImageryLayerView_js__WEBPACK_IMPORTED_MODULE_12__.ImageryLayerView)((0,_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_14__.RefreshableLayerView)((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_9__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__.default))) {
  constructor() {
    super(...arguments), this._exportImageVersion = -1;
  }

  initialize() {
    this.handles.add([(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__.init)(this, ["layer.blendMode", "layer.effects"], e => {
      this.subview && (this.subview.container.blendMode = e);
    }, !0), (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__.init)(this, "layer.effect", e => {
      this.subview && (this.subview.container.effect = e);
    }, !0)]);
  }

  get pixelData() {
    return this.updating ? null : "getPixelData" in this.subview ? this.subview.getPixelData() : null;
  }

  get updating() {
    return !!(!this.subview || "updating" in this.subview && this.subview.updating);
  }

  hitTest(e, t) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this.subview ? "hitTest" in _this.subview ? [_this.subview.hitTest(e)] : [] : null;
    })();
  }

  update(e) {
    var t;
    null == (t = this.subview) || t.update(e);
  }

  attach() {
    this.layer.increaseRasterJobHandlerUsage(), this._setSubView(), this.handles.add([(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__.init)(this, "layer.exportImageServiceParameters.version", e => {
      this._exportImageVersion !== e && (this._exportImageVersion = e, this.requestUpdate());
    }), this.watch("timeExtent", () => {
      "timeExtent" in this.subview && (this.subview.timeExtent = this.timeExtent), this.requestUpdate();
    }), this.layer.on("redraw", () => {
      "redraw" in this.subview ? this.subview.redraw() : this.subview.redrawOrRefetch();
    }), (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__.watch)(this.layer, "renderer", () => this._setSubView())], "imagerylayerview-update");
  }

  detach() {
    this.layer.decreaseRasterJobHandlerUsage(), this.subview.destroy(), this.handles.remove("imagerylayerview-update"), this._exportImageVersion = -1;
  }

  moveStart() {}

  viewChange() {}

  moveEnd() {
    this.requestUpdate();
  }

  doRefresh() {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.requestUpdate();
    })();
  }

  isUpdating() {
    return !this.subview || !this.suspended && this.subview.updating;
  }

  _setSubView() {
    var e, t;
    let i = "Imagery";
    "vector-field" === (null == (e = this.layer.renderer) ? void 0 : e.type) && "lerc" === this.layer.format && (i = "Graphics");
    var s, r;
    ("animated-flow" === (null == (t = this.layer.renderer) ? void 0 : t.type) && (i = "Flow"), this.subview && this.subview.type === i) || (null == (s = this.subview) || s.uninstall(this.container), null == (r = this.subview) || r.destroy(), this.subview = "Imagery" === i ? new _imagery_ImageryView2D_js__WEBPACK_IMPORTED_MODULE_11__.default({
      layer: this.layer,
      view: this.view,
      timeExtent: this.timeExtent
    }) : "Graphics" === i ? new _imagery_ImageryGraphicsView2D_js__WEBPACK_IMPORTED_MODULE_10__.default({
      layer: this.layer,
      view: this.view,
      timeExtent: this.timeExtent
    }) : new _engine_flow_AnimatedFlowView2D_js__WEBPACK_IMPORTED_MODULE_8__.default({
      layer: this.layer,
      layerView: this
    }), this.subview.attach(), this.subview.install(this.container), this.subview.container.blendMode = this.layer.blendMode, this.subview.container.effect = this.layer.effect);
    this.requestUpdate();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()], p.prototype, "pixelData", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({
  readOnly: !0
})], p.prototype, "updating", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()], p.prototype, "subview", void 0), p = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.views.2d.layers.ImageryLayerView2D")], p);
const d = p;


/***/ }),

/***/ 69984:
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryGraphicsView2D.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Graphic.js */ 99326);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../request.js */ 30351);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/Accessor.js */ 98240);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ 70157);
/* harmony import */ var _layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/rasterProjectionHelper.js */ 11057);
/* harmony import */ var _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/vectorFieldUtils.js */ 24384);
/* harmony import */ var _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../support/GraphicsCollection.js */ 78779);
/* harmony import */ var _engine_Container_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../engine/Container.js */ 99345);
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../graphics/GraphicContainer.js */ 84853);
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../graphics/GraphicsView2D.js */ 20483);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




















const f = _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__.default.getLogger("esri.views.2d.layers.imagery.ImageryGraphicsView2D");

let _ = class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_4__.default {
  constructor() {
    var _this;

    (super(...arguments), _this = this), this.attached = !1, this.container = new _engine_Container_js__WEBPACK_IMPORTED_MODULE_18__.Container(), this.updateRequested = !1, this._graphicsView = null, this._projectFullExtentPromise = null, this._dataParameters = {
      exportParametersVersion: 0,
      extents: [],
      tileResolution: 0,
      time: "",
      isOceanStyle: !1,
      isOceanographic: !1
    }, this.type = "Graphics", this._graphics = new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_17__.GraphicsCollection(), this._updateGraphics = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.debounce)( /*#__PURE__*/function () {
      var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
        if (!e.stationary) return;
        const r = e.state,
              i = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__.default({
          xmin: r.extent.xmin,
          ymin: r.extent.ymin,
          xmax: r.extent.xmax,
          ymax: r.extent.ymax,
          spatialReference: r.spatialReference
        }),
              [s, o] = e.state.size,
              n = {};
        n.timeExtent = _this.timeExtent, n.requestAsImageElement = !1, n.signal = t, null == _this._projectFullExtentPromise && (_this._projectFullExtentPromise = _this._getProjectedFullExtent(i.spatialReference));
        const c = "vector-field" === _this.layer.renderer.type ? _this.layer.renderer.symbolTileSize : 50,
              p = yield _this._projectFullExtentPromise,
              {
          extent: h,
          resolution: m,
          width: d,
          height: y
        } = (0,_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.snapImageToSymbolTile)(i, s, o, c, p),
              g = yield _this.layer.fetchImage(h, d, y, n),
              x = _this.layer.renderer;

        if ("vector-field" === x.type) {
          const t = g.pixelData.pixelBlock,
                r = x.sizeVariables[0];
          !(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(t) || r.minDataValue && r.maxDataValue || (r.minDataValue = t.statistics[0].minValue, r.maxDataValue = t.statistics[0].maxValue), _this._pixelData = {
            extent: h,
            pixelBlock: t
          };
          const i = h.clone().normalize(),
                s = {
            exportParametersVersion: _this.layer.exportImageServiceParameters.version,
            extents: i,
            tileResolution: m,
            time: JSON.stringify(_this.timeExtent || ""),
            isOceanStyle: "flow-to" === x.flowRepresentation,
            isOceanographic: "ocean-current-kn" === x.style || "ocean-current-m" === x.style
          },
                o = _this._canReuseVectorFieldData(s) ? _this._dataParameters.extents : [],
                n = yield x.getGraphicsFromPixelData(g.pixelData, "vector-uv" === _this.layer.rasterInfo.dataType, o);

          if (o.length) {
            const e = _this._graphics.items.filter(e => (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(e.geometry) && o.some(t => t.intersects(e.geometry)) && !i.some(t => t.intersects(e.geometry)));

            _this._graphics.removeMany(e), _this._graphics.addMany(n);
          } else _this._graphics.set("items", n);

          _this._graphicsView.update(e), _this._dataParameters = s;
        }
      });

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  destroy() {
    this.attached && (this.detach(), this.attached = !1), this.updateRequested = !1;
  }

  get updating() {
    return !this.attached || this.isUpdating();
  }

  update(e) {
    this._updateGraphics(e).catch(e => {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.isAbortError)(e) || f.error(e);
    });
  }

  hitTest(e) {
    return new _Graphic_js__WEBPACK_IMPORTED_MODULE_2__.default({
      attributes: {},
      geometry: e.clone(),
      layer: this.layer
    });
  }

  attach() {
    this._graphicsView = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_20__.default({
      view: this.view,
      graphics: this._graphics,
      requestUpdateCallback: () => this.requestUpdate(),
      container: new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_19__.default(this.view.featuresTilingScheme)
    }), this.attached = !0;
  }

  detach() {
    this._graphics.destroy(), this._graphicsView.destroy(), this.container.removeChild(this._graphicsView.container), this._graphicsView = null;
  }

  install(e) {
    this.container.addChild(this._graphicsView.container), e.addChild(this.container);
  }

  uninstall(e) {
    this.container.removeChild(this._graphicsView.container), e.removeChild(this.container);
  }

  isUpdating() {
    return this._graphicsView.updating || this.updateRequested;
  }

  getPixelData() {
    return this.updating ? null : this._pixelData;
  }

  redraw() {}

  requestUpdate() {
    this.updateRequested || (this.updateRequested = !0, this.view.requestUpdate());
  }

  _getProjectedFullExtent(e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        return yield (0,_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_15__.projectExtent)(_this2.layer.fullExtent, e);
      } catch (t) {
        try {
          const t = (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_3__.default)(_this2.layer.url, {
            query: {
              option: "footprints",
              outSR: e.wkid || JSON.stringify(e.toJSON()),
              f: "json"
            }
          })).data.featureCollection.layers[0].layerDefinition.extent;
          return t ? _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__.default.fromJSON(t) : null;
        } catch {
          return null;
        }
      }
    })();
  }

  _canReuseVectorFieldData(e) {
    const t = this._dataParameters.exportParametersVersion === e.exportParametersVersion,
          r = this._dataParameters.time === e.time,
          i = Math.abs(this._dataParameters.tileResolution - e.tileResolution) / e.tileResolution < .01,
          s = this._dataParameters.extents.some(t => e.extents.some(e => t.intersects(e))),
          a = this._dataParameters.isOceanStyle === e.isOceanStyle,
          o = this._dataParameters.isOceanographic === e.isOceanographic;

    return t && r && i && s && a && o;
  }

};

(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], _.prototype, "attached", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], _.prototype, "container", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], _.prototype, "layer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], _.prototype, "timeExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], _.prototype, "view", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], _.prototype, "updateRequested", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], _.prototype, "updating", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_12__.enumeration)({
  graphics: "Graphics"
})], _.prototype, "type", void 0), _ = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__.subclass)("esri.views.2d.layers.imagery.ImageryGraphicsView2D")], _);
const w = _;


/***/ }),

/***/ 8211:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/imagery/ImageryView2D.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Graphic.js */ 99326);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Accessor.js */ 98240);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../layers/support/rasterFunctions/pixelUtils.js */ 85572);
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../engine/BitmapContainer.js */ 23335);
/* harmony import */ var _engine_Container_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../engine/Container.js */ 99345);
/* harmony import */ var _engine_ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../engine/ImageryBitmapSource.js */ 89001);
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../support/ExportStrategy.js */ 73004);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__.default.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let y=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__.default{constructor(){super(...arguments),this.attached=!1,this.container=new _engine_Container_js__WEBPACK_IMPORTED_MODULE_14__.Container,this.updateRequested=!1,this.type="Imagery",this._bitmapView=null}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.isAbortError)(e)||u.error(e)}))}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()}hitTest(e){return new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__.default({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_13__.BitmapContainer,this.strategy=new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_16__.default({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0}install(e){this.container.addChild(this._bitmapView),e.addChild(this.container)}uninstall(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=(0,_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_12__.mosaicPixelData)(r,t);return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i){return(i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new _engine_ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_15__.default(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],y.prototype,"attached",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],y.prototype,"container",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],y.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],y.prototype,"strategy",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],y.prototype,"timeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],y.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],y.prototype,"updateRequested",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],y.prototype,"updating",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_10__.enumeration)({imagery:"Imagery"})],y.prototype,"type",void 0),y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.views.2d.layers.imagery.ImageryView2D")],y);const g=y;


/***/ }),

/***/ 41015:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/ImageryLayerView.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageryLayerView": () => (/* binding */ u),
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/* harmony import */ var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layers/support/commonProperties.js */ 34042);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../rest/support/Query.js */ 37995);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./support/popupUtils.js */ 76388);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/













const u = u => {
  let m = class extends u {
    constructor() {
      super(...arguments), this.view = null;
    }

    fetchPopupFeatures(e, o) {
      var _this = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const {
          layer: s
        } = _this;
        if (!e) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("imagerylayerview:fetchPopupFeatures", "Nothing to fetch without area", {
          layer: s
        });
        const {
          popupEnabled: i
        } = s,
              u = (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_12__.getFetchPopupTemplate)(s, o);
        if (!i || !(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(u)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("imagerylayerview:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", {
          popupEnabled: i,
          popupTemplate: u
        });
        const m = yield u.getRequiredFields(),
              c = new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_11__.default();
        c.timeExtent = _this.timeExtent, c.geometry = e, c.outFields = m, c.outSpatialReference = e.spatialReference;
        const l = _this.view.resolution,
              y = "2d" === _this.view.type ? new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__.default(l, l, _this.view.spatialReference) : new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__.default(.5 * l, .5 * l, _this.view.spatialReference),
              {
          returnTopmostRaster: h,
          showNoDataRecords: w
        } = u.layerOptions || {
          returnTopmostRaster: !0,
          showNoDataRecords: !1
        },
              d = {
          returnDomainValues: !0,
          returnTopmostRaster: h,
          pixelSize: y,
          showNoDataRecords: w,
          signal: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(o) ? o.signal : null
        };
        return s.queryVisibleRasters(c, d).then(e => e);
      })();
    }

    canResume() {
      var e;
      return !!super.canResume() && (null == (e = this.timeExtent) || !e.isEmpty);
    }

  };
  return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], m.prototype, "layer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], m.prototype, "suspended", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_10__.combinedViewLayerTimeExtentProperty)], m.prototype, "timeExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], m.prototype, "view", void 0), m = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.layers.ImageryLayerView")], m), m;
};



/***/ })

}]);
//# sourceMappingURL=2948.7d06c2e5aa96e07b18a2.js.map