"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[85],{

/***/ 70085:
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/StreamLayer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ee)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry.js */ 61243);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PopupTemplate.js */ 95821);
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderers/ClassBreaksRenderer.js */ 25938);
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../renderers/DictionaryRenderer.js */ 15206);
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renderers/DotDensityRenderer.js */ 51471);
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderers/HeatmapRenderer.js */ 16008);
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../renderers/Renderer.js */ 6557);
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../renderers/SimpleRenderer.js */ 78477);
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../renderers/UniqueValueRenderer.js */ 96337);
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../renderers/support/jsonUtils.js */ 94111);
/* harmony import */ var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../renderers/support/types.js */ 15196);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../symbols.js */ 58650);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../core/accessorSupport/extensions/serializableProperty/reader.js */ 83421);
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../geometry/support/typeUtils.js */ 557);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ 41122);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ 52166);
/* harmony import */ var _mixins_FeatureEffectLayer_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./mixins/FeatureEffectLayer.js */ 62932);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ 53730);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./mixins/TemporalLayer.js */ 77932);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./support/featureReductionUtils.js */ 38750);
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./support/fieldProperties.js */ 80839);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./support/fieldUtils.js */ 81451);
/* harmony import */ var _support_LabelClass_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./support/LabelClass.js */ 51331);
/* harmony import */ var _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./support/labelingInfo.js */ 93560);
/* harmony import */ var _support_PurgeOptions_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./support/PurgeOptions.js */ 13986);
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../renderers/support/styleUtils.js */ 62840);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../rest/support/Query.js */ 37995);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../support/popupUtils.js */ 81569);
/* harmony import */ var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../symbols/support/ElevationInfo.js */ 80123);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../geometry/Extent.js */ 70157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


















































const X = _core_Logger_js__WEBPACK_IMPORTED_MODULE_16__.default.getLogger("esri.layers.StreamLayer"),
      Y = (0,_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_40__.defineFieldProperties)();
let Z = class extends (0,_mixins_FeatureEffectLayer_js__WEBPACK_IMPORTED_MODULE_32__.FeatureEffectLayer)((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_30__.BlendLayer)((0,_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_37__.TemporalLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_36__.ScaleRangeLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_35__.RefreshableLayer)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_29__.ArcGISService)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_33__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_34__.PortalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_18__.MultiOriginJSONMixin)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_31__.CustomParametersMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_28__.default)))))))))) {
  constructor(...e) {
    super(...e), this.copyright = null, this.definitionExpression = null, this.displayField = null, this.elevationInfo = null, this.featureReduction = null, this.fields = null, this.fieldsIndex = null, this.geometryDefinition = null, this.geometryType = null, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.maxReconnectionAttempts = 0, this.maxReconnectionInterval = 20, this.maxScale = 0, this.minScale = 0, this.objectIdField = null, this.operationalLayerType = "ArcGISStreamLayer", this.popupEnabled = !0, this.popupTemplate = null, this.purgeOptions = new _support_PurgeOptions_js__WEBPACK_IMPORTED_MODULE_44__.default(), this.screenSizePerspectiveEnabled = !0, this.sourceJSON = null, this.spatialReference = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_49__.default.WGS84, this.type = "stream", this.url = null, this.updateInterval = 300, this.webSocketUrl = null;
  }

  normalizeCtorArgs(e, r) {
    return "string" == typeof e ? {
      url: e,
      ...r
    } : e;
  }

  load(e) {
    if (!("WebSocket" in globalThis)) return this.addResolvingPromise(Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_15__.default("stream-layer:websocket-unsupported", "WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))), Promise.resolve(this);
    const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_17__.isSome)(e) ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({
      supportedTypes: ["Stream Service", "Feed"]
    }, e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_19__.throwIfAbortError).then(() => this._fetchService(r))), Promise.resolve(this);
  }

  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }

  set renderer(e) {
    (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_41__.fixRendererFields)(e, this.fieldsIndex), this._set("renderer", e);
  }

  readRenderer(e, r, s) {
    const n = (r = r.layerDefinition || r).drawingInfo && r.drawingInfo.renderer || void 0;

    if (n) {
      const e = (0,_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__.read)(n, r, s) || void 0;
      return e || X.error("Failed to create renderer", {
        rendererDefinition: r.drawingInfo.renderer,
        layer: this,
        context: s
      }), e;
    }

    if (r.defaultSymbol) return r.types && r.types.length ? new _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_10__.default({
      defaultSymbol: $(r.defaultSymbol, r, s),
      field: r.typeIdField,
      uniqueValueInfos: r.types.map(e => ({
        id: e.id,
        symbol: $(e.symbol, e, s)
      }))
    }) : new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_9__.default({
      symbol: $(r.defaultSymbol, r, s)
    });
  }

  createPopupTemplate(e) {
    return (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_47__.createPopupTemplate)(this, e);
  }

  createQuery() {
    const e = new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_46__.default();
    return e.returnGeometry = !0, e.outFields = ["*"], e.where = this.definitionExpression || "1=1", e;
  }

  getFieldDomain(e, r) {
    if (!this.fields) return null;
    let t = null;
    return this.fields.some(r => (r.name === e && (t = r.domain), !!t)), t;
  }

  getField(e) {
    return this.fieldsIndex.get(e);
  }

  _fetchService(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var r;

      if (!!_this.webSocketUrl) {
        var t;
        if (null == (t = _this.timeInfo) || !t.trackIdField) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_15__.default("stream-layer:missing-metadata", "The stream layer trackIdField must be specified.");
        if (!_this.objectIdField) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_15__.default("stream-layer:missing-metadata", "The stream layer objectIdField must be specified.");
        if (!_this.fields) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_15__.default("stream-layer:missing-metadata", "The stream layer fields must be specified.");
        if (!_this.geometryType) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_15__.default("stream-layer:missing-metadata", "The stream layer geometryType must be specified.");
        _this.url = _this.webSocketUrl;
      } else if (!_this.sourceJSON) {
        const {
          data: r
        } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_13__.default)(_this.parsedUrl.path, {
          query: {
            f: "json",
            ..._this.customParameters,
            ..._this.parsedUrl.query
          },
          responseType: "json",
          signal: e
        });
        _this.sourceJSON = r;
      }

      return _this.sourceJSON = { ...(null != (r = _this.sourceJSON) ? r : {}),
        objectIdField: "__esri_stream_id__"
      }, _this.read(_this.sourceJSON, {
        origin: "service",
        url: _this.parsedUrl
      }), (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_41__.fixRendererFields)(_this.renderer, _this.fieldsIndex), (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_41__.fixTimeInfoFields)(_this.timeInfo, _this.fieldsIndex), (0,_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_45__.loadStyleRenderer)(_this, {
        origin: "service"
      });
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: String
})], Z.prototype, "copyright", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  readOnly: !0
})], Z.prototype, "defaultPopupTemplate", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: String,
  json: {
    name: "layerDefinition.definitionExpression",
    write: {
      enabled: !0,
      allowNull: !0
    }
  }
})], Z.prototype, "definitionExpression", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: String
})], Z.prototype, "displayField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_48__.default
})], Z.prototype, "elevationInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_39__.featureReductionProperty)], Z.prototype, "featureReduction", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(Y.fields)], Z.prototype, "fields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(Y.fieldsIndex)], Z.prototype, "fieldsIndex", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_50__.default
})], Z.prototype, "geometryDefinition", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_27__.featureGeometryTypeKebabDictionary.apiValues,
  json: {
    read: {
      reader: _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_27__.featureGeometryTypeKebabDictionary.read
    }
  }
})], Z.prototype, "geometryType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_38__.labelsVisible)], Z.prototype, "labelsVisible", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: [_support_LabelClass_js__WEBPACK_IMPORTED_MODULE_42__.default],
  json: {
    read: {
      source: "layerDefinition.drawingInfo.labelingInfo",
      reader: _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_43__.reader
    },
    write: {
      target: "layerDefinition.drawingInfo.labelingInfo"
    }
  }
})], Z.prototype, "labelingInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_38__.legendEnabled)], Z.prototype, "legendEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: ["show", "hide"]
})], Z.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_23__.Integer
})], Z.prototype, "maxReconnectionAttempts", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_23__.Integer
})], Z.prototype, "maxReconnectionInterval", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_38__.maxScale)], Z.prototype, "maxScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_38__.minScale)], Z.prototype, "minScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: String
})], Z.prototype, "objectIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  value: "ArcGISStreamLayer",
  type: ["ArcGISStreamLayer"]
})], Z.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_38__.popupEnabled)], Z.prototype, "popupEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_3__.default,
  json: {
    read: {
      source: "popupInfo"
    },
    write: {
      target: "popupInfo"
    }
  }
})], Z.prototype, "popupTemplate", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: _support_PurgeOptions_js__WEBPACK_IMPORTED_MODULE_44__.default
})], Z.prototype, "purgeOptions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__.rendererTypes,
  json: {
    origins: {
      service: {
        write: {
          target: "drawingInfo.renderer",
          enabled: !1
        }
      },
      "web-scene": {
        name: "layerDefinition.drawingInfo.renderer",
        types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__.webSceneRendererTypes,
        write: !0
      }
    },
    write: {
      target: "layerDefinition.drawingInfo.renderer"
    }
  }
})], Z.prototype, "renderer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_24__.reader)("service", "renderer", ["drawingInfo.renderer", "defaultSymbol"]), (0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_24__.reader)("renderer", ["layerDefinition.drawingInfo.renderer", "layerDefinition.defaultSymbol"])], Z.prototype, "readRenderer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_38__.screenSizePerspectiveEnabled)], Z.prototype, "screenSizePerspectiveEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_49__.default,
  json: {
    origins: {
      service: {
        read: {
          source: "spatialReference"
        }
      }
    }
  }
})], Z.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  json: {
    read: !1
  }
})], Z.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_38__.url)], Z.prototype, "url", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: Number
})], Z.prototype, "updateInterval", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_20__.property)({
  type: String
})], Z.prototype, "webSocketUrl", void 0), Z = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_25__.subclass)("esri.layers.StreamLayer")], Z);
const $ = (0,_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_26__.createTypeReader)({
  types: _symbols_js__WEBPACK_IMPORTED_MODULE_14__.symbolTypesRenderer
}),
      ee = Z;


/***/ }),

/***/ 13986:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/PurgeOptions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let i=t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],i.prototype,"age",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],i.prototype,"ageReceived",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],i.prototype,"displayCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],i.prototype,"maxObservations",void 0),i=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.PurgeOptions")],i);const p=i;


/***/ })

}]);
//# sourceMappingURL=85.be931a9fb6a332d3e62f.js.map