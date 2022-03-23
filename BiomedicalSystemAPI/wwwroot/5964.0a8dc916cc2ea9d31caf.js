"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[5964],{

/***/ 61836:
/*!*************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "solve": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_queryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/queryUtils.js */ 76417);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry/support/normalizeUtils.js */ 46010);
/* harmony import */ var _networkService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./networkService.js */ 76534);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ 16727);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





const p = (0,_core_queryUtils_js__WEBPACK_IMPORTED_MODULE_2__.createQueryParamsHelper)({
  accumulateAttributes: {
    name: "accumulateAttributeNames"
  },
  attributeParameterValues: !0,
  directionsTimeAttribute: {
    name: "directionsTimeAttributeName"
  },
  impedanceAttribute: {
    name: "impedanceAttributeName"
  },
  outSpatialReference: {
    name: "outSR",
    getter: e => e.outSpatialReference.wkid
  },
  pointBarriers: {
    name: "barriers"
  },
  polylineBarriers: !0,
  polygonBarriers: !0,
  restrictionAttributes: {
    name: "restrictionAttributeNames"
  },
  stops: !0,
  travelMode: !0
});

function l(_x, _x2, _x3) {
  return _l.apply(this, arguments);
}

function _l() {
  _l = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, l, m) {
    const c = [],
          f = [],
          y = {},
          B = {},
          b = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseUrl)(r),
          {
      path: g
    } = b;
    l.stops && l.stops.features && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.collectGeometries)(l.stops.features, f, "stops.features", y), l.pointBarriers && l.pointBarriers.features && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.collectGeometries)(l.pointBarriers.features, f, "pointBarriers.features", y), l.polylineBarriers && l.polylineBarriers.features && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.collectGeometries)(l.polylineBarriers.features, f, "polylineBarriers.features", y), l.polygonBarriers && l.polygonBarriers.features && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.collectGeometries)(l.polygonBarriers.features, f, "polygonBarriers.features", y);
    const A = yield (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__.normalizeCentralMeridian)(f);

    for (const e in y) {
      const r = y[e];
      c.push(e), B[e] = A.slice(r[0], r[1]);
    }

    if ((0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.isInputGeometryZAware)(B, c)) {
      let e = null;

      try {
        e = yield (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.fetchServiceDescription)(g, l.apiKey, m);
      } catch {}

      e && !e.hasZ && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.dropZValuesOffInputGeometry)(B, c);
    }

    for (const e in B) B[e].forEach((r, t) => {
      l.get(e)[t].geometry = r;
    });

    const d = { ...m,
      query: { ...b.query,
        ...p.toQueryParams(l),
        f: "json"
      }
    },
          h = g.endsWith("/solve") ? g : `${g}/solve`,
          j = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(h, d);
    return (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.handleSolveResponse)(j);
  });
  return _l.apply(this, arguments);
}



/***/ }),

/***/ 55964:
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/RouteTask.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/set.js */ 72062);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _rest_route_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rest/route.js */ 61836);
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Task.js */ 91474);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let e=class extends _Task_js__WEBPACK_IMPORTED_MODULE_8__.default{constructor(s){super(s)}solve(s,r){return (0,_rest_route_js__WEBPACK_IMPORTED_MODULE_7__.solve)(this.url,s,r)}};e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.tasks.RouteTask")],e);const c=e;


/***/ })

}]);
//# sourceMappingURL=5964.0a8dc916cc2ea9d31caf.js.map