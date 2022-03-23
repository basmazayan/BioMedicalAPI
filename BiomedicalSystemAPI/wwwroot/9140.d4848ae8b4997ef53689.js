"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[9140],{

/***/ 59140:
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/WFSLayer.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ k)
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
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/object.js */ 47914);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../geometry/support/typeUtils.js */ 557);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _graphics_sources_WFSSource_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./graphics/sources/WFSSource.js */ 6978);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ 52166);
/* harmony import */ var _mixins_FeatureEffectLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mixins/FeatureEffectLayer.js */ 62932);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_OrderedLayer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mixins/OrderedLayer.js */ 15701);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ 53730);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./mixins/TemporalLayer.js */ 77932);
/* harmony import */ var _ogc_wfsUtils_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ogc/wfsUtils.js */ 42225);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./support/featureReductionUtils.js */ 38750);
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./support/Field.js */ 66536);
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./support/fieldProperties.js */ 80839);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./support/fieldUtils.js */ 81451);
/* harmony import */ var _support_LabelClass_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./support/LabelClass.js */ 51331);
/* harmony import */ var _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./support/labelingInfo.js */ 93560);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../rest/support/Query.js */ 37995);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../support/popupUtils.js */ 81569);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../geometry/Extent.js */ 70157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/














































var J;
const M = (0,_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_39__.defineFieldProperties)();

let _ = J = class extends (0,_mixins_OrderedLayer_js__WEBPACK_IMPORTED_MODULE_30__.OrderedLayer)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_27__.CustomParametersMixin)((0,_mixins_FeatureEffectLayer_js__WEBPACK_IMPORTED_MODULE_28__.FeatureEffectLayer)((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_26__.BlendLayer)((0,_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_34__.TemporalLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_32__.RefreshableLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_33__.ScaleRangeLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_29__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_31__.PortalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_14__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_24__.default)))))))))) {
  constructor(e) {
    super(e), this.capabilities = null, this.copyright = null, this.customParameters = null, this.definitionExpression = null, this.displayField = null, this.elevationInfo = null, this.featureReduction = null, this.featureUrl = void 0, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.objectIdField = null, this.operationalLayerType = "WFS", this.maxFeatures = 3e3, this.mode = 0, this.name = null, this.namespaceUri = null, this.outFields = null, this.popupEnabled = !0, this.popupTemplate = null, this.screenSizePerspectiveEnabled = !0, this.source = new _graphics_sources_WFSSource_js__WEBPACK_IMPORTED_MODULE_25__.default({
      layer: this
    }), this.spatialReference = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_45__.default.WGS84, this.spatialReferences = [4326], this.swapXY = void 0, this.title = "WFS", this.type = "wfs", this.url = null, this.version = void 0;
  }

  static fromWFSLayerInfo(e) {
    const {
      customParameters: r,
      fields: t,
      geometryField: i,
      geometryType: o,
      name: s,
      namespaceUri: n,
      objectIdField: p,
      spatialReference: a,
      swapXY: l,
      url: d,
      wfsCapabilities: m
    } = e;
    return new J({
      customParameters: r,
      fields: t,
      geometryField: i,
      geometryType: o,
      name: s,
      namespaceUri: n,
      objectIdField: p,
      spatialReference: a,
      swapXY: l,
      url: d,
      wfsCapabilities: m
    });
  }

  destroy() {
    var e;
    null == (e = this.source) || e.destroy();
  }

  load(e) {
    return this.addResolvingPromise(this.loadFromPortal({
      supportedTypes: ["WFS"]
    }, e).then(() => this.source.load(e)).then(() => {
      this.read(this.source.sourceJSON, {
        origin: "service",
        url: this.parsedUrl
      }), this.revert(["objectIdField", "fields", "timeInfo", "spatialReference", "name", "namespaceUri"], "service"), (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_40__.fixRendererFields)(this.renderer, this.fieldsIndex), (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_40__.fixTimeInfoFields)(this.timeInfo, this.fieldsIndex);
    })), Promise.resolve(this);
  }

  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("capabilities"), (this._get("createQueryVersion") || 0) + 1;
  }

  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }

  writeFields(e, r, t) {
    const i = e.filter(e => e.name !== _ogc_wfsUtils_js__WEBPACK_IMPORTED_MODULE_35__.WFS_OID_FIELD_NAME);
    this.geometryField && i.unshift(new _support_Field_js__WEBPACK_IMPORTED_MODULE_38__.default({
      name: this.geometryField,
      alias: this.geometryField,
      type: "geometry"
    })), (0,_core_object_js__WEBPACK_IMPORTED_MODULE_15__.setDeepValue)(t, i.map(e => e.toJSON()), r);
  }

  get parsedUrl() {
    return this.url ? (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_16__.urlToObject)(this.url) : null;
  }

  set renderer(e) {
    (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_40__.fixRendererFields)(e, this.fieldsIndex), this._set("renderer", e);
  }

  createPopupTemplate(e) {
    return (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_44__.createPopupTemplate)(this, e);
  }

  createQuery() {
    const e = new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_43__.default();
    e.returnGeometry = !0, e.outFields = ["*"], e.where = this.definitionExpression || "1=1";
    const {
      timeOffset: r,
      timeExtent: t
    } = this;
    return e.timeExtent = null != r && null != t ? t.offset(-r.value, r.unit) : t || null, e;
  }

  getFieldDomain(e, r) {
    var t;
    return null == (t = this.getField(e)) ? void 0 : t.domain;
  }

  getField(e) {
    return this.fieldsIndex.get(e);
  }

  queryFeatures(e, r) {
    return this.load().then(() => this.source.queryFeatures(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_43__.default.from(e) || this.createQuery(), r)).then(e => {
      if (null != e && e.features) for (const r of e.features) r.layer = r.sourceLayer = this;
      return e;
    });
  }

  queryObjectIds(e, r) {
    return this.load().then(() => this.source.queryObjectIds(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_43__.default.from(e) || this.createQuery(), r));
  }

  queryFeatureCount(e, r) {
    return this.load().then(() => this.source.queryFeatureCount(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_43__.default.from(e) || this.createQuery(), r));
  }

  queryExtent(e, r) {
    return this.load().then(() => this.source.queryExtent(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_43__.default.from(e) || this.createQuery(), r));
  }

  hasDataChanged() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        const {
          dataChanged: e,
          updates: r
        } = yield _this.source.refresh(_this.customParameters);
        return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__.isSome)(r) && _this.read(r, {
          origin: "service",
          url: _this.parsedUrl,
          ignoreDefaults: !0
        }), e;
      } catch {}

      return !1;
    })();
  }

};

(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  readOnly: !0,
  aliasOf: "source.capabilities"
})], _.prototype, "capabilities", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: String
})], _.prototype, "copyright", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  readOnly: !0
})], _.prototype, "createQueryVersion", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  json: {
    name: "wfsInfo.customParameters",
    write: {
      ignoreOrigin: !0
    }
  }
})], _.prototype, "customParameters", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  readOnly: !0
})], _.prototype, "defaultPopupTemplate", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: String,
  json: {
    name: "layerDefinition.definitionExpression",
    write: {
      enabled: !0,
      allowNull: !0
    }
  }
})], _.prototype, "definitionExpression", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: String
})], _.prototype, "displayField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_36__.elevationInfo)], _.prototype, "elevationInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)(_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_37__.featureReductionProperty)], _.prototype, "featureReduction", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: String,
  readOnly: !0,
  json: {
    name: "wfsInfo.featureUrl",
    write: {
      ignoreOrigin: !0,
      isRequired: !0
    }
  }
})], _.prototype, "featureUrl", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: [_support_Field_js__WEBPACK_IMPORTED_MODULE_38__.default],
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
})], _.prototype, "fields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_22__.writer)("fields")], _.prototype, "writeFields", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)(M.fieldsIndex)], _.prototype, "fieldsIndex", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_46__.default,
  json: {
    name: "extent"
  }
})], _.prototype, "fullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)()], _.prototype, "geometryField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: String,
  json: {
    read: {
      source: "layerDefinition.geometryType",
      reader: _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_23__.featureGeometryTypeKebabDictionary.read
    },
    write: {
      target: "layerDefinition.geometryType",
      writer: _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_23__.featureGeometryTypeKebabDictionary.write,
      ignoreOrigin: !0
    },
    origins: {
      service: {
        read: _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_23__.featureGeometryTypeKebabDictionary.read
      }
    }
  }
})], _.prototype, "geometryType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: String
})], _.prototype, "id", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_36__.labelsVisible)], _.prototype, "labelsVisible", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: [_support_LabelClass_js__WEBPACK_IMPORTED_MODULE_41__.default],
  json: {
    name: "layerDefinition.drawingInfo.labelingInfo",
    read: {
      reader: _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_42__.reader
    },
    write: !0
  }
})], _.prototype, "labelingInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_36__.legendEnabled)], _.prototype, "legendEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: ["show", "hide"]
})], _.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: String
})], _.prototype, "objectIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: ["WFS"]
})], _.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_20__.Integer,
  json: {
    name: "wfsInfo.maxFeatures",
    write: {
      ignoreOrigin: !0,
      isRequired: !0
    }
  }
})], _.prototype, "maxFeatures", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: [0],
  readOnly: !0,
  json: {
    origins: {
      "web-map": {
        write: {
          ignoreOrigin: !0,
          isRequired: !0
        }
      }
    }
  }
})], _.prototype, "mode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: String,
  json: {
    name: "wfsInfo.name",
    write: {
      ignoreOrigin: !0,
      isRequired: !0
    }
  }
})], _.prototype, "name", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: String,
  json: {
    name: "wfsInfo.wfsNamespace",
    write: {
      ignoreOrigin: !0,
      isRequired: !0
    }
  }
})], _.prototype, "namespaceUri", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_36__.opacityDrawingInfo)], _.prototype, "opacity", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)(M.outFields)], _.prototype, "outFields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  readOnly: !0
})], _.prototype, "parsedUrl", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_36__.popupEnabled)], _.prototype, "popupEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_3__.default,
  json: {
    name: "popupInfo",
    write: !0
  }
})], _.prototype, "popupTemplate", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__.rendererTypes,
  json: {
    origins: {
      service: {
        name: "drawingInfo.renderer"
      },
      "web-scene": {
        types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__.webSceneRendererTypes,
        name: "layerDefinition.drawingInfo.renderer",
        write: !0
      }
    },
    name: "layerDefinition.drawingInfo.renderer",
    write: {
      ignoreOrigin: !0
    }
  }
})], _.prototype, "renderer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_36__.screenSizePerspectiveEnabled)], _.prototype, "screenSizePerspectiveEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  readOnly: !0
})], _.prototype, "source", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_45__.default,
  json: {
    name: "layerDefinition.spatialReference",
    write: {
      ignoreOrigin: !0,
      isRequired: !0
    },
    origins: {
      service: {
        name: "extent.spatialReference"
      }
    }
  }
})], _.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  readOnly: !0,
  type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_20__.Integer],
  json: {
    name: "wfsInfo.supportedSpatialReferences",
    write: {
      ignoreOrigin: !0,
      isRequired: !0
    }
  }
})], _.prototype, "spatialReferences", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: Boolean,
  value: !1,
  json: {
    name: "wfsInfo.swapXY",
    write: {
      ignoreOrigin: !0,
      isRequired: !0
    }
  }
})], _.prototype, "swapXY", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  json: {
    write: {
      ignoreOrigin: !0,
      isRequired: !0
    },
    origins: {
      service: {
        name: "name"
      }
    }
  }
})], _.prototype, "title", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  json: {
    read: !1
  },
  readOnly: !0
})], _.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_36__.url)], _.prototype, "url", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  type: String,
  readOnly: !0,
  json: {
    name: "wfsInfo.version",
    write: {
      ignoreOrigin: !0,
      isRequired: !0
    }
  }
})], _.prototype, "version", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({
  aliasOf: "source.wfsCapabilities"
})], _.prototype, "wfsCapabilities", void 0), _ = J = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_21__.subclass)("esri.layers.WFSLayer")], _);
const k = _;


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

/***/ 6978:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/WFSSource.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WFSSource": () => (/* binding */ j),
/* harmony export */   "default": () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/Loadable.js */ 23412);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/workers/workers.js */ 74775);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../geometry/support/typeUtils.js */ 557);
/* harmony import */ var _support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./support/clientSideDefaults.js */ 45033);
/* harmony import */ var _ogc_wfsUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ogc/wfsUtils.js */ 42225);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../rest/support/FeatureSet.js */ 42762);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


















let j = class extends (0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_4__.HandleOwnerMixin)(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_6__.default) {
  constructor() {
    var _this;

    (super(...arguments), _this = this), this.capabilities = (0,_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_15__.createCapabilities)(!1, !1), this.type = "wfs", this.refresh = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.debounce)( /*#__PURE__*/function () {
      var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
        yield _this.load();
        const {
          extent: t
        } = yield _this._connection.invoke("refresh", e);
        return _this.sourceJSON.extent = t, {
          dataChanged: !0,
          updates: {
            extent: _this.sourceJSON.extent
          }
        };
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  load(e) {
    var t;
    const r = null != (t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(e) && e.signal) ? t : null;
    return this.addResolvingPromise(this._startWorker({
      signal: r
    })), Promise.resolve(this);
  }

  destroy() {
    var e;
    null == (e = this._connection) || e.close(), this._connection = null;
  }

  openPorts() {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this2.load(), _this2._connection.openPorts();
    })();
  }

  queryFeatures(e, t = {}) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this3.load(t);
      const r = yield _this3._connection.invoke("queryFeatures", e ? e.toJSON() : null, t);
      return _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_17__.default.fromJSON(r);
    })();
  }

  queryFeaturesJSON(e, t = {}) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this4.load(t), _this4._connection.invoke("queryFeatures", e ? e.toJSON() : null, t);
    })();
  }

  queryFeatureCount(e, t = {}) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this5.load(t), _this5._connection.invoke("queryFeatureCount", e ? e.toJSON() : null, t);
    })();
  }

  queryObjectIds(e, t = {}) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this6.load(t), _this6._connection.invoke("queryObjectIds", e ? e.toJSON() : null, t);
    })();
  }

  queryExtent(e, t = {}) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this7.load(t);
      const r = yield _this7._connection.invoke("queryExtent", e ? e.toJSON() : null, t);
      return {
        count: r.count,
        extent: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__.default.fromJSON(r.extent)
      };
    })();
  }

  querySnapping(e, t = {}) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this8.load(t), _this8._connection.invoke("querySnapping", e, t);
    })();
  }

  _createLoadOptions(e) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        url: r,
        customParameters: o,
        name: s,
        namespaceUri: a,
        spatialReference: n,
        fields: c,
        geometryType: p,
        swapXY: l
      } = _this9.layer;
      if (!r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("wfs-layer:missing-url", "WFSLayer must be created with a url");
      _this9.wfsCapabilities || (_this9.wfsCapabilities = yield (0,_ogc_wfsUtils_js__WEBPACK_IMPORTED_MODULE_16__.getCapabilities)(r, {
        customParameters: o,
        ...e
      }));
      const u = ["fields", "geometryType", "name", "namespaceUri", "spatialReference", "swapXY"].some(e => null == _this9.layer[e]),
            y = u ? yield (0,_ogc_wfsUtils_js__WEBPACK_IMPORTED_MODULE_16__.getWFSLayerInfo)(_this9.wfsCapabilities, s, a, {
        spatialReference: n,
        customParameters: o,
        signal: null == e ? void 0 : e.signal
      }) : { ...(0,_ogc_wfsUtils_js__WEBPACK_IMPORTED_MODULE_16__.prepareWFSLayerFields)(c),
        geometryType: p,
        name: s,
        namespaceUri: a,
        spatialReference: n,
        swapXY: l
      },
            d = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.unwrap)((0,_ogc_wfsUtils_js__WEBPACK_IMPORTED_MODULE_16__.findFeatureType)(_this9.wfsCapabilities.readFeatureTypes(), y.name, y.namespaceUri)),
            S = _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_14__.featureGeometryTypeKebabDictionary.toJSON(y.geometryType);
      return {
        customParameters: o,
        featureType: d,
        fields: y.fields.map(e => e.toJSON()),
        geometryField: y.geometryField,
        geometryType: S,
        getFeatureUrl: _this9.wfsCapabilities.operations.GetFeature.url,
        getFeatureOutputFormat: _this9.wfsCapabilities.operations.GetFeature.outputFormat,
        objectIdField: y.objectIdField,
        spatialReference: y.spatialReference.toJSON(),
        swapXY: y.swapXY
      };
    })();
  }

  _startWorker(e) {
    var _this10 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const [t, r] = yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.eachAlways)([_this10._createLoadOptions(e), (0,_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_9__.open)("WFSSourceWorker", { ...e,
        strategy: (0,_core_has_js__WEBPACK_IMPORTED_MODULE_5__.default)("feature-layers-workers") ? "dedicated" : "local"
      })]),
            s = t.error || r.error || null,
            a = r.value || null;
      if (s) throw a && a.close(), s;
      const i = t.value;
      _this10._connection = r.value;
      const {
        extent: n
      } = yield _this10._connection.invoke("load", i, e);
      _this10.sourceJSON = {
        extent: n,
        fields: i.fields,
        geometryType: i.geometryType,
        objectIdField: i.objectIdField,
        geometryField: i.geometryField,
        drawingInfo: (0,_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_15__.createDrawingInfo)(i.geometryType),
        name: i.featureType.title,
        wfsInfo: {
          name: i.featureType.name,
          featureUrl: i.getFeatureUrl,
          maxFeatures: 3e3,
          swapXY: i.swapXY,
          supportedSpatialReferences: i.featureType.supportedSpatialReferences,
          version: "2.0.0",
          wfsNamespace: i.featureType.namespaceUri
        }
      };
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], j.prototype, "capabilities", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  constructOnly: !0
})], j.prototype, "layer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], j.prototype, "sourceJSON", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], j.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], j.prototype, "wfsCapabilities", void 0), j = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__.subclass)("esri.layers.graphics.sources.WFSSource")], j);
const v = j;


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
//# sourceMappingURL=9140.d4848ae8b4997ef53689.js.map