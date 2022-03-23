"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[5906],{

/***/ 5906:
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/PointCloudLayer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PopupTemplate.js */ 95821);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/lang.js */ 60161);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/object.js */ 47914);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ 57993);
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ 41122);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/SceneService.js */ 55048);
/* harmony import */ var _pointCloudFilters_typeUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pointCloudFilters/typeUtils.js */ 77918);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/Field.js */ 66536);
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/fieldProperties.js */ 80839);
/* harmony import */ var _popup_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../popup/ExpressionInfo.js */ 63591);
/* harmony import */ var _renderers_support_pointCloud_typeUtils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../renderers/support/pointCloud/typeUtils.js */ 68009);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../support/popupUtils.js */ 81569);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






























const N = _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__.default.getLogger("esri.layers.PointCloudLayer"),
      R = (0,_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_27__.defineFieldProperties)();
let O = class extends (0,_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_23__.SceneService)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__.ArcGISService)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_21__.PortalLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__.ScaleRangeLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_8__.MultiOriginJSONMixin)((0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_18__.APIKeyMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_17__.default))))))) {
  constructor(...e) {
    super(...e), this.operationalLayerType = "PointCloudLayer", this.popupEnabled = !0, this.popupTemplate = null, this.opacity = 1, this.filters = [], this.fields = null, this.fieldsIndex = null, this.outFields = null, this.path = null, this.legendEnabled = !0, this.renderer = null, this.type = "point-cloud";
  }

  normalizeCtorArgs(e, r) {
    return "string" == typeof e ? {
      url: e,
      ...r
    } : e;
  }

  get defaultPopupTemplate() {
    return this.attributeStorageInfo ? this.createPopupTemplate() : null;
  }

  getFieldDomain(e) {
    const r = this.fieldsIndex.get(e);
    return r && r.domain ? r.domain : null;
  }

  readServiceFields(e, r, t) {
    return Array.isArray(e) ? e.map(e => {
      const r = new _support_Field_js__WEBPACK_IMPORTED_MODULE_26__.default();
      return "FieldTypeInteger" === e.type && ((e = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)(e)).type = "esriFieldTypeInteger"), r.read(e, t), r;
    }) : Array.isArray(r.attributeStorageInfo) ? r.attributeStorageInfo.map(e => new _support_Field_js__WEBPACK_IMPORTED_MODULE_26__.default({
      name: e.name,
      type: "ELEVATION" === e.name ? "double" : "integer"
    })) : null;
  }

  set elevationInfo(e) {
    this._set("elevationInfo", e), this._validateElevationInfo();
  }

  writeRenderer(e, r, t, o) {
    (0,_core_object_js__WEBPACK_IMPORTED_MODULE_9__.setDeepValue)("layerDefinition.drawingInfo.renderer", e.write({}, o), r);
  }

  load(e) {
    const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(e) ? e.signal : null,
          t = this.loadFromPortal({
      supportedTypes: ["Scene Service"]
    }, e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__.throwIfAbortError).then(() => this._fetchService(r));
    return this.addResolvingPromise(t), Promise.resolve(this);
  }

  createPopupTemplate(e) {
    const r = (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_30__.createPopupTemplate)(this, e);
    return this.formatPopupTemplateReturnsField(r), this.formatPopupTemplateRGBField(r), r;
  }

  formatPopupTemplateReturnsField(e) {
    const r = this.fieldsIndex.get("RETURNS");
    if (!r) return;
    const t = e.fieldInfos.find(e => e.fieldName === r.name);
    if (!t) return;
    const o = new _popup_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_28__.default({
      name: "pcl-returns-decoded",
      title: r.alias || r.name,
      expression: `\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `
    });
    e.expressionInfos = [...(e.expressionInfos || []), o], t.fieldName = "expression/pcl-returns-decoded";
  }

  formatPopupTemplateRGBField(e) {
    const r = this.fieldsIndex.get("RGB");
    if (!r) return;
    const t = e.fieldInfos.find(e => e.fieldName === r.name);
    if (!t) return;
    const o = new _popup_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_28__.default({
      name: "pcl-rgb-decoded",
      title: r.alias || r.name,
      expression: `\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `
    });
    e.expressionInfos = [...(e.expressionInfos || []), o], t.fieldName = "expression/pcl-rgb-decoded";
  }

  queryCachedStatistics(e, r) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (yield _this.load(r), !_this.attributeStorageInfo) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");

      const i = _this.fieldsIndex.get(e);

      if (!i) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("pointcloudlayer:field-unexisting", `Field '${e}' does not exist on the layer`);

      for (const o of _this.attributeStorageInfo) if (o.name === i.name) {
        const e = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.join)(_this.parsedUrl.path, `./statistics/${o.key}`);
        return (0,_request_js__WEBPACK_IMPORTED_MODULE_3__.default)(e, {
          query: {
            f: "json",
            token: _this.apiKey
          },
          responseType: "json",
          signal: r ? r.signal : null
        }).then(e => e.data);
      }

      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("pointcloudlayer:no-cached-statistics", "Cached statistics for this attribute are not available");
    })();
  }

  saveAs(e, r) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this2._debouncedSaveOperations(1, { ...r,
        getTypeKeywords: () => _this2._getTypeKeywords(),
        portalItemLayerType: "point-cloud"
      }, e);
    })();
  }

  save() {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = {
        getTypeKeywords: () => _this3._getTypeKeywords(),
        portalItemLayerType: "point-cloud"
      };
      return _this3._debouncedSaveOperations(0, e);
    })();
  }

  validateLayer(e) {
    if (e.layerType && "PointCloud" !== e.layerType) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("pointcloudlayer:layer-type-not-supported", "PointCloudLayer does not support this layer type", {
      layerType: e.layerType
    });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("layer:service-version-not-supported", "Service version is not supported.", {
      serviceVersion: this.version.versionString,
      supportedVersions: "1.x-2.x"
    });
    if (this.version.major > 2) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("layer:service-version-too-new", "Service version is too new.", {
      serviceVersion: this.version.versionString,
      supportedVersions: "1.x-2.x"
    });
  }

  hasCachedStatistics(e) {
    return null != this.attributeStorageInfo && this.attributeStorageInfo.some(r => r.name === e);
  }

  _getTypeKeywords() {
    return ["PointCloud"];
  }

  _validateElevationInfo() {
    const e = this.elevationInfo;
    e && ("absolute-height" !== e.mode && N.warn(".elevationInfo=", "Point cloud layers only support absolute-height elevation mode"), e.featureExpressionInfo && "0" !== e.featureExpressionInfo.expression && N.warn(".elevationInfo=", "Point cloud layers do not support featureExpressionInfo"));
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: ["PointCloudLayer"]
})], O.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__.popupEnabled)], O.prototype, "popupEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__.default,
  json: {
    name: "popupInfo",
    write: !0
  }
})], O.prototype, "popupTemplate", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0,
  json: {
    read: !1
  }
})], O.prototype, "defaultPopupTemplate", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0,
  json: {
    write: !1,
    read: !1,
    origins: {
      "web-document": {
        write: !1,
        read: !1
      }
    }
  }
})], O.prototype, "opacity", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: ["show", "hide"]
})], O.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  types: [_pointCloudFilters_typeUtils_js__WEBPACK_IMPORTED_MODULE_24__.types],
  json: {
    origins: {
      service: {
        read: {
          source: "filters"
        }
      }
    },
    name: "layerDefinition.filters",
    write: !0
  }
})], O.prototype, "filters", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: [_support_Field_js__WEBPACK_IMPORTED_MODULE_26__.default]
})], O.prototype, "fields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)(R.fieldsIndex)], O.prototype, "fieldsIndex", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__.reader)("service", "fields", ["fields", "attributeStorageInfo"])], O.prototype, "readServiceFields", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)(R.outFields)], O.prototype, "outFields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  readOnly: !0
})], O.prototype, "attributeStorageInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__.elevationInfo)], O.prototype, "elevationInfo", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  type: String,
  json: {
    origins: {
      "web-scene": {
        read: !0,
        write: !0
      },
      "portal-item": {
        read: !0,
        write: !0
      }
    },
    read: !1
  }
})], O.prototype, "path", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__.legendEnabled)], O.prototype, "legendEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  types: _renderers_support_pointCloud_typeUtils_js__WEBPACK_IMPORTED_MODULE_29__.types,
  json: {
    origins: {
      service: {
        read: {
          source: "drawingInfo.renderer"
        }
      }
    },
    name: "layerDefinition.drawingInfo.renderer",
    write: {
      target: {
        "layerDefinition.drawingInfo.renderer": {
          types: _renderers_support_pointCloud_typeUtils_js__WEBPACK_IMPORTED_MODULE_29__.types
        },
        "layerDefinition.drawingInfo.transparency": {
          type: Number
        }
      }
    }
  }
})], O.prototype, "renderer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__.writer)("renderer")], O.prototype, "writeRenderer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)({
  json: {
    read: !1
  },
  readOnly: !0
})], O.prototype, "type", void 0), O = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__.subclass)("esri.layers.PointCloudLayer")], O);
const _ = O;


/***/ }),

/***/ 6044:
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudBitfieldFilter.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PointCloudFilter.js */ 56861);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;let p=d=class extends _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_6__.default{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new d({field:this.field,requiredClearBits:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.requiredClearBits),requiredSetBits:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.requiredSetBits)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__.Integer],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],p.prototype,"requiredClearBits",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__.Integer],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],p.prototype,"requiredSetBits",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__.enumeration)({pointCloudBitfieldFilter:"bitfield"})],p.prototype,"type",void 0),p=d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p);const u=p;


/***/ }),

/***/ 56861:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudFilter.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
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
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.pointCloudFilters.PointCloudFilter")],t);const l=t;


/***/ }),

/***/ 58837:
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudReturnFilter.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PointCloudFilter.js */ 56861);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n;let p=n=class extends _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_6__.default{constructor(r){super(r),this.includedReturns=[],this.type="return"}clone(){return new n({field:this.field,includedReturns:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.includedReturns)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"includedReturns",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__.enumeration)({pointCloudReturnFilter:"return"})],p.prototype,"type",void 0),p=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],p);const u=p;


/***/ }),

/***/ 5606:
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudValueFilter.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PointCloudFilter.js */ 56861);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let l=p=class extends _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_6__.default{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new p({field:this.field,mode:this.mode,values:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.values)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"mode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__.enumeration)({pointCloudValueFilter:"value"})],l.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"values",void 0),l=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.pointCloudFilters.PointCloudValueFilter")],l);const u=l;


/***/ }),

/***/ 77918:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/pointCloudFilters/typeUtils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "types": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _PointCloudBitfieldFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointCloudBitfieldFilter.js */ 6044);
/* harmony import */ var _PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PointCloudFilter.js */ 56861);
/* harmony import */ var _PointCloudReturnFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PointCloudReturnFilter.js */ 58837);
/* harmony import */ var _PointCloudValueFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PointCloudValueFilter.js */ 5606);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e={key:"type",base:_PointCloudFilter_js__WEBPACK_IMPORTED_MODULE_1__.default,typeMap:{value:_PointCloudValueFilter_js__WEBPACK_IMPORTED_MODULE_3__.default,bitfield:_PointCloudBitfieldFilter_js__WEBPACK_IMPORTED_MODULE_0__.default,return:_PointCloudReturnFilter_js__WEBPACK_IMPORTED_MODULE_2__.default}};


/***/ }),

/***/ 55605:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/PointCloudRGBRenderer.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PointCloudRenderer.js */ 17681);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;let c=i=class extends _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__.default{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null}clone(){return new i({...this.cloneProperties(),field:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.field)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__.enumeration)({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.renderers.PointCloudRGBRenderer")],c);const n=c;


/***/ }),

/***/ 68009:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/typeUtils.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "types": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../PointCloudClassBreaksRenderer.js */ 75460);
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../PointCloudRenderer.js */ 17681);
/* harmony import */ var _PointCloudRGBRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PointCloudRGBRenderer.js */ 55605);
/* harmony import */ var _PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PointCloudStretchRenderer.js */ 67886);
/* harmony import */ var _PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../PointCloudUniqueValueRenderer.js */ 34357);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i={key:"type",base:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_1__.default,typeMap:{"point-cloud-class-breaks":_PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_0__.default,"point-cloud-rgb":_PointCloudRGBRenderer_js__WEBPACK_IMPORTED_MODULE_2__.default,"point-cloud-stretch":_PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_3__.default,"point-cloud-unique-value":_PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_4__.default},errorContext:"renderer"};


/***/ })

}]);
//# sourceMappingURL=5906.563c1611f88cab908cbc.js.map