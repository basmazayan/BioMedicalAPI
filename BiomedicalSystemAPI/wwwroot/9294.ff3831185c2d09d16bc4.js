"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[9294],{

/***/ 69294:
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/GroupLayer.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/loadAll.js */ 50942);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/maybe.js */ 18502);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ 2363);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/utils.js */ 43365);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ 88445);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Layer.js */ 2045);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ 88945);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ 66517);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ 32617);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ 41099);
/* harmony import */ var _support_LayersMixin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../support/LayersMixin.js */ 12059);
/* harmony import */ var _support_TablesMixin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../support/TablesMixin.js */ 34898);
/* harmony import */ var _webdoc_support_writeUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../webdoc/support/writeUtils.js */ 708);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_12__.BlendLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_15__.ScaleRangeLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_13__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_14__.PortalLayer)((0,_support_TablesMixin_js__WEBPACK_IMPORTED_MODULE_17__.TablesMixin)((0,_support_LayersMixin_js__WEBPACK_IMPORTED_MODULE_16__.LayersMixin)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_11__.default)))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this)}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}_writeLayers(i,e,s,r){const o=[];if(!i)return o;i.forEach((i=>{const e=(0,_webdoc_support_writeUtils_js__WEBPACK_IMPORTED_MODULE_18__.getLayerJSON)(i,r.webmap?r.webmap.getLayerJSONFromResourceInfo(i):null,r);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isSome)(e)&&e.layerType&&o.push(e)})),e.layers=o}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return (0,_core_loadAll_js__WEBPACK_IMPORTED_MODULE_1__.loadAll)(this,(i=>{i(this.layers)}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1)}))}_enforceVisibility(i,e){if(!(0,_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_7__.getProperties)(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e}))}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i}))}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],m.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{read:!1,write:{ignoreOrigin:!0}}})],m.prototype,"layers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__.writer)("layers")],m.prototype,"_writeLayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:["GroupLayer"]})],m.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"portalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],m.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{read:!1},readOnly:!0,value:"group"})],m.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],m.prototype,"visibilityMode",null),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.layers.GroupLayer")],m);const u=m;


/***/ })

}]);
//# sourceMappingURL=9294.ff3831185c2d09d16bc4.js.map