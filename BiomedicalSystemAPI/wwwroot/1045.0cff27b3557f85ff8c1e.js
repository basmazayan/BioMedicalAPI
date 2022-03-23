"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1045],{

/***/ 21045:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/smartMapping/statistics/support/statsWorker.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classBreaks": () => (/* binding */ f),
/* harmony export */   "histogram": () => (/* binding */ p),
/* harmony export */   "summaryStatistics": () => (/* binding */ u),
/* harmony export */   "uniqueValues": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ 32699);
/* harmony import */ var _statistics_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../statistics/utils.js */ 92394);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



function u(_x) {
  return _u.apply(this, arguments);
}

function _u() {
  _u = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (l) {
    const {
      attribute: t,
      features: r
    } = l,
          {
      normalizationType: s,
      normalizationField: m,
      minValue: u,
      maxValue: d,
      fieldType: f
    } = t,
          p = yield (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getDataValues)({
      field: t.field,
      valueExpression: t.valueExpression,
      normalizationType: s,
      normalizationField: m,
      normalizationTotal: t.normalizationTotal,
      viewInfoParams: t.viewInfoParams
    }, r),
          v = (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_2__.isNullCountSupported)({
      normalizationType: s,
      normalizationField: m,
      minValue: u,
      maxValue: d
    }),
          z = {
      value: .5,
      fieldType: f
    },
          c = "esriFieldTypeString" === f ? (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_2__.calculateStringStatistics)({
      values: p,
      supportsNullCount: v,
      percentileParams: z
    }) : (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_2__.calculateStatistics)({
      values: p,
      minValue: u,
      maxValue: d,
      useSampleStdDev: !s,
      supportsNullCount: v,
      percentileParams: z
    });
    return (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_2__.processSummaryStatisticsResult)(c, "esriFieldTypeDate" === f);
  });
  return _u.apply(this, arguments);
}

function d(_x2) {
  return _d.apply(this, arguments);
}

function _d() {
  _d = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i) {
    const {
      attribute: n,
      features: e
    } = i,
          o = yield (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getDataValues)({
      field: n.field,
      valueExpression: n.valueExpression,
      viewInfoParams: n.viewInfoParams
    }, e),
          r = (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_2__.calculateUniqueValuesCount)(o);
    return (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_2__.createUVResult)(r, n.domain, n.returnAllCodedValues);
  });
  return _d.apply(this, arguments);
}

function f(_x3) {
  return _f.apply(this, arguments);
}

function _f() {
  _f = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i) {
    const {
      attribute: n,
      features: e
    } = i,
          {
      field: o,
      normalizationType: l,
      normalizationField: t,
      normalizationTotal: m,
      classificationMethod: u
    } = n,
          d = yield (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getDataValues)({
      field: o,
      valueExpression: n.valueExpression,
      normalizationType: l,
      normalizationField: t,
      normalizationTotal: m,
      viewInfoParams: n.viewInfoParams
    }, e),
          f = (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_2__.calculateClassBreaks)(d, {
      field: o,
      normalizationType: l,
      normalizationField: t,
      normalizationTotal: m,
      classificationMethod: u,
      standardDeviationInterval: n.standardDeviationInterval,
      numClasses: n.numClasses,
      minValue: n.minValue,
      maxValue: n.maxValue
    });
    return (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveCBResult)(f, u);
  });
  return _f.apply(this, arguments);
}

function p(_x4) {
  return _p.apply(this, arguments);
}

function _p() {
  _p = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i) {
    const {
      attribute: n,
      features: e
    } = i,
          {
      field: o,
      normalizationType: l,
      normalizationField: t,
      normalizationTotal: r,
      classificationMethod: s
    } = n,
          u = yield (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getDataValues)({
      field: o,
      valueExpression: n.valueExpression,
      normalizationType: l,
      normalizationField: t,
      normalizationTotal: r,
      viewInfoParams: n.viewInfoParams
    }, e);
    return (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_2__.calculateHistogram)(u, {
      field: o,
      normalizationType: l,
      normalizationField: t,
      normalizationTotal: r,
      classificationMethod: s,
      standardDeviationInterval: n.standardDeviationInterval,
      numBins: n.numBins,
      minValue: n.minValue,
      maxValue: n.maxValue
    });
  });
  return _p.apply(this, arguments);
}



/***/ }),

/***/ 32699:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/smartMapping/statistics/support/utils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createError": () => (/* binding */ c),
/* harmony export */   "getDataValues": () => (/* binding */ a),
/* harmony export */   "getRangeExpr": () => (/* binding */ u),
/* harmony export */   "getSQLFilterForNormalization": () => (/* binding */ f),
/* harmony export */   "mergeWhereClauses": () => (/* binding */ m),
/* harmony export */   "verifyBasicFieldValidity": () => (/* binding */ y),
/* harmony export */   "verifyFieldType": () => (/* binding */ d),
/* harmony export */   "verifyNumericField": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layers/support/fieldUtils.js */ 81451);
/* harmony import */ var _statistics_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../statistics/utils.js */ 92394);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../support/arcadeOnDemand.js */ 2999);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






let s = null;

function a(_x, _x2) {
  return _a.apply(this, arguments);
}

function _a() {
  _a = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    if (!t) return [];
    const i = e.field,
          o = e.valueExpression,
          a = e.normalizationType,
          f = e.normalizationField,
          c = e.normalizationTotal,
          u = [],
          d = e.viewInfoParams;
    let p = null,
        m = null;

    if (o) {
      if (!s) {
        const {
          arcadeUtils: e
        } = yield (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_6__.loadArcade)();
        s = e;
      }

      p = s.createFunction(o), m = d && s.getViewInfo({
        viewingMode: d.viewingMode,
        scale: d.scale,
        spatialReference: new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__.default(d.spatialReference)
      });
    }

    return t.forEach(e => {
      const t = e.attributes;
      let n;

      if (o) {
        const t = s.createExecContext(e, m);
        n = s.executeFunction(p, t);
      } else t && (n = t[i]);

      if (a && isFinite(n)) {
        const e = t && parseFloat(t[f]);
        n = (0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_5__.getNormalizedValue)(n, a, e, c);
      }

      u.push(n);
    }), u;
  });
  return _a.apply(this, arguments);
}

function f(e) {
  const t = e.field,
        n = e.normalizationType,
        i = e.normalizationField;
  let o;
  return "field" === n ? o = "(NOT " + i + " = 0)" : "log" !== n && "natural-log" !== n && "square-root" !== n || (o = `(${t} > 0)`), o;
}

function c(t, n) {
  return new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default(t, n);
}

function u(e, t, n) {
  const i = null != t ? e + " >= " + t : "",
        o = null != n ? e + " <= " + n : "";
  let r = "";
  return r = i && o ? m(i, o) : i || o, r ? "(" + r + ")" : "";
}

function d(e, t, n, i) {
  let o = null;
  return t ? t.name !== e.objectIdField && -1 !== i.indexOf(t.type) || (o = c(n, "'field' should be one of these types: " + i.join(","))) : o = c(n, "'field' is not defined in the layer schema"), o;
}

function p(e, t, n) {
  let r;
  return t ? t.name !== e.objectIdField && (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__.isNumericField)(t) || (r = c(n, "'field' should be one of these numeric types: " + _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__.numericTypes.join(","))) : r = c(n, "'field' is not defined in the layer schema"), r;
}

function m(e, n) {
  let i = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e) ? e : "";
  return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(n) && n && (i = i ? "(" + i + ") AND (" + n + ")" : n), i;
}

function y(e, t, n) {
  const i = h({
    layer: e,
    fields: t
  });
  if (i.length) return c(n, "Unknown fields: " + i.join(", ") + ". You can only use fields defined in the layer schema");
  const o = g({
    layer: e,
    fields: t
  });
  return o.length ? c(n, "Unsupported fields: " + o.join(", ") + ". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true") : void 0;
}

function h(e) {
  const t = e.layer;
  return e.fields.filter(e => !t.getField(e));
}

function g(e) {
  const t = e.layer;
  return e.fields.filter(e => {
    const n = t.getFieldUsageInfo(e);
    return !n || !n.supportsStatistics;
  });
}



/***/ })

}]);
//# sourceMappingURL=1045.0cff27b3557f85ff8c1e.js.map