"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[2106],{

/***/ 52106:
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/GeoRSSLayer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.js */ 76925);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../symbols.js */ 58650);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ 53730);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../symbols/Symbol.js */ 66760);
/* harmony import */ var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../symbols/SimpleLineSymbol.js */ 34755);
/* harmony import */ var _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../symbols/PictureMarkerSymbol.js */ 41001);
/* harmony import */ var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../symbols/SimpleMarkerSymbol.js */ 85076);
/* harmony import */ var _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../symbols/SimpleFillSymbol.js */ 42247);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




























const L = ["atom", "xml"],
      R = {
  base: _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_24__.default,
  key: "type",
  typeMap: {
    "simple-line": _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_25__.default
  },
  errorContext: "symbol"
},
      k = {
  base: _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_24__.default,
  key: "type",
  typeMap: {
    "picture-marker": _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_26__.default,
    "simple-marker": _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_27__.default
  },
  errorContext: "symbol"
},
      _ = {
  base: _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_24__.default,
  key: "type",
  typeMap: {
    "simple-fill": _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_28__.default
  },
  errorContext: "symbol"
};
let w = class extends (0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_18__.BlendLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_21__.RefreshableLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_19__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_20__.PortalLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__.ScaleRangeLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_17__.default)))))) {
  constructor(...e) {
    super(...e), this.description = null, this.fullExtent = null, this.legendEnabled = !0, this.lineSymbol = null, this.pointSymbol = null, this.polygonSymbol = null, this.operationalLayerType = "GeoRSS", this.url = null, this.type = "geo-rss";
  }

  normalizeCtorArgs(e, r) {
    return "string" == typeof e ? {
      url: e,
      ...r
    } : e;
  }

  readFeatureCollections(e, r) {
    return r.featureCollection.layers.forEach(e => {
      var r;
      const o = e.layerDefinition.drawingInfo.renderer.symbol;
      o && "esriSFS" === o.type && null != (r = o.outline) && r.style.includes("esriSFS") && (o.outline.style = "esriSLSSolid");
    }), r.featureCollection.layers;
  }

  get hasPoints() {
    return this._hasGeometry("esriGeometryPoint");
  }

  get hasPolylines() {
    return this._hasGeometry("esriGeometryPolyline");
  }

  get hasPolygons() {
    return this._hasGeometry("esriGeometryPolygon");
  }

  get title() {
    const e = this._get("title");

    return e && "defaults" !== this.originOf("title") ? e : this.url ? (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__.getFilename)(this.url, L) || "GeoRSS" : e || "";
  }

  set title(e) {
    this._set("title", e);
  }

  load(e) {
    const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e) ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({
      supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"]
    }, e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAbortError).then(() => this._fetchService(r)).then(e => {
      this.read(e, {
        origin: "service"
      });
    })), Promise.resolve(this);
  }

  hasDataChanged() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = yield _this._fetchService();
      return _this.read(e, {
        origin: "service",
        ignoreDefaults: !0
      }), !0;
    })();
  }

  _fetchService(e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var t;
      const s = _this2.spatialReference,
            {
        data: i
      } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_3__.default)(_config_js__WEBPACK_IMPORTED_MODULE_2__.default.geoRSSServiceUrl, {
        query: {
          url: _this2.url,
          refresh: !!_this2.loaded || void 0,
          outSR: (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_16__.isWGS84)(s) ? void 0 : null != (t = s.wkid) ? t : JSON.stringify(s)
        },
        signal: e
      });
      return i;
    })();
  }

  _hasGeometry(e) {
    var r, o;
    return null != (r = null == (o = this.featureCollections) ? void 0 : o.some(r => {
      var o, t;
      return (null == (o = r.featureSet) ? void 0 : o.geometryType) === e && (null == (t = r.featureSet.features) ? void 0 : t.length) > 0;
    })) && r;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()], w.prototype, "description", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()], w.prototype, "featureCollections", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__.reader)("service", "featureCollections", ["featureCollection.layers"])], w.prototype, "readFeatureCollections", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__.default,
  json: {
    name: "lookAtExtent"
  }
})], w.prototype, "fullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_23__.id)], w.prototype, "id", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_23__.legendEnabled)], w.prototype, "legendEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  types: R,
  json: {
    write: !0
  }
})], w.prototype, "lineSymbol", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  type: ["show", "hide"]
})], w.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  types: k,
  json: {
    write: !0
  }
})], w.prototype, "pointSymbol", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  types: _,
  json: {
    write: !0
  }
})], w.prototype, "polygonSymbol", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  type: ["GeoRSS"]
})], w.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_23__.url)], w.prototype, "url", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  json: {
    origins: {
      service: {
        read: {
          source: "name",
          reader: e => e || void 0
        }
      }
    }
  }
})], w.prototype, "title", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  readOnly: !0,
  json: {
    read: !1
  },
  value: "geo-rss"
})], w.prototype, "type", void 0), w = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__.subclass)("esri.layers.GeoRSSLayer")], w);
const F = w;


/***/ })

}]);
//# sourceMappingURL=2106.b51ea1f3b91b5ebdca6a.js.map