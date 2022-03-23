"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[351],{

/***/ 63364:
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/AsyncSequence.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSequence": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accessor.js */ 98240);
/* harmony import */ var _accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let r=class extends _Accessor_js__WEBPACK_IMPORTED_MODULE_1__.default{constructor(){super(...arguments),this.updating=!1,this.pending=[]}push(s,t){this.pending.push({promise:s,callback:t}),1===this.pending.length&&this.process()}process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const s=this.pending[0];s.promise.then((t=>s.callback(t))).catch((()=>{})).then((()=>{this.pending.shift(),this.process()}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],r.prototype,"updating",void 0),r=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__.subclass)("esri.core.AsyncSequence")],r);


/***/ }),

/***/ 70351:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceSnappingSourceWorker.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureServiceSnappingSourceWorker": () => (/* binding */ w),
/* harmony export */   "default": () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Evented.js */ 33380);
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/Handles.js */ 65333);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/watchUtils.js */ 11652);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _layers_graphics_data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../layers/graphics/data/FeatureStore.js */ 49685);
/* harmony import */ var _layers_graphics_data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../layers/graphics/data/QueryEngine.js */ 43971);
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../layers/support/TileInfo.js */ 87940);
/* harmony import */ var _layers_support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../layers/support/TimeInfo.js */ 73887);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../rest/support/Query.js */ 37995);
/* harmony import */ var _FeatureServiceTiledFetcher_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./FeatureServiceTiledFetcher.js */ 87343);
/* harmony import */ var _FeatureServiceTileStore_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./FeatureServiceTileStore.js */ 67884);
/* harmony import */ var _support_WatchUpdatingTracking_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../support/WatchUpdatingTracking.js */ 49884);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




















let w = class extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__.default.EventedAccessor {
  constructor() {
    super(...arguments), this.isInitializing = !0, this.whenSetup = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createDeferred)(), this.handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_3__.default(), this.updatingHandles = new _support_WatchUpdatingTracking_js__WEBPACK_IMPORTED_MODULE_20__.WatchUpdatingTracking(), this.pendingApplyEdits = new Map();
  }

  get updating() {
    return this.featureFetcher.updating || this.isInitializing || this.updatingHandles.updating;
  }

  destroy() {
    this.featureFetcher.destroy(), this.queryEngine.destroy(), this.featureStore.clear(), this.handles.destroy();
  }

  setup(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        geometryType: t,
        objectIdField: i,
        timeInfo: r,
        fields: s
      } = e.serviceInfo;
      return _this.featureStore = new _layers_graphics_data_FeatureStore_js__WEBPACK_IMPORTED_MODULE_13__.default({ ...e.serviceInfo,
        hasZ: !1,
        hasM: !1
      }), _this.queryEngine = new _layers_graphics_data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_14__.default({
        spatialReference: e.spatialReference,
        featureStore: _this.featureStore,
        geometryType: t,
        fields: s,
        hasZ: !1,
        hasM: !1,
        objectIdField: i,
        timeInfo: r ? _layers_support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_16__.default.fromJSON(r) : null
      }), _this.featureFetcher = new _FeatureServiceTiledFetcher_js__WEBPACK_IMPORTED_MODULE_18__.FeatureServiceTiledFetcher({
        store: new _FeatureServiceTileStore_js__WEBPACK_IMPORTED_MODULE_19__.FeatureServiceTileStore({
          featureStore: _this.featureStore
        }),
        url: e.serviceInfo.url,
        objectIdField: e.serviceInfo.objectIdField,
        globalIdField: e.serviceInfo.globalIdField,
        capabilities: e.serviceInfo.capabilities,
        spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__.default.fromJSON(e.spatialReference),
        sourceSpatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__.default.fromJSON(e.serviceInfo.spatialReference)
      }), _this.handles.add([_this.featureFetcher.watch("availability", e => _this.emit("notify-availability", {
        availability: e
      }), !0), _this.watch("updating", () => _this.notifyUpdating())]), _this.whenSetup.resolve(), _this.isInitializing = !1, _this.configure(e.configuration);
    })();
  }

  configure(e) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this2.updatingHandles.addPromise(_this2.whenSetup.promise), _this2.updateFeatureFetcherConfiguration(e), {
        result: {}
      };
    })();
  }

  fetchCandidates(e, t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this3.whenSetup.promise, (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(t);
      return {
        result: yield _this3.queryEngine.executeQueryForSnapping({
          point: e.point,
          distance: e.distance,
          types: e.types,
          query: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(e.filter) ? e.filter : {
            where: "1=1"
          }
        }, (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(t) ? t.signal : null)
      };
    })();
  }

  updateTiles(e, t) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this4.updatingHandles.addPromise(_this4.whenSetup.promise), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(t), _this4.featureFetcher.tileSize = e.tileSize, _this4.featureFetcher.tilesOfInterest = e.tiles, _this4.featureFetcher.tileInfo = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(e.tileInfo) ? _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_15__.default.fromJSON(e.tileInfo) : null, {
        result: {}
      };
    })();
  }

  refresh(e, t) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this5.updatingHandles.addPromise(_this5.whenSetup.promise), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(t), _this5.featureFetcher.refresh(), {
        result: {}
      };
    })();
  }

  whenNotUpdating(e, t) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return yield _this6.updatingHandles.addPromise(_this6.whenSetup.promise), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(t), yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.whenOrAbort)((0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__.whenNotOnce)(_this6, "updating"), t), {
        result: {}
      };
    })();
  }

  getDebugInfo(e, t) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(t), {
        result: _this7.featureFetcher.debugInfo
      };
    })();
  }

  beginApplyEdits(e, t) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this8.updatingHandles.addPromise(_this8.whenSetup.promise), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(t);
      const i = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createDeferred)();
      return _this8.pendingApplyEdits.set(e.id, i), _this8.featureFetcher.applyEdits(i.promise), _this8.updatingHandles.addPromise(i.promise), {
        result: {}
      };
    })();
  }

  endApplyEdits(e, t) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = _this9.pendingApplyEdits.get(e.id);

      return i && i.resolve(e.edits), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(t), {
        result: {}
      };
    })();
  }

  updateFeatureFetcherConfiguration(e) {
    this.featureFetcher.filter = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(e.filter) ? _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_17__.default.fromJSON(e.filter) : null, this.featureFetcher.customParameters = e.customParameters;
  }

  notifyUpdating() {
    this.emit("notify-updating", {
      updating: this.updating
    });
  }

};

function F() {
  return new w();
}

(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  readOnly: !0
})], w.prototype, "updating", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()], w.prototype, "isInitializing", void 0), w = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")], w);


/***/ }),

/***/ 89628:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTileCache.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureServiceTileCache": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(){this._store=new Map,this._byteSize=0}set(t,e){this.delete(t),this._store.set(t,e),this._byteSize+=e.byteSize}delete(t){const e=this._store.get(t);return!!this._store.delete(t)&&(this._byteSize-=e.byteSize,!0)}get(t){return this.used(t),this._store.get(t)}has(t){return this.used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,e){for(const[s,r]of this._store){if(this._byteSize<=t)break;this.delete(s),e(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}used(t){const e=this._store.get(t);e&&(this._store.delete(t),this._store.set(t,e))}}


/***/ }),

/***/ 67884:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTileStore.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureServiceTileStore": () => (/* binding */ g),
/* harmony export */   "ProcessResult": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Accessor.js */ 98240);
/* harmony import */ var _core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/byteSizeEstimations.js */ 48154);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingRect.js */ 7401);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _layers_graphics_data_BoundsStore_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../layers/graphics/data/BoundsStore.js */ 53164);
/* harmony import */ var _rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../rest/query/operations/query.js */ 36351);
/* harmony import */ var _FeatureServiceTileCache_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FeatureServiceTileCache.js */ 89628);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/














let g = class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__.default {
  constructor(e) {
    super(e), this.tileInfo = null, this.extent = null, this.maximumByteSize = 10485760, this.tileBounds = new _layers_graphics_data_BoundsStore_js__WEBPACK_IMPORTED_MODULE_12__.BoundsStore(), this.tiles = new _FeatureServiceTileCache_js__WEBPACK_IMPORTED_MODULE_14__.FeatureServiceTileCache(), this.refCounts = new Map(), this.tileFeatureCounts = new Map(), this.tmpBoundingRect = (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.create)();
  }

  add(e, t) {
    const s = [];

    for (const i of t) 0 === this.referenceFeature(i.objectId) && s.push(i);

    this.addTileStorage(e, new Set(t.map(({
      objectId: e
    }) => e)), v(t)), this.featureStore.addMany(s), this.tiles.applyByteSizeLimit(this.maximumByteSize, e => this.removeTileStorage(e));
  }

  destroy() {
    this.clear(), this.tileFeatureCounts.clear();
  }

  clear() {
    this.featureStore.clear(), this.tileBounds.clear(), this.tiles.clear(), this.refCounts.clear();
  }

  refresh() {
    this.clear(), this.tileFeatureCounts.clear();
  }

  processEdits(e, t, s) {
    return this.processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)), this.processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures), t, s);
  }

  addTileStorage(e, t, s) {
    this.tiles.set(e.id, new S(e, t, s)), this.tileBounds.set(e.id, e.extent), this.tileFeatureCounts.set(e.id, t.size);
  }

  remove({
    id: e
  }) {
    const t = this.tiles.get(e);
    t && this.removeTileStorage(t);
  }

  removeTileStorage(e) {
    const t = [];

    for (const i of e.objectIds) 1 === this.unreferenceFeature(i) && t.push(i);

    this.featureStore.removeManyById(t);
    const s = e.data.id;
    this.tiles.delete(s), this.tileBounds.delete(s);
  }

  processEditsDelete(e) {
    this.featureStore.removeManyById(e);

    for (const [, t] of this.tiles) {
      for (const s of e) t.objectIds.delete(s);

      this.tileFeatureCounts.set(t.data.id, t.objectIds.size);
    }

    for (const t of e) this.refCounts.delete(t);
  }

  processEditsRefetch(e, t, s) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = (yield t(e, s)).features,
            {
        hasZ: o,
        hasM: n
      } = _this.featureStore;

      for (const l of i) {
        const e = (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_11__.getBoundsOptimizedGeometry)(_this.tmpBoundingRect, l.geometry, o, n);
        (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(e) || _this.tileBounds.forEachInBounds(e, e => {
          const t = _this.tiles.get(e);

          _this.featureStore.add(l), t.objectIds.has(l.objectId) || (t.objectIds.add(l.objectId), _this.referenceFeature(l.objectId), _this.tileFeatureCounts.set(t.data.id, t.objectIds.size));
        });
      }
    })();
  }

  process(e, t = () => !0) {
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(this.tileInfo) || !e.extent || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(this.extent) && !(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.intersects)((0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.fromExtent)(this.extent, this.tmpBoundingRect), e.extent)) return new j(e);
    if (this.tiles.has(e.id)) return new j(e);
    const s = this.createTileTree(e, this.tileInfo);
    return this.simplify(s, t, null, 0, 1), this.collectMissingTiles(e, s, this.tileInfo);
  }

  get debugInfo() {
    return Array.from(this.tiles.values()).map(({
      data: e
    }) => ({
      data: e,
      featureCount: this.tileFeatureCounts.get(e.id) || 0
    }));
  }

  getFeatureCount(e) {
    const t = this.tileFeatureCounts.get(e.id);
    return null != t ? t : 0;
  }

  fetchCount(e, t, s, i) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = _this2.tileFeatureCounts.get(e.id);

      if (null != r) return r;
      const o = yield (0,_rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_13__.executeQueryForCount)(t, s, i);
      return _this2.tileFeatureCounts.set(e.id, o.data.count), o.data.count;
    })();
  }

  createTileTree(e, t) {
    const s = new I(e.level, e.row, e.col);
    return t.updateTileInfo(s, 1), this.tileBounds.forEachInBounds(e.extent, i => {
      const r = this.tiles.get(i).data;
      this.tilesAreRelated(e, r) && this.populateChildren(s, r, t, this.tileFeatureCounts.get(r.id) || 0);
    }), s;
  }

  tilesAreRelated(e, t) {
    if (!e || !t) return !1;
    if (e.level === t.level) return e.row === t.row && e.col === t.col;
    const s = e.level < t.level,
          i = s ? e : t,
          r = s ? t : e,
          o = 1 << r.level - i.level;
    return Math.floor(r.row / o) === i.row && Math.floor(r.col / o) === i.col;
  }

  populateChildren(e, t, s, i) {
    const r = t.level - e.level - 1;
    if (r < 0) return void (e.isLeaf = !0);
    const n = t.row >> r,
          l = t.col >> r,
          c = e.row << 1,
          a = l - (e.col << 1) + (n - c << 1),
          h = e.children[a];
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(h)) this.populateChildren(h, t, s, i);else {
      const r = new I(e.level + 1, n, l);
      s.updateTileInfo(r, 1), e.children[a] = r, this.populateChildren(r, t, s, i);
    }
  }

  simplify(e, t, s, i, r) {
    const n = r * r;
    if (e.isLeaf) return t(this.getFeatureCount(e), r) ? 0 : (this.remove(e), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(s) && (s.children[i] = null), n);
    const l = r / 2,
          c = l * l;
    let a = 0;

    for (let h = 0; h < e.children.length; h++) {
      const s = e.children[h];
      a += (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(s) ? this.simplify(s, t, e, h, l) : c;
    }

    return 0 === a ? this.mergeChildren(e) : 1 - a / n < F && (this.purge(e), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(s) && (s.children[i] = null), a = n), a;
  }

  mergeChildren(e) {
    const t = new Set();
    let s = 0;
    this.forEachLeaf(e, e => {
      const i = this.tiles.get(e.id);

      if (i) {
        s += i.byteSize;

        for (const e of i.objectIds) t.has(e) || (t.add(e), this.referenceFeature(e));

        this.remove(e);
      }
    }), this.addTileStorage(e, t, s), e.isLeaf = !0, e.children[0] = e.children[1] = e.children[2] = e.children[3] = null, this.tileFeatureCounts.set(e.id, t.size);
  }

  forEachLeaf(e, t) {
    for (const s of e.children) (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(s) || (s.isLeaf ? t(s) : this.forEachLeaf(s, t));
  }

  purge(e) {
    if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(e)) if (e.isLeaf) this.remove(e);else for (let t = 0; t < e.children.length; t++) {
      const s = e.children[t];
      this.purge(s), e.children[t] = null;
    }
  }

  collectMissingTiles(e, t, s) {
    const i = new w(s, e, this.extent);
    return this.collectMissingTilesRecurse(t, i, 1), i.info;
  }

  collectMissingTilesRecurse(e, t, s) {
    if (e.isLeaf) return;
    if (!e.hasChildren) return void t.addMissing(e.level, e.row, e.col, s);
    const i = s / 2;

    for (let o = 0; o < e.children.length; o++) {
      const s = e.children[o];
      (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(s) ? t.addMissing(e.level + 1, (e.row << 1) + ((2 & o) >> 1), (e.col << 1) + (1 & o), i) : this.collectMissingTilesRecurse(s, t, i);
    }
  }

  referenceFeature(e) {
    const t = (this.refCounts.get(e) || 0) + 1;
    return this.refCounts.set(e, t), 1 === t ? 0 : 2;
  }

  unreferenceFeature(e) {
    const t = (this.refCounts.get(e) || 0) - 1;
    return 0 === t ? (this.refCounts.delete(e), 1) : (t > 0 && this.refCounts.set(e, t), 2);
  }

  get test() {
    return {
      tiles: Array.from(this.tiles.values()).map(e => `${e.data.id}:[${Array.from(e.objectIds)}]`),
      featureReferences: Array.from(this.refCounts.keys()).map(e => `${e}:${this.refCounts.get(e)}`)
    };
  }

};

function v(e) {
  return e.reduce((e, t) => e + y(t), 0);
}

function y(e) {
  return 32 + C(e.geometry) + (0,_core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_3__.estimateAttributesObjectSize)(e.attributes);
}

function C(e) {
  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(e)) return 0;
  const t = (0,_core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_3__.estimateFixedArraySize)(e.lengths, 4);
  return 32 + (0,_core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_3__.estimateFixedArraySize)(e.coords, 8) + t;
}

(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
  constructOnly: !0
})], g.prototype, "featureStore", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], g.prototype, "tileInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], g.prototype, "extent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], g.prototype, "maximumByteSize", void 0), g = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")], g);

class S {
  constructor(e, t, s) {
    this.data = e, this.objectIds = t, this.byteSize = s;
  }

}

class I {
  constructor(e, t, s) {
    this.level = e, this.row = t, this.col = s, this.isLeaf = !1, this.extent = null, this.children = [null, null, null, null];
  }

  get hasChildren() {
    return !this.isLeaf && ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(this.children[0]) || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(this.children[1]) || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(this.children[2]) || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(this.children[3]));
  }

}

class j {
  constructor(e, t = []) {
    this.missingTiles = t, this.fullArea = 0, this.coveredArea = 0, this.fullArea = (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.area)(e.extent), this.coveredArea = this.fullArea;
  }

  prepend(e) {
    this.missingTiles = e.missingTiles.concat(this.missingTiles), this.coveredArea += e.coveredArea, this.fullArea += e.fullArea;
  }

}

class w {
  constructor(e, t, s) {
    this.tileInfo = e, this.extent = null, this.info = new j(t), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(s) && (this.extent = (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.fromExtent)(s));
  }

  addMissing(e, t, s, i) {
    const r = {
      id: null,
      level: e,
      row: t,
      col: s
    };
    this.tileInfo.updateTileInfo(r, 1), !(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(r.extent) || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(this.extent) && !(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.intersects)(this.extent, r.extent) || (this.info.missingTiles.push({
      data: r,
      resolution: i
    }), this.info.coveredArea -= (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.area)(r.extent));
  }

}

const F = .18751;


/***/ }),

/***/ 87343:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiledFetcher.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureServiceTiledFetcher": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_AsyncSequence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/AsyncSequence.js */ 63364);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/handleUtils.js */ 53985);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingRect.js */ 7401);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _rest_query_operations_pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../rest/query/operations/pbfOptimizedFeatureSet.js */ 86315);
/* harmony import */ var _rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../rest/query/operations/query.js */ 36351);
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../rest/support/Query.js */ 37995);
/* harmony import */ var _PendingFeatureTile_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PendingFeatureTile.js */ 94191);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



















const I = _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__.default.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");
let S = class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_4__.HandleOwner {
  constructor(e) {
    super(e), this.tilesOfInterest = [], this.availability = 0, this.pendingTiles = new Map(), this.pendingEdits = new _core_AsyncSequence_js__WEBPACK_IMPORTED_MODULE_3__.AsyncSequence(), this.pendingEditsAbortController = new AbortController();
  }

  get minimumVerticesPerFeature() {
    var e;

    switch (null == (e = this.store) ? void 0 : e.featureStore.geometryType) {
      case "esriGeometryPoint":
      case "esriGeometryMultipoint":
        return 1;

      case "esriGeometryPolygon":
        return 4;

      case "esriGeometryPolyline":
        return 2;
    }
  }

  set filter(e) {
    const t = this._get("filter"),
          i = this.filterProperties(e);

    JSON.stringify(t) !== JSON.stringify(i) && this._set("filter", i);
  }

  set customParameters(e) {
    const t = this._get("customParameters");

    JSON.stringify(t) !== JSON.stringify(e) && this._set("customParameters", e);
  }

  get configuration() {
    return {
      filter: this.filter,
      customParameters: this.customParameters,
      tileInfo: this.tileInfo,
      tileSize: this.tileSize
    };
  }

  set tileInfo(e) {
    const t = this._get("tileInfo");

    t !== e && ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(e) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(t) && JSON.stringify(e) === JSON.stringify(t) || (this._set("tileInfo", e), this.store.tileInfo = e));
  }

  set tileSize(e) {
    this._get("tileSize") !== e && this._set("tileSize", e);
  }

  get updating() {
    return this.updatingHandles.updating || this.pendingEdits.updating;
  }

  initialize() {
    this.initializeFetchExtent(), this.updatingHandles.add(this, "configuration", () => this.refresh()), this.updatingHandles.add(this, "tilesOfInterest", (e, i) => {
      (0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__.equals)(e, i, ({
        id: e
      }, {
        id: t
      }) => e === t) || this.process();
    }, 1);
  }

  destroy() {
    this.pendingTiles.forEach(e => this.deletePendingTile(e)), this.pendingTiles.clear(), this.store.destroy(), this.tilesOfInterest.length = 0, this.pendingEditsAbortController.abort(), this.pendingEditsAbortController = null;
  }

  refresh() {
    this.store.refresh(), this.pendingTiles.forEach(e => this.deletePendingTile(e)), this.process();
  }

  applyEdits(e) {
    var _this = this;

    this.pendingEdits.push(e, /*#__PURE__*/function () {
      var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
        if (0 === e.addedFeatures.length && 0 === e.updatedFeatures.length && 0 === e.deletedFeatures.length) return;

        for (const [, i] of _this.pendingTiles) i.reset();

        const t = { ...e,
          deletedFeatures: e.deletedFeatures.map(({
            objectId: e,
            globalId: t
          }) => e && -1 !== e ? e : _this.lookupObjectIdByGlobalId(t))
        };
        yield _this.updatingHandles.addPromise(_this.store.processEdits(t, (e, t) => _this.queryFeaturesById(e, t), _this.pendingEditsAbortController.signal)), _this.processPendingTiles();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  initializeFetchExtent() {
    var _this2 = this;

    if (!this.capabilities.query.supportsExtent) return;
    const e = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.createTask)( /*#__PURE__*/function () {
      var _ref2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
        try {
          var t;
          const i = yield (0,_rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_17__.executeQueryForExtent)(_this2.url, new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_18__.default({
            where: "1=1",
            outSpatialReference: _this2.spatialReference,
            cacheHint: !!_this2.capabilities.query.supportsCacheHint || void 0
          }), {
            query: _this2.configuration.customParameters,
            signal: e
          });
          _this2.store.extent = _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__.default.fromJSON(null == (t = i.data) ? void 0 : t.extent);
        } catch (i) {
          (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.throwIfAbortError)(i), I.warn("Failed to fetch data extent", i);
        }
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    this.updatingHandles.addPromise(e.promise.then(() => this.process())), this.handles.add((0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_5__.makeHandle)(() => e.abort()));
  }

  get debugInfo() {
    return {
      numberOfFeatures: this.store.featureStore.numFeatures,
      tilesOfInterest: this.tilesOfInterest,
      pendingTiles: Array.from(this.pendingTiles.values()).map(e => e.debugInfo),
      storedTiles: this.store.debugInfo
    };
  }

  process() {
    this.markTilesNotAlive(), this.createPendingTiles(), this.deletePendingTiles(), this.processPendingTiles();
  }

  markTilesNotAlive() {
    for (const [, e] of this.pendingTiles) e.alive = !1;
  }

  createPendingTiles() {
    const e = this.collectMissingTilesInfo();
    if (this.setAvailability((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isNone)(e) ? 1 : e.coveredArea / e.fullArea), !(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isNone)(e)) for (const {
      data: t,
      resolution: i
    } of e.missingTiles) {
      const e = this.pendingTiles.get(t.id);
      e ? (e.resolution = i, e.alive = !0) : this.createPendingTile(t, i);
    }
  }

  collectMissingTilesInfo() {
    let e = null;

    for (let t = this.tilesOfInterest.length - 1; t >= 0; t--) {
      const i = this.tilesOfInterest[t],
            s = this.store.process(i, (e, t) => this.verifyTileComplexity(e, t));
      (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isNone)(e) ? e = s : e.prepend(s);
    }

    return e;
  }

  deletePendingTiles() {
    for (const [, e] of this.pendingTiles) e.alive || this.deletePendingTile(e);
  }

  processPendingTiles() {
    const e = {
      fetchCount: (e, t) => this.fetchCount(e, t),
      fetchFeatures: (e, t, i) => this.fetchFeatures(e, t, i),
      finish: (e, t) => this.finishPendingTile(e, t),
      resume: () => this.processPendingTiles()
    };
    if (this.ensureFetchAllCounts(e)) for (const [, t] of this.pendingTiles) this.verifyTileComplexity(this.store.getFeatureCount(t.data), t.resolution) && this.updatingHandles.addPromise(t.process(e));
  }

  verifyTileComplexity(e, t) {
    return this.verifyVertexComplexity(e) && this.verifyFeatureDensity(e, t);
  }

  verifyVertexComplexity(e) {
    return e * this.minimumVerticesPerFeature < x;
  }

  verifyFeatureDensity(e, t) {
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isNone)(this.tileInfo)) return !1;
    const i = this.tileSize * t;
    return e * (j / (i * i)) < w;
  }

  ensureFetchAllCounts(e) {
    let t = !0;

    for (const [, i] of this.pendingTiles) i.state.type < 2 && this.updatingHandles.addPromise(i.process(e)), i.state.type <= 1 && (t = !1);

    return t;
  }

  finishPendingTile(e, t) {
    this.store.add(e.data, t), this.deletePendingTile(e), this.updateAvailability();
  }

  updateAvailability() {
    const e = this.collectMissingTilesInfo();
    this.setAvailability((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isNone)(e) ? 1 : e.coveredArea / e.fullArea);
  }

  setAvailability(e) {
    this._set("availability", e);
  }

  createPendingTile(e, t) {
    const i = new _PendingFeatureTile_js__WEBPACK_IMPORTED_MODULE_19__.PendingFeatureTile(e, t);
    return this.pendingTiles.set(e.id, i), i;
  }

  deletePendingTile(e) {
    e.reset(), this.pendingTiles.delete(e.data.id);
  }

  fetchCount(e, t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this3.store.fetchCount(e.data, _this3.url, _this3.createCountQuery(e), {
        query: _this3.customParameters,
        timeout: C,
        signal: t
      });
    })();
  }

  fetchFeatures(e, t, i) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let s,
          r = 0,
          o = 0,
          n = t;

      for (;;) {
        const a = _this4.createFeaturesQuery(e),
              u = _this4.setPagingParameters(a, r, n),
              {
          features: c,
          exceededTransferLimit: d
        } = yield _this4.queryFeatures(a, i);

        if (u && (r += (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.unwrap)(a.num)), o += c.length, s = s ? s.concat(c) : c, n = t - o, !u || !d || n <= 0) return s;
      }
    })();
  }

  filterProperties(e) {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isNone)(e) ? {
      where: "1=1",
      gdbVersion: void 0,
      timeExtent: void 0
    } : {
      where: e.where || "1=1",
      timeExtent: e.timeExtent,
      gdbVersion: e.gdbVersion
    };
  }

  lookupObjectIdByGlobalId(e) {
    const t = this.globalIdField,
          i = this.objectIdField;
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isNone)(t)) throw new Error("Expected globalIdField to be defined");
    let s = null;
    if (this.store.featureStore.forEach(r => {
      var o;
      e === r.attributes[t] && (s = null != (o = r.objectId) ? o : r.attributes[i]);
    }), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isNone)(s)) throw new Error(`Expected to find a feature with globalId ${e}`);
    return s;
  }

  queryFeaturesById(e, t) {
    const i = this.createFeaturesQuery(null);
    return i.objectIds = e, this.queryFeatures(i, t);
  }

  queryFeatures(e, t) {
    return this.capabilities.query.supportsFormatPBF ? this.queryFeaturesPBF(e, t) : this.queryFeaturesJSON(e, t);
  }

  queryFeaturesPBF(e, t) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        sourceSpatialReference: i
      } = _this5,
            {
        data: s
      } = yield (0,_rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_17__.executeQueryPBF)(_this5.url, e, new _rest_query_operations_pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_16__.OptimizedFeatureSetParserContext({
        sourceSpatialReference: i
      }), {
        query: _this5.configuration.customParameters,
        timeout: C,
        signal: t
      });
      return (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_15__.unquantizeOptimizedFeatureSet)(s);
    })();
  }

  queryFeaturesJSON(e, t) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        sourceSpatialReference: i
      } = _this6,
            {
        data: s
      } = yield (0,_rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_17__.executeQuery)(_this6.url, e, i, {
        query: _this6.configuration.customParameters,
        timeout: C,
        signal: t
      });
      return (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_15__.convertFromFeatureSet)(s, _this6.objectIdField);
    })();
  }

  createCountQuery(e) {
    const t = this.createBaseQuery(e);
    return this.capabilities.query.supportsCacheHint && (t.cacheHint = !0), t;
  }

  createFeaturesQuery(e) {
    const t = this.createBaseQuery(e);
    return t.outFields = this.globalIdField ? [this.globalIdField, this.objectIdField] : [this.objectIdField], t.returnGeometry = !0, (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(e) && (this.capabilities.query.supportsResultType ? t.resultType = "tile" : this.capabilities.query.supportsCacheHint && (t.cacheHint = !0)), t;
  }

  createBaseQuery(e) {
    const t = new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_18__.default({
      returnZ: !1,
      returnM: !1,
      geometry: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(this.tileInfo) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(e) ? (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_14__.toExtent)(e.data.extent, this.tileInfo.spatialReference) : void 0
    }),
          i = this.configuration.filter;
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.isSome)(i) && (t.where = i.where, t.gdbVersion = i.gdbVersion, t.timeExtent = i.timeExtent), t.outSpatialReference = this.spatialReference, t;
  }

  setPagingParameters(e, t, i) {
    if (!this.capabilities.query.supportsPagination) return !1;
    const {
      supportsMaxRecordCountFactor: s,
      supportsCacheHint: r,
      tileMaxRecordCount: o,
      maxRecordCount: n,
      supportsResultType: a
    } = this.capabilities.query,
          l = s ? _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_18__.default.MAX_MAX_RECORD_COUNT_FACTOR : 1,
          u = l * ((a || r) && o ? o : n || O);
    return e.start = t, s ? (e.maxRecordCountFactor = Math.min(l, Math.ceil(i / u)), e.num = Math.min(i, e.maxRecordCountFactor * u)) : e.num = Math.min(i, u), !0;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  constructOnly: !0
})], S.prototype, "url", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  constructOnly: !0
})], S.prototype, "objectIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  constructOnly: !0
})], S.prototype, "globalIdField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  constructOnly: !0
})], S.prototype, "capabilities", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  constructOnly: !0
})], S.prototype, "sourceSpatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  constructOnly: !0
})], S.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  constructOnly: !0
})], S.prototype, "store", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  readOnly: !0
})], S.prototype, "minimumVerticesPerFeature", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()], S.prototype, "filter", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()], S.prototype, "customParameters", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  readOnly: !0
})], S.prototype, "configuration", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()], S.prototype, "tileInfo", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()], S.prototype, "tileSize", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()], S.prototype, "tilesOfInterest", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  readOnly: !0
})], S.prototype, "updating", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  readOnly: !0
})], S.prototype, "availability", void 0), S = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__.subclass)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")], S);
const O = 2e3,
      C = 6e5,
      x = 1e6,
      j = 25,
      w = 1;


/***/ }),

/***/ 94191:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/PendingFeatureTile.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingFeatureTile": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/asyncUtils.js */ 97073);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingRect.js */ 7401);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





class u {
  constructor(t, e) {
    this.data = t, this.resolution = e, this.state = {
      type: 0
    }, this.alive = !0;
  }

  process(t) {
    switch (this.state.type) {
      case 0:
        return this.state = this.gotoFetchCount(this.state, t), this.state.task.promise.then(t.resume, t.resume);

      case 1:
      case 3:
        break;

      case 2:
        return this.state = this.gotoFetchFeatures(this.state, t), this.state.task.promise.then(t.resume, t.resume);

      case 4:
        this.state = this.goToDone(this.state, t);
    }

    return null;
  }

  get debugInfo() {
    return {
      data: this.data,
      featureCount: this.featureCount,
      state: this.stateToString
    };
  }

  get featureCount() {
    switch (this.state.type) {
      case 0:
      case 1:
        return 0;

      case 2:
        return this.state.featureCount;

      case 3:
        return this.state.previous.featureCount;

      case 4:
        return this.state.features.length;

      case 5:
        return this.state.previous.features.length;
    }
  }

  get stateToString() {
    switch (this.state.type) {
      case 0:
        return "created";

      case 1:
        return "fetch-count";

      case 2:
        return "fetched-count";

      case 3:
        return "fetch-features";

      case 4:
        return "fetched-features";

      case 5:
        return "done";
    }
  }

  gotoFetchCount(e, a) {
    var _this = this;

    return {
      type: 1,
      previous: e,
      task: (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.createTask)( /*#__PURE__*/function () {
        var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
          const s = yield (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__.resultOrAbort)(a.fetchCount(_this, e));
          1 === _this.state.type && (_this.state = _this.gotoFetchedCount(_this.state, s.ok ? s.value : 1 / 0));
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }())
    };
  }

  gotoFetchedCount(t, e) {
    return {
      type: 2,
      featureCount: e,
      previous: t
    };
  }

  gotoFetchFeatures(e, a) {
    var _this2 = this;

    return {
      type: 3,
      previous: e,
      task: (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.createTask)( /*#__PURE__*/function () {
        var _ref2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (s) {
          const r = yield (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__.resultOrAbort)(a.fetchFeatures(_this2, e.featureCount, s));
          3 === _this2.state.type && (_this2.state = _this2.gotoFetchedFeatures(_this2.state, r.ok ? r.value : []));
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }())
    };
  }

  gotoFetchedFeatures(t, e) {
    return {
      type: 4,
      previous: t,
      features: e
    };
  }

  goToDone(t, e) {
    return e.finish(this, t.features), {
      type: 5,
      previous: t
    };
  }

  reset() {
    const t = this.state;

    switch (this.state = {
      type: 0
    }, t.type) {
      case 0:
      case 2:
      case 4:
      case 5:
        break;

      case 1:
      case 3:
        t.task.abort();
    }
  }

  intersects(t) {
    return !(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(t) && this.data.extent) || ((0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__.fromExtent)(t, i), (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__.intersects)(this.data.extent, i));
  }

}

const i = (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__.create)();


/***/ })

}]);
//# sourceMappingURL=351.399a572607c850a20027.js.map