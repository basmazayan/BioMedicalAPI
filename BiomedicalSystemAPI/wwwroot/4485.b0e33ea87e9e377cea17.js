"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[4485],{

/***/ 61558:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/AnimatedFlowView2D.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Accessor.js */ 98240);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _dataUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dataUtils.js */ 62013);
/* harmony import */ var _FlowContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FlowContainer.js */ 50707);
/* harmony import */ var _FlowStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FlowStrategy.js */ 13829);
/* harmony import */ var _FlowStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FlowStyle.js */ 69665);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/











let l = class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__.default {
  constructor() {
    var _this;

    (super(...arguments), _this = this), this._loadImagery = (e, t, r, s) => (0,_dataUtils_js__WEBPACK_IMPORTED_MODULE_8__.loadImagery)(this.layer, e, t, r, s), this._createStreamlinesMesh = (e, t, r) => this.layer.createStreamlinesMesh({
      flowData: t,
      rendererSettings: e
    }, {
      signal: r
    }), this.container = null, this.layer = null, this.type = "rasterAnimatedFlow", this.redrawOrRefetch = /*#__PURE__*/(0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this._rendererChanged();
    });
  }

  get updating() {
    return !this._strategy || this._strategy.updating;
  }

  update(e) {
    e.stationary ? this._strategy.update(e) : this.layerView.requestUpdate();
  }

  install(e) {
    this.container = new _FlowContainer_js__WEBPACK_IMPORTED_MODULE_9__.default(), e.addChild(this.container), this._strategy = new _FlowStrategy_js__WEBPACK_IMPORTED_MODULE_10__.default({
      flowContainer: this.container
    }), this._rendererChanged();
  }

  uninstall() {
    this._strategy.destroy(), this.container.removeAllChildren(), this.container.remove();
  }

  moveEnd() {}

  doRefresh() {
    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {})();
  }

  attach() {}

  _rendererChanged() {
    if ("animated-flow" !== this.layer.renderer.type) return;
    const e = new _FlowStyle_js__WEBPACK_IMPORTED_MODULE_11__.default(this._loadImagery, this._createStreamlinesMesh, this.layer.renderer);
    this.container.flowStyle = e, this.layerView.requestUpdate();
  }

};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()], l.prototype, "_strategy", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()], l.prototype, "container", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()], l.prototype, "layer", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()], l.prototype, "layerView", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()], l.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()], l.prototype, "updating", null), l = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.views.2d.engine.flow.AnimatedFlowView2D")], l);
const p = l;


/***/ }),

/***/ 50707:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowContainer.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _BrushFlow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrushFlow.js */ 21217);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/enums.js */ 31620);
/* harmony import */ var _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/WGLContainer.js */ 17702);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__.default{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(e){super.doRender(e)}prepareRenderPasses(s){const t=s.registerRenderPass({name:"flow",brushes:[_BrushFlow_js__WEBPACK_IMPORTED_MODULE_0__.default],target:()=>this.children,drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLDrawPhase.MAP});return[...super.prepareRenderPasses(s),t]}}


/***/ }),

/***/ 10794:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowDisplayData.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/

const t = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.default.getLogger("esri.views.2d.engine.flow.FlowDisplayData");

class s {
  constructor(e, t, s, a) {
    this.state = {
      name: "created"
    }, this.flowStyle = e, this.extent = t, this.size = s, this.pixelRatio = a;
  }

  load() {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const e = new AbortController();
      _this.state = {
        name: "loading",
        abortController: e
      };
      const t = yield _this.flowStyle.loadResources({
        extent: _this.extent,
        size: _this.size,
        pixelRatio: _this.pixelRatio
      }, e.signal);
      _this.state = {
        name: "loaded",
        resources: t
      };
    })();
  }

  prepareForRendering(e, s, a) {
    if ("loaded" !== this.state.name) return void t.error("Only loaded resources can be attached.");
    const i = this.state.resources;
    i.prepareForRendering(e, s, a), this.state = {
      name: "attached",
      resources: i
    };
  }

  destroy() {
    if ("loading" === this.state.name) return this.state.abortController.abort(), void (this.state = {
      name: "detached"
    });
    "attached" === this.state.name && (this.state.resources.detach(), this.state = {
      name: "detached"
    });
  }

  update(e) {
    if (!this.flowStyle.areResourcesCompatible(e.flowStyle)) return !1;
    return !(!this.extent.equals(e.extent) || this.size[0] !== e.size[0] || this.size[1] !== e.size[1] || this.pixelRatio !== e.pixelRatio) && (this.flowStyle = e.flowStyle, !0);
  }

}



/***/ }),

/***/ 46238:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowDisplayObject.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlowDisplayObject": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ 88415);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ 72425);
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat3f32.js */ 87266);
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DisplayObject.js */ 17821);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class m extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__.DisplayObject{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(this._displayData)&&(this._displayData.destroy(),this._displayData=null,this.requestRender())}setTransform(s){const{displayData:n}=this;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isNone)(n))return;const l=n.extent.xmin,m=n.extent.ymax,p=[0,0];s.toScreen(p,[l,m]);const c=(n.extent.xmax-n.extent.xmin)/n.size[0]/s.resolution,d=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(s.rotation),{dvs:x}=this.transforms;(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.b)(x),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.c)(x,x,[-1,1,0]),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.d)(x,x,[2/(s.size[0]*s.pixelRatio),-2/(s.size[1]*s.pixelRatio),1]),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.c)(x,x,[p[0],p[1],0]),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.r)(x,x,d),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.d)(x,x,[c*s.pixelRatio,c*s.pixelRatio,1])}_createTransforms(){return{dvs:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__.c)()}}}


/***/ }),

/***/ 43580:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowGLResources.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ 86550);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r{constructor(e,t){this._vertexData=e,this._indexData=t}prepareForRendering(r,s,i){const a=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__.default.createVertex(r,35044,this._vertexData),o=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__.default.createIndex(r,35044,this._indexData),x=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__.default(r,s,i,{geometry:a},o);this.vertexBuffer=a,this.indexBuffer=o,this.vertexArray=x,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose(),this.vertexBuffer.dispose(),this.indexBuffer.dispose()}}


/***/ }),

/***/ 13829:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowStrategy.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ 61243);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Accessor.js */ 98240);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ 88415);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/Point.js */ 7309);
/* harmony import */ var _FlowDisplayData_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FlowDisplayData.js */ 10794);
/* harmony import */ var _FlowDisplayObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FlowDisplayObject.js */ 46238);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ 70157);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const y=1.15,h=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__.default.getLogger("esri.views.2d.engine.flow.FlowStrategy");let f=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__.default{constructor(t){super(t),this._flowDisplayObject=new _FlowDisplayObject_js__WEBPACK_IMPORTED_MODULE_14__.FlowDisplayObject,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return null!=this._loading}update(t){const{flowStyle:o}=this.flowContainer;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(o))return void this._clear();const{extent:e,rotation:i,resolution:l,pixelRatio:n}=t.state,p=g(e,i);p.expand(y);const m=[Math.round((p.xmax-p.xmin)/l),Math.round((p.ymax-p.ymin)/l)],d=new _FlowDisplayData_js__WEBPACK_IMPORTED_MODULE_13__.default(o,p,m,n);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(this._loading)){if(this._loading.update(d))return;this._loading.destroy(),this._loading=null}!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isNone)(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(d)||(d.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null}),(t=>{(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.isAbortError)(t)||(h.error("A resource failed to load.",t),this._loading=null)})),this._loading=d)}_clear(){this._flowDisplayObject.clear(),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.isSome)(this._loading)&&(this._loading.destroy(),this._loading=null)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],f.prototype,"_loading",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],f.prototype,"flowContainer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],f.prototype,"updating",null),f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.views.2d.engine.flow.FlowStrategy")],f);const u=f;function g(t,o){const e=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__.default({x:(t.xmax+t.xmin)/2,y:(t.ymax+t.ymin)/2,spatialReference:t.spatialReference}),r=t.xmax-t.xmin,s=t.ymax-t.ymin,a=Math.abs(Math.cos((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__.deg2rad)(o))),l=Math.abs(Math.sin((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__.deg2rad)(o))),n=a*r+l*s,c=l*r+a*s,m=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__.default({xmin:e.x-n/2,ymin:e.y-c/2,xmax:e.x+n/2,ymax:e.y+c/2,spatialReference:t.spatialReference});return m.centerAt(e),m}


/***/ }),

/***/ 69665:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/FlowStyle.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 49996);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 7808);
/* harmony import */ var _animatedFlowRendererUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animatedFlowRendererUtils.js */ 65174);
/* harmony import */ var _FlowGLResources_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FlowGLResources.js */ 43580);


/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/




class n {
  constructor(e, t, n) {
    this._loadImagery = e, this._createStreamlinesMesh = t, this._rendererSettings = (0,_animatedFlowRendererUtils_js__WEBPACK_IMPORTED_MODULE_2__.createAnimatedFlowRendererSettings)(n);
  }

  get animated() {
    return this._rendererSettings.lineSpeed > 0;
  }

  get renderSettings() {
    return this._rendererSettings;
  }

  areResourcesCompatible(e) {
    let r = !0;
    return r = r && e._loadImagery === this._loadImagery, r = r && e._createStreamlinesMesh === this._createStreamlinesMesh, r = r && e._rendererSettings.verticesPerLine === this._rendererSettings.verticesPerLine, r = r && e._rendererSettings.segmentLength === this._rendererSettings.segmentLength, r = r && e._rendererSettings.lineSpacing === this._rendererSettings.lineSpacing, r = r && e._rendererSettings.density === this._rendererSettings.density, r = r && e._rendererSettings.smoothing === this._rendererSettings.smoothing, r = r && e._rendererSettings.velocityScale === this._rendererSettings.velocityScale, r = r && e._rendererSettings.minWeightThreshold === this._rendererSettings.minWeightThreshold, r = r && e._rendererSettings.minSpeedThreshold === this._rendererSettings.minSpeedThreshold, r = r && e._rendererSettings.mergeLines === this._rendererSettings.mergeLines, r = r && e._rendererSettings.interpolate === this._rendererSettings.interpolate, r && this._rendererSettings.mergeLines && (r = e._rendererSettings.lineCollisionWidth === this._rendererSettings.lineCollisionWidth), !!r;
  }

  loadResources(r, n) {
    var _this = this;

    return (0,D_biomedicalUpdates_biomediacl_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        extent: i,
        size: s
      } = r;
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(n);
      const d = yield _this._loadImagery(i, s[0], s[1], n),
            {
        vertexData: g,
        indexData: h
      } = yield _this._createStreamlinesMesh(_this._rendererSettings, d, n);
      return new _FlowGLResources_js__WEBPACK_IMPORTED_MODULE_3__.default(g, h);
    })();
  }

}



/***/ }),

/***/ 65174:
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/flow/animatedFlowRendererUtils.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAnimatedFlowRendererSettings": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ 75244);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){const i=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(n.lineWidth),o=2*i,t=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(n.lineLength)/o)+1,l=i,r=10,d=n.lineColor.toRgba(),s=[d[0]/255,d[1]/255,d[2]/255,d[3]],{lineSpeed:h,fadeDuration:a,density:g}=n;return{lineRenderWidth:i,segmentLength:o,verticesPerLine:t,lineCollisionWidth:l,lineSpacing:r,lineColor:s,lineSpeed:h,fadeDuration:a,density:g,smoothing:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.pt2px)(n.smoothing),velocityScale:1,minWeightThreshold:.001,minSpeedThreshold:.001,maxTurnAngle:1,mergeLines:!0,interpolate:!0,profile:!1}}


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



/***/ })

}]);
//# sourceMappingURL=4485.b0e33ea87e9e377cea17.js.map