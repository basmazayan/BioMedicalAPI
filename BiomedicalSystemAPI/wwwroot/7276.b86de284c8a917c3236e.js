"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[7276],{

/***/ 17276:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/ImageryTileLayer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ J)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PopupTemplate.js */ 95821);
/* harmony import */ var _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rasterRenderers.js */ 15079);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ 52166);
/* harmony import */ var _mixins_ImageryTileMixin_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/ImageryTileMixin.js */ 86870);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ 53730);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/TemporalLayer.js */ 77932);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/Field.js */ 66536);
/* harmony import */ var _support_rasterEnums_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/rasterEnums.js */ 92015);
/* harmony import */ var _support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/TimeInfo.js */ 73887);
/* harmony import */ var _support_rasterDatasets_RasterFactory_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/rasterDatasets/RasterFactory.js */ 5170);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../support/popupUtils.js */ 81569);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





























let N = class extends (0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_16__.BlendLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__.ScaleRangeLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_19__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_20__.PortalLayer)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_17__.CustomParametersMixin)((0,_mixins_ImageryTileMixin_js__WEBPACK_IMPORTED_MODULE_18__.ImageryTileMixin)((0,_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_23__.TemporalLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_21__.RefreshableLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_15__.default))))))))) {
  constructor(...e) {
    super(...e), this.bandIds = null, this.interpolation = null, this.legendEnabled = !0, this.isReference = null, this.listMode = "show", this.sourceJSON = null, this.version = null, this.title = null, this.type = "imagery-tile", this.operationalLayerType = "ArcGISTiledImageServiceLayer", this.popupEnabled = !0, this.popupTemplate = null, this.fields = null;
  }

  normalizeCtorArgs(e, r) {
    return "string" == typeof e ? {
      url: e,
      ...r
    } : e;
  }

  load(e) {
    const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e) ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({
      supportedTypes: ["Image Service"]
    }, e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAbortError).then(() => this._openRaster(r))), Promise.resolve(this);
  }

  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }

  get rasterFields() {
    var e, r;
    let t = [new _support_Field_js__WEBPACK_IMPORTED_MODULE_25__.default({
      name: "Raster.ServicePixelValue",
      alias: "Pixel Value",
      domain: null,
      editable: !1,
      length: 50,
      type: "string"
    })];
    const o = null == (e = this.rasterInfo) || null == (r = e.attributeTable) ? void 0 : r.fields,
          i = "Raster.";

    if (o) {
      const e = o.filter(e => "oid" !== e.type && "value" !== e.name.toLowerCase()).map(e => {
        const r = e.clone();
        return r.name = i + e.name, r;
      });
      t = t.concat(e);
    }

    const s = this.rasterInfo.dataType;

    if (("vector-magdir" === s || "vector-uv" === s) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(this.rasterInfo.multidimensionalInfo)) {
      var n;
      const e = null == (n = this.rasterInfo.multidimensionalInfo.variables[0].unit) ? void 0 : n.trim(),
            r = "Magnitude" + (e ? ` (${e})` : "");
      t.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_25__.default({
        name: "Raster.Magnitude",
        alias: r,
        domain: null,
        editable: !1,
        type: "double"
      })), t.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_25__.default({
        name: "Raster.Direction",
        alias: "Direction (°)",
        domain: null,
        editable: !1,
        type: "double"
      }));
    }

    return t;
  }

  set renderer(e) {
    this._set("renderer", e), this.updateRenderer();
  }

  readRenderer(e, r, o) {
    const i = r && r.layerDefinition && r.layerDefinition.drawingInfo && r.layerDefinition.drawingInfo.renderer,
          s = (0,_rasterRenderers_js__WEBPACK_IMPORTED_MODULE_3__.read)(i, o) || void 0;
    if (null != s) return s;
  }

  createPopupTemplate(e) {
    return (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_29__.createPopupTemplate)({
      fields: this.rasterFields,
      title: this.title
    }, e);
  }

  write(e, r) {
    const {
      raster: t
    } = this;
    if (this.loaded ? "RasterTileServer" === t.datasetFormat && ("Raster" === t.tileType || "Map" === t.tileType) : this.url && /\/ImageServer(\/|\/?$)/i.test(this.url)) return super.write(e, r);

    if (r && r.messages) {
      const e = `${r.origin}/${r.layerContainerType || "operational-layers"}`;
      r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("layer:unsupported", `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`, {
        layer: this
      }));
    }

    return null;
  }

  _openRaster(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.raster ? (_this.raster.rasterInfo || (yield _this.raster.open()), _this.url = _this.raster.url) : _this.raster = yield _support_rasterDatasets_RasterFactory_js__WEBPACK_IMPORTED_MODULE_28__.default.open({
        url: _this.url,
        sourceJSON: _this.sourceJSON,
        ioConfig: {
          sampling: "closest",
          ..._this.ioConfig,
          customFetchParameters: _this.customParameters
        },
        signal: e
      });
      const {
        rasterInfo: r
      } = _this.raster;
      if (!r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("imagery-tile-layer:load", "cannot load resources on " + _this.url);
      _this.sourceJSON = _this.sourceJSON || _this.raster.sourceJSON, null != _this.sourceJSON && (_this._set("version", _this.sourceJSON.currentVersion), _this._set("copyright", _this.sourceJSON.copyrightText), _this.sourceJSON.timeInfo && _this._set("timeInfo", _support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_27__.default.fromJSON(_this.sourceJSON.timeInfo))), null == _this.title && (_this.title = _this.raster.datasetName), "Map" === _this.raster.tileType && (_this.popupEnabled = !1), _this._configDefaultSettings(), _this.watch("customParameters", e => _this.raster.ioConfig.customFetchParameters = e);
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__.Integer],
  json: {
    write: {
      overridePolicy() {
        var e;
        return {
          enabled: !this.loaded || "Raster" === this.raster.tileType || "0,1,2" !== (null == (e = this.bandIds) ? void 0 : e.join(","))
        };
      }

    }
  }
})], N.prototype, "bandIds", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  json: {
    write: {
      overridePolicy() {
        return {
          enabled: !this.loaded || "Raster" === this.raster.tileType || "bilinear" !== this.interpolation
        };
      }

    }
  }
}), (0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_12__.enumeration)(_support_rasterEnums_js__WEBPACK_IMPORTED_MODULE_26__.interpolationKebab)], N.prototype, "interpolation", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  json: {
    write: !0
  }
})], N.prototype, "multidimensionalDefinition", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_24__.legendEnabled)], N.prototype, "legendEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: Boolean,
  json: {
    read: !1,
    write: {
      enabled: !0,
      overridePolicy: () => ({
        enabled: !1
      })
    }
  }
})], N.prototype, "isReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: ["show", "hide"]
})], N.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], N.prototype, "sourceJSON", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0
})], N.prototype, "version", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], N.prototype, "title", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0,
  json: {
    read: !1
  }
})], N.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: ["ArcGISTiledImageServiceLayer"]
})], N.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: Boolean,
  value: !0,
  json: {
    read: {
      source: "disablePopup",
      reader: (e, r) => !r.disablePopup
    },
    write: {
      target: "disablePopup",

      overridePolicy() {
        return {
          enabled: !this.loaded || "Raster" === this.raster.tileType
        };
      },

      writer(e, r, t) {
        r[t] = !e;
      }

    }
  }
})], N.prototype, "popupEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__.default,
  json: {
    read: {
      source: "popupInfo"
    },
    write: {
      target: "popupInfo",

      overridePolicy() {
        return {
          enabled: !this.loaded || "Raster" === this.raster.tileType
        };
      }

    }
  }
})], N.prototype, "popupTemplate", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0
})], N.prototype, "defaultPopupTemplate", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0,
  type: [_support_Field_js__WEBPACK_IMPORTED_MODULE_25__.default]
})], N.prototype, "fields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0,
  type: [_support_Field_js__WEBPACK_IMPORTED_MODULE_25__.default]
})], N.prototype, "rasterFields", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  types: _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_3__.rasterRendererTypes,
  json: {
    name: "layerDefinition.drawingInfo.renderer",
    write: {
      overridePolicy() {
        var e;
        const r = "raster-stretch" === (null == (e = this.renderer) ? void 0 : e.type) && "none" === this.renderer.stretchType && !this.renderer.useGamma;
        return {
          enabled: !this.loaded || "Raster" === this.raster.tileType || !r
        };
      }

    },
    origins: {
      "web-scene": {
        types: _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_3__.websceneRasterRendererTypes,
        name: "layerDefinition.drawingInfo.renderer",
        write: {
          overridePolicy: e => ({
            enabled: e && "vector-field" !== e.type && "animated-flow" !== e.type
          })
        }
      }
    }
  }
})], N.prototype, "renderer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__.reader)("renderer")], N.prototype, "readRenderer", null), N = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__.subclass)("esri.layers.ImageryTileLayer")], N);
const J = N;


/***/ }),

/***/ 86870:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/ImageryTileMixin.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageryTileMixin": () => (/* binding */ R)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rasterRenderers.js */ 15079);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/aliasOf.js */ 95774);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../support/arcgisLayerUrl.js */ 46996);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../support/commonProperties.js */ 34042);
/* harmony import */ var _support_DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../support/DimensionalDefinition.js */ 81751);
/* harmony import */ var _support_RasterJobHandler_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../support/RasterJobHandler.js */ 87066);
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../support/TileInfo.js */ 87940);
/* harmony import */ var _support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../support/rasterFunctions/vectorFieldUtils.js */ 24384);
/* harmony import */ var _renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../renderers/support/rasterRendererHelper.js */ 52291);
/* harmony import */ var _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../renderers/support/RasterSymbolizer.js */ 28454);
/* harmony import */ var _views_2d_engine_flow_dataUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../views/2d/engine/flow/dataUtils.js */ 62013);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/

























const S = _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__.default.getLogger("esri.layers.mixins.ImageryTileMixin"),
      R = i => {
  let R = class extends i {
    constructor() {
      super(...arguments), this._rasterJobHandler = {
        instance: null,
        refCount: 0,
        connectionPromise: null
      }, this.bandIds = null, this.copyright = null, this.fullExtent = null, this.interpolation = "nearest", this.multidimensionalDefinition = null, this.raster = null, this.rasterInfo = null, this.sourceJSON = null, this.spatialReference = null, this.tileInfo = null, this.symbolizer = null;
    }

    set url(e) {
      this._set("url", (0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_14__.sanitizeUrl)(e, S));
    }

    set renderer(e) {
      this._set("renderer", e), this.updateRenderer();
    }

    convertVectorFieldData(e, t) {
      var _this = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(e)) return null;
        const r = _this._rasterJobHandler.instance,
              i = _this.rasterInfo.dataType;
        return r ? r.convertVectorFieldData({
          pixelBlock: e,
          dataType: i
        }, t) : (0,_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_19__.convertVectorFieldData)(e, i);
      })();
    }

    createStreamlinesMesh(e, t) {
      var _this2 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const r = _this2._rasterJobHandler.instance;
        return r ? r.createStreamlinesMesh(e, t) : (0,_views_2d_engine_flow_dataUtils_js__WEBPACK_IMPORTED_MODULE_22__.createStreamlinesMesh)(e.rendererSettings, e.flowData, (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(t.signal) ? t.signal : new AbortController().signal);
      })();
    }

    normalizeRasterFetchOptions(e) {
      const {
        multidimensionalInfo: t
      } = this.rasterInfo;
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(t)) return e;
      let r = e.multidimensionalDefinition || this.multidimensionalDefinition;
      !(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(r) && r.length || (r = this._getDefaultSlice());
      const i = e.timeExtent || this.timeExtent;

      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(r) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(i) && ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(i.start) || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(i.end))) {
        var o, a;
        r = r.map(e => e.clone());
        const l = null == (o = t.variables.find(({
          name: e
        }) => e === r[0].variableName)) || null == (a = o.dimensions) ? void 0 : a.find(({
          name: e
        }) => "StdTime" === e),
              m = r.find(({
          dimensionName: e
        }) => "StdTime" === e);
        if (!l || !m) return { ...e,
          multidimensionalDefinition: null
        };
        const {
          start: d,
          end: u
        } = i,
              p = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(d) ? null : d.getTime(),
              h = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(u) ? null : u.getTime(),
              c = null != p ? p : h,
              f = null != h ? h : p;

        if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(l.values)) {
          const e = l.values.filter(e => {
            if (Array.isArray(e)) {
              if (c === f) return e[0] <= c && e[1] >= c;
              const t = e[0] <= c && e[1] > c || e[0] < f && e[1] >= f,
                    r = e[0] >= c && e[1] <= f || e[0] < c && e[1] > f;
              return t || r;
            }

            return c === f ? e === c : e >= c && e <= f;
          });

          if (e.length) {
            const t = e.sort((e, t) => {
              var r, i, n, s;
              if (c === f) return (null != (n = e[0]) ? n : e) - (null != (s = t[0]) ? s : t);
              return Math.abs((null != (r = e[1]) ? r : e) - f) - Math.abs((null != (i = t[1]) ? i : t) - f);
            })[0];
            m.values = [t];
          } else r = null;
        } else if (l.hasRegularIntervals && l.extent) {
          const [e, t] = l.extent;
          c > t || f < e ? r = null : m.values = c === f ? [c] : [Math.max(e, c), Math.min(t, f)];
        }
      }

      return { ...e,
        multidimensionalDefinition: r
      };
    }

    updateRenderer() {
      var _this3 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if (!_this3.loaded) return;
        if (JSON.stringify(_this3._cachedRendererJson) === JSON.stringify(_this3.renderer)) return;
        const e = _this3._rasterJobHandler.instance;
        e && (_this3.symbolizer.rendererJSON = (0,_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_20__.normalizeRendererJSON)(_this3.renderer.toJSON()), _this3.symbolizer.bind(), yield e.updateSymbolizer(_this3.symbolizer), _this3._cachedRendererJson = _this3.renderer.toJSON());
      })();
    }

    applyRenderer(e, t) {
      var _this4 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const r = e && e.pixelBlock;
        if (!((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(r) && r.pixels && r.pixels.length > 0)) return null;
        let i;
        yield _this4.updateRenderer();
        const n = _this4._rasterJobHandler.instance,
              {
          bandIds: o
        } = _this4;
        return i = n ? yield n.symbolize({ ...e,
          simpleStretchParams: t,
          bandIds: o
        }) : _this4.symbolizer.symbolize({ ...e,
          simpleStretchParams: t,
          bandIds: o
        }), i;
      })();
    }

    getTileUrl(e, t, r) {
      return "RasterTileServer" === this.raster.datasetFormat ? `${this.url}/tile/${e}/${t}/${r}` : "";
    }

    getCompatibleTileInfo(e, t, r = !1) {
      if (!this.loaded || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(t)) return null;
      if (r && e.equals(this.spatialReference)) return this.tileInfo;
      const i = (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_13__.getInfo)(e);
      return _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_18__.default.create({
        size: 256,
        spatialReference: e,
        origin: i ? {
          x: i.origin[0],
          y: i.origin[1]
        } : {
          x: t.xmin,
          y: t.ymax
        }
      });
    }

    getCompatibleFullExtent(e) {
      return this.loaded ? (this._compatibleFullExtent && this._compatibleFullExtent.spatialReference.equals(e) || (this._compatibleFullExtent = this.raster.computeExtent(e)), this._compatibleFullExtent) : null;
    }

    fetchTile(e, t, i, o = {}) {
      var _this5 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if (o.requestAsImageElement) {
          const n = _this5.getTileUrl(e, t, i);

          return (0,_request_js__WEBPACK_IMPORTED_MODULE_4__.default)(n, {
            responseType: "image",
            query: { ..._this5.refreshParameters,
              ..._this5.raster.ioConfig.customFetchParameters
            },
            signal: o.signal
          }).then(e => e.data);
        }

        if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(_this5.rasterInfo.multidimensionalInfo) && (o = _this5.normalizeRasterFetchOptions(o), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(o.multidimensionalDefinition))) {
          const r = o.tileInfo || _this5.rasterInfo.storageInfo.tileInfo;
          return {
            extent: _this5.raster.getTileExtentFromTileInfo(e, t, i, r),
            pixelBlock: null
          };
        }

        return yield _this5._initJobHandler(), "raster-shaded-relief" === _this5.renderer.type && (o = { ...o,
          buffer: {
            cols: 1,
            rows: 1
          }
        }), _this5.raster.fetchTile(e, t, i, o);
      })();
    }

    fetchPixels(e, t, r, i = {}) {
      var _this6 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(_this6.rasterInfo.multidimensionalInfo) && (i = _this6.normalizeRasterFetchOptions(i), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(i.multidimensionalDefinition)) ? {
          extent: e,
          pixelBlock: null
        } : (yield _this6._initJobHandler(), _this6.raster.fetchPixels(e, t, r, i));
      })();
    }

    identify(e, t = {}) {
      var _this7 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(_this7.rasterInfo.multidimensionalInfo) && (t = _this7.normalizeRasterFetchOptions(t), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(t.multidimensionalDefinition)) ? {
          location: e,
          value: null
        } : _this7.raster.identify(e, t);
      })();
    }

    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }

    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }

    hasStandardTime() {
      var e;
      const t = this.rasterInfo.multidimensionalInfo;
      if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(t) || "standard-time" !== this.rasterInfo.dataType) return !1;
      const r = null == (e = this.multidimensionalDefinition[0]) ? void 0 : e.variableName;
      return t.variables.some(e => e.name === r && e.dimensions.some(e => "StdTime" === e.name));
    }

    getStandardTimeValue(e) {
      return new Date(24 * (e - 25569) * 3600 * 1e3).toString();
    }

    _configDefaultSettings() {
      this._configDefaultInterpolation(), this.multidimensionalDefinition || (this.multidimensionalDefinition = this._getDefaultSlice()), this._configDefaultRenderer();
    }

    _initJobHandler() {
      if (null != this._rasterJobHandler.connectionPromise) return this._rasterJobHandler.connectionPromise;
      const e = new _support_RasterJobHandler_js__WEBPACK_IMPORTED_MODULE_17__.default();
      return this._rasterJobHandler.connectionPromise = e.initialize().then(() => {
        this._rasterJobHandler.instance = e, this.raster.rasterJobHandler = e, this.renderer && this.updateRenderer();
      }).catch(() => null), this._rasterJobHandler.connectionPromise;
    }

    _shutdownJobHandler() {
      this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0, this.raster.rasterJobHandler = null;
    }

    _configDefaultInterpolation() {
      if (null == this.interpolation) {
        var e;
        const t = (0,_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_20__.getDefaultInterpolation)(this.rasterInfo, this.raster.tileType, null == (e = this.sourceJSON) ? void 0 : e.defaultResamplingMethod);

        this._set("interpolation", t);
      }
    }

    _getDefaultSlice() {
      const {
        multidimensionalInfo: e
      } = this.raster.rasterInfo;
      if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(e)) return null;
      const t = e.variables[0];
      return t.dimensions.map(e => {
        var r, i;
        return new _support_DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_16__.default({
          variableName: t.name,
          dimensionName: e.name,
          values: [null != (r = null == (i = e.values) ? void 0 : i[0]) ? r : e.extent[0]],
          isSlice: !0
        });
      });
    }

    _configDefaultRenderer() {
      const e = this.raster.rasterInfo;
      var t;
      (this.bandIds || (this.bandIds = (0,_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_20__.getDefaultBandCombination)(e)), this.renderer) || (this.renderer = (0,_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_20__.createDefaultRenderer)(e, {
        bandIds: this.bandIds,
        variableName: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(this.multidimensionalDefinition) ? null == (t = this.multidimensionalDefinition[0]) ? void 0 : t.variableName : null
      }));
      this.symbolizer ? (this.symbolizer.rendererJSON = (0,_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_20__.normalizeRendererJSON)(this.renderer.toJSON()), this.symbolizer.rasterInfo = e) : this.symbolizer = new _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_21__.default({
        rendererJSON: this.renderer.toJSON(),
        rasterInfo: e
      });
      const r = this.symbolizer.bind();
      r.success || S.warn("imagery-tile-mixin", r.error || "The given renderer is not supported by the layer.");
    }

  };
  return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()], R.prototype, "_cachedRendererJson", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()], R.prototype, "_compatibleFullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()], R.prototype, "_rasterJobHandler", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()], R.prototype, "bandIds", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()], R.prototype, "copyright", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)({
    type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_23__.default
  }), (0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_7__.aliasOf)("rasterInfo.extent")], R.prototype, "fullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()], R.prototype, "interpolation", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()], R.prototype, "ioConfig", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)({
    type: [_support_DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_16__.default]
  })], R.prototype, "multidimensionalDefinition", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()], R.prototype, "raster", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)({
    readOnly: !0
  }), (0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_7__.aliasOf)("raster.rasterInfo")], R.prototype, "rasterInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()], R.prototype, "sourceJSON", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)({
    type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__.default
  }), (0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_7__.aliasOf)("rasterInfo.spatialReference")], R.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)({
    type: _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_18__.default
  }), (0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_7__.aliasOf)("rasterInfo.storageInfo.tileInfo")], R.prototype, "tileInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__.url)], R.prototype, "url", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)({
    types: _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_3__.rasterRendererTypes
  })], R.prototype, "renderer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()], R.prototype, "symbolizer", void 0), R = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__.subclass)("esri.layers.ImageryTileMixin")], R), R;
};



/***/ }),

/***/ 39461:
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/BaseRaster.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/Promise.js */ 67614);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../arcgisLayerUrl.js */ 46996);
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../commonProperties.js */ 34042);
/* harmony import */ var _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../RasterStorageInfo.js */ 69975);
/* harmony import */ var _TileInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../TileInfo.js */ 87940);
/* harmony import */ var _RawBlockCache_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./RawBlockCache.js */ 50033);
/* harmony import */ var _rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../rasterFormats/RasterCodec.js */ 96125);
/* harmony import */ var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../rasterFunctions/pixelUtils.js */ 85572);
/* harmony import */ var _rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../rasterFunctions/rasterProjectionHelper.js */ 11057);
/* harmony import */ var _rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../rasterFunctions/vectorFieldUtils.js */ 24384);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../geometry/Point.js */ 7309);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/

























const A = 8;
let D = class extends (0,_core_Promise_js__WEBPACK_IMPORTED_MODULE_8__.EsriPromiseMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_5__.JSONSupport) {
  constructor() {
    super(...arguments), this.rasterJobHandler = null, this.datasetName = null, this.datasetFormat = null, this.rasterInfo = null, this.ioConfig = {
      sampling: "closest"
    };
  }

  init() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.load)();
      _this.addResolvingPromise(e), yield _this.when();
    })();
  }

  normalizeCtorArgs(e) {
    return e && e.ioConfig && (e = { ...e,
      ioConfig: {
        resolution: null,
        bandIds: null,
        sampling: "closest",
        tileInfo: _TileInfo_js__WEBPACK_IMPORTED_MODULE_18__.default.create(),
        ...e.ioConfig
      }
    }), e;
  }

  set url(e) {
    this._set("url", (0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_15__.sanitizeUrl)(e, _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__.default.getLogger(this.declaredClass)));
  }

  open(e) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("BaseRaster:open-not-implemented", "open() is not implemented");
    })();
  }

  fetchTile(e, t, r, o = {}) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = o.tileInfo || _this2.rasterInfo.storageInfo.tileInfo,
            n = _this2.getTileExtentFromTileInfo(e, t, r, i);

      return _this2.fetchPixels(n, i.size[0], i.size[1], o);
    })();
  }

  identify(e, t = {}) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      t = _this3._getRequestOptionsWithSliceId(t);
      const {
        spatialReference: r,
        extent: o
      } = _this3.rasterInfo,
            {
        datumTransformation: i
      } = t;
      let a = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.projectPoint)(e, r, i);
      if (!o.intersects(a)) return {
        location: a,
        value: null
      };

      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(_this3.rasterInfo.transform)) {
        const e = _this3.rasterInfo.transform.inverseTransform(a);

        if (!_this3.rasterInfo.nativeExtent.intersects(e)) return {
          location: e,
          value: null
        };
        a = e;
      }

      let l = 0;

      if (t.srcResolution) {
        l = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.snapPyramid)(t.srcResolution, _this3.rasterInfo, _this3.ioConfig.sampling).pyramidLevel;
      } else if (l = yield _this3.computeBestPyramidLevelForLocation(e, t), null == l) return {
        location: a,
        value: null
      };

      const c = _this3.identifyPixelLocation(a, l, null);

      if (null === c) return {
        location: a,
        value: null
      };
      const {
        row: u,
        col: f,
        rowOffset: m,
        colOffset: h
      } = c,
            d = (0,_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_19__.getRasterId)(_this3.url, t.sliceId),
            p = `${l}/${u}/${f}`;
      let I = (0,_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_19__.getBlock)(d, null, p);
      (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isNone)(I) && (I = _this3.fetchRawTile(l, u, f, t), (0,_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_19__.putBlock)(d, null, p, I));
      const w = yield I;
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isNone)(w) || !w.pixels || 0 === w.pixels.length) return {
        location: a,
        value: null
      };
      const R = m * _this3.rasterInfo.storageInfo.blockHeight + h,
            v = !w.mask || w.mask[R] ? w.pixels.map(e => e[R]) : null,
            k = _this3.rasterInfo.dataType;

      if (("vector-magdir" === k || "vector-uv" === k) && (null == v ? void 0 : v.length) > 1) {
        return {
          location: a,
          value: v,
          magdirValue: "vector-magdir" === k ? [v[0], v[1]] : (0,_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_23__.uvComponentToVector)([v[0], v[1]]),
          pyramidLevel: l
        };
      }

      return {
        location: a,
        value: v,
        pyramidLevel: l
      };
    })();
  }

  fetchPixels(e, t, r, o = {}) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      e = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.snapExtent)(e);
      const i = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.getWorldWidth)(e.spatialReference),
            a = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.getWorldWrapCount)(e),
            l = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.getWorldWidth)(_this4.rasterInfo.spatialReference),
            c = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(l) && _this4.rasterInfo.extent.width >= l / 2;
      if (o = _this4._getRequestOptionsWithSliceId(o), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isNone)(i) || 0 === a || 1 === a && c) return _this4._fetchPixels(e, t, r, o);
      if (a >= 3) return {
        extent: e,
        pixelBlock: null
      };
      const u = [],
            {
        xmin: f,
        xmax: m
      } = e,
            h = Math.round(i / (m - f) * t),
            d = h - Math.round((i / 2 - f) / (m - f) * t);
      let p = 0;
      const x = [];

      for (let n = 0; n <= a; n++) {
        const s = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_24__.default({
          xmin: 0 === n ? f : -i / 2,
          xmax: n === a ? m - i * n : i / 2,
          ymin: e.ymin,
          ymax: e.ymax,
          spatialReference: e.spatialReference
        }),
              l = 0 === n ? h - d : n === a ? t - p : h;
        p += l, x.push(l);

        const c = _this4._fetchPixels(s, l, r, o);

        u.push(c);
      }

      const g = (yield Promise.all(u)).map(e => null == e ? void 0 : e.pixelBlock);
      let y = null;
      const I = {
        width: t,
        height: r
      };
      y = _this4.rasterJobHandler ? yield _this4.rasterJobHandler.mosaicAndTransform({
        srcPixelBlocks: g,
        srcMosaicSize: I,
        destDimension: null,
        coefs: null,
        sampleSpacing: null,
        interpolation: "nearest",
        alignmentInfo: null,
        blockWidths: x
      }, o) : (0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_21__.mosaic)(g, I, {
        blockWidths: x
      });
      return {
        extent: e,
        srcExtent: (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.projectExtent)(e, _this4.rasterInfo.spatialReference, o.datumTransformation),
        pixelBlock: y
      };
    })();
  }

  fetchRawPixels(e, t, r, o) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        origin: i,
        blockBoundary: n
      } = _this5.rasterInfo.storageInfo,
            {
        blockWidth: s,
        blockHeight: l
      } = _this5.getBlockWidthHeight(e);

      let {
        x: c,
        y: u
      } = t,
          {
        width: f,
        height: m,
        wrapCount: h
      } = r;
      const d = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.unwrap)(_this5._getRasterTileAlignmentInfo(e, 0));
      o.buffer && (c -= o.buffer.cols, u -= o.buffer.rows, f += 2 * o.buffer.cols, m += 2 * o.buffer.rows);
      const p = Math.floor(c / s),
            x = Math.floor(u / l),
            g = Math.floor((c + f - 1) / s),
            y = Math.floor((u + m - 1) / l),
            I = n[e];
      if (!I) return null;
      const {
        minRow: w,
        minCol: R,
        maxCol: v,
        maxRow: k
      } = I;
      if (0 === h && (y < w || g < R || x > k || p > v)) return null;
      const b = new Array();
      let T = !1;
      const C = null == _this5.ioConfig.allowPartialFill ? o.allowPartialFill : _this5.ioConfig.allowPartialFill;

      for (let a = x; a <= y; a++) for (let t = p; t <= g; t++) {
        const r = 0 === h || null == d || t < d.worldColumnCountFromOrigin ? t : t % d.worldColumnCountFromOrigin - d.originColumnOffset;

        if (a >= w && r >= R && k >= a && v >= r) {
          const t = _this5._fetchRawTile(e, a, r, o);

          C ? b.push(new Promise(e => {
            t.then(t => e(t)).catch(() => {
              T = !0, e(null);
            });
          })) : b.push(t);
        } else b.push(null);
      }

      if (0 === b.length) return null;

      const M = yield Promise.all(b),
            P = {
        height: (y - x + 1) * l,
        width: (g - p + 1) * s
      },
            {
        spatialReference: S
      } = _this5.rasterInfo,
            B = _this5.getPyramidPixelSize(e),
            {
        x: j,
        y: F
      } = B;

      return {
        extent: new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_24__.default({
          xmin: i.x + p * s * j,
          xmax: i.x + (g + 1) * s * j,
          ymin: i.y - (y + 1) * l * F,
          ymax: i.y - x * l * F,
          spatialReference: S
        }),
        pixelBlocks: M,
        mosaicSize: P,
        isPartiallyFilled: T
      };
    })();
  }

  fetchRawTile(e, t, o, i) {
    throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("BaseRaster:read-not-implemented", "fetchRawTile() is not implemented");
  }

  computeExtent(e) {
    return (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.projectExtent)(this.rasterInfo.extent, e);
  }

  decodePixelBlock(e, t) {
    return !this.rasterJobHandler || t.useCanvas ? (0,_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_20__.decode)(e, t) : this.rasterJobHandler.decode({
      data: e,
      options: t
    });
  }

  request(e, r, o) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var i, n;
      const {
        customFetchParameters: s
      } = _this6.ioConfig,
            {
        range: a,
        query: l,
        headers: c
      } = r;
      o = null != (i = null != (n = o) ? n : r.retryCount) ? i : _this6.ioConfig.retryCount;
      const u = a ? {
        Range: `bytes=${a.from}-${a.to}`
      } : null;

      try {
        return yield (0,_request_js__WEBPACK_IMPORTED_MODULE_3__.default)(e, { ...r,
          query: { ...l,
            ...s
          },
          headers: { ...c,
            ...u
          }
        });
      } catch (f) {
        if (o > 0) return o--, _this6.request(e, r, o);
        throw f;
      }
    })();
  }

  getSliceIndex(e) {
    const {
      multidimensionalInfo: t
    } = this.rasterInfo;
    if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(t)) return null;
    if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(e) || 0 === e.length) return null;
    let r = 0;
    const o = e[0].variableName;

    for (let i = 0; i < t.variables.length; i++) {
      const n = t.variables[i],
            s = n.dimensions;

      if (n.name !== o) {
        r += s.map(e => this._getDimensionValuesCount(e)).reduce((e, t) => e + t);
        break;
      }

      const a = s.map(e => this._getDimensionValuesCount(e)),
            l = s.length;

      for (let t = 0; t < l; t++) {
        const o = e.filter(e => e.dimensionName === s[t].name)[0];
        if (null == o) return null;

        const i = Array.isArray(o.values[0]) ? o.values[0][0] : o.values[0],
              n = this._getIndexFromDimensions(i, s[t]);

        if (-1 === n) return null;
        a.shift(), r += t === l - 1 ? n : n * a.reduce((e, t) => e + t);
      }
    }

    return r;
  }

  getTileExtentFromTileInfo(e, t, r, o) {
    const i = o.lodAt(e);
    return this.getTileExtent({
      x: i.resolution,
      y: i.resolution
    }, t, r, o.origin, o.spatialReference, o.size);
  }

  updateTileInfo() {
    const {
      storageInfo: e,
      spatialReference: t,
      extent: r,
      pixelSize: o
    } = this.rasterInfo;

    if (!e.tileInfo) {
      const i = [],
            n = e.maximumPyramidLevel || 0;
      let s = Math.max(o.x, o.y),
          a = 1 / .0254 * 96 * s;

      for (let e = 0; e <= n; e++) i.push({
        level: n - e,
        resolution: s,
        scale: a
      }), s *= 2, a *= 2;

      const l = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_25__.default({
        x: r.xmin,
        y: r.ymax,
        spatialReference: t
      });
      e.tileInfo = new _TileInfo_js__WEBPACK_IMPORTED_MODULE_18__.default({
        origin: l,
        size: [e.blockWidth, e.blockHeight],
        spatialReference: t,
        lods: i
      }), e.isVirtualTileInfo = !0;
    }
  }

  createRemoteDatasetStorageInfo(e, t = 512, r = 512, o) {
    const {
      width: i,
      height: n,
      nativeExtent: s,
      pixelSize: a,
      spatialReference: l
    } = e,
          c = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_25__.default({
      x: s.xmin,
      y: s.ymax,
      spatialReference: l
    });
    null == o && (o = Math.max(0, Math.round(Math.log(Math.max(i, n)) / Math.LN2 - 8)));
    const u = this.computeBlockBoundary(s, 512, 512, {
      x: s.xmin,
      y: s.ymax
    }, [a], o);
    e.storageInfo = new _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_17__.default({
      blockWidth: t,
      blockHeight: r,
      pyramidBlockWidth: t,
      pyramidBlockHeight: r,
      origin: c,
      firstPyramidLevel: 1,
      maximumPyramidLevel: o,
      blockBoundary: u
    });
  }

  computeBestPyramidLevelForLocation(e, t = {}) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return 0;
    })();
  }

  computeBlockBoundary(e, t, r, o, i, n = 0, s = 2) {
    if (1 === i.length && n > 0) {
      i = [...i];
      let {
        x: e,
        y: t
      } = i[0];

      for (let r = 0; r < n; r++) e *= s, t *= s, i.push({
        x: e,
        y: t
      });
    }

    const a = [],
          {
      x: l,
      y: c
    } = o;

    for (let u = 0; u < i.length; u++) {
      const {
        x: o,
        y: n
      } = i[u];
      a.push({
        minCol: Math.floor((e.xmin - l + .1 * o) / t / o),
        maxCol: Math.floor((e.xmax - l - .1 * o) / t / o),
        minRow: Math.floor((c - e.ymax + .1 * n) / r / n),
        maxRow: Math.floor((c - e.ymin - .1 * n) / r / n)
      });
    }

    return a;
  }

  getPyramidPixelSize(e) {
    const {
      nativePixelSize: t
    } = this.rasterInfo,
          {
      pyramidResolutions: r,
      pyramidScalingFactor: o
    } = this.rasterInfo.storageInfo;
    if (0 === e) return t;
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(r) && r.length) return r[e - 1];
    const i = o ** e;
    return {
      x: t.x * i,
      y: t.y * i
    };
  }

  identifyPixelLocation(e, t, r) {
    const {
      spatialReference: o,
      nativeExtent: i
    } = this.rasterInfo,
          {
      blockWidth: n,
      blockHeight: s,
      maximumPyramidLevel: a,
      origin: l
    } = this.rasterInfo.storageInfo,
          c = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.projectPoint)(e, o, r);
    if (!i.intersects(c)) return null;
    if (t < 0 || t > a) return null;
    const u = this.getPyramidPixelSize(t),
          {
      x: f,
      y: m
    } = u,
          h = (l.y - c.y) / m / s,
          d = (c.x - l.x) / f / n,
          p = Math.min(s - 1, Math.floor((h - Math.floor(h)) * s)),
          x = Math.min(n - 1, Math.floor((d - Math.floor(d)) * n));
    return {
      pyramidLevel: t,
      row: Math.floor(h),
      col: Math.floor(d),
      rowOffset: p,
      colOffset: x,
      srcLocation: c
    };
  }

  getTileExtent(e, t, r, o, i, n) {
    const [s, a] = n,
          l = o.x + r * s * e.x,
          c = l + s * e.x,
          u = o.y - t * a * e.y,
          f = u - a * e.y;
    return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_24__.default({
      xmin: l,
      xmax: c,
      ymin: f,
      ymax: u,
      spatialReference: i
    });
  }

  getBlockWidthHeight(e) {
    return {
      blockWidth: e > 0 ? this.rasterInfo.storageInfo.pyramidBlockWidth : this.rasterInfo.storageInfo.blockWidth,
      blockHeight: e > 0 ? this.rasterInfo.storageInfo.pyramidBlockHeight : this.rasterInfo.storageInfo.blockHeight
    };
  }

  isBlockOutside(e, t, r) {
    const o = this.rasterInfo.storageInfo.blockBoundary[e];
    return !o || o.maxRow < t || o.maxCol < r || o.minRow > t || o.minCol > r;
  }

  _fetchPixels(e, t, r, o = {}) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let i = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.getWorldWrapCount)(e);
      if (i >= 2) return {
        extent: e,
        pixelBlock: null
      };

      const n = _this7._getSourceDataInfo(e, t, r, o),
            {
        pyramidLevel: s,
        pyramidResolution: l,
        srcResolution: c,
        srcExtent: u,
        srcWidth: f,
        srcHeight: m
      } = n;

      if (0 === f || 0 === m) return {
        extent: e,
        srcExtent: u,
        pixelBlock: null
      };
      const h = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.unwrap)(_this7.rasterInfo.transform);
      "gcs-shift" === (null == h ? void 0 : h.type) && (i = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.getWorldWrapCount)(n.srcExtent, !0));
      const d = _this7.rasterInfo.storageInfo,
            p = {
        x: Math.floor((u.xmin - d.origin.x) / l.x + .1),
        y: Math.floor((d.origin.y - u.ymax) / l.y + .1)
      },
            x = yield _this7.fetchRawPixels(s, p, {
        width: f,
        height: m,
        wrapCount: i
      }, o);
      if (!x) return {
        extent: e,
        srcExtent: u,
        pixelBlock: null
      };
      const g = s > 0 ? d.pyramidBlockWidth : d.blockWidth,
            y = s > 0 ? d.pyramidBlockHeight : d.blockHeight,
            I = g === f && y === m && p.x % g == 0 && p.y % y == 0,
            w = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_25__.default({
        x: (e.xmax - e.xmin) / t,
        y: (e.ymax - e.ymin) / r,
        spatialReference: e.spatialReference
      }),
            R = !e.spatialReference.equals(_this7.rasterInfo.spatialReference),
            {
        datumTransformation: b
      } = o;
      if (!R && I && 1 === x.pixelBlocks.length && g === t && y === r && c.x === w.x && c.y === w.y) return {
        extent: e,
        srcExtent: u,
        pixelBlock: x.pixelBlocks[0]
      };
      const T = _this7.rasterJobHandler ? yield _this7.rasterJobHandler.getProjectionOffsetGrid({
        projectedExtent: e,
        srcBufferExtent: x.extent,
        pixelSize: w.toJSON(),
        datumTransformation: b,
        rasterTransform: h,
        hasWrapAround: i > 0,
        isAdaptive: !1 !== _this7.ioConfig.optimizeProjectionAccuracy
      }, o) : (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.getProjectionOffsetGrid)({
        projectedExtent: e,
        srcBufferExtent: x.extent,
        pixelSize: w,
        datumTransformation: b,
        rasterTransform: h,
        hasWrapAround: i > 0,
        isAdaptive: !1
      });
      let C;
      const M = !o.requestRawData,
            P = {
        rows: T.spacing[0],
        cols: T.spacing[1]
      },
            B = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.unwrap)(_this7._getRasterTileAlignmentInfo(s, x.extent.xmin)),
            {
        pixelBlocks: F,
        mosaicSize: W,
        isPartiallyFilled: H
      } = x;
      if (_this7.rasterJobHandler) C = yield _this7.rasterJobHandler.mosaicAndTransform({
        srcPixelBlocks: F,
        srcMosaicSize: W,
        destDimension: M ? {
          width: t,
          height: r
        } : null,
        coefs: M ? T.coefficients : null,
        sampleSpacing: M ? P : null,
        interpolation: o.interpolation,
        alignmentInfo: B,
        blockWidths: null
      }, o);else {
        const e = (0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_21__.mosaic)(F, W, {
          alignmentInfo: B
        });
        C = M ? (0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_21__.approximateTransform)(e, {
          width: t,
          height: r
        }, T.coefficients, P, o.interpolation) : e;
      }
      return o.requestRawData ? {
        srcExtent: u,
        pixelBlock: C,
        transformGrid: T,
        extent: e,
        isPartiallyFilled: H
      } : {
        srcExtent: u,
        extent: e,
        pixelBlock: C
      };
    })();
  }

  _fetchRawTile(e, t, r, o) {
    const i = this.rasterInfo.storageInfo.blockBoundary[e];
    if (!i) return Promise.resolve(null);
    const {
      minRow: n,
      minCol: a,
      maxCol: l,
      maxRow: u
    } = i;
    if (t < n || r < a || t > u || r > l) return Promise.resolve(null);
    const f = (0,_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_19__.getRasterId)(this.url, o.sliceId),
          m = `${e}/${t}/${r}`;
    let h = (0,_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_19__.getBlock)(f, o.registryId, m);

    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isNone)(h)) {
      const i = new AbortController();
      h = this.fetchRawTile(e, t, r, { ...o,
        signal: i.signal
      }), (0,_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_19__.putBlock)(f, o.registryId, m, h, i), h.catch(() => (0,_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_19__.deleteBlock)(f, o.registryId, m));
    }

    return o.signal && (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.onAbort)(o, () => {
      (0,_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_19__.decreaseRefCount)(f, o.registryId, m);
    }), h;
  }

  _getIndexFromDimensions(e, t) {
    const {
      extent: r,
      interval: o,
      unit: i,
      values: n
    } = t;
    if (null != n && n.length) return Array.isArray(n[0]) ? n.findIndex(t => t[0] <= e && t[1] >= e) : n.indexOf(e);
    if (e > r[1]) return -1;
    const s = r[0];
    let a = -1;

    if ("ISO8601" === i) {
      var l;

      switch ((null == (l = t.intervalUnit) ? void 0 : l.toLowerCase()) || "seconds") {
        case "seconds":
          a = Math.round((e - s) / 1e3 / o);
          break;

        case "minutes":
          a = Math.round((e - s) / 6e4 / o);
          break;

        case "hours":
          a = Math.round((e - s) / 36e5 / o);
          break;

        case "days":
          a = Math.round((e - s) / 864e5 / o);
          break;

        case "years":
          a = Math.round((new Date(e).getUTCFullYear() - new Date(s).getUTCFullYear()) / o);
          break;

        case "decades":
          a = Math.round((new Date(e).getUTCFullYear() - new Date(s).getUTCFullYear()) / 10 / o);
      }

      return a;
    }

    return Math.round((e - s) / o);
  }

  _getDimensionValuesCount(e) {
    const {
      extent: t,
      interval: r,
      unit: o,
      values: i
    } = e;
    let n = (null == i ? void 0 : i.length) || 0;
    if (n) return n;
    const s = t[0];

    if (0 === n && "ISO8601" === o) {
      var a;

      switch ((null == (a = e.intervalUnit) ? void 0 : a.toLowerCase()) || "seconds") {
        case "seconds":
          n = Math.round((t[1] - t[0]) / 1e3 / r);
          break;

        case "minutes":
          n = Math.round((t[1] - t[0]) / 6e4 / r);
          break;

        case "hours":
          n = Math.round((t[1] - t[0]) / 36e5 / r);
          break;

        case "days":
          n = Math.round((t[1] - t[0]) / 864e5 / r);
          break;

        case "years":
          n = Math.round((new Date(t[1]).getUTCFullYear() - new Date(s).getUTCFullYear()) / r);
          break;

        case "decades":
          n = Math.round((new Date(t[1]).getUTCFullYear() - new Date(s).getUTCFullYear()) / 10 / r);
      }

      return n;
    }

    return Math.round((t[1] - t[0]) / r);
  }

  _getRasterTileAlignmentInfo(e, t) {
    return null == this._rasterTileAlighmentInfo && (this._rasterTileAlighmentInfo = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.getRasterDatasetAlignmentInfo)(this.rasterInfo)), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(this._rasterTileAlighmentInfo.pyramidsInfo) ? {
      startX: t,
      halfWorldWidth: this._rasterTileAlighmentInfo.halfWorldWidth,
      hasGCSSShiftTransform: this._rasterTileAlighmentInfo.hasGCSSShiftTransform,
      ...this._rasterTileAlighmentInfo.pyramidsInfo[e]
    } : null;
  }

  _getSourceDataInfo(e, t, r, o = {}) {
    const i = {
      datumTransformation: o.datumTransformation,
      pyramidLevel: 0,
      pyramidResolution: null,
      srcExtent: null,
      srcHeight: 0,
      srcResolution: null,
      srcWidth: 0
    };
    o.srcResolution && (i.srcResolution = o.srcResolution, this._updateSourceDataInfo(e, i));
    const n = this.rasterInfo.storageInfo.maximumPyramidLevel || 0,
          {
      srcWidth: s,
      srcHeight: a,
      pyramidLevel: l
    } = i,
          c = s / t,
          u = a / r,
          f = l < n && c * u >= 16;

    if (f || l === n && (c > A || u > A) || 0 === s || 0 === a) {
      const s = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_25__.default({
        x: (e.xmax - e.xmin) / t,
        y: (e.ymax - e.ymin) / r,
        spatialReference: e.spatialReference
      });
      let a = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.projectResolution)(s, this.rasterInfo.spatialReference, e, i.datumTransformation);
      const m = !a || o.srcResolution && a.x + a.y < o.srcResolution.x + o.srcResolution.y;

      if (f && o.srcResolution && m) {
        const e = Math.round(Math.log(Math.max(c, u)) / Math.LN2) - 1;

        if (n - l + 3 >= e) {
          const t = 2 ** e;
          a = {
            x: o.srcResolution.x * t,
            y: o.srcResolution.y * t
          };
        }
      }

      a && (i.srcResolution = a, this._updateSourceDataInfo(e, i));
    }

    return (i.srcWidth / t > A || i.srcHeight / r > A) && (i.srcWidth = 0, i.srcHeight = 0), i;
  }

  _updateSourceDataInfo(e, t) {
    t.srcWidth = 0, t.srcHeight = 0;
    const r = this.rasterInfo.spatialReference,
          {
      srcResolution: o,
      datumTransformation: i
    } = t,
          {
      pyramidLevel: n,
      pyramidResolution: s,
      excessiveReading: l
    } = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.snapPyramid)(o, this.rasterInfo, this.ioConfig.sampling);
    if (l) return;
    let c = t.srcExtent || (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_22__.projectExtent)(e, r, i);
    if (null == c) return;
    const u = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.unwrap)(this.rasterInfo.transform);
    u && (c = u.inverseTransform(c)), t.srcExtent = c;
    const f = Math.ceil((c.xmax - c.xmin) / s.x - .1),
          m = Math.ceil((c.ymax - c.ymin) / s.y - .1);
    t.pyramidLevel = n, t.pyramidResolution = s, t.srcWidth = f, t.srcHeight = m;
  }

  _getRequestOptionsWithSliceId(e) {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(this.rasterInfo.multidimensionalInfo) && null == e.sliceId && (e = { ...e,
      sliceId: this.getSliceIndex(e.multidimensionalDefinition)
    }), e;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], D.prototype, "_rasterTileAlighmentInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__.url)], D.prototype, "url", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: String,
  json: {
    write: !0
  }
})], D.prototype, "datasetName", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: String,
  json: {
    write: !0
  }
})], D.prototype, "datasetFormat", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], D.prototype, "rasterInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], D.prototype, "ioConfig", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], D.prototype, "sourceJSON", void 0), D = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__.subclass)("esri.layers.support.rasterDatasets.BaseRaster")], D);
const E = D;


/***/ }),

/***/ 82184:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/CloudRaster.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _RasterInfo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../RasterInfo.js */ 42492);
/* harmony import */ var _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../RasterStorageInfo.js */ 69975);
/* harmony import */ var _TileInfo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../TileInfo.js */ 87940);
/* harmony import */ var _BaseRaster_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BaseRaster.js */ 39461);
/* harmony import */ var _DBFParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DBFParser.js */ 97683);
/* harmony import */ var _rasterTransforms_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rasterTransforms/utils.js */ 47963);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../rest/support/FeatureSet.js */ 42762);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../geometry/Point.js */ 7309);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



















const g = new Map();
g.set("int16", "esriFieldTypeSmallInteger"), g.set("int32", "esriFieldTypeInteger"), g.set("int64", "esriFieldTypeInteger"), g.set("float32", "esriFieldTypeSingle"), g.set("float64", "esriFieldTypeDouble"), g.set("text", "esriFieldTypeString");
const y = 8;
let x = class extends _BaseRaster_js__WEBPACK_IMPORTED_MODULE_13__.default {
  constructor() {
    super(...arguments), this.storageInfo = null, this.datasetFormat = "CRF";
  }

  open(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.init();
      const {
        data: r
      } = yield _this.request(_this.url + "/conf.json", {
        signal: null == e ? void 0 : e.signal
      });
      if (!_this._validateHeader(r)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("cloudraster:open", "Invalid or unsupported conf.json.");
      _this.datasetName = _this.url.slice(_this.url.lastIndexOf("/") + 1);

      const {
        storageInfo: o,
        rasterInfo: i
      } = _this._parseHeader(r);

      if ("thematic" === i.dataType) {
        const e = yield _this._fetchAuxiliaryInformation();
        i.attributeTable = e;
      }

      _this._set("storageInfo", o), _this._set("rasterInfo", i), _this.ioConfig.retryCount = _this.ioConfig.retryCount || 0;
    })();
  }

  fetchRawTile(e, t, r, o = {}) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = _this2.rasterInfo.storageInfo.maximumPyramidLevel - e;
      if (i < 0) return null;

      const s = _this2._buildCacheFilePath(i, t, r, o.multidimensionalDefinition),
            a = _this2._getIndexRecordFromBundle(t, r),
            n = yield _this2.request(s, {
        range: {
          from: 0,
          to: _this2.storageInfo.headerSize - 1
        },
        responseType: "array-buffer",
        signal: o.signal
      });

      if (!n) return null;

      const l = new Uint8Array(n.data),
            f = _this2._getTileEndAndContentType(l, a);

      if (0 === f.recordSize) return null;
      const m = yield _this2.request(s, {
        range: {
          from: f.position,
          to: f.position + f.recordSize
        },
        responseType: "array-buffer",
        signal: o.signal
      });
      return m ? _this2.decodePixelBlock(m.data, {
        width: _this2.rasterInfo.storageInfo.tileInfo.size[0],
        height: _this2.rasterInfo.storageInfo.tileInfo.size[1],
        planes: null,
        pixelType: null
      }) : null;
    })();
  }

  _validateHeader(e) {
    const t = ["origin", "extent", "geodataXform", "LODInfos", "blockWidth", "blockHeight", "bandCount", "pixelType", "pixelSizeX", "pixelSizeY", "format", "packetSize"];
    return e && "RasterInfo" === e.type && !t.some(t => !e[t]);
  }

  _parseHeader(e) {
    var t, r;
    const o = ["u1", "u2", "u4", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"][e.pixelType],
          {
      bandCount: i,
      histograms: l,
      colormap: f,
      blockWidth: m,
      blockHeight: c,
      firstPyramidLevel: p,
      maximumPyramidLevel: g
    } = e,
          x = e.statistics && e.statistics.map(e => ({
      min: e.min,
      max: e.max,
      avg: e.mean,
      stddev: e.standardDeviation,
      median: e.median,
      mode: e.mode
    })),
          I = e.extent.spatialReference,
          S = null == (t = e.geodataXform) ? void 0 : t.spatialReference,
          w = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__.default(null != I && I.wkid || null != I && I.wkt ? I : S);
    let v = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__.default({
      xmin: e.extent.xmin,
      ymin: e.extent.ymin,
      xmax: e.extent.xmax,
      ymax: e.extent.ymax,
      spatialReference: w
    });

    const b = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_19__.default({
      x: e.pixelSizeX,
      y: e.pixelSizeY,
      spatialReference: w
    }),
          T = Math.round((v.xmax - v.xmin) / b.x),
          j = Math.round((v.ymax - v.ymin) / b.y),
          z = this._parseTransform(e.geodataXform),
          _ = z ? v : null;

    z && (v = z.forwardTransform(v), b.x = (v.xmax - v.xmin) / T, b.y = (v.ymax - v.ymin) / j);
    const k = null != (r = e.properties) ? r : {},
          C = e.format.toLowerCase().replace("cache/", ""),
          R = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_19__.default(e.origin.x, e.origin.y, w);
    let F, P, H, D;
    if (f && f.colors) for (F = [], P = 0; P < f.colors.length; P++) H = f.colors[P], D = f.values ? f.values[P] : P, F.push([D, 255 & H, H << 16 >>> 24, H << 8 >>> 24, H >>> 24]);
    const L = e.LODInfos,
          M = [];

    for (P = 0; P < L.levels.length; P++) M.push({
      level: L.levels[P],
      resolution: L.resolutions[P],
      scale: 96 / .0254 * L.resolutions[P]
    });

    const B = new _TileInfo_js__WEBPACK_IMPORTED_MODULE_12__.default({
      dpi: 96,
      lods: M,
      format: C,
      origin: R,
      size: [m, c],
      spatialReference: w
    }),
          O = {
      recordSize: y,
      packetSize: e.packetSize,
      headerSize: e.packetSize * e.packetSize * y + 64
    },
          $ = [{
      maxCol: Math.ceil(T / m) - 1,
      maxRow: Math.ceil(j / c) - 1,
      minCol: 0,
      minRow: 0
    }];
    let q = 2;
    if (g > 0) for (P = 0; P < g; P++) $.push({
      maxCol: Math.ceil(T / q / m) - 1,
      maxRow: Math.ceil(j / q / c) - 1,
      minCol: 0,
      minRow: 0
    }), q *= 2;
    const A = e.mdInfo;
    return {
      storageInfo: O,
      rasterInfo: new _RasterInfo_js__WEBPACK_IMPORTED_MODULE_10__.default({
        width: T,
        height: j,
        pixelType: o,
        bandCount: i,
        extent: v,
        nativeExtent: _,
        transform: z,
        spatialReference: w,
        pixelSize: b,
        keyProperties: k,
        statistics: x,
        histograms: l,
        multidimensionalInfo: A,
        colormap: F,
        storageInfo: new _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_11__.default({
          blockWidth: m,
          blockHeight: c,
          pyramidBlockWidth: m,
          pyramidBlockHeight: c,
          origin: R,
          tileInfo: B,
          firstPyramidLevel: p,
          maximumPyramidLevel: g,
          blockBoundary: $
        })
      })
    };
  }

  _parseTransform(e) {
    var r, o;
    if (!(0,_rasterTransforms_utils_js__WEBPACK_IMPORTED_MODULE_15__.isTransformSupported)(e)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("cloudraster:open", "the data contains unsupported geodata transform types");
    const i = (0,_rasterTransforms_utils_js__WEBPACK_IMPORTED_MODULE_15__.readTransform)(e);
    if ("identity" === i.type) return null;
    if ("polynomial" !== i.type || null == (r = i.forwardCoefficients) || !r.length || null == (o = i.inverseCoefficients) || !o.length) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("cloudraster:open", "the data contains unsupported geodata transforms - both forward and inverse coefficients are required currently");
    return i;
  }

  _fetchAuxiliaryInformation(e) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = _this3.request(_this3.url + "/conf.vat.json", {
        signal: e
      }).then(e => e.data).catch(() => null),
            r = _this3.request(_this3.url + "/conf.vat.dbf", {
        responseType: "array-buffer",
        signal: e
      }).then(e => e.data).catch(() => null),
            o = yield Promise.all([t, r]);

      let i;

      if (o[0]) {
        let e = o[0].fields;
        const t = o[0].values;

        if (e && t) {
          e = e.map(e => ({
            type: "OID" === e.name ? "esriFieldTypeOID" : g.get(e.type),
            name: e.name,
            alias: e.alias || e.name
          }));
          const r = t.map(e => ({
            attributes: e
          }));
          e && t && (i = {
            fields: e,
            features: r
          });
        }
      }

      if (!i && o[1]) {
        i = _DBFParser_js__WEBPACK_IMPORTED_MODULE_14__.default.parse(o[1]).recordSet;
      }

      return _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__.default.fromJSON(i);
    })();
  }

  _buildCacheFilePath(e, t, o, i) {
    const s = this.storageInfo.packetSize,
          a = Math.floor(t / s) * s,
          n = Math.floor(o / s) * s,
          l = "R" + this._toHexString4(a) + "C" + this._toHexString4(n);

    let f = "L";
    f += e >= 10 ? e.toString() : "0" + e.toString();
    const {
      multidimensionalInfo: m
    } = this.rasterInfo,
          c = null == i ? void 0 : i[0];
    if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(m) || !c) return `${this.url}/_alllayers/${f}/${l}.bundle`;
    let p = m.variables.filter(e => e.name === c.variableName)[0].dimensions[0].values.indexOf(c.values[0]).toString(16);
    const d = 4 - p.length;

    for (let r = 0; r < d; r++) p = "0" + p;

    return p = "S" + p, `${this.url}/_alllayers/${c.variableName}/${p}/${f}/${l}.bundle`;
  }

  _getIndexRecordFromBundle(e, t) {
    const r = this.storageInfo.packetSize,
          o = r * (e % r) + t % r;
    if (o < 0) throw "Invalid level / row / col";
    return 20 + o * this.storageInfo.recordSize + 44;
  }

  _getTileEndAndContentType(e, t) {
    const r = e.subarray(t, t + 8);
    let o,
        i = 0;

    for (o = 0; o < 5; o++) i |= (255 & r[o]) << 8 * o;

    const s = 0xffffffffff & i;

    for (i = 0, o = 5; o < 8; o++) i |= (255 & r[o]) << 8 * (o - 5);

    return {
      position: s,
      recordSize: 0xffffffffff & i
    };
  }

  _toHexString4(e) {
    let t = e.toString(16);

    if (4 !== t.length) {
      let e = 4 - t.length;

      for (; e-- > 0;) t = "0" + t;
    }

    return t;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  readOnly: !0
})], x.prototype, "storageInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  type: String,
  json: {
    write: !0
  }
})], x.prototype, "datasetFormat", void 0), x = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.layers.support.rasterDatasets.CloudRaster")], x);
const I = x;


/***/ }),

/***/ 97683:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/DBFParser.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _byteStreamUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byteStreamUtils.js */ 90355);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(e){const t=e.fields,r=e.records,n=t.some((e=>"oid"===e.name.toLowerCase()))?"OBJECTID":"OID",i=[{name:n,type:"esriFieldTypeOID",alias:"OID"}].concat(t.map((e=>({name:e.name,type:"esriFieldType"+e.typeName,alias:e.name})))),s=i.map((e=>e.name)),a=[];let o=0,l=0;return r.forEach((e=>{const t={};for(t[n]=o++,l=1;l<s.length;l++)t[s[l]]=e[l-1];a.push({attributes:t})})),{displayFieldName:"",fields:i,features:a}}class r{static get supportedVersions(){return[5]}static parse(r){const n=new DataView(r),i=3&n.getUint8(0);if(3!==i)return{header:{version:i},recordSet:null};const s=n.getUint32(4,!0),a=n.getUint16(8,!0),o=n.getUint16(10,!0),l={version:i,recordCount:s,headerByteCount:a,recordByteCount:o};let p=32;const g=[],u=[];let d;if(3===i){for(;13!==n.getUint8(p);)d=String.fromCharCode(n.getUint8(p+11)).trim(),g.push({name:(0,_byteStreamUtils_js__WEBPACK_IMPORTED_MODULE_0__.bytesToUTF8)(new Uint8Array(r,p,11)),type:d,typeName:["String","Date","Double","Boolean","String","Integer"][["C","D","F","L","M","N"].indexOf(d)],length:n.getUint8(p+16)}),p+=32;if(p+=1,g.length>0)for(;u.length<s&&r.byteLength-p>o;){const t=[];32===n.getUint8(p)?(p+=1,g.forEach((n=>{if("C"===n.type)t.push((0,_byteStreamUtils_js__WEBPACK_IMPORTED_MODULE_0__.bytesToUTF8)(new Uint8Array(r,p,n.length)).trim());else if("N"===n.type)t.push(parseInt(String.fromCharCode.apply(null,new Uint8Array(r,p,n.length)).trim(),10));else if("F"===n.type)t.push(parseFloat(String.fromCharCode.apply(null,new Uint8Array(r,p,n.length)).trim()));else if("D"===n.type){const e=String.fromCharCode.apply(null,new Uint8Array(r,p,n.length)).trim();t.push(new Date(parseInt(e.substring(0,4),10),parseInt(e.substring(4,6),10)-1,parseInt(e.substring(6,8),10)))}p+=n.length})),u.push(t)):p+=o}}return{header:l,fields:g,records:u,recordSet:t({fields:g,records:u})}}}


/***/ }),

/***/ 75847:
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/ImageAuxRaster.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _BaseRaster_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BaseRaster.js */ 39461);
/* harmony import */ var _InMemoryRaster_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InMemoryRaster.js */ 45137);
/* harmony import */ var _pamParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pamParser.js */ 90849);
/* harmony import */ var _rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../rasterFormats/RasterCodec.js */ 96125);
/* harmony import */ var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rasterFunctions/pixelUtils.js */ 85572);
/* harmony import */ var _rasterTransforms_PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../rasterTransforms/PolynomialTransform.js */ 66294);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


















let d = class extends _BaseRaster_js__WEBPACK_IMPORTED_MODULE_11__.default {
  open(t) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.init();
      const e = yield _this._fetchData(t);
      let {
        spatialReference: r,
        statistics: s,
        histograms: a,
        transform: o
      } = yield _this._fetchAuxiliaryData(t);
      const i = !r;
      i && (r = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__.default({
        wkid: 3857
      })), null != a && a.length && null == s && (s = (0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_15__.estimateStatisticsFromHistograms)(a));
      const {
        width: n,
        height: m
      } = e;
      let p = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__.default({
        xmin: -.5,
        ymin: .5 - m,
        xmax: n - .5,
        ymax: .5,
        spatialReference: r
      });
      const f = o ? o.forwardTransform(p) : p;
      let d = !0;

      if (o) {
        const t = o.forwardCoefficients;
        d = t && 0 === t[1] && 0 === t[2], d && (o = null, p = f);
      }

      const y = new _InMemoryRaster_js__WEBPACK_IMPORTED_MODULE_12__.default({
        data: {
          extent: f,
          nativeExtent: p,
          transform: o,
          pixelBlock: e,
          statistics: s,
          histograms: a,
          keyProperties: {
            DateType: "Processed"
          },
          isPseudoSpatialReference: i
        }
      });
      yield y.open(), _this._set("rasterInfo", y.rasterInfo), _this._inMemoryRaster = y;
    })();
  }

  fetchRawTile(t, e, r, s = {}) {
    return this._inMemoryRaster.fetchRawTile(t, e, r, s);
  }

  _fetchData(t) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        data: r
      } = yield _this2.request(_this2.url, {
        responseType: "array-buffer",
        signal: null == t ? void 0 : t.signal
      }),
            s = (0,_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_14__.getFormat)(r).toUpperCase();
      if ("JPG" !== s && "PNG" !== s && "GIF" !== s && "BMP" !== s) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("image-aux-raster:open", "the data is not a supported format");

      _this2._set("datasetFormat", s);

      return yield _this2.decodePixelBlock(r, {
        format: "jpg",
        width: 1,
        height: 1,
        useCanvas: !0
      });
    })();
  }

  _fetchAuxiliaryData(t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var e, o;
      const i = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.unwrap)(null == t ? void 0 : t.signal),
            n = null != (e = _this3.ioConfig.skipExtensions) ? e : [],
            l = n.indexOf("aux.xml") > -1 ? null : _this3.request(_this3.url + ".aux.xml", {
        responseType: "xml",
        signal: i
      }),
            p = _this3.datasetFormat,
            c = "JPG" === p ? "jgw" : "PNG" === p ? "pgw" : "BMP" === p ? "bpw" : null,
            u = n.indexOf(c) > -1 ? null : _this3.request(_this3.url.slice(0, _this3.url.lastIndexOf(".")) + "." + c, {
        responseType: "text",
        signal: i
      }),
            h = yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.eachAlways)([l, u]);
      if (null != i && i.aborted) throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createAbortError)();
      const d = (0,_pamParser_js__WEBPACK_IMPORTED_MODULE_13__.parsePAMInfo)(null == (o = h[0].value) ? void 0 : o.data);

      if (!d.transform) {
        const t = h[1].value ? h[1].value.data.split("\n").slice(0, 6).map(t => Number(t)) : null;
        d.transform = 6 === (null == t ? void 0 : t.length) ? new _rasterTransforms_PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_16__.default({
          forwardCoefficients: [t[4], t[5], t[0], -t[1], t[2], -t[3]]
        }) : null;
      }

      return d;
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({
  type: String,
  json: {
    write: !0
  }
})], d.prototype, "datasetFormat", void 0), d = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.layers.support.rasterDatasets.ImageAuxRaster")], d);
const y = d;


/***/ }),

/***/ 44798:
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/ImageServerRaster.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _RasterInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../RasterInfo.js */ 42492);
/* harmony import */ var _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../RasterStorageInfo.js */ 69975);
/* harmony import */ var _serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../serviceTileInfoProperty.js */ 57275);
/* harmony import */ var _TileInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../TileInfo.js */ 87940);
/* harmony import */ var _TilemapCache_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../TilemapCache.js */ 55261);
/* harmony import */ var _BaseRaster_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./BaseRaster.js */ 39461);
/* harmony import */ var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../rasterFunctions/pixelUtils.js */ 85572);
/* harmony import */ var _rasterTransforms_GCSShiftTransform_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../rasterTransforms/GCSShiftTransform.js */ 91646);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../rest/support/FeatureSet.js */ 42762);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../geometry/Point.js */ 7309);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






















let S = class extends _BaseRaster_js__WEBPACK_IMPORTED_MODULE_16__.default {
  constructor() {
    super(...arguments), this._levelOffset = 0, this._slices = null, this._tilemapCache = null, this.datasetFormat = "RasterTileServer";
  }

  open(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.init();
      const s = e && e.signal,
            a = _this.sourceJSON ? {
        data: _this.sourceJSON
      } : yield _this.request(_this.url, {
        query: {
          f: "json"
        },
        signal: s
      });
      a.ssl && (_this.url = _this.url.replace(/^http:/i, "https:"));
      const r = a.data;
      if (_this.sourceJSON = r, !r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("imageserverraster:open", "cannot initialize tiled image service, missing service info");
      if (!r.tileInfo) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("imageserverraster:open", "use ImageryLayer to open non-tiled image services");

      _this._fixScaleInServiceInfo();

      const n = ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"];
      _this.tileType = r.cacheType, null == _this.tileType && (n.indexOf(r.tileInfo.format.toLowerCase()) > -1 ? _this.tileType = "Map" : "lerc" === r.tileInfo.format.toLowerCase() ? _this.tileType = "Elevation" : _this.tileType = "Raster"), _this.datasetName = r.name.slice(r.name.indexOf("/") + 1);
      const o = yield _this._fetchRasterInfo({
        signal: s
      });
      if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(o)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("image-server-raster:open", "cannot initialize image service");
      {
        const e = "Map" === _this.tileType ? (0,_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_13__.readServiceTileInfo)(r.tileInfo, r) : _TileInfo_js__WEBPACK_IMPORTED_MODULE_14__.default.fromJSON(r.tileInfo),
              {
          extent: t,
          pixelSize: i
        } = o,
              s = .5 / o.width * i.x;
        let a, l;
        const n = e.lodAt(Math.max.apply(null, e.lods.map(e => e.level)));
        "Map" !== _this.tileType && 0 !== r.maxScale && ("Raster" === _this.tileType ? (a = e.lods.filter(e => e.resolution === i.x)[0], a || (a = e.lods[e.lods.length - 1])) : (a = e.lods.filter(e => Math.abs(e.scale - r.maxScale) < s)[0], a || (a = e.lods.filter(e => e.scale > r.maxScale).sort((e, t) => e.scale > t.scale ? 1 : -1)[0])), i.x = i.y = a.resolution, o.width = Math.ceil((t.xmax - t.xmin) / i.x - .1), o.height = Math.ceil((t.ymax - t.ymin) / i.y - .1)), a || (a = n);
        const u = e.lodAt(Math.min.apply(null, e.lods.map(e => e.level)));
        "Map" === _this.tileType ? _this._levelOffset = e.lods[0].level : 0 !== r.minScale && "Elevation" === _this.tileType && (l = e.lods.filter(e => Math.abs(e.scale - r.minScale) < s)[0], _this._levelOffset = l.level - u.level), l || (l = u);
        const f = Math.max(i.x, i.y);
        (Math.abs(i.x - i.y) > s || !e.lods.some(e => Math.abs(e.resolution - f) < s)) && (i.x = i.y = a.resolution, o.width = Math.ceil((t.xmax - t.xmin) / i.x - .1), o.height = Math.ceil((t.ymax - t.ymin) / i.y - .1));
        const p = a.level - l.level,
              [d, y] = e.size,
              x = [];
        e.lods.forEach(e => {
          e.level >= l.level && e.level <= a.level && x.push({
            x: e.resolution,
            y: e.resolution
          });
        }), x.sort((e, t) => e.x - t.x);

        const g = _this.computeBlockBoundary(t, d, y, e.origin, x, p),
              v = x.length > 1 ? x.slice(1) : null;

        o.storageInfo = new _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_12__.default({
          blockWidth: e.size[0],
          blockHeight: e.size[1],
          pyramidBlockWidth: e.size[0],
          pyramidBlockHeight: e.size[1],
          pyramidResolutions: v,
          compression: e.format,
          origin: e.origin,
          firstPyramidLevel: 1,
          maximumPyramidLevel: p,
          tileInfo: e,
          blockBoundary: g
        }), _this._fixGCSShift(o), _this._set("rasterInfo", o);
      }

      if (r.capabilities.toLowerCase().indexOf("tilemap") > -1) {
        const e = {
          tileInfo: o.storageInfo.tileInfo,
          parsedUrl: (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__.urlToObject)(_this.url),
          url: _this.url,
          tileServers: [],
          type: "tile"
        };
        _this._tilemapCache = new _TilemapCache_js__WEBPACK_IMPORTED_MODULE_15__.TilemapCache({
          layer: e
        });
      }
    })();
  }

  fetchRawTile(e, t, i, s = {}) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this2._slices && null == s.sliceId) return null;
      const {
        storageInfo: a,
        extent: l
      } = _this2.rasterInfo,
            r = a.maximumPyramidLevel - e + _this2._levelOffset,
            n = `${_this2.url}/tile/${r}/${t}/${i}`,
            o = _this2._slices ? {
        sliceId: s.sliceId || 0
      } : null,
            {
        data: m
      } = yield _this2.request(n, {
        query: o,
        responseType: "array-buffer",
        signal: s.signal
      });
      if (!m) return null;
      const c = yield _this2.decodePixelBlock(m, {
        width: a.tileInfo.size[0],
        height: a.tileInfo.size[1],
        planes: null,
        pixelType: null,
        isPoint: "Elevation" === _this2.tileType
      }),
            h = a.blockBoundary[e];
      if ("jpg" !== a.compression || i > h.minCol && i < h.maxCol && t > h.minRow && t < h.maxRow) return c;

      const {
        origin: u,
        blockWidth: f,
        blockHeight: d
      } = a,
            {
        x: y,
        y: x
      } = _this2.getPyramidPixelSize(e),
            g = Math.round((l.xmin - u.x) / y) % f,
            v = Math.round((l.xmax - u.x) / y) % f,
            S = Math.round((u.y - l.ymax) / x) % d,
            w = Math.round((u.y - l.ymin) / x) % d,
            I = i === h.minCol ? g : 0,
            b = t === h.minRow ? S : 0,
            j = i === h.maxCol ? v : f,
            T = t === h.maxRow ? w : d;

      return (0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_17__.setValidBoundary)(c, {
        x: I,
        y: b
      }, {
        width: j - I,
        height: T - b
      }), c;
    })();
  }

  getSliceIndex(e) {
    if (!this._slices || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(e) || 0 === e.length) return null;
    const t = e;

    for (let i = 0; i < this._slices.length; i++) {
      const e = this._slices[i].multidimensionalDefinition;
      if (e.length === t.length && !e.some(e => {
        const i = t.filter(t => e.variableName === t.variableName && t.dimensionName === e.dimensionName)[0];
        if (!i) return !0;
        return (Array.isArray(e.values[0]) ? `${e.values[0][0]}-${e.values[0][1]}` : e.values[0]) !== (Array.isArray(i.values[0]) ? `${i.values[0][0]}-${i.values[0][1]}` : i.values[0]);
      })) return i;
    }

    return null;
  }

  fetchVariableStatisticsHistograms(e, t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = _this3.request(_this3.url + "/statistics", {
        query: {
          variable: e,
          f: "json"
        },
        signal: t
      }).then(e => {
        var t;
        return null == (t = e.data) ? void 0 : t.statistics;
      }),
            s = _this3.request(_this3.url + "/histograms", {
        query: {
          variable: e,
          f: "json"
        },
        signal: t
      }).then(e => {
        var t;
        return null == (t = e.data) ? void 0 : t.histograms;
      }),
            a = yield Promise.all([i, s]);

      return a[0] && a[0].forEach(e => {
        e.avg = e.mean, e.stddev = e.standardDeviation;
      }), {
        statistics: a[0] || null,
        histograms: a[1] || null
      };
    })();
  }

  computeBestPyramidLevelForLocation(e, t = {}) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this4._tilemapCache) return 0;

      let i = _this4.identifyPixelLocation(e, 0, (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.unwrap)(t.datumTransformation));

      if (null === i) return null;
      let s = 0;
      const {
        maximumPyramidLevel: l
      } = _this4.rasterInfo.storageInfo;
      let r = l - s + _this4._levelOffset;
      const n = i.srcLocation;

      for (; r >= 0;) {
        try {
          if ("available" === (yield _this4._tilemapCache.fetchAvailability(r, i.row, i.col, t))) break;
        } catch {}

        if (r--, s++, i = _this4.identifyPixelLocation(n, s, (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.unwrap)(t.datumTransformation)), null === i) return null;
      }

      return -1 === r || null == i ? null : s;
    })();
  }

  _fetchRasterInfo(e) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = _this5.sourceJSON,
            i = Math.ceil((t.extent.xmax - t.extent.xmin) / t.pixelSizeX - .1),
            s = Math.ceil((t.extent.ymax - t.extent.ymin) / t.pixelSizeY - .1),
            a = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_20__.default.fromJSON(t.spatialReference || t.extent.spatialReference);
      if ("Map" === _this5.tileType) return new _RasterInfo_js__WEBPACK_IMPORTED_MODULE_11__.default({
        width: i,
        height: s,
        bandCount: 3,
        extent: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_21__.default.fromJSON(t.extent),
        spatialReference: a,
        pixelSize: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_22__.default({
          x: t.pixelSizeX,
          y: t.pixelSizeY,
          spatialReference: a
        }),
        pixelType: "u8",
        statistics: null,
        keyProperties: {
          DataType: "processed"
        }
      });

      const {
        slice: l,
        signal: r
      } = e,
            n = !!t.hasRasterAttributeTable && _this5.request(_this5.url + "/rasterAttributeTable", {
        query: {
          slice: l,
          f: "json"
        },
        signal: r
      }).then(e => _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_19__.default.fromJSON(e.data)).catch(() => null),
            m = !!t.hasColormap && _this5.request(_this5.url + "/colormap", {
        query: {
          slice: l,
          f: "json"
        },
        signal: r
      }).then(e => {
        var t;
        return null == (t = e.data) ? void 0 : t.colormap;
      }),
            c = !!t.hasHistograms && _this5.request(_this5.url + "/histograms", {
        query: {
          slice: l,
          f: "json"
        },
        signal: r
      }).then(e => {
        var t;
        return null == (t = e.data) ? void 0 : t.histograms;
      }),
            h = _this5.request(_this5.url + "/keyProperties", {
        query: {
          f: "json"
        },
        signal: r
      }).then(e => e.data).catch(() => {}),
            u = !!t.hasMultidimensions && _this5._fetchMultidimensionalInfo(),
            f = !!t.hasMultidimensions && _this5.request(_this5.url + "/slices", {
        query: {
          f: "json"
        },
        signal: r
      }).then(e => e.data && e.data.slices).catch(() => {});

      return Promise.all([n, m, c, h, u, f]).then(e => {
        let l = null;

        if (t.minValues && t.minValues.length === t.bandCount) {
          l = [];

          for (let e = 0; e < t.minValues.length; e++) l.push({
            min: t.minValues[e],
            max: t.maxValues[e],
            avg: t.meanValues[e],
            stddev: t.stdvValues[e]
          });
        }

        return _this5._slices = e[5] || null, new _RasterInfo_js__WEBPACK_IMPORTED_MODULE_11__.default({
          width: i,
          height: s,
          bandCount: t.bandCount,
          extent: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_21__.default.fromJSON(t.extent),
          spatialReference: a,
          pixelSize: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_22__.default({
            x: t.pixelSizeX,
            y: t.pixelSizeY,
            spatialReference: a
          }),
          pixelType: t.pixelType.toLowerCase(),
          statistics: l,
          attributeTable: e[0] || null,
          colormap: e[1] || null,
          histograms: e[2] || null,
          keyProperties: e[3] || {},
          multidimensionalInfo: e[4] || null
        });
      });
    })();
  }

  _fetchMultidimensionalInfo(e) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var t;
      const i = yield _this6.request(_this6.url + "/multidimensionalInfo", {
        query: {
          f: "json"
        },
        signal: e
      }).then(e => {
        var t;
        return null == (t = e.data) ? void 0 : t.multidimensionalInfo;
      });
      return null != (t = i.variables) && t.length && i.variables.forEach(e => {
        var t;
        null != (t = e.statistics) && t.length && e.statistics.forEach(e => {
          e.avg = e.mean, e.stddev = e.standardDeviation;
        });
      }), i;
    })();
  }

  _fixScaleInServiceInfo() {
    const {
      sourceJSON: e
    } = this;
    e.minScale && e.minScale < 0 && (e.minScale = 0), e.maxScale && e.maxScale < 0 && (e.maxScale = 0);
  }

  _fixGCSShift(e) {
    const {
      extent: t,
      spatialReference: i
    } = e;
    0 === t.xmin && 360 === t.xmax && i.wkid && i.isGeographic && (e.nativeExtent = e.extent, e.transform = new _rasterTransforms_GCSShiftTransform_js__WEBPACK_IMPORTED_MODULE_18__.default(), e.extent = e.transform.forwardTransform(t));
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({
  type: String,
  json: {
    write: !0
  }
})], S.prototype, "datasetFormat", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()], S.prototype, "tileType", void 0), S = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.layers.support.rasterDatasets.ImageServerRaster")], S);
const w = S;


/***/ }),

/***/ 45137:
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/InMemoryRaster.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _RasterInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../RasterInfo.js */ 42492);
/* harmony import */ var _BaseRaster_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BaseRaster.js */ 39461);
/* harmony import */ var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../rasterFunctions/pixelUtils.js */ 85572);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ 96583);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/















let h = class extends _BaseRaster_js__WEBPACK_IMPORTED_MODULE_12__.default {
  constructor() {
    super(...arguments), this.datasetFormat = "MEMORY";
  }

  open(t) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var e;
      yield _this.init();
      const {
        pixelBlock: s,
        statistics: r,
        histograms: i,
        name: o,
        keyProperties: m,
        nativeExtent: n,
        transform: l
      } = _this.data,
            {
        width: h,
        height: d,
        pixelType: f
      } = s,
            u = _this.data.extent || new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__.default({
        xmin: -.5,
        ymin: .5,
        xmax: h - .5,
        ymax: d - .5,
        spatialReference: new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__.default({
          wkid: 3857
        })
      }),
            y = null != (e = _this.data.isPseudoSpatialReference) ? e : !_this.data.extent,
            x = {
        x: u.width / h,
        y: u.height / d
      },
            v = new _RasterInfo_js__WEBPACK_IMPORTED_MODULE_11__.default({
        width: h,
        height: d,
        pixelType: f,
        extent: u,
        nativeExtent: n,
        transform: l,
        pixelSize: x,
        spatialReference: u.spatialReference,
        bandCount: 3,
        keyProperties: m || {},
        statistics: r,
        isPseudoSpatialReference: y,
        histograms: i
      });
      _this.createRemoteDatasetStorageInfo(v, 512, 512), _this._set("rasterInfo", v), _this.updateTileInfo(), yield _this._buildInMemoryRaster(s, {
        width: 512,
        height: 512
      }, t), _this.datasetName = o, _this.url = "/InMemory/" + o;
    })();
  }

  fetchRawTile(t, e, s, r = {}) {
    const i = this._pixelBlockTiles.get(`${t}/${e}/${s}`);

    return Promise.resolve(i);
  }

  _buildInMemoryRaster(t, i, o) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const a = _this2.rasterInfo.storageInfo.maximumPyramidLevel,
            m = _this2.rasterJobHandler ? _this2.rasterJobHandler.split({
        pixelBlock: t,
        tileSize: i,
        maximumPyramidLevel: a
      }, o) : Promise.resolve((0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_13__.split)(t, i, a)),
            p = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(_this2.rasterInfo.statistics),
            c = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(_this2.rasterInfo.histograms),
            h = p && c ? Promise.resolve({
        statistics: null,
        histograms: null
      }) : _this2.rasterJobHandler ? _this2.rasterJobHandler.estimateStatisticsHistograms({
        pixelBlock: t
      }, o) : Promise.resolve((0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_13__.estimateStatisticsHistograms)(t)),
            d = yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.eachAlways)([m, h]);
      if (!d[0].value && d[1].value) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("inmemory-raster:open", "failed to build in memory raster");
      var f, u;
      (_this2._pixelBlockTiles = d[0].value, p) || (_this2.rasterInfo.statistics = null == (f = d[1].value) ? void 0 : f.statistics);
      c && (_this2.rasterInfo.histograms = null == (u = d[1].value) ? void 0 : u.histograms);
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({
  type: String,
  json: {
    write: !0
  }
})], h.prototype, "datasetFormat", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()], h.prototype, "data", void 0), h = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.layers.support.rasterDatasets.InMemoryRaster")], h);
const d = h;


/***/ }),

/***/ 92832:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/MRFRaster.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../PixelBlock.js */ 77847);
/* harmony import */ var _RasterInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../RasterInfo.js */ 42492);
/* harmony import */ var _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../RasterStorageInfo.js */ 69975);
/* harmony import */ var _BaseRaster_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BaseRaster.js */ 39461);
/* harmony import */ var _pamParser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pamParser.js */ 90849);
/* harmony import */ var _xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./xmlUtilities.js */ 47859);
/* harmony import */ var _rasterFormats_utils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../rasterFormats/utils.js */ 30869);
/* harmony import */ var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../rasterFunctions/pixelUtils.js */ 85572);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../geometry/Point.js */ 7309);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




















const I = new Map();
I.set("Int8", "s8"), I.set("UInt8", "u8"), I.set("Int16", "s16"), I.set("UInt16", "u16"), I.set("Int32", "s32"), I.set("UInt32", "u32"), I.set("Float32", "f32"), I.set("Float64", "f32"), I.set("Double64", "f32");
const b = new Map();
b.set("none", {
  blobExtension: ".til",
  isOneSegment: !0,
  decoderFormat: "bip"
}), b.set("lerc", {
  blobExtension: ".lrc",
  isOneSegment: !1,
  decoderFormat: "lerc"
}), b.set("deflate", {
  blobExtension: ".pzp",
  isOneSegment: !0,
  decoderFormat: "deflate"
}), b.set("jpeg", {
  blobExtension: ".pjg",
  isOneSegment: !0,
  decoderFormat: "jpg"
});
let w = class extends _BaseRaster_js__WEBPACK_IMPORTED_MODULE_13__.default {
  constructor() {
    super(...arguments), this._files = null, this._storageIndex = null, this.datasetFormat = "MRF";
  }

  open(t) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var e;
      yield _this.init(), _this.datasetName = _this.url.slice(_this.url.lastIndexOf("/") + 1);

      const o = t ? (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.unwrap)(t.signal) : null,
            i = yield _this.request(_this.url, {
        responseType: "xml",
        signal: o
      }),
            {
        rasterInfo: a,
        files: n
      } = _this._parseHeader(i.data);

      if (-1 === (null == (e = _this.ioConfig.skipExtensions) ? void 0 : e.indexOf("aux.xml"))) {
        const e = yield _this._fetchAuxiliaryData(t);
        var l;
        if (null != e) a.statistics = null != (l = e.statistics) ? l : a.statistics, a.histograms = e.histograms, e.histograms && !(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(a.statistics) && (a.statistics = (0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_17__.estimateStatisticsFromHistograms)(e.histograms));
      }

      _this._set("rasterInfo", a), _this._files = n;
      const f = yield _this.request(n.index, {
        responseType: "array-buffer",
        signal: o
      });
      _this._storageIndex = _this._parseIndex(f.data);

      const {
        blockWidth: c,
        blockHeight: p
      } = _this.rasterInfo.storageInfo,
            m = _this.rasterInfo.storageInfo.pyramidScalingFactor,
            {
        width: h,
        height: u
      } = _this.rasterInfo,
            d = [],
            y = _this._getBandSegmentCount();

      let x = 0,
          I = -1;

      for (; x < _this._storageIndex.length;) {
        I++;
        const t = Math.ceil(h / c / m ** I) - 1,
              e = Math.ceil(u / p / m ** I) - 1;
        x += 1 * t * (1 * e) * y * 4, d.push({
          maxRow: e,
          maxCol: t,
          minCol: 0,
          minRow: 0
        });
      }

      _this.rasterInfo.storageInfo.blockBoundary = d, I > 0 && (_this.rasterInfo.storageInfo.firstPyramidLevel = 1, _this.rasterInfo.storageInfo.maximumPyramidLevel = I), _this.updateTileInfo();
    })();
  }

  fetchRawTile(t, e, r, o = {}) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        blockWidth: i,
        blockHeight: n,
        blockBoundary: l
      } = _this2.rasterInfo.storageInfo,
            f = l[t];
      if (!f || f.maxRow < e || f.maxCol < r || f.minRow > e || f.minCol > r) return null;

      const {
        bandCount: c,
        pixelType: p
      } = _this2.rasterInfo,
            {
        ranges: m,
        actualTileWidth: h,
        actualTileHeight: u
      } = _this2._getTileLocation(t, e, r);

      if (!m || 0 === m.length) return null;

      if (0 === m[0].from && 0 === m[0].to) {
        const t = new Uint8Array(i * n);
        return new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_10__.default({
          width: i,
          height: n,
          pixels: null,
          mask: t,
          validPixelCount: 0
        });
      }

      const {
        bandIds: g
      } = _this2.ioConfig,
            d = _this2._getBandSegmentCount(),
            y = [];

      let x = 0;

      for (x = 0; x < d; x++) (!g || g.indexOf[x] > -1) && y.push(_this2.request(_this2._files.data, {
        range: {
          from: m[x].from,
          to: m[x].to
        },
        responseType: "array-buffer",
        signal: o.signal
      }));

      const I = yield Promise.all(y),
            w = I.map(t => t.data.byteLength).reduce((t, e) => t + e),
            A = new Uint8Array(w);
      let F = 0;

      for (x = 0; x < d; x++) A.set(new Uint8Array(I[x].data), F), F += I[x].data.byteLength;

      const _ = b.get(_this2.rasterInfo.storageInfo.compression).decoderFormat,
            M = yield _this2.decodePixelBlock(A.buffer, {
        width: i,
        height: n,
        format: _,
        planes: (null == g ? void 0 : g.length) || c,
        pixelType: p
      });

      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(_this2.rasterInfo.noDataValue) && "lerc" !== _ && !M.mask) {
        const t = _this2.rasterInfo.noDataValue[0];

        if (null != t) {
          const e = M.width * M.height,
                r = new Uint8Array(e);
          if (Math.abs(t) > 1e24) for (x = 0; x < e; x++) Math.abs((M.pixels[0][x] - t) / t) > 1e-6 && (r[x] = 1);else for (x = 0; x < e; x++) M.pixels[0][x] !== t && (r[x] = 1);
          M.mask = r;
        }
      }

      let j = 0,
          R = 0;

      if (h !== i || u !== n) {
        let t = M.mask;
        if (t) {
          for (x = 0; x < n; x++) if (R = x * i, x < u) for (j = h; j < i; j++) t[R + j] = 0;else for (j = 0; j < i; j++) t[R + j] = 0;
        } else for (t = new Uint8Array(i * n), M.mask = t, x = 0; x < u; x++) for (R = x * i, j = 0; j < h; j++) t[R + j] = 1;
      }

      return M;
    })();
  }

  _parseIndex(t) {
    if (t.byteLength % 16 > 0) throw "invalid array buffer must be multiples of 16";
    let e, r, s, o, i, a;

    if (_rasterFormats_utils_js__WEBPACK_IMPORTED_MODULE_16__.isPlatformLittleEndian) {
      for (r = new Uint8Array(t), o = new ArrayBuffer(t.byteLength), s = new Uint8Array(o), i = 0; i < t.byteLength / 4; i++) for (a = 0; a < 4; a++) s[4 * i + a] = r[4 * i + 3 - a];

      e = new Uint32Array(o);
    } else e = new Uint32Array(t);

    return e;
  }

  _getBandSegmentCount() {
    return b.get(this.rasterInfo.storageInfo.compression).isOneSegment ? 1 : this.rasterInfo.bandCount;
  }

  _getTileLocation(t, e, r) {
    const {
      blockWidth: s,
      blockHeight: o,
      pyramidScalingFactor: i
    } = this.rasterInfo.storageInfo,
          {
      width: a,
      height: n
    } = this.rasterInfo,
          l = this._getBandSegmentCount();

    let f,
        c,
        p,
        m = 0,
        h = 0;

    for (p = 0; p < t; p++) h = i ** p, f = Math.ceil(a / s / h), c = Math.ceil(n / o / h), m += f * c;

    h = i ** t, f = Math.ceil(a / s / h), c = Math.ceil(n / o / h), m += e * f + r, m *= 4 * l;

    const u = this._storageIndex.subarray(m, m + 4 * l);

    let g = 0,
        d = 0;
    const y = [];

    for (let x = 0; x < l; x++) g = u[4 * x + 0] * 2 ** 32 + u[4 * x + 1], d = g + u[4 * x + 2] * 2 ** 32 + u[4 * x + 3], y.push({
      from: g,
      to: d
    });

    return {
      ranges: y,
      actualTileWidth: r < f - 1 ? s : Math.ceil(a / h) - s * (f - 1),
      actualTileHeight: e < c - 1 ? o : Math.ceil(n / h) - o * (c - 1)
    };
  }

  _parseHeader(t) {
    const r = (0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__.getElement)(t, "MRF_META/Raster");
    if (!r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("mrf:open", "not a valid MRF format");
    const s = (0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__.getElement)(r, "Size"),
          o = parseInt(s.getAttribute("x"), 10),
          i = parseInt(s.getAttribute("y"), 10),
          a = parseInt(s.getAttribute("c"), 10),
          f = ((0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__.getElementValue)(r, "Compression") || "none").toLowerCase();
    if (!b.has(f)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("mrf:open", "currently does not support compression " + f);
    const p = (0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__.getElementValue)(r, "DataType") || "UInt8",
          u = I.get(p);
    if (null == u) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("mrf:open", "currently does not support pixel type " + p);
    const g = (0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__.getElement)(r, "PageSize"),
          w = parseInt(g.getAttribute("x"), 10),
          A = parseInt(g.getAttribute("y"), 10),
          F = (0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__.getElement)(r, "DataValues");

    let _, M;

    F && (M = F.getAttribute("NoData"), null != M && (_ = M.trim().split(" ").map(t => parseFloat(t))));
    if ((0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__.getElement)(t, "MRF_META/CachedSource")) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("mrf:open", "currently does not support MRF referencing other data files");
    const j = (0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__.getElement)(t, "MRF_META/GeoTags"),
          R = (0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__.getElement)(j, "BoundingBox");
    if (null == R) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("mrf:open", "missing node MRF_META/GeoTags/BoundingBox");
    const T = parseFloat(R.getAttribute("minx")),
          S = parseFloat(R.getAttribute("miny")),
          k = parseFloat(R.getAttribute("maxx")),
          C = parseFloat(R.getAttribute("maxy")),
          B = (0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__.getElementValue)(j, "Projection") || "",
          U = (0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__.getElementValue)(t, "datafile"),
          v = (0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__.getElementValue)(t, "IndexFile");
    let E;
    if ("LOCAL_CS[]" !== B) if (B.toLowerCase().startsWith("epsg:")) {
      const t = Number(B.slice(5));
      isNaN(t) || 0 === t || (E = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__.default({
        wkid: t
      }));
    } else E = (0,_pamParser_js__WEBPACK_IMPORTED_MODULE_14__.parseSpatialReference)(B);
    const L = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_19__.default(T, S, k, C);
    L.spatialReference = E;
    const O = (0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_15__.getElement)(t, "MRF_META/Rsets"),
          P = parseInt(O && O.getAttribute("scale") || "2", 10),
          D = new _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_12__.default({
      origin: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_20__.default({
        x: L.xmin,
        y: L.ymax,
        spatialReference: E
      }),
      blockWidth: w,
      blockHeight: A,
      pyramidBlockWidth: w,
      pyramidBlockHeight: A,
      compression: f,
      pyramidScalingFactor: P
    }),
          H = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_20__.default({
      x: (k - T) / o,
      y: (C - S) / i,
      spatialReference: E
    });
    return {
      rasterInfo: new _RasterInfo_js__WEBPACK_IMPORTED_MODULE_11__.default({
        width: o,
        height: i,
        extent: L,
        spatialReference: E,
        bandCount: a,
        pixelType: u,
        pixelSize: H,
        noDataValue: _,
        storageInfo: D
      }),
      files: {
        mrf: this.url,
        index: v || this.url.replace(".mrf", ".idx"),
        data: U || this.url.replace(".mrf", b.get(f).blobExtension)
      }
    };
  }

  _fetchAuxiliaryData(t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        const {
          data: e
        } = yield _this3.request(_this3.url + ".aux.xml", {
          responseType: "xml",
          signal: null == t ? void 0 : t.signal
        });
        return (0,_pamParser_js__WEBPACK_IMPORTED_MODULE_14__.parsePAMInfo)(e);
      } catch {
        return null;
      }
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], w.prototype, "_files", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], w.prototype, "_storageIndex", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  type: String,
  json: {
    write: !0
  }
})], w.prototype, "datasetFormat", void 0), w = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.layers.support.rasterIO.MRFRaster")], w);
const A = w;


/***/ }),

/***/ 5170:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/RasterFactory.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _CloudRaster_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CloudRaster.js */ 82184);
/* harmony import */ var _ImageAuxRaster_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageAuxRaster.js */ 75847);
/* harmony import */ var _ImageServerRaster_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageServerRaster.js */ 44798);
/* harmony import */ var _MRFRaster_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MRFRaster.js */ 92832);
/* harmony import */ var _TIFFRaster_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TIFFRaster.js */ 1192);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






const c = new Map();
c.set("CRF", {
  desc: "Cloud Raster Format",
  constructor: _CloudRaster_js__WEBPACK_IMPORTED_MODULE_2__.default
}), c.set("MRF", {
  desc: "Meta Raster Format",
  constructor: _MRFRaster_js__WEBPACK_IMPORTED_MODULE_5__.default
}), c.set("TIFF", {
  desc: "GeoTIFF",
  constructor: _TIFFRaster_js__WEBPACK_IMPORTED_MODULE_6__.default
}), c.set("RasterTileServer", {
  desc: "Raster Tile Server",
  constructor: _ImageServerRaster_js__WEBPACK_IMPORTED_MODULE_4__.default
}), c.set("JPG", {
  desc: "JPG Raster Format",
  constructor: _ImageAuxRaster_js__WEBPACK_IMPORTED_MODULE_3__.default
}), c.set("PNG", {
  desc: "PNG Raster Format",
  constructor: _ImageAuxRaster_js__WEBPACK_IMPORTED_MODULE_3__.default
}), c.set("GIF", {
  desc: "GIF Raster Format",
  constructor: _ImageAuxRaster_js__WEBPACK_IMPORTED_MODULE_3__.default
}), c.set("BMP", {
  desc: "BMP Raster Format",
  constructor: _ImageAuxRaster_js__WEBPACK_IMPORTED_MODULE_3__.default
});

class n {
  static get supportedFormats() {
    const t = new Set();
    return c.forEach((r, e) => t.add(e)), t;
  }

  static open(r) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        url: e,
        ioConfig: s,
        sourceJSON: o
      } = r;
      let a = r.datasetFormat;
      null == a && e.lastIndexOf(".") && (a = e.slice(e.lastIndexOf(".") + 1).toUpperCase()), "OVR" === a || "TIF" === a ? a = "TIFF" : "JPG" !== a && "JPEG" !== a && "JFIF" !== a || (a = "JPG"), e.toLowerCase().indexOf("/imageserver") > -1 && -1 === e.toLowerCase().indexOf("/wcsserver") && (a = "RasterTileServer");
      const n = {
        url: e,
        sourceJSON: o,
        datasetFormat: a,
        ioConfig: s || {
          bandIds: null,
          sampling: null
        }
      };
      let i, u;
      if (_this.supportedFormats.has(a)) return i = c.get(a).constructor, u = new i(n), yield u.open({
        signal: r.signal
      }), u;
      if (a) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("rasterfactory:open", "not a supported format " + a);
      const l = Array.from(c.keys());
      let m = 0;

      const F = function () {
        return a = l[m++], a ? (i = c.get(a).constructor, u = new i(n), u.open({
          signal: r.signal
        }).then(() => u).catch(() => F())) : null;
      };

      return F();
    })();
  }

  static register(t, r, e) {
    c.has(t.toUpperCase()) || c.set(t.toUpperCase(), {
      desc: r,
      constructor: e
    });
  }

}



/***/ }),

/***/ 1192:
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/TIFFRaster.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _RasterInfo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../RasterInfo.js */ 42492);
/* harmony import */ var _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../RasterStorageInfo.js */ 69975);
/* harmony import */ var _BaseRaster_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BaseRaster.js */ 39461);
/* harmony import */ var _pamParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pamParser.js */ 90849);
/* harmony import */ var _chunks_TiffDecoder_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../chunks/TiffDecoder.js */ 54183);
/* harmony import */ var _rasterFormats_TiffTags_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rasterFormats/TiffTags.js */ 49804);
/* harmony import */ var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../rasterFunctions/pixelUtils.js */ 85572);
/* harmony import */ var _rasterTransforms_PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../rasterTransforms/PolynomialTransform.js */ 66294);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../geometry/Point.js */ 7309);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





















const b = function (e, t) {
  const i = e.get(t);
  return i && i.values;
},
      E = function (e, t) {
  const i = e.get(t);
  return i && i.values[0];
};

let S = class extends _BaseRaster_js__WEBPACK_IMPORTED_MODULE_12__.default {
  constructor() {
    super(...arguments), this._files = null, this._headerInfo = null, this._bufferSize = 1048576, this.datasetFormat = "TIFF";
  }

  open(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var s, a, l;
      yield _this.init();
      const u = e ? (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.unwrap)(e.signal) : null,
            {
        data: c
      } = yield _this.request(_this.url, {
        range: {
          from: 0,
          to: _this._bufferSize
        },
        responseType: "array-buffer",
        signal: u
      });
      if (!c) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("tiffraster:open", "failed to open url " + _this.url);
      _this.datasetName = _this.url.slice(_this.url.lastIndexOf("/") + 1);
      const {
        littleEndian: h,
        firstIFD: d,
        isBigTiff: y
      } = (0,_chunks_TiffDecoder_js__WEBPACK_IMPORTED_MODULE_14__.p)(c),
            b = [];
      yield _this.readIFDs(b, c, h, d, 0, y ? 8 : 4, u);
      const E = (0,_chunks_TiffDecoder_js__WEBPACK_IMPORTED_MODULE_14__.g)(b),
            {
        width: S,
        height: v,
        tileWidth: F,
        tileHeight: R,
        planes: _,
        pixelType: k,
        compression: j,
        firstPyramidLevel: B,
        maximumPyramidLevel: D,
        pyramidBlockWidth: L,
        pyramidBlockHeight: z,
        tileBoundary: O,
        affine: P,
        metadata: H
      } = E,
            A = (null == (s = E.extent.spatialReference) ? void 0 : s.wkt) || (null == (a = E.extent.spatialReference) ? void 0 : a.wkid);
      let G = (0,_pamParser_js__WEBPACK_IMPORTED_MODULE_13__.parseSpatialReference)(A),
          q = !1;
      null == G && (q = !0, G = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_18__.default({
        wkid: 3857
      }));
      const C = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_19__.default({ ...E.extent,
        spatialReference: G
      }),
            W = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_20__.default(C ? {
        x: C.xmin,
        y: C.ymax,
        spatialReference: G
      } : {
        x: 0,
        y: 0
      }),
            U = new _RasterStorageInfo_js__WEBPACK_IMPORTED_MODULE_11__.default({
        blockWidth: F,
        blockHeight: R,
        pyramidBlockWidth: L,
        pyramidBlockHeight: z,
        compression: j,
        origin: W,
        firstPyramidLevel: B,
        maximumPyramidLevel: D,
        blockBoundary: O
      }),
            Y = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_20__.default({
        x: (C.xmax - C.xmin) / S,
        y: (C.ymax - C.ymin) / v,
        spatialReference: G
      }),
            M = H ? {
        BandProperties: H.bandProperties,
        DataType: H.dataType
      } : {},
            N = new _RasterInfo_js__WEBPACK_IMPORTED_MODULE_10__.default({
        width: S,
        height: v,
        bandCount: _,
        pixelType: k,
        compression: j,
        pixelSize: Y,
        storageInfo: U,
        spatialReference: G,
        isPseudoSpatialReference: q,
        keyProperties: M,
        extent: C,
        statistics: H ? H.statistics : null
      });

      if (null != P && P.length && (N.nativeExtent = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_19__.default({
        xmin: -.5,
        ymin: .5 - v,
        xmax: S - .5,
        ymax: .5,
        spatialReference: G
      }), N.transform = new _rasterTransforms_PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_17__.default({
        polynomialOrder: 1,
        forwardCoefficients: [P[2] + P[0] / 2, P[5] - P[3] / 2, P[0], P[3], -P[1], -P[4]]
      }), N.extent = N.transform.forwardTransform(N.nativeExtent), N.pixelSize = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_20__.default({
        x: (C.xmax - C.xmin) / S,
        y: (C.ymax - C.ymin) / v,
        spatialReference: G
      }), U.origin.x = -.5, U.origin.y = .5), null == (l = _this.ioConfig.skipExtensions) || !l.includes("aux.xml")) {
        const t = yield _this._fetchAuxiliaryData(e);

        if (null != t) {
          var K;

          if (N.statistics = null != (K = t.statistics) ? K : N.statistics, N.histograms = t.histograms, t.histograms && !(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(N.statistics) && (N.statistics = (0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_16__.estimateStatisticsFromHistograms)(t.histograms)), t.transform && !P) {
            N.transform = t.transform, N.nativeExtent = N.extent;
            const e = N.transform.forwardTransform(N.nativeExtent);
            N.pixelSize = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_20__.default({
              x: (e.xmax - e.xmin) / S,
              y: (e.ymax - e.ymin) / v,
              spatialReference: G
            }), N.extent = e;
          }

          N.spatialReference || (N.spatialReference = t.spatialReference);
        }
      }

      if (_this._set("rasterInfo", N), _this._headerInfo = {
        littleEndian: h,
        isBigTiff: y,
        ifds: b,
        ...E
      }, !_this._headerInfo.isSupported) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("tiffraster:open", "this tiff is not supported: " + _this._headerInfo.message);

      _this.updateTileInfo();
    })();
  }

  fetchRawTile(e, t, i, r = {}) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var s;
      if (null == (s = _this2._headerInfo) || !s.isSupported || _this2.isBlockOutside(e, t, i)) return null;

      const a = _this2.getTileLocation(e, t, i);

      if (!a) return null;
      const {
        ranges: n,
        actualTileWidth: o,
        actualTileHeight: l,
        ifd: f
      } = a,
            u = n.map(e => _this2.request(_this2.url, {
        range: e,
        responseType: "array-buffer",
        signal: r.signal
      })),
            m = yield Promise.all(u),
            p = m.map(e => e.data.byteLength).reduce((e, t) => e + t),
            c = 1 === m.length ? m[0].data : new ArrayBuffer(p),
            h = [0],
            d = [0];

      if (m.length > 1) {
        const e = new Uint8Array(c);

        for (let t = 0, i = 0; t < m.length; t++) {
          const r = m[t].data;
          e.set(new Uint8Array(r), i), h[t] = i, i += r.byteLength, d[t] = r.byteLength;
        }
      }

      const {
        blockWidth: y,
        blockHeight: g
      } = _this2.getBlockWidthHeight(e),
            x = yield _this2.decodePixelBlock(c, {
        format: "tiff",
        customOptions: {
          headerInfo: _this2._headerInfo,
          ifd: f,
          offsets: h,
          sizes: d
        },
        width: y,
        height: g,
        planes: null,
        pixelType: null
      });

      let T, I, w;

      if (o !== y || l !== g) {
        let e = x.mask;
        if (e) {
          for (T = 0; T < g; T++) if (w = T * y, T < l) for (I = o; I < y; I++) e[w + I] = 0;else for (I = 0; I < y; I++) e[w + I] = 0;
        } else for (e = new Uint8Array(y * g), x.mask = e, T = 0; T < l; T++) for (w = T * y, I = 0; I < o; I++) e[w + I] = 1;
      }

      return x;
    })();
  }

  readIFDs(e, t, i, r, s, a = 4, n) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!r) return null;

      if (r >= t.byteLength || r < 0) {
        t = (yield _this3.request(_this3.url, {
          range: {
            from: r + s,
            to: r + s + _this3._bufferSize
          },
          responseType: "array-buffer",
          signal: n
        })).data, s = r + s, r = 0;
      }

      const o = yield _this3.readIFD(t, i, r, s, _rasterFormats_TiffTags_js__WEBPACK_IMPORTED_MODULE_15__.default.TIFF_TAGS, a, n);
      if (e.push(o.ifd), !o.nextIFD) return null;
      yield _this3.readIFDs(e, t, i, o.nextIFD - s, s, a, n);
    })();
  }

  readIFD(e, t, i, r, s = _rasterFormats_TiffTags_js__WEBPACK_IMPORTED_MODULE_15__.default.TIFF_TAGS, a = 4, n) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!e) return null;
      const o = (0,_chunks_TiffDecoder_js__WEBPACK_IMPORTED_MODULE_14__.b)(e, t, i, r, s, a);

      if (o.success) {
        const i = [];

        if (o.ifd.forEach(e => {
          e.values || i.push(e);
        }), i.length > 0) {
          const s = i.map(e => e.offlineOffsetSize),
                a = Math.min.apply(null, s.map(e => e[0]));

          if (Math.min.apply(null, s.map(e => e[0] + e[1])) - a <= _this4._bufferSize) {
            const {
              data: s
            } = yield _this4.request(_this4.url, {
              range: {
                from: a,
                to: a + _this4._bufferSize
              },
              responseType: "array-buffer",
              signal: n
            });
            e = s, r = a, i.forEach(i => (0,_chunks_TiffDecoder_js__WEBPACK_IMPORTED_MODULE_14__.c)(e, t, i, r));
          }
        }

        if (o.ifd.has("GEOKEYDIRECTORY")) {
          const i = o.ifd.get("GEOKEYDIRECTORY"),
                s = i.values;

          if (s && s.length > 4) {
            const a = s[0] + "." + s[1] + "." + s[2],
                  o = yield _this4.readIFD(e, t, i.valueOffset + 6 - r, r, _rasterFormats_TiffTags_js__WEBPACK_IMPORTED_MODULE_15__.default.GEO_KEYS, 2, n);
            i.data = o.ifd, i.data && i.data.set("GEOTIFFVersion", {
              id: 0,
              type: 2,
              valueCount: 1,
              valueOffset: null,
              values: [a]
            });
          }
        }

        return o;
      }

      if (o.requiredBufferSize && o.requiredBufferSize !== e.byteLength) {
        const i = yield _this4.request(_this4.url, {
          range: {
            from: r,
            to: r + o.requiredBufferSize + 4
          },
          responseType: "array-buffer",
          signal: n
        });
        return (e = i.data).byteLength < o.requiredBufferSize ? null : _this4.readIFD(e, t, 0, r, _rasterFormats_TiffTags_js__WEBPACK_IMPORTED_MODULE_15__.default.TIFF_TAGS, 4, n);
      }
    })();
  }

  getTileLocation(e, t, i) {
    const {
      firstPyramidLevel: r,
      blockBoundary: s
    } = this.rasterInfo.storageInfo,
          a = 0 === e ? 0 : e - (r - 1),
          n = this._headerInfo.ifds[a];
    if (!n) return null;
    const o = (0,_chunks_TiffDecoder_js__WEBPACK_IMPORTED_MODULE_14__.i)(n, this._headerInfo),
          l = b(n, "TILEOFFSETS");
    if (void 0 === l) return null;
    const f = b(n, "TILEBYTECOUNTS"),
          {
      minRow: u,
      minCol: m,
      maxRow: p,
      maxCol: c
    } = s[a];
    if (t > p || i > c || t < u || i < m) return null;
    const h = E(n, "IMAGEWIDTH"),
          y = E(n, "IMAGELENGTH"),
          g = E(n, "TILEWIDTH"),
          x = E(n, "TILELENGTH"),
          T = o ? this.rasterInfo.bandCount : 1,
          I = T * t * (c + 1) + i,
          w = [{
      from: l[I],
      to: l[I + T - 1] + f[I + T - 1] - 1
    }];

    if (o) {
      let e = !0;

      for (let t = 0; t < T; t++) if (l[I + t] + f[I + t] !== l[I + t + 1]) {
        e = !1;
        break;
      }

      if (!e) for (let t = 0; t < T; t++) w[t] = {
        from: l[I + t],
        to: l[I + t] + f[I + t] - 1
      };
    }

    const S = l[I],
          v = f[I];
    if (null == S || null == v) return null;
    return {
      ranges: w,
      ifd: n,
      actualTileWidth: i === c ? h % g : g,
      actualTileHeight: t === p ? y % x : x
    };
  }

  _fetchAuxiliaryData(e) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        const {
          data: t
        } = yield _this5.request(_this5.url + ".aux.xml", {
          responseType: "xml",
          signal: null == e ? void 0 : e.signal
        });
        return (0,_pamParser_js__WEBPACK_IMPORTED_MODULE_13__.parsePAMInfo)(t);
      } catch {
        return null;
      }
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], S.prototype, "_files", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], S.prototype, "_headerInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], S.prototype, "_bufferSize", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  type: String,
  json: {
    write: !0
  }
})], S.prototype, "datasetFormat", void 0), S = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.layers.support.rasterDatasets.TIFFRaster")], S);
const v = S;


/***/ }),

/***/ 90849:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/pamParser.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parsePAMInfo": () => (/* binding */ d),
/* harmony export */   "parseSpatialReference": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmlUtilities.js */ 47859);
/* harmony import */ var _rasterTransforms_PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rasterTransforms/PolynomialTransform.js */ 66294);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ 96583);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(e,t){if(!e||!t)return null;const n=[];for(let r=0;r<e.length;r++)n.push(e[r]),n.push(t[r]);return n}function u(e){var n;const l=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElement)(e,"GeodataXform"),u=c((0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementNumericValue)(l,"SpatialReference/WKID")||(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementValue)(l,"SpatialReference/WKT"));if("typens:PolynomialXform"!==l.getAttribute("xsi:type"))return{spatialReference:u,transform:null};const f=null!=(n=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementNumericValue)(l,"PolynomialOrder"))?n:1,m=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementNumericValues)(l,"CoeffX/Double"),d=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementNumericValues)(l,"CoeffY/Double"),p=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementNumericValues)(l,"InverseCoeffX/Double"),S=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementNumericValues)(l,"InverseCoeffY/Double"),C=o(m,d),I=o(p,S);return{spatialReference:u,transform:new _rasterTransforms_PolynomialTransform_js__WEBPACK_IMPORTED_MODULE_2__.default({spatialReference:u,polynomialOrder:f,forwardCoefficients:C,inverseCoefficients:I})}}function f(e){var a;const i=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementNumericValue)(e,"NoDataValue"),l=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElement)(e,"Histograms/HistItem"),o=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementNumericValue)(l,"HistMin"),u=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementNumericValue)(l,"HistMax"),f=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementNumericValue)(l,"BucketCount"),c=null==(a=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementValue)(l,"HistCounts"))?void 0:a.split("|").map((e=>Number(e)));let m,d,p,S;(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElements)(e,"Metadata/MDI").forEach((e=>{var t;const n=Number(null!=(t=e.textContent)?t:e.nodeValue);switch(e.getAttribute("key").toUpperCase()){case"STATISTICS_MINIMUM":m=n;break;case"STATISTICS_MAXIMUM":d=n;break;case"STATISTICS_MEAN":p=n;break;case"STATISTICS_STDDEV":S=n}}));const C=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementNumericValue)(e,"Metadata/SourceBandIndex");return{noDataValue:i,histogram:null!=c&&c.length&&null!=m&&null!=d?{min:o,max:u,size:f||c.length,counts:c}:null,sourceBandIndex:C,statistics:null!=m&&null!=d?{min:m,max:d,avg:p,stddev:S}:null}}function c(e){if(!e)return null;let t=Number(e);if(!isNaN(t)&&0!==t)return new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__.default({wkid:t});if((e=String(e)).startsWith("COMPD_CS")){if(!e.includes("VERTCS")||!e.includes("GEOGCS")&&!e.startsWith("PROJCS"))return null;const n=e.indexOf("VERTCS"),r=e.indexOf("PROJCS"),s=r>-1?r:e.indexOf("GEOGCS");if(-1===s)return null;const a=e.slice(s,e.lastIndexOf("]",n)+1).trim(),i=e.slice(n,e.lastIndexOf("]")).trim();t=m(a);const o=new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__.default(t?{wkid:t}:{wkt:a}),u=m(i);return u&&(o.vcsWkid=u),o}return e.startsWith("GEOGCS")||e.startsWith("PROJCS")?(t=m(e),new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__.default(0!==t?{wkid:t}:{wkt:e})):null}function m(e){var t;const n=e.replace(/\]/g,"[").replace(/\"/g,"").split("[").map((e=>e.trim())).filter((e=>""!==e)),r=n[n.length-1].split(","),s=null==(t=r[0])?void 0:t.toLowerCase();if(("epsg"===s||"esri"===s)&&e.endsWith('"]]')){const e=Number(r[1]);if(!isNaN(e)&&0!==e)return e}return 0}function d(r){var s;if("pamdataset"!==(null==r||null==(s=r.documentElement.tagName)?void 0:s.toLowerCase()))return{};const a={spatialReference:null,transform:null,metadata:{},rasterBands:[],statistics:null,histograms:null};r.documentElement.childNodes.forEach((r=>{if(1===r.nodeType)if((0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.isSameTagIgnoreNS)(r,"SRS")){if(!a.spatialReference){const e=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementValue)(r);a.spatialReference=c(e)}}else if((0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.isSameTagIgnoreNS)(r,"Metadata"))if("xml:ESRI"===r.getAttribute("domain")){const{spatialReference:e,transform:t}=u(r);a.transform=t,a.spatialReference||(a.spatialReference=e)}else{(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElements)(r,"MDI").forEach((e=>a.metadata[e.getAttribute("key")]=(0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.getElementValue)(e)))}else if((0,_xmlUtilities_js__WEBPACK_IMPORTED_MODULE_1__.isSameTagIgnoreNS)(r,"PAMRasterBand")){const e=f(r);null!=e.sourceBandIndex&&null==a.rasterBands[e.sourceBandIndex]?a.rasterBands[e.sourceBandIndex]=e:a.rasterBands.push(e)}}));const i=a.rasterBands;if(i){const e=!!i[0].statistics;a.statistics=e?i.map((e=>e.statistics)):null;const t=!!i[0].histogram;a.histograms=t?i.map((e=>e.histogram)):null}return a}


/***/ }),

/***/ 47859:
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/xmlUtilities.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getElement": () => (/* binding */ e),
/* harmony export */   "getElementNumericValue": () => (/* binding */ o),
/* harmony export */   "getElementNumericValues": () => (/* binding */ u),
/* harmony export */   "getElementValue": () => (/* binding */ t),
/* harmony export */   "getElementValues": () => (/* binding */ l),
/* harmony export */   "getElements": () => (/* binding */ n),
/* harmony export */   "getNodeNameIgnoreNS": () => (/* binding */ c),
/* harmony export */   "getSpaceDelimitedNumericValues": () => (/* binding */ r),
/* harmony export */   "isSameTagIgnoreNS": () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(e,t){if(!e||!t)return[];let l=t;t.indexOf("/")>-1?(l=t.slice(0,t.indexOf("/")),t=t.slice(t.indexOf("/")+1)):t="";const r=[];if(t){const u=n(e,l);for(let e=0;e<u.length;e++){n(u[e],t).forEach((n=>r.push(n)))}return r}const u=e.getElementsByTagNameNS("*",l);if(!u||0===u.length)return[];for(let n=0;n<u.length;n++)r.push(u[n]||u.item[n]);return r}function e(t,l){if(!t||!l)return null;let r=l;l.indexOf("/")>-1?(r=l.slice(0,l.indexOf("/")),l=l.slice(l.indexOf("/")+1)):l="";const u=n(t,r);return u.length>0?l?e(u[0],l):u[0]:null}function t(n,t=null){const l=t?e(n,t):n;let r;return l?(r=l.textContent||l.nodeValue,r?r.trim():null):null}function l(e,t){const l=n(e,t),r=[];let u;for(let n=0;n<l.length;n++)u=l[n].textContent||l[n].nodeValue,u&&(u=u.trim(),""!==u&&r.push(u));return r}function r(n,e=null){const l=t(n,e);return null==l?void 0:l.split(" ").map((n=>Number(n)))}function u(n,e){return l(n,e).map((n=>Number(n)))}function o(n,e){const l=t(n,e);return Number(l)}function i(n,e){var t;const l=null==n||null==(t=n.nodeName)?void 0:t.toLowerCase(),r=e.toLowerCase();return l.slice(l.lastIndexOf(":")+1)===r}function c(n){return n.nodeName.slice(n.nodeName.lastIndexOf(":")+1)}


/***/ })

}]);
//# sourceMappingURL=7276.b86de284c8a917c3236e.js.map