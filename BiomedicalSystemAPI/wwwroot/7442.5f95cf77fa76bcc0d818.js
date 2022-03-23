"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[7442],{

/***/ 63170:
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/serviceArea.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "solve": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_queryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/queryUtils.js */ 76417);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry/support/normalizeUtils.js */ 46010);
/* harmony import */ var _networkService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./networkService.js */ 76534);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ 16727);
/* harmony import */ var _support_ServiceAreaSolveResult_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support/ServiceAreaSolveResult.js */ 41910);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






const l = (0,_core_queryUtils_js__WEBPACK_IMPORTED_MODULE_2__.createQueryParamsHelper)({
  accumulateAttributes: {
    name: "accumulateAttributeNames"
  },
  attributeParameterValues: !0,
  defaultBreaks: !0,
  facilities: !0,
  outSpatialReference: {
    name: "outSR",
    getter: r => r.outSpatialReference.wkid
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
  travelMode: !0
});

function f(_x, _x2, _x3) {
  return _f.apply(this, arguments);
}

function _f() {
  _f = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, f, p) {
    const c = [],
          m = [],
          y = {},
          B = {},
          g = (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseUrl)(e),
          {
      path: S
    } = g;
    f.facilities && f.facilities.features && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.collectGeometries)(f.facilities.features, m, "facilities.features", y), f.pointBarriers && f.pointBarriers.features && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.collectGeometries)(f.pointBarriers.features, m, "pointBarriers.features", y), f.polylineBarriers && f.polylineBarriers.features && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.collectGeometries)(f.polylineBarriers.features, m, "polylineBarriers.features", y), f.polygonBarriers && f.polygonBarriers.features && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.collectGeometries)(f.polygonBarriers.features, m, "polygonBarriers.features", y);
    const j = yield (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__.normalizeCentralMeridian)(m);

    for (const r in y) {
      const e = y[r];
      c.push(r), B[r] = j.slice(e[0], e[1]);
    }

    if ((0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.isInputGeometryZAware)(B, c)) {
      let r = null;

      try {
        r = yield (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.fetchServiceDescription)(S, f.apiKey, p);
      } catch {}

      r && !r.hasZ && (0,_networkService_js__WEBPACK_IMPORTED_MODULE_4__.dropZValuesOffInputGeometry)(B, c);
    }

    for (const r in B) B[r].forEach((e, t) => {
      f.get(r)[t].geometry = e;
    });

    const b = { ...p,
      query: { ...g.query,
        ...l.toQueryParams(f),
        f: "json"
      }
    },
          {
      data: v
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(`${S}/solveServiceArea`, b);
    return _support_ServiceAreaSolveResult_js__WEBPACK_IMPORTED_MODULE_6__.default.fromJSON(v);
  });
  return _f.apply(this, arguments);
}



/***/ }),

/***/ 41910:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ServiceAreaSolveResult.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ j)
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
/* harmony import */ var _NAMessage_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NAMessage.js */ 18201);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../geometry/Polyline.js */ 23926);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../geometry/Polygon.js */ 38535);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(r){return r.features.map((o=>{const t=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__.default.fromJSON(r.spatialReference),s=_Graphic_js__WEBPACK_IMPORTED_MODULE_2__.default.fromJSON(o);return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.unwrap)(s.geometry).spatialReference=t,s}))}function g(r){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.filterNones)(r.features.map((e=>((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(e.geometry)&&(e.geometry.spatialReference=r.spatialReference),(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__.fromJSON)(e.geometry)))))}let P=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport{constructor(r){super(r),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(r){return g(r)}readPointBarriers(r,e){return g(e.barriers)}readPolylineBarriers(r){return g(r)}readPolygonBarriers(r){return g(r)}readIncidents(r,e){return d(e.saPolylines)}readServiceAreaPolygons(r,e){return d(e.saPolygons)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__.default]})],P.prototype,"facilities",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("facilities")],P.prototype,"readFacilities",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_NAMessage_js__WEBPACK_IMPORTED_MODULE_12__.default]})],P.prototype,"messages",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__.default]})],P.prototype,"pointBarriers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("pointBarriers",["barriers"])],P.prototype,"readPointBarriers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_14__.default]})],P.prototype,"polylineBarriers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("polylineBarriers")],P.prototype,"readPolylineBarriers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_15__.default]})],P.prototype,"polygonBarriers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("polygonBarriers")],P.prototype,"readPolygonBarriers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_2__.default]})],P.prototype,"serviceAreaPolylines",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("serviceAreaPolylines",["saPolylines"])],P.prototype,"readIncidents",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_2__.default]})],P.prototype,"serviceAreaPolygons",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("serviceAreaPolygons",["saPolygons"])],P.prototype,"readServiceAreaPolygons",null),P=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.rest.support.ServiceAreaSolveResult")],P);const j=P;


/***/ }),

/***/ 97442:
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/ServiceAreaTask.js ***!
  \************************************************************/
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
/* harmony import */ var _rest_serviceArea_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest/serviceArea.js */ 63170);
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Task.js */ 91474);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends _Task_js__WEBPACK_IMPORTED_MODULE_7__.default{constructor(r){super(r),this.url=null}solve(r,s){return (0,_rest_serviceArea_js__WEBPACK_IMPORTED_MODULE_6__.solve)(this.url,r,s)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)()],c.prototype,"url",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.tasks.ServiceAreaTask")],c);const p=c;


/***/ })

}]);
//# sourceMappingURL=7442.5f95cf77fa76bcc0d818.js.map