"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[2087],{

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

/***/ 42087:
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/FeatureLayerSource.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry.js */ 61243);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Graphic.js */ 99326);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../request.js */ 30351);
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../TimeExtent.js */ 85362);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/jsonMap.js */ 74856);
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/Loadable.js */ 23412);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/object.js */ 47914);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/clientSideDefaults.js */ 45033);
/* harmony import */ var _rest_query_operations_editsZScale_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../rest/query/operations/editsZScale.js */ 84512);
/* harmony import */ var _rest_query_operations_queryAttachments_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../rest/query/operations/queryAttachments.js */ 75975);
/* harmony import */ var _tasks_QueryTask_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../tasks/QueryTask.js */ 87262);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ 96583);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
























const I = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_8__.JSONMap({
  originalAndCurrentFeatures: "original-and-current-features",
  none: "none"
});

function _(_x) {
  return _2.apply(this, arguments);
}

function _2() {
  _2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    if ("string" == typeof e) {
      const t = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__.dataComponents)(e);
      return t || {
        data: e
      };
    }

    return new Promise((t, r) => {
      const s = new FileReader();
      s.readAsDataURL(e), s.onload = () => t((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__.dataComponents)(s.result)), s.onerror = e => r(e);
    });
  });
  return _2.apply(this, arguments);
}

const O = new Set(["Feature Layer", "Table"]);
let S = class extends _core_Loadable_js__WEBPACK_IMPORTED_MODULE_9__.default {
  constructor() {
    var _this;

    (super(...arguments), _this = this), this.type = "feature-layer", this.refresh = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__.debounce)( /*#__PURE__*/(0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var e, t;
      yield _this.load();
      const r = null == (e = _this.sourceJSON.editingInfo) ? void 0 : e.lastEditDate;
      if (null == r) return {
        dataChanged: !0,
        updates: {}
      };

      try {
        yield _this._fetchService(null);
      } catch {
        return {
          dataChanged: !0,
          updates: {}
        };
      }

      const s = r !== (null == (t = _this.sourceJSON.editingInfo) ? void 0 : t.lastEditDate);
      return {
        dataChanged: s,
        updates: s ? {
          editingInfo: _this.sourceJSON.editingInfo,
          extent: _this.sourceJSON.extent
        } : null
      };
    }));
  }

  load(e) {
    const t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isSome)(e) ? e.signal : null;
    return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON, t)), Promise.resolve(this);
  }

  get queryTask() {
    const {
      capabilities: {
        query: {
          supportsFormatPBF: e
        }
      },
      parsedUrl: t,
      dynamicDataSource: r,
      infoFor3D: s,
      gdbVersion: a,
      spatialReference: n,
      fieldsIndex: o
    } = this.layer,
          u = (0,_core_has_js__WEBPACK_IMPORTED_MODULE_7__.default)("featurelayer-pbf") && e && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isNone)(s) ? "pbf" : "json";
    return new _tasks_QueryTask_js__WEBPACK_IMPORTED_MODULE_23__.default({
      url: t.path,
      format: u,
      fieldsIndex: o,
      infoFor3D: s,
      dynamicDataSource: r,
      gdbVersion: a,
      sourceSpatialReference: n
    });
  }

  addAttachment(e, t) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this2.load();

      const s = e.attributes[_this2.layer.objectIdField],
            a = _this2.layer.parsedUrl.path + "/" + s + "/addAttachment",
            i = _this2._getLayerRequestOptions(),
            n = _this2._getFormDataForAttachment(t, i.query);

      try {
        const e = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_4__.default)(a, {
          body: n
        });
        return _this2._createFeatureEditResult(e.data.addAttachmentResult);
      } catch (o) {
        throw _this2._createAttachmentErrorResult(s, o);
      }
    })();
  }

  updateAttachment(e, t, s) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this3.load();

      const a = e.attributes[_this3.layer.objectIdField],
            i = _this3.layer.parsedUrl.path + "/" + a + "/updateAttachment",
            n = _this3._getLayerRequestOptions({
        query: {
          attachmentId: t
        }
      }),
            o = _this3._getFormDataForAttachment(s, n.query);

      try {
        const e = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_4__.default)(i, {
          body: o
        });
        return _this3._createFeatureEditResult(e.data.updateAttachmentResult);
      } catch (u) {
        throw _this3._createAttachmentErrorResult(a, u);
      }
    })();
  }

  applyEdits(e, t) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this4.load();

      const s = e.addFeatures.map(_this4._serializeFeature, _this4),
            a = e.updateFeatures.map(_this4._serializeFeature, _this4),
            i = _this4._getFeatureIds(e.deleteFeatures, null == t ? void 0 : t.globalIdUsed);

      (0,_rest_query_operations_editsZScale_js__WEBPACK_IMPORTED_MODULE_21__.unapplyEditsZUnitScaling)(s, a, _this4.layer.spatialReference);
      const n = [],
            o = [],
            u = [...e.deleteAttachments];

      for (const r of e.addAttachments) n.push(yield _this4._serializeAttachment(r));

      for (const r of e.updateAttachments) o.push(yield _this4._serializeAttachment(r));

      const l = n.length || o.length || u.length ? {
        adds: n,
        updates: o,
        deletes: u
      } : null,
            d = {
        gdbVersion: (null == t ? void 0 : t.gdbVersion) || _this4.layer.gdbVersion,
        rollbackOnFailure: null == t ? void 0 : t.rollbackOnFailureEnabled,
        useGlobalIds: null == t ? void 0 : t.globalIdUsed,
        returnEditMoment: null == t ? void 0 : t.returnEditMoment,
        usePreviousEditMoment: null == t ? void 0 : t.usePreviousEditMoment,
        sessionId: null == t ? void 0 : t.sessionId
      };
      null != t && t.returnServiceEditsOption ? (d.edits = JSON.stringify([{
        id: _this4.layer.layerId,
        adds: s,
        updates: a,
        deletes: i,
        attachments: l
      }]), d.returnServiceEditsOption = I.toJSON(null == t ? void 0 : t.returnServiceEditsOption), d.returnServiceEditsInSourceSR = null == t ? void 0 : t.returnServiceEditsInSourceSR) : (d.adds = s.length ? JSON.stringify(s) : null, d.updates = a.length ? JSON.stringify(a) : null, d.deletes = i.length ? null != t && t.globalIdUsed ? JSON.stringify(i) : i.join(",") : null, d.attachments = l && JSON.stringify(l));

      const c = _this4._getLayerRequestOptions({
        method: "post",
        query: d
      }),
            h = null != t && t.returnServiceEditsOption ? _this4.layer.url : _this4.layer.parsedUrl.path,
            p = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_4__.default)(h + "/applyEdits", c);

      return _this4._createEditsResult(p);
    })();
  }

  deleteAttachments(e, t) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this5.load();
      const s = e.attributes[_this5.layer.objectIdField],
            a = _this5.layer.parsedUrl.path + "/" + s + "/deleteAttachments";

      try {
        return (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_4__.default)(a, _this5._getLayerRequestOptions({
          query: {
            attachmentIds: t.join(",")
          },
          method: "post"
        }))).data.deleteAttachmentResults.map(_this5._createFeatureEditResult);
      } catch (i) {
        throw _this5._createAttachmentErrorResult(s, i);
      }
    })();
  }

  fetchRecomputedExtents(e = {}) {
    var _this6 = this;

    const t = e.signal;
    return this.load({
      signal: t
    }).then( /*#__PURE__*/(0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = _this6._getLayerRequestOptions({ ...e,
        query: {
          returnUpdates: !0
        }
      }),
            {
        layerId: a,
        url: i
      } = _this6.layer,
            {
        data: n
      } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_4__.default)(`${i}/${a}`, t),
            {
        id: o,
        extent: u,
        fullExtent: l,
        timeExtent: d
      } = n,
            c = u || l;

      return {
        id: o,
        fullExtent: c && _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__.default.fromJSON(c),
        timeExtent: d && _TimeExtent_js__WEBPACK_IMPORTED_MODULE_5__.default.fromJSON({
          start: d[0],
          end: d[1]
        })
      };
    }));
  }

  queryAttachments(e, t = {}) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        parsedUrl: s
      } = _this7.layer,
            a = s.path;
      yield _this7.load();

      const i = _this7._getLayerRequestOptions(t);

      if (!_this7.layer.get("capabilities.operations.supportsQueryAttachments")) {
        const {
          objectIds: t
        } = e,
              s = [];

        for (const e of t) {
          const t = a + "/" + e + "/attachments";
          s.push((0,_request_js__WEBPACK_IMPORTED_MODULE_4__.default)(t, i));
        }

        return Promise.all(s).then(e => t.map((t, r) => ({
          parentObjectId: t,
          attachmentInfos: e[r].data.attachmentInfos
        }))).then(e => (0,_rest_query_operations_queryAttachments_js__WEBPACK_IMPORTED_MODULE_22__.processAttachmentQueryResult)(e, a));
      }

      return _this7.queryTask.executeAttachmentQuery(e, i);
    })();
  }

  queryFeatures(e, t) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this8.load(), _this8.queryTask.execute(e, { ...t,
        query: _this8._createRequestQueryOptions(t)
      });
    })();
  }

  queryFeaturesJSON(e, t) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this9.load(), _this9.queryTask.executeJSON(e, { ...t,
        query: _this9._createRequestQueryOptions(t)
      });
    })();
  }

  queryObjectIds(e, t) {
    var _this10 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this10.load(), _this10.queryTask.executeForIds(e, { ...t,
        query: _this10._createRequestQueryOptions(t)
      });
    })();
  }

  queryFeatureCount(e, t) {
    var _this11 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this11.load(), _this11.queryTask.executeForCount(e, { ...t,
        query: _this11._createRequestQueryOptions(t)
      });
    })();
  }

  queryExtent(e, t) {
    var _this12 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this12.load(), _this12.queryTask.executeForExtent(e, { ...t,
        query: _this12._createRequestQueryOptions(t)
      });
    })();
  }

  queryRelatedFeatures(e, t) {
    var _this13 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this13.load(), _this13.queryTask.executeRelationshipQuery(e, { ...t,
        query: _this13._createRequestQueryOptions(t)
      });
    })();
  }

  queryRelatedFeaturesCount(e, t) {
    var _this14 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this14.load(), _this14.queryTask.executeRelationshipQueryForCount(e, { ...t,
        query: _this14._createRequestQueryOptions(t)
      });
    })();
  }

  queryTopFeatures(e, t) {
    var _this15 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this15.load(), _this15.queryTask.executeTopFeaturesQuery(e, { ...t,
        query: _this15._createRequestQueryOptions(t)
      });
    })();
  }

  queryTopObjectIds(e, t) {
    var _this16 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this16.load(), _this16.queryTask.executeForTopIds(e, { ...t,
        query: _this16._createRequestQueryOptions(t)
      });
    })();
  }

  queryTopExtents(e, t) {
    var _this17 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this17.load(), _this17.queryTask.executeForTopExtents(e, { ...t,
        query: _this17._createRequestQueryOptions(t)
      });
    })();
  }

  queryTopCount(e, t) {
    var _this18 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this18.load(), _this18.queryTask.executeForTopCount(e, { ...t,
        query: _this18._createRequestQueryOptions(t)
      });
    })();
  }

  _createRequestQueryOptions(e) {
    const t = { ...this.layer.customParameters,
      token: this.layer.apiKey,
      ...(null == e ? void 0 : e.query)
    };
    return this.layer.datesInUnknownTimezone && (t.timeReferenceUnknownClient = !0), t;
  }

  _fetchService(e, t) {
    var _this19 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!e) {
        const {
          data: s
        } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_4__.default)(_this19.layer.parsedUrl.path, _this19._getLayerRequestOptions({
          query: (0,_core_has_js__WEBPACK_IMPORTED_MODULE_7__.default)("featurelayer-advanced-symbols") ? {
            returnAdvancedSymbols: !0
          } : {},
          signal: t
        }));
        e = s;
      }

      _this19.sourceJSON = _this19._patchServiceJSON(e);
      const s = e.type;
      if (!O.has(s)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("feature-layer-source:unsupported-type", `Source type "${s}" is not supported`);
    })();
  }

  _patchServiceJSON(e) {
    var t;

    if ("Table" !== e.type && e.geometryType && (null == e || null == (t = e.drawingInfo) || !t.renderer) && !e.defaultSymbol) {
      const t = (0,_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_20__.createDrawingInfo)(e.geometryType).renderer;
      (0,_core_object_js__WEBPACK_IMPORTED_MODULE_11__.setDeepValue)("drawingInfo.renderer", t, e);
    }

    return "esriGeometryMultiPatch" === e.geometryType && e.infoFor3D && (e.geometryType = "mesh"), e;
  }

  _serializeFeature(e) {
    const {
      geometry: t,
      attributes: r
    } = e;
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__.isNone)(t) ? {
      attributes: r
    } : "mesh" === t.type || "extent" === t.type ? null : {
      geometry: t.toJSON(),
      attributes: r
    };
  }

  _serializeAttachment(e) {
    var _this20 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        feature: t,
        attachment: r
      } = e,
            {
        globalId: s,
        name: a,
        contentType: i,
        data: n,
        uploadId: o
      } = r,
            u = {
        globalId: s,
        parentGlobalId: null,
        contentType: null,
        name: null,
        uploadId: null,
        data: null
      };
      if (t && (u.parentGlobalId = "attributes" in t ? t.attributes && t.attributes[_this20.layer.globalIdField] : t.globalId), o) u.uploadId = o;else if (n) {
        const e = yield _(n);
        u.contentType = e.mediaType, u.data = e.data, n instanceof File && (u.name = n.name);
      }
      return a && (u.name = a), i && (u.contentType = i), u;
    })();
  }

  _getFeatureIds(e, t) {
    const r = e[0];
    return r ? this._canUseGlobalIds(t, e) ? this._getGlobalIdsFromFeatureIdentifier(e) : "objectId" in r ? this._getObjectIdsFromFeatureIdentifier(e) : this._getIdsFromFeatures(e) : [];
  }

  _getIdsFromFeatures(e) {
    const t = this.layer.objectIdField;
    return e.map(e => e.attributes && e.attributes[t]);
  }

  _canUseGlobalIds(e, t) {
    return e && "globalId" in t[0];
  }

  _getObjectIdsFromFeatureIdentifier(e) {
    return e.map(e => e.objectId);
  }

  _getGlobalIdsFromFeatureIdentifier(e) {
    return e.map(e => e.globalId);
  }

  _createEditsResult(e) {
    var t;
    const r = e.data,
          {
      layerId: s
    } = this.layer,
          a = [];
    let i = null;
    if (Array.isArray(r)) for (const u of r) a.push({
      id: u.id,
      editedFeatures: u.editedFeatures
    }), u.id === s && (i = {
      addResults: u.addResults,
      updateResults: u.updateResults,
      deleteResults: u.deleteResults,
      attachments: u.attachments,
      editMoment: u.editMoment
    });else i = r;
    const n = null == (t = i) ? void 0 : t.attachments,
          o = {
      addFeatureResults: i.addResults ? i.addResults.map(this._createFeatureEditResult, this) : [],
      updateFeatureResults: i.updateResults ? i.updateResults.map(this._createFeatureEditResult, this) : [],
      deleteFeatureResults: i.deleteResults ? i.deleteResults.map(this._createFeatureEditResult, this) : [],
      addAttachmentResults: n && n.addResults ? n.addResults.map(this._createFeatureEditResult, this) : [],
      updateAttachmentResults: n && n.updateResults ? n.updateResults.map(this._createFeatureEditResult, this) : [],
      deleteAttachmentResults: n && n.deleteResults ? n.deleteResults.map(this._createFeatureEditResult, this) : []
    };

    if (i.editMoment && (o.editMoment = i.editMoment), a.length > 0) {
      o.editedFeatureResults = [];

      for (const e of a) {
        const {
          adds: t,
          updates: r,
          deletes: s,
          spatialReference: a
        } = e.editedFeatures,
              i = a ? new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__.default(a) : null;
        o.editedFeatureResults.push({
          layerId: e.id,
          editedFeatures: {
            adds: (null == t ? void 0 : t.map(e => this._createEditedFeature(e, i))) || [],
            updates: (null == r ? void 0 : r.map(e => ({
              original: this._createEditedFeature(e[0], i),
              current: this._createEditedFeature(e[1], i)
            }))) || [],
            deletes: (null == s ? void 0 : s.map(e => this._createEditedFeature(e, i))) || [],
            spatialReference: i
          }
        });
      }
    }

    return o;
  }

  _createEditedFeature(e, r) {
    return new _Graphic_js__WEBPACK_IMPORTED_MODULE_3__.default({
      attributes: e.attributes,
      geometry: (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_19__.fromJSON)({ ...e.geometry,
        spatialReference: r
      })
    });
  }

  _createFeatureEditResult(e) {
    const t = !0 === e.success ? null : e.error || {
      code: void 0,
      description: void 0
    };
    return {
      objectId: e.objectId,
      globalId: e.globalId,
      error: t ? new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("feature-layer-source:edit-failure", t.description, {
        code: t.code
      }) : null
    };
  }

  _createAttachmentErrorResult(e, t) {
    const r = t.details.messages && t.details.messages[0] || t.message,
          s = t.details.httpStatus || t.details.messageCode;
    return {
      objectId: e,
      globalId: null,
      error: new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__.default("feature-layer-source:attachment-failure", r, {
        code: s
      })
    };
  }

  _getFormDataForAttachment(e, t) {
    const r = e instanceof FormData ? e : e && e.elements ? new FormData(e) : null;
    if (r) for (const s in t) {
      const e = t[s];
      null != e && (r.set ? r.set(s, e) : r.append(s, e));
    }
    return r;
  }

  _getLayerRequestOptions(e = {}) {
    const {
      parsedUrl: t,
      gdbVersion: r,
      dynamicDataSource: s
    } = this.layer;
    return { ...e,
      query: {
        gdbVersion: r,
        layer: s ? JSON.stringify({
          source: s
        }) : void 0,
        ...t.query,
        f: "json",
        ...this._createRequestQueryOptions(e)
      },
      responseType: "json"
    };
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()], S.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  constructOnly: !0
})], S.prototype, "layer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({
  readOnly: !0
})], S.prototype, "queryTask", null), S = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_17__.subclass)("esri.layers.graphics.sources.FeatureLayerSource")], S);
const E = S;


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
//# sourceMappingURL=2087.dcabcc362c04f6f387c5.js.map