"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[6352],{

/***/ 81751:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/DimensionalDefinition.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a;let n=a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new a({variableName:this.variableName,dimensionName:this.dimensionName,values:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.values),isSlice:this.isSlice})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],n.prototype,"variableName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],n.prototype,"dimensionName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.types.array(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.types.oneOf([_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.types.native(Number),_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.types.array(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.types.native(Number))])),json:{write:!0}})],n.prototype,"values",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{write:!0}})],n.prototype,"isSlice",void 0),n=a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.support.DimensionalDefinition")],n);const p=n;


/***/ }),

/***/ 87066:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/RasterJobHandler.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/workers/workers.js */ 74775);
/* harmony import */ var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PixelBlock.js */ 77847);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





class n {
  constructor() {
    this._workerThread = null, this._destroyed = !1;
  }

  initialize() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = yield (0,_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_3__.open)("RasterWorker");
      _this._destroyed ? e.close() : _this._workerThread = e;
    })();
  }

  destroy() {
    this._destroyed = !0, this._workerThread && (this._workerThread.close(), this._workerThread = null);
  }

  convertVectorFieldData(r, o) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this2._workerThread) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("raster-jobhandler:no-connection", "no available worker connection");
      const n = yield _this2._workerThread.invoke("convertVectorFieldData", {
        pixelBlock: r.pixelBlock.toJSON(),
        type: r.dataType
      }, o);
      return n ? new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__.default(n) : null;
    })();
  }

  decode(r, o) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this3._workerThread) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("raster-jobhandler:no-connection", "no available worker connection");
      const n = yield _this3._workerThread.invoke("decode", r, o);
      return n ? new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__.default(n) : null;
    })();
  }

  symbolize(o, n) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this4._workerThread) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("raster-jobhandler:no-connection", "no available worker connection");
      const a = {
        extent: o.extent && o.extent.toJSON(),
        pixelBlock: (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(o.pixelBlock) && o.pixelBlock.toJSON(),
        simpleStretchParams: o.simpleStretchParams,
        bandIds: o.bandIds
      },
            i = yield _this4._workerThread.invoke("symbolize", a, n);
      return i ? new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__.default(i) : null;
    })();
  }

  updateSymbolizer(r, o) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var t;
      if (!_this5._workerThread) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("raster-jobhandler:no-connection", "no available worker connection");
      const n = null == r || null == (t = r.rendererJSON) ? void 0 : t.histograms;
      yield Promise.all(_this5._workerThread.broadcast("updateSymbolizer", {
        symbolizerJSON: r.toJSON(),
        histograms: n
      }, o));
    })();
  }

  stretch(r, o) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this6._workerThread) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("raster-jobhandler:no-connection", "no available worker connection");
      if (null == r || !r.pixelBlock) return null;
      const n = {
        srcPixelBlock: r.pixelBlock.toJSON(),
        stretchParams: r.stretchParams
      },
            a = yield _this6._workerThread.invoke("stretch", n, o);
      return a ? new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__.default(a) : null;
    })();
  }

  split(r, o) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this7._workerThread) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("raster-jobhandler:no-connection", "no available worker connection");
      if (null == r || !r.pixelBlock) return null;
      const n = {
        srcPixelBlock: r.pixelBlock.toJSON(),
        tileSize: r.tileSize,
        maximumPyramidLevel: r.maximumPyramidLevel
      },
            a = yield _this7._workerThread.invoke("split", n, o);
      return a && a.forEach((e, r) => {
        a.set(r, e ? _PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__.default.fromJSON(e) : null);
      }), Promise.resolve(a);
    })();
  }

  estimateStatisticsHistograms(r, o) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this8._workerThread) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("raster-jobhandler:no-connection", "no available worker connection");
      if (null == r || !r.pixelBlock) return null;
      const t = {
        srcPixelBlock: r.pixelBlock.toJSON()
      },
            n = yield _this8._workerThread.invoke("estimateStatisticsHistograms", t, o);
      return Promise.resolve(n);
    })();
  }

  mosaicAndTransform(o, n) {
    var _this9 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var a;
      if (!_this9._workerThread) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("raster-jobhandler:no-connection", "no available worker connection");
      if (null == o || null == (a = o.srcPixelBlocks) || !a.length) return null;
      const i = { ...o,
        srcPixelBlocks: o.srcPixelBlocks.map(e => (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e) ? e.toJSON() : null)
      },
            s = yield _this9._workerThread.invoke("mosaicAndTransform", i, n);
      return s ? new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__.default(s) : null;
    })();
  }

  createStreamlinesMesh(r, o) {
    var _this10 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (!_this10._workerThread) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("raster-jobhandler:no-connection", "no available worker connection");
      const t = {
        buffer: r.flowData.data.buffer,
        width: r.flowData.width,
        height: r.flowData.height
      },
            n = r.rendererSettings,
            a = yield _this10._workerThread.invoke("createStreamlinesMesh", {
        flowData: t,
        rendererSettings: n
      }, { ...o,
        transferList: [t.buffer]
      });
      return {
        vertexData: new Float32Array(a.vertexBuffer),
        indexData: new Uint32Array(a.indexBuffer)
      };
    })();
  }

  getProjectionOffsetGrid(o, t) {
    if (!this._workerThread) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("raster-jobhandler:no-connection", "no available worker connection");
    const n = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(o.datumTransformation) ? o.datumTransformation.steps.map(e => ({
      wkid: e.wkid,
      wkt: e.wkt,
      isInverse: e.isInverse
    })) : null,
          a = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(o.rasterTransform) ? o.rasterTransform.toJSON() : null,
          i = {
      projectedExtent: o.projectedExtent.toJSON(),
      srcBufferExtent: o.srcBufferExtent.toJSON(),
      pixelSize: o.pixelSize,
      hasWrapAround: o.hasWrapAround,
      spacing: o.spacing,
      datumTransformationSteps: n,
      rasterTransform: a,
      isAdaptive: o.isAdaptive
    };
    return this._workerThread.invoke("getProjectionOffsetGrid", i, t);
  }

}



/***/ }),

/***/ 92015:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterEnums.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interpolationKebab": () => (/* binding */ o),
/* harmony export */   "noDataInterpretationKebab": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.strict)()({RSP_NearestNeighbor:"nearest",RSP_BilinearInterpolation:"bilinear",RSP_CubicConvolution:"cubic",RSP_Majority:"majority"}),i=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.strict)()({esriNoDataMatchAny:"any",esriNoDataMatchAll:"all"});


/***/ }),

/***/ 15079:
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/rasterRenderers.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimatedFlowRenderer": () => (/* reexport safe */ _renderers_AnimatedFlowRenderer_js__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "ClassBreaksRenderer": () => (/* reexport safe */ _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "RasterColormapRenderer": () => (/* reexport safe */ _renderers_RasterColormapRenderer_js__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "RasterShadedReliefRenderer": () => (/* reexport safe */ _renderers_RasterShadedReliefRenderer_js__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "RasterStretchRenderer": () => (/* reexport safe */ _renderers_RasterStretchRenderer_js__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "UniqueValueRenderer": () => (/* reexport safe */ _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "VectorFieldRenderer": () => (/* reexport safe */ _renderers_VectorFieldRenderer_js__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "fromJSON": () => (/* binding */ m),
/* harmony export */   "rasterRendererTypes": () => (/* binding */ i),
/* harmony export */   "read": () => (/* binding */ u),
/* harmony export */   "websceneRasterRendererTypes": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Warning.js */ 68364);
/* harmony import */ var _renderers_AnimatedFlowRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderers/AnimatedFlowRenderer.js */ 14384);
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderers/ClassBreaksRenderer.js */ 25938);
/* harmony import */ var _renderers_RasterColormapRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderers/RasterColormapRenderer.js */ 8704);
/* harmony import */ var _renderers_RasterShadedReliefRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderers/RasterShadedReliefRenderer.js */ 26620);
/* harmony import */ var _renderers_RasterStretchRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderers/RasterStretchRenderer.js */ 62857);
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderers/UniqueValueRenderer.js */ 96337);
/* harmony import */ var _renderers_VectorFieldRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderers/VectorFieldRenderer.js */ 34808);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i={key:"type",base:null,typeMap:{"unique-value":_renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_6__.default,"class-breaks":_renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_2__.default,"raster-colormap":_renderers_RasterColormapRenderer_js__WEBPACK_IMPORTED_MODULE_3__.default,"raster-stretch":_renderers_RasterStretchRenderer_js__WEBPACK_IMPORTED_MODULE_5__.default,"vector-field":_renderers_VectorFieldRenderer_js__WEBPACK_IMPORTED_MODULE_7__.default,"raster-shaded-relief":_renderers_RasterShadedReliefRenderer_js__WEBPACK_IMPORTED_MODULE_4__.default,"animated-flow":_renderers_AnimatedFlowRenderer_js__WEBPACK_IMPORTED_MODULE_1__.default}},l={...i,typeMap:{...i.typeMap}};delete l.typeMap["vector-field"],delete l.typeMap["animated-flow"];const f={uniqueValue:_renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_6__.default,classBreaks:_renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_2__.default,rasterStretch:_renderers_RasterStretchRenderer_js__WEBPACK_IMPORTED_MODULE_5__.default,rasterColormap:_renderers_RasterColormapRenderer_js__WEBPACK_IMPORTED_MODULE_3__.default,vectorField:_renderers_VectorFieldRenderer_js__WEBPACK_IMPORTED_MODULE_7__.default,rasterShadedRelief:_renderers_RasterShadedReliefRenderer_js__WEBPACK_IMPORTED_MODULE_4__.default,animatedFlow:_renderers_AnimatedFlowRenderer_js__WEBPACK_IMPORTED_MODULE_1__.default};function p(e){return e&&f[e.type]||null}function u(r,t){if(!r)return null;if("classBreaks"===r.type&&r.classificationMethod){const e=r.authoringInfo||{classificationMethod:""};e.classificationMethod=r.classificationMethod,r.authoringInfo=e}const s=p(r);if(s){const e=new s;return e.read(r,t),e}return t&&t.messages&&r&&t.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__.default("renderer:unsupported","Renderers of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:t})),null}function m(e,r){return u(e,r)}


/***/ }),

/***/ 14384:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/AnimatedFlowRenderer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Color.js */ 28503);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/screenUtils.js */ 75244);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let l=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(e){super(e),this.density=.8,this.lineColor=new _Color_js__WEBPACK_IMPORTED_MODULE_1__.default([255,255,255,1]),this.lineLength=200,this.lineWidth=1.5,this.lineSpeed=10,this.fadeDuration=100,this.smoothing=0,this.type="animated-flow"}clone(){const{density:e,lineLength:o,lineWidth:t,lineSpeed:r,fadeDuration:i,smoothing:s}=this,n=this.lineColor.clone();return new p({density:e,lineColor:n,lineLength:o,lineWidth:t,lineSpeed:r,fadeDuration:i,smoothing:s})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0}})],l.prototype,"density",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__.default,json:{write:{allowNull:!0}}})],l.prototype,"lineColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__.toPt,json:{write:!0}})],l.prototype,"lineLength",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__.toPt,json:{write:!0}})],l.prototype,"lineWidth",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0}})],l.prototype,"lineSpeed",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0}})],l.prototype,"fadeDuration",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__.toPt,json:{write:!0}})],l.prototype,"smoothing",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__.enumeration)({animatedFlow:"animated-flow"})],l.prototype,"type",void 0),l=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.renderers.AnimatedFlowRenderer")],l);const a=l;


/***/ }),

/***/ 8704:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/RasterColormapRenderer.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _support_ColormapInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./support/ColormapInfo.js */ 37987);
/* harmony import */ var _support_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./support/colorRampUtils.js */ 29122);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c;let l=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(o){super(o),this.colormapInfos=null,this.type="raster-colormap"}static createFromColormap(o,r){if(!o)return null;const t=5===o[0].length,e=[...o].sort((o=>o[0][0]-o[1][0])).map((o=>{var e;return _support_ColormapInfo_js__WEBPACK_IMPORTED_MODULE_8__.default.fromJSON({value:o[0],color:t?o.slice(1,5):o.slice(1,4).concat([255]),label:r?null!=(e=r[o[0]])?e:"":o[0]})}));return new c({colormapInfos:e})}static createFromColorramp(o){const r=(0,_support_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_9__.convertColorRampToColormap)(o,256);return c.createFromColormap(r)}clone(){return new c({colormapInfos:this.colormapInfos.map((o=>o.toJSON()))})}extractColormap(){return this.colormapInfos.map((o=>[o.value,o.color.r,o.color.g,o.color.b,o.color.a>1?o.color.a:255*o.color.a&255])).sort(((o,r)=>o[0]-r[0]))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_support_ColormapInfo_js__WEBPACK_IMPORTED_MODULE_8__.default],json:{write:!0}})],l.prototype,"colormapInfos",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({rasterColormap:"raster-colormap"})],l.prototype,"type",void 0),l=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.RasterColormapRenderer")],l);const m=l;


/***/ }),

/***/ 26620:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/RasterShadedReliefRenderer.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _rest_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rest/support/colorRamps.js */ 23038);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c;let d=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(e){super(e),this.altitude=45,this.azimuth=315,this.colorRamp=null,this.hillshadeType="multi-directional",this.pixelSizePower=.664,this.pixelSizeFactor=.024,this.scalingType="none",this.type="raster-shaded-relief",this.zFactor=1}readColorRamp(e){return (0,_rest_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_8__.fromJSON)(e)}clone(){return new c({hillshadeType:this.hillshadeType,altitude:this.altitude,azimuth:this.azimuth,zFactor:this.zFactor,scalingType:this.scalingType,pixelSizeFactor:this.pixelSizeFactor,pixelSizePower:this.pixelSizePower,colorRamp:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.colorRamp)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],d.prototype,"altitude",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],d.prototype,"azimuth",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({types:_rest_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_8__.types,json:{write:!0}})],d.prototype,"colorRamp",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("colorRamp")],d.prototype,"readColorRamp",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:["traditional","multi-directional"],json:{write:!0}})],d.prototype,"hillshadeType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],d.prototype,"pixelSizePower",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],d.prototype,"pixelSizeFactor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:["none","adjusted"],json:{write:!0}})],d.prototype,"scalingType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__.enumeration)({rasterShadedRelief:"raster-shaded-relief"})],d.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],d.prototype,"zFactor",void 0),d=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.RasterShadedReliefRenderer")],d);const m=d;


/***/ }),

/***/ 62857:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/RasterStretchRenderer.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ 60161);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./support/stretchRendererUtils.js */ 5929);
/* harmony import */ var _rest_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rest/support/colorRamps.js */ 23038);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;let h=d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(t){super(t),this.colorRamp=null,this.computeGamma=!1,this.dynamicRangeAdjustment=!1,this.gamma=[],this.maxPercent=null,this.minPercent=null,this.numberOfStandardDeviations=null,this.outputMax=null,this.outputMin=null,this.sigmoidStrengthLevel=null,this.statistics=[],this.histograms=null,this.useGamma=!1,this.stretchType="none",this.type="raster-stretch"}readColorRamp(t){if(t)return (0,_rest_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_10__.fromJSON)(t)}writeStatistics(t,e,r){var o;null!=(o=t)&&o.length&&(Array.isArray(t[0])||(t=t.map((t=>[t.min,t.max,t.avg,t.stddev]))),e[r]=t)}readStretchType(t,e){let r=e.stretchType;return"number"==typeof r&&(r=_support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_9__.stretchTypeFunctionEnum[r]),_support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_9__.stretchTypeJSONDict.read(r)}clone(){return new d({stretchType:this.stretchType,outputMin:this.outputMin,outputMax:this.outputMax,useGamma:this.useGamma,computeGamma:this.computeGamma,statistics:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.statistics),gamma:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.gamma),sigmoidStrengthLevel:this.sigmoidStrengthLevel,numberOfStandardDeviations:this.numberOfStandardDeviations,minPercent:this.minPercent,maxPercent:this.maxPercent,colorRamp:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.colorRamp),histograms:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.histograms),dynamicRangeAdjustment:this.dynamicRangeAdjustment})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({types:_rest_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_10__.types,json:{write:!0}})],h.prototype,"colorRamp",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("colorRamp")],h.prototype,"readColorRamp",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{write:!0}})],h.prototype,"computeGamma",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{write:{target:"dra"},read:{source:"dra"}}})],h.prototype,"dynamicRangeAdjustment",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Number],json:{write:!0}})],h.prototype,"gamma",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],h.prototype,"maxPercent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],h.prototype,"minPercent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],h.prototype,"numberOfStandardDeviations",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{read:{source:"max"},write:{target:"max"}}})],h.prototype,"outputMax",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{read:{source:"min"},write:{target:"min"}}})],h.prototype,"outputMin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],h.prototype,"sigmoidStrengthLevel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{type:[[Number]],write:!0}})],h.prototype,"statistics",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],h.prototype,"histograms",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("statistics")],h.prototype,"writeStatistics",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{write:!0}})],h.prototype,"useGamma",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_9__.stretchTypeJSONDict.apiValues,json:{type:_support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_9__.stretchTypeJSONDict.jsonValues,write:_support_stretchRendererUtils_js__WEBPACK_IMPORTED_MODULE_9__.stretchTypeJSONDict.write}})],h.prototype,"stretchType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("stretchType",["stretchType"])],h.prototype,"readStretchType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__.enumeration)({rasterStretch:"raster-stretch"})],h.prototype,"type",void 0),h=d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.RasterStretchRenderer")],h);const y=h;


/***/ }),

/***/ 34808:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/VectorFieldRenderer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Color.js */ 28503);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry.js */ 61243);
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Graphic.js */ 99326);
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../symbols.js */ 58650);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/jsonMap.js */ 74856);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/lang.js */ 60161);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ 73358);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry/support/normalizeUtils.js */ 46010);
/* harmony import */ var _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../layers/support/rasterFunctions/vectorFieldUtils.js */ 24384);
/* harmony import */ var _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ClassBreaksRenderer.js */ 25938);
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/VisualVariablesMixin.js */ 1505);
/* harmony import */ var _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./support/ClassBreakInfo.js */ 15413);
/* harmony import */ var _visualVariables_RotationVariable_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./visualVariables/RotationVariable.js */ 93750);
/* harmony import */ var _visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./visualVariables/SizeVariable.js */ 74834);
/* harmony import */ var _visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./visualVariables/support/visualVariableUtils.js */ 7775);
/* harmony import */ var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../symbols/SimpleLineSymbol.js */ 34755);
/* harmony import */ var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../symbols/SimpleMarkerSymbol.js */ 85076);
/* harmony import */ var _symbols_support_utils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../symbols/support/utils.js */ 71185);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../geometry/Point.js */ 7309);
/* harmony import */ var _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../symbols/PictureMarkerSymbol.js */ 41001);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



























var u;
const z = new Set(["esriMetersPerSecond", "esriKilometersPerHour", "esriKnots", "esriFeetPerSecond", "esriMilesPerHour"]),
      Z = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__.JSONMap({
  beaufort_ft: "beaufort-ft",
  beaufort_km: "beaufort-km",
  beaufort_kn: "beaufort-kn",
  beaufort_m: "beaufort-m",
  beaufort_mi: "beaufort-mi",
  classified_arrow: "classified-arrow",
  ocean_current_kn: "ocean-current-kn",
  ocean_current_m: "ocean-current-m",
  simple_scalar: "simple-scalar",
  single_arrow: "single-arrow",
  wind_speed: "wind-barb"
}),
      b = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__.JSONMap({
  flow_from: "flow-from",
  flow_to: "flow-to"
});
let h = u = class extends (0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_18__.VisualVariablesMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_7__.JSONSupport) {
  constructor(e) {
    super(e), this.attributeField = "Magnitude", this.flowRepresentation = "flow-from", this.rotationType = "arithmetic", this.style = "single-arrow", this.symbolTileSize = 50, this.type = "vector-field";
  }

  readInputUnit(e, M) {
    return z.has(e) ? _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.unitKebabDict.fromJSON(e) : null;
  }

  readOutputUnit(e, M) {
    return z.has(e) ? _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.unitKebabDict.fromJSON(e) : null;
  }

  get styleRenderer() {
    const e = this.style,
          M = this.attributeField,
          i = this._createStyleRenderer(e);

    return i.field = M, i;
  }

  get sizeVariables() {
    const e = [];
    if (this.visualVariables) for (const M of this.visualVariables) "size" === M.type && e.push(M);

    if (0 === e.length) {
      const M = new _visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_21__.default({
        field: "Magnitude",
        minSize: .2 * this.symbolTileSize,
        maxSize: .8 * this.symbolTileSize
      });
      this.visualVariables ? this.visualVariables.push(M) : this._set("visualVariables", [M]), e.push(M);
    }

    return e;
  }

  get rotationVariables() {
    const e = [];
    if (this.visualVariables) for (const M of this.visualVariables) "rotation" === M.type && e.push(M);

    if (0 === e.length) {
      const M = new _visualVariables_RotationVariable_js__WEBPACK_IMPORTED_MODULE_20__.default({
        field: "Direction",
        rotationType: this.rotationType
      });
      this.visualVariables ? this.visualVariables.push(M) : this._set("visualVariables", [M]), e.push(M);
    }

    return e;
  }

  clone() {
    return new u({
      attributeField: this.attributeField,
      flowRepresentation: this.flowRepresentation,
      rotationType: this.rotationType,
      symbolTileSize: this.symbolTileSize,
      style: this.style,
      visualVariables: (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_8__.clone)(this.visualVariables),
      inputUnit: this.inputUnit,
      outputUnit: this.outputUnit
    });
  }

  getGraphicsFromPixelData(e, M = !1, t = []) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var a;
      const I = new Array(),
            g = (0,_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.getUnitConversionFactor)(_this.inputUnit, _this.outputUnit),
            o = (null == (a = _this.rotationVariables[0]) ? void 0 : a.rotationType) || _this.rotationType,
            s = M ? (0,_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.convertVectorFieldData)(e.pixelBlock, "vector-uv", o, g) : (0,_layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.convertVectorFieldUnit)(e.pixelBlock, "vector-magdir", g);
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__.isNone)(s)) return I;
      const A = e.extent,
            l = s.mask && s.mask.length > 0;
      let w = 0;
      const y = (A.xmax - A.xmin) / s.width,
            C = (A.ymax - A.ymin) / s.height;

      for (let r = 0; r < s.height; r++) for (let e = 0; e < s.width; e++, w++) {
        let M = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_26__.default({
          x: A.xmin + e * y + y / 2,
          y: A.ymax - r * C - C / 2,
          spatialReference: A.spatialReference
        });
        M = (yield (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_15__.normalizeCentralMeridian)(M))[0];
        const a = t.some(e => e.intersects(M));

        if ((!l || s.mask[w]) && !a) {
          const e = {
            Magnitude: s.pixels[0][w],
            Direction: s.pixels[1][w]
          },
                t = new _Graphic_js__WEBPACK_IMPORTED_MODULE_4__.default({
            geometry: {
              type: "point",
              x: M.x,
              y: M.y,
              spatialReference: A.spatialReference
            },
            attributes: e
          });
          t.symbol = _this._getVisualVariablesAppliedSymbol(t), I.push(t);
        }
      }

      return I;
    })();
  }

  getSymbol(e, M) {}

  getSymbolAsync(e, M) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {})();
  }

  getSymbols() {
    return [];
  }

  getClassBreakInfos() {
    var e;
    return null == (e = this.styleRenderer) ? void 0 : e.classBreakInfos;
  }

  getDefaultSymbol() {
    var e;
    return null == (e = this.styleRenderer) ? void 0 : e.defaultSymbol;
  }

  _getDefaultSymbol(e) {
    return new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_24__.default({
      path: "M14,32 14,18 9,23 16,3 22,23 17,18 17,32 z",
      outline: new _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_23__.default({
        width: 0
      }),
      size: 20,
      color: e || new _Color_js__WEBPACK_IMPORTED_MODULE_2__.default([0, 92, 230])
    });
  }

  _getVisualVariablesAppliedSymbol(e) {
    if (!e) return;
    let M = this.styleRenderer && this.styleRenderer.getSymbol(e);
    M = M.clone();
    const i = this.sizeVariables,
          t = this.rotationVariables;

    if (i && i.length && this.sizeVariables.forEach(i => (0,_symbols_support_utils_js__WEBPACK_IMPORTED_MODULE_25__.applySizesToSymbol)(M, (0,_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_22__.getAllSizes)([i], e))), t && t.length) {
      const i = "flow-to" === this.flowRepresentation === ("ocean-current-kn" === this.style || "ocean-current-m" === this.style) ? 0 : 180;
      e.attributes.Direction = e.attributes.Direction + i, this.rotationVariables.forEach(i => (0,_symbols_support_utils_js__WEBPACK_IMPORTED_MODULE_25__.applyRotationToSymbol)(M, (0,_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_22__.getRotationAngle)(i, e), i.axis));
    }

    return M;
  }

  _createStyleRenderer(e) {
    let M = {
      defaultSymbol: this._getDefaultSymbol(),
      classBreakInfos: []
    };

    switch (e) {
      case "single-arrow":
        M = this._createSingleArrowRenderer();
        break;

      case "beaufort-kn":
        M = this._createBeaufortKnotsRenderer();
        break;

      case "beaufort-m":
        M = this._createBeaufortMeterRenderer();
        break;

      case "beaufort-ft":
        M = this._createBeaufortFeetRenderer();
        break;

      case "beaufort-mi":
        M = this._createBeaufortMilesRenderer();
        break;

      case "beaufort-km":
        M = this._createBeaufortKilometersRenderer();
        break;

      case "ocean-current-m":
        M = this._createCurrentMeterRenderer();
        break;

      case "ocean-current-kn":
        M = this._createCurrentKnotsRenderer();
        break;

      case "simple-scalar":
        M = this._createSimpleScalarRenderer();
        break;

      case "wind-barb":
        M = this._createWindBarbsRenderer();
        break;

      case "classified-arrow":
        M = this._createClassifiedArrowRenderer();
    }

    return new _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_17__.default(M);
  }

  _createSingleArrowRenderer() {
    return {
      defaultSymbol: this._getDefaultSymbol()
    };
  }

  _createBeaufortKnotsRenderer() {
    const e = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63],
          i = [[40, 146, 199], [89, 162, 186], [129, 179, 171], [160, 194, 155], [191, 212, 138], [218, 230, 119], [250, 250, 100], [252, 213, 83], [252, 179, 102], [250, 141, 52], [247, 110, 42], [240, 71, 29]];
    return {
      defaultSymbol: this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_2__.default([214, 47, 39])),
      classBreakInfos: this._getClassBreaks(e, i)
    };
  }

  _createBeaufortMeterRenderer() {
    const e = [0, .2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7],
          i = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]];
    return {
      defaultSymbol: this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_2__.default([214, 47, 39])),
      classBreakInfos: this._getClassBreaks(e, i)
    };
  }

  _createBeaufortFeetRenderer() {
    const e = this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_2__.default([214, 47, 39]));

    let i = [0, .2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const t = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]],
          a = 3.28084;
    i = i.map(e => e * a);
    return {
      defaultSymbol: e,
      classBreakInfos: this._getClassBreaks(i, t)
    };
  }

  _createBeaufortMilesRenderer() {
    const e = this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_2__.default([214, 47, 39]));

    let i = [0, .2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const t = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]],
          a = 2.23694;
    i = i.map(e => e * a);
    return {
      defaultSymbol: e,
      classBreakInfos: this._getClassBreaks(i, t)
    };
  }

  _createBeaufortKilometersRenderer() {
    const e = this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_2__.default([214, 47, 39]));

    let i = [0, .2, 1.8, 3.3, 5.4, 8.5, 11, 14.1, 17.2, 20.8, 24.4, 28.6, 32.7];
    const t = [[69, 117, 181], [101, 137, 184], [132, 158, 186], [162, 180, 189], [192, 204, 190], [222, 227, 191], [255, 255, 191], [255, 220, 161], [250, 185, 132], [245, 152, 105], [237, 117, 81], [232, 21, 21]],
          a = 3.6;
    i = i.map(e => e * a);
    return {
      defaultSymbol: e,
      classBreakInfos: this._getClassBreaks(i, t)
    };
  }

  _createCurrentMeterRenderer() {
    const e = [0, .5, 1, 1.5, 2],
          i = [[78, 26, 153], [179, 27, 26], [202, 128, 26], [177, 177, 177]];
    return {
      defaultSymbol: this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_2__.default([177, 177, 177])),
      classBreakInfos: this._getClassBreaks(e, i)
    };
  }

  _createCurrentKnotsRenderer() {
    const e = [0, .25, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
          i = [[0, 0, 0], [0, 37, 100], [78, 26, 153], [151, 0, 100], [179, 27, 26], [177, 78, 26], [202, 128, 26], [177, 179, 52], [177, 177, 177]];
    return {
      defaultSymbol: this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_2__.default([177, 177, 177])),
      classBreakInfos: this._getClassBreaks(e, i)
    };
  }

  _createClassifiedArrowRenderer() {
    var e;

    const i = this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_2__.default([56, 168, 0]));

    let t = [0, 1e-6, 3.5, 7, 10.5, 14];

    if (null != (e = this.sizeVariables) && e.length) {
      const e = this.sizeVariables[0].minDataValue,
            M = this.sizeVariables[0].maxDataValue;

      if (e && M) {
        const i = (M - e) / 5;
        t = Array.from(Array(6).keys()).map(M => e + i * M);
      }
    }

    const a = [[56, 168, 0], [139, 309, 0], [255, 255, 0], [255, 128, 0], [255, 0, 0]];
    return {
      defaultSymbol: i,
      classBreakInfos: this._getClassBreaks(t, a)
    };
  }

  _createSimpleScalarRenderer() {
    return {
      defaultSymbol: _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_27__.default.fromJSON({
        imageData: "iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAQAAABLVLlLAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAACqjSMyAAAACXBIWXMAAABIAAAASABGyWs+AAAC3ElEQVRIx9XXvW4cVRQH8N982btpsIREJECyiCXsxX4DKh6AliqGKCBBE2SlwlHgAbBD/AKmyEYUeQ1KahPZSZQvBCkQLTHZ7KGY8Xodz4w3a1NwbzVzz/znfJ//zbStVC5q3icKak9GAs2QIdDx3PtW/S011NW3p+M5Eomh11ipTIKe6+4LQzHaQ+G+63pIZNJJQXMpljwTwj1brpgx5w1zZlyx5Z4QnllEIm2xeeSUHBf0hV0bejo1Uh09G3aFvgXk7cCJFBc9EdaRVuHJJaOdKyTV2TVhYLMduNR0Q9gxL5GaaTDw8GzejrDRBpxWoGsySRW0dttKuattwNkIlFw2YXgzOdYq4Ox49PlM+JrKd5OusjTWhBuVxUfMX/KXXZ3WEmkuqa67wspR4BTbwtKr/5u4fFgStse/T7EifFPnnYl9zPq4vmUOPrRndgoHjDti1gOPqlyXoifcRNGQzUd31lDyfHmob1Gp35vSr+P6vilcQ5Egtyd8YF/ySg9NhPM+9M/IOaHwp5+PSZayXTvCogEUwlatC3J8LLwYtcWB8EuDXQVuCkV5/B4eNHb7wGBs87LBDS+xjdVSn09wq1G8dFM+9tSUhIGneLvUdniKxKpTYljCpu3j7rVWlHj/P23v4NPGUEyeCQnexe9lJjzEQqMjJs+EzNAX6B98dBZVRmroJx95x/A/6gln18EyfCUsl+qdXb/tjvfbw+mwforpUOBz4XLVoBwAn3aWnfeH246NyBXhrq7TTN5lNSP9RkU+puUJm3W2Tsdq0nZWM07srk7MwQrZSRysjjGWBLRJNsNbfj2JMR4AbxpU1XLAb9Mxfpsq5EjMuuiR8L0JiHOOBX3hiUvOmavN0nMueSzcceFk0BK4pMqLo7vDD1Z0qrtDx7Itt4Xwm9UqbMmk8S0Dtuzb2pvOU99Z1nLTOfleNmvfZfP2pYZmPfajwosKdDBNpacNpVGGsWX9CyDI8Xq/Sj6QAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE0LTExLTEwVDAzOjE3OjU4LTA1OjAwF+tHyQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0xMS0xMFQwMzoxNzo1OC0wNTowMGa2/3UAAAAASUVORK5CYII=",
        height: 20,
        width: 20,
        type: "esriPMS",
        angle: 0
      })
    };
  }

  _createWindBarbsRenderer() {
    const e = Array.from(Array(31).keys()).map(e => 5 * e),
          M = [{
      range: "0-5",
      path: "M20 20 M5 20 A15 15 0 1 0 35 20 A15 15 0 1 0 5 20 M20 20 M10 20 A10 10 0 1 0 30 20 A10 10 0 1 0 10 20",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTIwIDIwIE01IDIwIEExNSAxNSAwIDEgMCAzNSAyMCBBMTUgMTUgMCAxIDAgNSAyMCBNMjAgMjAgTTEwIDIwIEExMCAxMCAwIDEgMCAzMCAyMCBBMTAgMTAgMCAxIDAgMTAgMjAiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "5-10",
      path: "M25 0 L25 40 M25 35 L17.5 37.5",
      imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "10-15",
      path: "M25 0 L25 40 L10 45 L25 40",
      imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNyA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "15-20",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L17.5 37.5",
      imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjEyIDAgMTUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxNy41IDM3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "20-25",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40",
      imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
    }, {
      range: "25-30",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L17.5 32.5",
      imageData: "PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjkgMCAyNiA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjUgMCBMMjUgNDAgTDEwIDQ1IEwyNSA0MCBNMjUgMzUgTDEwIDQwIEwyNSAzNSBNMjUgMzAgTDE3LjUgMzIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "30-35",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "35-40",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "40-45",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "45-50",
      path: "M25 0 L25 40 L10 45 L25 40 M25 35 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0NiI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0NSBMMjUgNDAgTTI1IDM1IEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "50-55",
      path: "M25 0 L25 40 L10 40 L25 35",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "55-60",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L17.5 32.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxNy41IDMyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "60-65",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "65-70",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L17.5 27.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxNy41IDI3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "70-75",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "75-80",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L17.5 22.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxNy41IDIyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "80-85",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "85-90",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L17.5 17.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxNy41IDE3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "90-95",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "95-100",
      path: "M25 0 L25 40 L10 40 L25 35 M25 30 L10 35 L25 30 M25 25 L10 30 L25 25 M25 20 L10 25 L25 20 M25 15 L10 20 L25 15 M25 10 L17.5 12.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTTI1IDMwIEwxMCAzNSBMMjUgMzAgTTI1IDI1IEwxMCAzMCBMMjUgMjUgTTI1IDIwIEwxMCAyNSBMMjUgMjAgTTI1IDE1IEwxMCAyMCBMMjUgMTUgTTI1IDEwIEwxNy41IDEyLjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }, {
      range: "100-105",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "105-110",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L17.5 27.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDE3LjUgMjcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "110-115",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
    }, {
      range: "115-120",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L17.5 22.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDE3LjUgMjIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "120-125",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
    }, {
      range: "125-130",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L17.5 17.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDE3LjUgMTcuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "130-135",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
    }, {
      range: "135-140",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDE3LjUgMTIuNSIgc3R5bGU9InN0cm9rZTpyZ2IoMCwwLDApO3N0cm9rZS13aWR0aDoxLjUiLz4KIDwvc3ZnPg=="
    }, {
      range: "140-145",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IiBzdHlsZT0ic3Ryb2tlOnJnYigwLDAsMCk7c3Ryb2tlLXdpZHRoOjEuNSIvPgogPC9zdmc+"
    }, {
      range: "145-150",
      path: "M25 0 L25 40 L10 40 L25 35 L10 35 L25 30 M25 25 L10 30 M25 25 M25 20 L10 25 M25 20 M25 15 L10 20 M25 15 M25 10 L17.5 12.5",
      imageData: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZpZXdCb3g9IjkgMCAyNiA0MSI+CiAgPHBhdGggZD0iTTI1IDAgTDI1IDQwIEwxMCA0MCBMMjUgMzUgTDEwIDM1IEwyNSAzMCBNMjUgMjUgTDEwIDMwIE0yNSAyNSBNMjUgMjAgTDEwIDI1IE0yNSAyMCBNMjUgMTUgTDEwIDIwIE0yNSAxNSBNMjUgMTAgTDEwIDE1IE0yNSAxMCBNMjUgNSBMMTcuNSA3LjUiIHN0eWxlPSJzdHJva2U6cmdiKDAsMCwwKTtzdHJva2Utd2lkdGg6MS41Ii8+CiA8L3N2Zz4="
    }],
          i = _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_27__.default.fromJSON({
      imageData: "iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAQAAADtq6NDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEY0lEQVRIx5XXWWxWRRQH8N+d+31tUdGAVjGglYJABFEBY91jfDAg7piYaFTccA++uMQEFRcSXlATtxiXqMQt4G4iisYl0ai4sIQYtVFZ1KIFKdTS0l4f7vRCS5fPebozc+bM/2z/Mzcx0AgSiUxXnKfIdMn875FIhX53U2n/B/s+kKM4UINTjTBZImixxnrv+9a2iL6zEoUBXcoudrWj/OtHm3wt02lfU9Qao9OnHvIhgmww84MEl1qnxfNmGrqHxAizLdPpC6chGcAxKGGcL+30gOERf1BSpUqVslQSV8d5ReZFe8VQ9avufJn31cWwlJV7iafKStGOE/1qvfH9qUxxu8ydUdmuSKbGO8YUdT2inKLG69pM70tliktl5qIkCAJGmusDG7Vqsc0WjZa4UBlBiA5YZIcjYzB7qDtH5kaUJFLs7RGZTZ42W4PRRmtwvbdt1+wGiaS4drEtDttdZYIDNVuAclR3vA3+dI3qHqmVSy7U6Tv1MScCPvPR7nIpFlsdCy3FdTLPGhK92e2CUITjMJ9ocwKxnsZqc3O3JwMma3d6UVLnyVxB4aXemZqvPqLdpJhW3KVVbY4yYImPo6M5Urv50fj+0z/FG9YaEiENs8UtMfXUaTeTePNHlhXfA1UU+2lyD1Il3Gtt9+adfpNG7dNlpg2U/T3KYLZ2dUWFdTgp3/rQ4sK973qnInV5TIf40x3dhvrJPBiqyWUo4wAtLqhQYS71qK+QKOFRywmGK/kpikzV6WMKhh58vGWs4TIJNjiEYLIuP8Tt4/zmLyqk+AyrJSbF+Qq1DgqRUPMxyl+9q3IQhX/rMCJ6tEunriDs1oSyQZKlr9AkhT2ZIARbJfaJS1vtVbHB+Rgi0RK/y1q1BWsEEyLoz40xtGKcARPVWB1BTPO7f4LNtpkUl1aoMbViLyZo0GRjPD3BxnxjqXeLYlvhqYrzMMG3HoyJXa3JjfnGlbYYFlP7Jh3qKsKY4hQ7TY0nG+xwRL61n63mxHtqNHosigyMLmClNwvuecFnOZB88nNBDzNkzhxEZaKMBVoKapggMzvHHXBEpNSSFAvtcFRsVn0bW8LlMmcXs+c0Kne3gRR32+zg4uXwjC6zit6Wt4a8LXVfcp/MtQXHn2ynGbuCmb8GvvFeJLEE82ReU9/n6+dkq2x3buG9Wn94smcgAw631RPR7BTH+kbmHReZoEpOdEe7zWqZl40s0JWs9Hmv7hjBHqPDwsjGKVJnWWqjbdZp1KhJi0aPmxYZsIRhlttgeF+Jlke41QcOQKoqilSb6HJzSvNG3G/UoWnxwsmt+sVaYwd63dRbqdnMyCPVeyRPvpYgdavM22oGKoMUVRbJfOWMwidJ8Zzb1UvmWK/VVUXzHaTjjrVYh1897HT7xxYEVUaa5SWb/WO+YUWa9SrwvigzM8YlzlYv2GSdVCYxxlBtVnnFq5olwp5/BEk/OLsf5LUmG2+inRJdVvjZ97ZH9/zP34ug1O91pf4p+D+JYBpvrKxfbwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0xMS0xMFQwMzoxMjowOS0wNTowMB9ViV0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMTEtMTBUMDM6MTI6MDktMDU6MDBuCDHhAAAAAElFTkSuQmCC",
      height: 20,
      width: 20,
      type: "esriPMS",
      angle: 0
    }),
          t = e.map((t, a) => {
      let I;
      if (a !== e.length - 1) if (0 === a) I = {
        minValue: t,
        maxValue: e[a + 1],
        symbol: i
      };else {
        const i = _symbols_PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_27__.default.fromJSON({
          type: "esriPMS",
          imageData: M[a].imageData,
          contentType: "image/svg+xml",
          height: 32,
          width: 32,
          angle: 0
        });
        I = {
          minValue: t,
          maxValue: e[a + 1],
          symbol: i
        };
      }
      return new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_19__.default(I);
    });
    return {
      defaultSymbol: i,
      classBreakInfos: t
    };
  }

  _getClassBreaks(e, i) {
    return i.map((i, t) => new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_19__.default({
      minValue: e[t],
      maxValue: e[t + 1],
      symbol: this._getDefaultSymbol(new _Color_js__WEBPACK_IMPORTED_MODULE_2__.default(i))
    }));
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: String,
  json: {
    write: !0
  }
})], h.prototype, "attributeField", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: b.apiValues,
  json: {
    type: b.jsonValues,
    read: {
      reader: b.read
    },
    write: {
      writer: b.write
    }
  }
})], h.prototype, "flowRepresentation", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: ["geographic", "arithmetic"],
  json: {
    write: !0
  }
})], h.prototype, "rotationType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: Z.apiValues,
  json: {
    type: Z.jsonValues,
    read: {
      reader: Z.read
    },
    write: {
      writer: Z.write
    }
  }
})], h.prototype, "style", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  json: {
    write: !0
  }
})], h.prototype, "symbolTileSize", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.unitKebabDict.apiValues,
  json: {
    type: _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.unitKebabDict.jsonValues,
    write: {
      writer: _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.unitKebabDict.write
    }
  }
})], h.prototype, "inputUnit", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__.reader)("inputUnit")], h.prototype, "readInputUnit", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.unitKebabDict.apiValues,
  json: {
    type: _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.unitKebabDict.jsonValues,
    read: {
      reader: _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.unitKebabDict.read
    },
    write: {
      writer: _layers_support_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_16__.unitKebabDict.write
    }
  }
})], h.prototype, "outputUnit", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__.reader)("outputUnit")], h.prototype, "readOutputUnit", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_12__.enumeration)({
  vectorField: "vector-field"
})], h.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_17__.default
})], h.prototype, "styleRenderer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: _visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_21__.default
})], h.prototype, "sizeVariables", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({
  type: _visualVariables_RotationVariable_js__WEBPACK_IMPORTED_MODULE_20__.default
})], h.prototype, "rotationVariables", null), h = u = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__.subclass)("esri.renderers.VectorFieldRenderer")], h);
const E = h;


/***/ }),

/***/ 37987:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/ColormapInfo.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ 28503);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(){super(...arguments),this.value=null,this.label=null,this.color=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],c.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__.default,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__.Integer],write:!0}})],c.prototype,"color",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.support.ColormapInfo")],c);const l=c;


/***/ }),

/***/ 52291:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/rasterRendererHelper.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createClassBreaksRenderer": () => (/* binding */ J),
/* harmony export */   "createColorRamp": () => (/* binding */ G),
/* harmony export */   "createColormapRenderer": () => (/* binding */ F),
/* harmony export */   "createDefaultRenderer": () => (/* binding */ j),
/* harmony export */   "createShadedReliefRenderer": () => (/* binding */ A),
/* harmony export */   "createStretchRenderer": () => (/* binding */ V),
/* harmony export */   "createUVRenderer": () => (/* binding */ q),
/* harmony export */   "createVectorFieldRenderer": () => (/* binding */ X),
/* harmony export */   "getBandNames": () => (/* binding */ L),
/* harmony export */   "getClassField": () => (/* binding */ E),
/* harmony export */   "getDefaultBandCombination": () => (/* binding */ S),
/* harmony export */   "getDefaultInterpolation": () => (/* binding */ T),
/* harmony export */   "getField": () => (/* binding */ P),
/* harmony export */   "getSupportedRendererTypes": () => (/* binding */ k),
/* harmony export */   "getWellKnownBandIndexes": () => (/* binding */ B),
/* harmony export */   "isAnimatedFlowRendererSupported": () => (/* binding */ K),
/* harmony export */   "isClassBreaksSupported": () => (/* binding */ D),
/* harmony export */   "isColormapRendererSupported": () => (/* binding */ W),
/* harmony export */   "isShadedReliefRendererSupported": () => (/* binding */ U),
/* harmony export */   "isSingleBand8BitRasterWithStats": () => (/* binding */ _),
/* harmony export */   "isUVRendererSupported": () => (/* binding */ z),
/* harmony export */   "isVectorFieldRendererSupported": () => (/* binding */ H),
/* harmony export */   "normalizeRendererJSON": () => (/* binding */ Z)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Color.js */ 28503);
/* harmony import */ var _rasterRenderers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../rasterRenderers.js */ 15079);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/unitUtils.js */ 55612);
/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layers/support/Field.js */ 66536);
/* harmony import */ var _layers_support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layers/support/RasterInfo.js */ 42492);
/* harmony import */ var _AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AuthoringInfo.js */ 33617);
/* harmony import */ var _ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ClassBreakInfo.js */ 15413);
/* harmony import */ var _colorRampUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./colorRampUtils.js */ 29122);
/* harmony import */ var _UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UniqueValueInfo.js */ 65654);
/* harmony import */ var _rest_support_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../rest/support/AlgorithmicColorRamp.js */ 64717);
/* harmony import */ var _rest_support_ClassBreaksDefinition_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../rest/support/ClassBreaksDefinition.js */ 94857);
/* harmony import */ var _rest_support_generateRendererUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../rest/support/generateRendererUtils.js */ 54818);
/* harmony import */ var _rest_support_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../rest/support/MultipartColorRamp.js */ 69354);
/* harmony import */ var _RasterStretchRenderer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../RasterStretchRenderer.js */ 62857);
/* harmony import */ var _UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../UniqueValueRenderer.js */ 96337);
/* harmony import */ var _RasterColormapRenderer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../RasterColormapRenderer.js */ 8704);
/* harmony import */ var _RasterShadedReliefRenderer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../RasterShadedReliefRenderer.js */ 26620);
/* harmony import */ var _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ClassBreaksRenderer.js */ 25938);
/* harmony import */ var _VectorFieldRenderer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../VectorFieldRenderer.js */ 34808);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const w=.25,x=_rest_support_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_13__.default.fromJSON({type:"multipart",colorRamps:[{fromColor:[0,0,255],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]}]}),M=_rest_support_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_13__.default.fromJSON(_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_8__.PREDEFINED_JSON_COLOR_RAMPS[0]),R=new Set(["scientific","standard-time","vector-uv","vector-magdir","vector-u","vector-v","vector-magnitude","vector-direction"]);function j(e,n){const{attributeTable:r,colormap:l}=e;if(H(e)){const n=X(e);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(n))return n}if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(l)){const n=F(e);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(n))return n}if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(r)){const n=q(e);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(n))return n}return V(e,n)}function k(e){const t=["raster-stretch"];return W(e)&&t.push("raster-colormap"),z(e)&&t.push("unique-value"),D(e)&&t.push("class-breaks"),U(e)&&t.push("raster-shaded-relief"),H(e)&&t.push("vector-field"),K(e)&&t.push("animated-flow"),t}function T(e,t,n){const r=["nearest","bilinear","cubic","majority"].find((e=>e===(null==n?void 0:n.toLowerCase())));if("Map"===t)return null!=r?r:"bilinear";if("standard-time"===e.dataType)return null!=r?r:"nearest";return"thematic"===e.dataType||e.attributeTable||e.colormap?"nearest"===r||"majority"===r?r:"nearest":null!=r?r:"bilinear"}function V(e,r){var l,a,o,s;e=I(e,null==r?void 0:r.variableName);const{bandCount:i}=e;let{bandIds:u,stretchType:m}=r||{};null!=(l=u)&&l.some((e=>e>=i))&&(u=null);let c=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.unwrap)(e.statistics),f=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.unwrap)(e.histograms);var p;i>1?(u=null!=(p=u)&&p.length?u:S(e),c=null==c?null:u.map((e=>c[e])),f=null==f?null:u.map((e=>f[e]))):u=[0];null==m&&(m=O(e));let d=!1;switch(m){case"none":d=!1;break;case"percent-clip":d=!(null!=(a=f)&&a.length);break;default:d=!(null!=(o=c)&&o.length)}const{dataType:b}=e,v=1===(null==(s=u)?void 0:s.length)&&R.has(b)?x:null,y=new _RasterStretchRenderer_js__WEBPACK_IMPORTED_MODULE_14__.default({stretchType:m,dynamicRangeAdjustment:d,colorRamp:v,outputMin:0,outputMax:255,gamma:1===u.length?[1]:[1,1,1],useGamma:!1});return"percent-clip"===m?y.maxPercent=y.minPercent=w:"standard-deviation"===m&&(y.numberOfStandardDeviations=2),!d&&((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e.multidimensionalInfo)||null!=r&&r.includeStatisticsInStretch)&&("percent-clip"===m?y.histograms=f:"min-max"!==m&&"standard-deviation"!==m||(y.statistics=c)),y}function I(e,r){if(null==r)return e;let l=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.unwrap)(e.statistics),o=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.unwrap)(e.histograms);const{multidimensionalInfo:s}=e;if(r&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(s)){const{statistics:e,histograms:t}=s.variables.find((e=>e.name===r));null!=e&&e.length&&(l=e),null!=t&&t.length&&(o=t)}return _layers_support_RasterInfo_js__WEBPACK_IMPORTED_MODULE_5__.default.fromJSON({...e.toJSON(),statistics:l,histograms:o})}function S(e){const t=e.bandCount;if(1===t)return null;if(2===t)return[0];const n=e.keyProperties&&e.keyProperties.BandProperties;let r;if(n&&n.length===t){const{red:e,green:t,blue:l,nir:a}=B(n);null!=e&&null!=t&&null!=l?r=[e,t,l]:null!=a&&null!=e&&null!=t&&(r=[a,e,t])}return!r&&t>=3&&(r=[0,1,2]),r}function L(e,t){var n;const r=e.keyProperties&&e.keyProperties.BandProperties;return(t=null!=(n=t)&&n.length?t:Array.from(Array(e.bandCount).keys())).map((t=>r&&r.length===e.bandCount&&r[t]&&r[t].BandName||"band_"+(t+1)))}function B(e){const t={};for(let r=0;r<e.length;r++){var n;const l=e[r],a=null==(n=l.BandName)?void 0:n.toLowerCase();if("red"===a)t.red=r;else if("green"===a)t.green=r;else if("blue"===a)t.blue=r;else if("nearinfrared"===a||"nearinfrared_1"===a||"nir"===a)t.nir=r;else if(l.WavelengthMax&&l.WavelengthMin){const e=l.WavelengthMin,n=l.WavelengthMax;null==t.blue&&e>=410&&e<=480&&n>=480&&n<=540?t.blue=r:null==t.green&&e>=490&&e<=560&&n>=560&&n<=610?t.green=r:null==t.red&&e>=595&&e<=670&&n>=660&&n<=730?t.red=r:null==t.nir&&e>=700&&e<=860&&n>=800&&n<=950&&(t.nir=r)}}return t}function O(e){let n="percent-clip";const{pixelType:r,dataType:l,histograms:a,statistics:o}=e;return"u8"!==r||"processed"!==l&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(a)&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(o)?"u8"===r||"elevation"===l||R.has(l)?n="min-max":(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(a)?n="percent-clip":(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(o)&&(n="min-max",n="min-max"):n="none",n}function q(n,r,l,a){if(!z(n,r))return null;const{attributeTable:s,statistics:i}=n,c=E(s,r),f=P(s,"red"),p=P(s,"green"),d=P(s,"blue"),h=new _AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_6__.default,v=[],y=new Set,g=!!(f&&p&&d);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(s))s.features.forEach((t=>{const n=t.attributes[c.name];if(!y.has(t.attributes[c.name])&&null!=n){y.add(n);const r=g&&("single"===f.type||"double"===f.type)&&("single"===p.type||"double"===p.type)&&("single"===d.type||"double"===d.type)&&!s.features.some((e=>e.attributes[f.name]>1||e.attributes[p.name]>1||e.attributes[d.name]>1)),l=r?255:1;v.push(new _UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_9__.default({value:t.attributes[c.name],label:t.attributes[c.name]+"",symbol:{type:"simple-fill",style:"solid",outline:null,color:new _Color_js__WEBPACK_IMPORTED_MODULE_0__.default(g?[t.attributes[f.name]*l,t.attributes[p.name]*l,t.attributes[d.name]*l,1]:[0,0,0,0])}}))}}));else if(null!=i&&i[0])for(let t=i[0].min;t<=i[0].max;t++)v.push(new _UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_9__.default({value:t,label:t.toString(),symbol:{type:"simple-fill",style:"solid",outline:null,color:new _Color_js__WEBPACK_IMPORTED_MODULE_0__.default([0,0,0,0])}}));if(v.sort(((e,t)=>e.value&&"string"==typeof e.value.valueOf()?0:e.value>t.value?1:-1)),!g){const t=(0,_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_8__.convertColorRampToColormap)(M,v.length);v.forEach(((n,r)=>n.symbol.color=new _Color_js__WEBPACK_IMPORTED_MODULE_0__.default(t[r].slice(1,4)))),h.colorRamp=M}if(l||a){const t=l||(0,_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_8__.convertColorRampToColormap)(a,v.length).map((e=>e.slice(1)));v.forEach(((n,r)=>n.symbol.color=new _Color_js__WEBPACK_IMPORTED_MODULE_0__.default(t[r]))),h.colorRamp=a}return new _UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_15__.default({field:c.name,uniqueValueInfos:v,authoringInfo:h})}function E(e,n,r){let a;return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e)?(a=n?e.fields.find((e=>n.toLowerCase()===e.name.toLowerCase())):N(e.fields),a||(r||(a=e.fields.find((e=>"string"===e.type))),a||(a=P(e,"value")))):a=new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_4__.default({name:"value"}),a}function N(e){let t;for(let n=0;n<e.length;n++){const r=e[n].name.toLowerCase();if("string"===e[n].type){if(r.startsWith("class")){t=e[n];break}null==t&&(r.endsWith("name")||r.endsWith("type"))&&(t=e[n])}}return t}function P(e,n){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e)?e.fields.find((e=>e.name.toLowerCase()===n)):null}function z(e,n){const{attributeTable:r,bandCount:l}=e;if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(r)&&_(e))return!0;if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(r)||l>1)return!1;if(n){if(null==r.fields.find((e=>e.name.toLowerCase()===n.toLowerCase())))return!1}return!0}function W(e){const{bandCount:n,colormap:r}=e;return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(r)&&r.length&&1===n}function F(e){if(!W(e))return null;let r;const{attributeTable:l,colormap:a}=e;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(l)){const e=P(l,"value"),t=E(l,null,!0);"string"===t.type&&(r={},l.features.forEach((n=>{const l=n.attributes;r[l[e.name]]=t?l[t.name]:l[e.name]})))}return _RasterColormapRenderer_js__WEBPACK_IMPORTED_MODULE_16__.default.createFromColormap((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.unwrap)(a),r)}function U(e){return"elevation"===e.dataType}function A(e,t){var n;if(!U(e))return null;const{extent:l}=e,a=l.width*(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__.getMetersPerUnitForSR)(l.spatialReference);return t=null!=(n=t)?n:"multi-directional",new _RasterShadedReliefRenderer_js__WEBPACK_IMPORTED_MODULE_17__.default({hillshadeType:t,scalingType:a>5e6?"adjusted":"none"})}function D(e){const{attributeTable:n,bandCount:r}=e;return 1===r&&((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(n)||(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e.histograms))}function J(e,n){e=I(e,null==n?void 0:n.variableName);const{attributeTable:r}=e;if(!D(e))return null;const l=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e.histograms)?e.histograms[0]:null,a=(null==n?void 0:n.numClasses)||5,i=new _AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_6__.default({classificationMethod:null==n?void 0:n.classificationMethod,colorRamp:null==n?void 0:n.colorRamp});let m=(null==n?void 0:n.field)||"value";const c=[],d=[],h=1e3,b=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(r),v=b&&r.fields.find((e=>"count"===e.name.toLowerCase())),y=b&&r.fields.find((e=>e.name.toLowerCase()===m.toLowerCase()));if(y&&v){m=y.name;const e=r.features.length;let t=0;r.features.forEach((n=>t+=n.attributes[v.name]/e)),r.features.forEach((n=>{const r=n.attributes[y.name],l=n.attributes[v.name];if(l>0){d.push(l);const n=Math.max(1,Math.round(l/e/t*h));for(let e=0;e<n;e++)c.push(r)}}))}else{const{pixelType:t}=e,n=(l.max-l.min)/l.size,r=t.indexOf("s")>-1||t.indexOf("u")>-1,a=r&&1===n?Math.floor(l.min+.5):l.min,o=r&&1===n?Math.floor(l.max-.5):l.max,s=l.size;let i=0;l.counts.forEach((e=>i+=e/s)),l.counts.forEach(((e,t)=>{if(e>0){d.push(e);const r=Math.max(1,Math.round(e/s/i*h)),u=0===t?a:t===s-1?o:l.min+n*(t+.5);for(let e=0;e<r;e++)c.push(u)}}))}const C=(null==n?void 0:n.classificationMethod)||"natural-breaks",w=(0,_rest_support_generateRendererUtils_js__WEBPACK_IMPORTED_MODULE_12__.createGenerateRendererClassBreaks)({values:c,valueFrequency:d,normalizationTotal:null,definition:new _rest_support_ClassBreaksDefinition_js__WEBPACK_IMPORTED_MODULE_11__.default({classificationMethod:C,breakCount:a,definedInterval:null==n?void 0:n.definedInterval})});let M=null==n?void 0:n.colors;if(!M){const e=(null==n?void 0:n.colorRamp)||x;i.colorRamp=e;const t=(0,_colorRampUtils_js__WEBPACK_IMPORTED_MODULE_8__.convertColorRampToColormap)(e,w.classBreaks.length,!0);M=t.map((e=>e.slice(1)))}const R=w.classBreaks.map(((e,t)=>new _ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_7__.default({minValue:e.minValue,maxValue:e.maxValue,label:e.label,symbol:{type:"simple-fill",color:M[t]}})));return new _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_18__.default({field:m,classBreakInfos:R,authoringInfo:i})}function _(e){var t,n,r;return["u8","s8"].indexOf(e.pixelType)>-1&&null!=(null==(t=e.statistics)||null==(n=t[0])?void 0:n.min)&&null!=(null==(r=e.statistics[0])?void 0:r.max)&&1===e.bandCount}function G(t){const n=[];for(let r=0;r<t.length-1;r++)n[r]=new _rest_support_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_10__.default({algorithm:"hsv",fromColor:t[r],toColor:t[r+1]||new _Color_js__WEBPACK_IMPORTED_MODULE_0__.default({r:255,g:255,b:255,a:1})});if(t.length>2){return new _rest_support_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_13__.default({colorRamps:n})}return n[0]}function H(e){const{dataType:t}=e;return"vector-uv"===t||"vector-magdir"===t}function K(e){const{dataType:t}=e;return"vector-uv"===t||"vector-magdir"===t}const Q=new Map([["m/s","meter-per-second"],["km/h","kilometer-per-hour"],["knots","knots"],["ft/s","feet-per-second"],["mph","mile-per-hour"]]);function X(e){if(!H(e))return null;let n;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e.statistics)&&e.statistics.length){const t="vector-uv"===e.dataType,{min:r,max:l}=e.statistics[0];n=[{type:"size",field:"Magnitude",minSize:10,maxSize:40,minDataValue:t?Math.min(Math.abs(r),Math.abs(l)):r,maxDataValue:t?Math.max(Math.abs(r),Math.abs(l)):l}]}const r=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e.multidimensionalInfo)?Q.get(e.multidimensionalInfo.variables[0].unit):null,l=new _VectorFieldRenderer_js__WEBPACK_IMPORTED_MODULE_19__.default({visualVariables:n,inputUnit:r,rotationType:"geographic"});return l.visualVariables=[...l.sizeVariables,...l.rotationVariables],l}function Y(e){var t;return{color:null==(t=e.symbolLayers[0].material)?void 0:t.color,type:"esriSFS",style:"esriSFSSolid"}}function Z(e){if("uniqueValue"===e.type){var t;const n=e.uniqueValueInfos,r=n[0].symbol;return null!=r&&null!=(t=r.symbolLayers)&&t.length&&(e.uniqueValueInfos=n.map((e=>({value:e.value,label:e.label,symbol:e.symbol?Y(e.symbol):null})))),e}if("classBreaks"===e.type){var n;const t=e.classBreakInfos,r=t[0].symbol;return null!=r&&null!=(n=r.symbolLayers)&&n.length&&(e.classBreakInfos=t.map((e=>({classMinValue:e.classMinValue,classMaxValue:e.classMaxValue,label:e.label,symbol:e.symbol?Y(e.symbol):null})))),e}return e}


/***/ }),

/***/ 5929:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/stretchRendererUtils.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stretchTypeFunctionEnum": () => (/* binding */ a),
/* harmony export */   "stretchTypeJSONDict": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.JSONMap({none:"none",standardDeviation:"standard-deviation",histogramEqualization:"histogram-equalization",minMax:"min-max",percentClip:"percent-clip",sigmoid:"sigmoid"}),a={0:"none",3:"standardDeviation",4:"histogramEqualization",5:"minMax",6:"percentClip",9:"sigmoid"};


/***/ }),

/***/ 94857:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ClassBreaksDefinition.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _ClassificationDefinition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ClassificationDefinition.js */ 80200);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),a=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let n=class extends _ClassificationDefinition_js__WEBPACK_IMPORTED_MODULE_7__.default{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition"}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],n.prototype,"breakCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],n.prototype,"classificationField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{read:o.read,write:o.write}})],n.prototype,"classificationMethod",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],n.prototype,"normalizationField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{read:a.read,write:a.write}})],n.prototype,"normalizationType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({value:null,json:{write:!0}})],n.prototype,"standardDeviationInterval",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({value:null,json:{write:!0}})],n.prototype,"definedInterval",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],n.prototype,"type",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.ClassBreaksDefinition")],n);const l=n;


/***/ }),

/***/ 80200:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ClassificationDefinition.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ 74856);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _colorRamps_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./colorRamps.js */ 23038);
/* harmony import */ var _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../symbols/Symbol.js */ 66760);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_9__.default,json:{write:!0}})],l.prototype,"baseSymbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({types:_colorRamps_js__WEBPACK_IMPORTED_MODULE_8__.types,json:{read:{reader:_colorRamps_js__WEBPACK_IMPORTED_MODULE_8__.fromJSON},write:!0}})],l.prototype,"colorRamp",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{read:c.read,write:c.write}})],l.prototype,"type",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.ClassificationDefinition")],l);const m=l;


/***/ }),

/***/ 54818:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/generateRendererUtils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGenerateRendererClassBreaks": () => (/* binding */ t),
/* harmony export */   "createGenerateRendererUniqueValues": () => (/* binding */ l)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,l){return Number(e.toFixed(l))}function l(e){const l=u(e),t=[],n=l.uniqueValues.length;for(let a=0;a<n;a++){const e=l.uniqueValues[a],n=l.valueFrequency[a],u=e.toString();t.push({value:e,count:n,label:u})}return{uniqueValues:t}}function t(e){const{normalizationTotal:l}=e;return{classBreaks:n(e),normalizationTotal:l}}function n(l){const t=l.definition,{classificationMethod:n,breakCount:o,normalizationType:r,definedInterval:h}=t,m=[];let b=l.values;if(0===b.length)return[];b=b.sort(((e,l)=>e-l));const V=b[0],p=b[b.length-1];if("equal-interval"===n)if(b.length>=o){const l=(p-V)/o;let t=V;for(let n=1;n<o;n++){const u=e(V+n*l,6);m.push({minValue:t,maxValue:u,label:a(t,u,r)}),t=u}m.push({minValue:t,maxValue:p,label:a(t,p,r)})}else b.forEach((e=>{m.push({minValue:e,maxValue:e,label:a(e,e,r)})}));else if("natural-breaks"===n){const t=u(b),n=l.valueFrequency||t.valueFrequency,i=s(t.uniqueValues,n,o);let c=V;for(let l=1;l<o;l++)if(t.uniqueValues.length>l){const n=e(t.uniqueValues[i[l]],6);m.push({minValue:c,maxValue:n,label:a(c,n,r)}),c=n}m.push({minValue:c,maxValue:p,label:a(c,p,r)})}else if("quantile"===n)if(b.length>=o&&V!==p){let e=V,l=Math.ceil(b.length/o),t=0;for(let n=1;n<o;n++){let u=l+t-1;u>b.length&&(u=b.length-1),u<0&&(u=0),m.push({minValue:e,maxValue:b[u],label:a(e,b[u],r)}),e=b[u],t+=l,l=Math.ceil((b.length-t)/(o-n))}m.push({minValue:e,maxValue:p,label:a(e,p,r)})}else{let e=-1;for(let l=0;l<b.length;l++){const t=b[l];t!==e&&(e=t,m.push({minValue:e,maxValue:t,label:a(e,t,r)}),e=t)}}else if("standard-deviation"===n){const l=c(b),t=f(b,l);if(0===t)m.push({minValue:b[0],maxValue:b[0],label:a(b[0],b[0],r)});else{const n=i(V,p,o,l,t)*t;let u=0,s=V;for(let t=o;t>=1;t--){const o=e(l-(t-.5)*n,6);m.push({minValue:s,maxValue:o,label:a(s,o,r)}),s=o,u++}let c=e(l+.5*n,6);m.push({minValue:s,maxValue:c,label:a(s,c,r)}),s=c,u++;for(let t=1;t<=o;t++)c=u===2*o?p:e(l+(t+.5)*n,6),m.push({minValue:s,maxValue:c,label:a(s,c,r)}),s=c,u++}}else if("defined-interval"===n){if(!h)return m;const l=b[0],t=b[b.length-1],n=Math.ceil((t-l)/h);let u=l;for(let s=1;s<n;s++){const t=e(l+s*h,6);m.push({minValue:u,maxValue:t,label:a(u,t,r)}),u=t}m.push({minValue:u,maxValue:t,label:a(u,t,r)})}return m}function a(e,l,t){let n=null;return n=e===l?t&&"percent-of-total"===t?e+"%":e.toString():t&&"percent-of-total"===t?e+"% - "+l+"%":e+" - "+l,n}function u(e){const l=[],t=[];let n=Number.MIN_VALUE,a=1,u=-1;for(let s=0;s<e.length;s++){const o=e[s];o===n?(a++,t[u]=a):null!==o&&(l.push(o),n=o,a=1,t.push(a),u++)}return{uniqueValues:l,valueFrequency:t}}function s(e,l,t){const n=e.length,a=[];t>n&&(t=n);for(let s=0;s<t;s++)a.push(Math.round(s*n/t-1));a.push(n-1);let u=o(a,e,l,t);return r(u.mean,u.sdcm,a,e,l,t)&&(u=o(a,e,l,t)),a}function o(e,l,t,n){let a=[],u=[],s=[],o=0;const r=[],i=[];for(let b=0;b<n;b++){const n=h(b,e,l,t);r.push(n.sbMean),i.push(n.sbSdcm),o+=i[b]}let c,f=o,m=!0;for(;m||o<f;){m=!1,a=[];for(let l=0;l<n;l++)a.push(e[l]);for(let t=0;t<n;t++)for(let a=e[t]+1;a<=e[t+1];a++)if(c=l[a],t>0&&a!==e[t+1]&&Math.abs(c-r[t])>Math.abs(c-r[t-1]))e[t]=a;else if(t<n-1&&e[t]!==a-1&&Math.abs(c-r[t])>Math.abs(c-r[t+1])){e[t+1]=a-1;break}f=o,o=0,u=[],s=[];for(let a=0;a<n;a++){u.push(r[a]),s.push(i[a]);const n=h(a,e,l,t);r[a]=n.sbMean,i[a]=n.sbSdcm,o+=i[a]}}if(o>f){for(let l=0;l<n;l++)e[l]=a[l],r[l]=u[l],i[l]=s[l];o=f}return{mean:r,sdcm:i}}function r(e,l,t,n,a,u){let s=0,o=0,r=0,i=0,c=!0;for(let f=0;f<2&&c;f++){0===f&&(c=!1);for(let f=0;f<u-1;f++)for(;t[f+1]+1!==t[f+2];){t[f+1]=t[f+1]+1;const u=h(f,t,n,a);r=u.sbMean,s=u.sbSdcm;const m=h(f+1,t,n,a);if(i=m.sbMean,o=m.sbSdcm,!(s+o<l[f]+l[f+1])){t[f+1]=t[f+1]-1;break}l[f]=s,l[f+1]=o,e[f]=r,e[f+1]=i,c=!0}for(let f=u-1;f>0;f--)for(;t[f]!==t[f-1]+1;){t[f]=t[f]-1;const u=h(f-1,t,n,a);r=u.sbMean,s=u.sbSdcm;const m=h(f,t,n,a);if(i=m.sbMean,o=m.sbSdcm,!(s+o<l[f-1]+l[f])){t[f]=t[f]+1;break}l[f-1]=s,l[f]=o,e[f-1]=r,e[f]=i,c=!0}}return c}function i(e,l,t,n,a){let u=Math.max(n-e,l-n)/a/t;return u=u>=1?1:u>=.5?.5:.25,u}function c(e){let l=0;for(let t=0;t<e.length;t++)l+=e[t];return l/=e.length,l}function f(e,l){let t=0;for(let n=0;n<e.length;n++){const a=e[n];t+=(a-l)*(a-l)}t/=e.length;return Math.sqrt(t)}function h(e,l,t,n){let a=0,u=0;for(let r=l[e]+1;r<=l[e+1];r++){const e=n[r];a+=t[r]*e,u+=e}u<=0&&console.log("Exception in Natural Breaks calculation");const s=a/u;let o=0;for(let r=l[e]+1;r<=l[e+1];r++)o+=n[r]*(t[r]-s)**2;return{sbMean:s,sbSdcm:o}}


/***/ })

}]);
//# sourceMappingURL=6352.b0588c8da22d8e22c05a.js.map