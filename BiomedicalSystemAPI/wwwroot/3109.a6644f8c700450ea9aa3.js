"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[3109],{

/***/ 71590:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/effects/EffectView.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canInterpolateEffectStops": () => (/* binding */ p),
/* harmony export */   "convertEffectToStops": () => (/* binding */ _),
/* harmony export */   "default": () => (/* binding */ u),
/* harmony export */   "normalizeEffectStops": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ 98240);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ 60161);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 94911);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parser.js */ 24921);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils.js */ 88031);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=-1;let h=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__.default{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__.default)("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(_(t))}catch(e){this._transitionTo([]),_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__.default.getLogger(this.declaredClass).warn("Invalid Effect",{effect:t,error:e})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return null!==this._to}canTransitionTo(t){try{return this.scale>0&&p(this._current,_(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}end(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&p(this._current,t,this.scale)?(this._final=t,this._to=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(t),m(this._current,this._to,this.scale),this._from=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let s=0;s<this._current.length;s++){const t=this._current[s],r=this._from[s],i=this._to[s];t.scale=g(r.scale,i.scale,e);for(let s=0;s<t.effects.length;s++){const n=t.effects[s],c=r.effects[s],o=i.effects[s];n.interpolate(c,o,e)}}1===e&&(this._current=this._final,this._set("effects",this._current[0]?(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),0===this._current.length)return;const e=this._current,s=this._current.length-1;let r,i,n=1;if(1===e.length||t>=e[0].scale)i=r=e[0].effects;else if(t<=e[s].scale)i=r=e[s].effects;else for(let c=0;c<s;c++){const s=e[c],o=e[c+1];if(s.scale>=t&&o.scale<=t){n=(t-s.scale)/(o.scale-s.scale),r=s.effects,i=o.effects;break}}for(let c=0;c<this.effects.length;c++){this.effects[c].interpolate(r[c],i[c],n)}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],h.prototype,"_to",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],h.prototype,"duration",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({value:""})],h.prototype,"effect",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],h.prototype,"effects",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],h.prototype,"hasEffects",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({value:0})],h.prototype,"scale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],h.prototype,"transitioning",null),h=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.effects.EffectView")],h);const u=h;function _(t){const e=(0,_parser_js__WEBPACK_IMPORTED_MODULE_8__.parse)(t)||[];return d(e)?[{scale:a,effects:e}]:e}function p(t,e,s){var r,i,n,c;if(null==(r=t[0])||!r.effects||null==(i=e[0])||!i.effects)return!0;return!(((null==(n=t[0])?void 0:n.scale)===a||(null==(c=e[0])?void 0:c.scale)===a)&&(t.length>1||e.length>1)&&s<=0)&&(0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.canInterpolateEffects)(t[0].effects,e[0].effects)}function m(t,e,s){var r,i;const n=t.length>e.length?t:e,c=t.length>e.length?e:t,o=c[c.length-1],l=null!=(r=null==o?void 0:o.scale)?r:s,h=null!=(i=null==o?void 0:o.effects)?i:[];for(let f=c.length;f<n.length;f++)c.push({scale:l,effects:[...h]});for(let u=0;u<n.length;u++)c[u].scale=c[u].scale===a?s:c[u].scale,n[u].scale=n[u].scale===a?s:n[u].scale,(0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.normalizeEffects)(c[u].effects,n[u].effects)}function g(t,e,s){return t+(e-t)*s}function d(t){const e=t[0];return!!e&&"type"in e}


/***/ }),

/***/ 99345:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Container.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ 87266);
/* harmony import */ var _layers_effects_EffectView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layers/effects/EffectView.js */ 71590);
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisplayObject.js */ 17821);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_2__.DisplayObject{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e))}get computedEffects(){var e,t;return null!=(e=null==(t=this._effectView)?void 0:t.effects)?e:null}get effect(){var e,t;return null!=(e=null==(t=this._effectView)?void 0:t.effect)?e:""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new _layers_effects_EffectView_js__WEBPACK_IMPORTED_MODULE_1__.default),this._effectView.effect=e,this.requestRender())}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender())}doRender(e){const t=this.createRenderParams(e);this.renderChildren(t)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;const i=e.parent;return i&&i!==this&&i.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1)}_createTransforms(){return{dvs:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.beforeRender(e);for(const t of this.children)t.processRender(e);for(const t of this.children)t.afterRender(e)}createRenderParams(e){return{...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}


/***/ }),

/***/ 17821:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/DisplayObject.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayObject": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Evented.js */ 33380);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ 30627);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ 7808);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=1/(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__.default)("mapview-transitions-duration");class a extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__.default{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.isNone)(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.createResolver)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.createResolver)(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var t;null==(t=this.parent)||t.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,s=this.computedOpacity;if(s===e)this.computedVisible=this.visible;else{const i=t*r;this.computedOpacity=s>e?Math.max(e,s-i):Math.min(e,s+i),this.computedVisible=this.computedOpacity>0;const a=e===this.computedOpacity;this.inFadeTransition=!a,a||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}


/***/ }),

/***/ 23155:
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/materialKey/MaterialKey.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FillMaterialKey": () => (/* binding */ x),
/* harmony export */   "LabelMaterialKey": () => (/* binding */ b),
/* harmony export */   "LineMaterialKey": () => (/* binding */ B),
/* harmony export */   "MarkerMaterialKey": () => (/* binding */ U),
/* harmony export */   "MaterialKeyBase": () => (/* binding */ _),
/* harmony export */   "TextMaterialKey": () => (/* binding */ R),
/* harmony export */   "createMaterialKey": () => (/* binding */ L),
/* harmony export */   "getSizeFlagsMask": () => (/* binding */ r),
/* harmony export */   "hydrateMaterialKey": () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ 61414);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ 31620);
/* harmony import */ var _mesh_templates_meshUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mesh/templates/meshUtils.js */ 44915);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t,s){const a=_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVFlag.SIZE_FIELD_STOPS|_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVFlag.SIZE_MINMAX_VALUE|_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVFlag.SIZE_SCALE_STOPS|_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVFlag.SIZE_UNIT_VALUE,r=(t&(_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVTarget.FIELD_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVTarget.MINMAX_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVTarget.SCALE_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVTarget.UNIT_TARGETS_OUTLINE))>>>4;return s.isOutline||s.isOutlinedFill?a&r:a&~r}const n=0,v=8,o=7,l=8,h=11,S=11,u=12,d=13,V=14,c=15,p=15,g=16,z=17,m=18,y=19,E=20,T=21,M=22;function L(t,e){switch(t){case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.FILL:return x.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.LINE:return B.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.MARKER:return U.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.TEXT:return R.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.LABEL:return b.from(e);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function F(t){switch(_.load(t).geometryType){case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.MARKER:return new U(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.FILL:return new x(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.LINE:return new B(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.TEXT:return new R(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.LABEL:return new b(t)}}class _{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(l,h)}set geometryType(t){this.setBits(t,l,h)}get mapAligned(){return!!this.bit(E)}set mapAligned(t){this.setBit(E,t)}get sdf(){return!!this.bit(S)}set sdf(t){this.setBit(S,t)}get pattern(){return!!this.bit(u)}set pattern(t){this.setBit(u,t)}get textureBinding(){return this.bits(n,v)}set textureBinding(t){this.setBits(t,n,v)}get geometryTypeString(){switch(this.geometryType){case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.FILL:return"fill";case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.MARKER:return"marker";case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.LINE:return"line";case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.TEXT:return"text";case _enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.LABEL:return"label";default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default(`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const i=1<<t;e?this._data|=i:this._data&=~i}bit(t){return(this._data&1<<t)>>t}setBits(t,e,i){for(let s=e,a=0;s<i;s++,a++)this.setBit(s,0!=(t&1<<a))}bits(t,e){let i=0;for(let s=t,a=0;s<e;s++,a++)i|=this.bit(s)<<a;return i}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(o&this.textureBinding)}}_.shared=new _(0);const I=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(g)}set vvSizeMinMaxValue(t){this.setBit(g,t)}get vvSizeScaleStops(){return 0!==this.bit(z)}set vvSizeScaleStops(t){this.setBit(z,t)}get vvSizeFieldStops(){return 0!==this.bit(m)}set vvSizeFieldStops(t){this.setBit(m,t)}get vvSizeUnitValue(){return 0!==this.bit(y)}set vvSizeUnitValue(t){this.setBit(y,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,i){super.setVV(t,i);const s=r(t,i)&t;this.vvSizeMinMaxValue=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVFlag.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVFlag.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVFlag.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVFlag.SIZE_SCALE_STOPS)}},O=t=>class extends t{get vvRotation(){return 0!==this.bit(c)}set vvRotation(t){this.setBit(c,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,i){super.setVV(t,i),this.vvRotation=!i.isOutline&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVFlag.ROTATION)}},A=t=>class extends t{get vvColor(){return 0!==this.bit(d)}set vvColor(t){this.setBit(d,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,i){super.setVV(t,i),this.vvColor=!i.isOutline&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVFlag.COLOR)}},f=t=>class extends t{get vvOpacity(){return 0!==this.bit(V)}set vvOpacity(t){this.setBit(V,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,i){super.setVV(t,i),this.vvOpacity=!i.isOutline&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLVVFlag.OPACITY)}};class x extends(A(f(I(_)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.FILL,e.dotDensity="dot-density"===t.stride.fill,e.simple="simple"===t.stride.fill,e.outlinedFill=t.isOutlinedFill,e.dotDensity||e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,outlinedFill:this.outlinedFill,simple:this.simple,vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}get dotDensity(){return!!this.bit(p)}set dotDensity(t){this.setBit(p,t)}get simple(){return!!this.bit(M)}set simple(t){this.setBit(M,t)}get outlinedFill(){return!!this.bit(T)}set outlinedFill(t){this.setBit(T,t)}}x.shared=new x(0);class U extends(A(f(O(I(_))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.MARKER,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}U.shared=new U(0);class B extends(A(f(I(_)))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.LINE,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}B.shared=new B(0);class R extends(A(f(O(I(_))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.TEXT,e.setVV(t.vvFlags,t),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}R.shared=new R(0);class b extends(I(_)){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLGeometryType.LABEL,e.setVV(t.vvFlags,t),e.mapAligned=(0,_mesh_templates_meshUtils_js__WEBPACK_IMPORTED_MODULE_2__.isMapAligned)(t.placement),e.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}b.shared=new b(0);


/***/ }),

/***/ 44915:
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/meshUtils.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMapAligned": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}


/***/ })

}]);
//# sourceMappingURL=3109.a6644f8c700450ea9aa3.js.map