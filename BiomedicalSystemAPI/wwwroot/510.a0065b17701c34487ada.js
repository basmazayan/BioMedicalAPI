"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[510],{

/***/ 90348:
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/BaseTileLayer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../geometry/Extent.js */ 70157);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/support/aaBoundingRect.js */ 7401);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ 53730);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./support/TileInfo.js */ 87940);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u={id:"0/0/0",level:0,row:0,col:0,extent:null};let y=class extends((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_12__.BlendLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_14__.ScaleRangeLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_13__.RefreshableLayer)(_Layer_js__WEBPACK_IMPORTED_MODULE_11__.default)))){constructor(){super(...arguments),this.tileInfo=_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_15__.default.create({spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__.default.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_8__.default(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__.default.WebMercator),this.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__.default.WebMercator}getTileBounds(e,t,r,o){const s=o||(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.create)();return u.level=e,u.row=t,u.col=r,u.extent=s,this.tileInfo.updateTileInfo(u),u.extent=null,s}fetchTile(e,r,o,s={}){const{signal:i}=s,l=this.getTileUrl(e,r,o),p={responseType:"image",signal:i,query:{...this.refreshParameters}};return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(l,p).then((e=>e.data))}getTileUrl(){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_15__.default})],y.prototype,"tileInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:["show","hide"]})],y.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0,value:"base-tile"})],y.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({nonNullable:!0})],y.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],y.prototype,"spatialReference",void 0),y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.BaseTileLayer")],y);const d=y;


/***/ }),

/***/ 20510:
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/BingMapsLayer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Error.js */ 61414);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/jsonMap.js */ 74856);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ 96583);
/* harmony import */ var _BaseTileLayer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BaseTileLayer.js */ 90348);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./support/TileInfo.js */ 87940);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
















const y = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_4__.JSONMap({
  BingMapsAerial: "aerial",
  BingMapsRoad: "road",
  BingMapsHybrid: "hybrid"
}),
      h = "https://dev.virtualearth.net";
let m = class extends (0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_14__.BlendLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_15__.OperationalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__.MultiOriginJSONMixin)(_BaseTileLayer_js__WEBPACK_IMPORTED_MODULE_13__.default))) {
  constructor(e) {
    super(e), this.type = "bing-maps", this.tileInfo = new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_16__.default({
      size: [256, 256],
      dpi: 96,
      origin: {
        x: -20037508.342787,
        y: 20037508.342787,
        spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__.default.WebMercator
      },
      spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__.default.WebMercator,
      lods: [{
        level: 1,
        resolution: 78271.5169639999,
        scale: 295828763.795777
      }, {
        level: 2,
        resolution: 39135.7584820001,
        scale: 147914381.897889
      }, {
        level: 3,
        resolution: 19567.8792409999,
        scale: 73957190.948944
      }, {
        level: 4,
        resolution: 9783.93962049996,
        scale: 36978595.474472
      }, {
        level: 5,
        resolution: 4891.96981024998,
        scale: 18489297.737236
      }, {
        level: 6,
        resolution: 2445.98490512499,
        scale: 9244648.868618
      }, {
        level: 7,
        resolution: 1222.99245256249,
        scale: 4622324.434309
      }, {
        level: 8,
        resolution: 611.49622628138,
        scale: 2311162.217155
      }, {
        level: 9,
        resolution: 305.748113140558,
        scale: 1155581.108577
      }, {
        level: 10,
        resolution: 152.874056570411,
        scale: 577790.554289
      }, {
        level: 11,
        resolution: 76.4370282850732,
        scale: 288895.277144
      }, {
        level: 12,
        resolution: 38.2185141425366,
        scale: 144447.638572
      }, {
        level: 13,
        resolution: 19.1092570712683,
        scale: 72223.819286
      }, {
        level: 14,
        resolution: 9.55462853563415,
        scale: 36111.909643
      }, {
        level: 15,
        resolution: 4.77731426794937,
        scale: 18055.954822
      }, {
        level: 16,
        resolution: 2.38865713397468,
        scale: 9027.977411
      }, {
        level: 17,
        resolution: 1.19432856685505,
        scale: 4513.988705
      }, {
        level: 18,
        resolution: .597164283559817,
        scale: 2256.994353
      }, {
        level: 19,
        resolution: .298582141647617,
        scale: 1128.497176
      }, {
        level: 20,
        resolution: .1492910708238085,
        scale: 564.248588
      }]
    }), this.key = null, this.style = "road", this.culture = "en-US", this.region = null, this.portalUrl = null, this.hasAttributionData = !0;
  }

  get bingMetadata() {
    return this._get("bingMetadata");
  }

  set bingMetadata(e) {
    this._set("bingMetadata", e);
  }

  get copyright() {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(this.bingMetadata) ? this.bingMetadata.copyright : null;
  }

  get operationalLayerType() {
    return y.toJSON(this.style);
  }

  get bingLogo() {
    return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(this.bingMetadata) ? this.bingMetadata.brandLogoUri : null;
  }

  load(e) {
    return this.key ? this.addResolvingPromise(this._getMetadata()) : this.portalUrl ? this.addResolvingPromise(this._getPortalBingKey().then(() => this._getMetadata())) : this.addResolvingPromise(Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("bingmapslayer:load", "Bing layer must have bing key."))), Promise.resolve(this);
  }

  getTileUrl(e, t, r) {
    if (!this.loaded || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(this.bingMetadata)) return null;

    const o = this.bingMetadata.resourceSets[0].resources[0],
          a = o.imageUrlSubdomains[t % o.imageUrlSubdomains.length],
          i = this._getQuadKey(e, t, r);

    return o.imageUrl.replace("{subdomain}", a).replace("{quadkey}", i);
  }

  fetchAttributionData() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this.load().then(() => {
        if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(_this.bingMetadata)) return null;
        return {
          contributors: _this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(e => ({
            attribution: e.attribution,
            coverageAreas: e.coverageAreas.map(e => ({
              zoomMin: e.zoomMin,
              zoomMax: e.zoomMax,
              score: 1,
              bbox: [e.bbox[0], e.bbox[1], e.bbox[2], e.bbox[3]]
            }))
          }))
        };
      });
    })();
  }

  _getMetadata() {
    const e = {
      road: "roadOnDemand",
      aerial: "aerial",
      hybrid: "aerialWithLabelsOnDemand"
    }[this.style];
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(`${h}/REST/v1/Imagery/Metadata/${e}`, {
      responseType: "json",
      query: {
        include: "ImageryProviders",
        uriScheme: "https",
        key: this.key,
        suppressStatus: !0,
        output: "json",
        culture: this.culture,
        userRegion: this.region
      }
    }).then(e => {
      const t = e.data;
      if (200 !== t.statusCode) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("bingmapslayer:getmetadata", t.statusDescription);
      if (this.bingMetadata = t, 0 === this.bingMetadata.resourceSets.length) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("bingmapslayer:getmetadata", "no bing resourcesets");
      if (0 === this.bingMetadata.resourceSets[0].resources.length) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("bingmapslayer:getmetadata", "no bing resources");
    }).catch(e => {
      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("bingmapslayer:getmetadata", e.message);
    });
  }

  _getPortalBingKey() {
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(this.portalUrl, {
      responseType: "json",
      authMode: "no-prompt",
      query: {
        f: "json"
      }
    }).then(e => {
      if (!e.data.bingKey) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("bingmapslayer:getportalbingkey", "The referenced Portal does not contain a valid bing key");
      this.key = e.data.bingKey;
    }).catch(e => {
      throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__.default("bingmapslayer:getportalbingkey", e.message);
    });
  }

  _getQuadKey(e, t, r) {
    let o = "";

    for (let a = e; a > 0; a--) {
      let e = 0;
      const s = 1 << a - 1;
      0 != (r & s) && (e += 1), 0 != (t & s) && (e += 2), o += e.toString();
    }

    return o;
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  json: {
    read: !1,
    write: !1
  },
  value: null
})], m.prototype, "bingMetadata", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  json: {
    read: !1,
    write: !1
  },
  value: "bing-maps",
  readOnly: !0
})], m.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  type: _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_16__.default
})], m.prototype, "tileInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  type: String,
  readOnly: !0,
  json: {
    read: !1,
    write: !1
  }
})], m.prototype, "copyright", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  type: String,
  json: {
    write: !1,
    read: !1
  }
})], m.prototype, "key", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  type: y.apiValues,
  nonNullable: !0,
  json: {
    read: {
      source: "layerType",
      reader: y.read
    }
  }
})], m.prototype, "style", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  type: ["BingMapsAerial", "BingMapsHybrid", "BingMapsRoad"]
})], m.prototype, "operationalLayerType", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  type: String,
  json: {
    write: !1,
    read: !1
  }
})], m.prototype, "culture", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  type: String,
  json: {
    write: !1,
    read: !1
  }
})], m.prototype, "region", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  type: String,
  json: {
    write: !0,
    read: !0
  }
})], m.prototype, "portalUrl", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  type: Boolean,
  json: {
    write: !1,
    read: !1
  }
})], m.prototype, "hasAttributionData", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({
  type: String,
  readOnly: !0
})], m.prototype, "bingLogo", null), m = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.layers.BingMapsLayer")], m);
const b = m;


/***/ })

}]);
//# sourceMappingURL=510.a0065b17701c34487ada.js.map