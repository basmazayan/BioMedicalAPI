"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1262],{

/***/ 21262:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ElevationQuery.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElevationQuery": () => (/* binding */ v),
/* harmony export */   "GeometryDescriptor": () => (/* binding */ x),
/* harmony export */   "default": () => (/* binding */ v),
/* harmony export */   "getFinestLodIndex": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/asyncUtils.js */ 97073);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/unitUtils.js */ 55612);
/* harmony import */ var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/Multipoint.js */ 43245);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/Polyline.js */ 23926);
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/projection.js */ 15695);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/support/aaBoundingRect.js */ 7401);
/* harmony import */ var _ElevationSampler_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ElevationSampler.js */ 73709);
/* harmony import */ var _ElevationTile_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ElevationTile.js */ 23147);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/













class v {
  queryAll(e, i, o) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!(e = o && o.ignoreInvisibleLayers ? e.filter(e => e.visible) : e.slice()).length) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
      const s = x.fromGeometry(i);
      let l = !1;
      o && o.returnSampleInfo || (l = !0);
      const n = { ...R,
        ...o,
        returnSampleInfo: !0
      },
            a = yield _this.query(e[e.length - 1], s, n),
            r = yield _this._queryAllContinue(e, a, n);
      return r.geometry = r.geometry.export(), l && delete r.sampleInfo, r;
    })();
  }

  query(e, i, o) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!e) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
      if (!i || !(i instanceof x) && "point" !== i.type && "multipoint" !== i.type && "polyline" !== i.type) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("elevation-query:invalid-geometry", "Only point, polyline and multipoint geometries can be used to query elevation");
      const s = { ...R,
        ...o
      },
            l = new w(e, i.spatialReference, s),
            n = s.signal;
      return yield e.load({
        signal: n
      }), yield _this2._createGeometryDescriptor(l, i, n), yield _this2._selectTiles(l, n), yield _this2._populateElevationTiles(l, n), _this2._sampleGeometryWithElevation(l), _this2._createQueryResult(l, n);
    })();
  }

  createSampler(e, i, o) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!e) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
      if (!i || "extent" !== i.type) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("elevation-query:invalid-extent", "Invalid or undefined extent");
      const s = { ...R,
        ...o
      };
      return _this3._createSampler(e, i, s);
    })();
  }

  createSamplerAll(e, i, o) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!(e = o && o.ignoreInvisibleLayers ? e.filter(e => e.visible) : e.slice()).length) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
      if (!i || "extent" !== i.type) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("elevation-query:invalid-extent", "Invalid or undefined extent");
      const s = { ...R,
        ...o,
        returnSampleInfo: !0
      },
            l = yield _this4._createSampler(e[e.length - 1], i, s);
      return _this4._createSamplerAllContinue(e, i, l, s);
    })();
  }

  _createSampler(e, t, i, o) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const s = i.signal;
      yield e.load({
        signal: s
      });
      const l = t.spatialReference,
            n = e.tileInfo.spatialReference;
      l.equals(n) || (yield (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__.initializeProjection)([{
        source: l,
        dest: n
      }], {
        signal: s
      }), t = (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__.project)(t, n));
      const a = new _(e, t, i, o);
      return yield _this5._selectTiles(a, s), yield _this5._populateElevationTiles(a, s), new _ElevationSampler_js__WEBPACK_IMPORTED_MODULE_11__.MultiTileElevationSampler(a.elevationTiles, a.layer.tileInfo, a.options.noDataValue);
    })();
  }

  _createSamplerAllContinue(e, t, i, o) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (e.pop(), !e.length) return i;
      const s = i.samplers.map(e => (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.fromExtent)(e.extent)),
            l = yield _this6._createSampler(e[e.length - 1], t, o, s);
      if (0 === l.samplers.length) return i;
      const n = i.samplers.concat(l.samplers),
            a = new _ElevationSampler_js__WEBPACK_IMPORTED_MODULE_11__.MultiTileElevationSampler(n, o.noDataValue);
      return _this6._createSamplerAllContinue(e, t, a, o);
    })();
  }

  _queryAllContinue(e, t, i) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const o = e.pop(),
            s = t.geometry.coordinates,
            l = [],
            n = [];

      for (let c = 0; c < s.length; c++) {
        const i = t.sampleInfo[c];
        i.demResolution >= 0 ? i.source || (i.source = o) : e.length && (l.push(s[c]), n.push(c));
      }

      if (!e.length || 0 === l.length) return t;
      const a = t.geometry.clone(l),
            r = yield _this7.query(e[e.length - 1], a, i);
      return n.forEach((e, i) => {
        s[e].z = r.geometry.coordinates[i].z, t.sampleInfo[e].demResolution = r.sampleInfo[i].demResolution;
      }), _this7._queryAllContinue(e, t, i);
    })();
  }

  _createQueryResult(e, t) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = {
        geometry: (yield e.geometry.project(e.outSpatialReference, t)).export(),
        noDataValue: e.options.noDataValue
      };
      return e.options.returnSampleInfo && (i.sampleInfo = _this8._extractSampleInfo(e)), e.geometry.coordinates.forEach(e => {
        e.tile = null, e.elevationTile = null;
      }), i;
    })();
  }

  _createGeometryDescriptor(e, i, o) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let s;
      const l = e.layer.tileInfo.spatialReference;
      if (i instanceof x ? s = yield i.project(l, o) : (yield (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__.initializeProjection)([{
        source: i.spatialReference,
        dest: l
      }], {
        signal: o
      }), s = (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__.project)(i, l)), !s) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("elevation-query:spatial-reference-mismatch", `Cannot query elevation in '${i.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);
      e.geometry = x.fromGeometry(s);
    })();
  }

  _selectTiles(e, i) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const o = e.options.demResolution;
      if ("geometry" === e.type && _this9._preselectOutsideLayerExtent(e), "number" == typeof o) _this9._selectTilesClosestResolution(e);else if ("finest-contiguous" === o) yield _this9._selectTilesFinestContiguous(e, i);else {
        if ("auto" !== o) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("elevation-query:invalid-dem-resolution", `Invalid dem resolution value '${o}', expected a number, "finest-contiguous" or "auto"`);
        yield _this9._selectTilesAuto(e, i);
      }
    })();
  }

  _preselectOutsideLayerExtent(e) {
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(e.layer.fullExtent)) return;
    const t = new _ElevationTile_js__WEBPACK_IMPORTED_MODULE_12__.ElevationTile(null);
    t.sample = () => e.options.noDataValue, e.outsideExtentTile = t;
    const o = e.layer.fullExtent;
    e.geometry.coordinates.forEach(e => {
      const i = e.x,
            s = e.y;
      (i < o.xmin || i > o.xmax || s < o.ymin || s > o.ymax) && (e.elevationTile = t);
    });
  }

  _selectTilesClosestResolution(e) {
    const t = e.layer.tileInfo,
          i = this._findNearestDemResolutionLODIndex(t, e.options.demResolution);

    e.selectTilesAtLOD(i);
  }

  _findNearestDemResolutionLODIndex(e, t) {
    const i = t / (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__.getMetersPerUnitForSR)(e.spatialReference);
    let o = e.lods[0],
        s = 0;

    for (let l = 1; l < e.lods.length; l++) {
      const t = e.lods[l];
      Math.abs(t.resolution - i) < Math.abs(o.resolution - i) && (o = t, s = l);
    }

    return s;
  }

  _selectTilesFinestContiguous(e, t) {
    var _this10 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = E(e.layer.tileInfo, e.options.minDemResolution);
      yield _this10._selectTilesFinestContiguousAt(e, i, t);
    })();
  }

  _selectTilesFinestContiguousAt(e, i, o) {
    var _this11 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const n = e.layer;
      if (e.selectTilesAtLOD(i), i < 0) return;
      const a = n.tilemapCache,
            r = e.getTilesToFetch();

      try {
        if (a) yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.whenOrAbort)(Promise.all(r.map(e => a.fetchAvailability(e.level, e.row, e.col, {
          signal: o
        }))), o);else if (yield _this11._populateElevationTiles(e, o), !e.allElevationTilesFetched()) throw e.clearElevationTiles(), new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("elevation-query:has-unavailable-tiles");
      } catch (c) {
        (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAbortError)(c), yield _this11._selectTilesFinestContiguousAt(e, i - 1, o);
      }
    })();
  }

  _populateElevationTiles(e, t) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = e.getTilesToFetch(),
            l = {},
            a = e.options.cache,
            r = e.options.noDataValue,
            c = i.map( /*#__PURE__*/function () {
        var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (i) {
          const s = `${e.layer.uid}:${i.id}:${r}`,
                n = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(a) ? a.get(s) : null,
                c = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(n) ? n : yield e.layer.fetchTile(i.level, i.row, i.col, {
            noDataValue: r,
            signal: t
          });
          (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(a) && a.put(s, c), l[i.id] = new _ElevationTile_js__WEBPACK_IMPORTED_MODULE_12__.ElevationTile(i, c);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.whenOrAbort)((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.eachAlways)(c), t), e.populateElevationTiles(l);
    })();
  }

  _selectTilesAuto(t, i) {
    var _this12 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this12._selectTilesAutoFinest(t), _this12._reduceTilesForMaximumRequests(t);
      const o = t.layer.tilemapCache;
      if (!o) return _this12._selectTilesAutoPrefetchUpsample(t, i);
      const n = t.getTilesToFetch(),
            a = {},
            r = n.map( /*#__PURE__*/function () {
        var _ref2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t) {
          const s = {
            id: null,
            level: 0,
            row: 0,
            col: 0,
            extent: (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.create)()
          },
                n = yield (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__.result)(o.fetchAvailabilityUpsample(t.level, t.row, t.col, s, {
            signal: i
          }));
          !1 === n.ok ? (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAbortError)(n.error) : a[t.id] = s;
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
      yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.whenOrAbort)(Promise.all(r), i), t.remapTiles(a);
    })();
  }

  _reduceTilesForMaximumRequests(e) {
    const t = e.layer.tileInfo;
    let i = 0;

    const o = {},
          s = e => {
      e.id in o ? o[e.id]++ : (o[e.id] = 1, i++);
    },
          l = e => {
      const t = o[e.id];
      1 === t ? (delete o[e.id], i--) : o[e.id] = t - 1;
    };

    e.forEachTileToFetch(s, l);
    let n = !0;

    for (; n && (n = !1, e.forEachTileToFetch(o => {
      i <= e.options.maximumAutoTileRequests || (l(o), t.upsampleTile(o) && (n = !0), s(o));
    }, l), n););
  }

  _selectTilesAutoFinest(e) {
    const t = E(e.layer.tileInfo, e.options.minDemResolution);
    e.selectTilesAtLOD(t, e.options.maximumAutoTileRequests);
  }

  _selectTilesAutoPrefetchUpsample(e, t) {
    var _this13 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = e.layer.tileInfo;
      yield _this13._populateElevationTiles(e, t);
      let o = !1;
      e.forEachTileToFetch((e, t) => {
        i.upsampleTile(e) ? o = !0 : t();
      }), o && (yield _this13._selectTilesAutoPrefetchUpsample(e, t));
    })();
  }

  _sampleGeometryWithElevation(e) {
    e.geometry.coordinates.forEach(t => {
      const i = t.elevationTile;
      let s = e.options.noDataValue;

      if (i) {
        const e = i.sample(t.x, t.y);
        (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(e) ? s = e : t.elevationTile = null;
      }

      t.z = s;
    });
  }

  _extractSampleInfo(e) {
    const t = e.layer.tileInfo,
          i = (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__.getMetersPerUnitForSR)(t.spatialReference);
    return e.geometry.coordinates.map(o => {
      let s = -1;

      if (o.elevationTile && o.elevationTile !== e.outsideExtentTile) {
        s = t.lodAt(o.elevationTile.tile.level).resolution * i;
      }

      return {
        demResolution: s
      };
    });
  }

}

class x {
  export() {
    return this._exporter(this.coordinates, this.spatialReference);
  }

  clone(e) {
    const t = new x();
    return t.geometry = this.geometry, t.spatialReference = this.spatialReference, t.coordinates = e || this.coordinates.map(e => this._cloneCoordinate(e)), t._exporter = this._exporter, t;
  }

  project(e, t) {
    var _this14 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this14.spatialReference.equals(e)) return _this14.clone();
      yield (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__.initializeProjection)([{
        source: _this14.spatialReference,
        dest: e
      }], {
        signal: t
      });
      const i = new _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_6__.default({
        spatialReference: _this14.spatialReference,
        points: _this14.coordinates.map(e => [e.x, e.y])
      }),
            o = (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_9__.project)(i, e);
      if (!o) return null;

      const s = _this14.coordinates.map((e, t) => {
        const i = _this14._cloneCoordinate(e),
              s = o.points[t];

        return i.x = s[0], i.y = s[1], i;
      }),
            l = _this14.clone(s);

      return l.spatialReference = e, l;
    })();
  }

  _cloneCoordinate(e) {
    return {
      x: e.x,
      y: e.y,
      z: e.z,
      m: e.m,
      tile: null,
      elevationTile: null
    };
  }

  static fromGeometry(e) {
    const t = new x();
    if (t.geometry = e, t.spatialReference = e.spatialReference, e instanceof x) t.coordinates = e.coordinates.map(e => t._cloneCoordinate(e)), t._exporter = (t, i) => {
      const o = e.clone(t);
      return o.spatialReference = i, o;
    };else switch (e.type) {
      case "point":
        {
          const i = e,
                {
            hasZ: o,
            hasM: s
          } = i;
          t.coordinates = o && s ? [{
            x: i.x,
            y: i.y,
            z: i.z,
            m: i.m
          }] : o ? [{
            x: i.x,
            y: i.y,
            z: i.z
          }] : s ? [{
            x: i.x,
            y: i.y,
            m: i.m
          }] : [{
            x: i.x,
            y: i.y
          }], t._exporter = (t, i) => e.hasM ? new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default(t[0].x, t[0].y, t[0].z, t[0].m, i) : new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__.default(t[0].x, t[0].y, t[0].z, i);
          break;
        }

      case "multipoint":
        {
          const i = e,
                {
            hasZ: o,
            hasM: s
          } = i;
          t.coordinates = o && s ? i.points.map(e => ({
            x: e[0],
            y: e[1],
            z: e[2],
            m: e[3]
          })) : o ? i.points.map(e => ({
            x: e[0],
            y: e[1],
            z: e[2]
          })) : s ? i.points.map(e => ({
            x: e[0],
            y: e[1],
            m: e[2]
          })) : i.points.map(e => ({
            x: e[0],
            y: e[1]
          })), t._exporter = (t, i) => e.hasM ? new _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_6__.default({
            points: t.map(e => [e.x, e.y, e.z, e.m]),
            hasZ: !0,
            hasM: !0,
            spatiaReference: i
          }) : new _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_6__.default(t.map(e => [e.x, e.y, e.z]), i);
          break;
        }

      case "polyline":
        {
          const i = e,
                o = [],
                s = [],
                {
            hasZ: l,
            hasM: n
          } = e;
          let a = 0;

          for (const e of i.paths) if (s.push([a, a + e.length]), a += e.length, l && n) for (const t of e) o.push({
            x: t[0],
            y: t[1],
            z: t[2],
            m: t[3]
          });else if (l) for (const t of e) o.push({
            x: t[0],
            y: t[1],
            z: t[2]
          });else if (n) for (const t of e) o.push({
            x: t[0],
            y: t[1],
            m: t[2]
          });else for (const t of e) o.push({
            x: t[0],
            y: t[1]
          });

          t.coordinates = o, t._exporter = (t, i) => {
            const o = e.hasM ? t.map(e => [e.x, e.y, e.z, e.m]) : t.map(e => [e.x, e.y, e.z]),
                  l = s.map(e => o.slice(e[0], e[1]));
            return new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_8__.default({
              paths: l,
              hasM: e.hasM,
              hasZ: !0,
              spatialReference: i
            });
          };
          break;
        }
    }
    return t;
  }

}

class g {
  constructor(e, t) {
    this.layer = e, this.options = t;
  }

}

class w extends g {
  constructor(e, t, i) {
    super(e, i), this.outSpatialReference = t, this.type = "geometry";
  }

  selectTilesAtLOD(e) {
    if (e < 0) this.geometry.coordinates.forEach(e => e.tile = null);else {
      const t = this.layer.tileInfo,
            i = t.lods[e].level;
      this.geometry.coordinates.forEach(e => {
        e.tile = t.tileAt(i, e.x, e.y);
      });
    }
  }

  allElevationTilesFetched() {
    return !this.geometry.coordinates.some(e => !e.elevationTile);
  }

  clearElevationTiles() {
    for (const e of this.geometry.coordinates) e.elevationTile !== this.outsideExtentTile && (e.elevationTile = null);
  }

  populateElevationTiles(e) {
    for (const t of this.geometry.coordinates) !t.elevationTile && t.tile && (t.elevationTile = e[t.tile.id]);
  }

  remapTiles(e) {
    for (const t of this.geometry.coordinates) t.tile = e[t.tile.id];
  }

  getTilesToFetch() {
    const e = {},
          t = [];

    for (const i of this.geometry.coordinates) {
      const o = i.tile;
      i.elevationTile || !i.tile || e[o.id] || (e[o.id] = o, t.push(o));
    }

    return t;
  }

  forEachTileToFetch(e) {
    for (const t of this.geometry.coordinates) t.tile && !t.elevationTile && e(t.tile, () => t.tile = null);
  }

}

class _ extends g {
  constructor(e, t, i, o) {
    super(e, i), this.type = "extent", this.elevationTiles = [], this.candidateTiles = [], this.fetchedCandidates = new Set(), this.extent = t.intersection(e.fullExtent), this.maskExtents = o;
  }

  selectTilesAtLOD(e, t) {
    const i = this._maximumLodForRequests(t),
          o = Math.min(i, e);

    o < 0 ? this.candidateTiles.length = 0 : this._selectCandidateTilesCoveringExtentAt(o);
  }

  _maximumLodForRequests(e) {
    const t = this.layer.tileInfo;
    if (!e) return t.lods.length - 1;
    const o = this.extent;
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(o)) return -1;

    for (let i = t.lods.length - 1; i >= 0; i--) {
      const s = t.lods[i],
            l = s.resolution * t.size[0],
            n = s.resolution * t.size[1];
      if (Math.ceil(o.width / l) * Math.ceil(o.height / n) <= e) return i;
    }

    return -1;
  }

  allElevationTilesFetched() {
    return this.candidateTiles.length === this.elevationTiles.length;
  }

  clearElevationTiles() {
    this.elevationTiles.length = 0, this.fetchedCandidates.clear();
  }

  populateElevationTiles(e) {
    for (const t of this.candidateTiles) {
      const i = e[t.id];
      i && (this.fetchedCandidates.add(t), this.elevationTiles.push(i));
    }
  }

  remapTiles(e) {
    this.candidateTiles = this._uniqueNonOverlappingTiles(this.candidateTiles.map(t => e[t.id]));
  }

  getTilesToFetch() {
    return this.candidateTiles;
  }

  forEachTileToFetch(e, t) {
    const i = this.candidateTiles;
    this.candidateTiles = [], i.forEach(i => {
      if (this.fetchedCandidates.has(i)) return void (t && t(i));
      let o = !1;
      e(i, () => o = !0), o ? t && t(i) : this.candidateTiles.push(i);
    }), this.candidateTiles = this._uniqueNonOverlappingTiles(this.candidateTiles, t);
  }

  _uniqueNonOverlappingTiles(e, t) {
    const i = {},
          o = [];

    for (const l of e) i[l.id] ? t && t(l) : (i[l.id] = l, o.push(l));

    const s = o.sort((e, t) => e.level - t.level);
    return s.filter((e, i) => {
      for (let o = 0; o < i; o++) if ((0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.contains)(s[o].extent, e.extent)) return t && t(e), !1;

      return !0;
    });
  }

  _selectCandidateTilesCoveringExtentAt(e) {
    this.candidateTiles.length = 0;
    const t = this.extent;
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(t)) return;
    const o = this.layer.tileInfo,
          s = o.lods[e],
          l = o.tileAt(s.level, t.xmin, t.ymin),
          n = s.resolution * o.size[0],
          a = s.resolution * o.size[1],
          r = Math.ceil((t.xmax - l.extent[0]) / n),
          c = Math.ceil((t.ymax - l.extent[1]) / a);

    for (let i = 0; i < c; i++) for (let e = 0; e < r; e++) {
      const t = {
        id: null,
        level: l.level,
        row: l.row - i,
        col: l.col + e
      };
      o.updateTileInfo(t), this._tileIsMasked(t) || this.candidateTiles.push(t);
    }
  }

  _tileIsMasked(e) {
    return !!this.maskExtents && this.maskExtents.some(t => (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.contains)(t, e.extent));
  }

}

function E(e, t) {
  let i = e.lods.length - 1;

  if (t > 0) {
    const o = e.lods.findIndex(e => e.resolution < t);
    0 === o ? i = 0 : o > 0 && (i = o - 1);
  }

  return i;
}

const R = {
  maximumAutoTileRequests: 20,
  noDataValue: 0,
  returnSampleInfo: !1,
  demResolution: "auto",
  minDemResolution: 0
};


/***/ }),

/***/ 73709:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ElevationSampler.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElevationSamplerBase": () => (/* binding */ m),
/* harmony export */   "MultiTileElevationSampler": () => (/* binding */ u),
/* harmony export */   "TileElevationSampler": () => (/* binding */ p),
/* harmony export */   "updateGeometryElevation": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/unitUtils.js */ 55612);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/support/aaBoundingRect.js */ 7401);
/* harmony import */ var _geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/support/contains.js */ 57098);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/support/webMercatorUtils.js */ 3403);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/Point.js */ 7309);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri.layers.support.ElevationSampler");class m{queryElevation(e){return h(e.clone(),this)}on(){return g}projectIfRequired(e,t){return f(e,t)}}class p extends m{constructor(e,t,n){super(),this.tile=e,this.noDataValue=n,this.extent=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__.toExtent)(e.tile.extent,t.spatialReference);const o=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__.getMetersPerUnitForSR)(t.spatialReference),r=t.lodAt(e.tile.level).resolution*o;this.demResolution={min:r,max:r}}get spatialReference(){return this.extent.spatialReference}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return (0,_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_6__.extentContainsPoint)(this.extent,t)}elevationAt(e){const n=this.projectIfRequired(e,this.spatialReference);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(n))return null;if(!this.contains(e)){const t=this.extent,n=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;return c.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${n})`),this.noDataValue}return this.tile.sample(n.x,n.y)}}class u extends m{constructor(e,t,n){let s;super(),"number"==typeof t?(this.noDataValue=t,s=null):(s=t,this.noDataValue=n),this.samplers=s?e.map((e=>new p(e,s,this.noDataValue))):e;const r=this.samplers[0];if(r){this.extent=r.extent.clone();const{min:e,max:t}=r.demResolution;this.demResolution={min:e,max:t};for(let n=1;n<this.samplers.length;n++){const e=this.samplers[n];this.extent.union(e.extent),this.demResolution.min=Math.min(this.demResolution.min,e.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,e.demResolution.max)}}else this.extent=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__.toExtent)((0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__.create)(),s.spatialReference),this.demResolution={min:0,max:0}}get spatialReference(){return this.extent.spatialReference}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const n of this.samplers)if(n.contains(t))return n.elevationAt(t);return c.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),this.noDataValue}}function h(e,t){const n=f(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":x(e,n,t);break;case"polyline":R(e,n,t);break;case"multipoint":d(e,n,t)}return e}function f(e,n){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(e))return null;const s=e.spatialReference;if(s.equals(n))return e;const i=(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.project)(e,n);return i||c.error(`Cannot project geometry spatial reference (wkid:${s.wkid}) to elevation sampler spatial reference (wkid:${n.wkid})`),i}function x(e,t,s){e.z=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.unwrapOr)(s.elevationAt(t),0)}function R(e,t,s){y.spatialReference=t.spatialReference;const i=e.hasM&&!e.hasZ;for(let o=0;o<e.paths.length;o++){const r=e.paths[o],a=t.paths[o];for(let e=0;e<r.length;e++){const t=r[e],o=a[e];y.x=o[0],y.y=o[1],i&&(t[3]=t[2]),t[2]=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.unwrapOr)(s.elevationAt(y),0)}}e.hasZ=!0}function d(e,t,s){y.spatialReference=t.spatialReference;const i=e.hasM&&!e.hasZ;for(let o=0;o<e.points.length;o++){const r=e.points[o],a=t.points[o];y.x=a[0],y.y=a[1],i&&(r[3]=r[2]),r[2]=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.unwrapOr)(s.elevationAt(y),0)}e.hasZ=!0}const y=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__.default,g={remove(){}};


/***/ }),

/***/ 23147:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ElevationTile.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElevationTile": () => (/* binding */ e),
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(a,e=null){if(this.tile=a,(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(e)){const t=a.extent;this.samplerData={pixelData:e.values,width:e.width,height:e.height,safeWidth:.99999999*(e.width-1),noDataValue:e.noDataValue,dx:(e.width-1)/(t[2]-t[0]),dy:(e.width-1)/(t[3]-t[1]),x0:t[0],y1:t[3]}}}sample(t,e){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(this.samplerData))return;const{safeWidth:s,width:h,pixelData:l,noDataValue:o,dx:r,dy:n,y1:d,x0:u}=this.samplerData,f=i(n*(d-e),0,s),c=i(r*(t-u),0,s),p=Math.floor(f),x=Math.floor(c),D=p*h+x,m=D+h,w=l[D],y=l[m],V=l[D+1],g=l[m+1];if(w!==o&&y!==o&&V!==o&&g!==o){const t=c-x,a=w+(V-w)*t;return a+(y+(g-y)*t-a)*(f-p)}}}function i(t,a,e){return t<a?a:t>e?e:t}


/***/ })

}]);
//# sourceMappingURL=1262.4501481a5afba8ff8616.js.map