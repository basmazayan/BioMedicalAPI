"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[574],{

/***/ 50574:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/layersCreator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateOperationalLayers": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazyLayerLoader.js */ 40506);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/PortalItem.js */ 30424);
/* harmony import */ var _portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../portal/support/featureCollectionUtils.js */ 13587);
/* harmony import */ var _portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../portal/support/portalLayers.js */ 62882);
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../renderers/support/styleUtils.js */ 62840);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/









function n(_x, _x2, _x3) {
  return _n.apply(this, arguments);
}

function _n() {
  _n = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, a, y) {
    if (!a) return;
    const t = [];

    for (const r of a) {
      const e = d(r, y);
      "GroupLayer" === r.layerType ? t.push(G(e, r, y)) : t.push(e);
    }

    const i = yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.eachAlways)(t);

    for (const r of i) !r.value || y.filter && !y.filter(r.value) || e.add(r.value);
  });
  return _n.apply(this, arguments);
}

const l = {
  ArcGISFeatureLayer: "FeatureLayer",
  ArcGISImageServiceLayer: "ImageryLayer",
  ArcGISMapServiceLayer: "MapImageLayer",
  PointCloudLayer: "PointCloudLayer",
  ArcGISSceneServiceLayer: "SceneLayer",
  IntegratedMeshLayer: "IntegratedMeshLayer",
  OGCFeatureLayer: "OGCFeatureLayer",
  BuildingSceneLayer: "BuildingSceneLayer",
  ArcGISTiledElevationServiceLayer: "ElevationLayer",
  ArcGISTiledImageServiceLayer: "ImageryTileLayer",
  ArcGISTiledMapServiceLayer: "TileLayer",
  GroupLayer: "GroupLayer",
  GeoJSON: "GeoJSONLayer",
  WebTiledLayer: "WebTileLayer",
  CSV: "CSVLayer",
  VectorTileLayer: "VectorTileLayer",
  WFS: "WFSLayer",
  WMS: "WMSLayer",
  DefaultTileLayer: "TileLayer",
  KML: "KMLLayer",
  RasterDataLayer: "UnsupportedLayer",
  Voxel: "UnsupportedLayer"
},
      c = {
  ArcGISTiledElevationServiceLayer: "ElevationLayer",
  DefaultTileLayer: "ElevationLayer",
  RasterDataElevationLayer: "UnsupportedLayer"
},
      s = {
  ArcGISTiledMapServiceLayer: "TileLayer",
  ArcGISTiledImageServiceLayer: "ImageryTileLayer",
  OpenStreetMap: "OpenStreetMapLayer",
  WebTiledLayer: "WebTileLayer",
  VectorTileLayer: "VectorTileLayer",
  ArcGISImageServiceLayer: "UnsupportedLayer",
  WMS: "UnsupportedLayer",
  ArcGISMapServiceLayer: "UnsupportedLayer",
  DefaultTileLayer: "TileLayer"
},
      p = {
  ArcGISFeatureLayer: "FeatureLayer",
  ArcGISImageServiceLayer: "ImageryLayer",
  ArcGISImageServiceVectorLayer: "ImageryLayer",
  ArcGISMapServiceLayer: "MapImageLayer",
  ArcGISStreamLayer: "StreamLayer",
  ArcGISTiledImageServiceLayer: "ImageryTileLayer",
  ArcGISTiledMapServiceLayer: "TileLayer",
  BingMapsAerial: "BingMapsLayer",
  BingMapsRoad: "BingMapsLayer",
  BingMapsHybrid: "BingMapsLayer",
  CSV: "CSVLayer",
  DefaultTileLayer: "TileLayer",
  GeoRSS: "GeoRSSLayer",
  GeoJSON: "GeoJSONLayer",
  GroupLayer: "GroupLayer",
  KML: "KMLLayer",
  OGCFeatureLayer: "OGCFeatureLayer",
  SubtypeGroupLayer: "UnsupportedLayer",
  VectorTileLayer: "VectorTileLayer",
  WFS: "WFSLayer",
  WMS: "WMSLayer",
  WebTiledLayer: "WebTileLayer"
},
      u = {
  ArcGISFeatureLayer: "FeatureLayer"
},
      S = {
  ArcGISImageServiceLayer: "ImageryLayer",
  ArcGISImageServiceVectorLayer: "ImageryLayer",
  ArcGISMapServiceLayer: "MapImageLayer",
  ArcGISTiledImageServiceLayer: "ImageryTileLayer",
  ArcGISTiledMapServiceLayer: "TileLayer",
  OpenStreetMap: "OpenStreetMapLayer",
  VectorTileLayer: "VectorTileLayer",
  WebTiledLayer: "WebTileLayer",
  BingMapsAerial: "BingMapsLayer",
  BingMapsRoad: "BingMapsLayer",
  BingMapsHybrid: "BingMapsLayer",
  WMS: "WMSLayer",
  DefaultTileLayer: "TileLayer"
};

function d(_x4, _x5) {
  return _d.apply(this, arguments);
}

function _d() {
  _d = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r) {
    return I(yield T(e, r), e, r);
  });
  return _d.apply(this, arguments);
}

function I(_x6, _x7, _x8) {
  return _I.apply(this, arguments);
}

function _I() {
  _I = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r, a) {
    const y = new e();
    return y.read(r, a.context), "group" === y.type && m(r) && (yield M(y, r, a.context)), yield (0,_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.loadStyleRenderer)(y, a.context), y;
  });
  return _I.apply(this, arguments);
}

function T(_x9, _x10) {
  return _T.apply(this, arguments);
}

function _T() {
  _T = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r) {
    const o = r.context,
          n = g(o);
    let l = e.layerType || e.type;
    !l && r && r.defaultLayerType && (l = r.defaultLayerType);
    const c = n[l];
    let s = c ? _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap[c] : _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.UnknownLayer;
    const p = o && o.portal;

    if (f(e)) {
      if (e.itemId) {
        const r = new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_5__.default({
          id: e.itemId,
          portal: p
        });
        yield r.load();
        const t = (yield (0,_portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_7__.selectLayerClassPath)(r)).className || "UnknownLayer";
        s = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap[t];
      }
    } else "ArcGISFeatureLayer" === l ? (yield (0,_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_6__.isMapNotesLayer)(e, p)) ? s = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.MapNotesLayer : (yield (0,_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_6__.isRouteLayer)(e, p)) ? s = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.RouteLayer : m(e) && (s = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.GroupLayer) : e.wmtsInfo && e.wmtsInfo.url && e.wmtsInfo.layerIdentifier ? s = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.WMTSLayer : "WFS" === l && "2.0.0" !== e.wfsInfo.version && (s = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.UnsupportedLayer);

    return s();
  });
  return _T.apply(this, arguments);
}

function m(e) {
  if ("ArcGISFeatureLayer" !== e.layerType || f(e)) return !1;
  const r = e.featureCollection;
  return !!(r && r.layers && r.layers.length > 1);
}

function f(e) {
  return "Feature Collection" === e.type;
}

function g(e) {
  let r;
  if ("web-scene" === e.origin) switch (e.layerContainerType) {
    case "basemap":
      r = s;
      break;

    case "ground":
      r = c;
      break;

    default:
      r = l;
  } else switch (e.layerContainerType) {
    case "basemap":
      r = S;
      break;

    case "tables":
      r = u;
      break;

    default:
      r = p;
  }
  return r;
}

function G(_x11, _x12, _x13) {
  return _G.apply(this, arguments);
}

function _G() {
  _G = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, a, y) {
    const t = new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default(),
          i = n(t, Array.isArray(a.layers) ? a.layers : [], y),
          L = yield r;
    if (yield i, "group" === L.type) return L.layers.addMany(t), L;
  });
  return _G.apply(this, arguments);
}

function M(_x14, _x15, _x16) {
  return _M.apply(this, arguments);
}

function _M() {
  _M = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, r, y) {
    const t = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.FeatureLayer,
          i = yield t(),
          L = r.featureCollection,
          o = L.showLegend,
          n = L.layers.map((a, t) => {
      var L, n;
      const l = new i();
      l.read(a, y);
      const c = { ...y,
        ignoreDefaults: !0
      };
      return l.read({
        id: `${e.id}-sublayer-${t}`,
        visibility: null == (L = null == (n = r.visibleLayers) ? void 0 : n.includes(t)) || L
      }, c), null != o && l.read({
        showLegend: o
      }, c), l;
    });
    e.layers.addMany(n);
  });
  return _M.apply(this, arguments);
}



/***/ }),

/***/ 13587:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/featureCollectionUtils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMapNotesLayer": () => (/* binding */ r),
/* harmony export */   "isRouteLayer": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _PortalItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PortalItem.js */ 30424);
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portalItemUtils.js */ 26562);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



function r(e, t) {
  return n(e, t, "notes", "Map Notes");
}

function o(e, t) {
  return n(e, t, "route", "Route Layer");
}

function n(_x, _x2, _x3, _x4) {
  return _n.apply(this, arguments);
}

function _n() {
  _n = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r, o, n, i) {
    if (!r.layerType || "ArcGISFeatureLayer" !== r.layerType) return !1;
    if (r.url) return !1;
    if (r.featureCollectionType && r.featureCollectionType === n) return !0;

    if (r.itemId) {
      const n = new _PortalItem_js__WEBPACK_IMPORTED_MODULE_1__.default({
        id: r.itemId,
        portal: o
      });
      return yield n.load(), "Feature Collection" === n.type && (0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_2__.hasTypeKeyword)(n, i);
    }

    return !1;
  });
  return _n.apply(this, arguments);
}



/***/ })

}]);
//# sourceMappingURL=574.31346e54a6d84b8669e3.js.map