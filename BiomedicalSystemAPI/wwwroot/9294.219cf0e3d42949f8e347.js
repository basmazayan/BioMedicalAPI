"use strict";(self.webpackChunkbio_medical=self.webpackChunkbio_medical||[]).push([[9294],{69294:(A,h,s)=>{s.r(h),s.d(h,{default:()=>R});var o=s(79076),v=s(50942),d=s(18502),E=s(32810),l=s(94911),c=(s(45072),s(30627),s(43365)),M=(s(55865),s(96410)),O=s(88445),p=s(2045),b=s(88945),P=s(46839),u=s(32617),L=s(41099),D=s(12059),C=s(34898),f=s(708);let t=class extends((0,b.h)((0,L.M)((0,P.q)((0,u.I)((0,C.Q)((0,D.K)((0,E.R)(p.Z)))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this)}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)}_writeLayers(i,e,a,_){const r=[];if(!i)return r;i.forEach(y=>{const n=(0,f.Nw)(y,_.webmap?_.webmap.getLayerJSONFromResourceInfo(y):null,_);(0,d.pC)(n)&&n.layerType&&r.push(n)}),e.layers=r}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return(0,v.GZ)(this,i=>{i(this.layers)})}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!(0,c.vw)(this).initialized)return;const a=this.layers;let _=a.find(r=>r.visible);switch(i){case"exclusive":a.length&&!_&&(_=a.getItemAt(0),_.visible=!0),this._turnOffOtherLayers(_);break;case"inherited":a.forEach(r=>{r.visible=e})}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach(e=>{e.visible=i})}_visibilityWatcher(i,e,a,_){const r=_;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};(0,o._)([(0,l.Cb)()],t.prototype,"fullExtent",void 0),(0,o._)([(0,l.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"layers",void 0),(0,o._)([(0,O.c)("layers")],t.prototype,"_writeLayers",null),(0,o._)([(0,l.Cb)({type:["GroupLayer"]})],t.prototype,"operationalLayerType",void 0),(0,o._)([(0,l.Cb)({json:{origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"portalItem",null),(0,o._)([(0,l.Cb)()],t.prototype,"spatialReference",void 0),(0,o._)([(0,l.Cb)({json:{read:!1},readOnly:!0,value:"group"})],t.prototype,"type",void 0),(0,o._)([(0,l.Cb)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"visibilityMode",null),t=(0,o._)([(0,M.j)("esri.layers.GroupLayer")],t);const R=t}}]);
//# sourceMappingURL=9294.219cf0e3d42949f8e347.js.map