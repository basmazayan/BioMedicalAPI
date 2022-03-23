"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[4758],{

/***/ 64758:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/StreamLayerView2D.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../rest/support/FeatureSet.js */ 42762);
/* harmony import */ var _FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FeatureLayerView2D.js */ 91578);
/* harmony import */ var _support_util_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/util.js */ 28121);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/












function l(e, t) {
  if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(e) && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isNone)(t)) return null;
  const s = {};
  return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(t) && (s.geometry = t.toJSON()), (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(e) && (s.where = e), s;
}

let p = class extends _FeatureLayerView2D_js__WEBPACK_IMPORTED_MODULE_10__.default {
  constructor() {
    super(...arguments), this._enabledDataReceived = !1, this.errorString = null, this.connectionStatus = "disconnected";
  }

  initialize() {
    this.handles.add([this.layer.watch("purgeOptions", () => this._update())]);
  }

  destroy() {
    this.connectionStatus = "disconnected";
  }

  get connectionError() {
    if (this.errorString) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("stream-controller", this.errorString);
  }

  on(e, t) {
    "data-received" === e && (this._enabledDataReceived = !0, this._proxy.enableEvent("data-received", !0));
    const r = super.on(e, t),
          o = this;
    return {
      remove() {
        r.remove(), "data-received" === e && (o._proxy.closed || o.hasEventListener("data-received") || o._proxy.enableEvent("data-received", !1));
      }

    };
  }

  queryLatestObservations(e, r) {
    if (!(this.layer.timeInfo.endField || this.layer.timeInfo.startField)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("streamlayer-no-timeField", "queryLatestObservation can only be used with services that define a TrackIdField");
    return this._proxy.queryLatestObservations(this._cleanUpQuery(e), r).then(e => {
      const t = _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__.default.fromJSON(e);
      return t.features.forEach(e => {
        e.layer = this.layer, e.sourceLayer = this.layer;
      }), t;
    });
  }

  _createClientOptions() {
    return { ...super._createClientOptions(),
      setProperty: e => {
        this.set(e.propertyName, e.value);
      }
    };
  }

  _createTileRendererHash(e) {
    const t = `${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression, this.layer.geometryDefinition))})`;
    return super._createTileRendererHash(e) + t;
  }

  _createServiceOptions() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = _this.layer,
            {
        objectIdField: t
      } = e,
            r = e.fields.map(e => e.toJSON()),
            o = (0,_support_util_js__WEBPACK_IMPORTED_MODULE_11__.toJSONGeometryType)(e.geometryType),
            s = e.timeInfo && e.timeInfo.toJSON() || null,
            i = e.spatialReference ? e.spatialReference.toJSON() : null;
      return {
        type: "stream",
        fields: r,
        geometryType: o,
        objectIdField: t,
        timeInfo: s,
        source: _this.layer.parsedUrl,
        serviceFilter: l(_this.layer.definitionExpression, _this.layer.geometryDefinition),
        purgeOptions: _this.layer.purgeOptions.toJSON(),
        enableDataReceived: _this._enabledDataReceived,
        spatialReference: i,
        maxReconnectionAttempts: _this.layer.maxReconnectionAttempts,
        maxReconnectionInterval: _this.layer.maxReconnectionInterval,
        updateInterval: _this.layer.updateInterval,
        customParameters: e.customParameters
      };
    })();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], p.prototype, "errorString", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({
  readOnly: !0
})], p.prototype, "connectionError", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], p.prototype, "connectionStatus", void 0), p = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.2d.layers.StreamLayerView2D")], p);
const d = p;


/***/ })

}]);
//# sourceMappingURL=4758.e7bf5e2452c8262f1a68.js.map