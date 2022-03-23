"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[4921],{

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


/***/ }),

/***/ 44921:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/ogc/ogcFeatureUtils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crsDefault": () => (/* binding */ F),
/* harmony export */   "crsPrefix": () => (/* binding */ j),
/* harmony export */   "getCollectionDefinition": () => (/* binding */ I),
/* harmony export */   "getServerCollections": () => (/* binding */ T),
/* harmony export */   "getServerConformance": () => (/* binding */ k),
/* harmony export */   "getServerLandingPage": () => (/* binding */ x),
/* harmony export */   "getServerOpenApi": () => (/* binding */ S),
/* harmony export */   "getSpatialReferenceWkid": () => (/* binding */ v),
/* harmony export */   "queryFeatureSetJSON": () => (/* binding */ N),
/* harmony export */   "queryOptimizedFeatureSet": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/support/webMercatorUtils.js */ 3403);
/* harmony import */ var _graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../graphics/OptimizedFeatureSet.js */ 98538);
/* harmony import */ var _graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../graphics/sources/geojson/geojson.js */ 98254);
/* harmony import */ var _graphics_sources_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../graphics/sources/support/clientSideDefaults.js */ 45033);
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../support/FieldsIndex.js */ 62419);
/* harmony import */ var _support_fieldType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/fieldType.js */ 34309);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/














const b = _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__.default.getLogger("esri.layers.graphics.sources.ogcfeature"),
      j = "http://www.opengis.net/def/crs/",
      F = `${j}OGC/1.3/CRS84`;

function I(_x, _x2) {
  return _I.apply(this, arguments);
}

function _I() {
  _I = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i, r, a = {}, s = 5) {
    const {
      links: o
    } = i,
          l = G(o, "items", "application/geo+json") || G(o, "http://www.opengis.net/def/rel/ogc/1.0/items", "application/geo+json");
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(l)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("ogc-feature-layer:missing-items-page", "Missing items url");
    const {
      data: c
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(l.href, {
      signal: a.signal,
      query: {
        limit: s,
        ...a.customParameters,
        token: a.apiKey
      },
      headers: {
        accept: "application/geo+json"
      }
    });
    yield (0,_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_10__.validateGeoJSON)(c);
    const d = (0,_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_10__.inferLayerProperties)(c, {
      geometryType: r.geometryType
    }),
          u = r.fields || d.fields || [],
          f = null != r.hasZ ? r.hasZ : d.hasZ,
          h = d.geometryType,
          j = r.objectIdField || d.objectIdFieldName || "OBJECTID";
    let F = r.timeInfo;
    const I = u.find(e => e.name === j);

    if (!I) {
      if (!d.objectIdFieldType) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("ogc-feature-layer:missing-feature-id", "Collection geojson require a feature id as a unique identifier");
      u.unshift({
        name: j,
        alias: j,
        type: "esriFieldTypeOID",
        editable: !1,
        nullable: !1
      });
    } else I.type = "esriFieldTypeOID", I.editable = !1, I.nullable = !1;

    if (j !== d.objectIdFieldName) {
      const e = u.find(e => e.name === d.objectIdFieldName);
      e && (e.type = "esriFieldTypeInteger");
    }

    u === d.fields && d.unknownFields.length > 0 && b.warn({
      name: "ogc-feature-layer:unknown-field-types",
      message: "Some fields types couldn't be inferred from the features and were dropped",
      details: {
        unknownFields: d.unknownFields
      }
    });

    for (const e of u) {
      if (null == e.name && (e.name = e.alias), null == e.alias && (e.alias = e.name), "esriFieldTypeOID" !== e.type && "esriFieldTypeGlobalID" !== e.type && (e.editable = null == e.editable || !!e.editable, e.nullable = null == e.nullable || !!e.nullable), !e.name) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("ogc-feature-layer:invalid-field-name", "field name is missing", {
        field: e
      });
      if (-1 === _support_fieldType_js__WEBPACK_IMPORTED_MODULE_13__.kebabDict.jsonValues.indexOf(e.type)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("ogc-feature-layer:invalid-field-type", `invalid type for field "${e.name}"`, {
        field: e
      });
    }

    if (F) {
      const e = new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_12__.default(u);

      if (F.startTimeField) {
        const t = e.get(F.startTimeField);
        t ? (F.startTimeField = t.name, t.type = "esriFieldTypeDate") : F.startTimeField = null;
      }

      if (F.endTimeField) {
        const t = e.get(F.endTimeField);
        t ? (F.endTimeField = t.name, t.type = "esriFieldTypeDate") : F.endTimeField = null;
      }

      if (F.trackIdField) {
        const t = e.get(F.trackIdField);
        t ? F.trackIdField = t.name : (F.trackIdField = null, b.warn({
          name: "ogc-feature-layer:invalid-timeInfo-trackIdField",
          message: "trackIdField is missing",
          details: {
            timeInfo: F
          }
        }));
      }

      F.startTimeField || F.endTimeField || (b.warn({
        name: "ogc-feature-layer:invalid-timeInfo",
        message: "startTimeField and endTimeField are missing",
        details: {
          timeInfo: F
        }
      }), F = null);
    }

    return {
      drawingInfo: h ? (0,_graphics_sources_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_11__.createDrawingInfo)(h) : null,
      geometryType: h,
      fields: u,
      hasZ: !!f,
      objectIdField: j,
      timeInfo: F
    };
  });
  return _I.apply(this, arguments);
}

function T(_x3) {
  return _T.apply(this, arguments);
}

function _T() {
  _T = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i, r = {}) {
    const {
      links: a
    } = i,
          s = G(a, "data", "application/json") || G(a, "http://www.opengis.net/def/rel/ogc/1.0/data", "application/json");
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(s)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("ogc-feature-layer:missing-collections-page", "Missing collections url");
    const {
      apiKey: o,
      customParameters: l,
      signal: c
    } = r,
          {
      data: d
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(s.href, {
      signal: c,
      headers: {
        accept: "application/json"
      },
      query: { ...l,
        token: o
      }
    });
    return d;
  });
  return _T.apply(this, arguments);
}

function k(_x4) {
  return _k.apply(this, arguments);
}

function _k() {
  _k = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i, r = {}) {
    const {
      links: a
    } = i,
          s = G(a, "conformance", "application/json") || G(a, "http://www.opengis.net/def/rel/ogc/1.0/conformance", "application/json");
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(s)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("ogc-feature-layer:missing-conformance-page", "Missing conformance url");
    const {
      apiKey: o,
      customParameters: l,
      signal: c
    } = r,
          {
      data: d
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(s.href, {
      signal: c,
      headers: {
        accept: "application/json"
      },
      query: { ...l,
        token: o
      }
    });
    return d;
  });
  return _k.apply(this, arguments);
}

function x(_x5) {
  return _x6.apply(this, arguments);
}

function _x6() {
  _x6 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, i = {}) {
    const {
      apiKey: n,
      customParameters: r,
      signal: a
    } = i,
          {
      data: s
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(t, {
      signal: a,
      headers: {
        accept: "application/json"
      },
      query: { ...r,
        token: n
      }
    });
    return s;
  });
  return _x6.apply(this, arguments);
}

function S(_x7) {
  return _S.apply(this, arguments);
}

function _S() {
  _S = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, i = {}) {
    const r = "application/vnd.oai.openapi+json;version=3.0",
          a = G(t.links, "service-desc", r);
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(a)) return b.warn("ogc-feature-layer:missing-openapi-page", "The OGC API-Features server does not have an OpenAPI page."), null;
    const {
      apiKey: s,
      customParameters: o,
      signal: l
    } = i,
          {
      data: c
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(a.href, {
      signal: l,
      headers: {
        accept: r
      },
      query: { ...o,
        token: s
      }
    });
    return c;
  });
  return _S.apply(this, arguments);
}

function v(e) {
  const t = /^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),
        i = null == t ? void 0 : t.groups;
  if (!i) return null;
  const {
    authority: n,
    code: r
  } = i;

  switch (n.toLowerCase()) {
    case "ogc":
      switch (r.toLowerCase()) {
        case "crs27":
          return _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__.default.GCS_NAD_1927.wkid;

        case "crs83":
          return 4269;

        case "crs84":
        case "crs84h":
          return _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__.default.WGS84.wkid;

        default:
          return null;
      }

    case "esri":
    case "epsg":
      {
        const e = Number.parseInt(r, 10);
        return Number.isNaN(e) ? null : e;
      }

    default:
      return null;
  }
}

function N(_x8, _x9, _x10) {
  return _N.apply(this, arguments);
}

function _N() {
  _N = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, i) {
    const n = yield q(e, t, i);
    return (0,_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__.convertToFeatureSet)(n);
  });
  return _N.apply(this, arguments);
}

function q(_x11, _x12, _x13) {
  return _q.apply(this, arguments);
}

function _q() {
  _q = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i, l, p) {
    const {
      capabilities: {
        query: {
          maxRecordCount: m
        }
      },
      collection: g,
      layerDefinition: y,
      queryParameters: {
        apiKey: w,
        customParameters: b
      },
      spatialReference: j,
      supportedCrs: F
    } = i,
          {
      links: I
    } = g,
          T = G(I, "items", "application/geo+json") || G(I, "http://www.opengis.net/def/rel/ogc/1.0/items", "application/geo+json");
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(T)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("ogc-feature-layer:missing-items-page", "Missing items url");
    const {
      geometry: k,
      num: x,
      start: S,
      timeExtent: v,
      where: N
    } = l;
    if (l.objectIds) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("ogc-feature-layer:query-by-objectids-not-supported", "Queries with objectids are not supported");
    const q = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__.default.fromJSON(j),
          M = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.unwrapOr)(l.outSpatialReference, q),
          C = M.isWGS84 ? null : O(M, F),
          P = D(k, F),
          W = R(v),
          Z = $(N),
          K = null != x ? x : null != S && void 0 !== S ? 10 : m,
          {
      data: L
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(T.href, { ...p,
      query: { ...b,
        ...P,
        crs: C,
        datetime: W,
        query: Z,
        limit: K,
        startindex: S,
        token: w
      },
      headers: {
        accept: "application/geo+json"
      }
    });
    let A = !1;

    if (L.links) {
      const e = L.links.find(e => "next" === e.rel);
      A = !!e;
    }

    !A && Number.isInteger(L.numberMatched) && Number.isInteger(L.numberReturned) && (A = L.numberReturned < L.numberMatched);
    const {
      fields: E,
      globalIdField: J,
      hasM: U,
      hasZ: _,
      objectIdField: z
    } = y,
          B = y.geometryType,
          Q = (0,_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_10__.createOptimizedFeatures)(L, {
      geometryType: B,
      hasZ: _,
      objectIdField: z
    });
    if (!C && M.isWebMercator) for (const e of Q) if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e.geometry)) {
      const t = (0,_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__.convertToGeometry)(e.geometry, B, _, !1);
      t.spatialReference = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__.default.WGS84, e.geometry = (0,_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_8__.convertFromGeometry)((0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.project)(t, M));
    }

    for (const e of Q) e.objectId = e.attributes[z];

    const V = C || !C && M.isWebMercator ? M.toJSON() : _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.WGS84,
          H = new _graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_9__.default();
    return H.exceededTransferLimit = A, H.features = Q, H.fields = E, H.geometryType = B, H.globalIdFieldName = J, H.hasM = U, H.hasZ = _, H.objectIdFieldName = z, H.spatialReference = V, H;
  });
  return _q.apply(this, arguments);
}

function M(e) {
  return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e) && "extent" === e.type;
}

function O(e, t) {
  var i, n, r;
  const {
    isWebMercator: a,
    wkid: s
  } = e;
  if (!s) return null;
  const o = a ? null != (i = null != (n = null != (r = t[3857]) ? r : t[102100]) ? n : t[102113]) ? i : t[900913] : t[e.wkid];
  return o ? `${j}${o}` : null;
}

function C(e) {
  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(e)) return "";
  const {
    xmin: t,
    ymin: i,
    xmax: r,
    ymax: a
  } = e;
  return `${t},${i},${r},${a}`;
}

function R(e) {
  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(e)) return null;
  const {
    start: t,
    end: i
  } = e;
  return `${(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(t) ? t.toISOString() : ".."}/${(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(i) ? i.toISOString() : ".."}`;
}

function $(e) {
  return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(e) || !e || "1=1" === e ? null : e;
}

function D(e, t) {
  if (!M(e)) return null;
  const {
    spatialReference: i
  } = e;
  if (!i || i.isWGS84) return {
    bbox: C(e)
  };
  const n = O(i, t);
  return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(n) ? {
    bbox: C(e),
    "bbox-crs": n
  } : i.isWebMercator ? {
    bbox: C((0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.project)(e, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__.default.WGS84))
  } : null;
}

function G(e, t, i) {
  return e.find(e => e.rel === t && e.type === i) || e.find(e => e.rel === t && !e.type);
}



/***/ })

}]);
//# sourceMappingURL=4921.af62ff6d9a1632078b95.js.map