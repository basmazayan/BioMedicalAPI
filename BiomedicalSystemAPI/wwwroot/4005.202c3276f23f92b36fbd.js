"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[4005],{

/***/ 34005:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/arcade/functions/geomasync.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerFunctions": () => (/* binding */ fn)
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../kernel.js */ 77871);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel.js */ 74);
/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/languageUtils.js */ 31863);
/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./centroid.js */ 39050);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/Geometry.js */ 20119);
/* harmony import */ var _geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/geometryEngineAsync.js */ 93080);
/* harmony import */ var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/Multipoint.js */ 43245);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/Polygon.js */ 38535);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/Polyline.js */ 23926);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ 70279);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/unitUtils.js */ 55612);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/















function un(t) {
  return 0 === _kernel_js__WEBPACK_IMPORTED_MODULE_0__.version.indexOf("4.") ? _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__.default.fromExtent(t) : new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__.default({
    spatialReference: t.spatialReference,
    rings: [[[t.xmin, t.ymin], [t.xmin, t.ymax], [t.xmax, t.ymax], [t.xmax, t.ymin], [t.xmin, t.ymin]]]
  });
}

function sn(n) {
  if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(n, 2, 2), n[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default && n[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default) ;else if (n[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default && null === n[1]) ;else if (n[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default && null === n[0]) ;else if (null !== n[0] || null !== n[1]) throw new Error("Illegal Argument");
}

function an(n, t) {
  if ("polygon" !== n.type && "polyline" !== n.type && "extent" !== n.type) return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.resolve)(0);
  let r = 1;

  if (n.spatialReference.vcsWkid || n.spatialReference.latestVcsWkid) {
    r = (0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__.getMetersPerVerticalUnitForSR)(n.spatialReference) / (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_13__.getMetersPerUnitForSR)(n.spatialReference);
  }

  let e = 0;
  if ("polyline" === n.type) for (const i of n.paths) for (let n = 1; n < i.length; n++) e += (0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__.segmentLength3d)(i[n], i[n - 1], r);else if ("polygon" === n.type) for (const i of n.rings) {
    for (let n = 1; n < i.length; n++) e += (0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__.segmentLength3d)(i[n], i[n - 1], r);

    (i[0][0] !== i[i.length - 1][0] || i[0][1] !== i[i.length - 1][1] || void 0 !== i[0][2] && i[0][2] !== i[i.length - 1][2]) && (e += (0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__.segmentLength3d)(i[0], i[i.length - 1], r));
  } else "extent" === n.type && (e += 2 * (0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__.segmentLength3d)([n.xmin, n.ymin, 0], [n.xmax, n.ymin, 0], r), e += 2 * (0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__.segmentLength3d)([n.xmin, n.ymin, 0], [n.xmin, n.ymax, 0], r), e *= 2, e += 4 * Math.abs((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(n.zmax, 0) * r - (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(n.zmin, 0) * r));
  const o = new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__.default({
    hasZ: !1,
    hasM: !1,
    spatialReference: n.spatialReference,
    paths: [[0, 0], [0, e]]
  });
  return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.planarLength)(o, t);
}

function fn(n) {
  "async" === n.mode && (n.functions.disjoint = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      return sn(r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r)), null === r[0] || null === r[1] || (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.disjoint)(r[0], r[1]);
    });
  }, n.functions.intersects = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      return sn(r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r)), null !== r[0] && null !== r[1] && (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.intersects)(r[0], r[1]);
    });
  }, n.functions.touches = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      return sn(r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r)), null !== r[0] && null !== r[1] && (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.touches)(r[0], r[1]);
    });
  }, n.functions.crosses = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      return sn(r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r)), null !== r[0] && null !== r[1] && (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.crosses)(r[0], r[1]);
    });
  }, n.functions.within = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      return sn(r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r)), null !== r[0] && null !== r[1] && (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.within)(r[0], r[1]);
    });
  }, n.functions.contains = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      return sn(r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r)), null !== r[0] && null !== r[1] && (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.contains)(r[0], r[1]);
    });
  }, n.functions.overlaps = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      return sn(r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r)), null !== r[0] && null !== r[1] && (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.overlaps)(r[0], r[1]);
    });
  }, n.functions.equals = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r, 2, 2), r[0] === r[1] || (r[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default && r[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default ? (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.equals)(r[0], r[1]) : !(!(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.n)(r[0]) || !(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.n)(r[1])) && r[0].getTime() === r[1].getTime());
    });
  }, n.functions.relate = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      if (r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r, 3, 3), r[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default && r[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default) return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.relate)(r[0], r[1], (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.d)(r[2]));
      if (r[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default && null === r[1]) return !1;
      if (r[1] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default && null === r[0]) return !1;
      if (null === r[0] && null === r[1]) return !1;
      throw new Error("Illegal Argument");
    });
  }, n.functions.intersection = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      return sn(r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r)), null === r[0] || null === r[1] ? null : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.intersect)(r[0], r[1]);
    });
  }, n.functions.union = function (r, e) {
    return n.standardFunctionAsync(r, e, function (n, e, i) {
      const l = [];
      if (0 === (i = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(i)).length) throw new Error("Function called with wrong number of Parameters");
      if (1 === i.length) {
        if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(i[0])) {
          const n = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(i[0]);

          for (let t = 0; t < n.length; t++) if (null !== n[t]) {
            if (!(n[t] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
            l.push(n[t]);
          }
        } else {
          if (!(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(i[0])) {
            if (i[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default) return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.r)((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.cloneGeometry)(i[0]), r.spatialReference);
            if (null === i[0]) return null;
            throw new Error("Illegal Argument");
          }

          {
            const n = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(i[0].toArray());

            for (let t = 0; t < n.length; t++) if (null !== n[t]) {
              if (!(n[t] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
              l.push(n[t]);
            }
          }
        }
      } else for (let t = 0; t < i.length; t++) if (null !== i[t]) {
        if (!(i[t] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
        l.push(i[t]);
      }
      return 0 === l.length ? null : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.union)(l);
    });
  }, n.functions.difference = function (r, e) {
    return n.standardFunctionAsync(r, e, function (n, r, e) {
      return sn(e = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(e)), null !== e[0] && null === e[1] ? (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.cloneGeometry)(e[0]) : null === e[0] ? null : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.difference)(e[0], e[1]);
    });
  }, n.functions.symmetricdifference = function (r, e) {
    return n.standardFunctionAsync(r, e, function (n, r, e) {
      return sn(e = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(e)), null === e[0] && null === e[1] ? null : null === e[0] ? (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.cloneGeometry)(e[1]) : null === e[1] ? (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.cloneGeometry)(e[0]) : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.symmetricDifference)(e[0], e[1]);
    });
  }, n.functions.clip = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      if (r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r, 2, 2), !(r[1] instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__.default) && null !== r[1]) throw new Error("Illegal Argument");
      if (null === r[0]) return null;
      if (!(r[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      return null === r[1] ? null : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.clip)(r[0], r[1]);
    });
  }, n.functions.cut = function (r, e) {
    return n.standardFunctionAsync(r, e, function (n, r, e) {
      if (e = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(e), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(e, 2, 2), !(e[1] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__.default) && null !== e[1]) throw new Error("Illegal Argument");
      if (null === e[0]) return [];
      if (!(e[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      return null === e[1] ? [(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.cloneGeometry)(e[0])] : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.cut)(e[0], e[1]);
    });
  }, n.functions.area = function (t, e) {
    return n.standardFunctionAsync(t, e, function (n, e, l) {
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l, 1, 2), null === (l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(l))[0]) return 0;
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.o)(l[0])) return l[0].sumArea((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertSquareUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)), !1, t.abortSignal).then(n => {
        if (t.abortSignal.aborted) throw new Error("Operation has been cancelled.");
        return n;
      });

      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0]) || (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0])) {
        const n = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.M)(l[0], t.spatialReference);
        return null === n ? 0 : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.planarArea)(n, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertSquareUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)));
      }

      if (!(l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.planarArea)(l[0], (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertSquareUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)));
    });
  }, n.functions.areageodetic = function (t, e) {
    return n.standardFunctionAsync(t, e, function (n, e, l) {
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l, 1, 2), null === (l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(l))[0]) return 0;
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.o)(l[0])) return l[0].sumArea((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertSquareUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)), !0, t.abortSignal).then(n => {
        if (t.abortSignal.aborted) throw new Error("Operation has been cancelled.");
        return n;
      });

      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0]) || (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0])) {
        const n = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.M)(l[0], t.spatialReference);
        return null === n ? 0 : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.geodesicArea)(n, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertSquareUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)));
      }

      if (!(l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.geodesicArea)(l[0], (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertSquareUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)));
    });
  }, n.functions.length = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, r, l) {
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l, 1, 2), null === (l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(l))[0]) return 0;
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.o)(l[0])) return l[0].sumLength((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)), !1, t.abortSignal).then(n => {
        if (t.abortSignal.aborted) throw new Error("Operation has been cancelled.");
        return n;
      });

      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0]) || (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0])) {
        const n = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.L)(l[0], t.spatialReference);
        return null === n ? 0 : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.planarLength)(n, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)));
      }

      if (!(l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.planarLength)(l[0], (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)));
    });
  }, n.functions.length3d = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, r, l) {
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l, 1, 2), null === (l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(l))[0]) return 0;

      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0]) || (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0])) {
        const n = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.L)(l[0], t.spatialReference);
        return null === n ? 0 : !0 === n.hasZ ? an(n, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1))) : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.planarLength)(n, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)));
      }

      if (!(l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      return !0 === l[0].hasZ ? an(l[0], (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1))) : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.planarLength)(l[0], (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)));
    });
  }, n.functions.lengthgeodetic = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, r, l) {
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l, 1, 2), null === (l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(l))[0]) return 0;
      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.o)(l[0])) return l[0].sumLength((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)), !0, t.abortSignal).then(n => {
        if (t.abortSignal.aborted) throw new Error("Operation has been cancelled.");
        return n;
      });

      if ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0]) || (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0])) {
        const n = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.L)(l[0], t.spatialReference);
        return null === n ? 0 : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.geodesicLength)(n, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)));
      }

      if (!(l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.geodesicLength)(l[0], (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[1], -1)));
    });
  }, n.functions.distance = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, r, l) {
      l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(l), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l, 2, 3);
      let u = l[0];
      ((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0]) || (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0])) && (u = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.O)(l[0], t.spatialReference));
      let f = l[1];
      if (((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[1]) || (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[1])) && (f = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.O)(l[1], t.spatialReference)), !(u instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      if (!(f instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.distance)(u, f, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[2], -1)));
    });
  }, n.functions.distancegeodetic = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r, 2, 3);
      const l = r[0],
            u = r[1];
      if (!(l instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__.default)) throw new Error("Illegal Argument");
      if (!(u instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__.default)) throw new Error("Illegal Argument");
      const s = new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__.default({
        paths: [],
        spatialReference: l.spatialReference
      });
      return s.addPath([l, u]), (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.geodesicLength)(s, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(r[2], -1)));
    });
  }, n.functions.densify = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      if (r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r, 2, 3), null === r[0]) return null;
      if (!(r[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      const l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(r[1]);
      if (isNaN(l)) throw new Error("Illegal Argument");
      if (l <= 0) throw new Error("Illegal Argument");
      return r[0] instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__.default || r[0] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__.default ? (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.densify)(r[0], l, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(r[2], -1))) : r[0] instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__.default ? (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.densify)(un(r[0]), l, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(r[2], -1))) : r[0];
    });
  }, n.functions.densifygeodetic = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      if (r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r, 2, 3), null === r[0]) return null;
      if (!(r[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      const l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(r[1]);
      if (isNaN(l)) throw new Error("Illegal Argument");
      if (l <= 0) throw new Error("Illegal Argument");
      return r[0] instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__.default || r[0] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__.default ? (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.geodesicDensify)(r[0], l, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(r[2], -1))) : r[0] instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__.default ? (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.geodesicDensify)(un(r[0]), l, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(r[2], -1))) : r[0];
    });
  }, n.functions.generalize = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      if (r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r, 2, 4), null === r[0]) return null;
      if (!(r[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      const l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(r[1]);
      if (isNaN(l)) throw new Error("Illegal Argument");
      return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.generalize)(r[0], l, (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.y)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(r[2], !0)), (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(r[3], -1)));
    });
  }, n.functions.buffer = function (r, l) {
    return n.standardFunctionAsync(r, l, function (n, r, l) {
      if (l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(l), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l, 2, 3), null === l[0]) return null;
      if (!(l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      const u = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(l[1]);
      if (isNaN(u)) throw new Error("Illegal Argument");
      return 0 === u ? (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.cloneGeometry)(l[0]) : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.buffer)(l[0], u, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[2], -1)));
    });
  }, n.functions.buffergeodetic = function (r, l) {
    return n.standardFunctionAsync(r, l, function (n, r, l) {
      if (l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(l), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l, 2, 3), null === l[0]) return null;
      if (!(l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      const u = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(l[1]);
      if (isNaN(u)) throw new Error("Illegal Argument");
      return 0 === u ? (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.cloneGeometry)(l[0]) : (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.geodesicBuffer)(l[0], u, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(l[2], -1)));
    });
  }, n.functions.offset = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      if (r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r, 2, 6), null === r[0]) return null;
      if (!(r[0] instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__.default || r[0] instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__.default)) throw new Error("Illegal Argument");
      const l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(r[1]);
      if (isNaN(l)) throw new Error("Illegal Argument");
      const s = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(r[4], 10));
      if (isNaN(s)) throw new Error("Illegal Argument");
      const a = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(r[5], 0));
      if (isNaN(a)) throw new Error("Illegal Argument");
      return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.offset)(r[0], l, (0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.convertLinearUnitsToCode)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(r[2], -1)), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.d)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(r[3], "round")).toLowerCase(), s, a);
    });
  }, n.functions.rotate = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r, 2, 3);
      let e = r[0];
      if (null === e) return null;
      if (!(e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      e instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__.default && (e = _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__.default.fromExtent(e));
      const l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(r[1]);
      if (isNaN(l)) throw new Error("Illegal Argument");
      const u = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.E)(r[2], null);
      if (null === u) return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.rotate)(e, l);
      if (u instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__.default) return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.rotate)(e, l, u);
      throw new Error("Illegal Argument");
    });
  }, n.functions.centroid = function (r, e) {
    return n.standardFunctionAsync(r, e, function (n, e, l) {
      if (l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(l), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l, 1, 1), null === l[0]) return null;
      let u = l[0];
      if (((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0]) || (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0])) && (u = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.O)(l[0], r.spatialReference)), null === u) return null;
      if (!(u instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      return u instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__.default ? (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.r)((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.cloneGeometry)(l[0]), r.spatialReference) : u instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__.default ? u.centroid : u instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__.default ? (0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__.centroidPolyline)(u) : u instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_8__.default ? (0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__.centroidMultiPoint)(u) : u instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__.default ? u.center : null;
    });
  }, n.functions.multiparttosinglepart = function (r, e) {
    return n.standardFunctionAsync(r, e, function (n, e, l) {
      l = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(l), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l, 1, 1);
      const u = [];
      if (null === l[0]) return null;
      if (!(l[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      if (l[0] instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__.default) return [(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.r)((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.cloneGeometry)(l[0]), r.spatialReference)];
      if (l[0] instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__.default) return [(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.r)((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.cloneGeometry)(l[0]), r.spatialReference)];
      return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.simplify)(l[0]).then(n => {
        if (n instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__.default) {
          const t = [],
                r = [];

          for (let e = 0; e < n.rings.length; e++) if (n.isClockwise(n.rings[e])) {
            const r = (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__.fromJSON)({
              rings: [n.rings[e]],
              hasZ: !0 === n.hasZ,
              hazM: !0 === n.hasM,
              spatialReference: n.spatialReference.toJSON()
            });
            t.push(r);
          } else r.push({
            ring: n.rings[e],
            pt: n.getPoint(e, 0)
          });

          for (let n = 0; n < r.length; n++) for (let e = 0; e < t.length; e++) if (t[e].contains(r[n].pt)) {
            t[e].addRing(r[n].ring);
            break;
          }

          return t;
        }

        if (n instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__.default) {
          const t = [];

          for (let r = 0; r < n.paths.length; r++) {
            const e = (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__.fromJSON)({
              paths: [n.paths[r]],
              hasZ: !0 === n.hasZ,
              hazM: !0 === n.hasM,
              spatialReference: n.spatialReference.toJSON()
            });
            t.push(e);
          }

          return t;
        }

        if (l[0] instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_8__.default) {
          const n = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.r)((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__.cloneGeometry)(l[0]), r.spatialReference);

          for (let t = 0; t < n.points.length; t++) u.push(n.getPoint(t));

          return u;
        }

        return null;
      });
    });
  }, n.functions.issimple = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      if (r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r, 1, 1), null === r[0]) return !0;
      if (!(r[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.isSimple)(r[0]);
    });
  }, n.functions.simplify = function (t, r) {
    return n.standardFunctionAsync(t, r, function (n, t, r) {
      if (r = (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(r), (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r, 1, 1), null === r[0]) return null;
      if (!(r[0] instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__.default)) throw new Error("Illegal Argument");
      return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__.simplify)(r[0]);
    });
  });
}



/***/ }),

/***/ 93080:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryEngineAsync.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buffer": () => (/* binding */ V),
/* harmony export */   "clip": () => (/* binding */ l),
/* harmony export */   "contains": () => (/* binding */ p),
/* harmony export */   "convexHull": () => (/* binding */ N),
/* harmony export */   "crosses": () => (/* binding */ w),
/* harmony export */   "cut": () => (/* binding */ y),
/* harmony export */   "densify": () => (/* binding */ P),
/* harmony export */   "difference": () => (/* binding */ R),
/* harmony export */   "disjoint": () => (/* binding */ S),
/* harmony export */   "distance": () => (/* binding */ m),
/* harmony export */   "equals": () => (/* binding */ d),
/* harmony export */   "extendedSpatialReferenceInfo": () => (/* binding */ f),
/* harmony export */   "flipHorizontal": () => (/* binding */ B),
/* harmony export */   "flipVertical": () => (/* binding */ C),
/* harmony export */   "generalize": () => (/* binding */ G),
/* harmony export */   "geodesicArea": () => (/* binding */ K),
/* harmony export */   "geodesicBuffer": () => (/* binding */ b),
/* harmony export */   "geodesicDensify": () => (/* binding */ U),
/* harmony export */   "geodesicLength": () => (/* binding */ M),
/* harmony export */   "intersect": () => (/* binding */ j),
/* harmony export */   "intersects": () => (/* binding */ g),
/* harmony export */   "isSimple": () => (/* binding */ v),
/* harmony export */   "nearestCoordinate": () => (/* binding */ z),
/* harmony export */   "nearestVertex": () => (/* binding */ D),
/* harmony export */   "nearestVertices": () => (/* binding */ H),
/* harmony export */   "offset": () => (/* binding */ I),
/* harmony export */   "overlaps": () => (/* binding */ O),
/* harmony export */   "planarArea": () => (/* binding */ W),
/* harmony export */   "planarLength": () => (/* binding */ F),
/* harmony export */   "relate": () => (/* binding */ h),
/* harmony export */   "rotate": () => (/* binding */ q),
/* harmony export */   "simplify": () => (/* binding */ J),
/* harmony export */   "symmetricDifference": () => (/* binding */ E),
/* harmony export */   "touches": () => (/* binding */ A),
/* harmony export */   "union": () => (/* binding */ k),
/* harmony export */   "within": () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry.js */ 61243);
/* harmony import */ var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/workers/workers.js */ 74775);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Point.js */ 7309);
/* harmony import */ var _support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./support/jsonUtils.js */ 70279);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





function e(n) {
  var t;
  return Array.isArray(n) ? null == (t = n[0]) ? void 0 : t.spatialReference : null == n ? void 0 : n.spatialReference;
}

function i(n) {
  return n ? Array.isArray(n) ? n.map(i) : n.toJSON ? n.toJSON() : n : n;
}

function a(n) {
  return Array.isArray(n) ? n.map(n => (0,_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.fromJSON)(n)) : (0,_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.fromJSON)(n);
}

function o(n, t) {
  let r;
  return Array.isArray(n) ? r = n : (r = [], r.push(n), null != t && r.push(t)), r;
}

let c;

function u() {
  return _u.apply(this, arguments);
}

function _u() {
  _u = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
    return c || (c = (0,_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_2__.open)("geometryEngineWorker", {
      strategy: "distributed"
    })), c;
  });
  return _u.apply(this, arguments);
}

function s(_x, _x2) {
  return _s.apply(this, arguments);
}

function _s() {
  _s = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t) {
    return (yield u()).invoke("executeGEOperation", {
      operation: n,
      parameters: i(t)
    });
  });
  return _s.apply(this, arguments);
}

function f(n) {
  return s("extendedSpatialReferenceInfo", [n]);
}

function l(_x3, _x4) {
  return _l.apply(this, arguments);
}

function _l() {
  _l = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t) {
    return a(yield s("clip", [e(n), n, t]));
  });
  return _l.apply(this, arguments);
}

function y(_x5, _x6) {
  return _y.apply(this, arguments);
}

function _y() {
  _y = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t) {
    return a(yield s("cut", [e(n), n, t]));
  });
  return _y.apply(this, arguments);
}

function p(n, t) {
  return s("contains", [e(n), n, t]);
}

function w(n, t) {
  return s("crosses", [e(n), n, t]);
}

function m(n, t, r) {
  return s("distance", [e(n), n, t, r]);
}

function d(n, t) {
  return s("equals", [e(n), n, t]);
}

function g(n, t) {
  return s("intersects", [e(n), n, t]);
}

function A(n, t) {
  return s("touches", [e(n), n, t]);
}

function x(n, t) {
  return s("within", [e(n), n, t]);
}

function S(n, t) {
  return s("disjoint", [e(n), n, t]);
}

function O(n, t) {
  return s("overlaps", [e(n), n, t]);
}

function h(n, t, r) {
  return s("relate", [e(n), n, t, r]);
}

function v(n) {
  return s("isSimple", [e(n), n]);
}

function J(_x7) {
  return _J.apply(this, arguments);
}

function _J() {
  _J = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n) {
    return a(yield s("simplify", [e(n), n]));
  });
  return _J.apply(this, arguments);
}

function N(_x8) {
  return _N.apply(this, arguments);
}

function _N() {
  _N = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t = !1) {
    return a(yield s("convexHull", [e(n), n, t]));
  });
  return _N.apply(this, arguments);
}

function R(_x9, _x10) {
  return _R.apply(this, arguments);
}

function _R() {
  _R = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t) {
    return a(yield s("difference", [e(n), n, t]));
  });
  return _R.apply(this, arguments);
}

function E(_x11, _x12) {
  return _E.apply(this, arguments);
}

function _E() {
  _E = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t) {
    return a(yield s("symmetricDifference", [e(n), n, t]));
  });
  return _E.apply(this, arguments);
}

function j(_x13, _x14) {
  return _j.apply(this, arguments);
}

function _j() {
  _j = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t) {
    return a(yield s("intersect", [e(n), n, t]));
  });
  return _j.apply(this, arguments);
}

function k(_x15) {
  return _k.apply(this, arguments);
}

function _k() {
  _k = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t = null) {
    const r = o(n, t);
    return a(yield s("union", [e(r), r]));
  });
  return _k.apply(this, arguments);
}

function I(_x16, _x17, _x18, _x19, _x20, _x21) {
  return _I.apply(this, arguments);
}

function _I() {
  _I = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t, r, i, o, c) {
    return a(yield s("offset", [e(n), n, t, r, i, o, c]));
  });
  return _I.apply(this, arguments);
}

function V(_x22, _x23, _x24) {
  return _V.apply(this, arguments);
}

function _V() {
  _V = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t, r, i = !1) {
    const o = [e(n), n, t, r, i];
    return a(yield s("buffer", o));
  });
  return _V.apply(this, arguments);
}

function b(_x25, _x26, _x27, _x28, _x29, _x30) {
  return _b.apply(this, arguments);
}

function _b() {
  _b = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t, r, i, o, c) {
    const u = [e(n), n, t, r, i, o, c];
    return a(yield s("geodesicBuffer", u));
  });
  return _b.apply(this, arguments);
}

function z(_x31, _x32) {
  return _z.apply(this, arguments);
}

function _z() {
  _z = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, r, i = !0) {
    const a = yield s("nearestCoordinate", [e(n), n, r, i]);
    return { ...a,
      coordinate: _Point_js__WEBPACK_IMPORTED_MODULE_3__.default.fromJSON(a.coordinate)
    };
  });
  return _z.apply(this, arguments);
}

function D(_x33, _x34) {
  return _D.apply(this, arguments);
}

function _D() {
  _D = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, r) {
    const i = yield s("nearestVertex", [e(n), n, r]);
    return { ...i,
      coordinate: _Point_js__WEBPACK_IMPORTED_MODULE_3__.default.fromJSON(i.coordinate)
    };
  });
  return _D.apply(this, arguments);
}

function H(_x35, _x36, _x37, _x38) {
  return _H.apply(this, arguments);
}

function _H() {
  _H = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, r, i, a) {
    return (yield s("nearestVertices", [e(n), n, r, i, a])).map(n => ({ ...n,
      coordinate: _Point_js__WEBPACK_IMPORTED_MODULE_3__.default.fromJSON(n.coordinate)
    }));
  });
  return _H.apply(this, arguments);
}

function L(n) {
  return "xmin" in n ? n.center : "x" in n ? n : n.extent.center;
}

function q(_x39, _x40, _x41) {
  return _q.apply(this, arguments);
}

function _q() {
  _q = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t, r) {
    var e;
    if (null == n) throw new Error("Illegal Argument Exception");
    const i = n.spatialReference;
    r = null != (e = r) ? e : L(n);
    const a = n.constructor.fromJSON(yield s("rotate", [i, n, t, r]));
    return a.spatialReference = i, a;
  });
  return _q.apply(this, arguments);
}

function B(_x42, _x43) {
  return _B.apply(this, arguments);
}

function _B() {
  _B = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t) {
    var r;
    if (null == n) throw new Error("Illegal Argument Exception");
    const e = n.spatialReference;
    t = null != (r = t) ? r : L(n);
    const i = n.constructor.fromJSON(yield s("flipHorizontal", [e, n, t]));
    return i.spatialReference = e, i;
  });
  return _B.apply(this, arguments);
}

function C(_x44, _x45) {
  return _C.apply(this, arguments);
}

function _C() {
  _C = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t) {
    var r;
    if (null == n) throw new Error("Illegal Argument Exception");
    const e = n.spatialReference;
    t = null != (r = t) ? r : L(n);
    const i = n.constructor.fromJSON(yield s("flipVertical", [e, n, t]));
    return i.spatialReference = e, i;
  });
  return _C.apply(this, arguments);
}

function G(_x46, _x47, _x48, _x49) {
  return _G.apply(this, arguments);
}

function _G() {
  _G = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t, r, i) {
    return a(yield s("generalize", [e(n), n, t, r, i]));
  });
  return _G.apply(this, arguments);
}

function P(_x50, _x51, _x52) {
  return _P.apply(this, arguments);
}

function _P() {
  _P = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t, r) {
    return a(yield s("densify", [e(n), n, t, r]));
  });
  return _P.apply(this, arguments);
}

function U(_x53, _x54, _x55) {
  return _U.apply(this, arguments);
}

function _U() {
  _U = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n, t, r, i = 0) {
    return a(yield s("geodesicDensify", [e(n), n, t, r, i]));
  });
  return _U.apply(this, arguments);
}

function W(n, t) {
  return s("planarArea", [e(n), n, t]);
}

function F(n, t) {
  return s("planarLength", [e(n), n, t]);
}

function K(n, t, r) {
  return s("geodesicArea", [e(n), n, t, r]);
}

function M(n, t, r) {
  return s("geodesicLength", [e(n), n, t, r]);
}



/***/ })

}]);
//# sourceMappingURL=4005.202c3276f23f92b36fbd.js.map