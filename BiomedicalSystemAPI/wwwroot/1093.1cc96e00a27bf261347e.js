"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1093],{

/***/ 41093:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/BuildingSceneLayer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ K)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Collection.js */ 37635);
/* harmony import */ var _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/CollectionFlattener.js */ 39876);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/lang.js */ 60161);
/* harmony import */ var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/loadAll.js */ 50942);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _buildingSublayers_BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./buildingSublayers/BuildingComponentSublayer.js */ 60851);
/* harmony import */ var _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./buildingSublayers/BuildingGroupSublayer.js */ 6390);
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ 57993);
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ 41122);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mixins/SceneService.js */ 55048);
/* harmony import */ var _support_BuildingFilter_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/BuildingFilter.js */ 82336);
/* harmony import */ var _support_BuildingSummaryStatistics_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/BuildingSummaryStatistics.js */ 94789);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_FetchAssociatedFeatureLayer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./support/FetchAssociatedFeatureLayer.js */ 2652);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






























const A = _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__.default.getLogger("esri.layers.BuildingSceneLayer"),
      E = _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__.default.ofType(_support_BuildingFilter_js__WEBPACK_IMPORTED_MODULE_26__.default),
      _ = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)(_buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_19__.default.sublayersProperty);

_.json.origins["web-scene"] = {
  type: [_buildingSublayers_BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_18__.default],
  write: {
    enabled: !0,
    overridePolicy: () => ({
      enabled: !1
    })
  }
}, _.json.origins["portal-item"] = {
  type: [_buildingSublayers_BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_18__.default],
  write: {
    enabled: !0,
    overridePolicy: () => ({
      enabled: !1
    })
  }
};
let P = class extends (0,_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_25__.SceneService)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_21__.ArcGISService)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_22__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__.PortalLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_24__.ScaleRangeLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_9__.MultiOriginJSONMixin)((0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_20__.APIKeyMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_17__.default))))))) {
  constructor(e) {
    super(e), this.operationalLayerType = "BuildingSceneLayer", this.allSublayers = new _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_3__.default({
      getCollections: () => [this.sublayers],
      getChildrenFunction: e => "building-group" === e.type ? e.sublayers : null
    }), this.sublayers = null, this.sublayerOverrides = null, this.filters = new E(), this.activeFilterId = null, this.summaryStatistics = null, this.outFields = null, this.type = "building-scene";
  }

  normalizeCtorArgs(e) {
    return "string" == typeof e ? {
      url: e
    } : e;
  }

  destroy() {
    this.allSublayers.destroy();
  }

  readSublayers(e, r, t) {
    const s = _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_19__.default.readSublayers(e, r, t);
    return _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_19__.default.forEachSublayer(s, e => e.layer = this), this.sublayerOverrides && (this.applySublayerOverrides(s, this.sublayerOverrides), this.sublayerOverrides = null), s;
  }

  applySublayerOverrides(e, {
    overrides: r,
    context: t
  }) {
    _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_19__.default.forEachSublayer(e, e => e.read(r.get(e.id), t));
  }

  readSublayerOverrides(e, r) {
    const t = new Map();

    for (const i of e) null != i && "object" == typeof i && "number" == typeof i.id ? t.set(i.id, i) : r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("building-scene-layer:invalid-sublayer-override", "Invalid value for sublayer override. Not an object or no id specified.", {
      value: i
    }));

    return {
      overrides: t,
      context: r
    };
  }

  writeSublayerOverrides(e, r, t) {
    const s = [];
    _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_19__.default.forEachSublayer(this.sublayers, e => {
      const r = e.write({}, t);
      Object.keys(r).length > 1 && s.push(r);
    }), s.length > 0 && (r.sublayers = s);
  }

  writeUnappliedOverrides(e, r) {
    r.sublayers = [], e.overrides.forEach(e => {
      r.sublayers.push((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)(e));
    });
  }

  write(e, r) {
    return e = super.write(e, r), !r || "web-scene" !== r.origin && "portal-item" !== r.origin || (this.sublayers ? this.writeSublayerOverrides(this.sublayers, e, r) : this.sublayerOverrides && this.writeUnappliedOverrides(this.sublayerOverrides, e)), e;
  }

  read(e, r) {
    if (super.read(e, r), r && ("web-scene" === r.origin || "portal-item" === r.origin) && null != e && Array.isArray(e.sublayers)) {
      const t = this.readSublayerOverrides(e.sublayers, r);
      this.sublayers ? this.applySublayerOverrides(this.sublayers, t) : this.sublayerOverrides = t;
    }
  }

  readSummaryStatistics(e, r) {
    if ("string" == typeof r.statisticsHRef) {
      const e = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.join)(this.parsedUrl.path, r.statisticsHRef);
      return new _support_BuildingSummaryStatistics_js__WEBPACK_IMPORTED_MODULE_27__.default({
        url: e
      });
    }

    return null;
  }

  set elevationInfo(e) {
    this._set("elevationInfo", e), this._validateElevationInfo();
  }

  load(e) {
    const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_8__.isSome)(e) ? e.signal : null,
          t = this.loadFromPortal({
      supportedTypes: ["Scene Service"]
    }, e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__.throwIfAbortError).then(() => this._fetchService(r)).then(() => this._fetchAssociatedFeatureService(r));
    return this.addResolvingPromise(t), Promise.resolve(this);
  }

  loadAll() {
    return (0,_core_loadAll_js__WEBPACK_IMPORTED_MODULE_6__.loadAll)(this, e => {
      _buildingSublayers_BuildingGroupSublayer_js__WEBPACK_IMPORTED_MODULE_19__.default.forEachSublayer(this.sublayers, r => {
        "building-group" !== r.type && e(r);
      }), this.summaryStatistics && e(this.summaryStatistics);
    });
  }

  saveAs(e, r) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this._debouncedSaveOperations(1, { ...r,
        getTypeKeywords: () => _this._getTypeKeywords(),
        portalItemLayerType: "building-scene"
      }, e);
    })();
  }

  save() {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = {
        getTypeKeywords: () => _this2._getTypeKeywords(),
        portalItemLayerType: "building-scene"
      };
      return _this2._debouncedSaveOperations(0, e);
    })();
  }

  validateLayer(e) {
    if (!e.layerType || "Building" !== e.layerType) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("buildingscenelayer:layer-type-not-supported", "BuildingSceneLayer does not support this layer type", {
      layerType: e.layerType
    });
  }

  _getTypeKeywords() {
    return ["Building"];
  }

  _validateElevationInfo() {
    const e = this.elevationInfo;
    e && ("absolute-height" !== e.mode && A.warn(".elevationInfo=", "Building scene layers only support absolute-height elevation mode"), e.featureExpressionInfo && "0" !== e.featureExpressionInfo.expression && A.warn(".elevationInfo=", "Building scene layers do not support featureExpressionInfo"));
  }

  _fetchAssociatedFeatureService(e) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = new _support_FetchAssociatedFeatureLayer_js__WEBPACK_IMPORTED_MODULE_29__.FetchAssociatedFeatureLayer(_this3.parsedUrl, _this3.portalItem, _this3.apiKey, e);

      try {
        _this3.associatedFeatureServiceItem = yield r.fetchPortalItem();
      } catch (t) {
        A.warn("Associated feature service item could not be loaded", t);
      }
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: ["BuildingSceneLayer"]
})], P.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0
})], P.prototype, "allSublayers", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)(_)], P.prototype, "sublayers", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__.reader)("service", "sublayers")], P.prototype, "readSublayers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: E,
  nonNullable: !0,
  json: {
    write: !0
  }
})], P.prototype, "filters", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: String,
  json: {
    write: !0
  }
})], P.prototype, "activeFilterId", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0,
  type: _support_BuildingSummaryStatistics_js__WEBPACK_IMPORTED_MODULE_27__.default
})], P.prototype, "summaryStatistics", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__.reader)("summaryStatistics", ["statisticsHRef"])], P.prototype, "readSummaryStatistics", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: [String],
  json: {
    read: !1
  }
})], P.prototype, "outFields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_28__.sceneLayerFullExtent)], P.prototype, "fullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: ["show", "hide", "hide-children"]
})], P.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)((0,_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_28__.readOnlyService)(_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_16__.default))], P.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_28__.elevationInfo)], P.prototype, "elevationInfo", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  json: {
    read: !1
  },
  readOnly: !0
})], P.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)()], P.prototype, "associatedFeatureServiceItem", void 0), P = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__.subclass)("esri.layers.BuildingSceneLayer")], P);
const K = P;


/***/ }),

/***/ 60851:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingComponentSublayer.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ U)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PopupTemplate.js */ 95821);
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderers/ClassBreaksRenderer.js */ 25938);
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/DictionaryRenderer.js */ 15206);
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../renderers/DotDensityRenderer.js */ 51471);
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../renderers/HeatmapRenderer.js */ 16008);
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../renderers/Renderer.js */ 6557);
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../renderers/SimpleRenderer.js */ 78477);
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../renderers/UniqueValueRenderer.js */ 96337);
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../renderers/support/jsonUtils.js */ 94111);
/* harmony import */ var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../renderers/support/types.js */ 15196);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/Loadable.js */ 23412);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core/Promise.js */ 67614);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../FeatureLayer.js */ 36328);
/* harmony import */ var _BuildingSublayer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./BuildingSublayer.js */ 14386);
/* harmony import */ var _support_capabilities_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../support/capabilities.js */ 61334);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../support/commonProperties.js */ 34042);
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../support/fieldProperties.js */ 80839);
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../support/FieldsIndex.js */ 62419);
/* harmony import */ var _support_I3SIndexInfo_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../support/I3SIndexInfo.js */ 24828);
/* harmony import */ var _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../support/I3SLayerDefinitions.js */ 11640);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../rest/support/Query.js */ 37995);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../support/popupUtils.js */ 81569);
/* harmony import */ var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../symbols/support/ElevationInfo.js */ 80123);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






































const D = _core_Logger_js__WEBPACK_IMPORTED_MODULE_16__.default.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),
      Q = (0,_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_32__.defineFieldProperties)();
let R = class extends _core_Loadable_js__WEBPACK_IMPORTED_MODULE_15__.default.LoadableMixin((0,_core_Promise_js__WEBPACK_IMPORTED_MODULE_18__.EsriPromiseMixin)(_BuildingSublayer_js__WEBPACK_IMPORTED_MODULE_29__.default)) {
  constructor(e) {
    super(e), this.type = "building-component", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.fields = null, this.associatedLayer = null, this.outFields = null, this.listMode = "show", this.renderer = null, this.definitionExpression = null, this.popupEnabled = !0, this.popupTemplate = null, this.layerType = "3d-object";
  }

  get parsedUrl() {
    return this.layer ? {
      path: `${this.layer.parsedUrl.path}/sublayers/${this.id}`,
      query: this.layer.parsedUrl.query
    } : null;
  }

  get fieldsIndex() {
    return new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_33__.default(this.fields);
  }

  readAssociatedLayer(e, r) {
    const t = this.layer.associatedFeatureServiceItem,
          o = r.associatedLayerID;
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_17__.isSome)(t) && "number" == typeof o ? new _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_28__.default({
      portalItem: t,
      layerId: o
    }) : null;
  }

  get objectIdField() {
    if (null != this.fields) for (const e of this.fields) if ("oid" === e.type) return e.name;
    return null;
  }

  get displayField() {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_17__.isSome)(this.associatedLayer) ? this.associatedLayer.displayField : null;
  }

  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }

  load(e) {
    const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_17__.isSome)(e) ? e.signal : null,
          t = this._fetchService(r).then(() => {
      this.indexInfo = (0,_support_I3SIndexInfo_js__WEBPACK_IMPORTED_MODULE_34__.fetchIndexInfo)(this.parsedUrl.path, this.rootNode, this.nodePages, this.apiKey, D, r);
    });

    return this.addResolvingPromise(t), Promise.resolve(this);
  }

  createPopupTemplate(e) {
    return (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_37__.createPopupTemplate)(this, e);
  }

  _fetchService(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_12__.default)(_this.parsedUrl.path, {
        query: {
          f: "json",
          token: _this.apiKey
        },
        responseType: "json",
        signal: e
      })).data;

      _this.read(r, {
        origin: "service",
        url: _this.parsedUrl
      });
    })();
  }

  getField(e) {
    return this.fieldsIndex.get(e);
  }

  getFieldDomain(e, r) {
    var t, o, s, i;
    const a = null == (t = this.getFeatureType(null == r ? void 0 : r.feature)) || null == (o = t.domains) ? void 0 : o[e];
    return a && "inherited" !== a.type ? a : null != (s = null == (i = this.getField(e)) ? void 0 : i.domain) ? s : null;
  }

  getFeatureType(e) {
    return e && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_17__.isSome)(this.associatedLayer) ? this.associatedLayer.getFeatureType(e) : null;
  }

  get types() {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_17__.isSome)(this.associatedLayer) ? this.associatedLayer.types : [];
  }

  get typeIdField() {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_17__.isSome)(this.associatedLayer) ? this.associatedLayer.typeIdField : null;
  }

  get geometryType() {
    return "3d-object" === this.layerType ? "mesh" : "point";
  }

  get profile() {
    return "3d-object" === this.layerType ? "mesh-pyramids" : "points";
  }

  get capabilities() {
    const e = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_17__.isSome)(this.associatedLayer) && this.associatedLayer.capabilities ? this.associatedLayer.capabilities : _support_capabilities_js__WEBPACK_IMPORTED_MODULE_30__.zeroCapabilities,
          {
      query: r,
      data: {
        supportsZ: t,
        supportsM: o,
        isVersioned: s
      }
    } = e;
    return {
      query: r,
      data: {
        supportsZ: t,
        supportsM: o,
        isVersioned: s
      }
    };
  }

  createQuery() {
    const e = new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_36__.default();
    return "mesh" !== this.geometryType && (e.returnGeometry = !0, e.returnZ = !0), e.where = this.definitionExpression || "1=1", e.sqlFormat = "standard", e;
  }

  queryExtent(e, r) {
    return this._getAssociatedLayerForQuery().then(t => t.queryExtent(e || this.createQuery(), r));
  }

  queryFeatureCount(e, r) {
    return this._getAssociatedLayerForQuery().then(t => t.queryFeatureCount(e || this.createQuery(), r));
  }

  queryFeatures(e, r) {
    return this._getAssociatedLayerForQuery().then(t => t.queryFeatures(e || this.createQuery(), r)).then(e => {
      if (null != e && e.features) for (const r of e.features) r.layer = this.layer, r.sourceLayer = this;
      return e;
    });
  }

  queryObjectIds(e, r) {
    return this._getAssociatedLayerForQuery().then(t => t.queryObjectIds(e || this.createQuery(), r));
  }

  getFieldUsageInfo(e) {
    return this.fieldsIndex.has(e) ? {
      supportsLabelingInfo: !1,
      supportsRenderer: !1,
      supportsPopupTemplate: !1,
      supportsLayerQuery: !1
    } : {
      supportsLabelingInfo: !1,
      supportsRenderer: !0,
      supportsPopupTemplate: !0,
      supportsLayerQuery: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_17__.isSome)(this.associatedLayer)
    };
  }

  _getAssociatedLayerForQuery() {
    const e = this.associatedLayer;
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_17__.isSome)(e) && e.loaded ? Promise.resolve(e) : this._loadAssociatedLayerForQuery();
  }

  _loadAssociatedLayerForQuery() {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (yield _this2.load(), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_17__.isNone)(_this2.associatedLayer)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default("buildingscenelayer:query-not-available", "BuildingSceneLayer component layer queries are not available without an associated feature layer", {
        layer: _this2
      });

      try {
        yield _this2.associatedLayer.load();
      } catch (e) {
        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_13__.default("buildingscenelayer:query-not-available", "BuildingSceneLayer associated feature layer could not be loaded", {
          layer: _this2,
          error: e
        });
      }

      return _this2.associatedLayer;
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0
})], R.prototype, "parsedUrl", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  type: _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_35__.I3SNodePageDefinition,
  readOnly: !0
})], R.prototype, "nodePages", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_35__.I3SMaterialDefinition],
  readOnly: !0
})], R.prototype, "materialDefinitions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_35__.I3STextureSetDefinition],
  readOnly: !0
})], R.prototype, "textureSetDefinitions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  type: [_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_35__.I3SGeometryDefinition],
  readOnly: !0
})], R.prototype, "geometryDefinitions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0
})], R.prototype, "serviceUpdateTimeStamp", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0
})], R.prototype, "store", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  type: String,
  readOnly: !0,
  json: {
    read: {
      source: "store.rootNode"
    }
  }
})], R.prototype, "rootNode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0
})], R.prototype, "attributeStorageInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)(Q.fields)], R.prototype, "fields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0
})], R.prototype, "fieldsIndex", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0,
  type: _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_28__.default
})], R.prototype, "associatedLayer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_24__.reader)("service", "associatedLayer", ["associatedLayerID"])], R.prototype, "readAssociatedLayer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)(Q.outFields)], R.prototype, "outFields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  type: String,
  readOnly: !0
})], R.prototype, "objectIdField", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0,
  type: String,
  json: {
    read: !1
  }
})], R.prototype, "displayField", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0,
  type: String,
  aliasOf: "layer.apiKey"
})], R.prototype, "apiKey", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0,
  type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_26__.default,
  aliasOf: "layer.fullExtent"
})], R.prototype, "fullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0,
  type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_27__.default,
  aliasOf: "layer.spatialReference"
})], R.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0,
  aliasOf: "layer.version"
})], R.prototype, "version", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0,
  type: _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_38__.default,
  aliasOf: "layer.elevationInfo"
})], R.prototype, "elevationInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0,
  type: Number,
  aliasOf: "layer.minScale"
})], R.prototype, "minScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0,
  type: Number,
  aliasOf: "layer.maxScale"
})], R.prototype, "maxScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  type: ["hide", "show"],
  json: {
    write: !0
  }
})], R.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_11__.webSceneRendererTypes,
  json: {
    origins: {
      service: {
        read: {
          source: "drawingInfo.renderer"
        }
      }
    },
    name: "layerDefinition.drawingInfo.renderer",
    write: !0
  },
  value: null
})], R.prototype, "renderer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  type: String,
  json: {
    origins: {
      service: {
        read: !1,
        write: !1
      }
    },
    name: "layerDefinition.definitionExpression",
    write: {
      enabled: !0,
      allowNull: !0
    }
  }
})], R.prototype, "definitionExpression", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_31__.popupEnabled)], R.prototype, "popupEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__.default,
  json: {
    read: {
      source: "popupInfo"
    },
    write: {
      target: "popupInfo"
    }
  }
})], R.prototype, "popupTemplate", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0,
  type: String,
  json: {
    origins: {
      service: {
        read: {
          source: "store.normalReferenceFrame"
        }
      }
    },
    read: !1
  }
})], R.prototype, "normalReferenceFrame", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0,
  json: {
    read: !1
  }
})], R.prototype, "defaultPopupTemplate", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)()], R.prototype, "types", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)()], R.prototype, "typeIdField", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  json: {
    write: !1
  }
}), (0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_23__.enumeration)(new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_14__.JSONMap({
  "3DObject": "3d-object",
  Point: "point"
}))], R.prototype, "layerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)()], R.prototype, "geometryType", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)()], R.prototype, "profile", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_19__.property)({
  readOnly: !0,
  json: {
    read: !1
  }
})], R.prototype, "capabilities", null), R = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_25__.subclass)("esri.layers.buildingSublayers.BuildingComponentSublayer")], R);
const U = R;


/***/ }),

/***/ 6390:
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingGroupSublayer.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/loadAll.js */ 50942);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Warning.js */ 68364);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BuildingComponentSublayer.js */ 60851);
/* harmony import */ var _BuildingSublayer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BuildingSublayer.js */ 14386);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a;const p={type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:l}}},read:!1}};function l(r,o,t){if(r&&Array.isArray(r))return new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default(r.map((r=>{const e=y(r);if(e){const o=new e;return o.read(r,t),o}t&&t.messages&&r&&t.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_3__.default("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:t}))})))}let c=a=class extends _BuildingSublayer_js__WEBPACK_IMPORTED_MODULE_10__.default{constructor(r){super(r),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return (0,_core_loadAll_js__WEBPACK_IMPORTED_MODULE_2__.loadAllChildren)(this,(r=>a.forEachSublayer(this.sublayers,(e=>{"building-group"!==e.type&&r(e)}))))}};function y(r){return"group"===r.layerType?c:_BuildingComponentSublayer_js__WEBPACK_IMPORTED_MODULE_9__.default}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:["hide","show","hide-children"],json:{write:!0}})],c.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)(p)],c.prototype,"sublayers",void 0),c=a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.buildingSublayers.BuildingGroupSublayer")],c),function(r){function e(r,o){r.forEach((r=>{o(r),"building-group"===r.type&&e(r.sublayers,o)}))}r.sublayersProperty=p,r.readSublayers=l,r.forEachSublayer=e}(c||(c={}));const d=c;


/***/ }),

/***/ 14386:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingSublayer.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Identifiable.js */ 36326);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/commonProperties.js */ 34042);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends((0,_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_1__.IdentifiableMixin)(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.MultiOriginJSONSupport)){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(r,e){return"string"==typeof e.alias?e.alias:"string"==typeof e.name?e.name:""}readIdOnlyOnce(r){return-1!==this.id?this.id:"number"==typeof r?r:void 0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],l.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__.reader)("service","title",["alias","name"])],l.prototype,"readTitle",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],l.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__.Integer,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__.reader)("service","id")],l.prototype,"readIdOnlyOnce",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)((0,_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__.readOnlyService)(String))],l.prototype,"modelName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)((0,_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__.readOnlyService)(Boolean))],l.prototype,"isEmpty",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{name:"visibility",write:!0}})],l.prototype,"visible",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],l.prototype,"opacity",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.buildingSublayers.BuildingSublayer")],l);const n=l;


/***/ }),

/***/ 82336:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilter.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/uuid.js */ 85056);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _BuildingFilterAuthoringInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BuildingFilterAuthoringInfo.js */ 18241);
/* harmony import */ var _BuildingFilterAuthoringInfoCheckbox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BuildingFilterAuthoringInfoCheckbox.js */ 15887);
/* harmony import */ var _BuildingFilterBlock_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BuildingFilterBlock.js */ 83015);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u;const d=_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_BuildingFilterBlock_js__WEBPACK_IMPORTED_MODULE_10__.default);let m=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_4__.generateUUID)(),this.name=null}clone(){return new u({description:this.description,filterBlocks:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.filterAuthoringInfo)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,json:{write:!0}})],m.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:d,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"filterBlocks",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({types:{key:"type",base:_BuildingFilterAuthoringInfo_js__WEBPACK_IMPORTED_MODULE_8__.default,typeMap:{checkbox:_BuildingFilterAuthoringInfoCheckbox_js__WEBPACK_IMPORTED_MODULE_9__.default}},json:{read:o=>"checkbox"===(o&&o.type)?_BuildingFilterAuthoringInfoCheckbox_js__WEBPACK_IMPORTED_MODULE_9__.default.fromJSON(o):null,write:!0}})],m.prototype,"filterAuthoringInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"name",void 0),m=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.BuildingFilter")],m);const f=m;


/***/ }),

/***/ 18241:
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfo.js ***!
  \*********************************************************************************/
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
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,readOnly:!0,json:{write:!0}})],e.prototype,"type",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.BuildingFilterAuthoringInfo")],e);const p=e;


/***/ }),

/***/ 86703:
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoBlock.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _BuildingFilterAuthoringInfoType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BuildingFilterAuthoringInfoType.js */ 51385);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c;const l=_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_BuildingFilterAuthoringInfoType_js__WEBPACK_IMPORTED_MODULE_7__.default);let n=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{clone(){return new c({filterTypes:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.filterTypes)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:l,json:{write:!0}})],n.prototype,"filterTypes",void 0),n=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],n);const m=n;


/***/ }),

/***/ 15887:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoCheckbox.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _BuildingFilterAuthoringInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BuildingFilterAuthoringInfo.js */ 18241);
/* harmony import */ var _BuildingFilterAuthoringInfoBlock_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BuildingFilterAuthoringInfoBlock.js */ 86703);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;const l=_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_BuildingFilterAuthoringInfoBlock_js__WEBPACK_IMPORTED_MODULE_7__.default);let n=p=class extends _BuildingFilterAuthoringInfo_js__WEBPACK_IMPORTED_MODULE_6__.default{constructor(){super(...arguments),this.type="checkbox"}clone(){return new p({filterBlocks:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.filterBlocks)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:["checkbox"]})],n.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:l,json:{write:!0}})],n.prototype,"filterBlocks",void 0),n=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],n);const u=n;


/***/ }),

/***/ 51385:
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoType.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let i=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new p({filterType:this.filterType,filterValues:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.filterValues)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],i.prototype,"filterType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[String],json:{write:!0}})],i.prototype,"filterValues",void 0),i=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.support.BuildingFilterAuthoringInfoType")],i);const l=i;


/***/ }),

/***/ 83015:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterBlock.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BuildingFilterMode.js */ 55821);
/* harmony import */ var _BuildingFilterModeSolid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BuildingFilterModeSolid.js */ 42259);
/* harmony import */ var _BuildingFilterModeWireFrame_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BuildingFilterModeWireFrame.js */ 95482);
/* harmony import */ var _BuildingFilterModeXRay_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BuildingFilterModeXRay.js */ 79472);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;const a={nonNullable:!0,types:{key:"type",base:_BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_6__.default,typeMap:{solid:_BuildingFilterModeSolid_js__WEBPACK_IMPORTED_MODULE_7__.default,"wire-frame":_BuildingFilterModeWireFrame_js__WEBPACK_IMPORTED_MODULE_8__.default,"x-ray":_BuildingFilterModeXRay_js__WEBPACK_IMPORTED_MODULE_9__.default}},json:{read:e=>{switch(e&&e.type){case"solid":return _BuildingFilterModeSolid_js__WEBPACK_IMPORTED_MODULE_7__.default.fromJSON(e);case"wireFrame":return _BuildingFilterModeWireFrame_js__WEBPACK_IMPORTED_MODULE_8__.default.fromJSON(e);case"x-ray":return _BuildingFilterModeXRay_js__WEBPACK_IMPORTED_MODULE_9__.default.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let u=d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new _BuildingFilterModeSolid_js__WEBPACK_IMPORTED_MODULE_7__.default,this.title=""}clone(){return new d({filterExpression:this.filterExpression,filterMode:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.filterMode),title:this.title})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"filterExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)(a)],u.prototype,"filterMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"title",void 0),u=d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.support.BuildingFilterBlock")],u);const c=u;


/***/ }),

/***/ 55821:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterMode.js ***!
  \************************************************************************/
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
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.BuildingFilterMode")],t);const p=t;


/***/ }),

/***/ 42259:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterModeSolid.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BuildingFilterMode.js */ 55821);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let p=t=class extends _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_6__.default{constructor(){super(...arguments),this.type="solid"}clone(){return new t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:["solid"],readOnly:!0,json:{write:!0}})],p.prototype,"type",void 0),p=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.support.BuildingFilterModeSolid")],p);const i=p;


/***/ }),

/***/ 95482:
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterModeWireFrame.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BuildingFilterMode.js */ 55821);
/* harmony import */ var _symbols_edges_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../symbols/edges/utils.js */ 51877);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c;let m=c=class extends _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_6__.default{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new c({edges:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.edges)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__.enumeration)({wireFrame:"wire-frame"})],m.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)(_symbols_edges_utils_js__WEBPACK_IMPORTED_MODULE_7__.symbol3dEdgesProperty)],m.prototype,"edges",void 0),m=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.support.BuildingFilterModeWireFrame")],m);const a=m;


/***/ }),

/***/ 79472:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingFilterModeXRay.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BuildingFilterMode.js */ 55821);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let p=t=class extends _BuildingFilterMode_js__WEBPACK_IMPORTED_MODULE_6__.default{constructor(){super(...arguments),this.type="x-ray"}clone(){return new t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:["x-ray"],readOnly:!0,json:{write:!0}})],p.prototype,"type",void 0),p=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.support.BuildingFilterModeXRay")],p);const c=p;


/***/ }),

/***/ 94789:
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/BuildingSummaryStatistics.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Loadable.js */ 23412);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Promise.js */ 67614);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/












const u = _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__.default.getLogger("esri.layers.support.BuildingSummaryStatistics");
let n = class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport {
  constructor() {
    super(...arguments), this.fieldName = null, this.modelName = null, this.label = null, this.min = null, this.max = null, this.mostFrequentValues = null, this.subLayerIds = null;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: String
})], n.prototype, "fieldName", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: String
})], n.prototype, "modelName", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: String
})], n.prototype, "label", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: Number
})], n.prototype, "min", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: Number
})], n.prototype, "max", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  json: {
    read: e => Array.isArray(e) && (e.every(e => "string" == typeof e) || e.every(e => "number" == typeof e)) ? e.slice() : null
  }
})], n.prototype, "mostFrequentValues", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: [Number]
})], n.prototype, "subLayerIds", void 0), n = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__.subclass)("esri.layers.support.BuildingFieldStatistics")], n);
let m = class extends _core_Loadable_js__WEBPACK_IMPORTED_MODULE_4__.default.LoadableMixin((0,_core_Promise_js__WEBPACK_IMPORTED_MODULE_7__.EsriPromiseMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport)) {
  constructor() {
    super(...arguments), this.url = null;
  }

  get fields() {
    return this.loaded || "loading" === this.loadStatus ? this._get("fields") : (u.error("building summary statistics are not loaded"), null);
  }

  load(e) {
    const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(e) ? e.signal : null;
    return this.addResolvingPromise(this._fetchService(r)), Promise.resolve(this);
  }

  _fetchService(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(_this.url, {
        query: {
          f: "json"
        },
        responseType: "json",
        signal: e
      })).data;

      _this.read(t, {
        origin: "service"
      });
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  constructOnly: !0,
  type: String
})], m.prototype, "url", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0,
  type: [n],
  json: {
    read: {
      source: "summary"
    }
  }
})], m.prototype, "fields", null), m = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__.subclass)("esri.layers.support.BuildingSummaryStatistics")], m);
const c = m;


/***/ })

}]);
//# sourceMappingURL=1093.1cc96e00a27bf261347e.js.map