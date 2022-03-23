"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[3566],{

/***/ 33566:
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/geojson/GeoJSONSourceWorker.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ C)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../featureConversionUtils.js */ 42187);
/* harmony import */ var _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/FeatureStore.js */ 49685);
/* harmony import */ var _data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/projectionSupport.js */ 79371);
/* harmony import */ var _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../data/QueryEngine.js */ 43971);
/* harmony import */ var _geojson_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./geojson.js */ 98254);
/* harmony import */ var _support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/clientSideDefaults.js */ 45033);
/* harmony import */ var _support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../support/sourceUtils.js */ 6035);
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../support/FieldsIndex.js */ 62419);
/* harmony import */ var _support_fieldType_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../support/fieldType.js */ 34309);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../support/fieldUtils.js */ 81451);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/

















const O = {
  hasAttachments: !1,
  capabilities: "query, editing, create, delete, update",
  useStandardizedQueries: !0,
  supportsCoordinatesQuantization: !0,
  supportsReturningQueryGeometry: !0,
  advancedQueryCapabilities: {
    supportsQueryAttachments: !1,
    supportsStatistics: !0,
    supportsPercentileStatistics: !0,
    supportsReturningGeometryCentroid: !0,
    supportsQueryWithDistance: !0,
    supportsDistinct: !0,
    supportsReturningQueryExtent: !0,
    supportsReturningGeometryProperties: !1,
    supportsHavingClause: !0,
    supportsOrderBy: !0,
    supportsPagination: !0,
    supportsQueryWithResultType: !1,
    supportsSqlExpression: !0,
    supportsDisjointSpatialRel: !0
  }
};

class C {
  constructor() {
    var _this = this;

    this._queryEngine = null, this._snapshotFeatures = /*#__PURE__*/function () {
      var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
        const t = yield _this._fetch(e);
        return _this._createFeatures(t);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }

  destroy() {
    var e;
    null == (e = this._queryEngine) || e.destroy(), this._queryEngine = this._fieldsIndex = this._createDefaultAttributes = null;
  }

  load(e, s = {}) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.loadOptions = {
        url: e.url,
        customParameters: e.customParameters
      };
      const i = [];
      yield _this2._checkProjection(e.spatialReference);
      let r = null;
      e.url && (r = yield _this2._fetch(null == s ? void 0 : s.signal));

      const n = (0,_geojson_js__WEBPACK_IMPORTED_MODULE_12__.inferLayerProperties)(r, {
        geometryType: e.geometryType
      }),
            a = e.fields || n.fields || [],
            l = null != e.hasZ ? e.hasZ : n.hasZ,
            u = n.geometryType,
            d = e.objectIdField || n.objectIdFieldName || "__OBJECTID",
            p = e.spatialReference || _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__.WGS84;

      let c = e.timeInfo;
      a === n.fields && n.unknownFields.length > 0 && i.push({
        name: "geojson-layer:unknown-field-types",
        message: "Some fields types couldn't be inferred from the features and were dropped",
        details: {
          unknownFields: n.unknownFields
        }
      });
      let y = a.find(e => e.name === d);
      y ? ("esriFieldTypeString" !== y.type && (y.type = "esriFieldTypeOID"), y.editable = !1, y.nullable = !1) : (y = {
        alias: d,
        name: d,
        type: "string" === n.objectIdFieldType ? "esriFieldTypeString" : "esriFieldTypeOID",
        editable: !1,
        nullable: !1
      }, a.unshift(y));
      const m = {};

      for (const o of a) {
        if (null == o.name && (o.name = o.alias), null == o.alias && (o.alias = o.name), !o.name) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("geojson-layer:invalid-field-name", "field name is missing", {
          field: o
        });
        if (!_support_fieldType_js__WEBPACK_IMPORTED_MODULE_16__.kebabDict.jsonValues.includes(o.type)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("geojson-layer:invalid-field-type", `invalid type for field "${o.name}"`, {
          field: o
        });

        if (o.name !== y.name) {
          const e = (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_17__.getFieldDefaultValue)(o);
          void 0 !== e && (m[o.name] = e);
        }
      }

      _this2._fieldsIndex = new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_15__.default(a);

      const f = _this2._fieldsIndex.requiredFields.indexOf(y);

      if (f > -1 && _this2._fieldsIndex.requiredFields.splice(f, 1), c) {
        if (c.startTimeField) {
          const e = _this2._fieldsIndex.get(c.startTimeField);

          e ? (c.startTimeField = e.name, e.type = "esriFieldTypeDate") : c.startTimeField = null;
        }

        if (c.endTimeField) {
          const e = _this2._fieldsIndex.get(c.endTimeField);

          e ? (c.endTimeField = e.name, e.type = "esriFieldTypeDate") : c.endTimeField = null;
        }

        if (c.trackIdField) {
          const e = _this2._fieldsIndex.get(c.trackIdField);

          e ? c.trackIdField = e.name : (c.trackIdField = null, i.push({
            name: "geojson-layer:invalid-timeInfo-trackIdField",
            message: "trackIdField is missing",
            details: {
              timeInfo: c
            }
          }));
        }

        c.startTimeField || c.endTimeField || (i.push({
          name: "geojson-layer:invalid-timeInfo",
          message: "startTimeField and endTimeField are missing",
          details: {
            timeInfo: c
          }
        }), c = null);
      }

      const I = u ? (0,_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_13__.createDrawingInfo)(u) : null,
            j = {
        warnings: i,
        featureErrors: [],
        layerDefinition: { ...O,
          drawingInfo: I,
          templates: (0,_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_13__.createDefaultTemplate)(m),
          extent: null,
          geometryType: u,
          objectIdField: d,
          fields: a,
          hasZ: !!l,
          timeInfo: c
        }
      };
      _this2._queryEngine = new _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_11__.default({
        fields: a,
        geometryType: u,
        hasM: !1,
        hasZ: l,
        objectIdField: d,
        spatialReference: p,
        timeInfo: c,
        featureStore: new _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_9__.default({
          geometryType: u,
          hasM: !1,
          hasZ: l
        }),
        cacheSpatialQueries: !0
      }), _this2._createDefaultAttributes = (0,_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_13__.createDefaultAttributesFunction)(m, d);
      const T = yield _this2._createFeatures(r);
      _this2._objectIdGenerator = _this2._createObjectIdGenerator(_this2._queryEngine, T);

      const w = _this2._normalizeFeatures(T, j.warnings, j.featureErrors);

      if (_this2._queryEngine.featureStore.addMany(w), j.layerDefinition.extent = _this2._queryEngine.fullExtent, j.layerDefinition.timeInfo) {
        const {
          start: e,
          end: t
        } = _this2._queryEngine.timeExtent;
        j.layerDefinition.timeInfo.timeExtent = [e, t];
      }

      return j;
    })();
  }

  applyEdits(e) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        spatialReference: t,
        geometryType: s
      } = _this3._queryEngine;
      return yield Promise.all([(0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__.loadGeometryEngineForSimplify)(t, s), (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__.checkProjectionSupport)(e.adds, t), (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__.checkProjectionSupport)(e.updates, t)]), yield _this3._waitSnapshotComplete(), _this3._applyEdits(e);
    })();
  }

  queryFeatures(e = {}, t = {}) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this4._waitSnapshotComplete(), _this4._queryEngine.executeQuery(e, t.signal);
    })();
  }

  queryFeatureCount(e = {}, t = {}) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this5._waitSnapshotComplete(), _this5._queryEngine.executeQueryForCount(e, t.signal);
    })();
  }

  queryObjectIds(e = {}, t = {}) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this6._waitSnapshotComplete(), _this6._queryEngine.executeQueryForIds(e, t.signal);
    })();
  }

  queryExtent(e = {}, t = {}) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this7._waitSnapshotComplete(), _this7._queryEngine.executeQueryForExtent(e, t.signal);
    })();
  }

  querySnapping(e, t = {}) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this8._waitSnapshotComplete(), _this8._queryEngine.executeQueryForSnapping(e, t.signal);
    })();
  }

  refresh(e) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var i;
      return _this9.loadOptions.customParameters = e, null == (i = _this9._snapshotTask) || i.abort(), _this9._snapshotTask = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createTask)(_this9._snapshotFeatures), _this9._snapshotTask.promise.then(e => {
        _this9._queryEngine.featureStore.clear(), _this9._objectIdGenerator = _this9._createObjectIdGenerator(_this9._queryEngine, e);

        const t = _this9._normalizeFeatures(e);

        t && _this9._queryEngine.featureStore.addMany(t);
      }, e => {
        _this9._queryEngine.featureStore.clear(), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.isAbortError)(e) || _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__.default.getLogger("esri.layers.GeoJSONLayer").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("geojson-layer:refresh", "An error occurred during refresh", {
          error: e
        }));
      }), yield _this9._waitSnapshotComplete(), {
        extent: _this9._queryEngine.fullExtent,
        timeExtent: _this9._queryEngine.timeExtent
      };
    })();
  }

  _createFeatures(e) {
    var _this10 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        geometryType: t,
        hasZ: s,
        objectIdField: r
      } = _this10._queryEngine,
            n = (0,_geojson_js__WEBPACK_IMPORTED_MODULE_12__.createOptimizedFeatures)(e, {
        geometryType: t,
        hasZ: s,
        objectIdField: r
      });
      if (!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__.equals)(_this10._queryEngine.spatialReference, _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__.WGS84)) for (const a of n) (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(a.geometry) && (a.geometry = (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__.convertFromGeometry)((0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__.project)((0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__.convertToGeometry)(a.geometry, _this10._queryEngine.geometryType, _this10._queryEngine.hasZ, !1), _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__.WGS84, _this10._queryEngine.spatialReference)));
      return n;
    })();
  }

  _waitSnapshotComplete() {
    var _this11 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this11._snapshotTask && !_this11._snapshotTask.finished) {
        try {
          yield _this11._snapshotTask.promise;
        } catch {}

        return _this11._waitSnapshotComplete();
      }
    })();
  }

  _fetch(t) {
    var _this12 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        url: s,
        customParameters: i
      } = _this12.loadOptions,
            r = (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(s, {
        responseType: "json",
        query: { ...i
        },
        signal: t
      })).data;
      return yield (0,_geojson_js__WEBPACK_IMPORTED_MODULE_12__.validateGeoJSON)(r), r;
    })();
  }

  _normalizeFeatures(e, t, s) {
    const {
      objectIdField: i
    } = this._queryEngine,
          r = [];

    for (const n of e) {
      const e = this._createDefaultAttributes(),
            a = (0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__.mixAttributes)(this._fieldsIndex, e, n.attributes, !0, t);

      a ? null == s || s.push(a) : (this._assignObjectId(e, n.attributes, !0), n.attributes = e, n.objectId = e[i], r.push(n));
    }

    return r;
  }

  _applyEdits(e) {
    const {
      adds: t,
      updates: s,
      deletes: i
    } = e,
          r = {
      addResults: [],
      deleteResults: [],
      updateResults: [],
      uidToObjectId: {}
    };

    if (t && t.length && this._applyAddEdits(r, t), s && s.length && this._applyUpdateEdits(r, s), i && i.length) {
      for (const e of i) r.deleteResults.push((0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__.createFeatureEditSuccessResult)(e));

      this._queryEngine.featureStore.removeManyById(i);
    }

    return {
      extent: this._queryEngine.fullExtent,
      timeExtent: this._queryEngine.timeExtent,
      featureEditResults: r
    };
  }

  _applyAddEdits(e, t) {
    const {
      addResults: s
    } = e,
          {
      geometryType: r,
      hasM: n,
      hasZ: o,
      objectIdField: l,
      spatialReference: u,
      featureStore: d
    } = this._queryEngine,
          c = [];

    for (const p of t) {
      if (p.geometry && r !== (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__.getJsonType)(p.geometry)) {
        s.push((0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__.createFeatureEditErrorResult)("Incorrect geometry type."));
        continue;
      }

      const t = this._createDefaultAttributes(),
            n = (0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__.mixAttributes)(this._fieldsIndex, t, p.attributes);

      if (n) s.push(n);else {
        if (this._assignObjectId(t, p.attributes), p.attributes = t, null != p.uid) {
          const t = p.attributes[l];
          e.uidToObjectId[p.uid] = t;
        }

        (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(p.geometry) && (p.geometry = (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__.project)((0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__.simplify)(p.geometry, u), p.geometry.spatialReference, u)), c.push(p), s.push((0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__.createFeatureEditSuccessResult)(p.attributes[l]));
      }
    }

    d.addMany((0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__.convertFromFeatures)([], c, r, o, n, l));
  }

  _applyUpdateEdits({
    updateResults: e
  }, t) {
    const {
      geometryType: s,
      hasM: r,
      hasZ: n,
      objectIdField: o,
      spatialReference: l,
      featureStore: u
    } = this._queryEngine;

    for (const d of t) {
      const {
        attributes: t,
        geometry: p
      } = d,
            h = t && t[o];

      if (null == h) {
        e.push((0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__.createFeatureEditErrorResult)(`Identifier field ${o} missing`));
        continue;
      }

      if (!u.has(h)) {
        e.push((0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__.createFeatureEditErrorResult)(`Feature with object id ${h} missing`));
        continue;
      }

      const m = (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__.convertToFeature)(u.getFeature(h), s, n, r);

      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(p)) {
        if (s !== (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__.getJsonType)(p)) {
          e.push((0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__.createFeatureEditErrorResult)("Incorrect geometry type."));
          continue;
        }

        m.geometry = (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__.project)((0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__.simplify)(p, l), p.spatialReference, l);
      }

      if (t) {
        const s = (0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__.mixAttributes)(this._fieldsIndex, m.attributes, t);

        if (s) {
          e.push(s);
          continue;
        }
      }

      u.add((0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__.convertFromFeature)(m, s, n, r, o)), e.push((0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_14__.createFeatureEditSuccessResult)(h));
    }
  }

  _createObjectIdGenerator(e, t) {
    const s = e.fieldsIndex.get(e.objectIdField);
    if ("esriFieldTypeString" === s.type) return () => s.name + "-" + Date.now().toString(16);
    let i = Number.NEGATIVE_INFINITY;

    for (const r of t) r.objectId && (i = Math.max(i, r.objectId));

    return i = Math.max(0, i) + 1, () => i++;
  }

  _assignObjectId(e, t, s = !1) {
    const i = this._queryEngine.objectIdField;
    e[i] = s && i in t ? t[i] : this._objectIdGenerator();
  }

  _checkProjection(e) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        yield (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__.checkProjectionSupport)(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__.WGS84, e);
      } catch {
        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("geojson-layer", "Projection not supported");
      }
    })();
  }

}



/***/ }),

/***/ 98254:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/geojson/geojson.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOptimizedFeatures": () => (/* binding */ L),
/* harmony export */   "getGeometryType": () => (/* binding */ i),
/* harmony export */   "inferLayerProperties": () => (/* binding */ T),
/* harmony export */   "validateGeoJSON": () => (/* binding */ O)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ 61414);
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../OptimizedFeature.js */ 56499);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../OptimizedGeometry.js */ 82760);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../support/fieldUtils.js */ 81451);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function i(e){return r[e]}function*s(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function*u(e,o={}){const{geometryType:r,objectIdField:s}=o;for(const u of e){var c;const{geometry:e,properties:l,id:f}=u;if(e&&i(e.type)!==r)continue;const a=l||{};let y=null!=(c=a[s])?c:null;s&&null!=f&&!a[s]&&(a[s]=y=f);const p=new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_1__.default(e?d(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__.default,e,o):null,a,null,y);yield p}}function l(e){for(const t of e)if(t.length>2)return!0;return!1}function f(e){return!y(e)}function a(e){return y(e)}function y(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],r=e[(n+1)%e.length];t+=o[0]*r[1]-r[0]*o[1]}return t<=0}function p(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function d(e,t,n){switch(t.type){case"LineString":return g(e,t,n);case"MultiLineString":return m(e,t,n);case"MultiPoint":return h(e,t,n);case"MultiPolygon":return w(e,t,n);case"Point":return P(e,t,n);case"Polygon":return b(e,t,n)}}function g(e,t,n){return F(e,t.coordinates,n),e}function m(e,t,n){for(const o of t.coordinates)F(e,o,n);return e}function h(e,t,n){return F(e,t.coordinates,n),e}function w(e,t,n){for(const o of t.coordinates){j(e,o[0],n);for(let t=1;t<o.length;t++)S(e,o[t],n)}return e}function P(e,t,n){return M(e,t.coordinates,n),e}function b(e,t,n){const o=t.coordinates;j(e,o[0],n);for(let r=1;r<o.length;r++)S(e,o[r],n);return e}function j(e,t,n){const o=p(t);f(o)?G(e,o,n):F(e,o,n)}function S(e,t,n){const o=p(t);a(o)?G(e,o,n):F(e,o,n)}function F(e,t,n){for(const o of t)M(e,o,n);e.lengths.push(t.length)}function G(e,t,n){for(let o=t.length-1;o>=0;o--)M(e,t[o],n);e.lengths.push(t.length)}function M(e,t,n){const[o,r,i]=t;e.coords.push(o,r),n.hasZ&&e.coords.push(i||0)}function k(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function O(t){if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==t.type&&"FeatureCollection"!==t.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:n}=t;if(!n)return;const o="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!r.test(o))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function T(e,t={}){const n=[],r=new Set,u=new Set;let f,a=!1,y=null,p=!1,{geometryType:d=null}=t,g=!1;for(const o of s(e)){const{geometry:e,properties:t,id:s}=o;if(!e||(d||(d=i(e.type)),i(e.type)===d)){if(!a){a=l(c(e))}if(p||(p=null!=s,p&&(f=typeof s,y=Object.keys(t).filter((e=>t[e]===s)))),p&&null!=s&&(y.length>1?y=y.filter((e=>t[e]===s)):1===y.length&&(y=t[y[0]]===s?y:[])),!g&&t){let e=!0;for(const o in t){if(r.has(o))continue;const i=t[o];if(null==i){e=!1,u.add(o);continue}const s=k(i);"unknown"!==s?(u.delete(o),r.add(o),n.push({name:o,alias:o,type:s})):u.add(o)}g=e}}}const m=y&&1===y.length&&y[0]||null;if(m)for(const i of n)if(i.name===m&&(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__.isNumericField)(i)){i.type="esriFieldTypeOID";break}return{fields:n,geometryType:d,hasZ:a,objectIdFieldName:m,objectIdFieldType:f,unknownFields:Array.from(u)}}function L(e,t){return Array.from(u(s(e),t))}


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
//# sourceMappingURL=3566.63b3bc9797862783a63d.js.map