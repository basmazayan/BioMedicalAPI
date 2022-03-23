"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[2763],{

/***/ 72763:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/WFSSourceWorker.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../featureConversionUtils.js */ 42187);
/* harmony import */ var _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/FeatureStore.js */ 49685);
/* harmony import */ var _data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/projectionSupport.js */ 79371);
/* harmony import */ var _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/QueryEngine.js */ 43971);
/* harmony import */ var _geojson_geojson_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./geojson/geojson.js */ 98254);
/* harmony import */ var _support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/sourceUtils.js */ 6035);
/* harmony import */ var _ogc_wfsUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ogc/wfsUtils.js */ 42225);
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../support/FieldsIndex.js */ 62419);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/














class E {
  constructor() {
    var _this = this;

    this._queryEngine = null, this._customParameters = null, this._snapshotFeatures = /*#__PURE__*/function () {
      var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
        const {
          objectIdField: t
        } = _this._queryEngine,
              s = yield (0,_ogc_wfsUtils_js__WEBPACK_IMPORTED_MODULE_12__.getFeature)(_this._getFeatureUrl, _this._featureType.typeName, _this._getFeatureOutputFormat, {
          customParameters: _this._customParameters,
          dateFields: _this._queryEngine.fieldsIndex.dateFields.map(e => e.name),
          signal: e
        });
        yield (0,_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_10__.validateGeoJSON)(s), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(e);

        const i = (0,_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_10__.createOptimizedFeatures)(s, {
          geometryType: _this._queryEngine.geometryType,
          hasZ: !1,
          objectIdField: t
        });

        if (!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__.equals)(_this._queryEngine.spatialReference, _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__.WGS84)) for (const a of i) (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(a.geometry) && (a.geometry = (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__.convertFromGeometry)((0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__.project)((0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__.convertToGeometry)(a.geometry, _this._queryEngine.geometryType, !1, !1), _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__.WGS84, _this._queryEngine.spatialReference)));
        let n = 1;

        for (const r of i) {
          const e = {};
          (0,_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_11__.mixAttributes)(_this._fieldsIndex, e, r.attributes, !0), r.attributes = e, null == r.attributes[t] && (r.objectId = r.attributes[t] = n++);
        }

        return i;
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }

  destroy() {
    var e;
    null == (e = this._queryEngine) || e.destroy(), this._queryEngine = null;
  }

  load(e, t) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        getFeatureUrl: r,
        getFeatureOutputFormat: i,
        spatialReference: n,
        fields: o,
        geometryType: u,
        featureType: p,
        objectIdField: h,
        customParameters: l
      } = e;
      _this2._featureType = p, _this2._customParameters = l, _this2._getFeatureUrl = r, _this2._getFeatureOutputFormat = i, _this2._fieldsIndex = new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_13__.default(o), yield _this2._checkProjection(n), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(t), _this2._queryEngine = new _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_9__.default({
        fields: o,
        geometryType: u,
        hasM: !1,
        hasZ: !1,
        objectIdField: h,
        spatialReference: n,
        timeInfo: null,
        featureStore: new _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_7__.default({
          geometryType: u,
          hasM: !1,
          hasZ: !1
        })
      });
      const c = yield _this2._snapshotFeatures((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.unwrap)(t.signal));
      return _this2._queryEngine.featureStore.addMany(c), {
        extent: _this2._queryEngine.fullExtent
      };
    })();
  }

  applyEdits() {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("wfs-source:editing-not-supported", "applyEdits() is not supported on WFSLayer");
    })();
  }

  queryFeatures(e = {}, t = {}) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this3._waitSnapshotComplete(), _this3._queryEngine.executeQuery(e, t.signal);
    })();
  }

  queryFeatureCount(e = {}, t = {}) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this4._waitSnapshotComplete(), _this4._queryEngine.executeQueryForCount(e, t.signal);
    })();
  }

  queryObjectIds(e = {}, t = {}) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this5._waitSnapshotComplete(), _this5._queryEngine.executeQueryForIds(e, t.signal);
    })();
  }

  queryExtent(e = {}, t = {}) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this6._waitSnapshotComplete(), _this6._queryEngine.executeQueryForExtent(e, t.signal);
    })();
  }

  querySnapping(e, t = {}) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this7._waitSnapshotComplete(), _this7._queryEngine.executeQueryForSnapping(e, t.signal);
    })();
  }

  refresh(r) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var s;
      return _this8._customParameters = r, null == (s = _this8._snapshotTask) || s.abort(), _this8._snapshotTask = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.createTask)(_this8._snapshotFeatures), _this8._snapshotTask.promise.then(e => {
        _this8._queryEngine.featureStore.clear(), e && _this8._queryEngine.featureStore.addMany(e);
      }, r => {
        _this8._queryEngine.featureStore.clear(), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAbortError)(r) || _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri.layers.WFSLayer").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("wfs-layer:getfeature-error", "An error occurred during the GetFeature request", {
          error: r
        }));
      }), yield _this8._waitSnapshotComplete(), {
        extent: _this8._queryEngine.fullExtent
      };
    })();
  }

  _waitSnapshotComplete() {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this9._snapshotTask && !_this9._snapshotTask.finished) {
        try {
          yield _this9._snapshotTask.promise;
        } catch {}

        return _this9._waitSnapshotComplete();
      }
    })();
  }

  _checkProjection(t) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        yield (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__.checkProjectionSupport)(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__.WGS84, t);
      } catch {
        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("unsupported-projection", "Projection not supported", {
          spatialReference: t
        });
      }
    })();
  }

}



/***/ })

}]);
//# sourceMappingURL=2763.68e42d6878168ccae54d.js.map