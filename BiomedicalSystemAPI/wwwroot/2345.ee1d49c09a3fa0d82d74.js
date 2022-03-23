"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[2345],{

/***/ 12345:
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/MapImageLayer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TimeExtent.js */ 85362);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/loadAll.js */ 50942);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/accessorSupport/PropertyOrigin.js */ 84975);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../geometry/support/scaleUtils.js */ 13848);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ 57993);
/* harmony import */ var _mixins_ArcGISMapService_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/ArcGISMapService.js */ 64698);
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ 41122);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ 52166);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ 53730);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _mixins_SublayersOwner_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mixins/SublayersOwner.js */ 75805);
/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mixins/TemporalLayer.js */ 77932);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./support/ExportImageParameters.js */ 71995);
/* harmony import */ var _support_Sublayer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./support/Sublayer.js */ 79949);
/* harmony import */ var _support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./support/sublayerUtils.js */ 20975);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



































let q = class extends (0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_24__.BlendLayer)((0,_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_31__.TemporalLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_29__.ScaleRangeLayer)((0,_mixins_SublayersOwner_js__WEBPACK_IMPORTED_MODULE_30__.SublayersOwner)((0,_mixins_ArcGISMapService_js__WEBPACK_IMPORTED_MODULE_22__.ArcGISMapService)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_23__.ArcGISService)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_26__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_27__.PortalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_8__.MultiOriginJSONMixin)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_28__.RefreshableLayer)((0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_21__.APIKeyMixin)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_25__.CustomParametersMixin)((0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_5__.HandleOwnerMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_20__.default))))))))))))) {
  constructor(...e) {
    super(...e), this.datesInUnknownTimezone = !1, this.dpi = 96, this.gdbVersion = null, this.imageFormat = "png24", this.imageMaxHeight = 2048, this.imageMaxWidth = 2048, this.imageTransparency = !0, this.isReference = null, this.labelsVisible = !1, this.operationalLayerType = "ArcGISMapServiceLayer", this.sourceJSON = null, this.sublayers = null, this.type = "map-image", this.url = null;
  }

  normalizeCtorArgs(e, r) {
    return "string" == typeof e ? {
      url: e,
      ...r
    } : e;
  }

  load(e) {
    const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(e) ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({
      supportedTypes: ["Map Service"]
    }, e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.throwIfAbortError).then(() => this._fetchService(r))), Promise.resolve(this);
  }

  readImageFormat(e, r) {
    const t = r.supportedImageFormatTypes;
    return t && t.indexOf("PNG32") > -1 ? "png32" : "png24";
  }

  writeSublayers(e, r, t, o) {
    if (!this.loaded || !e) return;
    const i = e.slice().reverse().flatten(({
      sublayers: e
    }) => e && e.toArray().reverse()).toArray();
    let s = !1;

    if (this.capabilities && this.capabilities.operations.supportsExportMap && this.capabilities.exportMap.supportsDynamicLayers) {
      const e = (0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_17__.nameToId)(o.origin);

      if (3 === e) {
        const e = this.createSublayersForOrigin("service").sublayers;
        s = (0,_support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_35__.shouldWriteSublayerStructure)(i, e, 2);
      } else if (e > 3) {
        const e = this.createSublayersForOrigin("portal-item");
        s = (0,_support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_35__.shouldWriteSublayerStructure)(i, e.sublayers, (0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_17__.nameToId)(e.origin));
      }
    }

    const a = [],
          p = {
      writeSublayerStructure: s,
      ...o
    };
    let n = s;
    i.forEach(e => {
      const r = e.write({}, p);
      a.push(r), n = n || "user" === e.originOf("visible");
    });
    a.some(e => Object.keys(e).length > 1) && (r.layers = a), n && (r.visibleLayers = i.filter(e => e.visible).map(e => e.id));
  }

  createExportImageParameters(e, r, t, o) {
    const i = o && o.pixelRatio || 1;
    e && this.version >= 10 && (e = e.clone().shiftCentralMeridian());
    const s = new _support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_33__.ExportImageParameters({
      layer: this,
      floors: null == o ? void 0 : o.floors,
      scale: (0,_geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_19__.getScale)({
        extent: e,
        width: r
      }) * i
    }),
          a = s.toJSON();
    s.destroy();
    const p = !o || !o.rotation || this.version < 10.3 ? {} : {
      rotation: -o.rotation
    },
          n = e && e.spatialReference,
          m = n.wkid || JSON.stringify(n.toJSON());
    a.dpi *= i;
    const l = {};

    if (null != o && o.timeExtent) {
      const {
        start: e,
        end: r
      } = o.timeExtent.toJSON();
      l.time = e && r && e === r ? "" + e : `${null == e ? "null" : e},${null == r ? "null" : r}`;
    } else this.timeInfo && !this.timeInfo.hasLiveData && (l.time = "null,null");

    return {
      bbox: e && e.xmin + "," + e.ymin + "," + e.xmax + "," + e.ymax,
      bboxSR: m,
      imageSR: m,
      size: r + "," + t,
      ...a,
      ...p,
      ...l
    };
  }

  fetchImage(e, t, i, s) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var a;
      const p = {
        responseType: "image",
        signal: null != (a = null == s ? void 0 : s.signal) ? a : null,
        query: { ..._this.parsedUrl.query,
          ..._this.createExportImageParameters(e, t, i, s),
          f: "image",
          ..._this.refreshParameters,
          ..._this.customParameters,
          token: _this.apiKey
        }
      },
            n = _this.parsedUrl.path + "/export";
      if (null != p.query.dynamicLayers && !_this.capabilities.exportMap.supportsDynamicLayers) return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("mapimagelayer:dynamiclayer-not-supported", `service ${_this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`, {
        query: p.query
      }));
      return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(n, p).then(e => e.data).catch(e => {
        if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.isAbortError)(e)) throw e;
        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("mapimagelayer:image-fetch-error", `Unable to load image: ${n}`, {
          error: e
        });
      });
    })();
  }

  fetchRecomputedExtents(e = {}) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const o = { ...e,
        query: {
          returnUpdates: !0,
          f: "json",
          ..._this2.customParameters,
          token: _this2.apiKey
        }
      },
            {
        data: i
      } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(_this2.url, o),
            {
        extent: s,
        fullExtent: a,
        timeExtent: p
      } = i,
            n = s || a;
      return {
        fullExtent: n && _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__.default.fromJSON(n),
        timeExtent: p && _TimeExtent_js__WEBPACK_IMPORTED_MODULE_3__.default.fromJSON({
          start: p[0],
          end: p[1]
        })
      };
    })();
  }

  loadAll() {
    return (0,_core_loadAll_js__WEBPACK_IMPORTED_MODULE_6__.loadAll)(this, e => {
      e(this.allSublayers);
    });
  }

  _fetchService(e) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this3.sourceJSON) return void _this3.read(_this3.sourceJSON, {
        origin: "service",
        url: _this3.parsedUrl
      });
      const {
        data: t,
        ssl: o
      } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(_this3.parsedUrl.path, {
        query: {
          f: "json",
          ..._this3.parsedUrl.query,
          ..._this3.customParameters,
          token: _this3.apiKey
        },
        signal: e
      });
      o && (_this3.url = _this3.url.replace(/^http:/i, "https:")), _this3.sourceJSON = t, _this3.read(t, {
        origin: "service",
        url: _this3.parsedUrl
      });
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: Boolean
})], q.prototype, "datesInUnknownTimezone", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], q.prototype, "dpi", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], q.prototype, "gdbVersion", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], q.prototype, "imageFormat", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_14__.reader)("imageFormat", ["supportedImageFormatTypes"])], q.prototype, "readImageFormat", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  json: {
    origins: {
      service: {
        read: {
          source: "maxImageHeight"
        }
      }
    }
  }
})], q.prototype, "imageMaxHeight", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  json: {
    origins: {
      service: {
        read: {
          source: "maxImageWidth"
        }
      }
    }
  }
})], q.prototype, "imageMaxWidth", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], q.prototype, "imageTransparency", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
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
})], q.prototype, "isReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  json: {
    read: !1,
    write: !1
  }
})], q.prototype, "labelsVisible", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: ["ArcGISMapServiceLayer"]
})], q.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  json: {
    read: !1,
    write: !1
  }
})], q.prototype, "popupEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()], q.prototype, "sourceJSON", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  json: {
    write: {
      ignoreOrigin: !0
    }
  }
})], q.prototype, "sublayers", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_16__.writer)("sublayers", {
  layers: {
    type: [_support_Sublayer_js__WEBPACK_IMPORTED_MODULE_34__.default]
  },
  visibleLayers: {
    type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_13__.Integer]
  }
})], q.prototype, "writeSublayers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: ["show", "hide", "hide-children"]
})], q.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  json: {
    read: !1
  },
  readOnly: !0,
  value: "map-image"
})], q.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_32__.url)], q.prototype, "url", void 0), q = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__.subclass)("esri.layers.MapImageLayer")], q);
const A = q;


/***/ })

}]);
//# sourceMappingURL=2345.ee1d49c09a3fa0d82d74.js.map