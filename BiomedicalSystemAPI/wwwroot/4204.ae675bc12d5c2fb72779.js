"use strict";(self.webpackChunkbio_medical=self.webpackChunkbio_medical||[]).push([[4204],{94174:(P,h,s)=>{s.r(h),s.d(h,{default:()=>D});var _=s(49996),c=s(79076),n=s(99326),o=s(97750),l=s(94911),p=(s(45072),s(30627),s(55865),s(96410)),d=s(78081),E=s(84853),g=s(42302),v=s(96121);const u={remove(){},pause(){},resume(){}};let t=class extends((0,d.y)(v.Z)){initialize(){this.graphicsView=new g.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new E.Z(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(i){var r=this;return(0,_.Z)(function*(){return r.graphicsView?r.graphicsView.hitTest(i):null})()}fetchPopupFeatures(i){var r=this;return(0,_.Z)(function*(){if(r.graphicsView)return r.graphicsView.hitTest(i).filter(e=>!!e.popupTemplate)})()}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){var r;let e;return"number"==typeof i?e=[i]:i instanceof n.Z?e=[i.uid]:Array.isArray(i)&&i.length>0?e="number"==typeof i[0]?i:i.map(a=>a&&a.uid):o.Z.isCollection(i)&&i.length>0&&(e=i.map(a=>a&&a.uid).toArray()),e=null==(r=e)?void 0:r.filter(a=>null!=a),e.length?(this.graphicsView.addHighlight(e),{remove:()=>this.graphicsView.removeHighlight(e)}):u}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};(0,c._)([(0,l.Cb)()],t.prototype,"graphicsView",void 0),t=(0,c._)([(0,p.j)("esri.views.2d.layers.GraphicsLayerView2D")],t);const D=t}}]);
//# sourceMappingURL=4204.ae675bc12d5c2fb72779.js.map