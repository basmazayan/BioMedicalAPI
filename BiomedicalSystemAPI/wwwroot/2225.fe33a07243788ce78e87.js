"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[2225],{

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

/***/ 16879:
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/ogc/dateUtils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseDate": () => (/* binding */ n),
/* harmony export */   "parseJSDate": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){var s;return null!=(s=t(n))?s:e(n)}function e(n){const e=new Date(n).getTime();return Number.isNaN(e)?null:e}function t(n){var e,t,u,r;const o=s.exec(n);if(!o)return null;const l=o.groups,f=+l.year,i=+l.month-1,d=+l.day,a=+(null!=(e=l.hours)?e:"0"),c=+(null!=(t=l.minutes)?t:"0"),m=+(null!=(u=l.seconds)?u:"0");if(a>23)return null;if(c>59)return null;if(m>59)return null;const g=null!=(r=l.ms)?r:"0",T=g?+g.padEnd(3,"0").substring(0,3):0;let N;if(l.isUTC)N=Date.UTC(f,i,d,a,c,m,T);else if(l.offsetSign){const n=+l.offsetHours,e=+l.offsetMinutes;N=6e4*("+"===l.offsetSign?-1:1)*(60*n+e)+Date.UTC(f,i,d,a,c,m,T)}else N=new Date(f,i,d,a,c,m,T).getTime();return Number.isNaN(N)?null:N}const s=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;


/***/ }),

/***/ 42225:
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/ogc/wfsUtils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WFS_OID_FIELD_NAME": () => (/* binding */ v),
/* harmony export */   "describeFeatureType": () => (/* binding */ J),
/* harmony export */   "findFeatureType": () => (/* binding */ W),
/* harmony export */   "getCapabilities": () => (/* binding */ D),
/* harmony export */   "getFeature": () => (/* binding */ K),
/* harmony export */   "getFeatureCount": () => (/* binding */ ee),
/* harmony export */   "getFeatureTypeInfo": () => (/* binding */ Y),
/* harmony export */   "getWFSLayerInfo": () => (/* binding */ X),
/* harmony export */   "parseDescribeFeatureTypeResponse": () => (/* binding */ Q),
/* harmony export */   "parseGetCapabilitiesResponse": () => (/* binding */ I),
/* harmony export */   "prepareWFSLayerFields": () => (/* binding */ z)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_iteratorUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/iteratorUtils.js */ 8658);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/projection.js */ 15695);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ 35169);
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/support/typeUtils.js */ 557);
/* harmony import */ var _graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../graphics/sources/geojson/geojson.js */ 98254);
/* harmony import */ var _dateUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dateUtils.js */ 16879);
/* harmony import */ var _xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./xmlUtils.js */ 82465);
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../support/Field.js */ 66536);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
















const S = "xlink:href",
      x = "2.0.0",
      v = "__esri_wfs_id__",
      C = "wfs-layer:getWFSLayerTypeInfo-error",
      E = "wfs-layer:empty-service",
      N = "wfs-layer:feature-type-not-found",
      P = "wfs-layer:geojson-not-supported",
      R = "wfs-layer:kvp-encoding-not-supported",
      j = "wfs-layer:malformed-json",
      A = "wfs-layer:unknown-geometry-type",
      G = "wfs-layer:unknown-field-type",
      k = "wfs-layer:unsupported-spatial-reference",
      U = "wfs-layer:unsupported-wfs-version";

function D(_x, _x2) {
  return _D.apply(this, arguments);
}

function _D() {
  _D = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, r) {
    const n = I((yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(t, {
      responseType: "text",
      query: {
        SERVICE: "WFS",
        REQUEST: "GetCapabilities",
        VERSION: x,
        ...(null == r ? void 0 : r.customParameters)
      },
      signal: null == r ? void 0 : r.signal
    })).data);
    return $(t, n), n;
  });
  return _D.apply(this, arguments);
}

function I(e) {
  const t = te(e);
  ne(t), ae(t);
  const r = t.firstElementChild,
        a = (0,_core_iteratorUtils_js__WEBPACK_IMPORTED_MODULE_4__.cache)(M(r));
  return {
    operations: L(r),

    get featureTypes() {
      return Array.from(a());
    },

    readFeatureTypes: a
  };
}

const O = new Set(["json", "application/json", "geojson", "application/json; subtype=geojson"]);

function L(e) {
  let r = !1;
  const n = {
    GetCapabilities: {
      url: ""
    },
    DescribeFeatureType: {
      url: ""
    },
    GetFeature: {
      url: "",
      outputFormat: null,
      supportsPagination: !1
    }
  };
  if ((0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__.visitXML)(e, {
    OperationsMetadata: {
      Operation: e => {
        switch (e.getAttribute("name")) {
          case "GetCapabilities":
            return {
              DCP: {
                HTTP: {
                  Get: e => {
                    n.GetCapabilities.url = e.getAttribute(S);
                  }
                }
              }
            };

          case "DescribeFeatureType":
            return {
              DCP: {
                HTTP: {
                  Get: e => {
                    n.DescribeFeatureType.url = e.getAttribute(S);
                  }
                }
              }
            };

          case "GetFeature":
            return {
              DCP: {
                HTTP: {
                  Get: e => {
                    n.GetFeature.url = e.getAttribute(S);
                  }
                }
              },
              Parameter: e => {
                if ("outputFormat" === e.getAttribute("name")) return {
                  AllowedValues: {
                    Value: e => {
                      const t = e.textContent;
                      O.has(t.toLowerCase()) && (n.GetFeature.outputFormat = t);
                    }
                  }
                };
              }
            };
        }
      },
      Constraint: e => {
        switch (e.getAttribute("name")) {
          case "KVPEncoding":
            return {
              DefaultValue: e => {
                r = "true" === e.textContent.toLowerCase();
              }
            };

          case "ImplementsResultPaging":
            return {
              DefaultValue: e => {
                n.GetFeature.supportsPagination = "true" === e.textContent.toLowerCase();
              }
            };
        }
      }
    }
  }), !r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(R, "WFS service doesn't support key/value pair (KVP) encoding");
  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(n.GetFeature.outputFormat)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(P, "WFS service doesn't support GeoJSON output format");
  return n;
}

function $(e, t) {
  (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.isHTTPSProtocol)(e) && ((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.hasSameOrigin)(e, t.operations.DescribeFeatureType.url, !0) && (t.operations.DescribeFeatureType.url = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.toHTTPS)(t.operations.DescribeFeatureType.url)), (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.hasSameOrigin)(e, t.operations.GetFeature.url, !0) && (t.operations.GetFeature.url = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.toHTTPS)(t.operations.GetFeature.url)));
}

function M(e) {
  return (0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__.iterateXML)(e, {
    FeatureTypeList: {
      FeatureType: e => {
        const t = {
          typeName: "undefined:undefined",
          name: "",
          title: "",
          description: "",
          extent: null,
          namespacePrefix: "",
          namespaceUri: "",
          supportedSpatialReferences: []
        },
              r = new Set([4326]),
              n = e => {
          var t, n;
          const a = parseInt(null == (t = e.textContent.match(/(?<wkid>\d+$)/i)) || null == (n = t.groups) ? void 0 : n.wkid, 10);
          Number.isNaN(a) || r.add(a);
        };

        return (0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__.visitXML)(e, {
          Name: e => {
            const {
              name: r,
              prefix: n
            } = re(e.textContent);
            t.typeName = `${n}:${r}`, t.name = r, t.namespacePrefix = n, t.namespaceUri = e.lookupNamespaceURI(n);
          },
          Abstract: e => {
            t.description = e.textContent;
          },
          Title: e => {
            t.title = e.textContent;
          },
          WGS84BoundingBox: e => {
            t.extent = V(e);
          },
          DefaultSRS: n,
          DefaultCRS: n,
          OtherSRS: n,
          OtherCRS: n
        }), t.title || (t.title = t.name), t.supportedSpatialReferences.push(...r), t;
      }
    }
  });
}

function V(e) {
  let t, r, n, a;

  for (const o of e.children) switch (o.localName) {
    case "LowerCorner":
      [t, r] = o.textContent.split(" ").map(e => Number.parseFloat(e));
      break;

    case "UpperCorner":
      [n, a] = o.textContent.split(" ").map(e => Number.parseFloat(e));
  }

  return {
    xmin: t,
    ymin: r,
    xmax: n,
    ymax: a,
    spatialReference: _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.WGS84
  };
}

function W(e, t, n) {
  return (0,_core_iteratorUtils_js__WEBPACK_IMPORTED_MODULE_4__.find)(e, e => n ? e.name === t && e.namespaceUri === n : e.typeName === t || e.name === t);
}

function X(_x3, _x4, _x5) {
  return _X.apply(this, arguments);
}

function _X() {
  _X = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, r, n = {}) {
    var a;
    const {
      featureType: o,
      extent: i
    } = yield Y(e, t, r, n),
          {
      fields: s,
      geometryType: u,
      swapXY: l,
      objectIdField: p,
      geometryField: c
    } = yield q(e, o.typeName, n);
    return {
      url: e.operations.GetCapabilities.url,
      name: o.name,
      namespaceUri: o.namespaceUri,
      fields: s,
      geometryField: c,
      geometryType: u,
      objectIdField: p,
      spatialReference: null != (a = n.spatialReference) ? a : _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__.default.WGS84,
      extent: i,
      swapXY: l,
      wfsCapabilities: e,
      customParameters: n.customParameters
    };
  });
  return _X.apply(this, arguments);
}

function Y(_x6, _x7, _x8) {
  return _Y.apply(this, arguments);
}

function _Y() {
  _Y = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r, n, o = {}) {
    const {
      spatialReference: i = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__.default.WGS84
    } = o,
          s = e.readFeatureTypes(),
          u = r ? W(s, r, n) : s.next().value;
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(u)) throw r ? new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(N, `The type '${r}' could not be found in the service`) : new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(E, "The service is empty");
    let l = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__.default({ ...u.extent,
      spatialReference: i
    });
    if (!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.equals)(i, _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.WGS84)) try {
      yield (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_8__.initializeProjection)(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.WGS84, i, void 0, o), l = (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_8__.project)(l, _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.WGS84);
    } catch {
      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(k, "Projection not supported");
    }
    return {
      extent: l,
      spatialReference: i,
      featureType: u
    };
  });
  return _Y.apply(this, arguments);
}

function q(_x9, _x10) {
  return _q.apply(this, arguments);
}

function _q() {
  _q = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r, n = {}) {
    const [o, s] = yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.eachAlways)([J(e.operations.DescribeFeatureType.url, r, n), _(e, r, n)]);
    if (o.error || s.error) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(C, `An error occurred while getting info about the feature type '${r}'`, {
      error: o.error || s.error
    });
    const {
      fields: u,
      errors: l
    } = o.value,
          p = o.value.geometryType || s.value.geometryType,
          c = s.value.swapXY;
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(p)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(A, `The geometry type could not be determined for type '${r}`, {
      typeName: r,
      geometryType: p,
      fields: u,
      errors: l
    });
    return { ...z(u),
      geometryType: p,
      swapXY: c
    };
  });
  return _q.apply(this, arguments);
}

function z(e) {
  var t;
  const r = e.find(e => "geometry" === e.type);
  let n = e.find(e => "oid" === e.type);
  return e = e.filter(e => "geometry" !== e.type), n || (n = new _support_Field_js__WEBPACK_IMPORTED_MODULE_14__.default({
    name: v,
    type: "oid",
    alias: v
  }), e.unshift(n)), {
    geometryField: null != (t = null == r ? void 0 : r.name) ? t : null,
    objectIdField: n.name,
    fields: e
  };
}

function _(_x11, _x12) {
  return _2.apply(this, arguments);
}

function _2() {
  _2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, r, n = {}) {
    var a;
    let o,
        i = !1;
    const [s, u] = yield Promise.all([K(t.operations.GetFeature.url, r, t.operations.GetFeature.outputFormat, { ...n,
      count: 1
    }), (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(t.operations.GetFeature.url, {
      responseType: "text",
      query: Z(r, void 0, { ...n,
        count: 1
      }),
      signal: null == n ? void 0 : n.signal
    })]),
          l = "FeatureCollection" === s.type && (null == (a = s.features[0]) ? void 0 : a.geometry);

    if (l) {
      let e;

      switch (o = _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_10__.featureGeometryTypeKebabDictionary.fromJSON((0,_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_11__.getGeometryType)(l.type)), l.type) {
        case "Point":
          e = l.coordinates;
          break;

        case "LineString":
        case "MultiPoint":
          e = l.coordinates[0];
          break;

        case "MultiLineString":
        case "Polygon":
          e = l.coordinates[0][0];
          break;

        case "MultiPolygon":
          e = l.coordinates[0][0][0];
      }

      const t = /<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);

      if (t) {
        const r = e[0].toFixed(3),
              n = e[1].toFixed(3),
              a = parseFloat(t[1]).toFixed(3);
        r === parseFloat(t[2]).toFixed(3) && n === a && (i = !0);
      }
    }

    return {
      geometryType: o,
      swapXY: i
    };
  });
  return _2.apply(this, arguments);
}

function J(_x13, _x14, _x15) {
  return _J.apply(this, arguments);
}

function _J() {
  _J = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, r, n) {
    return Q(r, (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(t, {
      responseType: "text",
      query: {
        SERVICE: "WFS",
        REQUEST: "DescribeFeatureType",
        VERSION: x,
        TYPENAME: r,
        ...(null == n ? void 0 : n.customParameters)
      },
      signal: null == n ? void 0 : n.signal
    })).data);
  });
  return _J.apply(this, arguments);
}

function Q(e, n) {
  const {
    name: a
  } = re(e),
        i = te(n);
  ae(i);
  const s = (0,_core_iteratorUtils_js__WEBPACK_IMPORTED_MODULE_4__.find)((0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__.iterateXML)(i.firstElementChild, {
    element: e => ({
      name: e.getAttribute("name"),
      typeName: re(e.getAttribute("type")).name
    })
  }), ({
    name: e
  }) => e === a);

  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(s)) {
    const e = (0,_core_iteratorUtils_js__WEBPACK_IMPORTED_MODULE_4__.find)((0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__.iterateXML)(i.firstElementChild, {
      complexType: e => e
    }), e => e.getAttribute("name") === s.typeName);
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e)) return B(e);
  }

  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(N, `Type '${e}' not found in document`, {
    document: new XMLSerializer().serializeToString(i)
  });
}

const H = new Set(["objectid", "fid"]);

function B(e) {
  var r, n;
  const a = [],
        o = [];
  let i;
  const s = (0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__.iterateXML)(e, {
    complexContent: {
      extension: {
        sequence: {
          element: e => e
        }
      }
    }
  });

  for (const u of s) {
    const s = u.getAttribute("name");
    if (!s) continue;
    let l, p;
    if (u.hasAttribute("type") ? l = re(u.getAttribute("type")).name : (0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__.visitXML)(u, {
      simpleType: {
        restriction: e => (l = re(e.getAttribute("base")).name, {
          maxLength: e => {
            p = +e.getAttribute("value");
          }
        })
      }
    }), !l) continue;
    const c = "true" === u.getAttribute("nillable");
    let m = !1;

    switch (l.toLowerCase()) {
      case "integer":
      case "nonpositiveinteger":
      case "negativeinteger":
      case "long":
      case "int":
      case "short":
      case "byte":
      case "nonnegativeinteger":
      case "unsignedlong":
      case "unsignedint":
      case "unsignedshort":
      case "unsignedbyte":
      case "positiveinteger":
        o.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_14__.default({
          name: s,
          alias: s,
          type: "integer",
          nullable: c
        }));
        break;

      case "float":
      case "double":
      case "decimal":
        o.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_14__.default({
          name: s,
          alias: s,
          type: "double",
          nullable: c
        }));
        break;

      case "boolean":
      case "string":
      case "gyearmonth":
      case "gyear":
      case "gmonthday":
      case "gday":
      case "gmonth":
      case "anyuri":
      case "qname":
      case "notation":
      case "normalizedstring":
      case "token":
      case "language":
      case "idrefs":
      case "entities":
      case "nmtoken":
      case "nmtokens":
      case "name":
      case "ncname":
      case "id":
      case "idref":
      case "entity":
      case "duration":
      case "time":
        o.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_14__.default({
          name: s,
          alias: s,
          type: "string",
          nullable: c,
          length: null != (r = p) ? r : 255
        }));
        break;

      case "datetime":
      case "date":
        o.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_14__.default({
          name: s,
          alias: s,
          type: "date",
          nullable: c,
          length: null != (n = p) ? n : 36
        }));
        break;

      case "pointpropertytype":
        i = "point", m = !0;
        break;

      case "multipointpropertytype":
        i = "multipoint", m = !0;
        break;

      case "curvepropertytype":
      case "multicurvepropertytype":
      case "multilinestringpropertytype":
        i = "polyline", m = !0;
        break;

      case "surfacepropertytype":
      case "multisurfacepropertytype":
      case "multipolygonpropertytype":
        i = "polygon", m = !0;
        break;

      case "geometrypropertytype":
      case "multigeometrypropertytype":
        m = !0, a.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(A, `geometry type '${l}' is not supported`, {
          type: new XMLSerializer().serializeToString(e)
        }));
        break;

      default:
        a.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(G, `Unknown field type '${l}'`, {
          type: new XMLSerializer().serializeToString(e)
        }));
    }

    m && o.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_14__.default({
      name: s,
      alias: s,
      type: "geometry",
      nullable: c
    }));
  }

  for (const t of o) if ("integer" === t.type && !t.nullable && H.has(t.name.toLowerCase())) {
    t.type = "oid";
    break;
  }

  return {
    geometryType: i,
    fields: o,
    errors: a
  };
}

function K(_x16, _x17, _x18, _x19) {
  return _K.apply(this, arguments);
}

function _K() {
  _K = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, n, a, o) {
    let {
      data: i
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(r, {
      responseType: "text",
      query: Z(n, a, o),
      signal: null == o ? void 0 : o.signal
    });
    i = i.replace(/": +(-?\d+),(\d+)(,)?/g, '": $1.$2$3');

    try {
      var s;

      if (null != o && null != (s = o.dateFields) && s.length) {
        const e = new Set(o.dateFields);
        return JSON.parse(i, (t, r) => e.has(t) ? (0,_dateUtils_js__WEBPACK_IMPORTED_MODULE_12__.parseDate)(r) : r);
      }

      return JSON.parse(i);
    } catch (u) {
      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(j, "Error while parsing the response", {
        response: i,
        error: u
      });
    }
  });
  return _K.apply(this, arguments);
}

function Z(e, t, r) {
  return {
    SERVICE: "WFS",
    REQUEST: "GetFeature",
    VERSION: x,
    TYPENAMES: e,
    OUTPUTFORMAT: t,
    SRSNAME: "EPSG:4326",
    STARTINDEX: null == r ? void 0 : r.startIndex,
    COUNT: null == r ? void 0 : r.count,
    ...(null == r ? void 0 : r.customParameters)
  };
}

function ee(_x20, _x21, _x22) {
  return _ee.apply(this, arguments);
}

function _ee() {
  _ee = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, r, n) {
    const a = te((yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(t, {
      responseType: "text",
      query: {
        SERVICE: "WFS",
        REQUEST: "GetFeature",
        VERSION: x,
        TYPENAMES: r,
        RESULTTYPE: "hits",
        ...(null == n ? void 0 : n.customParameters)
      },
      signal: null == n ? void 0 : n.signal
    })).data);
    ae(a);
    const o = Number.parseFloat(a.firstElementChild.getAttribute("numberMatched"));
    return Number.isNaN(o) ? 0 : o;
  });
  return _ee.apply(this, arguments);
}

function te(e) {
  return new DOMParser().parseFromString(e.trim(), "text/xml");
}

function re(e) {
  const [t, r] = e.split(":");
  return {
    prefix: r ? t : "",
    name: null != r ? r : t
  };
}

function ne(e) {
  const r = e.firstElementChild.getAttribute("version");
  if (r && r !== x) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(U, `Unsupported WFS version ${r}. Supported version: ${x}`);
}

function ae(e) {
  let r, n;
  if ((0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__.visitXML)(e.firstElementChild, {
    Exception: e => (r = e.getAttribute("exceptionCode"), {
      ExceptionText: e => {
        n = e.textContent;
      }
    })
  }), r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default(`wfs-layer:${r}`, n);
}



/***/ }),

/***/ 82465:
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/ogc/xmlUtils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iterateXML": () => (/* binding */ n),
/* harmony export */   "visitXML": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(n,c){for(const e of n.children)if(e.localName in c){const n=c[e.localName];if("function"==typeof n){const c=n(e);c&&o(e,c)}else o(e,n)}}function*n(o,c){for(const e of o.children)if(e.localName in c){const o=c[e.localName];"function"==typeof o?yield o(e):yield*n(e,o)}}


/***/ })

}]);
//# sourceMappingURL=2225.fe33a07243788ce78e87.js.map