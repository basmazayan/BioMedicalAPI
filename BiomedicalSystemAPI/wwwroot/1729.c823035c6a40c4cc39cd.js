"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[1729],{

/***/ 44946:
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Bitmap.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bitmap": () => (/* binding */ g),
/* harmony export */   "isImageSource": () => (/* binding */ c),
/* harmony export */   "rasterize": () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat3.js */ 72425);
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ 87266);
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/vec2f32.js */ 74181);
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayObject.js */ 17821);
/* harmony import */ var _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageryBitmapSource.js */ 89001);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webgl/Texture.js */ 36079);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(t){return t&&"render"in t}function l(t){return t&&!("render"in t)}function x(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function _(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__.default(t,s)}class g extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__.DisplayObject{constructor(t=null,e,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__.c)()}}setTransform(t){const n=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.transforms.dvs),[o,a]=t.toScreenNoRotation([0,0],[this.x,this.y]),d=this.resolution/this.pixelRatio/t.resolution,c=d*this.width,l=d*this.height,x=Math.PI*this.rotation/180;(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.c)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__.f)(o,a)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.c)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__.f)(c/2,l/2)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.r)(n,n,-x),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.c)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__.f)(-c/2,-l/2)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.j)(n,n,(0,_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__.f)(c,l)),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.m)(this.transforms.dvs,t.displayViewMat3,n)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}updateTexture(e){var i;if(!this.stage)return null==(i=this._texture)||i.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=_(e,this.sourceWidth,this.sourceHeight):this._texture=_(e));const s=this.source;if(s){if(this._texture.resize(this.sourceWidth,this.sourceHeight),c(s))if(s instanceof _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_5__.default){const e=s.getRenderedRasterPixels();this._texture.setData((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(e)?e.renderedRasterPixels:null)}else this._texture.setData(x(s));else l(s)&&this._texture.setData(s);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}


/***/ }),

/***/ 78059:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapTile.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BitmapTile": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ 87266);
/* harmony import */ var _Bitmap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bitmap.js */ 44946);
/* harmony import */ var _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/TiledDisplayObject.js */ 62561);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__.TiledDisplayObject{constructor(t,s,r,i,a,n=null){super(t,s,r,i,a),this.bitmap=new _Bitmap_js__WEBPACK_IMPORTED_MODULE_1__.Bitmap(n,"standard",!1),this.bitmap.coordScale=[i,a],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(t){super.beforeRender(t),this.bitmap.beforeRender(t)}afterRender(t){super.afterRender(t),this.bitmap.afterRender(t)}set stencilRef(t){this.bitmap.stencilRef=t}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)(),tileMat3:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)()}}setTransform(t,e){super.setTransform(t,e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}


/***/ }),

/***/ 30233:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapTileContainer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BitmapTileContainer": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ 7401);
/* harmony import */ var _BitmapTile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BitmapTile.js */ 78059);
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brushes.js */ 27274);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl/enums.js */ 31620);
/* harmony import */ var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webgl/TileContainer.js */ 62642);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n extends _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_4__.default{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(s){const t=this._tileInfoView.getTileBounds((0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__.create)(),s),[i,n]=this._tileInfoView.tileInfo.size;return new _BitmapTile_js__WEBPACK_IMPORTED_MODULE_1__.BitmapTile(s,t[0],t[3],i,n)}destroyTile(){}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap (tile)",brushes:[_brushes_js__WEBPACK_IMPORTED_MODULE_2__.brushes.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__.WGLDrawPhase.MAP});return[...super.prepareRenderPasses(e),r]}doRender(e){this.visible&&e.drawPhase===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__.WGLDrawPhase.MAP&&super.doRender(e)}}


/***/ }),

/***/ 89001:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ 18502);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isSome)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const i=this.pixelBlock;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(i))return;const l=this.filter({pixelBlock:i});if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(l.pixelBlock))return;const r=l.pixelBlock.getAsRGBA(),o=e.createImageData(l.pixelBlock.width,l.pixelBlock.height);o.data.set(r),e.putImageData(o,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.isNone)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}


/***/ }),

/***/ 62642:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ o),
/* harmony export */   "sortByLevel": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ 30627);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ 31620);
/* harmony import */ var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WGLContainer.js */ 17702);
/* harmony import */ var _brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brushes/WGLBrushInfo.js */ 2058);
/* harmony import */ var _brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brushes/WGLBrushStencil.js */ 50257);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class o extends _WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__.default{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(i),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:r}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),s}prepareRenderPasses(s){const i=super.prepareRenderPasses(s);return i.push(s.registerRenderPass({name:"stencil",brushes:[_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_4__.default],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLDrawPhase.DEBUG|_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLDrawPhase.MAP|_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLDrawPhase.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__.default)("esri-tiles-debug")&&i.push(s.registerRenderPass({name:"tileInfo",brushes:[_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_3__.default],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_1__.WGLDrawPhase.DEBUG,target:()=>this.children})),i}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s)}}setStencilReference(){let e=1;for(const r of this.children)r.stencilRef=e++}}


/***/ }),

/***/ 62561:
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiledDisplayObject": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ 72425);
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DisplayObject.js */ 17821);
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/TileKey.js */ 5507);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_1__.DisplayObject{constructor(t,s,i,r,h,o=r,n=h){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__.default(t),this.x=s,this.y=i,this.width=r,this.height=h,this.rangeX=o,this.rangeY=n}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(i,e){const r=e/(i.resolution*i.pixelRatio),h=this.transforms.tileMat3,[o,n]=i.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*r,l=this.height/this.rangeY*r;(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.s)(h,a,0,0,0,l,0,o,n,1),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.m)(this.transforms.dvs,i.displayViewMat3,h)}}


/***/ }),

/***/ 31729:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/HeatmapTileRenderer.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ 79076);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Logger.js */ 22345);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ 55865);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ 45072);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/has.js */ 30627);
/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/set.js */ 72062);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ 96410);
/* harmony import */ var _renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../renderers/support/heatmapUtils.js */ 39115);
/* harmony import */ var _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../engine/BitmapTileContainer.js */ 30233);
/* harmony import */ var _BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BaseTileRenderer.js */ 86923);
/* harmony import */ var _support_HeatmapSource_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support/HeatmapSource.js */ 38666);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends _BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_9__.default{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_8__.BitmapTileContainer(e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:r}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=r,this._gradient=(0,_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_7__.generateGradient)(e.toJSON()),this.tiles.forEach((e=>{const i=e.bitmap.source;i&&(i.minPixelIntensity=t,i.maxPixelIntensity=r,i.gradient=this._gradient,e.bitmap.invalidateTexture())}))}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minPixelIntensity:r,maxPixelIntensity:s}=this._intensityInfo,o=t.bitmap.source||new _support_HeatmapSource_js__WEBPACK_IMPORTED_MODULE_10__.HeatmapSource;o.intensities=i&&i.matrix||null,o.minPixelIntensity=r,o.maxPixelIntensity=s,o.gradient=this._gradient,t.bitmap.source=o,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const a=o;


/***/ }),

/***/ 38666:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/HeatmapSource.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeatmapSource": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../renderers/support/heatmapUtils.js */ 39115);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(){this.gradient=null,this.height=512,this.width=512}render(i){(0,_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_0__.drawHeatmap)(i,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}


/***/ })

}]);
//# sourceMappingURL=1729.c823035c6a40c4cc39cd.js.map