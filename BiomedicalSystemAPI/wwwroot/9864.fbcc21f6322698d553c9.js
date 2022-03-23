"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[9864],{

/***/ 39864:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/WMTSLayerView2D.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _)
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
/* harmony import */ var _BitmapTileLayerView2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BitmapTileLayerView2D.js */ 67431);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LayerView2D.js */ 87982);
/* harmony import */ var _support_imageUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/imageUtils.js */ 12871);
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tiling/TileInfoView.js */ 58902);
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tiling/TileKey.js */ 5507);
/* harmony import */ var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tiling/TileQueue.js */ 73795);
/* harmony import */ var _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tiling/TileStrategy.js */ 59937);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../layers/LayerView.js */ 96121);
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ 26263);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/

















const d = [102113, 102100, 3857, 3785, 900913],
      y = [0, 0],
      m = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri.views.2d.layers.WMTSLayerView2D");
let w = class extends (0,_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_17__.RefreshableLayerView)((0,_BitmapTileLayerView2D_js__WEBPACK_IMPORTED_MODULE_9__.BitmapTileLayerView2D)((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_10__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_16__.default))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this._tileRequests = new Map(), this.layer = null;
  }

  get tileMatrixSet() {
    if (this.layer.activeLayer.tileMatrixSetId) return this.layer.activeLayer.tileMatrixSet;

    const e = this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);

    return e ? (this.layer.activeLayer.tileMatrixSetId = e.id, e) : null;
  }

  update(e) {
    this._fetchQueue.pause(), this._fetchQueue.state = e.state, this._tileStrategy.update(e), this._fetchQueue.resume(), this.notifyChange("updating");
  }

  attach() {
    if (!this.tileMatrixSet) return;
    const {
      tileInfo: e
    } = this.tileMatrixSet;
    this._tileInfoView = new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_12__.default(e), this._fetchQueue = new _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_14__.default({
      tileInfoView: this._tileInfoView,
      concurrency: 16,
      process: (e, t) => this.fetchTile(e, t)
    }), this._tileStrategy = new _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_15__.default({
      cachePolicy: "keep",
      resampling: !0,
      acquireTile: e => this.acquireTile(e),
      releaseTile: e => this.releaseTile(e),
      tileInfoView: this._tileInfoView
    }), this.handles.add(this.watch(["layer.activeLayer.styleId", "tileMatrixSet"], () => this._refresh()), this.declaredClass), super.attach();
  }

  detach() {
    var e, t;
    super.detach(), this.handles.remove(this.declaredClass), null == (e = this._tileStrategy) || e.destroy(), null == (t = this._fetchQueue) || t.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
  }

  moveStart() {
    this.requestUpdate();
  }

  viewChange() {
    this.requestUpdate();
  }

  moveEnd() {
    this.requestUpdate();
  }

  releaseTile(e) {
    this._fetchQueue.abort(e.key.id), this._bitmapView.removeChild(e), e.once("detach", () => e.destroy()), this.requestUpdate();
  }

  acquireTile(e) {
    const t = this._bitmapView.createTile(e),
          i = t.bitmap;

    return [i.x, i.y] = this._tileInfoView.getTileCoords(y, t.key), i.resolution = this._tileInfoView.getTileResolution(t.key), [i.width, i.height] = this._tileInfoView.tileInfo.size, this._enqueueTileFetch(t), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }

  doRefresh() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.updateRequested || _this.suspended || _this._refresh();
    })();
  }

  isUpdating() {
    return this._fetchQueue.length > 0;
  }

  fetchTile(e, t = {}) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const s = "tilemapCache" in _this2.layer ? _this2.layer.tilemapCache : null,
            {
        signal: r,
        resamplingLevel: a = 0
      } = t;
      if (!s) return _this2._fetchImage(e, r);
      const l = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_13__.default(0, 0, 0, 0);
      let o;

      try {
        yield s.fetchAvailabilityUpsample(e.level, e.row, e.col, l, {
          signal: r
        }), o = yield _this2._fetchImage(l, r);
      } catch (c) {
        if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAbortError)(c)) throw c;

        if (a < 3) {
          const i = _this2._tileInfoView.getTileParentId(e.id);

          if (i) {
            const s = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_13__.default(i),
                  r = yield _this2.fetchTile(s, { ...t,
              resamplingLevel: a + 1
            });
            return (0,_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_11__.resampleImage)(_this2._tileInfoView, r, s, e);
          }
        }

        throw c;
      }

      return (0,_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_11__.resampleImage)(_this2._tileInfoView, o, l, e);
    })();
  }

  canResume() {
    const e = super.canResume();
    return e ? null !== this.tileMatrixSet : e;
  }

  _enqueueTileFetch(e) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this3._fetchQueue.has(e.key.id)) {
        try {
          const t = yield _this3._fetchQueue.push(e.key);
          e.bitmap.source = t, e.bitmap.width = _this3._tileInfoView.tileInfo.size[0], e.bitmap.height = _this3._tileInfoView.tileInfo.size[1], e.once("attach", () => _this3.requestUpdate());
        } catch (t) {
          (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAbortError)(t) || m.error(t);
        }

        _this3.requestUpdate();
      }
    })();
  }

  _fetchImage(e, t) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this4.layer.fetchTile(e.level, e.row, e.col, {
        signal: t
      });
    })();
  }

  _refresh() {
    this._fetchQueue.reset(), this._tileStrategy.tiles.forEach(e => {
      if (!e.bitmap.source) return;
      const t = {
        id: e.key.id,
        fulfilled: !1,
        promise: this._fetchQueue.push(e.key).then(t => {
          e.bitmap.source = t;
        }).catch(t => {
          (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAbortError)(t) || (e.bitmap.source = null);
        }).finally(() => {
          e.requestRender(), this.notifyChange("updating"), t.fulfilled = !0;
        })
      };

      this._tileRequests.set(e, t);
    }), this.notifyChange("updating");
  }

  _getTileMatrixSetBySpatialReference(e) {
    const t = this.view.spatialReference;
    if (!e.tileMatrixSets) return null;
    let i = e.tileMatrixSets.find(e => e.tileInfo.spatialReference.wkid === t.wkid);
    return !i && t.isWebMercator && (i = e.tileMatrixSets.find(e => d.indexOf(e.tileInfo.spatialReference.wkid) > -1)), i;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], w.prototype, "suspended", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({
  readOnly: !0
})], w.prototype, "tileMatrixSet", null), w = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.2d.layers.WMTSLayerView2D")], w);
const _ = w;


/***/ })

}]);
//# sourceMappingURL=9864.fbcc21f6322698d553c9.js.map