"use strict";var mt=Object.defineProperty,yt=Object.defineProperties,ct=Object.getOwnPropertyDescriptors,Ce=Object.getOwnPropertySymbols,ft=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable,Ie=(C,E,l)=>E in C?mt(C,E,{enumerable:!0,configurable:!0,writable:!0,value:l}):C[E]=l,N=(C,E)=>{for(var l in E||(E={}))ft.call(E,l)&&Ie(C,l,E[l]);if(Ce)for(var l of Ce(E))ht.call(E,l)&&Ie(C,l,E[l]);return C},Oe=(C,E)=>yt(C,ct(E));(self.webpackChunkbio_medical=self.webpackChunkbio_medical||[]).push([[9244],{39244:(C,E,l)=>{l.r(E),l.d(E,{default:()=>at});var W,ee=l(49996),a=l(79076),te=l(76925),Ue=l(99326),Re=l(24093),re=l(30351),X=l(97750),Le=l(39876),Fe=l(62091),Ae=l(74856),Pe=l(60161),V=l(18502),ne=l(32810),Me=l(7808),J=l(30164),u=l(94911),se=l(55865),U=l(38650),ie=l(96410),Q=l(88445),Te=l(93330),F=l(70157),R=l(96583),ae=l(13848),je=l(35169),Ze=l(2045),Ve=l(88945),We=l(46839),Be=l(32617),De=l(77883),Ge=l(41099),He=l(77932),$e=l(46996),le=l(46613),oe=l(28763),Xe=l(65333),Je=(l(45072),l(30627),l(43465));let Qe=0,f=W=class extends ne.w{constructor(e){super(e),this._sublayersHandles=new Xe.Z,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?F.Z.fromJSON(e):null}get id(){const e=this._get("id");return null==e?Qe++:e}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach(r=>{r.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach(r=>{r.parent=this,r.layer=this.layer}),this._sublayersHandles.add([e.on("after-add",({item:r})=>{r.parent=this,r.layer=this.layer}),e.on("after-remove",({item:r})=>{r.parent=null,r.layer=null})])),this._set("sublayers",e)}castSublayers(e){return(0,se.se)(X.Z.ofType(W),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new W;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map(t=>t.clone())),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(t=>t.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map(t=>t)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};(0,a._)([(0,u.Cb)()],f.prototype,"description",null),(0,a._)([(0,u.Cb)({readOnly:!0})],f.prototype,"dimensions",void 0),(0,a._)([(0,u.Cb)({value:null})],f.prototype,"fullExtent",null),(0,a._)([(0,U.r)("fullExtent",["extent"])],f.prototype,"readExtent",null),(0,a._)([(0,u.Cb)()],f.prototype,"fullExtents",void 0),(0,a._)([(0,u.Cb)()],f.prototype,"featureInfoFormat",void 0),(0,a._)([(0,u.Cb)()],f.prototype,"featureInfoUrl",void 0),(0,a._)([(0,u.Cb)({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],f.prototype,"id",null),(0,a._)([(0,u.Cb)({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],f.prototype,"legendUrl",void 0),(0,a._)([(0,U.r)(["web-document"],"legendUrl")],f.prototype,"readLegendUrl",null),(0,a._)([(0,u.Cb)({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],f.prototype,"legendEnabled",void 0),(0,a._)([(0,u.Cb)({value:null})],f.prototype,"layer",null),(0,a._)([(0,u.Cb)()],f.prototype,"maxScale",void 0),(0,a._)([(0,u.Cb)()],f.prototype,"minScale",void 0),(0,a._)([(0,u.Cb)({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],f.prototype,"name",null),(0,a._)([(0,u.Cb)()],f.prototype,"parent",void 0),(0,a._)([(0,u.Cb)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],f.prototype,"popupEnabled",void 0),(0,a._)([(0,u.Cb)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],f.prototype,"queryable",void 0),(0,a._)([(0,u.Cb)()],f.prototype,"sublayers",null),(0,a._)([(0,Je.p)("sublayers")],f.prototype,"castSublayers",null),(0,a._)([(0,u.Cb)({type:[Number],json:{read:{source:"spatialReferences"}}})],f.prototype,"spatialReferences",void 0),(0,a._)([(0,u.Cb)({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],f.prototype,"title",null),(0,a._)([(0,u.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],f.prototype,"visible",null),f=W=(0,a._)([(0,ie.j)("esri.layers.support.WMSSublayer")],f);const z=f;var ze=l(61414);const Ye=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],B={84:4326,83:4269,27:4267};function Ke(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const b=Array.prototype.slice.call(r.childNodes).map(S=>S.textContent).join("\r\n");throw new ze.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",b)}const n=w("Capability",r),s=w("Service",r),p=w("Request",n);if(!n||!s||!p)return null;const i=w("Layer",n);if(!i)return null;const y="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",x=I("Title",s,"")||I("Name",s,""),o=I("AccessConstraints",s,""),d=I("Abstract",s,""),h=parseInt(I("MaxWidth",s,"5000"),10),c=parseInt(I("MaxHeight",s,"5000"),10),v=me(p,"GetMap"),O=de(p,"GetMap"),g=T(i,y,t);let P,L,H,j=0;if(Array.prototype.slice.call(n.childNodes).forEach(b=>{"Layer"===b.nodeName&&(0===j?P=b:(1===j&&g.name&&(g.name="",g.sublayers.push(T(P,y,t))),g.sublayers.push(T(b,y,t))),j++)}),!g)return null;const lt=g.fullExtents;if(L=g.sublayers,L||(L=[]),0===L.length&&L.push(g),H=g.extent,!H){const b=new F.Z(L[0].extent);g.extent=b.toJSON(),H=g.extent}const ot=g.spatialReferences.length>0?g.spatialReferences:ue(g),xe=de(p,"GetFeatureInfo");let $;if(xe){const b=me(p,"GetFeatureInfo");b.indexOf("text/html")>-1?$="text/html":b.indexOf("text/plain")>-1&&($="text/plain")}if(!$){const b=function(S){S&&(S.queryable=!1,S.sublayers&&S.sublayers.forEach(k=>{b(k)}))};b(g)}const we=pe(L),ut=g.minScale||0,pt=g.maxScale||0,Ee=g.dimensions,dt=we.reduce((b,S)=>b.concat(S.dimensions),[]),Se=Ee.concat(dt).filter(et);let Ne=null;if(Se.length>0){let b=Number.POSITIVE_INFINITY,S=Number.NEGATIVE_INFINITY;Se.forEach(k=>{const{extent:_}=k;!function(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(_)?_.forEach(Z=>{b=Math.min(b,Z.min.getTime()),S=Math.max(S,Z.max.getTime())}):_.forEach(Z=>{b=Math.min(b,Z.getTime()),S=Math.max(S,Z.getTime())})}),Ne={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[b,S]}}return{copyright:o,description:d,dimensions:Ee,extent:H,fullExtents:lt,featureInfoFormat:$,featureInfoUrl:xe,mapUrl:O,maxWidth:h,maxHeight:c,maxScale:pt,minScale:ut,layers:we,spatialReferences:ot,supportedImageFormatTypes:v,timeInfo:Ne,title:x,version:y}}function Y(e){return Ye.some(([t,r])=>e>=t&&e<=r)}function ue(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=ue(t);if(r.length>0)return r}return[]}function pe(e){let t=[];return e.forEach(r=>{t.push(r),r.sublayers&&r.sublayers.length&&(t=t.concat(pe(r.sublayers)),delete r.sublayers)}),t}function D(e,t,r){var n;return null!=(n=t.getAttribute(e))?n:r}function w(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(ce(n)&&n.nodeName===e)return n}return null}function G(e,t){const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];ce(s)&&s.nodeName===e&&r.push(s)}return r}function I(e,t,r){const n=w(e,t);return n?n.textContent:r}function M(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),p=parseFloat(e.getAttribute("maxx")),i=parseFloat(e.getAttribute("maxy"));let y,x,o,d;r?(y=isNaN(s)?-Number.MAX_VALUE:s,x=isNaN(n)?-Number.MAX_VALUE:n,o=isNaN(i)?Number.MAX_VALUE:i,d=isNaN(p)?Number.MAX_VALUE:p):(y=isNaN(n)?-Number.MAX_VALUE:n,x=isNaN(s)?-Number.MAX_VALUE:s,o=isNaN(p)?Number.MAX_VALUE:p,d=isNaN(i)?Number.MAX_VALUE:i);const h=new R.Z({wkid:t});return new F.Z({xmin:y,ymin:x,xmax:o,ymax:d,spatialReference:h})}function de(e,t){const r=w(t,e);if(r){const n=w("DCPType",r);if(n){const s=w("HTTP",n);if(s){const p=w("Get",s);if(p){let i=function(e,t,r,n){const s=w(e,r);return s?D(t,s,n):n}("OnlineResource","xlink:href",p,null);if(i)return i.indexOf("&")===i.length-1&&(i=i.substring(0,i.length-1)),function(e,t){const r=[],n=(0,J.mN)(e);for(const s in n.query)n.query.hasOwnProperty(s)&&-1===t.indexOf(s.toLowerCase())&&r.push(s+"="+n.query[s]);return n.path+(r.length?"?"+r.join("&"):"")}(i,["service","request"])}}}}return null}function me(e,t){const r=G("Operation",e);if(0===r.length)return G("Format",w(t,e)).map(s=>s.textContent);const n=[];return r.forEach(s=>{s.getAttribute("name")===t&&G("Format",s).forEach(p=>{n.push(p.textContent)})}),n}function ye(e,t,r){const n=w(t,e);if(!n)return r;const{textContent:s}=n;if(null==s||""===s)return r;const p=Number(s);return isNaN(p)?r:p}function T(e,t,r){var n;if(!e)return null;const s={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},p=w("LatLonBoundingBox",e),i=w("EX_GeographicBoundingBox",e);let y=null;p&&(y=M(p,4326)),i&&(y=new F.Z(0,0,0,0,new R.Z({wkid:4326})),y.xmin=parseFloat(I("westBoundLongitude",i,"0")),y.ymin=parseFloat(I("southBoundLatitude",i,"0")),y.xmax=parseFloat(I("eastBoundLongitude",i,"0")),y.ymax=parseFloat(I("northBoundLatitude",i,"0"))),p||i||(y=new F.Z(-180,-90,180,90,new R.Z({wkid:4326}))),s.minScale=ye(e,"MaxScaleDenominator",0),s.maxScale=ye(e,"MinScaleDenominator",0);const x=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(o=>{if("Name"===o.nodeName)s.name=o.textContent||"";else if("Title"===o.nodeName)s.title=o.textContent||"";else if("Abstract"===o.nodeName)s.description=o.textContent||"";else if("BoundingBox"===o.nodeName){const d=o.getAttribute(x);if(d&&0===d.indexOf("EPSG:")){const c=parseInt(d.substring(5),10);0===c||isNaN(c)||y||(y="1.3.0"===t?M(o,c,Y(c)):M(o,c))}const h=d&&d.indexOf(":");if(h&&h>-1){let c=parseInt(d.substring(h+1,d.length),10);0===c||isNaN(c)||(c=B[c]?B[c]:c);const v="1.3.0"===t?M(o,c,Y(c)):M(o,c);s.fullExtents.push(v)}}else if(o.nodeName===x)o.textContent.split(" ").forEach(d=>{const h=d.includes(":")?parseInt(d.split(":")[1],10):parseInt(d,10);if(0!==h&&!isNaN(h)){const c=B[h]?B[h]:h;s.spatialReferences.includes(c)||s.spatialReferences.push(c)}});else if("Style"!==o.nodeName||s.legendURL){if("Layer"===o.nodeName){const d=T(o,t,r);d&&(d.parentLayerId=s.id,s.sublayers||(s.sublayers=[]),s.sublayers.push(d))}}else{const d=w("LegendURL",o);if(d){const h=w("OnlineResource",d);h&&(s.legendURL=h.getAttribute("xlink:href"))}}}),s.extent=null==(n=y)?void 0:n.toJSON(),s.dimensions=G("Dimension",e).filter(o=>o.getAttribute("name")&&o.getAttribute("units")&&o.textContent).map(o=>{const d=o.getAttribute("name"),h=o.getAttribute("units"),c=o.textContent,v=o.getAttribute("unitSymbol"),O=o.getAttribute("default"),g="0"!==D("default",o,"0"),P="0"!==D("nearestValue",o,"0"),j="0"!==D("current",o,"0");return/^time$/i.test(d)&&/^ISO8601$/i.test(h)?{name:"time",units:"ISO8601",extent:ge(c),default:ge(O),multipleValues:g,nearestValue:P,current:j}:/^elevation$/i.test(d)?{name:"elevation",units:h,extent:fe(c),unitSymbol:v,default:fe(O),multipleValues:g,nearestValue:P}:{name:d,units:h,extent:he(c),unitSymbol:v,default:he(O),multipleValues:g,nearestValue:P}}),s}function ce(e){return e.nodeType===Node.ELEMENT_NODE}function et(e){return"time"===e.name}function fe(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:parseFloat(s[0]),max:parseFloat(s[1]),resolution:s.length>=3&&"0"!==s[2]?parseFloat(s[2]):void 0}}).filter(n=>n):r.map(n=>parseFloat(n))}function he(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:s[0],max:s[1],resolution:s.length>=3&&"0"!==s[2]?s[2]:void 0}}).filter(n=>n):r}function ge(e){if(!e)return null;const t=-1!==e.indexOf("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:new Date(s[0]),max:new Date(s[1]),resolution:s.length>=3&&"0"!==s[2]?rt(s[2]):void 0}}).filter(n=>n):r.map(n=>new Date(n))}function rt(e){const r=e.match(/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i);return r?{years:A(r[1]),months:A(r[2]),days:A(r[3]),hours:A(r[4]),minutes:A(r[5]),seconds:A(r[6])}:null}function A(e){if(!e)return 0;const r=e.match(/(?:\d+(?:.|,)\d+|\d+)/);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function K(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const be=new Set([102100,3857,102113,900913]),nt=new Set([3395,54004]);const q=new Ae.Xn({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let m=class extends((0,Fe.p)((0,Ve.h)((0,He.n)((0,De.Q)((0,Ge.M)((0,We.q)((0,Be.I)((0,ne.R)(Ze.Z))))))))){constructor(...e){super(...e),this.allSublayers=new Le.Z({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.watch("sublayers",(t,r)=>{if(r){for(const n of r)n.layer=null;this.handles.remove("wms-sublayer")}if(t){for(const n of t)n.parent=this,n.layer=this;this.handles.add([t.on("after-add",({item:n})=>{n.parent=this,n.layer=this}),t.on("after-remove",({item:n})=>{n.parent=null,n.layer=null})],"wms-sublayer")}},!0)}normalizeCtorArgs(e,t){return"string"==typeof e?N({url:e},t):e}load(e){const t=(0,V.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Me.r9).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new F.Z({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("image/png")>-1?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new R.Z(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter(n=>n!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return ve(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return ve(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,p=e.flatten(({sublayers:i})=>i&&i.toArray()).toArray();p.forEach(i=>{"number"==typeof i.parent.id&&(s.has(i.parent.id)?s.get(i.parent.id).push(i.id):s.set(i.parent.id,[i.id]))}),p.forEach(i=>{const y=N({sublayer:i},n),x=i.write({parentLayerId:"number"==typeof i.parent.id?i.parent.id:-1},y);if(s.has(i.id)&&(x.sublayerIds=s.get(i.id)),!i.sublayers&&i.name){const o=i.write({},y);delete o.id,t.layers.push(o)}}),t.visibleLayers=p.filter(i=>i.visible&&!i.sublayers).map(i=>i.name)}createExportImageParameters(e,t,r,n){const s=n&&n.pixelRatio||1,p=(0,ae.yZ)({extent:e,width:t})*s,i=new oe.j({layer:this,scale:p}),{xmin:y,ymin:x,xmax:o,ymax:d,spatialReference:h}=e,c=function(e,t){let r=e.wkid;return(0,V.Wi)(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),be.has(r)?t.find(n=>be.has(n))||t.find(n=>nt.has(n))||102100:r)}(h,this.spatialReferences),v="1.3.0"===this.version&&Y(c)?`${x},${y},${d},${o}`:`${y},${x},${o},${d}`,O=i.toJSON();return N({bbox:v,["1.3.0"===this.version?"crs":"srs"]:isNaN(c)?void 0:"EPSG:"+c},O)}fetchImage(e,t,r,n){var s=this;return(0,ee.Z)(function*(){var p,i;const y=s.mapUrl,x=s.createExportImageParameters(e,t,r,n);if(!x.layers){const v=document.createElement("canvas");return v.width=t,v.height=r,v}const o=null==n||null==(p=n.timeExtent)?void 0:p.start,d=null==n||null==(i=n.timeExtent)?void 0:i.end,h=(0,V.pC)(o)&&(0,V.pC)(d)?o.getTime()===d.getTime()?K(o):`${K(o)}/${K(d)}`:void 0,c={responseType:"image",query:s._mixCustomParameters(N(Oe(N({width:t,height:r},x),{time:h}),s.refreshParameters)),signal:null==n?void 0:n.signal};return(0,re.default)(y,c).then(v=>v.data)})()}fetchFeatureInfo(e,t,r,n,s){const p=(0,ae.yZ)({extent:e,width:t}),y=function(e){return e.length?e.filter(t=>t.popupEnabled&&t.name&&t.queryable).map(t=>t.name).join(","):""}(new oe.j({layer:this,scale:p}).visibleSublayers);if(!this.featureInfoUrl||!y)return null;const x="1.3.0"===this.version?{I:n,J:s}:{x:n,y:s},o=N({query_layers:y,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r},x),d=N(N({},this.createExportImageParameters(e,t,r)),o),h=this._mixCustomParameters(d),c=(0,J.fl)(this.featureInfoUrl,h),v=document.createElement("iframe");v.src=c,v.style.border="none",v.style.margin="0",v.style.width="100%",v.setAttribute("sandbox","");const O=new Re.Z({title:this.title,content:v});return new Ue.Z({sourceLayer:this,popupTemplate:O})}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}supportsSpatialReference(e){return(0,$e.G)(this.url)||this.spatialReferences.some(t=>{const r=900913===t?R.Z.WebMercator:new R.Z({wkid:t});return(0,je.fS)(r,e)})}_fetchService(e){var t=this;return(0,ee.Z)(function*(){if(!t.resourceInfo){t.parsedUrl.query&&t.parsedUrl.query.service&&(t.parsedUrl.query.SERVICE=t.parsedUrl.query.service,delete t.parsedUrl.query.service),t.parsedUrl.query&&t.parsedUrl.query.request&&(t.parsedUrl.query.REQUEST=t.parsedUrl.query.request,delete t.parsedUrl.query.request);const r=yield(0,re.default)(t.parsedUrl.path,{query:N(N({SERVICE:"WMS",REQUEST:"GetCapabilities"},t.parsedUrl.query),t.customParameters),responseType:"xml",signal:e});t.resourceInfo=Ke(r.data)}if(t.parsedUrl){const r=new J.R9(t.parsedUrl.path);"https"!==r.scheme||r.port&&"443"!==r.port||-1!==te.Z.request.httpsDomains.indexOf(r.host)||te.Z.request.httpsDomains.push(r.host)}t.read(t.resourceInfo,{origin:"service"})})()}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t=N(N({},this.customParameters),this.customLayerParameters);for(const r in t)e[r.toLowerCase()]=t[r];return e}};function ve(e,t,r){const n=new Map;e.every(p=>null==p.id)&&(e=(0,Pe.d9)(e)).forEach((p,i)=>p.id=i);for(const p of e){const i=new z;i.read(p,t),-1===(null==r?void 0:r.indexOf(i.name))&&(i.visible=!1),n.set(i.id,i)}const s=[];for(const p of e){const i=n.get(p.id);if(null!=p.parentLayerId&&p.parentLayerId>=0){const y=n.get(p.parentLayerId);y.sublayers||(y.sublayers=new X.Z),y.sublayers.unshift(i)}else s.unshift(i)}return s}(0,a._)([(0,u.Cb)({readOnly:!0})],m.prototype,"allSublayers",void 0),(0,a._)([(0,u.Cb)({json:{type:Object,write:!0}})],m.prototype,"customParameters",void 0),(0,a._)([(0,u.Cb)({json:{type:Object,write:!0}})],m.prototype,"customLayerParameters",void 0),(0,a._)([(0,u.Cb)({type:String,json:{write:!0}})],m.prototype,"copyright",void 0),(0,a._)([(0,u.Cb)()],m.prototype,"description",void 0),(0,a._)([(0,u.Cb)({readOnly:!0})],m.prototype,"dimensions",void 0),(0,a._)([(0,u.Cb)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],m.prototype,"fullExtent",void 0),(0,a._)([(0,U.r)(["web-document","portal-item"],"fullExtent",["extent"])],m.prototype,"readFullExtentFromItemOrMap",null),(0,a._)([(0,Q.c)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],m.prototype,"writeFullExtent",null),(0,a._)([(0,u.Cb)()],m.prototype,"fullExtents",void 0),(0,a._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoFormat",void 0),(0,a._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoUrl",void 0),(0,a._)([(0,u.Cb)({type:String,json:{origins:{"web-document":{default:"image/png",type:q.jsonValues,read:{reader:q.read,source:"format"},write:{writer:q.write,target:"format"}}}}})],m.prototype,"imageFormat",void 0),(0,a._)([(0,U.r)("imageFormat",["supportedImageFormatTypes"])],m.prototype,"readImageFormat",null),(0,a._)([(0,u.Cb)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],m.prototype,"imageMaxHeight",void 0),(0,a._)([(0,u.Cb)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],m.prototype,"imageMaxWidth",void 0),(0,a._)([(0,u.Cb)()],m.prototype,"imageTransparency",void 0),(0,a._)([(0,u.Cb)(le.rn)],m.prototype,"legendEnabled",void 0),(0,a._)([(0,u.Cb)({type:["show","hide","hide-children"]})],m.prototype,"listMode",void 0),(0,a._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"mapUrl",void 0),(0,a._)([(0,u.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],m.prototype,"isReference",void 0),(0,a._)([(0,u.Cb)({type:["WMS"]})],m.prototype,"operationalLayerType",void 0),(0,a._)([(0,u.Cb)({type:R.Z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],m.prototype,"spatialReference",void 0),(0,a._)([(0,U.r)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],m.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,a._)([(0,u.Cb)({type:[se.z8],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],m.prototype,"spatialReferences",void 0),(0,a._)([(0,Q.c)(["web-document","portal-item"],"spatialReferences")],m.prototype,"writeSpatialReferences",null),(0,a._)([(0,u.Cb)({type:X.Z.ofType(z),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some(r=>{for(const n in r)if((0,Te.df)(r,n,null,t))return!0;return!1})}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],m.prototype,"sublayers",void 0),(0,a._)([(0,U.r)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],m.prototype,"readSublayersFromItemOrMap",null),(0,a._)([(0,U.r)("service","sublayers",["layers"])],m.prototype,"readSublayers",null),(0,a._)([(0,Q.c)("sublayers",{layers:{type:[z]},visibleLayers:{type:[String]}})],m.prototype,"writeSublayers",null),(0,a._)([(0,u.Cb)({json:{read:!1},readOnly:!0,value:"wms"})],m.prototype,"type",void 0),(0,a._)([(0,u.Cb)(le.HQ)],m.prototype,"url",void 0),(0,a._)([(0,u.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"version",void 0),m=(0,a._)([(0,ie.j)("esri.layers.WMSLayer")],m);const at=m}}]);
//# sourceMappingURL=9244.4a80eba54eb7d8cea7a1.js.map