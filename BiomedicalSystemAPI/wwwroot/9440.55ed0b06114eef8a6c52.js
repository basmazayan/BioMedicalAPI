"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[9440],{

/***/ 41411:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/csv/csv.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inferDelimiter": () => (/* binding */ f),
/* harmony export */   "parseRows": () => (/* binding */ l),
/* harmony export */   "readRowParts": () => (/* binding */ r),
/* harmony export */   "readRows": () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=/^\s*"([\S\s]*)"\s*$/,t=/""/g,e="\n",o=[","," ",";","|","\t"];function*c(n,t,e){let o=0;for(;o<=n.length;){const c=n.indexOf(t,o),i=n.substring(o,c>-1?c:void 0);o+=i.length+t.length,e&&!i.trim()||(yield i)}}function i(n){const t=n.includes("\r\n")?"\r\n":e;return c(n,t,!0)}function r(n,t){return c(n,t,!1)}function f(n){const t=n.trim();let e=0,c="";for(const i of o){const n=t.split(i).length;n>e&&(e=n,c=i)}return""===c?null:c}function*l(o,c,i,f=(()=>Object.create(null))){let l="",u="",d=0,g=f(),x=0;n:for(const h of o){const o=r(h,i);for(const e of o)if(l+=u+e,u="",d+=s(e),d%2==0){if(d>0){const e=n.exec(l);if(!e){g=f(),x=0,l="",d=0;continue n}g[c[x]]=e[1].replace(t,'"'),x++}else g[c[x]]=l,x++;l="",d=0}else u=i;0===d?(yield g,g=f(),x=0):u=e}}function s(n){let t=0,e=0;for(e=n.indexOf('"',e);e>=0;)t++,e=n.indexOf('"',e+1);return t}


/***/ }),

/***/ 9440:
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/CSVSourceWorker.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ C),
/* harmony export */   "inferFieldType": () => (/* binding */ R),
/* harmony export */   "inferFields": () => (/* binding */ V),
/* harmony export */   "inferLocationInfo": () => (/* binding */ P)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ 61243);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/number.js */ 25276);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ 30164);
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/projection.js */ 15695);
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/geometryAdapters/json.js */ 27889);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry/support/webMercatorUtils.js */ 3403);
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../OptimizedFeature.js */ 56499);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../OptimizedGeometry.js */ 82760);
/* harmony import */ var _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../data/FeatureStore.js */ 49685);
/* harmony import */ var _data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../data/projectionSupport.js */ 79371);
/* harmony import */ var _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../data/QueryEngine.js */ 43971);
/* harmony import */ var _csv_csv_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../csv/csv.js */ 41411);
/* harmony import */ var _clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clientSideDefaults.js */ 45033);
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../support/FieldsIndex.js */ 62419);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../support/fieldUtils.js */ 81451);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../geometry/SpatialReference.js */ 96583);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





















const j = (0,_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_18__.createDrawingInfo)("esriGeometryPoint"),
      S = ["csv"],
      q = [0, 0];

class v {
  constructor(e, t) {
    this.x = e, this.y = t;
  }

}

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
    null == (e = this._queryEngine) || e.destroy(), this._queryEngine = null;
  }

  load(e, t = {}) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var i;
      _this2.loadOptions = e;
      const [n] = yield Promise.all([_this2._fetch(t.signal), _this2._checkProjection(null == e || null == (i = e.parsingOptions) ? void 0 : i.spatialReference)]),
            r = D(n, e);
      _this2.locationInfo = r.locationInfo, _this2.delimiter = r.delimiter, _this2._queryEngine = _this2._createQueryEngine(r);
      const s = yield _this2._createFeatures(n);

      if (_this2._queryEngine.featureStore.addMany(s), r.layerDefinition.extent = _this2._queryEngine.fullExtent, r.layerDefinition.timeInfo) {
        const {
          start: e,
          end: t
        } = _this2._queryEngine.timeExtent;
        r.layerDefinition.timeInfo.timeExtent = [e, t];
      }

      return r;
    })();
  }

  applyEdits() {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("csv-layer:editing-not-supported", "applyEdits() is not supported on CSVLayer");
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

  refresh(e) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var n;
      return _this8.loadOptions.customParameters = e, null == (n = _this8._snapshotTask) || n.abort(), _this8._snapshotTask = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.createTask)(_this8._snapshotFeatures), _this8._snapshotTask.promise.then(e => {
        _this8._queryEngine.featureStore.clear(), e && _this8._queryEngine.featureStore.addMany(e);
      }, e => {
        _this8._queryEngine.featureStore.clear(), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.isAbortError)(e) || _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__.default.getLogger("esri.layers.CSVLayer").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("csv-layer:refresh", "An error occurred during refresh", {
          error: e
        }));
      }), yield _this8._waitSnapshotComplete(), {
        extent: _this8._queryEngine.fullExtent,
        timeExtent: _this8._queryEngine.timeExtent
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

  _fetch(i) {
    var _this10 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        url: n,
        customParameters: r
      } = _this10.loadOptions;
      if (!n) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("csv-layer:invalid-source", "url not defined");
      const s = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.urlToObject)(n);
      return (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(s.path, {
        query: { ...s.query,
          ...r
        },
        responseType: "text",
        signal: i
      })).data;
    })();
  }

  _createQueryEngine(e) {
    const {
      objectIdField: t,
      fields: i,
      extent: n,
      timeInfo: r
    } = e.layerDefinition,
          s = new _data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_14__.default({
      geometryType: "esriGeometryPoint",
      hasM: !1,
      hasZ: !1
    });
    return new _data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_16__.default({
      fields: i,
      geometryType: "esriGeometryPoint",
      hasM: !1,
      hasZ: !1,
      timeInfo: r,
      objectIdField: t,
      spatialReference: n.spatialReference || {
        wkid: 4326
      },
      cacheSpatialQueries: !0,
      featureStore: s
    });
  }

  _createFeatures(e) {
    var _this11 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        latitudeFieldName: t,
        longitudeFieldName: i
      } = _this11.locationInfo,
            {
        objectIdField: n,
        fieldsIndex: r,
        spatialReference: s
      } = _this11._queryEngine;
      let o = [];
      const a = [],
            m = r.fields.filter(e => e.name !== n).map(e => e.name);
      let h = 0;

      const g = (0,_csv_csv_js__WEBPACK_IMPORTED_MODULE_17__.readRows)(e);

      g.next();
      const F = {};

      for (const l of r.fields) if ("esriFieldTypeOID" !== l.type && "esriFieldTypeGlobalID" !== l.type) {
        const e = (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__.getFieldDefaultValue)(l);
        void 0 !== e && (F[l.name] = e);
      }

      const N = (0,_csv_csv_js__WEBPACK_IMPORTED_MODULE_17__.parseRows)(g, m, _this11.delimiter, (0,_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_18__.createDefaultAttributesFunction)(F, n));

      for (const l of N) {
        const e = _this11._parseCoordinateValue(l[t]),
              s = _this11._parseCoordinateValue(l[i]);

        if (null != s && null != e && !isNaN(e) && !isNaN(s)) {
          l[t] = e, l[i] = s;

          for (const e in l) if (e !== t && e !== i) if (r.isDateField(e)) {
            const t = new Date(l[e]);
            l[e] = L(t, l[e]) ? t.getTime() : null;
          } else if (r.isNumericField(e)) {
            const t = M(l[e]);
            isNaN(t) ? l[e] = null : l[e] = t;
          }

          l[n] = h, h++, o.push(new v(s, e)), a.push(l);
        }
      }

      if (!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__.equals)({
        wkid: 4326
      }, s)) if ((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__.isWebMercator)(s)) for (const l of o) [l.x, l.y] = (0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__.lngLatToXY)(l.x, l.y, q);else o = (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_8__.projectMany)(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_9__.jsonAdapter, o, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_21__.default.WGS84, s, null);
      const b = [];

      for (let l = 0; l < o.length; l++) {
        const {
          x: e,
          y: t
        } = o[l],
              i = a[l];
        i[n] = l + 1, b.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_12__.default(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_13__.default([], [e, t]), i, null, i[n]));
      }

      return b;
    })();
  }

  _parseCoordinateValue(e) {
    if (null == e || "" === e) return null;
    let t = M(e);
    return (isNaN(t) || Math.abs(t) > 181) && (t = parseFloat(e)), t;
  }

  _checkProjection(e) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        yield (0,_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_15__.checkProjectionSupport)(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__.WGS84, e);
      } catch {
        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("csv-layer:projection-not-supported", "Projection not supported");
      }
    })();
  }

}

function D(e, i) {
  const n = i.parsingOptions || {},
        r = {
    delimiter: n.delimiter,
    layerDefinition: null,
    locationInfo: {
      latitudeFieldName: n.latitudeField,
      longitudeFieldName: n.longitudeField
    }
  },
        s = (0,_csv_csv_js__WEBPACK_IMPORTED_MODULE_17__.readRows)(e);

  let o = s.next().value;
  if (!o) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("csv-layer:empty-csv", "CSV is empty", {
    csv: e
  });

  if (o = o.trim(), !n.delimiter) {
    const e = (0,_csv_csv_js__WEBPACK_IMPORTED_MODULE_17__.inferDelimiter)(o);
    if (!e) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("csv-layer:invalid-delimiter", "Unable to detect the delimiter from CSV");
    r.delimiter = e;
  }

  const l = o.split(r.delimiter).filter(e => !!e),
        u = r.layerDefinition = {
    name: (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.getFilename)(i.url, S) || "csv",
    drawingInfo: j,
    geometryType: "esriGeometryPoint",
    objectIdField: null,
    fields: [],
    timeInfo: n.timeInfo,
    extent: {
      xmin: Number.POSITIVE_INFINITY,
      ymin: Number.POSITIVE_INFINITY,
      xmax: Number.NEGATIVE_INFINITY,
      ymax: Number.NEGATIVE_INFINITY,
      spatialReference: n.spatialReference || {
        wkid: 102100
      }
    }
  };

  if (!n.latitudeField || !n.longitudeField) {
    const e = P(l);
    if (!n.longitudeField && !e.longitudeFieldName || !n.latitudeField && !e.latitudeFieldName) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("csv-layer:location-fields-not-found", "Unable to identify latitude and longitude fields from the CSV file");
    r.locationInfo = {
      longitudeFieldName: n.longitudeField || e.longitudeFieldName,
      latitudeFieldName: n.latitudeField || e.latitudeFieldName
    };
  }

  const d = V(s, r.delimiter, l, r.locationInfo);

  if (n.fields && n.fields.length) {
    const e = new Map();

    for (const t of n.fields) e.set(t.name.toLowerCase(), t);

    for (const t of d) {
      const i = e.get(t.name.toLowerCase());

      if (i) {
        const e = t.name;
        Object.assign(t, i), t.name = e;
      }
    }
  }

  u.fields = d;

  if (!u.fields.some(e => "esriFieldTypeOID" === e.type && (u.objectIdField = e.name, !0))) {
    const e = {
      name: "__OBJECTID",
      alias: "__OBJECTID",
      type: "esriFieldTypeOID",
      editable: !1,
      nullable: !1
    };
    u.objectIdField = e.name, u.fields.unshift(e);
  }

  if (u.timeInfo) {
    const e = new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_19__.default(u.fields),
          t = u.timeInfo;

    if (t.startTimeField) {
      const i = e.get(t.startTimeField);
      i ? (t.startTimeField = i.name, i.type = "esriFieldTypeDate") : t.startTimeField = null;
    }

    if (t.endTimeField) {
      const i = e.get(t.endTimeField);
      i ? (t.endTimeField = i.name, i.type = "esriFieldTypeDate") : t.endTimeField = null;
    }

    if (t.trackIdField) {
      const i = e.get(t.trackIdField);
      t.trackIdField = i ? i.name : null;
    }

    t.startTimeField || t.endTimeField || (u.timeInfo = null);
  }

  return r;
}

const O = ["lat", "latitude", "latitude83", "latdecdeg", "lat_dd", "y", "ycenter", "point-y"],
      k = ["lon", "lng", "long", "longitude", "longitude83", "longdecdeg", "long_dd", "x", "xcenter", "point-x"];

function P(e) {
  const t = e.map(e => e.toLowerCase());
  return {
    longitudeFieldName: e[t.indexOf(k.find(e => t.includes(e)))],
    latitudeFieldName: e[t.indexOf(O.find(e => t.includes(e)))]
  };
}

function V(e, t, i, n) {
  const r = [],
        s = (0,_csv_csv_js__WEBPACK_IMPORTED_MODULE_17__.parseRows)(e, i, t),
        o = [];

  for (const a of s) {
    if (10 === o.length) break;
    o.push(a);
  }

  for (const a of i) if (a === n.longitudeFieldName || a === n.latitudeFieldName) r.push({
    name: a,
    type: "esriFieldTypeDouble",
    alias: a
  });else {
    const e = R(o.map(e => e[a])),
          t = {
      name: a,
      type: null,
      alias: a
    };

    switch (e) {
      case "integer":
        t.type = "esriFieldTypeInteger";
        break;

      case "double":
        t.type = "esriFieldTypeDouble";
        break;

      case "date":
        t.type = "esriFieldTypeDate", t.length = 36;
        break;

      default:
        t.type = "esriFieldTypeString", t.length = 255;
    }

    r.push(t);
  }

  return r;
}

function R(e) {
  if (!e.length) return "string";
  const t = /[^+-.,0-9]/;
  return e.map(e => {
    let i = !1;

    if ("" !== e) {
      if (t.test(e)) i = !0;else {
        let t = M(e);
        if (!isNaN(t)) return /[.,]/.test(e) || !Number.isInteger(t) || t > 214783647 || t < -214783648 ? "double" : "integer";
        if (-1 === e.indexOf("E")) i = !0;else {
          if (t = Number(e), !isNaN(t)) return "double";
          if (-1 === e.indexOf(",")) i = !0;else {
            if (e = e.replace(",", "."), t = Number(e), !isNaN(t)) return "double";
            i = !0;
          }
        }
      }

      if (i) {
        if (!/^[-]?\d*[.,]?\d*$/.test(e)) {
          return L(new Date(e), e) ? "date" : "string";
        }

        return "string";
      }

      return "string";
    }
  }).reduce((e, t) => void 0 === e || e === t ? t : "string" === e || "string" === t ? "string" : "double" === e || "double" === t ? "double" : void 0);
}

const G = /^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,
      Q = Number.isNaN(new Date("technology 10").getTime());

function L(e, t) {
  if (!e || "[object Date]" !== Object.prototype.toString.call(e) || isNaN(e.getTime())) return !1;
  let i = !0;

  if (!Q && /\d+\W*$/.test(t)) {
    const e = t.match(/[a-zA-Z]{2,}/);

    if (e) {
      let t = !1,
          n = 0;

      for (; !t && n <= e.length;) t = !G.test(e[n]), n++;

      i = !t;
    }
  }

  return i;
}

const M = function () {
  const e = (0,_core_number_js__WEBPACK_IMPORTED_MODULE_5__._parseInfo)(),
        t = new RegExp("^" + e.regexp + "$"),
        i = new RegExp("[" + e.group + "\\s\\xa0]", "g"),
        r = e.factor;
  return function (n) {
    const s = t.exec(n);
    if (e.factor = r, !s) return NaN;
    let o = s[1];

    if (!s[1]) {
      if (!s[2]) return NaN;
      o = s[2], e.factor *= -1;
    }

    return o = o.replace(i, "").replace(e.decimal, "."), +o * e.factor;
  };
}();



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
//# sourceMappingURL=9440.55ed0b06114eef8a6c52.js.map