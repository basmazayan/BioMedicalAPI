"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1622],{

/***/ 64669:
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/OGCFeatureLayer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ M)
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
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../geometry/support/typeUtils.js */ 557);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _graphics_sources_OGCFeatureSource_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./graphics/sources/OGCFeatureSource.js */ 83346);
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ 57993);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ 52166);
/* harmony import */ var _mixins_FeatureEffectLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mixins/FeatureEffectLayer.js */ 62932);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_OrderedLayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mixins/OrderedLayer.js */ 15701);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ 53730);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mixins/TemporalLayer.js */ 77932);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./support/featureReductionUtils.js */ 38750);
/* harmony import */ var _support_FeatureType_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./support/FeatureType.js */ 33912);
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./support/Field.js */ 66536);
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./support/fieldProperties.js */ 80839);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./support/fieldUtils.js */ 81451);
/* harmony import */ var _support_LabelClass_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./support/LabelClass.js */ 51331);
/* harmony import */ var _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./support/labelingInfo.js */ 93560);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../rest/support/Query.js */ 37995);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../support/popupUtils.js */ 81569);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/











































const B = (0,_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_36__.defineFieldProperties)();
let V = class extends (0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_22__.APIKeyMixin)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_24__.CustomParametersMixin)((0,_mixins_FeatureEffectLayer_js__WEBPACK_IMPORTED_MODULE_25__.FeatureEffectLayer)((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_23__.BlendLayer)((0,_mixins_OrderedLayer_js__WEBPACK_IMPORTED_MODULE_27__.OrderedLayer)((0,_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_31__.TemporalLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_30__.ScaleRangeLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_26__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_28__.PortalLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_29__.RefreshableLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_13__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_20__.default))))))))))) {
  constructor(e) {
    super(e), this.collectionId = null, this.copyright = null, this.definitionExpression = null, this.description = null, this.displayField = null, this.elevationInfo = null, this.featureReduction = null, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.hasZ = void 0, this.labelingInfo = null, this.labelsVisible = !0, this.legendEnabled = !0, this.objectIdField = null, this.operationalLayerType = "OGCFeatureLayer", this.popupEnabled = !0, this.popupTemplate = null, this.screenSizePerspectiveEnabled = !0, this.source = new _graphics_sources_OGCFeatureSource_js__WEBPACK_IMPORTED_MODULE_21__.default({
      layer: this
    }), this.spatialReference = null, this.title = null, this.type = "ogc-feature", this.typeIdField = null, this.types = null, this.url = null;
  }

  destroy() {
    var e;
    null == (e = this.source) || e.destroy();
  }

  load(e) {
    return this.addResolvingPromise(this.loadFromPortal({
      supportedTypes: ["OGCFeatureServer"]
    }, e).then(() => this._fetchService(e))), this.when();
  }

  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }

  get isTable() {
    return this.loaded && null == this.geometryType;
  }

  set renderer(e) {
    (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_37__.fixRendererFields)(e, this.fieldsIndex), this._set("renderer", e);
  }

  on(e, r) {
    return super.on(e, r);
  }

  createPopupTemplate(e) {
    return (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_41__.createPopupTemplate)(this, e);
  }

  createQuery() {
    return new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_40__.default();
  }

  getField(e) {
    return this.fieldsIndex.get(e);
  }

  getFieldDomain(e, r) {
    var t;
    let i,
        o = !1;
    const s = null == r || null == (t = r.feature) ? void 0 : t.attributes,
          n = this.typeIdField && (null == s ? void 0 : s[this.typeIdField]);
    return null != n && this.types && (o = this.types.some(r => {
      var t, o;
      return r.id == n && (i = null == (t = r.domains) ? void 0 : t[e], "inherited" === (null == (o = i) ? void 0 : o.type) && (i = this._getLayerDomain(e)), !0);
    })), o || i || (i = this._getLayerDomain(e)), i;
  }

  queryFeatures(e, r) {
    return this.load().then(() => this.source.queryFeatures(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_40__.default.from(e) || this.createQuery(), r)).then(e => {
      var r;
      return null == e || null == (r = e.features) || r.forEach(e => {
        e.layer = e.sourceLayer = this;
      }), e;
    });
  }

  _fetchService(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.source.load(e), _this.read(_this.source.featureDefinition, {
        origin: "service"
      }), (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_37__.fixRendererFields)(_this.renderer, _this.fieldsIndex), (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_37__.fixTimeInfoFields)(_this.timeInfo, _this.fieldsIndex);
    })();
  }

  _getLayerDomain(e) {
    if (!this.fields) return null;

    for (const r of this.fields) if (r.name === e && r.domain) return r.domain;

    return null;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  readOnly: !0,
  json: {
    origins: {
      service: {
        read: !0
      }
    }
  }
})], V.prototype, "capabilities", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: String,
  json: {
    write: !0
  }
})], V.prototype, "collectionId", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: String
})], V.prototype, "copyright", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  readOnly: !0
})], V.prototype, "defaultPopupTemplate", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: String
})], V.prototype, "definitionExpression", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  readOnly: !0,
  type: String,
  json: {
    origins: {
      service: {
        name: "collection.description"
      }
    }
  }
})], V.prototype, "description", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: String
})], V.prototype, "displayField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.elevationInfo)], V.prototype, "elevationInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)(_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_33__.featureReductionProperty)], V.prototype, "featureReduction", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: [_support_Field_js__WEBPACK_IMPORTED_MODULE_35__.default],
  json: {
    origins: {
      service: {
        name: "layerDefinition.fields"
      }
    }
  }
})], V.prototype, "fields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)(B.fieldsIndex)], V.prototype, "fieldsIndex", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  readOnly: !0,
  type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_42__.default,
  json: {
    origins: {
      service: {
        name: "layerDefinition.extent"
      }
    }
  }
})], V.prototype, "fullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_19__.featureGeometryTypeKebabDictionary.apiValues,
  json: {
    origins: {
      service: {
        name: "layerDefinition.geometryType",
        read: {
          reader: _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_19__.featureGeometryTypeKebabDictionary.read
        }
      }
    }
  }
})], V.prototype, "geometryType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: Boolean,
  json: {
    origins: {
      service: {
        name: "layerDefinition.hasZ"
      }
    }
  }
})], V.prototype, "hasZ", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: Boolean,
  readOnly: !0
})], V.prototype, "isTable", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: [_support_LabelClass_js__WEBPACK_IMPORTED_MODULE_38__.default],
  json: {
    origins: {
      "web-document": {
        name: "layerDefinition.drawingInfo.labelingInfo",
        read: {
          reader: _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_39__.reader
        },
        write: !0
      }
    }
  }
})], V.prototype, "labelingInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.labelsVisible)], V.prototype, "labelsVisible", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.legendEnabled)], V.prototype, "legendEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: String,
  json: {
    origins: {
      service: {
        name: "layerDefinition.objectIdField"
      }
    }
  }
})], V.prototype, "objectIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: ["OGCFeatureLayer"]
})], V.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.popupEnabled)], V.prototype, "popupEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_3__.default,
  json: {
    name: "popupInfo",
    write: !0
  }
})], V.prototype, "popupTemplate", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__.rendererTypes,
  json: {
    origins: {
      service: {
        name: "layerDefinition.drawingInfo.renderer",
        write: !1
      },
      "web-scene": {
        types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__.webSceneRendererTypes,
        name: "layerDefinition.drawingInfo.renderer",
        write: !0
      }
    },
    name: "layerDefinition.drawingInfo.renderer",
    write: !0
  }
})], V.prototype, "renderer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.screenSizePerspectiveEnabled)], V.prototype, "screenSizePerspectiveEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  readOnly: !0
})], V.prototype, "source", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  readOnly: !0,
  type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_43__.default,
  json: {
    origins: {
      service: {
        read: !0
      }
    }
  }
})], V.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: String,
  json: {
    write: {
      enabled: !0,
      ignoreOrigin: !0,
      isRequired: !0
    },
    origins: {
      service: {
        name: "collection.title"
      }
    }
  }
})], V.prototype, "title", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  readOnly: !0,
  json: {
    read: !1
  }
})], V.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: String,
  readOnly: !0
})], V.prototype, "typeIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  type: [_support_FeatureType_js__WEBPACK_IMPORTED_MODULE_34__.default]
})], V.prototype, "types", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.url)], V.prototype, "url", void 0), V = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_18__.subclass)("esri.layers.OGCFeatureLayer")], V);
const M = V;


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

/***/ 83346:
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/OGCFeatureSource.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OGCFeatureSource": () => (/* binding */ v),
/* harmony export */   "default": () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Loadable.js */ 23412);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ogc/ogcFeatureUtils.js */ 44921);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../rest/support/FeatureSet.js */ 42762);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../geometry/support/typeUtils.js */ 557);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/














let v = class extends _core_Loadable_js__WEBPACK_IMPORTED_MODULE_4__.default {
  constructor() {
    super(...arguments), this.featureDefinition = null, this.type = "ogc-feature";
  }

  load(e) {
    return this.addResolvingPromise(this._loadOGCServices(this.layer, e)), this.when();
  }

  getFeatureDefinition() {
    const {
      featureDefinition: {
        collection: e,
        layerDefinition: t,
        spatialReference: s,
        supportedCrs: r
      },
      layer: {
        apiKey: o,
        capabilities: i,
        customParameters: p
      }
    } = this;
    return {
      capabilities: i,
      collection: e,
      layerDefinition: t,
      queryParameters: {
        apiKey: o,
        customParameters: p
      },
      spatialReference: s,
      supportedCrs: r
    };
  }

  queryExtent(e, t = {}) {
    return null;
  }

  queryFeatureCount(e, t = {}) {
    return null;
  }

  queryFeatures(e, t = {}) {
    return this.queryFeaturesJSON(e, t).then(e => _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_12__.default.fromJSON(e));
  }

  queryFeaturesJSON(e, t = {}) {
    const s = this.getFeatureDefinition();
    return this.load(t).then(() => (0,_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__.queryFeatureSetJSON)(s, e, t));
  }

  queryObjectIds(e, t = {}) {
    return null;
  }

  supportsSpatialReference(e) {
    return !(!e.isWGS84 && !e.isWebMercator) || !!this.featureDefinition.supportedCrs[e.wkid];
  }

  _conformsToType(e, t) {
    var s;
    const r = new RegExp(`^${t}$`, "i");
    return null != (s = e.conformsTo.some(e => r.test(e))) && s;
  }

  _getCapabilities(e, t) {
    var s, o, i, p, a, n, u;
    const l = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(t) ? null == (s = t.components) ? void 0 : s.parameters : null;
    return {
      attachment: null,
      data: {
        isVersioned: !1,
        supportsAttachment: !1,
        supportsM: !1,
        supportsZ: e
      },
      metadata: {
        supportsAdvancedFieldProperties: !1
      },
      operations: {
        supportsCalculate: !1,
        supportsTruncate: !1,
        supportsValidateSql: !1,
        supportsAdd: !1,
        supportsDelete: !1,
        supportsEditing: !1,
        supportsChangeTracking: !1,
        supportsQuery: !1,
        supportsQueryAttachments: !1,
        supportsResizeAttachments: !1,
        supportsSync: !1,
        supportsUpdate: !1,
        supportsExceedsLimitStatistics: !1
      },
      query: {
        maxRecordCount: null != (o = null != (i = null == l || null == (p = l.limit) || null == (a = p.schema) ? void 0 : a.maximum) ? i : null == l || null == (n = l.limitFeatures) || null == (u = n.schema) ? void 0 : u.maximum) ? o : 5e3,
        maxRecordCountFactor: void 0,
        standardMaxRecordCount: void 0,
        supportsCacheHint: !1,
        supportsCentroid: !1,
        supportsDisjointSpatialRelationship: !1,
        supportsDistance: !1,
        supportsDistinct: !1,
        supportsExtent: !1,
        supportsFormatPBF: !1,
        supportsGeometryProperties: !1,
        supportsHavingClause: !1,
        supportsHistoricMoment: !1,
        supportsMaxRecordCountFactor: !1,
        supportsOrderBy: !1,
        supportsPagination: !1,
        supportsPercentileStatistics: !1,
        supportsQuantization: !1,
        supportsQuantizationEditMode: !1,
        supportsQueryByOthers: !1,
        supportsQueryGeometry: !1,
        supportsResultType: !1,
        supportsStandardizedQueriesOnly: !1,
        supportsTopFeaturesQuery: !1,
        supportsStatistics: !1,
        supportsSqlExpression: !1,
        tileMaxRecordCount: void 0
      },
      queryRelated: {
        supportsCount: !1,
        supportsOrderBy: !1,
        supportsPagination: !1
      },
      editing: {
        supportsDeleteByAnonymous: !1,
        supportsDeleteByOthers: !1,
        supportsGeometryUpdate: !1,
        supportsGlobalId: !1,
        supportsReturnServiceEditsInSourceSpatialReference: !1,
        supportsRollbackOnFailure: !1,
        supportsUpdateByAnonymous: !1,
        supportsUpdateByOthers: !1,
        supportsUploadWithItemId: !1,
        supportsUpdateWithoutM: !1
      }
    };
  }

  _getExtent(e) {
    var t;
    const s = null == (t = e.extent) ? void 0 : t.spatial;
    if (!s) return null;
    const r = s.bbox[0],
          o = 4 === r.length,
          i = r[0],
          p = r[1],
          a = o ? void 0 : r[2];
    return {
      xmin: i,
      ymin: p,
      xmax: o ? r[2] : r[3],
      ymax: o ? r[3] : r[4],
      zmin: a,
      zmax: o ? void 0 : r[5],
      spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__.default.WGS84.toJSON()
    };
  }

  _getStorageSpatialReference(e) {
    var t;
    const s = null != (t = e.storageCrs) ? t : _ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__.crsDefault,
          r = (0,_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__.getSpatialReferenceWkid)(s);
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(r) ? _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__.default.WGS84 : new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__.default({
      wkid: r
    });
  }

  _getSupportedSpatialReferences(e, t) {
    var s;
    const r = "#/crs",
          o = null != (s = e.crs) ? s : [_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__.crsDefault],
          i = o.includes(r) ? o.filter(e => e !== r).concat(t.crs) : o,
          p = /^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;
    return i.filter(e => !p.test(e));
  }

  _loadOGCServices(e, s) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const o = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(s) ? s.signal : null,
            {
        apiKey: i,
        collectionId: p,
        customParameters: a,
        fields: y,
        geometryType: h,
        hasZ: g,
        objectIdField: v,
        timeInfo: x,
        url: R
      } = e,
            w = {
        fields: null == y ? void 0 : y.map(e => e.toJSON()),
        geometryType: _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_14__.typeKebabDictionary.toJSON(h),
        hasZ: g,
        objectIdField: v,
        timeInfo: null == x ? void 0 : x.toJSON()
      },
            C = {
        apiKey: i,
        customParameters: a,
        signal: o
      },
            j = yield (0,_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__.getServerLandingPage)(R, C),
            [O, F] = yield Promise.all([(0,_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__.getServerConformance)(j, C), (0,_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__.getServerCollections)(j, C)]);
      if (!_this._conformsToType(O, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson")) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("ogc-feature-layer:no-geojson-support", "Server does not support geojson");
      const b = F.collections.find(e => e.id === p);
      if (!b) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("ogc-feature-layer:collection-not-found", "Server does not contain the named collection");

      const D = _this._conformsToType(O, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30") ? yield (0,_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__.getServerOpenApi)(j, C) : null,
            P = yield (0,_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__.getCollectionDefinition)(b, w, C),
            T = _this._getCapabilities(P.hasZ, D),
            _ = _this._getExtent(b),
            q = _this._getStorageSpatialReference(b).toJSON(),
            E = _this._getSupportedSpatialReferences(b, F),
            G = new RegExp(`^${_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__.crsPrefix}`, "i"),
            I = {};

      for (const t of E) {
        const e = (0,_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_11__.getSpatialReferenceWkid)(t);
        (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e) && (I[e] || (I[e] = t.replace(G, "")));
      }

      P.extent = _, _this.featureDefinition = {
        capabilities: T,
        collection: b,
        layerDefinition: P,
        queryParameters: {},
        spatialReference: q,
        supportedCrs: I
      };
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()], v.prototype, "featureDefinition", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({
  constructOnly: !0
})], v.prototype, "layer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()], v.prototype, "type", void 0), v = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.layers.graphics.sources.OGCFeatureSource")], v);
const x = v;


/***/ })

}]);
//# sourceMappingURL=1622.2879eaa080e0083cf6ca.js.map