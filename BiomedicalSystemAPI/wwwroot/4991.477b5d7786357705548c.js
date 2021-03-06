"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[4991],{

/***/ 44991:
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BufferObject": () => (/* reexport safe */ _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "FramebufferObject": () => (/* reexport safe */ _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Program": () => (/* reexport safe */ _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__.Program),
/* harmony export */   "ProgramCache": () => (/* reexport safe */ _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Renderbuffer": () => (/* reexport safe */ _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "ShaderCompiler": () => (/* reexport safe */ _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "Texture": () => (/* reexport safe */ _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "VertexArrayObject": () => (/* reexport safe */ _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "createProgram": () => (/* reexport safe */ _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_8__.createProgram),
/* harmony export */   "glslifyDefineMap": () => (/* reexport safe */ _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_8__.glslifyDefineMap),
/* harmony export */   "createContextOrErrorHTML": () => (/* reexport safe */ _webgl_context_util_js__WEBPACK_IMPORTED_MODULE_9__.createContextOrErrorHTML)
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl/BufferObject.js */ 20316);
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl/FramebufferObject.js */ 1907);
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/Program.js */ 9713);
/* harmony import */ var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl/ProgramCache.js */ 61791);
/* harmony import */ var _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webgl/Renderbuffer.js */ 73886);
/* harmony import */ var _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webgl/ShaderCompiler.js */ 9927);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webgl/Texture.js */ 36079);
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webgl/VertexArrayObject.js */ 86550);
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./webgl/programUtils.js */ 80541);
/* harmony import */ var _webgl_context_util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./webgl/context-util.js */ 3920);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/



/***/ }),

/***/ 9927:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ShaderCompiler.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class e{constructor(e){this.readFile=e}resolveIncludes(e){return this.resolve(e)}resolve(e,t=new Map){if(t.has(e))return t.get(e);const r=this.read(e);if(!r)throw new Error(`cannot find shader file ${e}`);const s=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=s.exec(r);const l=[];for(;null!=n;)l.push({path:n[1],start:n.index,length:n[0].length}),n=s.exec(r);let a=0,h="";return l.forEach((e=>{h+=r.slice(a,e.start),h+=t.has(e.path)?"":this.resolve(e.path,t),a=e.start+e.length})),h+=r.slice(a),t.set(e,h),h}read(e){return this.readFile(e)}}


/***/ }),

/***/ 36079:
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/Texture.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ 88415);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ 18502);
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkWebGLError.js */ 59450);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums.js */ 42909);
/* harmony import */ var _capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capabilities/isWebGL2Context.js */ 31555);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=4;class o{constructor(t,e,i=null){this._context=t,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_3__.ResourceType.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...e},34067===this._descriptor.target?this.setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_3__.ResourceType.Texture,this))}release(){this.dispose()}resize(t,e){const i=this._descriptor;i.width===t&&i.height===e||(i.width=t,i.height=e,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(t=null){for(let e=34069;e<=34074;e++)this.setData(t,e)}setData(t,a=3553){if(!this._context||!this._context.gl)return;const r=this._context.gl;this._glName||(this._glName=r.createTexture()),void 0===t&&(t=null),null===t&&(this._descriptor.width=this._descriptor.width||s,this._descriptor.height=this._descriptor.height||s);const p=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES),h=this._descriptor;o._validateTexture(this._context,h),r.pixelStorei(r.UNPACK_ALIGNMENT,h.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,h.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.preMultiplyAlpha?1:0);const l=h.pixelFormat;let d=h.internalFormat?h.internalFormat:this._deriveInternalFormat(l,h.dataType);if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement){let e=t.width,s=t.height;t instanceof HTMLVideoElement&&(e=t.videoWidth,s=t.videoHeight),h.width&&h.height,r.texImage2D(a,0,d,l,h.dataType,t),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__.checkWebGLError)(r),h.hasMipmap&&this.generateMipmap(),void 0===h.width&&(h.width=e),void 0===h.height&&(h.height=s)}else{null!=h.width&&null!=h.height||console.error("Width and height must be specified!"),r.DEPTH24_STENCIL8&&d===r.DEPTH_STENCIL&&(d=r.DEPTH24_STENCIL8);let s=h.width,o=h.height;if(n(t)){const e=Math.round(Math.log(Math.max(s,o))/Math.LN2)+1;h.hasMipmap=h.hasMipmap&&e===t.levels.length;for(let i=0;;++i){const e=t.levels[Math.min(i,t.levels.length-1)];if(r.compressedTexImage2D(a,i,d,s,o,0,e),1===s&&1===o||!h.hasMipmap)break;s=Math.max(1,s>>1),o=Math.max(1,o>>1)}}else if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(t))r.texImage2D(a,0,d,s,o,0,l,h.dataType,t),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__.checkWebGLError)(r),h.hasMipmap&&this.generateMipmap();else for(let t=0;r.texImage2D(a,t,d,s,o,0,l,h.dataType,null),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__.checkWebGLError)(r),(1!==s||1!==o)&&h.hasMipmap;++t)s=Math.max(1,s>>1),o=Math.max(1,o>>1)}o._applySamplingMode(r,this._descriptor),o._applyWrapMode(r,this._descriptor),o._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__.checkWebGLError)(r),this._context.bindTexture(p,o.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,e,i,a,r,s,n=3553){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const p=this._context.gl,h=this._descriptor,l=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES);(e<0||i<0||a>h.width||r>h.height||e+a>h.width||i+r>h.height)&&console.error("An attempt to update out of bounds of the texture!"),p.pixelStorei(p.UNPACK_ALIGNMENT,h.unpackAlignment),p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,h.flipped?1:0),p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.preMultiplyAlpha?1:0),s instanceof ImageData||s instanceof HTMLImageElement||s instanceof HTMLCanvasElement||s instanceof HTMLVideoElement?p.texSubImage2D(n,t,e,i,h.pixelFormat,h.dataType,s):p.texSubImage2D(n,t,e,i,a,r,h.pixelFormat,h.dataType,s),this._context.bindTexture(l,o.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,o._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);const e=this._context.bindTexture(this,o.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(t.target),this._context.bindTexture(e,o.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,o._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(o._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(o._applyWrapMode(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(t,e){if("webgl"===this._context.webglVersion)return t;if(5126===e)switch(t){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return t}static _validateTexture(e,i){(i.width<0||i.height<0)&&console.error("Negative dimension parameters are not allowed!");const a=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.isPowerOfTwo)(i.width)&&(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.isPowerOfTwo)(i.height);(0,_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_4__.default)(e.gl)||a||("number"==typeof i.wrapMode?33071!==i.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===i.wrapMode.s&&33071===i.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),i.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(t,e){let i=e.samplingMode,a=e.samplingMode;9985===i||9987===i?(i=9729,e.hasMipmap||(a=9729)):9984!==i&&9986!==i||(i=9728,e.hasMipmap||(a=9728)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,a)}static _applyWrapMode(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}static _applyAnisotropicFilteringParameters(t,e){var i;const a=t.capabilities.textureFilterAnisotropic;if(!a)return;t.gl.texParameterf(e.target,a.TEXTURE_MAX_ANISOTROPY,null!=(i=e.maxAnisotropy)?i:1)}}function n(t){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.isSome)(t)&&"type"in t&&"compressed"===t.type}o.TEXTURE_UNIT_FOR_UPDATES=0;


/***/ }),

/***/ 31555:
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities/isWebGL2Context.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return window.WebGL2RenderingContext&&n instanceof window.WebGL2RenderingContext}


/***/ }),

/***/ 59450:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/checkWebGLError.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkWebGLError": () => (/* binding */ s),
/* harmony export */   "hasFeatureFlagWebGLDebug": () => (/* binding */ a),
/* harmony export */   "webglDebugEnabled": () => (/* binding */ u),
/* harmony export */   "webglValidateShadersEnabled": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ 61414);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ 30627);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ 22345);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__.default.getLogger("esri/views/webgl");function o(e,r){switch(r){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const a=!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__.default)("enable-feature:webgl-debug");function u(){return a}function c(){return a}function s(r){if(u()){const t=r.getError();if(t){const a=o(r,t),u=(new Error).stack;n.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.default("webgl-error","WebGL error occured",{message:a,stack:u}))}}}


/***/ }),

/***/ 42909:
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/enums.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_TEXTURE_UNIT": () => (/* binding */ e),
/* harmony export */   "DepthStencilAttachment": () => (/* binding */ f),
/* harmony export */   "ResourceType": () => (/* binding */ r)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=33984;var r;!function(e){e[e.Texture=0]="Texture",e[e.Buffer=1]="Buffer",e[e.VAO=2]="VAO",e[e.VertexShader=3]="VertexShader",e[e.FragmentShader=4]="FragmentShader",e[e.Program=5]="Program",e[e.Framebuffer=6]="Framebuffer",e[e.Renderbuffer=7]="Renderbuffer",e[e.COUNT=8]="COUNT"}(r||(r={}));const f=33306;


/***/ }),

/***/ 80541:
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/programUtils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProgram": () => (/* binding */ t),
/* harmony export */   "glslifyDefineMap": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Program.js */ 9713);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(e){let n="";for(const t in e){const o=e[t];if("boolean"==typeof o)o&&(n+=`#define ${t}\n`);else if("number"==typeof o)n+=`#define ${t} ${o.toFixed()}\n`;else if("object"==typeof o){const e=o.options;let r=0;for(const t in e)n+=`#define ${e[t]} ${(r++).toFixed()}\n`;n+=`#define ${t} ${e[o.value]}\n`}}return n}function t(n,t,o,r){o=o||{},r=r||"";const f="function"==typeof t.shaders?t.shaders(o):t.shaders;return new _Program_js__WEBPACK_IMPORTED_MODULE_0__.Program(n,r+f.vertexShader,r+f.fragmentShader,t.attributes)}


/***/ })

}]);
//# sourceMappingURL=4991.477b5d7786357705548c.js.map