"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[3971],{

/***/ 32122:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/sql/WhereClauseCache.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhereClauseCache": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _ItemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ItemCache.js */ 97486);
/* harmony import */ var _WhereClause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WhereClause.js */ 36422);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c{constructor(e,c){this._cache=new _ItemCache_js__WEBPACK_IMPORTED_MODULE_0__.default(e),this._invalidCache=new _ItemCache_js__WEBPACK_IMPORTED_MODULE_0__.default(c)}get(t,c){const i=`${c.uid}:${t}`,r=this._cache.get(i);if(r)return r;if(void 0!==this._invalidCache.get(i))return null;try{const r=_WhereClause_js__WEBPACK_IMPORTED_MODULE_1__.WhereClause.create(t,c);return this._cache.put(i,r),r}catch{return this._invalidCache.put(i,null),null}}}


/***/ }),

/***/ 93213:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/AttributesBuilder.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributeSupport.js */ 12211);
/* harmony import */ var _statistics_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../statistics/utils.js */ 92394);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(t,a,r){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=t.returnDistinctValues,this.fieldsIndex=r,this.featureAdapter=a;const l=t.outFields;if(l&&-1===l.indexOf("*")){this.outFields=l;let t=0;for(const a of l){const l=(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__.getExpressionFromFieldName)(a),u=this.fieldsIndex.get(l),n=u?null:(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__.getWhereClause)(l,r),c=u?u.name:(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__.getAliasFromFieldName)(a)||"FIELD_EXP_"+t++;this._fieldDataCache.set(a,{alias:c,clause:n})}}}countDistinctValues(t){return this.returnDistinctValues?(t.forEach((t=>this.getAttributes(t))),this._returnDistinctMap.size):t.length}getAttributes(t){const e=this._processAttributesForOutFields(t);return this._processAttributesForDistinctValues(e)}getFieldValue(t,e,i){const a=i?i.name:e;let r=null;return this._fieldDataCache.has(a)?r=this._fieldDataCache.get(a).clause:i||(r=(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__.getWhereClause)(e,this.fieldsIndex),this._fieldDataCache.set(a,{alias:a,clause:r})),i?this.featureAdapter.getAttribute(t,a):r.calculateValue(t,this.featureAdapter)}getNormalizedValue(t,e){const s=e.normalizationType,i=e.normalizationTotal;let r=this.getFieldValue(t,e.field,e.fieldInfo);if(s&&Number.isFinite(r)){const l=this.getFieldValue(t,e.normalizationField,e.normalizationFieldInfo);r=(0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_2__.getNormalizedValue)(r,s,l,i)}return r}getExpressionValue(t,e,s){const i={attributes:this.featureAdapter.getAttributes(t)},a=s.createExecContext(i,e.viewInfo);return s.executeFunction(e.compiledFunc,a)}validateItem(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__.getWhereClause)(e,this.fieldsIndex)}),this._fieldDataCache.get(e).clause.testFeature(t,this.featureAdapter)}validateItems(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__.getWhereClause)(e,this.fieldsIndex)}),this._fieldDataCache.get(e).clause.testSet(t,this.featureAdapter)}_processAttributesForOutFields(t){const e=this.outFields;if(!e||!e.length)return this.featureAdapter.getAttributes(t);const s={};for(const i of e){const{alias:e,clause:a}=this._fieldDataCache.get(i);s[e]=a?a.calculateValue(t,this.featureAdapter):this.featureAdapter.getAttribute(t,e)}return s}_processAttributesForDistinctValues(e){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(e)||!this.returnDistinctValues)return e;const s=this.outFields,i=[];if(s)for(const t of s){const{alias:s}=this._fieldDataCache.get(t);i.push(e[s])}else for(const t in e)i.push(e[t]);const a=`${(s||["*"]).join(",")}=${i.join(",")}`;let r=this._returnDistinctMap.get(a)||0;return this._returnDistinctMap.set(a,++r),r>1?null:e}}


/***/ }),

/***/ 43971:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/QueryEngine.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Feature": () => (/* binding */ Z),
/* harmony export */   "default": () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/lang.js */ 60161);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_MemCache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/MemCache.js */ 20834);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/unitUtils.js */ 55612);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingBox.js */ 61164);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ 7401);
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../geometry/support/boundsUtils.js */ 15783);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../geometry/support/normalizeUtils.js */ 46010);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _attributeSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./attributeSupport.js */ 12211);
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projectionSupport.js */ 79371);
/* harmony import */ var _QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./QueryEngineCapabilities.js */ 91343);
/* harmony import */ var _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./QueryEngineResult.js */ 18341);
/* harmony import */ var _spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./spatialQuerySupport.js */ 75736);
/* harmony import */ var _timeSupport_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./timeSupport.js */ 808);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils.js */ 27939);
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../support/FieldsIndex.js */ 62419);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../support/arcadeOnDemand.js */ 2999);
/* harmony import */ var _views_support_Scheduler_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../views/support/Scheduler.js */ 45877);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






















function U(e) {
  return e.every(e => "exceedslimit" !== e.statisticType);
}

const N = "feature-store:unsupported-query";

class Z {
  constructor(e, t = null, i, s, r) {
    this.attributes = e, this.geometry = i, this.centroid = s, this.filterFlags = r, this.groupId = -1, this.displayId = t;
  }

}

const H = new Set(),
      D = new _core_MemCache_js__WEBPACK_IMPORTED_MODULE_4__.MemCacheStorage(2e6);
let J = 0;

class L {
  constructor(e) {
    this.capabilities = {
      query: _QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_14__.queryCapabilities
    }, this.geometryType = e.geometryType, this.hasM = e.hasM, this.hasZ = e.hasZ, this.objectIdField = e.objectIdField, this.spatialReference = e.spatialReference, this.definitionExpression = e.definitionExpression, this.featureStore = e.featureStore, this.aggregateAdapter = e.aggregateAdapter, this._changeHandle = this.featureStore.events.on("changed", () => this.clearCache()), this.timeInfo = e.timeInfo, e.cacheSpatialQueries && (this._geometryQueryCache = new _core_MemCache_js__WEBPACK_IMPORTED_MODULE_4__.MemCache(J++ + "$$", D)), this.fieldsIndex = new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_19__.default(e.fields), e.scheduler && e.priority && (this._frameTask = e.scheduler.registerTask(e.priority));
  }

  destroy() {
    this._frameTask = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.removeMaybe)(this._frameTask), this.clearCache(), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.destroyMaybe)(this._geometryQueryCache), this._changeHandle = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.removeMaybe)(this._changeHandle), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.destroyMaybe)(this.fieldsIndex);
  }

  get featureAdapter() {
    return this.featureStore.featureAdapter;
  }

  get fullExtent() {
    const e = this.featureStore.fullBounds;
    return e ? {
      xmin: e[0],
      ymin: e[1],
      xmax: e[2],
      ymax: e[3],
      spatialReference: (0,_utils_js__WEBPACK_IMPORTED_MODULE_18__.cleanFromGeometryEngine)(this.spatialReference)
    } : null;
  }

  get timeExtent() {
    return this.timeInfo ? (this._timeExtent || (this._timeExtent = (0,_timeSupport_js__WEBPACK_IMPORTED_MODULE_17__.getTimeExtent)(this.timeInfo, this.featureStore)), this._timeExtent) : null;
  }

  clearCache() {
    this._geometryQueryCache && this._geometryQueryCache.clear(), this._allItems = null, this._timeExtent = null;
  }

  executeQuery(e = {}, i) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let s,
          r = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(e);

      try {
        r = yield _this._schedule(() => (0,_utils_js__WEBPACK_IMPORTED_MODULE_18__.normalizeQuery)(r, _this.definitionExpression, _this.spatialReference), i), r = yield _this._reschedule(() => _this._checkQuerySupport(r), i), s = yield _this._reschedule(() => _this._executeGeometryQuery(r, i), i), s = yield _this._reschedule(() => s.executeAggregateIdsQuery(r), i), s = yield _this._reschedule(() => s.executeObjectIdsQuery(r), i), s = yield _this._reschedule(() => s.executeTimeQuery(r), i), s = yield _this._reschedule(() => s.executeAttributesQuery(r), i);
      } catch (a) {
        if (a !== _utils_js__WEBPACK_IMPORTED_MODULE_18__.QUERY_ENGINE_EMPTY_RESULT) throw a;
        s = new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_15__.default([], null, _this);
      }

      return s.createQueryResponse(r);
    })();
  }

  executeQueryForCount(e = {}, i) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let s = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(e);
      s.returnGeometry = !1, s.returnCentroid = !1, s.outSR = null;

      try {
        s = yield _this2._schedule(() => (0,_utils_js__WEBPACK_IMPORTED_MODULE_18__.normalizeQuery)(s, _this2.definitionExpression, _this2.spatialReference), i), s = yield _this2._reschedule(() => _this2._checkQuerySupport(s), i);
        let e = yield _this2._reschedule(() => _this2._executeGeometryQuery(s, i), i);
        return e = yield _this2._reschedule(() => e.executeAggregateIdsQuery(s), i), e = yield _this2._reschedule(() => e.executeObjectIdsQuery(s), i), e = yield _this2._reschedule(() => e.executeTimeQuery(s), i), e = yield _this2._reschedule(() => e.executeAttributesQuery(s), i), e.createQueryResponseForCount(s);
      } catch (r) {
        if (r !== _utils_js__WEBPACK_IMPORTED_MODULE_18__.QUERY_ENGINE_EMPTY_RESULT) throw r;
        return 0;
      }
    })();
  }

  executeQueryForExtent(e = {}, i) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let s,
          r = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(e);
      const a = r.outSR;

      try {
        r = yield _this3._schedule(() => (0,_utils_js__WEBPACK_IMPORTED_MODULE_18__.normalizeQuery)(r, _this3.definitionExpression, _this3.spatialReference), i), r = yield _this3._reschedule(() => _this3._checkQuerySupport(r), i), r.returnGeometry = !0, r.returnCentroid = !1, r.outSR = null, s = yield _this3._reschedule(() => _this3._executeGeometryQuery(r, i), i), s = yield _this3._reschedule(() => s.executeAggregateIdsQuery(r), i), s = yield _this3._reschedule(() => s.executeObjectIdsQuery(r), i), s = yield _this3._reschedule(() => s.executeTimeQuery(r), i), s = yield _this3._reschedule(() => s.executeAttributesQuery(r), i);
        const e = s.size;
        if (!e) return {
          count: e,
          extent: null
        };
        (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__.set)($, _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__.NEGATIVE_INFINITY), _this3.featureStore.forEachBounds(s.items, e => (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__.expandWithAABB)($, e), V);
        const t = {
          xmin: $[0],
          ymin: $[1],
          xmax: $[3],
          ymax: $[4],
          spatialReference: (0,_utils_js__WEBPACK_IMPORTED_MODULE_18__.cleanFromGeometryEngine)(_this3.spatialReference)
        };
        _this3.hasZ && isFinite($[2]) && isFinite($[5]) && (t.zmin = $[2], t.zmax = $[5]);
        const n = (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_13__.project)(t, s.spatialReference, a);

        if (n.spatialReference = (0,_utils_js__WEBPACK_IMPORTED_MODULE_18__.cleanFromGeometryEngine)(a || _this3.spatialReference), n.xmax - n.xmin == 0) {
          const e = (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__.getMetersPerUnitForSR)(n.spatialReference);
          n.xmin -= e, n.xmax += e;
        }

        if (n.ymax - n.ymin == 0) {
          const e = (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__.getMetersPerUnitForSR)(n.spatialReference);
          n.ymin -= e, n.ymax += e;
        }

        if (_this3.hasZ && null != n.zmin && null != n.zmax && n.zmax - n.zmin == 0) {
          const e = (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__.getMetersPerUnitForSR)(n.spatialReference);
          n.zmin -= e, n.zmax += e;
        }

        return {
          count: e,
          extent: n
        };
      } catch (n) {
        if (n === _utils_js__WEBPACK_IMPORTED_MODULE_18__.QUERY_ENGINE_EMPTY_RESULT) return {
          count: 0,
          extent: null
        };
        throw n;
      }
    })();
  }

  executeQueryForIds(e = {}, t) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this4.executeQueryForIdSet(e, t).then(e => Array.from(e));
    })();
  }

  executeQueryForIdSet(e = {}, i) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let s,
          r = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(e);
      r.returnGeometry = !1, r.returnCentroid = !1, r.outSR = null;

      try {
        r = yield _this5._schedule(() => (0,_utils_js__WEBPACK_IMPORTED_MODULE_18__.normalizeQuery)(r, _this5.definitionExpression, _this5.spatialReference), i), r = yield _this5._reschedule(() => _this5._checkQuerySupport(r), i), s = yield _this5._reschedule(() => _this5._executeGeometryQuery(r, i), i), s = yield _this5._reschedule(() => s.executeAggregateIdsQuery(r), i), s = yield _this5._reschedule(() => s.executeObjectIdsQuery(r), i), s = yield _this5._reschedule(() => s.executeTimeQuery(r), i), s = yield _this5._reschedule(() => s.executeAttributesQuery(r), i);
        const e = s.items,
              t = new Set();
        return yield _this5._reschedule(() => {
          for (const i of e) t.add(s.featureAdapter.getObjectId(i));
        }, i), t;
      } catch (a) {
        if (a === _utils_js__WEBPACK_IMPORTED_MODULE_18__.QUERY_ENGINE_EMPTY_RESULT) return new Set();
        throw a;
      }
    })();
  }

  executeQueryForSnapping(e, t) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        point: i,
        distance: s,
        types: a
      } = e;
      if (0 === a) return {
        candidates: []
      };
      const n = yield _this6._reschedule(() => _this6._checkQuerySupport(e.query), t),
            u = !(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__.equals)(i.spatialReference, _this6.spatialReference);
      u && (yield (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_13__.checkProjectionSupport)(i.spatialReference, _this6.spatialReference));
      const o = "number" == typeof s ? s : s.x,
            c = "number" == typeof s ? s : s.y,
            h = {
        xmin: i.x - o,
        xmax: i.x + o,
        ymin: i.y - c,
        ymax: i.y + c,
        spatialReference: i.spatialReference
      },
            l = u ? (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_13__.project)(h, _this6.spatialReference) : h;
      if (!l) return {
        candidates: []
      };
      const p = (yield (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_10__.normalizeCentralMeridian)((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.fromJSON)(i), null, {
        signal: t
      }))[0],
            d = (yield (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_10__.normalizeCentralMeridian)((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.fromJSON)(l), null, {
        signal: t
      }))[0];
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(p) || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(d)) return {
        candidates: []
      };
      let y = new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_15__.default(_this6._searchFeatures(_this6._getQueryBBoxes(d.toJSON())), null, _this6);
      y = yield _this6._reschedule(() => y.executeObjectIdsQuery(n), t), y = yield _this6._reschedule(() => y.executeTimeQuery(n), t), y = yield _this6._reschedule(() => y.executeAttributesQuery(n), t);

      const m = p.toJSON(),
            f = u ? (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_13__.project)(m, _this6.spatialReference) : m,
            _ = u ? Math.max(l.xmax - l.xmin, l.ymax - l.ymin) / 2 : s;

      return y.createSnappingResponse({ ...e,
        point: f,
        distance: _
      }, i.spatialReference);
    })();
  }

  executeQueryForLatestObservations(i = {}, s) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this7.timeInfo || !_this7.timeInfo.trackIdField) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default(N, "Missing timeInfo or timeInfo.trackIdField", {
        query: i,
        timeInfo: _this7.timeInfo
      });
      let r,
          a = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(i);

      try {
        a = yield _this7._schedule(() => (0,_utils_js__WEBPACK_IMPORTED_MODULE_18__.normalizeQuery)(a, _this7.definitionExpression, _this7.spatialReference), s), a = yield _this7._reschedule(() => _this7._checkQuerySupport(a), s), r = yield _this7._reschedule(() => _this7._executeGeometryQuery(a, s), s), r = yield _this7._reschedule(() => r.executeAggregateIdsQuery(a), s), r = yield _this7._reschedule(() => r.executeObjectIdsQuery(a), s), r = yield _this7._reschedule(() => r.executeTimeQuery(a), s), r = yield _this7._reschedule(() => r.executeAttributesQuery(a), s), r = yield _this7._reschedule(() => r.filterLatest(), s);
      } catch (n) {
        if (n !== _utils_js__WEBPACK_IMPORTED_MODULE_18__.QUERY_ENGINE_EMPTY_RESULT) throw n;
        r = new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_15__.default([], null, _this7);
      }

      return r.createQueryResponse(a);
    })();
  }

  executeQueryForSummaryStatistics(e = {}, t, i) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        field: s,
        normalizationField: r,
        valueExpression: a
      } = t;
      return (yield _this8._getQueryEngineResultForStats(e, {
        field: s,
        normalizationField: r,
        valueExpression: a
      }, i)).createSummaryStatisticsResponse(e, t);
    })();
  }

  executeQueryForUniqueValues(e = {}, t, i) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        field: s,
        valueExpression: r
      } = t;
      return (yield _this9._getQueryEngineResultForStats(e, {
        field: s,
        valueExpression: r
      }, i)).createUniqueValuesResponse(e, t);
    })();
  }

  executeQueryForClassBreaks(e = {}, t, i) {
    var _this10 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        field: s,
        normalizationField: r,
        valueExpression: a
      } = t;
      return (yield _this10._getQueryEngineResultForStats(e, {
        field: s,
        normalizationField: r,
        valueExpression: a
      }, i)).createClassBreaksResponse(e, t);
    })();
  }

  executeQueryForHistogram(e = {}, t, i) {
    var _this11 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        field: s,
        normalizationField: r,
        valueExpression: a
      } = t;
      return (yield _this11._getQueryEngineResultForStats(e, {
        field: s,
        normalizationField: r,
        valueExpression: a
      }, i)).createHistogramResponse(e, t);
    })();
  }

  _schedule(e, t) {
    var _this12 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(_this12._frameTask) ? _this12._frameTask.schedule(e, t) : e(_views_support_Scheduler_js__WEBPACK_IMPORTED_MODULE_21__.noBudget);
    })();
  }

  _reschedule(e, t) {
    var _this13 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(_this13._frameTask) ? _this13._frameTask.reschedule(e, t) : e(_views_support_Scheduler_js__WEBPACK_IMPORTED_MODULE_21__.noBudget);
    })();
  }

  _getAll() {
    if (!this._allItems) {
      const e = [];
      this.featureStore.forEach(t => e.push(t)), this._allItems = new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_15__.default(e, null, this);
    }

    return this._allItems;
  }

  _executeGeometryQuery(e, t) {
    var _this14 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        geometry: i,
        outSR: s,
        spatialRel: r,
        returnGeometry: a,
        returnCentroid: u
      } = e,
            o = a || u,
            c = (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__.isValid)(s) && !(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__.equals)(_this14.spatialReference, s),
            h = _this14._geometryQueryCache ? c && o ? JSON.stringify({
        geometry: i,
        spatialRelationship: r,
        outSpatialReference: s
      }) : JSON.stringify({
        geometry: i,
        spatialRelationship: r
      }) : null;

      if (h) {
        const e = _this14._geometryQueryCache.get(h);

        if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isUndefined)(e)) return e;
      }

      const l = /*#__PURE__*/function () {
        var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
          if (c && o) {
            const t = yield e.project(s);
            return h && _this14._geometryQueryCache.put(h, t, t.size || 1), t;
          }

          return h && _this14._geometryQueryCache.put(h, e, e.size || 1), e;
        });

        return function l(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      if (!i) return l(_this14._getAll());
      const p = _this14.featureAdapter;

      if ("esriSpatialRelDisjoint" === r) {
        const e = _this14._searchFeatures(_this14._getQueryBBoxes(i));

        if (!e.length) return l(_this14._getAll());
        let s, a;
        const n = new Set();

        for (const t of e) n.add(p.getObjectId(t));

        yield _this14._reschedule(() => {
          let e = 0;
          s = new Array(n.size), _this14.featureStore.forEach(t => s[e++] = t), a = n;
        }, t);
        const u = yield _this14._reschedule( /*#__PURE__*/(0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
          const e = yield (0,_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__.getSpatialQueryOperator)(r, i, _this14.geometryType, _this14.hasZ, _this14.hasM),
                n = t => !a.has(p.getObjectId(t)) || e(p.getGeometry(t));

          return new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_15__.default(yield _this14._runSpatialFilter(s, n, t), i, _this14);
        }), t);
        return l(u);
      }

      const d = _this14._searchFeatures(_this14._getQueryBBoxes(i));

      if (!d.length) {
        const e = new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_15__.default([], i, _this14);
        return h && _this14._geometryQueryCache.put(h, e, e.size || 1), e;
      }

      if (_this14._canExecuteSoloPass(i, e)) return l(new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_15__.default(d, i, _this14));
      const y = yield (0,_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__.getSpatialQueryOperator)(r, i, _this14.geometryType, _this14.hasZ, _this14.hasM),
            m = yield _this14._runSpatialFilter(d, e => y(p.getGeometry(e)), t);
      return l(new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_15__.default(m, i, _this14));
    })();
  }

  _runSpatialFilter(e, t, i) {
    var _this15 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!t) return e;
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(_this15._frameTask)) return e.filter(e => t(e));
      let s = 0;

      const a = new Array(),
            n = /*#__PURE__*/function () {
        var _ref3 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r) {
          for (; s < e.length;) {
            const u = e[s++];
            t(u) && (a.push(u), r.madeProgress()), r.done && (yield _this15._reschedule(e => n(e), i));
          }
        });

        return function n(_x2) {
          return _ref3.apply(this, arguments);
        };
      }();

      return _this15._reschedule(e => n(e), i).then(() => a);
    })();
  }

  _canExecuteSoloPass(e, t) {
    const {
      geometryType: i
    } = this,
          {
      spatialRel: s
    } = t;
    return (0,_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__.canQueryWithRBush)(e) && ("esriSpatialRelEnvelopeIntersects" === s || "esriGeometryPoint" === i && ("esriSpatialRelIntersects" === s || "esriSpatialRelContains" === s || "esriSpatialRelWithin" === s));
  }

  _getQueryBBoxes(e) {
    if ((0,_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__.canQueryWithRBush)(e)) {
      if ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.isExtent)(e)) return [(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__.fromValues)(e.xmin, e.ymin, e.xmax, e.ymax)];
      if ((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.isPolygon)(e)) return e.rings.map(e => (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__.fromValues)(Math.min(e[0][0], e[2][0]), Math.min(e[0][1], e[2][1]), Math.max(e[0][0], e[2][0]), Math.max(e[0][1], e[2][1])));
    }

    return [(0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_8__.getBoundsXY)((0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__.create)(), e)];
  }

  _searchFeatures(e) {
    for (const s of e) this.featureStore.forEachInBounds(s, e => {
      H.add(e);
    });

    const t = new Array(H.size);
    let i = 0;
    return H.forEach(e => t[i++] = e), H.clear(), t;
  }

  _checkStatisticsSupport(t, i) {
    var _this16 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (t.distance < 0 || null != t.geometryPrecision || t.multipatchOption || t.pixelSize || t.relationParam || t.text || t.outStatistics || t.groupByFieldsForStatistics || t.having || t.orderByFields) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default(N, "Unsupported query options", {
        query: t
      });
      return Promise.all([_this16._checkAttributesQuerySupport(t), _this16._checkStatisticsParamsSupport(i), (0,_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__.checkSpatialQuerySupport)(t, _this16.geometryType, _this16.spatialReference), (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_13__.checkProjectionSupport)(_this16.spatialReference, t.outSR)]).then(() => t);
    })();
  }

  _checkStatisticsParamsSupport(t) {
    var _this17 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let i = [];

      if (t.valueExpression) {
        const {
          arcadeUtils: e
        } = yield (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_20__.loadArcade)();
        i = e.extractFieldNames(t.valueExpression);
      }

      if (t.field && i.push(t.field), t.normalizationField && i.push(t.normalizationField), !i.length) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default(N, "params should have at least a field or valueExpression", {
        params: t
      });
      (0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_12__.validateFields)(_this17.fieldsIndex, i, "params contains missing fields");
    })();
  }

  _checkQuerySupport(t) {
    var _this18 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (t.distance < 0 || null != t.geometryPrecision || t.multipatchOption || t.pixelSize || t.relationParam || t.text) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default(N, "Unsupported query options", {
        query: t
      });
      return Promise.all([_this18._checkAttributesQuerySupport(t), _this18._checkStatisticsQuerySupport(t), (0,_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_16__.checkSpatialQuerySupport)(t, _this18.geometryType, _this18.spatialReference), (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_13__.checkProjectionSupport)(_this18.spatialReference, t.outSR)]).then(() => t);
    })();
  }

  _checkAttributesQuerySupport(t) {
    const {
      outFields: i,
      orderByFields: s,
      returnDistinctValues: r,
      outStatistics: a
    } = t,
          n = a ? a.map(e => e.outStatisticFieldName && e.outStatisticFieldName.toLowerCase()) : [];

    if (s && s.length > 0) {
      const e = " asc",
            t = " desc",
            i = s.map(i => {
        const s = i.toLowerCase();
        return s.indexOf(e) > -1 ? s.split(e)[0] : s.indexOf(t) > -1 ? s.split(t)[0] : i;
      }).filter(e => -1 === n.indexOf(e));
      (0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_12__.validateFields)(this.fieldsIndex, i, "orderByFields contains missing fields");
    }

    if (i && i.length > 0) (0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_12__.validateFields)(this.fieldsIndex, i, "outFields contains missing fields");else if (r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default(N, "outFields should be specified for returnDistinctValues", {
      query: t
    });
    (0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_12__.validateWhere)(this.fieldsIndex, t.where);
  }

  _checkStatisticsQuerySupport(t) {
    var _this19 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        outStatistics: i,
        groupByFieldsForStatistics: s,
        having: r
      } = t,
            a = s && s.length,
            n = i && i.length;

      if (r) {
        if (!a || !n) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default(N, "outStatistics and groupByFieldsForStatistics should be specified with having", {
          query: t
        });
        (0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_12__.validateHaving)(_this19.fieldsIndex, r, i);
      }

      if (n) {
        if (!U(i)) return;
        const r = i.map(e => e.onStatisticField);
        (0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_12__.validateFields)(_this19.fieldsIndex, r, "onStatisticFields contains missing fields"), a && (0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_12__.validateFields)(_this19.fieldsIndex, s, "groupByFieldsForStatistics contains missing fields");

        for (const s of i) {
          const {
            onStatisticField: i,
            statisticType: r
          } = s;

          if (("percentile_disc" === r || "percentile_cont" === r) && "statisticParameters" in s) {
            const {
              statisticParameters: i
            } = s;
            if (!i) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default(N, "statisticParamters should be set for percentile type", {
              definition: s,
              query: t
            });
          } else if ("count" !== r && i && (0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_12__.hasInvalidFieldType)(i, _this19.fieldsIndex)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default(N, "outStatistics contains non-numeric fields", {
            definition: s,
            query: t
          });
        }
      }
    })();
  }

  _getQueryEngineResultForStats(e = {}, i, s) {
    var _this20 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let r;
      e = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(e);

      try {
        e = yield _this20._schedule(() => (0,_utils_js__WEBPACK_IMPORTED_MODULE_18__.normalizeQuery)(e, _this20.definitionExpression, _this20.spatialReference), s), e = yield _this20._reschedule(() => _this20._checkStatisticsSupport(e, i), s), r = yield _this20._reschedule(() => _this20._executeGeometryQuery(e, s), s), r = yield _this20._reschedule(() => r.executeAggregateIdsQuery(e), s), r = yield _this20._reschedule(() => r.executeObjectIdsQuery(e), s), r = yield _this20._reschedule(() => r.executeTimeQuery(e), s), r = yield _this20._reschedule(() => r.executeAttributesQuery(e), s);
      } catch (a) {
        if (a !== _utils_js__WEBPACK_IMPORTED_MODULE_18__.QUERY_ENGINE_EMPTY_RESULT) throw a;
        r = new _QueryEngineResult_js__WEBPACK_IMPORTED_MODULE_15__.default([], null, _this20);
      }

      return r;
    })();
  }

}

const V = (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__.create)(),
      $ = (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__.create)();


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

/***/ 18341:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/QueryEngineResult.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/quantizationUtils.js */ 91409);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../featureConversionUtils.js */ 42187);
/* harmony import */ var _AttributesBuilder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AttributesBuilder.js */ 93213);
/* harmony import */ var _attributeSupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributeSupport.js */ 12211);
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projectionSupport.js */ 79371);
/* harmony import */ var _timeSupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeSupport.js */ 808);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils.js */ 27939);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../support/fieldUtils.js */ 81451);
/* harmony import */ var _statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../statistics/utils.js */ 92394);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../support/arcadeOnDemand.js */ 2999);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/













class S {
  constructor(e, t, i) {
    this.items = e, this.queryGeometry = t, this.definitionExpression = i.definitionExpression, this.geometryType = i.geometryType, this.hasM = i.hasM, this.hasZ = i.hasZ, this.objectIdField = i.objectIdField, this.spatialReference = i.spatialReference, this.fieldsIndex = i.fieldsIndex, this.timeInfo = i.timeInfo, this.featureAdapter = i.featureAdapter, this.aggregateAdapter = i.aggregateAdapter;
  }

  get size() {
    return this.items.length;
  }

  createQueryResponseForCount(e) {
    const t = new _AttributesBuilder_js__WEBPACK_IMPORTED_MODULE_5__.default(e, this.featureAdapter, this.fieldsIndex);
    if (!e.outStatistics) return t.countDistinctValues(this.items);
    const {
      groupByFieldsForStatistics: i,
      having: s
    } = e;
    if (!!!(null == i ? void 0 : i.length)) return 1;
    const a = new Map(),
          r = new Map(),
          o = new Set(),
          l = e.outStatistics;

    for (const n of l) {
      const {
        statisticType: e
      } = n,
            l = "exceedslimit" !== e ? n.onStatisticField : void 0;

      if (!r.has(l)) {
        const e = [];

        for (const s of i) {
          const i = this._getAttributeValues(t, s, a);

          e.push(i);
        }

        r.set(l, this._calculateUniqueValues(e, t.returnDistinctValues));
      }

      const u = r.get(l);

      for (const i in u) {
        const {
          data: e,
          items: a
        } = u[i],
              r = e.join(",");
        s && !t.validateItems(a, s) || o.add(r);
      }
    }

    return o.size;
  }

  createQueryResponse(e) {
    let t;

    if (e.outStatistics) {
      t = e.outStatistics.some(e => "exceedslimit" === e.statisticType) ? this._createExceedsLimitQueryResponse(e) : this._createStatisticsQueryResponse(e);
    } else t = this._createFeatureQueryResponse(e);

    return e.returnQueryGeometry && ((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__.isValid)(e.outSR) && !(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__.equals)(this.queryGeometry.spatialReference, e.outSR) ? t.queryGeometry = (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.cleanFromGeometryEngine)({
      spatialReference: e.outSR,
      ...(0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__.project)(this.queryGeometry, this.queryGeometry.spatialReference, e.outSR)
    }) : t.queryGeometry = (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.cleanFromGeometryEngine)({
      spatialReference: e.outSR,
      ...this.queryGeometry
    })), t;
  }

  createSnappingResponse(t, i) {
    const s = this.featureAdapter,
          a = R(this.hasZ, this.hasM),
          {
      x: r,
      y: n
    } = t.point,
          o = "number" == typeof t.distance ? t.distance : t.distance.x,
          l = "number" == typeof t.distance ? t.distance : t.distance.y,
          u = {
      candidates: []
    },
          c = "esriGeometryPolygon" === this.geometryType,
          d = this.getPointCreator(t.point, this.spatialReference, i);

    for (const m of this.items) {
      const i = s.getGeometry(m);
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(i)) continue;
      const {
        coords: h,
        lengths: f
      } = i;

      if (1 & t.types) {
        let e = 0;

        for (let t = 0; t < f.length; t++) {
          const i = f[t];

          for (let t = 0; t < i; t++, e += a) {
            const c = h[e],
                  f = h[e + 1];

            if (t !== i - 1) {
              const t = h[e + a],
                    i = h[e + a + 1],
                    {
                x: p,
                y
              } = _(r, n, c, f, t, i),
                    g = (r - p) / o,
                    I = (n - y) / l,
                    x = g * g + I * I;

              x <= 1 && u.candidates.push({
                type: "edge",
                objectId: s.getObjectId(m),
                distance: Math.sqrt(x),
                target: d(p, y),
                start: d(c, f),
                end: d(t, i)
              });
            }
          }
        }
      }

      if (2 & t.types) {
        const e = c ? h.length - a : h.length;

        for (let t = 0; t < e; t += a) {
          const e = h[t],
                i = h[t + 1],
                a = (r - e) / o,
                c = (n - i) / l,
                f = a * a + c * c;
          f <= 1 && u.candidates.push({
            type: "vertex",
            objectId: s.getObjectId(m),
            distance: Math.sqrt(f),
            target: d(e, i)
          });
        }
      }
    }

    return u.candidates.sort((e, t) => e.distance - t.distance), u;
  }

  getPointCreator(e, i, s) {
    const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(s) && !(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__.equals)(i, s) ? e => (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__.project)(e, i, s) : e => e;
    return null != e.z && null != e.m ? (t, i) => r({
      x: t,
      y: i,
      z: e.z,
      m: e.m
    }) : null != e.z ? (t, i) => r({
      x: t,
      y: i,
      z: e.z
    }) : null != e.m ? (t, i) => r({
      x: t,
      y: i,
      m: e.m
    }) : (e, t) => r({
      x: e,
      y: t
    });
  }

  executeAttributesQuery(e) {
    const t = (0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_6__.getWhereClause)(e.where, this.fieldsIndex);
    if (!t) return Promise.resolve(this);

    if (t.isStandardized) {
      let i = 0;
      const s = [];

      for (const e of this.items) t.testFeature(e, this.featureAdapter) && (s[i++] = e);

      const a = new S(s, this.queryGeometry, this);
      return a.definitionExpression = e.where, Promise.resolve(a);
    }

    return Promise.reject(new TypeError("Where clause is not standardized"));
  }

  executeAggregateIdsQuery(t) {
    if (!t.aggregateIds || !t.aggregateIds.length || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(this.aggregateAdapter)) return Promise.resolve(this);
    const i = new Set();

    for (const e of t.aggregateIds) {
      this.aggregateAdapter.getFeatureObjectIds(e).forEach(e => i.add(e));
    }

    const s = this.featureAdapter.getObjectId;
    return Promise.resolve(new S(this.items.filter(e => i.has(s(e))), this.queryGeometry, this));
  }

  executeObjectIdsQuery(e) {
    if (!e.objectIds || !e.objectIds.length) return Promise.resolve(this);
    const t = new Set(e.objectIds),
          i = this.featureAdapter.getObjectId;
    return Promise.resolve(new S(this.items.filter(e => t.has(i(e))), this.queryGeometry, this));
  }

  executeTimeQuery(e) {
    const i = (0,_timeSupport_js__WEBPACK_IMPORTED_MODULE_8__.getTimeOperator)(this.timeInfo, e.timeExtent, this.featureAdapter);
    if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(i)) return Promise.resolve(this);
    const s = this.items.filter(i);
    return Promise.resolve(new S(s, this.queryGeometry, this));
  }

  filterLatest() {
    const {
      trackIdField: e,
      startTimeField: t,
      endTimeField: i
    } = this.timeInfo,
          s = i || t,
          a = new Map(),
          r = this.featureAdapter.getAttribute;

    for (const o of this.items) {
      const t = r(o, e),
            i = r(o, s),
            n = a.get(t);
      (!n || i > r(n, s)) && a.set(t, o);
    }

    const n = Array.from(a.values());
    return Promise.resolve(new S(n, this.queryGeometry, this));
  }

  project(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!e || (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__.equals)(_this.spatialReference, e)) return _this;
      const t = _this.featureAdapter,
            i = (yield (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__.projectMany)(_this.items.map(e => (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.getGeometry)(_this.geometryType, _this.hasZ, _this.hasM, t.getGeometry(e))), _this.spatialReference, e)).map((e, i) => t.cloneWithGeometry(_this.items[i], (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__.convertFromGeometry)(e, _this.hasZ, _this.hasM)));
      return new S(i, _this.queryGeometry, {
        definitionExpression: _this.definitionExpression,
        geometryType: _this.geometryType,
        hasM: _this.hasM,
        hasZ: _this.hasZ,
        objectIdField: _this.objectIdField,
        spatialReference: e,
        fieldsIndex: _this.fieldsIndex,
        timeInfo: _this.timeInfo,
        featureAdapter: _this.featureAdapter
      });
    })();
  }

  createSummaryStatisticsResponse(e, t) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        field: i,
        valueExpression: s,
        normalizationField: a,
        normalizationType: r,
        normalizationTotal: n,
        minValue: o,
        maxValue: l,
        scale: u
      } = t,
            c = _this2.fieldsIndex.isDateField(i),
            d = yield _this2._getDataValues(e, {
        field: i,
        valueExpression: s,
        normalizationField: a,
        normalizationType: r,
        normalizationTotal: n,
        scale: u
      }),
            m = (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__.isNullCountSupported)({
        normalizationType: r,
        normalizationField: a,
        minValue: o,
        maxValue: l
      }),
            h = _this2.fieldsIndex.get(i),
            x = {
        value: .5,
        fieldType: null == h ? void 0 : h.type
      },
            T = (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__.isStringField)(h) ? (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__.calculateStringStatistics)({
        values: d,
        supportsNullCount: m,
        percentileParams: x
      }) : (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__.calculateStatistics)({
        values: d,
        minValue: o,
        maxValue: l,
        useSampleStdDev: !r,
        supportsNullCount: m,
        percentileParams: x
      });

      return (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__.processSummaryStatisticsResult)(T, c);
    })();
  }

  createUniqueValuesResponse(e, t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        field: i,
        valueExpression: s,
        domain: a,
        returnAllCodedValues: r,
        scale: n
      } = t,
            o = yield _this3._getDataValues(e, {
        field: i,
        valueExpression: s,
        scale: n
      }),
            l = (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__.calculateUniqueValuesCount)(o);
      return (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__.createUVResult)(l, a, r);
    })();
  }

  createClassBreaksResponse(e, t) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        field: i,
        valueExpression: s,
        normalizationField: a,
        normalizationType: r,
        normalizationTotal: n,
        classificationMethod: o,
        standardDeviationInterval: l,
        minValue: u,
        maxValue: c,
        numClasses: d,
        scale: m
      } = t,
            h = yield _this4._getDataValues(e, {
        field: i,
        valueExpression: s,
        normalizationField: a,
        normalizationType: r,
        normalizationTotal: n,
        scale: m
      }),
            f = (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__.calculateClassBreaks)(h, {
        field: i,
        normalizationField: a,
        normalizationType: r,
        normalizationTotal: n,
        classificationMethod: o,
        standardDeviationInterval: l,
        minValue: u,
        maxValue: c,
        numClasses: d
      });
      return (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__.resolveCBResult)(f, o);
    })();
  }

  createHistogramResponse(e, t) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        field: i,
        valueExpression: s,
        normalizationField: a,
        normalizationType: r,
        normalizationTotal: n,
        classificationMethod: o,
        standardDeviationInterval: l,
        minValue: u,
        maxValue: c,
        numBins: d,
        scale: m
      } = t,
            h = yield _this5._getDataValues(e, {
        field: i,
        valueExpression: s,
        normalizationField: a,
        normalizationType: r,
        normalizationTotal: n,
        scale: m
      });
      return (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__.calculateHistogram)(h, {
        field: i,
        normalizationField: a,
        normalizationType: r,
        normalizationTotal: n,
        classificationMethod: o,
        standardDeviationInterval: l,
        minValue: u,
        maxValue: c,
        numBins: d
      });
    })();
  }

  _sortFeatures(e, t, i) {
    if (e.length > 1 && t && t.length) for (const s of t.reverse()) {
      const t = s.split(" "),
            a = t[0],
            r = this.fieldsIndex.get(a),
            n = t[1] && "desc" === t[1].toLowerCase(),
            o = (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__.getAttributeComparator)(null == r ? void 0 : r.type, n);
      e.sort((e, t) => {
        const s = i(e, a, r),
              n = i(t, a, r);
        return o(s, n);
      });
    }
  }

  _createFeatureQueryResponse(e) {
    const t = this.items,
          {
      geometryType: s,
      hasM: a,
      hasZ: r,
      objectIdField: n,
      spatialReference: o
    } = this,
          {
      outFields: l,
      outSR: u,
      quantizationParameters: c,
      resultRecordCount: m,
      resultOffset: h,
      returnZ: f,
      returnM: p
    } = e,
          y = null != m && t.length > (h || 0) + m,
          g = l && (l.includes("*") ? [...this.fieldsIndex.fields] : l.map(e => this.fieldsIndex.get(e)));
    return {
      exceededTransferLimit: y,
      features: this._createFeatures(e, t),
      fields: g,
      geometryType: s,
      hasM: a && p,
      hasZ: r && f,
      objectIdFieldName: n,
      spatialReference: (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.cleanFromGeometryEngine)(u || o),
      transform: c && (0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__.toQuantizationTransform)(c) || null
    };
  }

  _createFeatures(e, t) {
    const s = new _AttributesBuilder_js__WEBPACK_IMPORTED_MODULE_5__.default(e, this.featureAdapter, this.fieldsIndex),
          {
      hasM: a,
      hasZ: r
    } = this,
          {
      orderByFields: o,
      quantizationParameters: l,
      returnGeometry: u,
      returnCentroid: c,
      maxAllowableOffset: d,
      resultOffset: f,
      resultRecordCount: p,
      returnZ: y = !1,
      returnM: g = !1
    } = e,
          I = r && y,
          x = a && g;
    let T = [],
        V = 0;
    const F = [...t];

    if (this._sortFeatures(F, o, (e, t, i) => s.getFieldValue(e, t, i)), u || c) {
      const e = (0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__.toQuantizationTransform)(l);
      if (u && !c) for (const t of F) T[V++] = {
        attributes: s.getAttributes(t),
        geometry: (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.getGeometry)(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(t), d, e, I, x)
      };else if (!u && c) for (const t of F) T[V++] = {
        attributes: s.getAttributes(t),
        centroid: (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.transformCentroid)(this, this.featureAdapter.getCentroid(t, this), e)
      };else for (const t of F) T[V++] = {
        attributes: s.getAttributes(t),
        centroid: (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.transformCentroid)(this, this.featureAdapter.getCentroid(t, this), e),
        geometry: (0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.getGeometry)(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(t), d, e, I, x)
      };
    } else for (const i of F) {
      const e = s.getAttributes(i);
      e && (T[V++] = {
        attributes: e
      });
    }

    const b = f || 0;

    if (null != p) {
      const e = b + p;
      T = T.slice(b, Math.min(T.length, e));
    }

    return T;
  }

  _createExceedsLimitQueryResponse(e) {
    let i = !1,
        s = Number.POSITIVE_INFINITY,
        a = Number.POSITIVE_INFINITY,
        r = Number.POSITIVE_INFINITY;

    for (const t of e.outStatistics) if ("exceedslimit" === t.statisticType) {
      s = null != t.maxPointCount ? t.maxPointCount : Number.POSITIVE_INFINITY, a = null != t.maxRecordCount ? t.maxRecordCount : Number.POSITIVE_INFINITY, r = null != t.maxVertexCount ? t.maxVertexCount : Number.POSITIVE_INFINITY;
      break;
    }

    if ("esriGeometryPoint" === this.geometryType) i = this.items.length > s;else if (this.items.length > a) i = !0;else {
      const e = this.hasZ ? this.hasM ? 4 : 3 : this.hasM ? 3 : 2,
            s = this.featureAdapter;
      i = this.items.reduce((e, i) => {
        const a = s.getGeometry(i);
        return e + ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(a) && a.coords.length || 0);
      }, 0) / e > r;
    }
    return {
      fields: [{
        name: "exceedslimit",
        type: "esriFieldTypeInteger",
        alias: "exceedslimit",
        sqlType: "sqlTypeInteger",
        domain: null,
        defaultValue: null
      }],
      features: [{
        attributes: {
          exceedslimit: Number(i)
        }
      }]
    };
  }

  _createStatisticsQueryResponse(e) {
    const t = {
      attributes: {}
    },
          i = [],
          s = new Map(),
          a = new Map(),
          r = new Map(),
          o = new Map(),
          l = new _AttributesBuilder_js__WEBPACK_IMPORTED_MODULE_5__.default(e, this.featureAdapter, this.fieldsIndex),
          u = e.outStatistics,
          {
      groupByFieldsForStatistics: c,
      having: d,
      orderByFields: m
    } = e,
          h = c && c.length,
          f = !!h,
          p = f && c[0],
          y = f && !this.fieldsIndex.get(p);

    for (const n of u) {
      const {
        outStatisticFieldName: e,
        statisticType: u
      } = n,
            m = n,
            g = "exceedslimit" !== u ? n.onStatisticField : void 0,
            I = "percentile_disc" === u || "percentile_cont" === u,
            x = f && 1 === h && (g === p || y) && "count" === u;

      if (f) {
        if (!r.has(g)) {
          const e = [];

          for (const t of c) {
            const i = this._getAttributeValues(l, t, s);

            e.push(i);
          }

          r.set(g, this._calculateUniqueValues(e, l.returnDistinctValues));
        }

        const t = r.get(g);

        for (const i in t) {
          const {
            count: a,
            data: r,
            items: n,
            itemPositions: u
          } = t[i],
                h = r.join(",");

          if (!d || l.validateItems(n, d)) {
            const t = o.get(h) || {
              attributes: {}
            };
            let i = null;
            if (x) i = a;else {
              const e = this._getAttributeValues(l, g, s),
                    t = u.map(t => e[t]);

              i = I && "statisticParameters" in m ? this._getPercentileValue(m, t) : this._getStatisticValue(m, t, null, l.returnDistinctValues);
            }
            t.attributes[e] = i, c.forEach((e, i) => t.attributes[this.fieldsIndex.get(e) ? e : `EXPR_${i + 1}`] = r[i]), o.set(h, t);
          }
        }
      } else {
        const i = this._getAttributeValues(l, g, s);

        t.attributes[e] = I && "statisticParameters" in m ? this._getPercentileValue(m, i) : this._getStatisticValue(m, i, a, l.returnDistinctValues);
      }

      i.push({
        name: e,
        alias: e,
        type: "esriFieldTypeDouble"
      });
    }

    const g = f ? Array.from(o.values()) : [t];
    return this._sortFeatures(g, m, (e, t) => e.attributes[t]), {
      fields: i,
      features: g
    };
  }

  _getStatisticValue(e, t, i, s) {
    const {
      onStatisticField: a,
      statisticType: r
    } = e;
    let n = null;
    n = null != i && i.has(a) ? i.get(a) : (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__.isStringField)(this.fieldsIndex.get(a)) ? (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__.calculateStringStatistics)({
      values: t,
      returnDistinct: s
    }) : (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__.calculateStatistics)({
      values: t,
      minValue: null,
      maxValue: null,
      useSampleStdDev: !0
    }), i && i.set(a, n);
    return n["var" === r ? "variance" : r];
  }

  _getPercentileValue(e, t) {
    const {
      onStatisticField: i,
      statisticParameters: s,
      statisticType: a
    } = e,
          {
      value: r,
      orderBy: n
    } = s,
          o = this.fieldsIndex.get(i),
          l = {
      value: r,
      orderBy: n,
      fieldType: null == o ? void 0 : o.type,
      isDiscrete: "percentile_disc" === a
    };
    return (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_11__.calculatePercentile)(t, l);
  }

  _getAttributeValues(e, t, i) {
    if (i.has(t)) return i.get(t);
    const s = this.fieldsIndex.get(t),
          a = this.items.map(i => e.getFieldValue(i, t, s));
    return i.set(t, a), a;
  }

  _getAttributeNormalizedValues(e, t) {
    return this.items.map(i => e.getNormalizedValue(i, {
      field: t.field,
      fieldInfo: this.fieldsIndex.get(t.field),
      normalizationField: t.normalizationField,
      normalizationFieldInfo: this.fieldsIndex.get(t.normalizationField),
      normalizationType: t.normalizationType,
      normalizationTotal: t.normalizationTotal
    }));
  }

  _getAttributeExpressionValues(e, t, i) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        arcadeUtils: s
      } = yield (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_12__.loadArcade)(),
            a = s.createFunction(t),
            r = i && s.getViewInfo(i);
      return _this6.items.map(t => e.getExpressionValue(t, {
        compiledFunc: a,
        viewInfo: r
      }, s));
    })();
  }

  _calculateUniqueValues(e, t) {
    const i = {},
          s = this.items,
          a = s.length;

    for (let r = 0; r < a; r++) {
      const a = s[r],
            n = [];

      for (const t of e) n.push(t[r]);

      const o = n.join(",");
      t ? null == i[o] && (i[o] = {
        count: 1,
        data: n,
        items: [a],
        itemPositions: [r]
      }) : null == i[o] ? i[o] = {
        count: 1,
        data: n,
        items: [a],
        itemPositions: [r]
      } : (i[o].count++, i[o].items.push(a), i[o].itemPositions.push(r));
    }

    return i;
  }

  _getDataValues(e, t) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = new _AttributesBuilder_js__WEBPACK_IMPORTED_MODULE_5__.default(e, _this7.featureAdapter, _this7.fieldsIndex),
            {
        valueExpression: s,
        field: a,
        normalizationField: r,
        normalizationType: o,
        normalizationTotal: l,
        scale: u
      } = t,
            c = s ? {
        viewingMode: "map",
        scale: u,
        spatialReference: e.outSR || _this7.spatialReference
      } : null;
      return s ? _this7._getAttributeExpressionValues(i, s, c) : _this7._getAttributeNormalizedValues(i, {
        field: a,
        normalizationField: r,
        normalizationType: o,
        normalizationTotal: l
      });
    })();
  }

}

function _(e, t, i, s, a, r) {
  const n = a - i,
        o = r - s,
        l = n * n + o * o,
        u = (e - i) * n + (t - s) * o,
        c = Math.min(1, Math.max(0, u / l));
  return {
    x: i + n * c,
    y: s + o * c
  };
}

function R(e, t) {
  return e ? t ? 4 : 3 : t ? 3 : 2;
}



/***/ }),

/***/ 12211:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/attributeSupport.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAliasFromFieldName": () => (/* binding */ u),
/* harmony export */   "getExpressionFromFieldName": () => (/* binding */ d),
/* harmony export */   "getWhereClause": () => (/* binding */ l),
/* harmony export */   "hasInvalidFieldType": () => (/* binding */ f),
/* harmony export */   "validateFields": () => (/* binding */ c),
/* harmony export */   "validateHaving": () => (/* binding */ a),
/* harmony export */   "validateWhere": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_sql_WhereClauseCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sql/WhereClauseCache.js */ 32122);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=new _core_sql_WhereClauseCache_js__WEBPACK_IMPORTED_MODULE_1__.WhereClauseCache(50,500),n="feature-store:unsupported-query",t=" as ",r=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function o(i,t){if(!t)return!0;const r=s.get(t,i);if(!r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default(n,"invalid SQL expression",{where:t});if(!r.isStandardized)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default(n,"where clause is not standard",{where:t});return c(i,r.fieldNames,"where clause contains missing fields"),!0}function a(i,t,r){if(!t)return!0;const o=s.get(t,i);if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default(n,"invalid SQL expression",{having:t});if(!o.isAggregate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default(n,"having does not contain a valid aggregate function",{having:t});const a=o.fieldNames;c(i,a,"having contains missing fields");if(!o.getExpressions().every((e=>{const{aggregateType:s,field:n}=e,t=i.has(n)&&i.get(n).name;return r.some((e=>{const{onStatisticField:n,statisticType:r}=e;return(i.has(n)&&i.get(n).name)===t&&r.toLowerCase().trim()===s}))})))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default(n,"expressions in having should also exist in outStatistics",{having:t});return!0}function l(e,i){return e?s.get(e,i):null}function c(i,s,t,r=!0){const o=[];for(const u of s)if("*"!==u&&!i.has(u))if(r){const s=d(u);try{const t=l(s,i);if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default(n,"invalid SQL expression",{where:s});if(!t.isStandardized)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default(n,"expression is not standard",{clause:t});c(i,t.fieldNames,"expression contains missing fields")}catch(a){const e=a&&a.details;if(e&&(e.clause||e.where))throw a;e&&e.missingFields?o.push(...e.missingFields):o.push(u)}}else o.push(u);if(o.length)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default(n,t,{missingFields:o})}function d(e){return e.split(t)[0]}function u(e){return e.split(t)[1]}function f(e,i){const s=i.get(e);return!!s&&!r.has(s.type)}


/***/ })

}]);
//# sourceMappingURL=3971.24ea1d84462dc092a86c.js.map