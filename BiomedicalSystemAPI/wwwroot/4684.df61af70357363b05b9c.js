"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[4684],{

/***/ 16987:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/MapImage.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_7__.default})],p.prototype,"extent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"height",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"href",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"opacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"rotation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"visible",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"width",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layer.support.MapImage")],p);const i=p;


/***/ }),

/***/ 59301:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geoprocessor/GPOptions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ 98240);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__.default{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__.default})],i.prototype,"outSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_7__.default})],i.prototype,"processExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__.default})],i.prototype,"processSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({nonNullable:!0})],i.prototype,"returnFeatureCollection",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({nonNullable:!0})],i.prototype,"returnM",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({nonNullable:!0})],i.prototype,"returnZ",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri/rest/geoprocessor/GPOptions")],i),i.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.ensureType)(i);const n=i;


/***/ }),

/***/ 79462:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geoprocessor/execute.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "execute": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _GPOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GPOptions.js */ 59301);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ 67658);
/* harmony import */ var _support_GPMessage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/GPMessage.js */ 51976);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




function o(_x, _x2, _x3, _x4) {
  return _o.apply(this, arguments);
}

function _o() {
  _o = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (o, m, a, p) {
    return a = _GPOptions_js__WEBPACK_IMPORTED_MODULE_1__.default.from(a || {}), (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.constructRequest)(o, "execute", a, m, p).then(s => {
      const t = s.data.results || [],
            o = s.data.messages || [];
      return {
        results: t.map(_utils_js__WEBPACK_IMPORTED_MODULE_2__.decode),
        messages: o.map(s => _support_GPMessage_js__WEBPACK_IMPORTED_MODULE_3__.default.fromJSON(s))
      };
    });
  });
  return _o.apply(this, arguments);
}



/***/ }),

/***/ 70932:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geoprocessor/submitJob.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitJob": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _GPOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GPOptions.js */ 59301);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ 67658);
/* harmony import */ var _support_JobInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/JobInfo.js */ 9986);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




function s(_x, _x2, _x3, _x4) {
  return _s.apply(this, arguments);
}

function _s() {
  _s = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (s, m, n, f) {
    return n = _GPOptions_js__WEBPACK_IMPORTED_MODULE_1__.default.from(n || {}), (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.constructRequest)(s, "submitJob", n, m, f).then(o => {
      const r = _support_JobInfo_js__WEBPACK_IMPORTED_MODULE_3__.default.fromJSON(o.data);
      return r.sourceUrl = s, r;
    });
  });
  return _s.apply(this, arguments);
}



/***/ }),

/***/ 67658:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geoprocessor/utils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collectGeometries": () => (/* binding */ p),
/* harmony export */   "constructRequest": () => (/* binding */ m),
/* harmony export */   "decode": () => (/* binding */ f),
/* harmony export */   "gpEncode": () => (/* binding */ P)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/normalizeUtils.js */ 46010);
/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layers/support/Field.js */ 66536);
/* harmony import */ var _layers_support_MapImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layers/support/MapImage.js */ 16987);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _support_DataFile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../support/DataFile.js */ 55572);
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../support/FeatureSet.js */ 42762);
/* harmony import */ var _support_LinearUnit_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/LinearUnit.js */ 51923);
/* harmony import */ var _support_ParameterValue_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../support/ParameterValue.js */ 76087);
/* harmony import */ var _support_RasterData_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../support/RasterData.js */ 22671);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/












function m(_x, _x2, _x3, _x4, _x5) {
  return _m.apply(this, arguments);
}

function _m() {
  _m = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, r, u, l, s) {
    const n = {},
          i = {},
          c = [];
    return p(l, c, n), (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__.normalizeCentralMeridian)(c).then(a => {
      const {
        outSpatialReference: c,
        processExtent: m,
        processSpatialReference: p,
        returnFeatureCollection: f,
        returnM: G,
        returnZ: v
      } = u,
            {
        path: S
      } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.parseUrl)(t);

      for (const e in n) {
        const t = n[e];
        i[e] = a.slice(t[0], t[1]);
      }

      const y = c ? c.wkid || c : null,
            D = p ? p.wkid || p : null,
            J = "execute" === r ? {
        returnFeatureCollection: f || void 0,
        returnM: G || void 0,
        returnZ: v || void 0
      } : null,
            M = P({ ...(m ? {
          context: {
            extent: m,
            outSR: y,
            processSR: D
          }
        } : {
          "env:outSR": y,
          "env:processSR": D
        }),
        ...l,
        ...J,
        f: "json"
      }, null, i),
            N = { ...s,
        query: M
      };
      return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(`${S}/${r}`, N);
    });
  });
  return _m.apply(this, arguments);
}

function p(e, a, t) {
  for (const r in e) {
    const o = e[r];

    if (o && "object" == typeof o && o instanceof _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_8__.default) {
      const {
        features: e
      } = o;
      t[r] = [a.length, a.length + e.length], e.forEach(e => {
        a.push(e.geometry);
      });
    }
  }
}

function f(e) {
  const a = e.dataType,
        o = _support_ParameterValue_js__WEBPACK_IMPORTED_MODULE_10__.default.fromJSON(e);

  switch (a) {
    case "GPBoolean":
    case "GPDouble":
    case "GPLong":
    case "GPString":
    case "GPMultiValue:GPBoolean":
    case "GPMultiValue:GPDouble":
    case "GPMultiValue:GPLong":
    case "GPMultiValue:GPString":
      return o;

    case "GPDate":
      o.value = new Date(o.value);
      break;

    case "GPDataFile":
      o.value = _support_DataFile_js__WEBPACK_IMPORTED_MODULE_7__.default.fromJSON(o.value);
      break;

    case "GPLinearUnit":
      o.value = _support_LinearUnit_js__WEBPACK_IMPORTED_MODULE_9__.default.fromJSON(o.value);
      break;

    case "GPFeatureRecordSetLayer":
    case "GPRecordSet":
      {
        const a = e.value.url;
        o.value = a ? _support_DataFile_js__WEBPACK_IMPORTED_MODULE_7__.default.fromJSON(o.value) : _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_8__.default.fromJSON(o.value);
        break;
      }

    case "GPRasterData":
    case "GPRasterDataLayer":
      {
        const a = e.value.mapImage;
        o.value = a ? _layers_support_MapImage_js__WEBPACK_IMPORTED_MODULE_5__.default.fromJSON(a) : _support_RasterData_js__WEBPACK_IMPORTED_MODULE_11__.default.fromJSON(o.value);
        break;
      }

    case "GPField":
      o.value = _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__.default.fromJSON(o.value);
      break;

    case "GPMultiValue:GPDate":
      {
        const e = o.value;
        o.value = e.map(e => new Date(e));
        break;
      }

    case "GPMultiValue:GPDataFile":
      o.value = o.value.map(e => _support_DataFile_js__WEBPACK_IMPORTED_MODULE_7__.default.fromJSON(e));
      break;

    case "GPMultiValue:GPLinearUnit":
      o.value = o.value.map(e => _support_LinearUnit_js__WEBPACK_IMPORTED_MODULE_9__.default.fromJSON(e));
      break;

    case "GPMultiValue:GPFeatureRecordSetLayer":
    case "GPMultiValue:GPRecordSet":
      o.value = o.value.map(e => _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_8__.default.fromJSON(e));
      break;

    case "GPMultiValue:GPRasterData":
    case "GPMultiValue:GPRasterDataLayer":
      o.value = o.value.map(e => e ? _layers_support_MapImage_js__WEBPACK_IMPORTED_MODULE_5__.default.fromJSON(e) : _support_RasterData_js__WEBPACK_IMPORTED_MODULE_11__.default.fromJSON(o.value));
      break;

    case "GPMultiValue:GPField":
      o.value = o.value.map(e => _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__.default.fromJSON(e));
  }

  return o;
}

function P(e, a, t) {
  for (const r in e) {
    const a = e[r];
    Array.isArray(a) ? e[r] = JSON.stringify(a.map(e => P({
      item: e
    }, !0).item)) : a instanceof Date && (e[r] = a.getTime());
  }

  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.encode)(e, a, t);
}



/***/ }),

/***/ 12285:
/*!*************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/print.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "execute": () => (/* binding */ Y),
/* harmony export */   "getGpPrintParams": () => (/* binding */ ee),
/* harmony export */   "getGpServerUrl": () => (/* binding */ ie),
/* harmony export */   "getMode": () => (/* binding */ Z),
/* harmony export */   "printCacheMap": () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.js */ 76925);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kernel.js */ 77871);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/jsonMap.js */ 74856);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/screenUtils.js */ 75244);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/urlUtils.js */ 30164);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../geometry/Polygon.js */ 38535);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layers/support/fieldUtils.js */ 81451);
/* harmony import */ var _renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../renderers/visualVariables/support/visualVariableUtils.js */ 7775);
/* harmony import */ var _geoprocessor_execute_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./geoprocessor/execute.js */ 79462);
/* harmony import */ var _geoprocessor_submitJob_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./geoprocessor/submitJob.js */ 70932);
/* harmony import */ var _support_fileFormat_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/fileFormat.js */ 11929);
/* harmony import */ var _support_layoutTemplate_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./support/layoutTemplate.js */ 45881);
/* harmony import */ var _support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./support/printTaskUtils.js */ 58598);
/* harmony import */ var _support_PrintTemplate_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./support/PrintTemplate.js */ 84638);
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../support/apiKeyUtils.js */ 78663);
/* harmony import */ var _views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/support/floorFilterUtils.js */ 89836);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



















const G = {
  Feet: "ft",
  Kilometers: "km",
  Meters: "m",
  Miles: "mi"
},
      Q = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__.JSONMap({
  esriFeet: "Feet",
  esriKilometers: "Kilometers",
  esriMeters: "Meters",
  esriMiles: "Miles"
}),
      H = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__.JSONMap({
  esriExecutionTypeSynchronous: "sync",
  esriExecutionTypeAsynchronous: "async"
}),
      X = new Map();

function Y(_x, _x2, _x3) {
  return _Y.apply(this, arguments);
}

function _Y() {
  _Y = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, r) {
    const a = ie(e);
    let n = X.get(a);
    return Promise.resolve().then(() => n ? {
      data: n.gpMetadata
    } : (n = {
      gpServerUrl: a,
      is11xService: !1,
      legendLayerNameMap: {},
      legendLayers: []
    }, (0,_request_js__WEBPACK_IMPORTED_MODULE_3__.default)(a, {
      query: {
        f: "json"
      }
    }))).then(e => (n.gpMetadata = e.data, n.cimVersion = n.gpMetadata.cimVersion, n.is11xService = !!n.cimVersion, X.set(a, n), ee(t, n))).then(i => {
      const a = Me(n);
      let l;

      const s = e => "sync" === a ? e.results && e.results[0] && e.results[0].value : l.fetchResultData("Output_File", null, r).then(e => e.value);

      return "async" === a ? (0,_geoprocessor_submitJob_js__WEBPACK_IMPORTED_MODULE_13__.submitJob)(e, i, null, r).then(e => (l = e, e.waitForJobCompletion({
        interval: t.updateDelay
      }).then(s))) : (0,_geoprocessor_execute_js__WEBPACK_IMPORTED_MODULE_12__.execute)(e, i, null, r).then(s);
    });
  });
  return _Y.apply(this, arguments);
}

function Z(_x4) {
  return _Z.apply(this, arguments);
}

function _Z() {
  _Z = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    const t = ie(e);
    return Me(X.get(t));
  });
  return _Z.apply(this, arguments);
}

function ee(_x5, _x6) {
  return _ee.apply(this, arguments);
}

function _ee() {
  _ee = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    t = t || {
      is11xService: !1,
      legendLayerNameMap: {},
      legendLayers: []
    };
    const i = e.template || new _support_PrintTemplate_js__WEBPACK_IMPORTED_MODULE_17__.default();
    null == i.showLabels && (i.showLabels = !0);
    const a = i.exportOptions;
    let n;
    const l = (0,_support_layoutTemplate_js__WEBPACK_IMPORTED_MODULE_15__.toJSON)(i.layout);

    if (a) {
      if (n = {
        dpi: a.dpi
      }, "map_only" === l.toLowerCase() || "" === l) {
        const e = a.width,
              t = a.height;
        n.outputSize = [e, t];
      }
    }

    const s = i.layoutOptions;
    let o;

    if (s) {
      let e, t;
      "Miles" === s.scalebarUnit || "Kilometers" === s.scalebarUnit ? (e = "Kilometers", t = "Miles") : "Meters" !== s.scalebarUnit && "Feet" !== s.scalebarUnit || (e = "Meters", t = "Feet"), o = {
        titleText: s.titleText,
        authorText: s.authorText,
        copyrightText: s.copyrightText,
        customTextElements: s.customTextElements,
        scaleBarOptions: {
          metricUnit: Q.toJSON(e),
          metricLabel: G[e],
          nonMetricUnit: Q.toJSON(t),
          nonMetricLabel: G[t]
        }
      };
    }

    let c = null;
    null != s && s.legendLayers && (c = s.legendLayers.map(e => {
      t.legendLayerNameMap[e.layerId] = e.title;
      const i = {
        id: e.layerId
      };
      return e.subLayerIds && (i.subLayerIds = e.subLayerIds), i;
    }));
    const u = yield te(e, i, t);

    if (u.operationalLayers) {
      const e = new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),
            i = /[\u0600-\u06FF]/,
            a = t => {
        const r = t.text,
              a = t.font,
              n = a && a.family && a.family.toLowerCase();
        r && a && ("arial" === n || "arial unicode ms" === n) && (a.family = e.test(r) ? "Arial Unicode MS" : "Arial", "normal" !== a.style && i.test(r) && (a.family = "Arial Unicode MS"));
      },
            n = () => {
        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("print-task:cim-symbol-unsupported", "CIMSymbol is not supported by a print service published from ArcMap");
      };

      u.operationalLayers.forEach(e => {
        var i, r, l;
        null != (i = e.featureCollection) && i.layers ? e.featureCollection.layers.forEach(e => {
          var i, r, l, s;

          if (null != (i = e.layerDefinition) && null != (r = i.drawingInfo) && null != (l = r.renderer) && l.symbol) {
            const i = e.layerDefinition.drawingInfo.renderer;
            "esriTS" === i.symbol.type ? a(i.symbol) : "CIMSymbolReference" !== i.symbol.type || t.is11xService || n();
          }

          null != (s = e.featureSet) && s.features && e.featureSet.features.forEach(e => {
            e.symbol && ("esriTS" === e.symbol.type ? a(e.symbol) : "CIMSymbolReference" !== e.symbol.type || t.is11xService || n());
          });
        }) : !t.is11xService && null != (r = e.layerDefinition) && null != (l = r.drawingInfo) && l.renderer && JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"') && n();
      });
    }

    e.outSpatialReference && (u.mapOptions.spatialReference = e.outSpatialReference.toJSON()), Object.assign(u, {
      exportOptions: n,
      layoutOptions: o || {}
    }), Object.assign(u.layoutOptions, {
      legendOptions: {
        operationalLayers: null != c ? c : t.legendLayers.slice()
      }
    }), t.legendLayers.length = 0, X.set(t.gpServerUrl, t);
    const y = {
      Web_Map_as_JSON: JSON.stringify(u),
      Format: (0,_support_fileFormat_js__WEBPACK_IMPORTED_MODULE_14__.toJSON)(i.format),
      Layout_Template: l
    };
    return e.extraParameters && Object.assign(y, e.extraParameters), y;
  });
  return _ee.apply(this, arguments);
}

function te(_x7, _x8, _x9) {
  return _te.apply(this, arguments);
}

function _te() {
  _te = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, i) {
    const r = e.view;
    let a = r.spatialReference;
    const l = {
      operationalLayers: yield re(r, t, i)
    };
    let s = i.ssExtent || e.extent || r.extent;

    if (a && a.isWrappable && (s = s.clone()._normalize(!0), a = s.spatialReference), l.mapOptions = {
      extent: s && s.toJSON(),
      spatialReference: a && a.toJSON(),
      showAttribution: t.attributionVisible
    }, i.ssExtent = null, r.background && (l.background = r.background.toJSON()), r.rotation && (l.mapOptions.rotation = -r.rotation), t.scalePreserved && (l.mapOptions.scale = t.outScale || r.scale), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(r.timeExtent)) {
      const e = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(r.timeExtent.start) ? r.timeExtent.start.getTime() : null,
            t = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(r.timeExtent.end) ? r.timeExtent.end.getTime() : null;
      l.mapOptions.time = [e, t];
    }

    return l;
  });
  return _te.apply(this, arguments);
}

function ie(e) {
  let t = e;
  const i = t.lastIndexOf("/GPServer/");
  return i > 0 && (t = t.slice(0, i + 9)), t;
}

function re(_x10, _x11, _x12) {
  return _re.apply(this, arguments);
}

function _re() {
  _re = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, i) {
    const r = [],
          a = {
      layerView: null,
      printTemplate: t,
      view: e
    };
    let n = 0;
    t.scalePreserved && (n = t.outScale || e.scale);
    const l = (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.getVisibleLayerViews)(e, n);

    for (const s of l) {
      const e = s.layer;
      if (!e.loaded || (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isGroupLayer)(e)) continue;
      let t;
      a.layerView = s, t = (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isScreenshotRequired)(s) ? yield ge(e, a, i) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isBingMapsLayer)(e) ? ae(e) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isCSVLayer)(e) ? yield ne(e, a, i) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isFeatureLayer)(e) ? yield se(e, a, i) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isGeoJSONLayer)(e) ? yield oe(e, a, i) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isGraphicsLayer)(e) ? yield ce(e, a, i) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isImageryLayer)(e) ? ue(e, i) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isImageryTileLayer)(e) ? ye(e, i) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isKMLLayer)(e) ? yield fe(e, a, i) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isMapImageLayer)(e) ? me(e, a, i) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isMapNotesLayer)(e) ? yield de(a, i) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isOpenStreetMapLayer)(e) ? pe() : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isStreamLayer)(e) ? yield be(e, a, i) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isTileLayer)(e) ? he(e) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isVectorTileLayer)(e) ? yield we(e, a, i) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isWebTileLayer)(e) ? Se(e) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isWMSLayer)(e) ? xe(e) : (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isWMTSLayer)(e) ? ve(e) : yield ge(e, a, i), t && (Array.isArray(t) ? r.push(...t) : (t.id = e.id, t.title = i.legendLayerNameMap[e.id] || e.title, t.opacity = e.opacity, t.minScale = e.minScale || 0, t.maxScale = e.maxScale || 0, (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.isBlendLayer)(e) && e.blendMode && "normal" !== e.blendMode && (t.blendMode = e.blendMode), r.push(t)));
    }

    if (n && r.forEach(e => {
      e.minScale = 0, e.maxScale = 0;
    }), e.graphics && e.graphics.length) {
      const a = yield le(null, e.graphics, t, i);
      a && r.push(a);
    }

    return r;
  });
  return _re.apply(this, arguments);
}

function ae(e) {
  return {
    culture: e.culture,
    key: e.key,
    type: "BingMaps" + ("aerial" === e.style ? "Aerial" : "hybrid" === e.style ? "Hybrid" : "Road")
  };
}

function ne(_x13, _x14, _x15) {
  return _ne.apply(this, arguments);
}

function _ne() {
  _ne = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, i) {
    e.legendEnabled && i.legendLayers.push({
      id: e.id
    });
    const r = t.layerView,
          a = t.printTemplate;
    let n;

    if (!i.is11xService || r.filter) {
      return le(e, yield Ee(r), a, i);
    }

    return n = {
      type: "CSV"
    }, e.write(n, {
      origin: "web-map"
    }), delete n.popupInfo, delete n.layerType, n.showLabels = a.showLabels && e.labelsVisible, n;
  });
  return _ne.apply(this, arguments);
}

function le(_x16, _x17, _x18, _x19) {
  return _le.apply(this, arguments);
}

function _le() {
  _le = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, i, r) {
    let a;

    const n = (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.createPolygonLayer)(),
          l = (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.createPolylineLayer)(),
          s = (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.createPointLayer)(),
          o = (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.createMultipointLayer)(),
          c = (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.createPointLayer)();

    if (c.layerDefinition.name = "textLayer", delete c.layerDefinition.drawingInfo, e) {
      if ("esri.layers.FeatureLayer" === e.declaredClass || "esri.layers.StreamLayer" === e.declaredClass ? n.layerDefinition.name = l.layerDefinition.name = s.layerDefinition.name = o.layerDefinition.name = r.legendLayerNameMap[e.id] || e.get("arcgisProps.title") || e.title : "esri.layers.GraphicsLayer" === e.declaredClass && (t = e.graphics.items), e.renderer) {
        const t = e.renderer.toJSON();
        n.layerDefinition.drawingInfo.renderer = t, l.layerDefinition.drawingInfo.renderer = t, s.layerDefinition.drawingInfo.renderer = t, o.layerDefinition.drawingInfo.renderer = t;
      }

      if (i.showLabels && e.labelsVisible && "function" == typeof e.write) {
        var u, m;
        const t = null == (u = e.write({}, {
          origin: "web-map"
        }).layerDefinition) || null == (m = u.drawingInfo) ? void 0 : m.labelingInfo;
        t && (a = !0, n.layerDefinition.drawingInfo.labelingInfo = t, l.layerDefinition.drawingInfo.labelingInfo = t, s.layerDefinition.drawingInfo.labelingInfo = t, o.layerDefinition.drawingInfo.labelingInfo = t);
      }
    }

    let d;
    null != e && e.renderer || a || (delete n.layerDefinition.drawingInfo, delete l.layerDefinition.drawingInfo, delete s.layerDefinition.drawingInfo, delete o.layerDefinition.drawingInfo);
    const p = null == e ? void 0 : e.fieldsIndex,
          g = null == e ? void 0 : e.renderer;

    if (p) {
      const t = new Set();
      a && (yield (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__.collectLabelingFields)(t, e)), g && "function" == typeof g.collectRequiredFields && (yield g.collectRequiredFields(t, p)), d = Array.from(t);
      const i = p.fields.map(e => e.toJSON());
      n.layerDefinition.fields = i, l.layerDefinition.fields = i, s.layerDefinition.fields = i, o.layerDefinition.fields = i;
    }

    const b = t && t.length;
    let h;

    for (let f = 0; f < b; f++) {
      var w;
      const a = t[f] || t.getItemAt(f);
      if (!1 === a.visible || !a.geometry) continue;
      if (h = a.toJSON(), h.hasOwnProperty("popupTemplate") && delete h.popupTemplate, h.geometry && h.geometry.z && delete h.geometry.z, h.symbol && h.symbol.outline && "esriCLS" === h.symbol.outline.type && !r.is11xService) continue;
      !r.is11xService && h.symbol && h.symbol.outline && h.symbol.outline.color && h.symbol.outline.color[3] && (h.symbol.outline.color[3] = 255);
      const u = e && e.renderer && ("valueExpression" in e.renderer && e.renderer.valueExpression || "hasVisualVariables" in e.renderer && e.renderer.hasVisualVariables());

      if (!h.symbol && e && e.renderer && u && !r.is11xService) {
        const t = e.renderer,
              i = yield t.getSymbolAsync(a);
        if (!i) continue;
        h.symbol = i.toJSON(), "hasVisualVariables" in t && t.hasVisualVariables() && (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.applyVisualVariables)(h.symbol, {
          renderer: t,
          graphic: a,
          symbol: i
        });
      }

      if (h.symbol && (h.symbol.angle || delete h.symbol.angle, Ve(h.symbol) ? h.symbol = yield Le(h.symbol, r) : h.symbol.text && delete h.attributes), (!i || !i.forceFeatureAttributes) && null != (w = d) && w.length) {
        const e = {};
        d.forEach(t => {
          h.attributes && h.attributes.hasOwnProperty(t) && (e[t] = h.attributes[t]);
        }), h.attributes = e;
      }

      "polygon" === a.geometry.type ? n.featureSet.features.push(h) : "polyline" === a.geometry.type ? l.featureSet.features.push(h) : "point" === a.geometry.type ? h.symbol && h.symbol.text ? c.featureSet.features.push(h) : s.featureSet.features.push(h) : "multipoint" === a.geometry.type ? o.featureSet.features.push(h) : "extent" === a.geometry.type && (h.geometry = _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_9__.default.fromExtent(a.geometry).toJSON(), n.featureSet.features.push(h));
    }

    const S = [n, l, o, s, c].filter(e => e.featureSet.features.length > 0);

    for (const y of S) {
      const e = y.featureSet.features.every(e => e.symbol);
      !e || i && i.forceFeatureAttributes || y.featureSet.features.forEach(e => {
        delete e.attributes;
      }), e && delete y.layerDefinition.drawingInfo, y.layerDefinition.drawingInfo && y.layerDefinition.drawingInfo.renderer && (yield Te(y.layerDefinition.drawingInfo.renderer, r));
    }

    return S.length ? {
      featureCollection: {
        layers: S
      },
      showLabels: a
    } : null;
  });
  return _le.apply(this, arguments);
}

function se(_x20, _x21, _x22) {
  return _se.apply(this, arguments);
}

function _se() {
  _se = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, i) {
    var r, a;
    let n;
    const l = e.renderer,
          s = parseFloat(i.cimVersion);
    if (e.featureReduction && (!i.is11xService || s < 2.9) || "dot-density" === (null == l ? void 0 : l.type) && (!i.is11xService || s < 2.6)) return ge(e, t, i);
    e.legendEnabled && i.legendLayers.push({
      id: e.id
    });
    const o = t.layerView,
          {
      printTemplate: c,
      view: u
    } = t,
          y = l && ("valueExpression" in l && l.valueExpression || "hasVisualVariables" in l && l.hasVisualVariables()),
          f = "feature-layer" !== (null == (r = e.source) ? void 0 : r.type) && "ogc-feature" !== (null == (a = e.source) ? void 0 : a.type);

    if (!i.is11xService && y || o.filter || f || !l || "field" in l && null != l.field && ("string" != typeof l.field || !e.getField(l.field))) {
      const t = yield Ee(o);
      n = yield le(e, t, c, i);
    } else {
      var d, p;

      if (n = {
        id: (g = e.write()).id,
        title: g.title,
        opacity: g.opacity,
        minScale: g.minScale,
        maxScale: g.maxScale,
        url: g.url,
        layerType: g.layerType,
        customParameters: g.customParameters,
        layerDefinition: g.layerDefinition
      }, n.showLabels = c.showLabels && e.labelsVisible, De(n, e), null != (d = n.layerDefinition) && null != (p = d.drawingInfo) && p.renderer && (delete n.layerDefinition.minScale, delete n.layerDefinition.maxScale, yield Te(n.layerDefinition.drawingInfo.renderer, i), "visualVariables" in l && l.visualVariables && l.visualVariables[0])) {
        const e = l.visualVariables[0];

        if ("size" === e.type && e.maxSize && "number" != typeof e.maxSize && e.minSize && "number" != typeof e.minSize) {
          const t = (0,_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_11__.getSizeRangeAtScale)(e, u.scale);
          n.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize = t.minSize, n.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize = t.maxSize;
        }
      }

      const t = (0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_19__.getFloorFilterClause)(o);
      t && (n.layerDefinition || (n.layerDefinition = {}), n.layerDefinition.definitionExpression = n.layerDefinition.definitionExpression ? `(${n.layerDefinition.definitionExpression}) AND (${t})` : t);
    }

    var g;
    return n;
  });
  return _se.apply(this, arguments);
}

function oe(_x23, _x24, _x25) {
  return _oe.apply(this, arguments);
}

function _oe() {
  _oe = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, {
    layerView: t,
    printTemplate: i
  }, r) {
    e.legendEnabled && r.legendLayers.push({
      id: e.id
    });
    return le(e, yield Ee(t), i, r);
  });
  return _oe.apply(this, arguments);
}

function ce(_x26, _x27, _x28) {
  return _ce.apply(this, arguments);
}

function _ce() {
  _ce = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, {
    printTemplate: t
  }, i) {
    return le(e, null, t, i);
  });
  return _ce.apply(this, arguments);
}

function ue(e, t) {
  e.legendEnabled && t.legendLayers.push({
    id: e.id
  });
  const i = {
    layerType: (r = e.write()).layerType,
    customParameters: r.customParameters
  };
  var r;
  if (i.bandIds = e.bandIds, i.compressionQuality = e.compressionQuality, i.format = e.format, i.interpolation = e.interpolation, (e.mosaicRule || e.definitionExpression) && (i.mosaicRule = e.exportImageServiceParameters.mosaicRule.toJSON()), e.renderingRule || e.renderer) if (t.is11xService) e.renderingRule && (i.renderingRule = e.renderingRule.toJSON()), e.renderer && (i.layerDefinition = i.layerDefinition || {}, i.layerDefinition.drawingInfo = i.layerDefinition.drawingInfo || {}, i.layerDefinition.drawingInfo.renderer = e.renderer.toJSON());else {
    const t = e.exportImageServiceParameters.combineRendererWithRenderingRule();
    t && (i.renderingRule = t.toJSON());
  }
  return De(i, e), i;
}

function ye(e, t) {
  e.legendEnabled && t.legendLayers.push({
    id: e.id
  });
  const i = {
    bandIds: (r = e.write() || {}).bandIds,
    customParameters: r.customParameters,
    interpolation: r.interpolation,
    layerDefinition: r.layerDefinition
  };
  var r;
  return i.layerType = "ArcGISImageServiceLayer", De(i, e), i;
}

function fe(_x29, _x30, _x31) {
  return _fe.apply(this, arguments);
}

function _fe() {
  _fe = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, i) {
    const r = t.printTemplate;

    if (i.is11xService) {
      const t = {
        type: "kml"
      };
      return e.write(t, {
        origin: "web-map"
      }), delete t.layerType, t.url = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__.normalize)(e.url), t;
    }

    {
      const a = [],
            n = t.layerView;
      n.allVisibleMapImages.forEach((t, i) => {
        const r = {
          id: `${e.id}_image${i}`,
          type: "image",
          title: e.id,
          minScale: e.minScale || 0,
          maxScale: e.maxScale || 0,
          opacity: e.opacity,
          extent: t.extent
        };
        "data:image/png;base64," === t.href.substr(0, 22) ? r.imageData = t.href.substr(22) : r.url = t.href, a.push(r);
      });
      const l = [...n.allVisiblePoints.items, ...n.allVisiblePolylines.items, ...n.allVisiblePolygons.items],
            s = {
        id: e.id,
        ...(yield le(null, l, r, i))
      };
      return a.push(s), a;
    }
  });
  return _fe.apply(this, arguments);
}

function me(e, {
  view: t
}, i) {
  let r;
  const a = {
    id: e.id,
    subLayerIds: []
  };
  let n = [];

  const l = t.scale,
        s = e => {
    const t = 0 === l,
          i = 0 === e.minScale || l <= e.minScale,
          r = 0 === e.maxScale || l >= e.maxScale;
    if (e.visible && (t || i && r)) if (e.sublayers) e.sublayers.forEach(s);else {
      const t = e.toExportImageJSON(),
            i = {
        id: e.id,
        name: e.title,
        layerDefinition: {
          drawingInfo: t.drawingInfo,
          definitionExpression: t.definitionExpression,
          source: t.source
        }
      };
      n.unshift(i), a.subLayerIds.push(e.id);
    }
  };

  var o;
  return e.sublayers && e.sublayers.forEach(s), n.length && (n = n.map(({
    id: e,
    name: t,
    layerDefinition: i
  }) => ({
    id: e,
    name: t,
    layerDefinition: i
  })), r = {
    layerType: (o = e.write()).layerType,
    customParameters: o.customParameters
  }, r.layers = n, r.visibleLayers = e.capabilities.exportMap.supportsDynamicLayers ? void 0 : a.subLayerIds, De(r, e), e.legendEnabled && i.legendLayers.push(a)), r;
}

function de(_x32, _x33) {
  return _de.apply(this, arguments);
}

function _de() {
  _de = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* ({
    layerView: e,
    printTemplate: t
  }, i) {
    const r = [],
          a = e.layer;
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(a.featureCollections)) for (const n of a.featureCollections) {
      const e = yield le(n, n.source, t, i);
      e && r.push(...e.featureCollection.layers);
    } else if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(a.sublayers)) for (const n of a.sublayers) {
      const e = yield le(null, n.graphics, t, i);
      e && r.push(...e.featureCollection.layers);
    }
    return {
      featureCollection: {
        layers: r
      }
    };
  });
  return _de.apply(this, arguments);
}

function pe() {
  return {
    type: "OpenStreetMap"
  };
}

function ge(_x34, _x35, _x36) {
  return _ge.apply(this, arguments);
}

function _ge() {
  _ge = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, {
    printTemplate: t,
    view: i
  }, r) {
    const a = {
      type: "image"
    },
          n = {
      format: "png",
      ignoreBackground: !0,
      layers: [e],
      rotation: 0
    },
          s = r.ssExtent || i.extent.clone();
    let o = 96,
        c = !0,
        y = !0;

    if (t.exportOptions) {
      const e = t.exportOptions;
      e.dpi > 0 && (o = e.dpi), e.width > 0 && (c = e.width % 2 == i.width % 2), e.height > 0 && (y = e.height % 2 == i.height % 2);
    }

    if ("map-only" === t.layout && t.scalePreserved && (!t.outScale || t.outScale === i.scale) && 96 === o && (!c || !y) && (n.area = {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }, c || (n.area.width -= 1), y || (n.area.height -= 1), !r.ssExtent)) {
      const e = i.toMap((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__.createScreenPoint)(n.area.width, n.area.height));
      s.ymin = e.y, s.xmax = e.x, r.ssExtent = s;
    }

    a.extent = s.clone()._normalize(!0).toJSON();
    const f = yield i.takeScreenshot(n),
          {
      data: m
    } = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__.dataComponents)(f.dataUrl);
    return a.imageData = m, a;
  });
  return _ge.apply(this, arguments);
}

function be(_x37, _x38, _x39) {
  return _be.apply(this, arguments);
}

function _be() {
  _be = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, {
    layerView: t,
    printTemplate: i
  }, r) {
    e.legendEnabled && r.legendLayers.push({
      id: e.id
    });
    return le(e, yield Ee(t), i, r);
  });
  return _be.apply(this, arguments);
}

function he(e) {
  const t = {
    layerType: (i = e.write()).layerType,
    customParameters: i.customParameters
  };
  var i;
  return De(t, e), t;
}

function we(_x40, _x41, _x42) {
  return _we.apply(this, arguments);
}

function _we() {
  _we = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t, i) {
    if (i.is11xService && e.serviceUrl && e.styleUrl) {
      const t = Ie(e.styleUrl, e.apiKey),
            r = Ie(e.serviceUrl, e.apiKey);

      if (!t && !r || "2.1.0" !== i.cimVersion) {
        const i = {
          type: "VectorTileLayer"
        };
        return i.styleUrl = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__.normalize)(e.styleUrl), i.token = t, r !== t && (i.additionalTokens = [{
          url: e.serviceUrl,
          token: r
        }]), i;
      }
    }

    return ge(e, t, i);
  });
  return _we.apply(this, arguments);
}

function Se(e) {
  const t = {
    type: "WebTiledLayer",
    urlTemplate: e.urlTemplate.replace(/\${/g, "{"),
    credits: e.copyright
  };
  return e.subDomains && e.subDomains.length > 0 && (t.subDomains = e.subDomains), t;
}

function xe(e) {
  let t;

  const i = [],
        r = e => {
    e.visible && (e.sublayers ? e.sublayers.forEach(r) : e.name && i.unshift(e.name));
  };

  return e.sublayers && e.sublayers.forEach(r), i.length && (t = {
    type: "wms",
    customLayerParameters: e.customLayerParameters,
    customParameters: e.customParameters,
    transparentBackground: e.imageTransparency,
    visibleLayers: i,
    url: (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__.normalize)(e.url),
    version: e.version
  }), t;
}

function ve(e) {
  const t = e.activeLayer;
  return {
    type: "wmts",
    customLayerParameters: e.customLayerParameters,
    customParameters: e.customParameters,
    format: t.imageFormat,
    layer: t.id,
    style: t.styleId,
    tileMatrixSet: t.tileMatrixSetId,
    url: (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__.normalize)(e.url)
  };
}

function De(e, t) {
  t.url && (e.url = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__.normalize)(e.url || t.url), e.token = Ie(e.url, t.apiKey));
}

function Ie(i, r) {
  var a, n;
  return (0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_18__.supportsApiKey)(i) && (r || _config_js__WEBPACK_IMPORTED_MODULE_1__.default.apiKey) ? r || _config_js__WEBPACK_IMPORTED_MODULE_1__.default.apiKey : null == (a = _kernel_js__WEBPACK_IMPORTED_MODULE_2__.id) || null == (n = a.findCredential(i)) ? void 0 : n.token;
}

function Le(_x43, _x44) {
  return _Le.apply(this, arguments);
}

function _Le() {
  _Le = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    t.canvas || (t.canvas = document.createElement("canvas"));
    const r = 1024;
    t.canvas.width = r, t.canvas.height = r;
    const a = t.canvas.getContext("2d");
    let n, l;

    if (e.path) {
      var c;
      const t = new Path2D(e.path);
      t.closePath(), a.fillStyle = Array.isArray(e.color) ? `rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3] / 255})` : "rgb(0,0,0)", a.fill(t);
      const i = (0,_support_printTaskUtils_js__WEBPACK_IMPORTED_MODULE_16__.getContextBoundingBox)(a);
      if (!i) return null;
      a.clearRect(0, 0, r, r);
      const o = (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__.pt2px)(e.size) / Math.max(i.width, i.height);
      a.scale(o, o);
      const u = r / o,
            y = u / 2 - i.width / 2 - i.x,
            f = u / 2 - i.height / 2 - i.y;

      if (a.translate(y, f), Array.isArray(e.color) && a.fill(t), null != (c = e.outline) && c.width && Array.isArray(e.outline.color)) {
        const r = e.outline;
        a.lineWidth = (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__.pt2px)(r.width) / o, a.lineJoin = "round", a.strokeStyle = `rgba(${r.color[0]},${r.color[1]},${r.color[2]},${r.color[3] / 255})`, a.stroke(t), i.width += a.lineWidth, i.height += a.lineWidth;
      }

      i.width *= o, i.height *= o;
      const m = a.getImageData(r / 2 - i.width / 2, r / 2 - i.height / 2, Math.ceil(i.width), Math.ceil(i.height));
      n = m.width, l = m.height, a.canvas.width = n, a.canvas.height = l, a.putImageData(m, 0, 0);
    } else {
      const t = "image/svg+xml" === e.contentType ? "data:image/svg+xml;base64," + e.imageData : e.url,
            r = (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_3__.default)(t, {
        responseType: "image"
      })).data;
      n = (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__.pt2px)(e.width), l = (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__.pt2px)(e.height), a.canvas.width = n, a.canvas.height = l, a.drawImage(r, 0, 0, a.canvas.width, a.canvas.height);
    }

    return {
      type: "esriPMS",
      imageData: a.canvas.toDataURL("image/png").substr(22),
      angle: e.angle,
      contentType: "image/png",
      height: (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__.px2pt)(l),
      width: (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_7__.px2pt)(n),
      xoffset: e.xoffset,
      yoffset: e.yoffset
    };
  });
  return _Le.apply(this, arguments);
}

function Te(_x45, _x46) {
  return _Te.apply(this, arguments);
}

function _Te() {
  _Te = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    const i = e.type;
    if ("simple" === i && Ve(e.symbol)) e.symbol = yield Le(e.symbol, t);else if ("uniqueValue" === i || "classBreaks" === i) {
      Ve(e.defaultSymbol) && (e.defaultSymbol = yield Le(e.defaultSymbol, t));
      const r = e["uniqueValue" === i ? "uniqueValueInfos" : "classBreakInfos"];
      if (r) for (const e of r) Ve(e.symbol) && (e.symbol = yield Le(e.symbol, t));
    }
  });
  return _Te.apply(this, arguments);
}

function Ee(_x47) {
  return _Ee.apply(this, arguments);
}

function _Ee() {
  _Ee = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    return e.queryFeatures(e.createQuery()).then(e => e.features);
  });
  return _Ee.apply(this, arguments);
}

function Me(e) {
  return e.gpMetadata && e.gpMetadata.executionType ? H.fromJSON(e.gpMetadata.executionType) : "sync";
}

function Ve(e) {
  return e && (e.path || "image/svg+xml" === e.contentType || e.url && e.url.endsWith(".svg"));
}



/***/ }),

/***/ 55572:
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/DataFile.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.itemId=null,this.url=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],e.prototype,"itemId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],e.prototype,"url",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.DataFile")],e);const p=e;


/***/ }),

/***/ 51976:
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/GPMessage.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(e){super(e),this.description=null,this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],i.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{read:p.read,write:p.write}})],i.prototype,"type",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.GPMessage")],i);const a=i;


/***/ }),

/***/ 9986:
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/JobInfo.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils.js */ 16727);
/* harmony import */ var _geoprocessor_GPOptions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geoprocessor/GPOptions.js */ 59301);
/* harmony import */ var _geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../geoprocessor/utils.js */ 67658);
/* harmony import */ var _GPMessage_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GPMessage.js */ 51976);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/














var p;
const h = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_4__.JSONMap({
  esriJobCancelled: "job-cancelled",
  esriJobCancelling: "job-cancelling",
  esriJobDeleted: "job-deleted",
  esriJobDeleting: "job-deleting",
  esriJobTimedOut: "job-timed-out",
  esriJobExecuting: "job-executing",
  esriJobFailed: "job-failed",
  esriJobNew: "job-new",
  esriJobSubmitted: "job-submitted",
  esriJobSucceeded: "job-succeeded",
  esriJobWaiting: "job-waiting"
});
let m = p = class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_5__.JSONSupport {
  constructor(e) {
    super(e), this.jobId = null, this.jobStatus = null, this.messages = null, this.requestOptions = null, this.sourceUrl = null, this._timer = null;
  }

  cancelJob(e) {
    const {
      jobId: s,
      sourceUrl: r
    } = this,
          {
      path: o
    } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.parseUrl)(r),
          i = { ...this.requestOptions,
      ...e,
      query: {
        f: "json"
      }
    };

    this._clearTimer();

    return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(`${o}/jobs/${s}/cancel`, i).then(e => {
      const t = p.fromJSON(e.data);
      return this.messages = t.messages, this.jobStatus = t.jobStatus, this;
    });
  }

  destroy() {
    clearInterval(this._timer);
  }

  checkJobStatus(e) {
    const {
      path: s
    } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.parseUrl)(this.sourceUrl),
          r = { ...this.requestOptions,
      ...e,
      query: {
        f: "json"
      }
    },
          o = `${s}/jobs/${this.jobId}`;
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(o, r).then(({
      data: e
    }) => {
      const t = p.fromJSON(e);
      return this.messages = t.messages, this.jobStatus = t.jobStatus, this;
    });
  }

  fetchResultData(e, s, r) {
    s = _geoprocessor_GPOptions_js__WEBPACK_IMPORTED_MODULE_12__.default.from(s || {});
    const {
      returnFeatureCollection: o,
      returnM: i,
      returnZ: a,
      outSpatialReference: c
    } = s,
          {
      path: j
    } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.parseUrl)(this.sourceUrl),
          p = (0,_geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_13__.gpEncode)({
      returnFeatureCollection: o,
      returnM: i,
      returnZ: a,
      outSR: c,
      returnType: "data",
      f: "json"
    }, null),
          h = { ...this.requestOptions,
      ...r,
      query: p
    },
          m = `${j}/jobs/${this.jobId}/results/${e}`;
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(m, h).then(e => (0,_geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_13__.decode)(e.data));
  }

  fetchResultImage(e, s, r) {
    const {
      path: o
    } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.parseUrl)(this.sourceUrl),
          i = { ...s.toJSON(),
      f: "json"
    },
          a = (0,_geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_13__.gpEncode)(i),
          c = { ...this.requestOptions,
      ...r,
      query: a
    },
          u = `${o}/jobs/${this.jobId}/results/${e}`;
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(u, c).then(e => (0,_geoprocessor_utils_js__WEBPACK_IMPORTED_MODULE_13__.decode)(e.data));
  }

  fetchResultMapImageLayer() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        path: e
      } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_11__.parseUrl)(_this.sourceUrl),
            t = e.indexOf("/GPServer/"),
            s = `${e.substring(0, t)}/MapServer/jobs/${_this.jobId}`;
      return new (0, (yield Promise.all(/*! import() */[__webpack_require__.e(3710), __webpack_require__.e(8592), __webpack_require__.e(2345)]).then(__webpack_require__.bind(__webpack_require__, /*! ../../layers/MapImageLayer.js */ 12345))).default)({
        url: s
      });
    })();
  }

  waitForJobCompletion(e = {}) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        interval: t = 1e3,
        signal: s,
        statusCallback: r
      } = e;
      return new Promise((e, a) => {
        (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.onAbort)(s, () => {
          _this2._clearTimer(), a((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.createAbortError)());
        }), _this2._clearTimer();
        const c = setInterval(() => {
          _this2._timer || a((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.createAbortError)()), _this2.checkJobStatus(_this2.requestOptions).then(t => {
            const {
              jobStatus: s
            } = t;

            switch (_this2.jobStatus = s, s) {
              case "job-succeeded":
                _this2._clearTimer(), e(_this2);
                break;

              case "job-submitted":
              case "job-executing":
              case "job-waiting":
              case "job-new":
                r && r(_this2);
                break;

              case "job-cancelled":
              case "job-cancelling":
              case "job-deleted":
              case "job-deleting":
              case "job-timed-out":
              case "job-failed":
                _this2._clearTimer(), a(_this2);
            }
          });
        }, t);
        _this2._timer = c;
      });
    })();
  }

  _clearTimer() {
    this._timer && (clearInterval(this._timer), this._timer = null);
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()], m.prototype, "jobId", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  json: {
    read: h.read
  }
})], m.prototype, "jobStatus", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  type: [_GPMessage_js__WEBPACK_IMPORTED_MODULE_14__.default]
})], m.prototype, "messages", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()], m.prototype, "requestOptions", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  json: {
    write: !0
  }
})], m.prototype, "sourceUrl", void 0), m = p = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.rest.support.JobInfo")], m);
const d = m;


/***/ }),

/***/ 51923:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/LinearUnit.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(r){super(r),this.distance=0,this.units=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{write:!0}})],p.prototype,"distance",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{read:i.read,write:i.write}})],p.prototype,"units",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri/rest/support/LinearUnit")],p);const c=p;


/***/ }),

/***/ 76087:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ParameterValue.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let o=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(e){super(e),this.dataType=null,this.value=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{read:u.read,write:u.write}})],o.prototype,"dataType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],o.prototype,"value",void 0),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.ParameterValue")],o);const i=o;


/***/ }),

/***/ 84638:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/PrintTemplate.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ 98240);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__.default{constructor(t){super(t),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],s.prototype,"attributionVisible",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],s.prototype,"exportOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],s.prototype,"forceFeatureAttributes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],s.prototype,"format",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],s.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],s.prototype,"layout",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],s.prototype,"layoutOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],s.prototype,"outScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],s.prototype,"scalePreserved",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],s.prototype,"showLabels",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.PrintTemplate")],s);const p=s;


/***/ }),

/***/ 22671:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/RasterData.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.format=null,this.itemId=null,this.url=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],e.prototype,"format",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{read:{source:"itemID"},write:{target:"itemID"}}})],e.prototype,"itemId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],e.prototype,"url",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri/rest/support/RasterData")],e);const p=e;


/***/ }),

/***/ 11929:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/fileFormat.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromJSON": () => (/* binding */ n),
/* harmony export */   "toJSON": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.JSONMap({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"}),n=p.fromJSON.bind(p),g=p.toJSON.bind(p);


/***/ }),

/***/ 45881:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/layoutTemplate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromJSON": () => (/* binding */ r),
/* harmony export */   "toJSON": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.JSONMap({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"}),r=t.fromJSON.bind(t),o=t.toJSON.bind(t);


/***/ }),

/***/ 58598:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/printTaskUtils.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyVisualVariables": () => (/* binding */ y),
/* harmony export */   "createMultipointLayer": () => (/* binding */ c),
/* harmony export */   "createPointLayer": () => (/* binding */ m),
/* harmony export */   "createPolygonLayer": () => (/* binding */ p),
/* harmony export */   "createPolylineLayer": () => (/* binding */ g),
/* harmony export */   "getContextBoundingBox": () => (/* binding */ d),
/* harmony export */   "getVisibleLayerViews": () => (/* binding */ b),
/* harmony export */   "isBingMapsLayer": () => (/* binding */ h),
/* harmony export */   "isBlendLayer": () => (/* binding */ w),
/* harmony export */   "isCSVLayer": () => (/* binding */ V),
/* harmony export */   "isFeatureLayer": () => (/* binding */ T),
/* harmony export */   "isGeoJSONLayer": () => (/* binding */ v),
/* harmony export */   "isGraphicsLayer": () => (/* binding */ G),
/* harmony export */   "isGroupLayer": () => (/* binding */ k),
/* harmony export */   "isImageryLayer": () => (/* binding */ D),
/* harmony export */   "isImageryTileLayer": () => (/* binding */ L),
/* harmony export */   "isKMLLayer": () => (/* binding */ P),
/* harmony export */   "isMapImageLayer": () => (/* binding */ I),
/* harmony export */   "isMapNotesLayer": () => (/* binding */ M),
/* harmony export */   "isOpenStreetMapLayer": () => (/* binding */ F),
/* harmony export */   "isScreenshotRequired": () => (/* binding */ j),
/* harmony export */   "isStreamLayer": () => (/* binding */ x),
/* harmony export */   "isTileLayer": () => (/* binding */ A),
/* harmony export */   "isVectorTileLayer": () => (/* binding */ z),
/* harmony export */   "isWMSLayer": () => (/* binding */ U),
/* harmony export */   "isWMTSLayer": () => (/* binding */ C),
/* harmony export */   "isWebTileLayer": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/screenUtils.js */ 75244);
/* harmony import */ var _renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renderers/visualVariables/support/visualVariableUtils.js */ 7775);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o="simple-marker",u="picture-marker",a="simple-line",l="simple-fill",s="shield-label-symbol",f="text";function y(y,c){const{graphic:p,renderer:m,symbol:g}=c,d=g.type;if(d===f||d===s||!("visualVariables"in m)||!m.visualVariables)return;const b=m.getVisualVariablesForType("size"),h=m.getVisualVariablesForType("color"),w=m.getVisualVariablesForType("opacity"),V=m.getVisualVariablesForType("rotation"),T=b[0],v=h[0],G=w[0],k=V[0];if(T){const t=d===o?g.style:null,n=(0,_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__.getSize)(T,p,{shape:t});null!=n&&(d===o?y.size=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.px2pt)(n):d===u?(y.width=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.px2pt)(n),y.height=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.px2pt)(n)):d===a?y.width=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.px2pt)(n):y.outline&&(y.outline.width=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.px2pt)(n)))}if(v){const e=(0,_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__.getColor)(v,p);(e&&d===o||d===a||d===l)&&(y.color=e?e.toJSON():void 0)}if(G){const e=(0,_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__.getOpacity)(G,p);null!=e&&y.color&&(y.color[3]=Math.round(255*e))}k&&(y.angle=-(0,_renderers_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__.getRotationAngle)(m,p))}function c(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function p(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function m(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function g(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}function d(e,r=15){const t=e.canvas.width,n=e.canvas.height,i=e.getImageData(0,0,t,n).data;let o,u,a,l,s,f;e:for(u=n;u--;)for(o=t;o--;)if(i[4*(t*u+o)+3]>r){f=u;break e}if(!f)return null;e:for(o=t;o--;)for(u=f+1;u--;)if(i[4*(t*u+o)+3]>r){s=o;break e}e:for(o=0;o<=s;++o)for(u=f+1;u--;)if(i[4*(t*u+o)+3]>r){a=o;break e}e:for(u=0;u<=f;++u)for(o=a;o<=s;++o)if(i[4*(t*u+o)+3]>r){l=u;break e}return{x:a,y:l,width:s-a,height:f-l}}function b(e,r){const t=e.allLayerViews.items;if(r===e.scale)return t.filter((e=>!e.suspended));const n=new Array;for(const i of t)S(i.parent)&&!n.includes(i.parent)||!i.visible||r&&"isVisibleAtScale"in i&&!i.isVisibleAtScale(r)||n.push(i);return n}function h(e){return e&&"bing-maps"===e.type}function w(e){return e&&"blendMode"in e&&"effect"in e}function V(e){return e&&"csv"===e.type}function T(e){return e&&"feature"===e.type}function v(e){return e&&"geojson"===e.type}function G(e){return e&&"graphics"===e.type}function k(e){return e&&"group"===e.type}function S(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function D(e){return e&&"imagery"===e.type}function L(e){return e&&"imagery-tile"===e.type}function P(e){return e&&"kml"===e.type}function I(e){return e&&"map-image"===e.type}function M(e){return e&&"map-notes"===e.type}function F(e){return e&&"open-street-map"===e.type}function j(e){const r=e.layer;if(w(r)){const t=r.blendMode;if((!t||"normal"===t)&&(r.effect||"featureEffect"in e&&e.featureEffect))return!0}return!1}function x(e){return e&&"stream"===e.type}function A(e){return e&&"tile"===e.type}function z(e){return e&&"vector-tile"===e.type}function E(e){return e&&"web-tile"===e.type}function U(e){return e&&"wms"===e.type}function C(e){return e&&"wmts"===e.type}


/***/ }),

/***/ 14684:
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/PrintTask.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/jsonMap.js */ 74856);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _rest_print_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rest/print.js */ 12285);
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Task.js */ 91474);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/









const n = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__.JSONMap({
  esriExecutionTypeSynchronous: "sync",
  esriExecutionTypeAsynchronous: "async"
});
let u = class extends _Task_js__WEBPACK_IMPORTED_MODULE_9__.default {
  constructor(...t) {
    super(...t), this._gpMetadata = null, this.updateDelay = 1e3;
  }

  get mode() {
    return this._gpMetadata && this._gpMetadata.executionType ? n.fromJSON(this._gpMetadata.executionType) : "sync";
  }

  execute(t, e) {
    return t && (t.updateDelay = this.updateDelay), (0,_rest_print_js__WEBPACK_IMPORTED_MODULE_8__.execute)(this.url, t, { ...this.requestOptions,
      ...e
    });
  }

  _getGpPrintParams(t) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = (0,_rest_print_js__WEBPACK_IMPORTED_MODULE_8__.getGpServerUrl)(_this.url),
            r = _rest_print_js__WEBPACK_IMPORTED_MODULE_8__.printCacheMap.get(e);
      return (0,_rest_print_js__WEBPACK_IMPORTED_MODULE_8__.getGpPrintParams)(t, r);
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()], u.prototype, "_gpMetadata", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({
  readOnly: !0
})], u.prototype, "mode", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()], u.prototype, "updateDelay", void 0), u = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.tasks.PrintTask")], u);
const y = u;


/***/ })

}]);
//# sourceMappingURL=4684.df61af70357363b05b9c.js.map