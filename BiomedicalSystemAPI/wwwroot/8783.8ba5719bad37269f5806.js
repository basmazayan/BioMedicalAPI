"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[8783],{

/***/ 68783:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/WMSLayerView2D.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
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
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../geometry/Extent.js */ 70157);
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../engine/BitmapContainer.js */ 23335);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LayerView2D.js */ 87982);
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./support/ExportStrategy.js */ 73004);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layers/LayerView.js */ 96121);
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ 26263);
/* harmony import */ var _layers_WMSLayerView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../layers/WMSLayerView.js */ 86804);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
















const l = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__.default.getLogger("esri.views.2d.layers.WMSLayerView2D");
let y = class extends (0,_layers_WMSLayerView_js__WEBPACK_IMPORTED_MODULE_16__.WMSLayerView)((0,_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_15__.RefreshableLayerView)((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_12__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_14__.default))) {
  initialize() {
    const {
      layer: e,
      view: r
    } = this;
    e.supportsSpatialReference(r.spatialReference) || this.addResolvingPromise(Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("layerview:spatial-reference-incompatible", "The spatial references supported by this WMS layer are incompatible with the spatial reference of the view", {
      layer: e
    })));
  }

  update(e) {
    this.strategy.update(e).catch(e => {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAbortError)(e) || l.error(e);
    });
  }

  attach() {
    const {
      layer: e
    } = this,
          {
      imageMaxHeight: t,
      imageMaxWidth: r
    } = e;
    this._bitmapContainer = new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_11__.BitmapContainer(), this.container.addChild(this._bitmapContainer), this.strategy = new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_13__.default({
      container: this._bitmapContainer,
      fetchSource: this.fetchImage.bind(this),
      requestUpdate: this.requestUpdate.bind(this),
      imageMaxHeight: t,
      imageMaxWidth: r,
      imageRotationSupported: !1,
      imageNormalizationSupported: !1,
      hidpi: !1
    }), this.handles.add(this.watch("exportImageVersion", () => this.requestUpdate()), "exportImageVersion");
  }

  detach() {
    this.handles.remove("exportImageVersion"), this.strategy.destroy(), this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }

  moveStart() {}

  viewChange() {}

  moveEnd() {
    this.requestUpdate();
  }

  createFetchPopupFeaturesQuery(e) {
    const {
      view: t
    } = this,
          r = this._bitmapContainer,
          {
      x: i,
      y: s
    } = e,
          {
      spatialReference: a
    } = t;
    let n = null,
        p = 0,
        m = 0;
    if (r.children.some(e => {
      const {
        width: t,
        height: r,
        resolution: h,
        x: c,
        y: d
      } = e,
            l = c + h * t,
            y = d - h * r;
      return i >= c && i <= l && s <= d && s >= y && (n = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__.default({
        xmin: c,
        ymin: y,
        xmax: l,
        ymax: d,
        spatialReference: a
      }), p = t, m = r, !0);
    }), !n) return null;
    const h = n.width / p,
          c = Math.round((i - n.xmin) / h),
          d = Math.round((n.ymax - s) / h);
    return {
      extent: n,
      width: p,
      height: m,
      x: c,
      y: d
    };
  }

  doRefresh() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.requestUpdate();
    })();
  }

  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }

  fetchImage(e, t, r, i) {
    return this.layer.fetchImage(e, t, r, {
      timeExtent: this.timeExtent,
      ...i
    });
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], y.prototype, "strategy", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], y.prototype, "updating", void 0), y = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.views.2d.layers.WMSLayerView2D")], y);
const u = y;


/***/ }),

/***/ 86804:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/WMSLayerView.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WMSLayerView": () => (/* binding */ a),
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layers/support/commonProperties.js */ 34042);
/* harmony import */ var _layers_support_ExportWMSImageParameters_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layers/support/ExportWMSImageParameters.js */ 28763);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=a=>{let i=class extends a{initialize(){this.exportImageParameters=new _layers_support_ExportWMSImageParameters_js__WEBPACK_IMPORTED_MODULE_8__.ExportWMSImageParameters({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s=this.createFetchPopupFeaturesQuery(e);if(!s)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s;if(!(p&&a&&i))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});const u=t.fetchFeatureInfo(p,a,i,m,n);return Promise.resolve(u?[u]:[])}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],i.prototype,"exportImageParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0})],i.prototype,"exportImageVersion",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],i.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__.combinedViewLayerTimeExtentProperty)],i.prototype,"timeExtent",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.mixins.WMSLayerView")],i),i};


/***/ })

}]);
//# sourceMappingURL=8783.8ba5719bad37269f5806.js.map