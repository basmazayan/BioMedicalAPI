"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[499],{

/***/ 78340:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GroupContainer.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupContainer": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ 59450);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/enums.js */ 42909);
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ 30905);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WGLContainer.js */ 17702);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends _WGLContainer_js__WEBPACK_IMPORTED_MODULE_8__.default{constructor(){super(...arguments),this._lastWidth=0,this._lastHeight=0,this.requiresDedicatedFBO=!1}dispose(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null)}doRender(e){const t=this.createRenderParams(e),{context:r,painter:s,profiler:i}=t;this._prevFBO=r.getBoundFramebufferObject(),i.recordContainerStart(this.name);const o=this._getFbo(t),a=s.getRenderTarget();r.bindFramebuffer(o),s.setRenderTarget(o),r.setDepthWriteEnabled(!0),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);for(const n of this.children)n.beforeRender(e);for(const n of this.children)n.processRender(t);for(const n of this.children)n.afterRender(e);s.setRenderTarget(a),r.bindFramebuffer(this._prevFBO),s.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),r.setStencilTestEnabled(!1),r.setStencilWriteMask(0),s.blitTexture(r,o.colorTexture,9728),s.compositeLayer(t,this.computedOpacity),i.recordContainerEnd()}createRenderParams(e){return{...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(t){const{context:r,painter:s}=t,{width:i,height:o}=r.getViewport();if(i!==this._lastWidth||o!==this._lastHeight)if(this._lastWidth=i,this._lastHeight=o,this._renderTarget)this._renderTarget.resize(i,o);else{const t={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:i,height:o},a={colorTarget:0,depthStencilTarget:3};this._renderTarget=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__.default(r,a,t,s.getSharedStencilBuffer())}return this._renderTarget}}


/***/ }),

/***/ 30499:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/GroupLayerView2D.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/set.js */ 72062);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _engine_webgl_GroupContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../engine/webgl/GroupContainer.js */ 78340);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LayerView2D.js */ 87982);
/* harmony import */ var _layers_GroupLayerView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layers/GroupLayerView.js */ 47422);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__.LayerView2DMixin)(_layers_GroupLayerView_js__WEBPACK_IMPORTED_MODULE_9__.default)){constructor(){super(...arguments),this.container=new _engine_webgl_GroupContainer_js__WEBPACK_IMPORTED_MODULE_7__.GroupContainer}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(()=>this._updateStageChildren())),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)))}};a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.2d.layers.GroupLayerView2D")],a);const i=a;


/***/ }),

/***/ 47422:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/GroupLayerView.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/collectionUtils.js */ 81713);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _LayerView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LayerView.js */ 96121);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends _LayerView_js__WEBPACK_IMPORTED_MODULE_8__.default{constructor(e){super(e),this.type="group",this.layerViews=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default}initialize(){this.handles.add([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),this.layerViews.on("after-changes",(()=>this._layerViewsAfterChangesHandler())),this.layer.watch("visibilityMode",(()=>this._visibilityModeHandler()),!0),this.watch("visible",(()=>this._visibleHandler()),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()}set layerViews(e){this._set("layerViews",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(e,this._get("layerViews")))}isUpdating(){return this.layerViews.some((e=>e.updating))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,i)=>e+i.updatingProgress),0)/this.layerViews.length}_hasLayerViewVisibleOverrides(){return this.layerViews.some((e=>e._isOverridden("visible")))}_findLayerViewForLayer(e){return e&&this.layerViews.find((i=>i.layer===e))}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find((e=>{const i=this._findLayerViewForLayer(e);return i&&i.visible}));return e&&this._findLayerViewForLayer(e)}_enforceExclusiveVisibility(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((i=>{i.visible=i===e})))}_layerViewsChangeHandler(e){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((e=>e.watch("visible",(i=>this._layerViewVisibleHandler(i,e)),!0))).toArray(),"grouplayerview:visible");const i=e.added[e.added.length-1];let s=null;i&&i.visible&&(s=i),this._enforceVisibility(s)}_layerViewsAfterChangesHandler(){this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map((e=>e.watch("updating",(()=>this._updateUpdating()),!0))).toArray(),"grouplayerview:updating"),this._updateUpdating()}_enforceVisibility(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":{const e=this.visible;this.layerViews.forEach((i=>{i.visible=e}));break}case"exclusive":this._enforceExclusiveVisibility(e)}}_visibilityModeHandler(){this._enforceVisibility()}_layerViewVisibleHandler(e,i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(i.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&i)}}_visibleHandler(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(e=this.layer)?void 0:e.visibilityMode)&&this._enforceVisibility()}_updateUpdating(){this.notifyChange("updating")}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({cast:_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.castForReferenceSetter})],o.prototype,"layerViews",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],o.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],o.prototype,"updatingProgress",null),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.views.layers.GroupLayerView")],o);const h=o;


/***/ })

}]);
//# sourceMappingURL=499.af29a02e325f2cc3022f.js.map