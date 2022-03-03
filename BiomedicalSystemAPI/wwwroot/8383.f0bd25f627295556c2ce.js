"use strict";var H=Object.defineProperty,X=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,A=(g,c,l)=>c in g?H(g,c,{enumerable:!0,configurable:!0,writable:!0,value:l}):g[c]=l,W=(g,c)=>{for(var l in c||(c={}))N.call(c,l)&&A(g,l,c[l]);if(U)for(var l of U(c))k.call(c,l)&&A(g,l,c[l]);return g},Z=(g,c)=>X(g,Y(c));(self.webpackChunkbio_medical=self.webpackChunkbio_medical||[]).push([[8383],{48383:(g,c,l)=>{l.r(c),l.d(c,{default:()=>V});var v=l(49996),D=l(61414),j=l(18502),F=l(70279),P=l(35169),T=l(42187),x=l(19109),S=l(81091),O=l(79371),L=l(64740),R=l(45033),h=l(6035),B=l(62419),K=l(34309),Q=l(6663);const q=P.Zn,w={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:P.Zn},G={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function J(E){return(0,F.wp)(E)?null!=E.m:!!E.hasM}class V{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}load(e){var t=this;return(0,v.Z)(function*(){const s=[],{features:n}=e,d=t._inferLayerProperties(n,e.fields),o=e.fields||[],m=null!=e.hasM?e.hasM:d.hasM,_=null!=e.hasZ?e.hasZ:d.hasZ,u=!e.spatialReference&&!d.spatialReference,r=u?q:e.spatialReference||d.spatialReference,a=u?w:null,f=e.geometryType||d.geometryType,I=!f;let y=e.objectIdField||d.objectIdField,p=e.timeInfo;if(!I&&(u&&s.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!f))throw new D.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!y)throw new D.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(d.objectIdField&&y!==d.objectIdField&&(s.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${y}" doesn't match the field name "${d.objectIdField}", found in the provided fields`}),y=d.objectIdField),y&&!d.objectIdField){let i=null;o.some(b=>b.name===y&&(i=b,!0))?(i.type="esriFieldTypeOID",i.editable=!1,i.nullable=!1):o.unshift({alias:y,name:y,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const i of o){if(null==i.name&&(i.name=i.alias),null==i.alias&&(i.alias=i.name),!i.name)throw new D.Z("feature-layer:invalid-field-name","field name is missing",{field:i});if(i.name===y&&(i.type="esriFieldTypeOID"),-1===K.v.jsonValues.indexOf(i.type))throw new D.Z("feature-layer:invalid-field-type",`invalid type for field "${i.name}"`,{field:i})}const M={};for(const i of o)if("esriFieldTypeOID"!==i.type&&"esriFieldTypeGlobalID"!==i.type){const b=(0,Q.os)(i);void 0!==b&&(M[i.name]=b)}if(t._fieldsIndex=new B.Z(o),t._createDefaultAttributes=(0,R.Dm)(M,y),p){if(p.startTimeField){const i=t._fieldsIndex.get(p.startTimeField);i?(p.startTimeField=i.name,i.type="esriFieldTypeDate"):p.startTimeField=null}if(p.endTimeField){const i=t._fieldsIndex.get(p.endTimeField);i?(p.endTimeField=i.name,i.type="esriFieldTypeDate"):p.endTimeField=null}if(p.trackIdField){const i=t._fieldsIndex.get(p.trackIdField);i?p.trackIdField=i.name:(p.trackIdField=null,s.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:p}}))}p.startTimeField||p.endTimeField||(s.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:p}}),p=null)}const C={warnings:s,featureErrors:[],layerDefinition:Z(W({},G),{drawingInfo:(0,R.bU)(f),templates:(0,R.Hq)(M),extent:a,geometryType:f,objectIdField:y,fields:o,hasZ:!!_,hasM:!!m,timeInfo:p}),assignedObjectIds:{}};if(t._queryEngine=new L.Z({fields:o,geometryType:f,hasM:m,hasZ:_,objectIdField:y,spatialReference:r,featureStore:new S.Z({geometryType:f,hasM:m,hasZ:_}),timeInfo:p,cacheSpatialQueries:!0}),!n||!n.length)return t._nextObjectId=x.X,C;const z=(0,x.S)(y,n);return t._nextObjectId=z+1,yield(0,O._W)(n,r),t._loadInitialFeatures(C,n)})()}applyEdits(e){var t=this;return(0,v.Z)(function*(){const{spatialReference:s,geometryType:n}=t._queryEngine;return yield Promise.all([(0,h.b)(s,n),(0,O._W)(e.adds,s),(0,O._W)(e.updates,s)]),t._applyEdits(e)})()}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let s,n,d=null,o=null,m=null;for(const _ of e){const u=_.geometry;if(!(0,j.Wi)(u)&&(d||(d=(0,F.Ji)(u)),o||(o=u.spatialReference),null==s&&(E=u,s=(0,F.wp)(E)?null!=E.z:!!E.hasZ),null==n&&(n=J(u)),d&&o&&null!=s&&null!=n))break}var E;if(t&&t.length){let _=null;t.some(u=>{const r="esriFieldTypeOID"===u.type,a=!u.type&&u.name&&"objectid"===u.name.toLowerCase();return _=u,r||a})&&(m=_.name)}return{geometryType:d,spatialReference:o,objectIdField:m,hasM:n,hasZ:s}}_loadInitialFeatures(e,t){const{geometryType:s,hasM:n,hasZ:d,objectIdField:o,spatialReference:m,featureStore:_}=this._queryEngine,u=[];for(const r of t){if(null!=r.uid&&(e.assignedObjectIds[r.uid]=-1),r.geometry&&s!==(0,F.Ji)(r.geometry)){e.featureErrors.push((0,h.av)("Incorrect geometry type."));continue}const a=this._createDefaultAttributes(),f=(0,h.O0)(this._fieldsIndex,a,r.attributes,!0,e.warnings);f?e.featureErrors.push(f):(this._assignObjectId(a,r.attributes,!0),r.attributes=a,null!=r.uid&&(e.assignedObjectIds[r.uid]=r.attributes[o]),(0,j.pC)(r.geometry)&&(r.geometry=(0,O.iV)(r.geometry,r.geometry.spatialReference,m)),u.push(r))}if(_.addMany((0,T.Yn)([],u,s,d,n,o)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:r,end:a}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[r,a]}return e}_applyEdits(e){const{adds:t,updates:s,deletes:n}=e,d={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(d,t),s&&s.length&&this._applyUpdateEdits(d,s),n&&n.length){for(const o of n)d.deleteResults.push((0,h.d1)(o));this._queryEngine.featureStore.removeManyById(n)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:d}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:n,hasM:d,hasZ:o,objectIdField:m,spatialReference:_,featureStore:u}=this._queryEngine,r=[];for(const a of t){if(a.geometry&&n!==(0,F.Ji)(a.geometry)){s.push((0,h.av)("Incorrect geometry type."));continue}const f=this._createDefaultAttributes(),I=(0,h.O0)(this._fieldsIndex,f,a.attributes);if(I)s.push(I);else{if(this._assignObjectId(f,a.attributes),a.attributes=f,null!=a.uid){const y=a.attributes[m];e.uidToObjectId[a.uid]=y}(0,j.pC)(a.geometry)&&(a.geometry=(0,O.iV)((0,h.og)(a.geometry,_),a.geometry.spatialReference,_)),r.push(a),s.push((0,h.d1)(a.attributes[m]))}}u.addMany((0,T.Yn)([],r,n,o,d,m))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:n,hasZ:d,objectIdField:o,spatialReference:m,featureStore:_}=this._queryEngine;for(const u of t){const{attributes:r,geometry:a}=u,f=r&&r[o];if(null==f){e.push((0,h.av)(`Identifier field ${o} missing`));continue}if(!_.has(f)){e.push((0,h.av)(`Feature with object id ${f} missing`));continue}const I=(0,T.EI)(_.getFeature(f),s,d,n);if((0,j.pC)(a)){if(s!==(0,F.Ji)(a)){e.push((0,h.av)("Incorrect geometry type."));continue}I.geometry=(0,O.iV)((0,h.og)(a,m),a.spatialReference,m)}if(r){const y=(0,h.O0)(this._fieldsIndex,I.attributes,r);if(y){e.push(y);continue}}_.add((0,T.XA)(I,s,d,n,o)),e.push((0,h.d1)(f))}}_assignObjectId(e,t,s=!1){const n=this._queryEngine.objectIdField;s&&t&&isFinite(t[n])?e[n]=t[n]:e[n]=this._nextObjectId++}}}}]);
//# sourceMappingURL=8383.f0bd25f627295556c2ce.js.map