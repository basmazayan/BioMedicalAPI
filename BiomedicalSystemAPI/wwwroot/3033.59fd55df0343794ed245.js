"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[3033],{

/***/ 93033:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/HeatmapProcessor.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/accessorSupport/set.js */ 72062);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/accessorSupport/diffUtils.js */ 58616);
/* harmony import */ var _renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../renderers/support/heatmapUtils.js */ 39115);
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../engine/webgl/definitions.js */ 30603);
/* harmony import */ var _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BaseProcessor.js */ 62497);
/* harmony import */ var _support_tileUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/tileUtils.js */ 66998);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/














class p {
  constructor(e, t) {
    this.offset = e, this.extent = t;
  }

}

function c(e) {
  const t = e.key,
        s = new Map(),
        r = 256,
        i = _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_11__.TILE_SIZE,
        o = e.tileInfoView.tileInfo.isWrappable;
  return s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_13__.getPow2NeighborKey)(t, -1, -1, o).id, new p([-i, -i], [i - r, i - r, i, i])), s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_13__.getPow2NeighborKey)(t, 0, -1, o).id, new p([0, -i], [0, i - r, i, i])), s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_13__.getPow2NeighborKey)(t, 1, -1, o).id, new p([i, -i], [0, i - r, r, i])), s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_13__.getPow2NeighborKey)(t, -1, 0, o).id, new p([-i, 0], [i - r, 0, i, i])), s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_13__.getPow2NeighborKey)(t, 1, 0, o).id, new p([i, 0], [0, 0, r, i])), s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_13__.getPow2NeighborKey)(t, -1, 1, o).id, new p([-i, i], [i - r, 0, i, r])), s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_13__.getPow2NeighborKey)(t, 0, 1, o).id, new p([0, i], [0, 0, i, r])), s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_13__.getPow2NeighborKey)(t, 1, 1, o).id, new p([i, i], [0, 0, r, r])), s;
}

let l = class extends _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_12__.default {
  constructor() {
    super(...arguments), this.type = "heatmap", this._tileKeyToFeatureSets = new Map();
  }

  initialize() {
    this.handles.add([this.tileStore.on("update", this.onTileUpdate.bind(this))]);
  }

  update(e, t) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const s = t.schema.processors[0];
      if ("heatmap" !== s.type) return;
      (0,_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_9__.diff)(_this._schema, s) && (e.mesh = !0, _this._schema = s);
    })();
  }

  onTileUpdate(e) {
    for (const t of e.removed) this._tileKeyToFeatureSets.delete(t.key.id);
  }

  onTileClear(e) {
    const t = {
      clear: !0
    };
    return this._tileKeyToFeatureSets.delete(e.key.id), this.remoteClient.invoke("tileRenderer.onTileData", {
      tileKey: e.id,
      data: t
    });
  }

  onTileMessage(e, r, i) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2._tileKeyToFeatureSets.has(e.key.id) || _this2._tileKeyToFeatureSets.set(e.key.id, new Map());

      const a = _this2._tileKeyToFeatureSets.get(e.key.id);

      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(r.addOrUpdate) && r.addOrUpdate.hasFeatures && a.set(r.addOrUpdate.instance, r), r.end) {
        const t = [],
              r = c(e);

        _this2._tileKeyToFeatureSets.forEach((i, o) => {
          if (o === e.key.id) i.forEach(e => (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.andThen)(e.addOrUpdate, e => t.push(e)));else if (r.has(o)) {
            const e = r.get(o),
                  [a, n] = e.offset;
            i.forEach(e => (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.andThen)(e.addOrUpdate, e => {
              const s = e.transform(a, n, 1, 1);
              t.push(s);
            }));
          }
        });

        const a = (0,_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_10__.calculateHeatmapIntensityInfoReaders)(t, _this2._schema.mesh, 512, 512),
              n = {
          tileKey: e.key.id,
          intensityInfo: a
        },
              d = [a.matrix];
        return _this2.remoteClient.invoke("tileRenderer.onTileData", n, { ...i,
          transferList: d
        });
      }
    })();
  }

  onTileError(e, t, s) {
    return this.remoteClient.invoke("tileRenderer.onTileError", {
      tileKey: e.id,
      error: t
    }, s);
  }

};
l = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.2d.layers.features.processors.HeatmapProcessor")], l);
const h = l;


/***/ }),

/***/ 66998:
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/tileUtils.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPow2NeighborKey": () => (/* binding */ l),
/* harmony export */   "getPow2NeighborTile": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile.js */ 65533);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,n,r){const t=e.tileInfoView.tileInfo.isWrappable,i=l(e.key,n,r,t);return new _Tile_js__WEBPACK_IMPORTED_MODULE_0__.Tile(e.tileInfoView,i)}function l(o,e,l,n){const r=o.clone(),t=1<<r.level,i=r.col+e,c=r.row+l;return n&&i<0?(r.col=i+t,r.world-=1):i>=t?(r.col=i-t,r.world+=1):r.col=i,r.row=c,r}


/***/ })

}]);
//# sourceMappingURL=3033.59fd55df0343794ed245.js.map