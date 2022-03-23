"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[932],{

/***/ 30932:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/GeoRSSLayerView2D.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../PopupTemplate.js */ 95821);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Collection.js */ 37635);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/watchUtils.js */ 11652);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/set.js */ 72062);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../renderers/SimpleRenderer.js */ 78477);
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../renderers/support/jsonUtils.js */ 94111);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../rest/support/FeatureSet.js */ 42762);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LayerView2D.js */ 87982);
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./graphics/GraphicContainer.js */ 84853);
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ 20483);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../layers/LayerView.js */ 96121);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/

















let m = class extends (0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_14__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__.default) {
  constructor() {
    super(...arguments), this._graphicsViewMap = {}, this._popupTemplates = new Map(), this.graphicsViews = [];
  }

  hitTest(e, r) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this.graphicsViews.length) return null;

      const s = _this.graphicsViews.reverse().map(r => r.hitTest(e));

      return (yield Promise.all(s)).flat().filter((e, r) => (e && (e.popupTemplate = _this._popupTemplates.get(_this.graphicsViews[r]), e.layer = _this.layer, e.sourceLayer = _this.layer), !!e));
    })();
  }

  update(e) {
    if (this.graphicsViews) for (const r of this.graphicsViews) r.processUpdate(e);
  }

  attach() {
    this.handles.add([(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__.init)(this.layer, "featureCollections", e => {
      this._clear();

      for (const {
        popupInfo: i,
        featureSet: t,
        layerDefinition: o
      } of e) {
        const e = _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_13__.default.fromJSON(t),
              l = new _core_Collection_js__WEBPACK_IMPORTED_MODULE_3__.default(e.features),
              c = o.drawingInfo,
              m = i ? _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__.default.fromJSON(i) : null,
              y = (0,_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__.fromJSON)(c.renderer),
              g = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_16__.default({
          requestUpdateCallback: () => this.requestUpdate(),
          view: this.view,
          graphics: l,
          renderer: y,
          container: new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_15__.default(this.view.featuresTilingScheme)
        });
        this._graphicsViewMap[e.geometryType] = g, this._popupTemplates.set(g, m), "polygon" !== e.geometryType || this.layer.polygonSymbol ? "polyline" !== e.geometryType || this.layer.lineSymbol ? "point" !== e.geometryType || this.layer.pointSymbol || (this.layer.pointSymbol = y.symbol) : this.layer.lineSymbol = y.symbol : this.layer.polygonSymbol = y.symbol, this.graphicsViews.push(g), this.container.addChild(g.container);
      }
    }), (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__.init)(this.layer, "polygonSymbol", e => {
      this._graphicsViewMap.polygon.renderer = new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_11__.default({
        symbol: e
      });
    }), (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__.init)(this.layer, "lineSymbol", e => {
      this._graphicsViewMap.polyline.renderer = new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_11__.default({
        symbol: e
      });
    }), (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_4__.init)(this.layer, "pointSymbol", e => {
      this._graphicsViewMap.point.renderer = new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_11__.default({
        symbol: e
      });
    })], "georsslayerview");
  }

  detach() {
    this.handles.remove("georsslayerview"), this._clear();
  }

  moveStart() {}

  moveEnd() {}

  viewChange() {
    for (const e of this.graphicsViews) e.viewChange();
  }

  _clear() {
    this.container.removeAllChildren();

    for (const e of this.graphicsViews) e.destroy();

    this._graphicsViewMap = {}, this._popupTemplates.clear(), this.graphicsViews.length = 0;
  }

};
m = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.views.2d.layers.GeoRSSLayerView2D")], m);
const y = m;


/***/ })

}]);
//# sourceMappingURL=932.d979ea8b6b8016668401.js.map