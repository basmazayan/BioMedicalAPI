"use strict";var N=Object.defineProperty,v=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,M=(y,_,e)=>_ in y?N(y,_,{enumerable:!0,configurable:!0,writable:!0,value:e}):y[_]=e,m=(y,_)=>{for(var e in _||(_={}))Q.call(_,e)&&M(y,e,_[e]);if(v)for(var e of v(_))z.call(_,e)&&M(y,e,_[e]);return y};(self.webpackChunkbio_medical=self.webpackChunkbio_medical||[]).push([[2106],{52106:(y,_,e)=>{e.r(_),e.d(_,{default:()=>J});var P=e(49996),s=e(79076),O=e(76925),D=e(30351),u=(e(85700),e(18502)),C=e(32810),h=e(7808),c=e(30164),l=e(94911),S=(e(45072),e(30627),e(55865),e(38650)),R=e(96410),L=e(70157),U=e(35169),j=e(2045),T=e(88945),f=e(46839),g=e(32617),I=e(77883),A=e(41099),E=e(46613),d=e(66760),B=e(41159),K=e(41001),W=e(85076),b=e(42247);const x=["atom","xml"],G={base:d.Z,key:"type",typeMap:{"simple-line":B.Z},errorContext:"symbol"},Z={base:d.Z,key:"type",typeMap:{"picture-marker":K.Z,"simple-marker":W.Z},errorContext:"symbol"},F={base:d.Z,key:"type",typeMap:{"simple-fill":b.Z},errorContext:"symbol"};let o=class extends((0,T.h)((0,I.Q)((0,f.q)((0,g.I)((0,A.M)((0,C.R)(j.Z))))))){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(t,r){return"string"==typeof t?m({url:t},r):t}readFeatureCollections(t,r){return r.featureCollection.layers.forEach(i=>{var n;const a=i.layerDefinition.drawingInfo.renderer.symbol;a&&"esriSFS"===a.type&&null!=(n=a.outline)&&n.style.includes("esriSFS")&&(a.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const t=this._get("title");return t&&"defaults"!==this.originOf("title")?t:this.url?(0,c.vt)(this.url,x)||"GeoRSS":t||""}set title(t){this._set("title",t)}load(t){const r=(0,u.pC)(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},t).catch(h.r9).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}hasDataChanged(){var t=this;return(0,P.Z)(function*(){const r=yield t._fetchService();return t.read(r,{origin:"service",ignoreDefaults:!0}),!0})()}_fetchService(t){var r=this;return(0,P.Z)(function*(){var i;const n=r.spatialReference,{data:a}=yield(0,D.default)(O.Z.geoRSSServiceUrl,{query:{url:r.url,refresh:!!r.loaded||void 0,outSR:(0,U.oR)(n)?void 0:null!=(i=n.wkid)?i:JSON.stringify(n)},signal:t});return a})()}_hasGeometry(t){var r,i;return null!=(r=null==(i=this.featureCollections)?void 0:i.some(n=>{var a,p;return(null==(a=n.featureSet)?void 0:a.geometryType)===t&&(null==(p=n.featureSet.features)?void 0:p.length)>0}))&&r}};(0,s._)([(0,l.Cb)()],o.prototype,"description",void 0),(0,s._)([(0,l.Cb)()],o.prototype,"featureCollections",void 0),(0,s._)([(0,S.r)("service","featureCollections",["featureCollection.layers"])],o.prototype,"readFeatureCollections",null),(0,s._)([(0,l.Cb)({type:L.Z,json:{name:"lookAtExtent"}})],o.prototype,"fullExtent",void 0),(0,s._)([(0,l.Cb)(E.id)],o.prototype,"id",void 0),(0,s._)([(0,l.Cb)(E.rn)],o.prototype,"legendEnabled",void 0),(0,s._)([(0,l.Cb)({types:G,json:{write:!0}})],o.prototype,"lineSymbol",void 0),(0,s._)([(0,l.Cb)({type:["show","hide"]})],o.prototype,"listMode",void 0),(0,s._)([(0,l.Cb)({types:Z,json:{write:!0}})],o.prototype,"pointSymbol",void 0),(0,s._)([(0,l.Cb)({types:F,json:{write:!0}})],o.prototype,"polygonSymbol",void 0),(0,s._)([(0,l.Cb)({type:["GeoRSS"]})],o.prototype,"operationalLayerType",void 0),(0,s._)([(0,l.Cb)(E.HQ)],o.prototype,"url",void 0),(0,s._)([(0,l.Cb)({json:{origins:{service:{read:{source:"name",reader:t=>t||void 0}}}}})],o.prototype,"title",null),(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],o.prototype,"type",void 0),o=(0,s._)([(0,R.j)("esri.layers.GeoRSSLayer")],o);const J=o}}]);
//# sourceMappingURL=2106.073f25bba4e8ab94b726.js.map