"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[498],{

/***/ 10498:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/MapNotesLayerView2D.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Graphic.js */ 99326);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Collection.js */ 37635);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/watchUtils.js */ 11652);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/accessorSupport/set.js */ 72062);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LayerView2D.js */ 87982);
/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./graphics/GraphicContainer.js */ 84853);
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ 20483);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../layers/LayerView.js */ 96121);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/















const u = "sublayers",
      d = "layerView",
      f = Object.freeze({
  remove() {},

  pause() {},

  resume() {}

});
let g = class extends (0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_12__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_15__.default) {
  fetchPopupFeatures(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return Array.from(_this.graphicsViews(), s => s.hitTest(e).filter(e => !!e.popupTemplate)).flat();
    })();
  }

  *graphicsViews() {
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(this._graphicsViewsFeatureCollectionMap) ? yield* this._graphicsViewsFeatureCollectionMap.keys() : (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(this._graphicsViews) ? yield* this._graphicsViews : yield* [];
  }

  hitTest(e, s) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = Array.from(_this2.graphicsViews(), /*#__PURE__*/function () {
        var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (s) {
          const i = yield s.hitTest(e);

          if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(_this2._graphicsViewsFeatureCollectionMap)) {
            const e = _this2._graphicsViewsFeatureCollectionMap.get(s);

            for (const s of i) !s.popupTemplate && e.popupTemplate && (s.popupTemplate = e.popupTemplate);
          }

          return i;
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      return (yield Promise.all(i)).flat();
    })();
  }

  highlight(e) {
    let t;
    if ("number" == typeof e ? t = [e] : e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_2__.default ? t = [e.uid] : Array.isArray(e) && e.length > 0 ? t = "number" == typeof e[0] ? e : e.map(e => e && e.uid) : _core_Collection_js__WEBPACK_IMPORTED_MODULE_3__.default.isCollection(e) && (t = e.map(e => e && e.uid).toArray()), t = t.filter(e => null != e), !t.length) return f;

    for (const s of this.graphicsViews()) s.addHighlight(t);

    return {
      remove: () => {
        for (const e of this.graphicsViews()) e.removeHighlight(t);
      }
    };
  }

  update(e) {
    for (const s of this.graphicsViews()) s.processUpdate(e);
  }

  attach() {
    const e = this.view,
          s = () => this.requestUpdate(),
          i = this.layer.featureCollections;

    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(i) && i.length) {
      this._graphicsViewsFeatureCollectionMap = new Map();

      for (const t of i) {
        const i = new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_13__.default(this.view.featuresTilingScheme);
        i.fadeTransitionEnabled = !0;
        const r = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_14__.default({
          view: e,
          graphics: t.source,
          renderer: t.renderer,
          requestUpdateCallback: s,
          container: i
        });
        this._graphicsViewsFeatureCollectionMap.set(r, t), this.container.addChild(r.container), this.handles.add([(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_5__.init)(t, "visible", e => r.container.visible = e), (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_5__.init)(r, "updating", () => this.notifyChange("updating"))], d);
      }
    } else (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(this.layer.sublayers) && this.handles.add((0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_5__.on)(this.layer, "sublayers", "change", () => this._createGraphicsViews(), () => this._createGraphicsViews(), () => this._destroyGraphicsViews()), u);
  }

  detach() {
    this._destroyGraphicsViews(), this.handles.remove(u);
  }

  moveStart() {}

  moveEnd() {}

  viewChange() {
    for (const e of this.graphicsViews()) e.viewChange();
  }

  isUpdating() {
    for (const e of this.graphicsViews()) if (e.updating) return !0;

    return !1;
  }

  _destroyGraphicsViews() {
    this.container.removeAllChildren(), this.handles.remove(d);

    for (const e of this.graphicsViews()) e.destroy();

    this._graphicsViews = null, this._graphicsViewsFeatureCollectionMap = null;
  }

  _createGraphicsViews() {
    if (this._destroyGraphicsViews(), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(this.layer.sublayers)) return;

    const e = [],
          s = this.view,
          i = () => this.requestUpdate();

    for (const t of this.layer.sublayers) {
      const r = new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_13__.default(this.view.featuresTilingScheme);
      r.fadeTransitionEnabled = !0;
      const o = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_14__.default({
        view: s,
        graphics: t.graphics,
        requestUpdateCallback: i,
        container: r
      });
      this.handles.add([t.on("graphic-update", o.graphicUpdateHandler), (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_5__.init)(t, "visible", e => o.container.visible = e), (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_5__.init)(o, "updating", () => this.notifyChange("updating"))], d), this.container.addChild(o.container), e.push(o);
    }

    this._graphicsViews = e;
  }

};
g = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.views.2d.layers.MapNotesLayerView2D")], g);
const m = g;


/***/ })

}]);
//# sourceMappingURL=498.9c4a919db29ad1a0d9d4.js.map