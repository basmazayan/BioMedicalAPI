"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[9353],{

/***/ 69353:
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/CSVLayer.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry.js */ 61243);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FeatureLayer.js */ 36328);
/* harmony import */ var _graphics_sources_CSVSource_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graphics/sources/CSVSource.js */ 19612);
/* harmony import */ var _graphics_sources_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./graphics/sources/support/clientSideDefaults.js */ 45033);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../rest/support/Query.js */ 37995);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../chunks/persistableUrlUtils.js */ 26912);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
















let y = class extends _FeatureLayer_js__WEBPACK_IMPORTED_MODULE_11__.default {
  constructor(...e) {
    super(...e), this.capabilities = (0,_graphics_sources_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_13__.createCapabilities)(!1, !1), this.delimiter = null, this.editingEnabled = !1, this.fields = null, this.latitudeField = null, this.locationType = "coordinates", this.longitudeField = null, this.operationalLayerType = "CSV", this.outFields = ["*"], this.path = null, this.portalItem = null, this.spatialReference = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_16__.default.WGS84, this.source = null, this.type = "csv";
  }

  normalizeCtorArgs(e, r) {
    return "string" == typeof e ? {
      url: e,
      ...r
    } : e;
  }

  get isTable() {
    return this.loaded && null == this.geometryType;
  }

  readWebMapLabelsVisible(e, r) {
    return null != r.showLabels ? r.showLabels : !!(r.layerDefinition && r.layerDefinition.drawingInfo && r.layerDefinition.drawingInfo.labelingInfo);
  }

  set url(e) {
    if (!e) return void this._set("url", e);
    const r = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.urlToObject)(e);
    this._set("url", r.path), r.query && (this.customParameters = { ...this.customParameters,
      ...r.query
    });
  }

  createGraphicsSource(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = new _graphics_sources_CSVSource_js__WEBPACK_IMPORTED_MODULE_12__.default({
        loadOptions: {
          delimiter: _this.delimiter,
          fields: _this.fields,
          latitudeField: _this.latitudeField,
          longitudeField: _this.longitudeField,
          spatialReference: _this.spatialReference,
          timeInfo: _this.timeInfo,
          url: _this.url
        },
        customParameters: _this.customParameters
      });
      return _this._set("source", r), yield r.load({
        signal: e
      }), _this.read({
        locationInfo: r.locationInfo,
        columnDelimiter: r.delimiter
      }, {
        origin: "service",
        url: _this.parsedUrl
      }), r;
    })();
  }

  queryFeatures(e, r) {
    return this.load().then(() => this.source.queryFeatures(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_14__.default.from(e) || this.createQuery())).then(e => {
      if (null != e && e.features) for (const r of e.features) r.layer = r.sourceLayer = this;
      return e;
    });
  }

  queryObjectIds(e, r) {
    return this.load().then(() => this.source.queryObjectIds(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_14__.default.from(e) || this.createQuery()));
  }

  queryFeatureCount(e, r) {
    return this.load().then(() => this.source.queryFeatureCount(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_14__.default.from(e) || this.createQuery()));
  }

  queryExtent(e, r) {
    return this.load().then(() => this.source.queryExtent(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_14__.default.from(e) || this.createQuery()));
  }

  write(e, r) {
    return super.write(e, { ...r,
      writeLayerSchema: !0
    });
  }

  hasDataChanged() {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        const {
          dataChanged: e,
          updates: t
        } = yield _this2.source.refresh(_this2.customParameters);
        return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(t) && _this2.read(t, {
          origin: "service",
          url: _this2.parsedUrl,
          ignoreDefaults: !0
        }), e;
      } catch {}

      return !1;
    })();
  }

  _verifyFields() {}

  _verifySource() {}

  _hasMemorySource() {
    return !1;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  readOnly: !0,
  json: {
    read: !1,
    write: !1
  }
})], y.prototype, "capabilities", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  type: [",", " ", ";", "|", "\t"],
  json: {
    read: {
      source: "columnDelimiter"
    },
    write: {
      target: "columnDelimiter",
      ignoreOrigin: !0
    }
  }
})], y.prototype, "delimiter", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  readOnly: !0,
  type: Boolean,
  json: {
    origins: {
      "web-scene": {
        read: !1,
        write: !1
      }
    }
  }
})], y.prototype, "editingEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  json: {
    read: {
      source: "layerDefinition.fields"
    },
    write: {
      target: "layerDefinition.fields"
    }
  }
})], y.prototype, "fields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  type: Boolean,
  readOnly: !0
})], y.prototype, "isTable", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("web-map", "labelsVisible", ["layerDefinition.drawingInfo.labelingInfo", "showLabels"])], y.prototype, "readWebMapLabelsVisible", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  type: String,
  json: {
    read: {
      source: "locationInfo.latitudeFieldName"
    },
    write: {
      target: "locationInfo.latitudeFieldName",
      ignoreOrigin: !0
    }
  }
})], y.prototype, "latitudeField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  type: ["show", "hide"]
})], y.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  type: ["coordinates"],
  json: {
    read: {
      source: "locationInfo.locationType"
    },
    write: {
      target: "locationInfo.locationType",
      ignoreOrigin: !0,
      isRequired: !0
    }
  }
})], y.prototype, "locationType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  type: String,
  json: {
    read: {
      source: "locationInfo.longitudeFieldName"
    },
    write: {
      target: "locationInfo.longitudeFieldName",
      ignoreOrigin: !0
    }
  }
})], y.prototype, "longitudeField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  type: ["CSV"]
})], y.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], y.prototype, "outFields", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  type: String,
  json: {
    origins: {
      "web-scene": {
        read: !1,
        write: !1
      }
    },
    read: !1,
    write: !1
  }
})], y.prototype, "path", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  json: {
    read: !1,
    write: !1,
    origins: {
      "web-document": {
        read: !1,
        write: !1
      }
    }
  }
})], y.prototype, "portalItem", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  json: {
    read: !1
  },
  cast: null,
  type: _graphics_sources_CSVSource_js__WEBPACK_IMPORTED_MODULE_12__.default,
  readOnly: !0
})], y.prototype, "source", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  json: {
    read: !1
  },
  value: "csv",
  readOnly: !0
})], y.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  json: {
    read: _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_15__.r,
    write: {
      isRequired: !0,
      ignoreOrigin: !0,
      writer: _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_15__.w
    }
  }
})], y.prototype, "url", null), y = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.layers.CSVLayer")], y);
const h = y;


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

/***/ 19612:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/CSVSource.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Loadable.js */ 23412);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/workers/workers.js */ 74775);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../rest/support/FeatureSet.js */ 42762);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/













let u = class extends _core_Loadable_js__WEBPACK_IMPORTED_MODULE_4__.default {
  constructor(t) {
    var _this;

    (super(t), _this = this), this.type = "csv", this.refresh = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.debounce)( /*#__PURE__*/function () {
      var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t) {
        yield _this.load();
        const {
          extent: e,
          timeExtent: o
        } = yield _this._connection.invoke("refresh", t);
        return _this.sourceJSON.extent = e, o && (_this.sourceJSON.timeInfo.timeExtent = [o.start, o.end]), {
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

  load(t) {
    const e = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(t) ? t.signal : null;
    return this.addResolvingPromise(this._startWorker(e)), Promise.resolve(this);
  }

  destroy() {
    var t;
    null == (t = this._connection) || t.close(), this._connection = null;
  }

  openPorts() {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this2.load(), _this2._connection.openPorts();
    })();
  }

  queryFeatures(t, e = {}) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this3.load(e);
      const o = yield _this3._connection.invoke("queryFeatures", t ? t.toJSON() : null, e);
      return _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_12__.default.fromJSON(o);
    })();
  }

  queryFeaturesJSON(t, e = {}) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this4.load(e), _this4._connection.invoke("queryFeatures", t ? t.toJSON() : null, e);
    })();
  }

  queryFeatureCount(t, e = {}) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this5.load(e), _this5._connection.invoke("queryFeatureCount", t ? t.toJSON() : null, e);
    })();
  }

  queryObjectIds(t, e = {}) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this6.load(e), _this6._connection.invoke("queryObjectIds", t ? t.toJSON() : null, e);
    })();
  }

  queryExtent(t, e = {}) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this7.load(e);
      const o = yield _this7._connection.invoke("queryExtent", t ? t.toJSON() : null, e);
      return {
        count: o.count,
        extent: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__.default.fromJSON(o.extent)
      };
    })();
  }

  querySnapping(t, e = {}) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this8.load(e), _this8._connection.invoke("querySnapping", t, e);
    })();
  }

  _startWorker(t) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this9._connection = yield (0,_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_7__.open)("CSVSourceWorker", {
        strategy: (0,_core_has_js__WEBPACK_IMPORTED_MODULE_3__.default)("feature-layers-workers") ? "dedicated" : "local",
        signal: t
      });
      const {
        url: o,
        delimiter: r,
        fields: s,
        latitudeField: n,
        longitudeField: a,
        spatialReference: c,
        timeInfo: l
      } = _this9.loadOptions,
            u = yield _this9._connection.invoke("load", {
        url: o,
        customParameters: _this9.customParameters,
        parsingOptions: {
          delimiter: r,
          fields: null == s ? void 0 : s.map(t => t.toJSON()),
          latitudeField: n,
          longitudeField: a,
          spatialReference: null == c ? void 0 : c.toJSON(),
          timeInfo: null == l ? void 0 : l.toJSON()
        }
      }, {
        signal: t
      });
      _this9.locationInfo = u.locationInfo, _this9.sourceJSON = u.layerDefinition, _this9.delimiter = u.delimiter;
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], u.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], u.prototype, "loadOptions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], u.prototype, "customParameters", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], u.prototype, "locationInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], u.prototype, "sourceJSON", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()], u.prototype, "delimiter", void 0), u = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.layers.graphics.sources.CSVSource")], u);
const p = u;


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
//# sourceMappingURL=9353.b9b56c20f6393620445c.js.map