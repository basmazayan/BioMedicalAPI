"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[4577],{

/***/ 24709:
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/VectorTileLayer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ B)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/lang.js */ 60161);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ 57993);
/* harmony import */ var _mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/ArcGISCachedService.js */ 90363);
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ 41122);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ 52166);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _support_imageUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./support/imageUtils.js */ 84945);
/* harmony import */ var _support_SpriteSource_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/SpriteSource.js */ 3362);
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/TileInfo.js */ 87940);
/* harmony import */ var _support_vectorTileLayerLoader_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/vectorTileLayerLoader.js */ 94860);
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../portal/support/jsonContext.js */ 32084);
/* harmony import */ var _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/SchemaHelper.js */ 13888);
/* harmony import */ var _views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/tileInfoUtils.js */ 46897);
/* harmony import */ var _views_2d_engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/style/StyleRepository.js */ 48955);
/* harmony import */ var _views_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../views/webgl/capabilities.js */ 62965);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
































let k = class extends (0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_19__.BlendLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_23__.ScaleRangeLayer)((0,_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_17__.ArcGISCachedService)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_18__.ArcGISService)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_22__.PortalLayer)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_20__.CustomParametersMixin)((0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_16__.APIKeyMixin)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_15__.default))))))))) {
  constructor(...e) {
    super(...e), this._spriteSourceMap = new Map(), this.currentStyleInfo = null, this.style = null, this.isReference = null, this.operationalLayerType = "VectorTileLayer", this.type = "vector-tile", this.url = null, this.symbolCollisionBoxesVisible = !1, this.path = null;
  }

  normalizeCtorArgs(e, t) {
    return "string" == typeof e ? {
      url: e,
      ...t
    } : e;
  }

  destroy() {
    this._spriteSourceMap.clear();
  }

  prefetchResources(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.loadSpriteSource(globalThis.devicePixelRatio || 1, e);
    })();
  }

  load(e) {
    var _this2 = this;

    const r = this.loadFromPortal({
      supportedTypes: ["Vector Tile Service"],
      supportsData: !1
    }, e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAbortError).then( /*#__PURE__*/(0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this2.portalItem || !_this2.portalItem.id) return;
      const r = `${_this2.portalItem.itemUrl}/resources/styles/root.json`;
      (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(r, { ...e,
        query: {
          f: "json",
          ..._this2.customParameters,
          token: _this2.apiKey
        }
      })).data && _this2.read({
        url: r
      }, (0,_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_28__.createForItem)(_this2.portalItem));
    })).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAbortError).then(() => this._loadStyle(e));
    return this.addResolvingPromise(r), Promise.resolve(this);
  }

  get attributionDataUrl() {
    const e = this.currentStyleInfo,
          t = e && e.serviceUrl && (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.urlToObject)(e.serviceUrl);
    if (!t) return null;

    const r = this._getDefaultAttribution(t.path);

    return r ? (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.addQueryParameters)(r, { ...this.customParameters,
      token: this.apiKey
    }) : null;
  }

  get capabilities() {
    const e = this.primarySource;
    return e ? e.capabilities : {
      operations: {
        supportsExportTiles: !1,
        supportsTileMap: !1
      },
      exportTiles: null
    };
  }

  get fullExtent() {
    var e;
    return (null == (e = this.primarySource) ? void 0 : e.fullExtent) || null;
  }

  get parsedUrl() {
    return this.serviceUrl ? (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.urlToObject)(this.serviceUrl) : null;
  }

  get serviceUrl() {
    return this.currentStyleInfo && this.currentStyleInfo.serviceUrl || null;
  }

  get spatialReference() {
    return this.tileInfo && this.tileInfo.spatialReference || null;
  }

  get styleUrl() {
    return this.currentStyleInfo && this.currentStyleInfo.styleUrl || null;
  }

  writeStyleUrl(e, t) {
    e && (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.isProtocolRelative)(e) && (e = `https:${e}`), t.styleUrl = e;
  }

  get tileInfo() {
    var e;
    const t = [];

    for (const o in this.sourceNameToSource) t.push(this.sourceNameToSource[o]);

    let r = (null == (e = this.primarySource) ? void 0 : e.tileInfo) || new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_26__.default();
    if (t.length > 1) for (let o = 0; o < t.length; o++) (0,_views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_30__.areSchemasOverlapping)(r, t[o].tileInfo) && (r = (0,_views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_30__.unionTileInfos)(r, t[o].tileInfo));
    return r;
  }

  readVersion(e, t) {
    return t.version ? parseFloat(t.version) : parseFloat(t.currentVersion);
  }

  get compatibleTileInfo256() {
    return _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_29__.default.create256x256CompatibleTileInfo(this.tileInfo);
  }

  get compatibleTileInfo512() {
    return _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_29__.default.create512x512CompatibleTileInfo(this.tileInfo);
  }

  loadSpriteSource(e = 1, t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this3._spriteSourceMap.has(e)) {
        var r;
        const o = (0,_views_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_32__.default)(),
              i = null != (r = _this3.currentStyleInfo) && r.spriteUrl ? (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.addQueryParameters)(_this3.currentStyleInfo.spriteUrl, { ..._this3.customParameters,
          token: _this3.apiKey
        }) : null,
              s = new _support_SpriteSource_js__WEBPACK_IMPORTED_MODULE_25__.default(i, e, o.maxTextureSize, _this3.currentStyleInfo.spriteFormat);
        yield s.load(t), _this3._spriteSourceMap.set(e, s);
      }

      return Promise.resolve(_this3._spriteSourceMap.get(e));
    })();
  }

  loadStyle(e, t) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var r;
      const o = e || _this4.style || _this4.url;
      return _this4._loadingTask && "string" == typeof o && _this4.url === o || (null == (r = _this4._loadingTask) || r.abort(), _this4._loadingTask = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.createTask)(e => (_this4._spriteSourceMap.clear(), _this4._getSourceAndStyle(o, {
        signal: e
      })), t)), _this4._loadingTask.promise;
    })();
  }

  getStyleLayerId(e) {
    return this.styleRepository.getStyleLayerId(e);
  }

  getStyleLayerIndex(e) {
    return this.styleRepository.getStyleLayerIndex(e);
  }

  getPaintProperties(e) {
    return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.styleRepository.getPaintProperties(e));
  }

  setPaintProperties(e, t) {
    const r = this.styleRepository.isPainterDataDriven(e);
    this.styleRepository.setPaintProperties(e, t);
    const o = this.styleRepository.isPainterDataDriven(e);
    this.emit("paint-change", {
      layer: e,
      paint: t,
      isDataDriven: r || o
    });
  }

  getStyleLayer(e) {
    return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.styleRepository.getStyleLayer(e));
  }

  setStyleLayer(e, t) {
    this.styleRepository.setStyleLayer(e, t), this.emit("style-layer-change", {
      layer: e,
      index: t
    });
  }

  deleteStyleLayer(e) {
    this.styleRepository.deleteStyleLayer(e), this.emit("delete-style-layer", {
      layer: e
    });
  }

  getLayoutProperties(e) {
    return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.styleRepository.getLayoutProperties(e));
  }

  setLayoutProperties(e, t) {
    this.styleRepository.setLayoutProperties(e, t), this.emit("layout-change", {
      layer: e,
      layout: t
    });
  }

  setStyleLayerVisibility(e, t) {
    this.styleRepository.setStyleLayerVisibility(e, t), this.emit("style-layer-visibility-change", {
      layer: e,
      visibility: t
    });
  }

  getStyleLayerVisibility(e) {
    return this.styleRepository.getStyleLayerVisibility(e);
  }

  write(e, t) {
    return t && t.origin && !this.styleUrl ? (t.messages && t.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("vectortilelayer:unsupported", `VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`, {
      layer: this
    })), null) : super.write(e, t);
  }

  getTileUrl(e, t, r) {
    return null;
  }

  _getSourceAndStyle(e, t) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!e) throw new Error("invalid style!");
      const r = yield (0,_support_vectorTileLayerLoader_js__WEBPACK_IMPORTED_MODULE_27__.loadMetadata)(e, { ...t,
        query: { ..._this5.customParameters,
          token: _this5.apiKey
        }
      });

      if ("webp" === r.spriteFormat) {
        (yield (0,_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_24__.checkWebPSupport)("lossy")) || (r.spriteFormat = "png");
      }

      _this5._set("currentStyleInfo", { ...r
      }), "string" == typeof e ? (_this5.url = e, _this5.style = null) : (_this5.url = null, _this5.style = e), _this5._set("sourceNameToSource", r.sourceNameToSource), _this5._set("primarySource", r.sourceNameToSource[r.primarySourceName]), _this5._set("styleRepository", new _views_2d_engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_31__.default(r.style)), _this5.read(r.layerDefinition, {
        origin: "service"
      }), _this5.emit("load-style");
    })();
  }

  _getDefaultAttribution(e) {
    const t = e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),
          r = ["OpenStreetMap_v2", "OpenStreetMap_Daylight_v2", "OpenStreetMap_Export_v2", "OpenStreetMap_FTS_v2", "OpenStreetMap_GCS_v2", "World_Basemap", "World_Basemap_v2", "World_Basemap_Export_v2", "World_Basemap_GCS_v2", "World_Basemap_WGS84", "World_Contours_v2"];
    if (!t) return;
    const o = t[2] && t[2].toLowerCase();
    if (!o) return;
    const i = t[1] || "";

    for (const s of r) if (s.toLowerCase().includes(o)) return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.normalize)(`//static.arcgis.com/attribution/Vector${i}/${s}`);
  }

  _loadStyle(e) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var t, r;
      return null != (t = null == (r = _this6._loadingTask) ? void 0 : r.promise) ? t : _this6.loadStyle(null, e);
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0
})], k.prototype, "attributionDataUrl", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: ["show", "hide"]
})], k.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0,
  json: {
    read: !1
  }
})], k.prototype, "capabilities", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0
})], k.prototype, "currentStyleInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  json: {
    read: !1
  },
  readOnly: !0,
  type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__.default
})], k.prototype, "fullExtent", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], k.prototype, "style", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
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
})], k.prototype, "isReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: ["VectorTileLayer"]
})], k.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0
})], k.prototype, "parsedUrl", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0
})], k.prototype, "serviceUrl", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__.default,
  readOnly: !0
})], k.prototype, "spatialReference", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0
})], k.prototype, "styleRepository", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0
})], k.prototype, "sourceNameToSource", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0
})], k.prototype, "primarySource", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: String,
  readOnly: !0,
  json: {
    write: {
      ignoreOrigin: !0
    },
    origins: {
      "web-document": {
        write: {
          ignoreOrigin: !0,
          isRequired: !0
        }
      }
    }
  }
})], k.prototype, "styleUrl", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__.writer)(["portal-item", "web-document"], "styleUrl")], k.prototype, "writeStyleUrl", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  json: {
    read: !1,
    origins: {
      service: {
        read: !1
      }
    }
  },
  readOnly: !0,
  type: _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_26__.default
})], k.prototype, "tileInfo", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  json: {
    read: !1
  },
  readOnly: !0,
  value: "vector-tile"
})], k.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  json: {
    origins: {
      "web-document": {
        read: {
          source: "styleUrl"
        }
      },
      "portal-item": {
        read: {
          source: "url"
        }
      }
    },
    write: !1,
    read: !1
  }
})], k.prototype, "url", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0
})], k.prototype, "version", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__.reader)("version", ["version", "currentVersion"])], k.prototype, "readVersion", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0
})], k.prototype, "compatibleTileInfo256", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  readOnly: !0
})], k.prototype, "compatibleTileInfo512", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: Boolean
})], k.prototype, "symbolCollisionBoxesVisible", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({
  type: String,
  json: {
    origins: {
      "web-scene": {
        read: !0,
        write: !0
      }
    },
    read: !1
  }
})], k.prototype, "path", void 0), k = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.layers.VectorTileLayer")], k);
const B = k;


/***/ }),

/***/ 3362:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/SpriteSource.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




const r = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__.default.getLogger("esri.layers.support.SpriteSource"),
      h = 1.15;

class o {
  constructor(t, e, i, s) {
    this.baseURL = t, this.devicePixelRatio = e, this.maxTextureSize = i, this._spriteImageFormat = s, this._isRetina = !1, this._spritesData = {}, this.image = null, this.width = null, this.height = null, this.loadStatus = "not-loaded";
  }

  get spriteNames() {
    const t = [];

    for (const e in this._spritesData) t.push(e);

    return t.sort(), t;
  }

  getSpriteInfo(t) {
    return this._spritesData[t];
  }

  load(t) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this.baseURL) {
        _this.loadStatus = "loading";

        try {
          yield _this._loadSprites(t), _this.loadStatus = "loaded";
        } catch {
          _this.loadStatus = "failed";
        }
      } else _this.loadStatus = "failed";
    })();
  }

  _loadSprites(i) {
    this._isRetina = this.devicePixelRatio > h;
    const o = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.urlToObject)(this.baseURL),
          l = o.query ? "?" + (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.objectToQuery)(o.query) : "",
          n = this._isRetina ? "@2x" : "",
          d = `${o.path}${n}.${this._spriteImageFormat}${l}`,
          g = `${o.path}${n}.json${l}`;
    return Promise.all([(0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(g, i), (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(d, {
      responseType: "image",
      ...i
    })]).then(([t, i]) => {
      const s = Object.keys(t.data);
      if (!s || 0 === s.length || 1 === s.length && "_ssl" === s[0] || !i || !i.data) return this._spritesData = this.image = null, this.width = this.height = 0, Promise.resolve(null);
      this._spritesData = t.data;
      const a = i.data,
            h = Math.max(this.maxTextureSize, 4096);

      if (a.width > h || a.height > h) {
        const t = `Sprite resource for style ${o.path} is bigger than the maximum allowed of ${h} pixels}`;
        throw r.error(t), new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("SpriteSource", t);
      }

      this.width = a.width, this.height = a.height;
      const l = document.createElement("canvas"),
            n = l.getContext("2d");
      l.width = a.width, l.height = a.height, n.drawImage(a, 0, 0, a.width, a.height);
      const d = n.getImageData(0, 0, a.width, a.height),
            g = new Uint8Array(d.data);
      let m;

      for (let e = 0; e < g.length; e += 4) m = g[e + 3] / 255, g[e] = g[e] * m, g[e + 1] = g[e + 1] * m, g[e + 2] = g[e + 2] * m;

      this.image = g;
    });
  }

}



/***/ }),

/***/ 84945:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/imageUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkWebPSupport": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let A=null;function o(o){if(A)return A;const l={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return A=new Promise((A=>{const n=new Image;n.onload=()=>{n.onload=n.onerror=null,A(n.width>0&&n.height>0)},n.onerror=()=>{n.onload=n.onerror=null,A(!1)},n.src="data:image/webp;base64,"+l[o]})),A}


/***/ }),

/***/ 94860:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/vectorTileLayerLoader.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMetadata": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ 76925);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _views_2d_engine_vectorTiles_style_VectorTileSource_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/2d/engine/vectorTiles/style/VectorTileSource.js */ 85170);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





const m = _config_js__WEBPACK_IMPORTED_MODULE_1__.default.defaults && _config_js__WEBPACK_IMPORTED_MODULE_1__.default.defaults.io.corsEnabledServers;

function y(_x, _x2) {
  return _y.apply(this, arguments);
}

function _y() {
  _y = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r) {
    const s = {
      source: null,
      sourceBase: null,
      sourceUrl: null,
      validatedSource: null,
      style: null,
      styleBase: null,
      styleUrl: null,
      sourceNameToSource: {},
      primarySourceName: "",
      spriteFormat: "png"
    },
          [t, o] = "string" == typeof e ? [e, null] : [null, e.jsonUrl];
    yield h(s, "esri", e, o, r);
    const l = {
      layerDefinition: s.validatedSource,
      url: t,
      serviceUrl: s.sourceUrl,
      style: s.style,
      styleUrl: s.styleUrl,
      spriteUrl: s.style.sprite && S(s.styleBase, s.style.sprite),
      spriteFormat: s.spriteFormat,
      glyphsUrl: s.style.glyphs && S(s.styleBase, s.style.glyphs),
      sourceNameToSource: s.sourceNameToSource,
      primarySourceName: s.primarySourceName
    };
    return d(l.spriteUrl), d(l.glyphsUrl), l;
  });
  return _y.apply(this, arguments);
}

function d(e) {
  if (!e) return;
  const r = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.getOrigin)(e);
  m && !m.includes(r) && m.push(r);
}

function S(...e) {
  let r;

  for (let s = 0; s < e.length; ++s) if ((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.isProtocolRelative)(e[s])) {
    if (r) {
      const t = r.split("://")[0];
      r = t + ":" + e[s].trim();
    }
  } else r = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAbsolute)(e[s]) ? e[s] : (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)(r, e[s]);

  return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.removeTrailingSlash)(r);
}

function h(_x3, _x4, _x5, _x6, _x7) {
  return _h.apply(this, arguments);
}

function _h() {
  _h = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, o, l, i) {
    let n, c, a;

    if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(i), "string" == typeof o) {
      const e = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.normalize)(o);
      d(e), a = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(e, { ...i,
        responseType: "json",
        query: {
          f: "json",
          ...(null == i ? void 0 : i.query)
        }
      }), a.ssl && (n && (n = n.replace(/^http:/i, "https:")), c && (c = c.replace(/^http:/i, "https:"))), n = e, c = e;
    } else a = {
      data: o
    }, n = o.jsonUrl || null, c = l;

    const f = a.data;
    return U(f) ? (e.styleUrl = n || null, v(e, f, c, i)) : x(f) ? e.sourceUrl ? w(e, f, c, !1, t, i) : (e.sourceUrl = n || null, w(e, f, c, !0, t, i)) : Promise.reject("You must specify the URL or the JSON for a service or for a style.");
  });
  return _h.apply(this, arguments);
}

function U(e) {
  return !!e.sources;
}

function x(e) {
  return !U(e);
}

function v(_x8, _x9, _x10, _x11) {
  return _v.apply(this, arguments);
}

function _v() {
  _v = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r, s, t) {
    const o = s ? (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.removeFile)(s) : _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.appBaseUrl;
    e.styleBase = o, e.style = r, e.styleUrl && d(e.styleUrl), r["sprite-format"] && "webp" === r["sprite-format"].toLowerCase() && (e.spriteFormat = "webp");
    const l = [];

    if (r.sources && r.sources.esri) {
      const s = r.sources.esri;
      s.url ? yield h(e, "esri", S(o, s.url), void 0, t) : l.push(h(e, "esri", s, o, t));
    }

    for (const i of Object.keys(r.sources)) "esri" !== i && "vector" === r.sources[i].type && (r.sources[i].url ? l.push(h(e, i, S(o, r.sources[i].url), void 0, t)) : r.sources[i].tiles && l.push(h(e, i, r.sources[i], o, t)));

    yield Promise.all(l);
  });
  return _v.apply(this, arguments);
}

function w(_x12, _x13, _x14, _x15, _x16, _x17) {
  return _w.apply(this, arguments);
}

function _w() {
  _w = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r, s, o, l, i) {
    const n = s ? (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.removeTrailingSlash)(s) + "/" : _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.appBaseUrl,
          u = g(r, n),
          c = new _views_2d_engine_vectorTiles_style_VectorTileSource_js__WEBPACK_IMPORTED_MODULE_5__.default(l, (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.addQueryParameters)(n, null == i ? void 0 : i.query), u);

    if (!o && e.primarySourceName in e.sourceNameToSource) {
      const r = e.sourceNameToSource[e.primarySourceName];
      if (!r.isCompatibleWith(c)) return Promise.resolve();
      null != c.fullExtent && (null != r.fullExtent ? r.fullExtent.union(c.fullExtent) : r.fullExtent = c.fullExtent.clone()), r.tileInfo.lods.length < c.tileInfo.lods.length && (r.tileInfo = c.tileInfo);
    }

    if (o ? (e.sourceBase = n, e.source = r, e.validatedSource = u, e.primarySourceName = l, e.sourceUrl && d(e.sourceUrl)) : d(n), e.sourceNameToSource[l] = c, !e.style) return null == r.defaultStyles ? Promise.reject() : "string" == typeof r.defaultStyles ? h(e, "", S(n, r.defaultStyles, "root.json"), void 0, i) : h(e, "", r.defaultStyles, S(n, "root.json"), i);
  });
  return _w.apply(this, arguments);
}

function g(e, r) {
  if (e.hasOwnProperty("tileInfo")) return e;
  const s = {
    xmin: -20037507.067161843,
    ymin: -20037507.067161843,
    xmax: 20037507.067161843,
    ymax: 20037507.067161843,
    spatialReference: {
      wkid: 102100
    }
  },
        t = 512;
  let o = 78271.51696400007,
      l = 295828763.7957775;
  const i = [],
        n = e.hasOwnProperty("minzoom") ? +e.minzoom : 0,
        u = e.hasOwnProperty("maxzoom") ? +e.maxzoom : 22;

  for (let c = 0; c <= u; c++) c >= n && i.push({
    level: c,
    scale: l,
    resolution: o
  }), o /= 2, l /= 2;

  for (const c of e.tiles) d(S(r, c));

  return {
    capabilities: "TilesOnly",
    initialExtent: s,
    fullExtent: s,
    minScale: 0,
    maxScale: 0,
    tiles: e.tiles,
    tileInfo: {
      rows: t,
      cols: t,
      dpi: 96,
      format: "pbf",
      origin: {
        x: -20037508.342787,
        y: 20037508.342787
      },
      lods: i,
      spatialReference: {
        wkid: 102100
      }
    }
  };
}



/***/ }),

/***/ 32084:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/jsonContext.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForItem": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portal.js */ 27149);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){return{origin:"portal-item",url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(o.itemUrl),portal:o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__.default.getDefault(),portalItem:o,readResourcePaths:[]}}


/***/ }),

/***/ 14437:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/GeometryUtils.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C_256_TO_RAD": () => (/* binding */ e),
/* harmony export */   "C_2PI": () => (/* binding */ r),
/* harmony export */   "C_DEG_TO_256": () => (/* binding */ c),
/* harmony export */   "C_DEG_TO_RAD": () => (/* binding */ f),
/* harmony export */   "C_INFINITY": () => (/* binding */ n),
/* harmony export */   "C_PI": () => (/* binding */ t),
/* harmony export */   "C_PI_BY_2": () => (/* binding */ u),
/* harmony export */   "C_RAD_TO_256": () => (/* binding */ o),
/* harmony export */   "C_SQRT2": () => (/* binding */ i),
/* harmony export */   "C_SQRT2_INV": () => (/* binding */ I),
/* harmony export */   "between": () => (/* binding */ g),
/* harmony export */   "degToByte": () => (/* binding */ M),
/* harmony export */   "interpolate": () => (/* binding */ b),
/* harmony export */   "log2": () => (/* binding */ P),
/* harmony export */   "positiveMod": () => (/* binding */ a),
/* harmony export */   "radToByte": () => (/* binding */ h),
/* harmony export */   "sqr": () => (/* binding */ T)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=Number.POSITIVE_INFINITY,t=Math.PI,r=2*t,u=t/2,o=128/t,e=t/128,c=256/360,f=t/180,i=1.414213562,I=1/i,N=1/Math.LN2;function a(n,t){return(n%=t)>=0?n:n+t}function h(n){return a(n*o,256)}function M(n){return a(n*c,256)}function P(n){return Math.log(n)*N}function T(n){return n*n}function b(n,t,r){return n*(1-r)+t*r}function g(n,t,r){return n>=t&&n<=r||n>=r&&n<=t}


/***/ }),

/***/ 13888:
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/SchemaHelper.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../layers/support/LOD.js */ 38881);
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ 87940);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(e,i){this.lockedSchemaPixelSize=e,this.isGCS=i}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,i){let s=0,t=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(s=i),e[1]%2&&(t=i)),[s,t]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(s){if(!s)return null;if(256===s.size[0]&&256===s.size[1])return s;const t=256,l=s.spatialReference.isGeographic,r=[],o=s.lods.length;for(let i=0;i<o;i++){const t=s.lods[i],o=l?t.resolution:2*t.resolution;r.push(new _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__.default({level:t.level,scale:t.scale,resolution:o}))}return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__.default({size:[t,t],dpi:s.dpi,format:s.format,compressionQuality:s.compressionQuality,origin:s.origin,spatialReference:s.spatialReference,lods:r})}static create512x512CompatibleTileInfo(s){if(!s)return null;if(256===s.size[0]||256===s.size[1])return null;const t=512,l=[],r=s.lods.length;for(let i=0;i<r;i++){const t=s.lods[i],r=.5*t.resolution;l.push(new _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__.default({level:t.level,scale:t.scale,resolution:r}))}return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__.default({size:[t,t],dpi:s.dpi,format:s.format,compressionQuality:s.compressionQuality,origin:s.origin,spatialReference:s.spatialReference,lods:l})}}


/***/ }),

/***/ 99035:
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TilemapIndex.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../request.js */ 30351);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tiling/TileKey.js */ 5507);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




class l {
  constructor(e) {
    this.url = e;
  }

  fetchTileIndex() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this._tileIndexPromise || (_this._tileIndexPromise = (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(_this.url).then(e => e.data.index)), _this._tileIndexPromise;
    })();
  }

  dataKey(e, r) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const l = yield _this2.fetchTileIndex();
      return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.throwIfAborted)(r), _this2._getIndexedDataKey(l, e);
    })();
  }

  _getIndexedDataKey(e, t) {
    const l = [t];
    if (t.level < 0 || t.row < 0 || t.col < 0 || t.row >> t.level > 0 || t.col >> t.level > 0) return null;
    let i = t;

    for (; 0 !== i.level;) i = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_3__.default(i.level - 1, i.row >> 1, i.col >> 1, i.world), l.push(i);

    let o,
        s,
        n = e,
        a = l.pop();
    if (1 === n) return a;

    for (; l.length;) if (o = l.pop(), s = (1 & o.col) + ((1 & o.row) << 1), n) {
      if (0 === n[s]) {
        a = null;
        break;
      }

      if (1 === n[s]) {
        a = o;
        break;
      }

      a = o, n = n[s];
    }

    return a;
  }

}



/***/ }),

/***/ 29005:
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TilemapRequest.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../request.js */ 30351);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tiling/TileKey.js */ 5507);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




class r {
  constructor(e, t) {
    this._tilemap = e, this._tileIndexUrl = t;
  }

  fetchTileIndex(t) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this._tileIndexPromise || (_this._tileIndexPromise = (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(_this._tileIndexUrl, {
        query: { ...(null == t ? void 0 : t.query)
        }
      }).then(e => e.data.index)), _this._tileIndexPromise;
    })();
  }

  dataKey(e, r) {
    const {
      level: l,
      row: s,
      col: o
    } = e,
          n = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_3__.default(e);
    return this._tilemap.fetchAvailabilityUpsample(l, s, o, n, r).then(() => (n.world = e.world, n)).catch(e => {
      if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAbortError)(e)) throw e;
      return null;
    });
  }

}



/***/ }),

/***/ 85170:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTileSource.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/lang.js */ 60161);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ 30164);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../geometry/Extent.js */ 70157);
/* harmony import */ var _layers_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../layers/support/serviceTileInfoProperty.js */ 57275);
/* harmony import */ var _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../layers/support/TilemapCache.js */ 55261);
/* harmony import */ var _TilemapIndex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TilemapIndex.js */ 99035);
/* harmony import */ var _TilemapRequest_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TilemapRequest.js */ 29005);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/








class u {
  constructor(u, h, c) {
    this.tilemap = null, this.tileInfo = null, this.capabilities = null, this.fullExtent = null, this.name = u, this.sourceUrl = h;
    const m = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.urlToObject)(this.sourceUrl),
          f = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(c),
          d = f.tiles;
    if (m) for (let t = 0; t < d.length; t++) {
      const s = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.urlToObject)(d[t]);
      s && ((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAbsolute)(s.path) || (s.path = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(m.path, s.path)), d[t] = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.addQueryParameters)(s.path, { ...m.query,
        ...s.query
      }));
    }
    this.tileServers = d;
    const g = c.capabilities && c.capabilities.split(",").map(t => t.toLowerCase().trim()),
          x = !0 === (null == c ? void 0 : c.exportTilesAllowed),
          y = !0 === (null == g ? void 0 : g.includes("tilemap")),
          v = x && c.hasOwnProperty("maxExportTilesCount") ? c.maxExportTilesCount : 0;
    this.capabilities = {
      operations: {
        supportsExportTiles: x,
        supportsTileMap: y
      },
      exportTiles: x ? {
        maxExportTilesCount: +v
      } : null
    }, this.tileInfo = (0,_layers_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_4__.readServiceTileInfo)(f.tileInfo, f, null, {
      ignoreMinMaxLOD: !0
    });
    const T = c.tileMap ? (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.addQueryParameters)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(m.path, c.tileMap), m.query) : null;
    y ? (this.type = "vector-tile", this.tilemap = new _TilemapRequest_js__WEBPACK_IMPORTED_MODULE_7__.default(new _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_5__.TilemapCache({
      layer: {
        parsedUrl: m,
        tileInfo: this.tileInfo,
        type: "vector-tile",
        tileServers: this.tileServers
      }
    }), T)) : T && (this.tilemap = new _TilemapIndex_js__WEBPACK_IMPORTED_MODULE_6__.default(T)), this.fullExtent = _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__.default.fromJSON(c.fullExtent);
  }

  getRefKey(t, e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var i, l;
      return null != (i = null == (l = _this.tilemap) ? void 0 : l.dataKey(t, e)) ? i : t;
    })();
  }

  getSourceTileUrl(t, e, i) {
    return this.tileServers[e % this.tileServers.length].replace(/\{z\}/gi, t.toString()).replace(/\{y\}/gi, e.toString()).replace(/\{x\}/gi, i.toString());
  }

  isCompatibleWith(t) {
    const e = this.tileInfo,
          i = t.tileInfo;
    if (!e.spatialReference.equals(i.spatialReference)) return !1;
    if (!e.origin.equals(i.origin)) return !1;
    if (Math.round(e.dpi) !== Math.round(i.dpi)) return !1;
    const l = e.lods,
          r = i.lods,
          s = Math.min(l.length, r.length);

    for (let o = 0; o < s; o++) {
      const t = l[o],
            e = r[o];
      if (t.level !== e.level || Math.round(t.scale) !== Math.round(e.scale)) return !1;
    }

    return !0;
  }

}



/***/ }),

/***/ 46897:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/tileInfoUtils.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areSchemasOverlapping": () => (/* binding */ s),
/* harmony export */   "unionTileInfos": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ 87940);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=1e-6;function s(e,s){if(e===s)return!0;if(!e&&null!=s)return!1;if(null!=e&&!s)return!1;if(!e.spatialReference.equals(s.spatialReference)||e.dpi!==s.dpi)return!1;const o=e.origin,r=s.origin;if(Math.abs(o.x-r.x)>=l||Math.abs(o.y-r.y)>=l)return!1;let n,t;e.lods[0].scale>s.lods[0].scale?(n=e,t=s):(t=e,n=s);for(let i=n.lods[0].scale;i>=t.lods[t.lods.length-1].scale-l;i/=2)if(Math.abs(i-t.lods[0].scale)<l)return!0;return!1}function o(l,s){if(l===s)return l;if(!l&&null!=s)return s;if(null!=l&&!s)return l;const o=l.size[0],r=l.format,n=l.dpi,t={x:l.origin.x,y:l.origin.y},i=l.spatialReference.toJSON(),a=l.lods[0].scale>s.lods[0].scale?l.lods[0]:s.lods[0],d=l.lods[l.lods.length-1].scale<=s.lods[s.lods.length-1].scale?l.lods[l.lods.length-1]:s.lods[s.lods.length-1],f=a.scale,u=a.resolution,c=d.scale,p=[];let g=f,h=u,x=0;for(;g>c;)p.push({level:x,resolution:h,scale:g}),x++,g/=2,h/=2;return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__.default({size:[o,o],dpi:n,format:r||"pbf",origin:t,lods:p,spatialReference:i})}


/***/ }),

/***/ 30603:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANGLE_FACTOR_256": () => (/* binding */ d),
/* harmony export */   "ATTRIBUTE_DATA_ANIMATION": () => (/* binding */ J),
/* harmony export */   "ATTRIBUTE_DATA_DD0": () => (/* binding */ L),
/* harmony export */   "ATTRIBUTE_DATA_DD1": () => (/* binding */ M),
/* harmony export */   "ATTRIBUTE_DATA_FILTER_FLAGS": () => (/* binding */ I),
/* harmony export */   "ATTRIBUTE_DATA_VV": () => (/* binding */ K),
/* harmony export */   "ATTRIBUTE_STORE_TEXTURE_SIZE": () => (/* binding */ q),
/* harmony export */   "AVERAGE_GLYPH_MOSAIC_ITEM": () => (/* binding */ k),
/* harmony export */   "BITSET_GENERIC_LOCK_COLOR": () => (/* binding */ ct),
/* harmony export */   "BITSET_LINE_SCALE_DASH": () => (/* binding */ dt),
/* harmony export */   "BITSET_MARKER_ALIGNMENT_MAP": () => (/* binding */ it),
/* harmony export */   "BITSET_MARKER_ALIGNMENT_SCREEN": () => (/* binding */ ht),
/* harmony export */   "BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE": () => (/* binding */ ot),
/* harmony export */   "BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY": () => (/* binding */ at),
/* harmony export */   "BITSET_TYPE_FILL_OUTLINE": () => (/* binding */ nt),
/* harmony export */   "BUFFER_DATA_MINIMUM_SIZE": () => (/* binding */ tt),
/* harmony export */   "BUFFER_DATA_POOL_SIZE": () => (/* binding */ _),
/* harmony export */   "COLLISION_BOX_PADDING": () => (/* binding */ l),
/* harmony export */   "COLLISION_BUCKET_SIZE": () => (/* binding */ p),
/* harmony export */   "COLLISION_EARLY_REJECT_BUCKET_SIZE": () => (/* binding */ g),
/* harmony export */   "COLLISION_MAX_ZOOM_DELTA": () => (/* binding */ f),
/* harmony export */   "COLLISION_PLACEMENT_PADDING": () => (/* binding */ v),
/* harmony export */   "COLLISION_TILE_BOX_SIZE": () => (/* binding */ m),
/* harmony export */   "DEBUG_LABELS": () => (/* binding */ n),
/* harmony export */   "DISPLAY_RECORD_INT_PER_ELEMENT": () => (/* binding */ Z),
/* harmony export */   "DOT_DENSITY_MAX_FIELDS": () => (/* binding */ r),
/* harmony export */   "EFFECT_FLAG_0": () => (/* binding */ Q),
/* harmony export */   "ENABLE_EARLY_LABEL_DISCARD": () => (/* binding */ R),
/* harmony export */   "EXTRUDE_SCALE": () => (/* binding */ h),
/* harmony export */   "FILTER_FLAG_0": () => (/* binding */ P),
/* harmony export */   "GLYPH_SIZE": () => (/* binding */ b),
/* harmony export */   "HEURISTIC_GLYPHS_PER_FEATURE": () => (/* binding */ x),
/* harmony export */   "HEURISTIC_GLYPHS_PER_LINE": () => (/* binding */ w),
/* harmony export */   "HIGHLIGHT_FLAG": () => (/* binding */ O),
/* harmony export */   "HITTEST_SEARCH_SIZE": () => (/* binding */ T),
/* harmony export */   "MAGIC_LABEL_LINE_HEIGHT": () => (/* binding */ s),
/* harmony export */   "MAX_FILTERS": () => (/* binding */ N),
/* harmony export */   "MAX_GPU_UPLOADS_PER_FRAME": () => (/* binding */ X),
/* harmony export */   "MIN_MAX_ZOOM_PRECISION_FACTOR": () => (/* binding */ et),
/* harmony export */   "NAN_MAGIC_NUMBER": () => (/* binding */ c),
/* harmony export */   "PATCH_PIXEL_BUFFER_ALLOC_SIZE": () => (/* binding */ $),
/* harmony export */   "PICTURE_FILL_COLOR": () => (/* binding */ i),
/* harmony export */   "RASTER_TILE_SIZE": () => (/* binding */ a),
/* harmony export */   "SPRITE_PADDING": () => (/* binding */ Y),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_0": () => (/* binding */ A),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_1": () => (/* binding */ B),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_2": () => (/* binding */ C),
/* harmony export */   "TEXTURE_BINDING_ATTRIBUTE_DATA_3": () => (/* binding */ D),
/* harmony export */   "TEXTURE_BINDING_BITMAP": () => (/* binding */ z),
/* harmony export */   "TEXTURE_BINDING_GLYPH_ATLAS": () => (/* binding */ y),
/* harmony export */   "TEXTURE_BINDING_HIGHLIGHT_0": () => (/* binding */ E),
/* harmony export */   "TEXTURE_BINDING_HIGHLIGHT_1": () => (/* binding */ F),
/* harmony export */   "TEXTURE_BINDING_RENDERER_0": () => (/* binding */ G),
/* harmony export */   "TEXTURE_BINDING_RENDERER_1": () => (/* binding */ H),
/* harmony export */   "TEXTURE_BINDING_SPRITE_ATLAS": () => (/* binding */ u),
/* harmony export */   "TEXT_PLACEMENT_PADDING": () => (/* binding */ j),
/* harmony export */   "THIN_LINE_HALF_WIDTH_THRESHOLD": () => (/* binding */ S),
/* harmony export */   "TILE_SIZE": () => (/* binding */ o),
/* harmony export */   "VTL_HIGH_RES_CUTOFF": () => (/* binding */ W),
/* harmony export */   "VTL_TEXTURE_BINDING_UNIT_GLYPHS": () => (/* binding */ V),
/* harmony export */   "VTL_TEXTURE_BINDING_UNIT_SPRITES": () => (/* binding */ U),
/* harmony export */   "WEBGL_MAX_INNER_STOPS": () => (/* binding */ e),
/* harmony export */   "WEBGL_MAX_STOPS": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=8,e=t-2,c=1e-30,h=64,i=4294967295,o=512,a=256,d=256/360,n=!1,p=128,r=8,s=29,f=1,g=16,l=16,m=o/p,v=8,w=50,x=10,b=24,j=8,k={metrics:{width:15,height:17,left:0,top:-7,advance:14}},q=1024,u=0,y=0,z=0,A=1,B=2,C=3,D=4,E=5,F=6,G=5,H=6,I=0,J=1,K=2,L=3,M=3,N=2,O=1,P=2,Q=4,R=!1,S=1.05,T=6,U=5,V=6,W=1.15,X=2,Y=2,Z=8,$=500,_=4,tt=128,et=10,ct=2,ht=0,it=1,ot=4,at=8,dt=4,nt=1;


/***/ })

}]);
//# sourceMappingURL=4577.d4d986eff26bdc51c2c6.js.map