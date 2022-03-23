"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[5001],{

/***/ 26731:
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/closestFacility.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "solve": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_queryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/queryUtils.js */ 76417);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry/support/normalizeUtils.js */ 46010);
/* harmony import */ var _networkService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./networkService.js */ 76534);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ 16727);
/* harmony import */ var _support_ClosestFacilitySolveResult_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support/ClosestFacilitySolveResult.js */ 69754);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






const l = (0,_core_queryUtils_js__WEBPACK_IMPORTED_MODULE_2__.createQueryParamsHelper)({
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
  facilities: !0,
  incidents: !0,
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
  returnPointBarriers: {
    name: "returnBarriers"
  },
  returnRoutes: {
    name: "returnCFRoutes"
  },
  travelMode: !0
});

function c(_x, _x2, _x3) {
  return _c.apply(this, arguments);
}

function _c() {
  _c = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, c, m) {
    const f = [],
          p = [],
          y = {},
          B = {},
          d = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseUrl)(r),
          {
      path: b
    } = d;
    c.incidents && c.incidents.features && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.collectGeometries)(c.incidents.features, p, "incidents.features", y), c.facilities && c.facilities.features && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.collectGeometries)(c.facilities.features, p, "facilities.features", y), c.pointBarriers && c.pointBarriers.features && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.collectGeometries)(c.pointBarriers.features, p, "pointBarriers.features", y), c.polylineBarriers && c.polylineBarriers.features && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.collectGeometries)(c.polylineBarriers.features, p, "polylineBarriers.features", y), c.polygonBarriers && c.polygonBarriers.features && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.collectGeometries)(c.polygonBarriers.features, p, "polygonBarriers.features", y);
    const g = yield (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__.normalizeCentralMeridian)(p);

    for (const e in y) {
      const r = y[e];
      f.push(e), B[e] = g.slice(r[0], r[1]);
    }

    if ((0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.isInputGeometryZAware)(B, f)) {
      let e = null;

      try {
        e = yield (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.fetchServiceDescription)(b, c.apiKey, m);
      } catch {}

      e && !e.hasZ && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.dropZValuesOffInputGeometry)(B, f);
    }

    for (const e in B) B[e].forEach((r, t) => {
      c.get(e)[t].geometry = r;
    });

    const A = { ...m,
      query: { ...d.query,
        ...l.toQueryParams(c),
        f: "json"
      }
    },
          {
      data: j
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(`${b}/solveClosestFacility`, A);
    return _support_ClosestFacilitySolveResult_js__WEBPACK_IMPORTED_MODULE_6__.default.fromJSON(j);
  });
  return _c.apply(this, arguments);
}



/***/ }),

/***/ 69754:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ClosestFacilitySolveResult.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Graphic.js */ 99326);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DirectionsFeatureSet.js */ 94471);
/* harmony import */ var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FeatureSet.js */ 42762);
/* harmony import */ var _NAMessage_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NAMessage.js */ 18201);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../geometry/Polyline.js */ 23926);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../geometry/Polygon.js */ 38535);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(r){return r.features.map((o=>{const s=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__.default.fromJSON(r.spatialReference),i=_Graphic_js__WEBPACK_IMPORTED_MODULE_2__.default.fromJSON(o);return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(i.geometry)&&(i.geometry.spatialReference=s),i}))}function f(r){return _FeatureSet_js__WEBPACK_IMPORTED_MODULE_13__.default.fromJSON(r).features.map((r=>r.geometry))}let j=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport{constructor(r){super(r),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(r){return f(r)}readIncidents(r){return f(r)}readPointBarriers(r,e){return f(e.barriers)}readPolylineBarriers(r){return f(r)}readPolygonBarriers(r){return f(r)}readRoutes(r){return d(r)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_12__.default]})],j.prototype,"directions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_geometry_Point_js__WEBPACK_IMPORTED_MODULE_15__.default]})],j.prototype,"facilities",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("facilities")],j.prototype,"readFacilities",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_geometry_Point_js__WEBPACK_IMPORTED_MODULE_15__.default]})],j.prototype,"incidents",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("incidents")],j.prototype,"readIncidents",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_NAMessage_js__WEBPACK_IMPORTED_MODULE_14__.default]})],j.prototype,"messages",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_geometry_Point_js__WEBPACK_IMPORTED_MODULE_15__.default]})],j.prototype,"pointBarriers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("pointBarriers",["barriers"])],j.prototype,"readPointBarriers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_16__.default]})],j.prototype,"polylineBarriers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("polylineBarriers")],j.prototype,"readPolylineBarriers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_17__.default]})],j.prototype,"polygonBarriers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("polygonBarriers")],j.prototype,"readPolygonBarriers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_2__.default]})],j.prototype,"routes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("routes")],j.prototype,"readRoutes",null),j=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.rest.support.ClosestFacilitySolveResult")],j);const g=j;


/***/ }),

/***/ 25001:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/ClosestFacilityTask.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _rest_closestFacility_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest/closestFacility.js */ 26731);
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Task.js */ 91474);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends _Task_js__WEBPACK_IMPORTED_MODULE_7__.default{constructor(s){super(s),this.url=null}solve(s,r){return (0,_rest_closestFacility_js__WEBPACK_IMPORTED_MODULE_6__.solve)(this.url,s,r)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)()],c.prototype,"url",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.tasks.ClosestFacilityTask")],c);const p=c;


/***/ })

}]);
//# sourceMappingURL=5001.bfab9710d6f641b7df82.js.map