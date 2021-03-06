"use strict";
(self["webpackChunkbio_medical"] = self["webpackChunkbio_medical"] || []).push([[2394],{

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


/***/ }),

/***/ 92394:
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/statistics/utils.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateClassBreaks": () => (/* binding */ y),
/* harmony export */   "calculateHistogram": () => (/* binding */ z),
/* harmony export */   "calculatePercentile": () => (/* binding */ d),
/* harmony export */   "calculateStatistics": () => (/* binding */ c),
/* harmony export */   "calculateStringStatistics": () => (/* binding */ m),
/* harmony export */   "calculateUniqueValuesCount": () => (/* binding */ g),
/* harmony export */   "createClassBreaksDefinition": () => (/* binding */ F),
/* harmony export */   "createUVResult": () => (/* binding */ h),
/* harmony export */   "getAttributeComparator": () => (/* binding */ f),
/* harmony export */   "getEqualIntervalBins": () => (/* binding */ S),
/* harmony export */   "getNormalizedValue": () => (/* binding */ T),
/* harmony export */   "isNullCountSupported": () => (/* binding */ s),
/* harmony export */   "processSummaryStatisticsResult": () => (/* binding */ V),
/* harmony export */   "resolveCBResult": () => (/* binding */ D),
/* harmony export */   "statisticTypes": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _rest_support_ClassBreaksDefinition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rest/support/ClassBreaksDefinition.js */ 94857);
/* harmony import */ var _rest_support_generateRendererUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest/support/generateRendererUtils.js */ 54818);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t="equal-interval",l=1,i=5,a=10,r=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,o=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),u=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function s(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!l}function m(e){const n=e.returnDistinct?[...new Set(e.values)]:e.values,t=n.filter((e=>null!=e)).length,l={count:t};return e.supportsNullCount&&(l.nullcount=n.length-t),e.percentileParams&&(l.median=d(n,e.percentileParams)),l}function c(e){const{values:n,useSampleStdDev:t,supportsNullCount:l}=e;let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,r=null,o=null,u=null,s=null,m=0;const c=null==e.minValue?-1/0:e.minValue,f=null==e.maxValue?1/0:e.maxValue;for(const d of n)Number.isFinite(d)?d>=c&&d<=f&&(r+=d,i=Math.min(i,d),a=Math.max(a,d),m++):"string"==typeof d&&m++;if(m&&null!=r){o=r/m;let e=0;for(const t of n)Number.isFinite(t)&&t>=c&&t<=f&&(e+=(t-o)**2);s=t?m>1?e/(m-1):0:m>0?e/m:0,u=Math.sqrt(s)}else i=null,a=null;const p={avg:o,count:m,max:a,min:i,stddev:u,sum:r,variance:s};return l&&(p.nullcount=n.length-m),e.percentileParams&&(p.median=d(n,e.percentileParams)),p}function d(e,n){const{fieldType:t,value:l,orderBy:i,isDiscrete:a}=n,r=f(t,"desc"===i);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,n)=>r(e,n)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const o=(e.length-1)*l,u=Math.floor(o),s=u+1,m=o%1,c=e[u],d=e[s];return s>=e.length||a||"string"==typeof c||"string"==typeof d?c:c*(1-m)+d*m}function f(e,n){const t=n?1:-1,l=v(n),i=p(n);if(!(!!e&&["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...o].includes(e)))return(e,n)=>"number"==typeof e&&"number"==typeof n?l(e,n):"string"==typeof e&&"string"==typeof n?i(e,n):t;if("esriFieldTypeDate"===e)return(e,n)=>{const i=new Date(e).getTime(),a=new Date(n).getTime();return isNaN(i)||isNaN(a)?t:l(i,a)};if(o.has(e))return(e,n)=>l(e,n);if("esriFieldTypeString"===e)return(e,n)=>i(e,n);if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){const e=p(n);return(n,t)=>e(b(n),b(t))}return n?(e,n)=>1:(e,n)=>-1}function p(e){return e?(e,n)=>(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0:(e,n)=>(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}function v(e){return e?(e,n)=>n-e:(e,n)=>e-n}function b(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function V(e,n){let t;for(t in e)u.indexOf(t)>-1&&(Number.isFinite(e[t])||(e[t]=null));return n?(["avg","stddev","variance"].forEach((n=>{null!=e[n]&&(e[n]=Math.ceil(e[n]))})),e):e}function g(e){const n={};for(let t of e)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==n[t]?n[t]={count:1,data:t}:n[t].count++;return{count:n}}function h(e,n,t){const l=e.count,i=[];if(t&&n&&"coded-value"===n.type){n.codedValues.forEach((e=>{const n=e.code;l.hasOwnProperty(n)||(l[n]={data:n,count:0})}))}for(const a in l){const e=l[a];i.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:i}}function T(e,n,t,l){let i=null;switch(n){case"log":0!==e&&(i=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(i=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(i=e/t);break;case"natural-log":e>0&&(i=Math.log(e));break;case"square-root":e>0&&(i=e**.5)}return i}function y(e,t){const l=F({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,breakCount:t.numClasses||i});return e=x(e,t.minValue,t.maxValue),(0,_rest_support_generateRendererUtils_js__WEBPACK_IMPORTED_MODULE_1__.createGenerateRendererClassBreaks)({definition:l,values:e,normalizationTotal:t.normalizationTotal})}function x(e,n,t){return n=null==n?-1/0:n,t=null==t?1/0:t,e.filter((e=>Number.isFinite(e)&&e>=n&&e<=t))}function F(n){const i=n.field,a=n.classificationMethod||t,r=n.normalizationType,o=n.normalizationField,u=new _rest_support_ClassBreaksDefinition_js__WEBPACK_IMPORTED_MODULE_0__.default;return u.classificationField=i,u.breakCount=n.breakCount,u.classificationMethod=a,u.standardDeviationInterval="standard-deviation"===a?n.standardDeviationInterval||l:void 0,u.normalizationType=r,u.normalizationField="field"===r?o:void 0,u}function D(e,n){let t=e.classBreaks;const l=t.length,i=t[0].minValue,a=t[l-1].maxValue,o="standard-deviation"===n,u=r;return t=t.map((e=>{const n=e.label,t={minValue:e.minValue,maxValue:e.maxValue,label:n};if(o&&n){const e=n.match(u).map((e=>+e.trim()));2===e.length?(t.minStdDev=e[0],t.maxStdDev=e[1],e[0]<0&&e[1]>0&&(t.hasAvg=!0)):1===e.length&&(n.includes("<")?(t.minStdDev=null,t.maxStdDev=e[0]):n.includes(">")&&(t.minStdDev=e[0],t.maxStdDev=null))}return t})),{minValue:i,maxValue:a,classBreakInfos:t,normalizationTotal:e.normalizationTotal}}function z(e,n){const{min:t,max:l,intervals:i}=I(e,n),a=i.map(((e,n)=>({minValue:i[n][0],maxValue:i[n][1],count:0})));for(const r of e)if(null!=r&&r>=t&&r<=l){const e=N(i,r);e>-1&&a[e].count++}return{bins:a,minValue:t,maxValue:l,normalizationTotal:n.normalizationTotal}}function I(e,n){const{field:t,classificationMethod:l,standardDeviationInterval:i,normalizationType:r,normalizationField:o,normalizationTotal:u,minValue:m,maxValue:d}=n,f=n.numBins||a;let p=null,v=null,b=null;if((!l||"equal-interval"===l)&&!r){if(null!=m&&null!=d)p=m,v=d;else{const n=c({values:e,minValue:m,maxValue:d,useSampleStdDev:!r,supportsNullCount:s({normalizationType:r,normalizationField:o,minValue:m,maxValue:d})});p=n.min,v=n.max}b=S(p,v,f)}else{const{classBreaks:n}=y(e,{field:t,normalizationType:r,normalizationField:o,normalizationTotal:u,classificationMethod:l,standardDeviationInterval:i,minValue:m,maxValue:d,numClasses:f});p=n[0].minValue,v=n[n.length-1].maxValue,b=n.map((e=>[e.minValue,e.maxValue]))}return{min:p,max:v,intervals:b}}function N(e,n){let t=-1;for(let l=e.length-1;l>=0;l--){if(n>=e[l][0]){t=l;break}}return t}function S(e,n,t){const l=(n-e)/t,i=[];let a,r=e;for(let o=1;o<=t;o++)a=r+l,a=Number(a.toFixed(16)),i.push([r,o===t?n:a]),r=a;return i}


/***/ })

}]);
//# sourceMappingURL=2394.b416b4ee98a57ca7b817.js.map