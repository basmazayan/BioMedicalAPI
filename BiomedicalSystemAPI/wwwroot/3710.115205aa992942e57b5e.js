"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[3710],{

/***/ 64698:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISMapService.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArcGISMapService": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Version.js */ 63772);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../support/commonProperties.js */ 34042);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/















const y = y => {
  let m = class extends y {
    constructor() {
      super(...arguments), this.capabilities = void 0, this.copyright = null, this.fullExtent = null, this.legendEnabled = !0, this.spatialReference = null, this.version = null;
    }

    readCapabilities(e, r) {
      const s = r.capabilities && r.capabilities.split(",").map(e => e.toLowerCase().trim());
      if (!s) return {
        operations: {
          supportsQuery: !1,
          supportsExportMap: !1,
          supportsExportTiles: !1,
          supportsTileMap: !1
        },
        exportMap: null,
        exportTiles: null
      };
      const t = this.type,
            i = -1 !== s.indexOf("query"),
            p = -1 !== s.indexOf("map"),
            a = !!r.exportTilesAllowed,
            l = -1 !== s.indexOf("tilemap"),
            n = "tile" !== t && !!r.supportsDynamicLayers,
            u = "tile" !== t && (!r.tileInfo || n),
            c = "tile" !== t && (!r.tileInfo || n),
            y = "tile" !== t,
            m = !!r.cimVersion && _core_Version_js__WEBPACK_IMPORTED_MODULE_5__.Version.parse(r.cimVersion).since(1, 4);
      return {
        operations: {
          supportsQuery: i,
          supportsExportMap: p,
          supportsExportTiles: a,
          supportsTileMap: l
        },
        exportMap: p ? {
          supportsArcadeExpressionForLabeling: m,
          supportsSublayersChanges: y,
          supportsDynamicLayers: n,
          supportsSublayerVisibility: u,
          supportsSublayerDefinitionExpression: c
        } : null,
        exportTiles: a ? {
          maxExportTilesCount: +r.maxExportTilesCount
        } : null
      };
    }

    readVersion(e, r) {
      let s = r.currentVersion;
      return s || (s = r.hasOwnProperty("capabilities") || r.hasOwnProperty("tables") ? 10 : r.hasOwnProperty("supportedImageFormatTypes") ? 9.31 : 9.3), s;
    }

    fetchSublayerInfo(e, r) {
      var _this = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        return yield _this.fetchAllLayersAndTables(r), _this._allLayersAndTablesMap.get(e);
      })();
    }

    fetchAllLayersAndTables(e) {
      var _this2 = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        yield _this2.load(e), _this2._allLayersAndTablesPromise || (_this2._allLayersAndTablesPromise = (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.urlToObject)(_this2.url).path + "/layers", {
          responseType: "json",
          query: {
            f: "json",
            ..._this2.customParameters,
            token: _this2.apiKey
          }
        }).then(e => {
          _this2._allLayersAndTablesMap = new Map();

          for (const r of e.data.layers) _this2._allLayersAndTablesMap.set(r.id, r);

          return {
            result: e.data
          };
        }, e => ({
          error: e
        })));
        const o = yield _this2._allLayersAndTablesPromise;
        if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(e), "result" in o) return o.result;
        throw o.error;
      })();
    }

  };
  return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({
    readOnly: !0
  })], m.prototype, "capabilities", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__.reader)("service", "capabilities", ["capabilities", "exportTilesAllowed", "maxExportTilesCount", "supportsDynamicLayers", "tileInfo"])], m.prototype, "readCapabilities", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({
    json: {
      read: {
        source: "copyrightText"
      }
    }
  })], m.prototype, "copyright", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({
    type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__.default
  })], m.prototype, "fullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__.id)], m.prototype, "id", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({
    type: Boolean,
    json: {
      origins: {
        service: {
          read: {
            enabled: !1
          }
        }
      },
      read: {
        source: "showLegend"
      },
      write: {
        target: "showLegend"
      }
    }
  })], m.prototype, "legendEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__.popupEnabled)], m.prototype, "popupEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({
    type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__.default
  })], m.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()], m.prototype, "version", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__.reader)("version", ["currentVersion", "capabilities", "tables", "supportedImageFormatTypes"])], m.prototype, "readVersion", null), m = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.layers.mixins.ArcGISMapService")], m), m;
};



/***/ }),

/***/ 75805:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/SublayersOwner.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SublayersOwner": () => (/* binding */ f),
/* harmony export */   "forEachSublayer": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/CollectionFlattener.js */ 39876);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/utils.js */ 43365);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/PropertyOrigin.js */ 84975);
/* harmony import */ var _support_Sublayer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../support/Sublayer.js */ 79949);
/* harmony import */ var _support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/sublayerUtils.js */ 20975);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const b=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__.default.getLogger("esri.layers.TileLayer");function p(e,r){const s=[],t={};return e?(e.forEach((e=>{const o=new _support_Sublayer_js__WEBPACK_IMPORTED_MODULE_12__.default;if(o.read(e,r),t[o.id]=o,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=t[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(o)}else s.unshift(o)})),s):s}const d=_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_support_Sublayer_js__WEBPACK_IMPORTED_MODULE_12__.default);function h(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&h(e.sublayers,r)}))}const f=o=>{let f=class extends o{constructor(...e){super(...e),this.allSublayers=new _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_2__.default({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={2:{},3:{},4:{},5:{}},this.handles.add(this.watch("sublayers",((e,r)=>this._handleSublayersChange(e,r)),!0))}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:s}=this,t=(0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__.nameToId)(r.origin);if(t<2)return;if(s[t]={context:r,visibleLayers:e.visibleLayers||s[t].visibleLayers,layers:e.layers||s[t].layers},t>2)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:o,origin:a}=this.createSublayersForOrigin("web-document"),i=(0,_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_8__.getProperties)(this);i.setDefaultOrigin(a),this._set("sublayers",new d(o)),i.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const r=(0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__.nameToId)("web-document"===e?"web-map":e);let s=2,t=this.sublayersSourceJSON[2].layers,o=this.sublayersSourceJSON[2].context,a=null;const l=[3,4,5].filter((e=>e<=r));for(const n of l){const e=this.sublayersSourceJSON[n];(0,_support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_13__.isSublayerOverhaul)(e.layers)&&(s=n,t=e.layers,o=e.context,e.visibleLayers&&(a={visibleLayers:e.visibleLayers,context:e.context}))}const i=[3,4,5].filter((e=>e>s&&e<=r));let y=null;for(const n of i){const{layers:e,visibleLayers:r,context:s}=this.sublayersSourceJSON[n];e&&(y={layers:e,context:s}),r&&(a={visibleLayers:r,context:s})}const b=p(t,o),f=new Map,S=new Set;if(y)for(const n of y.layers)f.set(n.id,n);if(a)for(const n of a.visibleLayers)S.add(n);return h(b,(e=>{y&&e.read(f.get(e.id),y.context),a&&e.read({defaultVisibility:S.has(e.id)},a.context)})),{origin:(0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_11__.idToName)(s),sublayers:new d({items:b})}}read(e,r){super.read(e,r),this.readSublayers(e,r)}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{b.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],f.prototype,"allSublayers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0,type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_support_Sublayer_js__WEBPACK_IMPORTED_MODULE_12__.default)})],f.prototype,"serviceSublayers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({value:null,type:d,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],f.prototype,"sublayers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],f.prototype,"sublayersSourceJSON",void 0),f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.layers.mixins.SublayersOwner")],f),f};


/***/ }),

/***/ 79949:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/Sublayer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ K)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PopupTemplate.js */ 95821);
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/ClassBreaksRenderer.js */ 25938);
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../renderers/DictionaryRenderer.js */ 15206);
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../renderers/DotDensityRenderer.js */ 51471);
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../renderers/HeatmapRenderer.js */ 16008);
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../renderers/Renderer.js */ 6557);
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../renderers/SimpleRenderer.js */ 78477);
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../renderers/UniqueValueRenderer.js */ 96337);
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../renderers/support/jsonUtils.js */ 94111);
/* harmony import */ var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../renderers/support/types.js */ 15196);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../symbols.js */ 58650);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core/Identifiable.js */ 36326);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../core/Loadable.js */ 23412);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../core/accessorSupport/utils.js */ 43365);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ 43465);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../core/accessorSupport/PropertyOrigin.js */ 84975);
/* harmony import */ var _FeatureType_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./FeatureType.js */ 33912);
/* harmony import */ var _Field_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Field.js */ 66536);
/* harmony import */ var _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./FieldsIndex.js */ 62419);
/* harmony import */ var _LabelClass_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./LabelClass.js */ 51331);
/* harmony import */ var _LayerFloorInfo_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./LayerFloorInfo.js */ 66026);
/* harmony import */ var _source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./source/DataLayerSource.js */ 9616);
/* harmony import */ var _source_MapLayerSource_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./source/MapLayerSource.js */ 69013);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../rest/support/Query.js */ 37995);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../support/popupUtils.js */ 81569);
/* harmony import */ var _views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../views/support/floorFilterUtils.js */ 89836);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/











































var C;

function U(e) {
  return e && "esriSMS" === e.type;
}

function q(e, r, i) {
  var t;
  const o = this.originIdOf(r) >= (0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_32__.nameToId)(i.origin);
  return {
    ignoreOrigin: !0,
    allowNull: o,
    enabled: !!i && "map-image" === (null == (t = i.layer) ? void 0 : t.type) && (i.writeSublayerStructure || o)
  };
}

function $(e, r, i) {
  var t;
  return {
    enabled: !!i && "tile" === (null == (t = i.layer) ? void 0 : t.type) && this._isOverridden(r)
  };
}

function J(e, r, i) {
  return {
    ignoreOrigin: !0,
    enabled: i && i.writeSublayerStructure || !1
  };
}

function R(e, r, i) {
  return {
    ignoreOrigin: !0,
    enabled: !!i && (i.writeSublayerStructure || this.originIdOf(r) >= (0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_32__.nameToId)(i.origin))
  };
}

const B = _core_Logger_js__WEBPACK_IMPORTED_MODULE_21__.default.getLogger("esri.layers.support.Sublayer");
let Q = 0;
const G = new Set();
G.add("layer"), G.add("parent"), G.add("loaded"), G.add("loadStatus"), G.add("loadError"), G.add("loadWarnings");
let H = C = class extends (0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_17__.HandleOwnerMixin)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_23__.MultiOriginJSONMixin)((0,_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_18__.IdentifiableMixin)(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_20__.default))) {
  constructor(e) {
    super(e), this.capabilities = void 0, this.fields = null, this.fullExtent = null, this.globalIdField = null, this.legendEnabled = !0, this.objectIdField = null, this.popupEnabled = !0, this.popupTemplate = null, this.sourceJSON = null, this.title = null, this.typeIdField = null, this.types = null;
  }

  load(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this.addResolvingPromise((0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        var r;
        if (!_this.layer && !_this.url) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_16__.default("sublayer:missing-layer", "Sublayer can't be loaded without being part of a layer", {
          sublayer: _this
        });
        let i = null;

        if (!_this.layer || _this.originIdOf("url") > 2 || "data-layer" === (null == (r = _this.source) ? void 0 : r.type)) {
          i = (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_13__.default)(_this.url, {
            responseType: "json",
            query: {
              f: "json"
            },
            ...e
          })).data;
        } else {
          var t;
          let r = _this.id;
          "map-layer" === (null == (t = _this.source) ? void 0 : t.type) && (r = _this.source.mapLayerId), i = yield _this.layer.fetchSublayerInfo(r, e);
        }

        i && (_this.sourceJSON = i, _this.read({
          layerDefinition: i
        }, {
          origin: "service"
        }));
      })()), _this;
    })();
  }

  readCapabilities(e, r) {
    const i = (e = (r = r.layerDefinition || r).capabilities || e) ? e.toLowerCase().split(",").map(e => e.trim()) : [];
    return {
      exportMap: {
        supportsModification: !!r.canModifyLayer
      },
      operations: {
        supportsQuery: -1 !== i.indexOf("query")
      }
    };
  }

  set definitionExpression(e) {
    this._setAndNotifyLayer("definitionExpression", e);
  }

  get fieldsIndex() {
    return new _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_35__.default(this.fields || []);
  }

  set floorInfo(e) {
    this._setAndNotifyLayer("floorInfo", e);
  }

  readGlobalIdFieldFromService(e, r) {
    if ((r = r.layerDefinition || r).globalIdField) return r.globalIdField;
    if (r.fields) for (const i of r.fields) if ("esriFieldTypeGlobalID" === i.type) return i.name;
  }

  get id() {
    const e = this._get("id");

    return null == e ? Q++ : e;
  }

  set id(e) {
    this._get("id") !== e && (!1 !== this.get("layer.capabilities.exportMap.supportsDynamicLayers") ? this._set("id", e) : this._logLockedError("id", "capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"));
  }

  set labelingInfo(e) {
    this._setAndNotifyLayer("labelingInfo", e);
  }

  writeLabelingInfo(e, r, i, t) {
    e && e.length && (r.layerDefinition = {
      drawingInfo: {
        labelingInfo: e.map(e => e.write({}, t))
      }
    });
  }

  set labelsVisible(e) {
    this._setAndNotifyLayer("labelsVisible", e);
  }

  set layer(e) {
    this._set("layer", e), this.sublayers && this.sublayers.forEach(r => r.layer = e);
  }

  set listMode(e) {
    this._set("listMode", e);
  }

  set minScale(e) {
    this._setAndNotifyLayer("minScale", e);
  }

  readMinScale(e, r) {
    return r.minScale || r.layerDefinition && r.layerDefinition.minScale || 0;
  }

  set maxScale(e) {
    this._setAndNotifyLayer("maxScale", e);
  }

  readMaxScale(e, r) {
    return r.maxScale || r.layerDefinition && r.layerDefinition.maxScale || 0;
  }

  readObjectIdFieldFromService(e, r) {
    if ((r = r.layerDefinition || r).objectIdField) return r.objectIdField;
    if (r.fields) for (const i of r.fields) if ("esriFieldTypeOID" === i.type) return i.name;
  }

  set opacity(e) {
    this._setAndNotifyLayer("opacity", e);
  }

  readOpacity(e, r) {
    const i = r.layerDefinition;
    return 1 - .01 * (null != i.transparency ? i.transparency : i.drawingInfo.transparency);
  }

  writeOpacity(e, r, i, t) {
    r.layerDefinition = {
      drawingInfo: {
        transparency: 100 - 100 * e
      }
    };
  }

  writeParent(e, r) {
    this.parent && this.parent !== this.layer ? r.parentLayerId = (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_31__.ensureInteger)(this.parent.id) : r.parentLayerId = -1;
  }

  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }

  set renderer(e) {
    if (e) for (const r of e.getSymbols()) if ((0,_symbols_js__WEBPACK_IMPORTED_MODULE_14__.isSymbol3D)(r)) {
      B.warn("Sublayer renderer should use 2D symbols");
      break;
    }

    this._setAndNotifyLayer("renderer", e);
  }

  get source() {
    return this._get("source") || new _source_MapLayerSource_js__WEBPACK_IMPORTED_MODULE_39__.MapLayerSource({
      mapLayerId: this.id
    });
  }

  set source(e) {
    this._setAndNotifyLayer("source", e);
  }

  set sublayers(e) {
    this._handleSublayersChange(e, this._get("sublayers")), this._set("sublayers", e);
  }

  castSublayers(e) {
    return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_31__.ensureType)(_core_Collection_js__WEBPACK_IMPORTED_MODULE_15__.default.ofType(C), e);
  }

  writeSublayers(e, r, i) {
    this.get("sublayers.length") && (r[i] = this.sublayers.map(e => e.id).toArray().reverse());
  }

  readTypeIdField(e, r) {
    let i = (r = r.layerDefinition || r).typeIdField;

    if (i && r.fields) {
      i = i.toLowerCase();
      const e = r.fields.find(e => e.name.toLowerCase() === i);
      e && (i = e.name);
    }

    return null;
  }

  get url() {
    var e, r;
    const i = null != (e = null == (r = this.layer) ? void 0 : r.parsedUrl) ? e : this._lastParsedUrl,
          t = this.source;
    if (!i) return null;
    if (this._lastParsedUrl = i, "map-layer" === (null == t ? void 0 : t.type)) return `${i.path}/${t.mapLayerId}`;
    const o = {
      layer: JSON.stringify({
        source: this.source
      })
    };
    return `${i.path}/dynamicLayer?${(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_24__.objectToQuery)(o)}`;
  }

  set url(e) {
    e ? this._override("url", e) : this._clearOverride("url");
  }

  set visible(e) {
    this._setAndNotifyLayer("visible", e);
  }

  writeVisible(e, r, i, t) {
    r[i] = this.getAtOrigin("defaultVisibility", "service") || e;
  }

  clone() {
    const {
      store: e
    } = (0,_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_26__.getProperties)(this),
          r = new C();
    return (0,_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_26__.getProperties)(r).store = e.clone(G), this.commitProperty("url"), r._lastParsedUrl = this._lastParsedUrl, r;
  }

  createPopupTemplate(e) {
    return (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_41__.createPopupTemplate)(this, e);
  }

  createQuery() {
    return new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_40__.default({
      returnGeometry: !0,
      where: this.definitionExpression || "1=1"
    });
  }

  createFeatureLayer() {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var e, r;
      if (_this2.hasOwnProperty("sublayers")) return null;
      const i = null == (e = _this2.layer) ? void 0 : e.parsedUrl,
            t = new (0, (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../FeatureLayer.js */ 36328))).default)({
        url: i.path
      });
      return i && _this2.source && ("map-layer" === _this2.source.type ? t.layerId = _this2.source.mapLayerId : t.dynamicDataSource = _this2.source), null != _this2.layer.refreshInterval && (t.refreshInterval = _this2.layer.refreshInterval), _this2.definitionExpression && (t.definitionExpression = _this2.definitionExpression), _this2.floorInfo && (t.floorInfo = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_19__.clone)(_this2.floorInfo)), _this2.originIdOf("labelingInfo") > 2 && (t.labelingInfo = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_19__.clone)(_this2.labelingInfo)), _this2.originIdOf("labelsVisible") > 0 && (t.labelsVisible = _this2.labelsVisible), _this2.originIdOf("legendEnabled") > 0 && (t.legendEnabled = _this2.legendEnabled), _this2.originIdOf("visible") > 0 && (t.visible = _this2.visible), _this2.originIdOf("minScale") > 0 && (t.minScale = _this2.minScale), _this2.originIdOf("maxScale") > 0 && (t.maxScale = _this2.maxScale), _this2.originIdOf("opacity") > 0 && (t.opacity = _this2.opacity), _this2.originIdOf("popupTemplate") > 0 && (t.popupTemplate = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_19__.clone)(_this2.popupTemplate)), _this2.originIdOf("renderer") > 2 && (t.renderer = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_19__.clone)(_this2.renderer)), "data-layer" === (null == (r = _this2.source) ? void 0 : r.type) && (t.dynamicDataSource = _this2.source.clone()), _this2.originIdOf("title") > 0 && (t.title = _this2.title), "map-image" === _this2.layer.type && _this2.layer.originIdOf("customParameters") > 0 && (t.customParameters = _this2.layer.customParameters), "tile" === _this2.layer.type && _this2.layer.originIdOf("customParameters") > 0 && (t.customParameters = _this2.layer.customParameters), t;
    })();
  }

  getField(e) {
    return this.fieldsIndex.get(e);
  }

  getFeatureType(e) {
    const {
      typeIdField: r,
      types: i
    } = this;
    if (!r || !e) return null;
    const t = e.attributes ? e.attributes[r] : void 0;
    if (null == t) return null;
    let o = null;
    return i.some(e => {
      const {
        id: r
      } = e;
      return null != r && (r.toString() === t.toString() && (o = e), !!o);
    }), o;
  }

  getFieldDomain(e, r) {
    const i = r && r.feature,
          t = this.getFeatureType(i);

    if (t) {
      const r = t.domains && t.domains[e];
      if (r && "inherited" !== r.type) return r;
    }

    return this._getLayerDomain(e);
  }

  queryFeatures(e = this.createQuery(), r) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var i, t, o, s;
      if (yield _this3.load(), !_this3.get("capabilities.operations.supportsQuery")) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_16__.default("Sublayer.queryFeatures", "this layer doesn't support queries.");
      const [{
        executeQuery: l
      }, {
        default: n
      }] = yield Promise.all([Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../rest/query/operations/query.js */ 36351)), Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../rest/support/FeatureSet.js */ 42762))]),
            p = yield l(_this3.url, _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_40__.default.from(e), null != (i = null == (t = _this3.layer) ? void 0 : t.spatialReference) ? i : null, { ...r,
        query: { ...(null == (o = _this3.layer) ? void 0 : o.customParameters),
          token: null == (s = _this3.layer) ? void 0 : s.apiKey
        }
      }),
            y = n.fromJSON(p.data);
      if (null != y && y.features) for (const a of y.features) a.sourceLayer = _this3;
      return y;
    })();
  }

  toExportImageJSON(e) {
    var r;
    const i = {
      id: this.id,
      source: (null == (r = this.source) ? void 0 : r.toJSON()) || {
        mapLayerId: this.id,
        type: "mapLayer"
      }
    };

    if (this.definitionExpression) {
      const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__.isSome)(e) ? (0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_42__.combineFloorsDefinitionExpression)(e, this) : this.definitionExpression;
      i.definitionExpression = r;
    } else (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__.isSome)(e) && (i.definitionExpression = e);

    const t = ["renderer", "labelingInfo", "opacity", "labelsVisible"].reduce((e, r) => (e[r] = this.originIdOf(r), e), {}),
          o = Object.keys(t).some(e => t[e] > 2);

    if (o) {
      const e = i.drawingInfo = {};
      t.renderer > 2 && (e.renderer = this.renderer ? this.renderer.toJSON() : null), t.labelsVisible > 2 && (e.showLabels = this.labelsVisible), this.labelsVisible && t.labelingInfo > 2 && (e.labelingInfo = this.labelingInfo ? this.labelingInfo.map(e => e.write({}, {
        origin: "service",
        layer: this.layer
      })) : null, e.showLabels = !0), t.opacity > 2 && (e.transparency = 100 - 100 * this.opacity), this._assignDefaultSymbolColors(e.renderer);
    }

    return i;
  }

  _assignDefaultSymbolColors(e) {
    this._forEachSimpleMarkerSymbols(e, e => {
      e.color || "esriSMSX" !== e.style && "esriSMSCross" !== e.style || (e.outline && e.outline.color ? e.color = e.outline.color : e.color = [0, 0, 0, 0]);
    });
  }

  _forEachSimpleMarkerSymbols(e, r) {
    if (e) {
      const i = "uniqueValueInfos" in e ? e.uniqueValueInfos : "classBreakInfos" in e ? e.classBreakInfos : [];

      for (const e of i) U(e.symbol) && r(e.symbol);

      "symbol" in e && U(e.symbol) && r(e.symbol), "defaultSymbol" in e && U(e.defaultSymbol) && r(e.defaultSymbol);
    }
  }

  _setAndNotifyLayer(e, r) {
    const i = this.layer,
          t = this._get(e);

    let o, s;

    switch (e) {
      case "definitionExpression":
      case "floorInfo":
        o = "supportsSublayerDefinitionExpression";

      case "minScale":
      case "maxScale":
      case "visible":
        o = "supportsSublayerVisibility";
        break;

      case "labelingInfo":
      case "labelsVisible":
      case "opacity":
      case "renderer":
      case "source":
        o = "supportsDynamicLayers", s = "supportsModification";
    }

    const l = (0,_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_26__.getProperties)(this).getDefaultOrigin();

    if ("service" !== l) {
      if (o && !1 === this.get(`layer.capabilities.exportMap.${o}`)) return void this._logLockedError(e, `capability not available 'layer.capabilities.exportMap.${o}'`);
      if (s && !1 === this.get(`capabilities.exportMap.${s}`)) return void this._logLockedError(e, `capability not available 'capabilities.exportMap.${s}'`);
    }

    "source" !== e || "not-loaded" === this.loadStatus ? (this._set(e, r), "service" !== l && t !== r && i && i.emit && i.emit("sublayer-update", {
      propertyName: e,
      target: this
    })) : this._logLockedError(e, "'source' can't be changed after calling sublayer.load()");
  }

  _handleSublayersChange(e, r) {
    r && (r.forEach(e => {
      e.parent = null, e.layer = null;
    }), this.handles.removeAll()), e && (e.forEach(e => {
      e.parent = this, e.layer = this.layer;
    }), this.handles.add([e.on("after-add", ({
      item: e
    }) => {
      e.parent = this, e.layer = this.layer;
    }), e.on("after-remove", ({
      item: e
    }) => {
      e.parent = null, e.layer = null;
    }), e.on("before-changes", e => {
      const r = this.get("layer.capabilities.exportMap.supportsSublayersChanges");
      null == r || r || (B.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_16__.default("sublayer:sublayers-non-modifiable", "Sublayer can't be added, moved, or removed from the layer's sublayers", {
        sublayer: this,
        layer: this.layer
      })), e.preventDefault());
    })]));
  }

  _logLockedError(e, r) {
    B.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_16__.default("sublayer:locked", `Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`, {
      reason: r,
      sublayer: this,
      layer: this.layer
    }));
  }

  _getLayerDomain(e) {
    const r = this.fieldsIndex.get(e);
    return r ? r.domain : null;
  }

};
H.test = {
  isMapImageLayerOverridePolicy: e => e === J || e === q,
  isTileImageLayerOverridePolicy: e => e === $
}, (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  readOnly: !0
})], H.prototype, "capabilities", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_28__.reader)("service", "capabilities", ["layerDefinition.canModifyLayer", "layerDefinition.capabilities"])], H.prototype, "readCapabilities", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: String,
  value: null,
  json: {
    name: "layerDefinition.definitionExpression",
    write: {
      allowNull: !0,
      overridePolicy: q
    }
  }
})], H.prototype, "definitionExpression", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: [_Field_js__WEBPACK_IMPORTED_MODULE_34__.default],
  json: {
    origins: {
      service: {
        read: {
          source: "layerDefinition.fields"
        }
      }
    }
  }
})], H.prototype, "fields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  readOnly: !0
})], H.prototype, "fieldsIndex", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: _LayerFloorInfo_js__WEBPACK_IMPORTED_MODULE_37__.default,
  value: null,
  json: {
    name: "layerDefinition.floorInfo",
    read: {
      source: "layerDefinition.floorInfo"
    },
    write: {
      target: "layerDefinition.floorInfo",
      overridePolicy: q
    },
    origins: {
      "web-scene": {
        read: !1,
        write: !1
      }
    }
  }
})], H.prototype, "floorInfo", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_43__.default,
  json: {
    read: {
      source: "layerDefinition.extent"
    }
  }
})], H.prototype, "fullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: String
})], H.prototype, "globalIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_28__.reader)("service", "globalIdField", ["layerDefinition.globalIdField", "layerDefinition.fields"])], H.prototype, "readGlobalIdFieldFromService", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_31__.Integer,
  json: {
    write: {
      ignoreOrigin: !0
    }
  }
})], H.prototype, "id", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  value: null,
  type: [_LabelClass_js__WEBPACK_IMPORTED_MODULE_36__.default],
  json: {
    read: {
      source: "layerDefinition.drawingInfo.labelingInfo"
    },
    write: {
      target: "layerDefinition.drawingInfo.labelingInfo",
      overridePolicy: J
    }
  }
})], H.prototype, "labelingInfo", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_30__.writer)("labelingInfo")], H.prototype, "writeLabelingInfo", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: Boolean,
  value: !0,
  json: {
    read: {
      source: "layerDefinition.drawingInfo.showLabels"
    },
    write: {
      target: "layerDefinition.drawingInfo.showLabels",
      overridePolicy: J
    }
  }
})], H.prototype, "labelsVisible", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  value: null
})], H.prototype, "layer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: Boolean,
  value: !0,
  json: {
    origins: {
      service: {
        read: {
          enabled: !1
        }
      }
    },
    read: {
      source: "showLegend"
    },
    write: {
      target: "showLegend",
      overridePolicy: R
    }
  }
})], H.prototype, "legendEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: ["show", "hide", "hide-children"],
  value: "show",
  json: {
    read: !1,
    write: !1,
    origins: {
      "web-scene": {
        read: !0,
        write: !0
      }
    }
  }
})], H.prototype, "listMode", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: Number,
  value: 0,
  json: {
    write: {
      overridePolicy: J
    }
  }
})], H.prototype, "minScale", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_28__.reader)("minScale", ["minScale", "layerDefinition.minScale"])], H.prototype, "readMinScale", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: Number,
  value: 0,
  json: {
    write: {
      overridePolicy: J
    }
  }
})], H.prototype, "maxScale", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_28__.reader)("maxScale", ["maxScale", "layerDefinition.maxScale"])], H.prototype, "readMaxScale", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: String
})], H.prototype, "objectIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_28__.reader)("service", "objectIdField", ["layerDefinition.objectIdField", "layerDefinition.fields"])], H.prototype, "readObjectIdFieldFromService", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: Number,
  value: 1,
  json: {
    write: {
      target: "layerDefinition.drawingInfo.transparency",
      overridePolicy: J
    }
  }
})], H.prototype, "opacity", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_28__.reader)("opacity", ["layerDefinition.drawingInfo.transparency", "layerDefinition.transparency"])], H.prototype, "readOpacity", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_30__.writer)("opacity")], H.prototype, "writeOpacity", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  json: {
    type: _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_31__.Integer,
    write: {
      target: "parentLayerId",
      writerEnsuresNonNull: !0,
      overridePolicy: J
    }
  }
})], H.prototype, "parent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_30__.writer)("parent")], H.prototype, "writeParent", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: Boolean,
  value: !0,
  json: {
    read: {
      source: "disablePopup",
      reader: (e, r) => !r.disablePopup
    },
    write: {
      target: "disablePopup",
      overridePolicy: R,

      writer(e, r, i) {
        r[i] = !e;
      }

    }
  }
})], H.prototype, "popupEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_3__.default,
  json: {
    read: {
      source: "popupInfo"
    },
    write: {
      target: "popupInfo",
      overridePolicy: R
    }
  }
})], H.prototype, "popupTemplate", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  readOnly: !0
})], H.prototype, "defaultPopupTemplate", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__.rendererTypes,
  value: null,
  json: {
    name: "layerDefinition.drawingInfo.renderer",
    write: {
      overridePolicy: J
    },
    origins: {
      "web-scene": {
        types: _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__.webSceneRendererTypes,
        name: "layerDefinition.drawingInfo.renderer",
        write: {
          overridePolicy: J
        }
      }
    }
  }
})], H.prototype, "renderer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  types: {
    key: "type",
    base: null,
    typeMap: {
      "data-layer": _source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_38__.DataLayerSource,
      "map-layer": _source_MapLayerSource_js__WEBPACK_IMPORTED_MODULE_39__.MapLayerSource
    }
  },

  cast(e) {
    if (e) {
      if ("mapLayerId" in e) return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_31__.ensureClass)(_source_MapLayerSource_js__WEBPACK_IMPORTED_MODULE_39__.MapLayerSource, e);
      if ("dataSource" in e) return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_31__.ensureClass)(_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_38__.DataLayerSource, e);
    }

    return e;
  },

  json: {
    name: "layerDefinition.source",
    write: {
      overridePolicy: J
    }
  }
})], H.prototype, "source", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)()], H.prototype, "sourceJSON", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  value: null,
  json: {
    type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_31__.Integer],
    write: {
      target: "subLayerIds",
      allowNull: !0,
      overridePolicy: J
    }
  }
})], H.prototype, "sublayers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_27__.cast)("sublayers")], H.prototype, "castSublayers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_30__.writer)("sublayers")], H.prototype, "writeSublayers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: String,
  json: {
    name: "name",
    write: {
      overridePolicy: R
    }
  }
})], H.prototype, "title", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: String
})], H.prototype, "typeIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_28__.reader)("typeIdField", ["layerDefinition.typeIdField"])], H.prototype, "readTypeIdField", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: [_FeatureType_js__WEBPACK_IMPORTED_MODULE_33__.default],
  json: {
    origins: {
      service: {
        read: {
          source: "layerDefinition.types"
        }
      }
    }
  }
})], H.prototype, "types", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: String,
  json: {
    read: {
      source: "layerUrl"
    },
    write: {
      target: "layerUrl",
      overridePolicy: $
    }
  }
})], H.prototype, "url", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_25__.property)({
  type: Boolean,
  value: !0,
  json: {
    read: {
      source: "defaultVisibility"
    },
    write: {
      target: "defaultVisibility",
      overridePolicy: J
    }
  }
})], H.prototype, "visible", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_30__.writer)("visible")], H.prototype, "writeVisible", null), H = C = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_29__.subclass)("esri.layers.support.Sublayer")], H);
const K = H;


/***/ }),

/***/ 20975:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/sublayerUtils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isExportDynamic": () => (/* binding */ n),
/* harmony export */   "isSublayerOverhaul": () => (/* binding */ i),
/* harmony export */   "shouldWriteSublayerStructure": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,n,i){const o=n.flatten((({sublayers:e})=>e)).length;if(o!==e.length)return!0;return!!e.some((e=>e.originIdOf("minScale")>i||e.originIdOf("maxScale")>i||e.originIdOf("renderer")>i||e.originIdOf("labelingInfo")>i||e.originIdOf("opacity")>i||e.originIdOf("labelsVisible")>i||e.originIdOf("source")>i))||!r(e,n)}function n(e,n,i){return!!e.some((e=>{const n=e.source;return!(!n||"map-layer"===n.type&&n.mapLayerId===e.id&&(!n.gdbVersion||n.gdbVersion===i.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!r(e,n)}function r(e,n){if(!e||!e.length)return!0;const r=n.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const o=r.length;for(const{id:t}of e){for(;i<o&&r[i]!==t;)i++;if(i>=o)return!1}return!0}function i(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}


/***/ })

}]);
//# sourceMappingURL=3710.115205aa992942e57b5e.js.map