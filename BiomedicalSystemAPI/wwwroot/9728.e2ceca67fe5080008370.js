"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[9728],{

/***/ 59728:
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/ImageryLayer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PopupTemplate.js */ 95821);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_ArcGISImageService_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mixins/ArcGISImageService.js */ 13469);
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ 41122);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ 52166);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ 53730);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/TemporalLayer.js */ 77932);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../support/popupUtils.js */ 81569);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let I=class extends((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_14__.BlendLayer)((0,_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_20__.TemporalLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_18__.RefreshableLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__.ScaleRangeLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__.PortalLayer)((0,_mixins_ArcGISImageService_js__WEBPACK_IMPORTED_MODULE_12__.ArcGISImageService)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_15__.CustomParametersMixin)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_13__.ArcGISService)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_11__.default))))))))))){constructor(...e){super(...e),this.legendEnabled=!0,this.isReference=null,this.operationalLayerType="ArcGISImageServiceLayer",this.popupEnabled=!0,this.popupTemplate=null,this.type="imagery"}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"]},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAbortError).then((()=>this._fetchService(r)))),Promise.resolve(this)}writeOperationalLayerType(e,r,t){var o;const i="vector-field"===(null==(o=this.renderer)?void 0:o.type);r[t]=i?"ArcGISImageServiceVectorLayer":"ArcGISImageServiceLayer"}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const r=this.rasterFields,t=this.title,o=new Set;let i=!1,s=!1;this.capabilities&&(i=this.capabilities.operations.supportsQuery&&this.fields&&this.fields.length>0,s=i&&("esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType));const a=new Set;i&&(a.add("raster.itempixelvalue"),s&&a.add("raster.magnitude").add("raster.direction"));for(const p of r){const e=p.name.toLowerCase();a.has(e)||e.indexOf("raster.servicepixelvalue.")>-1||o.add(p.name)}return (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_22__.createPopupTemplate)({fields:r,title:t},{...e,visibleFieldNames:o})}queryFeatures(e,r){return this.queryRasters(e,r).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryFeatureCount(e,r){return this.queryRasterCount(e,r)}redraw(){this.emit("redraw")}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__.legendEnabled)],I.prototype,"legendEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:["show","hide"]})],I.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],I.prototype,"isReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:["ArcGISImageServiceLayer"],json:{origins:{"web-map":{type:["ArcGISImageServiceLayer","ArcGISImageServiceVectorLayer"],read:!1,write:{target:"layerType",ignoreOrigin:!0}}}}})],I.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__.writer)("web-map","operationalLayerType")],I.prototype,"writeOperationalLayerType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__.popupEnabled)],I.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__.default,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],I.prototype,"popupTemplate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],I.prototype,"defaultPopupTemplate",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0,json:{read:!1}})],I.prototype,"type",void 0),I=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.layers.ImageryLayer")],I);const L=I;


/***/ }),

/***/ 13469:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISImageService.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArcGISImageService": () => (/* binding */ ve)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Graphic.js */ 99326);
/* harmony import */ var _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rasterRenderers.js */ 15079);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/aliasOf.js */ 95774);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../support/commonProperties.js */ 34042);
/* harmony import */ var _support_DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../support/DimensionalDefinition.js */ 81751);
/* harmony import */ var _support_ExportImageServiceParameters_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../support/ExportImageServiceParameters.js */ 36886);
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../support/Field.js */ 66536);
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../support/FieldsIndex.js */ 62419);
/* harmony import */ var _support_imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../support/imageryRendererUtils.js */ 78680);
/* harmony import */ var _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../support/MosaicRule.js */ 35983);
/* harmony import */ var _support_PixelBlock_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../support/PixelBlock.js */ 77847);
/* harmony import */ var _support_rasterEnums_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../support/rasterEnums.js */ 92015);
/* harmony import */ var _support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../support/RasterFunction.js */ 42174);
/* harmony import */ var _support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../support/RasterInfo.js */ 42492);
/* harmony import */ var _support_RasterJobHandler_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../support/RasterJobHandler.js */ 87066);
/* harmony import */ var _support_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../support/rasterFormats/RasterCodec.js */ 96125);
/* harmony import */ var _support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../support/rasterFunctions/vectorFieldUtils.js */ 24384);
/* harmony import */ var _renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../renderers/support/rasterRendererHelper.js */ 52291);
/* harmony import */ var _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../renderers/support/RasterSymbolizer.js */ 28454);
/* harmony import */ var _rest_imageService_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../rest/imageService.js */ 20171);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../core/unitUtils.js */ 55612);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../kernel.js */ 77871);
/* harmony import */ var _rest_query_support_AttachmentInfo_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../rest/query/support/AttachmentInfo.js */ 98020);
/* harmony import */ var _rest_support_AttachmentQuery_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../rest/support/AttachmentQuery.js */ 39442);
/* harmony import */ var _rest_query_executeForCount_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../rest/query/executeForCount.js */ 80819);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../geometry/Geometry.js */ 20119);
/* harmony import */ var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../geometry/Multipoint.js */ 43245);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../geometry/Polygon.js */ 38535);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../geometry/Polyline.js */ 23926);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../geometry/support/normalizeUtils.js */ 46010);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../support/arcgisLayerUrl.js */ 46996);
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../core/pbf.js */ 96545);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../rest/support/Query.js */ 37995);
/* harmony import */ var _rest_query_executeForIds_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../rest/query/executeForIds.js */ 40525);
/* harmony import */ var _rest_query_executeQueryJSON_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../rest/query/executeQueryJSON.js */ 42700);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../rest/support/FeatureSet.js */ 42762);
/* harmony import */ var _rest_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../rest/support/RelationshipQuery.js */ 39358);
/* harmony import */ var _rest_support_TopFeaturesQuery_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../rest/support/TopFeaturesQuery.js */ 66923);
/* harmony import */ var _rest_support_ImageAngleParameters_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../rest/support/ImageAngleParameters.js */ 11127);
/* harmony import */ var _rest_support_ImageHistogramParameters_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../rest/support/ImageHistogramParameters.js */ 82448);
/* harmony import */ var _rest_support_ImageIdentifyParameters_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../../rest/support/ImageIdentifyParameters.js */ 31524);
/* harmony import */ var _rest_support_ImagePixelLocationParameters_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../../rest/support/ImagePixelLocationParameters.js */ 78169);
/* harmony import */ var _rest_support_ImageSampleParameters_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../../rest/support/ImageSampleParameters.js */ 16263);
/* harmony import */ var _views_2d_engine_flow_dataUtils_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../views/2d/engine/flow/dataUtils.js */ 62013);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/

































































const he = _core_Logger_js__WEBPACK_IMPORTED_MODULE_9__.default.getLogger("esri.layers.mixins.ArcGISImageService"),
      fe = (0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__.strict)()({
  U1: "u1",
  U2: "u2",
  U4: "u4",
  U8: "u8",
  S8: "s8",
  U16: "u16",
  S16: "s16",
  U32: "u32",
  S32: "s32",
  F32: "f32",
  F64: "f64",
  C64: "c64",
  C128: "c128",
  UNKNOWN: "unknown"
}),
      ye = new Set(["png", "png8", "png24", "png32", "jpg", "bmp", "gif", "jpgpng", "lerc", "tiff"]),
      ge = (0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.ensureRange)(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__.ensureNumber, {
  min: 0,
  max: 255
});

function Re(e) {
  if (!e) return null;
  const t = JSON.stringify(e).match(/"rasterFunction":"(.*?")/gi),
        r = null == t ? void 0 : t.map(e => e.replace('"rasterFunction":"', "").replace('"', ""));
  return r ? r.join("/") : null;
}

const ve = o => {
  let u = class extends o {
    constructor() {
      super(...arguments), this._functionRasterInfos = {}, this._rasterJobHandler = {
        instance: null,
        refCount: 0,
        connectionPromise: null
      }, this._symbolizer = null, this._defaultServiceMosaicRule = null, this._serviceSourceType = null, this._serviceSupportsMosaicRule = null, this.rasterAttributeTableFieldPrefix = "Raster.", this.adjustAspectRatio = null, this.bandCount = null, this.bandIds = void 0, this.capabilities = null, this.compressionQuality = void 0, this.compressionTolerance = .01, this.copyright = null, this.definitionExpression = null, this.exportImageServiceParameters = null, this.rasterInfo = null, this.fields = null, this.fullExtent = null, this.hasMultidimensions = !1, this.imageMaxHeight = 4100, this.imageMaxWidth = 4100, this.interpolation = void 0, this.minScale = 0, this.maxScale = 0, this.multidimensionalInfo = null, this.noData = null, this.noDataInterpretation = void 0, this.objectIdField = null, this.geometryType = "polygon", this.typeIdField = null, this.types = [], this.pixelSizeX = null, this.pixelSizeY = null, this.pixelFilter = null, this.raster = void 0, this.viewId = void 0, this.renderer = null, this.rasterAttributeTable = null, this.rasterFunctionInfos = null, this.serviceDataType = null, this.spatialReference = null, this.pixelType = null, this.serviceRasterInfo = null, this.sourceJSON = null, this.url = null, this.version = null;
    }

    initialize() {
      this._set("exportImageServiceParameters", new _support_ExportImageServiceParameters_js__WEBPACK_IMPORTED_MODULE_21__.ExportImageServiceParameters({
        layer: this
      }));
    }

    readDefaultServiceMosaicRule(e, t) {
      return this._serviceSupportsMosaicRule ? _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_25__.default.fromJSON(t) : null;
    }

    readServiceSourceType(e, t) {
      return this._isMosaicDataset(t) ? "mosaic-dataset" : "raster-dataset";
    }

    readServiceSupportsMosaicRule(e, t) {
      return this._isMosaicRuleSupported(t);
    }

    get rasterFunctionNamesIndex() {
      const e = new Map();
      return !this.rasterFunctionInfos || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(this.rasterFunctionInfos) && this.rasterFunctionInfos.length < 1 || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(this.rasterFunctionInfos) && this.rasterFunctionInfos.forEach(t => {
        e.set(t.name.toLowerCase().replace(/ /gi, "_"), t.name);
      }), e;
    }

    readBandIds(e, t) {
      if (Array.isArray(e) && e.length > 0 && e.every(e => "number" == typeof e)) return e;
    }

    readCapabilities(e, t) {
      return this._readCapabilities(t);
    }

    writeCompressionQuality(e, t, r) {
      null != e && "lerc" !== this.format && (t[r] = e);
    }

    writeCompressionTolerance(e, t, r) {
      "lerc" === this.format && null != e && (t[r] = e);
    }

    get fieldsIndex() {
      return this.fields ? new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_23__.default(this.fields) : null;
    }

    set format(e) {
      e && ye.has(e.toLowerCase()) && this._set("format", e.toLowerCase());
    }

    readFormat(e, t) {
      return "esriImageServiceDataTypeVector-UV" === t.serviceDataType || "esriImageServiceDataTypeVector-MagDir" === t.serviceDataType || null != this.pixelFilter ? "lerc" : "jpgpng";
    }

    readMinScale(e, t) {
      return null != t.minLOD && null != t.maxLOD ? e : 0;
    }

    readMaxScale(e, t) {
      return null != t.minLOD && null != t.maxLOD ? e : 0;
    }

    set mosaicRule(e) {
      let t = e;
      t && t.mosaicMethod && (t = _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_25__.default.fromJSON({ ...t.toJSON(),
        mosaicMethod: t.mosaicMethod,
        mosaicOperation: t.mosaicOperation
      })), this._set("mosaicRule", t);
    }

    readMosaicRule(e, t) {
      const r = e || t.mosaicRule;
      return r ? _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_25__.default.fromJSON(r) : this._isMosaicRuleSupported(t) ? _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_25__.default.fromJSON(t) : null;
    }

    writeMosaicRule(e, t, r) {
      let i = this.mosaicRule;
      const s = this.definitionExpression;
      i ? s && s !== i.where && (i = i.clone(), i.where = s) : s && (i = new _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_25__.default({
        where: s
      })), this._isValidCustomizedMosaicRule(i) && (t[r] = i.toJSON());
    }

    writeNoData(e, t, r) {
      null != e && "number" == typeof e && (t[r] = ge(e));
    }

    readObjectIdField(e, t) {
      if (!e) {
        const r = t.fields.filter(e => "esriFieldTypeOID" === e.type || "oid" === e.type);
        e = r && r[0] && r[0].name;
      }

      return e;
    }

    get parsedUrl() {
      return this.url ? (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__.urlToObject)(this.url) : null;
    }

    readRenderer(e, t, i) {
      var s, n;
      const a = null == t || null == (s = t.layerDefinition) || null == (n = s.drawingInfo) ? void 0 : n.renderer,
            o = (0,_rasterRenderers_js__WEBPACK_IMPORTED_MODULE_4__.read)(a, i);
      return null == o ? null : ("vector-field" === o.type && t.symbolTileSize && !a.symbolTileSize && (o.symbolTileSize = t.symbolTileSize), (0,_support_imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_24__.isSupportedRendererType)(o) || he.warn("ArcGISImageService", "Imagery layer doesn't support given renderer type."), o);
    }

    writeRenderer(e, t, r) {
      t.layerDefinition = t.layerDefinition || {}, t.layerDefinition.drawingInfo = t.layerDefinition.drawingInfo || {}, t.layerDefinition.drawingInfo.renderer = e.toJSON(), "vector-field" === e.type && (t.symbolTileSize = e.symbolTileSize);
    }

    get rasterFields() {
      const e = this.rasterAttributeTableFieldPrefix || "Raster.",
            t = new _support_Field_js__WEBPACK_IMPORTED_MODULE_22__.default({
        name: "Raster.ItemPixelValue",
        alias: "Item Pixel Value",
        domain: null,
        editable: !1,
        length: 50,
        type: "string"
      }),
            r = new _support_Field_js__WEBPACK_IMPORTED_MODULE_22__.default({
        name: "Raster.ServicePixelValue",
        alias: "Service Pixel Value",
        domain: null,
        editable: !1,
        length: 50,
        type: "string"
      }),
            i = new _support_Field_js__WEBPACK_IMPORTED_MODULE_22__.default({
        name: "Raster.ServicePixelValue.Raw",
        alias: "Raw Service Pixel Value",
        domain: null,
        editable: !1,
        length: 50,
        type: "string"
      });
      let s = this.fields ? (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_8__.clone)(this.fields) : [];
      s.push(r), this.capabilities.operations.supportsQuery && this.fields && this.fields.length > 0 && s.push(t), this.version >= 10.4 && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(this.rasterFunctionInfos) && this.rasterFunctionInfos.some(e => "none" === e.name.toLowerCase()) && s.push(i), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(this.rasterFunctionInfos) && this.rasterFunctionInfos.filter(e => "none" !== e.name.toLowerCase()).forEach(e => {
        s.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_22__.default({
          name: "Raster.ServicePixelValue." + e.name,
          alias: e.name,
          domain: null,
          editable: !1,
          length: 50,
          type: "string"
        }));
      }), null == this.pixelFilter || "esriImageServiceDataTypeVector-UV" !== this.serviceDataType && "esriImageServiceDataTypeVector-MagDir" !== this.serviceDataType || (s.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_22__.default({
        name: "Raster.Magnitude",
        alias: "Magnitude",
        domain: null,
        editable: !1,
        type: "double"
      })), s.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_22__.default({
        name: "Raster.Direction",
        alias: "Direction",
        domain: null,
        editable: !1,
        type: "double"
      })));
      const n = this.rasterInfo.attributeTable && this.rasterInfo.attributeTable.fields || null;

      if (n && n.length > 0) {
        const t = n.filter(e => "esriFieldTypeOID" !== e.type && "value" !== e.name.toLowerCase()).map(t => {
          const r = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_8__.clone)(t);
          return r.name = e + t.name, r;
        });
        s = s.concat(t);
      }

      return s;
    }

    set renderingRule(e) {
      let t = e;
      t && t.rasterFunction && (t = _support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_28__.default.fromJSON({ ...t.toJSON(),
        rasterFunction: t.rasterFunction,
        rasterFunctionArguments: t.rasterFunctionArguments
      })), this._set("renderingRule", t);
    }

    readRenderingRule(e, t) {
      const r = t.rasterFunctionInfos;
      return t.renderingRule || r && r.length && "None" !== r[0].name ? _support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_28__.default.fromJSON(t.renderingRule || {
        rasterFunctionInfos: t.rasterFunctionInfos
      }) : null;
    }

    writeRenderingRule(e, t, r) {
      this._isRFTJson(e) || (t[r] = e.toJSON());
    }

    readSpatialReference(e, t) {
      const r = e || t.extent.spatialReference;
      return r ? _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_65__.default.fromJSON(r) : null;
    }

    readPixelType(e) {
      return fe.fromJSON(e) || e;
    }

    writePixelType(e, t, r) {
      ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isNone)(this.serviceRasterInfo) || this.pixelType !== this.serviceRasterInfo.pixelType) && (t[r] = fe.toJSON(e));
    }

    readVersion(e, t) {
      let r = t.currentVersion;
      return r || (r = t.hasOwnProperty("fields") || t.hasOwnProperty("timeInfo") ? 10 : 9.3), r;
    }

    applyFilter(e) {
      let t = e;
      return this.pixelFilter && (t = this._clonePixelData(e), this.pixelFilter(t)), t;
    }

    applyRenderer(e, t) {
      var _this = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        let r = e;

        if (!_this._isPicture() && _this.renderer && _this._symbolizer && !_this.pixelFilter) {
          const i = JSON.stringify(_this._cachedRendererJson) !== JSON.stringify(_this.renderer.toJSON()),
                s = _this._rasterJobHandler.instance,
                {
            bandIds: n
          } = _this;

          if (s) {
            i && (_this._symbolizer.bind(), yield s.updateSymbolizer(_this._symbolizer, t), _this._cachedRendererJson = _this.renderer.toJSON());
            const a = yield s.symbolize({
              bandIds: n,
              ...e
            }, t);
            r = {
              extent: e.extent,
              pixelBlock: a
            };
          } else r = {
            extent: e.extent,
            pixelBlock: _this._symbolizer.symbolize({
              bandIds: n,
              ...e
            })
          };
        }

        return r;
      })();
    }

    destroy() {
      this._shutdownJobHandler();
    }

    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }

    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }

    computeAngles(e, t) {
      var _this2 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if (yield _this2._fetchCapabilities(null == t ? void 0 : t.signal), !_this2.capabilities.operations.supportsComputeAngles) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer:compute-angles", "this operation is not supported on the input image service");
        return e = (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__.ensureClass)(_rest_support_ImageAngleParameters_js__WEBPACK_IMPORTED_MODULE_59__.default, e).clone(), (0,_rest_imageService_js__WEBPACK_IMPORTED_MODULE_35__.computeAngles)(_this2.url, e, _this2._getRequestOptions(t));
      })();
    }

    computePixelSpaceLocations(e, t) {
      var _this3 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if (yield _this3._fetchCapabilities(null == t ? void 0 : t.signal), !_this3.capabilities.operations.supportsComputePixelLocation) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer:compute-pixel-space-locations", "this operation is not supported on the input image service");
        return e = (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__.ensureClass)(_rest_support_ImagePixelLocationParameters_js__WEBPACK_IMPORTED_MODULE_62__.default, e).clone(), (0,_rest_imageService_js__WEBPACK_IMPORTED_MODULE_35__.computePixelSpaceLocations)(_this3.url, e, _this3._getRequestOptions(t));
      })();
    }

    computeHistograms(e, t) {
      var _this4 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if (yield _this4._fetchCapabilities(null == t ? void 0 : t.signal), !_this4.capabilities.operations.supportsComputeHistograms) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer:compute-histograms", "this operation is not supported on the input image service");
        e = (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__.ensureClass)(_rest_support_ImageHistogramParameters_js__WEBPACK_IMPORTED_MODULE_60__.default, e).clone();
        const {
          raster: r,
          mosaicRule: i,
          renderingRule: s
        } = _this4;
        return s && null == e.renderingRule && (e.renderingRule = s), i && null == e.mosaicRule && (e.mosaicRule = i), r && null == e.raster && (e.raster = r), (0,_rest_imageService_js__WEBPACK_IMPORTED_MODULE_35__.computeHistograms)(_this4.url, e, _this4._getRequestOptions(t));
      })();
    }

    computeStatisticsHistograms(e, t) {
      var _this5 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if (yield _this5._fetchCapabilities(null == t ? void 0 : t.signal), !_this5.capabilities.operations.supportsComputeStatisticsHistograms) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer:compute-statistics-histograms", "this operation is not supported on the input image service");
        e = (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__.ensureClass)(_rest_support_ImageHistogramParameters_js__WEBPACK_IMPORTED_MODULE_60__.default, e).clone();
        const {
          raster: r,
          mosaicRule: i,
          renderingRule: s
        } = _this5;
        return s && null == e.renderingRule && (e.renderingRule = s), i && null == e.mosaicRule && (e.mosaicRule = i), r && null == e.raster && (e.raster = r), (0,_rest_imageService_js__WEBPACK_IMPORTED_MODULE_35__.computeStatisticsHistograms)(_this5.url, e, _this5._getRequestOptions(t));
      })();
    }

    getField(e) {
      const {
        fieldsIndex: t
      } = this;
      return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(t) ? t.get(e) : void 0;
    }

    getFieldDomain(e, t) {
      const r = this.getField(e);
      return r ? r.domain : null;
    }

    fetchImage(e, t, r, i = {}) {
      if (null == e || null == t || null == r) return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer:fetch-image", "Insufficient parameters for requesting an image. A valid extent, width and height values are required."));
      const s = this.renderer || this._symbolizer ? this.generateRasterInfo(this.renderingRule, {
        signal: i.signal
      }) : null;
      return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__.when)(s).then(s => {
        s && (this.rasterInfo = s);
        const n = {
          imageServiceParameters: this.getExportImageServiceParameters(e, t, r, i.timeExtent),
          imageProps: {
            extent: e,
            width: t,
            height: r,
            format: this.format
          },
          requestAsImageElement: i.requestAsImageElement && !this.pixelFilter || !1,
          signal: i.signal
        };
        return this._requestArrayBuffer(n);
      });
    }

    fetchKeyProperties(e) {
      const t = e && e.renderingRule && e.renderingRule.toJSON();
      return (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(this.parsedUrl.path + "/keyProperties", {
        query: this._getQueryParams({
          renderingRule: this.version >= 10.3 && t ? JSON.stringify(t) : null
        })
      }).then(e => e.data);
    }

    fetchRasterAttributeTable(e) {
      const t = e && e.renderingRule && e.renderingRule.toJSON();
      return this.version < 10.1 ? Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("#fetchRasterAttributeTable()", "Failed to get rasterAttributeTable")) : (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(this.parsedUrl.path + "/rasterAttributeTable", {
        query: this._getQueryParams({
          renderingRule: this.version >= 10.3 && t ? JSON.stringify(t) : null
        })
      }).then(e => _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_56__.default.fromJSON(e.data));
    }

    getCatalogItemRasterInfo(e, t) {
      var _this6 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const r = (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this6.parsedUrl.path + "/" + e + "/info", {
          query: _this6._getQueryParams(),
          ...t
        }).then(e => e.data),
              i = (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this6.parsedUrl.path + "/" + e + "/info/keyProperties", {
          query: _this6._getQueryParams(),
          ...t
        }).then(e => e.data).catch(() => {}),
              s = yield Promise.all([r, i]);
        if (!s[0]) return;
        const a = _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_41__.default.fromJSON(s[0].extent),
              o = s[0].statistics ? s[0].statistics.map(e => ({
          min: e[0],
          max: e[1],
          avg: e[2],
          stddev: e[3]
        })) : null;
        return new _support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_29__.default({
          bandCount: s[0].bandCount,
          extent: a,
          spatialReference: a.sr,
          pixelSize: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_44__.default({
            x: s[0].pixelSizeX,
            y: s[0].pixelSizeY,
            spatialReference: a.sr
          }),
          pixelType: s[0].pixelType.toLowerCase(),
          statistics: o,
          histograms: s[0].histograms,
          keyProperties: s[1] || {}
        });
      })();
    }

    getCatalogItemICSInfo(e, t) {
      var _this7 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const {
          data: r
        } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this7.parsedUrl.path + "/" + e + "/info/ics", {
          query: _this7._getQueryParams(),
          ...t
        }),
              i = r && r.ics;
        if (!i) return;
        let s = null;

        try {
          s = (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this7.parsedUrl.path + "/" + e + "/info", {
            query: _this7._getQueryParams(),
            ...t
          })).data.extent;
        } catch {}

        if (!s || !s.spatialReference) return {
          ics: i,
          icsToPixelTransform: null,
          icsExtent: null,
          northDirection: null
        };
        const a = _this7.version >= 10.7 ? (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this7.parsedUrl.path + "/" + e + "/info/icstopixel", {
          query: _this7._getQueryParams(),
          ...t
        }).then(e => e.data).catch(() => ({})) : {},
              o = s.spatialReference,
              l = {
          geometries: JSON.stringify({
            geometryType: "esriGeometryEnvelope",
            geometries: [s]
          }),
          inSR: o.wkid || JSON.stringify(o),
          outSR: "0:" + e
        },
              u = (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this7.parsedUrl.path + "/project", {
          query: _this7._getQueryParams(l),
          ...t
        }).then(e => e.data).catch(() => ({})),
              p = 5,
              c = (s.xmin + s.xmax) / 2,
              m = (s.ymax - s.ymin) / (p + 1),
              d = s.ymin + m,
              h = [];

        for (let n = 0; n < p; n++) h.push({
          x: c,
          y: d + m * n
        });

        const f = {
          geometries: JSON.stringify({
            geometryType: "esriGeometryPoint",
            geometries: h
          }),
          inSR: o.wkid || JSON.stringify(o),
          outSR: "0:" + e
        },
              y = (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this7.parsedUrl.path + "/project", {
          query: _this7._getQueryParams(f),
          ...t
        }).then(e => e.data).catch(() => ({})),
              g = yield Promise.all([a, u, y]);
        let R = g[0].ipxf;

        if (null == R) {
          var v, x, b;
          const e = null == (v = i.geodataXform) ? void 0 : v.xf_0;
          "topup" === (null == e || null == (x = e.name) ? void 0 : x.toLowerCase()) && 6 === (null == e || null == (b = e.coefficients) ? void 0 : b.length) && (R = {
            affine: {
              name: "ics [sensor: Frame] to pixel (column, row) transformation",
              coefficients: e.coefficients,
              cellsizeRatio: 0,
              type: "GeometricXform"
            }
          });
        }

        const S = _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_41__.default.fromJSON(g[1] && g[1].geometries && g[1].geometries[0]);
        S && (S.spatialReference = new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_65__.default({
          wkid: 0,
          imageCoordinateSystem: i
        }));
        const I = g[2].geometries ? g[2].geometries.filter(e => null != e && null != e.x && null != e.y && "NaN" !== e.x && "NaN" !== e.y) : [],
              _ = I.length;
        if (_ < 3) return {
          ics: i,
          icsToPixelTransform: R,
          icsExtent: S,
          northDirection: null
        };
        let w = 0,
            F = 0,
            O = 0,
            P = 0;

        for (let n = 0; n < _; n++) w += I[n].x, F += I[n].y, O += I[n].x * I[n].x, P += I[n].x * I[n].y;

        const T = (_ * P - w * F) / (_ * O - w * w);
        let D = 0;
        const N = I[p - 1].x > I[0].x,
              j = I[p - 1].y > I[0].y;
        return T === 1 / 0 ? D = j ? 90 : 270 : 0 === T ? D = N ? 0 : 180 : T > 0 ? D = N ? 180 * Math.atan(T) / Math.PI : 180 * Math.atan(T) / Math.PI + 180 : T < 0 && (D = j ? 180 + 180 * Math.atan(T) / Math.PI : 360 + 180 * Math.atan(T) / Math.PI), {
          ics: i,
          icsToPixelTransform: R,
          icsExtent: S,
          northDirection: D
        };
      })();
    }

    generateRasterInfo(e, t) {
      var _this8 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if ((!e || "none" === e.functionName.toLowerCase() || _this8._isVectorFieldResampleFunction(e)) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(_this8.serviceRasterInfo)) return _this8.serviceRasterInfo;
        const r = Re(e);
        if (_this8._functionRasterInfos[r]) return _this8._functionRasterInfos[r];

        const i = _this8._generateRasterInfo(e, t);

        _this8._functionRasterInfos[r] = i;

        try {
          return yield i;
        } catch {
          return _this8._functionRasterInfos[r] = null, null;
        }
      })();
    }

    getExportImageServiceParameters(e, t, r, i) {
      e = e.clone().shiftCentralMeridian();
      const s = (0,_rest_imageService_js__WEBPACK_IMPORTED_MODULE_35__.getImageSpatialReferenceQueryParameter)(e.spatialReference, this.parsedUrl.path);
      (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(this.serviceRasterInfo) && this.pixelType !== this.serviceRasterInfo.pixelType && (this.exportImageServiceParameters.pixelType = this.pixelType);
      const n = this.exportImageServiceParameters.toJSON(),
            {
        bandIds: a,
        noData: o
      } = n;
      let {
        renderingRule: l
      } = n;
      const u = this.renderingRule && "none" !== this.renderingRule.functionName.toLowerCase(),
            c = !this.renderer || "raster-stretch" === this.renderer.type;

      if (null != a && a.length && u && c) {
        const e = {
          rasterFunction: "ExtractBand",
          rasterFunctionArguments: {
            BandIds: a
          }
        };
        if ("Stretch" === l.rasterFunction) e.rasterFunctionArguments.Raster = l.rasterFunctionArguments.Raster, l.rasterFunctionArguments.Raster = e;else if ("Colormap" === l.rasterFunction) {
          const t = l.rasterFunctionArguments.Raster;
          "Stretch" === (null == t ? void 0 : t.rasterFunction) ? (e.rasterFunctionArguments.Raster = t.rasterFunctionArguments.Raster, t.rasterFunctionArguments.Raster = e) : (e.rasterFunctionArguments.Raster = t, l.rasterFunctionArguments.Raster = e);
        } else e.rasterFunctionArguments.Raster = l, l = e;
        n.bandIds = void 0;
      } else n.bandIds = null == a ? void 0 : a.join(",");

      o instanceof Array && o.length > 0 && (n.noData = o.join(","));
      const m = this._serviceSupportsMosaicRule ? this._combineMosaicRuleWithTimeExtent(this.exportImageServiceParameters.mosaicRule, i) : null;
      n.mosaicRule = m && JSON.stringify(m), n.renderingRule = l && JSON.stringify(l);
      const d = {};

      if (i) {
        const {
          start: e,
          end: t
        } = i.toJSON();
        e && t && e === t ? d.time = "" + e : null == e && null == t || (d.time = `${null == e ? "null" : e},${null == t ? "null" : t}`);
      }

      return {
        bbox: e.xmin + "," + e.ymin + "," + e.xmax + "," + e.ymax,
        bboxSR: s,
        imageSR: s,
        size: t + "," + r,
        ...n,
        ...d
      };
    }

    getSamples(e, t) {
      var _this9 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if (yield _this9._fetchCapabilities(null == t ? void 0 : t.signal), !_this9.capabilities.operations.supportsGetSamples) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer:get-samples", "getSamples operation is not supported on the input image service");
        e = (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__.ensureClass)(_rest_support_ImageSampleParameters_js__WEBPACK_IMPORTED_MODULE_63__.default, e).clone();
        const {
          raster: r
        } = _this9;
        return r && null == e.raster && (e.raster = r), (0,_rest_imageService_js__WEBPACK_IMPORTED_MODULE_35__.getSamples)(_this9.url, e, _this9._getRequestOptions(t));
      })();
    }

    identify(e, t) {
      var _this10 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if (yield _this10._fetchCapabilities(null == t ? void 0 : t.signal), !_this10.capabilities.operations.supportsIdentify) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer:query-rasters", "query operation is not supported on the input image service");
        e = (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__.ensureClass)(_rest_support_ImageIdentifyParameters_js__WEBPACK_IMPORTED_MODULE_61__.default, e).clone();
        const {
          raster: r,
          mosaicRule: i,
          renderingRule: s
        } = _this10;

        if (s && null == e.renderingRule && (e.renderingRule = s), i && null == e.mosaicRule) {
          const t = _this10._combineMosaicRuleWithTimeExtent(i, e.timeExtent);

          e.mosaicRule = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.unwrap)(t);
        }

        return r && null == e.raster && (e.raster = r), (0,_rest_imageService_js__WEBPACK_IMPORTED_MODULE_35__.identify)(_this10.url, e, _this10._getRequestOptions(t));
      })();
    }

    createQuery() {
      const e = new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_51__.default();
      return e.outFields = ["*"], e.returnGeometry = !0, e.where = this.definitionExpression || "1=1", e;
    }

    queryRasters(e, t) {
      var _this11 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        return ({
          query: e,
          requestOptions: t
        } = yield _this11._prepareForQuery(e, t)), (0,_rest_query_executeQueryJSON_js__WEBPACK_IMPORTED_MODULE_53__.executeQueryJSON)(_this11.url, e, t);
      })();
    }

    queryObjectIds(e, t) {
      var _this12 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        return ({
          query: e,
          requestOptions: t
        } = yield _this12._prepareForQuery(e, t)), (0,_rest_query_executeForIds_js__WEBPACK_IMPORTED_MODULE_52__.executeForIds)(_this12.url, e, t);
      })();
    }

    queryRasterCount(e, t) {
      var _this13 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        return ({
          query: e,
          requestOptions: t
        } = yield _this13._prepareForQuery(e, t)), (0,_rest_query_executeForCount_js__WEBPACK_IMPORTED_MODULE_40__.executeForCount)(_this13.url, e, t);
      })();
    }

    queryVisibleRasters(e, t) {
      if (!e) return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer: query-visible-rasters", "missing query parameter"));
      const {
        pixelSize: r,
        returnDomainValues: i,
        returnTopmostRaster: s,
        showNoDataRecords: n
      } = t || {
        pixelSize: null,
        returnDomainValues: !1,
        returnTopmostRaster: !1,
        showNoDataRecords: !1
      };
      let o = !1,
          l = null,
          u = null;
      const m = "raster.servicepixelvalue",
            d = this.rasterFunctionNamesIndex;

      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(e.outFields) && (o = e.outFields.some(e => -1 === e.toLowerCase().indexOf(m)), this.version >= 10.4)) {
        const t = e.outFields.filter(e => e.toLowerCase().indexOf(m) > -1 && e.length > m.length).map(e => {
          const t = e.slice(m.length + 1);
          return [this._updateRenderingRulesFunctionName(t, d), t];
        });
        l = t.map(e => new _support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_28__.default({
          functionName: e[0]
        })), u = t.map(e => e[1]), 0 === l.length ? this.renderingRule ? (l.push(this.renderingRule), u.push(this.renderingRule.functionName)) : l = null : this.renderingRule && !l.some(e => e.functionName === this.renderingRule.functionName) && (l.push(this.renderingRule), u.push(this.renderingRule.functionName));
      }

      const h = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isNone)(e.outSpatialReference) || e.outSpatialReference.equals(this.spatialReference),
            f = e.timeExtent || this.timeExtent,
            y = this._combineMosaicRuleWithTimeExtent(this.exportImageServiceParameters.mosaicRule, f),
            g = this._getQueryParams({
        geometry: e.geometry,
        timeExtent: f,
        mosaicRule: y,
        renderingRule: this.version < 10.4 ? this.renderingRule : null,
        renderingRules: l,
        pixelSize: r,
        returnCatalogItems: o,
        returnGeometry: h,
        raster: this.raster,
        maxItemCount: s ? 1 : null
      });

      delete g.f;
      const R = new _rest_support_ImageIdentifyParameters_js__WEBPACK_IMPORTED_MODULE_61__.default(g),
            v = this.generateRasterInfo(this.renderingRule);
      return new Promise(r => {
        v.then(() => {
          (0,_rest_imageService_js__WEBPACK_IMPORTED_MODULE_35__.identify)(this.url, R, {
            signal: null == t ? void 0 : t.signal,
            query: { ...this.customParameters
            }
          }).then(t => {
            var s;
            const l = e.outFields,
                  p = t.value.toLowerCase().indexOf("nodata") > -1;

            if (o && !h && null != t && null != (s = t.catalogItems) && s.features.length && (n || !p)) {
              const s = this.objectIdField || "ObjectId",
                    o = t.catalogItems.features,
                    p = o.map(e => e.attributes && e.attributes[s]),
                    c = new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_51__.default({
                objectIds: p,
                returnGeometry: !0,
                outSpatialReference: e.outSpatialReference,
                outFields: [s]
              });
              return this.queryRasters(c).then(a => {
                a && a.features && a.features.length > 0 && a.features.forEach(t => {
                  o.forEach(r => {
                    r.attributes[s] === t.attributes[s] && (r.geometry = new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_45__.default(t.geometry), r.geometry.spatialReference = e.outSpatialReference);
                  });
                }), r(this._processVisibleRastersResponse(t, {
                  returnDomainValues: i,
                  templateRRFunctionNames: u,
                  showNoDataRecords: n,
                  templateFields: l
                }));
              }).catch(() => {
                throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer:query-visible-rasters", "encountered error when querying visible rasters geometry");
              });
            }

            r(this._processVisibleRastersResponse(t, {
              returnDomainValues: i,
              templateRRFunctionNames: u,
              showNoDataRecords: n,
              templateFields: l
            }));
          }).catch(() => {
            throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer:query-visible-rasters", "encountered error when querying visible rasters");
          });
        });
      });
    }

    fetchVariableStatisticsHistograms(e, t) {
      var _this14 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const r = (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this14.parsedUrl.path + "/statistics", {
          query: _this14._getQueryParams({
            variable: e
          }),
          signal: t
        }).then(e => {
          var t;
          return null == (t = e.data) ? void 0 : t.statistics;
        }),
              i = (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this14.parsedUrl.path + "/histograms", {
          query: _this14._getQueryParams({
            variable: e
          }),
          signal: t
        }).then(e => {
          var t;
          return null == (t = e.data) ? void 0 : t.histograms;
        }),
              s = yield Promise.all([r, i]);
        return s[0] && s[0].forEach(e => {
          e.avg = e.mean, e.stddev = e.standardDeviation;
        }), {
          statistics: s[0] || null,
          histograms: s[1] || null
        };
      })();
    }

    createStreamlinesMesh(e, t) {
      var _this15 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const r = _this15._rasterJobHandler.instance;
        return r ? r.createStreamlinesMesh(e, t) : (0,_views_2d_engine_flow_dataUtils_js__WEBPACK_IMPORTED_MODULE_64__.createStreamlinesMesh)(e.rendererSettings, e.flowData, (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(t.signal) ? t.signal : new AbortController().signal);
      })();
    }

    _fetchService(e) {
      var _this16 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        yield _this16._fetchServiceInfo(e), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(_this16.serviceRasterInfo) && !_this16.rasterInfo && (_this16.rasterInfo = _this16.serviceRasterInfo);

        const t = _this16.sourceJSON,
              r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(_this16.serviceRasterInfo) ? Promise.resolve(_this16.serviceRasterInfo) : _this16._fetchAuxiliaryRasterInfo({
          serviceInfo: t,
          signal: e
        }).then(e => (_this16._set("serviceRasterInfo", e), e)),
              i = _this16.renderingRule && "none" !== _this16.renderingRule.functionName.toLowerCase() ? _this16.generateRasterInfo(_this16.renderingRule, {
          signal: e
        }) : null,
              s = _this16._getRasterFunctionInfos();

        return Promise.all([r, i, s]).then(e => {
          e[1] ? _this16._set("rasterInfo", e[1]) : _this16._set("rasterInfo", e[0]), e[2] && _this16._set("rasterFunctionInfos", e[2]), _this16.renderer && !_this16._isSupportedRenderer(_this16.renderer) && (_this16.renderer = null, he.warn("ArcGISImageService", "Switching to the default renderer. Renderer applied is not valid for this Imagery Layer")), _this16._configDefaultRenderer(), _this16.watch("renderer", () => _this16._configDefaultRenderer()), _this16.watch("renderingRule", e => {
            (_this16.renderer || _this16._symbolizer || _this16.popupEnabled && _this16.popupTemplate) && _this16.generateRasterInfo(e).then(e => {
              e && (_this16.rasterInfo = e);
            });
          });

          const t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(_this16.serviceRasterInfo) && _this16.serviceRasterInfo.multidimensionalInfo;

          t && _this16._updateMultidimensionalDefinition(t);
        });
      })();
    }

    _combineMosaicRuleWithTimeExtent(e, t) {
      const r = this.timeInfo;
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isNone)(e) || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isNone)(this.multidimensionalInfo) || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isNone)(t) || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isNone)(null == r ? void 0 : r.startField)) return e;
      const {
        startField: i
      } = r;
      var s;
      if (e = e.clone(), "mosaic-dataset" === this._serviceSourceType) return e.multidimensionalDefinition = null == (s = e.multidimensionalDefinition) ? void 0 : s.filter(e => e.dimensionName !== i), this._cleanupMultidimensionalDefinition(e);
      e.multidimensionalDefinition = e.multidimensionalDefinition || [];
      const n = e.multidimensionalDefinition.filter(e => e.dimensionName === i),
            a = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(t.start) ? t.start.getTime() : null,
            o = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(t.end) ? t.end.getTime() : null,
            l = null == a || null == o || a === o,
            u = l ? [a || o] : [[a, o]],
            m = this.version >= 10.8;
      if (n.length) n.forEach(e => {
        e.dimensionName === i && (m ? (e.dimensionName = null, e.isSlice = null, e.values = null) : (e.isSlice = l, e.values = u));
      });else if (!m) {
        const t = e.multidimensionalDefinition.filter(e => null != e.variableName && null == e.dimensionName);
        t.length ? t.forEach(e => {
          e.dimensionName = i, e.isSlice = l, e.values = u;
        }) : e.multidimensionalDefinition.push(new _support_DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_20__.default({
          variableName: "",
          dimensionName: i,
          isSlice: l,
          values: u
        }));
      }
      return this._cleanupMultidimensionalDefinition(e);
    }

    _cleanupMultidimensionalDefinition(e) {
      return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isNone)(e) ? null : (e.multidimensionalDefinition && (e.multidimensionalDefinition = e.multidimensionalDefinition.filter(e => !(!e.variableName && !e.dimensionName)), 0 === e.multidimensionalDefinition.length && (e.multidimensionalDefinition = null)), "mosaic-dataset" !== this._serviceSourceType && null == e.multidimensionalDefinition ? null : e);
    }

    _prepareForQuery(e, t) {
      var _this17 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        var r;
        if (yield _this17._fetchCapabilities(null == (r = t) ? void 0 : r.signal), !_this17.capabilities.operations.supportsQuery) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer:query-rasters", "query operation is not supported on the input image service");
        return e = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(e) ? (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__.ensureClass)(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_51__.default, e) : _this17.createQuery(), t = _this17._getRequestOptions(t), _this17.raster && (t.query = { ...t.query,
          raster: _this17.raster
        }), {
          query: e,
          requestOptions: t
        };
      })();
    }

    _initJobHandler() {
      var _this18 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        if (null != _this18._rasterJobHandler.connectionPromise) return _this18._rasterJobHandler.connectionPromise;
        const e = new _support_RasterJobHandler_js__WEBPACK_IMPORTED_MODULE_30__.default();
        _this18._rasterJobHandler.connectionPromise = e.initialize().then(() => {
          _this18._rasterJobHandler.instance = e;
        }, () => null), yield _this18._rasterJobHandler.connectionPromise;
      })();
    }

    _shutdownJobHandler() {
      this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0;
    }

    _isSupportedRenderer(e) {
      const {
        rasterInfo: t,
        renderingRule: r
      } = this;
      return "unique-value" === e.type && r && "none" !== r.functionName.toLowerCase() && 1 === t.bandCount && ["u8", "s8"].includes(t.pixelType) || (0,_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_33__.getSupportedRendererTypes)(this.rasterInfo).includes(this.renderer.type);
    }

    _fetchCapabilities(e) {
      var _this19 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        return _this19.capabilities || (yield _this19._fetchServiceInfo(e)), _this19.capabilities;
      })();
    }

    _fetchServiceInfo(e) {
      var _this20 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        var t;
        let r = _this20.sourceJSON;

        if (!r) {
          const {
            data: t,
            ssl: i
          } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this20.parsedUrl.path, {
            query: _this20._getQueryParams(),
            signal: e
          });
          r = t, _this20.sourceJSON = r, i && (_this20.url = _this20.url.replace(/^http:/i, "https:"));
        }

        if ((null == (t = r.capabilities) ? void 0 : t.toLowerCase().split(",").map(e => e.trim()).indexOf("tilesonly")) > -1) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer:fetch-service-info", "use ImageryTileLayer to open tiles-only image services");

        _this20.read(r, {
          origin: "service",
          url: _this20.parsedUrl
        });
      })();
    }

    _isMosaicDataset(e) {
      var t;
      return e.serviceSourceType ? "esriImageServiceSourceTypeMosaicDataset" === e.serviceSourceType : (null == (t = e.fields) ? void 0 : t.length) > 0;
    }

    _isMosaicRuleSupported(e) {
      var t;
      if (!e) return !1;

      const r = this._isMosaicDataset(e),
            i = e.currentVersion >= 10.71 && e.hasMultidimensions && e.timeInfo && !(e.objectIdField && (null == (t = e.fields) ? void 0 : t.length) > 1);

      return r || i;
    }

    _isVectorFieldResampleFunction(e) {
      if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(e)) return !1;
      const {
        functionName: t,
        functionArguments: r
      } = e,
            i = "resample" === t.toLowerCase(),
            s = (null == r ? void 0 : r.ResampleType) || (null == r ? void 0 : r.resampleType);
      return i && (7 === s || 10 === s);
    }

    _isPicture() {
      return !this.format || this.format.indexOf("jpg") > -1 || this.format.indexOf("png") > -1;
    }

    _configDefaultRenderer() {
      if (!this._isPicture() && !this.pixelFilter) {
        if (!this.bandIds && this.rasterInfo.bandCount >= 3) {
          const e = (0,_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_33__.getDefaultBandCombination)(this.rasterInfo);
          !e || 3 === this.rasterInfo.bandCount && 0 === e[0] && 1 === e[1] && 2 === e[2] || (this.bandIds = e);
        }

        var e, t;
        if (!this.renderer) this.renderer = (0,_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_33__.createDefaultRenderer)(this.rasterInfo, {
          bandIds: this.bandIds,
          variableName: this.renderingRule ? null : null == (e = this.mosaicRule) || null == (t = e.multidimensionalDefinition) ? void 0 : t[0].variableName
        });
        this._symbolizer ? (this._symbolizer.rendererJSON = (0,_renderers_support_rasterRendererHelper_js__WEBPACK_IMPORTED_MODULE_33__.normalizeRendererJSON)(this.renderer.toJSON()), this._symbolizer.rasterInfo = this.rasterInfo) : this._symbolizer = new _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_34__.default({
          rendererJSON: this.renderer.toJSON(),
          rasterInfo: this.rasterInfo
        }), this._symbolizer.bind().success || (this._symbolizer = null);
      }
    }

    _clonePixelData(e) {
      return null == e ? e : {
        extent: e.extent && e.extent.clone(),
        pixelBlock: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(e.pixelBlock) && e.pixelBlock.clone()
      };
    }

    _getQueryParams(e) {
      const {
        raster: t,
        viewId: r
      } = this;
      return {
        raster: t,
        viewId: r,
        f: "json",
        ...e,
        ...this.customParameters
      };
    }

    _getRequestOptions(e) {
      return { ...e,
        query: { ...(null == e ? void 0 : e.query),
          ...this.customParameters
        }
      };
    }

    _decodePixelBlock(e, t, r) {
      return this._rasterJobHandler.instance ? this._rasterJobHandler.instance.decode({
        data: e,
        options: t
      }) : (0,_support_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_31__.decode)(e, t, r);
    }

    _fetchMultidimensionalInfo(e) {
      var _this21 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        var t;
        const r = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this21.parsedUrl.path + "/multidimensionalInfo", {
          query: _this21._getQueryParams(),
          signal: e
        }).then(e => {
          var t;
          return null == (t = e.data) ? void 0 : t.multidimensionalInfo;
        });
        return null != (t = r.variables) && t.length && r.variables.forEach(e => {
          var t;
          null != (t = e.statistics) && t.length && e.statistics.forEach(e => {
            e.avg = e.mean, e.stddev = e.standardDeviation;
          });
        }), r;
      })();
    }

    _getRasterFunctionInfos(e) {
      var _this22 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const t = _this22.sourceJSON.rasterFunctionInfos;
        return _this22.serviceRasterInfo ? t : t && _this22.version >= 10.3 ? 1 === t.length && "none" === t[0].name.toLowerCase() ? t : (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this22.parsedUrl.path + "/rasterFunctionInfos", {
          query: _this22._getQueryParams(),
          signal: e
        }).then(e => {
          var t;
          return null == (t = e.data) ? void 0 : t.rasterFunctionInfos;
        }) : null;
      })();
    }

    _fetchAuxiliaryRasterInfo(e) {
      const t = e && e.serviceInfo;
      if (!t) return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer:fetch-metadata", "valid serviceInfo is required"));

      const r = e.renderingRule ? JSON.stringify(e.renderingRule.toJSON()) : null,
            i = e.signal,
            s = !!(t.hasRasterAttributeTable && this.version >= 10.1) && (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(this.parsedUrl.path + "/rasterAttributeTable", {
        query: this._getQueryParams({
          renderingRule: this.version >= 10.1 ? r : null
        }),
        signal: i
      }).then(e => _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_56__.default.fromJSON(e.data)).catch(() => null),
            o = !!(t.hasColormap && this.version >= 10.1) && (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(this.parsedUrl.path + "/colormap", {
        query: this._getQueryParams({
          renderingRule: this.version >= 10.6 ? r : null
        }),
        signal: i
      }).then(e => {
        var t;
        return null == (t = e.data) ? void 0 : t.colormap;
      }),
            l = !!(t.hasHistograms && this.version >= 10.1) && (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(this.parsedUrl.path + "/histograms", {
        query: this._getQueryParams({
          renderingRule: this.version >= 10.1 ? r : null
        }),
        signal: i
      }).then(e => {
        var t;
        return null == (t = e.data) ? void 0 : t.histograms;
      }),
            u = this.version >= 10.3 && (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(this.parsedUrl.path + "/keyProperties", {
        query: this._getQueryParams({
          renderingRule: r
        }),
        signal: i
      }).then(e => e.data).catch(() => {}),
            p = !!(t.hasMultidimensions && this.version >= 10.3) && this._fetchMultidimensionalInfo();

      return Promise.all([s, o, l, u, p]).then(e => {
        let r = null;

        if (t.minValues && t.minValues.length === t.bandCount) {
          r = [];

          for (let e = 0; e < t.minValues.length; e++) r.push({
            min: t.minValues[e],
            max: t.maxValues[e],
            avg: t.meanValues[e],
            stddev: t.stdvValues[e]
          });
        }

        const i = Math.ceil((t.extent.xmax - t.extent.xmin) / t.pixelSizeX - .1),
              s = Math.ceil((t.extent.ymax - t.extent.ymin) / t.pixelSizeY - .1),
              n = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_65__.default.fromJSON(t.spatialReference || t.extent.spatialReference);
        return new _support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_29__.default({
          width: i,
          height: s,
          bandCount: t.bandCount,
          extent: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_41__.default.fromJSON(t.extent),
          spatialReference: n,
          pixelSize: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_44__.default({
            x: t.pixelSizeX,
            y: t.pixelSizeY,
            spatialReference: n
          }),
          pixelType: t.pixelType.toLowerCase(),
          statistics: r,
          attributeTable: e[0] || null,
          colormap: e[1] || null,
          histograms: e[2] || null,
          keyProperties: e[3] || {},
          multidimensionalInfo: e[4] || null
        });
      });
    }

    _requestArrayBuffer(e) {
      const {
        imageProps: t,
        requestAsImageElement: r,
        signal: i
      } = e;
      if (r && !this.pixelFilter && t.format && t.format.indexOf("png") > -1) return (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(this.parsedUrl.path + "/exportImage", {
        responseType: "image",
        query: this._getQueryParams({
          f: "image",
          ...e.imageServiceParameters
        }),
        signal: i
      }).then(e => ({
        imageElement: e.data,
        params: t
      }));

      const s = this._initJobHandler(),
            o = (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(this.parsedUrl.path + "/exportImage", {
        responseType: "array-buffer",
        query: this._getQueryParams({
          f: "image",
          ...e.imageServiceParameters
        }),
        signal: i
      });

      return Promise.all([o, s]).then(e => {
        const r = e[0].data,
              s = t.format || "jpgpng";
        let n = s;

        if ("bsq" !== n && "bip" !== n && (n = (0,_support_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_31__.getFormat)(r)), !n) {
          throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("imagery-layer:fetch-image", "unsupported format signature " + String.fromCharCode.apply(null, new Uint8Array(r)));
        }

        const o = "gif" === s || "bmp" === s || s.indexOf("png") > -1 && ("png" === n || "jpg" === n),
              l = {
          signal: i
        };
        return o ? (0,_support_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_31__.decode)(r, {
          useCanvas: !0,
          ...t
        }, l).then(e => ({
          pixelData: {
            pixelBlock: e,
            extent: t.extent
          },
          params: t
        })) : this._decodePixelBlock(r, {
          width: t.width,
          height: t.height,
          planes: null,
          pixelType: null,
          noDataValue: null,
          format: s
        }, l).then(e => ({
          pixelData: {
            pixelBlock: e,
            extent: t.extent
          },
          params: t
        }));
      });
    }

    _generateRasterInfo(e, t) {
      var _this23 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const {
          data: r
        } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this23.parsedUrl.path, {
          query: _this23._getQueryParams({
            renderingRule: e
          }),
          ...t
        });
        return yield _this23._fetchAuxiliaryRasterInfo({
          serviceInfo: r,
          renderingRule: e,
          ...t
        });
      })();
    }

    _isValidCustomizedMosaicRule(e) {
      return e && JSON.stringify(e.toJSON()) !== JSON.stringify(this._defaultServiceMosaicRule && this._defaultServiceMosaicRule.toJSON());
    }

    _updateMultidimensionalDefinition(e) {
      if (this._isValidCustomizedMosaicRule(this.mosaicRule)) return;
      const t = e.variables[0].dimensions,
            r = "",
            i = [];

      for (const s in t) if (t.hasOwnProperty(s)) {
        const e = t[s],
              n = e.extent;
        let a = !0,
            o = [n[0]];
        e.hasRanges && !0 === e.hasRanges ? (a = !1, o = [e.values[0]]) : "stdz" === e.name.toLowerCase() && Math.abs(n[1]) <= Math.abs(n[0]) && (o = [n[1]]), i.push(new _support_DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_20__.default({
          variableName: r,
          dimensionName: t[s].name,
          isSlice: a,
          values: o
        }));
      }

      if (i.length > 0) {
        this.mosaicRule = this.mosaicRule || new _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_25__.default();
        const e = this.mosaicRule.multidimensionalDefinition;
        (!e || e && e.length <= 0) && (this.mosaicRule.multidimensionalDefinition = i);
      }
    }

    _formatAttributeValue(e, t) {
      if ("string" == typeof e) {
        const r = this.popupTemplate && this.popupTemplate.fieldInfos,
              i = this._getFieldInfo(r, t),
              s = i && i.format;

        if (s) {
          let t, r;
          return e.trim().indexOf(",") > -1 ? (t = ",", r = t + " ", this._formatDelimitedString(e, t, r, s)) : e.trim().indexOf(" ") > -1 ? (t = r = " ", this._formatDelimitedString(e, t, r, s)) : this._formatNumberFromString(e, s);
        }
      }

      return e;
    }

    _getFieldInfo(e, t) {
      if (!e || !e.length || !t) return;
      const r = t.toLowerCase();
      let i;
      return e.some(e => !(!e.fieldName || e.fieldName.toLowerCase() !== r && e.fieldName.toLowerCase() !== r.replace(/ /g, "_")) && (i = e, !0)), i;
    }

    _formatDelimitedString(e, t, r, i) {
      return e && t && r && i ? e.trim().split(t).map(e => this._formatNumberFromString(e, i)).join(r) : e;
    }

    _formatNumberFromString(e, t) {
      if (!e || !t) return e;
      const r = Number(e);
      return isNaN(r) ? e : t.format(r);
    }

    _processVisibleRastersResponse(e, r) {
      r = r || {};
      const i = e.value,
            {
        templateRRFunctionNames: s,
        showNoDataRecords: n,
        returnDomainValues: a,
        templateFields: o
      } = r,
            l = e.processedValues;
      let u = e.catalogItems && e.catalogItems.features,
          c = e.properties && e.properties.Values && e.properties.Values.map(e => e.replace(/ /gi, ", ")) || [];
      const m = this.objectIdField || "ObjectId",
            d = "string" == typeof i && i.toLowerCase().indexOf("nodata") > -1,
            h = [];

      if (i && !u && !d) {
        const e = {};
        e[m] = 0;
        c = [i], u = [new _Graphic_js__WEBPACK_IMPORTED_MODULE_3__.default(this.fullExtent, null, e)];
      }

      if (!u) return [];
      let f, y, g;
      this._updateResponseFieldNames(u, o), d && !n && (u = []);

      for (let t = 0; t < u.length; t++) {
        if (f = u[t], null != i) {
          if (y = c[t], g = this.renderingRule && l && l.length > 0 && s && s.length > 0 && s.indexOf(this.renderingRule.functionName) > -1 ? l[s.indexOf(this.renderingRule.functionName)] : i, "nodata" === y.toLowerCase() && !n) continue;
          const e = "Raster.ItemPixelValue",
                r = "Raster.ServicePixelValue";
          f.attributes[e] = this._formatAttributeValue(y, e), f.attributes[r] = this._formatAttributeValue(g, r), this._updateFeatureWithMagDirValues(f, y);
          const a = this.fields && this.fields.length > 0;
          let o = this.renderingRule && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(this.serviceRasterInfo) && this.serviceRasterInfo.attributeTable ? a ? y : i : g;
          this.renderingRule || (o = a ? y : i), this._updateFeatureWithRasterAttributeTableValues(f, o);
        }

        if (f.sourceLayer = this, a && this._updateFeatureWithDomainValues(f), s && l && s.length === l.length) for (let e = 0; e < s.length; e++) {
          const t = "Raster.ServicePixelValue." + s[e];
          f.attributes[t] = this._formatAttributeValue(l[e], t);
        }
        h.push(u[t]);
      }

      return h;
    }

    _updateFeatureWithRasterAttributeTableValues(e, t) {
      const r = this.rasterInfo && this.rasterInfo.attributeTable || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(this.serviceRasterInfo) && this.serviceRasterInfo.attributeTable,
            i = r && r.features;
      if (!i) return;
      const s = r.fields,
            n = s.map(e => e.name).filter(e => "value" === e.toLowerCase()),
            a = n && n[0];
      if (!a) return;
      const o = i.filter(e => e.attributes[a] === (null != t ? parseInt(t, 10) : null));
      o && o[0] && s.forEach(t => {
        const r = this.rasterAttributeTableFieldPrefix + t.name;
        e.attributes[r] = this._formatAttributeValue(o[0].attributes[t.name], r);
      });
    }

    _updateFeatureWithMagDirValues(e, t) {
      if ("esriImageServiceDataTypeVector-UV" !== this.serviceDataType && "esriImageServiceDataTypeVector-MagDir" !== this.serviceDataType) return;
      const r = t.split(/,\s*/).map(e => parseFloat(e)),
            i = r.map(e => [e]),
            s = r.map(e => ({
        minValue: e,
        maxValue: e,
        noDataValue: null
      })),
            n = new _support_PixelBlock_js__WEBPACK_IMPORTED_MODULE_26__.default({
        height: 1,
        width: 1,
        pixelType: "f32",
        pixels: i,
        statistics: s
      });
      null != this.pixelFilter && this.pixelFilter({
        pixelBlock: n,
        extent: new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_41__.default(0, 0, 0, 0, this.spatialReference)
      });
      const a = "esriImageServiceDataTypeVector-MagDir" === this.serviceDataType ? [n.pixels[0][0], n.pixels[1][0]] : (0,_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_32__.uvComponentToVector)([n.pixels[0][0], n.pixels[1][0]]);
      e.attributes["Raster.Magnitude"] = a[0], e.attributes["Raster.Direction"] = a[1];
    }

    _updateFeatureWithDomainValues(e) {
      const t = this.fields && this.fields.filter(e => e.domain && "coded-value" === e.domain.type);
      null != t && t.forEach(t => {
        const r = e.attributes[t.name];

        if (null != r) {
          const i = t.domain.codedValues.filter(e => e.code === r)[0];
          i && (e.attributes[t.name] = i.name);
        }
      });
    }

    _updateResponseFieldNames(e, t) {
      if (!t || t.length < 1) return;
      const r = this.fieldsIndex;
      (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(r) && e.forEach(e => {
        if (e && e.attributes) for (const i of t) if (r.has(i)) {
          const t = r.get(i).name;
          t !== i && (e.attributes[i] = e.attributes[t], delete e.attributes[t]);
        }
      });
    }

    _updateRenderingRulesFunctionName(e, t) {
      if (!e || e.length < 1) return;
      if ("Raw" === e) return e.replace("Raw", "None");
      const r = e.toLowerCase().replace(/ /gi, "_");
      return t.has(r) ? t.get(r) : e;
    }

    _isRFTJson(e) {
      return e.name && e.arguments && e.function && e.hasOwnProperty("functionType");
    }

    _readCapabilities(e) {
      const t = e.capabilities ? e.capabilities.toLowerCase().split(",").map(e => e.trim()) : ["image", "catalog"],
            {
        currentVersion: r,
        advancedQueryCapabilities: i,
        maxRecordCount: s
      } = e,
            n = t.indexOf("image") > -1,
            a = "esriImageServiceDataTypeElevation" === e.serviceDataType,
            o = !!(e.spatialReference || e.extent && e.extent.spatialReference),
            l = t.includes("edit");
      return {
        data: {
          supportsAttachment: !1
        },
        operations: {
          supportsComputeHistograms: n,
          supportsExportImage: n,
          supportsIdentify: n,
          supportsMeasure: t.indexOf("mensuration") > -1 && o,
          supportsDownload: t.indexOf("download") > -1,
          supportsQuery: t.indexOf("catalog") > -1 && e.fields && e.fields.length > 0,
          supportsGetSamples: r >= 10.2 && n,
          supportsProject: r >= 10.3 && n,
          supportsComputeStatisticsHistograms: r >= 10.4 && n,
          supportsQueryBoundary: r >= 10.6 && n,
          supportsCalculateVolume: r >= 10.7 && a,
          supportsComputePixelLocation: r >= 10.7 && t.indexOf("catalog") > -1,
          supportsComputeAngles: r >= 10.91,
          supportsAdd: l,
          supportsDelete: l,
          supportsEditing: l,
          supportsUpdate: l,
          supportsCalculate: !1,
          supportsTruncate: !1,
          supportsValidateSql: !1,
          supportsChangeTracking: !1,
          supportsQueryAttachments: !1,
          supportsResizeAttachments: !1,
          supportsSync: !1,
          supportsExceedsLimitStatistics: !1
        },
        query: {
          maxRecordCount: s,
          maxRecordCountFactor: void 0,
          supportsStatistics: !(null == i || !i.supportsStatistics),
          supportsOrderBy: !(null == i || !i.supportsOrderBy),
          supportsDistinct: !(null == i || !i.supportsDistinct),
          supportsPagination: !(null == i || !i.supportsPagination),
          supportsStandardizedQueriesOnly: !(null == i || !i.useStandardizedQueries),
          supportsPercentileStatistics: !(null == i || !i.supportsPercentileStatistics),
          supportsCentroid: !(null == i || !i.supportsReturningGeometryCentroid),
          supportsDistance: !(null == i || !i.supportsQueryWithDistance),
          supportsExtent: !(null == i || !i.supportsReturningQueryExtent),
          supportsGeometryProperties: !(null == i || !i.supportsReturningGeometryProperties),
          supportsHavingClause: !(null == i || !i.supportsHavingClause),
          supportsQuantization: !1,
          supportsQuantizationEditMode: !1,
          supportsQueryGeometry: !1,
          supportsResultType: !1,
          supportsMaxRecordCountFactor: !1,
          supportsSqlExpression: !1,
          supportsTopFeaturesQuery: !1,
          supportsQueryByOthers: !1,
          supportsHistoricMoment: !1,
          supportsFormatPBF: !1,
          supportsDisjointSpatialRelationship: !1,
          supportsCacheHint: !1,
          standardMaxRecordCount: void 0,
          tileMaxRecordCount: void 0
        }
      };
    }

  };
  return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], u.prototype, "_functionRasterInfos", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], u.prototype, "_rasterJobHandler", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], u.prototype, "_symbolizer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    dependsOn: ["_serviceSupportsMosaicRule"]
  })], u.prototype, "_defaultServiceMosaicRule", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("_defaultServiceMosaicRule", ["defaultMosaicMethod"])], u.prototype, "readDefaultServiceMosaicRule", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], u.prototype, "_cachedRendererJson", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0
  })], u.prototype, "_serviceSourceType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("_serviceSourceType", ["serviceSourceType", "fields"])], u.prototype, "readServiceSourceType", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0
  })], u.prototype, "_serviceSupportsMosaicRule", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("_serviceSupportsMosaicRule", ["currentVersion", "fields"])], u.prototype, "readServiceSupportsMosaicRule", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], u.prototype, "rasterAttributeTableFieldPrefix", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0
  })], u.prototype, "rasterFunctionNamesIndex", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], u.prototype, "adjustAspectRatio", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0
  }), (0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_13__.aliasOf)("serviceRasterInfo.bandCount")], u.prototype, "bandCount", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__.Integer],
    json: {
      write: !0
    }
  })], u.prototype, "bandIds", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("bandIds")], u.prototype, "readBandIds", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0,
    json: {
      read: !1
    }
  })], u.prototype, "capabilities", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("service", "capabilities", ["capabilities", "currentVersion", "serviceDataType"])], u.prototype, "readCapabilities", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    type: Number
  })], u.prototype, "compressionQuality", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_18__.writer)("compressionQuality")], u.prototype, "writeCompressionQuality", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    type: Number
  })], u.prototype, "compressionTolerance", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_18__.writer)("compressionTolerance")], u.prototype, "writeCompressionTolerance", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    json: {
      read: {
        source: "copyrightText"
      }
    }
  })], u.prototype, "copyright", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    type: String,
    json: {
      name: "layerDefinition.definitionExpression",
      write: {
        enabled: !0,
        allowNull: !0
      }
    }
  })], u.prototype, "definitionExpression", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0,
    constructOnly: !0
  })], u.prototype, "exportImageServiceParameters", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], u.prototype, "rasterInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0,
    type: [_support_Field_js__WEBPACK_IMPORTED_MODULE_22__.default]
  })], u.prototype, "fields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0
  })], u.prototype, "fieldsIndex", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    type: ["png", "png8", "png24", "png32", "jpg", "bmp", "gif", "jpgpng", "lerc", "tiff"],
    json: {
      write: !0
    }
  })], u.prototype, "format", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("service", "format", ["serviceDataType"])], u.prototype, "readFormat", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_41__.default
  })], u.prototype, "fullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0
  })], u.prototype, "hasMultidimensions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    json: {
      read: {
        source: "maxImageHeight"
      }
    }
  })], u.prototype, "imageMaxHeight", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    json: {
      read: {
        source: "maxImageWidth"
      }
    }
  })], u.prototype, "imageMaxWidth", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    type: String,
    json: {
      type: _support_rasterEnums_js__WEBPACK_IMPORTED_MODULE_27__.interpolationKebab.jsonValues,
      read: _support_rasterEnums_js__WEBPACK_IMPORTED_MODULE_27__.interpolationKebab.read,
      write: _support_rasterEnums_js__WEBPACK_IMPORTED_MODULE_27__.interpolationKebab.write
    }
  })], u.prototype, "interpolation", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], u.prototype, "minScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("service", "minScale")], u.prototype, "readMinScale", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], u.prototype, "maxScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("service", "maxScale")], u.prototype, "readMaxScale", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    type: _support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_25__.default
  })], u.prototype, "mosaicRule", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("mosaicRule", ["mosaicRule", "defaultMosaicMethod"])], u.prototype, "readMosaicRule", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_18__.writer)("mosaicRule")], u.prototype, "writeMosaicRule", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0
  }), (0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_13__.aliasOf)("serviceRasterInfo.multidimensionalInfo")], u.prototype, "multidimensionalInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    json: {
      type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__.Integer
    }
  })], u.prototype, "noData", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_18__.writer)("noData")], u.prototype, "writeNoData", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    type: String,
    json: {
      type: _support_rasterEnums_js__WEBPACK_IMPORTED_MODULE_27__.noDataInterpretationKebab.jsonValues,
      read: _support_rasterEnums_js__WEBPACK_IMPORTED_MODULE_27__.noDataInterpretationKebab.read,
      write: _support_rasterEnums_js__WEBPACK_IMPORTED_MODULE_27__.noDataInterpretationKebab.write
    }
  })], u.prototype, "noDataInterpretation", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    type: String,
    readOnly: !0,
    json: {
      read: {
        source: ["fields"]
      }
    }
  })], u.prototype, "objectIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("objectIdField")], u.prototype, "readObjectIdField", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({})], u.prototype, "geometryType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({})], u.prototype, "typeIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({})], u.prototype, "types", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0
  })], u.prototype, "parsedUrl", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0
  }), (0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_13__.aliasOf)("serviceRasterInfo.pixelSize.x")], u.prototype, "pixelSizeX", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0
  }), (0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_13__.aliasOf)("serviceRasterInfo.pixelSize.y")], u.prototype, "pixelSizeY", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    type: Function
  })], u.prototype, "pixelFilter", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], u.prototype, "raster", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], u.prototype, "viewId", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    types: _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_4__.rasterRendererTypes,
    json: {
      name: "layerDefinition.drawingInfo.renderer",
      origins: {
        "web-scene": {
          types: _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_4__.websceneRasterRendererTypes,
          name: "layerDefinition.drawingInfo.renderer",
          write: {
            overridePolicy: e => ({
              enabled: e && "vector-field" !== e.type && "animated-flow" !== e.type
            })
          }
        }
      }
    }
  })], u.prototype, "renderer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("renderer")], u.prototype, "readRenderer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_18__.writer)("renderer")], u.prototype, "writeRenderer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_19__.opacity)], u.prototype, "opacity", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0
  }), (0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_13__.aliasOf)("serviceRasterInfo.attributeTable")], u.prototype, "rasterAttributeTable", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0
  })], u.prototype, "rasterFields", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    constructOnly: !0
  })], u.prototype, "rasterFunctionInfos", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    type: _support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_28__.default
  })], u.prototype, "renderingRule", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("renderingRule", ["renderingRule", "rasterFunctionInfos"])], u.prototype, "readRenderingRule", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_18__.writer)("renderingRule")], u.prototype, "writeRenderingRule", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], u.prototype, "serviceDataType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0,
    type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_65__.default
  })], u.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("spatialReference", ["spatialReference", "extent"])], u.prototype, "readSpatialReference", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    json: {
      type: fe.jsonValues
    }
  })], u.prototype, "pixelType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("pixelType")], u.prototype, "readPixelType", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_18__.writer)("pixelType")], u.prototype, "writePixelType", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    constructOnly: !0,
    type: _support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_29__.default
  })], u.prototype, "serviceRasterInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], u.prototype, "sourceJSON", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_19__.url)], u.prototype, "url", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
    readOnly: !0
  })], u.prototype, "version", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_16__.reader)("version", ["currentVersion", "fields", "timeInfo"])], u.prototype, "readVersion", null), u = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_17__.subclass)("esri.layers.mixins.ArcGISImageService")], u), u;
};



/***/ }),

/***/ 36886:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ExportImageServiceParameters.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportImageServiceParameters": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/aliasOf.js */ 95774);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imageryRendererUtils.js */ 78680);
/* harmony import */ var _MosaicRule_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MosaicRule.js */ 35983);
/* harmony import */ var _rasterEnums_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rasterEnums.js */ 92015);
/* harmony import */ var _RasterFunction_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RasterFunction.js */ 42174);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.layer=null,this.adjustAspectRatio=void 0,this.bandIds=void 0,this.compression=void 0,this.compressionQuality=void 0,this.compressionTolerance=.01,this.format=null,this.interpolation=null,this.noData=null,this.noDataInterpretation=void 0,this.pixelType=void 0,this.lercVersion=2}writeAdjustAspectRatio(e,r,t){this.layer.version<10.3||(r[t]=e)}writeCompressionQuality(e,r,t){this.format&&this.format.toLowerCase().indexOf("jpg")>-1&&null!=e&&(r[t]=e)}writeCompressionTolerance(e,r,t){"lerc"===this.format&&null!=e&&(r[t]=e)}writeLercVersion(e,r,t){"lerc"===this.format&&this.layer.version>=10.5&&(r[t]=e)}get version(){const e=this.layer;return e.commitProperty("bandIds"),e.commitProperty("format"),e.commitProperty("compressionQuality"),e.commitProperty("compressionTolerance"),e.commitProperty("interpolation"),e.commitProperty("noData"),e.commitProperty("noDataInterpretation"),e.commitProperty("mosaicRule"),e.commitProperty("renderingRule"),e.commitProperty("adjustAspectRatio"),e.commitProperty("pixelFilter"),e.commitProperty("renderer"),e.commitProperty("definitionExpression"),(this._get("version")||0)+1}set version(e){this._set("version",e)}get mosaicRule(){const e=this.layer;let r=e.mosaicRule;const t=e.definitionExpression;return r?t&&t!==r.where&&(r=r.clone(),r.where=t):t&&(r=new _MosaicRule_js__WEBPACK_IMPORTED_MODULE_10__.default({where:t})),r}get renderingRule(){const e=this.layer;let r=e.renderingRule;const t=e.pixelFilter,o=!e.format||e.format.indexOf("jpg")>-1||e.format.indexOf("png")>-1;return r=this._addResampleRasterFunction(r),o&&!t&&(r=this.combineRendererWithRenderingRule()),r}combineRendererWithRenderingRule(){var e;const r=this.layer,{rasterInfo:t,renderingRule:o,renderer:i}=r;if(!i||!(0,_imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_9__.isSupportedRendererType)(i))return o;return (0,_imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_9__.combineRenderingRules)((0,_imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_9__.convertRendererToRenderingRule)(i,{rasterAttributeTable:t.attributeTable,pixelType:t.pixelType,dataType:t.dataType,bandProperties:null==(e=t.keyProperties)?void 0:e.BandProperties,convertColorRampToColormap:r.version<10.6}),o)}_addResampleRasterFunction(e){var r;if(!("vector-field"===(null==(r=this.layer.renderer)?void 0:r.type))||"Resample"===(null==e?void 0:e.functionName))return e;const t="esriImageServiceDataTypeVector-UV"===this.layer.serviceDataType?7:10,o=new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_12__.default({functionName:"Resample",functionArguments:{ResamplingType:t,InputCellSize:{x:this.layer.pixelSizeX,y:this.layer.pixelSizeY}}});return (0,_imageryRendererUtils_js__WEBPACK_IMPORTED_MODULE_9__.combineRenderingRules)(o,e)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],d.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}})],d.prototype,"adjustAspectRatio",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("adjustAspectRatio")],d.prototype,"writeAdjustAspectRatio",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}}),(0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_2__.aliasOf)("layer.bandIds")],d.prototype,"bandIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}})],d.prototype,"compression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}}),(0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_2__.aliasOf)("layer.compressionQuality")],d.prototype,"compressionQuality",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("compressionQuality")],d.prototype,"writeCompressionQuality",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}}),(0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_2__.aliasOf)("layer.compressionTolerance")],d.prototype,"compressionTolerance",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("compressionTolerance")],d.prototype,"writeCompressionTolerance",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}}),(0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_2__.aliasOf)("layer.format")],d.prototype,"format",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,json:{read:{reader:_rasterEnums_js__WEBPACK_IMPORTED_MODULE_11__.interpolationKebab.read},write:{writer:_rasterEnums_js__WEBPACK_IMPORTED_MODULE_11__.interpolationKebab.write}}}),(0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_2__.aliasOf)("layer.interpolation")],d.prototype,"interpolation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}}),(0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_2__.aliasOf)("layer.noData")],d.prototype,"noData",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,json:{read:{reader:_rasterEnums_js__WEBPACK_IMPORTED_MODULE_11__.noDataInterpretationKebab.read},write:{writer:_rasterEnums_js__WEBPACK_IMPORTED_MODULE_11__.noDataInterpretationKebab.write}}}),(0,_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_2__.aliasOf)("layer.noDataInterpretation")],d.prototype,"noDataInterpretation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}})],d.prototype,"pixelType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}})],d.prototype,"lercVersion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("lercVersion")],d.prototype,"writeLercVersion",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Number})],d.prototype,"version",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}})],d.prototype,"mosaicRule",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}})],d.prototype,"renderingRule",null),d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.mixins.ExportImageServiceParameters")],d);


/***/ }),

/***/ 35983:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/MosaicRule.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ 43465);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/* harmony import */ var _DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DimensionalDefinition.js */ 81751);
/* harmony import */ var _RasterFunction_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RasterFunction.js */ 42174);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u;const m=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.strict)()({MT_FIRST:"first",MT_LAST:"last",MT_MIN:"min",MT_MAX:"max",MT_MEAN:"mean",MT_BLEND:"blend",MT_SUM:"sum"}),h=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.strict)()({esriMosaicNone:"none",esriMosaicCenter:"center",esriMosaicNadir:"nadir",esriMosaicViewpoint:"viewpoint",esriMosaicAttribute:"attribute",esriMosaicLockRaster:"lock-raster",esriMosaicNorthwest:"northwest",esriMosaicSeamline:"seamline"});function M(e){let t;switch(e?e.toLowerCase().replace("esrimosaic",""):""){case"byattribute":case"attribute":t="esriMosaicAttribute";break;case"lockraster":t="esriMosaicLockRaster";break;case"center":t="esriMosaicCenter";break;case"northwest":t="esriMosaicNorthwest";break;case"nadir":t="esriMosaicNadir";break;case"viewpoint":t="esriMosaicViewpoint";break;case"seamline":t="esriMosaicSeamline";break;default:t="esriMosaicNone"}return h.fromJSON(t)}let w=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(e){super(e),this.ascending=!0,this.itemRenderingRule=null,this.lockRasterIds=null,this.method=null,this.multidimensionalDefinition=null,this.objectIds=null,this.operation=null,this.sortField=null,this.sortValue=null,this.viewpoint=null,this.where=null}readAscending(e,t){return null!=t.ascending?t.ascending:null==t.sortAscending||t.sortAscending}readMethod(e,t){return M(t.mosaicMethod||t.defaultMosaicMethod)}readOperation(e,t){const o=t.mosaicOperation,r=t.mosaicOperator&&t.mosaicOperator.toLowerCase(),i=o||(r?m.toJSON(r):null);return m.fromJSON(i)||"first"}castSortValue(e){return null==e||"string"==typeof e||"number"==typeof e?e:`${e}`}clone(){return new u({ascending:this.ascending,itemRenderingRule:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.itemRenderingRule),lockRasterIds:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.lockRasterIds),method:this.method,multidimensionalDefinition:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.multidimensionalDefinition),objectIds:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.objectIds),operation:this.operation,sortField:this.sortField,sortValue:this.sortValue,viewpoint:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.viewpoint),where:this.where})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:!0}})],w.prototype,"ascending",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("ascending",["ascending","sortAscending"])],w.prototype,"readAscending",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_RasterFunction_js__WEBPACK_IMPORTED_MODULE_11__.default,json:{write:!0}})],w.prototype,"itemRenderingRule",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__.Integer],json:{write:{overridePolicy(){return{enabled:"lock-raster"===this.method}}}}})],w.prototype,"lockRasterIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{type:h.jsonValues,write:{target:"mosaicMethod",writer:h.write}}})],w.prototype,"method",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("method",["mosaicMethod","defaultMosaicMethod"])],w.prototype,"readMethod",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[_DimensionalDefinition_js__WEBPACK_IMPORTED_MODULE_10__.default],json:{write:!0}})],w.prototype,"multidimensionalDefinition",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__.Integer],json:{name:"fids",write:!0}})],w.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{type:m.jsonValues,read:{reader:m.read},write:{target:"mosaicOperation",writer:m.write}}})],w.prototype,"operation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("operation",["mosaicOperation","mosaicOperator"])],w.prototype,"readOperation",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:{overridePolicy(){return{enabled:"attribute"===this.method}}}}})],w.prototype,"sortField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[String,Number],json:{write:{allowNull:!0,overridePolicy(){return{enabled:"attribute"===this.method,allowNull:!0}}}}})],w.prototype,"sortValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("sortValue")],w.prototype,"castSortValue",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__.default,json:{write:!0}})],w.prototype,"viewpoint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],w.prototype,"where",void 0),w=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.MosaicRule")],w);const y=w;


/***/ }),

/***/ 42174:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/RasterFunction.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ 88445);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a;const c=new Set(["raster","raster2","dem","fillraster"]),p=new Set(["rasters"]),m=t=>t&&t.rasterFunction?g.fromJSON(t):t,f=t=>t&&t instanceof g?t.toJSON():t,l=t=>(null==t?void 0:t.functionName)&&!t.declaredClass,y=t=>l(t)?new g(t):t;var d;!function(t){t[t.MOSAIC=0]="MOSAIC",t[t.GROUP=1]="GROUP",t[t.ITEM=2]="ITEM"}(d||(d={}));const w=t=>{if(null==t)return null;t=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(t);const e={};for(const n of Object.keys(t))c.has(n.toLowerCase())?e[n]=m(t[n]):p.has(n.toLowerCase())&&Array.isArray(t[n])?e[n]=t[n].map(m):e[n]=t[n];return e};let g=a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(t){super(t),this.functionName=null,this.outputPixelType="unknown",this.variableName=null,this.description=null,this.functionDefinition=null,this.thumbnail=null}set functionArguments(t){if(t){const e=Object.keys(t);if(e.some((e=>c.has(e.toLowerCase())&&l(t[e])))||e.some((e=>p.has(e.toLowerCase())&&Array.isArray(t[e])&&t[e].some((t=>l(t)))))){t=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(t);for(const n of e)c.has(n.toLowerCase())?t[n]=y(t[n]):p.has(n.toLowerCase())&&Array.isArray(t[n])&&(t[n]=t[n].map((t=>y(t))))}}this._set("functionArguments",t)}readFunctionArguments(t,e){return t=e.arguments||e.rasterFunctionArguments,w(t)}writeFunctionArguments(t,e,n){const o={};for(const r of Object.keys(t))c.has(r.toLowerCase())?o[r]=f(t[r]):p.has(r.toLowerCase())&&Array.isArray(t[r])?o[r]=t[r].map(f):o[r]=f(t[r]);this.functionDefinition?e.arguments=o:e[n]=o}readFunctionName(t,e){const n=e.rasterFunctionInfos,o=e.name;return o||(n&&n.length&&"None"!==n[0].name?n[0].name:e.rasterFunction)}writeFunctionName(t,e,n){this.functionDefinition?e.name=t:e[n]=t}readFunctionType(t){return d[t]}writeFunctionType(t,e,n){e[n]=d[t]}clone(){return new a({functionName:this.functionName,functionArguments:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.functionArguments),outputPixelType:this.outputPixelType,variableName:this.variableName,description:this.description,functionType:this.functionType,functionDefinition:this.functionDefinition,thumbnail:this.thumbnail})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{type:Object,write:{target:"rasterFunctionArguments"}}})],g.prototype,"functionArguments",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("functionArguments",["rasterFunctionArguments","arguments"])],g.prototype,"readFunctionArguments",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("functionArguments")],g.prototype,"writeFunctionArguments",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{type:String,write:{target:"rasterFunction"}}})],g.prototype,"functionName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("functionName",["rasterFunction","rasterFunctionInfos","name"])],g.prototype,"readFunctionName",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("functionName")],g.prototype,"writeFunctionName",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__.enumeration)({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"},{ignoreUnknown:!1}),(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{default:"unknown"}})],g.prototype,"outputPixelType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{read:!0,write:!0}})],g.prototype,"variableName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,write:!1}}}})],g.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{origins:{"web-document":{read:!1,write:!1}}}})],g.prototype,"functionType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("functionType")],g.prototype,"readFunctionType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("functionType")],g.prototype,"writeFunctionType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Object,json:{read:{source:"function"},write:{target:"function"},origins:{"web-document":{read:!1,write:!1}}}})],g.prototype,"functionDefinition",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{read:!0,write:!0,origins:{"web-document":{read:!1,write:!1}}}})],g.prototype,"thumbnail",void 0),g=a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.RasterFunction")],g);const h=g;


/***/ }),

/***/ 78680:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/imageryRendererUtils.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combineRenderingRules": () => (/* binding */ m),
/* harmony export */   "convertRendererToRenderingRule": () => (/* binding */ c),
/* harmony export */   "isSupportedRendererType": () => (/* binding */ l),
/* harmony export */   "pixelTypeRanges": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _RasterFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RasterFunction.js */ 42174);
/* harmony import */ var _renderers_support_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renderers/support/colorRampUtils.js */ 29122);
/* harmony import */ var _renderers_support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderers/support/stretchRendererUtils.js */ 5929);
/* harmony import */ var _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/visualVariables/SizeVariable.js */ 74834);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i={u1:[0,1],u2:[0,3],u4:[0,15],u8:[0,255],s8:[-128,127],u16:[0,65535],s16:[-32768,32767]},u={simple_scalar:"Simple Scalar",wind_barb:"Wind Barb",single_arrow:"Single Arrow",beaufort_kn:"Beaufort Wind (Knots)",beaufort_m:"Beaufort Wind (MetersPerSecond)",ocean_current_m:"Ocean Current (MetersPerSecond)",ocean_current_kn:"Ocean Current (Knots)"},s=new Set(["raster-stretch","unique-value","class-breaks","raster-shaded-relief","vector-field","raster-colormap"]);function l(e){return s.has(e.type)}function m(t,n){if(!t||!n)return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_0__.clone)(t||n);const r=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_0__.clone)(t);if("none"!==n.functionName.toLowerCase()){p(r.functionArguments).Raster=n}return r}function c(e,t){switch(t=t||{},e.type){case"raster-stretch":return h(e,t);case"class-breaks":return b(e,t);case"unique-value":return v(e,t);case"raster-colormap":return R(e,t);case"vector-field":return d(e,t);case"raster-shaded-relief":return g(e,t);case"animated-flow":throw new Error("Unsupported rendering rule.")}}function p(e){const t=e.Raster;return t&&"esri.layers.support.RasterFunction"===t.declaredClass?p(t.functionArguments):e}const f={none:0,standardDeviation:3,histogramEqualization:4,minMax:5,percentClip:6,sigmoid:9};function d(e,n){const r=new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_1__.default;r.functionName="VectorFieldRenderer";const{dataType:a,bandProperties:i}=n,s="vector-uv"===a;let l,m;i&&2===i.length&&(l=i.map((e=>e.BandName.toLowerCase())).indexOf("magnitude"),m=i.map((e=>e.BandName.toLowerCase())).indexOf("direction")),-1!==l&&null!==l||(l=0,m=1);const c="arithmetic"===e.rotationType?1:2,p="flow-from"===e.flowRepresentation?0:1,f=e.visualVariables?e.visualVariables.filter((e=>"Magnitude"===e.field))[0]:new _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_4__.default,d={magnitudeBandID:l,directionBandID:m,isUVComponents:s,referenceSystem:c,massFlowAngleRepresentation:p,symbolTileSize:50,symbolTileSizeUnits:100,calculationMethod:"Vector Average",symbologyName:u[e.style.toLowerCase().replace("-","_")],minimumMagnitude:f.minDataValue,maximumMagnitude:f.maxDataValue,minimumSymbolSize:f.minSize,maximumSymbolSize:f.maxSize};return r.functionArguments=d,r}function g(e,r){if("elevation"!==r.dataType)return new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_1__.default;const a=new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_1__.default;a.functionName="Hillshade";const o="traditional"===e.hillshadeType?0:1,i="none"===e.scalingType?1:3,u={HillshadeType:o,SlopeType:i,ZFactor:e.zFactor};return 0===o&&(u.Azimuth=e.azimuth,u.Altitude=e.altitude),3===i&&(u.PSPower=e.pixelSizePower,u.PSZFactor=e.pixelSizeFactor),a.functionArguments=u,a.variableName="Raster",e.colorRamp&&(a.functionName="ShadedRelief",u.Colormap=(0,_renderers_support_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_2__.convertColorRampToColormap)(e.colorRamp,256)),a}function h(e,o){const i=new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_1__.default;i.functionName="Stretch";const u=f[_renderers_support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_3__.stretchTypeJSONDict.toJSON(e.stretchType)],s="u8",l={StretchType:u,Statistics:w(e.statistics),DRA:e.dynamicRangeAdjustment,UseGamma:e.useGamma,Gamma:e.gamma,ComputeGamma:e.computeGamma};if(null!=e.outputMin&&(l.Min=e.outputMin),null!=e.outputMax&&(l.Max=e.outputMax),u===f.standardDeviation?(l.NumberOfStandardDeviations=e.numberOfStandardDeviations,i.outputPixelType=s):u===f.percentClip?(l.MinPercent=e.minPercent,l.MaxPercent=e.maxPercent,i.outputPixelType=s):u===f.minMax?i.outputPixelType=s:u===f.sigmoid&&(l.SigmoidStrengthLevel=e.sigmoidStrengthLevel),i.functionArguments=l,i.variableName="Raster",e.colorRamp){const a=e.colorRamp,u=new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_1__.default,s=(0,_renderers_support_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_2__.getColorRampName)(a);return s?u.functionArguments={colorRamp:s}:!o.convertColorRampToColormap||"algorithmic"!==a.type&&"multipart"!==a.type?u.functionArguments={colorRamp:e.colorRamp.toJSON()}:u.functionArguments={Colormap:(0,_renderers_support_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_2__.convertColorRampToColormap)(a,256)},u.variableName="Raster",u.functionName="Colormap",u.functionArguments.Raster=i,u}return i}function b(e,n){const r=[],a=[],o=[],i=[],u=1e-6,{pixelType:s,rasterAttributeTable:l}=n,m=l&&l.features,c=S(l);if(m&&Array.isArray(m)&&e.classBreakInfos){e.classBreakInfos.forEach(((t,n)=>{const r=t.symbol.color;let a;r.a&&m.forEach((o=>{a=o.attributes[e.field],(a>=t.minValue&&a<t.maxValue||n===e.classBreakInfos.length-1&&a>=t.minValue)&&i.push([o.attributes[c],r.r,r.g,r.b])}))}));const n=s?y(i,s):i,r=new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_1__.default;return r.functionName="Colormap",r.functionArguments={},r.functionArguments.Colormap=n,r.variableName="Raster",r}e.classBreakInfos.forEach(((e,t)=>{const n=e.symbol&&e.symbol.color;n.a?(0===t?r.push(e.minValue,e.maxValue+u):r.push(e.minValue+u,e.maxValue+u),a.push(t),i.push([t,n.r,n.g,n.b])):o.push(e.minValue,e.maxValue)}));const p=s?y(i,s):i,f=new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_1__.default;f.functionName="Remap",f.functionArguments={InputRanges:r,OutputValues:a,NoDataRanges:o},f.variableName="Raster";const d=new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_1__.default;return d.functionName="Colormap",d.functionArguments={Colormap:p,Raster:f},d}function y(e,t){const n=i[String(t).toLowerCase()];return n&&e.push([Math.floor(n[0]-1),0,0,0],[Math.ceil(n[1]+1),0,0,0]),e}function S(e){if(!e)return;const{fields:t}=e,n=t&&t.find((e=>e&&e.name&&"value"===e.name.toLowerCase()));return n&&n.name}function v(e,n){var r;const a=[],{pixelType:o,rasterAttributeTable:i}=n,u=i&&i.features,s=S(i),l=null==(r=e.defaultSymbol)?void 0:r.color;let m=!1;if(e.uniqueValueInfos&&(u?u.forEach((t=>{var n;const r=null==(n=e.uniqueValueInfos.find((n=>String(t.attributes[e.field])===String(n.value))))?void 0:n.symbol.color;r?a.push([t.attributes[s],r.r,r.g,r.b]):l&&a.push([t.attributes[s],l.r,l.g,l.b])})):e.uniqueValueInfos.forEach((e=>{var t;if(null==(t=e.symbol.color)||!t.a)return;const n=e.symbol.color;isNaN(+e.value)?m=!0:a.push([+e.value,n.r,n.g,n.b])}))),m)return null;const c=o&&a.length>0?y(a,o):a,p=new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_1__.default;return p.functionName="Colormap",p.functionArguments={},p.functionArguments.Colormap=c,p.variableName="Raster",p}function R(e,n){const r=e.extractColormap();if(!r||0===r.length)return;const{pixelType:a}=n,o=a?y(r,a):r,i=new _RasterFunction_js__WEBPACK_IMPORTED_MODULE_1__.default;return i.functionName="Colormap",i.functionArguments={},i.functionArguments.Colormap=o,i}function w(e){const t=[];return e.forEach((e=>{const n=e;if(Array.isArray(n))t.push(n);else{if(null==n.min||null==n.max)return;const e=[n.min,n.max,n.avg||0,n.stddev||0];t.push(e)}})),t}


/***/ }),

/***/ 20171:
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/imageService.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computeAngles": () => (/* binding */ f),
/* harmony export */   "computeHistograms": () => (/* binding */ y),
/* harmony export */   "computePixelSpaceLocations": () => (/* binding */ g),
/* harmony export */   "computeStatisticsHistograms": () => (/* binding */ d),
/* harmony export */   "getImageSpatialReferenceJSON": () => (/* binding */ h),
/* harmony export */   "getImageSpatialReferenceQueryParameter": () => (/* binding */ R),
/* harmony export */   "getSamples": () => (/* binding */ N),
/* harmony export */   "identify": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry.js */ 61243);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geometry/support/normalizeUtils.js */ 46010);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ 16727);
/* harmony import */ var _support_ImageAngleResult_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support/ImageAngleResult.js */ 54389);
/* harmony import */ var _support_ImageIdentifyResult_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./support/ImageIdentifyResult.js */ 17448);
/* harmony import */ var _support_ImageSampleResult_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./support/ImageSampleResult.js */ 24673);
/* harmony import */ var _support_ImagePixelLocationResult_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./support/ImagePixelLocationResult.js */ 445);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/











function c(e) {
  const t = null == e ? void 0 : e.time;

  if (t && (null != t.start || null != t.end)) {
    const n = [];
    null != t.start && n.push(t.start), null != t.end && -1 === n.indexOf(t.end) && n.push(t.end), e.time = n.join(",");
  }
}

function p(_x, _x2, _x3) {
  return _p.apply(this, arguments);
}

function _p() {
  _p = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r, i) {
    const l = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseUrl)(e),
          m = r.geometry ? [r.geometry] : [],
          u = yield (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_4__.normalizeCentralMeridian)(m),
          p = r.toJSON();
    c(p);
    const f = u && u[0];
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(f) && (p.geometry = f.toJSON());
    const g = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.encode)({ ...l.query,
      f: "json",
      ...p
    });
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.asValidOptions)(g, i);
  });
  return _p.apply(this, arguments);
}

function f(_x4, _x5, _x6) {
  return _f.apply(this, arguments);
}

function _f() {
  _f = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, i, l) {
    var m;
    const c = i.toJSON();
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(c.angleName) && (c.angleName = c.angleName.join(",")), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(i.point) && null != (m = i.point.spatialReference) && m.imageCoordinateSystem && (c.point.spatialReference = h(i.point.spatialReference)), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(i.spatialReference) && i.spatialReference.imageCoordinateSystem && (c.spatialReference = R(i.spatialReference));
    const p = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseUrl)(n),
          f = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.encode)({ ...p.query,
      f: "json",
      ...c
    }),
          g = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.asValidOptions)(f, l),
          {
      data: d
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(`${p.path}/computeAngles`, g);
    return d.spatialReference = d.spatialReference ? null != d.spatialReference.geodataXform ? new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__.default({
      wkid: 0,
      imageCoordinateSystem: d.spatialReference
    }) : _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__.default.fromJSON(d.spatialReference) : null, "NaN" === d.north && (d.north = null), "NaN" === d.up && (d.up = null), new _support_ImageAngleResult_js__WEBPACK_IMPORTED_MODULE_6__.default(d);
  });
  return _f.apply(this, arguments);
}

function g(_x7, _x8, _x9) {
  return _g.apply(this, arguments);
}

function _g() {
  _g = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, n, r) {
    const i = n.toJSON(),
          {
      geometries: l
    } = n;

    for (let e = 0; e < l.length; e++) {
      var u;
      null != (u = l[e].spatialReference) && u.imageCoordinateSystem && (i.geometries.geometries[e].spatialReference = h(l[e].spatialReference));
    }

    const c = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseUrl)(t),
          p = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.encode)({ ...c.query,
      f: "json",
      ...i
    }),
          f = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.asValidOptions)(p, r),
          {
      data: g
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(`${c.path}/computePixelLocation`, f);
    return _support_ImagePixelLocationResult_js__WEBPACK_IMPORTED_MODULE_9__.default.fromJSON(g);
  });
  return _g.apply(this, arguments);
}

function d(_x10, _x11, _x12) {
  return _d.apply(this, arguments);
}

function _d() {
  _d = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, n, a) {
    const s = yield p(t, n, a),
          r = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseUrl)(t),
          {
      data: i
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(`${r.path}/computeStatisticsHistograms`, s),
          {
      statistics: l
    } = i;
    return null != l && l.length && l.forEach(e => {
      e.avg = e.mean, e.stddev = e.standardDeviation;
    }), {
      statistics: l,
      histograms: i.histograms
    };
  });
  return _d.apply(this, arguments);
}

function y(_x13, _x14, _x15) {
  return _y.apply(this, arguments);
}

function _y() {
  _y = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, n, a) {
    const s = yield p(t, n, a),
          r = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseUrl)(t),
          {
      data: i
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(`${r.path}/computeHistograms`, s);
    return {
      histograms: i.histograms
    };
  });
  return _y.apply(this, arguments);
}

function N(_x16, _x17, _x18) {
  return _N.apply(this, arguments);
}

function _N() {
  _N = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, i, m) {
    var u, p;
    const f = i.toJSON();
    c(f), null != (u = f.outFields) && u.length && (f.outFields = f.outFields.join(","));
    const g = yield (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_4__.normalizeCentralMeridian)(i.geometry),
          d = null == g ? void 0 : g[0];
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(d) && (f.geometry = d.toJSON());
    const y = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseUrl)(r),
          N = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.encode)({ ...y.query,
      f: "json",
      ...f
    }),
          S = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.asValidOptions)(N, m),
          {
      data: h
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(`${y.path}/getSamples`, S),
          R = null == h || null == (p = h.samples) ? void 0 : p.map(e => {
      const t = "NaN" === e.value || "" === e.value ? null : e.value.split(" ").map(e => Number(e));
      return { ...e,
        pixelValue: t
      };
    });
    return _support_ImageSampleResult_js__WEBPACK_IMPORTED_MODULE_8__.default.fromJSON({
      samples: R
    });
  });
  return _N.apply(this, arguments);
}

function S(_x19, _x20, _x21) {
  return _S.apply(this, arguments);
}

function _S() {
  _S = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, l, m) {
    const u = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseUrl)(r),
          c = l.geometry ? [l.geometry] : [];
    return (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_4__.normalizeCentralMeridian)(c).then(n => {
      const o = l.toJSON(),
            r = n && n[0];
      (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(r) && (o.geometry = JSON.stringify(r.toJSON()));
      const i = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.encode)({ ...u.query,
        f: "json",
        ...o
      }),
            c = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.asValidOptions)(i, m);
      return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(u.path + "/identify", c);
    }).then(e => _support_ImageIdentifyResult_js__WEBPACK_IMPORTED_MODULE_7__.default.fromJSON(e.data));
  });
  return _S.apply(this, arguments);
}

function h(e) {
  const {
    imageCoordinateSystem: t
  } = e;

  if (t) {
    const {
      id: e,
      referenceServiceName: n
    } = t;
    return null != e ? n ? {
      icsid: e,
      icsns: n
    } : {
      icsid: e
    } : {
      ics: t
    };
  }

  return e.toJSON();
}

function R(e, t) {
  const n = h(e),
        {
    icsid: o,
    icsns: a,
    wkid: s
  } = n;
  return null != o ? null == a || null != t && t.toLowerCase().includes("/" + a.toLowerCase() + "/") ? `0:${o}` : JSON.stringify(n) : s ? s.toString() : JSON.stringify(n);
}



/***/ }),

/***/ 11127:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ImageAngleParameters.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n;let m=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(){super(...arguments),this.angleNames=null,this.point=null,this.spatialReference=null,this.rasterId=null}clone(){return new n((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)({angleNames:this.angleNames,point:this.point,spatialReference:this.spatialReference,rasterId:this.rasterId}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[String],json:{name:"angleName",write:!0}})],m.prototype,"angleNames",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default,json:{write:!0}})],m.prototype,"point",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__.default,json:{write:!0}})],m.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer,json:{write:!0}})],m.prototype,"rasterId",void 0),m=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.ImageAngleParameters")],m);const l=m;


/***/ }),

/***/ 54389:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ImageAngleResult.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(){super(...arguments),this.north=null,this.up=null,this.spatialReference=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],p.prototype,"north",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],p.prototype,"up",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__.default,json:{write:!0}})],p.prototype,"spatialReference",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.ImageAngleResult")],p);const i=p;


/***/ }),

/***/ 82448:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ImageHistogramParameters.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TimeExtent.js */ 85362);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _layers_support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layers/support/MosaicRule.js */ 35983);
/* harmony import */ var _layers_support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layers/support/RasterFunction.js */ 42174);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var y;let j=y=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport{constructor(){super(...arguments),this.geometry=null,this.mosaicRule=null,this.renderingRule=null,this.pixelSize=null,this.raster=void 0,this.timeExtent=null}writeGeometry(e,r,t){null!=e&&(r.geometryType=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.getJsonType)(e),r[t]=e.toJSON())}clone(){return new y((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)({geometry:this.geometry,mosaicRule:this.mosaicRule,renderingRule:this.renderingRule,pixelSize:this.pixelSize,raster:this.raster,timeExtent:this.timeExtent}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({types:_geometry_js__WEBPACK_IMPORTED_MODULE_1__.geometryTypes,json:{read:_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.fromJSON}})],j.prototype,"geometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("geometry")],j.prototype,"writeGeometry",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_layers_support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_10__.default,json:{write:!0}})],j.prototype,"mosaicRule",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_layers_support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_11__.default,json:{write:!0}})],j.prototype,"renderingRule",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__.default,json:{write:!0}})],j.prototype,"pixelSize",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({json:{write:!0}})],j.prototype,"raster",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_TimeExtent_js__WEBPACK_IMPORTED_MODULE_2__.default,json:{read:{source:"time"},write:{target:"time"}}})],j.prototype,"timeExtent",void 0),j=y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.ImageHistogramParameters")],j);const d=j;


/***/ }),

/***/ 31524:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ImageIdentifyParameters.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../TimeExtent.js */ 85362);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _layers_support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layers/support/MosaicRule.js */ 35983);
/* harmony import */ var _layers_support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layers/support/RasterFunction.js */ 42174);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var y;let c=y=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(){super(...arguments),this.geometry=null,this.renderingRules=null,this.pixelSize=null,this.returnGeometry=!0,this.returnCatalogItems=!0,this.returnPixelValues=!0,this.maxItemCount=null,this.timeExtent=null,this.raster=void 0,this.viewId=void 0}writeGeometry(e,t,r){null!=e&&(t.geometryType=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__.getJsonType)(e),t[r]=JSON.stringify(e.toJSON()))}set mosaicRule(e){let t=e;t&&t.mosaicMethod&&(t=_layers_support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_11__.default.fromJSON({...t.toJSON(),mosaicMethod:t.mosaicMethod,mosaicOperation:t.mosaicOperation})),this._set("mosaicRule",t)}writeMosaicRule(e,t,r){null!=e&&(t[r]=JSON.stringify(e.toJSON()))}set renderingRule(e){let t=e;t&&t.rasterFunction&&(t=_layers_support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_12__.default.fromJSON({...t.toJSON(),rasterFunction:t.rasterFunction,rasterFunctionArguments:t.rasterFunctionArguments})),this._set("renderingRule",t)}writeRenderingRule(e,t,r){null!=e&&(t[r]=JSON.stringify(e.toJSON()))}writeRenderingRules(e,t,r){null!=e&&(t[r]=JSON.stringify(e.map((e=>e.toJSON()))))}writePixelSize(e,t,r){null!=e&&(t[r]=JSON.stringify(e))}writeTimeExtent(e,t,r){if(null!=e){const o=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(e.start)?e.start.getTime():null,s=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(e.end)?e.end.getTime():null;t[r]=null!=o?null!=s?`${o},${s}`:`${o}`:null}}clone(){return new y((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)({geometry:this.geometry,mosaicRule:this.mosaicRule,renderingRule:this.renderingRule,pixelSize:this.pixelSize,returnGeometry:this.returnGeometry,returnCatalogItems:this.returnCatalogItems,returnPixelValues:this.returnPixelValues,maxItemCount:this.maxItemCount,raster:this.raster,viewId:this.viewId,timeExtent:this.timeExtent}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({json:{write:!0}})],c.prototype,"geometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("geometry")],c.prototype,"writeGeometry",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_layers_support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_11__.default,json:{write:!0}})],c.prototype,"mosaicRule",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("mosaicRule")],c.prototype,"writeMosaicRule",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_layers_support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_12__.default,json:{write:!0}})],c.prototype,"renderingRule",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("renderingRule")],c.prototype,"writeRenderingRule",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_layers_support_RasterFunction_js__WEBPACK_IMPORTED_MODULE_12__.default],json:{write:!0}})],c.prototype,"renderingRules",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("renderingRules")],c.prototype,"writeRenderingRules",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__.default,json:{write:!0}})],c.prototype,"pixelSize",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("pixelSize")],c.prototype,"writePixelSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Boolean,json:{write:!0}})],c.prototype,"returnGeometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Boolean,json:{write:!0}})],c.prototype,"returnCatalogItems",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Boolean,json:{write:!0}})],c.prototype,"returnPixelValues",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,json:{write:!0}})],c.prototype,"maxItemCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__.default,json:{write:{target:"time"}}})],c.prototype,"timeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("timeExtent")],c.prototype,"writeTimeExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({json:{write:!0}})],c.prototype,"raster",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({json:{write:!0}})],c.prototype,"viewId",void 0),c=y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.ImageIdentifyParameters")],c);const d=c;


/***/ }),

/***/ 17448:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ImageIdentifyResult.js ***!
  \***********************************************************************/
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
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/* harmony import */ var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FeatureSet.js */ 42762);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.catalogItemVisibilities=null,this.catalogItems=null,this.location=null,this.name=null,this.objectId=null,this.processedValues=null,this.properties=null,this.value=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],p.prototype,"catalogItemVisibilities",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_FeatureSet_js__WEBPACK_IMPORTED_MODULE_8__.default,json:{write:!0}})],p.prototype,"catalogItems",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default,json:{write:!0}})],p.prototype,"location",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],p.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],p.prototype,"objectId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],p.prototype,"processedValues",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],p.prototype,"properties",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],p.prototype,"value",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.ImageIdentifyResult")],p);const l=p;


/***/ }),

/***/ 78169:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ImagePixelLocationParameters.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let c=m=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(){super(...arguments),this.geometries=null,this.rasterId=null}writeGeometry(r,e,o){e.geometries={geometryType:"esriGeometryPoint",geometries:r.map((r=>r.toJSON()))}}clone(){return new m({geometries:this.geometries.map((r=>r.clone())),rasterId:this.rasterId})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[_geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__.default],json:{write:!0}})],c.prototype,"geometries",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("geometries")],c.prototype,"writeGeometry",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__.Integer,json:{write:!0}})],c.prototype,"rasterId",void 0),c=m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.ImagePixelLocationParameters")],c);const a=c;


/***/ }),

/***/ 445:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ImagePixelLocationResult.js ***!
  \****************************************************************************/
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
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.geometries=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],t.prototype,"geometries",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.ImagePixelLocationResult")],t);const p=t;


/***/ }),

/***/ 1126:
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ImageSample.js ***!
  \***************************************************************/
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
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.attributes=null,this.location=null,this.locationId=null,this.rasterId=null,this.resolution=null,this.pixelValue=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"attributes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default,json:{write:!0}})],i.prototype,"location",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"locationId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"rasterId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"resolution",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"pixelValue",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.ImageSample")],i);const p=i;


/***/ }),

/***/ 16263:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ImageSampleParameters.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TimeExtent.js */ 85362);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _layers_support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layers/support/MosaicRule.js */ 35983);
/* harmony import */ var _layers_support_rasterEnums_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layers/support/rasterEnums.js */ 92015);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/* harmony import */ var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/Multipoint.js */ 43245);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;let j=d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport{constructor(){super(...arguments),this.geometry=null,this.interpolation="nearest",this.mosaicRule=null,this.outFields=null,this.pixelSize=null,this.returnFirstValueOnly=!0,this.sampleDistance=null,this.sampleCount=null,this.sliceId=null,this.timeExtent=null}writeGeometry(t,e,o){null!=t&&(e.geometryType=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.getJsonType)(t),e[o]=t.toJSON())}set locations(t){if(null!=t&&t.length){const e=new _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_13__.default({spatialReference:t[0].spatialReference});e.points=t.map((t=>[t.x,t.y])),this._set("locations",t),this.geometry=e}}clone(){return new d((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)({geometry:this.geometry,locations:this.locations,interpolation:this.interpolation,mosaicRule:this.mosaicRule,outFields:this.outFields,raster:this.raster,returnFirstValueOnly:this.returnFirstValueOnly,sampleDistance:this.sampleDistance,sampleCount:this.sampleCount,sliceId:this.sliceId,pixelSize:this.pixelSize,timeExtent:this.timeExtent}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({types:_geometry_js__WEBPACK_IMPORTED_MODULE_1__.geometryTypes,json:{read:_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.fromJSON}})],j.prototype,"geometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("geometry")],j.prototype,"writeGeometry",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,json:{type:_layers_support_rasterEnums_js__WEBPACK_IMPORTED_MODULE_11__.interpolationKebab.jsonValues,read:_layers_support_rasterEnums_js__WEBPACK_IMPORTED_MODULE_11__.interpolationKebab.read,write:_layers_support_rasterEnums_js__WEBPACK_IMPORTED_MODULE_11__.interpolationKebab.write}})],j.prototype,"interpolation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_layers_support_MosaicRule_js__WEBPACK_IMPORTED_MODULE_10__.default,json:{write:!0}})],j.prototype,"mosaicRule",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[String],json:{write:!0}})],j.prototype,"outFields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__.default,json:{write:!0}})],j.prototype,"pixelSize",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,json:{write:!0}})],j.prototype,"raster",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Boolean,json:{write:!0}})],j.prototype,"returnFirstValueOnly",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,json:{write:!0}})],j.prototype,"sampleDistance",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,json:{write:!0}})],j.prototype,"sampleCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,json:{write:!0}})],j.prototype,"sliceId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_TimeExtent_js__WEBPACK_IMPORTED_MODULE_2__.default,json:{read:{source:"time"},write:{target:"time"}}})],j.prototype,"timeExtent",void 0),j=d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.ImageSampleParameters")],j);const h=j;


/***/ }),

/***/ 24673:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ImageSampleResult.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _ImageSample_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ImageSample.js */ 1126);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.samples=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_ImageSample_js__WEBPACK_IMPORTED_MODULE_7__.default],json:{write:!0}})],p.prototype,"samples",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.ImageSampleResult")],p);const c=p;


/***/ })

}]);
//# sourceMappingURL=9728.e2ceca67fe5080008370.js.map