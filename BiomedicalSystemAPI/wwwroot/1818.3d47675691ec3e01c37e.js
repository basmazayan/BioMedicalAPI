"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1818],{

/***/ 20975:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/sublayerUtils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isExportDynamic": () => (/* binding */ n),
/* harmony export */   "isSublayerOverhaul": () => (/* binding */ i),
/* harmony export */   "shouldWriteSublayerStructure": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,n,i){const o=n.flatten((({sublayers:e})=>e)).length;if(o!==e.length)return!0;return!!e.some((e=>e.originIdOf("minScale")>i||e.originIdOf("maxScale")>i||e.originIdOf("renderer")>i||e.originIdOf("labelingInfo")>i||e.originIdOf("opacity")>i||e.originIdOf("labelsVisible")>i||e.originIdOf("source")>i))||!r(e,n)}function n(e,n,i){return!!e.some((e=>{const n=e.source;return!(!n||"map-layer"===n.type&&n.mapLayerId===e.id&&(!n.gdbVersion||n.gdbVersion===i.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!r(e,n)}function r(e,n){if(!e||!e.length)return!0;const r=n.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const o=r.length;for(const{id:t}of e){for(;i<o&&r[i]!==t;)i++;if(i>=o)return!1}return!0}function i(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}


/***/ }),

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

/***/ 97784:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/MapImageLayerView2D.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../support/GraphicsCollection.js */ 78779);
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../engine/BitmapContainer.js */ 23335);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayerView2D.js */ 87982);
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ 20483);
/* harmony import */ var _graphics_HighlightGraphicContainer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./graphics/HighlightGraphicContainer.js */ 82718);
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/ExportStrategy.js */ 73004);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../layers/LayerView.js */ 96121);
/* harmony import */ var _layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../layers/MapImageLayerView.js */ 44679);
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ 26263);
/* harmony import */ var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../support/drapedUtils.js */ 7380);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


















const u = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri.views.2d.layers.MapImageLayerView2D");
let f = class extends (0,_layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_16__.MapImageLayerView)((0,_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_17__.RefreshableLayerView)((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_11__.LayerView2DMixin)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_15__.default))) {
  constructor() {
    super(...arguments), this._highlightGraphics = new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_9__.GraphicsCollection();
  }

  update(e) {
    this.strategy.update(e).catch(e => {
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAbortError)(e) || u.error(e);
    });
  }

  attach() {
    const {
      imageMaxWidth: e,
      imageMaxHeight: t,
      version: r
    } = this.layer,
          i = r >= 10.3,
          s = r >= 10;
    this._bitmapContainer = new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_10__.BitmapContainer(), this.container.addChild(this._bitmapContainer);
    const a = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_12__.default({
      view: this.view,
      graphics: this._highlightGraphics,
      requestUpdateCallback: () => this.requestUpdate(),
      container: new _graphics_HighlightGraphicContainer_js__WEBPACK_IMPORTED_MODULE_13__.default(this.view.featuresTilingScheme)
    });
    this.container.addChild(a.container), this.strategy = new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_14__.default({
      container: this._bitmapContainer,
      fetchSource: this.fetchImage.bind(this),
      requestUpdate: this.requestUpdate.bind(this),
      imageMaxWidth: e,
      imageMaxHeight: t,
      imageRotationSupported: i,
      imageNormalizationSupported: s,
      hidpi: !0
    }), this.handles.add(this.watch("exportImageVersion", () => this.requestUpdate()), "exportImageVersion"), this.handles.add(this.watch("view.floors", () => this.requestUpdate()), "view.floors"), this.requestUpdate();
  }

  detach() {
    this.handles.remove("exportImageVersion"), this.handles.remove("view.floors"), this.strategy.destroy(), this.container.removeAllChildren(), this._bitmapContainer.removeAllChildren();
  }

  moveStart() {}

  viewChange() {}

  moveEnd() {
    this.requestUpdate();
  }

  highlight(e, t) {
    return this._highlightGraphics.add(e), {
      remove: () => {
        this._highlightGraphics.remove(e);
      }
    };
  }

  createFetchPopupFeaturesQueryGeometry(e, t) {
    return (0,_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_18__.createQueryGeometry)(e, t, this.view);
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
      floors: this.view.floors,
      ...i
    });
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], f.prototype, "strategy", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], f.prototype, "updating", void 0), f = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.2d.layers.MapImageLayerView2D")], f);
const y = f;


/***/ }),

/***/ 82718:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/graphics/HighlightGraphicContainer.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/set.js */ 72062);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../engine/webgl/enums.js */ 31620);
/* harmony import */ var _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BaseGraphicContainer.js */ 74112);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_8__.default{renderChildren(r){if(r.drawPhase!==_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_7__.WGLDrawPhase.HIGHLIGHT)return;if(this.attributeView.bindTextures(r.context),!this.children.some((r=>r.hasData)))return;super.renderChildren(r);const{painter:e}=r,t=e.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(16384),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind()}};o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.2d.layers.support.HighlightGraphicContainer")],o);const i=o;


/***/ }),

/***/ 44679:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/MapImageLayerView.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapImageLayerView": () => (/* binding */ y),
/* harmony export */   "default": () => (/* binding */ y)
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
/* harmony import */ var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layers/support/commonProperties.js */ 34042);
/* harmony import */ var _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layers/support/ExportImageParameters.js */ 71995);
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ 48109);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../support/arcadeOnDemand.js */ 2999);
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/popupUtils.js */ 76388);
/* harmony import */ var _support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../support/floorFilterUtils.js */ 89836);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
















const y = y => {
  let d = class extends y {
    initialize() {
      this.exportImageParameters = new _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_11__.ExportImageParameters({
        layer: this.layer
      });
    }

    destroy() {
      this.exportImageParameters.destroy(), this.exportImageParameters = null;
    }

    get exportImageVersion() {
      var e;
      return null == (e = this.exportImageParameters) || e.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }

    fetchPopupFeatures(e, s) {
      var _this = this;

      return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const {
          layer: a
        } = _this;
        if (!e) return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("mapimagelayerview:fetchPopupFeatures", "Nothing to fetch without area", {
          layer: a
        }));

        const i = _this.get("view.scale"),
              p = [],
              m = /*#__PURE__*/function () {
          var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e) {
            const r = 0 === e.minScale || i <= e.minScale,
                  o = 0 === e.maxScale || i >= e.maxScale;
            if (e.visible && r && o) if (e.sublayers) e.sublayers.forEach(m);else if (e.popupEnabled) {
              const r = (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__.getFetchPopupTemplate)(e, { ...s,
                defaultPopupTemplateEnabled: !1
              });
              (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(r) && p.unshift({
                sublayer: e,
                popupTemplate: r
              });
            }
          });

          return function m(_x) {
            return _ref.apply(this, arguments);
          };
        }(),
              y = a.sublayers.toArray().reverse().map(m);

        yield Promise.all(y);
        const d = p.map( /*#__PURE__*/function () {
          var _ref2 = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* ({
            sublayer: r,
            popupTemplate: o
          }) {
            yield r.load().catch(() => {});

            const a = r.createQuery(),
                  i = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(s) ? s.event : null,
                  p = (0,_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_12__.calculateTolerance)({
              renderer: r.renderer,
              event: i
            }),
                  m = _this.createFetchPopupFeaturesQueryGeometry(e, p);

            if (a.geometry = m, a.outFields = yield (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__.getRequiredFields)(r, o), "map-image" === _this.layer.type && "floors" in _this.view) {
              var c, y;
              const e = null == (c = _this.view) || null == (y = c.floors) ? void 0 : y.clone(),
                    o = (0,_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_15__.getLayerFloorFilterClause)(e, r);
              (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(o) && (a.where = a.where ? `(${a.where}) AND (${o})` : o);
            }

            const d = yield _this._loadArcadeModules(o);
            d && d.arcadeUtils.hasGeometryOperations(o) || (a.maxAllowableOffset = m.width / p);
            return (yield r.queryFeatures(a)).features;
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
        return (yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.eachAlways)(d)).reduce((e, r) => r.value ? [...e, ...r.value] : e, []).filter(e => null != e);
      })();
    }

    canResume() {
      var e;
      return !!super.canResume() && (null == (e = this.timeExtent) || !e.isEmpty);
    }

    _loadArcadeModules(e) {
      if (e.get("expressionInfos.length") || Array.isArray(e.content) && e.content.some(e => "expression" === e.type)) return (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_13__.loadArcade)();
    }

  };
  return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], d.prototype, "exportImageParameters", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({
    readOnly: !0
  })], d.prototype, "exportImageVersion", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], d.prototype, "layer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()], d.prototype, "suspended", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_10__.combinedViewLayerTimeExtentProperty)], d.prototype, "timeExtent", void 0), d = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.views.layers.MapImageLayerView")], d), d;
};



/***/ }),

/***/ 76388:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/popupUtils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFetchPopupTemplate": () => (/* binding */ d),
/* harmony export */   "getRequiredFields": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layers/support/fieldUtils.js */ 81451);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



function t(_x) {
  return _t.apply(this, arguments);
}

function _t() {
  _t = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (t, d = t.popupTemplate) {
    if (!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(d)) return [];
    const i = yield d.getRequiredFields(t.fieldsIndex),
          {
      lastEditInfoEnabled: n
    } = d,
          {
      objectIdField: s,
      typeIdField: a,
      globalIdField: o,
      relationships: u
    } = t;
    if (i.includes("*")) return ["*"];
    const f = n ? yield (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__.getFeatureEditFields)(t) : [],
          r = (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__.fixFields)(t.fieldsIndex, [...i, ...f]);
    return a && r.push(a), r && s && t.fieldsIndex.has(s) && -1 === r.indexOf(s) && r.push(s), r && o && t.fieldsIndex.has(o) && -1 === r.indexOf(o) && r.push(o), u && u.forEach(e => {
      const {
        keyField: p
      } = e;
      r && p && t.fieldsIndex.has(p) && -1 === r.indexOf(p) && r.push(p);
    }), r;
  });
  return _t.apply(this, arguments);
}

function d(p, l) {
  return p.popupTemplate ? p.popupTemplate : (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(l) && l.defaultPopupTemplateEnabled && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(p.defaultPopupTemplate) ? p.defaultPopupTemplate : null;
}



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
//# sourceMappingURL=1818.3d47675691ec3e01c37e.js.map