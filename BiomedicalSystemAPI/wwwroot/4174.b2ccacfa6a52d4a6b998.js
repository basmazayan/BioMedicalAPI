"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[4174],{

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


/***/ }),

/***/ 32084:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/jsonContext.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForItem": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portal.js */ 27149);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o){return{origin:"portal-item",url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(o.itemUrl),portal:o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__.default.getDefault(),portalItem:o,readResourcePaths:[]}}


/***/ }),

/***/ 24174:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/layersLoader.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFirstLayerOrTableId": () => (/* binding */ f),
/* harmony export */   "getNumLayersAndTables": () => (/* binding */ h),
/* harmony export */   "load": () => (/* binding */ o),
/* harmony export */   "preprocessFSItemData": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layers/support/lazyLayerLoader.js */ 40506);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Portal.js */ 27149);
/* harmony import */ var _jsonContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jsonContext.js */ 32084);
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../renderers/support/styleUtils.js */ 62840);
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../support/requestPresets.js */ 50325);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/







function o(_x, _x2) {
  return _o.apply(this, arguments);
}

function _o() {
  _o = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    const r = e.instance.portalItem;
    return r && r.id ? (yield r.load(t), s(e), i(e, t)) : Promise.resolve();
  });
  return _o.apply(this, arguments);
}

function s(t) {
  const r = t.instance.portalItem;
  if (-1 === t.supportedTypes.indexOf(r.type)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}'", {
    type: r.type,
    expectedType: t.supportedTypes.join(", ")
  });
}

function i(_x3, _x4) {
  return _i.apply(this, arguments);
}

function _i() {
  _i = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    const r = e.instance,
          a = r.portalItem,
          {
      url: o,
      title: s
    } = a,
          i = (0,_jsonContext_js__WEBPACK_IMPORTED_MODULE_4__.createForItem)(a);
    if ("group" === r.type) return r.read({
      title: s
    }, i), u(r, e);
    o && r.read({
      url: o
    }, i);
    const c = yield y(e, t);
    return c && r.read(c, i), r.resourceReferences = {
      portalItem: a,
      paths: i.readResourcePaths
    }, r.read({
      title: s
    }, i), (0,_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_5__.loadStyleRenderer)(r, i);
  });
  return _i.apply(this, arguments);
}

function u(r, n) {
  let l;
  const a = r.portalItem.type;

  switch (a) {
    case "Feature Service":
    case "Feature Collection":
      l = _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_2__.layerLookupMap.FeatureLayer;
      break;

    case "Stream Service":
      l = _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_2__.layerLookupMap.StreamLayer;
      break;

    case "Scene Service":
      l = _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_2__.layerLookupMap.SceneLayer;
      break;

    default:
      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("portal:unsupported-item-type-as-group", `The item type '${a}' is not supported as a 'IGroupLayer'`);
  }

  let o;
  return l().then(e => (o = e, y(n))).then( /*#__PURE__*/function () {
    var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
      return "Feature Service" === a ? (e = yield m(e, r.portalItem.url), p(r, o, e)) : h(e) > 0 ? p(r, o, e) : c(r, o);
    });

    return function (_x5) {
      return _ref.apply(this, arguments);
    };
  }());
}

function c(e, t) {
  return e.portalItem.url ? (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_6__.requestArcGISServiceJSON)(e.portalItem.url).then(r => {
    var n, l;

    function a(e) {
      return {
        id: e.id,
        name: e.name
      };
    }

    r && p(e, t, {
      layers: null == (n = r.layers) ? void 0 : n.map(a),
      tables: null == (l = r.tables) ? void 0 : l.map(a)
    });
  }) : Promise.resolve();
}

function p(e, t, r) {
  let n = r.layers || [];
  const l = r.tables || [];
  "Feature Collection" === e.portalItem.type && (n.forEach(e => {
    var t;
    "Table" === (null == e || null == (t = e.layerDefinition) ? void 0 : t.type) && l.push(e);
  }), n = n.filter(e => {
    var t;
    return "Table" !== (null == e || null == (t = e.layerDefinition) ? void 0 : t.type);
  })), n.reverse().forEach(n => {
    const l = d(e, t, r, n);
    e.add(l);
  }), l.reverse().forEach(n => {
    const l = d(e, t, r, n);
    e.tables.add(l);
  });
}

function d(e, t, n, l) {
  const a = new t({
    portalItem: e.portalItem.clone(),
    layerId: l.id,
    sublayerTitleMode: "service-name"
  });

  if ("Feature Collection" === e.portalItem.type) {
    const t = {
      origin: "portal-item",
      portal: e.portalItem.portal || _Portal_js__WEBPACK_IMPORTED_MODULE_3__.default.getDefault()
    };
    a.read(l, t);
    const o = n.showLegend;
    null != o && a.read({
      showLegend: o
    }, t);
  }

  return a;
}

function y(e, t) {
  if (!1 === e.supportsData) return Promise.resolve(void 0);
  const r = e.instance;
  return r.portalItem.fetchData("json", t).catch(() => null).then( /*#__PURE__*/function () {
    var _ref2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
      if (I(r)) {
        let t,
            n = !0;
        return e && h(e) > 0 && (null == r.layerId && (r.layerId = f(e)), t = v(e, r.layerId), t && (1 === h(e) && (n = !1), null != e.showLegend && (t.showLegend = e.showLegend))), n && "service-name" !== r.sublayerTitleMode && (r.sublayerTitleMode = "item-title-and-service-name"), t;
      }

      return e;
    });

    return function (_x6) {
      return _ref2.apply(this, arguments);
    };
  }());
}

function m(_x7, _x8) {
  return _m.apply(this, arguments);
}

function _m() {
  _m = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, t) {
    var r, n;

    if (null == (null == (r = e) ? void 0 : r.layers) || null == (null == (n = e) ? void 0 : n.tables)) {
      const r = yield (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_6__.requestArcGISServiceJSON)(t);
      (e = e || {}).layers = e.layers || (null == r ? void 0 : r.layers), e.tables = e.tables || (null == r ? void 0 : r.tables);
    }

    return e;
  });
  return _m.apply(this, arguments);
}

function f(e) {
  const t = e.layers;
  if (t && t.length) return t[0].id;
  const r = e.tables;
  return r && r.length ? r[0].id : null;
}

function v(e, t) {
  const r = e.layers;
  if (r) for (let l = 0; l < r.length; l++) if (r[l].id === t) return r[l];
  const n = e.tables;
  if (n) for (let l = 0; l < n.length; l++) if (n[l].id === t) return n[l];
  return null;
}

function h(e) {
  var t, r, n, l;
  return (null != (t = null == e || null == (r = e.layers) ? void 0 : r.length) ? t : 0) + (null != (n = null == e || null == (l = e.tables) ? void 0 : l.length) ? n : 0);
}

function I(e) {
  return "stream" !== e.type && "layerId" in e;
}



/***/ }),

/***/ 50325:
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/requestPresets.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestArcGISServiceJSON": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.js */ 30351);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


function n(_x) {
  return _n.apply(this, arguments);
}

function _n() {
  _n = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (n) {
    const {
      data: o
    } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(n, {
      responseType: "json",
      query: {
        f: "json"
      }
    });
    return o;
  });
  return _n.apply(this, arguments);
}



/***/ })

}]);
//# sourceMappingURL=4174.b2ccacfa6a52d4a6b998.js.map