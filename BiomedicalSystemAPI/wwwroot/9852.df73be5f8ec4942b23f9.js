"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[9852],{

/***/ 99852:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/arcade/functions/featuresetgeom.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerFunctions": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel.js */ 74);
/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/languageUtils.js */ 31863);
/* harmony import */ var _featureset_actions_SpatialFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../featureset/actions/SpatialFilter.js */ 70295);
/* harmony import */ var _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../featureset/sources/Empty.js */ 72396);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/Geometry.js */ 20119);
/* harmony import */ var _geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/geometryEngineAsync.js */ 93080);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/








function S(e) {
  return e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_5__.default;
}

function h(r, a, R, h, g) {
  return g(r, a, function (r, a, g) {
    if (g.length < 2) return h(new Error("Missing Parameters"));
    if (null === (g = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.K)(g))[0] && null === g[1]) return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.resolve)(!1);
    if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.o)(g[0])) return g[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_5__.default ? (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.resolve)(new _featureset_actions_SpatialFilter_js__WEBPACK_IMPORTED_MODULE_2__.default({
      parentfeatureset: g[0],
      relation: R,
      relationGeom: g[1]
    })) : null === g[1] ? (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.resolve)(new _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_3__.default({
      parentfeatureset: g[0]
    })) : h("Spatial Relation cannot accept this parameter type");

    if (S(g[0])) {
      if (S(g[1])) {
        let n = null;

        switch (R) {
          case "esriSpatialRelEnvelopeIntersects":
            n = (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_6__.intersects)((0,_kernel_js__WEBPACK_IMPORTED_MODULE_0__.shapeExtent)(g[0]), (0,_kernel_js__WEBPACK_IMPORTED_MODULE_0__.shapeExtent)(g[1]));
            break;

          case "esriSpatialRelIntersects":
            n = (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_6__.intersects)(g[0], g[1]);
            break;

          case "esriSpatialRelContains":
            n = (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_6__.contains)(g[0], g[1]);
            break;

          case "esriSpatialRelOverlaps":
            n = (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_6__.overlaps)(g[0], g[1]);
            break;

          case "esriSpatialRelWithin":
            n = (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_6__.within)(g[0], g[1]);
            break;

          case "esriSpatialRelTouches":
            n = (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_6__.touches)(g[0], g[1]);
            break;

          case "esriSpatialRelCrosses":
            n = (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_6__.crosses)(g[0], g[1]);
        }

        return null !== n ? n : (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.reject)(new Error("Unrecognised Relationship"));
      }

      return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.o)(g[1]) ? (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.resolve)(new _featureset_actions_SpatialFilter_js__WEBPACK_IMPORTED_MODULE_2__.default({
        parentfeatureset: g[1],
        relation: R,
        relationGeom: g[0]
      })) : null === g[1] ? (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.resolve)(!1) : h("Spatial Relation cannot accept this parameter type");
    }

    return null !== g[0] ? h("Spatial Relation cannot accept this parameter type") : (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.o)(g[1]) ? (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.resolve)(new _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_3__.default({
      parentfeatureset: g[1]
    })) : g[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_5__.default || null === g[1] ? (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.resolve)(!1) : void 0;
  });
}

function g(e) {
  "async" === e.mode && (e.functions.intersects = function (n, t) {
    return h(n, t, "esriSpatialRelIntersects", e.failDefferred, e.standardFunctionAsync);
  }, e.functions.envelopeintersects = function (n, t) {
    return h(n, t, "esriSpatialRelEnvelopeIntersects", e.failDefferred, e.standardFunctionAsync);
  }, e.signatures.push({
    name: "envelopeintersects",
    min: "2",
    max: "2"
  }), e.functions.contains = function (n, t) {
    return h(n, t, "esriSpatialRelContains", e.failDefferred, e.standardFunctionAsync);
  }, e.functions.overlaps = function (n, t) {
    return h(n, t, "esriSpatialRelOverlaps", e.failDefferred, e.standardFunctionAsync);
  }, e.functions.within = function (n, t) {
    return h(n, t, "esriSpatialRelWithin", e.failDefferred, e.standardFunctionAsync);
  }, e.functions.touches = function (n, t) {
    return h(n, t, "esriSpatialRelTouches", e.failDefferred, e.standardFunctionAsync);
  }, e.functions.crosses = function (n, t) {
    return h(n, t, "esriSpatialRelCrosses", e.failDefferred, e.standardFunctionAsync);
  }, e.functions.relate = function (i, l) {
    return e.standardFunctionAsync(i, l, function (e, i, l) {
      if (l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.K)(l), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.p)(l, 3, 3), S(l[0]) && S(l[1])) return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_6__.relate)(l[0], l[1], (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.d)(l[2]));
      if (l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_5__.default && null === l[1]) return !1;
      if (l[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_5__.default && null === l[0]) return !1;
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.o)(l[0]) && null === l[1]) return new _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_3__.default({
        parentfeatureset: l[0]
      });
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.o)(l[1]) && null === l[0]) return new _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_3__.default({
        parentfeatureset: l[1]
      });
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.o)(l[0]) && l[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_5__.default) return l[0].relate(l[1], (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.d)(l[2]));
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.o)(l[1]) && l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_5__.default) return l[1].relate(l[0], (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.d)(l[2]));
      if (null === l[0] && null === l[1]) return !1;
      throw new Error("Illegal Argument");
    });
  });
}



/***/ })

}]);
//# sourceMappingURL=9852.df73be5f8ec4942b23f9.js.map