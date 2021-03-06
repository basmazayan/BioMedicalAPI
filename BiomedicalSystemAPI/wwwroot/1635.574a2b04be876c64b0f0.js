"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1635],{

/***/ 84040:
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/Tilemap.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tilemap": () => (/* binding */ l),
/* harmony export */   "default": () => (/* binding */ l),
/* harmony export */   "tilemapDefinitionId": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class l{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(t,i){if("unknown"!==this._allAvailability)return this._allAvailability;const e=(t-this.location.top)*this.location.width+(i-this.location.left),a=e%8,l=e>>3,o=this._tileAvailabilityBitSet;return l<0||l>o.length?"unknown":o[l]&1<<a?"available":"unavailable"}_updateFromData(t){const i=this.location.width,e=this.location.height;let a=!0,l=!0;const o=Math.ceil(i*e/8),n=new Uint8Array(o);let r=0;for(let s=0;s<t.length;s++){const i=s%8;t[s]?(l=!1,n[r]|=1<<i):a=!1,7===i&&++r}l?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)}static fromDefinition(a,o){const r=a.service.request||_request_js__WEBPACK_IMPORTED_MODULE_0__.default,{row:s,col:h,width:c,height:m}=a,d={query:{f:"json"}};return o=o?{...d,...o}:d,r(n(a),o).then((t=>t.data)).catch((t=>{if(t&&t.details&&422===t.details.httpStatus)return{location:{top:s,left:h,width:c,height:m},valid:!0,data:(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__.constant)(c*m,0)};throw t})).then((t=>{if(t.location&&(t.location.top!==s||t.location.left!==h||t.location.width!==c||t.location.height!==m))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:s,left:h,width:c,height:m}});return l.fromJSON(t)}))}static fromJSON(t){l.validateJSON(t);const i=new l;return i.location=Object.freeze((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(t.location)),i._updateFromData(t.data),Object.freeze(i)}static validateJSON(t){if(!t||!t.location)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("tilemap:missing-location","Location missing from tilemap response");if(!1===t.valid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function o(t){return`${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}function n(t){let i;if("vector-tile"===t.service.type)i=`${t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;else{const e=t.service.tileServers;i=`${e&&e.length?e[t.row%e.length]:t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}const e=t.service.query;return e&&(i=`${i}?${e}`),i}


/***/ }),

/***/ 55261:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/TilemapCache.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TilemapCache": () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ 30351);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Accessor.js */ 98240);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/LRUCache.js */ 72468);
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/PooledArray.js */ 48017);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/scheduling.js */ 54391);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/urlUtils.js */ 30164);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/watchUtils.js */ 11652);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ 43465);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Tilemap.js */ 84040);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


















var g;
const w = _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__.default.getLogger("esri.layers.support.TilemapCache");
let T = g = class extends (0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_5__.HandleOwnerMixin)(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__.default) {
  constructor(e) {
    super(e), this._pendingTilemapRequests = {}, this._availableLevels = {}, this.levels = 5, this.cacheByteSize = 2097152, this.request = _request_js__WEBPACK_IMPORTED_MODULE_2__.default, this._prefetchingEnabled = !0;
  }

  initialize() {
    this._tilemapCache = new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_7__.default(this.cacheByteSize), this.handles.add([this.watch(["layer.parsedUrl", "layer.tileServers?", "layer.apiKey?", "layer.customParameters?"], () => this._initializeTilemapDefinition()), (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_12__.init)(this, "layer.tileInfo.lods", e => this._initializeAvailableLevels(e), !0)]), this._initializeTilemapDefinition();
  }

  castLevels(e) {
    return e <= 2 ? (w.error("Minimum levels for Tilemap is 3, but got ", e), 3) : e;
  }

  get size() {
    return 1 << this.levels;
  }

  fetchTilemap(e, t, i, l) {
    if (!this._availableLevels[e]) return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("tilemap-cache:level-unavailable", `Level ${e} is unavailable in the service`));

    const s = this._tmpTilemapDefinition,
          a = this._tilemapFromCache(e, t, i, s);

    if (a) return Promise.resolve(a);
    const o = l && l.signal;
    return l = { ...l,
      signal: null
    }, new Promise((e, t) => {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.onAbort)(o, () => t((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.createAbortError)()));
      const i = (0,_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__.tilemapDefinitionId)(s);
      let r = this._pendingTilemapRequests[i];

      if (!r) {
        r = _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__.Tilemap.fromDefinition(s, l).then(e => (this._tilemapCache.put(i, e, e.byteSize), e));

        const e = () => delete this._pendingTilemapRequests[i];

        this._pendingTilemapRequests[i] = r, r.then(e, e);
      }

      r.then(e, t);
    });
  }

  getAvailability(e, t, i) {
    if (!this._availableLevels[e]) return "unavailable";

    const r = this._tilemapFromCache(e, t, i, this._tmpTilemapDefinition);

    return r ? r.getAvailability(t, i) : "unknown";
  }

  fetchAvailability(e, t, i, l) {
    return this._availableLevels[e] ? this.fetchTilemap(e, t, i, l).catch(e => e).then(l => {
      if (l instanceof _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__.Tilemap) {
        const s = l.getAvailability(t, i);
        return "unavailable" === s ? Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("tile-map:tile-unavailable", "Tile is not available", {
          level: e,
          row: t,
          col: i
        })) : s;
      }

      if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.isAbortError)(l)) throw l;
      return "unknown";
    }) : Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("tilemap-cache:level-unavailable", `Level ${e} is unavailable in the service`));
  }

  fetchAvailabilityUpsample(e, t, i, r, l) {
    r.level = e, r.row = t, r.col = i;
    const s = this.layer.tileInfo;
    s.updateTileInfo(r);
    const a = this.fetchAvailability(e, t, i, l).catch(e => {
      if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.isAbortError)(e)) throw e;
      if (s.upsampleTile(r)) return this.fetchAvailabilityUpsample(r.level, r.row, r.col, r);
      throw e;
    });
    return this._fetchAvailabilityUpsamplePrefetch(r.id, e, t, i, l, a), a;
  }

  _fetchAvailabilityUpsamplePrefetch(e, t, i, r, l, s) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this._prefetchingEnabled) return;
      const a = `prefetch-${e}`;
      if (_this.handles.has(a)) return;
      const o = new AbortController();
      s.then(() => o.abort(), () => o.abort());
      let n = !1;
      const c = {
        remove() {
          n || (n = !0, o.abort());
        }

      };
      if (_this.handles.add(c, a), yield (0,_core_scheduling_js__WEBPACK_IMPORTED_MODULE_10__.waitTicks)(10, o.signal).catch(() => {}), n || (n = !0, _this.handles.remove(a)), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.isAborted)(o)) return;
      const p = {
        id: e,
        level: t,
        row: i,
        col: r
      },
            u = { ...l,
        signal: o.signal
      },
            f = _this.layer.tileInfo;

      for (let h = 0; g._prefetches.length < g._maxPrefetch && f.upsampleTile(p); ++h) {
        const e = _this.fetchAvailability(p.level, p.row, p.col, u);

        g._prefetches.push(e);

        const t = () => {
          g._prefetches.removeUnordered(e);
        };

        e.then(t, t);
      }
    })();
  }

  _initializeTilemapDefinition() {
    var e;
    if (!this.layer.parsedUrl) return;
    const {
      parsedUrl: t,
      apiKey: i,
      customParameters: r
    } = this.layer;
    this._tilemapCache.clear(), this._tmpTilemapDefinition = {
      service: {
        url: t.path,
        query: (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__.objectToQuery)({ ...t.query,
          ...r,
          token: null != i ? i : null == (e = t.query) ? void 0 : e.token
        }),
        tileServers: this.layer.tileServers,
        request: this.request,
        type: this.layer.type
      },
      width: this.size,
      height: this.size,
      level: 0,
      row: 0,
      col: 0
    };
  }

  _tilemapFromCache(e, t, i, r) {
    r.level = e, r.row = t - t % this.size, r.col = i - i % this.size;
    const l = (0,_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__.tilemapDefinitionId)(r);
    return this._tilemapCache.get(l);
  }

  _initializeAvailableLevels(e) {
    this._availableLevels = {}, e && e.forEach(e => this._availableLevels[e.level] = !0);
  }

  get test() {
    const e = this;
    return {
      get prefetchingEnabled() {
        return e._prefetchingEnabled;
      },

      set prefetchingEnabled(t) {
        e._prefetchingEnabled = t;
      },

      hasTilemap: (t, i, r) => !!e._tilemapFromCache(t, i, r, e._tmpTilemapDefinition)
    };
  }

};
T._maxPrefetch = 4, T._prefetches = new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_8__.default({
  initialSize: g._maxPrefetch
}), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__.property)({
  constructOnly: !0,
  type: Number
})], T.prototype, "levels", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_16__.cast)("levels")], T.prototype, "castLevels", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__.property)({
  readOnly: !0,
  type: Number
})], T.prototype, "size", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__.property)({
  constructOnly: !0,
  type: Number
})], T.prototype, "cacheByteSize", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__.property)({
  constructOnly: !0
})], T.prototype, "layer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__.property)({
  constructOnly: !0
})], T.prototype, "request", void 0), T = g = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_17__.subclass)("esri.layers.support.TilemapCache")], T);


/***/ }),

/***/ 57275:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/serviceTileInfoProperty.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "readServiceTileInfo": () => (/* binding */ n),
/* harmony export */   "serviceTileInfoProperty": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TileInfo.js */ 87940);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r={type:_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__.default,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:n}}}}};function n(r,n,l,o){if(!r)return null;const{minScale:i,maxScale:t,minLOD:m,maxLOD:s}=n;if(null!=m&&null!=s)return o&&o.ignoreMinMaxLOD?_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__.default.fromJSON(r):_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__.default.fromJSON({...r,lods:r.lods.filter((({level:e})=>null!=e&&e>=m&&e<=s))});if(0!==i&&0!==t){const n=e=>Math.round(1e4*e)/1e4,l=i?n(i):1/0,o=t?n(t):-1/0;return _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__.default.fromJSON({...r,lods:r.lods.filter((e=>{const r=n(e.scale);return r<=l&&r>=o}))})}return _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__.default.fromJSON(r)}


/***/ })

}]);
//# sourceMappingURL=1635.574a2b04be876c64b0f0.js.map