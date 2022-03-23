"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1122],{

/***/ 51122:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/RasterWorker.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 61243);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _geometry_support_GeographicTransformation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/GeographicTransformation.js */ 7456);
/* harmony import */ var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PixelBlock.js */ 77847);
/* harmony import */ var _rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rasterFormats/RasterCodec.js */ 96125);
/* harmony import */ var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rasterFunctions/pixelUtils.js */ 85572);
/* harmony import */ var _rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rasterFunctions/rasterProjectionHelper.js */ 11057);
/* harmony import */ var _rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rasterFunctions/vectorFieldUtils.js */ 24384);
/* harmony import */ var _rasterTransforms_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rasterTransforms/utils.js */ 47963);
/* harmony import */ var _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../renderers/support/RasterSymbolizer.js */ 28454);
/* harmony import */ var _views_2d_engine_flow_dataUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/2d/engine/flow/dataUtils.js */ 62013);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/Extent.js */ 70157);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/













class h {
  convertVectorFieldData(e) {
    const o = _PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__.default.fromJSON(e.pixelBlock),
          s = (0,_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_8__.convertVectorFieldData)(o, e.type);
    return Promise.resolve((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(s) && s.toJSON());
  }

  decode(r) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = yield (0,_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_5__.decode)(r.data, r.options);
      return e && e.toJSON();
    })();
  }

  symbolize(e) {
    e.pixelBlock = _PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__.default.fromJSON(e.pixelBlock), e.extent = e.extent ? _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__.default.fromJSON(e.extent) : null;
    const o = this.symbolizer.symbolize(e);
    return Promise.resolve((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(o) && o.toJSON());
  }

  updateSymbolizer(r) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var e;
      _this.symbolizer = _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_10__.default.fromJSON(r.symbolizerJSON), r.histograms && "rasterStretch" === (null == (e = _this.symbolizer) ? void 0 : e.rendererJSON.type) && (_this.symbolizer.rendererJSON.histograms = r.histograms);
    })();
  }

  stretch(e) {
    const o = this.symbolizer.simpleStretch(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__.default.fromJSON(e.srcPixelBlock), e.stretchParams);
    return Promise.resolve((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(o) && o.toJSON());
  }

  estimateStatisticsHistograms(r) {
    const e = (0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_6__.estimateStatisticsHistograms)(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__.default.fromJSON(r.srcPixelBlock));
    return Promise.resolve(e);
  }

  split(r) {
    const e = (0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_6__.split)(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__.default.fromJSON(r.srcPixelBlock), r.tileSize, r.maximumPyramidLevel);
    return e && e.forEach((r, t) => {
      e.set(t, null == r ? void 0 : r.toJSON());
    }), Promise.resolve(e);
  }

  mosaicAndTransform(r) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = r.srcPixelBlocks.map(r => r ? new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_4__.default(r) : null),
            o = (0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_6__.mosaic)(e, r.srcMosaicSize, {
        blockWidths: r.blockWidths,
        alignmentInfo: r.alignmentInfo
      });
      if (!r.coefs) return o && o.toJSON();
      const s = (0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_6__.approximateTransform)(o, r.destDimension, r.coefs, r.sampleSpacing, r.interpolation);
      return s && s.toJSON();
    })();
  }

  createStreamlinesMesh(r, e) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = {
        data: new Float32Array(r.flowData.buffer),
        width: r.flowData.width,
        height: r.flowData.height
      },
            {
        vertexData: o,
        indexData: s
      } = yield (0,_views_2d_engine_flow_dataUtils_js__WEBPACK_IMPORTED_MODULE_11__.createStreamlinesMesh)(r.rendererSettings, t, e.signal);
      return {
        result: {
          vertexBuffer: o.buffer,
          indexBuffer: s.buffer
        },
        transferList: [o.buffer, s.buffer]
      };
    })();
  }

  getProjectionOffsetGrid(r) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__.default.fromJSON(r.projectedExtent),
            o = _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__.default.fromJSON(r.srcBufferExtent);
      let s = null;
      r.datumTransformationStemps && (s = new _geometry_support_GeographicTransformation_js__WEBPACK_IMPORTED_MODULE_3__.default({
        steps: r.datumTransformationStemps
      })), (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_7__.requirePE)(t.spatialReference, o.spatialReference, s) && (yield (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_7__.load)());
      const i = r.rasterTransform ? (0,_rasterTransforms_utils_js__WEBPACK_IMPORTED_MODULE_9__.readTransform)(r.rasterTransform) : null;
      return (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_7__.getProjectionOffsetGrid)({ ...r,
        projectedExtent: t,
        srcBufferExtent: o,
        datumTransformation: s,
        rasterTransform: i
      });
    })();
  }

}



/***/ })

}]);
//# sourceMappingURL=1122.024c1c3867b5d9688d53.js.map