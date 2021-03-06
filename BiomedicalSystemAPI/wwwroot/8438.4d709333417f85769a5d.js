"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[8438],{

/***/ 94546:
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/CircularArray.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maybe.js */ 18502);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t){this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const s=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,s}return this._buffer[(this._start+this.size++)%this.maxSize]=t,null}dequeue(){if(0===this.size)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}find(s){if(0===this.size)return null;for(const e of this._buffer)if((0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(e)&&s(e))return e;return null}clear(s){let e=this.dequeue();for(;(0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(e);)s&&s(e),e=this.dequeue()}}


/***/ }),

/***/ 60235:
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/LabelManager.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ 98240);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/HandleOwner.js */ 62091);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_throttle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/throttle.js */ 81876);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _engine_webgl_collisions_CollisionEngine_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./engine/webgl/collisions/CollisionEngine.js */ 30371);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=32,d=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__.default.getLogger("esri.views.2d.layers.labels.LabelManager");let u=class extends((0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__.HandleOwnerMixin)(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__.default)){constructor(e){super(e),this._applyVisibilityPassThrottled=(0,_core_throttle_js__WEBPACK_IMPORTED_MODULE_5__.throttle)(this._applyVisibilityPass,n,this),this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}initialize(){this.collisionEngine=new _engine_webgl_collisions_CollisionEngine_js__WEBPACK_IMPORTED_MODULE_11__.CollisionEngine}destroy(){this.collisionEngine=null,this._applyVisibilityPassThrottled.remove(),this._applyVisibilityPassThrottled=null}get updating(){return this.updateRequested}update(e){this._applyVisibilityPassThrottled(e)}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}processUpdate(e){this._set("updateParameters",e),this.updateRequested&&(this.updateRequested=!1,this.update(e))}_applyVisibilityPass(e){try{const t=this.view.featuresTilingScheme.getClosestInfoForScale(e.state.scale).level;this.collisionEngine.run(this.view.allLayerViews.items,e,t)}catch(t){d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.default("mapview-labeling","Encountered an error during label decluttering",t))}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],u.prototype,"updateRequested",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],u.prototype,"updateParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],u.prototype,"updating",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],u.prototype,"view",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.views.2d.layers.labels.LabelManager")],u);const c=u;


/***/ }),

/***/ 78137:
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Stage.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EXTRA_RENDER_TIME": () => (/* binding */ k),
/* harmony export */   "Stage": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ 61414);
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/events.js */ 37624);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/scheduling.js */ 54391);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/watchUtils.js */ 11652);
/* harmony import */ var _chunks_common_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/common.js */ 15473);
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../chunks/mat2d.js */ 62039);
/* harmony import */ var _chunks_mat2df64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../chunks/mat2df64.js */ 38472);
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ 87266);
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../chunks/vec2.js */ 68292);
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../chunks/vec2f64.js */ 41558);
/* harmony import */ var _symbols_cim_CIMResourceManager_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../symbols/cim/CIMResourceManager.js */ 64345);
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../webgl/programUtils.js */ 80541);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _webgl_context_util_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../webgl/context-util.js */ 3920);
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Container.js */ 99345);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./webgl/enums.js */ 31620);
/* harmony import */ var _webgl_Painter_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./webgl/Painter.js */ 56126);
/* harmony import */ var _webgl_Profiler_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./webgl/Profiler.js */ 71413);
/* harmony import */ var _webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./webgl/shaders/StencilPrograms.js */ 47267);
/* harmony import */ var _support_Timeline_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../support/Timeline.js */ 15205);
/* harmony import */ var _support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../support/screenshotUtils.js */ 70629);
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../webgl/RenderingContext.js */ 98129);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






























const k = 2e3;

class S extends _Container_js__WEBPACK_IMPORTED_MODULE_23__.Container {
  constructor(n, a) {
    super(), this._trash = new Set(), this._clipData = new Float32Array(8), this._upperLeft = (0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_12__.a)(), this._upperRight = (0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_12__.a)(), this._lowerLeft = (0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_12__.a)(), this._lowerRight = (0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_12__.a)(), this._mat2 = (0,_chunks_mat2df64_js__WEBPACK_IMPORTED_MODULE_9__.c)(), this._clipRendererInitialized = !1, this._renderRemainingTime = 0, this._lastFrameRenderTime = 0, this.renderRequested = !1, this.stage = this, this._stationary = !0;
    const {
      canvas: o = document.createElement("canvas"),
      alpha: h = !0,
      stencil: l = !0,
      contextOptions: c = {}
    } = a;
    this._canvas = o;
    const p = (0,_webgl_context_util_js__WEBPACK_IMPORTED_MODULE_22__.createContextOrErrorHTML)(o, 1, {
      alpha: h,
      antialias: !1,
      depth: !0,
      stencil: l
    });
    this.context = new _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_30__.RenderingContext((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(p) ? p : null, c), this.resourceManager = new _symbols_cim_CIMResourceManager_js__WEBPACK_IMPORTED_MODULE_13__.default(), this.painter = new _webgl_Painter_js__WEBPACK_IMPORTED_MODULE_25__.default(this.context, this, this.resourceManager), (0,_core_has_js__WEBPACK_IMPORTED_MODULE_3__.default)("esri-2d-profiler") && (this._debugOutput = document.createElement("div"), this._debugOutput.setAttribute("style", "margin: 24px 64px; position: absolute; color: red;"), n.appendChild(this._debugOutput)), this._renderParameters = {
      drawPhase: 0,
      state: this.state,
      pixelRatio: window.devicePixelRatio,
      stationary: !1,
      globalOpacity: 1,
      blendMode: null,
      deltaTime: -1,
      time: 0,
      inFadeTransition: !1,
      effects: null,
      context: this.context,
      painter: this.painter,
      timeline: a.timeline || new _support_Timeline_js__WEBPACK_IMPORTED_MODULE_28__.Timeline(),
      renderingOptions: a.renderingOptions,
      requireFBO: !1,
      profiler: new _webgl_Profiler_js__WEBPACK_IMPORTED_MODULE_26__.Profiler(this.context, this._debugOutput),
      dataUploadCounter: 0
    }, this._taskHandle = (0,_core_scheduling_js__WEBPACK_IMPORTED_MODULE_5__.addFrameTask)({
      render: e => this.renderFrame(e)
    }), this._taskHandle.pause(), this._lostWebGLContextHandle = (0,_core_events_js__WEBPACK_IMPORTED_MODULE_2__.on)(o, "webglcontextlost", () => {
      this.emit("webgl-error", {
        error: new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("webgl-context-lost")
      });
    }), o.setAttribute("style", "width: 100%; height:100%; display:block;"), n.appendChild(o);
  }

  destroy() {
    this.removeAllChildren(), this._emptyTrash(), this._taskHandle.remove(), this._taskHandle = null, this._boundFBO = null, this._clipFBO && (this._clipFBO.dispose(), this._clipFBO = null), this._clipVAO && (this._clipVAO.dispose(), this._clipVAO = null, this._clipVBO = null), this._clipStencilProgram && (this._clipStencilProgram.dispose(), this._clipStencilProgram = null), this._lostWebGLContextHandle && (this._lostWebGLContextHandle.remove(), this._lostWebGLContextHandle = null), this._canvas.parentNode && this._canvas.parentNode.removeChild(this._canvas), this._debugOutput && this._debugOutput.parentNode && this._debugOutput.parentNode.removeChild(this._debugOutput), this.highlightOptions = null, this.resourceManager.destroy(), this.painter.dispose(), this.context.dispose(), this._canvas = null;
  }

  get background() {
    return this._background;
  }

  set background(e) {
    this._background = e, this.requestRender();
  }

  get highlightOptions() {
    return this._highlightOptions;
  }

  set highlightOptions(e) {
    this._highlightOptionsHandle && (this._highlightOptionsHandle.remove(), this._highlightOptionsHandle = null), this._highlightOptions = e, this._highlightOptions && (this._highlightOptionsHandle = (0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__.init)(this._highlightOptions, "version", () => {
      this.painter.setHighlightOptions(e), this.requestRender();
    }));
  }

  get renderingOptions() {
    return this._renderingOptions;
  }

  set renderingOptions(e) {
    this._renderingOptions = e, this.requestRender();
  }

  get state() {
    return this._state;
  }

  set state(e) {
    this._state = e, this.requestRender();
  }

  get stationary() {
    return this._stationary;
  }

  set stationary(e) {
    this._stationary !== e && (this._stationary = e, this.requestRender());
  }

  trashDisplayObject(e) {
    this._trash.add(e), this.requestRender();
  }

  untrashDisplayObject(e) {
    return this._trash.delete(e);
  }

  requestRender() {
    this._renderRemainingTime = k, this.renderRequested || (this.renderRequested = !0, this.emit("will-render"), this._taskHandle.resume());
  }

  renderFrame(e) {
    const t = this._lastFrameRenderTime ? e.time - this._lastFrameRenderTime : 0;
    this._renderRemainingTime -= t, this._renderRemainingTime <= 0 && this._taskHandle.pause(), this._lastFrameRenderTime = e.time, this.renderRequested = !1, this._renderParameters.state = this._state, this._renderParameters.stationary = this.stationary, this._renderParameters.pixelRatio = window.devicePixelRatio, this._renderParameters.globalOpacity = 1, this._renderParameters.time = e.time, this._renderParameters.deltaTime = e.deltaTime, this._renderParameters.effects = null, this.processRender(this._renderParameters), this._emptyTrash(), this.emit("post-render");
  }

  _createTransforms() {
    return {
      dvs: (0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_10__.c)()
    };
  }

  renderChildren(e) {
    for (const t of this.children) t.beforeRender(e);

    this._renderChildren(this.children, e);

    for (const t of this.children) t.afterRender(e);
  }

  _renderChildren(e, t) {
    const r = this.context;
    t.profiler.recordStart("drawLayers"), t.dataUploadCounter = 0, this._beforeRenderChildren(t), t.drawPhase = _webgl_enums_js__WEBPACK_IMPORTED_MODULE_24__.WGLDrawPhase.MAP, this.painter.beforeRenderLayers(r, this.background);

    for (const i of e) i.processRender(t);

    this.painter.renderLayers(r), t.drawPhase = _webgl_enums_js__WEBPACK_IMPORTED_MODULE_24__.WGLDrawPhase.HIGHLIGHT, this.painter.beforeRenderLayers(r);

    for (const i of e) i.processRender(t);

    this.painter.renderLayers(r);

    if (this._isLabelDrawPhaseRequired(e)) {
      t.drawPhase = _webgl_enums_js__WEBPACK_IMPORTED_MODULE_24__.WGLDrawPhase.LABEL, this.painter.beforeRenderLayers(r);

      for (const i of e) i.processRender(t);

      this.painter.renderLayers(r);
    }

    if ((0,_core_has_js__WEBPACK_IMPORTED_MODULE_3__.default)("esri-tiles-debug")) {
      t.drawPhase = _webgl_enums_js__WEBPACK_IMPORTED_MODULE_24__.WGLDrawPhase.DEBUG, this.painter.beforeRenderLayers(r);

      for (const i of e) i.processRender(t);

      this.painter.renderLayers(r);
    }

    t.profiler.recordEnd("drawLayers"), this._afterRenderChildren();
  }

  _beforeRenderChildren(e) {
    const {
      context: t
    } = this,
          {
      state: i,
      pixelRatio: r
    } = e;
    t.enforceState(), t.setClearDepth(1), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT | t.gl.DEPTH_BUFFER_BIT);
    const {
      size: s,
      rotation: n
    } = i,
          d = Math.round(s[0] * r),
          c = Math.round(s[1] * r);
    this._boundFBO = t.getBoundFramebufferObject();
    if (!(i.spatialReference && (i.spatialReference._isWrappable ? i.spatialReference._isWrappable() : i.spatialReference.isWrappable))) return void (this._clipFrame = !1);

    const u = (0,_chunks_common_js__WEBPACK_IMPORTED_MODULE_7__.t)(n),
          _ = Math.abs(Math.cos(u)),
          g = Math.abs(Math.sin(u)),
          b = Math.round(d * _ + c * g),
          R = Math.round(i.worldScreenWidth);

    if (b <= R) return void (this._clipFrame = !1);
    this._clipFBO && this._clipFBO.width === d && this._clipFBO.height === c || (this._clipFBO = new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_15__.default(t, {
      colorTarget: 0,
      depthStencilTarget: 3,
      width: d,
      height: c
    }));
    const w = (this.state.padding.left - this.state.padding.right) / 2,
          O = (this.state.padding.bottom - this.state.padding.top) / 2,
          y = .5 * d,
          F = .5 * c,
          x = 1 / d,
          C = 1 / c,
          T = R * r * .5,
          j = .5 * (d * g + c * _),
          B = this._upperLeft,
          P = this._upperRight,
          v = this._lowerLeft,
          k = this._lowerRight;
    (0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_11__.s)(B, -T, -j), (0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_11__.s)(P, T, -j), (0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_11__.s)(v, -T, j), (0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_11__.s)(k, T, j), (0,_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_8__.i)(this._mat2), (0,_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_8__.t)(this._mat2, this._mat2, [y + w, F - O]), 0 !== n && (0,_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_8__.r)(this._mat2, this._mat2, u), (0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_11__.t)(B, B, this._mat2), (0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_11__.t)(P, P, this._mat2), (0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_11__.t)(v, v, this._mat2), (0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_11__.t)(k, k, this._mat2);
    const S = this._clipData;
    S.set([2 * v[0] * x - 1, 2 * (c - v[1]) * C - 1, 2 * k[0] * x - 1, 2 * (c - k[1]) * C - 1, 2 * B[0] * x - 1, 2 * (c - B[1]) * C - 1, 2 * P[0] * x - 1, 2 * (c - P[1]) * C - 1]), this._clipRendererInitialized || this._initializeClipRenderer(t), this._clipVBO.setData(S), this._boundFBO = t.getBoundFramebufferObject(), t.bindFramebuffer(this._clipFBO), t.setDepthWriteEnabled(!0), t.setStencilWriteMask(255), t.setClearColor(0, 0, 0, 0), t.setClearDepth(1), t.setClearStencil(0), t.clear(t.gl.COLOR_BUFFER_BIT | t.gl.DEPTH_BUFFER_BIT | t.gl.STENCIL_BUFFER_BIT), t.setDepthWriteEnabled(!1), this._clipFrame = !0;
  }

  _afterRenderChildren() {
    const e = this.context;

    if (e.logIno(), this._clipFrame && this._clipRendererInitialized) {
      if (e.bindFramebuffer(this._boundFBO), this._boundFBO = null, e.bindVAO(this._clipVAO), e.useProgram(this._clipStencilProgram), e.setDepthWriteEnabled(!1), e.setDepthTestEnabled(!1), e.setStencilTestEnabled(!0), e.setBlendingEnabled(!1), e.setColorMask(!1, !1, !1, !1), e.setStencilOp(7680, 7680, 7681), e.setStencilWriteMask(255), e.setStencilFunction(519, 1, 255), e.drawElements(4, 6, 5123, 0), e.bindVAO(), e.setColorMask(!0, !0, !0, !0), null != this.background) {
        const {
          r: t,
          g: i,
          b: r,
          a: s
        } = this.background.color;
        e.setClearColor(s * t / 255, s * i / 255, s * r / 255, s);
      } else e.setClearColor(0, 0, 0, 0);

      e.clear(e.gl.COLOR_BUFFER_BIT), e.setBlendingEnabled(!0), e.setStencilFunction(514, 1, 255), this.painter.blitTexture(e, this._clipFBO.colorTexture, 9728, 1), e.setStencilTestEnabled(!1);
    }
  }

  doRender(e) {
    const t = this.context,
          {
      state: i,
      pixelRatio: r
    } = e;
    this._resizeCanvas(e), this.context.enforceState(), t.setViewport(0, 0, r * i.size[0], r * i.size[1]), t.setDepthWriteEnabled(!0), t.setStencilWriteMask(255), super.doRender(e);
  }

  takeScreenshot(e) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        framebufferWidth: t,
        framebufferHeight: i
      } = {
        framebufferWidth: Math.round(_this._renderParameters.state.size[0] * e.resolutionScale),
        framebufferHeight: Math.round(_this._renderParameters.state.size[1] * e.resolutionScale)
      },
            r = 1,
            s = _this.context,
            n = _this._state.clone();

      if (null != e.rotation) {
        const t = n.viewpoint;
        n.viewpoint.rotation = e.rotation, n.viewpoint = t;
      }

      const a = { ..._this._renderParameters,
        drawPhase: null,
        globalOpacity: 1,
        stationary: !0,
        state: n,
        pixelRatio: r,
        time: Date.now(),
        deltaTime: 0,
        blendMode: null,
        effects: null,
        inFadeTransition: !1
      },
            o = new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_15__.default(s, {
        colorTarget: 0,
        depthStencilTarget: 3,
        width: t,
        height: i
      }),
            h = s.getBoundFramebufferObject(),
            l = s.getViewport();
      s.bindFramebuffer(o), s.setViewport(0, 0, t, i), _this._renderChildren(e.children, a);

      const d = _this._readbackScreenshot({ ...e.cropArea,
        y: i - (e.cropArea.y + e.cropArea.height)
      });

      let c;
      s.bindFramebuffer(h), s.setViewport(l.x, l.y, l.width, l.height), _this.requestRender(), 1 === e.outputScale ? c = d : (c = new ImageData(Math.round(d.width * e.outputScale), Math.round(d.height * e.outputScale)), (0,_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_29__.resampleHermite)(d, c, !0));
      return (0,_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_29__.encodeResult)(c, {
        format: e.format,
        quality: e.quality,
        rotation: 0,
        disableDecorations: !1
      }, document.createElement("canvas"), {
        flipY: !0,
        premultipliedAlpha: !0
      });
    })();
  }

  _readbackScreenshot(e) {
    const t = this.context.gl,
          i = (0,_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_29__.createEmptyImageData)(e.width, e.height, document.createElement("canvas"));
    return t.readPixels(e.x, e.y, e.width, e.height, 6408, 5121, new Uint8Array(i.data.buffer)), i;
  }

  _resizeCanvas(e) {
    const t = this._canvas,
          i = t.style,
          {
      state: {
        size: r
      },
      pixelRatio: s
    } = e,
          n = r[0],
          a = r[1],
          o = Math.round(n * s),
          h = Math.round(a * s);
    t.width === o && t.height === h || (t.width = o, t.height = h), i.width = n + "px", i.height = a + "px";
  }

  _initializeClipRenderer(e) {
    if (this._clipRendererInitialized) return !0;
    const t = _webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_27__.stencil.attributes,
          i = (0,_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_19__.createProgram)(e, _webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_27__.stencil);
    if (!i) return !1;
    const r = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_14__.default.createVertex(e, 35040, 32),
          s = new Uint16Array([0, 1, 2, 2, 1, 3]),
          n = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_14__.default.createIndex(e, 35044, s),
          a = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_21__.default(e, t, {
      geometry: [{
        name: "a_pos",
        count: 2,
        type: 5126,
        offset: 0,
        stride: 8,
        normalized: !1,
        divisor: 0
      }]
    }, {
      geometry: r
    }, n);
    return this._clipStencilProgram = i, this._clipVBO = r, this._clipVAO = a, this._clipRendererInitialized = !0, !0;
  }

  _emptyTrash() {
    for (; this._trash.size > 0;) {
      const e = Array.from(this._trash);

      this._trash.clear();

      for (const t of e) t.processDetach();
    }
  }

  _isLabelDrawPhaseRequired(e) {
    let t = !1;

    for (const i of e) {
      if (!(i instanceof _Container_js__WEBPACK_IMPORTED_MODULE_23__.Container)) {
        t = t || !1;
        break;
      }

      if (i.hasLabels) return !0;
      t = t || this._isLabelDrawPhaseRequired(i.children);
    }

    return t;
  }

}



/***/ }),

/***/ 8712:
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/Programs.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "background": () => (/* binding */ a),
/* harmony export */   "circle": () => (/* binding */ s),
/* harmony export */   "fill": () => (/* binding */ o),
/* harmony export */   "icon": () => (/* binding */ g),
/* harmony export */   "line": () => (/* binding */ h),
/* harmony export */   "outline": () => (/* binding */ n),
/* harmony export */   "text": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../webgl/programUtils.js */ 80541);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sources/resolver.js */ 35368);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t=r=>(0,_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__.glslifyDefineMap)({ID:r.id,PATTERN:r.pattern}),a={shaders:e=>({vertexShader:t(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("background/background.vert"),fragmentShader:t(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("background/background.frag")})},i=r=>(0,_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__.glslifyDefineMap)({ID:r.id}),s={shaders:e=>({vertexShader:i(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("circle/circle.vert"),fragmentShader:i(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("circle/circle.frag")})},d=r=>(0,_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__.glslifyDefineMap)({ID:r.id,PATTERN:r.pattern}),o={shaders:e=>({vertexShader:d(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("fill/fill.vert"),fragmentShader:d(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("fill/fill.frag")})},l=r=>(0,_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__.glslifyDefineMap)({ID:r.id}),n={shaders:e=>({vertexShader:l(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("outline/outline.vert"),fragmentShader:l(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("outline/outline.frag")})},f=r=>(0,_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__.glslifyDefineMap)({ID:r.id,SDF:r.sdf}),g={shaders:e=>({vertexShader:f(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("icon/icon.vert"),fragmentShader:f(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("icon/icon.frag")})},c=r=>(0,_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__.glslifyDefineMap)({ID:r.id,PATTERN:r.pattern,SDF:r.sdf}),h={shaders:e=>({vertexShader:c(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("line/line.vert"),fragmentShader:c(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("line/line.frag")})},m=r=>(0,_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__.glslifyDefineMap)({ID:r.id}),b={shaders:e=>({vertexShader:m(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("text/text.vert"),fragmentShader:m(e)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("text/text.frag")})};


/***/ }),

/***/ 29132:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterialManager.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webgl/Program.js */ 9713);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/enums.js */ 42909);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _Programs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Programs.js */ 8712);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach((e=>e.dispose())),this._programByKey.clear()}getMaterialProgram(r,t,a){const s=t.key<<3|this._getMaterialOptionsValue(t.type,a);if(this._programByKey.has(s))return this._programByKey.get(s);const n=this._getProgramTemplate(t.type),{shaders:i}=n,{vertexShader:o,fragmentShader:c}=i(a),p=t.getShaderHeader(),u=t.getShaderMain(),g=o.replace("#pragma header",p).replace("#pragma main",u),m=new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__.Program(r,g,c,t.getAttributeLocations());return this._programByKey.set(s,m),m}_getMaterialOptionsValue(e,r){switch(e){case 0:{const e=r;return(e.pattern?1:0)<<1|(e.id?1:0)}case 1:{const e=r;return(e.pattern?1:0)<<1|(e.id?1:0)}case 2:return r.id?1:0;case 3:{const e=r;return(e.sdf?1:0)<<2|(e.pattern?1:0)<<1|(e.id?1:0)}case 4:{const e=r;return(e.sdf?1:0)<<1|(e.id?1:0)}case 5:return r.id?1:0;case 6:return r.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case 0:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__.background;case 5:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__.circle;case 1:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__.fill;case 4:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__.icon;case 3:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__.line;case 2:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__.outline;case 6:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__.text;default:return null}}}


/***/ }),

/***/ 35368:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/resolver.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveIncludes": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/ShaderCompiler.js */ 9927);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _shaderRepository_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shaderRepository.js */ 17565);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(r){let t=_shaderRepository_js__WEBPACK_IMPORTED_MODULE_9__.default;return r.split("/").forEach((r=>{t&&(t=t[r])})),t}const o=new _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_6__.default(t);function s(r){return o.resolveIncludes(r)}


/***/ }),

/***/ 17565:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/shaderRepository.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e={background:{"background.frag":"#ifdef PATTERN\nuniform lowp float u_opacity;\nuniform lowp sampler2D u_texture;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_tileTextureCoord;\n#else\nuniform lowp vec4 u_color;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main() {\n#ifdef PATTERN\nmediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\ngl_FragColor = u_opacity * color;\n#else\ngl_FragColor = u_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","background.vert":"precision mediump float;\nattribute vec2 a_pos;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_coord_range;\nuniform mediump float u_depth;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\nuniform mediump vec4 u_tlbr;\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\n#endif\nvoid main() {\ngl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);\n#ifdef PATTERN\nv_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\nv_tlbr             = u_tlbr / u_mosaicSize.xyxy;\n#endif\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n}"},circle:{"circle.frag":"precision lowp float;\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nmediump float dist = length(v_offset);\nmediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);\nlowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));\ngl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","circle.vert":"precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_circleTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_antialiasingWidth;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\nv_stroke_color = stroke_color * stroke_opacity;\nv_stroke_width = stroke_width;\nv_radius = radius;\nv_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));\nmediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\nv_offset = offset;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},fill:{"fill.frag":"precision lowp float;\n#ifdef PATTERN\nuniform lowp sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\nvarying mediump vec4 v_tlbr;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvec4 mixColors(vec4 color1, vec4 color2) {\nfloat compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\nvec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\nreturn vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef PATTERN\nmediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\ngl_FragColor = v_color[3] * color;\n#else\ngl_FragColor = v_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","fill.vert":"precision mediump float;\nattribute vec2 a_pos;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_fillTranslation;\n#ifdef PATTERN\n#include <util/util.glsl>\nuniform mediump vec2 u_mosaicSize;\nuniform mediump float u_patternFactor;\nvarying mediump vec2 v_tileTextureCoord;\nvarying mediump vec4 v_tlbr;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n#ifdef PATTERN\nfloat patternWidth = nextPOT(tlbr.z - tlbr.x);\nfloat patternHeight = nextPOT(tlbr.w - tlbr.y);\nfloat scaleX = 1.0 / (patternWidth * u_patternFactor);\nfloat scaleY = 1.0 / (patternHeight * u_patternFactor);\nmat3 patterMat = mat3(scaleX, 0.0,    0.0,\n0.0,    -scaleY, 0.0,\n0.0,    0.0,    1.0);\nv_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;\nv_tlbr             = tlbr / u_mosaicSize.xyxy;\n#endif\nvec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},icon:{"icon.frag":"precision mediump float;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nuniform lowp vec4 u_color;\nuniform lowp vec4 u_outlineColor;\n#endif\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump flaot v_halo_width;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\n#include <util/encoding.glsl>\nvec4 mixColors(vec4 color1, vec4 color2) {\nfloat compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\nvec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\nreturn vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef SDF\nlowp vec4 fillPixelColor = v_color;\nfloat d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;\nconst float softEdgeRatio = 0.248062016;\nfloat size = max(v_size.x, v_size.y);\nfloat dist = d * softEdgeRatio * size;\nfillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\nif (v_halo_width > 0.25) {\nlowp vec4 outlinePixelColor = u_outlineColor;\nconst float outlineLimitRatio = (16.0 / 86.0);\nfloat clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));\noutlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);\ngl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);\n}\nelse {\ngl_FragColor = v_opacity * fillPixelColor;\n}\n#else\nlowp vec4 texColor = texture2D(u_texture, v_tex);\ngl_FragColor = v_opacity * texColor;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","icon.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\n#ifdef SDF\nvarying mediump float v_halo_width;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_iconTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nconst float C_OFFSET_PRECISION = 1.0 / 8.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float tileCoordRatio = 1.0 / 8.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\nv_color = color;\nv_opacity = opacity;\n#ifdef SDF\nv_halo_width = halo_width;\n#endif\nfloat modded = mod(a_opacityInfo, 128.0);\nfloat targetOpacity = (a_opacityInfo - modded) / 128.0;\nfloat startOpacity = modded / 127.0;\nfloat interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\nv_opacity *= interpolatedOpacity;\nmediump float a_angle         = a_levelInfo[1];\nmediump float a_minLevel      = a_levelInfo[2];\nmediump float a_maxLevel      = a_levelInfo[3];\nmediump vec2 a_tex            = a_texAngleRange.xy;\nmediump float delta_z = 0.0;\nmediump float rotated = mod(a_angle + u_mapRotation, 256.0);\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));\ndelta_z += 1.0 - step(a_minLevel, u_level);\ndelta_z += step(a_maxLevel, u_level);\ndelta_z += step(v_opacity, 0.0);\nvec2 offset = C_OFFSET_PRECISION * a_vertexOffset;\nv_size = abs(offset);\n#ifdef SDF\noffset = (120.0 / 86.0) * offset;\n#endif\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_tex = a_tex.xy / u_mosaicSize;\n}"},line:{"line.frag":"precision lowp float;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nvarying mediump float v_lineHalfWidth;\nvarying lowp vec4 v_color;\nvarying mediump float v_blur;\n#if defined (PATTERN) || defined(SDF)\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\nvarying mediump float v_widthRatio;\nuniform sampler2D u_texture;\nuniform mediump float u_antialiasing;\n#endif\n#ifdef SDF\n#include <util/encoding.glsl>\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nmediump float fragDist = length(v_normal) * v_lineHalfWidth;\nlowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);\n#ifdef PATTERN\nmediump float relativeTexX = mod(v_accumulatedDistance / (v_patternSize.x * v_widthRatio), 1.0);\nmediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);\nmediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\nlowp vec4 color = texture2D(u_texture, texCoord);\ngl_FragColor = alpha * v_color[3] * color;\n#elif defined(SDF)\nmediump float relativeTexX = mod((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio), 1.0);\nmediump float relativeTexY =  0.5 + 0.25 * v_normal.y;\nmediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\nmediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\nfloat dist = d * v_lineHalfWidth;\ngl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;\n#else\ngl_FragColor = alpha * v_color;\n#endif\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","line.vert":"precision mediump float;\nattribute vec2 a_pos;\nattribute vec4 a_extrude_offset;\nattribute vec4 a_dir_normal;\nattribute vec2 a_accumulatedDistance;\n#pragma header\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump float u_zoomFactor;\nuniform mediump vec2 u_lineTranslation;\nuniform mediump float u_antialiasing;\nuniform mediump float u_depth;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nconst float scale = 1.0 / 31.0;\nconst mediump float tileCoordRatio = 8.0;\n#if defined (SDF)\nconst mediump float sdfPatternHalfWidth = 15.5;\n#endif\n#if defined (PATTERN) || defined(SDF)\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\nvarying mediump float v_widthRatio;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvarying mediump float v_lineHalfWidth;\nvarying mediump float v_blur;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\nv_blur = blur + u_antialiasing;\nv_normal = a_dir_normal.zw * scale;\n#if defined (PATTERN) || defined(SDF)\nv_tlbr          = tlbr / u_mosaicSize.xyxy;\nv_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);\n#if defined (PATTERN)\nv_widthRatio = width / v_patternSize.y;\n#else\nv_widthRatio = width / sdfPatternHalfWidth / 2.0;\n#endif\n#endif\nv_lineHalfWidth = (width + u_antialiasing) * 0.5;\nmediump vec2 dir = a_dir_normal.xy * scale;\nmediump vec2 offset_ = a_extrude_offset.zw * scale * offset;\nmediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n#if defined (PATTERN) || defined(SDF)\nv_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);\n#endif\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\n}"},outline:{"outline.frag":"varying lowp vec4 v_color;\nvarying mediump vec2 v_normal;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nlowp float dist = abs(v_normal.y);\nlowp float alpha = smoothstep(1.0, 0.0, dist);\ngl_FragColor = alpha * v_color;\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","outline.vert":"attribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_xnormal;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_fillTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_outline_width;\nvarying lowp vec2 v_normal;\nconst float scale = 1.0 / 15.0;\nvoid main()\n{\n#pragma main\nv_color = color * opacity;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_normal = a_xnormal;\nmediump vec2 dist = u_outline_width * scale * a_offset;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth, 1.0);\n}"},text:{"text.frag":"uniform lowp sampler2D u_texture;\nvarying lowp vec2 v_tex;\nvarying lowp vec4 v_color;\nvarying mediump float v_edgeWidth;\nvarying mediump float v_edgeDistance;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\nlowp float dist = texture2D(u_texture, v_tex).a;\nmediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);\ngl_FragColor = alpha * v_color;\n#ifdef ID\nif (gl_FragColor.a < 1.0 / 255.0) {\ndiscard;\n}\ngl_FragColor = v_id;\n#endif\n}","text.vert":"attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#pragma header\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_textTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_fadeDuration;\nvarying lowp vec2 v_tex;\nconst float offsetPrecision = 1.0 / 8.0;\nconst mediump float edgePos = 0.75;\nuniform mediump float u_antialiasingWidth;\nvarying mediump float v_edgeDistance;\nvarying mediump float v_edgeWidth;\nuniform lowp float u_halo;\nconst float sdfFontScale = 1.0 / 24.0;\nconst float sdfPixel = 3.0;\nuniform highp float u_time;\nvoid main()\n{\n#pragma main\nif (u_halo > 0.5)\n{\nv_color = halo_color * opacity;\nhalo_width *= sdfPixel;\nhalo_blur *= sdfPixel;\n}\nelse\n{\nv_color = color * opacity;\nhalo_width = 0.0;\nhalo_blur = 0.0;\n}\nfloat modded = mod(a_opacityInfo, 128.0);\nfloat targetOpacity = (a_opacityInfo - modded) / 128.0;\nfloat startOpacity = modded / 127.0;\nfloat interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\nv_color *= interpolatedOpacity;\nmediump float a_angle       = a_levelInfo[1];\nmediump float a_minLevel    = a_levelInfo[2];\nmediump float a_maxLevel    = a_levelInfo[3];\nmediump vec2 a_tex          = a_texAngleRange.xy;\nmediump float a_visMinAngle    = a_texAngleRange.z;\nmediump float a_visMaxAngle    = a_texAngleRange.w;\nmediump float delta_z = 0.0;\nmediump float angle = mod(a_angle + u_mapRotation, 256.0);\nif (a_visMinAngle < a_visMaxAngle)\n{\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));\n}\nelse\n{\ndelta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));\n}\ndelta_z += 1.0 - step(a_minLevel, u_level);\ndelta_z += step(a_maxLevel, u_level);\ndelta_z += step(v_color[3], 0.0);\nv_tex = a_tex.xy / u_mosaicSize;\n#ifdef ID\nv_id = u_id / 255.0;\n#endif\nv_edgeDistance = edgePos - halo_width / size;\nv_edgeWidth = (u_antialiasingWidth + halo_blur) / size;\nmediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);\ngl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n}"},util:{"encoding.glsl":"const vec4 rgba2float_factors = vec4(\n255.0 / (256.0),\n255.0 / (256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n);\nfloat rgba2float(vec4 rgba) {\nreturn dot(rgba, rgba2float_factors);\n}","util.glsl":"float nextPOT(in float x) {\nreturn pow(2.0, ceil(log2(abs(x))));\n}"}};


/***/ }),

/***/ 82150:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/BitBlitRenderer.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BitBlitRenderer": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/programUtils.js */ 80541);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shaders/BitBlitPrograms.js */ 26113);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(){this._initialized=!1}dispose(){this._program&&(this._program.dispose(),this._program=null),this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)}render(r,e,t,i){r&&(this._initialized||this._initialize(r),r.setBlendFunctionSeparate(1,771,1,771),r.bindVAO(this._vertexArrayObject),r.useProgram(this._program),e.setSamplingMode(t),r.bindTexture(e,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",i),r.drawArrays(5,0,4),r.bindTexture(null,0),r.bindVAO())}_initialize(s){if(this._initialized)return!0;const o=_shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_9__.bitBlit.attributes,a=(0,_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__.createProgram)(s,_shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_9__.bitBlit);if(!a)return!1;const n={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},m=new Int8Array(16);m[0]=-1,m[1]=-1,m[2]=0,m[3]=0,m[4]=1,m[5]=-1,m[6]=1,m[7]=0,m[8]=-1,m[9]=1,m[10]=0,m[11]=1,m[12]=1,m[13]=1,m[14]=1,m[15]=1;const p=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__.default(s,o,n,{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__.default.createVertex(s,35044,m)});return this._program=a,this._vertexArrayObject=p,this._initialized=!0,!0}}


/***/ }),

/***/ 58125:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GlyphMosaic.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rect.js */ 16434);
/* harmony import */ var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RectangleBinPack.js */ 40618);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/Texture.js */ 36079);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






const r = 256,
      a = t => Math.floor(t / 256);

function n(t) {
  const e = new Set();

  for (const i of t) e.add(a(i));

  return e;
}

function c(t, i, h) {
  return t.has(i) || t.set(i, h().then(() => {
    t.delete(i);
  }).catch(h => {
    t.delete(i), (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.throwIfNotAbortError)(h);
  })), t.get(i);
}

const o = t => ({
  rect: new _Rect_js__WEBPACK_IMPORTED_MODULE_3__.default(0, 0, 0, 0),
  page: 0,
  metrics: {
    left: 0,
    width: 0,
    height: 0,
    advance: 0,
    top: 0
  },
  code: t,
  sdf: !0
});

class l {
  constructor(t, e, i) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphCache = {}, this._textures = [], this._rangePromises = new Map(), this.width = t, this.height = e, this._glyphSource = i, this._binPack = new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_4__.default(t - 4, e - 4), this._glyphData.push(new Uint8Array(t * e)), this._dirties.push(!0), this._textures.push(null), this._initDecorationGlyph();
  }

  dispose() {
    this._binPack = null;

    for (const t of this._textures) t && t.dispose();

    this._textures.length = 0, this._glyphData.length = 0;
  }

  _initDecorationGlyph() {
    const t = [117, 149, 181, 207, 207, 181, 149, 117],
          e = [];

    for (let h = 0; h < t.length; h++) {
      const i = t[h];

      for (let t = 0; t < 11; t++) e.push(i);
    }

    const i = {
      metrics: {
        width: 5,
        height: 2,
        left: 0,
        top: 0,
        advance: 0
      },
      bitmap: new Uint8Array(e)
    };

    this._recordGlyph(i);
  }

  getGlyphItems(t, e, i) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const h = _this._getGlyphCache(t);

      return yield _this._fetchRanges(t, e, i), e.map(e => _this._getMosaicItem(h, t, e));
    })();
  }

  bind(t, e, i, h) {
    const s = this._getTexture(t, i);

    s.setSamplingMode(e), this._dirties[i] && (s.setData(this._glyphData[i]), this._dirties[i] = !1), t.bindTexture(s, h);
  }

  _getGlyphCache(t) {
    return this._glyphCache[t] || (this._glyphCache[t] = {}), this._glyphCache[t];
  }

  _getTexture(t, e) {
    return this._textures[e] || (this._textures[e] = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__.default(t, {
      pixelFormat: 6406,
      dataType: 5121,
      width: this.width,
      height: this.height
    }, new Uint8Array(this.width * this.height))), this._textures[e];
  }

  _invalidate() {
    this._dirties[this._currentPage] = !0;
  }

  _fetchRanges(t, e, i) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const h = n(e),
            s = [];
      h.forEach(e => {
        s.push(_this2._fetchRange(t, e, i));
      }), yield Promise.all(s);
    })();
  }

  _fetchRange(t, e, i) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (e > r) return null;
      const h = t + e;
      return c(_this3._rangePromises, h, () => _this3._glyphSource.getRange(t, e, i));
    })();
  }

  _getMosaicItem(t, e, i) {
    if (!t[i]) {
      const h = this._glyphSource.getGlyph(e, i);

      if (!h || !h.metrics) return o(i);

      const s = this._recordGlyph(h),
            r = this._currentPage,
            a = h.metrics;

      t[i] = {
        rect: s,
        page: r,
        metrics: a,
        code: i,
        sdf: !0
      }, this._invalidate();
    }

    return t[i];
  }

  _recordGlyph(e) {
    const s = e.metrics;
    let r;
    if (0 === s.width) r = new _Rect_js__WEBPACK_IMPORTED_MODULE_3__.default(0, 0, 0, 0);else {
      const i = 3,
            a = s.width + 2 * i,
            n = s.height + 2 * i;
      r = this._binPack.allocate(a, n), r.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(!0), this._textures.push(null), this._initDecorationGlyph(), this._binPack = new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_4__.default(this.width - 4, this.height - 4), r = this._binPack.allocate(a, n));
      const c = this._glyphData[this._currentPage],
            o = e.bitmap;
      let l, g;
      if (o) for (let t = 0; t < n; t++) {
        l = a * t, g = this.width * (r.y + t) + r.x;

        for (let t = 0; t < a; t++) c[g + t] = o[l + t];
      }
      (0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__.default)("esri-glyph-debug") && this._showDebugPage(c);
    }
    return r;
  }

  _showDebugPage(t) {
    const e = document.createElement("canvas"),
          i = e.getContext("2d"),
          h = new ImageData(this.width, this.height),
          s = h.data;
    e.width = this.width, e.height = this.height, e.style.border = "1px solid black";

    for (let r = 0; r < t.length; ++r) s[4 * r + 0] = t[r], s[4 * r + 1] = 0, s[4 * r + 2] = 0, s[4 * r + 3] = 255;

    i.putImageData(h, 0, 0), document.body.appendChild(e);
  }

}



/***/ }),

/***/ 7939:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GlyphSource.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ 30351);
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/pbf.js */ 96545);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t){for(this._metrics=[],this._bitmaps=[];t.next();)switch(t.tag()){case 1:{const e=t.getMessage();for(;e.next();)switch(e.tag()){case 3:{const t=e.getMessage();let s,a,r,n,i,c,g;for(;t.next();)switch(t.tag()){case 1:s=t.getUInt32();break;case 2:a=t.getBytes();break;case 3:r=t.getUInt32();break;case 4:n=t.getUInt32();break;case 5:i=t.getSInt32();break;case 6:c=t.getSInt32();break;case 7:g=t.getUInt32();break;default:t.skip()}t.release(),s&&(this._metrics[s]={width:r,height:n,left:i,top:c,advance:g},this._bitmaps[s]=a);break}default:e.skip()}e.release();break}default:t.skip()}}getMetrics(t){return this._metrics[t]}getBitmap(t){return this._bitmaps[t]}}class a{constructor(){this._ranges=[]}getRange(t){return this._ranges[t]}addRange(t,e){this._ranges[t]=e}}class r{constructor(t){this._glyphInfo={},this._baseURL=t}getRange(a,r,n){const i=this._getFontStack(a);if(i.getRange(r))return Promise.resolve();const c=256*r,g=c+255,o=this._baseURL.replace("{fontstack}",a).replace("{range}",c+"-"+g);return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__.default)(o,{responseType:"array-buffer",...n}).then((t=>{i.addRange(r,new s(new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__.default(new Uint8Array(t.data),new DataView(t.data))))}))}getGlyph(t,e){const s=this._getFontStack(t);if(!s)return;const a=Math.floor(e/256);if(a>256)return;const r=s.getRange(a);return r?{metrics:r.getMetrics(e),bitmap:r.getBitmap(e)}:void 0}_getFontStack(t){let e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new a),e}}


/***/ }),

/***/ 78682:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/MaterialManager.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/ProgramCache.js */ 61791);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./enums.js */ 31620);
/* harmony import */ var _shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shaders/MaterialPrograms.js */ 26607);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=r=>r===_enums_js__WEBPACK_IMPORTED_MODULE_10__.WGLDrawPhase.HITTEST||r===_enums_js__WEBPACK_IMPORTED_MODULE_10__.WGLDrawPhase.LABEL_ALPHA,s=r=>(a(r)?1:0)|(r===_enums_js__WEBPACK_IMPORTED_MODULE_10__.WGLDrawPhase.HIGHLIGHT?2:0),i=({rendererInfo:e,drawPhase:t},o,a,i)=>`${o.getVariationHash()}-${i.join(".")}-${s(t)}-${e.getVariationHash()}-${(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(a)&&a.join(".")}`,g=(e,o,s,i)=>{const g=i.reduce(((r,t)=>({...r,[t]:e.context.driverTest[t]})),{}),m={...o.getVariation(),...e.rendererInfo.getVariation(),highlight:e.drawPhase===_enums_js__WEBPACK_IMPORTED_MODULE_10__.WGLDrawPhase.HIGHLIGHT,id:a(e.drawPhase),...g};if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(s))for(const r of s)m[r]=!0;return m};class m{constructor(r){this._programByKey=new Map,this._programCache=new _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_7__.default(r)}dispose(){this._programCache&&this._programCache.dispose()}getProgram(r,e,t=[],a=[]){const s=e.vsPath+"."+e.fsPath+JSON.stringify(t)+a.join(".");if(this._programByKey.has(s))return this._programByKey.get(s);const i=a.reduce(((e,t)=>({...e,[t]:r.context.driverTest[t]})),{}),g={...t.map((r=>"string"==typeof r?{name:r,value:!0}:r)).reduce(((r,e)=>({...r,[e.name]:e.value})),{}),...i},{vsPath:m,fsPath:n,attributes:h}=e,p=this._programCache.getProgram((0,_shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_11__.createProgramTemplate)(m,n,h),g);if(!p)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(s,p),p}getMaterialProgram(r,e,t,a,s,m=["ignoresSamplerPrecision"]){const n=i(r,e,s,m);if(this._programByKey.has(n))return this._programByKey.get(n);const h=g(r,e,s,m),p=this._programCache.getProgram((0,_shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_11__.createProgramTemplate)(t,t,a),h);if(!p)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(n,p),p}}


/***/ }),

/***/ 56126:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Painter.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/Renderbuffer.js */ 73886);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../brushes.js */ 27274);
/* harmony import */ var _vectorTiles_shaders_VTLMaterialManager_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../vectorTiles/shaders/VTLMaterialManager.js */ 29132);
/* harmony import */ var _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BitBlitRenderer.js */ 82150);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enums.js */ 31620);
/* harmony import */ var _MaterialManager_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MaterialManager.js */ 78682);
/* harmony import */ var _TextureManager_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TextureManager.js */ 89097);
/* harmony import */ var _effects_AnimationEffect_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./effects/AnimationEffect.js */ 90402);
/* harmony import */ var _effects_BlendEffect_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effects/BlendEffect.js */ 68059);
/* harmony import */ var _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effects/FeatureEffect.js */ 38316);
/* harmony import */ var _effects_HighlightEffect_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effects/HighlightEffect.js */ 71337);
/* harmony import */ var _effects_HittestEffect_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effects/HittestEffect.js */ 31622);
/* harmony import */ var _effects_post_processing_EffectManager_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effects/post-processing/EffectManager.js */ 56230);
/* harmony import */ var _painter_RenderPass_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./painter/RenderPass.js */ 7761);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m={[_enums_js__WEBPACK_IMPORTED_MODULE_13__.WGLGeometryType.FILL]:_brushes_js__WEBPACK_IMPORTED_MODULE_10__.brushes.fill,[_enums_js__WEBPACK_IMPORTED_MODULE_13__.WGLGeometryType.LINE]:_brushes_js__WEBPACK_IMPORTED_MODULE_10__.brushes.line,[_enums_js__WEBPACK_IMPORTED_MODULE_13__.WGLGeometryType.MARKER]:_brushes_js__WEBPACK_IMPORTED_MODULE_10__.brushes.marker,[_enums_js__WEBPACK_IMPORTED_MODULE_13__.WGLGeometryType.TEXT]:_brushes_js__WEBPACK_IMPORTED_MODULE_10__.brushes.text};class M{constructor(e,t,s){this.context=e,this._blitRenderer=new _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_12__.BitBlitRenderer,this._brushCache=new Map,this._vtlMaterialManager=new _vectorTiles_shaders_VTLMaterialManager_js__WEBPACK_IMPORTED_MODULE_11__.default,this._blendEffect=new _effects_BlendEffect_js__WEBPACK_IMPORTED_MODULE_17__.BlendEffect,this.effects={highlight:new _effects_HighlightEffect_js__WEBPACK_IMPORTED_MODULE_19__.default,hittest:new _effects_HittestEffect_js__WEBPACK_IMPORTED_MODULE_20__.HittestEffect,integrate:new _effects_AnimationEffect_js__WEBPACK_IMPORTED_MODULE_16__.AnimationEffect,insideEffect:new _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_18__.FeatureEffect("inside"),outsideEffect:new _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_18__.FeatureEffect("outside")},this.materialManager=new _MaterialManager_js__WEBPACK_IMPORTED_MODULE_14__.default(e),this.textureManager=new _TextureManager_js__WEBPACK_IMPORTED_MODULE_15__.default(t,s),this._effectsManager=new _effects_post_processing_EffectManager_js__WEBPACK_IMPORTED_MODULE_21__.EffectManager(t)}get vectorTilesMaterialManager(){return this._vtlMaterialManager}getRenderTarget(){return this._renderTarget}setRenderTarget(e){this._renderTarget=e}getFbos(e,t){if(e!==this._lastWidth||t!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=t,this._fbos){for(const s in this._fbos)this._fbos[s].resize(e,t);return this._fbos}const i={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:e,height:t},n={colorTarget:0,depthStencilTarget:3},a=new _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_7__.default(this.context,{width:e,height:t,internalFormat:34041});this._stencilBuf=a,this._fbos={output:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__.default(this.context,n,i,a),blend:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__.default(this.context,n,i,a),effect0:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__.default(this.context,n,i,a)}}return this._fbos}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderLayers(t,s=null){const{width:r,height:i}=t.getViewport();this._prevFBO=t.getBoundFramebufferObject();const n=this.getFbos(r,i);if(t.bindFramebuffer(n.output),t.setColorMask(!0,!0,!0,!0),t.setDepthWriteEnabled(!0),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(s)){const{r:e,g:r,b:i,a:n}=s.color;t.setClearColor(n*e/255,n*r/255,n*i/255,n)}else t.setClearColor(0,0,0,0);t.setClearDepth(1),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT),t.setDepthWriteEnabled(!1)}beforeRenderLayer(e,t,s){const{context:r,blendMode:i,effects:n,requireFBO:a,drawPhase:o}=e;if(a||E(o,i,n,s))r.bindFramebuffer(this._fbos.blend),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setDepthWriteEnabled(!0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);else{const e=this._getOutputFBO();r.bindFramebuffer(e)}r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!0),r.setClearStencil(t),r.setStencilWriteMask(255),r.clear(r.gl.STENCIL_BUFFER_BIT)}compositeLayer(s,r){const{context:i,blendMode:n,effects:a,requireFBO:o,drawPhase:f}=s;if(o||E(f,n,a,r)){(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(a)&&a.length>0&&f===_enums_js__WEBPACK_IMPORTED_MODULE_13__.WGLDrawPhase.MAP&&this._applyEffects(s,a);const o=this._getOutputFBO();i.bindFramebuffer(o),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(1,771,1,771),i.setColorMask(!0,!0,!0,!0);const l=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(n)||f===_enums_js__WEBPACK_IMPORTED_MODULE_13__.WGLDrawPhase.HIGHLIGHT?"normal":n;this._blendEffect.draw(s,this._fbos.blend.colorTexture,9728,l,r)}}renderLayers(e){if(e.bindFramebuffer(this._prevFBO),!this._fbos)return;const t=this._getOutputFBO();e.setStencilTestEnabled(!1),e.setStencilWriteMask(0),this.blitTexture(e,t.colorTexture,9728)}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this._blitRenderer&&(this._blitRenderer.dispose(),this._blitRenderer=null),this._brushCache&&(this._brushCache.forEach((e=>e.dispose())),this._brushCache.clear(),this._brushCache=null),this._fbos)for(const e in this._fbos)this._fbos[e]&&this._fbos[e].dispose();if(this.effects)for(const e in this.effects)this.effects[e]&&this.effects[e].dispose();this._effectsManager.dispose(),this._vtlMaterialManager&&(this._vtlMaterialManager.dispose(),this._vtlMaterialManager=null),this._prevFBO=null}getGeometryBrush(e){const t=m[e];let s=this._brushCache.get(t);return void 0===s&&(s=new t,this._brushCache.set(t,s)),this._brushCache.get(t)}renderObject(e,t,s,r){const n=_brushes_js__WEBPACK_IMPORTED_MODULE_10__.brushes[s];if(!n)return null;let a=this._brushCache.get(n);void 0===a&&(a=new n,this._brushCache.set(n,a)),a.prepareState(e,t,r),a.draw(e,t,r)}renderObjects(e,t,s,r){const n=_brushes_js__WEBPACK_IMPORTED_MODULE_10__.brushes[s];if(!n)return null;let a=this._brushCache.get(n);void 0===a&&(a=new n,this._brushCache.set(n,a)),a.drawMany(e,t,r)}registerRenderPass(e){const t=e.brushes.map((e=>(this._brushCache.has(e)||this._brushCache.set(e,new e),this._brushCache.get(e))));return new _painter_RenderPass_js__WEBPACK_IMPORTED_MODULE_22__.default(t,e)}setHighlightOptions(e){this.effects.highlight.setHighlightOptions(e)}blitTexture(e,t,s,r=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,s,r)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}_getOutputFBO(){return null!=this._renderTarget?this._renderTarget:this._fbos.output}_applyEffects(e,t){const{context:s}=e,r=this._effectsManager.getPostProcessingEffects(t);for(const{postProcessingEffect:i,effect:n}of r)s.bindFramebuffer(this._fbos.blend),i.draw(e,this._fbos.blend,n)}}function E(t,s,r,i){return t!==_enums_js__WEBPACK_IMPORTED_MODULE_13__.WGLDrawPhase.HIGHLIGHT&&(1!==i||(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(s)&&"normal"!==s||(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(r)&&r.length>0)}


/***/ }),

/***/ 71413:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Profiler.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Profiler": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/CircularArray.js */ 94546);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Evented.js */ 33380);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _webgl_capabilities_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/capabilities/DisjointTimerQuery.js */ 85484);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__.default)("esri-2d-profiler");class o{constructor(t,r){if(this._events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__.default,this._entries=new Map,this._timings=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_0__.default(10),!i)return;this._ext=(0,_webgl_capabilities_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_4__.createDisjointTimerQuery)(t.gl,{}),this._debugOutput=r;const o=t.gl;if(this.enableCommandLogging)for(const e in o)if("function"==typeof o[e]){const s=o[e],t=-1!==e.indexOf("draw");o[e]=(...r)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:e,args:r,isDrawCommand:t}),this._currentSummary&&(this._currentSummary.commands++,t&&this._currentSummary.drawCommands++),s.apply(o,r))}}get enableCommandLogging(){return!("object"==typeof i&&i.disableCommands)}recordContainerStart(e){i&&(this._currentContainer=e)}recordContainerEnd(){i&&(this._currentContainer=null)}recordPassStart(e){i&&(this._currentPass=e,this._initSummary())}recordPassEnd(){i&&(this._currentPass=null,this._emitSummary())}recordBrushStart(e){i&&(this._currentBrush=e)}recordBrushEnd(){i&&(this._currentBrush=null)}recordStart(e){if(i&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(this._ext)){if(this._entries.has(e)){const s=this._entries.get(e),t=this._ext.resultAvailable(s.query),n=this._ext.disjoint();if(t&&!n){const t=this._ext.getResult(s.query)/1e6;let n=0;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(this._timings.enqueue(t))){const e=this._timings.entries,s=e.length;let t=0;for(const r of e)t+=r;n=t/s}const i=t.toFixed(2),o=n?n.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${e}, ${i} ms (${o} last 10 avg)\n${s.commandsLen} Commands (${s.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(s.summaries),console.log("Commands: ",s.commands),console.groupEnd()):console.log(`Frame report for ${e}, ${i} ms (${o} last 10 avg)`),this._debugOutput.innerHTML=`${i} (${o})`}for(const e of s.handles)e.remove();this._entries.delete(e)}const s={name:e,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(s.handles.push(this._events.on("command",(e=>{s.commandsLen++,s.commands.push(e),e.isDrawCommand&&s.drawCommands++}))),s.handles.push(this._events.on("summary",(e=>{s.summaries.push(e)})))),this._ext.beginTimeElapsed(s.query),this._entries.set(e,s)}}recordEnd(e){i&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.isSome)(this._ext)&&this._entries.has(e)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._events.emit("summary",this._currentSummary)}}


/***/ }),

/***/ 40618:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/RectangleBinPack.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect.js */ 16434);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t,e){this._width=0,this._height=0,this._free=[],this._width=t,this._height=e,this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__.default(0,0,t,e))}get width(){return this._width}get height(){return this._height}allocate(t,e){if(t>this._width||e>this._height)return new _Rect_js__WEBPACK_IMPORTED_MODULE_0__.default;let i=null,s=-1;for(let h=0;h<this._free.length;++h){const r=this._free[h];t<=r.width&&e<=r.height&&(null===i||r.y<=i.y&&r.x<=i.x)&&(i=r,s=h)}return null===i?new _Rect_js__WEBPACK_IMPORTED_MODULE_0__.default:(this._free.splice(s,1),i.width<i.height?(i.width>t&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__.default(i.x+t,i.y,i.width-t,e)),i.height>e&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__.default(i.x,i.y+e,i.width,i.height-e))):(i.width>t&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__.default(i.x+t,i.y,i.width-t,i.height)),i.height>e&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__.default(i.x,i.y+e,t,i.height-e))),new _Rect_js__WEBPACK_IMPORTED_MODULE_0__.default(i.x,i.y,t,e))}release(h){for(let t=0;t<this._free.length;++t){const e=this._free[t];if(e.y===h.y&&e.height===h.height&&e.x+e.width===h.x)e.width+=h.width;else if(e.x===h.x&&e.width===h.width&&e.y+e.height===h.y)e.height+=h.height;else if(h.y===e.y&&h.height===e.height&&h.x+h.width===e.x)e.x=h.x,e.width+=h.width;else{if(h.x!==e.x||h.width!==e.width||h.y+h.height!==e.y)continue;e.y=h.y,e.height+=h.height}this._free.splice(t,1),this.release(h)}this._free.push(h)}}


/***/ }),

/***/ 26830:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SDFConverter.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/floatRGBA.js */ 33821);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=1e20;class r{constructor(t){this.size=t;const s=document.createElement("canvas");s.width=s.height=t,this._context=s.getContext("2d"),this._gridOuter=new Float64Array(t*t),this._gridInner=new Float64Array(t*t),this._f=new Float64Array(t),this._d=new Float64Array(t),this._z=new Float64Array(t+1),this._v=new Int16Array(t)}dispose(){this._context=this._gridOuter=this._gridInner=this._f=this._d=this._z=this._v=null,this._svg&&(document.body.removeChild(this._svg),this._svg=null)}draw(r,h,n=31){this._initSVG();const o=this.createSVGString(r);return new Promise(((r,a)=>{const d=new Image;d.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(o),d.onload=()=>{d.onload=null,this._context.clearRect(0,0,this.size,this.size),this._context.drawImage(d,0,0,this.size,this.size);const s=this._context.getImageData(0,0,this.size,this.size),e=new Uint8Array(this.size*this.size*4);for(let t=0;t<this.size*this.size;t++){const e=s.data[4*t+3]/255;this._gridOuter[t]=1===e?0:0===e?i:Math.max(0,.5-e)**2,this._gridInner[t]=1===e?i:0===e?0:Math.max(0,e-.5)**2}this._edt(this._gridOuter,this.size,this.size),this._edt(this._gridInner,this.size,this.size);for(let i=0;i<this.size*this.size;i++){const s=this._gridOuter[i]-this._gridInner[i];(0,_core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__.packFloatRGBA)(.5-s/(2*n),e,4*i)}r(e)};const l=h&&h.signal;l&&(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.onAbort)(l,(()=>a((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.createAbortError)())))}))}_initSVG(){if(!this._svg){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("style","position: absolute;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("role","presentation"),document.body.appendChild(t),this._svg=t}}createSVGString(t){this._initSVG();const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d",t),this._svg.appendChild(s);const e=s.getBBox(),i=e.width/e.height,r=this.size/2;let h,n,o,a;if(i>1){n=h=r/e.width;const t=r*(1/i);o=this.size/4,a=r-t/2}else{h=n=r/e.height;o=r-r*i/2,a=this.size/4}const d=-e.x*h+o,l=-e.y*n+a;s.setAttribute("style",`transform: matrix(${h}, 0, 0, ${n}, ${d}, ${l})`);const _=`<svg style="fill:red;" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${this._svg.innerHTML}</svg>`;return this._svg.removeChild(s),_}_edt(t,s,e){const i=this._f,r=this._d,h=this._v,n=this._z;for(let o=0;o<s;o++){for(let r=0;r<e;r++)i[r]=t[r*s+o];this._edt1d(i,r,h,n,e);for(let i=0;i<e;i++)t[i*s+o]=r[i]}for(let o=0;o<e;o++){for(let e=0;e<s;e++)i[e]=t[o*s+e];this._edt1d(i,r,h,n,s);for(let e=0;e<s;e++)t[o*s+e]=Math.sqrt(r[e])}}_edt1d(t,s,e,r,h){e[0]=0,r[0]=-i,r[1]=+i;for(let n=1,o=0;n<h;n++){let s=(t[n]+n*n-(t[e[o]]+e[o]*e[o]))/(2*n-2*e[o]);for(;s<=r[o];)o--,s=(t[n]+n*n-(t[e[o]]+e[o]*e[o]))/(2*n-2*e[o]);o++,e[o]=n,r[o]=s,r[o+1]=+i}for(let i=0,n=0;i<h;i++){for(;r[n+1]<i;)n++;s[i]=(i-e[n])*(i-e[n])+t[e[n]]}}}


/***/ }),

/***/ 11545:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SpriteMosaic.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ 61414);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./definitions.js */ 30603);
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GeometryUtils.js */ 76272);
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Rect.js */ 16434);
/* harmony import */ var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RectangleBinPack.js */ 40618);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function h(t){return t&&"static"===t.type}class c{constructor(t,e,i,s=0){this._mosaicPages=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects=new Map,this._spriteCopyQueue=[],this.pixelRatio=1,(e<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=i,this._requestRender=t,s>0&&(this._maxItemSize=s),this.pixelRatio=window.devicePixelRatio||1,this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_13__.default(this._pageWidth,this._pageHeight);const a=Math.floor(this._pageWidth),r=Math.floor(this._pageHeight);this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(a*r)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0})}getWidth(t){return t>=this._mosaicPages.length?-1:this._mosaicPages[t].size[0]}getHeight(t){return t>=this._mosaicPages.length?-1:this._mosaicPages[t].size[1]}getPageTexture(t){return t<this._mosaicPages.length?this._mosaicPages[t].texture:null}has(t){return this._mosaicRects.has(t)}get itemCount(){return this._mosaicRects.size}getSpriteItem(t){return this._mosaicRects.get(t)}addSpriteItem(t,e,i,s,a,o){if(this._mosaicRects.has(t))return this._mosaicRects.get(t);let c,n,g;if(h(i))[c,n,g]=this._allocateImage(e[0],e[1]);else{c=new _Rect_js__WEBPACK_IMPORTED_MODULE_12__.default(0,0,e[0],e[1]),n=this._mosaicPages.length;const t=void 0;this._mosaicPages.push({mosaicsData:i,size:e,dirty:!0,texture:t})}if(c.width<=0||c.height<=0)return null;const m={rect:c,width:e[0],height:e[1],sdf:a,simplePattern:o,pixelRatio:1,page:n};return this._mosaicRects.set(t,m),h(i)&&this._copy({rect:c,spriteSize:e,spriteData:i.data,page:n,pageSize:g,repeat:s,sdf:a}),m}hasItemsToProcess(){return 0!==this._spriteCopyQueue.length}processNextItem(){const t=this._spriteCopyQueue.pop();t&&this._copy(t)}getSpriteItems(t){const e={};for(const i of t)e[i]=this.getSpriteItem(i);return e}getMosaicItemPosition(t){const e=this.getSpriteItem(t),i=e&&e.rect;if(!i)return null;i.width=e.width,i.height=e.height;const a=e.width,r=e.height,o=_definitions_js__WEBPACK_IMPORTED_MODULE_10__.SPRITE_PADDING,h=this._mosaicPages[e.page];return{size:[e.width,e.height],tl:[(i.x+o)/h[0],(i.y+o)/h[1]],br:[(i.x+o+a)/h[0],(i.y+o+r)/h[1]],page:e.page}}bind(t,i,s=0,a=0){const r=this._mosaicPages[s],o=r.mosaicsData;let c=r.texture;if(c||(c=n(t,o,r.size),r.texture=c),c.setSamplingMode(i),h(o))t.bindTexture(c,a),r.dirty&&(c.setData(new Uint8Array(o.data.buffer)),c.generateMipmap());else{const i=o.data,s=i.bindFrame(t,c,a);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(this._requestRender)&&s&&i.frameCount>0&&this._requestRender.requestRender(),i.bindFrame(t,c,a)}r.dirty=!1}static _copyBits(t,e,i,s,a,r,o,h,c,n,g){let m=s*e+i,p=h*r+o;if(g){p-=r;for(let o=-1;o<=n;o++,m=((o+n)%n+s)*e+i,p+=r)for(let e=-1;e<=c;e++)a[p+e]=t[m+(e+c)%c]}else for(let u=0;u<n;u++){for(let e=0;e<c;e++)a[p+e]=t[m+e];m+=e,p+=r}}_copy(e){if(e.page>=this._mosaicPages.length)return;const i=this._mosaicPages[e.page],a=i.mosaicsData;if(!h(i.mosaicsData))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("mapview-invalid-resource","unsuitable data type!");const r=e.spriteData,o=a.data;o&&r||console.error("Source or target images are uninitialized!"),c._copyBits(r,e.spriteSize[0],0,0,o,e.pageSize[0],e.rect.x+_definitions_js__WEBPACK_IMPORTED_MODULE_10__.SPRITE_PADDING,e.rect.y+_definitions_js__WEBPACK_IMPORTED_MODULE_10__.SPRITE_PADDING,e.spriteSize[0],e.spriteSize[1],e.repeat),i.dirty=!0}_allocateImage(t,e){t+=2*_definitions_js__WEBPACK_IMPORTED_MODULE_10__.SPRITE_PADDING,e+=2*_definitions_js__WEBPACK_IMPORTED_MODULE_10__.SPRITE_PADDING;const i=Math.max(t,e);if(this._maxItemSize&&this._maxItemSize<i){const i=2**Math.ceil((0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_11__.log2)(t)),s=2**Math.ceil((0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_11__.log2)(e)),o=new _Rect_js__WEBPACK_IMPORTED_MODULE_12__.default(0,0,t,e);return this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(i*s)},size:[i,s],dirty:!0,texture:void 0}),[o,this._mosaicPages.length-1,[i,s]]}const c=this._binPack.allocate(t,e);if(c.width<=0){const i=this._mosaicPages[this._currentPage];return!i.dirty&&h(i.mosaicsData)&&(i.mosaicsData.data=null),this._currentPage=this._mosaicPages.length,this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(this._pageWidth*this._pageHeight)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0}),this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_13__.default(this._pageWidth,this._pageHeight),this._allocateImage(t,e)}return[c,this._currentPage,[this._pageWidth,this._pageHeight]]}dispose(){this._binPack=null;for(const t of this._mosaicPages){const e=t.texture;e&&e.dispose();const i=t.mosaicsData;if(!h(i)){i.data.pause()}}this._mosaicPages=null,this._mosaicRects.clear()}}function n(t,e,s){return h(e)?new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_8__.default(t,{pixelFormat:6408,dataType:5121,width:s[0],height:s[1]},new Uint8Array(e.data.buffer)):new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_8__.default(t,{pixelFormat:6408,dataType:5121,samplingMode:9729,wrapMode:33071,width:s[0],height:s[1]},null)}


/***/ }),

/***/ 89097:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TextureManager.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ J)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../config.js */ 76925);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../request.js */ 30351);
/* harmony import */ var _core_BidiText_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/BidiText.js */ 40295);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ 68292);
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec2f32.js */ 74181);
/* harmony import */ var _symbols_cim_Rasterizer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../symbols/cim/Rasterizer.js */ 20655);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./definitions.js */ 30603);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enums.js */ 31620);
/* harmony import */ var _fontUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fontUtils.js */ 38470);
/* harmony import */ var _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./GlyphMosaic.js */ 58125);
/* harmony import */ var _GlyphSource_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./GlyphSource.js */ 7939);
/* harmony import */ var _SDFConverter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SDFConverter.js */ 26830);
/* harmony import */ var _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SpriteMosaic.js */ 11545);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Utils.js */ 25840);
/* harmony import */ var _animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./animatedFormats/apng.js */ 81703);
/* harmony import */ var _animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./animatedFormats/gif.js */ 2066);
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./util/Result.js */ 81476);
/* harmony import */ var _util_symbolUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./util/symbolUtils.js */ 17793);
/* harmony import */ var _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../support/QueueProcessor.js */ 28123);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
























const O = (0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_10__.c)(),
      N = "arial-unicode-ms-regular",
      Q = 126,
      E = _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__.default.getLogger("esri.views.2d.engine.webgl.TextureManager");

function H(_x, _x2) {
  return _H.apply(this, arguments);
}

function _H() {
  _H = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, i) {
    const r = (0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.getUrl)(e);
    let n;
    const o = ";base64,";

    if (r.includes(o)) {
      const e = r.indexOf(o) + o.length,
            t = r.substring(e),
            i = atob(t),
            s = new Uint8Array(i.length);

      for (let r = 0; r < i.length; r++) s[r] = i.charCodeAt(r);

      n = s.buffer;
    } else try {
      const {
        data: e
      } = yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(r, {
        responseType: "array-buffer",
        ...i
      });
      n = e;
    } catch (a) {
      if (!(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.isAbortError)(a)) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("mapview-invalid-resource", `Could not fetch requested resource at ${r}`);
    }

    return n;
  });
  return _H.apply(this, arguments);
}

function V(e, t) {
  const i = Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(t) * window.devicePixelRatio),
        s = i >= 128 ? 2 : 4;
  return Math.min(e, i * s);
}

const Y = (e, t, i) => E.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default(e, t, i));

class D {
  constructor(e, t, i) {
    this.mosaicType = e, this.page = t, this.sdf = i;
  }

  static fromMosaic(e, t) {
    return new D(e, t.page, t.sdf);
  }

}

class J {
  constructor(i, r) {
    this.resourceManager = r, this._invalidFontsMap = new Map(), this._sdfConverter = new _SDFConverter_js__WEBPACK_IMPORTED_MODULE_17__.default(Q), this._bindingInfos = new Array(), this._hashToBindingIndex = new Map(), this._ongoingRasterizations = new Map(), this._imageRequestQueue = new _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_24__.QueueProcessor({
      concurrency: 10,
      process: function () {
        var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (e, i) {
          (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.throwIfAborted)(i);

          try {
            return yield (0,_request_js__WEBPACK_IMPORTED_MODULE_2__.default)(e, {
              responseType: "image",
              signal: i
            });
          } catch (r) {
            if (!(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.isAbortError)(r)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("mapview-invalid-resource", `Could not fetch requested resource at ${e}`, r);
            throw r;
          }
        });

        return function process(_x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }()
    }), this._spriteMosaic = new _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_18__.default(i, 2048, 2048, 500), this._glyphSource = new _GlyphSource_js__WEBPACK_IMPORTED_MODULE_16__.default(`${_config_js__WEBPACK_IMPORTED_MODULE_1__.default.fontsUrl}/{fontstack}/{range}.pbf`), this._glyphMosaic = new _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_15__.default(1024, 1024, this._glyphSource), this._rasterizer = new _symbols_cim_Rasterizer_js__WEBPACK_IMPORTED_MODULE_11__.default(r);
  }

  dispose() {
    this._spriteMosaic.dispose(), this._glyphMosaic.dispose(), this._rasterizer.dispose(), this._sdfConverter.dispose(), this._spriteMosaic = null, this._glyphMosaic = null, this._sdfConverter = null, this._hashToBindingIndex.clear(), this._hashToBindingIndex = null, this._bindingInfos = null, this._ongoingRasterizations.clear(), this._ongoingRasterizations = null, this._imageRequestQueue.clear(), this._imageRequestQueue = null;
  }

  get sprites() {
    return this._spriteMosaic;
  }

  get glyphs() {
    return this._glyphMosaic;
  }

  rasterizeItem(e, t, i, s) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isNone)(e)) return Y("mapview-null-resource", "Unable to rasterize null resource"), null;

      switch (e.type) {
        case "text":
        case "esriTS":
          {
            const t = yield _this._rasterizeText(e, i, s);
            return t.forEach(e => _this._setTextureBinding(_enums_js__WEBPACK_IMPORTED_MODULE_13__.MosaicType.GLYPH, e)), {
              glyphMosaicItems: t
            };
          }

        default:
          {
            if ((0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.is3D)(e)) return Y("mapview-invalid-type", `MapView does not support symbol type: ${e.type}`, e), null;
            const i = yield _this._rasterizeSpriteSymbol(e, t, s);
            return (0,_util_Result_js__WEBPACK_IMPORTED_MODULE_22__.ok)(i) && i && _this._setTextureBinding(_enums_js__WEBPACK_IMPORTED_MODULE_13__.MosaicType.SPRITE, i), {
              spriteMosaicItem: i
            };
          }
      }
    })();
  }

  bindTextures(e, t, i, s = !1) {
    if (0 === i.textureBinding) return;
    const r = this._bindingInfos[i.textureBinding - 1],
          n = r.page,
          o = s ? 9987 : 9729;

    switch (r.mosaicType) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_13__.MosaicType.SPRITE:
        {
          const i = this.sprites.getWidth(n),
                s = this.sprites.getHeight(n),
                r = (0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__.s)(O, i, s);
          return this._spriteMosaic.bind(e, o, n, _definitions_js__WEBPACK_IMPORTED_MODULE_12__.TEXTURE_BINDING_SPRITE_ATLAS), t.setUniform1i("u_texture", _definitions_js__WEBPACK_IMPORTED_MODULE_12__.TEXTURE_BINDING_SPRITE_ATLAS), void t.setUniform2fv("u_mosaicSize", r);
        }

      case _enums_js__WEBPACK_IMPORTED_MODULE_13__.MosaicType.GLYPH:
        {
          const i = this.glyphs.width,
                s = this.glyphs.height,
                r = (0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__.s)(O, i, s);
          return this._glyphMosaic.bind(e, o, n, _definitions_js__WEBPACK_IMPORTED_MODULE_12__.TEXTURE_BINDING_GLYPH_ATLAS), t.setUniform1i("u_texture", _definitions_js__WEBPACK_IMPORTED_MODULE_12__.TEXTURE_BINDING_GLYPH_ATLAS), void t.setUniform2fv("u_mosaicSize", r);
        }

      default:
        E.error("mapview-texture-manager", `Cannot handle unknown type ${r.mosaicType}`);
    }
  }

  _hashMosaic(e, t) {
    return 1 | e << 1 | (t.sdf ? 1 : 0) << 2 | t.page << 3;
  }

  _setTextureBinding(e, t) {
    const i = this._hashMosaic(e, t);

    if (!this._hashToBindingIndex.has(i)) {
      const s = D.fromMosaic(e, t),
            r = this._bindingInfos.length + 1;
      this._hashToBindingIndex.set(i, r), this._bindingInfos.push(s);
    }

    t.textureBinding = this._hashToBindingIndex.get(i);
  }

  _rasterizeText(e, t, s) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let r, n;

      if ("cim" in e) {
        const t = e;
        r = t.fontName, n = t.text;
      } else {
        const t = e;
        r = (0,_fontUtils_js__WEBPACK_IMPORTED_MODULE_14__.getFullyQualifiedFontName)(t.font), n = t.text;
      }

      const o = _this2._invalidFontsMap.has(r),
            a = t || (0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.charCodes)((0,_core_BidiText_js__WEBPACK_IMPORTED_MODULE_3__.bidiText)(n)[0]);

      try {
        return yield _this2._glyphMosaic.getGlyphItems(o ? N : r, a, s);
      } catch (h) {
        return Y("mapview-invalid-resource", `Couldn't find font ${r}. Falling back to Arial Unicode MS Regular`), _this2._invalidFontsMap.set(r, !0), _this2._glyphMosaic.getGlyphItems(N, a, s);
      }
    })();
  }

  _rasterizeSpriteSymbol(e, t, i) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if ((0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.isSimple)(e)) return null;
      const r = (0,_util_symbolUtils_js__WEBPACK_IMPORTED_MODULE_23__.keyFromSymbol)(e);
      if (_this3._spriteMosaic.has(r)) return _this3._spriteMosaic.getSpriteItem(r);
      if ((0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.isSVGResource)(e) || (0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.isImageResource)(e)) return _this3._handleAsyncResource(r, e, i);

      const n = 1,
            o = _this3._rasterizer.rasterizeJSONResource(e, n);

      if (o) {
        const {
          size: t,
          image: i,
          sdf: s,
          simplePattern: n
        } = o;
        return _this3._addItemToMosaic(r, t, {
          type: "static",
          data: i
        }, (0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.shouldRepeat)(e), s, n);
      }

      return new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("TextureManager", "unrecognized or null rasterized image");
    })();
  }

  _handleAsyncResource(e, t, i) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this4._ongoingRasterizations.has(e)) return _this4._ongoingRasterizations.get(e);
      let s;
      s = (0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.isSVGResource)(t) ? _this4._handleSVG(t, e, i) : _this4._handleImage(t, e, i), _this4._ongoingRasterizations.set(e, s);

      try {
        yield s, _this4._ongoingRasterizations.delete(e);
      } catch {
        _this4._ongoingRasterizations.delete(e);
      }

      return s;
    })();
  }

  _handleSVG(e, t, i) {
    var _this5 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const s = [Q, Q],
            r = yield _this5._sdfConverter.draw(e.path, i);
      return _this5._addItemToMosaic(t, s, {
        type: "static",
        data: new Uint32Array(r.buffer)
      }, !1, !0, !0);
    })();
  }

  _handleGIFOrPNG(e, t, i) {
    var _this6 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const r = yield H(e, i);

      if ((0,_util_Result_js__WEBPACK_IMPORTED_MODULE_22__.ok)(r)) {
        const o = (0,_animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_21__.isGIF)(r),
              a = (0,_animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_20__.isPNG)(r);
        if (!o && !a) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("mapview-invalid-resource", "Image data is neither GIF nor PNG!");
        let c;

        try {
          o && (0,_animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_21__.isAnimatedGIF)(r) ? c = yield _animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_21__.default.create(r, i) : a && (0,_animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_20__.isAnimatedPNG)(r) && (c = yield _animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_20__.default.create(r, i));
        } catch (n) {
          if (!(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.isAbortError)(n)) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("mapview-invalid-resource", "Could not fetch requested resource!");
        }

        if (c && (0,_util_Result_js__WEBPACK_IMPORTED_MODULE_22__.ok)(c)) return _this6._addItemToMosaic(t, [c.width, c.height], {
          type: "animated",
          data: c
        }, (0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.shouldRepeat)(e), !1, !1);
        const u = new Blob([r], {
          type: o ? "image/gif" : "image/png"
        }),
              d = yield _this6._imageFromBlob(u);

        if (d && d instanceof HTMLImageElement) {
          let i = d.width,
              s = d.height;
          "esriPMS" === e.type && (i = Math.round(V(d.width, (0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.getPMSResourceSize)(e))), s = Math.round(d.height * (i / d.width)));

          const r = "cim" in e ? e.cim.colorSubstitutions : void 0,
                {
            size: n,
            sdf: o,
            image: a
          } = _this6._rasterizer.rasterizeImageResource(i, s, d, r);

          return _this6._addItemToMosaic(t, n, {
            type: "static",
            data: a
          }, (0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.shouldRepeat)(e), o, !1);
        }
      }

      return new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("mapview-invalid-resource", "Could not handle resource!");
    })();
  }

  _handleImage(e, t, i) {
    var _this7 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if ((0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.isGIF)(e) || (0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.isPNG)(e)) return _this7._handleGIFOrPNG(e, t, i);
      const r = (0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.getUrl)(e);

      try {
        let s;

        const a = _this7.resourceManager.getResource(r);

        if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.isSome)(a)) s = a;else {
          const {
            data: e
          } = yield _this7._imageRequestQueue.push(r, { ...i
          });
          s = e;
        }
        if ((0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.isSVGImage)(r)) if ("width" in e && "height" in e) s.width = (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(e.width), s.height = (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(e.height);else if ("cim" in e) {
          var n;
          const t = e.cim;
          s.width = (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(null != (n = t.width) ? n : t.scaleX * t.size), s.height = (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__.pt2px)(t.size);
        }
        if (!s.width || !s.height) return null;
        let h = s.width,
            u = s.height;
        "esriPMS" === e.type && (h = Math.round(V(s.width, (0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.getPMSResourceSize)(e))), u = Math.round(s.height * (h / s.width)));

        const d = "cim" in e ? e.cim.colorSubstitutions : void 0,
              {
          size: l,
          sdf: m,
          image: g
        } = _this7._rasterizer.rasterizeImageResource(h, u, s, d);

        return _this7._addItemToMosaic(t, l, {
          type: "static",
          data: g
        }, (0,_Utils_js__WEBPACK_IMPORTED_MODULE_19__.shouldRepeat)(e), m, !1);
      } catch (a) {
        if (!(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.isAbortError)(a)) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("mapview-invalid-resource", `Could not fetch requested resource at ${r}. ${a.message}`);
      }
    })();
  }

  _imageFromBlob(e) {
    var _this8 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const t = window.URL.createObjectURL(e);

      try {
        const {
          data: e
        } = yield _this8._imageRequestQueue.push(t);
        return window.URL.revokeObjectURL(t), e;
      } catch (i) {
        if (window.URL.revokeObjectURL(t), !(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.isAbortError)(i)) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__.default("mapview-invalid-resource", `Could not fetch requested resource at ${t}`);
        throw i;
      }
    })();
  }

  _addItemToMosaic(e, t, i, s, r, n) {
    return this._spriteMosaic.addSpriteItem(e, t, i, s, r, n);
  }

}



/***/ }),

/***/ 81703:
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/apng.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ o),
/* harmony export */   "getPNGSize": () => (/* binding */ u),
/* harmony export */   "isAnimatedPNG": () => (/* binding */ l),
/* harmony export */   "isPNG": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ 61414);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ 7808);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


const r = new Uint32Array(256);

for (let b = 0; b < 256; b++) {
  let t = b;

  for (let e = 0; e < 8; e++) t = 0 != (1 & t) ? 3988292384 ^ t >>> 1 : t >>> 1;

  r[b] = t;
}

function a(t, e = 0, a = t.length - e) {
  let i = -1;

  for (let s = e, n = e + a; s < n; s++) i = i >>> 8 ^ r[255 & (i ^ t[s])];

  return -1 ^ i;
}

const i = new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("Not a PNG"),
      s = new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("Not an animated PNG"),
      n = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);

function h(t) {
  const e = t.constructor === Uint8Array ? t : new Uint8Array(t);
  return !n.some((t, r) => t !== e[r]);
}

function u(t) {
  let e, r;
  return p(new Uint8Array(t), (t, a, i) => {
    const s = new DataView(a.buffer);
    "IHDR" === t && (e = s.getUint32(i + 8), r = s.getUint32(i + 12));
  }), [e, r];
}

function l(t) {
  const e = new Uint8Array(t);
  if (!h(e)) return !1;
  let r = !1;
  return p(e, t => !(r = "acTL" === t)), r;
}

class o {
  constructor() {
    this.width = 0, this.height = 0, this.numPlays = 0, this.playTime = 0, this.frames = [], this.paused = !1, this.playing = !1, this.playSpeed = 1, this.currentFrameNumber = 0, this._lastUsedFrame = -1;
  }

  static create(r, a) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = new o();

      try {
        yield i._load(r, a);
      } catch (s) {
        if (!(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAbortError)(s)) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("invalid-resource", `Could not load PNG: ${s.message}`);
      }

      return i;
    })();
  }

  play() {
    this.playing || (this.paused = !1, this.playing = !0, this._play());
  }

  pause() {
    this.paused = !0, this.playing = !1, clearTimeout(this.timerID);
  }

  togglePlay() {
    this.paused || !this.playing ? this.play() : this.pause();
  }

  bindFrame(t, e, r) {
    t.bindTexture(e, r);
    const a = this.frameChanged();
    if (!a) return !1;
    const i = this.currentFrame,
          s = i.frameData,
          n = e.descriptor;
    return (i.left || i.top || i.width !== n.width || i.height !== n.height) && e.setData(null), e.updateData(0, i.left, i.top, i.width, i.height, s), this.updateUsedFrame(), a;
  }

  frameChanged() {
    return this._lastUsedFrame !== this.currentFrameNumber;
  }

  updateUsedFrame() {
    this._lastUsedFrame = this.currentFrameNumber;
  }

  _load(r, a) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        const t = d(_this, r);
        if (t !== _this) return t;
        _this._resizeCanvas = document.createElement("canvas"), _this._resizeCanvas.width = _this.width, _this._resizeCanvas.height = _this.height, yield Promise.all(_this.frames.map(t => t.createImage(_this._resizeCanvas)));
      } catch (i) {
        if (!(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAbortError)(i)) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("invalid-resource", "Could not parse PNG");
      }

      _this.play();
    })();
  }

  _play() {
    let t, e;
    if (0 === this.playSpeed) return void this.pause();
    this.playSpeed < 0 ? (this.currentFrameNumber -= 1, this.currentFrameNumber < 0 && (this.currentFrameNumber = this.frames.length - 1), e = this.currentFrameNumber, e -= 1, e < 0 && (e = this.frames.length - 1), t = 1 * -this.frames[e].delay / this.playSpeed) : (this.currentFrameNumber += 1, this.currentFrameNumber %= this.frames.length, t = 1 * this.frames[this.currentFrameNumber].delay / this.playSpeed);
    const r = this.frames[this.currentFrameNumber];
    this.currentFrame = {
      frameData: r.imageData,
      top: r.top,
      left: r.left,
      width: r.width,
      height: r.height
    }, this.timerID = window.setTimeout(() => this._play(), t);
  }

}

class c {
  constructor() {
    this.left = 0, this.top = 0, this.width = 0, this.height = 0, this.delay = 0, this.disposeOp = 0, this.blendOp = 0, this.data = null, this.imageData = null;
  }

  createImage(t) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (null === _this2.imageData) return new Promise((e, r) => {
        const a = URL.createObjectURL(_this2.data),
              i = document.createElement("img");
        i.onload = () => {
          URL.revokeObjectURL(a), _this2.imageData = m(i, t), e();
        }, i.onerror = () => {
          URL.revokeObjectURL(a), _this2.imageData = null, r(new Error("Image creation error"));
        }, i.src = a;
      });
    })();
  }

}

function m(t, e) {
  e.width = t.width, e.height = t.height;
  const r = e.getContext("2d");
  r.drawImage(t, 0, 0, t.width, t.height);
  const a = r.getImageData(0, 0, t.width, t.height),
        i = new Uint8Array(a.data);
  let s;

  for (let n = 0; n < i.length; n += 4) s = i[n + 3] / 255, i[n] = i[n] * s, i[n + 1] = i[n + 1] * s, i[n + 2] = i[n + 2] * s;

  return new ImageData(new Uint8ClampedArray(i.buffer), t.width, t.height);
}

function d(t, e) {
  const r = new Uint8Array(e);
  if (n.some((t, e) => t !== r[e])) return i;
  let a = !1;
  if (p(r, t => !(a = "acTL" === t)), !a) return s;
  const h = [],
        u = [];
  let l = null,
      o = null,
      m = 0;
  if (p(r, (e, r, a, i) => {
    const s = new DataView(r.buffer);

    switch (e) {
      case "IHDR":
        l = r.subarray(a + 8, a + 8 + i), t.width = s.getUint32(a + 8), t.height = s.getUint32(a + 12);
        break;

      case "acTL":
        t.numPlays = s.getUint32(a + 8 + 4);
        break;

      case "fcTL":
        {
          o && (t.frames.push(o), m++), o = new c(), o.width = s.getUint32(a + 8 + 4), o.height = s.getUint32(a + 8 + 8), o.left = s.getUint32(a + 8 + 12), o.top = s.getUint32(a + 8 + 16);
          const e = s.getUint16(a + 8 + 20);
          let r = s.getUint16(a + 8 + 22);
          0 === r && (r = 100), o.delay = 1e3 * e / r, o.delay <= 10 && (o.delay = 100), t.playTime += o.delay, o.disposeOp = s.getUint8(a + 8 + 24), o.blendOp = s.getUint8(a + 8 + 25), o.dataParts = [], 0 === m && 2 === o.disposeOp && (o.disposeOp = 1);
          break;
        }

      case "fdAT":
        o && o.dataParts.push(r.subarray(a + 8 + 4, a + 8 + i));
        break;

      case "IDAT":
        o && o.dataParts.push(r.subarray(a + 8, a + 8 + i));
        break;

      case "IEND":
        u.push(w(r, a, 12 + i));
        break;

      default:
        h.push(w(r, a, 12 + i));
    }
  }), 0 === t.frames.length) return s;
  t.frameCount = t.frames.length;
  const d = new Blob(h),
        g = new Blob(u);
  return t.frames.forEach(t => {
    let e = [];
    e.push(n), l.set(U(t.width), 0), l.set(U(t.height), 4), e.push(y("IHDR", l)), e.push(d), t.dataParts.forEach(t => e.push(y("IDAT", t))), e.push(g), t.data = new Blob(e, {
      type: "image/png"
    }), delete t.dataParts, e = null;
  }), t;
}

function p(t, e) {
  const r = new DataView(t.buffer);
  let a,
      i,
      s,
      n = 8;

  do {
    i = r.getUint32(n), a = g(t, n + 4, 4), s = e(a, t, n, i), n += 12 + i;
  } while (!1 !== s && "IEND" !== a && n < t.length);
}

function g(t, e, r) {
  const a = Array.prototype.slice.call(t.subarray(e, e + r));
  return String.fromCharCode.apply(String, a);
}

function f(t) {
  const e = new Uint8Array(t.length);

  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);

  return e;
}

function w(t, e, r) {
  const a = new Uint8Array(r);
  return a.set(t.subarray(e, e + r)), a;
}

function y(t, e) {
  const r = t.length + e.length,
        i = new Uint8Array(r + 8),
        s = new DataView(i.buffer);
  s.setUint32(0, e.length), i.set(f(t), 4), i.set(e, 8);
  const n = a(i, 4, r);
  return s.setUint32(r + 4, n), i;
}

function U(t) {
  return new Uint8Array([t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]);
}



/***/ }),

/***/ 2066:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/gif.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n),
/* harmony export */   "getGIFSize": () => (/* binding */ h),
/* harmony export */   "isAnimatedGIF": () => (/* binding */ o),
/* harmony export */   "isGIF": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ 61414);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ 7808);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/


const a = {
  GCExt: 249,
  COMMENT: 254,
  APPExt: 255,
  UNKNOWN: 1,
  IMAGE: 44,
  EOF: 59,
  EXT: 33
};

function r(t) {
  if (!t || 0 === t.byteLength) return !1;
  const e = t.constructor === Uint8Array ? t : new Uint8Array(t);
  return 71 === e[0] && 73 === e[1] && 70 === e[2] && 56 === e[3];
}

function h(t) {
  const e = new Uint8ClampedArray(t);
  let s = 6;
  return [e[s++] + (e[s++] << 8), e[s++] + (e[s++] << 8)];
}

function o(t) {
  if (!t || 0 === t.byteLength) return !1;
  const e = new Uint8Array(t);
  if (!r(e)) return !1;
  let s = 0;

  for (let i = 0, a = e.length - 9; i < a && (0 !== e[i] || 33 !== e[i + 1] || 249 !== e[i + 2] || 4 !== e[i + 3] || 0 !== e[i + 8] || 44 !== e[i + 9] && 33 !== e[i + 9] || (s++, !(s > 1))); ++i);

  return s > 1;
}

class n {
  constructor() {
    this.paused = !1, this.playing = !1, this.waitTillDone = !0, this.loading = !1, this.firstFrameOnly = !1, this.frames = [], this.comment = "", this.length = 0, this.currentFrameNumber = 0, this.frameCount = 0, this.playSpeed = 1, this.lastFrame = null, this.playOnLoad = !0, this.complete = !1, this.interlaceOffsets = [0, 4, 2, 1], this.interlaceSteps = [8, 8, 4, 2], this._lastUsedFrame = -1;
  }

  static create(s, i) {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const a = new n();

      try {
        yield a._load(s, i);
      } catch (r) {
        if (!(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAbortError)(r)) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("invalid-resource", `Could not load PNG: ${r.message}`);
      }

      return a;
    })();
  }

  play() {
    this.playing || (this.paused = !1, this.playing = !0, this._play());
  }

  pause() {
    this.paused = !0, this.playing = !1, clearTimeout(this.timerID);
  }

  togglePlay() {
    this.paused || !this.playing ? this.play() : this.pause();
  }

  bindFrame(t, e, s) {
    t.bindTexture(e, s);
    const i = this.frameChanged();

    if (i) {
      const t = this.currentFrame,
            s = t.frameData;
      e.updateData(0, 0, 0, t.width, t.height, s), this.updateUsedFrame();
    }

    return i;
  }

  seekFrame(t) {
    clearTimeout(this.timerID), this.currentFrameNumber = t % this.frames.length, this.playing ? this._play() : this._setCurrentFrame(this.currentFrameNumber);
  }

  seek(t) {
    clearTimeout(this.timerID), t < 0 && (t = 0), t *= 1e3, t %= this.length;
    let e = 0;

    for (; t > this.frames[e].time + this.frames[e].delay && e < this.frames.length;) e += 1;

    this.currentFrameNumber = e, this.playing ? this._play() : this._setCurrentFrame(this.currentFrameNumber);
  }

  frameChanged() {
    return this._lastUsedFrame !== this.currentFrameNumber;
  }

  updateUsedFrame() {
    this._lastUsedFrame = this.currentFrameNumber;
  }

  _load(s, i) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        _this.loading = !0, yield _this._parse(s, i), _this.loading = !1, _this.play();
      } catch (a) {
        if (!(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAbortError)(a)) return new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.default("invalid-resource", "Could not parse gif!");
      }
    })();
  }

  _parse(t, e) {
    const s = new l(t);
    s.pos += 6, this.width = s.data[s.pos++] + (s.data[s.pos++] << 8), this.height = s.data[s.pos++] + (s.data[s.pos++] << 8);
    const i = s.data[s.pos++];
    return this.globalColourCount = 1 << 1 + (7 & i), s.pos++, s.pos++, 128 & i && (this.globalColourTable = this._parseColourTable(this.globalColourCount, s)), new Promise((t, i) => {
      setTimeout(() => this._parseBlock(s, t, i, e), 0);
    });
  }

  _parseBlock(t, e, r, h) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (h && h.signal && (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAborted)(h.signal)) return void r((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.createAbortError)());
      const o = t.data[t.pos++];

      if (o === a.IMAGE) {
        if (_this2._parseImg(t), _this2.firstFrameOnly) return _this2._finishedLoading(), void e();
      } else {
        if (o === a.EOF) return _this2._finishedLoading(), void e();

        _this2._parseExt(t);
      }

      "function" == typeof _this2.onprogress && _this2.onprogress({
        bytesRead: t.pos,
        totalBytes: t.data.length,
        frame: _this2.frames.length
      }), setTimeout(() => _this2._parseBlock(t, e, r, h), 0);
    })();
  }

  _parseColourTable(t, e) {
    const s = [];

    for (let i = 0; i < t; i++) s.push([e.data[e.pos++], e.data[e.pos++], e.data[e.pos++]]);

    return s;
  }

  _parseImg(t) {
    const e = t => {
      const e = this.pixelBufSize / t;
      this.interlacedBufSize !== this.pixelBufSize && (this.deinterlaceBuf = new Uint8Array(this.pixelBufSize), this.interlacedBufSize = this.pixelBufSize);
      let s = 0;

      for (let i = 0; i < 4; i++) for (let a = this.interlaceOffsets[i]; a < e; a += this.interlaceSteps[i]) this.deinterlaceBuf.set(this.pixelBuf.subarray(s, s + t), a * t), s += t;
    },
          s = {};

    this.frames.push(s), s.disposalMethod = this.disposalMethod, s.time = this.length, s.delay = 10 * this.delayTime, this.length += s.delay, this.transparencyGiven ? s.transparencyIndex = this.transparencyIndex : s.transparencyIndex = void 0, s.leftPos = t.data[t.pos++] + (t.data[t.pos++] << 8), s.topPos = t.data[t.pos++] + (t.data[t.pos++] << 8), s.width = t.data[t.pos++] + (t.data[t.pos++] << 8), s.height = t.data[t.pos++] + (t.data[t.pos++] << 8);
    const i = t.data[t.pos++];
    s.localColourTableFlag = !!(128 & i), s.localColourTableFlag && (s.localColourTable = this._parseColourTable(1 << 1 + (7 & i), t)), this.pixelBufSize !== s.width * s.height && (this.pixelBuf = new Uint8Array(s.width * s.height), this.pixelBufSize = s.width * s.height), this._lzwDecode(t.data[t.pos++], t.readSubBlocksB()), 64 & i ? (s.interlaced = !0, e(s.width)) : s.interlaced = !1, this._processFrame(s);
  }

  _lzwDecode(t, e) {
    let s, i, a, r, h, o, n, l, d;
    a = i = 0;
    let p = [];
    const u = 1 << t,
          m = u + 1;

    for (r = t + 1, d = !1; !d;) {
      for (o = h, h = 0, s = 0; s < r; s++) e[a >> 3] & 1 << (7 & a) && (h |= 1 << s), a++;

      if (h === u) {
        for (p = [], r = t + 1, s = 0; s < u; s++) p[s] = [s];

        p[u] = [], p[m] = null;
      } else {
        if (h === m) return void (d = !0);

        for (h >= p.length ? p.push(p[o].concat(p[o][0])) : o !== u && p.push(p[o].concat(p[h][0])), n = p[h], l = n.length, s = 0; s < l; s++) this.pixelBuf[i++] = n[s];

        p.length === 1 << r && r < 12 && r++;
      }
    }
  }

  _processFrame(t) {
    t.image = document.createElement("canvas"), t.image.width = this.width, t.image.height = this.height, t.ctx = t.image.getContext("2d");
    const e = t.localColourTableFlag ? t.localColourTable : this.globalColourTable;
    null === this.lastFrame && (this.lastFrame = t);
    const s = 2 === this.lastFrame.disposalMethod || 3 === this.lastFrame.disposalMethod;
    s || t.ctx.drawImage(this.lastFrame.image, 0, 0, this.width, this.height);
    const i = t.ctx.getImageData(t.leftPos, t.topPos, t.width, t.height),
          a = t.transparencyIndex,
          r = i.data,
          h = t.interlaced ? this.deinterlaceBuf : this.pixelBuf,
          o = h.length;
    let n,
        l,
        d = 0;

    for (let p = 0; p < o; p++) n = h[p], l = e[n], a !== n ? (r[d++] = l[0], r[d++] = l[1], r[d++] = l[2], r[d++] = 255) : s ? (r[d + 3] = 0, d += 4) : d += 4;

    t.ctx.putImageData(i, t.leftPos, t.topPos), this.lastFrame = t;
  }

  _parseExt(t) {
    const e = t.data[t.pos++];
    e === a.GCExt ? this._parseGCExt(t) : e === a.COMMENT ? this.comment += t.readSubBlocks() : e === a.APPExt ? this._parseAppExt(t) : (e === a.UNKNOWN && (t.pos += 13), t.readSubBlocks());
  }

  _parseAppExt(t) {
    t.pos += 1, "NETSCAPE" === t.getString(8) ? t.pos += 8 : (t.pos += 3, t.readSubBlocks());
  }

  _parseGCExt(t) {
    t.pos++;
    const e = t.data[t.pos++];
    this.disposalMethod = (28 & e) >> 2, this.transparencyGiven = !!(1 & e), this.delayTime = t.data[t.pos++] + (t.data[t.pos++] << 8), this.transparencyIndex = t.data[t.pos++], t.pos++;
  }

  _finishedLoading() {
    this.loading = !1, this.frameCount = this.frames.length, this.lastFrame = null, this.complete = !0, this.disposalMethod = void 0, this.transparencyGiven = void 0, this.delayTime = void 0, this.transparencyIndex = void 0, this.waitTillDone = void 0, this.pixelBuf = void 0, this.deinterlaceBuf = void 0, this.pixelBufSize = void 0, this.deinterlaceBuf = void 0, this.currentFrameNumber = 0, this.frames.length > 0 && this._setCurrentFrame(0), this.playOnLoad && this.play();
  }

  _play() {
    let t, e;
    0 !== this.playSpeed ? (this.playSpeed < 0 ? (this.currentFrameNumber -= 1, this.currentFrameNumber < 0 && (this.currentFrameNumber = this.frames.length - 1), e = this.currentFrameNumber, e -= 1, e < 0 && (e = this.frames.length - 1), t = 1 * -this.frames[e].delay / this.playSpeed) : (this.currentFrameNumber += 1, this.currentFrameNumber %= this.frames.length, t = 1 * this.frames[this.currentFrameNumber].delay / this.playSpeed), this._setCurrentFrame(this.currentFrameNumber), this.timerID = window.setTimeout(() => this._play(), t)) : this.pause();
  }

  _setCurrentFrame(t) {
    const e = this.frames[t];
    this.currentFrame = {
      frameData: e.image,
      top: 0,
      left: 0,
      width: this.width,
      height: this.height
    };
  }

}

class l {
  constructor(t) {
    this.pos = 0, this.data = new Uint8ClampedArray(t), this.len = this.data.length;
  }

  getString(t) {
    let e = "";

    for (; t--;) e += String.fromCharCode(this.data[this.pos++]);

    return e;
  }

  readSubBlocks() {
    let t,
        e,
        s = "";

    do {
      for (e = t = this.data[this.pos++]; e--;) s += String.fromCharCode(this.data[this.pos++]);
    } while (0 !== t && this.pos < this.len);

    return s;
  }

  readSubBlocksB() {
    let t, e;
    const s = [];

    do {
      for (e = t = this.data[this.pos++]; e--;) s.push(this.data[this.pos++]);
    } while (0 !== t && this.pos < this.len);

    return s;
  }

}



/***/ }),

/***/ 30371:
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionEngine.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollisionEngine": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../definitions.js */ 30603);
/* harmony import */ var _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CollisionGrid.js */ 20145);
/* harmony import */ var _visualVariableSimpleUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visualVariableSimpleUtils.js */ 48399);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=254,u=255,f=0;function b(t,i){const o=[];t.forEachTile((e=>o.push(e))),o.sort(((e,t)=>e.instanceId-t.instanceId)),o.forEach((t=>{(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(t.labelMetrics)&&t.isReady&&i(t,t.labelMetrics.getCursor())}))}function p(e){return"feature"===e.layer.type||"csv"===e.layer.type||"geojson"===e.layer.type||"ogc-feature"===e.layer.type||"stream"===e.layer.type||"subtype-group"===e.layer.type||"wfs"===e.layer.type}function y(e){return t=>(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)((0,_visualVariableSimpleUtils_js__WEBPACK_IMPORTED_MODULE_4__.getSizeForValueSimple)(t,e))}function m(e){const t="visualVariables"in e&&e.visualVariables;if(!t)return null;for(const i of t)if("size"===i.type)return y(i);return null}function h(e){for(const i of e){var t;const e="featureReduction"in i&&"cluster"===(null==(t=i.featureReduction)?void 0:t.type)&&i.featureReduction,o=[...i.labelingInfo||[],...e.labelingInfo||[]];if(!i.labelsVisible||!o.length)continue;if(o.some((e=>"none"===e.deconflictionStrategy)))return!0}return!1}function M(e,i){if(!p(i))return;const o="subtype-group"===i.layer.type?i.layer.sublayers.items:[i.layer],r=i.layer.geometryType,n=!h(o),s={};if("subtype-group"!==i.layer.type){if("heatmap"===i.layer.renderer.type)return;const e=m(i.layer.renderer);s[0]=e}const a=i.tileRenderer;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(a))return;const l=i.layer.visible&&!i.suspended;e.push({tileRenderer:a,vvEvaluators:s,deconflictionEnabled:n,geometryType:r,visible:l})}class g{run(e,t,i){const o=[];for(let r=e.length-1;r>=0;r--){M(o,e[r])}this._transformMetrics(o,t),this._runCollision(o,t,i)}_runCollision(e,t,i){const[o,r]=t.state.size,s=new _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__.CollisionBitsetGrid(o*t.pixelRatio,r*t.pixelRatio);for(const{tileRenderer:n,deconflictionEnabled:a,visible:l}of e){const e=n.featuresView.attributeView;a?l?(this._prepare(n),this._collideVisible(s,n,i),this._collideInvisible(s,n)):b(n,((t,i)=>{for(;i.nextId();)e.setLabelMinZoom(i.id,u)})):b(n,((t,i)=>{for(;i.nextId();)e.setLabelMinZoom(i.id,f)}))}}_isFiltered(t,i,n){const s=i.getFilterFlags(t),a=!n.hasFilter||!!(s&_definitions_js__WEBPACK_IMPORTED_MODULE_2__.FILTER_FLAG_0),l=!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(n.featureEffect)||n.featureEffect.excludedLabelsVisible||!!(s&_definitions_js__WEBPACK_IMPORTED_MODULE_2__.EFFECT_FLAG_0);return!(a&&l)}_prepare(e){const t=e.featuresView.attributeView,i=new Set;b(e,((o,r)=>{for(;r.nextId();){if(i.has(r.id))continue;if(i.add(r.id),this._isFiltered(r.id,t,e.layerView)){t.setLabelMinZoom(r.id,c);continue}t.getLabelMinZoom(r.id)!==f?t.setLabelMinZoom(r.id,u):t.setLabelMinZoom(r.id,f)}}))}_collideVisible(e,t,i){const o=t.featuresView.attributeView,r=new Set;b(t,((t,n)=>{for(;n.nextId();)if(!r.has(n.id))if(t.key.level===i){if(0===o.getLabelMinZoom(n.id)){switch(e.insertMetrics(n)){case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__.OUTSIDE_EXTENT:break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__.HAS_COLLISION:o.setLabelMinZoom(n.id,c),r.add(n.id);break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__.NONE:o.setLabelMinZoom(n.id,f),r.add(n.id)}}}else o.setLabelMinZoom(n.id,c)}))}_collideInvisible(e,t){const i=t.featuresView.attributeView,o=new Set;b(t,((t,r)=>{for(;r.nextId();)if(!o.has(r.id)&&i.getLabelMinZoom(r.id)===u){switch(e.insertMetrics(r)){case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__.OUTSIDE_EXTENT:break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__.HAS_COLLISION:i.setLabelMinZoom(r.id,u),o.add(r.id);break;case _CollisionGrid_js__WEBPACK_IMPORTED_MODULE_3__.NONE:i.setLabelMinZoom(r.id,f),o.add(r.id)}}}))}_transformMetrics(t,i){for(const{tileRenderer:o,geometryType:r,vvEvaluators:n}of t)b(o,((t,s)=>{const a=o.featuresView.attributeView,l=t.transforms.labelMat2d;l[4]=Math.round(l[4]),l[5]=Math.round(l[5]);const d=l[4],c=l[5],u="polyline"===r;for(;s.next();){const t=s.boundsCount,o=s.anchorX,r=s.anchorY;let f=s.size;const b=n[0];if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(b)){const e=b(a.getVVSize(s.id));f=isNaN(e)||null==e||e===1/0?f:e}const p=s.directionX*(f/2),y=s.directionY*(f/2);for(let e=0;e<t;e++){let t=o,n=s.anchorY;if(u){let o=t+s.boundsX(e)+p,r=n+s.boundsY(e)+y;i.state.rotation?(o=l[0]*o+l[2]*r+l[4],r=l[1]*o+l[3]*r+l[5]):(o+=d,r+=c),s.setBoundsComputedAnchorX(e,Math.floor(o)),s.setBoundsComputedAnchorY(e,Math.floor(r))}else{i.state.rotation?(t=l[0]*o+l[2]*r+l[4],n=l[1]*o+l[3]*r+l[5]):(t+=d,n+=c);const a=t+s.boundsX(e)+p,u=n+s.boundsY(e)+y;s.setBoundsComputedAnchorX(e,a),s.setBoundsComputedAnchorY(e,u)}}}}))}}


/***/ }),

/***/ 20145:
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionGrid.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollisionBitsetGrid": () => (/* binding */ c),
/* harmony export */   "CollisionGrid": () => (/* binding */ l),
/* harmony export */   "HAS_COLLISION": () => (/* binding */ n),
/* harmony export */   "NONE": () => (/* binding */ h),
/* harmony export */   "OUTSIDE_EXTENT": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ 88415);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ 30603);
/* harmony import */ var _layers_features_support_StaticBitSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layers/features/support/StaticBitSet.js */ 30592);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=2,o=1,h=0,r=1,n=2;class c{constructor(t,s){this.width=t,this.height=s;const i=Math.ceil(t/o),h=Math.ceil(s/o);this._cols=i,this._rows=h,this._cells=_layers_features_support_StaticBitSet_js__WEBPACK_IMPORTED_MODULE_2__.StaticBitSet.create(i*h)}insertMetrics(t){const s=this._hasCollision(t);return s===h&&this._markMetrics(t),s}getCellId(t,s){return t+s*this._cols}has(t){return this._cells.has(t)}hasRange(t,s){return this._cells.hasRange(t,s)}set(t){this._cells.set(t)}setRange(t,s){this._cells.setRange(t,s)}_hasCollision(t){const s=t.id;let e=0,o=0;t.save();do{const s=t.boundsCount;e+=s;for(let e=0;e<s;e++){const s=t.boundsComputedAnchorX(e),h=t.boundsComputedAnchorY(e),c=t.boundsWidth(e)+i,l=t.boundsHeight(e)+i;switch(this._collide(s,h,c,l)){case n:return n;case r:o++}}}while(t.peekId()===s&&t.next());return t.restore(),e===o?r:h}_collide(s,e,i,c){const l=s-i/2,_=e-c/2,a=l+i,u=_+c;if(a<0||u<0||l>this.width||_>this.height)return r;const d=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.floor(l/o),0,this._cols),g=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.floor(_/o),0,this._rows),f=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.ceil(a/o),0,this._cols),m=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.ceil(u/o),0,this._rows);for(let t=g;t<=m;t++)for(let s=d;s<=f;s++){const e=this.getCellId(s,t);if(this.has(e))return n}return h}_mark(s,e,i,h){const r=s-i/2,n=e-h/2,c=r+i,l=n+h,_=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.floor(r/o),0,this._cols),a=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.floor(n/o),0,this._rows),u=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.ceil(c/o),0,this._cols),d=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.ceil(l/o),0,this._rows);for(let t=a;t<=d;t++)for(let s=_;s<=u;s++){const e=this.getCellId(s,t);this.set(e)}return!1}_markMetrics(t){const s=t.id;do{const s=t.boundsCount;for(let e=0;e<s;e++){const s=t.boundsComputedAnchorX(e),o=t.boundsComputedAnchorY(e),h=t.boundsWidth(e)+i,r=t.boundsHeight(e)+i;this._mark(s,o,h,r)}}while(t.peekId()===s&&t.next())}}class l{constructor(t,e=2){this._bucketSize=t,this._rowsLength=_definitions_js__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE/t,this._colsLength=_definitions_js__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE/t,this._elementsPerBucket=e,this._grid=this._initGrid()}checkOverlap(t,s){const e=Math.floor(t/this._bucketSize),i=Math.floor(s/this._bucketSize);return e<0||e>=this._rowsLength||i<0||i>=this._colsLength||this._grid[i*this._colsLength+e]>=this._elementsPerBucket}markUsed(t,s){const e=Math.floor(t/this._bucketSize),i=Math.floor(s/this._bucketSize);this._grid[i*this._colsLength+e]+=1}reset(){this._grid=this._initGrid()}_initGrid(){return new Uint8Array(this._rowsLength*this._colsLength)}}


/***/ }),

/***/ 48399:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/visualVariableSimpleUtils.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSizeForValueSimple": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ 88415);
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../renderers/support/lengthUtils.js */ 76766);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=Math.PI;function r(t,n){switch(n.transformationType){case"additive":return i(t,n);case"constant":return s(n,t);case"clamped-linear":return u(t,n);case"proportional":return o(t,n);case"stops":return c(t,n);case"real-world-size":return l(t,n);case"identity":return t;case"unknown":return null}}function a(t,n){return"number"==typeof t?t:r(n,t)}function i(t,n){return t+(a(n.minSize,t)||n.minDataValue)}function s(t,n){const e=t.stops;let r=e&&e.length&&e[0].size;return null==r&&(r=t.minSize),a(r,n)}function u(t,n){const e=(t-n.minDataValue)/(n.maxDataValue-n.minDataValue),r=a(n.minSize,t),i=a(n.maxSize,t);return t<=n.minDataValue?r:t>=n.maxDataValue?i:r+e*(i-r)}function o(n,e){const r=n/e.minDataValue,i=a(e.minSize,n),s=a(e.maxSize,n);let u=null;return u=r*i,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(u,i,s)}function c(t,n){const[e,r,i]=m(t,n.cache.ipData);if(e===r)return a(n.stops[e].size,t);{const s=a(n.stops[e].size,t);return s+(a(n.stops[r].size,t)-s)*i}}function l(r,i){const s=_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_1__.meterIn[i.valueUnit],u=a(i.minSize,r),o=a(i.maxSize,r),{valueRepresentation:c}=i;let l=null;return l="area"===c?2*Math.sqrt(r/e)/s:"radius"===c||"distance"===c?2*r/s:r/s,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(l,u,o)}function m(t,n){if(!n)return;let e=0,r=n.length-1;return n.some(((n,a)=>t<n?(r=a,!0):(e=a,!1))),[e,r,(t-n[e])/(n[r]-n[e])]}


/***/ }),

/***/ 90402:
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/AnimationEffect.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationEffect": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ 30603);
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VertexStream.js */ 33559);
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Effect.js */ 75335);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o extends _Effect_js__WEBPACK_IMPORTED_MODULE_3__.Effect{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(r,i){if(!i.size)return;const{context:a,renderingOptions:o}=r;this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_2__.default(a,[0,0,1,0,0,1,1,1]));const n=a.getBoundFramebufferObject(),{x:u,y:m,width:d,height:f}=a.getViewport();i.bindTextures(a);const c=i.getBlock(_definitions_js__WEBPACK_IMPORTED_MODULE_1__.ATTRIBUTE_DATA_ANIMATION);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(c))return;const _=c.getFBO(a),l=c.getFBO(a,1);a.setViewport(0,0,i.size,i.size),this._computeDelta(r,l,o.labelsAnimationTime),this._updateAnimationState(r,l,_),a.bindFramebuffer(n),a.setViewport(u,m,d,f)}_computeDelta(e,t,s){const{context:a,painter:o,displayLevel:n}=e,u=o.materialManager.getProgram(e,this._desc,["delta"]);a.bindFramebuffer(t),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT),a.useProgram(u),u.setUniform1i("u_maskTexture",_definitions_js__WEBPACK_IMPORTED_MODULE_1__.TEXTURE_BINDING_ATTRIBUTE_DATA_0),u.setUniform1i("u_sourceTexture",_definitions_js__WEBPACK_IMPORTED_MODULE_1__.TEXTURE_BINDING_ATTRIBUTE_DATA_1),u.setUniform1f("u_timeDelta",e.deltaTime),u.setUniform1f("u_animationTime",s),u.setUniform1f("u_zoomLevel",Math.round(10*n)),this._quad.draw()}_updateAnimationState(e,t,r){const{context:i,painter:s}=e,a=s.materialManager.getProgram(e,this._desc,["update"]);i.bindTexture(t.colorTexture,1),i.useProgram(a),a.setUniform1i("u_sourceTexture",1),i.bindFramebuffer(r),i.setClearColor(0,0,0,0),i.clear(i.gl.COLOR_BUFFER_BIT),this._quad.draw()}}


/***/ }),

/***/ 68059:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/BlendEffect.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlendEffect": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ 61414);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../webgl/ProgramCache.js */ 61791);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../enums.js */ 31620);
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../VertexStream.js */ 33559);
/* harmony import */ var _shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shaders/BlendPrograms.js */ 49923);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const d=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.default.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");class u{constructor(){this._size=[0,0]}dispose(e){this._backBufferTexture&&(this._backBufferTexture.dispose(),this._backBufferTexture=null),this._programCache&&(this._programCache.dispose(),this._programCache=null),this._quad&&(this._quad.dispose(),this._quad=null)}draw(r,t,s,i,a){const{context:u,drawPhase:c}=r;if(this._setupShader(u),i&&"normal"!==i&&c!==_enums_js__WEBPACK_IMPORTED_MODULE_12__.WGLDrawPhase.LABEL)return void this._drawBlended(r,t,s,i,a);const m=this._programCache.getProgram(_shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_14__.blend,"normal");if(!m)return void d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("mapview-BlendEffect",'Error creating shader program for blend mode "normal"'));u.useProgram(m),t.setSamplingMode(s),u.bindTexture(t,0),m.setUniform1i("u_layerTexture",0),m.setUniform1f("u_opacity",a),u.setBlendingEnabled(!0),u.setBlendFunction(1,771);const f=this._quad;f.draw(),f.unbind()}_drawBlended(r,s,i,o,a){const{context:u,state:c,pixelRatio:m,inFadeTransition:f}=r,{size:h}=c,l=u.getBoundFramebufferObject();let p,g;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(l)){const e=l.descriptor;p=e.width,g=e.height}else p=Math.round(m*h[0]),g=Math.round(m*h[1]);this._createOrResizeTexture(r,p,g);const b=this._backBufferTexture;l.copyToTexture(0,0,p,g,0,0,b),u.setStencilTestEnabled(!1),u.setStencilWriteMask(0),u.setBlendingEnabled(!0),u.setDepthTestEnabled(!1),u.setDepthWriteEnabled(!1);const _=this._programCache.getProgram(_shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_14__.blend,o);if(!_)return void d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("mapview-BlendEffect",`Error creating shader program for blend mode ${o}`));u.useProgram(_),b.setSamplingMode(i),u.bindTexture(b,0),_.setUniform1i("u_backbufferTexture",0),s.setSamplingMode(i),u.bindTexture(s,1),_.setUniform1i("u_layerTexture",1),_.setUniform1f("u_opacity",a),_.setUniform1f("u_inFadeOpacity",f?1:0),u.setBlendFunction(1,0);const x=this._quad;x.draw(),x.unbind(),u.setBlendFunction(1,771)}_setupShader(e){this._programCache||(this._programCache=new _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_9__.default(e),this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_13__.default(e,[-1,-1,1,-1,-1,1,1,1])))}_createOrResizeTexture(e,r,t){const{context:s}=e;null!==this._backBufferTexture&&r===this._size[0]&&t===this._size[1]||(this._backBufferTexture?this._backBufferTexture.resize(r,t):this._backBufferTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_10__.default(s,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r,height:t}),this._size[0]=r,this._size[1]=t)}}


/***/ }),

/***/ 75335:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/Effect.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Effect": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(){this.name=this.constructor.name}}


/***/ }),

/***/ 38316:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/FeatureEffect.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureEffect": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Effect.js */ 75335);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends _Effect_js__WEBPACK_IMPORTED_MODULE_0__.Effect{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject();const{width:r,height:s}=e.getViewport(),o=t.getFbos(r,s).effect0;e.bindFramebuffer(o),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,t){const{context:r,painter:s}=e,o=s.getPostProcessingEffects(t),n=r.getBoundFramebufferObject();for(const{postProcessingEffect:c,effect:f}of o)c.draw(e,n,f);r.bindFramebuffer(this._prev),r.setStencilTestEnabled(!1),s.blitTexture(r,n.colorTexture,9728),r.setStencilTestEnabled(!0)}}


/***/ }),

/***/ 71337:
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/HighlightEffect.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BitBlitRenderer.js */ 82150);
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Effect.js */ 75335);
/* harmony import */ var _highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight/HighlightGradient.js */ 72260);
/* harmony import */ var _highlight_HighlightRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlight/HighlightRenderer.js */ 38459);
/* harmony import */ var _highlight_HighlightSurfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlight/HighlightSurfaces.js */ 60731);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=4,l=4/r;class d extends _Effect_js__WEBPACK_IMPORTED_MODULE_2__.Effect{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new _highlight_HighlightRenderer_js__WEBPACK_IMPORTED_MODULE_4__.default,this._hlGradient=new _highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__.default,this._width=void 0,this._height=void 0,this._hlSurfaces=new _highlight_HighlightSurfaces_js__WEBPACK_IMPORTED_MODULE_5__.default,this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_1__.BitBlitRenderer}dispose(){this._hlSurfaces&&this._hlSurfaces.dispose(),this._hlRenderer&&this._hlRenderer.dispose(),this._hlGradient&&this._hlGradient.destroy(),this._boundFBO=null}bind(e){const{context:t,painter:i}=e,{width:s,height:h}=t.getViewport(),r=i.getFbos(s,h).effect0;this.setup(e,s,h),t.bindFramebuffer(r),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,i){this._width=t,this._height=i;const s=t%r,h=i%r;t+=s<r/2?-s:r-s,i+=h<r/2?-h:r-h,this._adjustedWidth=t,this._adjustedHeight=i,this._boundFBO=e.getBoundFramebufferObject();const d=Math.round(t*l),n=Math.round(i*l);this._hlRenderer.setup(e,d,n),this._hlSurfaces.setup(e,d,n)}draw({context:e}){const t=e.getBoundFramebufferObject();e.setViewport(0,0,this._adjustedWidth*l,this._adjustedHeight*l),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setStencilTestEnabled(!1),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(e,t.colorTexture,9728,1),e.setStencilTestEnabled(!1),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!0),e.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(e,this._hlSurfaces.sharedBlur1Tex),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(e,this._hlSurfaces.sharedBlur2Tex),e.bindFramebuffer(this._boundFBO),e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(e,this._hlSurfaces.sharedBlur1Tex,this._hlGradient),this._boundFBO=null}setHighlightOptions(e){this._hlGradient.setHighlightOptions(e)}}


/***/ }),

/***/ 31622:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/HittestEffect.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HittestEffect": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ 30603);
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Effect.js */ 75335);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o extends _Effect_js__WEBPACK_IMPORTED_MODULE_2__.Effect{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0}dispose(){(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(this._fbo)&&this._fbo.dispose()}bind({context:t,painter:e}){const{width:s,height:o}=t.getViewport();this._boundFBO=t.getBoundFramebufferObject();const r=e.getFbos(s,o).effect0;t.bindFramebuffer(r),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind({context:t}){t.bindFramebuffer(this._boundFBO),this._boundFBO=null}draw({context:t,state:s,pixelRatio:o},r,i=_definitions_js__WEBPACK_IMPORTED_MODULE_1__.HITTEST_SEARCH_SIZE){const n=t.getBoundFramebufferObject(),f=s.size[1]*o,a=Math.round(i*o),h=a/2,u=a/2;this._ensureBuffer(a),r.forEach(((t,e)=>{const s=new Map,i=Math.floor(e.x*o-a/2),b=Math.floor(f-e.y*o-a/2);n.readPixels(i,b,a,a,6408,5121,this._buf);for(let o=0;o<this._buf32.length;o++){const t=this._buf32[o];if(4294967295!==t&&0!==t){const e=o%a,r=a-Math.floor(o/a),i=(h-e)*(h-e)+(u-r)*(u-r),n=s.has(t)?s.get(t):4294967295;s.set(t,Math.min(i,n))}}const c=Array.from(s).sort(((t,e)=>t[1]-e[1])).map((t=>t[0]));t.resolve(c),r.delete(e)}))}_ensureBuffer(t){this._lastSize!==t&&(this._lastSize=t,this._buf=new Uint8Array(4*t*t),this._buf32=new Uint32Array(this._buf.buffer))}}


/***/ }),

/***/ 72260:
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightGradient.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ 22345);
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parameters.js */ 7426);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__.default.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function h(o,i){i.fillColor[0]=o.color.r/255,i.fillColor[1]=o.color.g/255,i.fillColor[2]=o.color.b/255,i.fillColor[3]=o.color.a,o.haloColor?(i.outlineColor[0]=o.haloColor.r/255,i.outlineColor[1]=o.haloColor.g/255,i.outlineColor[2]=o.haloColor.b/255,i.outlineColor[3]=o.haloColor.a):(i.outlineColor[0]=i.fillColor[0],i.outlineColor[1]=i.fillColor[1],i.outlineColor[2]=i.fillColor[2],i.outlineColor[3]=i.fillColor[3]),i.fillColor[3]*=o.fillOpacity,i.outlineColor[3]*=o.haloOpacity,i.fillColor[0]*=i.fillColor[3],i.fillColor[1]*=i.fillColor[3],i.fillColor[2]*=i.fillColor[3],i.outlineColor[0]*=i.outlineColor[3],i.outlineColor[1]*=i.outlineColor[3],i.outlineColor[2]*=i.outlineColor[3],i.outlineWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_10__.HIGHLIGHT_SIZING.outlineWidth,i.outerHaloWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_10__.HIGHLIGHT_SIZING.outerHaloWidth,i.innerHaloWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_10__.HIGHLIGHT_SIZING.innerHaloWidth,i.outlinePosition=_parameters_js__WEBPACK_IMPORTED_MODULE_10__.HIGHLIGHT_SIZING.outlinePosition}const s=[0,0,0,0];class a{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:_parameters_js__WEBPACK_IMPORTED_MODULE_10__.HIGHLIGHT_SIZING.outlinePosition,outlineWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_10__.HIGHLIGHT_SIZING.outlineWidth,innerHaloWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_10__.HIGHLIGHT_SIZING.innerHaloWidth,outerHaloWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_10__.HIGHLIGHT_SIZING.outerHaloWidth},this.shadeTexChanged=!0,this.texelData=new Uint8Array(4*_parameters_js__WEBPACK_IMPORTED_MODULE_10__.SHADE_TEXTURE_SIZE),this.minMaxDistance=[0,0]}setHighlightOptions(o){const i=this._convertedHighlightOptions;h(o,i);const t=i.outlinePosition-i.outlineWidth/2-i.outerHaloWidth,e=i.outlinePosition-i.outlineWidth/2,a=i.outlinePosition+i.outlineWidth/2,u=i.outlinePosition+i.outlineWidth/2+i.innerHaloWidth,d=Math.sqrt(Math.PI/2)*_parameters_js__WEBPACK_IMPORTED_MODULE_10__.SIGMA,g=Math.abs(t)>d?Math.round(10*(Math.abs(t)-d))/10:0,f=Math.abs(u)>d?Math.round(10*(Math.abs(u)-d))/10:0;let C;g&&!f?n.error("The outer rim of the highlight is "+g+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!g&&f?n.error("The inner rim of the highlight is "+f+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):g&&f&&n.error("The highlight is "+Math.max(g,f)+"px away from the edge of the feature; consider reducing some width values.");const c=[void 0,void 0,void 0,void 0];function m(o,i,t){c[0]=(1-t)*o[0]+t*i[0],c[1]=(1-t)*o[1]+t*i[1],c[2]=(1-t)*o[2]+t*i[2],c[3]=(1-t)*o[3]+t*i[3]}const{texelData:p}=this;for(let r=0;r<_parameters_js__WEBPACK_IMPORTED_MODULE_10__.SHADE_TEXTURE_SIZE;++r)C=t+r/(_parameters_js__WEBPACK_IMPORTED_MODULE_10__.SHADE_TEXTURE_SIZE-1)*(u-t),C<t?(c[4*r+0]=0,c[4*r+1]=0,c[4*r+2]=0,c[4*r+3]=0):C<e?m(s,i.outlineColor,(C-t)/(e-t)):C<a?[c[0],c[1],c[2],c[3]]=i.outlineColor:C<u?m(i.outlineColor,i.fillColor,(C-a)/(u-a)):[c[4*r+0],c[4*r+1],c[4*r+2],c[4*r+3]]=i.fillColor,p[4*r+0]=255*c[0],p[4*r+1]=255*c[1],p[4*r+2]=255*c[2],p[4*r+3]=255*c[3];this.minMaxDistance[0]=t,this.minMaxDistance[1]=u,this.shadeTexChanged=!0}applyHighlightOptions(o,e){this.shadeTex||(this.shadeTex=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__.default(o,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:_parameters_js__WEBPACK_IMPORTED_MODULE_10__.SHADE_TEXTURE_SIZE,height:1,samplingMode:9729})),this.shadeTexChanged&&(this.shadeTex.updateData(0,0,0,_parameters_js__WEBPACK_IMPORTED_MODULE_10__.SHADE_TEXTURE_SIZE,1,this.texelData),this.shadeTexChanged=!1),o.bindTexture(this.shadeTex,_definitions_js__WEBPACK_IMPORTED_MODULE_9__.TEXTURE_BINDING_HIGHLIGHT_1),e.setUniform2fv("u_minMaxDistance",this.minMaxDistance)}destroy(){this.shadeTex&&(this.shadeTex.dispose(),this.shadeTex=null)}}


/***/ }),

/***/ 38459:
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightRenderer.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/programUtils.js */ 80541);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../definitions.js */ 30603);
/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parameters.js */ 7426);
/* harmony import */ var _shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shaders/HighlightPrograms.js */ 82206);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(r,e){r.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_9__.TEXTURE_BINDING_HIGHLIGHT_0),r.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",_parameters_js__WEBPACK_IMPORTED_MODULE_10__.ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX),r.bindVAO(this._resources.quadVAO),r.drawArrays(5,0,4),r.bindVAO()}finalBlur(r,e){r.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_9__.TEXTURE_BINDING_HIGHLIGHT_0),r.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",_parameters_js__WEBPACK_IMPORTED_MODULE_10__.RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX),r.bindVAO(this._resources.quadVAO),r.drawArrays(5,0,4),r.bindVAO()}renderHighlight(r,e,s){r.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_9__.TEXTURE_BINDING_HIGHLIGHT_0),r.useProgram(this._resources.highlightProgram),s.applyHighlightOptions(r,this._resources.highlightProgram),r.bindVAO(this._resources.quadVAO),r.setBlendingEnabled(!0),r.setBlendFunction(1,771),r.drawArrays(5,0,4),r.bindVAO()}_initialize(o,u,n){this._width=u,this._height=n;const g=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__.default.createVertex(o,35044,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),d=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__.default(o,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[{name:"a_position",count:2,type:5120,offset:0,stride:4,normalized:!1},{name:"a_texcoord",count:2,type:5121,offset:2,stride:4,normalized:!1}]},{geometry:g}),l=(0,_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__.createProgram)(o,_shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_11__.highlight),c=(0,_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__.createProgram)(o,_shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_11__.blur);l.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_9__.TEXTURE_BINDING_HIGHLIGHT_0),l.setUniform1i("u_shade",_definitions_js__WEBPACK_IMPORTED_MODULE_9__.TEXTURE_BINDING_HIGHLIGHT_1),l.setUniform1f("u_sigma",_parameters_js__WEBPACK_IMPORTED_MODULE_10__.SIGMA),c.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_9__.TEXTURE_BINDING_HIGHLIGHT_0),c.setUniform1f("u_sigma",_parameters_js__WEBPACK_IMPORTED_MODULE_10__.SIGMA),this._resources={quadGeometry:g,quadVAO:d,highlightProgram:l,blurProgram:c}}setup(r,e,s){this._resources?(this._width=e,this._height=s):this._initialize(r,e,s)}}


/***/ }),

/***/ 60731:
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightSurfaces.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ 86550);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(s,t,i){const h=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__.default(s,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:t,height:i,samplingMode:9729});return[h,new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__.default(s,{colorTarget:0,depthStencilTarget:2},h)]}class t{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=null)}_initialize(e,r,t){this._width=r,this._height=t;const[i,h]=s(e,r,t),[o,u]=s(e,r,t);this._resources={sharedBlur1Tex:i,sharedBlur1Fbo:h,sharedBlur2Tex:o,sharedBlur2Fbo:u}}setup(e,r,s){!this._resources||this._width===r&&this._height===s||this.dispose(),this._resources||this._initialize(e,r,s)}get sharedBlur1Tex(){return this._resources.sharedBlur1Tex}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Tex}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}}


/***/ }),

/***/ 7426:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/parameters.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX": () => (/* binding */ t),
/* harmony export */   "HIGHLIGHT_SIZING": () => (/* binding */ e),
/* harmony export */   "RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX": () => (/* binding */ i),
/* harmony export */   "SHADE_TEXTURE_SIZE": () => (/* binding */ n),
/* harmony export */   "SIGMA": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=1,t=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n=256,e={outlineWidth:.7,outerHaloWidth:.7,innerHaloWidth:.7,outlinePosition:0};


/***/ }),

/***/ 73397:
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Bloom.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bloom": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../VertexStream.js */ 33559);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=5,s=[1,0],r=[0,1],o=[1,.8,.6,.4,.2],n=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];class a{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(i),this._nMips=i,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){if(this._quad&&(this._quad.dispose(),this._quad=null),this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null),this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null),this._mipsFBOs){for(let t=0;t<this._nMips;t++)this._mipsFBOs[t]&&(this._mipsFBOs[t].horizontal.dispose(),this._mipsFBOs[t].vertical.dispose());this._mipsFBOs=null}}draw(t,a,l){const{width:h,height:u}=a,{context:p,painter:m}=t,{materialManager:c}=m,d=p.gl,_=this._programDesc,{strength:g,radius:f,threshold:b}=l;this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_8__.default(p,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(t,h,u),p.setStencilTestEnabled(!1),p.setBlendingEnabled(!0),p.setBlendFunction(1,771),p.setStencilWriteMask(0);const F=this._quad;F.bind(),p.bindFramebuffer(this._intensityFBO);const B=c.getProgram(t,_.luminosityHighPass);p.useProgram(B),p.bindTexture(a.colorTexture,0),B.setUniform1i("u_texture",0),B.setUniform3fv("u_defaultColor",[0,0,0]),B.setUniform1f("u_defaultOpacity",0),B.setUniform1f("u_luminosityThreshold",b),B.setUniform1f("u_smoothWidth",.01);const O=[Math.round(h/2),Math.round(u/2)];p.setViewport(0,0,O[0],O[1]),p.setClearColor(0,0,0,0),p.clear(d.COLOR_BUFFER_BIT),F.draw(),p.setBlendingEnabled(!1);let T=this._intensityFBO.colorTexture;for(let e=0;e<this._nMips;e++){const i=c.getProgram(t,_.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[e]}]);p.useProgram(i),p.bindTexture(T,e+1),i.setUniform1i("u_colorTexture",e+1),i.setUniform2fv("u_texSize",O),i.setUniform2fv("u_direction",s),p.setViewport(0,0,O[0],O[1]);const o=this._mipsFBOs[e];p.bindFramebuffer(o.horizontal),F.draw(),T=o.horizontal.colorTexture,p.bindFramebuffer(o.vertical),p.bindTexture(T,e+1),i.setUniform2fv("u_direction",r),F.draw(),T=o.vertical.colorTexture,O[0]=Math.round(O[0]/2),O[1]=Math.round(O[1]/2)}p.setViewport(0,0,h,u);const x=c.getProgram(t,_.composite,[{name:"nummips",value:i}]);p.bindFramebuffer(this._compositeFBO),p.useProgram(x),x.setUniform1f("u_bloomStrength",g),x.setUniform1f("u_bloomRadius",f),x.setUniform1fv("u_bloomFactors",o),x.setUniform3fv("u_bloomTintColors",n),p.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),x.setUniform1i("u_blurTexture1",1),p.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),x.setUniform1i("u_blurTexture2",2),p.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),x.setUniform1i("u_blurTexture3",3),p.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),x.setUniform1i("u_blurTexture4",4),p.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),x.setUniform1i("u_blurTexture5",5),F.draw(),p.bindFramebuffer(a),p.setBlendingEnabled(!0);const w=c.getProgram(t,_.blit);p.useProgram(w),p.bindTexture(this._compositeFBO.colorTexture,6),w.setUniform1i("u_texture",6),p.setBlendFunction(1,1),F.draw(),F.unbind(),p.setBlendFunction(1,771),p.setStencilTestEnabled(!0)}_createOrResizeResources(e,i,s){const{context:r}=e;if(this._compositeFBO&&this._size[0]===i&&this._size[1]===s)return;this._size[0]=i,this._size[1]=s;const o=[Math.round(i/2),Math.round(s/2)];this._compositeFBO?this._compositeFBO.resize(i,s):this._compositeFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__.default(r,{colorTarget:0,depthStencilTarget:0,width:i,height:s}),this._intensityFBO?this._intensityFBO.resize(o[0],o[1]):this._intensityFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__.default(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]});for(let n=0;n<this._nMips;n++)this._mipsFBOs[n]?(this._mipsFBOs[n].horizontal.resize(o[0],o[1]),this._mipsFBOs[n].vertical.resize(o[0],o[1])):this._mipsFBOs[n]={horizontal:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__.default(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),vertical:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__.default(r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]})},o[0]=Math.round(o[0]/2),o[1]=Math.round(o[1]/2)}}


/***/ }),

/***/ 94270:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Blur.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Blur": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../VertexStream.js */ 33559);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=[1,0],s=[0,1];class i{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,r,s){const{context:i}=e,{type:a,radius:n}=s;if(0===n)return;this._createOrResizeResources(e),this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_8__.default(i,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(e,r,n):this._radialBlur(e,r),o.unbind()}_gaussianBlur(e,t,i){const{context:a,state:n,painter:o,pixelRatio:u}=e,{size:l}=n,{materialManager:d}=o,b=this._programDesc,p=this._quad,c=[Math.round(u*l[0]),Math.round(u*l[1])],h=this._blurFBO,g=d.getProgram(e,b.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);a.useProgram(g),a.setBlendingEnabled(!1),a.bindFramebuffer(h),a.bindTexture(t.colorTexture,4),g.setUniform1i("u_colorTexture",4),g.setUniform2fv("u_texSize",c),g.setUniform2fv("u_direction",r),g.setUniform1f("u_sigma",i),p.draw(),a.bindFramebuffer(t),a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.bindTexture(h.colorTexture,5),g.setUniform1i("u_colorTexture",5),g.setUniform2fv("u_direction",s),p.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:r,painter:s}=e,{materialManager:i}=s,a=this._programDesc,n=this._quad,o=this._blurFBO;r.bindFramebuffer(o);const u=i.getProgram(e,a.radialBlur);r.useProgram(u),r.setBlendingEnabled(!1),r.bindTexture(t.colorTexture,4),u.setUniform1i("u_colorTexture",4),n.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);const l=i.getProgram(e,a.blit);r.useProgram(l),r.bindTexture(o.colorTexture,5),l.setUniform1i("u_texture",5),r.setBlendFunction(1,771),n.draw()}_createOrResizeResources(t){const{context:r,state:s,pixelRatio:i}=t,{size:a}=s,n=Math.round(i*a[0]),o=Math.round(i*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__.default(r,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}))}}


/***/ }),

/***/ 5582:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Colorize.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colorize": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../VertexStream.js */ 33559);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:o,painter:a}=e,{materialManager:n}=a,l=this._programDesc,c=this._quad,u=r.colorMatrix;c.bind();const h=this._layerFBOTexture;o.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,h),o.setBlendingEnabled(!1),o.setStencilTestEnabled(!1);const p=n.getProgram(e,l);o.useProgram(p),o.bindTexture(h,2),p.setUniformMatrix4fv("u_coefficients",u),p.setUniform1i("u_colorTexture",2),c.draw(),o.setBlendingEnabled(!0),o.setBlendFunction(1,771),o.setStencilTestEnabled(!0),c.unbind()}_createOrResizeResources(r,s,i){const{context:o}=r;this._layerFBOTexture&&this._size[0]===s&&this._size[1]===i||(this._size[0]=s,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(s,i):this._layerFBOTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__.default(o,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:s,height:i}),this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_8__.default(o,[-1,-1,1,-1,-1,1,1,1])))}}


/***/ }),

/***/ 6578:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/DropShadow.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropShadow": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../VertexStream.js */ 33559);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=[1,0],o=[0,1];class a{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)}draw(t,r,a){const{context:l,state:n,painter:u}=t,{materialManager:h}=u,p=this._programDesc,d=r.width,c=r.height,m=[Math.round(d/2),Math.round(c/2)],{blurRadius:_,offsetX:f,offsetY:B,color:g}=a,b=[(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(f/2),(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(B/2)];this._createOrResizeResources(t,d,c,m);const F=this._horizontalBlurFBO,w=this._verticalBlurFBO;l.setStencilWriteMask(0),l.setStencilTestEnabled(!1),l.setDepthWriteEnabled(!1),l.setDepthTestEnabled(!1);const x=this._layerFBOTexture;r.copyToTexture(0,0,d,c,0,0,x),this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_9__.default(l,[-1,-1,1,-1,-1,1,1,1])),l.setViewport(0,0,m[0],m[1]);const T=this._quad;T.bind(),l.setBlendingEnabled(!1);const O=h.getProgram(t,p.blur,[{name:"radius",value:Math.ceil(_)}]);l.useProgram(O),l.bindFramebuffer(F),l.bindTexture(r.colorTexture,4),O.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),O.setUniform2fv("u_offset",b),O.setUniform1i("u_colorTexture",4),O.setUniform2fv("u_texSize",m),O.setUniform2fv("u_direction",s),O.setUniform1f("u_sigma",_),T.draw(),l.bindFramebuffer(w),l.bindTexture(F.colorTexture,5),O.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),O.setUniform2fv("u_offset",[0,0]),O.setUniform1i("u_colorTexture",5),O.setUniform2fv("u_direction",o),T.draw(),l.bindFramebuffer(r),l.setViewport(0,0,d,c);const v=h.getProgram(t,p.composite);l.useProgram(v),l.bindTexture(w.colorTexture,2),v.setUniform1i("u_blurTexture",2),l.bindTexture(x,3),v.setUniform1i("u_layerFBOTexture",3),v.setUniform4fv("u_shadowColor",[g[3]*(g[0]/255),g[3]*(g[1]/255),g[3]*(g[2]/255),g[3]]),T.draw(),l.setBlendingEnabled(!0),l.setStencilTestEnabled(!0),l.setBlendFunction(1,771),T.unbind()}_createOrResizeResources(e,i,s,o){const{context:a}=e;this._horizontalBlurFBO&&this._size[0]===i&&this._size[1]===s||(this._size[0]=i,this._size[1]=s,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(o[0],o[1]):this._horizontalBlurFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__.default(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(o[0],o[1]):this._verticalBlurFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__.default(a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(i,s):this._layerFBOTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__.default(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:s}))}}


/***/ }),

/***/ 56230:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/EffectManager.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EffectManager": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _Bloom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bloom.js */ 73397);
/* harmony import */ var _Blur_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blur.js */ 94270);
/* harmony import */ var _Colorize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Colorize.js */ 5582);
/* harmony import */ var _DropShadow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropShadow.js */ 6578);
/* harmony import */ var _Opacity_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Opacity.js */ 74328);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(e){switch(e){case"bloom":case"blur":case"opacity":case"drop-shadow":return e;default:return"colorize"}}const f={colorize:()=>new _Colorize_js__WEBPACK_IMPORTED_MODULE_2__.Colorize,blur:()=>new _Blur_js__WEBPACK_IMPORTED_MODULE_1__.Blur,bloom:()=>new _Bloom_js__WEBPACK_IMPORTED_MODULE_0__.Bloom,opacity:()=>new _Opacity_js__WEBPACK_IMPORTED_MODULE_4__.Opacity,"drop-shadow":()=>new _DropShadow_js__WEBPACK_IMPORTED_MODULE_3__.DropShadow};class i{constructor(e){this._requestRender=e,this._effectMap=new Map}dispose(){this._requestRender&&(this._requestRender=null),this._effectMap.forEach((e=>e.dispose())),this._effectMap.clear()}getPostProcessingEffects(e){if(!e||0===e.length)return[];const t=[];for(const o of e){const e=c(o.type);let s=this._effectMap.get(e);s||(s=f[e](),this._effectMap.set(e,s)),t.push({postProcessingEffect:s,effect:o})}return t}}


/***/ }),

/***/ 74328:
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Opacity.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Opacity": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ 86550);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(){this._size=[0,0]}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:l,painter:o}=e,{amount:a}=r,h=l.gl,n=this._layerFBOTexture;l.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,n),l.setBlendingEnabled(!0),l.setStencilTestEnabled(!1),l.setDepthTestEnabled(!1),l.setClearColor(0,0,0,0),l.clear(h.COLOR_BUFFER_BIT),o.blitTexture(l,n,9728,a)}_createOrResizeResources(t,r,s){const{context:i}=t;this._layerFBOTexture&&this._size[0]===r&&this._size[1]===s||(this._size[0]=r,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(r,s):this._layerFBOTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__.default(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:r,height:s}))}}


/***/ }),

/***/ 38470:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/fontUtils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFontDecorationTop": () => (/* binding */ s),
/* harmony export */   "getFullyQualifiedFontName": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=-26,r=-18;function t(e){const r=e.toLowerCase().split(" ").join("-");switch(r){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return r}}function n(e){const r=u(e)+c(e);return t(e.family)+(r.length>0?r:"-regular")}function s(t){switch(t){case"underline":return e;case"line-through":return r}return NaN}function u(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function c(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}


/***/ }),

/***/ 7761:
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/painter/RenderPass.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ 18502);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ 31620);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(r,e){var s;this.brushes=r,this.name=e.name,this.drawPhase=e.drawPhase||_enums_js__WEBPACK_IMPORTED_MODULE_2__.WGLDrawPhase.MAP,this._targetFn=e.target,this.effects=e.effects||[],this.enableDefaultDraw=null!=(s=e.enableDefaultDraw)?s:()=>!0}render(r){const{context:e,profiler:t}=r,s=this._targetFn(),a=this.drawPhase&r.drawPhase;if(t.recordPassStart(this.name),a){this.enableDefaultDraw()&&this._doRender(r,s),t.recordPassEnd();for(const a of this.effects){if(!a.enable())continue;const o=a.apply;t.recordPassStart(this.name+"."+o.name),t.recordBrushStart(o.name);const n=a.args&&a.args(),{x:i,y:d,width:f,height:h}=e.getViewport(),c=e.getBoundFramebufferObject();o.bind(r,n),this._doRender(r,s,o.defines),o.draw(r,n),o.unbind(r,n),e.bindFramebuffer(c),e.setViewport(i,d,f,h),t.recordBrushEnd(),t.recordPassEnd()}}}_doRender(t,s,a){if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(s))if((0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.isArrayLike)(s)){for(const r of s)if(r.visible)for(const e of this.brushes)t.profiler.recordBrushStart(e.name),e.prepareState(t,r,a),e.draw(t,r,a),t.profiler.recordBrushEnd()}else for(const r of this.brushes)t.profiler.recordBrushStart(r.name),r.prepareState(t,s,a),r.draw(t,s,a),t.profiler.recordBrushEnd()}}


/***/ }),

/***/ 26113:
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BitBlitPrograms.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bitBlit": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ 17313);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e={shaders:{vertexShader:(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__.resolveIncludes)("bitBlit/bitBlit.vert"),fragmentShader:(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__.resolveIncludes)("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])};


/***/ }),

/***/ 49923:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BlendPrograms.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blend": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ 17313);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=e=>e.replace("-","_").toUpperCase(),a=e=>`#define ${r(e)}\n`,t={attributes:new Map([["a_pos",0],["a_tex",1]]),shaders:r=>({vertexShader:a(r)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__.resolveIncludes)("blend/blend.vert"),fragmentShader:a(r)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__.resolveIncludes)("blend/blend.frag")})};


/***/ }),

/***/ 82206:
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/HighlightPrograms.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blur": () => (/* binding */ r),
/* harmony export */   "highlight": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ 17313);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={shaders:{vertexShader:(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__.resolveIncludes)("highlight/textured.vert"),fragmentShader:(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__.resolveIncludes)("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},r={shaders:{vertexShader:(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__.resolveIncludes)("highlight/textured.vert"),fragmentShader:(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__.resolveIncludes)("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])};


/***/ }),

/***/ 37735:
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MagnifierPrograms.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMagnifierProgram": () => (/* binding */ i),
/* harmony export */   "magnifierProgramTemplate": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../webgl/programUtils.js */ 80541);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sources/resolver.js */ 17313);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t={shaders:{vertexShader:(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("magnifier/magnifier.vert"),fragmentShader:(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_9__.resolveIncludes)("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function i(e){return (0,_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__.createProgram)(e,t)}


/***/ }),

/***/ 26607:
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MaterialPrograms.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProgramTemplate": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ 17313);
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/programUtils.js */ 80541);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=r=>{let t="";t+=r[0].toUpperCase();for(let e=1;e<r.length;e++){const s=r[e];s===s.toUpperCase()?(t+="_",t+=s):t+=s.toUpperCase()}return t},s=r=>{const s={};for(const t in r){s[e(t)]=r[t]}return (0,_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_1__.glslifyDefineMap)(s)},o=(t,e,o)=>{const n=t+t.substring(t.lastIndexOf("/")),a=e+e.substring(e.lastIndexOf("/"));return{attributes:o,shaders:t=>({vertexShader:s(t)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__.resolveIncludes)(`${n}.vert`),fragmentShader:s(t)+(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__.resolveIncludes)(`${a}.frag`)})}};


/***/ }),

/***/ 47267:
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/StencilPrograms.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stencil": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ 17313);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r={shaders:{vertexShader:(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__.resolveIncludes)("stencil/stencil.vert"),fragmentShader:(0,_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__.resolveIncludes)("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])};


/***/ }),

/***/ 17793:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/symbolUtils.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyFromSymbol": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){switch(e.type){case"esriSMS":return`${e.style}.${e.path}`;case"esriSLS":return`${e.style}.${e.cap}`;case"esriSFS":return`${e.style}`;case"esriPFS":case"esriPMS":return e.imageData?`${e.imageData}${e.width}${e.height}`:`${e.url}${e.width}${e.height}`;default:return"mosaicHash"in e?e.mosaicHash:JSON.stringify(e)}}


/***/ }),

/***/ 22946:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/magnifier/MagnifierView2D.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../request.js */ 30351);
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Handles.js */ 65333);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/mathUtils.js */ 88415);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/urlUtils.js */ 30164);
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/watchUtils.js */ 11652);
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ 87266);
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../engine/DisplayObject.js */ 17821);
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../engine/webgl/enums.js */ 31620);
/* harmony import */ var _engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../engine/webgl/shaders/MagnifierPrograms.js */ 37735);
/* harmony import */ var _magnifier_resources_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../magnifier/resources.js */ 82086);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/





















class b extends _engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_17__.DisplayObject {
  constructor() {
    super(), this._handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_2__.default(), this._resourcePixelRatio = 1, this.visible = !1;
  }

  destroy() {
    this._handles.destroy(), this._handles = null, this._disposeRenderResources(), this._resourcesTask && (this._resourcesTask.abort(), this._resourcesTask = null);
  }

  get background() {
    return this._background;
  }

  set background(e) {
    this._background = e, this.requestRender();
  }

  get magnifier() {
    return this._magnifier;
  }

  set magnifier(e) {
    this._magnifier = e, this._handles.removeAll(), this._handles.add([(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_7__.init)(e, "version", () => {
      this.visible = e.visible && (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(e.position) && e.size > 0, this.requestRender();
    }), e.watch(["mask", "overlay"], () => this._reloadResources()), e.watch("size", () => {
      this._disposeRenderResources(), this.requestRender();
    })]);
  }

  _createTransforms() {
    return {
      dvs: (0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_8__.c)()
    };
  }

  doRender(e) {
    var r;
    const i = e.context;
    if (!this._resourcesTask) return void this._reloadResources();
    if (e.drawPhase !== _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.WGLDrawPhase.MAP || !this._canRender()) return;

    this._updateResources(e);

    const a = this._magnifier;
    if ((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(a.position)) return;
    const o = e.pixelRatio,
          n = a.size * o,
          l = 1 / a.factor,
          h = Math.ceil(l * n);

    this._readbackTexture.resize(h, h);

    const {
      size: m
    } = e.state,
          c = o * m[0],
          u = o * m[1],
          d = .5 * h,
          _ = .5 * h,
          f = (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__.clamp)(o * a.position.x, d, c - d - 1),
          g = (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__.clamp)(u - o * a.position.y, _, u - _ - 1);

    i.setBlendingEnabled(!0);
    const b = f - d,
          x = g - _,
          y = this._readbackTexture;
    i.bindTexture(y, 0), i.gl.copyTexImage2D(y.descriptor.target, 0, y.descriptor.pixelFormat, b, x, h, h, 0);
    const k = null == (r = this.background) ? void 0 : r.color,
          T = k ? [k.a * k.r / 255, k.a * k.g / 255, k.a * k.b / 255, k.a] : [1, 1, 1, 1],
          v = (f + a.offset.x * o) / c * 2 - 1,
          R = (g - a.offset.y * o) / u * 2 - 1,
          j = n / c * 2,
          w = n / u * 2,
          A = this._program;
    i.bindVAO(this._vertexArrayObject), i.bindTexture(this._overlayTexture, 6), i.bindTexture(this._maskTexture, 7), i.useProgram(A), A.setUniform4fv("u_background", T), A.setUniform1i("u_readbackTexture", 0), A.setUniform1i("u_overlayTexture", 6), A.setUniform1i("u_maskTexture", 7), A.setUniform4f("u_drawPos", v, R, j, w), A.setUniform1i("u_maskEnabled", a.maskEnabled ? 1 : 0), A.setUniform1i("u_overlayEnabled", a.overlayEnabled ? 1 : 0), i.setStencilTestEnabled(!1), i.setColorMask(!0, !0, !0, !0), i.drawArrays(5, 0, 4), i.bindVAO();
  }

  _canRender() {
    return this.mask && this.overlay && null != this._magnifier;
  }

  _reloadResources() {
    var _this = this;

    this._resourcesTask && this._resourcesTask.abort();
    const r = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(this._magnifier) ? this._magnifier.maskUrl : null,
          s = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(this._magnifier) ? this._magnifier.overlayUrl : null;
    this._resourcesTask = (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createTask)( /*#__PURE__*/function () {
      var _ref = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (a) {
        const o = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(r) || (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isNone)(s) ? (0,_magnifier_resources_js__WEBPACK_IMPORTED_MODULE_20__.loadMagnifierResources)(a) : null,
              n = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(r) ? (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(r, {
          responseType: "image",
          signal: a
        }).then(e => e.data) : o.then(e => e.mask),
              l = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(s) ? (0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(s, {
          responseType: "image",
          signal: a
        }).then(e => e.data) : o.then(e => e.overlay),
              [h, m] = yield Promise.all([n, l]);
        _this.mask = h, _this.overlay = m, _this._disposeRenderResources(), _this.requestRender();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  _disposeRenderResources() {
    this._readbackTexture = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.disposeMaybe)(this._readbackTexture), this._overlayTexture = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.disposeMaybe)(this._overlayTexture), this._maskTexture = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.disposeMaybe)(this._maskTexture), this._vertexArrayObject = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.disposeMaybe)(this._vertexArrayObject), this._program = (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.disposeMaybe)(this._program);
  }

  _updateResources(e) {
    if (e.pixelRatio !== this._resourcePixelRatio && this._disposeRenderResources(), this._readbackTexture) return;
    const r = e.context;
    this._resourcePixelRatio = e.pixelRatio;
    const s = Math.ceil(this._magnifier.size * e.pixelRatio);
    this._program = (0,_engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_19__.createMagnifierProgram)(r);
    const t = {
      geometry: [{
        name: "a_pos",
        count: 2,
        type: 5123,
        offset: 0,
        stride: 4,
        normalized: !1,
        divisor: 0
      }]
    },
          i = new Uint16Array([0, 1, 0, 0, 1, 1, 1, 0]),
          a = _engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_19__.magnifierProgramTemplate.attributes;
    this._vertexArrayObject = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_16__.default(r, a, t, {
      geometry: _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_9__.default.createVertex(r, 35044, i)
    }), this.overlay.width = s, this.overlay.height = s, this._overlayTexture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_15__.default(r, {
      target: 3553,
      pixelFormat: 6408,
      internalFormat: 6408,
      dataType: 5121,
      wrapMode: 33071,
      samplingMode: 9728,
      flipped: !0,
      preMultiplyAlpha: !(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.isSVG)(this.overlay.src) || !e.context.driverTest.svgAlwaysPremultipliesAlpha
    }, this.overlay), this.mask.width = s, this.mask.height = s, this._maskTexture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_15__.default(r, {
      target: 3553,
      pixelFormat: 6406,
      internalFormat: 6406,
      dataType: 5121,
      wrapMode: 33071,
      samplingMode: 9728,
      flipped: !0
    }, this.mask);
    const o = 1 / this._magnifier.factor;
    this._readbackTexture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_15__.default(r, {
      target: 3553,
      pixelFormat: 6408,
      internalFormat: 6408,
      dataType: 5121,
      wrapMode: 33071,
      samplingMode: 9729,
      flipped: !1,
      width: Math.ceil(o * s),
      height: Math.ceil(o * s)
    });
  }

}



/***/ }),

/***/ 78438:
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/mapViewDeps.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stage": () => (/* reexport safe */ _engine_Stage_js__WEBPACK_IMPORTED_MODULE_0__.Stage),
/* harmony export */   "LabelManager": () => (/* reexport safe */ _LabelManager_js__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "GraphicsView2D": () => (/* reexport safe */ _layers_graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "GraphicContainer": () => (/* reexport safe */ _layers_graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "MapViewNavigation": () => (/* reexport safe */ _navigation_MapViewNavigation_js__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "MagnifierView2D": () => (/* reexport safe */ _magnifier_MagnifierView2D_js__WEBPACK_IMPORTED_MODULE_5__.default)
/* harmony export */ });
/* harmony import */ var _engine_Stage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/Stage.js */ 78137);
/* harmony import */ var _LabelManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabelManager.js */ 60235);
/* harmony import */ var _layers_graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers/graphics/GraphicsView2D.js */ 20483);
/* harmony import */ var _layers_graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layers/graphics/GraphicContainer.js */ 84853);
/* harmony import */ var _navigation_MapViewNavigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/MapViewNavigation.js */ 94361);
/* harmony import */ var _magnifier_MagnifierView2D_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./magnifier/MagnifierView2D.js */ 22946);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



/***/ }),

/***/ 94361:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/MapViewNavigation.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Viewpoint.js */ 10544);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Accessor.js */ 98240);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../geometry/Point.js */ 7309);
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../viewpointUtils.js */ 55008);
/* harmony import */ var _ZoomBox_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ZoomBox.js */ 20302);
/* harmony import */ var _actions_Pan_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions/Pan.js */ 15582);
/* harmony import */ var _actions_Pinch_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions/Pinch.js */ 60421);
/* harmony import */ var _actions_Rotate_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./actions/Rotate.js */ 76164);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/














const l = 10,
      w = 1,
      v = new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__.default({
  targetGeometry: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__.default()
}),
      g = [0, 0],
      d = 250;

let _ = class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__.default {
  constructor(t) {
    super(t), this._endTimer = null, this.animationManager = null;
  }

  initialize() {
    this.pan = new _actions_Pan_js__WEBPACK_IMPORTED_MODULE_12__.default({
      navigation: this
    }), this.rotate = new _actions_Rotate_js__WEBPACK_IMPORTED_MODULE_14__.default({
      navigation: this
    }), this.pinch = new _actions_Pinch_js__WEBPACK_IMPORTED_MODULE_13__.default({
      navigation: this
    }), this.zoomBox = new _ZoomBox_js__WEBPACK_IMPORTED_MODULE_11__.default({
      view: this.view,
      navigation: this
    });
  }

  destroy() {
    this.zoomBox.destroy(), this.zoomBox = null, this.animationManager = null;
  }

  begin() {
    this._set("interacting", !0);
  }

  end() {
    this._lastEventTimestamp = performance.now(), this._startTimer(d);
  }

  zoom(t, i = this._getDefaultAnchor()) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this.stop(), _this.begin(), _this.view.constraints.snapToZoom && _this.view.constraints.effectiveLODs) return t < 1 ? _this.zoomIn(i) : _this.zoomOut(i);

      _this.setViewpoint(i, t, 0, [0, 0]);
    })();
  }

  zoomIn(t) {
    var _this2 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = _this2.view,
            o = i.constraints.snapToNextScale(i.scale);
      return _this2._zoomToScale(o, t);
    })();
  }

  zoomOut(t) {
    var _this3 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const i = _this3.view,
            o = i.constraints.snapToPreviousScale(i.scale);
      return _this3._zoomToScale(o, t);
    })();
  }

  setViewpoint(t, i, o, n) {
    this.begin(), this.view.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, t, i, o, n), this.end();
  }

  setViewpointImmediate(t, i = 0, o = [0, 0], n = this._getDefaultAnchor()) {
    this.view.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, n, t, i, o);
  }

  continousRotateClockwise() {
    const t = this.get("view.viewpoint");
    this.animationManager.animateContinous(t, t => {
      (0,_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_10__.rotateBy)(t, t, -w);
    });
  }

  continousRotateCounterclockwise() {
    const t = this.get("view.viewpoint");
    this.animationManager.animateContinous(t, t => {
      (0,_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_10__.rotateBy)(t, t, w);
    });
  }

  resetRotation() {
    this.view.rotation = 0;
  }

  continousPanLeft() {
    this._continuousPan([-l, 0]);
  }

  continousPanRight() {
    this._continuousPan([l, 0]);
  }

  continousPanUp() {
    this._continuousPan([0, l]);
  }

  continousPanDown() {
    this._continuousPan([0, -l]);
  }

  stop() {
    this.pan.stopMomentumNavigation(), this.animationManager.stop(), this.end(), null !== this._endTimer && (clearTimeout(this._endTimer), this._endTimer = null, this._set("interacting", !1));
  }

  _continuousPan(t) {
    const i = this.get("view.viewpoint");
    this.animationManager.animateContinous(i, i => {
      (0,_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_10__.translateBy)(i, i, t), this.view.constraints.constrainByGeometry(i);
    });
  }

  _startTimer(t) {
    return null !== this._endTimer || (this._endTimer = setTimeout(() => {
      this._endTimer = null;

      const t = performance.now() - this._lastEventTimestamp;

      t < d ? this._endTimer = this._startTimer(t) : this._set("interacting", !1);
    }, t)), this._endTimer;
  }

  _getDefaultAnchor() {
    const {
      size: t,
      padding: {
        left: i,
        right: o,
        top: n,
        bottom: e
      }
    } = this.view;
    return g[0] = .5 * (t[0] - o + i), g[1] = .5 * (t[1] - e + n), g;
  }

  _zoomToScale(t, i = this._getDefaultAnchor()) {
    var _this4 = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        view: o
      } = _this4,
            {
        constraints: n,
        scale: e,
        viewpoint: s,
        size: a,
        padding: r
      } = o,
            m = n.canZoomInTo(t),
            h = n.canZoomOutTo(t);
      if (!(t < e && !m || t > e && !h)) return (0,_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_10__.padAndScaleAndRotateBy)(v, s, t / e, 0, i, a, r), n.constrainByGeometry(v), o.goTo(v, {
        animate: !0
      });
    })();
  }

  _scaleRotateTranslateViewpoint(t, i, o, n, e) {
    const {
      view: s
    } = this,
          {
      size: a,
      padding: m,
      constraints: h,
      scale: p,
      viewpoint: u
    } = s,
          l = p * o,
          w = h.canZoomInTo(l),
          v = h.canZoomOutTo(l);
    return (o < 1 && !w || o > 1 && !v) && (o = 1), (0,_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_10__.translateBy)(u, u, e), (0,_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_10__.padAndScaleAndRotateBy)(t, u, o, n, i, a, m), h.constrainByGeometry(t);
  }

};

(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], _.prototype, "animationManager", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({
  type: Boolean,
  readOnly: !0
})], _.prototype, "interacting", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], _.prototype, "pan", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], _.prototype, "pinch", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], _.prototype, "rotate", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], _.prototype, "view", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()], _.prototype, "zoomBox", void 0), _ = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.2d.navigation.MapViewNavigation")], _);
const T = _;


/***/ }),

/***/ 20302:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/ZoomBox.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Accessor.js */ 98240);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/screenUtils.js */ 75244);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _input_InputManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../input/InputManager.js */ 73094);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a={container:"esri-zoom-box__container",overlay:"esri-zoom-box__overlay",background:"esri-zoom-box__overlay-background",box:"esri-zoom-box__outline"},n={zoom:"Shift",counter:"Ctrl"};let h=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__.default{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(t){this._handles&&this._handles.forEach((t=>{t.remove()})),this._handles=null,this._destroyOverlay(),this._set("view",t),t&&(t.on("drag",[n.zoom],(t=>this._handleDrag(t,1)),_input_InputManager_js__WEBPACK_IMPORTED_MODULE_8__.ViewEventPriorities.INTERNAL),t.on("drag",[n.zoom,n.counter],(t=>this._handleDrag(t,-1)),_input_InputManager_js__WEBPACK_IMPORTED_MODULE_8__.ViewEventPriorities.INTERNAL))}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(t,e,r,i){this._box.x=t,this._box.y=e,this._box.width=r,this._box.height=i,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(t,e,i,o,s){const a=this.view,n=a.toMap((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__.createScreenPoint)(t+.5*i,e+.5*o));let h=Math.max(i/a.width,o/a.height);-1===s&&(h=1/h),this._destroyOverlay(),this.navigation.end(),a.goTo({center:n,scale:a.scale*h})}_updateBox(t,e,r,i){const o=this._boxShape;o.setAttributeNS(null,"x",""+t),o.setAttributeNS(null,"y",""+e),o.setAttributeNS(null,"width",""+r),o.setAttributeNS(null,"height",""+i),o.setAttributeNS(null,"class",a.box)}_updateBackground(t,e,r,i){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,r,i,this.view.width,this.view.height))}_createContainer(){const t=document.createElement("div");t.className=a.container,this.view.root.appendChild(t),this._container=t}_createOverlay(){const t=this.view.width,e=this.view.height,r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),r.setAttributeNS(null,"class",a.background);const i=document.createElementNS("http://www.w3.org/2000/svg","rect"),o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),o.setAttributeNS(null,"class",a.overlay),o.appendChild(r),o.appendChild(i),this._container.appendChild(o),this._backgroundShape=r,this._boxShape=i,this._overlay=o}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(t,e,r,i,o,s){const a=t+r,n=e+i;return"M 0 0 L "+o+" 0 L "+o+" "+s+" L 0 "+s+" ZM "+t+" "+e+" L "+t+" "+n+" L "+a+" "+n+" L "+a+" "+e+" Z"}_handleDrag(t,e){const r=t.x,i=t.y,o=t.origin.x,s=t.origin.y;let a,n,h,l;switch(r>o?(a=o,h=r-o):(a=r,h=o-r),i>s?(n=s,l=i-s):(n=i,l=s-i),t.action){case"start":this._start();break;case"update":this._update(a,n,h,l);break;case"end":this._end(a,n,h,l,e)}t.stopPropagation()}_redraw(){if(!this._rafId)return;if(this._rafId=null,!this._overlay)return;const{x:t,y:e,width:r,height:i}=this._box;this._updateBox(t,e,r,i),this._updateBackground(t,e,r,i),this._rafId=requestAnimationFrame(this._redraw)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],h.prototype,"navigation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],h.prototype,"view",null),h=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.views.2d.navigation.ZoomBox")],h);const l=h;


/***/ }),

/***/ 15582:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Pan.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ 61243);
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Viewpoint.js */ 10544);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Accessor.js */ 98240);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ 75244);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ 63702);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ 33989);
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../viewpointUtils.js */ 55008);
/* harmony import */ var _navigation_PanPlanarMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../navigation/PanPlanarMomentumEstimator.js */ 92395);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../geometry/Point.js */ 7309);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__.default{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new _navigation_PanPlanarMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_13__.PanPlanarMomentumEstimator(500,6,.92),this.momentum=null,this.tmpMomentum=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.c)(),this.momentumFinished=!1,this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__.default({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__.default,scale:0,rotation:0}),this.watch("momentumFinished",(t=>{t&&this.navigation.stop()}))}begin(t,i){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(i),this.previousDrag=i}update(t,i){this.addToEstimator(i);let o=i.center.x,m=i.center.y;const s=this.previousDrag;o=s?s.center.x-o:-o,m=s?m-s.center.y:m,t.viewpoint=(0,_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__.translateBy)(this.viewpoint,t.viewpoint,[o||0,m||0]),this.previousDrag=i}end(t,i){this.addToEstimator(i);const o=t.navigation.momentumEnabled;this.momentum=o?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this.previousDrag=null,this.navigation.end()}addToEstimator(t){const i=t.center.x,o=t.center.y,s=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.createScreenPointArray)(-i,o),e=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.f)(-i,o,0);this.momentumEstimator.add(s,e,.001*t.timestamp)}onAnimationUpdate(t){this.navigation.animationManager.animateContinous(t.viewpoint,((i,o)=>{this.momentumFinished=!this.momentum||this.momentum.isFinished(this.animationTime);const m=.001*o;if(!this.momentumFinished){const o=this.momentum.valueDelta(this.animationTime,m);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_10__.a)(this.tmpMomentum,this.momentum.direction,o),(0,_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__.translateBy)(i,i,this.tmpMomentum),t.constraints.constrainByGeometry(i)}this.animationTime+=m}))}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],c.prototype,"momentumFinished",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],c.prototype,"viewpoint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],c.prototype,"navigation",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.views.2d.navigation.actions.Pan")],c);const d=c;


/***/ }),

/***/ 60421:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Pinch.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ 61243);
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Viewpoint.js */ 10544);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Accessor.js */ 98240);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ 68292);
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ 41558);
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../viewpointUtils.js */ 55008);
/* harmony import */ var _navigation_RotationMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../navigation/RotationMomentumEstimator.js */ 42690);
/* harmony import */ var _navigation_ZoomMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../navigation/ZoomMomentumEstimator.js */ 20416);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../geometry/Point.js */ 7309);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__.default{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._rotationMomentumEstimator=new _navigation_RotationMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_12__.RotationMomentumEstimator(.6,.15,.95),this._rotationDirection=1,this._zoomDirection=1,this._zoomMomentumEstimator=new _navigation_ZoomMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_13__.ZoomMomentumEstimator,this._zoomOnly=null,this.zoomMomentum=null,this.rotateMomentum=null,this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__.default({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__.default,scale:0,rotation:0}),this.watch("_momentumFinished",(t=>{t&&this.navigation.stop()}))}begin(t,o){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=o.angle,this._previousRadius=this._startRadius=o.radius,this._previousCenter=o.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,o.timestamp),this.addToZoomEstimator(o,1)}update(t,o){null===this._updateTimestamp&&(this._updateTimestamp=o.timestamp);const i=o.angle,s=o.radius,e=o.center,n=Math.abs(180*(i-this._startAngle)/Math.PI),m=Math.abs(s-this._startRadius),a=this._startRadius/s;if(this._previousRadius){const r=s/this._previousRadius;let h=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=h>=0?1:-1,this._zoomDirection=r>=1?1:-1,t.constraints.rotationEnabled?(null===this._zoomOnly&&o.timestamp-this._updateTimestamp>200&&(this._zoomOnly=m-n>0),null===this._zoomOnly||this._zoomOnly?h=0:this.addToRotateEstimator(i-this._startAngle,o.timestamp)):h=0,this.addToZoomEstimator(o,a),this.navigation.setViewpoint([e.x,e.y],1/r,h,[this._previousCenter.x-e.x,e.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=s,this._previousCenter=e}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()}addToRotateEstimator(t,o){this._rotationMomentumEstimator.add(t,.001*o)}addToZoomEstimator(t,o){this._zoomMomentumEstimator.add(o,.001*t.timestamp)}canZoomIn(t){const o=t.scale,i=t.constraints.effectiveMaxScale;return 0===i||o>i}canZoomOut(t){const o=t.scale,i=t.constraints.effectiveMinScale;return 0===i||o<i}onAnimationUpdate(t){this.navigation.animationManager.animateContinous(t.viewpoint,((o,i)=>{const s=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,e=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),u=s||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),p=.001*i;if(this._momentumFinished=e&&u,!this._momentumFinished){const i=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,p))*this._rotationDirection*180/Math.PI:0;let s=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,p)):1;const e=(0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__.a)(),u=(0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__.a)();if(this._previousCenter){(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__.s)(e,this._previousCenter.x,this._previousCenter.y),(0,_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__.getPaddingScreenTranslation)(u,t.size,t.padding),(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__.m)(e,e,u);const{constraints:a,scale:p}=t,c=p*s;s<1&&!a.canZoomInTo(c)?(s=p/a.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):s>1&&!a.canZoomOutTo(c)&&(s=p/a.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),(0,_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__.scaleAndRotateBy)(o,t.viewpoint,s,i,e,t.size),t.constraints.constrainByGeometry(o)}}this._animationTime+=p}))}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],l.prototype,"_momentumFinished",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],l.prototype,"viewpoint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],l.prototype,"navigation",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.2d.navigation.actions.Pinch")],l);const _=l;


/***/ }),

/***/ 76164:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Rotate.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ 61243);
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Viewpoint.js */ 10544);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Accessor.js */ 98240);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ 68292);
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ 41558);
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../viewpointUtils.js */ 55008);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/Point.js */ 7309);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=(0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__.a)(),d=(0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__.a)();let j=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_3__.default{constructor(t){super(t),this._previousCenter=(0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__.a)(),this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_2__.default({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__.default,scale:0,rotation:0})}begin(t,e){this.navigation.begin(),(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__.s)(this._previousCenter,e.center.x,e.center.y)}update(t,e){const{state:{size:o,padding:r}}=t;(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__.s)(u,e.center.x,e.center.y),(0,_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__.getAnchor)(d,o,r),t.viewpoint=(0,_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__.rotateBy)(this.viewpoint,t.state.paddedViewState.viewpoint,(0,_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_11__.angleBetween)(d,this._previousCenter,u)),(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__.c)(this._previousCenter,u)}end(){this.navigation.end()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],j.prototype,"viewpoint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],j.prototype,"navigation",void 0),j=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.2d.actions.Rotate")],j);const h=j;


/***/ }),

/***/ 82086:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/magnifier/resources.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMagnifierResources": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 7808);
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../support/requestImageUtils.js */ 55481);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



function s(_x) {
  return _s.apply(this, arguments);
}

function _s() {
  _s = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (s) {
    const r = __webpack_require__.e(/*! import() */ 4811).then(__webpack_require__.bind(__webpack_require__, /*! ./mask-svg.js */ 94811)),
          i = __webpack_require__.e(/*! import() */ 7875).then(__webpack_require__.bind(__webpack_require__, /*! ./overlay-svg.js */ 7875)),
          o = (0,_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_2__.requestImage)((yield r).default, {
      signal: s
    }),
          e = (0,_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_2__.requestImage)((yield i).default, {
      signal: s
    }),
          m = {
      mask: yield o,
      overlay: yield e
    };
    return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(s), m;
  });
  return _s.apply(this, arguments);
}



/***/ }),

/***/ 32790:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/FilteredFiniteDifference.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilteredFiniteDifference": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t){this.gain=t}update(t){if(this.hasLastValue){const e=this.computeDelta(t);this.updateDelta(e)}this.lastValue=t}reset(){this.lastValue=void 0,this.filteredDelta=void 0}get hasLastValue(){return void 0!==this.lastValue}get hasFilteredDelta(){return void 0!==this.filteredDelta}computeDelta(t){return t-this.lastValue}updateDelta(t){this.hasFilteredDelta?this.filteredDelta=(1-this.gain)*this.filteredDelta+this.gain*t:this.filteredDelta=t}}


/***/ }),

/***/ 45988:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/Momentum.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Momentum": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t,i,o){this._initialVelocity=t,this._stopVelocity=i,this._friction=o,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(t){return t>this.duration}get friction(){return this._friction}value(t){return this.valueFromInitialVelocity(this._initialVelocity,t)}valueDelta(t,i){const o=this.value(t);return this.value(t+i)-o}valueFromInitialVelocity(t,i){i=Math.min(i,this.duration);const o=1-this.friction;return t*(o**i-1)/Math.log(o)}}


/***/ }),

/***/ 89801:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/MomentumEstimator.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MomentumEstimator": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ 88415);
/* harmony import */ var _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilteredFiniteDifference.js */ 32790);
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Momentum.js */ 45988);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t=2.5,i=.01,s=.95,l=12){this.minimumInitialVelocity=t,this.stopVelocity=i,this.friction=s,this.maxVelocity=l,this.enabled=!0,this.value=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__.FilteredFiniteDifference(.8),this.time=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__.FilteredFiniteDifference(.3)}add(t,e){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta){const e=this.value.computeDelta(t);this.value.filteredDelta*e<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta)return null;let e=this.value.filteredDelta/this.time.filteredDelta;return e=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(e,-this.maxVelocity,this.maxVelocity),Math.abs(e)<this.minimumInitialVelocity?null:this.createMomentum(e,this.stopVelocity,this.friction)}createMomentum(t,e,s){return new _Momentum_js__WEBPACK_IMPORTED_MODULE_2__.Momentum(t,e,s)}}


/***/ }),

/***/ 92395:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/PanPlanarMomentumEstimator.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanPlanarMomentum": () => (/* binding */ c),
/* harmony export */   "PanPlanarMomentumEstimator": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/vec3.js */ 63702);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ 33989);
/* harmony import */ var _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilteredFiniteDifference.js */ 32790);
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Momentum.js */ 45988);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c extends _Momentum_js__WEBPACK_IMPORTED_MODULE_3__.Momentum{constructor(e,t,i,s,n){super(e,t,i),this.sceneVelocity=s,this.direction=n}value(e){return super.valueFromInitialVelocity(this.sceneVelocity,e)}}class h{constructor(e=300,t=12,i=.84){this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=i,this.enabled=!0,this.time=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__.FilteredFiniteDifference(.6),this.screen=[new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__.FilteredFiniteDifference(.4),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__.FilteredFiniteDifference(.4)],this.scene=[new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__.FilteredFiniteDifference(.6),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__.FilteredFiniteDifference(.6),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__.FilteredFiniteDifference(.6)],this.tmpDirection=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)()}add(e,t,i){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(i)<.015)return}this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.scene[0].update(t[0]),this.scene[1].update(t[1]),this.scene[2].update(t[2]),this.time.update(i)}}reset(){this.screen[0].reset(),this.screen[1].reset(),this.scene[0].reset(),this.scene[1].reset(),this.scene[2].reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.screen[0].hasFilteredDelta)return null;const e=this.screen[0].filteredDelta,t=this.screen[1].filteredDelta,i=Math.sqrt(e*e+t*t)/this.time.filteredDelta;return Math.abs(i)<this.minimumInitialVelocity?null:this.createMomentum(i,this.stopVelocity,this.friction)}createMomentum(s,n,r){(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.s)(this.tmpDirection,this.scene[0].filteredDelta,this.scene[1].filteredDelta,this.scene[2].filteredDelta);const h=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.l)(this.tmpDirection);h>0&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.tmpDirection,this.tmpDirection,1/h);const a=h/this.time.filteredDelta;return new c(s,n,r,a,this.tmpDirection)}}


/***/ }),

/***/ 42690:
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/RotationMomentumEstimator.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationMomentumEstimator": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MomentumEstimator.js */ 89801);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a extends _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_0__.MomentumEstimator{constructor(t=3,a=.01,s=.95,e=12){super(t,a,s,e)}add(t,a){if(this.value.hasLastValue){const a=this.value.lastValue;let s=t-a;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;t=a+s}super.add(t,a)}}


/***/ }),

/***/ 20416:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/ZoomMomentumEstimator.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZoomMomentum": () => (/* binding */ r),
/* harmony export */   "ZoomMomentumEstimator": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Momentum.js */ 45988);
/* harmony import */ var _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MomentumEstimator.js */ 89801);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends _Momentum_js__WEBPACK_IMPORTED_MODULE_0__.Momentum{constructor(e,t,r){super(e,t,r)}value(e){const t=super.value(e);return Math.exp(t)}valueDelta(e,t){const r=super.value(e),s=super.value(e+t)-r;return Math.exp(s)}}class s extends _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_1__.MomentumEstimator{constructor(e=2.5,t=.01,r=.95,s=12){super(e,t,r,s)}add(e,t){super.add(Math.log(e),t)}createMomentum(e,t,s){return new r(e,t,s)}}


/***/ }),

/***/ 33946:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/support/AllocationTracer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllocationTracer": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{constructor(o){this._allocations=new Map,o?Error.stackTraceLimit=1/0:(this.add=()=>{},this.remove=()=>{})}add(o){this._allocations.set(o,(new Error).stack)}remove(o){this._allocations.delete(o)}print(){if(this._allocations.size>0){console.log(`${this._allocations.size} live object allocations:`);const o=new Map;this._allocations.forEach((s=>{var t;o.set(s,(null!=(t=o.get(s))?t:0)+1)})),o.forEach(((o,s)=>{const t=s.split("\n");t.shift(),t.shift(),console.log(`${o}: ${t.shift()}`),t.forEach((o=>console.log("   ",o)))}))}}}


/***/ }),

/***/ 45661:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/InstanceCounter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstanceCounter": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _support_AllocationTracer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../support/AllocationTracer.js */ 33946);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ 42909);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=!1;class s{constructor(){for(this._current=new Array,this._max=new Array,this._allocations=new _support_AllocationTracer_js__WEBPACK_IMPORTED_MODULE_0__.AllocationTracer(e);this._current.length<_enums_js__WEBPACK_IMPORTED_MODULE_1__.ResourceType.COUNT;)this._current.push(0),this._max.push(0)}resetMax(){for(this._max.length=0;this._max.length<this._current.length;)this._max.push(0)}increment(t,r){const e=++this._current[t];this._max[t]=Math.max(e,this._max[t]),this._allocations.add(r)}decrement(t,r){--this._current[t],this._allocations.remove(r)}get max(){return this._max}get current(){return this._current}get total(){return this.current.reduce(((t,r)=>t+r),0)}printResourceCount(){if(this.total>0){console.log("Live objects:");for(let t=0;t<_enums_js__WEBPACK_IMPORTED_MODULE_1__.ResourceType.COUNT;++t){const e=this._current[t];e>0&&console.log(`${_enums_js__WEBPACK_IMPORTED_MODULE_1__.ResourceType[t]}: ${e}`)}}this._allocations.print()}}


/***/ }),

/***/ 98129:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/RenderingContext.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderingContext": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkWebGLError.js */ 59450);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums.js */ 42909);
/* harmony import */ var _InstanceCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InstanceCounter.js */ 45661);
/* harmony import */ var _renderState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderState.js */ 89501);
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Texture.js */ 36079);
/* harmony import */ var _WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebGLDriverTest.js */ 93790);
/* harmony import */ var _capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./capabilities/isWebGL2Context.js */ 31555);
/* harmony import */ var _capabilities_load_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./capabilities/load.js */ 97574);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{constructor(t,e){this.gl=t,this.instanceCounter=new _InstanceCounter_js__WEBPACK_IMPORTED_MODULE_3__.InstanceCounter,this._blendEnabled=!1,this._blendColorState={r:0,g:0,b:0,a:0},this._blendFunctionState={srcRGB:1,dstRGB:0,srcAlpha:1,dstAlpha:0},this._blendEquationState={mode:32774,modeAlpha:32774},this._colorMaskState={r:!0,g:!0,b:!0,a:!0},this._polygonCullingEnabled=!1,this._cullFace=1029,this._frontFace=2305,this._scissorTestEnabled=!1,this._scissorRect={x:0,y:0,width:0,height:0},this._depthTestEnabled=!1,this._depthFunction=513,this._clearDepth=1,this._depthWriteEnabled=!0,this._depthRange={zNear:0,zFar:1},this._viewport=null,this._stencilTestEnabled=!1,this._polygonOffsetFillEnabled=!1,this._polygonOffset=[0,0],this._stencilFunction={face:1032,func:519,ref:0,mask:1},this._clearStencil=0,this._stencilWriteMask=1,this._stencilOperation={face:1032,fail:7680,zFail:7680,zPass:7680},this._clearColor={r:0,g:0,b:0,a:0},this._activeShaderProgram=null,this._activeVertexBuffer=null,this._activeIndexBuffer=null,this._activeFramebuffer=null,this._activeRenderbuffer=null,this._activeTextureUnit=0,this._textureUnitMap=new Array,this._numOfDrawCalls=0,this._numOfTriangles=0,this.webglVersion=(0,_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_7__.default)(t)?"webgl2":"webgl","webgl"===this.webglVersion&&this.gl.getExtension("OES_element_index_uint"),this._capabilities=(0,_capabilities_load_js__WEBPACK_IMPORTED_MODULE_8__.loadCapabilities)(t,e),this._parameters=this._loadParameters(e);const i=this.gl.getParameter(this.gl.VIEWPORT);this._viewport={x:i[0],y:i[1],width:i[2],height:i[3]},this._stateTracker=new _renderState_js__WEBPACK_IMPORTED_MODULE_4__.StateTracker({setBlending:t=>{if(t){this.setBlendingEnabled(!0),this.setBlendEquationSeparate(t.opRgb,t.opAlpha),this.setBlendFunctionSeparate(t.srcRgb,t.dstRgb,t.srcAlpha,t.dstAlpha);const e=t.color;this.setBlendColor(e.r,e.g,e.b,e.a)}else this.setBlendingEnabled(!1)},setCulling:t=>{t?(this.setFaceCullingEnabled(!0),this.setCullFace(t.face),this.setFrontFace(t.mode)):this.setFaceCullingEnabled(!1)},setPolygonOffset:t=>{t?(this.setPolygonOffsetFillEnabled(!0),this.setPolygonOffset(t.factor,t.units)):this.setPolygonOffsetFillEnabled(!1)},setDepthTest:t=>{t?(this.setDepthTestEnabled(!0),this.setDepthFunction(t.func)):this.setDepthTestEnabled(!1)},setStencilTest:t=>{if(t){this.setStencilTestEnabled(!0);const e=t.function;this.setStencilFunction(e.func,e.ref,e.mask);const i=t.operation;this.setStencilOp(i.fail,i.zFail,i.zPass)}else this.setStencilTestEnabled(!1)},setDepthWrite:t=>{t?(this.setDepthWriteEnabled(!0),this.setDepthRange(t.zNear,t.zFar)):this.setDepthWriteEnabled(!1)},setColorWrite:t=>{t?this.setColorMask(t.r,t.g,t.b,t.a):this.setColorMask(!1,!1,!1,!1)},setStencilWrite:t=>{t?this.setStencilWriteMask(t.mask):this.setStencilWriteMask(0)}}),this.enforceState(),this.driverTest=new _WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_6__.WebGLDriverTest(this)}get contextAttributes(){return this.gl.getContextAttributes()}get parameters(){return this._parameters}dispose(){this.bindVAO(null),this.unbindBuffer(34962),this.unbindBuffer(34963),this._textureUnitMap.length=0,(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__.webglDebugEnabled)()&&this.instanceCounter.printResourceCount()}setPipelineState(t){this._stateTracker.setPipeline(t)}setBlendingEnabled(t){this._blendEnabled!==t&&(!0===t?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND),this._blendEnabled=t,this._stateTracker.invalidateBlending())}externalProgramUpdate(){var t;null==(t=this._activeShaderProgram)||t.stop(),this._activeShaderProgram=null}externalTextureUnitUpdate(t,e){for(let i=0;i<t.length;++i)this._textureUnitMap[t[i]]=null;e>=0&&(this._activeTextureUnit=e)}externalVertexArrayObjectUpdate(){const t=this.capabilities.vao;t&&(t.bindVertexArray(null),this._activeVertexArrayObject=null),this._activeVertexBuffer=null,this._activeIndexBuffer=null}externalVertexBufferUpdate(){this._activeVertexBuffer=null}externalIndexBufferUpdate(){this._activeIndexBuffer=null}setBlendColor(t,e,i,s){t===this._blendColorState.r&&e===this._blendColorState.g&&i===this._blendColorState.b&&s===this._blendColorState.a||(this.gl.blendColor(t,e,i,s),this._blendColorState.r=t,this._blendColorState.g=e,this._blendColorState.b=i,this._blendColorState.a=s,this._stateTracker.invalidateBlending())}setBlendFunction(t,e){t===this._blendFunctionState.srcRGB&&e===this._blendFunctionState.dstRGB||(this.gl.blendFunc(t,e),this._blendFunctionState.srcRGB=t,this._blendFunctionState.srcAlpha=t,this._blendFunctionState.dstRGB=e,this._blendFunctionState.dstAlpha=e,this._stateTracker.invalidateBlending())}setBlendFunctionSeparate(t,e,i,s){this._blendFunctionState.srcRGB===t&&this._blendFunctionState.srcAlpha===i&&this._blendFunctionState.dstRGB===e&&this._blendFunctionState.dstAlpha===s||(this.gl.blendFuncSeparate(t,e,i,s),this._blendFunctionState.srcRGB=t,this._blendFunctionState.srcAlpha=i,this._blendFunctionState.dstRGB=e,this._blendFunctionState.dstAlpha=s,this._stateTracker.invalidateBlending())}setBlendEquation(t){this._blendEquationState.mode!==t&&(this.gl.blendEquation(t),this._blendEquationState.mode=t,this._blendEquationState.modeAlpha=t,this._stateTracker.invalidateBlending())}setBlendEquationSeparate(t,e){this._blendEquationState.mode===t&&this._blendEquationState.modeAlpha===e||(this.gl.blendEquationSeparate(t,e),this._blendEquationState.mode=t,this._blendEquationState.modeAlpha=e,this._stateTracker.invalidateBlending())}setColorMask(t,e,i,s){this._colorMaskState.r===t&&this._colorMaskState.g===e&&this._colorMaskState.b===i&&this._colorMaskState.a===s||(this.gl.colorMask(t,e,i,s),this._colorMaskState.r=t,this._colorMaskState.g=e,this._colorMaskState.b=i,this._colorMaskState.a=s,this._stateTracker.invalidateColorWrite())}setClearColor(t,e,i,s){this._clearColor.r===t&&this._clearColor.g===e&&this._clearColor.b===i&&this._clearColor.a===s||(this.gl.clearColor(t,e,i,s),this._clearColor.r=t,this._clearColor.g=e,this._clearColor.b=i,this._clearColor.a=s)}setFaceCullingEnabled(t){this._polygonCullingEnabled!==t&&(!0===t?this.gl.enable(this.gl.CULL_FACE):this.gl.disable(this.gl.CULL_FACE),this._polygonCullingEnabled=t,this._stateTracker.invalidateCulling())}setPolygonOffsetFillEnabled(t){this._polygonOffsetFillEnabled!==t&&(!0===t?this.gl.enable(this.gl.POLYGON_OFFSET_FILL):this.gl.disable(this.gl.POLYGON_OFFSET_FILL),this._polygonOffsetFillEnabled=t,this._stateTracker.invalidatePolygonOffset())}setPolygonOffset(t,e){this._polygonOffset[0]===t&&this._polygonOffset[1]===e||(this._polygonOffset[0]=t,this._polygonOffset[1]=e,this.gl.polygonOffset(t,e),this._stateTracker.invalidatePolygonOffset())}setCullFace(t){this._cullFace!==t&&(this.gl.cullFace(t),this._cullFace=t,this._stateTracker.invalidateCulling())}setFrontFace(t){this._frontFace!==t&&(this.gl.frontFace(t),this._frontFace=t,this._stateTracker.invalidateCulling())}setScissorTestEnabled(t){this._scissorTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.SCISSOR_TEST):this.gl.disable(this.gl.SCISSOR_TEST),this._scissorTestEnabled=t)}setScissorRect(t,e,i,s){this._scissorRect.x===t&&this._scissorRect.y===e&&this._scissorRect.width===i&&this._scissorRect.height===s||(this.gl.scissor(t,e,i,s),this._scissorRect.x=t,this._scissorRect.y=e,this._scissorRect.width=i,this._scissorRect.height=s)}setDepthTestEnabled(t){this._depthTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST),this._depthTestEnabled=t,this._stateTracker.invalidateDepthTest())}setClearDepth(t){this._clearDepth!==t&&(this.gl.clearDepth(t),this._clearDepth=t)}setDepthFunction(t){this._depthFunction!==t&&(this.gl.depthFunc(t),this._depthFunction=t,this._stateTracker.invalidateDepthTest())}setDepthWriteEnabled(t){this._depthWriteEnabled!==t&&(this.gl.depthMask(t),this._depthWriteEnabled=t,this._stateTracker.invalidateDepthWrite())}setDepthRange(t,e){this._depthRange.zNear===t&&this._depthRange.zFar===e||(this.gl.depthRange(t,e),this._depthRange.zNear=t,this._depthRange.zFar=e,this._stateTracker.invalidateDepthWrite())}setStencilTestEnabled(t){this._stencilTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.STENCIL_TEST):this.gl.disable(this.gl.STENCIL_TEST),this._stencilTestEnabled=t,this._stateTracker.invalidateStencilTest())}setClearStencil(t){t!==this._clearStencil&&(this.gl.clearStencil(t),this._clearStencil=t)}setStencilFunction(t,e,i){this._stencilFunction.func===t&&this._stencilFunction.ref===e&&this._stencilFunction.mask===i||(this.gl.stencilFunc(t,e,i),this._stencilFunction.face=1032,this._stencilFunction.func=t,this._stencilFunction.ref=e,this._stencilFunction.mask=i,this._stateTracker.invalidateStencilTest())}setStencilFunctionSeparate(t,e,i,s){this._stencilFunction.face===t&&this._stencilFunction.func===e&&this._stencilFunction.ref===i&&this._stencilFunction.mask===s||(this.gl.stencilFuncSeparate(t,e,i,s),this._stencilFunction.face=t,this._stencilFunction.func=e,this._stencilFunction.ref=i,this._stencilFunction.mask=s,this._stateTracker.invalidateStencilTest())}setStencilWriteMask(t){this._stencilWriteMask!==t&&(this.gl.stencilMask(t),this._stencilWriteMask=t,this._stateTracker.invalidateStencilWrite())}setStencilOp(t,e,i){this._stencilOperation.fail===t&&this._stencilOperation.zFail===e&&this._stencilOperation.zPass===i||(this.gl.stencilOp(t,e,i),this._stencilOperation.face=1032,this._stencilOperation.fail=t,this._stencilOperation.zFail=e,this._stencilOperation.zPass=i,this._stateTracker.invalidateStencilTest())}setStencilOpSeparate(t,e,i,s){this._stencilOperation.face===t&&this._stencilOperation.fail===e&&this._stencilOperation.zFail===i&&this._stencilOperation.zPass===s||(this.gl.stencilOpSeparate(t,e,i,s),this._stencilOperation.face=t,this._stencilOperation.face=t,this._stencilOperation.fail=e,this._stencilOperation.zFail=i,this._stencilOperation.zPass=s,this._stateTracker.invalidateStencilTest())}setActiveTexture(t,e=!1){const i=this._activeTextureUnit;return t>=0&&(e||t!==this._activeTextureUnit)&&(this.gl.activeTexture(_enums_js__WEBPACK_IMPORTED_MODULE_2__.BASE_TEXTURE_UNIT+t),this._activeTextureUnit=t),i}clear(t){t&&this.gl.clear(t)}clearSafe(t,e=255){t&&(16384&t&&this.setColorMask(!0,!0,!0,!0),256&t&&this.setDepthWriteEnabled(!0),1024&t&&this.setStencilWriteMask(e),this.gl.clear(t))}drawArrays(t,e,s){(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__.webglDebugEnabled)()&&(this._numOfDrawCalls++,this._numOfTriangles+=d(t,s)),this.gl.drawArrays(t,e,s)}drawElements(t,e,s,a){(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__.webglDebugEnabled)()&&(this._numOfDrawCalls++,this._numOfTriangles+=d(t,e)),this.gl.drawElements(t,e,s,a)}logIno(){(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__.webglDebugEnabled)()&&console.log(`DrawCalls: ${this._numOfDrawCalls}, Triangles: ${this._numOfTriangles}`)}get capabilities(){return this._capabilities}setViewport(t,e,i,s){i=Math.max(Math.round(i),1),s=Math.max(Math.round(s),1);const a=this._viewport;a.x===t&&a.y===e&&a.width===i&&a.height===s||(a.x=t,a.y=e,a.width=i,a.height=s,this.gl.viewport(t,e,i,s))}getViewport(){return{x:this._viewport.x,y:this._viewport.y,width:this._viewport.width,height:this._viewport.height}}useProgram(t){var e,i;this._activeShaderProgram!==t&&(null==(e=this._activeShaderProgram)||e.stop(),this._activeShaderProgram=t,this.gl.useProgram(null!=(i=null==t?void 0:t.glName)?i:null))}bindTexture(i,s,a=!1){(s>=this.parameters.maxTextureImageUnits||s<0)&&console.error("Input texture unit is out of range of available units!");const n=this._textureUnitMap[s];return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(i)||null==i.glName?((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(n)&&(this.setActiveTexture(s,a),this.gl.bindTexture(n.descriptor.target,null)),this._textureUnitMap[s]=null,n):a||n!==i?(this.setActiveTexture(s,a),this.gl.bindTexture(i.descriptor.target,i.glName),i.applyChanges(),this._textureUnitMap[s]=i,n):(i.isDirty&&(this.setActiveTexture(s,a),i.applyChanges()),n)}unbindTextureAllUnits(t){for(let e=0;e<this.parameters.maxTextureImageUnits;e++)this._textureUnitMap[e]===t&&(this.bindTexture(null,e),this._textureUnitMap[e]=null)}bindFramebuffer(e,i=!1,s=3553){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(e))return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),void(this._activeFramebuffer=null);(i||this._activeFramebuffer!==e)&&(e.initializeAndBind(s),this._activeFramebuffer=e)}bindBuffer(t){t&&(34962===t.bufferType?this._activeVertexBuffer=_(this.gl,t,t.bufferType,this._activeVertexBuffer):this._activeIndexBuffer=_(this.gl,t,t.bufferType,this._activeIndexBuffer))}bindRenderbuffer(t){const e=this.gl;t||(e.bindRenderbuffer(e.RENDERBUFFER,null),this._activeRenderbuffer=null),this._activeRenderbuffer!==t&&(e.bindRenderbuffer(e.RENDERBUFFER,t.glName),this._activeRenderbuffer=t)}unbindBuffer(t){34962===t?this._activeVertexBuffer=_(this.gl,null,t,this._activeVertexBuffer):this._activeIndexBuffer=_(this.gl,null,t,this._activeIndexBuffer)}bindVAO(e=null){(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(e)?this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null):this._activeVertexArrayObject!==e&&(e.bind(),this._activeVertexArrayObject=e)}getBoundFramebufferObject(){return this._activeFramebuffer}getBoundVAO(){return this._activeVertexArrayObject}resetState(){this.useProgram(null),this.bindVAO(null),this.bindFramebuffer(null),this.unbindBuffer(34962),this.unbindBuffer(34963);for(let t=0;t<this.parameters.maxTextureImageUnits;++t)this.bindTexture(null,t);this.setBlendingEnabled(!1),this.setBlendFunction(1,0),this.setBlendEquation(32774),this.setBlendColor(0,0,0,0),this.setFaceCullingEnabled(!1),this.setCullFace(1029),this.setFrontFace(2305),this.setPolygonOffsetFillEnabled(!1),this.setPolygonOffset(0,0),this.setScissorTestEnabled(!1),this.setScissorRect(0,0,this.gl.canvas.width,this.gl.canvas.height),this.setDepthTestEnabled(!1),this.setDepthFunction(513),this.setDepthRange(0,1),this.setStencilTestEnabled(!1),this.setStencilFunction(519,0,0),this.setStencilOp(7680,7680,7680),this.setClearColor(0,0,0,0),this.setClearDepth(1),this.setClearStencil(0),this.setColorMask(!0,!0,!0,!0),this.setStencilWriteMask(4294967295),this.setDepthWriteEnabled(!0),this.setViewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}enforceState(){var t,a,n,l;const r=this.gl,c=this.capabilities.vao;c&&c.bindVertexArray(null);for(let e=0;e<this.parameters.maxVertexAttributes;e++)r.disableVertexAttribArray(e);if(this._activeVertexBuffer?r.bindBuffer(this._activeVertexBuffer.bufferType,this._activeVertexBuffer.glName):r.bindBuffer(34962,null),this._activeIndexBuffer?r.bindBuffer(this._activeIndexBuffer.bufferType,this._activeIndexBuffer.glName):r.bindBuffer(34963,null),c&&this._activeVertexArrayObject){const t=this._activeVertexArrayObject;this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null),this.bindVAO(t)}r.bindFramebuffer(r.FRAMEBUFFER,null!=(t=null==(a=this._activeFramebuffer)?void 0:a.glName)?t:null),r.useProgram(null!=(n=null==(l=this._activeShaderProgram)?void 0:l.glName)?n:null),r.blendColor(this._blendColorState.r,this._blendColorState.g,this._blendColorState.b,this._blendColorState.a),r.bindRenderbuffer(r.RENDERBUFFER,this._activeRenderbuffer?this._activeRenderbuffer.glName:null),!0===this._blendEnabled?r.enable(this.gl.BLEND):r.disable(this.gl.BLEND),r.blendEquationSeparate(this._blendEquationState.mode,this._blendEquationState.modeAlpha),r.blendFuncSeparate(this._blendFunctionState.srcRGB,this._blendFunctionState.dstRGB,this._blendFunctionState.srcAlpha,this._blendFunctionState.dstAlpha),r.clearColor(this._clearColor.r,this._clearColor.g,this._clearColor.b,this._clearColor.a),r.clearDepth(this._clearDepth),r.clearStencil(this._clearStencil),r.colorMask(this._colorMaskState.r,this._colorMaskState.g,this._colorMaskState.b,this._colorMaskState.a),r.cullFace(this._cullFace),r.depthFunc(this._depthFunction),r.depthRange(this._depthRange.zNear,this._depthRange.zFar),!0===this._depthTestEnabled?r.enable(r.DEPTH_TEST):r.disable(r.DEPTH_TEST),r.depthMask(this._depthWriteEnabled),r.frontFace(this._frontFace),r.lineWidth(1),!0===this._polygonCullingEnabled?r.enable(r.CULL_FACE):r.disable(r.CULL_FACE),r.polygonOffset(this._polygonOffset[0],this._polygonOffset[1]),!0===this._polygonOffsetFillEnabled?r.enable(r.POLYGON_OFFSET_FILL):r.disable(r.POLYGON_OFFSET_FILL),r.scissor(this._scissorRect.x,this._scissorRect.y,this._scissorRect.width,this._scissorRect.height),!0===this._scissorTestEnabled?r.enable(r.SCISSOR_TEST):r.disable(r.SCISSOR_TEST),r.stencilFunc(this._stencilFunction.func,this._stencilFunction.ref,this._stencilFunction.mask),r.stencilOpSeparate(this._stencilOperation.face,this._stencilOperation.fail,this._stencilOperation.zFail,this._stencilOperation.zPass),!0===this._stencilTestEnabled?r.enable(r.STENCIL_TEST):r.disable(r.STENCIL_TEST),r.stencilMask(this._stencilWriteMask);for(let i=0;i<this.parameters.maxTextureImageUnits;i++){r.activeTexture(_enums_js__WEBPACK_IMPORTED_MODULE_2__.BASE_TEXTURE_UNIT+i),r.bindTexture(3553,null),r.bindTexture(34067,null),(0,_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_7__.default)(r)&&r.bindTexture(32879,null);const t=this._textureUnitMap[i];(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(t)&&r.bindTexture(t.descriptor.target,t.glName)}r.activeTexture(_enums_js__WEBPACK_IMPORTED_MODULE_2__.BASE_TEXTURE_UNIT+this._activeTextureUnit),r.viewport(this._viewport.x,this._viewport.y,this._viewport.width,this._viewport.height),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__.webglDebugEnabled)()&&(this._numOfDrawCalls=0,this._numOfTriangles=0)}_loadParameters(t){var e;const i=this.capabilities.textureFilterAnisotropic,s=null!=(e=t.maxAnisotropy)?e:1/0,a={versionString:this.gl.getParameter(this.gl.VERSION),maxVertexTextureImageUnits:this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttributes:this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),maxMaxAnisotropy:i?Math.min(this.gl.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY),s):1,maxTextureImageUnits:this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS),maxTextureSize:this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)};return _Texture_js__WEBPACK_IMPORTED_MODULE_5__.default.TEXTURE_UNIT_FOR_UPDATES=a.maxTextureImageUnits-1,a}}function _(t,e,i,s){return e?s!==e&&t.bindBuffer(i,e.glName):t.bindBuffer(i,null),e}function d(t,e){switch(t){case 0:return 2*e;case 4:return e/3;case 5:case 6:return e-2;default:return 0}}


/***/ }),

/***/ 93790:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/WebGLDriverTest.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebGLDriverTest": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _testDoublePrecisionArithmetic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testDoublePrecisionArithmetic.js */ 96757);
/* harmony import */ var _testFloatBufferBlend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testFloatBufferBlend.js */ 54209);
/* harmony import */ var _testSamplerPrecision_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testSamplerPrecision.js */ 33166);
/* harmony import */ var _testSVGPremultipliedAlpha_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testSVGPremultipliedAlpha.js */ 22874);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{constructor(e){this.context=e,this._floatBufferBlendWorking=(0,_testFloatBufferBlend_js__WEBPACK_IMPORTED_MODULE_2__.testFloatBufferBlend)(e),(0,_testSVGPremultipliedAlpha_js__WEBPACK_IMPORTED_MODULE_4__.testSVGPremultipliedAlpha)(e).then((e=>this._svgAlwaysPremultipliesAlpha=!e))}get floatBufferBlendWorking(){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(this._floatBufferBlendWorking))throw new Error("floatBufferBlendWorking test not yet available");return this._floatBufferBlendWorking}get svgAlwaysPremultipliesAlpha(){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(this._svgAlwaysPremultipliesAlpha))throw new Error("svgAlwaysPremultipliesAlpha test not yet available");return this._svgAlwaysPremultipliesAlpha}get doublePrecisionRequiresObfuscation(){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(this._doublePrecisionRequiresObfuscation)){const e=(0,_testDoublePrecisionArithmetic_js__WEBPACK_IMPORTED_MODULE_1__.testDoublePrecisionArithmetic)(this.context,!1),i=(0,_testDoublePrecisionArithmetic_js__WEBPACK_IMPORTED_MODULE_1__.testDoublePrecisionArithmetic)(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===i||e/i>5)}return this._doublePrecisionRequiresObfuscation}get ignoresSamplerPrecision(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(this._ignoresSamplerPrecision)&&(this._ignoresSamplerPrecision=(0,_testSamplerPrecision_js__WEBPACK_IMPORTED_MODULE_3__.testSamplerPrecision)(this.context)),this._ignoresSamplerPrecision}}


/***/ }),

/***/ 85484:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/DisjointTimerQuery.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisjointTimerQuery": () => (/* binding */ E),
/* harmony export */   "createDisjointTimerQuery": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ 31555);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E{constructor(e,E,t,T,r,_,i,u){this.createQuery=e,this.resultAvailable=E,this.getResult=t,this.disjoint=T,this.beginTimeElapsed=r,this.endTimeElapsed=_,this.createTimestamp=i,this.timestampBits=u}}function t(t,T){if(T.disjointTimerQuery)return null;let r=t.getExtension("EXT_disjoint_timer_query_webgl2");return r&&(0,_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__.default)(t)?new E((()=>t.createQuery()),(e=>t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE)),(e=>t.getQueryParameter(e,t.QUERY_RESULT)),(()=>t.getParameter(r.GPU_DISJOINT_EXT)),(e=>t.beginQuery(r.TIME_ELAPSED_EXT,e)),(()=>t.endQuery(r.TIME_ELAPSED_EXT)),(e=>r.queryCounterEXT(e,r.TIMESTAMP_EXT)),(()=>t.getQuery(r.TIMESTAMP_EXT,r.QUERY_COUNTER_BITS_EXT))):(r=t.getExtension("EXT_disjoint_timer_query"),r?new E((()=>r.createQueryEXT()),(e=>r.getQueryObjectEXT(e,r.QUERY_RESULT_AVAILABLE_EXT)),(e=>r.getQueryObjectEXT(e,r.QUERY_RESULT_EXT)),(()=>t.getParameter(r.GPU_DISJOINT_EXT)),(e=>r.beginQueryEXT(r.TIME_ELAPSED_EXT,e)),(()=>r.endQueryEXT(r.TIME_ELAPSED_EXT)),(e=>r.queryCounterEXT(e,r.TIMESTAMP_EXT)),(()=>r.getQueryEXT(r.TIMESTAMP_EXT,r.QUERY_COUNTER_BITS_EXT))):null)}


/***/ }),

/***/ 30121:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/DrawBuffers.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "load": () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ 31555);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function A(A,_){if(_.disjointTimerQuery)return null;if((0,_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__.default)(A))return{drawBuffers:A.drawBuffers.bind(A),MAX_DRAW_BUFFERS:A.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:A.MAX_COLOR_ATTACHMENTS};if(_.drawBuffers)return null;const e=A.getExtension("WEBGL_draw_buffers");return e?{drawBuffers:e.drawBuffersWEBGL.bind(e),MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS_WEBGL}:null}


/***/ }),

/***/ 72951:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/Instancing.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "load": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ 31555);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r){if((0,_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__.default)(r))return{drawArraysInstanced:r.drawArraysInstanced.bind(r),drawElementsInstanced:r.drawElementsInstanced.bind(r),vertexAttribDivisor:r.vertexAttribDivisor.bind(r)};const t=r.getExtension("ANGLE_instanced_arrays");return t?{drawArraysInstanced:t.drawArraysInstancedANGLE.bind(t),drawElementsInstanced:t.drawElementsInstancedANGLE.bind(t),vertexAttribDivisor:t.vertexAttribDivisorANGLE.bind(t)}:null}


/***/ }),

/***/ 75175:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/LoseContext.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "load": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,t){const n=t.loseContext&&e.getExtension("WEBGL_lose_context");return n?{loseRenderingContext:()=>n.loseContext()}:null}


/***/ }),

/***/ 86906:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/VertexArrayObjects.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "load": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWebGL2Context.js */ 31555);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,t){if((0,_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_0__.default)(r))return{createVertexArray:r.createVertexArray.bind(r),deleteVertexArray:r.deleteVertexArray.bind(r),bindVertexArray:r.bindVertexArray.bind(r)};if(t.vao)return null;const n=r.getExtension("OES_vertex_array_object")||r.getExtension("MOZ_OES_vertex_array_object")||r.getExtension("WEBKIT_OES_vertex_array_object");return n?{createVertexArray:n.createVertexArrayOES.bind(n),deleteVertexArray:n.deleteVertexArrayOES.bind(n),bindVertexArray:n.bindVertexArrayOES.bind(n)}:null}


/***/ }),

/***/ 97574:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/load.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadCapabilities": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisjointTimerQuery.js */ 85484);
/* harmony import */ var _DrawBuffers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawBuffers.js */ 30121);
/* harmony import */ var _Instancing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instancing.js */ 72951);
/* harmony import */ var _isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isWebGL2Context.js */ 31555);
/* harmony import */ var _LoseContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoseContext.js */ 75175);
/* harmony import */ var _VertexArrayObjects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VertexArrayObjects.js */ 86906);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function E(_,E){const s=E.disabledExtensions||{},x=E.debugWebGLExtensions||{};let C,G,A,O,F,B,M,c,D,X,d,g,P=null,L=null,H=null,p=null;return{get drawBuffers(){return d||(d=(0,_DrawBuffers_js__WEBPACK_IMPORTED_MODULE_1__.load)(_,s)),d},get instancing(){return C||(C=(0,_Instancing_js__WEBPACK_IMPORTED_MODULE_2__.load)(_)),C},get vao(){return G||(G=(0,_VertexArrayObjects_js__WEBPACK_IMPORTED_MODULE_5__.load)(_,s)),G},get compressedTextureETC(){return A||(A=l(_,s)),A},get compressedTextureS3TC(){return O||(O=u(_,s)),O},get textureFilterAnisotropic(){return F||(F=i(_,s)),F},get disjointTimerQuery(){return B||(B=(0,_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_0__.createDisjointTimerQuery)(_,s)),B},get textureFloat(){return M||(M=a(_,s)),M},get colorBufferFloat(){return c||(c=S(_,s)),c},get blendMinMax(){return D||(D=R(_,s)),D},get depthTexture(){return null===P&&(P=f(_,s,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"])),P},get standardDerivatives(){return null===L&&(L=f(_,s,"standardDerivatives",!0,["OES_standard_derivatives"])),L},get shaderTextureLOD(){return null===H&&(H=f(_,s,"shaderTextureLOD",!0,["EXT_shader_texture_lod"])),H},get fragDepth(){return null===p&&(p=f(_,s,"fragDepth",!0,["EXT_frag_depth"])),p},get loseContext(){return X||(X=(0,_LoseContext_js__WEBPACK_IMPORTED_MODULE_4__.load)(_,x)),X},get textureNorm16(){return g||(g=T(_,s)),g},enable(t){return this[t]}}}function l(t,e){if(e.compressedTextureETC)return null;const r=t.getExtension("WEBGL_compressed_texture_etc");return r?{COMPRESSED_R11_EAC:r.COMPRESSED_R11_EAC,COMPRESSED_SIGNED_R11_EAC:r.COMPRESSED_SIGNED_R11_EAC,COMPRESSED_RG11_EAC:r.COMPRESSED_RG11_EAC,COMPRESSED_SIGNED_RG11_EAC:r.COMPRESSED_SIGNED_RG11_EAC,COMPRESSED_RGB8_ETC2:r.COMPRESSED_RGB8_ETC2,COMPRESSED_SRGB8_ETC2:r.COMPRESSED_SRGB8_ETC2,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:r.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:r.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,COMPRESSED_RGBA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC}:null}function u(t,e){if(e.compressedTextureS3TC)return null;const r=t.getExtension("WEBGL_compressed_texture_s3tc");return r?{COMPRESSED_RGB_S3TC_DXT1:r.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:r.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:r.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:r.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null}function R(t,e){if((0,_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_3__.default)(t))return{MIN:t.MIN,MAX:t.MAX};if(e.blendMinMax)return null;{const e=t.getExtension("EXT_blend_minmax");return e?{MIN:e.MIN_EXT,MAX:e.MAX_EXT}:null}}function i(t,e){if(e.textureFilterAnisotropic)return null;const r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");return r?{MAX_TEXTURE_MAX_ANISOTROPY:r.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:r.TEXTURE_MAX_ANISOTROPY_EXT}:null}function a(t,e){if((0,_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_3__.default)(t))return{textureFloat:!0,textureFloatLinear:!e.textureFloatLinear&&!!t.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!e.textureHalfFloatLinear&&!!t.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:t.HALF_FLOAT};if(t instanceof WebGLRenderingContext){const r=!e.textureHalfFloat&&t.getExtension("OES_texture_half_float");return{textureFloat:!e.textureFloat&&!!t.getExtension("OES_texture_float"),textureFloatLinear:!e.textureFloatLinear&&!!t.getExtension("OES_texture_float_linear"),textureHalfFloat:!!r,textureHalfFloatLinear:!e.textureHalfFloatLinear&&!!t.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:r?r.HALF_FLOAT_OES:void 0}}return null}function S(t,e){if((0,_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_3__.default)(t)){const r=!e.colorBufferFloat&&t.getExtension("EXT_color_buffer_half_float"),_=!e.colorBufferFloat&&t.getExtension("EXT_color_buffer_float"),n=!e.colorBufferFloat&&t.getExtension("EXT_float_blend");return r||_||n?{textureFloat:!!_,textureHalfFloat:!!r,floatBlend:!!n,R16F:t.R16F,RG16F:t.RG16F,RGBA16F:t.RGBA16F,R32F:t.R32F,RG32F:t.RG32F,RGBA32F:t.RGBA32F,R11F_G11F_B10F:t.R11F_G11F_B10F,RGB16F:t.RGB16F}:null}if(t instanceof WebGLRenderingContext){const r=!e.colorBufferFloat&&t.getExtension("EXT_color_buffer_half_float"),_=!e.colorBufferFloat&&t.getExtension("WEBGL_color_buffer_float"),n=!e.colorBufferFloat&&t.getExtension("EXT_float_blend");return r||_||n?{textureFloat:!!_,textureHalfFloat:!!r,floatBlend:!!n,RGBA16F:r?r.RGBA16F_EXT:void 0,RGB16F:r?r.RGB16F_EXT:void 0,RGBA32F:_?_.RGBA32F_EXT:void 0}:null}return null}function f(t,e,r,n,o){if(n&&(0,_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_3__.default)(t))return!0;if(e[r])return!1;for(const _ of o)if(t.getExtension(_))return!0;return!1}function T(t,e){if(!(0,_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_3__.default)(t))return null;if(e.textureNorm16)return null;const r=t.getExtension("EXT_texture_norm16");return r?{R16:r.R16,RG16:r.RG16,RGB16:r.RGB16,RGBA16:r.RGBA16,R16_SNORM:r.R16_SNORM,RG16_SNORM:r.RG16_SNORM,RGB16_SNORM:r.RGB16_SNORM,RGBA16_SNORM:r.RGBA16_SNORM}:null}


/***/ }),

/***/ 96757:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/testDoublePrecisionArithmetic.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testDoublePrecisionArithmetic": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/floatRGBA.js */ 33821);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ 33989);
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BufferObject.js */ 20316);
/* harmony import */ var _doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doublePrecisionUtils.js */ 46117);
/* harmony import */ var _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FramebufferObject.js */ 1907);
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Program.js */ 9713);
/* harmony import */ var _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VertexArrayObject.js */ 86550);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(c,s){const l=new _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__.default(c,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});function v(n,e){const o=new _Program_js__WEBPACK_IMPORTED_MODULE_5__.Program(c,`\n\n  precision highp float;\n\n  attribute vec2 position;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${s?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",new Map([["position",0]])),r=new Float32Array(6);(0,_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_3__.encodeDoubleArray)(n,r,3);const a=new Float32Array(6);return (0,_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_3__.encodeDoubleArray)(e,a,3),c.useProgram(o),o.setUniform3f("u_highA",r[0],r[2],r[4]),o.setUniform3f("u_lowA",r[1],r[3],r[5]),o.setUniform3f("u_highB",a[0],a[2],a[4]),o.setUniform3f("u_lowB",a[1],a[3],a[5]),o}const f=_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__.default.createVertex(c,35044,new Uint16Array([0,0,1,0,0,1,1,1])),p=new _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__.default(c,new Map([["position",0]]),{geometry:[{name:"position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:f}),u=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.f)(5633261.287538229,2626832.878767164,1434988.0495278358),d=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.f)(5633271.46742708,2626873.6381334523,1434963.231608387),h=v(u,d),m=c.getBoundFramebufferObject(),{x:A,y:_,width:g,height:b}=c.getViewport();c.bindFramebuffer(l),c.setViewport(0,0,1,1),c.bindVAO(p),c.drawArrays(5,0,4);const B=new Uint8Array(4);l.readPixels(0,0,1,1,6408,5121,B),h.dispose(),p.dispose(!1),f.dispose(),l.dispose(),c.setViewport(A,_,g,b),c.bindFramebuffer(m);const F=(u[2]-d[2])/25,w=(0,_core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__.unpackFloatRGBA)(B);return Math.abs(F-w)}


/***/ }),

/***/ 54209:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/testFloatBufferBlend.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testFloatBufferBlend": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _3d_webgl_engine_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../3d/webgl-engine/lib/OrderIndependentTransparency.js */ 81269);
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BufferObject.js */ 20316);
/* harmony import */ var _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FramebufferObject.js */ 1907);
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Program.js */ 9713);
/* harmony import */ var _renderState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderState.js */ 89501);
/* harmony import */ var _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VertexArrayObject.js */ 86550);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a,u,f,l={exports:{}};function c(a){var u,f,c,s,d;if(!a.gl)return!1;if("webgl"===a.webglVersion)return(null==(s=a.capabilities.textureFloat)?void 0:s.textureFloat)&&(null==(d=a.capabilities.colorBufferFloat)?void 0:d.textureFloat);if(!((null==(u=a.capabilities.textureFloat)?void 0:u.textureFloat)&&(null==(f=a.capabilities.colorBufferFloat)?void 0:f.textureFloat)&&(null==(c=a.capabilities.colorBufferFloat)?void 0:c.floatBlend)))return!1;const g=new _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__.default(a,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5126,internalFormat:34836,samplingMode:9728,width:1,height:1}),b=_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__.default.createVertex(a,35044,new Uint16Array([0,0,1,0,0,1,1,1])),p=new _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__.default(a,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:b}),m=new _Program_js__WEBPACK_IMPORTED_MODULE_3__.Program(a,"\n  precision highp float;\n  attribute vec2 a_pos;\n\n  void main() {\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n   precision highp float;\n\n   void main() {\n    gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);\n   }\n  ",new Map([["a_pos",0]]));a.useProgram(m);const E=a.getBoundFramebufferObject(),{x:v,y:T,width:F,height:_}=a.getViewport();a.bindFramebuffer(g),a.setViewport(0,0,1,1),a.bindVAO(p),a.drawArrays(5,0,4);const x=(0,_renderState_js__WEBPACK_IMPORTED_MODULE_4__.makePipelineState)({blending:_3d_webgl_engine_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_0__.blendingAlpha});a.setPipelineState(x),a.drawArrays(5,0,4),l.exports.init(a);const h=a.gl.getError();return a.setViewport(v,T,F,_),a.bindFramebuffer(E),m.dispose(),p.dispose(!1),b.dispose(),g.dispose(),1282!==h||(console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."),!1)}a=l,u=function(){var e=function(e){window.console&&window.console.log&&window.console.log(e)},t=function(t){window.console&&window.console.error?window.console.error(t):e(t)},r={enable:{1:{0:!0}},disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0}},texSubImage2D:{9:{0:!0,6:!0,7:!0},7:{0:!0,4:!0,5:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,6:!0}},bindBuffer:{2:{0:!0}},bufferData:{3:{0:!0,2:!0}},bufferSubData:{3:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},readPixels:{7:{4:!0,5:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT","DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}}},n=null,o=null;function i(e){if(null==n)for(var t in n={},o={},e)"number"==typeof e[t]&&(n[e[t]]=t,o[t]=e[t])}function a(){if(null==n)throw"WebGLDebugUtils.init(ctx) not called"}function u(e){return a(),void 0!==n[e]}function f(e){a();var t=n[e];return void 0!==t?"gl."+t:"/*UNKNOWN WebGL ENUM*/ 0x"+e.toString(16)}function l(e,t,n,i){var a;if(void 0!==(a=r[e])&&void 0!==(a=a[t])&&a[n]){if("object"==typeof a[n]&&void 0!==a[n].enumBitwiseOr){for(var u=a[n].enumBitwiseOr,l=0,c=[],s=0;s<u.length;++s){var d=o[u[s]];0!=(i&d)&&(l|=d,c.push(f(d)))}return l===i?c.join(" | "):f(i)}return f(i)}return null===i?"null":void 0===i?"undefined":i.toString()}function c(e,t){for(var r="",n=t.length,o=0;o<n;++o)r+=(0==o?"":", ")+l(e,n,o,t[o]);return r}function s(e,t,r){e.__defineGetter__(r,(function(){return t[r]})),e.__defineSetter__(r,(function(e){t[r]=e}))}function d(e,r,n,o){o=o||e,i(e),r=r||function(e,r,n){for(var o="",i=n.length,a=0;a<i;++a)o+=(0==a?"":", ")+l(r,i,a,n[a]);t("WebGL error "+f(e)+" in "+r+"("+o+")")};var a={};function u(e,t){return function(){n&&n(t,arguments);var i=e[t].apply(e,arguments),u=o.getError();return 0!=u&&(a[u]=!0,r(u,t,arguments)),i}}var c={};for(var g in e)if("function"==typeof e[g])if("getExtension"!=g)c[g]=u(e,g);else{var b=u(e,g);c[g]=function(){return d(b.apply(e,arguments),r,n,o)}}else s(c,e,g);return c.getError=function(){for(var t in a)if(a.hasOwnProperty(t)&&a[t])return a[t]=!1,t;return e.NO_ERROR},c}function g(e){var t=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r);for(var n=0;n<t;++n)e.disableVertexAttribArray(n),e.vertexAttribPointer(n,4,e.FLOAT,!1,0,0),e.vertexAttrib1f(n,0);e.deleteBuffer(r);var o=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);for(n=0;n<o;++n)e.activeTexture(e.TEXTURE0+n),e.bindTexture(e.TEXTURE_CUBE_MAP,null),e.bindTexture(e.TEXTURE_2D,null);for(e.activeTexture(e.TEXTURE0),e.useProgram(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.DITHER),e.disable(e.SCISSOR_TEST),e.blendColor(0,0,0,0),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.clearColor(0,0,0,0),e.clearDepth(1),e.clearStencil(-1),e.colorMask(!0,!0,!0,!0),e.cullFace(e.BACK),e.depthFunc(e.LESS),e.depthMask(!0),e.depthRange(0,1),e.frontFace(e.CCW),e.hint(e.GENERATE_MIPMAP_HINT,e.DONT_CARE),e.lineWidth(1),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.UNPACK_COLORSPACE_CONVERSION_WEBGL&&e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.polygonOffset(0,0),e.sampleCoverage(1,!1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilMask(4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT);e.getError(););}function b(e){var t,r,n=[],o=[],i={},a=1,u=!1,f=[],l=0,c=0,d=!1,b=0,p={};function m(e){return"function"==typeof e?e:function(t){e.handleEvent(t)}}e.getContext=(r=e.getContext,function(){var n=r.apply(e,arguments);if(n instanceof WebGLRenderingContext){if(n!=t){if(t)throw"got different context";i=R(t=n)}return i}return n});var E=function(e){n.push(m(e))},v=function(e){o.push(m(e))};function T(e){var t=e.addEventListener;e.addEventListener=function(r,n,o){switch(r){case"webglcontextlost":E(n);break;case"webglcontextrestored":v(n);break;default:t.apply(e,arguments)}}}function F(){for(var e=Object.keys(p),t=0;t<e.length;++t)delete p[e]}function _(){++c,u||l==c&&e.loseContext()}function x(e,t){var r=e[t];return function(){if(_(),!u)return r.apply(e,arguments)}}function h(){for(var e=0;e<f.length;++e){var r=f[e];r instanceof WebGLBuffer?t.deleteBuffer(r):r instanceof WebGLFramebuffer?t.deleteFramebuffer(r):r instanceof WebGLProgram?t.deleteProgram(r):r instanceof WebGLRenderbuffer?t.deleteRenderbuffer(r):r instanceof WebGLShader?t.deleteShader(r):r instanceof WebGLTexture&&t.deleteTexture(r)}}function A(e){return{statusMessage:e,preventDefault:function(){d=!0}}}return T(e),e.loseContext=function(){if(!u){for(u=!0,l=0,++a;t.getError(););F(),p[t.CONTEXT_LOST_WEBGL]=!0;var r=A("context lost"),o=n.slice();setTimeout((function(){for(var t=0;t<o.length;++t)o[t](r);b>=0&&setTimeout((function(){e.restoreContext()}),b)}),0)}},e.restoreContext=function(){u&&o.length&&setTimeout((function(){if(!d)throw"can not restore. webglcontestlost listener did not call event.preventDefault";h(),g(t),u=!1,c=0,d=!1;for(var e=o.slice(),r=A("context restored"),n=0;n<e.length;++n)e[n](r)}),0)},e.loseContextInNCalls=function(e){if(u)throw"You can not ask a lost contet to be lost";l=c+e},e.getNumCalls=function(){return c},e.setRestoreTimeout=function(e){b=e},e;function R(e){for(var r in e)"function"==typeof e[r]?i[r]=x(e,r):s(i,e,r);i.getError=function(){if(_(),!u)for(;e=t.getError();)p[e]=!0;for(var e in p)if(p[e])return delete p[e],e;return i.NO_ERROR};for(var n=["createBuffer","createFramebuffer","createProgram","createRenderbuffer","createShader","createTexture"],o=0;o<n.length;++o){var l=n[o];i[l]=function(t){return function(){if(_(),u)return null;var r=t.apply(e,arguments);return r.__webglDebugContextLostId__=a,f.push(r),r}}(e[l])}var c=["getActiveAttrib","getActiveUniform","getBufferParameter","getContextAttributes","getAttachedShaders","getFramebufferAttachmentParameter","getParameter","getProgramParameter","getProgramInfoLog","getRenderbufferParameter","getShaderParameter","getShaderInfoLog","getShaderSource","getTexParameter","getUniform","getUniformLocation","getVertexAttrib"];for(o=0;o<c.length;++o)l=c[o],i[l]=function(t){return function(){return _(),u?null:t.apply(e,arguments)}}(i[l]);var d=["isBuffer","isEnabled","isFramebuffer","isProgram","isRenderbuffer","isShader","isTexture"];for(o=0;o<d.length;++o)l=d[o],i[l]=function(t){return function(){return _(),!u&&t.apply(e,arguments)}}(i[l]);return i.checkFramebufferStatus=function(t){return function(){return _(),u?i.FRAMEBUFFER_UNSUPPORTED:t.apply(e,arguments)}}(i.checkFramebufferStatus),i.getAttribLocation=function(t){return function(){return _(),u?-1:t.apply(e,arguments)}}(i.getAttribLocation),i.getVertexAttribOffset=function(t){return function(){return _(),u?0:t.apply(e,arguments)}}(i.getVertexAttribOffset),i.isContextLost=function(){return u},i}}return{init:i,mightBeEnum:u,glEnumToString:f,glFunctionArgToString:l,glFunctionArgsToString:c,makeDebugContext:d,makeLostContextSimulatingCanvas:b,resetToInitialState:g}},void 0!==(f=u())&&(a.exports=f);


/***/ }),

/***/ 22874:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/testSVGPremultipliedAlpha.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testSVGPremultipliedAlpha": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BufferObject.js */ 20316);
/* harmony import */ var _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FramebufferObject.js */ 1907);
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Program.js */ 9713);
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Texture.js */ 36079);
/* harmony import */ var _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VertexArrayObject.js */ 86550);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/






function o(_x) {
  return _o.apply(this, arguments);
}

function _o() {
  _o = (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (o) {
    const a = new Image();
    if (a.src = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A", a.width = 5, a.height = 5, yield a.decode(), !o.gl) return !0;
    const s = new _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__.default(o, {
      colorTarget: 0,
      depthStencilTarget: 0
    }, {
      target: 3553,
      wrapMode: 33071,
      pixelFormat: 6408,
      dataType: 5121,
      samplingMode: 9728,
      width: 1,
      height: 1
    }),
          p = _BufferObject_js__WEBPACK_IMPORTED_MODULE_1__.default.createVertex(o, 35044, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])),
          d = new _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__.default(o, new Map([["a_pos", 0]]), {
      geometry: [{
        name: "a_pos",
        count: 2,
        type: 5123,
        offset: 0,
        stride: 4,
        normalized: !1
      }]
    }, {
      geometry: p
    }),
          m = new _Program_js__WEBPACK_IMPORTED_MODULE_3__.Program(o, "\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ", "\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ", new Map([["a_pos", 0]]));
    o.useProgram(m);
    const g = new _Texture_js__WEBPACK_IMPORTED_MODULE_4__.default(o, {
      dataType: 5121,
      pixelFormat: 6408,
      preMultiplyAlpha: !1,
      wrapMode: 33071,
      samplingMode: 9729
    }, a);
    o.bindTexture(g, 0), m.setUniform1i("u_texture", 0);
    const l = o.getBoundFramebufferObject(),
          {
      x: c,
      y: f,
      width: u,
      height: w
    } = o.getViewport();
    o.bindFramebuffer(s), o.setViewport(0, 0, 1, 1), o.setClearColor(0, 0, 0, 0), o.setBlendingEnabled(!1), o.clearSafe(16384), o.bindVAO(d), o.drawArrays(5, 0, 4);
    const v = new Uint8Array(4);
    return s.readPixels(0, 0, 1, 1, 6408, 5121, v), m.dispose(), d.dispose(!1), p.dispose(), s.dispose(), g.dispose(), o.setViewport(c, f, u, w), o.bindFramebuffer(l), a.src = "", 255 === v[0];
  });
  return _o.apply(this, arguments);
}



/***/ }),

/***/ 33166:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/testSamplerPrecision.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testSamplerPrecision": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BufferObject.js */ 20316);
/* harmony import */ var _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FramebufferObject.js */ 1907);
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Program.js */ 9713);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums.js */ 42909);
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Texture.js */ 36079);
/* harmony import */ var _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VertexArrayObject.js */ 86550);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__.default.getLogger("esri.views.WebGLDriverTest"),s=e=>{const s=new _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_2__.default(e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),p="\nprecision highp float;\nattribute vec2 a_pos;\nuniform highp sampler2D u_texture;\nvarying vec4 v_color;\n\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset = pow(2.0, float(bitIndex));\n  return mod(floor(bitset / offset), 2.0);\n}\n\nvoid main() {\n  vec4 value = texture2D(u_texture, vec2(0.0));\n  float bit = getBit(value.x * 255.0, 1);\n\n  v_color = bit * vec4(1.0);\n  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}\n",m="\nprecision highp float;\nvarying vec4 v_color;\n\nvoid main() {\n  gl_FragColor = v_color;\n}\n",d=new Uint8Array(4),l=_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__.default.createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),c=new _VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__.default(e,new Map([["a_position",0]]),{geometry:[{name:"a_position",count:2,type:5122,offset:0,stride:4,normalized:!1}]},{geometry:l}),g=new _Program_js__WEBPACK_IMPORTED_MODULE_3__.Program(e,p,m,new Map([["a_pos",0]])),u=new _Texture_js__WEBPACK_IMPORTED_MODULE_5__.default(e,{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([2,255,0,0]));g.setUniform1i("u_texture",0),e.bindTexture(u,0);const f=e.getBoundFramebufferObject();e.bindFramebuffer(s),e.useProgram(g);const{x:w,y:h,width:v,height:b}=e.getViewport();e.setViewport(0,0,1,1),e.bindVAO(c),e.drawArrays(5,0,4),e.setViewport(w,h,v,b),s.readPixels(0,0,1,1,6408,5121,d),g.dispose(),c.dispose(!1),l.dispose(),s.dispose();const y=255!==d[0]||255!==d[1]||255!==d[2]||255!==d[3];return y&&a.warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${d[0]}.${d[1]}.${d[2]}.${d[3]}]`),e.bindFramebuffer(f),y};


/***/ })

}]);
//# sourceMappingURL=8438.4d709333417f85769a5d.js.map