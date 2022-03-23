"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1981],{

/***/ 21981:
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/KMLLayer.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry.js */ 61243);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Collection.js */ 37635);
/* harmony import */ var _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/CollectionFlattener.js */ 39876);
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
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ 53730);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_KMLSublayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./support/KMLSublayer.js */ 66078);
/* harmony import */ var _support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/kmlUtils.js */ 5285);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../geometry/Extent.js */ 70157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


























const w = ["kml", "xml"];
let E = class extends (0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_18__.BlendLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_21__.RefreshableLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__.ScaleRangeLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_19__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_20__.PortalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_17__.default)))))) {
  constructor(...e) {
    super(...e), this._visibleFolders = [], this.allSublayers = new _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_4__.default({
      getCollections: () => [this.sublayers],
      getChildrenFunction: e => e.sublayers
    }), this.outSpatialReference = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_16__.default.WGS84, this.path = null, this.legendEnabled = !1, this.operationalLayerType = "KML", this.sublayers = null, this.type = "kml", this.url = null;
  }

  initialize() {
    this.watch("sublayers", (e, r) => {
      r && r.forEach(e => {
        e.parent = null, e.layer = null;
      }), e && e.forEach(e => {
        e.parent = this, e.layer = this;
      });
    }, !0), this.on("sublayer-update", () => this.notifyChange("fullExtent"));
  }

  normalizeCtorArgs(e, r) {
    return "string" == typeof e ? {
      url: e,
      ...r
    } : e;
  }

  readSublayersFromItemOrWebMap(e, r) {
    this._visibleFolders = r.visibleFolders;
  }

  readSublayers(e, r, t) {
    return (0,_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_25__.sublayersFromJSON)(_support_KMLSublayer_js__WEBPACK_IMPORTED_MODULE_24__.default, r, t, this._visibleFolders);
  }

  writeSublayers(e, r) {
    const t = [],
          o = e.toArray();

    for (; o.length;) {
      const e = o[0];
      e.networkLink || (e.visible && t.push(e.id), e.sublayers && o.push(...e.sublayers.toArray())), o.shift();
    }

    r.visibleFolders = t;
  }

  get title() {
    const e = this._get("title");

    return e && "defaults" !== this.originOf("title") ? e : this.url ? (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__.getFilename)(this.url, w) || "KML" : e || "";
  }

  set title(e) {
    this._set("title", e);
  }

  get visibleSublayers() {
    const e = this.sublayers,
          r = [],
          t = e => {
      e.visible && (r.push(e), e.sublayers && e.sublayers.forEach(t));
    };

    return e && e.forEach(t), r;
  }

  get fullExtent() {
    return this._recomputeFullExtent();
  }

  load(e) {
    const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e) ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({
      supportedTypes: ["KML"]
    }, e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAbortError).then(() => this._fetchService(r))), Promise.resolve(this);
  }

  destroy() {
    super.destroy(), this.allSublayers.destroy();
  }

  _fetchService(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = yield Promise.resolve().then(() => _this.resourceInfo ? {
        ssl: !1,
        data: _this.resourceInfo
      } : (0,_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_25__.fetchService)(_this.url, _this.outSpatialReference, _this.refreshInterval, e)),
            t = (0,_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_25__.parseKML)(r.data);
      t && _this.read(t, {
        origin: "service"
      });
    })();
  }

  _recomputeFullExtent() {
    let e = null;
    (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(this.extent) && (e = this.extent.clone());

    const r = t => {
      if (t.sublayers) for (const s of t.sublayers.items) r(s), s.visible && s.fullExtent && ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(e) ? e.union(s.fullExtent) : e = s.fullExtent.clone());
    };

    return r(this), e;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  readOnly: !0
})], E.prototype, "allSublayers", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_16__.default
})], E.prototype, "outSpatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
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
})], E.prototype, "path", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  readOnly: !0,
  json: {
    read: !1,
    write: !1
  }
})], E.prototype, "legendEnabled", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  type: ["show", "hide", "hide-children"]
})], E.prototype, "listMode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  type: ["KML"]
})], E.prototype, "operationalLayerType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({})], E.prototype, "resourceInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  type: _core_Collection_js__WEBPACK_IMPORTED_MODULE_3__.default.ofType(_support_KMLSublayer_js__WEBPACK_IMPORTED_MODULE_24__.default),
  json: {
    write: {
      ignoreOrigin: !0
    }
  }
})], E.prototype, "sublayers", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__.reader)(["web-map", "portal-item"], "sublayers", ["visibleFolders"])], E.prototype, "readSublayersFromItemOrWebMap", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__.reader)("service", "sublayers", ["sublayers"])], E.prototype, "readSublayers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__.writer)("sublayers")], E.prototype, "writeSublayers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  readOnly: !0,
  json: {
    read: !1
  }
})], E.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  json: {
    origins: {
      "web-map": {
        read: {
          source: "title"
        }
      }
    },
    write: {
      ignoreOrigin: !0
    }
  }
})], E.prototype, "title", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_23__.url)], E.prototype, "url", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  readOnly: !0
})], E.prototype, "visibleSublayers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({
  type: _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_26__.default
})], E.prototype, "extent", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()], E.prototype, "fullExtent", null), E = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__.subclass)("esri.layers.KMLLayer")], E);
const F = E;


/***/ }),

/***/ 66078:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/KMLSublayer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ k)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Evented.js */ 33380);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Loadable.js */ 23412);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/string.js */ 13778);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/watchUtils.js */ 11652);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ 43465);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _kmlUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./kmlUtils.js */ 5285);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var j;let S=j=class extends(_core_Evented_js__WEBPACK_IMPORTED_MODULE_3__.default.EventedMixin((0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__.JSONSupportMixin)(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_5__.default))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_8__.whenOnce)(this,"networkLink").then((()=>(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_8__.whenTrueOnce)(this,"visible"))).then((()=>this.load()))}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(e)?e.signal:null,s=this._fetchService(this._get("networkLink").href,t).then((e=>{const t=(0,_kmlUtils_js__WEBPACK_IMPORTED_MODULE_16__.computeExtent)(e.sublayers);this.fullExtent=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__.default.fromJSON(t),this.sourceJSON=e;const s=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_15__.ensureType)(_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__.default.ofType(j),(0,_kmlUtils_js__WEBPACK_IMPORTED_MODULE_16__.sublayersFromJSON)(j,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(s),Promise.resolve(this)}set sublayers(e){const r=this._get("sublayers");r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))]),this._set("sublayers",e)}castSublayers(e){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_15__.ensureType)(_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__.default.ofType(j),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,r){return!!r.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e))}_fetchService(e,r){return (0,_kmlUtils_js__WEBPACK_IMPORTED_MODULE_16__.fetchService)(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((e=>(0,_kmlUtils_js__WEBPACK_IMPORTED_MODULE_16__.parseKML)(e.data)))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()],S.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()],S.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({readOnly:!0,value:null})],S.prototype,"networkLink",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({json:{write:{allowNull:!0}}})],S.prototype,"parent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({value:null,json:{write:{allowNull:!0}}})],S.prototype,"sublayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_12__.cast)("sublayers")],S.prototype,"castSublayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({value:null,json:{read:{source:"name",reader:e=>(0,_core_string_js__WEBPACK_IMPORTED_MODULE_7__.stripHTML)(e)}}})],S.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({value:!0})],S.prototype,"visible",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__.reader)("visible",["visibility"])],S.prototype,"readVisible",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()],S.prototype,"sourceJSON",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({value:null})],S.prototype,"layer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__.default})],S.prototype,"fullExtent",void 0),S=j=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__.subclass)("esri.layers.support.KMLSublayer")],S);const k=S;


/***/ })

}]);
//# sourceMappingURL=1981.98c8b17b41dbedc0944d.js.map