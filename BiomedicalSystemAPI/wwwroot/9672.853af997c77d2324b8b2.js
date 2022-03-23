"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[9672],{

/***/ 99672:
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/GeoJSONLayer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Z)
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
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../geometry/support/typeUtils.js */ 557);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _graphics_sources_GeoJSONSource_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./graphics/sources/GeoJSONSource.js */ 69541);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ 52166);
/* harmony import */ var _mixins_FeatureEffectLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mixins/FeatureEffectLayer.js */ 62932);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_OrderedLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mixins/OrderedLayer.js */ 15701);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ 53730);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mixins/TemporalLayer.js */ 77932);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./support/featureReductionUtils.js */ 38750);
/* harmony import */ var _support_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./support/FeatureTemplate.js */ 34445);
/* harmony import */ var _support_FeatureType_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./support/FeatureType.js */ 33912);
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./support/Field.js */ 66536);
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./support/fieldProperties.js */ 80839);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./support/fieldUtils.js */ 81451);
/* harmony import */ var _support_LabelClass_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./support/LabelClass.js */ 51331);
/* harmony import */ var _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./support/labelingInfo.js */ 93560);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../rest/support/Query.js */ 37995);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../support/popupUtils.js */ 81569);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../geometry/Extent.js */ 70157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/












































const V = (0,_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_37__.defineFieldProperties)();
let B = class extends (0,_mixins_OrderedLayer_js__WEBPACK_IMPORTED_MODULE_28__.OrderedLayer)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_25__.CustomParametersMixin)((0,_mixins_FeatureEffectLayer_js__WEBPACK_IMPORTED_MODULE_26__.FeatureEffectLayer)((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_24__.BlendLayer)((0,_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_31__.TemporalLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_30__.ScaleRangeLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_29__.RefreshableLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_27__.OperationalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_14__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_22__.default))))))))) {
  constructor(e) {
    super(e), this.copyright = null, this.definitionExpression = null, this.displayField = null, this.editingEnabled = !1, this.elevationInfo = null, this.featureReduction = null, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.hasZ = void 0, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.objectIdField = null, this.operationalLayerType = "GeoJSON", this.popupEnabled = !0, this.popupTemplate = null, this.screenSizePerspectiveEnabled = !0, this.source = new _graphics_sources_GeoJSONSource_js__WEBPACK_IMPORTED_MODULE_23__.default({
      layer: this
    }), this.spatialReference = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_43__.default.WGS84, this.templates = null, this.title = "GeoJSON", this.type = "geojson", this.typeIdField = null, this.types = null;
  }

  destroy() {
    var e;
    null == (e = this.source) || e.destroy();
  }

  load(e) {
    return this.addResolvingPromise(this.source.load(e).then(() => {
      this.read(this.source.sourceJSON, {
        origin: "service",
        url: this.parsedUrl
      }), this.revert(["objectIdField", "fields", "timeInfo"], "service"), (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_38__.fixRendererFields)(this.renderer, this.fieldsIndex), (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_38__.fixTimeInfoFields)(this.timeInfo, this.fieldsIndex);
    })), Promise.resolve(this);
  }

  get capabilities() {
    return this.source ? this.source.capabilities : null;
  }

  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("capabilities"), (this._get("createQueryVersion") || 0) + 1;
  }

  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }

  get isTable() {
    return this.loaded && null == this.geometryType;
  }

  get parsedUrl() {
    return this.url ? (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_15__.urlToObject)(this.url) : null;
  }

  set renderer(e) {
    (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_38__.fixRendererFields)(e, this.fieldsIndex), this._set("renderer", e);
  }

  set url(e) {
    if (!e) return void this._set("url", e);
    const t = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_15__.urlToObject)(e);
    this._set("url", t.path), t.query && (this.customParameters = { ...this.customParameters,
      ...t.query
    });
  }

  applyEdits(e, t) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = yield __webpack_require__.e(/*! import() */ 1719).then(__webpack_require__.bind(__webpack_require__, /*! ./graphics/editingSupport.js */ 21719));
      yield _this.load();
      const i = yield r.applyEdits(_this, _this.source, e, t);
      return _this.read({
        extent: _this.source.sourceJSON.extent,
        timeInfo: _this.source.sourceJSON.timeInfo
      }, {
        origin: "service",
        ignoreDefaults: !0
      }), i;
    })();
  }

  on(e, t) {
    return super.on(e, t);
  }

  createPopupTemplate(e) {
    return (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_42__.createPopupTemplate)(this, e);
  }

  createQuery() {
    const e = new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_41__.default(),
          t = this.get("capabilities.data");
    e.returnGeometry = !0, t && t.supportsZ && (e.returnZ = !0), e.outFields = ["*"], e.where = this.definitionExpression || "1=1";
    const {
      timeOffset: r,
      timeExtent: i
    } = this;
    return e.timeExtent = null != r && null != i ? i.offset(-r.value, r.unit) : i || null, e;
  }

  getFieldDomain(e, t) {
    let r,
        i = !1;
    const o = t && t.feature,
          s = o && o.attributes,
          p = this.typeIdField && s && s[this.typeIdField];
    return null != p && this.types && (i = this.types.some(t => t.id == p && (r = t.domains && t.domains[e], r && "inherited" === r.type && (r = this._getLayerDomain(e)), !0))), i || r || (r = this._getLayerDomain(e)), r;
  }

  getField(e) {
    return this.fieldsIndex.get(e);
  }

  queryFeatures(e, t) {
    return this.load().then(() => this.source.queryFeatures(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_41__.default.from(e) || this.createQuery(), t)).then(e => {
      if (null != e && e.features) for (const t of e.features) t.layer = t.sourceLayer = this;
      return e;
    });
  }

  queryObjectIds(e, t) {
    return this.load().then(() => this.source.queryObjectIds(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_41__.default.from(e) || this.createQuery(), t));
  }

  queryFeatureCount(e, t) {
    return this.load().then(() => this.source.queryFeatureCount(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_41__.default.from(e) || this.createQuery(), t));
  }

  queryExtent(e, t) {
    return this.load().then(() => this.source.queryExtent(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_41__.default.from(e) || this.createQuery(), t));
  }

  hasDataChanged() {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        const {
          dataChanged: e,
          updates: t
        } = yield _this2.source.refresh(_this2.customParameters);
        return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__.isSome)(t) && _this2.read(t, {
          origin: "service",
          url: _this2.parsedUrl,
          ignoreDefaults: !0
        }), e;
      } catch {}

      return !1;
    })();
  }

  _getLayerDomain(e) {
    if (!this.fields) return null;
    let t = null;
    return this.fields.some(r => (r.name === e && (t = r.domain), !!t)), t;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  readOnly: !0,
  json: {
    read: !1,
    write: !1
  }
})], B.prototype, "capabilities", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: String
})], B.prototype, "copyright", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  readOnly: !0
})], B.prototype, "createQueryVersion", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  readOnly: !0
})], B.prototype, "defaultPopupTemplate", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: String,
  json: {
    name: "layerDefinition.definitionExpression",
    write: {
      enabled: !0,
      allowNull: !0
    }
  }
})], B.prototype, "definitionExpression", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: String
})], B.prototype, "displayField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: Boolean
})], B.prototype, "editingEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.elevationInfo)], B.prototype, "elevationInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)(_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_33__.featureReductionProperty)], B.prototype, "featureReduction", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: [_support_Field_js__WEBPACK_IMPORTED_MODULE_36__.default],
  json: {
    name: "layerDefinition.fields",
    write: {
      ignoreOrigin: !0,
      isRequired: !0
    },
    origins: {
      service: {
        name: "fields"
      }
    }
  }
})], B.prototype, "fields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)(V.fieldsIndex)], B.prototype, "fieldsIndex", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_44__.default,
  json: {
    name: "extent"
  }
})], B.prototype, "fullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: ["point", "polygon", "polyline", "multipoint"],
  json: {
    read: {
      reader: _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_21__.featureGeometryTypeKebabDictionary.read
    }
  }
})], B.prototype, "geometryType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: Boolean
})], B.prototype, "hasZ", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.id)], B.prototype, "id", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: Boolean,
  readOnly: !0
})], B.prototype, "isTable", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.labelsVisible)], B.prototype, "labelsVisible", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: [_support_LabelClass_js__WEBPACK_IMPORTED_MODULE_39__.default],
  json: {
    name: "layerDefinition.drawingInfo.labelingInfo",
    read: {
      reader: _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_40__.reader
    },
    write: !0
  }
})], B.prototype, "labelingInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.legendEnabled)], B.prototype, "legendEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: ["show", "hide"]
})], B.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: String,
  json: {
    name: "layerDefinition.objectIdField",
    write: {
      ignoreOrigin: !0,
      isRequired: !0
    },
    origins: {
      service: {
        name: "objectIdField"
      }
    }
  }
})], B.prototype, "objectIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.opacity)], B.prototype, "opacity", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: ["GeoJSON"]
})], B.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  readOnly: !0
})], B.prototype, "parsedUrl", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.popupEnabled)], B.prototype, "popupEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_3__.default,
  json: {
    name: "popupInfo",
    write: !0
  }
})], B.prototype, "popupTemplate", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__.rendererTypes,
  json: {
    name: "layerDefinition.drawingInfo.renderer",
    write: !0,
    origins: {
      service: {
        name: "drawingInfo.renderer"
      },
      "web-scene": {
        types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__.webSceneRendererTypes
      }
    }
  }
})], B.prototype, "renderer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.screenSizePerspectiveEnabled)], B.prototype, "screenSizePerspectiveEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  readOnly: !0
})], B.prototype, "source", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_43__.default
})], B.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: [_support_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_34__.default]
})], B.prototype, "templates", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)()], B.prototype, "title", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  json: {
    read: !1
  },
  readOnly: !0
})], B.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: String,
  readOnly: !0
})], B.prototype, "typeIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)({
  type: [_support_FeatureType_js__WEBPACK_IMPORTED_MODULE_35__.default]
})], B.prototype, "types", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_16__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.url)], B.prototype, "url", null), B = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_20__.subclass)("esri.layers.GeoJSONLayer")], B);
const Z = B;


/***/ }),

/***/ 91343:
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/QueryEngineCapabilities.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryCapabilities": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0};


/***/ }),

/***/ 69541:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/GeoJSONSource.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeoJSONSource": () => (/* binding */ g),
/* harmony export */   "default": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Loadable.js */ 23412);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/workers/workers.js */ 74775);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/clientSideDefaults.js */ 45033);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../rest/support/FeatureSet.js */ 42762);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../geometry/Polygon.js */ 38535);
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../geometry/support/typeUtils.js */ 557);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


















const f = _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__.default.getLogger("esri.layers.graphics.sources.GeoJSONSource");
let g = class extends _core_Loadable_js__WEBPACK_IMPORTED_MODULE_5__.default {
  constructor() {
    var _this;

    (super(...arguments), _this = this), this.type = "geojson", this.refresh = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.debounce)( /*#__PURE__*/function () {
      var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
        yield _this.load();
        const {
          extent: t,
          timeExtent: r
        } = yield _this._connection.invoke("refresh", e);
        return _this.sourceJSON.extent = t, r && (_this.sourceJSON.timeInfo.timeExtent = [r.start, r.end]), {
          dataChanged: !0,
          updates: {
            extent: _this.sourceJSON.extent,
            timeInfo: _this.sourceJSON.timeInfo
          }
        };
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  load(e) {
    const t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(e) ? e.signal : null;
    return this.addResolvingPromise(this._startWorker(t)), Promise.resolve(this);
  }

  destroy() {
    var e;
    null == (e = this._connection) || e.close(), this._connection = null;
  }

  applyEdits(e) {
    return this.load().then(() => this._applyEdits(e));
  }

  openPorts() {
    return this.load().then(() => this._connection.openPorts());
  }

  queryFeatures(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t)).then(e => _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_15__.default.fromJSON(e));
  }

  queryFeaturesJSON(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t));
  }

  queryFeatureCount(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryFeatureCount", e ? e.toJSON() : null, t));
  }

  queryObjectIds(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryObjectIds", e ? e.toJSON() : null, t));
  }

  queryExtent(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryExtent", e ? e.toJSON() : null, t)).then(e => ({
      count: e.count,
      extent: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__.default.fromJSON(e.extent)
    }));
  }

  querySnapping(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("querySnapping", e, t));
  }

  _applyEdits(e) {
    if (!this._connection) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("geojson-layer-source:edit-failure", "Memory source not loaded");
    const r = this.layer.objectIdField,
          o = [],
          s = [],
          i = [];
    if (e.addFeatures) for (const t of e.addFeatures) o.push(this._serializeFeature(t));
    if (e.deleteFeatures) for (const t of e.deleteFeatures) "objectId" in t && null != t.objectId ? s.push(t.objectId) : "attributes" in t && null != t.attributes[r] && s.push(t.attributes[r]);
    if (e.updateFeatures) for (const t of e.updateFeatures) i.push(this._serializeFeature(t));
    return this._connection.invoke("applyEdits", {
      adds: o,
      updates: i,
      deletes: s
    }).then(({
      extent: e,
      timeExtent: t,
      featureEditResults: r
    }) => (this.sourceJSON.extent = e, t && (this.sourceJSON.timeInfo.timeExtent = [t.start, t.end]), this._createEditsResult(r)));
  }

  _createEditsResult(e) {
    return {
      addFeatureResults: e.addResults ? e.addResults.map(this._createFeatureEditResult, this) : [],
      updateFeatureResults: e.updateResults ? e.updateResults.map(this._createFeatureEditResult, this) : [],
      deleteFeatureResults: e.deleteResults ? e.deleteResults.map(this._createFeatureEditResult, this) : [],
      addAttachmentResults: [],
      updateAttachmentResults: [],
      deleteAttachmentResults: []
    };
  }

  _createFeatureEditResult(e) {
    const r = !0 === e.success ? null : e.error || {
      code: void 0,
      description: void 0
    };
    return {
      objectId: e.objectId,
      globalId: e.globalId,
      error: r ? new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("geojson-layer-source:edit-failure", r.description, {
        code: r.code
      }) : null
    };
  }

  _serializeFeature(e) {
    const {
      attributes: t
    } = e,
          r = this._geometryForSerialization(e);

    return r ? {
      geometry: r.toJSON(),
      attributes: t
    } : {
      attributes: t
    };
  }

  _geometryForSerialization(e) {
    const {
      geometry: t
    } = e;
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isNone)(t) ? null : "mesh" === t.type || "extent" === t.type ? _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_17__.default.fromExtent(t.extent) : t;
  }

  _startWorker(e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2._connection = yield (0,_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_9__.open)("GeoJSONSourceWorker", {
        strategy: (0,_core_has_js__WEBPACK_IMPORTED_MODULE_4__.default)("feature-layers-workers") ? "dedicated" : "local",
        signal: e
      });

      const {
        fields: t,
        spatialReference: o,
        hasZ: s,
        geometryType: i,
        objectIdField: n,
        url: a,
        timeInfo: l,
        customParameters: c
      } = _this2.layer,
            p = "defaults" === _this2.layer.originOf("spatialReference"),
            h = {
        url: a,
        customParameters: c,
        fields: t && t.map(e => e.toJSON()),
        geometryType: _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_18__.featureGeometryTypeKebabDictionary.toJSON(i),
        hasZ: s,
        objectIdField: n,
        timeInfo: l ? l.toJSON() : null,
        spatialReference: p ? null : o && o.toJSON()
      },
            m = yield _this2._connection.invoke("load", h, {
        signal: e
      });

      for (const r of m.warnings) f.warn(r.message, {
        layer: _this2.layer,
        warning: r
      });

      m.featureErrors.length && f.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`, m.featureErrors), _this2.sourceJSON = m.layerDefinition, _this2.capabilities = (0,_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_14__.createCapabilities)(_this2.sourceJSON.hasZ, !0);
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], g.prototype, "capabilities", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], g.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  constructOnly: !0
})], g.prototype, "layer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], g.prototype, "sourceJSON", void 0), g = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__.subclass)("esri.layers.graphics.sources.GeoJSONSource")], g);
const S = g;


/***/ }),

/***/ 45033:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCapabilities": () => (/* binding */ a),
/* harmony export */   "createDefaultAttributesFunction": () => (/* binding */ n),
/* harmony export */   "createDefaultTemplate": () => (/* binding */ i),
/* harmony export */   "createDrawingInfo": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/lang.js */ 60161);
/* harmony import */ var _data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/QueryEngineCapabilities.js */ 91343);
/* harmony import */ var _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../symbols/support/defaultsJSON.js */ 70338);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__.defaultPointSymbolJSON:"esriGeometryPolyline"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__.defaultPolylineSymbolJSON:_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_3__.defaultPolygonSymbolJSON}}}function n(s,e){if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__.default)("esri-csp-restrictions"))return()=>({[e]:null,...s});try{let t=`this.${e} = null;`;for(const e in s){t+=`this${e.includes(".")?`["${e}"]`:`.${e}`} = ${JSON.stringify(s[e])};`}const r=new Function(t);return()=>new r}catch(r){return()=>({[e]:null,...s})}}function i(t={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(t)}}]}function a(t,s){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:_data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__.queryCapabilities,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}


/***/ })

}]);
//# sourceMappingURL=9672.853af997c77d2324b8b2.js.map