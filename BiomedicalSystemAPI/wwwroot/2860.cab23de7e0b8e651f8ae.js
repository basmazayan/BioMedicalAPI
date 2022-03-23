"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[2860],{

/***/ 2860:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/BaseDynamicLayerView2D.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../engine/BitmapContainer.js */ 23335);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LayerView2D.js */ 87982);
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/ExportStrategy.js */ 73004);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layers/LayerView.js */ 96121);
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ 26263);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/













const h = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");
let c = class extends (0,_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_13__.RefreshableLayerView)((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_10__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__.default)) {
  update(t) {
    this.strategy.update(t).catch(t => {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAbortError)(t) || h.error(t);
    }), this.notifyChange("updating");
  }

  attach() {
    this._bitmapContainer = new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_9__.BitmapContainer(), this.container.addChild(this._bitmapContainer), this.strategy = new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_11__.default({
      container: this._bitmapContainer,
      fetchSource: this.fetchBitmapData.bind(this),
      requestUpdate: this.requestUpdate.bind(this)
    });
  }

  detach() {
    this.strategy.destroy(), this.strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }

  moveStart() {}

  viewChange() {}

  moveEnd() {
    this.requestUpdate();
  }

  fetchBitmapData(t, e, r) {
    return this.layer.fetchImage(t, e, r);
  }

  doRefresh() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.requestUpdate();
    })();
  }

  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], c.prototype, "strategy", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], c.prototype, "updating", void 0), c = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.2d.layers.BaseDynamicLayerView2D")], c);
const d = c;


/***/ })

}]);
//# sourceMappingURL=2860.cab23de7e0b8e651f8ae.js.map