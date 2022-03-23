"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[2992],{

/***/ 92992:
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/FeatureFilter.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingRect.js */ 7401);
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../geometry/support/boundsUtils.js */ 15783);
/* harmony import */ var _layers_graphics_data_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../layers/graphics/data/spatialQuerySupport.js */ 75736);
/* harmony import */ var _layers_graphics_data_timeSupport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../layers/graphics/data/timeSupport.js */ 808);
/* harmony import */ var _layers_graphics_data_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../layers/graphics/data/utils.js */ 27939);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../rest/support/Query.js */ 37995);
/* harmony import */ var _FeatureStore2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FeatureStore2D.js */ 67906);
/* harmony import */ var _whereUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./whereUtils.js */ 97910);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/











const m = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),
      _ = 1,
      p = 2;

class y {
  constructor(t) {
    this._geometryBounds = (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__.create)(), this._idToVisibility = new Map(), this._serviceInfo = t;
  }

  get hash() {
    return this._hash;
  }

  check(t) {
    return this._applyFilter(t);
  }

  clear() {
    const t = this._resetAllHiddenIds();

    return this.update(), {
      show: t,
      hide: []
    };
  }

  invalidate() {
    this._idToVisibility.forEach((t, e) => {
      this._idToVisibility.set(e, 0);
    });
  }

  setKnownIds(t) {
    for (const e of t) this._idToVisibility.set(e, _);
  }

  setTrue(t) {
    const e = [],
          i = [],
          s = new Set(t);
    return this._idToVisibility.forEach((t, r) => {
      const o = !!(this._idToVisibility.get(r) & _),
            h = s.has(r);
      !o && h ? e.push(r) : o && !h && i.push(r), this._idToVisibility.set(r, h ? _ | p : 0);
    }), {
      show: e,
      hide: i
    };
  }

  createQuery() {
    const {
      geometry: t,
      spatialRel: e,
      where: i,
      timeExtent: s,
      objectIds: r
    } = this;
    return _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_9__.default.fromJSON({
      geometry: t,
      spatialRel: e,
      where: i,
      timeExtent: s,
      objectIds: r
    });
  }

  update(t, e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this._hash = JSON.stringify(t);
      const i = yield (0,_layers_graphics_data_utils_js__WEBPACK_IMPORTED_MODULE_8__.normalizeQueryLike)(t, null, e);
      yield Promise.all([_this._setGeometryFilter(i), _this._setIdFilter(i), _this._setAttributeFilter(i), _this._setTimeFilter(i)]);
    })();
  }

  _setAttributeFilter(t) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!t || !t.where) return _this2._clause = null, void (_this2.where = null);
      _this2._clause = yield (0,_whereUtils_js__WEBPACK_IMPORTED_MODULE_11__.createWhereClause)(t.where, _this2._serviceInfo.fieldsIndex), _this2.where = t.where;
    })();
  }

  _setIdFilter(t) {
    this._idsToShow = t && t.objectIds && new Set(t.objectIds), this._idsToHide = t && t.hiddenIds && new Set(t.hiddenIds), this.objectIds = t && t.objectIds;
  }

  _setGeometryFilter(t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!t || !t.geometry) return _this3._spatialQueryOperator = null, _this3.geometry = null, void (_this3.spatialRel = null);
      const e = t.geometry,
            i = t.spatialRel || "esriSpatialRelIntersects",
            s = yield (0,_layers_graphics_data_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_6__.getSpatialQueryOperator)(i, e, _this3._serviceInfo.geometryType, _this3._serviceInfo.hasZ, _this3._serviceInfo.hasM);
      (0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_5__.getBoundsXY)(_this3._geometryBounds, e), _this3._spatialQueryOperator = s, _this3.geometry = e, _this3.spatialRel = i;
    })();
  }

  _setTimeFilter(e) {
    if (this.timeExtent = this._timeOperator = null, e && e.timeExtent) if (this._serviceInfo.timeInfo) this.timeExtent = e.timeExtent, this._timeOperator = (0,_layers_graphics_data_timeSupport_js__WEBPACK_IMPORTED_MODULE_7__.getTimeOperator)(this._serviceInfo.timeInfo, e.timeExtent, _FeatureStore2D_js__WEBPACK_IMPORTED_MODULE_10__.featureAdapter);else {
      const i = new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("feature-layer-view:time-filter-not-available", "Unable to apply time filter, as layer doesn't have time metadata.", e.timeExtent);
      m.error(i);
    }
  }

  _applyFilter(t) {
    return this._filterByGeometry(t) && this._filterById(t) && this._filterByTime(t) && this._filterByExpression(t);
  }

  _filterByExpression(t) {
    return !this.where || this._clause(t);
  }

  _filterById(t) {
    return (!this._idsToHide || !this._idsToHide.size || !this._idsToHide.has(t.getObjectId())) && (!this._idsToShow || !this._idsToShow.size || this._idsToShow.has(t.getObjectId()));
  }

  _filterByGeometry(t) {
    if (!this.geometry) return !0;
    const e = t.readHydratedGeometry();
    return !!e && this._spatialQueryOperator(e);
  }

  _filterByTime(t) {
    return !(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(this._timeOperator) || this._timeOperator(t);
  }

  _resetAllHiddenIds() {
    const t = [];
    return this._idToVisibility.forEach((e, i) => {
      e & _ || (this._idToVisibility.set(i, _), t.push(i));
    }), t;
  }

}



/***/ }),

/***/ 97910:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/whereUtils.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWhereClause": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ 22345);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


const t = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri.views.2d.layers.features.support.whereUtils"),
      a = {
  getAttribute: (e, r) => e.field(r)
};

function s(_x, _x2) {
  return _s.apply(this, arguments);
}

function _s() {
  _s = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, s) {
    const n = yield __webpack_require__.e(/*! import() */ 6422).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../../core/sql/WhereClause.js */ 36422));

    try {
      const o = n.WhereClause.create(r, s);

      if (!o.isStandardized) {
        const r = new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("mapview - bad input", "Unable to apply filter's definition expression, as expression is not standardized.", o);
        t.error(r);
      }

      return e => {
        const r = e.readArcadeFeature();
        return o.testFeature(r, a);
      };
    } catch (o) {
      return t.warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", r), e => !0;
    }
  });
  return _s.apply(this, arguments);
}



/***/ })

}]);
//# sourceMappingURL=2992.4b5c79515ce5ed4aad54.js.map