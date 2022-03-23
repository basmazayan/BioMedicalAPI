"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[2035],{

/***/ 94174:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/GraphicsLayerView2D.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Graphic.js */ 99326);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Collection.js */ 37635);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LayerView2D.js */ 87982);
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graphics/GraphicContainer.js */ 84853);
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ 20483);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layers/LayerView.js */ 96121);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/












const c = {
  remove() {},

  pause() {},

  resume() {}

};
let n = class extends (0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_9__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__.default) {
  initialize() {
    this.graphicsView = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__.default({
      requestUpdateCallback: () => this.requestUpdate(),
      view: this.view,
      graphics: this.layer.graphics,
      container: new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_10__.default(this.view.featuresTilingScheme)
    });
  }

  attach() {
    this.container.addChild(this.graphicsView.container), this.handles.add(this.layer.on("graphic-update", this.graphicsView.graphicUpdateHandler), "graphicslayerview2d");
  }

  detach() {
    this.container.removeAllChildren(), this.graphicsView.destroy(), this.handles.remove("graphicslayerview2d");
  }

  hitTest(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this.graphicsView ? _this.graphicsView.hitTest(e) : null;
    })();
  }

  fetchPopupFeatures(e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this2.graphicsView) return _this2.graphicsView.hitTest(e).filter(e => !!e.popupTemplate);
    })();
  }

  update(e) {
    this.graphicsView.processUpdate(e);
  }

  moveStart() {}

  viewChange() {
    this.graphicsView.viewChange();
  }

  moveEnd() {}

  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }

  highlight(e) {
    var s;
    let t;
    return "number" == typeof e ? t = [e] : e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_2__.default ? t = [e.uid] : Array.isArray(e) && e.length > 0 ? t = "number" == typeof e[0] ? e : e.map(e => e && e.uid) : _core_Collection_js__WEBPACK_IMPORTED_MODULE_3__.default.isCollection(e) && e.length > 0 && (t = e.map(e => e && e.uid).toArray()), t = null == (s = t) ? void 0 : s.filter(e => null != e), t.length ? (this.graphicsView.addHighlight(t), {
      remove: () => this.graphicsView.removeHighlight(t)
    }) : c;
  }

  queryGraphics() {
    return Promise.resolve(this.graphicsView.graphics);
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], n.prototype, "graphicsView", void 0), n = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.2d.layers.GraphicsLayerView2D")], n);
const l = n;


/***/ })

}]);
//# sourceMappingURL=2035.cf157c925767f3833f17.js.map