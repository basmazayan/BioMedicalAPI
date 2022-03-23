"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[3806],{

/***/ 48109:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateTolerance": () => (/* binding */ s)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t){let e=0,n=0;for(let r=0;r<t.length;r++){const s=t[r].size;"number"==typeof s&&(e+=s,n++)}return e/n}function n(t,n){return"number"==typeof t?t:t&&t.stops&&t.stops.length?e(t.stops):n}function r(t,e){if(!e)return t;const r=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:r,minSize:s}=e;return(n(r,t)+n(s,t))/2}));let s=0;const o=r.length;if(0===o)return t;for(let n=0;n<o;n++)s+=r[n];const f=Math.floor(s/o);return Math.max(f,t)}function s(e){const n=e&&e.renderer,s="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!n)return s;const o="visualVariables"in n?r(s,n.visualVariables):s;if("simple"===n.type)return t(o,n.symbol);if("unique-value"===n.type){let e=o;return n.uniqueValueInfos.forEach((n=>{e=t(e,n.symbol)})),e}if("class-breaks"===n.type){let e=o;return n.classBreakInfos.forEach((n=>{e=t(e,n.symbol)})),e}return n.type,o}


/***/ }),

/***/ 63806:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/TileLayerView2D.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _BitmapTileLayerView2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BitmapTileLayerView2D.js */ 67431);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayerView2D.js */ 87982);
/* harmony import */ var _support_imageUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./support/imageUtils.js */ 12871);
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tiling/TileInfoView.js */ 58902);
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tiling/TileKey.js */ 5507);
/* harmony import */ var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tiling/TileQueue.js */ 73795);
/* harmony import */ var _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../tiling/TileStrategy.js */ 59937);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../layers/LayerView.js */ 96121);
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ 26263);
/* harmony import */ var _layers_TileLayerView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../layers/TileLayerView.js */ 19369);
/* harmony import */ var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../support/drapedUtils.js */ 7380);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




















const d = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__.default.getLogger("esri.views.2d.layers.TileLayerView2D"),
      _ = [0, 0];
let I = class extends (0,_layers_TileLayerView_js__WEBPACK_IMPORTED_MODULE_19__.TileLayerView)((0,_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_18__.RefreshableLayerView)((0,_BitmapTileLayerView2D_js__WEBPACK_IMPORTED_MODULE_10__.BitmapTileLayerView2D)((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__.default)))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this.layer = null;
  }

  initialize() {
    const e = this.layer.tileInfo,
          i = e && e.spatialReference;
    let s;
    i || (s = new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("layerview:tiling-information-missing", "The layer doesn't provide tiling information", {
      layer: this.layer
    })), i.equals(this.view.spatialReference) || (s = new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", {
      layer: this.layer
    })), this.watch("resampling", () => {
      this.doRefresh();
    }), s && this.addResolvingPromise(Promise.reject(s));
  }

  get resampling() {
    return !("resampling" in this.layer) || !1 !== this.layer.resampling;
  }

  update(e) {
    this._fetchQueue.pause(), this._fetchQueue.state = e.state, this._tileStrategy.update(e), this._fetchQueue.resume(), this.notifyChange("updating");
  }

  attach() {
    const e = "tileServers" in this.layer ? this.layer.tileServers : null;
    this._tileInfoView = new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_13__.default(this.layer.tileInfo, this.layer.fullExtent), this._fetchQueue = new _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_15__.default({
      tileInfoView: this._tileInfoView,
      concurrency: e && 10 * e.length || 10,
      process: (e, t) => this.fetchTile(e, t)
    }), this._tileStrategy = new _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_16__.default({
      cachePolicy: "keep",
      resampling: this.resampling,
      acquireTile: e => this.acquireTile(e),
      releaseTile: e => this.releaseTile(e),
      tileInfoView: this._tileInfoView
    }), this.requestUpdate(), this.container.requestRender(), super.attach();
  }

  detach() {
    super.detach(), this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
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

  createFetchPopupFeaturesQueryGeometry(e, t) {
    return (0,_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_20__.createQueryGeometry)(e, t, this.view);
  }

  doRefresh() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.updateRequested || _this.suspended || (_this._fetchQueue.reset(), _this._tileStrategy.tiles.forEach(e => _this._enqueueTileFetch(e)), _this.notifyChange("updating"));
    })();
  }

  isUpdating() {
    var e;
    return (null == (e = this._fetchQueue) ? void 0 : e.length) > 0;
  }

  acquireTile(e) {
    const t = this._bitmapView.createTile(e),
          i = t.bitmap;

    return [i.x, i.y] = this._tileInfoView.getTileCoords(_, t.key), i.resolution = this._tileInfoView.getTileResolution(t.key), [i.width, i.height] = this._tileInfoView.tileInfo.size, this._enqueueTileFetch(t), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }

  releaseTile(e) {
    this._fetchQueue.abort(e.key.id), this._bitmapView.removeChild(e), e.once("detach", () => e.destroy()), this.requestUpdate();
  }

  fetchTile(e, t = {}) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = "tilemapCache" in _this2.layer ? _this2.layer.tilemapCache : null,
            {
        signal: r,
        resamplingLevel: a = 0
      } = t;
      if (!i) try {
        return yield _this2._fetchImage(e, r);
      } catch (c) {
        if (!(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAbortError)(c) && !_this2.resampling) return (0,_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_12__.createBlankImage)(_this2._tileInfoView.tileInfo.size);

        if (a < 3) {
          const i = _this2._tileInfoView.getTileParentId(e.id);

          if (i) {
            const s = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_14__.default(i),
                  r = yield _this2.fetchTile(s, { ...t,
              resamplingLevel: a + 1
            });
            return (0,_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_12__.resampleImage)(_this2._tileInfoView, r, s, e);
          }
        }

        throw c;
      }
      const l = new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_14__.default(0, 0, 0, 0);
      let o;

      try {
        if (yield i.fetchAvailabilityUpsample(e.level, e.row, e.col, l, {
          signal: r
        }), l.level !== e.level && !_this2.resampling) return (0,_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_12__.createBlankImage)(_this2._tileInfoView.tileInfo.size);
        o = yield _this2._fetchImage(l, r);
      } catch (c) {
        if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAbortError)(c)) throw c;
        o = yield _this2._fetchImage(e, r);
      }

      return _this2.resampling ? (0,_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_12__.resampleImage)(_this2._tileInfoView, o, l, e) : o;
    })();
  }

  _enqueueTileFetch(e) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this3._fetchQueue.has(e.key.id)) {
        try {
          const t = yield _this3._fetchQueue.push(e.key);
          e.bitmap.source = t, e.bitmap.width = _this3._tileInfoView.tileInfo.size[0], e.bitmap.height = _this3._tileInfoView.tileInfo.size[1], e.once("attach", () => _this3.requestUpdate());
        } catch (t) {
          (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAbortError)(t) || d.error(t);
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

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], I.prototype, "resampling", null), I = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.views.2d.layers.TileLayerView2D")], I);
const T = I;


/***/ }),

/***/ 19369:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/TileLayerView.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TileLayerView": () => (/* binding */ i),
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ 48109);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/











const i = i => {
  let c = class extends i {
    fetchPopupFeatures(e, s) {
      var _this = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const {
          layer: a
        } = _this;
        if (!e) return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("tilelayerview:fetchPopupFeatures", "Nothing to fetch without area", {
          layer: a
        }));
        if ("tile" !== a.type) return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("tilelayerview:fetchPopupFeatures", "Layer type should be 'tile'", {
          type: a.type
        }));

        const i = _this.get("view.scale"),
              c = a.allSublayers.toArray().filter(e => {
          const r = 0 === e.minScale || i <= e.minScale,
                t = 0 === e.maxScale || i >= e.maxScale;
          return e.popupTemplate && e.popupEnabled && e.visible && r && t;
        });

        return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.eachAlways)(c.map( /*#__PURE__*/function () {
          var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (r) {
            const o = r.createQuery(),
                  a = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(s) ? s.event : null,
                  i = (0,_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_10__.calculateTolerance)({
              renderer: r.renderer,
              event: a
            });
            o.geometry = _this.createFetchPopupFeaturesQueryGeometry(e, i), o.outFields = yield r.popupTemplate.getRequiredFields();
            return (yield r.queryFeatures(o)).features;
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }())).then(e => [].concat(...e.map(e => e.value).filter(Boolean)));
      })();
    }

  };
  return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], c.prototype, "layer", void 0), c = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.layers.mixins.TileLayerView")], c), c;
};



/***/ }),

/***/ 7380:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/support/drapedUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createQueryGeometry": () => (/* binding */ a),
/* harmony export */   "intersectsDrapedGeometry": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/unitUtils.js */ 55612);
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ 48109);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function a(t,n,a,o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__.default){let s;if("2d"===a.type)s=n*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(o)&&!o.equals(a.spatialReference)?(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__.getMetersPerUnitForSR)(o)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__.getMetersPerUnitForSR)(a.spatialReference):n*i}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}function o(e,r,i){const o=i.toMap(e);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(o))return!1;return a(o,(0,_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_3__.calculateTolerance)(),i,s).intersects(r)}const s=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__.default;


/***/ })

}]);
//# sourceMappingURL=3806.27fd74df22b31fb8ea6b.js.map