"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[8832],{

/***/ 18832:
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/VoxelLayer.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ P)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Collection.js */ 37635);
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Handles.js */ 65333);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/reactiveUtils.js */ 7917);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../chunks/vec3.js */ 63702);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../chunks/vec3f64.js */ 33989);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./VoxelWasmManager.js */ 88625);
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ 57993);
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ 41122);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/SceneService.js */ 55048);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./support/arcgisLayerUrl.js */ 46996);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/commonProperties.js */ 34042);
/* harmony import */ var _support_VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/VoxelDynamicSection.js */ 80062);
/* harmony import */ var _support_VoxelSection_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/VoxelSection.js */ 77867);
/* harmony import */ var _support_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/VoxelSlice.js */ 16672);
/* harmony import */ var _support_VoxelStyle_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./support/VoxelStyle.js */ 68988);
/* harmony import */ var _support_VoxelVariable_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./support/VoxelVariable.js */ 99067);
/* harmony import */ var _support_VoxelVolume_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./support/VoxelVolume.js */ 92177);
/* harmony import */ var _support_VoxelVolumeIndex_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./support/VoxelVolumeIndex.js */ 79582);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const R=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__.default.getLogger(" esri.layers.VoxelLayer");let C=class extends((0,_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_23__.SceneService)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__.ArcGISService)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_21__.PortalLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__.ScaleRangeLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__.MultiOriginJSONMixin)((0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_18__.APIKeyMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_16__.default)))))))){constructor(e){super(e),this.serviceRoot="",this.popupEnabled=!0,this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default,this.style=null,this.opacity=1,this.variables=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default,this.volumes=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this._dbgFlags=new Set,this._handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_2__.default,this.version={major:Number.NaN,minor:Number.NaN,versionString:""}}set url(e){this._set("url",(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_24__.sanitizeUrl)(e,R))}destroy(){this._handles=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.destroyMaybe)(this._handles)}dbg(e,t){this._dbgFlags.has(e)&&(3===e?R.error(t):R.warn(t))}load(e){const t=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAbortError).then((()=>this._fetchService(t))).then((()=>this.serviceRoot=this.url));return this.addResolvingPromise(r),Promise.resolve(this)}getConfiguration(){this._handles.add([(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_7__.react)((()=>this._getRenderMode()),(e=>this._pushRenderModeToWasm(e))),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_7__.react)((()=>this._getCurrentVariableId()),(e=>this._pushCurrentVariableIdToWasm(e))),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_7__.react)((()=>this._getDynamicSections()),(e=>this._pushDynamicSectionsToWasm(e))),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_7__.react)((()=>this._getSlices()),(e=>this._pushSlicesToWasm(e))),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_7__.react)((()=>this._getSections()),(e=>this._pushSectionsToWasm(e)))]);const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index.toJSON(),sections:this.sections.toJSON(),style:this.style};return e.index&&this.index.isValid()?JSON.stringify(e):""}readVersion(e,t){return super.parseVersionString(e)}_getSections(){const e=[];for(const t of this.sections)e.push(new _support_VoxelSection_js__WEBPACK_IMPORTED_MODULE_27__.default({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}_pushSectionsToWasm(e){this.dbg(2,"VoxelLayer._pushSectionsToWasm() called");_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_17__.default.getInstance().setLayerStaticSections(this,e)||this.dbg(3,"VoxelLayer._pushSectionsToWasm() failed!")}_isPlaneValid(e,t,r){if(!e.point)return!1;if(!Array.isArray(e.point)||3!==e.point.length)return!1;if(!e.normal)return!1;if(!Array.isArray(e.normal)||3!==e.normal.length)return!1;for(let o=0;o<3;++o){const i=e.point[o];if(i<0||i>=r[t[o]].size)return!1}const i=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_15__.f)(e.normal[0],e.normal[1],e.normal[2]);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.n)(i,i);const s=1e-6;return!(Math.abs(i[0])+Math.abs(i[1])+Math.abs(i[2])<s)&&(e.normal[0]=i[0],e.normal[1]=i[1],e.normal[2]=i[2],!0)}getVariableStyle(e){let t=-1;t=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(e)?e:this._getCurrentVariableId();if(!(null==this?void 0:this.style.variableStyles)||-1===t)return null;const r=this.style.variableStyles.findIndex((e=>e.variableId===t));return r<0?null:this.style.variableStyles.getItemAt(r)}getVariable(e){let t=-1;if(t=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(e)?e:this._getCurrentVariableId(),!this.variables||-1===t)return null;const r=this.variables.findIndex((e=>e.id===t));return r<0?null:this.variables.getItemAt(r)}_getVolume(e){const t=this.getVariable(e);return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(t)?this.volumes.find((({id:e})=>e===t.volumeId)):null}_getVolumeStyle(e){const t=this.getVariable(e);return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(t)?this.style.volumeStyles.find((({volumeId:e})=>e===t.volumeId)):null}_getSlices(){const e=[],t=this._getVolume(null);if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(t)||!t.isVolumeValid())return e;const r=this._getVolumeStyle(null);if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(r))return e;for(const i of r.slices)this._isPlaneValid(i,[0,1,t.getZDimension()],t.dimensions)?e.push(new _support_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_28__.default({enabled:i.enabled,label:i.label,point:i.point,normal:i.normal})):e.push(new _support_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_28__.default({enabled:!1,label:"invalid",point:i.point,normal:i.normal}));return e}_pushSlicesToWasm(e){this.dbg(2,"VoxelLayer._pushSlicesToWasm() called!");_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_17__.default.getInstance().setLayerSlices(this,e)||this.dbg(3,"VoxelLayer._pushSlicesToWasm() failed!")}_getDynamicSections(){const e=[],t=this._getVolume(null);if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(t)||!t.isVolumeValid())return e;const r=this._getVolumeStyle(null);if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__.isSome)(r))return e;for(const i of r.dynamicSections)this._isPlaneValid(i,[0,1,t.getZDimension()],t.dimensions)?e.push(new _support_VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_26__.default({enabled:i.enabled,label:i.label,point:i.point,normal:i.normal})):e.push(new _support_VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_26__.default({enabled:!1,label:"invalid",point:i.point,normal:i.normal}));return e}_pushDynamicSectionsToWasm(e){this.dbg(2,"VoxelLayer._pushDynamicSectionsToWasm() called!");_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_17__.default.getInstance().setLayerDynamicSections(this,e)||this.dbg(3,"VoxelLayer._updateDynamicSections() failed!")}_getCurrentVariableId(){return this.style?this.style.currentVariableId:-1}_pushCurrentVariableIdToWasm(e){this.dbg(2,"VoxelLayer._pushCurrentVariableIdToWasm() called!");_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_17__.default.getInstance().setLayerCurrentVariable(this,e)||this.dbg(3,"VoxelLayer._pushCurrentVariableIdToWasm() failed!")}_getRenderMode(){return this.style?this.style.renderMode:"volume"}_pushRenderModeToWasm(e){this.dbg(2,"VoxelLayer._pushRenderModeToWasm() called!");_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_17__.default.getInstance().setLayerRenderMode(this,e)||this.dbg(3,"VoxelLayer.setLayerRenderMode() failed!")}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__.popupEnabled)],C.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:["Voxel"]})],C.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__.legendEnabled)],C.prototype,"legendEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({json:{write:!0}})],C.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__.url)],C.prototype,"url",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_support_VoxelSection_js__WEBPACK_IMPORTED_MODULE_27__.default),json:{write:!0,origins:{"web-scene":{name:"layerDefinition.sections",write:!0},service:{write:!1}}}})],C.prototype,"sections",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:_support_VoxelStyle_js__WEBPACK_IMPORTED_MODULE_29__.default,json:{write:!0,origins:{"web-scene":{name:"layerDefinition.style",write:!0},service:{write:!1}}}})],C.prototype,"style",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:["show","hide"]})],C.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],C.prototype,"opacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_support_VoxelVariable_js__WEBPACK_IMPORTED_MODULE_30__.default)})],C.prototype,"variables",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_support_VoxelVolume_js__WEBPACK_IMPORTED_MODULE_31__.default)})],C.prototype,"volumes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:_support_VoxelVolumeIndex_js__WEBPACK_IMPORTED_MODULE_32__.default})],C.prototype,"index",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],C.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],C.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({json:{read:!1},readOnly:!0})],C.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({readOnly:!0,json:{name:"serviceVersion"}})],C.prototype,"version",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_12__.reader)("service","version")],C.prototype,"readVersion",null),C=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__.subclass)("esri.layers.VoxelLayer")],C);const P=C;


/***/ }),

/***/ 88625:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/VoxelWasmManager.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _VoxelWasmPerScene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VoxelWasmPerScene.js */ 97398);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(){this.view2WASM=new Map}static getInstance(){return t.instance||(t.instance=new t),t.instance}getVoxelWasmPerSceneView(e){return this.view2WASM.has(e)?this.view2WASM.get(e):null}isUpdating(e,t){return!!this.view2WASM.has(e)&&this.view2WASM.get(e).isUpdating(t)}addLayer(t,i){return this.view2WASM.has(t)||this.view2WASM.set(t,new _VoxelWasmPerScene_js__WEBPACK_IMPORTED_MODULE_0__.default(t)),this.view2WASM.get(t).addVoxelLayer(i)}removeLayer(e,t){if(this.view2WASM.has(e)){this.view2WASM.get(e).removeVoxelLayer(t)<1&&this.view2WASM.delete(e)}}setLayerEnabled(e,t,i){if(this.view2WASM.has(e)){this.view2WASM.get(e).setEnabled(t,i)}}setLayerSlices(e,t){let i=!1;return this.view2WASM.forEach(((r,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(i=r.setSlices(a,t))}))})),i}setLayerDynamicSections(e,t){let i=!1;return this.view2WASM.forEach(((r,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(i=r.setDynamicSections(a,t))}))})),i}setLayerCurrentVariable(e,t){let i=!1;return this.view2WASM.forEach(((r,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(i=r.setCurrentVariable(a,t))}))})),i}setLayerRenderMode(e,t){let i=!1;return this.view2WASM.forEach(((r,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(i=r.setRenderMode(a,t))}))})),i}setLayerStaticSections(e,t){let i=!1;return this.view2WASM.forEach(((r,a)=>{a.allLayerViews.filter((e=>"voxel-3d"===e.type)).forEach((a=>{a.layer===e&&(i=r.setStaticSections(a,t))}))})),i}}


/***/ }),

/***/ 97398:
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/VoxelWasmPerScene.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ 30351);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Logger.js */ 22345);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/promiseUtils.js */ 7808);
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/reactiveUtils.js */ 7917);
/* harmony import */ var _libs_vxl_VxlModule_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/vxl/VxlModule.js */ 16985);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.default.getLogger("esri.layers.VoxelWasmPerScene");class o{constructor(e){this._halfIntTexturesAvailable=!1,this._havePreparedWithAllLayers=!1,this._renderPluginContext=null,this._vxl=null,this._pluginIsActive=!1,this._moreToLoad=!1,this._viewportWidth=-1,this._viewportHeight=-1,this._newLayers=[],this._layers=new Map,this._renderPass=0,this._renderSlot=22,this._rctx=null,this._renderTargetToRestore=null,this._lastFrameWasStationary=!1,this._wasmMemBlockSizes=[512,1024,2048,4096,8192,16384,32768,65536],this._wasmMemBlocks=new Map,this._dbgFlags=new Set,this._view=e,this.initialize()}get canRender(){return!!this._vxl&&"local"===this._view.viewingMode}dbg(e,t){this._dbgFlags.has(e)&&(4===e?l.error(t):l.warn(t))}removeRenderPlugin(){this._pluginIsActive&&this._view._stage&&(this.dbg(1,"--removeRenderPlugin--"),this._view._stage.removeRenderPlugin(this)),this._pluginIsActive=!1}initialize(){this.dbg(1,"--initialize--");for(const e of this._wasmMemBlockSizes)this._wasmMemBlocks.set(e,0);this._readyWatchHandle=(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__.react)((()=>this._view.ready),(e=>{e&&"local"===this._view.viewingMode?(this.dbg(1,"view ready status changed to ready on a local view, calling addRenderPlugin"),this._view._stage.addRenderPlugin([this._renderSlot],this),this._pluginIsActive=!0):(this.dbg(1,"view ready status changed, not ready or not a local view!"),this.removeRenderPlugin())}),{initial:!0}),this._qualityWatchHandle=(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__.react)((()=>{var e;return null==(e=this._view)?void 0:e.qualityProfile}),(e=>{this.dbg(3,"qualityProfile changed to "+e),this._vxl&&this._vxl.set_quality(this.toWasmQuality(e))}),{initial:!0}),this._timeExtentWatchHandle=(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__.react)((()=>{var e;return null==(e=this._view)?void 0:e.timeExtent}),(()=>{if(this._vxl){var e;const t=this._getTimeArgs(null==(e=this._view)?void 0:e.timeExtent);this.dbg(3,"sceneView timeExtent changed to useTime="+t.useTime+" st="+t.startTime+" et="+t.endTime),this._vxl.set_scene_time_extent(t.startTime,t.endTime,t.useTime),this._renderPluginContext.requestRender()}}),{initial:!0}),this._stationaryWatchHandle=(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__.react)((()=>{var e;return null==(e=this._view)?void 0:e.stationary}),(e=>{this._vxl&&e&&!this._lastFrameWasStationary&&this._renderPluginContext.requestRender()}))}initializeRenderContext(e){this.dbg(1,"--initializeRenderContext--");const t=e.renderContext.rctx;"webgl2"===t.webglVersion?(this._renderPluginContext=e,this._rctx=e.renderContext.rctx,this._halfIntTexturesAvailable=!!this._rctx.capabilities.textureNorm16,this.initializeWasm(t.gl)):this.dbg(4,"WebGL 1 context only!")}uninitializeRenderContext(){this._renderPluginContext=null,this._rctx=null,this.dbg(1,"--uninitializeRenderContext--")}restoreFramebuffer(){if(!this._renderTargetToRestore)return;const e=this._renderTargetToRestore.fbo;if(!!!this._rctx)return void this.dbg(4,"no context in restoreFramebuffer!");this._rctx.bindFramebuffer(e,!0);const t=this._renderTargetToRestore.viewport;this._rctx.setViewport(t.x,t.y,t.width,t.height)}bindPreviousDepthToSlot(e,t){const i=!!this._rctx,s=!!this._renderTargetToRestore;if(!i||!s)return 0;const r=this._renderTargetToRestore.fbo.depthStencilTexture;return r?(0===t?this._rctx.bindTexture(null,e,!0):this._rctx.bindTexture(r,e,!0),1):(this.dbg(4,"no depth/stencil texture exists!"),0)}setBlendState(e,t,i,s){this._rctx?(this._rctx.setBlendingEnabled(1===e),this._rctx.setBlendFunction(t,i),this._rctx.setBlendEquation(s)):this.dbg(4,"setBlendState callback has no rendering context!")}setFrontFace(e){this._rctx?this._rctx.setFrontFace(e):this.dbg(4,"setFrontFace callback has no rendering context!")}setDepthStencilStateFunction(e,t,i){this._rctx?(this._rctx.setDepthFunction(i),this._rctx.setDepthTestEnabled(1===e),this._rctx.setDepthWriteEnabled(1===t),this._rctx.setStencilTestEnabled(!1),this._rctx.setStencilFunction(519,0,255),this._rctx.setStencilOpSeparate(1028,7680,7682,7680),this._rctx.setStencilOpSeparate(1029,7680,7683,7680)):this.dbg(4,"setDepthStencilStateFunction callback has no rendering context!")}setRasterizerState(e){if(this._rctx)switch(e){case 1:this._rctx.setFaceCullingEnabled(!1);break;case 3:this._rctx.setCullFace(1029),this._rctx.setFaceCullingEnabled(!0);break;case 2:this._rctx.setCullFace(1028),this._rctx.setFaceCullingEnabled(!0)}else this.dbg(4,"setRasterizerState callback has no rendering context!")}setViewport(e,t,i,s){this._rctx?this._rctx.setViewport(e,t,i,s):this.dbg(4,"setViewport callback has no rendering context!")}_syncRequestsResponses(){this._layers.forEach(((t,i)=>{const s=[];t.responses.forEach(((e,t)=>{s.push(t),this.dbg(2,"responding for requestID:"+t+" size:"+e.size),this._vxl.respond(i,t,e)}));const n=t.responses;for(const e of s)n.delete(e);const a=this._vxl.get_new_requests(i),l=t.abortController.signal;for(const o in a){t.outstandingRequestCount+=1,1===t.outstandingRequestCount&&t.layerView.updatingFlagChanged();const i=a[o],s={responseType:"array-buffer",signal:l};this.dbg(2,"making requestID:"+o+" url:"+i.url),(0,_request_js__WEBPACK_IMPORTED_MODULE_0__.default)(i.url,s).then((e=>{t.outstandingRequestCount-=1,0===t.outstandingRequestCount&&t.layerView.updatingFlagChanged(),this.dbg(2,"have response for requestID:"+o);let s=0;if(e.data.byteLength>0){s=this._vxl._malloc(e.data.byteLength);const t=new Uint8Array(this._vxl.HEAPU8.buffer,s,e.data.byteLength),i=new Uint8Array(e.data);for(let s=0;s<e.data.byteLength;++s)t[s]=i[s]}n.set(+o,{type:i.type,ptr:s,size:e.data.byteLength,success:!0})})).catch((e=>{t.outstandingRequestCount-=1,0===t.outstandingRequestCount&&t.layerView.updatingFlagChanged(),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAbortError)(e)||(this.dbg(4,`requestID:${o} failed, error=${e.toString()}`),n.set(+o,{type:i.type,ptr:0,size:0,success:!1}))}))}}))}updateWasmCamera(e){this._vxl.set_projection_matrix.apply(this._vxl,e.projectionMatrix),this._vxl.set_view_matrix.apply(this._vxl,e.viewMatrix),this._vxl.set_near_far(e.near,e.far)}isUpdating(e){return!(this._vxl||!this._vxlPromise)||!!this._layers.has(e)&&this._layers.get(e).outstandingRequestCount>0}setEnabled(e,t){this._layers.forEach(((i,s)=>{i.layerView===e&&(this._vxl.set_enabled(s,t),this._renderPluginContext.requestRender())}))}setSlices(e,t){const i={mask:2,slices:{planes:t,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,i,!0)}setDynamicSections(e,t){const i={mask:4,dynamicSections:{planes:t,currentEditPlane:-1}};return this._doMaskedUIUpdate(e,i,!0)}setStaticSections(e,t){const i={mask:1,staticSections:t};return this._doMaskedUIUpdate(e,i,!0)}setCurrentVariable(e,t){const i={mask:1024,currentVariable:t};return this._doMaskedUIUpdate(e,i,!0)}setRenderMode(e,t){const i={mask:8192,renderMode:t};return this._doMaskedUIUpdate(e,i,!0)}_doMaskedUIUpdate(e,t,i){if(!this._vxl)return!1;let s=!1;return this._layers.forEach(((i,r)=>{if(i.layerView===e){const e={str:JSON.stringify(t),byteCount:0,ptr:0,isReusable:!1};this._AllocateBlock(e)&&(s=1===this._vxl.handle_masked_ui_update(r,e.ptr,e.byteCount),e.isReusable||this._vxl._free(e.ptr))}})),s&&i&&this._renderPluginContext.requestRender(),s}addVoxelLayer(e){if(!this._vxl){const t={layerView:e,resolveCallback:null,rejectCallback:null},i=new Promise(((e,i)=>{t.resolveCallback=e,t.rejectCallback=i}));return this._newLayers.push(t),i}const t=this._addVoxelLayer(e);return t<0?Promise.reject(-1):Promise.resolve(t)}removeVoxelLayer(e){if(!this._vxl){const t=this._newLayers.findIndex((t=>e===t.layerView));t>=0&&(this._newLayers[t].resolveCallback(-1),this._newLayers.splice(t,1));const i=this._newLayers.length;return 0===i&&(this.dbg(1," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),i}let t=-1;this._layers.forEach(((i,s)=>{i.layerView===e&&(t=s,i.abortController.abort(),this._vxl.remove_layer(t))})),t>=0&&this._layers.delete(t);const i=this._layers.size;return 0===i&&(this.dbg(1," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),i}_getBlockSize(e){for(const t of this._wasmMemBlockSizes)if(e<t)return t;return-1}_AllocateBlock(e){e.byteCount=this._vxl.lengthBytesUTF8(e.str)+1;const t=this._getBlockSize(e.byteCount);return t<0?(e.isReusable=!1,e.ptr=this._vxl._malloc(e.byteCount)):(e.isReusable=!0,e.ptr=this._wasmMemBlocks.get(t),0===e.ptr&&(e.ptr=this._vxl._malloc(t),this._wasmMemBlocks.set(t,e.ptr))),0!==e.ptr&&(this._vxl.stringToUTF8(e.str,e.ptr,e.byteCount),!0)}_getTimeArgs(e){let t=-Number.MAX_VALUE,s=Number.MAX_VALUE,r=!1;return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e)&&(e.isAllTime?r=!0:((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e.start)&&(r=!0,t=e.start.getTime()/1e3),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e.end)&&(r=!0,s=e.end.getTime()/1e3))),{startTime:t,endTime:s,useTime:r}}_addVoxelLayer(e){var t;const i=e.layer;let s=-1;const r=i.getConfiguration();if(r.length<1)return-1;const n={str:r,byteCount:0,ptr:0,isReusable:!1};if(!this._AllocateBlock(n))return-1;const a=this._getTimeArgs(null==(t=this._view)?void 0:t.timeExtent),o=this._view.spatialReference.isWGS84&&i.spatialReference.isWGS84?111319.49079327357:1;if(s=this._vxl.add_layer(i.serviceRoot,n.ptr,n.byteCount,o,o,a.startTime,a.endTime,a.useTime,this.toWasmQuality(this._view.qualityProfile)),n.isReusable||this._vxl._free(n.ptr),s>=0){const t=new AbortController;if(this._layers.set(s,{layerView:e,responses:new Map,outstandingRequestCount:0,abortController:t}),!this._halfIntTexturesAvailable){const t=[];let i="";for(const s of e.layer.variables)"Int16"!==s.renderingFormat.type&&"UInt16"!==s.renderingFormat.type||(t.push(s.name),s.id===e.layer.style.currentVariableId&&(i=s.name));""!==i&&l.error("#addVoxelLayer_error()",e.layer,`The voxel layer '${e.layer.title}' cannot render the current variable '${i}' in this browser`),t.length>0&&l.warn("#addVoxelLayer_warning()",e.layer,`The voxel layer '${e.layer.title}' cannot render the variables '${t.toString()}' in this browser`)}return s}return-1}prepareRender(e){if(!this._vxl)return;const t=e.viewForward,i=e.eye;this._vxl.update_camera_pos_and_direction(i[0],i[1],i[2],t[0],t[1],t[2]);const s=this._vxl.cull();this.dbg(2,"missingResourceCount="+s),this._moreToLoad=s>0,this._havePreparedWithAllLayers=0===this._newLayers.length}render(e){if(!this._vxl||e.pass!==this._renderPass||e.slot!==this._renderSlot)return!1;for(const i of this._newLayers){const e=this._addVoxelLayer(i.layerView);-1===e?i.rejectCallback(-1):i.resolveCallback(e)}if(this._newLayers=[],0===this._layers.size)return this.dbg(4,"No voxel layers but RenderPlugin instance is being asked to render!"),!1;this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()},this._syncRequestsResponses(),this._lastFrameWasStationary=this._view.stationary,this._vxl.begin_color_frame(!this._view.stationary||this._moreToLoad,e.scenelightingData.lightingMainDirection[0],e.scenelightingData.lightingMainDirection[1],e.scenelightingData.lightingMainDirection[2]);const t=this._renderTargetToRestore.viewport;return t.width===this._viewportWidth&&t.height===this._viewportHeight||(this._viewportWidth=t.width,this._viewportHeight=t.height,this._vxl.set_viewport(t.width,t.height)),0===t.x&&0===t.y||this.dbg(4,"Unsupported viewport parameters detected!"),this.updateWasmCamera(e.camera),this._vxl.draw(),this._renderTargetToRestore.fbo=null,e.rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),e.rctx.externalVertexArrayObjectUpdate(),e.rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),(this._moreToLoad||!this._havePreparedWithAllLayers&&this._layers.size>0)&&this._renderPluginContext.requestRender(),!0}destroy(){this.dbg(1,"--destroy--"),this.removeRenderPlugin(),this._readyWatchHandle=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.removeMaybe)(this._readyWatchHandle),this._qualityWatchHandle=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.removeMaybe)(this._qualityWatchHandle),this._timeExtentWatchHandle=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.removeMaybe)(this._timeExtentWatchHandle),this._stationaryWatchHandle=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.removeMaybe)(this._stationaryWatchHandle),this._vxl&&(this._layers.forEach((e=>{e.abortController.abort()})),this._wasmMemBlocks.forEach((e=>{0!==e&&this._vxl._free(e)})),this._vxl.uninitialize_voxel_wasm(),this._vxl=null)}initializeWasm(e){return this._vxl?Promise.resolve():(this._vxlPromise||(this._vxlPromise=(0,_libs_vxl_VxlModule_js__WEBPACK_IMPORTED_MODULE_5__.loadVoxelWASM)(e).then((e=>{var t;if(this._vxl=e,this._vxlPromise=null,this._newLayers.length<=0)return this.dbg(1," no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"),void this.destroy();const i=this._getTimeArgs(null==(t=this._view)?void 0:t.timeExtent),s=this._vxl.addFunction(this.restoreFramebuffer.bind(this),"v"),r=this._vxl.addFunction(this.setBlendState.bind(this),"viiii"),n=this._vxl.addFunction(this.setFrontFace.bind(this),"vi"),a=this._vxl.addFunction(this.setRasterizerState.bind(this),"vi"),l=this._vxl.addFunction(this.setDepthStencilStateFunction.bind(this),"viii"),o=this._vxl.addFunction(this.setViewport.bind(this),"viiii"),h=this._vxl.addFunction(this.bindPreviousDepthToSlot.bind(this),"iii");this._vxl.initialize_voxel_wasm(s,r,n,a,l,o,h,i.startTime,i.endTime,i.useTime),this._renderPluginContext&&this._renderPluginContext.requestRender()})).catch((()=>{for(const e of this._newLayers)e.rejectCallback(-2);this.dbg(4," WASM failed to download, removing RenderPlugin and destroying"),this.destroy()}))),this._vxlPromise)}pickDepth(e,t,i){if(!this._vxl||!this._rctx||0===this._layers.size)return null;const s=i.viewport[3]-t;if(e<0||e>i.viewport[2]||t<0||t>i.viewport[3])return this.dbg(4,`pickDepth: outOfRange, screenXY=[${e}, ${s}], vp=[${i.viewport.toString()}]`),null;this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()};const r=i.viewForward,n=i.eye;this._vxl.update_camera_pos_and_direction(n[0],n[1],n[2],r[0],r[1],r[2]),this.updateWasmCamera(i),this._vxl.begin_frame();const a=this._vxl.pick_depth(e,s);if(this._renderTargetToRestore.fbo=null,this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),this._rctx.externalVertexArrayObjectUpdate(),this._rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate(),a.success){return a.distanceToCamera}return null}toWasmQuality(e){switch(e){case"low":return 0;case"medium":return 1;case"high":return 2}}}


/***/ }),

/***/ 21369:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelAlphaStop.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.alpha=0,this.position=0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"alpha",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"position",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.VoxelAlphaStop")],t);const p=t;


/***/ }),

/***/ 34314:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelColorStop.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
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
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(){super(...arguments),this.color=null,this.position=0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__.default,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__.Integer],write:{enabled:!0,isRequired:!0}}})],i.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"position",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.VoxelColorStop")],i);const c=i;


/***/ }),

/***/ 51158:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelDimension.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _VoxelIrregularSpacing_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VoxelIrregularSpacing.js */ 77314);
/* harmony import */ var _VoxelRegularSpacing_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VoxelRegularSpacing.js */ 92116);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=null,this.isWrappedDateLine=null,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_VoxelIrregularSpacing_js__WEBPACK_IMPORTED_MODULE_7__.default,json:{write:!0}})],p.prototype,"irregularSpacing",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],p.prototype,"isPositiveUp",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],p.prototype,"isWrappedDateLine",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"quantity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_VoxelRegularSpacing_js__WEBPACK_IMPORTED_MODULE_8__.default,json:{write:!0}})],p.prototype,"regularSpacing",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],p.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"unit",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.VoxelDimension")],p);const n=p;


/***/ }),

/***/ 80062:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelDynamicSection.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{default:!0,write:!0}})],s.prototype,"enabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],s.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:!0}})],s.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:!0}})],s.prototype,"point",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.VoxelDynamicSection")],s);const p=s;


/***/ }),

/***/ 46035:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelFormat.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:["discrete","continuous"],json:{write:!0}})],s.prototype,"continuity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],s.prototype,"hasNoData",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],s.prototype,"noData",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],s.prototype,"offset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],s.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"type",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.VoxelFormat")],s);const p=s;


/***/ }),

/***/ 77314:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelIrregularSpacing.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.values=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:!0}})],t.prototype,"values",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.VoxelIrregularSpacing")],t);const p=t;


/***/ }),

/***/ 729:
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelIsosurface.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
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
let l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(){super(...arguments),this.color=null,this.value=null,this.enabled=!0,this.label=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__.default,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__.Integer],write:{enabled:!0,isRequired:!0}}})],l.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{default:!0,write:!0}})],l.prototype,"enabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],l.prototype,"label",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.VoxelIsosurface")],l);const i=l;


/***/ }),

/***/ 56420:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelRangeFilter.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.enabled=!1,this.range=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{default:!1,write:!0}})],t.prototype,"enabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:!0}})],t.prototype,"range",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.VoxelRangeFilter")],t);const p=t;


/***/ }),

/***/ 92116:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelRegularSpacing.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.scale=1,this.offset=0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],t.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],t.prototype,"offset",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.VoxelRegularSpacing")],t);const p=t;


/***/ }),

/***/ 77867:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelSection.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 38650);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _VoxelSlice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VoxelSlice.js */ 16672);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ 26912);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}readHref(e,r,o){return (0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.f)(e,o)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{default:!0,write:!0}})],n.prototype,"enabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"href",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)(["service","web-scene"],"href")],n.prototype,"readHref",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer,json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],n.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"point",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer],json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"sizeInPixel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_8__.default],json:{write:!0}})],n.prototype,"slices",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer,json:{default:0,write:!0}})],n.prototype,"timeId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer,json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"variableId",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.VoxelSection")],n);const a=n;


/***/ }),

/***/ 62174:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelSimpleShading.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t.prototype,"diffuseFactor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t.prototype,"specularFactor",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.VoxelSimpleShading")],t);const p=t;


/***/ }),

/***/ 16672:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelSlice.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.enabled=!0,this.label="",this.normal=null,this.point=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],s.prototype,"enabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],s.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:!0}})],s.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:!0}})],s.prototype,"point",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.VoxelSlice")],s);const p=s;


/***/ }),

/***/ 68988:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelStyle.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/collectionUtils.js */ 81713);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _VoxelSimpleShading_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VoxelSimpleShading.js */ 62174);
/* harmony import */ var _VoxelVariableStyle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VoxelVariableStyle.js */ 54573);
/* harmony import */ var _VoxelVolumeStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VoxelVolumeStyle.js */ 77632);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let y=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport{constructor(e){super(e),this.currentVariableId=0,this.renderMode="volume",this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new _VoxelSimpleShading_js__WEBPACK_IMPORTED_MODULE_9__.default,this.volumeStyles=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default,this.variableStyles=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default}set volumeStyles(e){this._set("volumeStyles",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(e,this._get("volumeStyles"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelVolumeStyle_js__WEBPACK_IMPORTED_MODULE_11__.default)))}set variableStyles(e){this._set("variableStyles",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(e,this._get("variableStyles"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelVariableStyle_js__WEBPACK_IMPORTED_MODULE_10__.default)))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelVolumeStyle_js__WEBPACK_IMPORTED_MODULE_11__.default),json:{write:!0}})],y.prototype,"volumeStyles",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__.Integer,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"currentVariableId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:["volume","surfaces"],json:{write:!0}})],y.prototype,"renderMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelVariableStyle_js__WEBPACK_IMPORTED_MODULE_10__.default),json:{write:!0}})],y.prototype,"variableStyles",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:!0}})],y.prototype,"enableSlices",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:!0}})],y.prototype,"enableSections",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:!0}})],y.prototype,"enableDynamicSections",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:!0}})],y.prototype,"enableIsosurfaces",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_VoxelSimpleShading_js__WEBPACK_IMPORTED_MODULE_9__.default,json:{write:!0}})],y.prototype,"shading",void 0),y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.support.VoxelStyle")],y);const c=y;


/***/ }),

/***/ 15071:
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelTransferFunctionStyle.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/collectionUtils.js */ 81713);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _VoxelAlphaStop_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VoxelAlphaStop.js */ 21369);
/* harmony import */ var _VoxelColorStop_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VoxelColorStop.js */ 34314);
/* harmony import */ var _VoxelRangeFilter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VoxelRangeFilter.js */ 56420);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport{constructor(o){super(o),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this.colorStops=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default,this.alphaStops=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default}set colorStops(o){this._set("colorStops",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(o,this._get("colorStops"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelColorStop_js__WEBPACK_IMPORTED_MODULE_10__.default)))}set alphaStops(o){this._set("alphaStops",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(o,this._get("alphaStops"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelAlphaStop_js__WEBPACK_IMPORTED_MODULE_9__.default)))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:["linear","nearest"],json:{write:!0}})],n.prototype,"interpolation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"stretchRange",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelColorStop_js__WEBPACK_IMPORTED_MODULE_10__.default),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],n.prototype,"colorStops",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelAlphaStop_js__WEBPACK_IMPORTED_MODULE_9__.default),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.alphaStops&&this.alphaStops.length>0}}}}})],n.prototype,"alphaStops",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_VoxelRangeFilter_js__WEBPACK_IMPORTED_MODULE_11__.default,json:{write:!0}})],n.prototype,"rangeFilter",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.support.VoxelTransferFunctionStyle")],n);const c=n;


/***/ }),

/***/ 16164:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelUniqueValue.js ***!
  \**********************************************************************/
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
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(){super(...arguments),this.color=null,this.value=0,this.enabled=!0,this.label=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__.default,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__.Integer],write:{enabled:!0,isRequired:!0}}})],i.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__.Integer,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{default:!0,write:!0}})],i.prototype,"enabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],i.prototype,"label",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.VoxelUniqueValue")],i);const l=i;


/***/ }),

/***/ 99067:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelVariable.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _VoxelFormat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VoxelFormat.js */ 46035);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],i.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_VoxelFormat_js__WEBPACK_IMPORTED_MODULE_7__.default,json:{write:!0}})],i.prototype,"originalFormat",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_VoxelFormat_js__WEBPACK_IMPORTED_MODULE_7__.default,json:{write:{enabled:!0,isRequired:!0}}})],i.prototype,"renderingFormat",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],i.prototype,"unit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],i.prototype,"volumeId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],i.prototype,"type",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.VoxelVariable")],i);const p=i;


/***/ }),

/***/ 54573:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelVariableStyle.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/collectionUtils.js */ 81713);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _VoxelIsosurface_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VoxelIsosurface.js */ 729);
/* harmony import */ var _VoxelTransferFunctionStyle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VoxelTransferFunctionStyle.js */ 15071);
/* harmony import */ var _VoxelUniqueValue_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VoxelUniqueValue.js */ 16164);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport{constructor(e){super(e),this.variableId=0,this.label=null,this.transferFunction=null,this.uniqueValues=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default,this.isosurfaces=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default}set uniqueValues(e){this._set("uniqueValues",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(e,this._get("uniqueValues"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelUniqueValue_js__WEBPACK_IMPORTED_MODULE_11__.default)))}set isosurfaces(e){this._set("isosurfaces",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(e,this._get("isosurfaces"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelIsosurface_js__WEBPACK_IMPORTED_MODULE_9__.default)))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__.Integer,json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"variableId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_VoxelTransferFunctionStyle_js__WEBPACK_IMPORTED_MODULE_10__.default,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],p.prototype,"transferFunction",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelUniqueValue_js__WEBPACK_IMPORTED_MODULE_11__.default),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],p.prototype,"uniqueValues",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelIsosurface_js__WEBPACK_IMPORTED_MODULE_9__.default),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,s=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&s}}}}})],p.prototype,"isosurfaces",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.support.VoxelVariableStyle")],p);const c=p;


/***/ }),

/***/ 92177:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelVolume.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _VoxelDimension_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VoxelDimension.js */ 51158);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.id=0,this.dimensions=null}getZDimension(){if(!this.dimensions)return-1;if(!Array.isArray(this.dimensions))return-1;if(4!==this.dimensions.length)return-1;for(let s=2;s<4;++s)if(this.dimensions[s].size>0)return s;return-1}isVolumeValid(){return!!this.dimensions&&(!!Array.isArray(this.dimensions)&&(4===this.dimensions.length&&(!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&-1!==this.getZDimension())))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_VoxelDimension_js__WEBPACK_IMPORTED_MODULE_7__.default],json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"dimensions",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.VoxelVolume")],t);const n=t;


/***/ }),

/***/ 79582:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelVolumeIndex.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let s=t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new t;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&(!!this.brickSize&&(!!this.nodeSize&&(!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&(3===this.brickSize.length&&3===this.nodeSize.length&&(32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&(4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]))))))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"apronWidth",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"brickSize",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"maxLodLevel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"nodeSize",void 0),s=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.VoxelVolumeIndex")],s);const p=s;


/***/ }),

/***/ 77632:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VoxelVolumeStyle.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ 37635);
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/collectionUtils.js */ 81713);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ 41147);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VoxelDynamicSection.js */ 80062);
/* harmony import */ var _VoxelSlice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VoxelSlice.js */ 16672);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default,this.dynamicSections=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default}set slices(e){this._set("slices",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(e,this._get("slices"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_10__.default)))}set dynamicSections(e){this._set("dynamicSections",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(e,this._get("dynamicSections"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_9__.default)))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__.Integer,json:{write:{enabled:!0,isRequired:!0}}})],n.prototype,"volumeId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{default:1,write:!0}})],n.prototype,"verticalExaggeration",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],n.prototype,"exaggerationMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{default:0,write:!0}})],n.prototype,"verticalOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_10__.default),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],n.prototype,"slices",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__.default.ofType(_VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_9__.default),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],n.prototype,"dynamicSections",null),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.support.VoxelVolumeStyle")],n);const a=n;


/***/ }),

/***/ 16985:
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/vxl/VxlModule.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadVoxelWASM": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets.js */ 22287);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(e){return new Promise((t=>__webpack_require__.e(/*! import() */ 5700).then(__webpack_require__.bind(__webpack_require__, /*! ../../chunks/vxlLayer.js */ 25700)).then((e=>e.v)).then((({default:n})=>{const r=n({locateFile:i,preinitializedWebGLContext:e,onRuntimeInitialized:()=>t(r)})})))).catch((e=>Promise.reject(e)))}function i(t){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__.getAssetUrl)(`esri/libs/vxl/${t}`)}


/***/ })

}]);
//# sourceMappingURL=8832.df8361912f117f52f7ed.js.map