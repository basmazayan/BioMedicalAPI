"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[3989],{

/***/ 43989:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/arcgisLayers.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromUrl": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arcgisLayerUrl.js */ 46996);
/* harmony import */ var _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lazyLayerLoader.js */ 40506);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/







function i(_x) {
  return _i.apply(this, arguments);
}

function _i() {
  _i = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    var r;
    const a = null == (r = e.properties) ? void 0 : r.customParameters,
          t = yield d(e.url, a),
          l = { ...e.properties,
      url: e.url
    };
    if (!t.sublayerIds) return null != t.layerOrTableId && (l.layerId = t.layerOrTableId, l.sourceJSON = t.sourceJSON), new t.Constructor(l);
    const n = new (0, (yield __webpack_require__.e(/*! import() */ 9294).then(__webpack_require__.bind(__webpack_require__, /*! ../GroupLayer.js */ 69294))).default)({
      title: t.parsedUrl.title
    });
    return c(n, t, l), n;
  });
  return _i.apply(this, arguments);
}

function y(e, r) {
  return e ? e.find(e => e.id === r) : null;
}

function c(e, r, a) {
  function l(e, l) {
    const n = { ...a,
      layerId: e,
      sublayerTitleMode: "service-name"
    };
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(l) && (n.sourceJSON = l), new r.Constructor(n);
  }

  r.sublayerIds.forEach(a => {
    const t = l(a, y(r.sublayerInfos, a));
    e.add(t);
  }), r.tableIds.forEach(a => {
    const t = l(a, y(r.tableInfos, a));
    e.tables.add(t);
  });
}

function d(_x2, _x3) {
  return _d.apply(this, arguments);
}

function _d() {
  _d = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    let l = (0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_5__.parse)(e);
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(l) && (l = yield f(e, t)), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(l)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("arcgis-layers:url-mismatch", "The url '${url}' is not a valid arcgis resource", {
      url: e
    });
    const {
      serverType: n,
      sublayer: o
    } = l;
    let u;
    const i = {
      FeatureServer: "FeatureLayer",
      StreamServer: "StreamLayer",
      VectorTileServer: "VectorTileLayer"
    };

    switch (n) {
      case "MapServer":
        u = null != o ? "FeatureLayer" : S(e, t).then(e => e ? "TileLayer" : "MapImageLayer");
        break;

      case "ImageServer":
        u = w(e, t).then(e => {
          const r = e.tileInfo && e.tileInfo.format;
          return e.tileInfo ? !r || "LERC" !== r.toUpperCase() || e.cacheType && "elevation" !== e.cacheType.toLowerCase() ? "ImageryTileLayer" : "ElevationLayer" : "ImageryLayer";
        });
        break;

      case "SceneServer":
        u = w(l.url.path, t).then(e => {
          if (e) {
            if ("Voxel" === (null == e ? void 0 : e.layerType)) return "VoxelLayer";

            if (null != e && e.layers && Array.isArray(e.layers) && e.layers.length > 0) {
              var r;
              const a = {
                Point: "SceneLayer",
                "3DObject": "SceneLayer",
                IntegratedMesh: "IntegratedMeshLayer",
                PointCloud: "PointCloudLayer",
                Building: "BuildingSceneLayer"
              },
                    t = null == (r = e.layers[0]) ? void 0 : r.layerType;
              if (null != a[t]) return a[t];
            }
          }

          return "SceneLayer";
        });
        break;

      default:
        u = i[n];
    }

    const y = {
      FeatureLayer: !0,
      SceneLayer: !0
    },
          c = "FeatureServer" === n,
          d = {
      parsedUrl: l,
      Constructor: null,
      layerOrTableId: c ? o : null,
      sublayerIds: null,
      tableIds: null
    },
          p = yield u;

    if (y[p] && null == o) {
      const r = yield v(e, n, t);
      c && (d.sublayerInfos = r.layerInfos, d.tableInfos = r.tableInfos);
      if (1 !== r.layerIds.length + r.tableIds.length) d.sublayerIds = r.layerIds, d.tableIds = r.tableIds;else if (c) {
        var I, b;
        d.layerOrTableId = null != (I = r.layerIds[0]) ? I : r.tableIds[0], d.sourceJSON = null != (b = r.layerInfos[0]) ? b : r.tableInfos[0];
      }
    }

    return d.Constructor = yield m(p), d;
  });
  return _d.apply(this, arguments);
}

function f(_x4, _x5) {
  return _f.apply(this, arguments);
}

function _f() {
  _f = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r) {
    var a;
    const s = yield w(e, r);
    let u = null,
        i = null;
    const y = s.type;
    if ("Feature Layer" === y || "Table" === y ? (u = "FeatureServer", i = s.id) : "indexedVector" === y ? u = "VectorTileServer" : s.hasOwnProperty("mapName") ? u = "MapServer" : s.hasOwnProperty("bandCount") && s.hasOwnProperty("pixelSizeX") ? u = "ImageServer" : s.hasOwnProperty("maxRecordCount") && s.hasOwnProperty("allowGeometryUpdates") ? u = "FeatureServer" : s.hasOwnProperty("streamUrls") ? u = "StreamServer" : p(s) ? (u = "SceneServer", i = s.id) : s.hasOwnProperty("layers") && p(null == (a = s.layers) ? void 0 : a[0]) && (u = "SceneServer"), !u) return null;
    const c = null != i ? (0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_5__.parseNonStandardSublayerUrl)(e) : null;
    return {
      title: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(c) && s.name || (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.getFilename)(e),
      serverType: u,
      sublayer: i,
      url: {
        path: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(c) ? c.serviceUrl : (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.urlToObject)(e).path
      }
    };
  });
  return _f.apply(this, arguments);
}

function p(e) {
  return (null == e ? void 0 : e.hasOwnProperty("store")) && e.hasOwnProperty("id") && "number" == typeof e.id;
}

function v(_x6, _x7, _x8) {
  return _v.apply(this, arguments);
}

function _v() {
  _v = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r, a) {
    var t, l;
    let n,
        s = !1;

    if ("FeatureServer" === r) {
      const r = yield b(e, a);
      s = !!r.layersJSON, n = r.layersJSON || r.serviceJSON;
    } else n = yield w(e, a);

    const o = null == (t = n) ? void 0 : t.layers,
          u = null == (l = n) ? void 0 : l.tables;
    return {
      layerIds: (null == o ? void 0 : o.map(e => e.id).reverse()) || [],
      tableIds: (null == u ? void 0 : u.map(e => e.id).reverse()) || [],
      layerInfos: s ? o : [],
      tableInfos: s ? u : []
    };
  });
  return _v.apply(this, arguments);
}

function I(e) {
  return !e.type || "Feature Layer" === e.type;
}

function b(_x9, _x10) {
  return _b.apply(this, arguments);
}

function _b() {
  _b = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r) {
    var a, t;
    let l = yield w(e, r);
    l = l || {}, l.layers = (null == (a = l.layers) ? void 0 : a.filter(I)) || [];
    const n = {
      serviceJSON: l
    };
    if (l.currentVersion < 10.5) return n;
    const s = yield w(e + "/layers", r);
    return n.layersJSON = {
      layers: (null == s || null == (t = s.layers) ? void 0 : t.filter(I)) || [],
      tables: (null == s ? void 0 : s.tables) || []
    }, n;
  });
  return _b.apply(this, arguments);
}

function m(_x11) {
  return _m.apply(this, arguments);
}

function _m() {
  _m = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
    return (0, _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__.layerLookupMap[e])();
  });
  return _m.apply(this, arguments);
}

function S(_x12, _x13) {
  return _S.apply(this, arguments);
}

function _S() {
  _S = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r) {
    return (yield w(e, r)).tileInfo;
  });
  return _S.apply(this, arguments);
}

function w(_x14, _x15) {
  return _w.apply(this, arguments);
}

function _w() {
  _w = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, a) {
    return (yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(r, {
      responseType: "json",
      query: {
        f: "json",
        ...a
      }
    })).data;
  });
  return _w.apply(this, arguments);
}



/***/ }),

/***/ 40506:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "layerLookupMap": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a = {
  BingMapsLayer: function () {
    var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield __webpack_require__.e(/*! import() */ 510).then(__webpack_require__.bind(__webpack_require__, /*! ../BingMapsLayer.js */ 20510))).default;
    });

    return function BingMapsLayer() {
      return _ref.apply(this, arguments);
    };
  }(),
  BuildingSceneLayer: function () {
    var _ref2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(5048), __webpack_require__.e(5871), __webpack_require__.e(1093)]).then(__webpack_require__.bind(__webpack_require__, /*! ../BuildingSceneLayer.js */ 41093))).default;
    });

    return function BuildingSceneLayer() {
      return _ref2.apply(this, arguments);
    };
  }(),
  CSVLayer: function () {
    var _ref3 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield __webpack_require__.e(/*! import() */ 9353).then(__webpack_require__.bind(__webpack_require__, /*! ../CSVLayer.js */ 69353))).default;
    });

    return function CSVLayer() {
      return _ref3.apply(this, arguments);
    };
  }(),
  ElevationLayer: function () {
    var _ref4 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(1635), __webpack_require__.e(8592), __webpack_require__.e(4610)]).then(__webpack_require__.bind(__webpack_require__, /*! ../ElevationLayer.js */ 44610))).default;
    });

    return function ElevationLayer() {
      return _ref4.apply(this, arguments);
    };
  }(),
  FeatureLayer: function () {
    var _ref5 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../FeatureLayer.js */ 36328))).default;
    });

    return function FeatureLayer() {
      return _ref5.apply(this, arguments);
    };
  }(),
  GroupLayer: function () {
    var _ref6 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield __webpack_require__.e(/*! import() */ 9294).then(__webpack_require__.bind(__webpack_require__, /*! ../GroupLayer.js */ 69294))).default;
    });

    return function GroupLayer() {
      return _ref6.apply(this, arguments);
    };
  }(),
  GeoRSSLayer: function () {
    var _ref7 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield __webpack_require__.e(/*! import() */ 2106).then(__webpack_require__.bind(__webpack_require__, /*! ../GeoRSSLayer.js */ 52106))).default;
    });

    return function GeoRSSLayer() {
      return _ref7.apply(this, arguments);
    };
  }(),
  GeoJSONLayer: function () {
    var _ref8 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield __webpack_require__.e(/*! import() */ 9672).then(__webpack_require__.bind(__webpack_require__, /*! ../GeoJSONLayer.js */ 99672))).default;
    });

    return function GeoJSONLayer() {
      return _ref8.apply(this, arguments);
    };
  }(),
  ImageryLayer: function () {
    var _ref9 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(5572), __webpack_require__.e(9135), __webpack_require__.e(6047), __webpack_require__.e(6352), __webpack_require__.e(9728)]).then(__webpack_require__.bind(__webpack_require__, /*! ../ImageryLayer.js */ 59728))).default;
    });

    return function ImageryLayer() {
      return _ref9.apply(this, arguments);
    };
  }(),
  ImageryTileLayer: function () {
    var _ref10 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(5572), __webpack_require__.e(9135), __webpack_require__.e(1057), __webpack_require__.e(1635), __webpack_require__.e(6047), __webpack_require__.e(6352), __webpack_require__.e(8592), __webpack_require__.e(7276)]).then(__webpack_require__.bind(__webpack_require__, /*! ../ImageryTileLayer.js */ 17276))).default;
    });

    return function ImageryTileLayer() {
      return _ref10.apply(this, arguments);
    };
  }(),
  IntegratedMeshLayer: function () {
    var _ref11 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(5048), __webpack_require__.e(9123)]).then(__webpack_require__.bind(__webpack_require__, /*! ../IntegratedMeshLayer.js */ 69123))).default;
    });

    return function IntegratedMeshLayer() {
      return _ref11.apply(this, arguments);
    };
  }(),
  KMLLayer: function () {
    var _ref12 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(8592), __webpack_require__.e(1981)]).then(__webpack_require__.bind(__webpack_require__, /*! ../KMLLayer.js */ 21981))).default;
    });

    return function KMLLayer() {
      return _ref12.apply(this, arguments);
    };
  }(),
  MapImageLayer: function () {
    var _ref13 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(3710), __webpack_require__.e(8592), __webpack_require__.e(2345)]).then(__webpack_require__.bind(__webpack_require__, /*! ../MapImageLayer.js */ 12345))).default;
    });

    return function MapImageLayer() {
      return _ref13.apply(this, arguments);
    };
  }(),
  MapNotesLayer: function () {
    var _ref14 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(8592), __webpack_require__.e(747)]).then(__webpack_require__.bind(__webpack_require__, /*! ../MapNotesLayer.js */ 60747))).default;
    });

    return function MapNotesLayer() {
      return _ref14.apply(this, arguments);
    };
  }(),
  OGCFeatureLayer: function () {
    var _ref15 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(4921), __webpack_require__.e(1622)]).then(__webpack_require__.bind(__webpack_require__, /*! ../OGCFeatureLayer.js */ 64669))).default;
    });

    return function OGCFeatureLayer() {
      return _ref15.apply(this, arguments);
    };
  }(),
  OpenStreetMapLayer: function () {
    var _ref16 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(8592), __webpack_require__.e(3532)]).then(__webpack_require__.bind(__webpack_require__, /*! ../OpenStreetMapLayer.js */ 23532))).default;
    });

    return function OpenStreetMapLayer() {
      return _ref16.apply(this, arguments);
    };
  }(),
  PointCloudLayer: function () {
    var _ref17 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(5048), __webpack_require__.e(4846), __webpack_require__.e(5906)]).then(__webpack_require__.bind(__webpack_require__, /*! ../PointCloudLayer.js */ 5906))).default;
    });

    return function PointCloudLayer() {
      return _ref17.apply(this, arguments);
    };
  }(),
  RouteLayer: function () {
    var _ref18 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield __webpack_require__.e(/*! import() */ 3575).then(__webpack_require__.bind(__webpack_require__, /*! ../RouteLayer.js */ 93575))).default;
    });

    return function RouteLayer() {
      return _ref18.apply(this, arguments);
    };
  }(),
  SceneLayer: function () {
    var _ref19 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(5048), __webpack_require__.e(5871), __webpack_require__.e(5662)]).then(__webpack_require__.bind(__webpack_require__, /*! ../SceneLayer.js */ 55662))).default;
    });

    return function SceneLayer() {
      return _ref19.apply(this, arguments);
    };
  }(),
  StreamLayer: function () {
    var _ref20 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield __webpack_require__.e(/*! import() */ 85).then(__webpack_require__.bind(__webpack_require__, /*! ../StreamLayer.js */ 70085))).default;
    });

    return function StreamLayer() {
      return _ref20.apply(this, arguments);
    };
  }(),
  TileLayer: function () {
    var _ref21 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(1635), __webpack_require__.e(3710), __webpack_require__.e(8592), __webpack_require__.e(4031)]).then(__webpack_require__.bind(__webpack_require__, /*! ../TileLayer.js */ 24031))).default;
    });

    return function TileLayer() {
      return _ref21.apply(this, arguments);
    };
  }(),
  UnknownLayer: function () {
    var _ref22 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(__webpack_require__, /*! ../UnknownLayer.js */ 70007))).default;
    });

    return function UnknownLayer() {
      return _ref22.apply(this, arguments);
    };
  }(),
  UnsupportedLayer: function () {
    var _ref23 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield __webpack_require__.e(/*! import() */ 3863).then(__webpack_require__.bind(__webpack_require__, /*! ../UnsupportedLayer.js */ 83863))).default;
    });

    return function UnsupportedLayer() {
      return _ref23.apply(this, arguments);
    };
  }(),
  VectorTileLayer: function () {
    var _ref24 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(1635), __webpack_require__.e(8955), __webpack_require__.e(8592), __webpack_require__.e(4577)]).then(__webpack_require__.bind(__webpack_require__, /*! ../VectorTileLayer.js */ 24709))).default;
    });

    return function VectorTileLayer() {
      return _ref24.apply(this, arguments);
    };
  }(),
  VoxelLayer: function () {
    var _ref25 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(5048), __webpack_require__.e(8832)]).then(__webpack_require__.bind(__webpack_require__, /*! ../VoxelLayer.js */ 18832))).default;
    });

    return function VoxelLayer() {
      return _ref25.apply(this, arguments);
    };
  }(),
  WebTileLayer: function () {
    var _ref26 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield __webpack_require__.e(/*! import() */ 8592).then(__webpack_require__.bind(__webpack_require__, /*! ../WebTileLayer.js */ 84523))).default;
    });

    return function WebTileLayer() {
      return _ref26.apply(this, arguments);
    };
  }(),
  WFSLayer: function () {
    var _ref27 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(2225), __webpack_require__.e(9140)]).then(__webpack_require__.bind(__webpack_require__, /*! ../WFSLayer.js */ 59140))).default;
    });

    return function WFSLayer() {
      return _ref27.apply(this, arguments);
    };
  }(),
  WMSLayer: function () {
    var _ref28 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(8592), __webpack_require__.e(8197)]).then(__webpack_require__.bind(__webpack_require__, /*! ../WMSLayer.js */ 28197))).default;
    });

    return function WMSLayer() {
      return _ref28.apply(this, arguments);
    };
  }(),
  WMTSLayer: function () {
    var _ref29 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (yield Promise.all(/*! import() */[__webpack_require__.e(8592), __webpack_require__.e(7519)]).then(__webpack_require__.bind(__webpack_require__, /*! ../WMTSLayer.js */ 47519))).default;
    });

    return function WMTSLayer() {
      return _ref29.apply(this, arguments);
    };
  }()
};


/***/ })

}]);
//# sourceMappingURL=3989.a516b555806ac4a5c44d.js.map