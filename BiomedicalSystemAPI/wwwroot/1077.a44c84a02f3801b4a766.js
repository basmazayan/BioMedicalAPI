"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1077],{

/***/ 71369:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/DisplayId.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AGGREGATE_VALID_FILTERS_MASK": () => (/* binding */ r),
/* harmony export */   "DISPLAY_ID_TEXEL_MASK": () => (/* binding */ n),
/* harmony export */   "DISPLAY_ID_TYPE_AGGREGATE": () => (/* binding */ c),
/* harmony export */   "DISPLAY_ID_TYPE_FEATURE": () => (/* binding */ u),
/* harmony export */   "DISPLAY_ID_TYPE_MASK": () => (/* binding */ t),
/* harmony export */   "NONAGGREGATE_VALID_FILTERS_MASK": () => (/* binding */ o),
/* harmony export */   "createDisplayId": () => (/* binding */ s),
/* harmony export */   "getDisplayIdFilterMask": () => (/* binding */ i),
/* harmony export */   "getDisplayIdTexel": () => (/* binding */ f),
/* harmony export */   "getDisplayIdType": () => (/* binding */ e),
/* harmony export */   "isAggregateId": () => (/* binding */ p)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=8388607,t=8388608,r=254,o=255,u=0,c=1,e=n=>(n&t)>>>23,f=t=>t&n,i=n=>e(n)===c?r:o;function p(n){return e(n)===c}function s(n,r){return((r?t:0)|n)>>>0}


/***/ }),

/***/ 40715:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/debug.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEBUG_ATTR_UPDATES": () => (/* binding */ l),
/* harmony export */   "createDebugLogger": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=(n,l)=>n&&((...n)=>l.warn("DEBUG:",...n))||(()=>null),l=!1;


/***/ }),

/***/ 92216:
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/visualVariablesUtils.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTypeOfSizeVisualVariable": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums.js */ 31620);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils.js */ 25840);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.default.getLogger("esri.views.2d.engine.webgl");function o(s){return (0,_Utils_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(s.minDataValue)&&(0,_Utils_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(s.maxDataValue)&&null!=s.minSize&&null!=s.maxSize?_enums_js__WEBPACK_IMPORTED_MODULE_2__.WGLVVFlag.SIZE_MINMAX_VALUE:(s.expression&&"view.scale"===s.expression||s.valueExpression&&"$view.scale"===s.valueExpression)&&Array.isArray(s.stops)?_enums_js__WEBPACK_IMPORTED_MODULE_2__.WGLVVFlag.SIZE_SCALE_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&(Array.isArray(s.stops)||"levels"in s&&s.levels)?_enums_js__WEBPACK_IMPORTED_MODULE_2__.WGLVVFlag.SIZE_FIELD_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&null!=s.valueUnit?_enums_js__WEBPACK_IMPORTED_MODULE_2__.WGLVVFlag.SIZE_UNIT_VALUE:(l.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("mapview-bad-type","Found invalid size VisualVariable",s)),_enums_js__WEBPACK_IMPORTED_MODULE_2__.WGLVVFlag.NONE)}


/***/ }),

/***/ 28603:
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/AttributeStore.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ 61414);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ 88415);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/accessorSupport/diffUtils.js */ 58616);
/* harmony import */ var _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../layers/support/FieldsIndex.js */ 62419);
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../engine/webgl/definitions.js */ 30603);
/* harmony import */ var _engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../engine/webgl/DisplayId.js */ 71369);
/* harmony import */ var _engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../engine/webgl/Utils.js */ 25840);
/* harmony import */ var _engine_webgl_util_debug_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../engine/webgl/util/debug.js */ 40715);
/* harmony import */ var _tileRenderers_support_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tileRenderers/support/visualVariablesUtils.js */ 11706);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/













const E = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__.default.getLogger("esri.views.layers.2d.features.support.AttributeStore"),
      F = (0,_engine_webgl_util_debug_js__WEBPACK_IMPORTED_MODULE_12__.createDebugLogger)(_engine_webgl_util_debug_js__WEBPACK_IMPORTED_MODULE_12__.DEBUG_ATTR_UPDATES, E),
      U = {
  sharedArrayBuffer: (0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__.default)("esri-shared-array-buffer"),
  atomics: (0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__.default)("esri-atomics")
};

function C(t, e) {
  return i => e(t(i));
}

class R {
  constructor(t, e, i, s) {
    this.size = 0, this.texelSize = 4;
    const {
      pixelType: r,
      layout: a,
      textureOnly: o
    } = s;
    this.textureOnly = o || !1, this.pixelType = r, this._ctype = e, this.layout = a, this._resetRange(), this._shared = t, this.size = i, o || (this.data = this._initData(r, i, t, e));
  }

  get buffer() {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.andThen)(this.data, t => t.buffer);
  }

  unsetComponentAllTexels(t, e) {
    const i = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.unwrap)(this.data);

    for (let s = 0; s < this.size * this.size; s++) i[s * this.texelSize + t] &= ~e;

    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }

  setComponentAllTexels(t, e) {
    const i = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.unwrap)(this.data);

    for (let s = 0; s < this.size * this.size; s++) i[s * this.texelSize + t] |= 255 & e;

    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }

  setComponent(t, e, i) {
    const s = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.unwrap)(this.data);

    for (const r of i) s[r * this.texelSize + t] |= e, this.dirtyStart = Math.min(this.dirtyStart, r), this.dirtyEnd = Math.max(this.dirtyEnd, r);
  }

  setComponentTexel(t, e, i) {
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.unwrap)(this.data)[i * this.texelSize + t] |= e, this.dirtyStart = Math.min(this.dirtyStart, i), this.dirtyEnd = Math.max(this.dirtyEnd, i);
  }

  unsetComponentTexel(t, e, i) {
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.unwrap)(this.data)[i * this.texelSize + t] &= ~e, this.dirtyStart = Math.min(this.dirtyStart, i), this.dirtyEnd = Math.max(this.dirtyEnd, i);
  }

  getData(t, e) {
    const i = (0,_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_10__.getDisplayIdTexel)(t);
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.unwrap)(this.data)[i * this.texelSize + e];
  }

  setData(t, e, i) {
    const s = (0,_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_10__.getDisplayIdTexel)(t),
          r = 1 << e;
    0 != (this.layout & r) ? (this.data[s * this.texelSize + e] = i, this.dirtyStart = Math.min(this.dirtyStart, s), this.dirtyEnd = Math.max(this.dirtyEnd, s)) : E.error("mapview-attributes-store", "Tried to set a value for a texel's readonly component");
  }

  lock() {
    5121 === this.pixelType && this._shared && U.atomics && "local" !== this._ctype && Atomics.store(this.data, 0, 1);
  }

  unlock() {
    5121 === this.pixelType && this._shared && U.atomics && "local" !== this._ctype && Atomics.store(this.data, 0, 0);
  }

  expand(t) {
    if (this.size = t, !this.textureOnly) {
      const e = this._initData(this.pixelType, t, this._shared, this._ctype),
            i = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.unwrap)(this.data);

      e.set(i), this.data = e;
    }
  }

  toMessage() {
    const t = this.dirtyStart,
          e = this.dirtyEnd,
          i = this.texelSize;
    if (t > e) return null;

    this._resetRange();

    const s = !(this._shared || "local" === this._ctype),
          r = this.pixelType,
          a = this.layout,
          o = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.unwrap)(this.data);
    return {
      start: t,
      end: e,
      data: s && o.slice(t * i, (e + 1) * i) || null,
      pixelType: r,
      layout: a
    };
  }

  _initData(t, e, i, s) {
    const r = i && "local" !== s ? SharedArrayBuffer : ArrayBuffer,
          a = (0,_engine_webgl_Utils_js__WEBPACK_IMPORTED_MODULE_11__.getPixelArrayCtor)(t),
          o = new a(new r(e * e * 4 * a.BYTES_PER_ELEMENT));

    for (let n = 0; n < o.length; n += 4) o[n + 1] = 255;

    return o;
  }

  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }

}

class M {
  constructor(t, e) {
    this._client = t, this.config = e, this._attributeComputeMap = new Map(), this._blocks = new Array(), this._filters = new Array(_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_9__.MAX_FILTERS), this._targetType = 0, this._abortController = new AbortController(), this._hasScaleExpr = !1, this._size = 32, this._idsToHighlight = new Set();
    const i = e.supportsTextureFloat ? 5126 : 5121;
    F(`Creating AttributeStore ${U.sharedArrayBuffer ? "with" : "without"} shared memory`), this._blockDescriptors = [{
      pixelType: 5121,
      layout: 1
    }, {
      pixelType: 5121,
      layout: 15,
      textureOnly: !0
    }, {
      pixelType: i,
      layout: 15
    }, {
      pixelType: i,
      layout: 15
    }], this._blocks = this._blockDescriptors.map(() => null);
  }

  destroy() {
    this._abortController.abort();
  }

  get hasScaleExpr() {
    return this._hasScaleExpr;
  }

  get _signal() {
    return this._abortController.signal;
  }

  update(t, i) {
    this.config = i;
    const s = i.schema.processors[0].storage,
          o = (0,_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_7__.diff)(this._schema, s);

    if ((t.targets.feature || t.targets.aggregate) && (t.storage.data = !0), o && ((0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__.default)("esri-2d-update-debug") && console.debug("Applying Update - AttributeStore:", o), t.storage.data = !0, this._schema = s, this._attributeComputeMap.clear(), !(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(s))) {
      switch (s.target) {
        case "feature":
          this._targetType = _engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_10__.DISPLAY_ID_TYPE_FEATURE;
          break;

        case "aggregate":
          this._targetType = _engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_10__.DISPLAY_ID_TYPE_AGGREGATE;
      }

      if ("subtype" === s.type) for (const t in s.mapping) {
        const e = s.mapping[t];
        if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e)) for (const t of e.mapping) this._bindAttribute(t);
      } else for (const t of s.mapping) this._bindAttribute(t);
    }
  }

  onTileData(t, e) {
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(e.addOrUpdate)) return;
    const i = e.addOrUpdate.getCursor();

    for (; i.next();) {
      const t = i.getDisplayId();
      this.setAttributeData(t, i);
    }
  }

  invalidateResources() {
    this._createResourcesPromise = null, this._abortController.abort(), this._abortController = new AbortController();
  }

  setHighlight(t, e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = 1,
            s = _this._getBlock(0),
            r = e.map(t => (0,_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_10__.getDisplayIdTexel)(t));

      s.lock(), s.unsetComponentAllTexels(0, i), s.setComponent(0, i, r), s.unlock(), _this._idsToHighlight.clear();

      for (const a of t) _this._idsToHighlight.add(a);

      yield _this.sendUpdates();
    })();
  }

  updateFilters(t, i) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        config: s,
        service: r,
        spatialReference: a
      } = i,
            {
        filters: o
      } = s,
            n = o.map((t, e) => _this2._updateFilter(t, e, r, a));
      (yield Promise.all(n)).some(t => t) && (t.storage.filters = !0, (0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__.default)("esri-2d-update-debug") && console.debug("Applying Update - AttributeStore:", "Filters changed"));
    })();
  }

  setData(t, e, i, s) {
    const r = (0,_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_10__.getDisplayIdTexel)(t);
    this._ensureSizeForTexel(r), this._getBlock(e).setData(t, i, s);
  }

  getData(t, e, i) {
    return this._getBlock(e).getData(t, i);
  }

  getHighlightFlag(t) {
    return this._idsToHighlight.has(t) ? _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_9__.HIGHLIGHT_FLAG : 0;
  }

  unsetAttributeData(t) {
    const e = (0,_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_10__.getDisplayIdTexel)(t);

    this._getBlock(0).setData(e, 0, 0);
  }

  setAttributeData(t, e) {
    const i = (0,_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_10__.getDisplayIdTexel)(t);
    if (this._ensureSizeForTexel(i), this._getBlock(0).setData(i, 0, this.getFilterFlags(e)), this._targetType !== (0,_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_10__.getDisplayIdType)(t)) return;
    const r = this._attributeComputeMap,
          a = this.config.supportsTextureFloat ? 1 : 2,
          o = 4;
    r.size && r.forEach((t, r) => {
      const n = r * a % o,
            l = Math.floor(r * a / o),
            h = this._getBlock(l + _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_9__.ATTRIBUTE_DATA_VV),
            c = t(e);

      if (this.config.supportsTextureFloat) h.setData(i, n, c);else if (c === _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_9__.NAN_MAGIC_NUMBER) h.setData(i, n, 255), h.setData(i, n + 1, 255);else {
        const t = (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__.clamp)(Math.round(c), -32767, 32766) + 32768,
              e = 255 & t,
              r = (65280 & t) >> 8;
        h.setData(i, n, e), h.setData(i, n + 1, r);
      }
    });
  }

  sendUpdates() {
    if (this._nextUpdate) return this._nextUpdate.promise;
    if (this._currUpdate) return this._nextUpdate = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.createResolver)(), this._nextUpdate.promise;
    const e = {
      blocks: this._blocks.map(t => (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(t) ? t.toMessage() : null)
    };
    return this._currUpdate = this._createResources().then(() => {
      const t = () => {
        if (this._currUpdate = null, this._nextUpdate) {
          const t = this._nextUpdate;
          this._nextUpdate = null, this.sendUpdates().then(() => t.resolve());
        }
      },
            i = this._client.update(e, this._signal).then(t).catch(t);

      return this._client.render(this._signal), i;
    }).catch(e => (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.isAbortError)(e) ? (this._createResourcesPromise = null, this._createResources()) : (E.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("mapview-attribute-store", "Encountered an error during client update", e)), Promise.resolve())), this._currUpdate;
  }

  _ensureSizeForTexel(t) {
    for (; t >= this._size * this._size;) if (this._expand()) return;
  }

  _bindAttribute(t) {
    function e() {
      return t.normalizationField ? e => {
        const i = e.readAttribute(t.normalizationField);
        if (!i) return null;
        return e.readAttribute(t.field) / i;
      } : e => e.readAttribute(t.field);
    }

    function i() {
      return t.normalizationField && E.warn("mapview-arcade", "Ignoring normalizationField specified with an arcade expression which is not supported."), e => e.getComputedNumericAtIndex(t.fieldIndex);
    }

    let s;
    if (null != t.fieldIndex) s = i();else {
      if (!t.field) return;
      s = e();
    }

    if (t.valueRepresentation) {
      s = C(s, e => (0,_tileRenderers_support_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_13__.getVisualVariableSizeValueRepresentationRatio)(e, t.valueRepresentation));
    }

    const r = t => null === t || isNaN(t) || t === 1 / 0 ? _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_9__.NAN_MAGIC_NUMBER : t;

    this._attributeComputeMap.set(t.binding, C(s, r));
  }

  _createResources() {
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(this._createResourcesPromise)) return this._createResourcesPromise;
    this._getBlock(_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_9__.ATTRIBUTE_DATA_ANIMATION), F("Initializing AttributeStore");

    const e = {
      shared: U.sharedArrayBuffer && !("local" === this._client.type),
      size: this._size,
      blocks: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.mapMany)(this._blocks, t => ({
        textureOnly: t.textureOnly,
        buffer: t.buffer,
        pixelType: t.pixelType
      }))
    },
          i = this._client.initialize(e, this._signal).catch(e => {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.isAbortError)(e) ? this._createResourcesPromise = null : E.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("mapview-attribute-store", "Encountered an error during client initialization", e));
    });

    return this._createResourcesPromise = i, i.then(() => (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(this._createResourcesPromise) ? this._createResources() : void 0), i;
  }

  _getBlock(t) {
    const e = this._blocks[t];
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e)) return e;
    F(`Initializing AttributeBlock at index ${t}`);
    const i = U.sharedArrayBuffer,
          s = this._client.type,
          r = new R(i, s, this._size, this._blockDescriptors[t]);
    return this._blocks[t] = r, this._createResourcesPromise = null, r;
  }

  _expand() {
    if (this._size < this.config.maxTextureSize) {
      const t = this._size <<= 1;
      return F("Expanding block size to", t, this._blocks), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.forEachSome)(this._blocks, e => e.expand(t)), this._createResourcesPromise = null, this._size = t, 0;
    }

    return E.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("mapview-limitations", "Maximum number of onscreen features exceeded.")), -1;
  }

  _updateFilter(t, e, i, s) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const o = _this3._filters[e],
            n = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(o) && o.hash;
      if (!o && !t) return !1;
      if (n === JSON.stringify(t)) return !1;

      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(t)) {
        if (!o) return !1;

        const t = 1 << e + 1,
              i = _this3._getBlock(0);

        return _this3._filters[e] = null, i.setComponentAllTexels(0, t), _this3.sendUpdates(), !0;
      }

      const l = yield _this3._getFilter(e, i);
      return yield l.update(t, s), !0;
    })();
  }

  _getFilter(t, e) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = _this4._filters[t];
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(i)) return i;
      const {
        default: s
      } = yield Promise.all(/*! import() */[__webpack_require__.e(5619), __webpack_require__.e(7906), __webpack_require__.e(2992)]).then(__webpack_require__.bind(__webpack_require__, /*! ./FeatureFilter.js */ 92992)),
            r = new s({
        geometryType: e.geometryType,
        hasM: !1,
        hasZ: !1,
        timeInfo: e.timeInfo,
        fieldsIndex: new _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_8__.default(e.fields)
      });
      return _this4._filters[t] = r, r;
    })();
  }

  isVisible(t) {
    return !!(2 & this._getBlock(0).getData(t, 0));
  }

  getFilterFlags(t) {
    let e = 0;
    const i = (0,_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_10__.getDisplayIdFilterMask)(t.getDisplayId());

    for (let a = 0; a < this._filters.length; a++) {
      const s = !!(i & 1 << a),
            o = this._filters[a];
      e |= (!s || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(o) || o.check(t) ? 1 : 0) << a;
    }

    let s = 0;

    if (this._idsToHighlight.size) {
      const e = t.getObjectId();
      s = this.getHighlightFlag(e);
    }

    return e << 1 | s;
  }

}



/***/ }),

/***/ 38570:
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/ComputedAttributeStorage.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputedAttributeStorage": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../engine/webgl/DisplayId.js */ 71369);
/* harmony import */ var _DisplayIdGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayIdGenerator.js */ 46455);
/* harmony import */ var _StaticBitSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StaticBitSet.js */ 30592);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(t,e,s){if(!(t.length>e))for(;t.length<=e;)t.push(s)}class r{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new _DisplayIdGenerator_js__WEBPACK_IMPORTED_MODULE_1__.DisplayIdGenerator,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const e=this._bitsets.length;return this._bitsets.push(_StaticBitSet_js__WEBPACK_IMPORTED_MODULE_2__.StaticBitSet.create(this._allocatedSize,_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK)),e+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]);n(this._numerics[t],e,0)}_ensureInstanceId(t){n(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]);n(this._strings[t],e,null)}createDisplayId(t=!1){const s=this._idGenerator.createId();return s>this._allocatedSize&&this._expand(),(0,_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.createDisplayId)(s,t)}releaseDisplayId(e){for(const t of this._bitsets)t.unset(e);return this._idGenerator.releaseId(e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK)}getComputedNumeric(e,s){return this.getComputedNumericAtIndex(e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK,0)}setComputedNumeric(e,s,i){return this.setComputedNumericAtIndex(e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK,i,0)}getComputedString(e,s){return this.getComputedStringAtIndex(e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK,0)}setComputedString(e,s,i){return this.setComputedStringAtIndex(e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK,0,i)}getComputedNumericAtIndex(e,s){const i=e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK;return this._ensureNumeric(s,i),this._numerics[s][i]}setComputedNumericAtIndex(e,s,i){const n=e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK;this._ensureNumeric(s,n),this._numerics[s][n]=i}getInstanceId(e){const s=e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK;return this._ensureInstanceId(s),this._instanceIds[s]}setInstanceId(e,s){const i=e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK;this._ensureInstanceId(i),this._instanceIds[i]=s}getComputedStringAtIndex(e,s){const i=e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK;return this._ensureString(s,i),this._strings[s][i]}setComputedStringAtIndex(e,s,i){const n=e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK;this._ensureString(s,n),this._strings[s][n]=i}getXMin(e){return this._bounds[4*(e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK)]}getYMin(e){return this._bounds[4*(e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK)+1]}getXMax(e){return this._bounds[4*(e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK)+2]}getYMax(e){return this._bounds[4*(e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK)+3]}setBounds(e,s){const i=s.readHydratedGeometry();if(!i||!i.coords.length)return!1;let r=1/0,u=1/0,o=-1/0,h=-1/0;i.forEachVertex(((t,e)=>{r=Math.min(r,t),u=Math.min(u,e),o=Math.max(o,t),h=Math.max(h,e)}));const d=e&_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_ID_TEXEL_MASK;return n(this._bounds,4*d+4,0),this._bounds[4*d]=r,this._bounds[4*d+1]=u,this._bounds[4*d+2]=o,this._bounds[4*d+3]=h,!0}}


/***/ }),

/***/ 46455:
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/DisplayIdGenerator.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayIdGenerator": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../engine/webgl/DisplayId.js */ 71369);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this._freeIds=[],this._idCounter=1}createId(r=!1){return (0,_engine_webgl_DisplayId_js__WEBPACK_IMPORTED_MODULE_0__.createDisplayId)(this._getFreeId(),r)}releaseId(e){this._freeIds.push(e)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}


/***/ }),

/***/ 56738:
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReader.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureSetReader": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../geometry.js */ 61243);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _layers_graphics_centroid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../layers/graphics/centroid.js */ 53755);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../layers/graphics/OptimizedGeometry.js */ 82760);
/* harmony import */ var _StaticBitSet_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StaticBitSet.js */ 30592);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../geometry/support/jsonUtils.js */ 70279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var h,u,l;let c=0;const m=null!=(h=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__.default)("featurelayer-simplify-thresholds"))?h:[.5,.5,.5,.5],_=m[0],g=m[1],p=m[2],y=m[3],f=null!=(u=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__.default)("featurelayer-simplify-payload-size-factors"))?u:[1,2,4],I=f[0],x=f[1],A=f[2],j=null!=(l=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__.default)("featurelayer-simplify-mobile-factor"))?l:2,S=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__.default)("esri-mobile");class b{constructor(e){this.type="FeatureSetReader",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this.instance=e}static createInstance(){return c++,c=c>65535?0:c,c}get isEmpty(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(this._deleted)&&this._deleted.countSet()===this.getSize()}set level(e){this._level=e}getAreaSimplificationThreshold(e,t){let r=1;const s=S?j:1;t>4e6?r=A*s:t>1e6?r=x*s:t>5e5?r=I*s:t>1e5&&(r=s);let i=0;e>4e3?i=y*r:e>2e3?i=p*r:e>100?i=g:e>15&&(i=_);let o=8;return this._level<4?o=1:this._level<5?o=2:this._level<6&&(o=4),i*o}setArcadeSpatialReference(e){this._arcadeSpatialReference=e}attachStorage(e){this._storage=e}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(e){return this.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this.setComputedNumericAtIndex(t,0)}getComputedString(e){return this.getComputedStringAtIndex(0)}setComputedString(e,t){return this.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),e)}setComputedNumericAtIndex(e,t){this._storage.setComputedNumericAtIndex(this.getDisplayId(),e,t)}getComputedStringAtIndex(e){return this._storage.getComputedStringAtIndex(this.getDisplayId(),e)}setComputedStringAtIndex(e,t){return this._storage.setComputedStringAtIndex(this.getDisplayId(),e,t)}transform(e,t,r,s){const i=this.copy();return i._tx+=e,i._ty+=t,i._sx*=r,i._sy*=s,i}readAttribute(e,t=!1){const r=this._readAttribute(e,t);if(void 0!==r)return r;for(const s of this._joined){s.setIndex(this.getIndex());const r=s._readAttribute(e,t);if(void 0!==r)return r}}readAttributes(){const e=this._readAttributes();for(const t of this._joined){t.setIndex(this.getIndex());const r=t._readAttributes();for(const t of Object.keys(r))e[t]=r[t]}return e}joinAttributes(e){this._joined.push(e)}readArcadeFeature(){return this}geometry(){const e=this.readHydratedGeometry(),t=(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__.convertToGeometry)(e,this.geometryType,this.hasZ,this.hasM),r=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__.fromJSON)(t);return r&&(r.spatialReference=this._arcadeSpatialReference),r}field(e){return this.readAttribute(e,!0)}hasField(e){return!0}setField(e,t){}keys(){return[]}castToText(){return""}removeIds(e){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(this._objectIdToIndex)){const e=new Map,t=this.getCursor();for(;t.next();)e.set(t.getObjectId(),t.getIndex());this._objectIdToIndex=e}const t=this._objectIdToIndex;for(const r of e)t.has(r)&&this.removeAtIndex(t.get(r))}removeAtIndex(e){(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(this._deleted)&&(this._deleted=_StaticBitSet_js__WEBPACK_IMPORTED_MODULE_6__.StaticBitSet.create(this.getSize())),this._deleted.set(e)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const e=this.getCursor();for(;e.next();)yield e.readOptimizedFeature()}_getExists(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(this._deleted)||!this._deleted.has(this.getIndex())}_computeCentroid(){if("esriGeometryPolygon"!==this.geometryType)return null;const e=this.readUnquantizedGeometry();if(!e||e.hasIndeterminateRingOrder)return null;const t=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.unwrapOr)(this.getQuantizationTransform(),null);return (0,_layers_graphics_centroid_js__WEBPACK_IMPORTED_MODULE_3__.getCentroidOptimizedGeometry)(new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_5__.default,e,this.hasM,this.hasZ,t)}copyInto(e){e.seen=this.seen,e._storage=this._storage,e._arcadeSpatialReference=this._arcadeSpatialReference,e._joined=this._joined,e._tx=this._tx,e._ty=this._ty,e._sx=this._sx,e._sy=this._sy,e._deleted=this._deleted,e._objectIdToIndex=this._objectIdToIndex}}


/***/ }),

/***/ 92722:
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReaderJSON.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureSetReaderJSON": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../layers/graphics/featureConversionUtils.js */ 42187);
/* harmony import */ var _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../layers/graphics/OptimizedFeature.js */ 56499);
/* harmony import */ var _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeatureSetReader.js */ 56738);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c({coords:t,lengths:e}){let r=0;for(const s of e){for(let e=1;e<s;e++)t[2*(r+e)]+=t[2*(r+e)-2],t[2*(r+e)+1]+=t[2*(r+e)-1];r+=s}}class d extends _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_3__.FeatureSetReader{constructor(t,e,r){super(t),this._featureIndex=-1,this._dateFields=new Set,this._geometryType=r,this._features=e}static fromFeatures(t,e,s){const i=(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__.convertFromFeatures)([],t,e,!1,!1,s);for(let r=0;r<i.length;r++)i[r].displayId=t[r].displayId;return d.fromOptimizedFeatures(i,e)}static fromFeatureSet(t,e){const r=(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__.convertFromFeatureSet)(t,e);return d.fromOptimizedFeatureSet(r)}static fromOptimizedFeatureSet(t){const{features:e,geometryType:r}=t,s=d.fromOptimizedFeatures(e,r);s._exceededTransferLimit=t.exceededTransferLimit,s._transform=t.transform;for(const i of t.fields)"esriFieldTypeDate"===i.type&&s._dateFields.add(i.name);return s}static fromOptimizedFeatures(t,e,r){const s=_FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_3__.FeatureSetReader.createInstance(),i=new d(s,t,e);return i._transform=r,i}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter((t=>!e.has(t.objectId)))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new d(this.instance,this._features,this.geometryType);return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__.convertToFeature)(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return (0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__.convertToGeometry)(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const e=this.readCentroid();return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(e)?null:{x:e.coords[0]*this._sx+this._tx,y:e.coords[1]*this._sy+this._ty}}readGeometryArea(){return (0,_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__.hasGeometry)(this._current)?(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__.getQuantizedArea)(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!t)return t;const e=t.clone();return c(e),e}readHydratedGeometry(){const r=this._current.geometry;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(r))return null;const s=r.clone();return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(this._transform)&&(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__.unquantizeOptimizedGeometry)(s,s,this.hasZ,this.hasM,this._transform),s}getXHydrated(){if(!(0,_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__.hasGeometry)(this._current))return 0;const e=this._current.geometry.coords[0],r=this.getQuantizationTransform();return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(r)?e:e*r.scale[0]+r.translate[0]}getYHydrated(){if(!(0,_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__.hasGeometry)(this._current))return 0;const e=this._current.geometry.coords[1],r=this.getQuantizationTransform();return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(r)?e:r.translate[1]-e*r.scale[1]}getX(){return (0,_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__.hasGeometry)(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return (0,_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__.hasGeometry)(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!(0,_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__.hasGeometry)(this._current))return null;const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const r of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=r;return t}readCentroid(){if(!(0,_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__.hasGeometry)(this._current))return null;if(!this._current.centroid){const t=this._computeCentroid();if(!t)return null;t.coords[0]=(t.coords[0]-this._tx)/this._sx,t.coords[1]=(t.coords[1]-this._ty)/this._sy,this._current.centroid=t}const t=this._current.centroid.clone();return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sx+this._ty,t}_readAttribute(t,e){const r=this._current.attributes[t];if(void 0!==r)return null!=r&&e&&this._dateFields.has(t)?new Date(r):r;const s=this.readAttributes(),i=t.toLocaleLowerCase().trim();for(const n in s)if(n.toLocaleLowerCase().trim()===i){const t=this._current.attributes[n];return null!=t&&e&&this._dateFields.has(n)?new Date(t):t}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}


/***/ }),

/***/ 30592:
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/StaticBitSet.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticBitSet": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t,e){this._mask=0,this._buf=t,this._mask=e}static fromBuffer(e,s){return new t(e,s)}static create(e,s=4294967295){const r=new Uint32Array(Math.ceil(e/32));return new t(r,s)}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return!!(this._buf[this._getIndex(e)]&1<<e%32)}hasRange(t,e){let s=t,r=e;for(;s%32&&s!==r;){if(this.has(s))return!0;s++}for(;r%32&&s!==r;){if(this.has(s))return!0;r--}if(s===r)return!1;for(let h=s/32;h!==r/32;h++){if(this._buf[h])return!0}return!1}set(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]|=r}setRange(t,e){let s=t,r=e;for(;s%32&&s!==r;)this.set(s++);for(;r%32&&s!==r;)this.set(r--);if(s!==r)for(let h=s/32;h!==r/32;h++)this._buf[h]=4294967295}unset(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]&=4294967295^r}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new t(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],r=32*e;if(s)for(;s;){1&s&&t(r),s>>>=1,r++}}}countSet(){let t=0;return this.forEachSet((e=>{t++})),t}}


/***/ }),

/***/ 11706:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/visualVariablesUtils.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertColorVariable": () => (/* binding */ y),
/* harmony export */   "convertVisualVariables": () => (/* binding */ m),
/* harmony export */   "getVisualVariableSizeValueRepresentationRatio": () => (/* binding */ r),
/* harmony export */   "getVisualVariablesFields": () => (/* binding */ p),
/* harmony export */   "normalizeSizeElement": () => (/* binding */ c),
/* harmony export */   "normalizeSizeStops": () => (/* binding */ u),
/* harmony export */   "stopToSizeStop": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../engine/webgl/color.js */ 20727);
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../engine/webgl/definitions.js */ 30603);
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../engine/webgl/enums.js */ 31620);
/* harmony import */ var _engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../engine/webgl/visualVariablesUtils.js */ 92216);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function a(e){return{value:e.value,size:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.toPt)(e.size)}}function u(e){return e.map((e=>a(e)))}function c(e){if("string"==typeof e||"number"==typeof e)return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.toPt)(e);const s=e;return{type:"size",expression:s.expression,stops:u(s.stops)}}function p(e){const t=e&&e.length>0?{}:null;return t&&e.forEach((e=>{const s=e.type;e.field&&(t[s]=e.field)})),t}const f=e=>{const t=[],n=[],i=u(e),l=i.length;for(let r=0;r<6;r++){const e=i[Math.min(r,l-1)];t.push(e.value),n.push(null==e.size?_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_3__.NAN_MAGIC_NUMBER:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(e.size))}return{values:new Float32Array(t),sizes:new Float32Array(n)}};function m(e){const t=e&&e.length>0?{}:null,s=t?{}:null;if(!t)return{vvFields:t,vvRanges:s};for(const n of e)if(n.field&&(t[n.type]=n.field),"size"===n.type){s.size||(s.size={});const e=n;switch((0,_engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_5__.getTypeOfSizeVisualVariable)(e)){case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.WGLVVFlag.SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:c(e.minSize),maxSize:c(e.maxSize)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.WGLVVFlag.SIZE_SCALE_STOPS:s.size.scaleStops={stops:u(e.stops)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.WGLVVFlag.SIZE_FIELD_STOPS:if(e.levels){const t={};for(const s in e.levels)t[s]=f(e.levels[s]);s.size.fieldStops={type:"level-dependent",levels:t}}else s.size.fieldStops={type:"static",...f(e.stops)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.WGLVVFlag.SIZE_UNIT_VALUE:s.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation}}}else if("color"===n.type)s.color=y(n);else if("opacity"===n.type)s.opacity=v(n);else if("rotation"===n.type){const e=n;s.rotation={type:e.rotationType}}return{vvFields:t,vvRanges:s}}function v(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;const s=e.stops;for(let e=0;e<8;++e){const n=s[Math.min(e,s.length-1)];t.values[e]=n.value,t.opacities[e]=n.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=s}}return t}function g(e,t,s){e[4*t+0]=s.r/255,e[4*t+1]=s.g/255,e[4*t+2]=s.b/255,e[4*t+3]=s.a}function y(t){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(t))return null;if(t.normalizationField)return null;const s={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof t.field){if(!t.stops)return null;{if(t.stops.length>8)return null;s.field=t.field;const e=t.stops;for(let t=0;t<8;++t){const n=e[Math.min(t,e.length-1)];s.values[t]=n.value,g(s.colors,t,n.color)}}}else{if(!(t.stops&&t.stops.length>=0))return null;{const e=t.stops&&t.stops.length>=0&&t.stops[0].color;for(let t=0;t<8;t++)s.values[t]=1/0,g(s.colors,t,e)}}for(let e=0;e<32;e+=4)(0,_engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_2__.premultiplyAlpha)(s.colors,e,!0);return s}


/***/ })

}]);
//# sourceMappingURL=1077.a44c84a02f3801b4a766.js.map