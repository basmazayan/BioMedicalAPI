"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1112],{

/***/ 1112:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/RouteLayerView2D.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Handles.js */ 65333);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/set.js */ 72062);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LayerView2D.js */ 87982);
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./graphics/GraphicContainer.js */ 84853);
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ 20483);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/LayerView.js */ 96121);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/













let h = class extends (0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_10__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__.default) {
  constructor() {
    super(...arguments), this._handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_2__.default(), this._popupTemplates = new Map(), this.graphicsViews = [];
  }

  hitTest(e, s) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this.graphicsViews.length) return null;
      return (yield Promise.all(_this.graphicsViews.map(s => s.hitTest(e)))).flat().filter((e, s) => (e && (e.popupTemplate = _this._popupTemplates.get(_this.graphicsViews[s]), e.layer = _this.layer, e.sourceLayer = _this.layer), !!e));
    })();
  }

  update(e) {
    if (this.graphicsViews) for (const s of this.graphicsViews) s.processUpdate(e);
  }

  attach() {
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(this.layer.featureCollections) || this.layer.featureCollections.forEach(e => {
      const s = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_12__.default({
        view: this.view,
        graphics: e.source,
        requestUpdateCallback: () => this.requestUpdate(),
        container: new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_11__.default(this.view.featuresTilingScheme)
      });
      s.renderer = e.renderer, this._popupTemplates.set(s, e.popupTemplate), this.graphicsViews.push(s), this.container.addChild(s.container);
    });
  }

  detach() {
    this.container.removeAllChildren();

    for (const e of this.graphicsViews) e.destroy();

    this.graphicsViews.length = 0, this._handles.removeAll(), this._popupTemplates = null;
  }

  moveStart() {}

  moveEnd() {}

  viewChange() {
    for (const e of this.graphicsViews) e.viewChange();
  }

};
h = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.views.2d.layers.RouteLayerView2D")], h);
const c = h;


/***/ })

}]);
//# sourceMappingURL=1112.02f8543f010dd3e1d663.js.map