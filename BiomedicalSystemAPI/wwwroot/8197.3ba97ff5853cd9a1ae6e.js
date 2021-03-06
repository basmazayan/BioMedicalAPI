"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[8197],{

/***/ 28197:
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/WMSLayer.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ J)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.js */ 76925);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Graphic.js */ 99326);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PopupTemplate.js */ 95821);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Collection.js */ 37635);
/* harmony import */ var _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/CollectionFlattener.js */ 39876);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/jsonMap.js */ 74856);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/lang.js */ 60161);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/accessorSupport/write.js */ 93330);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../geometry/support/scaleUtils.js */ 13848);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ 53730);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mixins/TemporalLayer.js */ 77932);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./support/arcgisLayerUrl.js */ 46996);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_ExportWMSImageParameters_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./support/ExportWMSImageParameters.js */ 28763);
/* harmony import */ var _support_WMSSublayer_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./support/WMSSublayer.js */ 70005);
/* harmony import */ var _support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./support/wmsUtils.js */ 94194);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




































const A = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_9__.JSONMap({
  bmp: "image/bmp",
  gif: "image/gif",
  jpg: "image/jpeg",
  png: "image/png",
  svg: "image/svg+xml"
}, {
  ignoreUnknown: !1
});
let B = class extends (0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_8__.HandleOwnerMixin)((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_26__.BlendLayer)((0,_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_31__.TemporalLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_29__.RefreshableLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_30__.ScaleRangeLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_27__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_28__.PortalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_12__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_25__.default)))))))) {
  constructor(...e) {
    super(...e), this.allSublayers = new _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_7__.default({
      getCollections: () => [this.sublayers],
      getChildrenFunction: e => e.sublayers
    }), this.customParameters = null, this.customLayerParameters = null, this.copyright = null, this.description = null, this.dimensions = null, this.fullExtent = null, this.fullExtents = null, this.featureInfoFormat = null, this.featureInfoUrl = null, this.imageFormat = null, this.imageMaxHeight = 2048, this.imageMaxWidth = 2048, this.imageTransparency = !0, this.legendEnabled = !0, this.mapUrl = null, this.isReference = null, this.operationalLayerType = "WMS", this.spatialReference = null, this.spatialReferences = null, this.sublayers = null, this.type = "wms", this.url = null, this.version = null, this.watch("sublayers", (e, r) => {
      if (r) {
        for (const e of r) e.layer = null;

        this.handles.remove("wms-sublayer");
      }

      if (e) {
        for (const r of e) r.parent = this, r.layer = this;

        this.handles.add([e.on("after-add", ({
          item: e
        }) => {
          e.parent = this, e.layer = this;
        }), e.on("after-remove", ({
          item: e
        }) => {
          e.parent = null, e.layer = null;
        })], "wms-sublayer");
      }
    }, !0);
  }

  normalizeCtorArgs(e, r) {
    return "string" == typeof e ? {
      url: e,
      ...r
    } : e;
  }

  load(e) {
    const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__.isSome)(e) ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({
      supportedTypes: ["WMS"]
    }, e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__.throwIfAbortError).then(() => this._fetchService(r))), Promise.resolve(this);
  }

  readFullExtentFromItemOrMap(e, r) {
    const t = r.extent;
    return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_21__.default({
      xmin: t[0][0],
      ymin: t[0][1],
      xmax: t[1][0],
      ymax: t[1][1]
    });
  }

  writeFullExtent(e, r) {
    r.extent = [[e.xmin, e.ymin], [e.xmax, e.ymax]];
  }

  readImageFormat(e, r) {
    const t = r.supportedImageFormatTypes;
    return t && t.indexOf("image/png") > -1 ? "image/png" : t && t[0];
  }

  readSpatialReferenceFromItemOrDocument(e, r) {
    return new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_22__.default(r.spatialReferences[0]);
  }

  writeSpatialReferences(e, r) {
    const t = this.spatialReference && this.spatialReference.wkid;
    e && t ? (r.spatialReferences = e.filter(e => e !== t), r.spatialReferences.unshift(t)) : r.spatialReferences = e;
  }

  readSublayersFromItemOrMap(e, r, t) {
    return G(r.layers, t, r.visibleLayers);
  }

  readSublayers(e, r, t) {
    return G(r.layers, t);
  }

  writeSublayers(e, r, t, s) {
    r.layers = [];
    const i = new Map(),
          o = e.flatten(({
      sublayers: e
    }) => e && e.toArray()).toArray();
    o.forEach(e => {
      "number" == typeof e.parent.id && (i.has(e.parent.id) ? i.get(e.parent.id).push(e.id) : i.set(e.parent.id, [e.id]));
    }), o.forEach(e => {
      const t = {
        sublayer: e,
        ...s
      },
            o = e.write({
        parentLayerId: "number" == typeof e.parent.id ? e.parent.id : -1
      }, t);

      if (i.has(e.id) && (o.sublayerIds = i.get(e.id)), !e.sublayers && e.name) {
        const s = e.write({}, t);
        delete s.id, r.layers.push(s);
      }
    }), r.visibleLayers = o.filter(e => e.visible && !e.sublayers).map(e => e.name);
  }

  createExportImageParameters(e, r, t, s) {
    const i = s && s.pixelRatio || 1,
          o = (0,_geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_23__.getScale)({
      extent: e,
      width: r
    }) * i,
          a = new _support_ExportWMSImageParameters_js__WEBPACK_IMPORTED_MODULE_34__.ExportWMSImageParameters({
      layer: this,
      scale: o
    }),
          {
      xmin: n,
      ymin: l,
      xmax: p,
      ymax: m,
      spatialReference: u
    } = e,
          y = (0,_support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_36__.normalizeWKID)(u, this.spatialReferences),
          c = "1.3.0" === this.version && (0,_support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_36__.coordsReversedForWKID)(y) ? `${l},${n},${m},${p}` : `${n},${l},${p},${m}`,
          d = a.toJSON();
    return {
      bbox: c,
      ["1.3.0" === this.version ? "crs" : "srs"]: isNaN(y) ? void 0 : "EPSG:" + y,
      ...d
    };
  }

  fetchImage(e, r, t, s) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var o, a;

      const n = _this.mapUrl,
            l = _this.createExportImageParameters(e, r, t, s);

      if (!l.layers) {
        const e = document.createElement("canvas");
        return e.width = r, e.height = t, e;
      }

      const p = null == s || null == (o = s.timeExtent) ? void 0 : o.start,
            u = null == s || null == (a = s.timeExtent) ? void 0 : a.end,
            y = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__.isSome)(p) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__.isSome)(u) ? p.getTime() === u.getTime() ? (0,_support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_36__.toISOString)(p) : `${(0,_support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_36__.toISOString)(p)}/${(0,_support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_36__.toISOString)(u)}` : void 0,
            c = {
        responseType: "image",
        query: _this._mixCustomParameters({
          width: r,
          height: t,
          ...l,
          time: y,
          ..._this.refreshParameters
        }),
        signal: null == s ? void 0 : s.signal
      };
      return (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(n, c).then(e => e.data);
    })();
  }

  fetchFeatureInfo(e, r, i, o, a) {
    const n = (0,_geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_23__.getScale)({
      extent: e,
      width: r
    }),
          l = new _support_ExportWMSImageParameters_js__WEBPACK_IMPORTED_MODULE_34__.ExportWMSImageParameters({
      layer: this,
      scale: n
    }),
          p = (0,_support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_36__.getPopupLayers)(l.visibleSublayers);
    if (!this.featureInfoUrl || !p) return null;

    const m = "1.3.0" === this.version ? {
      I: o,
      J: a
    } : {
      x: o,
      y: a
    },
          u = {
      query_layers: p,
      request: "GetFeatureInfo",
      info_format: this.featureInfoFormat,
      feature_count: 25,
      width: r,
      height: i,
      ...m
    },
          y = { ...this.createExportImageParameters(e, r, i),
      ...u
    },
          d = this._mixCustomParameters(y),
          f = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_14__.addQueryParameters)(this.featureInfoUrl, d),
          h = document.createElement("iframe");

    h.src = f, h.style.border = "none", h.style.margin = "0", h.style.width = "100%", h.setAttribute("sandbox", "");
    const g = new _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_4__.default({
      title: this.title,
      content: h
    });
    return new _Graphic_js__WEBPACK_IMPORTED_MODULE_3__.default({
      sourceLayer: this,
      popupTemplate: g
    });
  }

  findSublayerById(e) {
    return this.allSublayers.find(r => r.id === e);
  }

  findSublayerByName(e) {
    return this.allSublayers.find(r => r.name === e);
  }

  supportsSpatialReference(e) {
    return (0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_32__.isWmsServer)(this.url) || this.spatialReferences.some(r => {
      const t = 900913 === r ? _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_22__.default.WebMercator : new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_22__.default({
        wkid: r
      });
      return (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_24__.equals)(t, e);
    });
  }

  _fetchService(e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this2.resourceInfo) {
        _this2.parsedUrl.query && _this2.parsedUrl.query.service && (_this2.parsedUrl.query.SERVICE = _this2.parsedUrl.query.service, delete _this2.parsedUrl.query.service), _this2.parsedUrl.query && _this2.parsedUrl.query.request && (_this2.parsedUrl.query.REQUEST = _this2.parsedUrl.query.request, delete _this2.parsedUrl.query.request);
        const r = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.default)(_this2.parsedUrl.path, {
          query: {
            SERVICE: "WMS",
            REQUEST: "GetCapabilities",
            ..._this2.parsedUrl.query,
            ..._this2.customParameters
          },
          responseType: "xml",
          signal: e
        });
        _this2.resourceInfo = (0,_support_wmsUtils_js__WEBPACK_IMPORTED_MODULE_36__.parseCapabilities)(r.data);
      }

      if (_this2.parsedUrl) {
        const e = new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_14__.Url(_this2.parsedUrl.path);
        "https" !== e.scheme || e.port && "443" !== e.port || -1 !== _config_js__WEBPACK_IMPORTED_MODULE_2__.default.request.httpsDomains.indexOf(e.host) || _config_js__WEBPACK_IMPORTED_MODULE_2__.default.request.httpsDomains.push(e.host);
      }

      _this2.read(_this2.resourceInfo, {
        origin: "service"
      });
    })();
  }

  _mixCustomParameters(e) {
    if (!this.customLayerParameters && !this.customParameters) return e;
    const r = { ...this.customParameters,
      ...this.customLayerParameters
    };

    for (const t in r) e[t.toLowerCase()] = r[t];

    return e;
  }

};

function D(e, r) {
  return e.some(e => {
    for (const t in e) if ((0,_core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_20__.willPropertyWrite)(e, t, null, r)) return !0;

    return !1;
  });
}

function G(e, r, t) {
  const s = new Map();
  e.every(e => null == e.id) && (e = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_10__.clone)(e)).forEach((e, r) => e.id = r);

  for (const o of e) {
    const e = new _support_WMSSublayer_js__WEBPACK_IMPORTED_MODULE_35__.default();
    e.read(o, r), -1 === (null == t ? void 0 : t.indexOf(e.name)) && (e.visible = !1), s.set(e.id, e);
  }

  const i = [];

  for (const a of e) {
    const e = s.get(a.id);

    if (null != a.parentLayerId && a.parentLayerId >= 0) {
      const r = s.get(a.parentLayerId);
      r.sublayers || (r.sublayers = new _core_Collection_js__WEBPACK_IMPORTED_MODULE_6__.default()), r.sublayers.unshift(e);
    } else i.unshift(e);
  }

  return i;
}

(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  readOnly: !0
})], B.prototype, "allSublayers", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  json: {
    type: Object,
    write: !0
  }
})], B.prototype, "customParameters", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  json: {
    type: Object,
    write: !0
  }
})], B.prototype, "customLayerParameters", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  type: String,
  json: {
    write: !0
  }
})], B.prototype, "copyright", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], B.prototype, "description", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  readOnly: !0
})], B.prototype, "dimensions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  json: {
    type: [[Number]],
    read: {
      source: "extent"
    },
    write: {
      target: "extent"
    },
    origins: {
      "web-document": {
        write: {
          ignoreOrigin: !0
        }
      },
      "portal-item": {
        write: {
          ignoreOrigin: !0
        }
      }
    }
  }
})], B.prototype, "fullExtent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_17__.reader)(["web-document", "portal-item"], "fullExtent", ["extent"])], B.prototype, "readFullExtentFromItemOrMap", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_19__.writer)(["web-document", "portal-item"], "fullExtent", {
  extent: {
    type: [[Number]]
  }
})], B.prototype, "writeFullExtent", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], B.prototype, "fullExtents", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  type: String,
  json: {
    write: {
      ignoreOrigin: !0
    }
  }
})], B.prototype, "featureInfoFormat", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  type: String,
  json: {
    write: {
      ignoreOrigin: !0
    }
  }
})], B.prototype, "featureInfoUrl", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  type: String,
  json: {
    origins: {
      "web-document": {
        default: "image/png",
        type: A.jsonValues,
        read: {
          reader: A.read,
          source: "format"
        },
        write: {
          writer: A.write,
          target: "format"
        }
      }
    }
  }
})], B.prototype, "imageFormat", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_17__.reader)("imageFormat", ["supportedImageFormatTypes"])], B.prototype, "readImageFormat", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  type: Number,
  json: {
    read: {
      source: "maxHeight"
    },
    write: {
      target: "maxHeight"
    }
  }
})], B.prototype, "imageMaxHeight", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  type: Number,
  json: {
    read: {
      source: "maxWidth"
    },
    write: {
      target: "maxWidth"
    }
  }
})], B.prototype, "imageMaxWidth", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()], B.prototype, "imageTransparency", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_33__.legendEnabled)], B.prototype, "legendEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  type: ["show", "hide", "hide-children"]
})], B.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  type: String,
  json: {
    write: {
      ignoreOrigin: !0
    }
  }
})], B.prototype, "mapUrl", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
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
})], B.prototype, "isReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  type: ["WMS"]
})], B.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_22__.default,
  json: {
    origins: {
      service: {
        read: {
          source: "extent.spatialReference"
        }
      }
    },
    write: !1
  }
})], B.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_17__.reader)(["web-document", "portal-item"], "spatialReference", ["spatialReferences"])], B.prototype, "readSpatialReferenceFromItemOrDocument", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  type: [_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_16__.Integer],
  json: {
    read: !1,
    origins: {
      service: {
        read: !0
      },
      "web-document": {
        read: !1,
        write: {
          ignoreOrigin: !0
        }
      },
      "portal-item": {
        read: !1,
        write: {
          ignoreOrigin: !0
        }
      }
    }
  }
})], B.prototype, "spatialReferences", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_19__.writer)(["web-document", "portal-item"], "spatialReferences")], B.prototype, "writeSpatialReferences", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  type: _core_Collection_js__WEBPACK_IMPORTED_MODULE_6__.default.ofType(_support_WMSSublayer_js__WEBPACK_IMPORTED_MODULE_35__.default),
  json: {
    write: {
      target: "layers",

      overridePolicy(e, r, t) {
        if (D(this.allSublayers, t)) return {
          ignoreOrigin: !0
        };
      }

    }
  }
})], B.prototype, "sublayers", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_17__.reader)(["web-document", "portal-item"], "sublayers", ["layers", "visibleLayers"])], B.prototype, "readSublayersFromItemOrMap", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_17__.reader)("service", "sublayers", ["layers"])], B.prototype, "readSublayers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_19__.writer)("sublayers", {
  layers: {
    type: [_support_WMSSublayer_js__WEBPACK_IMPORTED_MODULE_35__.default]
  },
  visibleLayers: {
    type: [String]
  }
})], B.prototype, "writeSublayers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  json: {
    read: !1
  },
  readOnly: !0,
  value: "wms"
})], B.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_33__.url)], B.prototype, "url", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({
  type: String,
  json: {
    write: {
      ignoreOrigin: !0
    }
  }
})], B.prototype, "version", void 0), B = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_18__.subclass)("esri.layers.WMSLayer")], B);
const J = B;


/***/ }),

/***/ 70005:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/WMSSublayer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Handles.js */ 65333);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ 43465);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var u;let y=0,d=u=class extends _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.MultiOriginJSONSupport{constructor(e){super(e),this._sublayersHandles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_2__.default,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__.default.fromJSON(e):null}get id(){const e=this._get("id");return null==e?y++:e}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.layer=null})),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))])),this._set("sublayers",e)}castSublayers(e){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__.ensureType)(_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(u),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new u;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map((e=>e.clone()))),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map((e=>e))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],d.prototype,"description",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],d.prototype,"dimensions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({value:null})],d.prototype,"fullExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__.reader)("fullExtent",["extent"])],d.prototype,"readExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],d.prototype,"fullExtents",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],d.prototype,"featureInfoFormat",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],d.prototype,"featureInfoUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],d.prototype,"id",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],d.prototype,"legendUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__.reader)(["web-document"],"legendUrl")],d.prototype,"readLegendUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],d.prototype,"legendEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({value:null})],d.prototype,"layer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],d.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],d.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],d.prototype,"name",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],d.prototype,"parent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],d.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],d.prototype,"queryable",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],d.prototype,"sublayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_7__.cast)("sublayers")],d.prototype,"castSublayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[Number],json:{read:{source:"spatialReferences"}}})],d.prototype,"spatialReferences",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],d.prototype,"title",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],d.prototype,"visible",null),d=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.layers.support.WMSSublayer")],d);const h=d;


/***/ }),

/***/ 94194:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/wmsUtils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coordsReversedForWKID": () => (/* binding */ l),
/* harmony export */   "fromISODuration": () => (/* binding */ v),
/* harmony export */   "getPopupLayers": () => (/* binding */ u),
/* harmony export */   "isDimensionInterval": () => (/* binding */ I),
/* harmony export */   "isElevationDimension": () => (/* binding */ w),
/* harmony export */   "isGenericDimension": () => (/* binding */ L),
/* harmony export */   "isTimeDimension": () => (/* binding */ F),
/* harmony export */   "normalizeWKID": () => (/* binding */ q),
/* harmony export */   "parseCapabilities": () => (/* binding */ o),
/* harmony export */   "toISOString": () => (/* binding */ V)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],a={84:4326,83:4269,27:4267};function o(t){if(!t)return null;const n={idCounter:-1};if("string"==typeof t){t=(new DOMParser).parseFromString(t,"text/xml")}const i=t.documentElement;if("ServiceExceptionReport"===i.nodeName){const t=Array.prototype.slice.call(i.childNodes).map((e=>e.textContent)).join("\r\n");throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",t)}const s=p("Capability",i),a=p("Service",i),o=p("Request",s);if(!s||!a||!o)return null;const l=p("Layer",s);if(!l)return null;const u="WMS_Capabilities"===i.nodeName||"WMT_MS_Capabilities"===i.nodeName?i.getAttribute("version"):"1.3.0",f=x("Title",a,"")||x("Name",a,""),d=x("AccessConstraints",a,""),h=x("Abstract",a,""),N=parseInt(x("MaxWidth",a,"5000"),10),y=parseInt(x("MaxHeight",a,"5000"),10),S=g(o,"GetMap"),I=b(o,"GetMap"),w=A(l,u,n);let L,M=0;if(Array.prototype.slice.call(s.childNodes).forEach((e=>{"Layer"===e.nodeName&&(0===M?L=e:1===M?(w.name&&(w.name="",w.sublayers.push(A(L,u,n))),w.sublayers.push(A(e,u,n))):w.sublayers.push(A(e,u,n)),M++)})),!w)return null;let O,C;const T=w.fullExtents;if(O=w.sublayers,O||(O=[]),0===O.length&&O.push(w),C=w.extent,!C){const e=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__.default(O[0].extent);w.extent=e.toJSON(),C=w.extent}const v=w.spatialReferences.length>0?w.spatialReferences:c(w),R=b(o,"GetFeatureInfo");let V;if(R){const e=g(o,"GetFeatureInfo");e.indexOf("text/html")>-1?V="text/html":e.indexOf("text/plain")>-1&&(V="text/plain")}if(!V){const e=function(t){t&&(t.queryable=!1,t.sublayers&&t.sublayers.forEach((t=>{e(t)})))};e(w)}const _=m(O),U=w.minScale||0,q=w.maxScale||0,B=w.dimensions,D=_.reduce(((e,t)=>e.concat(t.dimensions)),[]),k=B.concat(D).filter(F);let X=null;if(k.length>0){let e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;k.forEach((n=>{const{extent:r}=n;E(r)?r.forEach((n=>{e=Math.min(e,n.getTime()),t=Math.max(t,n.getTime())})):r.forEach((n=>{e=Math.min(e,n.min.getTime()),t=Math.max(t,n.max.getTime())}))})),X={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[e,t]}}return{copyright:d,description:h,dimensions:B,extent:C,fullExtents:T,featureInfoFormat:V,featureInfoUrl:R,mapUrl:I,maxWidth:N,maxHeight:y,maxScale:q,minScale:U,layers:_,spatialReferences:v,supportedImageFormatTypes:S,timeInfo:X,title:f,version:u}}function l(e){return s.some((([t,n])=>e>=t&&e<=n))}function u(e){return e.length?e.filter((e=>e.popupEnabled&&e.name&&e.queryable)).map((e=>e.name)).join(","):""}function c(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const e=c(t);if(e.length>0)return e}return[]}function m(e){let t=[];return e.forEach((e=>{t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(m(e.sublayers)),delete e.sublayers)})),t}function f(e,t,n){var r;return null!=(r=t.getAttribute(e))?r:n}function d(e,t,n,r){const i=p(e,n);return i?f(t,i,r):r}function p(e,t){for(let n=0;n<t.childNodes.length;n++){const r=t.childNodes[n];if(S(r)&&r.nodeName===e)return r}return null}function h(e,t){const n=[];for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];S(i)&&i.nodeName===e&&n.push(i)}return n}function x(e,t,n){const r=p(e,t);return r?r.textContent:n}function N(e,t,n){if(!e)return null;const s=parseFloat(e.getAttribute("minx")),a=parseFloat(e.getAttribute("miny")),o=parseFloat(e.getAttribute("maxx")),l=parseFloat(e.getAttribute("maxy"));let u,c,m,f;n?(u=isNaN(a)?-Number.MAX_VALUE:a,c=isNaN(s)?-Number.MAX_VALUE:s,m=isNaN(l)?Number.MAX_VALUE:l,f=isNaN(o)?Number.MAX_VALUE:o):(u=isNaN(s)?-Number.MAX_VALUE:s,c=isNaN(a)?-Number.MAX_VALUE:a,m=isNaN(o)?Number.MAX_VALUE:o,f=isNaN(l)?Number.MAX_VALUE:l);const d=new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__.default({wkid:t});return new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__.default({xmin:u,ymin:c,xmax:m,ymax:f,spatialReference:d})}function b(e,t){const n=p(t,e);if(n){const e=p("DCPType",n);if(e){const t=p("HTTP",e);if(t){const e=p("Get",t);if(e){let t=d("OnlineResource","xlink:href",e,null);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),M(t,["service","request"])}}}}return null}function g(e,t){const n=h("Operation",e);if(0===n.length){return h("Format",p(t,e)).map((e=>e.textContent))}const r=[];return n.forEach((e=>{if(e.getAttribute("name")===t){h("Format",e).forEach((e=>{r.push(e.textContent)}))}})),r}function y(e,t,n){const r=p(t,e);if(!r)return n;const{textContent:i}=r;if(null==i||""===i)return n;const s=Number(i);return isNaN(s)?n:s}function A(e,t,n){var s;if(!e)return null;const o={id:n.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},u=p("LatLonBoundingBox",e),c=p("EX_GeographicBoundingBox",e);let m=null;u&&(m=N(u,4326)),c&&(m=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__.default(0,0,0,0,new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__.default({wkid:4326})),m.xmin=parseFloat(x("westBoundLongitude",c,"0")),m.ymin=parseFloat(x("southBoundLatitude",c,"0")),m.xmax=parseFloat(x("eastBoundLongitude",c,"0")),m.ymax=parseFloat(x("northBoundLatitude",c,"0"))),u||c||(m=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__.default(-180,-90,180,90,new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__.default({wkid:4326}))),o.minScale=y(e,"MaxScaleDenominator",0),o.maxScale=y(e,"MinScaleDenominator",0);const d=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)o.name=e.textContent||"";else if("Title"===e.nodeName)o.title=e.textContent||"";else if("Abstract"===e.nodeName)o.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const n=e.getAttribute(d);if(n&&0===n.indexOf("EPSG:")){const r=parseInt(n.substring(5),10);0===r||isNaN(r)||m||(m="1.3.0"===t?N(e,r,l(r)):N(e,r))}const r=n&&n.indexOf(":");if(r&&r>-1){let i=parseInt(n.substring(r+1,n.length),10);0===i||isNaN(i)||(i=a[i]?a[i]:i);const s="1.3.0"===t?N(e,i,l(i)):N(e,i);o.fullExtents.push(s)}}else if(e.nodeName===d){e.textContent.split(" ").forEach((e=>{const t=e.includes(":")?parseInt(e.split(":")[1],10):parseInt(e,10);if(0!==t&&!isNaN(t)){const e=a[t]?a[t]:t;o.spatialReferences.includes(e)||o.spatialReferences.push(e)}}))}else if("Style"!==e.nodeName||o.legendURL){if("Layer"===e.nodeName){const r=A(e,t,n);r&&(r.parentLayerId=o.id,o.sublayers||(o.sublayers=[]),o.sublayers.push(r))}}else{const t=p("LegendURL",e);if(t){const e=p("OnlineResource",t);e&&(o.legendURL=e.getAttribute("xlink:href"))}}})),o.extent=null==(s=m)?void 0:s.toJSON(),o.dimensions=h("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),n=e.getAttribute("units"),r=e.textContent,i=e.getAttribute("unitSymbol"),s=e.getAttribute("default"),a="0"!==f("default",e,"0"),o="0"!==f("nearestValue",e,"0"),l="0"!==f("current",e,"0");if(/^time$/i.test(t)&&/^ISO8601$/i.test(n)){return{name:"time",units:"ISO8601",extent:T(r),default:T(s),multipleValues:a,nearestValue:o,current:l}}if(/^elevation$/i.test(t)){return{name:"elevation",units:n,extent:O(r),unitSymbol:i,default:O(s),multipleValues:a,nearestValue:o}}return{name:t,units:n,extent:C(r),unitSymbol:i,default:C(s),multipleValues:a,nearestValue:o}})),o}function E(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function S(e){return e.nodeType===Node.ELEMENT_NODE}function I(e){return void 0!==e.min&&void 0!==e.max}function w(e){return"elevation"===e.name}function L(e){return"time"!==e.name&&"elevation"!==e.name}function F(e){return"time"===e.name}function M(e,t){const r=[],i=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.urlToObject)(e);for(const n in i.query)i.query.hasOwnProperty(n)&&-1===t.indexOf(n.toLowerCase())&&r.push(n+"="+i.query[n]);return i.path+(r.length?"?"+r.join("&"):"")}function O(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter((e=>e)):n.map((e=>parseFloat(e)))}function C(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter((e=>e)):n}function T(e){if(!e)return null;const t=-1!==e.indexOf("/"),n=e.split(",");return t?n.map((e=>{const t=e.split("/");if(t.length<2)return null;return{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?v(t[2]):void 0}})).filter((e=>e)):n.map((e=>new Date(e)))}function v(e){const t=/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,n=e.match(t);if(!n)return null;return{years:R(n[1]),months:R(n[2]),days:R(n[3]),hours:R(n[4]),minutes:R(n[5]),seconds:R(n[6])}}function R(e){if(!e)return 0;const t=/(?:\d+(?:.|,)\d+|\d+)/,n=e.match(t);if(!n)return 0;const r=n[0].replace(",",".");return Number(r)}function V(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const _=new Set([102100,3857,102113,900913]),U=new Set([3395,54004]);function q(e,n){let r=e.wkid;return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(n)?r:(!n.includes(r)&&e.latestWkid&&(r=e.latestWkid),_.has(r)?n.find((e=>_.has(e)))||n.find((e=>U.has(e)))||102100:r)}


/***/ })

}]);
//# sourceMappingURL=8197.3ba97ff5853cd9a1ae6e.js.map