"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[4610],{

/***/ 49735:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/WorkerHandle.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerHandle": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../arrayUtils.js */ 45072);
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handleUtils.js */ 53985);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logger.js */ 22345);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../maybe.js */ 18502);
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../promiseUtils.js */ 7808);
/* harmony import */ var _workers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workers.js */ 74775);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri.core.workers.WorkerHandle");class n{constructor(e,t,r,s={}){this._mainMethod=t,this._listeners=[],this._promise=(0,_workers_js__WEBPACK_IMPORTED_MODULE_5__.open)(e,{...s,schedule:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>h.error(`Failed to initialize ${e} worker: ${t}`)))}on(r,i){const o={removed:!1,eventName:r,callback:i,threadHandle:null};return this._listeners.push(o),this._connectListener(o),(0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__.makeHandle)((()=>{o.removed=!0,(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.remove)(this._listeners,o),this._thread&&(0,_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(o.threadHandle)&&o.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const s=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:s,signal:r})}return this._promise?this._promise.then((()=>((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}


/***/ }),

/***/ 44610:
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/ElevationLayer.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/urlUtils.js */ 30164);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry/HeightModelInfo.js */ 2701);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/ArcGISCachedService.js */ 90363);
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ 41122);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_LercDecoder_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/LercDecoder.js */ 47019);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






















const w = _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__.default.getLogger("esri.layers.ElevationLayer");
let T = class extends (0,_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_17__.ArcGISCachedService)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_18__.ArcGISService)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_19__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_20__.PortalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_16__.default))))) {
  constructor(...e) {
    super(...e), this.copyright = null, this.heightModelInfo = null, this.path = null, this.opacity = 1, this.operationalLayerType = "ArcGISTiledElevationServiceLayer", this.sourceJSON = null, this.type = "elevation", this.url = null, this.version = null, this._lercDecoder = (0,_support_LercDecoder_js__WEBPACK_IMPORTED_MODULE_22__.acquireDecoder)();
  }

  normalizeCtorArgs(e, r) {
    return "string" == typeof e ? {
      url: e,
      ...r
    } : e;
  }

  destroy() {
    this._lercDecoder = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.releaseMaybe)(this._lercDecoder);
  }

  set minScale(e) {
    this.constructed && w.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`);
  }

  get minScale() {}

  set maxScale(e) {
    this.constructed && w.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`);
  }

  get maxScale() {}

  readVersion(e, r) {
    let t = r.currentVersion;
    return t || (t = 9.3), t;
  }

  load(e) {
    const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e) ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({
      supportedTypes: ["Image Service"],
      supportsData: !1,
      validateItem: e => {
        for (let r = 0; r < e.typeKeywords.length; r++) if ("elevation 3d layer" === e.typeKeywords[r].toLowerCase()) return !0;

        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}' ", {
          type: "Image Service",
          expectedType: "Image Service Elevation 3D Layer"
        });
      }
    }, e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAbortError).then(() => this._fetchImageService(r))), Promise.resolve(this);
  }

  fetchTile(e, t, o, i) {
    const a = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)((i = i || {
      signal: null
    }).signal) ? i.signal : i.signal = new AbortController().signal,
          l = {
      responseType: "array-buffer",
      signal: a
    },
          n = {
      noDataValue: i.noDataValue,
      returnFileInfo: !0
    };
    return this.load().then(() => this._fetchTileAvailability(e, t, o, i)).then(() => (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(this.getTileUrl(e, t, o), l)).then(e => this._lercDecoder.decode(e.data, n, a)).then(e => ({
      values: e.pixelData,
      width: e.width,
      height: e.height,
      maxZError: e.fileInfo.maxZError,
      noDataValue: e.noDataValue,
      minValue: e.minValue,
      maxValue: e.maxValue
    }));
  }

  getTileUrl(e, r, t) {
    const o = !this.tilemapCache && this.supportsBlankTile,
          i = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__.objectToQuery)({ ...this.parsedUrl.query,
      blankTile: !o && null
    });
    return `${this.parsedUrl.path}/tile/${e}/${r}/${t}${i ? "?" + i : ""}`;
  }

  queryElevation(e, r) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        ElevationQuery: t
      } = yield __webpack_require__.e(/*! import() */ 1262).then(__webpack_require__.bind(__webpack_require__, /*! ./support/ElevationQuery.js */ 21262));
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(r);
      return new t().query(_this, e, r);
    })();
  }

  createElevationSampler(e, r) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        ElevationQuery: t
      } = yield __webpack_require__.e(/*! import() */ 1262).then(__webpack_require__.bind(__webpack_require__, /*! ./support/ElevationQuery.js */ 21262));
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(r);
      return new t().createSampler(_this2, e, r);
    })();
  }

  _fetchTileAvailability(e, r, t, o) {
    return this.tilemapCache ? this.tilemapCache.fetchAvailability(e, r, t, o) : Promise.resolve("unknown");
  }

  _fetchImageService(e) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this3.sourceJSON) return _this3.sourceJSON;
      const t = {
        query: {
          f: "json",
          ..._this3.parsedUrl.query
        },
        responseType: "json",
        signal: e
      },
            o = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(_this3.parsedUrl.path, t);
      o.ssl && (_this3.url = _this3.url.replace(/^http:/i, "https:")), _this3.sourceJSON = o.data, _this3.read(o.data, {
        origin: "service",
        url: _this3.parsedUrl
      });
    })();
  }

  get hasOverriddenFetchTile() {
    return !this.fetchTile.__isDefault__;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  json: {
    read: {
      source: "copyrightText"
    }
  }
})], T.prototype, "copyright", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  readOnly: !0,
  type: _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_15__.default
})], T.prototype, "heightModelInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  type: String,
  json: {
    origins: {
      "web-scene": {
        read: !0,
        write: !0
      }
    },
    read: !1
  }
})], T.prototype, "path", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  type: ["show", "hide"]
})], T.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  json: {
    read: !1,
    write: !1,
    origins: {
      service: {
        read: !1,
        write: !1
      },
      "portal-item": {
        read: !1,
        write: !1
      },
      "web-document": {
        read: !1,
        write: !1
      }
    }
  }
})], T.prototype, "minScale", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  json: {
    read: !1,
    write: !1,
    origins: {
      service: {
        read: !1,
        write: !1
      },
      "portal-item": {
        read: !1,
        write: !1
      },
      "web-document": {
        read: !1,
        write: !1
      }
    }
  }
})], T.prototype, "maxScale", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  json: {
    read: !1,
    write: !1,
    origins: {
      "web-document": {
        read: !1,
        write: !1
      }
    }
  }
})], T.prototype, "opacity", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  type: ["ArcGISTiledElevationServiceLayer"]
})], T.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()], T.prototype, "sourceJSON", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  json: {
    read: !1
  },
  value: "elevation",
  readOnly: !0
})], T.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_21__.url)], T.prototype, "url", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()], T.prototype, "version", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__.reader)("version", ["currentVersion"])], T.prototype, "readVersion", null), T = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__.subclass)("esri.layers.ElevationLayer")], T), T.prototype.fetchTile.__isDefault__ = !0;
const x = T;


/***/ }),

/***/ 47019:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/LercDecoder.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "acquireDecoder": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/workers/WorkerHandle.js */ 49735);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s extends _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_1__.WorkerHandle{constructor(e=null){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)}getTransferList(e){return[e.buffer]}release(){--this.ref<=0&&(o.forEach(((e,r)=>{e===this&&o.delete(r)})),this.destroy())}}const o=new Map;function n(t=null){let n=o.get((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.unwrap)(t));return n||((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(t)?(n=new s((e=>t.schedule(e))),o.set(t,n)):(n=new s,o.set(null,n))),++n.ref,n}


/***/ })

}]);
//# sourceMappingURL=4610.bec1e571fd913f7e8293.js.map